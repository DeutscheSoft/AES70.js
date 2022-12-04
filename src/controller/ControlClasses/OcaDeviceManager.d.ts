import { OcaDeviceState } from '../../types/OcaDeviceState';
import { OcaManagerDescriptor } from '../../types/OcaManagerDescriptor';
import { OcaModelDescription } from '../../types/OcaModelDescription';
import { OcaModelGUID } from '../../types/OcaModelGUID';
import { OcaResetCause } from '../../types/OcaResetCause';
import { PropertyEvent } from '../property_event';
import { RemoteDevice } from '../remote_device';
import { OcaManager } from './OcaManager';

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
export declare class OcaDeviceManager extends OcaManager {
  /**
   * This event is emitted whenever ModelGUID changes.
   */
  OnModelGUIDChanged: PropertyEvent<OcaModelGUID>;

  /**
   * This event is emitted whenever SerialNumber changes.
   */
  OnSerialNumberChanged: PropertyEvent<string>;

  /**
   * This event is emitted whenever ModelDescription changes.
   */
  OnModelDescriptionChanged: PropertyEvent<OcaModelDescription>;

  /**
   * This event is emitted whenever DeviceName changes.
   */
  OnDeviceNameChanged: PropertyEvent<string>;

  /**
   * This event is emitted whenever OcaVersion changes.
   */
  OnOcaVersionChanged: PropertyEvent<number>;

  /**
   * This event is emitted whenever DeviceRole changes.
   */
  OnDeviceRoleChanged: PropertyEvent<string>;

  /**
   * This event is emitted whenever UserInventoryCode changes.
   */
  OnUserInventoryCodeChanged: PropertyEvent<string>;

  /**
   * This event is emitted whenever Enabled changes.
   */
  OnEnabledChanged: PropertyEvent<boolean>;

  /**
   * This event is emitted whenever State changes.
   */
  OnStateChanged: PropertyEvent<OcaDeviceState>;

  /**
   * This event is emitted whenever Busy changes.
   */
  OnBusyChanged: PropertyEvent<boolean>;

  /**
   * This event is emitted whenever ResetCause changes.
   */
  OnResetCauseChanged: PropertyEvent<OcaResetCause>;

  /**
   * This event is emitted whenever Message changes.
   */
  OnMessageChanged: PropertyEvent<string>;

  /**
   * This event is emitted whenever Managers changes.
   */
  OnManagersChanged: PropertyEvent<OcaManagerDescriptor[]>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the value of the OcaVersion property. The return value indicates whether the property was successfully retrieved.
   *
   * @method OcaDeviceManager#GetOcaVersion
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetOcaVersion(): Promise<number>;

  /**
   * Gets the model GUID. The return value indicates whether the GUID was successfully retrieved.
   *
   * @method OcaDeviceManager#GetModelGUID
   * @returns {Promise<OcaModelGUID>}
   *   A promise which resolves to a single value of type :class:`OcaModelGUID`.
   */
  GetModelGUID(): Promise<OcaModelGUID>;

  /**
   * Gets the value of the SerialNumber property. The return value indicates whether the property was successfully retrieved.
   *
   * @method OcaDeviceManager#GetSerialNumber
   * @returns {Promise<string>}
   *   A promise which resolves to a single value of type ``string``.
   */
  GetSerialNumber(): Promise<string>;

  /**
   * Gets the device name. The return value indicates whether the property was successfully retrieved.
   *
   * @method OcaDeviceManager#GetDeviceName
   * @returns {Promise<string>}
   *   A promise which resolves to a single value of type ``string``.
   */
  GetDeviceName(): Promise<string>;

  /**
   * Sets the device name. The return value indicates whether the property was successfully set.
   *
   * @method OcaDeviceManager#SetDeviceName
   * @param {string} Name
   *
   * @returns {Promise<void>}
   */
  SetDeviceName(Name: string): Promise<void>;

  /**
   * Gets the model description. The return value indicates whether the description was successfully retrieved.
   *
   * @method OcaDeviceManager#GetModelDescription
   * @returns {Promise<OcaModelDescription>}
   *   A promise which resolves to a single value of type :class:`OcaModelDescription`.
   */
  GetModelDescription(): Promise<OcaModelDescription>;

