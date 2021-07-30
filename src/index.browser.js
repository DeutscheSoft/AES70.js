import { warn, log, error } from './log.js';

import { Connection } from './connection.js';
import { Command } from './OCP1/command.js';
import { CommandRrq } from './OCP1/commandrrq.js';
import { Response } from './OCP1/response.js';
import { Notification } from './OCP1/notification.js';
import { KeepAlive } from './OCP1/keepalive.js';
import { encodeMessage } from './OCP1/encode_message.js';
import { decodeMessage } from './OCP1/decode_message.js';

import { ClientConnection } from './controller/client_connection.js';
import { RemoteDevice } from './controller/remote_device.js';
import { define_custom_class } from './controller/define_custom_class.js';

import { ControlClasses as RemoteControlClasses } from './controller/ControlClasses.js';
import * as Types from './types.js';
import { WebSocketConnection } from './controller/websocket_connection.js';

const controller = {
  Connection: ClientConnection,
  WebSocket: WebSocketConnection,
  Device: RemoteDevice,
  ControlClasses: RemoteControlClasses,
  define_custom_class: define_custom_class,
};

export {
  Connection,
  controller,
  ClientConnection,
  Command,
  CommandRrq,
  decodeMessage,
  encodeMessage,
  error,
  log,
  KeepAlive,
  Notification,
  Response,
  RemoteDevice,
  Types,
  warn,
  WebSocketConnection,
  RemoteControlClasses,
};
