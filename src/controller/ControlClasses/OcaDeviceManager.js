import { OcaBlob } from '../../OCP1/OcaBlob.js';
import { OcaBlobFixedLen } from '../../OCP1/OcaBlobFixedLen.js';
import { OcaBoolean } from '../../OCP1/OcaBoolean.js';
import { OcaDeviceState } from '../../OCP1/OcaDeviceState.js';
import { OcaList } from '../../OCP1/OcaList.js';
import { OcaManagerDescriptor } from '../../OCP1/OcaManagerDescriptor.js';
import { OcaModelDescription } from '../../OCP1/OcaModelDescription.js';
import { OcaModelGUID } from '../../OCP1/OcaModelGUID.js';
import { OcaResetCause } from '../../OCP1/OcaResetCause.js';
import { OcaString } from '../../OCP1/OcaString.js';
import { OcaUint16 } from '../../OCP1/OcaUint16.js';
import { make_control_class } from '../make_control_class.js';
import { OcaManager } from './OcaManager.js';

/**
 * Mandatory manager that contains information relevant to the whole device.
 *
 *  - Must be instantiated once in every device.
 *
 *
 *  - Must have object number 1.
 *
 * @extends OcaManager
 * @class OcaDeviceManager
 */
export const OcaDeviceManager = make_control_class(
  'OcaDeviceManager',
  3,
  '\u0001\u0003\u0001',
  2,
  OcaManager,
  [
    ['GetOcaVersion', 3, 1, [], [OcaUint16]],
    ['GetModelGUID', 3, 2, [], [OcaModelGUID]],
    ['GetSerialNumber', 3, 3, [], [OcaString]],
    ['GetDeviceName', 3, 4, [], [OcaString]],
    ['SetDeviceName', 3, 5, [OcaString], []],
    ['GetModelDescription', 3, 6, [], [OcaModelDescription]],
    ['GetDeviceRole', 3, 7, [], [OcaString]],
    ['SetDeviceRole', 3, 8, [OcaString], []],
    ['GetUserInventoryCode', 3, 9, [], [OcaString]],
    ['SetUserInventoryCode', 3, 10, [OcaString], []],
    ['GetEnabled', 3, 11, [], [OcaBoolean]],
    ['SetEnabled', 3, 12, [OcaBoolean], []],
    ['GetState', 3, 13, [], [OcaDeviceState]],
    ['SetResetKey', 3, 14, [OcaBlobFixedLen(16), OcaBlob], []],
    ['GetResetCause', 3, 15, [], [OcaResetCause]],
    ['ClearResetCause', 3, 16, [], []],
    ['GetMessage', 3, 17, [], [OcaString]],
    ['SetMessage', 3, 18, [OcaString], []],
    ['GetManagers', 3, 19, [], [OcaList(OcaManagerDescriptor)]],
    ['GetDeviceRevisionID', 3, 20, [], [OcaString]],
  ],
  [
    ['ModelGUID', [OcaModelGUID], 3, 1, false, false, null],
    ['SerialNumber', [OcaString], 3, 2, false, false, null],
    ['ModelDescription', [OcaModelDescription], 3, 3, false, false, null],
    ['DeviceName', [OcaString], 3, 4, false, false, null],
    ['OcaVersion', [OcaUint16], 3, 5, false, false, null],
    ['DeviceRole', [OcaString], 3, 6, false, false, null],
    ['UserInventoryCode', [OcaString], 3, 7, false, false, null],
    ['Enabled', [OcaBoolean], 3, 8, false, false, null],
    ['State', [OcaDeviceState], 3, 9, false, false, null],
    ['Busy', [OcaBoolean], 3, 10, false, false, null],
    ['ResetCause', [OcaResetCause], 3, 11, false, false, null],
    ['Message', [OcaString], 3, 12, false, false, null],
    ['Managers', [OcaList(OcaManagerDescriptor)], 3, 13, false, false, null],
    ['DeviceRevisionID', [OcaString], 3, 14, true, false, null],
  ],
  []
);

/**
 * Gets the value of the OcaVersion property. The return value indicates whether the property was successfully retrieved.
 *
 * @method OcaDeviceManager#GetOcaVersion
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Gets the model GUID. The return value indicates whether the GUID was successfully retrieved.
 *
 * @method OcaDeviceManager#GetModelGUID
 * @returns {Promise<OcaModelGUID>}
 *   A promise which resolves to a single value of type :class:`OcaModelGUID`.
 */
