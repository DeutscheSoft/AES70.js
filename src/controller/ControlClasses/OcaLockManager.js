import { OcaFloat32 } from '../../OCP1/OcaFloat32.js';
import { OcaLockState } from '../../OCP1/OcaLockState.js';
import { OcaUint32 } from '../../OCP1/OcaUint32.js';
import { make_control_class } from '../make_control_class.js';
import { OcaManager } from './OcaManager.js';

/**
 * Optional object and device lock manager that supports mutex-type waits for
 * locking things without causing race conditions.
 *
 *  - May be instantiated at most once in any device.
 *
 *  - If instantiated, object number must be 14 (decimal).
 *
 *
 * @extends OcaManager
 * @class OcaLockManager
 */
export const OcaLockManager = make_control_class(
  'OcaLockManager',
  3,
  '\u0001\u0003\u000e',
  1,
  OcaManager,
  [
    ['LockWait', 3, 1, [OcaUint32, OcaLockState, OcaFloat32], []],
    ['AbortWaits', 3, 2, [OcaUint32], []],
  ],
  [],
  []
);

/**
 * Lock an object. returns when lock is set or timeout expires or
 * **AbortWaits(...)** is called. A timeout value of zero requests an indefinite
 * wait with no timeout.. Note: To lock an entire device, lock its Device
 * Manager (ONo 1).
 *
 * @method OcaLockManager#LockWait
 * @param {number} target
 * @param {IOcaLockState} type
 * @param {number} timeout
 *
 * @returns {Promise<void>}
 */
/**
 * Aborts all of this session's waits on the given object.
 *
 * @method OcaLockManager#AbortWaits
 * @param {number} ONo
 *
 * @returns {Promise<void>}
 */
