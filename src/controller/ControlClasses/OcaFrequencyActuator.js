import { make_control_class } from '../Base.js';
import { OcaActuator } from './OcaActuator.js';
import { OcaFloat32 } from '../../OCP1/OcaFloat32.js';

/**
 * Simple frequency actuator.
 * @extends RemoteControlClasses.OcaActuator
 * @class OcaFrequencyActuator
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaFrequencyActuator = make_control_class(
  'OcaFrequencyActuator',
  4,
  '\u0001\u0001\u0001\b',
  2,
  OcaActuator,
  [
    ['GetFrequency', 4, 1, [], [OcaFloat32, OcaFloat32, OcaFloat32]],
    ['SetFrequency', 4, 2, [OcaFloat32], []],
  ],
  [['Frequency', [OcaFloat32], 4, 1, false, false, null]],
  []
);

/**
 * Gets the value of the Frequency property. The return value indicates
 * whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaFrequencyActuator#GetFrequency
 * @returns {Promise<Arguments<OcaFrequency,OcaFrequency,OcaFrequency>>}
 */
/**
 * Sets the value of the Frequency property. The return value indicates
 * whether the property was successfully set.
 * @method RemoteControlClasses.OcaFrequencyActuator#SetFrequency
 * @param Frequency {OcaFrequency}
 *
 * @returns {Promise}
 */
/**
 * Frequency in Hertz.
 * @member RemoteControlClasses.OcaFrequencyActuator#OnFrequencyChanged {PropertyEvent<OcaFrequency>} - This event is emitted when Frequency changes in the remote object.
 */
