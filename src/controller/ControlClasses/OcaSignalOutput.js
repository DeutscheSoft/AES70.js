import { make_control_class } from '../make_control_class.js';
import { OcaActuator } from './OcaActuator.js';

/**
 * A set of one or more non-network signal outputs. Number of channels is set at
 * construction time. This class has no native properties or methods - they are
 * all inherited from **OcaWorker** and above. It is defined as a separate class
 * as an aid to enumeration and signal flow definition.
 * @extends OcaActuator
 * @class OcaSignalOutput
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
