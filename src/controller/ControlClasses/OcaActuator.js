import { make_control_class } from '../make_control_class.js';
import { OcaWorker } from './OcaWorker.js';

/**
 * Abstract base class for all actuators (i.e. devices that affect the routing
 * and/or content of the audio signal, or provide ancillary functions such as
 * power).
 * @extends OcaWorker
 * @class OcaActuator
 */
export const OcaActuator = make_control_class(
  'OcaActuator',
  3,
  '\u0001\u0001\u0001',
  2,
  OcaWorker,
  [],
  [],
  []
);
