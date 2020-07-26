import { Events } from './events.js';
import { decodeMessage } from './OCP1/decode_message.js';

function now() {
  try {
    return performance.now();
  } catch (e) {}

  return Date.now();
}

/**
 * Connection base class.
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

          let buf = new ArrayBuffer(len);
          let tmp = new Uint8Array(buf);

          for (let j = start, len = 0; j < i; j++)
          {
            tmp.set(new Uint8Array(out[j]), len);
            len += out[j].byteLength;
          }

          this.write(buf);

          start = i;
        }
      }

      out.length = 0;
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
      setTimeout(this.write_cb, 0);

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
  }
}

