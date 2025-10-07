# Introduction

AES70.js is a JavaScript implementation of the AES70 protocol.
Open Control Architecture (OCA aka AES70) is a control protocol aimed primarily at
audio applications. AES70 is developed by the [OCA Alliance](http://ocaalliance.com/)
and standardized through the [AES](http://www.aes.org/publications/standards/search.cfm?docID=101).
Currently, AES70.js only implements the client-side of AES70 and can not
be used to build AES70 devices.

# Contents

- [AES70](#aes70)
- [Basics](#basics)
- [Installation](#installation)
- [Getting started](#getting-started)
- [License](#license)

# AES70

AES70 is a RPC protocol with event subscription capabilities.
An AES70 client (aka. controller) can connect to an AES70 server (aka device).
An AES70 device is represented by a tree of objects, which the controller can call
methods in. AES70 classes define events, which a controller can subscribe to.

The protocol definition contains a series of pre-defined classes, which can
be used to represent audio devices. AES70 allows the creation of custom subclasses,
however, in order for two AES70 implementations to interoperate fully, both sides
need to implement all classes involved.

All classes and datatypes defined in the
current AES70 Standard are published in the form of an XMI document. This XMI
document has been used to generate the class structure and interfaces which
are part of this library. At this point AES70.js supports the version AES70-2024.

# Basics

Classes in AES70 have methods, properties and events. Properties are accessible
via getter and setter methods and clients are notified of their changes by
events. All methods defined inside a AES70 class are available on the
corresponding AES70.js implementation. In AES70.js all methods return Promises,
which resolve once the response has been received from the device. For instance,
the method `GetGain()` on the `OcaGain` class has the same name in the AES70.js
implementation and will return a `Promise<number>`.

Similarly, each event defined in AES70 is available on the corresponding
AES70.js class under its name with the prefix `On`. For instance, the AES70
class `OcaRoot` has the event `PropertyChanged` which is accessible in the
corresponding AES70.js class as `OnPropertyChanged` and is of type `Event`. See
the API documentation for how the `Event` class can be used.

In order to make it easiert to get, set and subscribe properties in AES70 there
are several additional APIs in AES70. The first is that the property changes of
each individual property are available as `On<PropertyName>Changed` on each
AES70.js class. In addition to that each remote object in AES70.js has the
`GetPropertySync()` method which returns an instance of `PropertySync`. This
class can be used to conveniently access and change properties inside of an
AES70 device. See the documentation for the API documentation.

# Installation

## WebBrowser

A ES5 compatible version of AES70.js can be build from within the git
repository. The build process uses babel and closure-compiler to bunde a single
file `dist/AES70.es5.js`. To build this file run

        npm ci
        make dist/AES70.es5.js

Alternatively, the version of AES70 published to NPM already contains the
generated source file. After installing `aes70` using NPM a version of AES70.js
for the browser will be at `node_modules/aes70/dist/AES70.es5.js`.

## NodeJS

In order to use AES70 from inside a NodeJS project simply install it with npm.

        npm i aes70

In order to build a NodeJS compatible version of AES70.js from the git
repository run:

        npm ci
        make node

The output files will then be found in the `lib/` directory.

# Getting started

The first step when using AES70.js to control a device is to decide how to
connect. For web-based controllers the only solution is using WebSockets, for
NodeJS both TCP and UDP are available in addition to that.

        const connection = await TCPConnection.connect({
            host: 'example.org',
            port: 65000,
        });

In a web browser using a WebSocket this looks similar.

        const connection = await OCA.WebSocketConnection.connect({
          url: 'ws://example.org',
        });

The next step is to discover what kind of objects the device has. This can be
done using the method `RemoteDevice.get_device_tree()` method.

A full working example:

```js
import { TCPConnection, RemoteDevice } from 'aes70';

async function run() {
  const connection = await TCPConnection.connect({
    host: 'example.org',
    port: 65000,
  });
  const device = new RemoteDevice(connection);

  device.set_keepalive_interval(1);

  console.log('Device name:', await device.DeviceManager.GetModelDescription());

  console.log('Object inside this device:');

  const tree = await device.get_device_tree();

  const rec = async (a) => {
    for (let i = 0; i < a.length; i++) {
      const obj = a[i];

      if (Array.isArray(obj)) {
        // children
        await rec(obj);
      } else {
        console.log('Type: %s', obj.constructor.ClassName);
        console.log('Properties:');
        const properties = obj.GetPropertySync();

        // fetch the values of all properties from the device.
        await properties.sync();

        properties.forEach((value, name) => {
          if (value !== undefined) console.log('  %s: %o', name, value);
        });

        // unsubscribe all event handlers
        properties.Dispose();
      }
    }
  };

  await rec(tree);
}

run().then(() => console.log('Done.'));
```

The tree returned by `RemoteDevice.get_device_tree` returns all objects of the
device below the root block. They represent all objects defined inside of the
AES70 device aside from the manager objects.

## Logging AES70 packets

To understand what packets are being sent on a connection one possible option
is to subscribe to the `send` and `receive` events. The `ClientConnection` class
can then be queried for additional information about these packets to understand
what method calls they correspond. This example code can be used:

```js
connection.on('error', (error) => console.error('connection error', error));
connection.on('receive', (pdu) => {
  if (pdu instanceof Response) {
    const pendingCommand = connection.find_pending_command(pdu);
    if (pendingCommand) {
      console.log(
        'RECV',
        pendingCommand.name,
        pendingCommand.get_arguments(),
        '->',
        Types.OcaStatus.getName(pdu.status_code)
      );
    }
  } else {
    console.log('RECV', pdu);
  }
});
connection.on('send', (pdu) => {
  if (pdu instanceof Command) {
    const pendingCommand = connection.find_pending_command(pdu);
    if (pendingCommand) {
      console.log('SEND', pendingCommand.name, pendingCommand.get_arguments());
    }
  } else {
    console.log('SEND', pdu);
  }
});
```

# Documentation

The documentation for this library is built using
[https://pypi.org/project/sphinx-js/](https://pypi.org/project/sphinx-js/). It
can be created by installing dependencies and then running

        make html

inside of the `doc` directory.

This generated documentation is also online at
[http://docs.deuso.de/AES70.js](http://docs.deuso.de/AES70.js).

# License

This software is released here under the GNU General Public License version 2.
