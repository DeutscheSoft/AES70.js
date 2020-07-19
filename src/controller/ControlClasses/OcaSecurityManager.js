import { make_control_class } from '../Base.js';
import { OcaManager } from './OcaManager.js';
import { OcaBlob } from '../../OCP1/OcaBlob.js';
import { OcaBoolean } from '../../OCP1/OcaBoolean.js';
import { OcaString } from '../../OCP1/OcaString.js';

/**
 * Manager that collects and controls security settings (including
 * security keys). <ul> <li>Must be instantiated in every device that
 * supports secure control and monitoring; otherwise, is optional. </li>
 * <li>May be instantiated at most once in any device. </li> <li>If
 * instantiated, object number must be 2.</li> </ul>
 * @extends RemoteControlClasses.OcaManager
 * @class OcaSecurityManager
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaSecurityManager = make_control_class(
  'OcaSecurityManager',
  3,
  '\u0001\u0003\u0002',
  2,
  OcaManager,
  [
    ['AddPreSharedKey', 3, 4, [OcaString, OcaBlob], []],
    ['ChangePreSharedKey', 3, 3, [OcaString, OcaBlob], []],
    ['DeletePreSharedKey', 3, 5, [OcaString], []],
    ['DisableControlSecurity', 3, 2, [], []],
    ['EnableControlSecurity', 3, 1, [], []],
  ],
  [['secureControlData', [OcaBoolean], 3, 1, false, false, null]],
  []
);

/**
 * Adds a pre-shared key (identified by the passed identity) to the
 * device. By having multiple PSKs the device is able to participate in
 * multiple secure systems. Note that adding a PSK over the network will
 * only work if the controller has a secure connection to the device and
 * control security has been turned on. If this is not the case the
 * method will return DeviceError.
 * @method RemoteControlClasses.OcaSecurityManager#AddPreSharedKey
 * @param identity {OcaString}
 *
 * @param key {OcaBlob}
 *
 * @returns {Promise}
 */
/**
 * Changes the pre-shared key identified by the passed identity. Note
 * that changing a PSK over the network will only work if the controller
 * has a secure connection to the device and control security has been
 * turned on. If this is not the case the method will return DeviceError.
 * @method RemoteControlClasses.OcaSecurityManager#ChangePreSharedKey
 * @param identity {OcaString}
 *
 * @param newKey {OcaBlob}
 *
 * @returns {Promise}
 */
/**
 * Deletes a pre-shared key (identified by the passed identity) on the
 * device. After deleting the pre-shared key the device will no longer be
 * able to participate in the secure system that uses the PSK. Note that
 * deleting a PSK over the network will only work if the controller has a
 * secure connection to the device and control security has been turned
 * on. If this is not the case the method will return DeviceError.
 * @method RemoteControlClasses.OcaSecurityManager#DeletePreSharedKey
 * @param identity {OcaString}
 *
 * @returns {Promise}
 */
/**
 * Disables security of control data (OCA messages). After calling this
 * method all OCA messages can be sent and received both on insecure and
 * secure connections. The return value indicates whether the operation
 * succeeded. If the operation fails security is not disabled.
 * @method RemoteControlClasses.OcaSecurityManager#DisableControlSecurity
 * @returns {Promise}
 */
/**
 * Enables security of control data (OCA messages). After calling this
 * method all OCA messages are sent and received using a secure
 * connection. The return value indicates whether the operation
 * succeeded. If the operation fails security is not enabled.
 * @method RemoteControlClasses.OcaSecurityManager#EnableControlSecurity
 * @returns {Promise}
 */
/**
 * Indicates whether the OCA control data in the system is secured.
 * @member RemoteControlClasses.OcaSecurityManager#OnsecureControlDataChanged {PropertyEvent<OcaBoolean>} - This event is emitted when secureControlData changes in the remote object.
 */
