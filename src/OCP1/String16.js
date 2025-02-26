import { createType } from './createType.js';

export const String16 = createType({
  isConstantLength: false,
  canEncode: function (value) {
    return typeof value === 'string';
  },
  encodedLength: function (value) {
    // TODO: we could support more than strings
    if (typeof value !== 'string') throw new TypeError('Expected string.');

    const length = value.length;

    if (length > 0xffff)
      throw new Error('Array too long for String16 OCP.1 encoding.');

    return 2 + 2 * length;
  },
  encodeTo: function (dataView, pos, value) {
    const length = value.length;

    dataView.setUint16(pos, length, false);
    pos += 2;

    for (let i = 0; i < length; i++, pos += 2) {
      dataView.setUint16(pos, value.charCodeAt(i), false);
    }

    return pos;
  },
  decodeFrom: function (dataView, pos) {
    const length = dataView.getUint16(pos, false);

    pos += 2;

    const tmp = new Array(length);

    for (let i = 0; i < length; i++, pos += 2) {
      tmp[i] = dataView.getUint16(pos, false);
    }

    return [pos, String.fromCharCode.apply(String, tmp)];
  },
  decodeLength: function (dataView, pos) {
    const length = dataView.getUint16(pos);

    return pos + 2 + 2 * length;
  },
});
