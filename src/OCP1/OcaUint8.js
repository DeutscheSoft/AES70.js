import { createType } from './createType.js';

export const OcaUint8 = createType({
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
