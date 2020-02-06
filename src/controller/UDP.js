import {
    createSocket
  } from 'dgram';

import {
    lookup
  } from 'dns';

import {
    ClientConnection
  } from '../Controller';

function is_ip(host)
{
  let tmp = host.split(".");

  if (tmp.length !== 4) return false;

  tmp = tmp.map(parseInt);

  return !tmp.some(function(v) { return v < 0 || v > 255; });
}

// TODO: handle IPv6
function lookup_address(options)
{
  const host = options.host;
  const port = parseInt(options.port);

  const o = { port: port };

  if (is_ip(host))
    return Promise.resolve(Object.assign({}, options, o, { address: host }));

  return new Promise(function(resolve, reject)
    {
      lookup(host, { family: 4 },
             function(err, address)
             {
              if (err) reject(err);
              else resolve(Object.assign({}, options, o, { address: address }));
             }
      );
    }
  );
}

/**
 * {@link ClientConnection} subclass which implements OCP.1 with UDP
 * transport.
 */
export class UDPConnection extends ClientConnection
{
  constructor(socket, options)
  {
    super();
    // allow us to batch 128 bytes max
    // Set this to a higher value, e.g. close to MTU
    // if you are sure that the device can handle it.
    this.batch = options.batch >= 0 ? options.batch : 128;
    this.options = options;
    this.socket = socket;
    this.delay = options.delay >= 0 ? options.delay : 5;
    this.retry_interval = options.retry_interval >= 0 ? options.retry_interval : 500;
    this.retry_count = options.retry_count >= 0 ? options.retry_count : 3;
    this.q = [];
    socket.on('message', (data, rinfo) => {
      if (rinfo.port !== this.options.port || rinfo.address !== this.options.address) return;
      try
      {
        this.read(data.buffer);
      }
      catch (err)
      {
        console.warning("Failed to parse incoming AES70 packet: %o", err);
      }
      if (this.inbuf !== null)
        this.close();
    });
    this.set_keepalive_interval(1);
  }

  get is_reliable()
  {
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
   * @returns {Promise<UDPConnection>} - The connection.
   */
  static connect(options)
  {
    return lookup_address(options)
      .then((options) => {
        return new Promise((resolve, reject) => {
          const socket = createSocket(options.type || 'udp4');
          const onerror = function(ev) {
            reject(ev);
          };
          socket.on('error', onerror);
          socket.bind(
            {
              exclusive: true,
            }, () => {
              socket.removeListener('error', onerror);
              resolve(new this(socket, options));
            }
          );
        });
      });
  }

  add_command_handle(id, return_signature, resolve, reject, cmd, buf)
  {
    const h = [ return_signature, resolve, reject, cmd, buf ];

    this.command_handles.set(id, h);

    if (this.retry_interval > 0)
    {
      let tid;
      let retry_count = this.retry_count;

      tid = setInterval(() => {
        if (h[4] === 0)
        {
          // response has been received.
          // mark it for removal but leave a tombstone
          // for another interval to reduce possible
          // race-conditions
          h[4] = 1;
          return;
        }
        else if (h[4] === 1)
        {
          // remove tombstone
          clearInterval(tid);
          this.command_handles.delete(id);
          return;
        }
        else
        {
          if (--retry_count < 0)
          {
            this.remove_command_handle(id)[2](new Error("Timeout"));
            return;
          }

          // resending same message
          this.send(h[4]);
        }
      }, this.retry_interval);
    }

    return h;
  }

  remove_command_handle(id)
  {
    const handles = this.command_handles;
    const h = handles.get(id);

    if (!h)
      throw new Error("Unknown handle in response: " + id);

    if (this.options.retry_interval > 0)
    {
      handles.delete(id);
    }
    else
    {
      h[4] = 0;
    }

    return h;
  }

  try_write()
  {
    if (!this.socket) return;
    const buf = this.q.shift();
    this.socket.send(Buffer.from(buf), this.options.port, this.options.address);
    if (this.q.length)
      setTimeout(this.try_write.bind(this), this.delay);
    super.write(buf);
  }

  write(buf)
  {
    if (!this.q.length)
      setImmediate(this.try_write.bind(this));
    this.q.push(buf);
  }

  /**
   * Closes the udp port.
   */
  close()
  {
    if (this.socket)
    {
      this.socket.close();
      this.socket = null;
    }
  }
}
