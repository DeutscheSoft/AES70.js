import { RemoteDevice } from './remote_device.js';
import { IOcaPropertyID, OcaPropertyID } from '../types/OcaPropertyID.js';

export class ObjectBase {
  readonly device: RemoteDevice;
  readonly ono: number;

  constructor(ObjectNumber: number, device: RemoteDevice);

  /**
   * Returns the object number.
   */
  get ObjectNumber(): number;

  /**
   * Returns the class version of this implementation.
   */
  get ClassVersion(): number;

  /**
   * Returns the class id of this implementation.
   */
  get ClassID(): string;

  /**
   * Returns the name of this class.
   */
  get ClassName(): string;

  GetPropertyName(id: IOcaPropertyID): string | undefined;
  GetPropertyID(name: string): OcaPropertyID;

  Dispose(): void;
}
