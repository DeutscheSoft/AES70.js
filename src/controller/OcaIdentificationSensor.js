import { make_control_class } from './Base.js';
import { OcaSensor } from './OcaSensor.js';
import { OcaUint16 } from '../OCP1/OcaUint16.js';
import { String16 } from '../OCP1/String16.js';

/**
 * Sensor for device identification mechanism. The idea of this mechanism
 * is that there is some kind of control -- a pushbutton, for instance --
 * that the user depresses to send a device identification event to the
 * controller. Such mechanisms aid in the setup of networks.
 * @extends RemoteControlClasses.OcaSensor
 * @class OcaIdentificationSensor
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaIdentificationSensor = make_control_class(
  'OcaIdentificationSensor',
  4,
  '\u0001\u0001\u0002\u0006',
  2,
  OcaSensor,
  [],
  [],
  [['Identify', 4, 1, []]]
);

/**
 * Event that is emitted when someone actuates the device identification
 * control.
 * @member RemoteControlClasses.OcaIdentificationSensor#OnIdentify {Event} -
 * Event that is emitted when someone actuates the device identification
 * control.
 */
