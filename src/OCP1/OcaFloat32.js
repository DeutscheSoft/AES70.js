import { createType } from './createType.js';

export const OcaFloat32 = createType({
  isConstantLength: true,
  canEncode: function (value) {
    return typeof value === 'number';
  },
  encodedLength: function (value) {
    return 4;
  },
  encodeTo: function (dataView, pos, value) {
    dataView.setFloat32(pos, +value, false);
    return pos + 4;
  },
  decode: function (dataView, pos) {
    return dataView.getFloat32(pos, false);
  },
});