/**
 * Gets the value of the SerialNumber property. The return value indicates whether the property was successfully retrieved.
 *
 * @method OcaDeviceManager#GetSerialNumber
 * @returns {Promise<string>}
 *   A promise which resolves to a single value of type ``string``.
 */
/**
 * Gets the device name. The return value indicates whether the property was successfully retrieved.
 *
 * @method OcaDeviceManager#GetDeviceName
 * @returns {Promise<string>}
 *   A promise which resolves to a single value of type ``string``.
 */
/**
 * Sets the device name. The return value indicates whether the property was successfully set.
 *
 * @method OcaDeviceManager#SetDeviceName
 * @param {string} Name
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the model description. The return value indicates whether the description was successfully retrieved.
 *
 * @method OcaDeviceManager#GetModelDescription
 * @returns {Promise<OcaModelDescription>}
 *   A promise which resolves to a single value of type :class:`OcaModelDescription`.
 */
/**
 * Gets the value of the Role property. The return value indicates whether the property was successfully retrieved.
 *
 * @method OcaDeviceManager#GetDeviceRole
 * @returns {Promise<string>}
 *   A promise which resolves to a single value of type ``string``.
 */
/**
 * Sets the value of the Role property. The return value indicates whether the property was successfully set.
 *
 * @method OcaDeviceManager#SetDeviceRole
 * @param {string} role
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value of the UserInventoryCode property. The return value indicates whether the property was successfully retrieved.
 *
 * @method OcaDeviceManager#GetUserInventoryCode
 * @returns {Promise<string>}
 *   A promise which resolves to a single value of type ``string``.
 */
/**
 * Sets the value of the UserInventoryCode property. The return value indicates whether the property was successfully set.
 *
 * @method OcaDeviceManager#SetUserInventoryCode
 * @param {string} Code
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value of the Enabled property. The return value indicates whether the property was successfully retrieved.
 *
 * @method OcaDeviceManager#GetEnabled
 * @returns {Promise<boolean>}
 *   A promise which resolves to a single value of type ``boolean``.
 */
/**
 * Sets the value of the Enabled property. The return value indicates whether the property was successfully set.
 *
 * @method OcaDeviceManager#SetEnabled
 * @param {boolean} enabled
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value of the State property. The return value indicates whether the property was successfully retrieved.
 *
 * @method OcaDeviceManager#GetState
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type :class:`number`.
 */
/**
 * Sets the value of the reset key of the device. The return value indicates whether the property was successfully set. Note that the device manager must inform the CAP gateway of this key (via the host interface), since the CAP gateway will check for and handle the special reset message.
 *
 * @method OcaDeviceManager#SetResetKey
 * @param {Uint8Array} Key
 *
 * @param {Uint8Array} Address
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value of the ResetCause property. The return value indicates whether the property was successfully retrieved.
 *
 * @method OcaDeviceManager#GetResetCause
 * @returns {Promise<OcaResetCause>}
 *   A promise which resolves to a single value of type :class:`OcaResetCause`.
 */
/**
 * Clears the ResetCause property, i.e. resets it to the default value 'PowerOn'. Must be used after the reset cause has been read out to ensure differentation between reconnects due to network loss and reconnects due to external or internal reset. Offered as a separate method (instead of implicitly clearing the cause after it has been read out) to accomodate systems that have multiple controllers. The return value indicates whether the property was successfully retrieved.
 *
 * @method OcaDeviceManager#ClearResetCause
 * @returns {Promise<void>}
 */
/**
 * Gets the value of property  **Message** . Return value indicates whether value was successfully retrieved.
 *
 * @method OcaDeviceManager#GetMessage
 * @returns {Promise<string>}
 *   A promise which resolves to a single value of type ``string``.
 */
/**
 * Set arbitrary text message into  **Message** property. The return value indicates whether the value was successfully set.
 *
 * @method OcaDeviceManager#SetMessage
 * @param {string} Text
 *
 * @returns {Promise<void>}
 */
/**
 * Retrive the list of descriptors of managers instantiated in this device. The return value indicates whether the retrieval was successful.
 *
 * @method OcaDeviceManager#GetManagers
 * @returns {Promise<OcaManagerDescriptor[]>}
 *   A promise which resolves to a single value of type ``OcaManagerDescriptor[]``.
 */
/**
 * Gets the value of property  **DeviceRevisionID** . Return value indicates whether value was successfully retrieved.
 *
 * @method OcaDeviceManager#GetDeviceRevisionID
 * @returns {Promise<string>}
 *   A promise which resolves to a single value of type ``string``.
 */
