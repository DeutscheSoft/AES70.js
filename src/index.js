import {
    warn,
    log,
    error,
    Connection,
    Command,
    CommandRrq,
    Response,
    Notification,
    KeepAlive,
    encodeMessage,
    decodeMessage,
  } from './OCA.js';

import {
    ClientConnection,
    RemoteDevice,
    define_custom_class
  } from './Controller.js';

import * as RemoteControlClasses from './controller/ControlClasses.js';
import { WebSocketConnection } from './controller/websocket_connection.js';
import { TCPConnection } from './controller/tcp_connection.js';
import { UDPConnection } from './controller/udp_connection.js';

const controller = {
  Connection: ClientConnection,
  WebSocket: WebSocketConnection,
  TCP: TCPConnection,
  UDP: UDPConnection,
  Device: RemoteDevice,
  ControlClasses: RemoteControlClasses,
  define_custom_class: define_custom_class,
};

export {
  warn,
  log,
  error,
  Connection,
  ClientConnection,
  Command,
  CommandRrq,
  Response,
  Notification,
  KeepAlive,
  RemoteControlClasses,
  encodeMessage,
  decodeMessage,
  WebSocketConnection,
  RemoteDevice,
  controller,
};
