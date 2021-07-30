import { RemoteDevice } from '../remote_device';
import { OcaSensor } from './OcaSensor';

/**
 * Abstract base class for weakly typed sensors.
 * @extends OcaSensor
 * @class OcaBasicSensor
 */
export declare class OcaBasicSensor extends OcaSensor {
  constructor(objectNumber: number, device: RemoteDevice);
}
