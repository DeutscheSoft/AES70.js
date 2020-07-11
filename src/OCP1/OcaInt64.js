import { createType } from './createType.js';

export const OcaInt64 = createType({
  isConstantLength: true,
  encodedLength: function (value) {
    return 8;
  },
  encodeTo: function (dataView, pos, value) {
    dataView.setBigInt64(pos, value, false);
    return pos + 8;
  },
  decode: function (dataView, pos) {
    return dataView.getBigInt64(pos, false);
  },
});
