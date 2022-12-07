/*
 * This file has been generated.
 */
import { Enum } from './Enum.js';

/**
 * Enumeration of presentation units that can be used in OCA classes. Property
 * values of OCA objects are always in SI units (unless explicitly documented
 * otherwise), but the presentation unit can also be stored to indicate in which
 * unit the value was presented in a user interface. This way another controller
 * can also present it in that unit (i.e. doing a conversion on the controller
 * before presenting it) to keep the user presentation uniform. Note that the
 * presentation unit may be equal to the unit of the property (in which case of
 * course no conversion is needed).
 * @class OcaPresentationUnit
 */
export class OcaPresentationUnit extends Enum({
  dBu: 0,
  dBV: 1,
  V: 2,
}) {}

/**
 * Singleton object corresponding to the entry with value ``0``.
 * @type {OcaPresentationUnit}
 * @member dBu
 * @memberof OcaPresentationUnit
 * @static
 */
/**
 * Singleton object corresponding to the entry with value ``1``.
 * @type {OcaPresentationUnit}
 * @member dBV
 * @memberof OcaPresentationUnit
 * @static
 */
/**
 * Singleton object corresponding to the entry with value ``2``.
 * @type {OcaPresentationUnit}
 * @member V
 * @memberof OcaPresentationUnit
 * @static
 */
