import { make_control_class } from '../Base.js';
import { OcaBasicActuator } from './OcaBasicActuator.js';
import { OcaInt16 } from '../../OCP1/OcaInt16.js';

/**
 * Basic int16 actuator.
 * @extends RemoteControlClasses.OcaBasicActuator
 * @class OcaInt16Actuator
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaInt16Actuator = make_control_class(
  'OcaInt16Actuator',
  5,
  '\u0001\u0001\u0001\u0001\u0003',
  2,
  OcaBasicActuator,
  [
    ['GetSetting', 5, 1, [], [OcaInt16, OcaInt16, OcaInt16]],
    ['SetSetting', 5, 2, [OcaInt16], []],
  ],
  [['Setting', [OcaInt16], 5, 1, false, false, null]],
  []
);

/**
 * Gets the value and limits of the <b>Setting </b>property. The return
 * value indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaInt16Actuator#GetSetting
 * @returns {Promise<Arguments<OcaInt16,OcaInt16,OcaInt16>>}
 */
/**
 * Sets the <b>Setting </b>property. The return value indicates whether
 * the property was successfully set.
 * @method RemoteControlClasses.OcaInt16Actuator#SetSetting
 * @param Setting {OcaInt16}
 *
 * @returns {Promise}
 */
/**
 * Int16 setting.
 * @member RemoteControlClasses.OcaInt16Actuator#OnSettingChanged {PropertyEvent<OcaInt16>} - This event is emitted when Setting changes in the remote object.
 */
