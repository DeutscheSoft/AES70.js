import { PDU } from './pdu.js';

/**
 * Response packet.
 */
export class Response extends PDU
{
  constructor(handle, status_code, param_count, parameters)
  {
    super();
    this.handle = handle;
    this.status_code = status_code|0;
    this.param_count = param_count|0;
    this.parameters = parameters||null;
  }

  static get messageType()
  {
    return 3;
  }

  encoded_length()
  {
    return 10 + (this.param_count ? this.parameters.byteLength : 0);
  }

  decode_from(data, pos, data_len)
  {
    var len = data.getUint32(pos);
    pos += 4;
    this.handle = data.getUint32(pos);
    pos += 4;
    this.status_code = data.getUint8(pos);
    pos ++;
    this.param_count = data.getUint8(pos);
    pos ++;
    len -= 10;
    if (len < 0) throw new Error("Bad Response length.");
    if (len > 0) {
      if (!this.param_count)
            warn("Decoding response with parameterCount=0 but %o bytes of parameters", len);
      this.parameters = data.buffer.slice(data.byteOffset+pos, data.byteOffset+pos+len);
      pos += len;
    }
    return pos;
  }

  encode_to(dst, pos)
  {
    dst.setUint32(pos, this.encoded_length());
    pos += 4;
    dst.setUint32(pos, this.handle);
    pos += 4;
    dst.setUint8(pos, this.status_code);
    pos ++;
    dst.setUint8(pos, this.param_count);
    pos ++;
    if (this.param_count) {
      if (this.parameters instanceof EncodedArguments) {
        pos = this.parameters.encodeTo(dst, pos);
      } else {
        new Uint8Array(dst.buffer).set(new Uint8Array(this.parameters), dst.byteOffset+pos);
        pos += this.parameters.byteLength;
      }
    }
    return pos;
  }
}

