import { OcaBlob } from '../../OCP1/OcaBlob.js';
import { OcaBlobFixedLen } from '../../OCP1/OcaBlobFixedLen.js';
import { OcaBoolean } from '../../OCP1/OcaBoolean.js';
import { OcaDeviceOperationalState } from '../../OCP1/OcaDeviceOperationalState.js';
import { OcaDeviceState } from '../../OCP1/OcaDeviceState.js';
import { OcaList } from '../../OCP1/OcaList.js';
import { OcaManagerDescriptor } from '../../OCP1/OcaManagerDescriptor.js';
import { OcaManufacturer } from '../../OCP1/OcaManufacturer.js';
import { OcaModelDescription } from '../../OCP1/OcaModelDescription.js';
import { OcaModelGUID } from '../../OCP1/OcaModelGUID.js';
import { OcaProduct } from '../../OCP1/OcaProduct.js';
import { OcaResetCause } from '../../OCP1/OcaResetCause.js';
import { OcaString } from '../../OCP1/OcaString.js';
import { OcaUint16 } from '../../OCP1/OcaUint16.js';
import { OcaUint32 } from '../../OCP1/OcaUint32.js';
import { make_control_class } from '../make_control_class.js';
import { OcaManager } from './OcaManager.js';

/**
 * Mandatory manager that contains information relevant to the whole device.
 *
 *  - Must be instantiated once in every device.
 *
 *  - Must have object number 1.
 *
 *
 * @extends OcaManager
 * @class OcaDeviceManager
 */
export const OcaDeviceManager = make_control_class(
  'OcaDeviceManager',
  3,
  '\u0001\u0003\u0001',
  3,
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
    ['GetManufacturer', 3, 21, [], [OcaManufacturer]],
    ['GetProduct', 3, 22, [], [OcaProduct]],
    ['GetOperationalState', 3, 23, [], [OcaDeviceOperationalState]],
    ['GetLoggingEnabled', 3, 24, [], [OcaBoolean]],
    ['SetLoggingEnabled', 3, 25, [OcaBoolean], []],
    ['GetMostRecentPatchDatasetONo', 3, 26, [], [OcaUint32]],
    ['ApplyPatch', 3, 27, [OcaUint32], []],
  ],
  [
    ['ModelGUID', [OcaModelGUID], 3, 1, false, false, null],
    ['SerialNumber', [OcaString], 3, 2, true, false, null],
    ['ModelDescription', [OcaModelDescription], 3, 3, false, false, null],
    ['DeviceName', [OcaString], 3, 4, false, false, null],
    ['OcaVersion', [OcaUint16], 3, 5, true, false, null],
    ['DeviceRole', [OcaString], 3, 6, false, false, ['Role']],
    ['UserInventoryCode', [OcaString], 3, 7, false, false, null],
    ['ControlEnabled', [OcaBoolean], 3, 8, false, false, ['Enabled']],
    ['State', [OcaDeviceState], 3, 9, false, false, null],
    ['Busy', [OcaBoolean], 3, 10, false, false, null],
    ['ResetCause', [OcaResetCause], 3, 11, true, false, null],
    ['Message', [OcaString], 3, 12, false, false, null],
    ['Managers', [OcaList(OcaManagerDescriptor)], 3, 13, false, false, null],
    ['DeviceRevisionID', [OcaString], 3, 14, true, false, null],
    ['Manufacturer', [OcaManufacturer], 3, 15, true, false, null],
    ['Product', [OcaProduct], 3, 16, true, false, null],
    [
      'OperationalState',
      [OcaDeviceOperationalState],
      3,
      17,
      false,
      false,
      null,
    ],
    ['LoggingEnabled', [OcaBoolean], 3, 18, false, false, null],
    ['MostRecentPatchDatasetONo', [OcaUint32], 3, 19, false, false, null],
  ],
  []
);

