import { make_control_class } from './Base.js';
import { OcaActuator } from './OcaActuator.js';
import { OcaUint16 } from '../OCP1/OcaUint16.js';
import { String16 } from '../OCP1/String16.js';

/**
 * A set of one or more non-network signal outputs. Number of channels is
 * set at construction time. This class has no native properties or
 * methods - they are all inherited from <b>OcaWorker</b> and above. It
 * is defined as a separate class as an aid to enumeration and signal
 * flow definition.
 * @extends RemoteControlClasses.OcaActuator
 * @class OcaSignalOutput
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaSignalOutput = make_control_class(
  'OcaSignalOutput',
  4,
  '\u0001\u0001\u0001\u0013',
  2,
  OcaActuator,
  [],
  [],
  []
);
