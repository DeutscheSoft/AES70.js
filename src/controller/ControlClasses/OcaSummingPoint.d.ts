import { RemoteDevice } from '../remote_device';
import { OcaActuator } from './OcaActuator';

/**
 * Actuator with no control parameters, used as a simple node to represent summations in block signal flows.
 * @extends OcaActuator
 * @class OcaSummingPoint
 */
export declare class OcaSummingPoint extends OcaActuator {
  constructor(objectNumber: number, device: RemoteDevice);
}
