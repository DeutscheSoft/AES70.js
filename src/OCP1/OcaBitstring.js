import { createType } from './createType.js';

function toByteLength(length) {
  return (length + 7) >> 3;
}

function decodeBitstring(dataView, pos, len) {
  const result = new Array(len);
  const byteLength = toByteLength(len);
  const a8 = new Uint8Array(
    dataView.buffer,
    dataView.byteOffset + pos,
    byteLength
  );
  for (let i = 0; i < len; i++) {
    result[i] = !!(a8[i >> 3] & (128 >> (i & 7)));
  }
  return result;
}

function encodeBitstring(dataView, pos, from) {
  const len = from.length;
  const byteLength = toByteLength(len);
  const a8 = new Uint8Array(
    dataView.buffer,
    dataView.byteOffset + pos,
    byteLength
  );

  for (let i = 0, j = 0; j < byteLength; j++) {
    let tmp = 0;

    for (let k = 0; k < 8 && i < len; k++, i++) {
      if (from[i]) {
        tmp |= 128 >> k;
      }
    }

    a8[j] = tmp;
  }

  return pos + byteLength;
}

export const OcaBitstring = createType({
  isConstantLength: false,
  encodedLength: function (value) {
    if (!Array.isArray(value)) throw new TypeError('Expected Array.');

    const length = value.length;

    if (length > 0xffff)
      throw new Error('Array too long for OcaBlob OCP.1 encoding.');

    return 2 + (length + 7) / 8;
  },
  encodeTo: function (dataView, pos, value) {
    const length = value.length;

    dataView.setUint16(pos, length);
    pos += 2;

    return encodeBitstring(dataView, pos, value);
  },
  decodeFrom: function (dataView, pos) {
    const length = dataView.getUint16(pos);

    pos += 2;

    return [pos + toByteLength(length), decodeBitstring(dataView, pos, length)];
  },
  decodeLength: function (dataView, pos) {
    const length = dataView.getUint16(pos);

    return pos + 2 + toByteLength(length);
  },
});
