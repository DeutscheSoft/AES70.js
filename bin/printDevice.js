#!/usr/bin/env node

import { argv, exit } from 'process';
import { RemoteDevice } from '../src/controller/remote_device.js';
import { TCPConnection } from '../src/controller/tcp_connection.js';
import { UDPConnection } from '../src/controller/udp_connection.js';
import { fetchDeviceContent } from '../src/controller/fetch_device_content.js';

function badArguments() {
  console.log('Usage: node print_tree.js [--json] [--udp] <ip> <port>');
  exit(1);
}

let jsonMode = false;
let useUdp = false;
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
    case '--udp':
      useUdp = true;
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

const Connection = useUdp ? UDPConnection : TCPConnection;

Connection.connect({
  host: host,
  port: port,
})
  .then(function (connection) {
    return new RemoteDevice(connection);
  })
  .then(printDevice);

async function printTree(content, prefix) {
  if (!prefix) prefix = [];

  for (const info of content) {
    const { Role, type, Members, ...Rest } = info;
    const path = prefix.concat([Role]);

    console.log('Path: %s', path.join('/'));

    for (const name in Rest) {
      console.log(' %s: %O ', name, Rest[name]);
    }

    if (Members) {
      printTree(Members, path);
    }
  }
}

function printTreeJson(content) {
  console.log(JSON.stringify(content, undefined, 2));
}

async function printDevice(device) {
  try {
    const content = await fetchDeviceContent(device);

    if (jsonMode) {
      printTreeJson(content);
    } else {
      printTree(content);
    }
  } finally {
    device.close();
  }
}
