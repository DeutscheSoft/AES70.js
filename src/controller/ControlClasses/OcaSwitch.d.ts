import { Arguments } from '../arguments';
import { PropertyEvent } from '../property_event';
import { RemoteDevice } from '../remote_device';
import { OcaActuator } from './OcaActuator';

/**
 * (n)-position single-pole switch.
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
   * This event is emitted whenever PositionEnableds changes.
   */
  OnPositionEnabledsChanged: PropertyEvent<boolean[]>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the value of the Position property and, optionally, its implementation
   * min and max. The return value indicates whether the data was successfully
   * retrieved.
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
   * Sets the value of the Position property. The return value indicates whether
   * the property was successfully set.
   *
   * @method OcaSwitch#SetPosition
   * @param {number} position
   *
   * @returns {Promise<void>}
   */
  SetPosition(position: number): Promise<void>;

  /**
   * Gets the name assigned to a given switch position. The return value
   * indicates whether the name was successfully retrieved.
   *
   * @method OcaSwitch#GetPositionName
   * @param {number} Index
   *
   * @returns {Promise<string>}
   *   A promise which resolves to a single value of type ``string``.
   */
  GetPositionName(Index: number): Promise<string>;

  /**
   * Assigns a name to a given switch position. The return value indicates
   * whether the name was successfully assigned.
   *
   * @method OcaSwitch#SetPositionName
   * @param {number} Index
   * @param {string} Name
   *
   * @returns {Promise<void>}
   */
  SetPositionName(Index: number, Name: string): Promise<void>;

  /**
   * Gets list of names assigned to the switch's positions. The return value
   * indicates whether the names were successfully retrieved.
   *
   * @method OcaSwitch#GetPositionNames
   * @returns {Promise<string[]>}
   *   A promise which resolves to a single value of type ``string[]``.
   */
  GetPositionNames(): Promise<string[]>;

  /**
   * Assigns names to the switch's positions. The return value indicates whether
   * the names were successfully assigned.
   *
   * @method OcaSwitch#SetPositionNames
   * @param {string[]} Names
   *
   * @returns {Promise<void>}
   */
  SetPositionNames(Names: string[]): Promise<void>;

  /**
   * Gets the Enabled flag assigned to a given switch position. The return value
   * indicates whether the flag was successfully retrieved.
   *
   * @method OcaSwitch#GetPositionEnabled
   * @param {number} Index
   *
   * @returns {Promise<boolean>}
   *   A promise which resolves to a single value of type ``boolean``.
   */
  GetPositionEnabled(Index: number): Promise<boolean>;

  /**
   * Sets the Enabled flag assigned to a given switch position. The return value
   * indicates whether the flag was successfully set.
   *
   * @method OcaSwitch#SetPositionEnabled
   * @param {number} Index
   * @param {boolean} enabled
   *
   * @returns {Promise<void>}
   */
  SetPositionEnabled(Index: number, enabled: boolean): Promise<void>;

  /**
   * Gets list of Enabled flags assigned to the switch's positions. The return
   * value indicates whether the flags were successfully retrieved.
   *
   * @method OcaSwitch#GetPositionEnableds
   * @returns {Promise<boolean[]>}
   *   A promise which resolves to a single value of type ``boolean[]``.
   */
  GetPositionEnableds(): Promise<boolean[]>;

  /**
   * Sets list of Enabled flags for the switch's positions. The return value
   * indicates whether the flags were successfully set.
   *
   * @method OcaSwitch#SetPositionEnableds
   * @param {boolean[]} enableds
   *
   * @returns {Promise<void>}
   */
  SetPositionEnableds(enableds: boolean[]): Promise<void>;
}
