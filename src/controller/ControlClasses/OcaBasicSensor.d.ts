import { RemoteDevice } from '../remote_device.js';
import { OcaSensor } from './OcaSensor.js';

/**
 * Abstract base class for basic sensors.
 * @extends OcaSensor
 * @class OcaBasicSensor
 */
export declare class OcaBasicSensor extends OcaSensor {
  constructor(objectNumber: number, device: RemoteDevice);
}
