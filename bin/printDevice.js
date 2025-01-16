#!/usr/bin/env node

import { argv, exit } from 'process';
import { RemoteDevice } from '../src/controller/remote_device.js';
import { TCPConnection } from '../src/controller/tcp_connection.js';
import { OcaBlock } from '../src/controller/ControlClasses/OcaBlock.js';
import { Arguments } from '../src/controller/arguments.js';

function badArguments() {
  console.log('Usage: node print_tree.js [--json] <ip> <port>');
  exit(1);
}

let jsonMode = false;
const rest = [];

argv.slice(2).forEach((option) => {
  switch (option) {
    case '--json':
      jsonMode = true;
      break;
    case '-h':
    case '--help':
      badArguments();
      break;
    default:
      rest.push(option);
      break;
  }
});

if (rest.length < 2) badArguments();

const host = rest[0];
const port = parseInt(rest[1]);

if (!(port > 0 && port <= 0xffff)) badArguments();

function formatPropertyValue(name, value) {
  if (typeof value === 'object') {
    if (value instanceof Arguments) {
      return {
        [name]: value.item(0),
        ['min' + name]: value.item(1),
        ['max' + name]: value.item(2),
      };
    } else if (value !== null && value.isEnum) {
      value = value.name;
    }
  }

  return {
    [name]: value,
  };
}

TCPConnection.connect({
  host: host,
  port: port,
})
  .then(function (connection) {
    return new RemoteDevice(connection);
  })
  .then(printDevice);

async function fetchObjectInfo(o) {
  const info = {
    type: o.ClassName,
  };

  const classIdentification = await o.GetClassIdentification();

  Object.assign(info, classIdentification);

  await Promise.all(
    o.get_properties().forEach(async (p) => {
      const { name } = p;
      if (name === 'ClassID' || name === 'ClassVersion') return;
      if (o instanceof OcaBlock && name === 'Members') return;
      const getter = p.getter(o);
      if (!getter) return;
      try {
        const currentValue = await getter();

        Object.assign(info, formatPropertyValue(name, currentValue));
      } catch (err) {
        if (err.status != 8)
          console.error(
            'Fetching property',
            o.ClassName,
            p.name,
            'failed:',
            err
          );
      }
    })
  );

  return info;
}

async function printTree(objects, prefix) {
  if (!prefix) prefix = [];

  let lastPath;

  for (let i = 0; i < objects.length; i++) {
    const o = objects[i];

    if (Array.isArray(o)) {
      await printTree(o, lastPath);
      continue;
    }

    const roleName = await o.GetRole();

    const path = prefix.concat([roleName]);

    lastPath = path;

    console.log('Path: %s', path.join('/'));

    const info = await fetchObjectInfo(o);

    for (const name in info) {
      console.log(' %s: %O ', name, info[name]);
    }
  }
}

async function managerExists(manager) {
  try {
    await manager.GetClassIdentification();
    return true;
  } catch (err) {
    if (err.status != 5) {
      throw err;
    }

    return false;
  }
}

async function generateJson(objects) {
  const result = [];

  for (let i = 0; i < objects.length; i++) {
    const o = objects[i];

    if (Array.isArray(o)) {
      await printTreeJson(o, lastPath);
      continue;
    }

    const info = await fetchObjectInfo(o);

    if (o instanceof OcaBlock) {
      const members = objects[i + 1];
      if (!Array.isArray(members)) {
        throw new Error('Member missing for OcaBlock.');
      }
      info.Members = await generateJson(members);
      i++;
    }

    result.push(info);
  }

  return result;
}

async function printTreeJson(objects) {
  console.log(JSON.stringify(await generateJson(objects), undefined, 2));
}

async function printDevice(device) {
  const print = jsonMode ? printTreeJson : printTree;
  try {
    const objects = await device.GetDeviceTree();
    const managers = [
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
      device.DiagnosticManager,
    ];

    for (const manager of managers) {
      if (await managerExists(manager)) objects.push(manager);
    }

    await print(objects);
    exit(0);
  } catch (error) {
    if (error.status) {
      console.error('Failure: %s', error.status);
    } else {
      console.error('Failure: %o', error);
    }
    exit(1);
  }
}
