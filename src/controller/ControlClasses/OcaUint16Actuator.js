import { make_control_class } from '../Base.js';
import { OcaBasicActuator } from './OcaBasicActuator.js';
import { OcaUint16 } from '../../OCP1/OcaUint16.js';

/**
 * Basic uint16 actuator.
 * @extends OcaBasicActuator
 * @class OcaUint16Actuator
 */
export const OcaUint16Actuator = make_control_class(
  'OcaUint16Actuator',
  5,
  '\u0001\u0001\u0001\u0001\u0007',
  2,
  OcaBasicActuator,
  [
    ['GetSetting', 5, 1, [], [OcaUint16, OcaUint16, OcaUint16]],
    ['SetSetting', 5, 2, [OcaUint16], []],
  ],
  [['Setting', [OcaUint16], 5, 1, false, false, null]],
  []
);

/**
 * Gets the value and limits of the Setting property. The return value indicates whether the data was successfully retrieved.
 * The return values of this method are
 *
 * - Setting of type ``number``
 * - minSetting of type ``number``
 * - maxSetting of type ``number``
 *
 * @method OcaUint16Actuator#GetSetting
 * @returns {Promise<Arguments<number,number,number>>}
 */
/**
 * Sets the value of the  **Setting** property. The return value indicates whether the property was successfully set.
 *
 * @method OcaUint16Actuator#SetSetting
 * @param {number} Setting
 *
 * @returns {Promise<void>}
 */
/**
 * This event is emitted when the property Setting changes in the remote object.
 * The property ``Setting`` is described in the AES70 standard as follows.
 * Uint16 setting.
 *
 * @member {PropertyEvent<number>} OcaUint16Actuator#OnSettingChanged
 */
