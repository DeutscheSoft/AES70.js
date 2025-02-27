import { OcaBoolean } from '../../OCP1/OcaBoolean.js';
import { OcaLockState } from '../../OCP1/OcaLockState.js';
import { OcaLongBlob } from '../../OCP1/OcaLongBlob.js';
import { OcaString } from '../../OCP1/OcaString.js';
import { OcaTime } from '../../OCP1/OcaTime.js';
import { OcaUint32 } from '../../OCP1/OcaUint32.js';
import { OcaUint64 } from '../../OCP1/OcaUint64.js';
import { make_control_class } from '../make_control_class.js';
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
export const OcaDataset = make_control_class(
  'OcaDataset',
  2,
  '\u0001\u0005',
  1,
  OcaRoot,
  [
    ['OpenRead', 2, 1, [OcaLockState], [OcaUint64, OcaUint32]],
    ['OpenWrite', 2, 2, [OcaLockState], [OcaUint64, OcaUint32]],
    ['Close', 2, 3, [OcaUint32], []],
    [
      'Read',
      2,
      4,
      [OcaUint32, OcaUint64, OcaUint64],
      [OcaBoolean, OcaLongBlob],
    ],
    ['Write', 2, 5, [OcaUint32, OcaUint64, OcaLongBlob], []],
    ['Clear', 2, 6, [OcaUint32], []],
    ['GetOwner', 2, 7, [], [OcaUint32]],
    ['GetName', 2, 8, [], [OcaString]],
    ['SetName', 2, 9, [OcaString], []],
    ['GetType', 2, 10, [], [OcaString]],
    ['SetType', 2, 11, [OcaString], []],
    ['GetReadOnly', 2, 12, [], [OcaBoolean]],
    ['SetReadOnly', 2, 13, [OcaBoolean], []],
    ['GetLastModificationTime', 2, 14, [], [OcaTime]],
    ['GetDatasetSizes', 2, 15, [], [OcaUint64, OcaUint64]],
  ],
  [
    ['Owner', [OcaUint32], 2, 1, true, false, null],
    ['Name', [OcaString], 2, 2, false, false, null],
    ['Type', [OcaString], 2, 3, false, false, null],
    ['ReadOnly', [OcaBoolean], 2, 4, false, false, null],
    ['LastModificationTime', [OcaTime], 2, 5, false, false, null],
    ['MaxSize', [OcaUint64], 2, 6, false, false, null],
  ],
  []
);

/**
 * Opens a reading session. Returns status = **ProcessingFailed** if handle pool
 * is used up.
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
/**
 * Opens a writing session. Returns status = **ProcessingFailed** if handle pool
 * is used up.
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
/**
 * Closes a reading or writing session.
 *
 * @method OcaDataset#Close
 * @param {number} Handle
 *
 * @returns {Promise<void>}
 */
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
/**
 * Removes all data from the dataset.
 *
 * @method OcaDataset#Clear
 * @param {number} Handle
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value of property **Owner**.
 *
 * @method OcaDataset#GetOwner
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Gets the value of property **Name**.
 *
 * @method OcaDataset#GetName
 * @returns {Promise<string>}
 *   A promise which resolves to a single value of type ``string``.
 */
/**
 * Sets the value of property **Name**.
 *
 * @method OcaDataset#SetName
 * @param {string} Name
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value of property **Type**.
 *
 * @method OcaDataset#GetType
 * @returns {Promise<string>}
 *   A promise which resolves to a single value of type ``string``.
 */
/**
 * Sets the value of property **Type** .
 *
 * @method OcaDataset#SetType
 * @param {string} Type
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value of the **Readonly** property.
 *
 * @method OcaDataset#GetReadOnly
 * @returns {Promise<boolean>}
 *   A promise which resolves to a single value of type ``boolean``.
 */
/**
 * Sets the value of the **Readonly** property. Optional method.
 *
 * @method OcaDataset#SetReadOnly
 * @param {boolean} ReadOnly
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value of property **LastModificationTime**. Optional method.
 *
 * @method OcaDataset#GetLastModificationTime
 * @returns {Promise<OcaTime>}
 *   A promise which resolves to a single value of type :class:`OcaTime`.
 */
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
/**
 * This event is emitted when the property ``Name`` changes in the remote object.
 * The property ``Name`` is described in the AES70 standard as follows.
 * Name of dataset. Must be unique in the device.
 *
 * @member {PropertyEvent<string>} OcaDataset#OnNameChanged
 */
/**
 * This event is emitted when the property ``Type`` changes in the remote object.
 * The property ``Type`` is described in the AES70 standard as follows.
 * Type of dataset - MIME 'content-type' value. See the definition of
 * **OcaMimeType**. The standard MIME types for AES70 datasets are defined
 * normatively in [AES70-1(Dataset Type)].
 *
 * @member {PropertyEvent<string>} OcaDataset#OnTypeChanged
 */
/**
 * This event is emitted when the property ``ReadOnly`` changes in the remote object.
 * The property ``ReadOnly`` is described in the AES70 standard as follows.
 * TRUE ``=>`` dataset is read-only. Value may or may not be changed, depending
 * on implementation.
 *
 * @member {PropertyEvent<boolean>} OcaDataset#OnReadOnlyChanged
 */
/**
 * This event is emitted when the property ``LastModificationTime`` changes in the remote object.
 * The property ``LastModificationTime`` is described in the AES70 standard as follows.
 * Time of last modification. Optional, may be zero if not implemented.
 *
 * @member {PropertyEvent<OcaTime>} OcaDataset#OnLastModificationTimeChanged
 */
/**
 * This event is emitted when the property ``MaxSize`` changes in the remote object.
 * The property ``MaxSize`` is described in the AES70 standard as follows.
 * Maximum dataset size in bytes.
 *
 * @member {PropertyEvent<number|BigInt>} OcaDataset#OnMaxSizeChanged
 */
