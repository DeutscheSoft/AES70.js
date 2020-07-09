import { createType } from './createType.js';

export const OcaBoolean = createType({
  isConstantLength: true,
  encodedLength: function (value) {
    return 1;
  },
  encodeTo: function (dataView, pos, value) {
    dataView.setUint8(pos, value ? 1 : 0);
    return pos + 1;
  },
  decode: function (dataView, pos) {
    return dataView.getUint8(pos) !== 0;
  },
});
