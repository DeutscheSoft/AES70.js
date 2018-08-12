const process = require('process');
const RemoteDevice = require('../lib/Controller').RemoteDevice;
const TCPConnection = require('../lib/controller/TCP').TCPConnection;
const UDPConnection = require('../lib/controller/UDP').UDPConnection;
const WebSocketConnection = require('../lib/controller/WebSocket').WebSocketConnection;
const test = require('./device/test');

if (process.argv.length < 3)
{
  console.log('Usage: node device.js <ip>:<port> ws://<ip>:<port>');
  return;
}

function get_runner(device)
{
  const test_runner = new test.TestRunner(device);
  
  test_runner.add(test.Test);
  test_runner.add(require('./device/check_tree'));
  test_runner.add(require('./device/property_changes'));

  return test_runner;
}

async function run(targets)
{
  for (let i = 2; i < targets.length; i++)
  {
    const remote = targets[i];
    let connection;

    try {
      if (remote.startsWith("ws://"))
      {
        connection = await WebSocketConnection.connect({ url: remote });
      }
      else
      {
        const tmp = remote.split(":");

        if (tmp.length == 2)
          tmp.unshift("tcp");

        switch (tmp[0])
        {
        case "tcp":
          connection = await TCPConnection.connect({ host: tmp[1], port: tmp[2] });
          break;
        case "udp":
          connection = await UDPConnection.connect({ host: tmp[1], port: tmp[2] });
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

    console.log("Testing device at %o:", remote);

    const device = new RemoteDevice(connection);
    const test_runner = get_runner(device);

    await test_runner.run();

    console.log("");
  }
}

run(process.argv).then(
    function() {
      console.log("DONE.");
      process.exit(0);
    },
    function(e) {
      console.error(e);
      process.exit(1);
    });

