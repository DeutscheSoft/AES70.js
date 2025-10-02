import { Events } from './events.js';
import { decodeMessage } from './OCP1/decode_message.js';
import { KeepAlive } from './OCP1/keepalive.js';
import { MessageGenerator } from './OCP1/message_generator.js';

/**
 * Connection base class. It extends :class:`Events` and defines two events:
 *
 * - ``close`` is emitted when this connection has been closed. This event has
 *   no parameters.
 * - ``error`` is emitted when this connection has been closed with an error.
 *   This event emits the error object as a single parameter.
 *
 * @param {object} options
 *      The options.
 * @param {number} [options.batch=65536]
 *      AES70 messages are batched into single write calls up until this limit.
 *      This can improve network performance and reduce packet overhead when
 *      many small commands are send at the same time. This often happens e.g.
 *      after initially connecting to a device and the device tree is
 *      enumerated. Defaults to 64 kilobytes by default but is overwritten e.g.
 *      by :class:`UDPConnection`.
 */
export class Connection extends Events {
  constructor(options) {
    if (!options) options = {};
    super();
    const now = this._now();
    this.options = options;
    const batchSize = options.batch >= 0 ? options.batch : 64 * 1024;
    this._message_generator = new MessageGenerator(batchSize, (buf) =>
      this.write(buf)
    );
    this.inbuf = null;
    this.inpos = 0;
    this.last_rx_time = now;
    this.last_tx_time = now;
    this.rx_bytes = 0;
    this.tx_bytes = 0;
    this.keepalive_interval = -1;
    this._keepalive_interval_id = null;
    this._closed = false;
    this.on('close', () => {
      if (this._closed) return;
      this._closed = true;
      this.cleanup();
    });
    this.on('error', (e) => {
      if (this._closed) return;
      this._closed = true;
      this.emit('close');
      this.cleanup();
    });
  }

  get is_reliable() {
    return true;
  }

  send(pdu) {
    if (this.is_closed()) throw new Error('Connection is closed.');
    this._message_generator.add(pdu);
  }

  tx_idle_time() {
    return this._now() - this.last_tx_time;
  }

  rx_idle_time() {
    return this._now() - this.last_rx_time;
  }

  read(buf) {
    this.rx_bytes += buf.byteLength;
    this.last_rx_time = this._now();

    if (this.inbuf) {
      const len = this.inbuf.byteLength - this.inpos;
      const tmp = new Uint8Array(new ArrayBuffer(len + buf.byteLength));

      tmp.set(new Uint8Array(this.inbuf, this.inpos));
      tmp.set(new Uint8Array(buf), len);

      this.inbuf = null;
      this.inpos = 0;

      buf = tmp.buffer;
    }

    let pos = 0;
    const view = new DataView(buf);

    try {
      do {
        const ret = [];
        const len = decodeMessage(view, pos, ret);
        if (len == -1) {
          this.inbuf = buf;
          this.inpos = pos;
          break;
        }
        pos = len;
        this.incoming(ret);
      } while (pos < buf.byteLength);
    } catch (e) {
      // If this is a reliably connection we close it. If not,
      // we print decoding errors and throw away the packet.
      if (this.is_reliable) {
        this.emit('error', e);
        return;
      } else {
        console.error(e);
      }
    }

    this._check_keepalive();
  }

  incoming(a) {}

  write(buf) {
    this.last_tx_time = this._now();
    this.tx_bytes += buf.byteLength;
  }

  is_closed() {
    return this._message_generator === null;
  }

  /**
   * Closes the connection. Overloaded by connection subclasses.
   */
  close() {
    if (this.is_closed()) return;
    this.emit('close');
  }

  error(err) {
    if (this.is_closed()) return;
    this.emit('error', err);
  }

  cleanup() {
    if (this.is_closed()) throw new Error('cleanup() called twice.');

    // disable keepalive
    this.set_keepalive_interval(0);
    this._message_generator.dispose();
    this._message_generator = null;
    this.removeAllEventListeners();
  }

  _check_keepalive() {
    if (!(this.keepalive_interval > 0)) return;

    const t = this.keepalive_interval;

    if (this.rx_idle_time() > t * 3) {
      this.emit('timeout');
      this.error(new Error('Keepalive timeout.'));
    } else if (this.tx_idle_time() > t * 0.75) {
      /* Try to flush buffers before actually sending out anything. */
      this.flush();
      if (this.tx_idle_time() > t * 0.75) this.send(new KeepAlive(t));
    }
  }

  /**
   * Flush write buffers. This are usually PDUs or may also be unwritten
   * buffers.
   */
  flush() {
    this._message_generator.flush();
  }

  /**
   * Set the keepalive interval. Setting the keepalive interval to a
   * positive number ``N`` will make sure to send some packet (possibly a
   * keepalive command) at ``N`` seconds.
   *
   * @param {number} seconds
   *    Keepalive interval in seconds.
   */
  set_keepalive_interval(seconds) {
    const t = seconds * 1000;

    if (this._keepalive_interval_id !== null) {
      clearInterval(this._keepalive_interval_id);
      this._keepalive_interval_id = null;
    }

    this.keepalive_interval = t;

    // Notify the other side about our new keepalive
    if (this.is_closed()) return;

    this.send(new KeepAlive(t));

    if (!(t > 0)) return;

    // we check twice as often to make sure we stay within the timers
    this._keepalive_interval_id = setInterval(() => {
      this._check_keepalive();
    }, t / 2);
  }
}
