import { ClientConnection } from '../Controller';

export class WebSocketConnection extends ClientConnection
{
  constructor(ws)
  {
    super();
    ws.binaryType = "arraybuffer";
    ws.addEventListener('message', (ev) => {
      this.read(ev.data);
    });
    this.ws = ws;
  }

  write(buf)
  {
    this.ws.send(buf);
  }

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
        resolve(new this(ws));
      });
      ws.addEventListener('error', on_error);
    });
  }
}