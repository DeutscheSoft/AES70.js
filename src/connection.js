import { Events } from './events.js';
import { decodeMessage } from './OCP1/decode_message.js';
import { encodeMessage } from './OCP1/encode_message.js';
import { KeepAlive } from './OCP1/keepalive.js';

function now() {
  try {
    return performance.now();
  } catch (e) {
    // ignore error
  }

  return Date.now();
}

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
export class Connection extends Events
{
  constructor(options)
  {
    if (!options) options = {};
    super();
    this.options = options;
    this.batch = options.batch >= 0 ? options.batch : (64 * 1024);
    this.inbuf = null;
    this.inpos = 0;
    this.last_rx_time = now();
    this.last_tx_time = now();
    this.keepalive_interval = -1;
    this._keepalive_interval_id = null;
    this.outbuf = [];
    const cleanup = () => {
      this.removeEventListener('close', cleanup);
      this.removeEventListener('error', cleanup);
      this.cleanup();
    };
    this.on('close', cleanup);
    this.on('error', cleanup);
    this.write_cb = () => {
      if (this.is_closed()) return;
      const out = this.outbuf;

      if (!out.length) return;
      if (out.length == 1)
      {
        this.write(out[0]);
      }
      else
      {
        for (let start = 0; start < out.length;)
        {
          let i;
          let len;

          for (i = start, len = 0; i < out.length && (!len || len + out[i].byteLength < this.batch); i++)
              len += out[i].byteLength;

          const buf = new ArrayBuffer(len);
          const a8 = new Uint8Array(buf);

          for (let j = start, len = 0; j < i; j++)
          {
            a8.set(new Uint8Array(out[j]), len);
            len += out[j].byteLength;
          }

          this.write(buf);

          start = i;
        }
      }

      out.length = 0;

      this._check_keepalive();
    };
  }

  get is_reliable()
  {
    return true;
  }

  send(buf)
  {
    if (this.is_closed()) throw new Error("Connection is closed.");
    if (!this.outbuf.length)
      Promise.resolve(0).then(this.write_cb);

    this.outbuf.push(buf);
  }

  allocate(len)
  {
    const buf = new ArrayBuffer(len);

    this.send(buf);

    return buf;
  }

  tx_idle_time()
  {
    return now() - this.last_tx_time;
  }

  rx_idle_time()
  {
    return now() - this.last_tx_time;
  }

  read(buf) {
    this.last_rx_time = now();

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
      console.error(e);
      if (this.is_reliable)
      {
        console.error("Error when handling incoming data. Closing connection.");
        this.close();
      }
    }

    this._check_keepalive();
  }

  incoming(a)
  {
  }

  write(buf)
  {
    this.last_tx_time = now();
  }

  is_closed()
  {
    return this.write_cb === null;
  }

  /**
   * Closes the connection. Overloaded by connection subclasses.
   */
  close()
  {
    this.outbuf.length = 0;
    this.emit('close');
  }

  cleanup()
  {
    if (this.is_closed()) throw new Error("cleanup() called twice.");
    this.write_cb = null;

    // disable keepalive
    this.set_keepalive_interval(0);
  }

  _check_keepalive()
  {
    if (!(this.keepalive_interval > 0))
      return;

    const t = this.keepalive_interval;

    if (this.rx_idle_time() > t * 3)
    {
      this.emit('timeout');
      this.emit('close');
      this.close();
    }
    else if (this.tx_idle_time() > t)
    {
      this.send(encodeMessage(new KeepAlive(t)));
    }
  }

  /**
   * Set the keepalive interval. Setting the keepalive interval to a
   * positive number ``N`` will make sure to send some packet (possibly a
   * keepalive command) at ``N`` seconds.
   *
   * @param {number} seconds
   *    Keepalive interval in seconds.
   */
  set_keepalive_interval(seconds)
  {
    const t = seconds * 1000;

    if (this._keepalive_interval_id !== null) {
      clearInterval(this._keepalive_interval_id);
      this._keepalive_interval_id = null;
    }

    // we check twice as often to make sure we stay within the timers
    this.keepalive_interval = t;

    if (!(t > 0))
      return;

    this._keepalive_interval_id = setInterval(() => {
      this._check_keepalive();
    }, t / 2);
  }
}

