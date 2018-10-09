import {
    Socket
  } from 'net';

import {
    ClientConnection
  } from '../Controller';

/**
 * {@link ClientConnection} subclass which implements OCP.1 with TCP
 * transport.
 */
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

    const cleanup = e => {
      this.socket.destroy();
    };

    this.on('close', cleanup);
    this.on('error', cleanup);
  }

  /**
   * Connect to the given endpoint.
   *
   * @param {String} options.host - hostname or ip
   * @param {number} options.port - port
   * @returns {Promise<TCPConnection>} - The connection.
   */
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

  /**
   * Close the TCP connection.
   */
  close()
  {
    super.close();
    this.socket.destroy();
    this.emit('close');
  }
}
