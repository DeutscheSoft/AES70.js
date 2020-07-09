import { createType } from './createType.js';

export function Arguments(...Types) {
  return createType({
    isConstantLength: false,
    encodedLength: function (value) {
      if (!(Array.isArray(value) || isTypedArray(value)))
        throw new TypeError('Expected array.');

      if (value.length !== Types.length) throw new Error('Length mismatch.');

      let result = 0;

      for (let i = 0; i < Types.length; i++) {
        const Type = Types[i];

        result += Type.encodedLength(value[i]);
      }

      return result;
    },
    encodeTo: function (dataView, pos, value) {
      for (let i = 0; i < Types.length; i++) {
        const Type = Types[i];

        pos = Type.encodeTo(dataView, pos, value[i]);
      }
      return pos;
    },
    decodeFrom: function (dataView, pos) {
      let result = new Array(Types.length);

      for (let i = 0; i < Types.length; i++) {
        const Type = Types[i];
        let tmp;

        [pos, tmp] = Type.decodeFrom(dataView, pos);

        result[i] = tmp;
      }

      return [pos, result];
    },
    decodeLength: function (dataView, pos) {
      for (let i = 0; i < Types.length; i++) {
        const Type = Types[i];

        pos = Type.decodeFrom(dataView, pos);
      }

      return pos;
    },
  });
}
