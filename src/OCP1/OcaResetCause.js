import { Enum8 } from './Enum8.js';

/**
 * Enumeration of reasons for device reset.
 * @category Types
 * @class OcaResetCause
 * @extends Enum8
 */
export const OcaResetCause = Enum8({
  PowerOn: 0,
  InternalError: 1,
  Upgrade: 2,
  ExternalRequest: 3,
});
