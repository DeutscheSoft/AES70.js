import { createType } from './createType.js';

export function Bitset16(fields) {
  const Type = createType({
    isConstantLength: true,
    encodedLength: function (value) {
      return 2;
    },
    encodeTo: function (dataView, pos, value) {
      dataView.setUint16(pos, 0 | value, false);
      return pos + 2;
    },
    decode: function (dataView, pos) {
      return dataView.getUint16(pos, false);
    },
  });

  for (let i = 0; i < fields.length; i++) Type[fields[i]] = 1 << i;

  return Type;
}
