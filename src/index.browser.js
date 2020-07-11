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

import * as Types from './Types.js';
import * as RemoteControlClasses from './controller/ControlClasses.js';
import { WebSocketConnection } from './controller/WebSocket.js';

const controller = {
  Connection: ClientConnection,
  WebSocket: WebSocketConnection,
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
  Types,
  RemoteControlClasses,
  encodeMessage,
  decodeMessage,
  WebSocketConnection,
  RemoteDevice,
  controller,
};
