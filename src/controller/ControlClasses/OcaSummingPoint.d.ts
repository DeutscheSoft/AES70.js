import { RemoteDevice } from '../remote_device';
import { OcaActuator } from './OcaActuator';

/**
 * Actuator with no control parameters of its own, used as a simple node to
 * represent summations in block signal flows. Signal path connections are
 * controlled by methods inherited from **OcaWorker**.
 * @extends OcaActuator
 * @class OcaSummingPoint
 */
export declare class OcaSummingPoint extends OcaActuator {
  constructor(objectNumber: number, device: RemoteDevice);
}
