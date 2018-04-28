# AES70.js

## Introduction

AES70.js is a pure JavaScript implementation of an AES70 controller library.
Open Control Architecture (OCA aka AES70) is a control protocol aimed primarily at
audio applications. AES70 is developed by the [OCA Alliance](http://ocaalliance.com/)
and standardized through the [AES](http://www.aes.org/publications/standards/search.cfm?docID=101).

Fundamentally, AES70 is a RPC protocol with event subscription capabilities.
An OCA client (aka. controller) can connect to an OCA server (aka device).
An OCA device is represented by a tree of objects, which the controller can call
methods in. OCA classes define events, which a controller can subscribe to.

The protocol definition contains a series of pre-defined classes, which can
be used to represent audio devices. OCA allows the creation of custom subclasses,
however, in order for two OCA implementations to interoperate fully, both sides
need to implement all classes involved.

All classes and datatypes defined in the
current OCA Standard are published in the form of an XMI document. This XMI
document has been used to generate the class structure and interfaces which
are part of this library.

## Disclaimer

This implementation is in alpha state. It has been tested against a
small number of OCA devices only. The hand-written parts do not contain any
documentation.

This repository contains a simple web server, which can be used to connect a
WebSocket to an OCA device. This simple proxy does not support OCA device discovery and
therefore the IP-address and port of the OCA device need to be specified manually.

This program is written in the [Pike programming language](http://pike.lysator.liu.se/).

To start this webserver:

    pike bin/server.pike <ip> <port>

You can then navigate a browser to http://localhost:8080/, which will serve the `index.html` file.
After the browser has connected through the proxy to the OCA device, it will read out the OCA object
tree and print all objects to the page.
The local representation of these OCA objects can then be found in the global variable `objects` and 
can be used to call methods.

For example type into the JavaScript console:

    objects[0].GetRole().then(function(role) { console.log('My role is: '+role); });

## Requirements

This library is written in JavsScript and uses ECMAScript 6 features.
It will work natively in modern browsers which support ECMAScript 6 modules.
This repository contains build targets to transpile this module to ECMAScript 5
or for use with NodeJS.

## License

This software is released under the GNU General Public License version 2.
