import { argv, exit } from 'process';
import { createServer, Socket } from 'net';
import { RemoteDevice } from '../src/index.js';
const TCPConnection = require('../lib/controller/TCP').TCPConnection;
const UDPConnection = require('../lib/controller/UDP').UDPConnection;
const WebSocketConnection = require('../lib/controller/WebSocket').WebSocketConnection;
const test = require('./device/test');
const url = require('url');

if (argv.length < 3)
{
  console.log('Usage: node device.js <ip>:<port> ws://<ip>:<port>');
  return;
}

const delay = 4;

const default_connect_options = {
  batch: 2048
};

function connect_options(o)
{
  return Object.assign({}, default_connect_options, o);
}

class Throttler {
  constructor(socket) {
    this.socket = socket;
    this.interval = null;
    this.sending = false;
    this.buffer = null;
    this.socket.on('error', () => this.close());
    this.socket.on('close', () => this.close());
  }

  write() {
    if (!this.buffer) return;

    let n = Math.max(1, Math.floor(Math.random()*this.buffer.length));

    this.socket.write(this.buffer.slice(0, n));

    if (n === this.buffer.length)
    {
      this.buffer = null;
      this.interval = null;
      this.sending = false;
      return;
    }

    this.buffer = this.buffer.slice(n);

    this.interval = setTimeout(() => this.write(), delay);
  }

  trigger_send() {
    if (this.sending) return;

    this.sending = true;

    if (this.socket.connecting) {
      this.socket.on('connect', () => {
        this.sending = false;
        this.trigger_send();
      });
      return;
    }

    this.write();
  }

  send(buffer) {
    if (this.buffer !== null) {
      this.buffer = Buffer.concat([this.buffer, buffer]);
    } else {
      this.buffer = buffer;
    }

    this.trigger_send();
  }

  close() {
    if (this.interval !== null)
      clearTimeout(this.interval);
    this.socket.end();
  }
}

class FragmentationConnection {
  constructor(a, b) {
    this.a = new Throttler(a);
    this.b = new Throttler(b);

    const onerror = (e) => {
      //console.warn(e);
      this.close();
    };

    a.on('close', () => this.close());
    b.on('close', () => this.close());
    a.on('error', onerror);
    b.on('error', onerror);

    a.on('data', (buffer) => {
      this.b.send(buffer);
    });
    b.on('data', (buffer) => {
      this.a.send(buffer);
    });
  }

  close() {
    try { this.a.close(); } catch (e) { console.error(e); }
    try { this.b.close(); } catch (e) { console.error(e); }
  }
}

class FragmentationProxy {
  constructor(target) {
    this.server = net.createServer((connection) => {
      const socket = new net.Socket();
      socket.connect(target);
      const fragmenter = new FragmentationConnection(connection, socket);
    });

    this.server.listen();
  }

  ready() {
    if (this.server.listening) return Promise.resolve(true);
    return new Promise((resolve, reject) => {
      this.server.on('listening', function() {
        this.removeListener('error', reject);
        resolve(true);
      });
      this.server.on('error', reject);
    });
  }

  address() {
    return this.server.address();
  }

  get_websocket_url() {
    return 'ws://localhost:' + this.address().port;
  }

  close() {
    this.server.close();
  }
}

function get_runner(get_device)
{
  const test_runner = new test.TestRunner(get_device);

  //test_runner.add(test.Test);
  const tests = require('./device/check_tree').concat(
    require('./device/property_changes'),
    require('./device/locking'),
    require('./device/keepalive'),
    require('./device/custom_class')
    );
  test_runner.add(...tests);

  return test_runner;
}

function timeout(n)
{
  return new Promise((resolve, reject) => setTimeout(resolve, n));
}

async function run_tests(type, target)
{
  const get_device = async () => {
    const connection = await type.connect(connect_options(target));
    const device = new RemoteDevice(connection);

    device.set_keepalive_interval(1);

    return device;
  };

  const test_runner = get_runner(get_device);

  try {
    let timed_out = false;
    const timeout_p = timeout(60*1000);
    const test_p = test_runner.run();

    await Promise.race([ timeout_p.then(() => { timed_out = true; }), test_p ]);

    if (timed_out)
    {
      test_runner.cleanup();
      test_p.catch((err) => {});
      console.error("Test times out.\n");
    }
  } catch (e) {
    throw e;
  }
}

async function run(targets)
{
  for (let i = 2; i < targets.length; i++)
  {
    const remote = targets[i];

    console.log("Testing device at %o:", remote);

    let connection;

    try {
      if (remote.startsWith("ws://"))
      {
        await run_tests(WebSocketConnection, { url: remote });

        console.log("");
        console.log("Testing device at %o (with packet fragmentation):", remote);

        const target = url.parse(remote);

        const fragmentation = new FragmentationProxy({
          host: target.hostname,
          port: parseInt(target.port),
        });

        await fragmentation.ready();

        await run_tests(WebSocketConnection, { url: fragmentation.get_websocket_url() });
        fragmentation.close();
      }
      else
      {
        const tmp = remote.split(":");

        if (tmp.length == 2)
          tmp.unshift("tcp");

        switch (tmp[0])
        {
        case "tcp":
          {
            const target = { host: tmp[1], port: parseInt(tmp[2]) };
            await run_tests(TCPConnection, target);

            console.log("");
            console.log("Testing device at %o (with packet fragmentation):", remote);

            const fragmentation = new FragmentationProxy(target);

            await fragmentation.ready();

            await run_tests(TCPConnection, fragmentation.address());
            fragmentation.close();
          }
          break;
        case "udp":
          await run_tests(UDPConnection, { host: tmp[1], port: parseInt(tmp[2]) });
          break;
        default:
          throw new Error("Unsupported connection type: "+remote);
        }
      }
    } catch (e) {
      console.log("Failed to connect to %o", remote);
      console.error(e);
      continue;
    }

    console.log("");
  }
}

run(argv).then(
    function() {
      console.log("DONE.");
      exit(0);
    },
    function(e) {
      console.error(e);
      exit(1);
    });

