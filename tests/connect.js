const process = require('process');
const RemoteDevice = require('../lib/Controller').RemoteDevice;
const TCPConnection = require('../lib/controller/TCP').TCPConnection;

if (process.argv.length < 4)
{
  console.log('Usage: node connect.js <ip> <port>');
  return;
}

const host = process.argv[2];
const port = parseInt(process.argv[3]);

TCPConnection.connect({
    host: host,
    port: port,
  })
  .then(function(connection) {
    return new RemoteDevice(connection);
  })
  .then(printDeviceTree);

function printDeviceTree(device)
{
  device.discover_all().then(
    function(o) {
      console.log("resolved", o);
    },
    function(err) {
      console.error(err);
    });
}
