const process = require('process');
const RemoteDevice = require('../lib/Controller').RemoteDevice;
const TCPConnection = require('../lib/controller/TCP').TCPConnection;
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
        const host = remote.split(":")[0];
        const port = parseInt(remote.split(":")[1]);
        connection = await TCPConnection.connect({ host: host, port: port });
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

