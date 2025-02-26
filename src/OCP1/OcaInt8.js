import { createType } from './createType.js';

export const OcaInt8 = createType({
  isConstantLength: true,
  canEncode: function (value) {
    return typeof value === 'number';
  },
  encodedLength: function (value) {
    return 1;
  },
  encodeTo: function (dataView, pos, value) {
    dataView.setInt8(pos, value | 0);
    return pos + 1;
  },
  decode: function (dataView, pos) {
    return dataView.getInt8(pos);
  },
});
