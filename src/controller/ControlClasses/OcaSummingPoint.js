import { make_control_class } from '../make_control_class.js';
import { OcaActuator } from './OcaActuator.js';

/**
 * Actuator with no control parameters of its own, used as a simple node to
 * represent summations in block signal flows. Signal path connections are
 * controlled by methods inherited from **OcaWorker**.
 * @extends OcaActuator
 * @class OcaSummingPoint
 */
export const OcaSummingPoint = make_control_class(
  'OcaSummingPoint',
  4,
  '\u0001\u0001\u0001\u0016',
  3,
  OcaActuator,
  [],
  [],
  []
);