/**
 * Gets the value of the **OcaVersion** property.
 *
 * @method OcaDeviceManager#GetOcaVersion
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Gets the model GUID. **Deprecated** in v3 of this class, replaced by
 * **GetProduct()** .
 *
 * @method OcaDeviceManager#GetModelGUID
 * @returns {Promise<OcaModelGUID>}
 *   A promise which resolves to a single value of type :class:`OcaModelGUID`.
 */
/**
 * Gets the value of the **SerialNumber** property.
 *
 * @method OcaDeviceManager#GetSerialNumber
 * @returns {Promise<string>}
 *   A promise which resolves to a single value of type ``string``.
 */
/**
 * Gets the device name.
 *
 * @method OcaDeviceManager#GetDeviceName
 * @returns {Promise<string>}
 *   A promise which resolves to a single value of type ``string``.
 */
/**
 * Sets the device name.
 *
 * @method OcaDeviceManager#SetDeviceName
 * @param {string} Name
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the model description. **Deprecated** in v3 of this class, replaced by**
 * GetProduct()** .
 *
 * @method OcaDeviceManager#GetModelDescription
 * @returns {Promise<OcaModelDescription>}
 *   A promise which resolves to a single value of type :class:`OcaModelDescription`.
 */
/**
 * Gets the value of the **DeviceRole** property.
 *
 * @method OcaDeviceManager#GetDeviceRole
 * @returns {Promise<string>}
 *   A promise which resolves to a single value of type ``string``.
 */
/**
 * Sets the value of the **DeviceRole** property.
 *
 * @method OcaDeviceManager#SetDeviceRole
 * @param {string} role
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value of the **UserInventoryCode** property.
 *
 * @method OcaDeviceManager#GetUserInventoryCode
 * @returns {Promise<string>}
 *   A promise which resolves to a single value of type ``string``.
 */
/**
 * Sets the value of the **UserInventoryCode** property.
 *
 * @method OcaDeviceManager#SetUserInventoryCode
 * @param {string} Code
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value of the **Enabled** property. Deprecated in v3 of this class.
 *
 * @method OcaDeviceManager#GetEnabled
 * @returns {Promise<boolean>}
 *   A promise which resolves to a single value of type ``boolean``.
 */
/**
 * Sets the value of the **Enabled** property. Deprecated in v3 of this class.
 *
 * @method OcaDeviceManager#SetEnabled
 * @param {boolean} enabled
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value of the State property. **Deprecated** in v3 of this class,
 * replaced by **.GetOperationalState() .**
 *
 * @method OcaDeviceManager#GetState
 * @returns {Promise<IOcaDeviceState>}
 *   A promise which resolves to a single value of type ``IOcaDeviceState``.
 */
/**
 * Sets the value of the reset key and the required source address for the reset
 * command. If given address is null, all source addresses will be accepted.
 *
 * @method OcaDeviceManager#SetResetKey
 * @param {Uint8Array} Key
 * @param {Uint8Array} Address
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value of the **ResetCause** property.
 *
 * @method OcaDeviceManager#GetResetCause
 * @returns {Promise<OcaResetCause>}
 *   A promise which resolves to a single value of type :class:`OcaResetCause`.
 */
/**
 * Clears the **ResetCause** property, i.e. resets it to the default value
 * 'PowerOn'. Must be used after the reset cause has been read out to ensure
 * differentiation between reconnects due to network loss and reconnects due to
 * external or internal reset. Offered as a separate method (instead of
 * implicitly clearing the cause after it has been read out) to accommodate
 * systems that have multiple controllers.
 *
 * @method OcaDeviceManager#ClearResetCause
 * @returns {Promise<void>}
 */
/**
 * Gets the value of property **Message**.
 *
 * @method OcaDeviceManager#GetMessage
 * @returns {Promise<string>}
 *   A promise which resolves to a single value of type ``string``.
 */
