import { Arguments } from '../arguments.js';
import { PropertyEvent } from '../property_event.js';
import { RemoteDevice } from '../remote_device.js';
import { OcaActuator } from './OcaActuator.js';

/**
 * (n)-position switch. Single-pole or multipole, as determined by number of
 * input and output ports. May be instantiated with no ports for use as an
 * option selector.
 * @extends OcaActuator
 * @class OcaSwitch
 */
export declare class OcaSwitch extends OcaActuator {
  /**
   * This event is emitted whenever Position changes.
   */
  OnPositionChanged: PropertyEvent<number>;

  /**
   * This event is emitted whenever PositionNames changes.
   */
  OnPositionNamesChanged: PropertyEvent<string[]>;

  /**
   * This event is emitted whenever PositionEnableFlags changes.
   */
  OnPositionEnableFlagsChanged: PropertyEvent<boolean[]>;

  /**
   * An alias for OnPositionEnableFlagsChanged
   */
  OnPositionEnableChanged: PropertyEvent<boolean[]>;
  /**
   * An alias for OnPositionEnableFlagsChanged
   */
  OnPositionEnabledsChanged: PropertyEvent<boolean[]>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the value and limits of the **Position** property.
   * The return values of this method are
   *
   * - position of type ``number``
   * - minPosition of type ``number``
   * - maxPosition of type ``number``
   *
   * @method OcaSwitch#GetPosition
   * @returns {Promise<Arguments<number,number,number>>}
   */
  GetPosition(): Promise<Arguments<[number, number, number]>>;

  /**
   * Sets the value of the Position property.
   *
   * @method OcaSwitch#SetPosition
   * @param {number} position
   *
   * @returns {Promise<void>}
   */
  SetPosition(position: number): Promise<void>;

  /**
   * Gets the name assigned to a given switch position.
   *
   * @method OcaSwitch#GetPositionName
   * @param {number} Index
   *
   * @returns {Promise<string>}
   *   A promise which resolves to a single value of type ``string``.
   */
  GetPositionName(Index: number): Promise<string>;

  /**
   * Assigns a name to a given switch position.
   *
   * @method OcaSwitch#SetPositionName
   * @param {number} Index
   * @param {string} Name
   *
   * @returns {Promise<void>}
   */
  SetPositionName(Index: number, Name: string): Promise<void>;

  /**
   * Gets list of names assigned to the switch's positions.
   *
   * @method OcaSwitch#GetPositionNames
   * @returns {Promise<string[]>}
   *   A promise which resolves to a single value of type ``string[]``.
   */
  GetPositionNames(): Promise<string[]>;

  /**
   * Assigns names to the switch's positions.
   *
   * @method OcaSwitch#SetPositionNames
   * @param {string[]} Names
   *
   * @returns {Promise<void>}
   */
  SetPositionNames(Names: string[]): Promise<void>;

  /**
   * Gets the Enabled flag assigned to a given switch position.
   *
   * @method OcaSwitch#GetPositionEnableFlag
   * @param {number} Index
   *
   * @returns {Promise<boolean>}
   *   A promise which resolves to a single value of type ``boolean``.
   */
  GetPositionEnableFlag(Index: number): Promise<boolean>;

  /**
   * Gets the Enabled flag assigned to a given switch position.
   * An alias for GetPositionEnableFlag.
   *
   * @method OcaSwitch#GetPositionEnabled
   * @param {number} Index
   *
   * @returns {Promise<boolean>}
   *   A promise which resolves to a single value of type ``boolean``.
   */
  GetPositionEnabled(Index: number): Promise<boolean>;

  /**
   * Sets the Enabled flag assigned to a given switch position.
   *
   * @method OcaSwitch#SetPositionEnableFlag
   * @param {number} Index
   * @param {boolean} enabled
   *
   * @returns {Promise<void>}
   */
  SetPositionEnableFlag(Index: number, enabled: boolean): Promise<void>;

  /**
   * Sets the Enabled flag assigned to a given switch position.
   * An alias for SetPositionEnableFlag.
   *
   * @method OcaSwitch#SetPositionEnabled
   * @param {number} Index
   * @param {boolean} enabled
   *
   * @returns {Promise<void>}
   */
  SetPositionEnabled(Index: number, enabled: boolean): Promise<void>;

  /**
   * Gets list of position-enabled flags assigned to the switch's positions.
   *
   * @method OcaSwitch#GetPositionEnableFlags
   * @returns {Promise<boolean[]>}
   *   A promise which resolves to a single value of type ``boolean[]``.
   */
  GetPositionEnableFlags(): Promise<boolean[]>;

  /**
   * Gets list of position-enabled flags assigned to the switch's positions.
   * An alias for GetPositionEnableFlags.
   *
   * @method OcaSwitch#GetPositionEnableds
   * @returns {Promise<boolean[]>}
   *   A promise which resolves to a single value of type ``boolean[]``.
   */
  GetPositionEnableds(): Promise<boolean[]>;

  /**
   * Sets list of position-enable flags for the switch's positions.
   *
   * @method OcaSwitch#SetPositionEnableFlags
   * @param {boolean[]} flags
   *
   * @returns {Promise<void>}
   */
  SetPositionEnableFlags(flags: boolean[]): Promise<void>;

  /**
   * Sets list of position-enable flags for the switch's positions.
   * An alias for SetPositionEnableFlags.
   *
   * @method OcaSwitch#SetPositionEnableds
   * @param {boolean[]} flags
   *
   * @returns {Promise<void>}
   */
  SetPositionEnableds(flags: boolean[]): Promise<void>;
}
