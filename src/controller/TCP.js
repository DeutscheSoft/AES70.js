import {
    Socket
  } from 'net';

import {
    ClientConnection
  } from '../Controller';

export class TCPConnection extends ClientConnection
{
  constructor(socket)
  {
    super();
    this.socket = socket;
    socket.on('data', (data) => {
      this.read(data.buffer);
    });
    socket.on('error', (e) => {
      this.emit('error', e);
    });
    socket.on('close', () => {
      this.emit('close');
    });
  }

  static connect(options)
  {
    return new Promise((resolve, reject) => {
      const socket = new Socket();
      const onerror = function(ev) {
        reject(ev);
      };
      socket.on('error', onerror);
      socket.on('timeout', onerror);
      socket.on('connect', () => {
        socket.removeListener('error', onerror);
        socket.removeListener('timeout', onerror);
        resolve(new this(socket));
      });
      socket.connect(options);
    });
  }

  write(buf)
  {
    this.socket.write(Buffer.from(buf), 'binary');
  }

  close()
  {
    super.close();
    this.socket.end();
  }
}
