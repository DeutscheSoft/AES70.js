/* eslint-env node */

import { createSocket } from 'dgram';
import { Buffer } from 'buffer';
import { performance } from 'perf_hooks';
import { encodeMessage } from '../OCP1/encode_message.js';
import { decodeMessage } from '../OCP1/decode_message.js';
import { KeepAlive } from '../OCP1/keepalive.js';

import { lookup } from 'dns';

import { ClientConnection } from './client_connection.js';

function delay(n) {
  return new Promise((resolve) => setTimeout(resolve, n));
}

async function waitForKeepalive(socket, options) {
  const waiter = new Promise((resolve, reject) => {
    let onMessage;

    onMessage = (data, rinfo) => {
      const pdus = [];
      let pos = 0;

      pos = decodeMessage(new DataView(data.buffer), 0, pdus);

      if (pdus.length !== 1)
        throw new Error('Expected keepalive response.');

      socket.off('message', onMessage);
      socket.off('error', reject);
      resolve(true);
    };

    socket.on('message', onMessage);
    socket.on('error', reject);
  });

  const msg = Buffer.from(encodeMessage(new KeepAlive(1000)));
  const t = 5 * (options.retry_interval || 250);

  for (let i = 0; i < 3; i++) {
    socket.send(msg);

    if (await Promise.race([ waiter, delay(t) ]))
      return;
  }

  throw new Error('Failed to connect.');
}

function is_ip(host) {
  let tmp = host.split('.');

  if (tmp.length !== 4) return false;

  tmp = tmp.map(parseInt);

  return !tmp.some(function (v) {
    return v < 0 || v > 255;
  });
}

// TODO: handle IPv6
function lookup_address(options) {
  const host = options.host;
  const port = parseInt(options.port);

  const o = { port: port };

  if (is_ip(host))
    return Promise.resolve(Object.assign({}, options, o, { address: host }));

  return new Promise(function (resolve, reject) {
    lookup(host, { family: 4 }, function (err, address) {
      if (err) reject(err);
      else resolve(Object.assign({}, options, o, { address: address }));
    });
  });
}

/**
 * :class:`ClientConnection` subclass which implements OCP.1 with UDP
 * transport.
 */
export class UDPConnection extends ClientConnection {
  constructor(socket, options) {
    // allow us to batch 128 bytes max
    // Set this to a higher value, e.g. close to MTU
    // if you are sure that the device can handle it.
    if (!(options.batch >= 0)) options.batch = 128;
    super(options);
    this.socket = socket;
    this.delay = options.delay >= 0 ? options.delay : 5;
    this.retry_interval =
      options.retry_interval >= 0 ? options.retry_interval : 500;
    this.retry_count = options.retry_count >= 0 ? options.retry_count : 3;
    this.q = [];
    socket.on('message', (data, rinfo) => {
      try {
        this.read(data.buffer);
      } catch (err) {
        console.warn('Failed to parse incoming AES70 packet: %o', err);
      }
      if (this.inbuf !== null) this.close();
    });
    this.set_keepalive_interval(1);
  }

  get is_reliable() {
    return false;
  }

  /**
   * Connect to the given endpoint.
   *
   * @param {String} options.host - hostname or ip
   * @param {number} options.port - port number
   * @param {number} [options.delay=10] - Delay in ms between individual packets.
   *    This can be a useful strategy when communicating with devices which
   *    cannot handle high packet rates.
   * @param {number} [options.retry_interval=250] - Delay in ms after which a
   *    command should be automatically re-sent if no response has been
   *    received, yet.
   * @param {number} [options.retry_count=3] - Number of times to retry sending
   *    commands. If no response has been received after all retries, the
   *    command will fail with an error.
   * @param {number} [options.batch=128] - Maximum number of bytes to send
   *    in an individual UDP packet. Note that AES70 messages which are larger
   *    than this limit are sent anyway. This only limits how many seperate
   *    messages are batched into a single packet.
   * @returns {Promise<UDPConnection>}
   *    The connection.
   */
  static connect(options) {
    return lookup_address(options).then((options) => {
      return new Promise((resolve, reject) => {
        const socket = createSocket(options.type || 'udp4');
        const onerror = function (ev) {
          reject(ev);
        };
        socket.on('error', onerror);
        socket.bind(
          {
            exclusive: true,
          },
          () => {
            socket.on('connect', async () => {
              try {
                await waitForKeepalive(socket, options);

                socket.removeListener('error', onerror);

                const connection = new this(socket, options);
                resolve(connection);
              } catch (err) {
                reject(err);
              }
            });
            socket.connect(options.port, options.host);
          }
        );
      });
    });
  }

  add_command_handle(id, return_signature, resolve, reject, cmd, buf) {
    const h = [return_signature, resolve, reject, cmd, buf];

    this.command_handles.set(id, h);

    if (this.retry_interval > 0) {
      let tid = -1;
      let retry_count = this.retry_count;

      tid = setInterval(() => {
        // connection has been destroyed.
        if (this.command_handles === null) {
          clearInterval(tid);
          return;
        }
        if (h[4] === 0) {
          // response has been received.
          // mark it for removal but leave a tombstone
          // for another interval to reduce possible
          // race-conditions
          h[4] = 1;
          return;
        } else if (h[4] === 1) {
          // remove tombstone
          clearInterval(tid);
          this.command_handles.delete(id);
          return;
        } else {
          if (--retry_count < 0) {
            try {
              this.remove_command_handle(id)[2](new Error('Timeout'));
            } catch (err) {
              // ignore error
            }
            return;
          }

          // resending same message
          this.send(h[4]);
        }
      }, this.retry_interval);
    }

    return h;
  }

  remove_command_handle(id) {
    const handles = this.command_handles;
    const h = handles.get(id);

    if (!h) throw new Error('Unknown handle in response: ' + id);

    if (this.options.retry_interval > 0) {
      handles.delete(id);
    } else {
      h[4] = 0;
    }

    return h;
  }

  try_write() {
    if (!this.socket) return;
    const q = this.q;
    const buf = q.shift();
    this.socket.send(Buffer.from(buf));
    if (q.length) setTimeout(this.try_write.bind(this), this.delay);
    super.write(buf);
  }

  write(buf) {
    const q = this.q;
    if (!q.length)
      Promise.resolve().then(this.try_write.bind(this));
    q.push(buf);
    if (false && this.tx_idle_time() > this.delay)
      this.try_write();
  }

  /**
   * Closes the udp port.
   */
  close() {
    if (this.socket) {
      this.socket.close();
      this.socket = null;
    }
  }

  _now() {
    return performance.now();
  }
}
