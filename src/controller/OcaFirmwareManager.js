import { make_control_class } from './Base.js';
import { OcaManager } from './OcaManager.js';
import { OcaBlob } from '../OCP1/OcaBlob.js';
import { OcaComponent } from '../OCP1/OcaComponent.js';
import { OcaList } from '../OCP1/OcaList.js';
import { OcaString } from '../OCP1/OcaString.js';
import { OcaUint16 } from '../OCP1/OcaUint16.js';
import { OcaUint32 } from '../OCP1/OcaUint32.js';
import { OcaVersion } from '../OCP1/OcaVersion.js';
import { String16 } from '../OCP1/String16.js';

/**
 * Optional manager that manages versions of the different firmware and
 * software images of the device. <ul> <li>May be instantiated at most
 * once in any device. </li> <li>If instantiated, must have object number
 * 3. </li> </ul> A device that does not support firmware updating may
 * support the subset of this class's functions needed to report firmware
 * version numbers to inquiring controllers. This firmware manager offers
 * a generic interface for updating OCA devices. The actual robustness of
 * the update process is left up to the implementer. The interface allows
 * for any of: - Fully transactional based uploads (i.e. only committing
 * to the newly uploaded images after all component uploads have
 * succeeded, and reverting back to the old images if any step fails) -
 * Partly transactional based uploads (i.e. committing to a newly
 * uploaded image after each individual component upload succeeds,
 * possibly leading to a device containing a mix of old and new images) -
 * Non-transactional based uploads guarded by golden images (i.e.
 * accepting a 'weak' spot in the upload process where interruption may
 * lead to a corrupt regular image, which is solved by loading a
 * read-only failsafe ("golden") image in such cases that will allow
 * recovery of the regular image) - Non-transactional based uploads that
 * may lead to bricked devices
 * @extends RemoteControlClasses.OcaManager
 * @class OcaFirmwareManager
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaFirmwareManager = make_control_class(
  'OcaFirmwareManager',
  3,
  '\u0001\u0003\u0003',
  2,
  OcaManager,
  [
    ['GetComponentVersions', 3, 1, [], [OcaList(OcaVersion)]],
    ['StartUpdateProcess', 3, 2, [], []],
    ['BeginActiveImageUpdate', 3, 3, [OcaComponent], []],
    ['AddImageData', 3, 4, [OcaUint32, OcaBlob], []],
    ['VerifyImage', 3, 5, [OcaBlob], []],
    ['EndActiveImageUpdate', 3, 6, [], []],
    [
      'BeginPassiveComponentUpdate',
      3,
      7,
      [OcaComponent, OcaBlob, OcaString],
      [],
    ],
    ['EndUpdateProcess', 3, 8, [], []],
  ],
  [['ComponentVersions', [OcaList(OcaVersion)], 3, 1, false, false, null]],
  []
);

/**
 * Gets the value of the ComponentVersions property. The return value
 * indicates whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaFirmwareManager#GetComponentVersions
 * @returns {Promise<OcaList>}
 */
/**
 * Marks the start of the update process of an OCA device, meaning one or
 * more components will be updated. If the method succeeds the device
 * will be in state 'Updating'. One or more active or passive updates can
 * then follow, after which the update process is ended by calling the
 * '03m08 EndUpdateProcess' method. The return value indicates if
 * starting the update process succeeded.
 * @method RemoteControlClasses.OcaFirmwareManager#StartUpdateProcess
 * @returns {Promise}
 */
/**
 * Starts an active update of a software/firmware image on the device.
 * This generic interface can be used to update any component which can
 * be updated actively, i.e. where the upload tool actively pushes the
 * software/firmware image to the firmware manager. The actual firmware
 * manager implementation may implement separate processes for different
 * components, but in each case the interface is the same. The active
 * interface consists of this method and the methods 03m03 AddImageData,
 * 03m04 VerifyImage and 03m05 EndActiveImageUpdate. The return value
 * indicates if starting the active update succeeded.
 * @method RemoteControlClasses.OcaFirmwareManager#BeginActiveImageUpdate
 * @param component {OcaComponent}
 *
 * @returns {Promise}
 */
/**
 * Adds a new part of the software/firmware image to the upgrade memory
 * as part of the active update. Where this data is stored, is up to the
 * implementation of the manager. It can either be stored in RAM to be
 * written to Flash later, or directly to Flash, dependent on the chosen
 * architecture and requirements. The return value indicates whether the
 * data is correctly received and the data is not out of order.
 * @method RemoteControlClasses.OcaFirmwareManager#AddImageData
 * @param id {OcaUint32}
 *
 * @param imageData {OcaBlob}
 *
 * @returns {Promise}
 */
/**
 * Verifies the entire host processor image using the passed verification
 * data.
 * @method RemoteControlClasses.OcaFirmwareManager#VerifyImage
 * @param verifyData {OcaBlob}
 *
 * @returns {Promise}
 */
/**
 * Ends the active software/firmware image update. This is needed to let
 * the device know that the current active component has finished, and
 * therefore a new active or passive update can be started (or the upload
 * process can be ended by invoking the '03m08 EndUpdateProcess' method).
 * The return value indicates if ending the active update succeeded.
 * @method RemoteControlClasses.OcaFirmwareManager#EndActiveImageUpdate
 * @returns {Promise}
 */
/**
 * Begin a passive software/firmware component update. This generic
 * interface can be used for any component that can be passively updated,
 * i.e. where the device requests the actual software/firmware image from
 * an external server. In the function the component type, details of the
 * server and the filename of the file containing the component
 * software/firmware image needs to be passed. The device will try to
 * retrieve the new software/firmware image from the server and update
 * its component using this image. The actual method for retrieving the
 * image (e.g. TFTP) and the underlying update technique (e.g. netflash)
 * depend on the implementation and may differ between components. Just
 * the interface is standardized.
 * @method RemoteControlClasses.OcaFirmwareManager#BeginPassiveComponentUpdate
 * @param component {OcaComponent}
 *
 * @param serverAddress {OcaNetworkAddress}
 *
 * @param updateFileName {OcaString}
 *
 * @returns {Promise}
 */
/**
 * Ends the current update process in which one or more components haven
 * been updated (actively or passively). This action will trigger the
 * device to start using the new images. This should bring the device
 * back into standard operational mode (e.g. rebooting the device, this
 * however depends on the implementation of the upgrade process). As it
 * will usually trigger a reset of the device in some cases no response
 * parameter is used for this method.
 * @method RemoteControlClasses.OcaFirmwareManager#EndUpdateProcess
 * @returns {Promise}
 */
/**
 * List of the versions of the components of the device. As of version 2
 * of this class, component numbers are of datatype<b> OcaEnum,
 * </b>rather than the previous <b>OcaUint16.</b>
 * @member RemoteControlClasses.OcaFirmwareManager#OnComponentVersionsChanged {PropertyEvent<OcaList>} - This event is emitted when ComponentVersions changes in the remote object.
 */
