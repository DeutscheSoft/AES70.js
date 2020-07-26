import { PDU } from './pdu.js';
import { OcaEvent } from './OcaEvent.js';

/**
 * Notification packet.
 */
export class Notification extends PDU
{
  constructor(target, method_level, method_index, context, event, param_count, parameters)
  {
    super();
    this.target = target;
    this.method_level = method_level|0;
    this.method_index = method_index|0;
    this.context = context;
    this.event = event;
    this.param_count = param_count|0;
    this.parameters = parameters||null;
  }

  static get messageType()
  {
    return 2;
  }

  encode_to(dst, pos)
  {
    var len;
    dst.setUint32(pos, this.encoded_length());
    pos += 4;
    dst.setUint32(pos, this.target);
    pos += 4;
    dst.setUint16(pos, this.method_level);
    pos += 2;
    dst.setUint16(pos, this.method_index);
    pos += 2;
    dst.setUint8(pos, this.param_count);
    pos ++;
    if (this.context && (len = this.context.byteLength)) {
      dst.setUint16(len);
      pos += 2;
      new Uint8Array(dst.buffer).set(new Uint8Array(this.context), dst.byteOffset+pos);
      pos += len;
    } else {
      dst.setUint16(pos, 0);
      pos += 2;
    }
    dst.setUint32(pos, this.event.EmitterONo);
    pos += 4;
    dst.setUint16(pos, this.event.EventID.DefLevel);
    pos += 2;
    dst.setUint16(pos, this.event.EventID.EventIndex);
    pos += 2;
    if (this.param_count > 1) {
      if (this.parameters instanceof EncodedArguments) {
        pos = this.parameters.encodeTo(dst, pos);
      } else {
        new Uint8Array(dst.buffer).set(new Uint8Array(this.parameters), dst.byteOffset+pos);
        pos += this.parameters.byteLength;
      }
    }
    return pos;
  }

  encoded_length()
  {
    return 23 + (this.param_count > 1 ? this.parameters.byteLength : 0)
        + (this.context ? this.context.byteLength : 0);
  }

  decode_from(data, pos, len)
  {
    var len = data.getUint32(pos);
    pos += 4;
    this.target = data.getUint32(pos);
    pos += 4;
    this.method_level = data.getUint16(pos);
    pos += 2;
    this.method_index = data.getUint16(pos);
    pos += 2;
    this.param_count = data.getUint8(pos);
    pos ++;
    var context_length = data.getUint16(pos);
    pos += 2;
    if (context_length) {
      this.context = data.buffer.slice(data.byteOffset+pos, data.byteOffset+pos+context_length);
      pos += context_length;
    } else {
      this.context = null
    }

    let event;

    [ pos, event ] = OcaEvent.decodeFrom(data, pos);

    this.event = event;

    len -= 23 + context_length;
    if (len < 0) throw new Error("Bad Notification Length.");
    if (len > 0) {
      this.parameters = data.buffer.slice(data.byteOffset+pos, data.byteOffset+pos+len);
      pos += len;
    }
    return pos;
  }
}

