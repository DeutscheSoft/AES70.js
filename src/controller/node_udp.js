/* eslint-env node */

import { createSocket } from 'dgram';
import { isIP } from 'net';
import { lookup } from 'dns';

function lookup_address(host) {
  if (isIP(host)) return Promise.resolve(host);

  return new Promise((resolve, reject) => {
    lookup(host, { family: 4 }, (err, address) => {
      if (err) reject(err);
      else resolve(address);
    });
  });
}

export class NodeUDP {
  get onmessage() {
    return this._onmessage;
  }

  set onmessage(cb) {
    if (this._onmessage && cb)
      throw new Error('Cannot install more than one message callback.');

    this._onmessage = cb;
    this._notifyMessage();
  }

  get onerror() {
    return this._onerror;
  }

  set onerror(cb) {
    if (this._onerror && cb)
      throw new Error('Cannot install more than one error callback.');

    this._onerror = cb;
    this._notifyError();
  }

  _notifyMessage() {
    const onmessage = this.onmessage;

    if (!onmessage) return;

    const inbuf = this._inbuf;

    if (!inbuf.length) return;

    this._inbuf = [];

    for (let i = 0; i < inbuf.length; i++) {
      onmessage(inbuf[i].buffer);
    }
  }

  _notifyError() {
    const onerror = this.onerror;

    if (!onerror) return;

    const error = this._error;

    if (!error) return;
    this._error = null;

    onerror(error);
  }

  send(buf) {
    this.socket.send(Buffer.from(buf));
  }

  receiveMessage(timeout) {
    return new Promise((resolve, reject) => {
      if (this._error) {
        reject(this._error);
      } else if (this._inbuf.length) {
        resolve(this._inbuf.shift());
      } else {
        this.onmessage = (msg) => {
          this.onmessage = null;
          this.onerror = null;
          resolve(msg);
        };
        this.onerror = (err) => {
          this.onmessage = null;
          this.onerror = null;
          reject(err);
        };
      }
    });
  }

  close() {
    this.socket.close();
    this.socket = null;
  }

  constructor(socket) {
    this._inbuf = [];
    this._onmessage = null;
    this._onerror = null;
    this.socket = socket;
    socket.on('message', (msg, rinfo) => {
      this._inbuf.push(msg);
      this._notifyMessage();
    });
    socket.on('error', (err) => {
      this._error = err;
      this._notifyError(err);
    });
  }

  static connect(host, port, type) {
    return lookup_address(host).then((ip) => {
      return new Promise((resolve, reject) => {
        const socket = createSocket(type || 'udp4');
        const onerror = function (ev) {
          reject(ev);
        };
        socket.on('error', onerror);
        socket.bind(
          {
            exclusive: true,
          },
          () => {
            socket.on('connect', () => {
              resolve(new this(socket));
              socket.removeListener('error', onerror);
            });
            socket.connect(port, host);
          }
        );
      });
    });
  }
}
