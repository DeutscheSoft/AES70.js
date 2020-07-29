#!/usr/bin/env node

const process = require('process');
const RemoteDevice = require('../lib/Controller').RemoteDevice;
const TCPConnection = require('../lib/controller/TCP').TCPConnection;
const OCC = require('../lib/controller/ControlClasses');

if (process.argv.length < 4)
{
  console.log('Usage: node print_tree.js <ip> <port>');
  process.exit(1);
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
  .then(printDevice);

function delay(n)
{
  return new Promise(function(resolve, reject) {
    setTimeout(resolve, n);
  });
}

async function printTree(objects, prefix)
{
  if (!prefix) prefix = [];

  let lastPath;

  for (let i = 0; i < objects.length; i++)
  {
    const o = objects[i];

    if (Array.isArray(o)) 
    {
      await printTree(o, lastPath);
      continue;
    }

    const roleName = await o.GetRole();

    const path = prefix.concat([ roleName ]);

    lastPath = path;

    console.log('Path: %s', path.join(' / '));

    o.get_properties().forEach(async (p) => {
      if (p.name === 'Members') return;
      const getter = p.getter(o);
      if (!getter) return;
      try {
        const val = await getter();
        console.log(" %s: %O ", p.name, val);
      } catch (e) {
        console.log(" %s: n/a ", p.name);
      }
    });
  }
}

async function printDevice(device)
{
  try {
    await printTree(await device.GetDeviceTree());
    await printTree([
      device.DeviceManager,
      device.SecurityManager,
      device.FirmwareManager,
      device.SubscriptionManager,
      device.PowerManager,
      device.NetworkManager,
      device.MediaClockManager,
      device.LibraryManager,
      device.AudioProcessingManager,
      device.DeviceTimeManager,
      device.TaskManager,
      device.CodingManager,
      device.DiagnosticManager
    ]);
    process.exit(0);
  } catch (error) {
    console.error('Failure: %o', error);
    process.exit(1);
  }
}
