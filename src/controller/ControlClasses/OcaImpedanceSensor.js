import { make_control_class } from '../Base.js';
import { OcaSensor } from './OcaSensor.js';
import { OcaImpedance } from '../../OCP1/OcaImpedance.js';

/**
 * Basic impedance sensor. Value is complex (magnitude and phase).
 * @extends RemoteControlClasses.OcaSensor
 * @class OcaImpedanceSensor
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaImpedanceSensor = make_control_class(
  'OcaImpedanceSensor',
  4,
  '\u0001\u0001\u0002\t',
  1,
  OcaSensor,
  [['GetReading', 4, 1, [], [OcaImpedance, OcaImpedance, OcaImpedance]]],
  [['Reading', [OcaImpedance], 4, 1, false, false, null]],
  []
);

/**
 * Gets the value and limits of the  **Reading** property. The return value indicates whether the data was successfully retrieved.
 * The return values of this method are
 *
 * - Reading of type :class:`OcaImpedance`
 * - minReading of type :class:`OcaImpedance`
 * - maxReading of type :class:`OcaImpedance`
 *
 * @method RemoteControlClasses.OcaImpedanceSensor#GetReading
 * @returns {Promise<Arguments<OcaImpedance,OcaImpedance,OcaImpedance>>}
 */
/**
 * This event is emitted when the property Reading changes in the remote object.
 * The property ``Reading`` is described in the AES70 standard as follows.
 * Impedance value (magnitude and phase).
 *
 * @member {PropertyEvent<OcaImpedance>} RemoteControlClasses.OcaImpedanceSensor#OnReadingChanged
 */
