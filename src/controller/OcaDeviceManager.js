import { make_control_class } from './Base.js';
import { OcaManager } from './OcaManager.js';
import { OcaBlob } from '../OCP1/OcaBlob.js';
import { OcaBlobFixedLen } from '../OCP1/OcaBlobFixedLen.js';
import { OcaBoolean } from '../OCP1/OcaBoolean.js';
import { OcaDeviceState } from '../OCP1/OcaDeviceState.js';
import { OcaList } from '../OCP1/OcaList.js';
import { OcaManagerDescriptor } from '../OCP1/OcaManagerDescriptor.js';
import { OcaModelDescription } from '../OCP1/OcaModelDescription.js';
import { OcaModelGUID } from '../OCP1/OcaModelGUID.js';
import { OcaResetCause } from '../OCP1/OcaResetCause.js';
import { OcaString } from '../OCP1/OcaString.js';
import { OcaUint16 } from '../OCP1/OcaUint16.js';
import { String16 } from '../OCP1/String16.js';

/**
 * Mandatory manager that contains information relevant to the whole
 * device. <ul> <li>Must be instantiated once in every device. </li>
 * <li>Must have object number 1.</li> </ul>
 * @extends RemoteControlClasses.OcaManager
 * @class OcaDeviceManager
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the value of the OcaVersion property. The return value indicates
 * whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaDeviceManager#GetOcaVersion
 * @returns {Promise<OcaUint16>}
 */
/**
 * Gets the model GUID. The return value indicates whether the GUID was
 * successfully retrieved.
 * @method RemoteControlClasses.OcaDeviceManager#GetModelGUID
 * @returns {Promise<OcaModelGUID>}
 */
/**
 * Gets the value of the SerialNumber property. The return value
 * indicates whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaDeviceManager#GetSerialNumber
 * @returns {Promise<OcaString>}
 */
/**
 * Gets the device name. The return value indicates whether the property
 * was successfully retrieved.
 * @method RemoteControlClasses.OcaDeviceManager#GetDeviceName
 * @returns {Promise<OcaString>}
 */
/**
 * Sets the device name. The return value indicates whether the property
 * was successfully set.
 * @method RemoteControlClasses.OcaDeviceManager#SetDeviceName
 * @param Name {OcaString}
 *
 * @returns {Promise}
 */
/**
 * Gets the model description. The return value indicates whether the
 * description was successfully retrieved.
 * @method RemoteControlClasses.OcaDeviceManager#GetModelDescription
 * @returns {Promise<OcaModelDescription>}
 */
/**
 * Gets the value of the Role property. The return value indicates
 * whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaDeviceManager#GetDeviceRole
 * @returns {Promise<OcaString>}
 */
/**
 * Sets the value of the Role property. The return value indicates
 * whether the property was successfully set.
 * @method RemoteControlClasses.OcaDeviceManager#SetDeviceRole
 * @param role {OcaString}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the UserInventoryCode property. The return value
 * indicates whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaDeviceManager#GetUserInventoryCode
 * @returns {Promise<OcaString>}
 */
/**
 * Sets the value of the UserInventoryCode property. The return value
 * indicates whether the property was successfully set.
 * @method RemoteControlClasses.OcaDeviceManager#SetUserInventoryCode
 * @param Code {OcaString}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the Enabled property. The return value indicates
 * whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaDeviceManager#GetEnabled
 * @returns {Promise<OcaBoolean>}
 */
/**
 * Sets the value of the Enabled property. The return value indicates
 * whether the property was successfully set.
 * @method RemoteControlClasses.OcaDeviceManager#SetEnabled
 * @param enabled {OcaBoolean}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the State property. The return value indicates
 * whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaDeviceManager#GetState
 * @returns {Promise<OcaDeviceState>}
 */
/**
 * Sets the value of the reset key of the device. The return value
 * indicates whether the property was successfully set. Note that the
 * device manager must inform the CAP gateway of this key (via the host
 * interface), since the CAP gateway will check for and handle the
 * special reset message.
 * @method RemoteControlClasses.OcaDeviceManager#SetResetKey
 * @param Key {OcaBlobFixedLen}
 *
 * @param Address {OcaNetworkAddress}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the ResetCause property. The return value indicates
 * whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaDeviceManager#GetResetCause
 * @returns {Promise<OcaResetCause>}
 */
/**
 * Clears the ResetCause property, i.e. resets it to the default value
 * 'PowerOn'. Must be used after the reset cause has been read out to
 * ensure differentation between reconnects due to network loss and
 * reconnects due to external or internal reset. Offered as a separate
 * method (instead of implicitly clearing the cause after it has been
 * read out) to accomodate systems that have multiple controllers. The
 * return value indicates whether the property was successfully
 * retrieved.
 * @method RemoteControlClasses.OcaDeviceManager#ClearResetCause
 * @returns {Promise}
 */
