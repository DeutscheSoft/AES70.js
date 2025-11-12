import { Arguments } from '../arguments.js';
import { PropertyEvent } from '../property_event.js';
import { RemoteDevice } from '../remote_device.js';
import { OcaRoot } from './OcaRoot.js';

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

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the value of the **Label** property.
   *
   * @method OcaAgent#GetLabel
   * @returns {Promise<string>}
   *   A promise which resolves to a single value of type ``string``.
   */
  GetLabel(): Promise<string>;

  /**
   * Sets the value of the **Label** property.
   *
   * @method OcaAgent#SetLabel
   * @param {string} Label
   *
   * @returns {Promise<void>}
   */
  SetLabel(Label: string): Promise<void>;

  /**
   * Gets the value of the **Owner** property.
   *
   * @method OcaAgent#GetOwner
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetOwner(): Promise<number>;

  /**
   * Returns Role Path and ONo Path from the Root Block to this object. The
   * return value indicates whether the operation succeeded.
   * The return values of this method are
   *
   * - RolePath of type ``string[]``
   * - ONoPath of type ``number[]``
   *
   * @method OcaAgent#GetPath
   * @returns {Promise<Arguments<string[],number[]>>}
   */
  GetPath(): Promise<Arguments<[string[], number[]]>>;
}
