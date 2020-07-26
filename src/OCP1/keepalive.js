import { PDU } from './pdu.js';

/**
 * Keepalive packet.
 */
export class KeepAlive extends PDU
{
  static get messageType()
  {
    return 4;
  }

  constructor(time)
  {
    super();
    this.time = time || 0;
  }

  decode_from(data, pos, len)
  {
    if (len == 4) {
      this.time = data.getUint32(pos);
      pos += 4;
    } else if (len == 2) {
      this.time = data.getUint16(pos) * 1000;
      pos += 2;
    } else throw new Error("Bad keepalive timeout length.");
    return pos;
  }

  encode_to(dst, pos)
  {
    if (this.time % 1000) {
      dst.setUint32(pos, this.time);
      pos += 4;
    } else {
      dst.setUint16(pos, this.time/1000);
      pos += 2;
    }
    return pos;
  }

  encoded_length()
  {
    if (this.time % 1000) {
      return 4;
    } else {
      return 2;
    }
  }
}
