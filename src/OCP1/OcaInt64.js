import { createType } from './createType.js';
import { HAS_BIGINT, INT64_MIN, INT64_MAX } from '../bigint.js';

function assertSupport() {
  if (!HAS_BIGINT) throw new Error('Missing BigInt support');
}

export const OcaInt64 = createType({
  isConstantLength: true,
  encodedLength: function (value) {
    return 8;
  },
  encodeTo: function (dataView, pos, value) {
    assertSupport();
    if (!(value >= INT64_MIN && value <= INT64_MAX))
      throw new TypeError('Int64 out of range.');
    dataView.setBigInt64(pos, BigInt(value), false);
    return pos + 8;
  },
  decode: function (dataView, pos) {
    assertSupport();
    const value = dataView.getBigInt64(pos, false);

    return value >= Number.MIN_SAFE_INTEGER && value <= Number.MAX_SAFE_INTEGER
      ? Number(value)
      : value;
  },
});
