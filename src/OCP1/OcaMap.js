import { createType } from './createType.js';

export function OcaMap(KeyType, ValueType) {
  const kencodedLength = KeyType.encodedLength;
  const kencodeTo = KeyType.encodeTo;
  const kdecodeFrom = KeyType.decodeFrom;
  const kdecodeLength = KeyType.decodeLength;

  const vencodedLength = ValueType.encodedLength;
  const vencodeTo = ValueType.encodeTo;
  const vdecodeFrom = ValueType.decodeFrom;
  const vdecodeLength = ValueType.decodeLength;

  return createType({
    isConstantLength: false,
    encodedLength: function (value) {
      if (!(value instanceof Map || value instanceof WeakMap))
        throw new TypeError('Expected Map or WeakMap');

      let result = 2;

      value.forEach((value, key) => {
        result += kencodedLength(key);
        result += vencodedLength(value);
      });

      return result;
    },
    encodeTo: function (dataView, pos, value) {
      dataView.setUint16(pos, value.size);
      pos += 2;

      value.forEach((value, key) => {
        pos = kencodeTo(dataView, pos, key);
        pos = vencodeTo(dataView, pos, value);
      });

      return pos;
    },
    decodeFrom: function (dataView, pos) {
      const result = new Map();
      const length = dataView.getUint16(pos);
      pos += 2;

      for (let i = 0; i < length; i++) {
        let key, value;

        [pos, key] = kdecodeFrom(dataView, pos);
        [pos, value] = vdecodeFrom(dataView, pos);

        result.set(key, value);
      }

      if (result.size !== length)
        throw new Error('Key appeared twice in decoded Map.');

      return [pos, result];
    },
    decodeLength: function (dataView, pos) {
      const length = dataView.getUint16(pos);
      pos += 2;

      for (let i = 0; i < length; i++) {
        pos = kdecodeLength(dataView, pos);
        pos = vdecodeLength(dataView, pos);
      }

      return pos;
    },
  });
}