/**
 * This event is emitted when the property ModelGUID changes in the remote object.
 * The property ``ModelGUID`` is described in the AES70 standard as follows.
 * Read-only property that identifies the model of the device. Note this
 * property is not equivalent to a MAC address, because (a) MAC addresses
 * identify individual devices, not models, and (b) MAC addresses are
 * Ethernet-specific, but an OCA device need not have an Ethernet port.
 *
 * @member {PropertyEvent<OcaModelGUID>} OcaDeviceManager#OnModelGUIDChanged
 */
/**
 * This event is emitted when the property SerialNumber changes in the remote object.
 * The property ``SerialNumber`` is described in the AES70 standard as follows.
 * Read-only property that identifies the serial number of the CAP
 * device.
 *
 * @member {PropertyEvent<string>} OcaDeviceManager#OnSerialNumberChanged
 */
/**
 * This event is emitted when the property ModelDescription changes in the remote object.
 * The property ``ModelDescription`` is described in the AES70 standard as follows.
 * Read-only property that contains text names for this model, its
 * manufacturer, and its version.
 *
 * @member {PropertyEvent<OcaModelDescription>} OcaDeviceManager#OnModelDescriptionChanged
 */
/**
 * This event is emitted when the property DeviceName changes in the remote object.
 * The property ``DeviceName`` is described in the AES70 standard as follows.
 * Name of the device. Should be unique manufacturer-qualified
 * identifier.
 *
 * @member {PropertyEvent<string>} OcaDeviceManager#OnDeviceNameChanged
 */
/**
 * This event is emitted when the property OcaVersion changes in the remote object.
 * The property ``OcaVersion`` is described in the AES70 standard as follows.
 * Read-only property that indicates the AES70 version number used by the
 * device.
 *
 * @member {PropertyEvent<number>} OcaDeviceManager#OnOcaVersionChanged
 */
/**
 * This event is emitted when the property DeviceRole changes in the remote object.
 * The property ``DeviceRole`` is described in the AES70 standard as follows.
 * Role of device in application (arbitrary).
 *
 * @member {PropertyEvent<string>} OcaDeviceManager#OnDeviceRoleChanged
 */
/**
 * This event is emitted when the property UserInventoryCode changes in the remote object.
 * The property ``UserInventoryCode`` is described in the AES70 standard as follows.
 * Code used for equipment tracking.
 *
 * @member {PropertyEvent<string>} OcaDeviceManager#OnUserInventoryCodeChanged
 */
/**
 * This event is emitted when the property Enabled changes in the remote object.
 * The property ``Enabled`` is described in the AES70 standard as follows.
 * Indicates whether the device is enabled (and therefore operational).
 *
 * @member {PropertyEvent<boolean>} OcaDeviceManager#OnEnabledChanged
 */
/**
 * This event is emitted when the property State changes in the remote object.
 * The property ``State`` is described in the AES70 standard as follows.
 * Read-only property that indicates the current state of the device.
 *
 * @member {PropertyEvent<number>} OcaDeviceManager#OnStateChanged
 */
/**
 * This event is emitted when the property Busy changes in the remote object.
 * The property ``Busy`` is described in the AES70 standard as follows.
 * True iff device is working on something and is not available for OCA
 * command activity. Readonly.
 *
 * @member {PropertyEvent<boolean>} OcaDeviceManager#OnBusyChanged
 */
/**
 * This event is emitted when the property ResetCause changes in the remote object.
 * The property ``ResetCause`` is described in the AES70 standard as follows.
 * Read-only attribute that indicates the reset cause of the last reset.
 *
 * @member {PropertyEvent<OcaResetCause>} OcaDeviceManager#OnResetCauseChanged
 */
/**
 * This event is emitted when the property Message changes in the remote object.
 * The property ``Message`` is described in the AES70 standard as follows.
 * Arbitrary text message provided by controller. Display and handling of
 * the text is device-dependent and not defined by OCA.
 *
 * @member {PropertyEvent<string>} OcaDeviceManager#OnMessageChanged
 */
/**
 * This event is emitted when the property Managers changes in the remote object.
 * The property ``Managers`` is described in the AES70 standard as follows.
 * List of all manager objects instantiated in this device.
 *
 * @member {PropertyEvent<OcaManagerDescriptor[]>} OcaDeviceManager#OnManagersChanged
 */
