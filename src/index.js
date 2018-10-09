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
  } from './Controller';

import * as SP from './signature_parser.js';
import * as Types from './Types.js';
import * as RemoteControlClasses from './controller/ControlClasses.js';
import { WebSocketConnection } from './controller/WebSocket.js';
import { TCPConnection } from './controller/TCP.js';
import { UDPConnection } from './controller/UDP.js';

const controller = {
  Connection: ClientConnection,
  WebSocket: WebSocketConnection,
  TCP: TCPConnection,
  UDP: UDPConnection,
  Device: RemoteDevice,
  ControlClasses: RemoteControlClasses,
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
  SP,
  controller,
};
