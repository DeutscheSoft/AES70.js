import {
    warn,
    log,
    error,
  } from './OCA.js';

import { Connection } from './connection.js';
import { Command } from './OCP1/command.js';
import { CommandRrq } from './OCP1/commandrrq.js';
import { Response } from './OCP1/response.js';
import { Notification } from './OCP1/notification.js';
import { KeepAlive } from './OCP1/keepalive.js';
import { encodeMessage } from './OCP1/encode_message.js';
import { decodeMessage } from './OCP1/decode_message.js';

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
