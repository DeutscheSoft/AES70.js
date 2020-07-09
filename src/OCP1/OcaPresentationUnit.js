import { Enum8 } from './Enum8.js';

/**
 * Enumeration of presentation units that can be used in OCA classes.
 * Property values of OCA objects are always in SI units (unless
 * explicitly documented otherwise), but the presentation unit can also
 * be stored to indicate in which unit the value was presented in a user
 * interface. This way another controller can also present it in that
 * unit (i.e. doing a conversion on the controller before presenting it)
 * to keep the user presentation uniform. Note that the presentation unit
 * may be equal to the unit of the property (in which case of course no
 * conversion is needed).
 * @category Types
 * @class OcaPresentationUnit
 * @extends Enum8
 */
export const OcaPresentationUnit = Enum8({
  dBu: 0,
  dBV: 1,
  V: 2,
});
