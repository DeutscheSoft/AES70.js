import { make_control_class } from '../Base.js';
import { OcaActuator } from './OcaActuator.js';

/**
 * Actuator with no control parameters, used as a simple node to
 * represent summations in block signal flows.
 * @extends RemoteControlClasses.OcaActuator
 * @class OcaSummingPoint
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaSummingPoint = make_control_class(
  'OcaSummingPoint',
  4,
  '\u0001\u0001\u0001\u0016',
  1,
  OcaActuator,
  [],
  [],
  []
);
