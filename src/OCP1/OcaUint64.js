import { createType } from './createType.js';
import { HAS_BIGINT, UINT64_MAX } from '../bigint.js';

function assertSupport() {
  if (!HAS_BIGINT) throw new Error('Missing BigInt support');
}

export const OcaUint64 = createType({
  isConstantLength: true,
  canEncode: function (value) {
    return typeof value === 'number' || typeof value === 'bigint';
  },
  encodedLength: function (value) {
    return 8;
  },
  encodeTo: function (dataView, pos, value) {
    /* global BigInt:false */
    assertSupport();
    if (!(value <= UINT64_MAX && value >= 0))
      throw new TypeError('Uint64 out of range.');
    dataView.setBigUint64(pos, BigInt(value), false);
    return pos + 8;
  },
  decode: function (dataView, pos) {
    assertSupport();
    const value = dataView.getBigUint64(pos, false);

    return value <= Number.MAX_SAFE_INTEGER ? Number(value) : value;
  },
});
