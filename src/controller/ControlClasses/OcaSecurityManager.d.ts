import { PropertyEvent } from '../property_event';
import { RemoteDevice } from '../remote_device';
import { OcaManager } from './OcaManager';

/**
 * Manager that collects and controls security settings (including security
 * keys).
 *
 *  - Must be instantiated in every device that supports secure control and
 *    monitoring; otherwise, is optional.
 *
 *  - May be instantiated at most once in any device.
 *
 *  - If instantiated, object number must be 2.
 *
 *
 * @extends OcaManager
 * @class OcaSecurityManager
 */
export declare class OcaSecurityManager extends OcaManager {
  /**
   * This event is emitted whenever secureControlData changes.
   */
  OnsecureControlDataChanged: PropertyEvent<boolean>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Enables security of control data (OCA messages). After calling this method
   * all OCA messages are sent and received using a secure connection. The
   * return value indicates whether the operation succeeded. If the operation
   * fails security is not enabled.
   *
   * @method OcaSecurityManager#EnableControlSecurity
   * @returns {Promise<void>}
   */
  EnableControlSecurity(): Promise<void>;

  /**
   * Disables security of control data (OCA messages). After calling this method
   * all OCA messages can be sent and received both on insecure and secure
   * connections. The return value indicates whether the operation succeeded. If
   * the operation fails security is not disabled.
   *
   * @method OcaSecurityManager#DisableControlSecurity
   * @returns {Promise<void>}
   */
  DisableControlSecurity(): Promise<void>;

  /**
   * Changes the pre-shared key identified by the passed identity. Note that
   * changing a PSK over the network will only work if the controller has a
   * secure connection to the device and control security has been turned on. If
   * this is not the case the method will return DeviceError.
   *
   * @method OcaSecurityManager#ChangePreSharedKey
   * @param {string} identity
   * @param {Uint8Array} newKey
   *
   * @returns {Promise<void>}
   */
  ChangePreSharedKey(identity: string, newKey: Uint8Array): Promise<void>;

  /**
   * Adds a pre-shared key (identified by the passed identity) to the device. By
   * having multiple PSKs the device is able to participate in multiple secure
   * systems. Note that adding a PSK over the network will only work if the
   * controller has a secure connection to the device and control security has
   * been turned on. If this is not the case the method will return DeviceError.
   *
   * @method OcaSecurityManager#AddPreSharedKey
   * @param {string} identity
   * @param {Uint8Array} key
   *
   * @returns {Promise<void>}
   */
  AddPreSharedKey(identity: string, key: Uint8Array): Promise<void>;

  /**
   * Deletes a pre-shared key (identified by the passed identity) on the device.
   * After deleting the pre-shared key the device will no longer be able to
   * participate in the secure system that uses the PSK. Note that deleting a
   * PSK over the network will only work if the controller has a secure
   * connection to the device and control security has been turned on. If this
   * is not the case the method will return DeviceError.
   *
   * @method OcaSecurityManager#DeletePreSharedKey
   * @param {string} identity
   *
   * @returns {Promise<void>}
   */
  DeletePreSharedKey(identity: string): Promise<void>;
}
