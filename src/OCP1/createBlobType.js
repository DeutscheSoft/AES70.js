import { createType } from './createType.js';
import { getLengthEncoder } from './getLengthEncoder.js';

export function createBlobType(byteLength) {
  const { setLength, getLength, maxLength } = getLengthEncoder(byteLength);

  return createType({
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

      if (length > maxLength)
        throw new Error('Array too long for OCP.1 encoding.');

      return byteLength + length;
    },
    encodeTo: function (dataView, pos, value) {
      if (value instanceof ArrayBuffer) value = new Uint8Array(value);

      const length = value.length;

      setLength(dataView, pos, length);
      pos += byteLength;

      const u8 = new Uint8Array(dataView.buffer, dataView.byteOffset);
      u8.set(value, pos);
      return pos + length;
    },
    decodeFrom: function (dataView, pos) {
      const length = getLength(dataView, pos);

      pos += byteLength;

      return [
        pos + length,
        new Uint8Array(dataView.buffer, dataView.byteOffset + pos, length),
      ];
    },
    decodeLength: function (dataView, pos) {
      const length = getLength(dataView, pos);

      return pos + byteLength + length;
    },
  });
}
