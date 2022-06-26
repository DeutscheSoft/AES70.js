import { encodeMessageTo, messageHeaderSize } from './encode_message.js';

const pduTypeKeepAlive = 4;

export class MessageGenerator {
  constructor(batchSize, resultCallback) {
    if (!(batchSize <= 0xffffffff)) throw new TypeError('Invalid batch size.');
    this._pdus = [];
    this._batchSize = batchSize;
    this._resultCallback = resultCallback;
    this._currentSize = 0;
    this._currentCount = 0;
    this._lastMessageType = -1;
    this._flushScheduled = false;
    this._flushCb = () => {
      this._flushScheduled = false;
      if (this._pdus === null) return;
      this.flush();
    };
  }

  add(pdu) {
    const currentSize = this._currentSize;
    const encodedLength = pdu.encoded_length();
    const messageType = pdu.messageType;

    // Can we add to the current message?
    const combine =
      this._lastMessageType === messageType &&
      messageType !== pduTypeKeepAlive &&
      this._currentCount < 0xffff;
    let additionalSize = encodedLength;

    if (!combine) additionalSize += messageHeaderSize;

    // The resulting buffer would become too large, we flush now.
    if (currentSize && currentSize + additionalSize > this._batchSize) {
      this.flush();
      additionalSize = encodedLength + messageHeaderSize;
    }

    this._pdus.push(pdu);
    this._currentSize += additionalSize;

    if (combine) {
      this._currentCount++;
    } else {
      this._currentCount = 1;
    }

    /* Keepalive packets are never combined into one message. */
    this._lastMessageType = messageType;

    if (this._currentSize > this._batchSize) {
      this.flush();
    } else if (this._pdus.length === 1) {
      this.scheduleFlush();
    }
  }

  scheduleFlush() {
    if (this._flushScheduled) return;
    this._flushScheduled = true;
    Promise.resolve()
      .then(this._flushCb)
      .catch((err) => {
        console.error(err);
      });
  }

  flush() {
    if (!this._currentSize) return;

    const pdus = this._pdus;

    const buf = new ArrayBuffer(this._currentSize);
    const dst = new DataView(buf);

    const length = pdus.length;

    for (let i = 0, from = 0, pos = 0; i < length; i++) {
      const pdu = pdus[i];
      const messageType = pdu.messageType;

      if (
        i === length - 1 ||
        i + 1 - from === 0xffff ||
        messageType === pduTypeKeepAlive ||
        messageType !== pdus[i + 1].messageType
      ) {
        pos = encodeMessageTo(dst, pos, pdus, from, i + 1);
        from = i + 1;
      }
    }

    this._currentSize = 0;
    this._lastMessageType = -1;
    this._currentCount = 0;
    this._pdus.length = 0;

    this._resultCallback(buf);
  }

  dispose() {
    this._pdus = null;
  }
}
