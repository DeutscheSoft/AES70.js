import { make_control_class } from './Base.js';
import { OcaManager } from './OcaManager.js';
import { OcaString } from '../OCP1/OcaString.js';
import { OcaUint16 } from '../OCP1/OcaUint16.js';
import { OcaUint32 } from '../OCP1/OcaUint32.js';
import { String16 } from '../OCP1/String16.js';

/**
 * Optional manager that provides application diagnostic aids. Unlike
 * other manager classes, OcaDiagnosticManager may be subclassed to
 * provide proprietary application diagnostic enhancements. <ul> <li>May
 * be instantiated once in any device. </li> <li>If instantiated, object
 * number must be 13.</li> </ul>
 * @extends RemoteControlClasses.OcaManager
 * @class OcaDiagnosticManager
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaDiagnosticManager = make_control_class(
  'OcaDiagnosticManager',
  3,
  '\u0001\u0003\r',
  1,
  OcaManager,
  [['GetLockStatus', 3, 1, [OcaUint32], [OcaString]]],
  [],
  []
);

/**
 * Retrieves a text description of the given object's lock status. Return
 * value indicates success of the retrieval.
 * @method RemoteControlClasses.OcaDiagnosticManager#GetLockStatus
 * @param ONo {OcaONo}
 *
 * @returns {Promise<OcaString>}
 */
