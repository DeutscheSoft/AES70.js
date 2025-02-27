import { OcaFloat32 } from '../../OCP1/OcaFloat32.js';
import { make_control_class } from '../make_control_class.js';
import { OcaSensor } from './OcaSensor.js';

/**
 * Power sensor. Reading shall be a watts value and a power factor value.
 * @extends OcaSensor
 * @class OcaPowerSensor
 */
export const OcaPowerSensor = make_control_class(
  'OcaPowerSensor',
  4,
  '\u0001\u0001\u0002\u000b',
  1,
  OcaSensor,
  [['GetReading', 4, 1, [], [OcaFloat32, OcaFloat32, OcaFloat32, OcaFloat32]]],
  [
    ['Power', [OcaFloat32], 4, 1, false, false, null],
    ['PowerFactor', [OcaFloat32], 4, 2, false, false, null],
  ],
  []
);

/**
 * Gets the value and limits of the **Power** property, and the value of the
 * **PowerFactor** propert**y**.
 * The return values of this method are
 *
 * - Power of type ``number``
 * - PowerFactor of type ``number``
 * - minPower of type ``number``
 * - maxPower of type ``number``
 *
 * @method OcaPowerSensor#GetReading
 * @returns {Promise<Arguments<number,number,number,number>>}
 */
/**
 * This event is emitted when the property ``Power`` changes in the remote object.
 * The property ``Power`` is described in the AES70 standard as follows.
 * Power in watts.
 *
 * @member {PropertyEvent<number>} OcaPowerSensor#OnPowerChanged
 */
/**
 * This event is emitted when the property ``PowerFactor`` changes in the remote object.
 * The property ``PowerFactor`` is described in the AES70 standard as follows.
 * Power factor. Value shall range from 1 to zero, with 1 applying to a purely
 * resistive circuit.
 *
 * @member {PropertyEvent<number>} OcaPowerSensor#OnPowerFactorChanged
 */
