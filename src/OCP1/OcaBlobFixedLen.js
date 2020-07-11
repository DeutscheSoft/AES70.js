import { createType } from './createType.js';

export function OcaBlobFixedLen(Length) {
  return createType({
    isConstantLength: true,
    encodedLength: function (value) {
      return Length;
    },
    encodeTo: function (dataView, pos, value) {
      if (!Array.isArray(value) && !(value instanceof Uint8Array))
        throw new TypeError('Expected Array or Uint8Array');

      const length = value.length;

      if (length !== Length) throw new Error('Length mismatch.');

      const u8 = new Uint8Array(dataView.buffer, dataView.byteOffset);
      u8.set(value, pos);
      return pos + Length;
    },
    decode: function (dataView, pos) {
      return new Uint8Array(dataView.buffer, dataView.byteOffset + pos, Length);
    },
  });
}
