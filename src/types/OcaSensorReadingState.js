/*
 * This file has been generated.
 */
import { Enum } from './Enum.js';

/**
 * Enum that describes whether an  **OcaSensor** 's current reading value can be trusted, and if not, why not.
 * @class OcaSensorReadingState
 */
export class OcaSensorReadingState extends Enum({
  Unknown: 0,
  Valid: 1,
  Underrange: 2,
  Overrange: 3,
  Error: 4,
}) {}

/**
 * Singleton object corresponding to the entry with value ``0``.
 * @type {OcaSensorReadingState}
 * @member Unknown
 * @memberof OcaSensorReadingState
 * @static
 */
/**
 * Singleton object corresponding to the entry with value ``1``.
 * @type {OcaSensorReadingState}
 * @member Valid
 * @memberof OcaSensorReadingState
 * @static
 */
/**
 * Singleton object corresponding to the entry with value ``2``.
 * @type {OcaSensorReadingState}
 * @member Underrange
 * @memberof OcaSensorReadingState
 * @static
 */
/**
 * Singleton object corresponding to the entry with value ``3``.
 * @type {OcaSensorReadingState}
 * @member Overrange
 * @memberof OcaSensorReadingState
 * @static
 */
/**
 * Singleton object corresponding to the entry with value ``4``.
 * @type {OcaSensorReadingState}
 * @member Error
 * @memberof OcaSensorReadingState
 * @static
 */
