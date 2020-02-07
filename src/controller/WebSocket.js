import { ClientConnection } from '../Controller';

/**
 * {@link ClientConnection} subclass which implements OCP.1 with WebSocket
 * transport.
 */
export class WebSocketConnection extends ClientConnection
{
  constructor(ws, options)
  {
    super(options);
    this.ws = ws;
    ws.binaryType = "arraybuffer";
    ws.addEventListener('message', (ev) => {
      this.read(ev.data);
    });
    ws.addEventListener('close', () => {
      this.emit('close');
    });
    ws.addEventListener('error', () => {
      this.emit('error');
    });
  }

  write(buf)
  {
    console.log('sending frame with length %d', buf.byteLength);
    this.ws.send(buf);
    super.write(buf);
  }

  /**
   * Connect to the given endpoint.
   *
   * @param {String} options.url - Endpoint WebSocket url.
   * @returns {Promise<WebSocketConnection>} - The connection.
   */
  static connect(options)
  {
    return new Promise((resolve, reject) => {
      let ws;
      if (typeof WebSocket !== 'undefined')
      {
        ws = new WebSocket(options.url);
      }
      else
      {
        const WebSocket = require('ws');
        ws = new WebSocket(options.url);
      }

      const on_error = function(e) {
        reject(e);
      };

      ws.addEventListener('open', () => {
        ws.removeEventListener('error', on_error);
        resolve(new this(ws, options));
      });
      ws.addEventListener('error', on_error);
    });
  }

  /**
   * Close the WebSocket.
   */
  close()
  {
    this.ws.close();
  }
}
