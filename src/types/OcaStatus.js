/*
 * This file has been generated.
 */
import { Enum } from './Enum.js';

/**
 * Standard status codes returned from method calls.
 */
export class OcaStatus extends Enum({
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
}) {}
