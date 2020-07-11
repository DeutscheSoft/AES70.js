/*
 * This file has been generated.
 */
import { Enum } from './Enum.js';

/**
 * Enumeration of reasons for device reset.
 */
export class OcaResetCause extends Enum({
  PowerOn: 0,
  InternalError: 1,
  Upgrade: 2,
  ExternalRequest: 3,
}) {}
