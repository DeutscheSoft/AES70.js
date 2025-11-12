import { OcaDeviceOperationalState } from '../../types/OcaDeviceOperationalState.js';
import { IOcaDeviceState } from '../../types/OcaDeviceState.js';
import { OcaManagerDescriptor } from '../../types/OcaManagerDescriptor.js';
import { OcaManufacturer } from '../../types/OcaManufacturer.js';
import { OcaModelDescription } from '../../types/OcaModelDescription.js';
import { OcaModelGUID } from '../../types/OcaModelGUID.js';
import { OcaProduct } from '../../types/OcaProduct.js';
import { OcaResetCause } from '../../types/OcaResetCause.js';
import { PropertyEvent } from '../property_event.js';
import { RemoteDevice } from '../remote_device.js';
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
export declare class OcaDeviceManager extends OcaManager {
  /**
   * This event is emitted whenever ModelGUID changes.
   */
  OnModelGUIDChanged: PropertyEvent<OcaModelGUID>;

  /**
   * This event is emitted whenever ModelDescription changes.
   */
  OnModelDescriptionChanged: PropertyEvent<OcaModelDescription>;

  /**
   * This event is emitted whenever DeviceName changes.
   */
  OnDeviceNameChanged: PropertyEvent<string>;

  /**
   * This event is emitted whenever DeviceRole changes.
   */
  OnDeviceRoleChanged: PropertyEvent<string>;

  /**
   * An alias for OnDeviceRoleChanged
   */
  OnRoleChanged: PropertyEvent<string>;
  /**
   * This event is emitted whenever UserInventoryCode changes.
   */
  OnUserInventoryCodeChanged: PropertyEvent<string>;

  /**
   * This event is emitted whenever ControlEnabled changes.
   */
  OnControlEnabledChanged: PropertyEvent<boolean>;

  /**
   * An alias for OnControlEnabledChanged
   */
  OnEnabledChanged: PropertyEvent<boolean>;
  /**
   * This event is emitted whenever State changes.
   */
  OnStateChanged: PropertyEvent<IOcaDeviceState>;

  /**
   * This event is emitted whenever Busy changes.
   */
  OnBusyChanged: PropertyEvent<boolean>;

  /**
   * This event is emitted whenever Message changes.
   */
  OnMessageChanged: PropertyEvent<string>;

  /**
   * This event is emitted whenever Managers changes.
   */
  OnManagersChanged: PropertyEvent<OcaManagerDescriptor[]>;

  /**
   * This event is emitted whenever OperationalState changes.
   */
  OnOperationalStateChanged: PropertyEvent<OcaDeviceOperationalState>;

  /**
   * This event is emitted whenever LoggingEnabled changes.
   */
  OnLoggingEnabledChanged: PropertyEvent<boolean>;

  /**
   * This event is emitted whenever MostRecentPatchDatasetONo changes.
   */
  OnMostRecentPatchDatasetONoChanged: PropertyEvent<number>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the value of the **OcaVersion** property.
   *
   * @method OcaDeviceManager#GetOcaVersion
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetOcaVersion(): Promise<number>;

  /**
   * Gets the model GUID. **Deprecated** in v3 of this class, replaced by
   * **GetProduct()** .
   *
   * @method OcaDeviceManager#GetModelGUID
   * @returns {Promise<OcaModelGUID>}
   *   A promise which resolves to a single value of type :class:`OcaModelGUID`.
   */
  GetModelGUID(): Promise<OcaModelGUID>;

  /**
   * Gets the value of the **SerialNumber** property.
   *
   * @method OcaDeviceManager#GetSerialNumber
   * @returns {Promise<string>}
   *   A promise which resolves to a single value of type ``string``.
   */
  GetSerialNumber(): Promise<string>;

  /**
   * Gets the device name.
   *
   * @method OcaDeviceManager#GetDeviceName
   * @returns {Promise<string>}
   *   A promise which resolves to a single value of type ``string``.
   */
  GetDeviceName(): Promise<string>;

  /**
   * Sets the device name.
   *
   * @method OcaDeviceManager#SetDeviceName
   * @param {string} Name
   *
   * @returns {Promise<void>}
   */
  SetDeviceName(Name: string): Promise<void>;

  /**
   * Gets the model description. **Deprecated** in v3 of this class, replaced
   * by** GetProduct()** .
   *
   * @method OcaDeviceManager#GetModelDescription
   * @returns {Promise<OcaModelDescription>}
   *   A promise which resolves to a single value of type :class:`OcaModelDescription`.
   */
  GetModelDescription(): Promise<OcaModelDescription>;

  /**
   * Gets the value of the **DeviceRole** property.
   *
   * @method OcaDeviceManager#GetDeviceRole
   * @returns {Promise<string>}
   *   A promise which resolves to a single value of type ``string``.
   */
  GetDeviceRole(): Promise<string>;

  /**
   * Sets the value of the **DeviceRole** property.
   *
   * @method OcaDeviceManager#SetDeviceRole
   * @param {string} role
   *
   * @returns {Promise<void>}
   */
  SetDeviceRole(role: string): Promise<void>;

  /**
   * Gets the value of the **UserInventoryCode** property.
   *
   * @method OcaDeviceManager#GetUserInventoryCode
   * @returns {Promise<string>}
   *   A promise which resolves to a single value of type ``string``.
   */
  GetUserInventoryCode(): Promise<string>;

  /**
   * Sets the value of the **UserInventoryCode** property.
   *
   * @method OcaDeviceManager#SetUserInventoryCode
   * @param {string} Code
   *
   * @returns {Promise<void>}
   */
  SetUserInventoryCode(Code: string): Promise<void>;

