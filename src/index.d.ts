import { warn, log, error } from './log';

import { Connection } from './connection';
import { Command } from './OCP1/command';
import { CommandRrq } from './OCP1/commandrrq';
import { Response } from './OCP1/response';
import { Notification } from './OCP1/notification';
import { KeepAlive } from './OCP1/keepalive';
import { encodeMessage } from './OCP1/encode_message';
import { decodeMessage } from './OCP1/decode_message';

import { ClientConnection } from './controller/client_connection';
import { RemoteDevice } from './controller/remote_device';
import { define_custom_class } from './controller/define_custom_class';

import * as RemoteControlClasses from './controller/ControlClasses';
import * as Types from './types';
import { WebSocketConnection } from './controller/websocket_connection_node';
import { TCPConnection } from './controller/tcp_connection';
import { UDPConnection } from './controller/udp_connection';

export declare const controller: {
  Connection: ClientConnection,
  WebSocket: WebSocketConnection,
  TCP: TCPConnection,
  UDP: UDPConnection,
  Device: RemoteDevice,
  ControlClasses: typeof RemoteControlClasses,
  define_custom_class: typeof define_custom_class,
};

export {
  Connection,
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
  TCPConnection,
  UDPConnection,
};
