import { RemoteDevice } from '../remote_device';
import { OcaManager } from './OcaManager';

/**
 * Optional manager that provides application diagnostic aids. Unlike other
 * manager classes, OcaDiagnosticManager may be subclassed to provide
 * proprietary application diagnostic enhancements.
 *
 *  - May be instantiated once in any device.
 *
 *  - If instantiated, object number must be 13.
 *
 *
 * @extends OcaManager
 * @class OcaDiagnosticManager
 */
export declare class OcaDiagnosticManager extends OcaManager {
  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Retrieves a text description of the given object's lock status. Return
   * value indicates success of the retrieval.
   *
   * @method OcaDiagnosticManager#GetLockStatus
   * @param {number} ONo
   *
   * @returns {Promise<string>}
   *   A promise which resolves to a single value of type ``string``.
   */
  GetLockStatus(ONo: number): Promise<string>;
}
