# AES70.js

AES70.js is a JavaScript implementation of the AES70 protocol.
Open Control Architecture (OCA aka AES70) is a control protocol aimed primarily at
audio applications. AES70 is developed by the [OCA Alliance](http://ocaalliance.com/)
and standardized through the [AES](http://www.aes.org/publications/standards/search.cfm?docID=101).
Currently, AES70.js only implements the client-side of AES70 and can not
be used to build AES70 devices.

## AES70

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
are part of this library. At this point AES70.js fully supports the most recent
version AES70-2018.

## Requirements

This library is written using ES6 modules. For using this library in a
web-browser or for older versions of NodeJS it is transpiled using babel.

## License

This software is released under the GNU General Public License version 2.
