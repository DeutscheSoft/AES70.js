import { make_control_class } from './Base.js';
import { OcaActuator } from './OcaActuator.js';
import { OcaFloat32 } from '../OCP1/OcaFloat32.js';
import { OcaUint16 } from '../OCP1/OcaUint16.js';
import { String16 } from '../OCP1/String16.js';

/**
 * Gain (or attenuation) element.
 * @extends RemoteControlClasses.OcaActuator
 * @class OcaGain
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaGain = make_control_class(
  'OcaGain',
  4,
  '\u0001\u0001\u0001\u0005',
  2,
  OcaActuator,
  [
    ['GetGain', 4, 1, [], [OcaFloat32, OcaFloat32, OcaFloat32]],
    ['SetGain', 4, 2, [OcaFloat32], []],
  ],
  [['Gain', [OcaFloat32], 4, 1, false, false, null]],
  []
);

/**
 * Gets the value and limits of the Gain property. The return value
 * indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaGain#GetGain
 * @returns {Promise<Arguments<OcaDB,OcaDB,OcaDB>>}
 */
/**
 * Sets the value of the Gain property. The return value indicates
 * whether the property was successfully set.
 * @method RemoteControlClasses.OcaGain#SetGain
 * @param Gain {OcaDB}
 *
 * @returns {Promise}
 */
/**
 * Gain in dB.
 * @member RemoteControlClasses.OcaGain#OnGainChanged {PropertyEvent<OcaDB>} - This event is emitted when Gain changes in the remote object.
 */
