import { createType } from './createType.js';

export const OcaBlob = createType({
  isConstantLength: false,
  encodedLength: function (value) {
    if (value instanceof ArrayBuffer) value = new Uint8Array(value);
    if (!Array.isArray(value) && !(value instanceof Uint8Array))
      throw new TypeError('Expected Array or Uint8Array');

    const length = value.length;

    if (length > 0xffff)
      throw new Error('Array too long for OcaBlob OCP.1 encoding.');

    return 2 + length;
  },
  encodeTo: function (dataView, pos, value) {
    if (value instanceof ArrayBuffer) value = new Uint8Array(value);

    const length = value.length;

    dataView.setUint16(pos, length);
    pos += 2;

    const u8 = new Uint8Array(dataView.buffer, dataView.byteOffset);
    u8.set(value, pos);
    return pos + length;
  },
  decodeFrom: function (dataView, pos) {
    const length = dataView.getUint16(pos);

    pos += 2;

    return [
      pos + length,
      new Uint8Array(dataView.buffer, dataView.byteOffset + pos, length),
    ];
  },
  decodeLength: function (dataView, pos) {
    const length = dataView.getUint16(pos);

    return pos + 2 + length;
  },
});