/**
 * Gets the value of property <b>Message</b>. Return value indicates
 * whether value was successfully retrieved.
 * @method RemoteControlClasses.OcaDeviceManager#GetMessage
 * @returns {Promise<OcaString>}
 */
/**
 * Set arbitrary text message into <b>Message </b>property. The return
 * value indicates whether the value was successfully set.
 * @method RemoteControlClasses.OcaDeviceManager#SetMessage
 * @param Text {OcaString}
 *
 * @returns {Promise}
 */
/**
 * Retrive the list of descriptors of managers instantiated in this
 * device. The return value indicates whether the retrieval was
 * successful.
 * @method RemoteControlClasses.OcaDeviceManager#GetManagers
 * @returns {Promise<OcaList>}
 */
/**
 * Gets the value of property <b>DeviceRevisionID</b>. Return value
 * indicates whether value was successfully retrieved.
 * @method RemoteControlClasses.OcaDeviceManager#GetDeviceRevisionID
 * @returns {Promise<OcaString>}
 */
/**
 * Read-only property that identifies the model of the device. Note this
 * property is not equivalent to a MAC address, because (a) MAC addresses
 * identify individual devices, not models, and (b) MAC addresses are
 * Ethernet-specific, but an OCA device need not have an Ethernet port.
 * @member RemoteControlClasses.OcaDeviceManager#OnModelGUIDChanged {PropertyEvent<OcaModelGUID>} - This event is emitted when ModelGUID changes in the remote object.
 */
/**
 * Read-only property that identifies the serial number of the CAP
 * device.
 * @member RemoteControlClasses.OcaDeviceManager#OnSerialNumberChanged {PropertyEvent<OcaString>} - This event is emitted when SerialNumber changes in the remote object.
 */
/**
 * Read-only property that contains text names for this model, its
 * manufacturer, and its version.
 * @member RemoteControlClasses.OcaDeviceManager#OnModelDescriptionChanged {PropertyEvent<OcaModelDescription>} - This event is emitted when ModelDescription changes in the remote object.
 */
/**
 * Name of the device. Should be unique manufacturer-qualified
 * identifier.
 * @member RemoteControlClasses.OcaDeviceManager#OnDeviceNameChanged {PropertyEvent<OcaString>} - This event is emitted when DeviceName changes in the remote object.
 */
/**
 * Read-only property that indicates the AES70 version number used by the
 * device.
 * @member RemoteControlClasses.OcaDeviceManager#OnOcaVersionChanged {PropertyEvent<OcaUint16>} - This event is emitted when OcaVersion changes in the remote object.
 */
/**
 * Role of device in application (arbitrary).
 * @member RemoteControlClasses.OcaDeviceManager#OnDeviceRoleChanged {PropertyEvent<OcaString>} - This event is emitted when DeviceRole changes in the remote object.
 */
/**
 * Code used for equipment tracking.
 * @member RemoteControlClasses.OcaDeviceManager#OnUserInventoryCodeChanged {PropertyEvent<OcaString>} - This event is emitted when UserInventoryCode changes in the remote object.
 */
/**
 * Indicates whether the device is enabled (and therefore operational).
 * @member RemoteControlClasses.OcaDeviceManager#OnEnabledChanged {PropertyEvent<OcaBoolean>} - This event is emitted when Enabled changes in the remote object.
 */
/**
 * Read-only property that indicates the current state of the device.
 * @member RemoteControlClasses.OcaDeviceManager#OnStateChanged {PropertyEvent<OcaDeviceState>} - This event is emitted when State changes in the remote object.
 */
/**
 * True iff device is working on something and is not available for OCA
 * command activity. Readonly.
 * @member RemoteControlClasses.OcaDeviceManager#OnBusyChanged {PropertyEvent<OcaBoolean>} - This event is emitted when Busy changes in the remote object.
 */
/**
 * Read-only attribute that indicates the reset cause of the last reset.
 * @member RemoteControlClasses.OcaDeviceManager#OnResetCauseChanged {PropertyEvent<OcaResetCause>} - This event is emitted when ResetCause changes in the remote object.
 */
/**
 * Arbitrary text message provided by controller. Display and handling of
 * the text is device-dependent and not defined by OCA.
 * @member RemoteControlClasses.OcaDeviceManager#OnMessageChanged {PropertyEvent<OcaString>} - This event is emitted when Message changes in the remote object.
 */
/**
 * List of all manager objects instantiated in this device.
 * @member RemoteControlClasses.OcaDeviceManager#OnManagersChanged {PropertyEvent<OcaList>} - This event is emitted when Managers changes in the remote object.
 */
/**
 * Overall device revision identifier. Format of string is
 * manufacturer-specific. Readonly. May be changed by proprietery
 * functions of firmware upload processes.
 */
