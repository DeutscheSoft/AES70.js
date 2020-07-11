import { make_control_class } from './Base.js';
import { OcaWorker } from './OcaWorker.js';
import { OcaUint16 } from '../OCP1/OcaUint16.js';
import { String16 } from '../OCP1/String16.js';

/**
 * Abstract base class for all actuators (i.e. devices that affect the
 * routing and/or content of the audio signal, or provide ancillary
 * functions such as power).
 * @extends RemoteControlClasses.OcaWorker
 * @class OcaActuator
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
