import { Enum8 } from './Enum8.js';

/**
 * Standard status codes returned from method calls.
 * @category Types
 * @class OcaStatus
 * @extends Enum8
 */
export const OcaStatus = Enum8({
  OK: 0,
  ProtocolVersionError: 1,
  DeviceError: 2,
  Locked: 3,
  BadFormat: 4,
  BadONo: 5,
  ParameterError: 6,
  ParameterOutOfRange: 7,
  NotImplemented: 8,
  InvalidRequest: 9,
  ProcessingFailed: 10,
  BadMethod: 11,
  PartiallySucceeded: 12,
  Timeout: 13,
  BufferOverflow: 14,
});
