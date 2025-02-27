import { IOcaLockState } from '../../types/OcaLockState';
import { RemoteDevice } from '../remote_device';
import { OcaManager } from './OcaManager';

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
export declare class OcaLockManager extends OcaManager {
  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Lock an object. returns when lock is set or timeout expires or
   * **AbortWaits(...)** is called. A timeout value of zero requests an
   * indefinite wait with no timeout.. Note: To lock an entire device, lock its
   * Device Manager (ONo 1).
   *
   * @method OcaLockManager#LockWait
   * @param {number} target
   * @param {IOcaLockState} type
   * @param {number} timeout
   *
   * @returns {Promise<void>}
   */
  LockWait(target: number, type: IOcaLockState, timeout: number): Promise<void>;

  /**
   * Aborts all of this session's waits on the given object.
   *
   * @method OcaLockManager#AbortWaits
   * @param {number} ONo
   *
   * @returns {Promise<void>}
   */
  AbortWaits(ONo: number): Promise<void>;
}
