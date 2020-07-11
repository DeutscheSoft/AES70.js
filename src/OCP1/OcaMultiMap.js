import { createType } from './createType.js';

export function OcaMultiMap(KeyType, ValueType) {
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

      value.forEach((set, key) => {
        result += kencodedLength(key) * set.size;
        set.forEach((value) => {
          result += vencodedLength(value);
        });
      });

      return result;
    },
    encodeTo: function (dataView, pos, value) {
      const size_pos = pos;
      let size = 0;
      pos += 2;

      value.forEach((set, key) => {
        size += set.size;
        set.forEach((value) => {
          pos = kencodeTo(dataView, pos, key);
          pos = vencodeTo(dataView, pos, value);
        });
      });

      dataView.setUint16(size_pos, size);

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

        let set = result.get(key);

        if (!set) {
          result.set(key, (set = new Set()));
        }

        set.add(value);
      }

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