  /**
   * Gets the value of the **Enabled** property. Deprecated in v3 of this class.
   *
   * @method OcaDeviceManager#GetEnabled
   * @returns {Promise<boolean>}
   *   A promise which resolves to a single value of type ``boolean``.
   */
  GetEnabled(): Promise<boolean>;

  /**
   * Sets the value of the **Enabled** property. Deprecated in v3 of this class.
   *
   * @method OcaDeviceManager#SetEnabled
   * @param {boolean} enabled
   *
   * @returns {Promise<void>}
   */
  SetEnabled(enabled: boolean): Promise<void>;

  /**
   * Gets the value of the State property. **Deprecated** in v3 of this class,
   * replaced by **.GetOperationalState() .**
   *
   * @method OcaDeviceManager#GetState
   * @returns {Promise<IOcaDeviceState>}
   *   A promise which resolves to a single value of type ``IOcaDeviceState``.
   */
  GetState(): Promise<IOcaDeviceState>;

  /**
   * Sets the value of the reset key and the required source address for the
   * reset command. If given address is null, all source addresses will be
   * accepted.
   *
   * @method OcaDeviceManager#SetResetKey
   * @param {Uint8Array} Key
   * @param {Uint8Array} Address
   *
   * @returns {Promise<void>}
   */
  SetResetKey(Key: Uint8Array, Address: Uint8Array): Promise<void>;

  /**
   * Gets the value of the **ResetCause** property.
   *
   * @method OcaDeviceManager#GetResetCause
   * @returns {Promise<OcaResetCause>}
   *   A promise which resolves to a single value of type :class:`OcaResetCause`.
   */
  GetResetCause(): Promise<OcaResetCause>;

  /**
   * Clears the **ResetCause** property, i.e. resets it to the default value
   * 'PowerOn'. Must be used after the reset cause has been read out to ensure
   * differentiation between reconnects due to network loss and reconnects due
   * to external or internal reset. Offered as a separate method (instead of
   * implicitly clearing the cause after it has been read out) to accommodate
   * systems that have multiple controllers.
   *
   * @method OcaDeviceManager#ClearResetCause
   * @returns {Promise<void>}
   */
  ClearResetCause(): Promise<void>;

  /**
   * Gets the value of property **Message**.
   *
   * @method OcaDeviceManager#GetMessage
   * @returns {Promise<string>}
   *   A promise which resolves to a single value of type ``string``.
   */
  GetMessage(): Promise<string>;

  /**
   * Set arbitrary text message into **Message** property.
   *
   * @method OcaDeviceManager#SetMessage
   * @param {string} Text
   *
   * @returns {Promise<void>}
   */
  SetMessage(Text: string): Promise<void>;

  /**
   * Retrive the list of descriptors of managers instantiated in this device.
   *
   * @method OcaDeviceManager#GetManagers
   * @returns {Promise<OcaManagerDescriptor[]>}
   *   A promise which resolves to a single value of type :class:`OcaManagerDescriptor[]`.
   */
  GetManagers(): Promise<OcaManagerDescriptor[]>;

  /**
   * Gets the value of deprecated property **DeviceRevisionID**. **Deprecated**
   * in v3 of this class, replaced by **.GetProduct()** .
   *
   * @method OcaDeviceManager#GetDeviceRevisionID
   * @returns {Promise<string>}
   *   A promise which resolves to a single value of type ``string``.
   */
  GetDeviceRevisionID(): Promise<string>;

  /**
   * Gets the device's manufacturer descriptor.
   *
   * @method OcaDeviceManager#GetManufacturer
   * @returns {Promise<OcaManufacturer>}
   *   A promise which resolves to a single value of type :class:`OcaManufacturer`.
   */
  GetManufacturer(): Promise<OcaManufacturer>;

  /**
   * Gets the device's product descriptor.
   *
   * @method OcaDeviceManager#GetProduct
   * @returns {Promise<OcaProduct>}
   *   A promise which resolves to a single value of type :class:`OcaProduct`.
   */
  GetProduct(): Promise<OcaProduct>;

  /**
   * Gets the device's operational state.
   *
   * @method OcaDeviceManager#GetOperationalState
   * @returns {Promise<OcaDeviceOperationalState>}
   *   A promise which resolves to a single value of type :class:`OcaDeviceOperationalState`.
   */
  GetOperationalState(): Promise<OcaDeviceOperationalState>;

  /**
   * Gets the value of property **LoggingEnabled**.
   *
   * @method OcaDeviceManager#GetLoggingEnabled
   * @returns {Promise<boolean>}
   *   A promise which resolves to a single value of type ``boolean``.
   */
  GetLoggingEnabled(): Promise<boolean>;

  /**
   * Sets the value of property **LoggingEnabled**.
   *
   * @method OcaDeviceManager#SetLoggingEnabled
   * @param {boolean} Enabled
   *
   * @returns {Promise<void>}
   */
  SetLoggingEnabled(Enabled: boolean): Promise<void>;

  /**
   * Gets the value of property **MostRecentPatchDatasetONo**.
   *
   * @method OcaDeviceManager#GetMostRecentPatchDatasetONo
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetMostRecentPatchDatasetONo(): Promise<number>;

  /**
   * Applies the patch in the **OcaDataset** identified by the given **ONo**,
   * and sets the value of property MostRecentPatchDatasetONo.
   *
   * @method OcaDeviceManager#ApplyPatch
   * @param {number} ONo
   *
   * @returns {Promise<void>}
   */
  ApplyPatch(ONo: number): Promise<void>;
}
