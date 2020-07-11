import { make_control_class } from './Base.js';
import { OcaSensor } from './OcaSensor.js';
import { OcaImpedance } from '../OCP1/OcaImpedance.js';
import { OcaUint16 } from '../OCP1/OcaUint16.js';
import { String16 } from '../OCP1/String16.js';

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
 * Gets the value and limits of the <b>Reading </b>property. The return
 * value indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaImpedanceSensor#GetReading
 * @returns {Promise<Arguments<OcaImpedance,OcaImpedance,OcaImpedance>>}
 */
/**
 * Impedance value (magnitude and phase).
 * @member RemoteControlClasses.OcaImpedanceSensor#OnReadingChanged {PropertyEvent<OcaImpedance>} - This event is emitted when Reading changes in the remote object.
 */
