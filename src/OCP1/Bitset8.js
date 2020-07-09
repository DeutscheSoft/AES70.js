import { createType } from './createType.js';

export function Bitset8(fields) {
  const Type = createType({
    isConstantLength: true,
    encodedLength: function (value) {
      return 1;
    },
    encodeTo: function (dataView, pos, value) {
      dataView.setUint8(pos, 0 | value);
      return pos + 1;
    },
    decode: function (dataView, pos) {
      return dataView.getUint8(pos);
    },
  });

  for (let i = 0; i < fields.length; i++) Type[fields[i]] = 1 << i;

  return Type;
}
