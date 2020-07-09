import { createType } from './createType.js';

export function OcaBlobFixed(Length) {
  return createType({
    isConstantLength: true,
    encodedLength: function (value) {
      return Length;
    },
    encodeTo: function (dataView, pos, value) {
      if (!Array.isArray(value) && !(value instanceof Uint8Array))
        throw new TypeError('Expected Array or Uint8Array');

      if (value.length !== Length) throw new TypeError('Data length mismatch.');

      const u8 = new Uint8Array(dataView.buffer, dataView.byteOffset);
      u8.set(value, pos);
      return pos + Length;
    },
    deocde: function (dataView, pos) {
      return new Uint8Array(dataView.buffer, dataView.byteOffset + pos, Length);
    },
  });
}