  /**
   * Gets the value of the Role property. The return value indicates whether the property was successfully retrieved.
   *
   * @method OcaDeviceManager#GetDeviceRole
   * @returns {Promise<string>}
   *   A promise which resolves to a single value of type ``string``.
   */
  GetDeviceRole(): Promise<string>;

  /**
   * Sets the value of the Role property. The return value indicates whether the property was successfully set.
   *
   * @method OcaDeviceManager#SetDeviceRole
   * @param {string} role
   *
   * @returns {Promise<void>}
   */
  SetDeviceRole(role: string): Promise<void>;

  /**
   * Gets the value of the UserInventoryCode property. The return value indicates whether the property was successfully retrieved.
   *
   * @method OcaDeviceManager#GetUserInventoryCode
   * @returns {Promise<string>}
   *   A promise which resolves to a single value of type ``string``.
   */
  GetUserInventoryCode(): Promise<string>;

  /**
   * Sets the value of the UserInventoryCode property. The return value indicates whether the property was successfully set.
   *
   * @method OcaDeviceManager#SetUserInventoryCode
   * @param {string} Code
   *
   * @returns {Promise<void>}
   */
  SetUserInventoryCode(Code: string): Promise<void>;

  /**
   * Gets the value of the Enabled property. The return value indicates whether the property was successfully retrieved.
   *
   * @method OcaDeviceManager#GetEnabled
   * @returns {Promise<boolean>}
   *   A promise which resolves to a single value of type ``boolean``.
   */
  GetEnabled(): Promise<boolean>;

  /**
   * Sets the value of the Enabled property. The return value indicates whether the property was successfully set.
   *
   * @method OcaDeviceManager#SetEnabled
   * @param {boolean} enabled
   *
   * @returns {Promise<void>}
   */
  SetEnabled(enabled: boolean): Promise<void>;

  /**
   * Gets the value of the State property. The return value indicates whether the property was successfully retrieved.
   *
   * @method OcaDeviceManager#GetState
   * @returns {Promise<OcaDeviceState>}
   *   A promise which resolves to a single value of type :class:`OcaDeviceState`.
   */
  GetState(): Promise<OcaDeviceState>;

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
  SetResetKey(Key: Uint8Array, Address: Uint8Array): Promise<void>;

  /**
   * Gets the value of the ResetCause property. The return value indicates whether the property was successfully retrieved.
   *
   * @method OcaDeviceManager#GetResetCause
   * @returns {Promise<OcaResetCause>}
   *   A promise which resolves to a single value of type :class:`OcaResetCause`.
   */
  GetResetCause(): Promise<OcaResetCause>;

  /**
   * Clears the ResetCause property, i.e. resets it to the default value 'PowerOn'. Must be used after the reset cause has been read out to ensure differentation between reconnects due to network loss and reconnects due to external or internal reset. Offered as a separate method (instead of implicitly clearing the cause after it has been read out) to accomodate systems that have multiple controllers. The return value indicates whether the property was successfully retrieved.
   *
   * @method OcaDeviceManager#ClearResetCause
   * @returns {Promise<void>}
   */
  ClearResetCause(): Promise<void>;

  /**
   * Gets the value of property  **Message** . Return value indicates whether value was successfully retrieved.
   *
   * @method OcaDeviceManager#GetMessage
   * @returns {Promise<string>}
   *   A promise which resolves to a single value of type ``string``.
   */
  GetMessage(): Promise<string>;

  /**
   * Set arbitrary text message into  **Message** property. The return value indicates whether the value was successfully set.
   *
   * @method OcaDeviceManager#SetMessage
   * @param {string} Text
   *
   * @returns {Promise<void>}
   */
  SetMessage(Text: string): Promise<void>;

  /**
   * Retrive the list of descriptors of managers instantiated in this device. The return value indicates whether the retrieval was successful.
   *
   * @method OcaDeviceManager#GetManagers
   * @returns {Promise<OcaManagerDescriptor[]>}
   *   A promise which resolves to a single value of type ``OcaManagerDescriptor[]``.
   */
  GetManagers(): Promise<OcaManagerDescriptor[]>;

  /**
   * Gets the value of property  **DeviceRevisionID** . Return value indicates whether value was successfully retrieved.
   *
   * @method OcaDeviceManager#GetDeviceRevisionID
   * @returns {Promise<string>}
   *   A promise which resolves to a single value of type ``string``.
   */
  GetDeviceRevisionID(): Promise<string>;
}
