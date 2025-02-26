import { createType } from './createType.js';

export const OcaUint16 = createType({
  isConstantLength: true,
  canEncode: function (value) {
    return typeof value === 'number';
  },
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
