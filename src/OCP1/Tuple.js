import { createType } from './createType.js';
import { isTypedArray } from './is_typed_array.js';

export function Tuple(...Types) {
  const Length = Types.length;

  return createType({
    isConstantLength: false,
    encodedLength: function (value) {
      if (!(Array.isArray(value) || isTypedArray(value)))
        throw new TypeError('Expected array.');

      if (value.length !== Length) throw new Error('Length mismatch.');

      let length = 0;

      for (let i = 0; i < Length; i++) {
        length += Types[i].encodedLength(value[i]);
      }

      return length;
    },
    encodeTo: function (dataView, pos, value) {
      for (let i = 0; i < Length; i++) {
        pos = Types[i].encodeTo(dataView, pos, value[i]);
      }
      return pos;
    },
    decodeFrom: function (dataView, pos) {
      let result = new Array(Length);

      for (let i = 0; i < Length; i++) {
        let tmp;
        [pos, tmp] = Types[i].decodeFrom(dataView, pos);
        result[i] = tmp;
      }

      return [pos, result];
    },
    decodeLength: function (dataView, pos) {
      for (let i = 0; i < Length; i++) {
        pos = Types[i].decodeLength(dataView, pos);
      }

      return pos;
    },
  });
}
