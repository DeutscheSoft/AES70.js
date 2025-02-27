import { RemoteDevice } from '../remote_device';
import { OcaManager } from './OcaManager';

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
export declare class OcaDiagnosticManager extends OcaManager {
  constructor(objectNumber: number, device: RemoteDevice);
}
