import { make_control_class } from './Base.js';
import { OcaSensor } from './OcaSensor.js';
import { OcaUint16 } from '../OCP1/OcaUint16.js';
import { String16 } from '../OCP1/String16.js';

/**
 * Abstract base class for weakly typed sensors.
 * @extends RemoteControlClasses.OcaSensor
 * @class OcaBasicSensor
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaBasicSensor = make_control_class(
  'OcaBasicSensor',
  4,
  '\u0001\u0001\u0002\u0001',
  2,
  OcaSensor,
  [],
  [],
  []
);
