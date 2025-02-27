import { make_control_class } from '../make_control_class.js';
import { OcaActuator } from './OcaActuator.js';

/**
 * Abstract base class for basic actuators.
 * @extends OcaActuator
 * @class OcaBasicActuator
 */
export const OcaBasicActuator = make_control_class(
  'OcaBasicActuator',
  4,
  '\u0001\u0001\u0001\u0001',
  3,
  OcaActuator,
  [],
  [],
  []
);
