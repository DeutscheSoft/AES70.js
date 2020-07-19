import { make_control_class } from '../Base.js';
import { OcaActuator } from './OcaActuator.js';

/**
 * A set of one or more non-network signal inputs. Number of channels is
 * set at construction time. This class has no native properties or
 * methods - they are all inherited from <b>OcaWorker</b> and above. It
 * is defined as a separate class as an aid to enumeration and signal
 * flow definition.
 * @extends RemoteControlClasses.OcaActuator
 * @class OcaSignalInput
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaSignalInput = make_control_class(
  'OcaSignalInput',
  4,
  '\u0001\u0001\u0001\u0012',
  2,
  OcaActuator,
  [],
  [],
  []
);
