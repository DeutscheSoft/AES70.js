import { createType } from './createType.js';

export const OcaInt32 = createType({
  isConstantLength: true,
  encodedLength: function (value) {
    return 4;
  },
  encodeTo: function (dataView, pos, value) {
    dataView.setInt32(pos, 0 | value, false);
    return pos + 4;
  },
  decode: function (dataView, pos) {
    return dataView.getInt32(pos, false);
  },
});
