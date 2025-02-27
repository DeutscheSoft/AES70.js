import { make_control_class } from '../make_control_class.js';
import { OcaSensor } from './OcaSensor.js';

/**
 * Abstract base class for basic sensors.
 * @extends OcaSensor
 * @class OcaBasicSensor
 */
export const OcaBasicSensor = make_control_class(
  'OcaBasicSensor',
  4,
  '\u0001\u0001\u0002\u0001',
  3,
  OcaSensor,
  [],
  [],
  []
);
