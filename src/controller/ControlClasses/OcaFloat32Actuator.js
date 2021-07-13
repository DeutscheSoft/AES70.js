import { make_control_class } from '../Base.js';
import { OcaBasicActuator } from './OcaBasicActuator.js';
import { OcaFloat32 } from '../../OCP1/OcaFloat32.js';

/**
 * Basic float32 actuator.
 * @extends OcaBasicActuator
 * @class OcaFloat32Actuator
 */
export const OcaFloat32Actuator = make_control_class(
  'OcaFloat32Actuator',
  5,
  '\u0001\u0001\u0001\u0001\n',
  2,
  OcaBasicActuator,
  [
    ['GetSetting', 5, 1, [], [OcaFloat32, OcaFloat32, OcaFloat32]],
    ['SetSetting', 5, 2, [OcaFloat32], []],
  ],
  [['Setting', [OcaFloat32], 5, 1, false, false, null]],
  []
);

/**
 * Gets the value and limits of the  **Setting** property. The return value indicates whether the data was successfully retrieved.
 * The return values of this method are
 *
 * - Setting of type ``number``
 * - minSetting of type ``number``
 * - maxSetting of type ``number``
 *
 * @method OcaFloat32Actuator#GetSetting
 * @returns {Promise<Arguments<number,number,number>>}
 */
/**
 * Sets the  **Setting** property. The return value indicates whether the property was successfully set.
 *
 * @method OcaFloat32Actuator#SetSetting
 * @param {number} Setting
 *
 * @returns {Promise<void>}
 */
/**
 * This event is emitted when the property Setting changes in the remote object.
 * The property ``Setting`` is described in the AES70 standard as follows.
 * Float32 setting.
 *
 * @member {PropertyEvent<number>} OcaFloat32Actuator#OnSettingChanged
 */
