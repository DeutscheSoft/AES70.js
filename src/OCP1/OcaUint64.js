import { createType } from './createType.js';

export const OcaUint64 = createType({
  isConstantLength: true,
  encodedLength: function (value) {
    return 8;
  },
  encodeTo: function (dataView, pos, value) {
    dataView.setBigUint64(pos, value, false);
    return pos + 8;
  },
  decode: function (dataView, pos) {
    return dataView.getBigUint64(pos, false);
  },
});
