export function encodeMessage(a) {
  if (!Array.isArray(a)) a = [a];

  // message header
  let len = 10;
  const type = a[0].messageType;

  for (let i = 0; i < a.length; i++) {
    const tmp = a[i];
    if (tmp.messageType != type)
      throw new Error('Cannot combine different types in one message.');
    len += tmp.encoded_length();
  }

  const buf = new ArrayBuffer(len);
  const dst = new DataView(buf);

  let pos = 0;

  dst.setUint8(pos, 0x3b);
  pos += 1;
  dst.setUint16(pos, 1);
  pos += 2;
  dst.setUint32(pos, len - 1);
  pos += 4;
  dst.setUint8(pos, type);
  pos++;
  dst.setUint16(pos, a.length);
  pos += 2;

  for (let i = 0; i < a.length; i++) {
    pos = a[i].encode_to(dst, pos);
  }

  if (pos != len) throw new Error('Message length mismatch.');

  return buf;
}
