import { PDU } from './pdu.js';
import { EncodedArguments } from './encoded_arguments.js';

/**
 * Command packet.
 */
export class Command extends PDU {
  constructor(target, method_level, method_index, param_count, parameters) {
    super();
    this.target = +target;
    this.method_level = method_level | 0;
    this.method_index = method_index | 0;
    this.param_count = param_count | 0;
    this.parameters = parameters || null;
    this.handle = 0;
  }

  static get messageType() {
    return 0;
  }

  encode_to(dst, pos) {
    pos = pos | 0;
    dst.setUint32(pos, this.encoded_length());
    pos += 4;
    dst.setUint32(pos, this.handle);
    pos += 4;
    dst.setUint32(pos, this.target);
    pos += 4;
    dst.setUint16(pos, this.method_level);
    pos += 2;
    dst.setUint16(pos, this.method_index);
    pos += 2;
    dst.setUint8(pos, this.param_count);
    pos++;
    if (this.param_count) {
      const parameters = this.parameters;
      if (parameters instanceof EncodedArguments) {
        pos = parameters.encodeTo(dst, pos);
      } else {
        new Uint8Array(dst.buffer).set(
          new Uint8Array(parameters),
          dst.byteOffset + pos
        );
        pos += parameters.byteLength;
      }
    }
    return pos;
  }

  encoded_length() {
    return 17 + (this.param_count ? this.parameters.byteLength : 0);
  }

  decode_from(data, pos, data_len) {
    let len = data.getUint32(pos);
    pos += 4;
    this.handle = data.getUint32(pos);
    pos += 4;
    this.target = data.getUint32(pos);
    pos += 4;
    this.method_level = data.getUint16(pos);
    pos += 2;
    this.method_index = data.getUint16(pos);
    pos += 2;
    this.param_count = data.getUint8(pos);
    pos++;
    len -= 17;
    if (len < 0) throw new Error('Bad Command Length.');
    if (len > 0) {
      if (!this.param_count) throw new Error('Expected no parameter bytes.');
      this.parameters = data.buffer.slice(
        data.byteOffset + pos,
        data.byteOffset + pos + len
      );
      pos += len;
    }
    return pos;
  }

  response(status_code, param_count, parameters) {
    return new Response(this.handle, status_code, param_count, parameters);
  }
}
