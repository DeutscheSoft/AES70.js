import { createType } from './createType.js';

export function RestWithOffset(offset) {
  return createType({
    isConstantLength: false,
    encodedLength: function (value) {
      if (!(typeof value === 'object' && value instanceof DataView))
        throw new TypeError('Expected DataView.');

      return value.byteLength - offset;
    },
    encodeTo: function (dataView, pos, value) {
      const length = value.byteLength;
      const src = new Uint8Array(value.buffer, value.byteOffset, length);
      const dst = new Uint8Array(dataView.buffer, dataView.byteOffset + pos);
      dst.set(src);
      return pos + length;
    },
    decodeFrom: function (dataView, pos) {
      const length = dataView.byteLength - pos - offset;

      return [
        pos + length,
        new DataView(dataView.buffer, dataView.byteOffset + pos, length),
      ];
    },
    decodeLength: function (dataView, pos) {
      const length = dataView.byteLength - pos - offset;

      return pos + length;
    },
  });
}
