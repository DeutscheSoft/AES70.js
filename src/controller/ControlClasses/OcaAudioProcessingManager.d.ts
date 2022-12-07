import { RemoteDevice } from '../remote_device';
import { OcaManager } from './OcaManager';

/**
 * Placeholder for optional manager that in future versions of the standard will
 * hold various global audio processing parameters.
 *
 *  - May be instantiated once in any device.
 *
 *  - If instantiated, object number must be 9.
 *
 *
 * @extends OcaManager
 * @class OcaAudioProcessingManager
 */
export declare class OcaAudioProcessingManager extends OcaManager {
  constructor(objectNumber: number, device: RemoteDevice);
}
