import { IOcaLockState } from '../../types/OcaLockState.js';
import { OcaTime } from '../../types/OcaTime.js';
import { Arguments } from '../arguments.js';
import { PropertyEvent } from '../property_event.js';
import { RemoteDevice } from '../remote_device.js';
import { OcaRoot } from './OcaRoot.js';

/**
 *
 *  - An OCA Dataset. A dataset is like a simple binary file that can be read
 *    and written.
 *
 *  - Every dataset is a separate **OcaDataset** object.
 *
 *
 * @extends OcaRoot
 * @class OcaDataset
 */
export declare class OcaDataset extends OcaRoot {
  /**
   * This event is emitted whenever Name changes.
   */
  OnNameChanged: PropertyEvent<string>;

  /**
   * This event is emitted whenever Type changes.
   */
  OnTypeChanged: PropertyEvent<string>;

  /**
   * This event is emitted whenever ReadOnly changes.
   */
  OnReadOnlyChanged: PropertyEvent<boolean>;

  /**
   * This event is emitted whenever LastModificationTime changes.
   */
  OnLastModificationTimeChanged: PropertyEvent<OcaTime>;

  /**
   * This event is emitted whenever MaxSize changes.
   */
  OnMaxSizeChanged: PropertyEvent<number | BigInt>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Opens a reading session. Returns status = **ProcessingFailed** if handle
   * pool is used up.
   * The return values of this method are
   *
   * - DatasetSize of type ``number|BigInt``
   * - Handle of type ``number``
   *
   * @method OcaDataset#OpenRead
   * @param {IOcaLockState} RequestedLockState
   *
   * @returns {Promise<Arguments<number|BigInt,number>>}
   */
  OpenRead(
    RequestedLockState: IOcaLockState
  ): Promise<Arguments<[number | BigInt, number]>>;

  /**
   * Opens a writing session. Returns status = **ProcessingFailed** if handle
   * pool is used up.
   * The return values of this method are
   *
   * - MaxPartSize of type ``number|BigInt``
   * - Handle of type ``number``
   *
   * @method OcaDataset#OpenWrite
   * @param {IOcaLockState} RequestedLockState
   *
   * @returns {Promise<Arguments<number|BigInt,number>>}
   */
  OpenWrite(
    RequestedLockState: IOcaLockState
  ): Promise<Arguments<[number | BigInt, number]>>;

  /**
   * Closes a reading or writing session.
   *
   * @method OcaDataset#Close
   * @param {number} Handle
   *
   * @returns {Promise<void>}
   */
  Close(Handle: number): Promise<void>;

  /**
   * Reads a part of the Dataset.
   * The return values of this method are
   *
   * - EndOfData of type ``boolean``
   * - Part of type ``Uint8Array``
   *
   * @method OcaDataset#Read
   * @param {number} Handle
   * @param {number|BigInt} Position
   * @param {number|BigInt} PartSize
   *
   * @returns {Promise<Arguments<boolean,Uint8Array>>}
   */
  Read(
    Handle: number,
    Position: number | BigInt,
    PartSize: number | BigInt
  ): Promise<Arguments<[boolean, Uint8Array]>>;

  /**
   * Writes a part of the dataset.
   *
   * @method OcaDataset#Write
   * @param {number} Handle
   * @param {number|BigInt} Position
   * @param {Uint8Array} Part
   *
   * @returns {Promise<void>}
   */
  Write(
    Handle: number,
    Position: number | BigInt,
    Part: Uint8Array
  ): Promise<void>;

  /**
   * Removes all data from the dataset.
   *
   * @method OcaDataset#Clear
   * @param {number} Handle
   *
   * @returns {Promise<void>}
   */
  Clear(Handle: number): Promise<void>;

  /**
   * Gets the value of property **Owner**.
   *
   * @method OcaDataset#GetOwner
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetOwner(): Promise<number>;

  /**
   * Gets the value of property **Name**.
   *
   * @method OcaDataset#GetName
   * @returns {Promise<string>}
   *   A promise which resolves to a single value of type ``string``.
   */
  GetName(): Promise<string>;

  /**
   * Sets the value of property **Name**.
   *
   * @method OcaDataset#SetName
   * @param {string} Name
   *
   * @returns {Promise<void>}
   */
  SetName(Name: string): Promise<void>;

  /**
   * Gets the value of property **Type**.
   *
   * @method OcaDataset#GetType
   * @returns {Promise<string>}
   *   A promise which resolves to a single value of type ``string``.
   */
  GetType(): Promise<string>;

  /**
   * Sets the value of property **Type** .
   *
   * @method OcaDataset#SetType
   * @param {string} Type
   *
   * @returns {Promise<void>}
   */
  SetType(Type: string): Promise<void>;

  /**
   * Gets the value of the **Readonly** property.
   *
   * @method OcaDataset#GetReadOnly
   * @returns {Promise<boolean>}
   *   A promise which resolves to a single value of type ``boolean``.
   */
  GetReadOnly(): Promise<boolean>;

  /**
   * Sets the value of the **Readonly** property. Optional method.
   *
   * @method OcaDataset#SetReadOnly
   * @param {boolean} ReadOnly
   *
   * @returns {Promise<void>}
   */
  SetReadOnly(ReadOnly: boolean): Promise<void>;

  /**
   * Gets the value of property **LastModificationTime**. Optional method.
   *
   * @method OcaDataset#GetLastModificationTime
   * @returns {Promise<OcaTime>}
   *   A promise which resolves to a single value of type :class:`OcaTime`.
   */
  GetLastModificationTime(): Promise<OcaTime>;

  /**
   * Gets current & max sizes
   * The return values of this method are
   *
   * - CurrentSize of type ``number|BigInt``
   * - MaxSize of type ``number|BigInt``
   *
   * @method OcaDataset#GetDatasetSizes
   * @returns {Promise<Arguments<number|BigInt,number|BigInt>>}
   */
  GetDatasetSizes(): Promise<Arguments<[number | BigInt, number | BigInt]>>;
}
