import { RemoteDevice } from '../remote_device';
import { OcaWorker } from './OcaWorker';

/**
 * Abstract base class for all actuators (i.e. devices that affect the routing and/or content of the audio signal, or provide ancillary functions such as power).
 * @extends OcaWorker
 * @class OcaActuator
 */
export declare class OcaActuator extends OcaWorker {
  constructor(objectNumber: number, device: RemoteDevice);
}
