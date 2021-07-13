import { make_control_class } from '../Base.js';
import { OcaActuator } from './OcaActuator.js';

/**
 * Abstract base class for weakly typed actuators.
 * @extends OcaActuator
 * @class OcaBasicActuator
 */
export const OcaBasicActuator = make_control_class(
  'OcaBasicActuator',
  4,
  '\u0001\u0001\u0001\u0001',
  2,
  OcaActuator,
  [],
  [],
  []
);
