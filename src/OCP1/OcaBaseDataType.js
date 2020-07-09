import { Enum8 } from './Enum8.js';

/**
 * Enum that describes all available base datatypes.
 * @category Types
 * @class OcaBaseDataType
 * @extends Enum8
 */
export const OcaBaseDataType = Enum8({
  None: 0,
  OcaBoolean: 1,
  OcaInt8: 2,
  OcaInt16: 3,
  OcaInt32: 4,
  OcaInt64: 5,
  OcaUint8: 6,
  OcaUint16: 7,
  OcaUint32: 8,
  OcaUint64: 9,
  OcaFloat32: 10,
  OcaFloat64: 11,
  OcaString: 12,
  OcaBitstring: 13,
  OcaBlob: 14,
  OcaBlobFixedLen: 15,
  OcaBit: 16,
});
