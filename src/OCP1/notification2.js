import { PDU } from './pdu.js';
import { OcaEvent } from './OcaEvent.js';
import { EncodedArguments } from './encoded_arguments.js';

/**
 * Notification packet.
 */
export class Notification2 extends PDU {
  constructor(event, exception, data) {
    super();
    this.event = event;
    this.exception = !!exception;
    this.parameters = data || null;
  }

  static get messageType() {
    return 5;
  }

  encode_to(dst, pos) {
    dst.setUint32(pos, this.encoded_length());
    pos += 4;
    dst.setUint32(pos, this.event.EmitterONo);
    pos += 4;
    dst.setUint16(pos, this.event.EventID.DefLevel);
    pos += 2;
    dst.setUint16(pos, this.event.EventID.EventIndex);
    pos += 2;
    dst.setUint8(pos, this.exception ? 1 : 0);
    pos += 1;
    if (this.parameters) {
      if (this.parameters instanceof EncodedArguments) {
        pos = this.parameters.encodeTo(dst, pos);
      } else {
        new Uint8Array(dst.buffer).set(
          new Uint8Array(this.parameters),
          dst.byteOffset + pos
        );
        pos += this.parameters.byteLength;
      }
    }
    return pos;
  }

  encoded_length() {
    return 13 + (this.parameters ? this.parameters.byteLength : 0);
  }

  decode_from(data, pos, data_len) {
    let len = data.getUint32(pos);
    pos += 4;

    let event;

    [pos, event] = OcaEvent.decodeFrom(data, pos);

    this.event = event;
    this.exception = data.getUint8(pos++) ? true : false;
    len -= 13;
    if (len < 0) throw new Error('Bad Notification Length.');
    if (len > 0) {
      this.parameters = data.buffer.slice(
        data.byteOffset + pos,
        data.byteOffset + pos + len
      );
      pos += len;
    }
    return pos;
  }
}
