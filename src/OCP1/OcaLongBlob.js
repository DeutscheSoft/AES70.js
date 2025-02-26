import { createType } from './createType.js';

export const OcaLongBlob = createType({
  isConstantLength: false,
  canEncode: function (value) {
    if (typeof value !== 'object') return false;

    return (
      value instanceof ArrayBuffer ||
      value instanceof Uint8Array ||
      Array.isArray(value)
    );
  },
  encodedLength: function (value) {
    if (value instanceof ArrayBuffer) value = new Uint8Array(value);
    if (!Array.isArray(value) && !(value instanceof Uint8Array))
      throw new TypeError('Expected Array or Uint8Array');

    const length = value.length;

    if (length > 0xffffffff)
      throw new Error('Array too long for OcaBlob OCP.1 encoding.');

    return 4 + length;
  },
  encodeTo: function (dataView, pos, value) {
    if (value instanceof ArrayBuffer) value = new Uint8Array(value);

    const length = value.length;

    dataView.setUint32(pos, length);
    pos += 4;

    const u8 = new Uint8Array(dataView.buffer, dataView.byteOffset);
    u8.set(value, pos);
    return pos + length;
  },
  decodeFrom: function (dataView, pos) {
    const length = dataView.getUint32(pos);

    pos += 4;

    return [
      pos + length,
      new Uint8Array(dataView.buffer, dataView.byteOffset + pos, length),
    ];
  },
  decodeLength: function (dataView, pos) {
    const length = dataView.getUint32(pos);

    return pos + 4 + length;
  },
});
