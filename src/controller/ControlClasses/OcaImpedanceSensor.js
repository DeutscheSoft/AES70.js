import { OcaImpedance } from '../../OCP1/OcaImpedance.js';
import { make_control_class } from '../make_control_class.js';
import { OcaSensor } from './OcaSensor.js';

/**
 * Complex impedance sensor. Value shall be reported as a magnitude and a phase.
 * @extends OcaSensor
 * @class OcaImpedanceSensor
 */
export const OcaImpedanceSensor = make_control_class(
  'OcaImpedanceSensor',
  4,
  '\u0001\u0001\u0002\t',
  3,
  OcaSensor,
  [['GetReading', 4, 1, [], [OcaImpedance, OcaImpedance, OcaImpedance]]],
  [['Reading', [OcaImpedance], 4, 1, false, false, null]],
  []
);

/**
 * Gets the value and limits of the **Reading** property.
 * The return values of this method are
 *
 * - Reading of type ``IOcaImpedance``
 * - minReading of type ``IOcaImpedance``
 * - maxReading of type ``IOcaImpedance``
 *
 * @method OcaImpedanceSensor#GetReading
 * @returns {Promise<Arguments<OcaImpedance,OcaImpedance,OcaImpedance>>}
 */
/**
 * This event is emitted when the property ``Reading`` changes in the remote object.
 * The property ``Reading`` is described in the AES70 standard as follows.
 * Impedance value (magnitude and phase).
 *
 * @member {PropertyEvent<OcaImpedance>} OcaImpedanceSensor#OnReadingChanged
 */
