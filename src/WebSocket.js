import { ClientConnection } from './OCA.js';

export class WebSocketConnection extends ClientConnection
{
  constructor(ws)
  {
    super();
    ws.binaryType = "arraybuffer";
    ws.onmessage = (ev) => {
      this.read(ev.data);
    };
    this.ws = ws;
  }

  write(buf)
  {
    this.ws.send(buf);
  }
}
