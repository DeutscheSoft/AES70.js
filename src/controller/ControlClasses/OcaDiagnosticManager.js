import { make_control_class } from '../make_control_class.js';
import { OcaManager } from './OcaManager.js';

/**
 * Optional manager that provides application diagnostic aids. Unlike other
 * manager classes, OcaDiagnosticManager may be subclassed to provide
 * proprietary application diagnostic enhancements.
 *
 *  - May be instantiated at most once in any device.
 *
 *  - If instantiated, object number must be 13.
 *
 *
 * @extends OcaManager
 * @class OcaDiagnosticManager
 */
export const OcaDiagnosticManager = make_control_class(
  'OcaDiagnosticManager',
  3,
  '\u0001\u0003\r',
  3,
  OcaManager,
  [],
  [],
  []
);
