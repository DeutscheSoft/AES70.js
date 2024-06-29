/* global BigInt:false */
export const HAS_BIGINT = typeof BigInt !== 'undefined';
export const UINT64_MAX = HAS_BIGINT && (BigInt(1) << BigInt(64)) - BigInt(1);
export const INT64_MAX = HAS_BIGINT && UINT64_MAX >> BigInt(1);
export const INT64_MIN = HAS_BIGINT && -INT64_MAX - BigInt(1);
export const INT56_MAX = HAS_BIGINT && (BigInt(1) << BigInt(55)) - BigInt(1);
export const INT56_MIN = HAS_BIGINT && -INT56_MAX - BigInt(1);
