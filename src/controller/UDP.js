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
  const tmp = host.split(".");

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

export class UDPConnection extends ClientConnection
{
  constructor(socket, options)
  {
    super();
    this.options = options;
    this.socket = socket;
    socket.on('message', (data, rinfo) => {
      if (rinfo.port !== this.options.port || rinfo.address !== this.options.address) return;
      this.read(data.buffer);
      if (this.inbuf !== null)
        this.close();
    });
  }

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

  write(buf)
  {
    this.socket.send(Buffer.from(buf), this.options.port, this.options.address);
  }
}
