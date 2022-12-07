import { RemoteDevice } from '../remote_device';
import { OcaActuator } from './OcaActuator';

/**
 * A set of one or more non-network signal inputs. Number of channels is set at
 * construction time. This class has no native properties or methods - they are
 * all inherited from **OcaWorker** and above. It is defined as a separate class
 * as an aid to enumeration and signal flow definition.
 * @extends OcaActuator
 * @class OcaSignalInput
 */
export declare class OcaSignalInput extends OcaActuator {
  constructor(objectNumber: number, device: RemoteDevice);
}