/**
 * Set arbitrary text message into **Message** property.
 *
 * @method OcaDeviceManager#SetMessage
 * @param {string} Text
 *
 * @returns {Promise<void>}
 */
/**
 * Retrive the list of descriptors of managers instantiated in this device.
 *
 * @method OcaDeviceManager#GetManagers
 * @returns {Promise<OcaManagerDescriptor[]>}
 *   A promise which resolves to a single value of type :class:`OcaManagerDescriptor[]`.
 */
/**
 * Gets the value of deprecated property **DeviceRevisionID**. **Deprecated** in
 * v3 of this class, replaced by **.GetProduct()** .
 *
 * @method OcaDeviceManager#GetDeviceRevisionID
 * @returns {Promise<string>}
 *   A promise which resolves to a single value of type ``string``.
 */
/**
 * Gets the device's manufacturer descriptor.
 *
 * @method OcaDeviceManager#GetManufacturer
 * @returns {Promise<OcaManufacturer>}
 *   A promise which resolves to a single value of type :class:`OcaManufacturer`.
 */
/**
 * Gets the device's product descriptor.
 *
 * @method OcaDeviceManager#GetProduct
 * @returns {Promise<OcaProduct>}
 *   A promise which resolves to a single value of type :class:`OcaProduct`.
 */
/**
 * Gets the device's operational state.
 *
 * @method OcaDeviceManager#GetOperationalState
 * @returns {Promise<OcaDeviceOperationalState>}
 *   A promise which resolves to a single value of type :class:`OcaDeviceOperationalState`.
 */
/**
 * Gets the value of property **LoggingEnabled**.
 *
 * @method OcaDeviceManager#GetLoggingEnabled
 * @returns {Promise<boolean>}
 *   A promise which resolves to a single value of type ``boolean``.
 */
/**
 * Sets the value of property **LoggingEnabled**.
 *
 * @method OcaDeviceManager#SetLoggingEnabled
 * @param {boolean} Enabled
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value of property **MostRecentPatchDatasetONo**.
 *
 * @method OcaDeviceManager#GetMostRecentPatchDatasetONo
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Applies the patch in the **OcaDataset** identified by the given **ONo**, and
 * sets the value of property MostRecentPatchDatasetONo.
 *
 * @method OcaDeviceManager#ApplyPatch
 * @param {number} ONo
 *
 * @returns {Promise<void>}
 */
/**
 * This event is emitted when the property ``ModelGUID`` changes in the remote object.
 * The property ``ModelGUID`` is described in the AES70 standard as follows.
 * Read-only property that identifies the model of the device. Note this
 * property is not equivalent to a MAC address, because (a) MAC addresses
 * identify individual devices, not models, and (b) MAC addresses are
 * Ethernet-specific, but an OCA device need not have an Ethernet port.
 * **Deprecated** in v3 of this class, moved into property **Product** .
 *
 * @member {PropertyEvent<OcaModelGUID>} OcaDeviceManager#OnModelGUIDChanged
 */
/**
 * This event is emitted when the property ``ModelDescription`` changes in the remote object.
 * The property ``ModelDescription`` is described in the AES70 standard as follows.
 * Read-only property that contains text names for this model, its manufacturer,
 * and its version. **Deprecated** in v3 of this class, moved into property
 * **Product**.
 *
 * @member {PropertyEvent<OcaModelDescription>} OcaDeviceManager#OnModelDescriptionChanged
 */
/**
 * This event is emitted when the property ``DeviceName`` changes in the remote object.
 * The property ``DeviceName`` is described in the AES70 standard as follows.
 * User-specified name of this device in application context. Device instance
 * name, not product name.
 *
 * @member {PropertyEvent<string>} OcaDeviceManager#OnDeviceNameChanged
 */
/**
 * This event is emitted when the property ``DeviceRole`` changes in the remote object.
 * The property ``DeviceRole`` is described in the AES70 standard as follows.
 * Role of device in application (arbitrary). Named **Role** prior to v3 of this
 * class.
 *
 * @member {PropertyEvent<string>} OcaDeviceManager#OnDeviceRoleChanged
 */
