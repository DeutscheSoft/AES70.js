import { RemoteDevice } from '../remote_device';
import { OcaRoot } from './OcaRoot';

/**
 * Abstract base class for classes that represent non-audio (i.e. control and
 * monitoring) functions. All concrete manager objects are lockable (the
 * constructor of this class initializes the Root object with property Lockable
 * true).
 * @extends OcaRoot
 * @class OcaManager
 */
export declare class OcaManager extends OcaRoot {
  constructor(objectNumber: number, device: RemoteDevice);
}
