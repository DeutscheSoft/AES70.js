/*
 * This file has been generated.
 */
import { Enum } from './Enum.js';

/**
 * Enumeration of units of measure that can be used in OCA classes. Only SI
 * (base or derived) units are specified, so that internal calculations will not
 * need to convert. If conversion is needed it should only be done in user
 * interfaces. The datatype of a reading expressed in one of these units of
 * measure is FLOAT.
 * @class OcaUnitOfMeasure
 */
export class OcaUnitOfMeasure extends Enum({
  Ampere: 4,
  DegreeCelsius: 2,
  Hertz: 1,
  None: 0,
  Ohm: 5,
  Volt: 3,
}) {}

/**
 * Singleton object corresponding to the entry with value ``4``.
 * @type {OcaUnitOfMeasure}
 * @member Ampere
 * @memberof OcaUnitOfMeasure
 * @static
 */
/**
 * Singleton object corresponding to the entry with value ``2``.
 * @type {OcaUnitOfMeasure}
 * @member DegreeCelsius
 * @memberof OcaUnitOfMeasure
 * @static
 */
/**
 * Singleton object corresponding to the entry with value ``1``.
 * @type {OcaUnitOfMeasure}
 * @member Hertz
 * @memberof OcaUnitOfMeasure
 * @static
 */
/**
 * Singleton object corresponding to the entry with value ``0``.
 * @type {OcaUnitOfMeasure}
 * @member None
 * @memberof OcaUnitOfMeasure
 * @static
 */
/**
 * Singleton object corresponding to the entry with value ``5``.
 * @type {OcaUnitOfMeasure}
 * @member Ohm
 * @memberof OcaUnitOfMeasure
 * @static
 */
/**
 * Singleton object corresponding to the entry with value ``3``.
 * @type {OcaUnitOfMeasure}
 * @member Volt
 * @memberof OcaUnitOfMeasure
 * @static
 */
