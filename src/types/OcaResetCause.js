/*
 * This file has been generated.
 */
import { Enum } from './Enum.js';

/**
 * Enumeration of reasons for device reset.
 * @class OcaResetCause
 */
export class OcaResetCause extends Enum({
  PowerOn: 0,
  InternalError: 1,
  Upgrade: 2,
  ExternalRequest: 3,
  Unknown: 255,
}) {}

/**
 * Singleton object corresponding to the entry with value ``0``.
 * @type {OcaResetCause}
 * @member PowerOn
 * @memberof OcaResetCause
 * @static
 */
/**
 * Singleton object corresponding to the entry with value ``1``.
 * @type {OcaResetCause}
 * @member InternalError
 * @memberof OcaResetCause
 * @static
 */
/**
 * Singleton object corresponding to the entry with value ``2``.
 * @type {OcaResetCause}
 * @member Upgrade
 * @memberof OcaResetCause
 * @static
 */
/**
 * Singleton object corresponding to the entry with value ``3``.
 * @type {OcaResetCause}
 * @member ExternalRequest
 * @memberof OcaResetCause
 * @static
 */
/**
 * Singleton object corresponding to the entry with value ``255``.
 * @type {OcaResetCause}
 * @member Unknown
 * @memberof OcaResetCause
 * @static
 */
