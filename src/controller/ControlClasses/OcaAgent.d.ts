import { RemoteDevice } from '../remote_device';
import { OcaRoot } from './OcaRoot';
import { Arguments } from '../arguments';

import { PropertyEvent } from '../Base';

/**
 * Abstract base class for defining agents.
 * @extends OcaRoot
 * @class OcaAgent
 */
export declare class OcaAgent extends OcaRoot {
  /**
   * This event is emitted whenever Label changes.
   */
  OnLabelChanged: PropertyEvent<string>;

  /**
   * This event is emitted whenever Owner changes.
   */
  OnOwnerChanged: PropertyEvent<number>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the value of the Label property. The return value indicates whether the property was successfully retrieved.
   *
   * @method OcaAgent#GetLabel
   * @returns {Promise<string>}
   *   A promise which resolves to a single value of type ``string``.
   */
  GetLabel(): Promise<string>;

  /**
   * Sets the value of the Label property. The return value indicates whether the property was successfully set.
   *
   * @method OcaAgent#SetLabel
   * @param {string} Label
   *
   * @returns {Promise<void>}
   */
  SetLabel(Label: string): Promise<void>;

  /**
   * Gets the value of the Owner property. The return value indicates whether the property was successfully retrieved.
   *
   * @method OcaAgent#GetOwner
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetOwner(): Promise<number>;

  /**
   * Returns path from the given object down to root. The return value indicates whether the operation succeeded. Added in version 2.
   * The return values of this method are
   *
   * - NamePath of type ``string[]``
   * - ONoPath of type ``number[]``
   *
   * @method OcaAgent#GetPath
   * @returns {Promise<Arguments<string[],number[]>>}
   */
  GetPath(): Promise<Arguments<[string[], number[]]>>;
}
