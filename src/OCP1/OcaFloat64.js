import { createType } from './createType.js';

export const OcaFloat64 = createType({
  isConstantLength: true,
  encodedLength: function (value) {
    return 8;
  },
  encodeTo: function (dataView, pos, value) {
    dataView.setFloat64(pos, +value, false);
    return pos + 8;
  },
  decode: function (dataView, pos) {
    return dataView.getFloat64(pos, false);
  },
});
