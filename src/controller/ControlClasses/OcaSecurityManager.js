import { OcaBlob } from '../../OCP1/OcaBlob.js';
import { OcaBoolean } from '../../OCP1/OcaBoolean.js';
import { OcaString } from '../../OCP1/OcaString.js';
import { make_control_class } from '../make_control_class.js';
import { OcaManager } from './OcaManager.js';

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
export const OcaSecurityManager = make_control_class(
  'OcaSecurityManager',
  3,
  '\u0001\u0003\u0002',
  3,
  OcaManager,
  [
    ['EnableControlSecurity', 3, 1, [], []],
    ['DisableControlSecurity', 3, 2, [], []],
    ['ChangePreSharedKey', 3, 3, [OcaString, OcaBlob], []],
    ['AddPreSharedKey', 3, 4, [OcaString, OcaBlob], []],
    ['DeletePreSharedKey', 3, 5, [OcaString], []],
  ],
  [['secureControlData', [OcaBoolean], 3, 1, false, false, null]],
  []
);

/**
 * Enables security of control data (OCA messages). After calling this method
 * all OCA messages are sent and received using a secure connection. If the
 * operation fails, security is not enabled.
 *
 * @method OcaSecurityManager#EnableControlSecurity
 * @returns {Promise<void>}
 */
/**
 * Disables security of control data (OCA messages). After calling this method
 * all OCA messages can be sent and received both on insecure and secure
 * connections. If the operation fails, security is not disabled.
 *
 * @method OcaSecurityManager#DisableControlSecurity
 * @returns {Promise<void>}
 */
/**
 * Changes the pre-shared key identified by the passed identity. Note that
 * changing a PSK over the network will only work if the controller has a secure
 * connection to the device and control security has been turned on. If this is
 * not the case, the method will return DeviceError.
 *
 * @method OcaSecurityManager#ChangePreSharedKey
 * @param {string} identity
 * @param {Uint8Array} newKey
 *
 * @returns {Promise<void>}
 */
/**
 * Adds a pre-shared key (identified by the passed identity) to the device. By
 * having multiple PSKs the device is able to participate in multiple secure
 * systems. Note that adding a PSK over the network will only work if the
 * controller has a secure connection to the device and control security has
 * been turned on. If this is not the case, the method will return DeviceError.
 *
 * @method OcaSecurityManager#AddPreSharedKey
 * @param {string} identity
 * @param {Uint8Array} key
 *
 * @returns {Promise<void>}
 */
/**
 * Deletes the pre-shared key identified by the given identity from the device.
 * After deleting the pre-shared key, the device will no longer be able to
 * participate in the secure system that uses the PSK. Note that deleting a PSK
 * over the network will only work if the controller has a secure connection to
 * the device and control security has been turned on. If this is not the case,
 * the method will return DeviceError.
 *
 * @method OcaSecurityManager#DeletePreSharedKey
 * @param {string} identity
 *
 * @returns {Promise<void>}
 */
/**
 * This event is emitted when the property ``secureControlData`` changes in the remote object.
 * The property ``secureControlData`` is described in the AES70 standard as follows.
 * TRUE if and only if the OCA control data in the system is secured.
 *
 * @member {PropertyEvent<boolean>} OcaSecurityManager#OnsecureControlDataChanged
 */