/**
 * An alias for OnDeviceRoleChanged
 *
 * @member {PropertyEvent<string>} OcaDeviceManager#OnRoleChanged
 */
/**
 * This event is emitted when the property ``UserInventoryCode`` changes in the remote object.
 * The property ``UserInventoryCode`` is described in the AES70 standard as follows.
 * Code used for equipment tracking.
 *
 * @member {PropertyEvent<string>} OcaDeviceManager#OnUserInventoryCodeChanged
 */
/**
 * This event is emitted when the property ``ControlEnabled`` changes in the remote object.
 * The property ``ControlEnabled`` is described in the AES70 standard as follows.
 * Indicates whether the device is enabled, i.e. whether it is responsive to OCA
 * commands. Prior to v3 of this class, property name was **Enabled**.
 *
 * @member {PropertyEvent<boolean>} OcaDeviceManager#OnControlEnabledChanged
 */
/**
 * An alias for OnControlEnabledChanged
 *
 * @member {PropertyEvent<boolean>} OcaDeviceManager#OnEnabledChanged
 */
/**
 * This event is emitted when the property ``State`` changes in the remote object.
 * The property ``State`` is described in the AES70 standard as follows.
 * Read-only property that indicates the current state of the device. Deprecated
 * in v3 of this class, replaced by **.OperationalState** .
 *
 * @member {PropertyEvent<IOcaDeviceState>} OcaDeviceManager#OnStateChanged
 */
/**
 * This event is emitted when the property ``Busy`` changes in the remote object.
 * The property ``Busy`` is described in the AES70 standard as follows.
 * True if and only if device is working on something and is not available for
 * OCA command activity. Readonly. **Deprecated** in v3 of this class.
 *
 * @member {PropertyEvent<boolean>} OcaDeviceManager#OnBusyChanged
 */
/**
 * This event is emitted when the property ``Message`` changes in the remote object.
 * The property ``Message`` is described in the AES70 standard as follows.
 * Arbitrary text message provided by controller. Display and handling of the
 * text is device-dependent and not defined by OCA.
 *
 * @member {PropertyEvent<string>} OcaDeviceManager#OnMessageChanged
 */
/**
 * This event is emitted when the property ``Managers`` changes in the remote object.
 * The property ``Managers`` is described in the AES70 standard as follows.
 * List of all manager objects (including the Device Manager) instantiated in
 * this device.
 *
 * @member {PropertyEvent<OcaManagerDescriptor[]>} OcaDeviceManager#OnManagersChanged
 */
/**
 * This event is emitted when the property ``OperationalState`` changes in the remote object.
 * The property ``OperationalState`` is described in the AES70 standard as follows.
 * Operational state of device.
 *
 * @member {PropertyEvent<OcaDeviceOperationalState>} OcaDeviceManager#OnOperationalStateChanged
 */
/**
 * This event is emitted when the property ``LoggingEnabled`` changes in the remote object.
 * The property ``LoggingEnabled`` is described in the AES70 standard as follows.
 * Global enable/disable switch for device logging. TRUE = logging enabled,
 * FALSE = logging disabled. See class **OcaLog** for the rest of the logging
 * mechanism.
 *
 * @member {PropertyEvent<boolean>} OcaDeviceManager#OnLoggingEnabledChanged
 */
/**
 * This event is emitted when the property ``MostRecentPatchDatasetONo`` changes in the remote object.
 * The property ``MostRecentPatchDatasetONo`` is described in the AES70 standard as follows.
 * **ONo** of **OcaDataset** containing the most recently applied patch. Zero if
 * no patch has been applied since last device reset.
 *
 * @member {PropertyEvent<number>} OcaDeviceManager#OnMostRecentPatchDatasetONoChanged
 */
