export const messageHeaderSize = 10;

function calculateMessageLength(pdus) {
  let len = messageHeaderSize;
  const type = pdus[0].messageType;

  for (let i = 0; i < pdus.length; i++) {
    const pdu = pdus[i];
    if (pdu.messageType != type)
      throw new Error('Cannot combine different types in one message.');
    len += pdu.encoded_length();
  }

  return len;
}

export function encodeMessageTo(dst, pos, pdus, offset, end) {
  if (!offset)
    offset = 0;

  if (!end)
    end = pdus.length;

  const count = end - offset;

  if (!(count <= 0xffff))
    throw new Error('Too many PDUs.');

  dst.setUint8(pos, 0x3b);
  pos += 1;

  const startPos = pos;

  dst.setUint16(pos, 1);
  pos += 2;
  const lenPos = pos;
  pos += 4;
  dst.setUint8(pos, pdus[offset].messageType);
  pos++;
  dst.setUint16(pos, end - offset);
  pos += 2;

  for (let i = offset; i < end; i++) {
    pos = pdus[i].encode_to(dst, pos);
  }

  dst.setUint32(lenPos, pos - startPos);

  return pos;
}

export function encodeMessage(a) {
  if (!Array.isArray(a)) a = [a];

  const len = calculateMessageLength(a);
  const buf = new ArrayBuffer(len);
  const dst = new DataView(buf);

  const pos = encodeMessageTo(dst, 0, a, 0, a.length);

  if (pos != len) throw new Error('Message length mismatch.');

  return buf;
}
