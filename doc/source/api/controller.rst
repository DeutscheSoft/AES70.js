Controller APIs
===============

Connection
^^^^^^^^^^

Base class for AES70 connections.

.. js:autoclass:: connection.Connection(options)
  :members: close, set_keepalive_interval, Events#on, off
  :short-name:


ClientConnection
^^^^^^^^^^^^^^^^

Base class for client connections. 

.. js:autoclass:: ClientConnection
  :members: constructor

TCPConnection
^^^^^^^^^^^^^

Client connection using TCP. Only available when using this library under
NodeJS.

.. js:autoclass:: TCPConnection(socket, options)
  :members: connect, close

UDPConnection
^^^^^^^^^^^^^

Client connection using UDP. Only available when using this library under
NodeJS.

.. js:autoclass:: UDPConnection(socket, options)
  :members: connect, close

WebSocketConnection
^^^^^^^^^^^^^^^^^^^

Client connection using WebSockets. Available when using this library in the
browser and under NodeJS with the `ws <https://www.npmjs.com/package/ws>`_ npm
package being installed.

.. js:autoclass:: websocket_connection.WebSocketConnection(ws, options)
  :members: connect, close
  :short-name:

RemoteDevice
^^^^^^^^^^^^

This class represents remote AES70 devices. It is created using an established
AES70 connection. It extends the :class:`Events` class and defines two events:

- ``close`` is emitted when the connection has been closed.
- ``error`` is emitted when the connection closed with an error. 

.. js:autoclass:: RemoteDevice(connection)
  :members:

  .. js:autofunction:: Events#on
    :short-name:

  .. js:autofunction:: Events#removeEventListener
    :short-name:

ObjectBase
^^^^^^^^^^

This class is the common base class for all remote AES70 objects.

.. js:autoclass:: ObjectBase
  :members:

Arguments
^^^^^^^^^

Instances of this class are returned by remote method calls which return more
than one output parameter.

.. js:autoclass:: Arguments
  :members:

RemoteError
^^^^^^^^^^^

Errors of this class are raised by remote method calls which return with a
return status of not ``OK``.

.. js:autoclass:: RemoteError(statuc, command)
  :members:

Event
^^^^^

.. js:autoclass:: Base.Event
  :members:
  :short-name:

PropertyEvent
^^^^^^^^^^^^^

.. js:autoclass:: PropertyEvent
  :members:

Events
^^^^^^

A simple event handling base class similar to ``Events`` in NodeJS.

.. js:autoclass:: Events
  :members:

Enum
^^^^

.. js:autoclass:: Enum
  :members:
