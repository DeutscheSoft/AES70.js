import { RemoteDevice } from '../remote_device';
import { OcaActuator } from './OcaActuator';

/**
 * A set of one or more non-network signal outputs. Number of channels shall be
 * set at construction time. This class has no native properties or methods -
 * they are all inherited from **OcaWorker** and above. It is defined as a
 * separate class as an aid to enumeration and signal flow definition.
 * @extends OcaActuator
 * @class OcaSignalOutput
 */
export declare class OcaSignalOutput extends OcaActuator {
  constructor(objectNumber: number, device: RemoteDevice);
}
