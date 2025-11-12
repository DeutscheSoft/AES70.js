import { RemoteDevice } from '../remote_device.js';
import { OcaActuator } from './OcaActuator.js';

/**
 * Abstract base class for basic actuators.
 * @extends OcaActuator
 * @class OcaBasicActuator
 */
export declare class OcaBasicActuator extends OcaActuator {
  constructor(objectNumber: number, device: RemoteDevice);
}
