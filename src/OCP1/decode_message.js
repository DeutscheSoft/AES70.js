import { Command } from './command.js';
import { CommandRrq } from './commandrrq.js';
import { Notification } from './notification.js';
import { Response } from './response.js';
import { KeepAlive } from './keepalive.js';
import { Notification2 } from './notification2.js';

const PDUTypes = [
  Command,
  CommandRrq,
  Notification,
  Response,
  KeepAlive,
  Notification2,
];

export function decodeMessage(data, pos, ret) {
  if (data.byteLength < data.byteOffset + pos + 10) return -1;

  pos = pos | 0;
  if (data.getUint8(pos) != 0x3b) throw new Error('Bad sync value.');
  pos++;
  //const protocolVersion = data.getUint16(pos);
  pos += 2;
  const messageSize = data.getUint32(pos);
  pos += 4;
  const messageType = data.getUint8(pos);
  pos++;
  const messageCount = data.getUint16(pos);
  pos += 2;

  // this is one index after this message
  const message_offset = data.byteOffset + pos - 9 + messageSize;

  if (message_offset > data.byteLength) return -1;

  ret.length = messageCount;

  const PDUType = PDUTypes[messageType];

  if (PDUType === void 0) throw new Error('Bad Message Type');

  if (PDUType === KeepAlive && messageCount !== 1)
    throw new Error('Bad KeepAlive message count.');

  for (let i = 0; i < messageCount; i++) {
    ret[i] = new PDUType();
    pos = ret[i].decode_from(data, pos, message_offset - data.byteOffset - pos);
  }

  if (pos != message_offset)
    throw new Error('Decode error: ' + pos + ' vs ' + message_offset);

  return pos;
}
