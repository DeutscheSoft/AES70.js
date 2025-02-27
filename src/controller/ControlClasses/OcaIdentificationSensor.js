import { make_control_class } from '../make_control_class.js';
import { OcaSensor } from './OcaSensor.js';

/**
 * Sensor for device identification mechanism. This sensor shall detect the
 * actuation of some kind of control -- a pushbutton, for instance -- that the
 * user depresses to signal a device identification event to the controller.
 * @extends OcaSensor
 * @class OcaIdentificationSensor
 */
export const OcaIdentificationSensor = make_control_class(
  'OcaIdentificationSensor',
  4,
  '\u0001\u0001\u0002\u0006',
  3,
  OcaSensor,
  [],
  [],
  [['Identify', 4, 1, []]]
);

/**
 * Event that shall be raised whenever the Device identification control is
 * activated. No event data.
 * @member OcaIdentificationSensor#OnIdentify {Event}
 */
