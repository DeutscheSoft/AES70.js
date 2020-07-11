import { make_control_class } from './Base.js';
import { OcaManager } from './OcaManager.js';
import { OcaLibVolIdentifier } from '../OCP1/OcaLibVolIdentifier.js';
import { OcaLibVolType } from '../OCP1/OcaLibVolType.js';
import { OcaLibraryIdentifier } from '../OCP1/OcaLibraryIdentifier.js';
import { OcaList } from '../OCP1/OcaList.js';
import { OcaUint16 } from '../OCP1/OcaUint16.js';
import { OcaUint32 } from '../OCP1/OcaUint32.js';
import { String16 } from '../OCP1/String16.js';

/**
 * Optional manager for handling device presets -- Patch and ParamSet
 * libraries. <ul> <li>May be instantiated once in any device. </li>
 * </ul> <ul> <li>If instantiated, object number must be 8.</li> </ul>
 * @extends RemoteControlClasses.OcaManager
 * @class OcaLibraryManager
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaLibraryManager = make_control_class(
  'OcaLibraryManager',
  3,
  '\u0001\u0003\b',
  2,
  OcaManager,
  [
    ['AddLibrary', 3, 1, [OcaLibVolType], [OcaLibraryIdentifier]],
    ['DeleteLibrary', 3, 2, [OcaUint32], []],
    ['GetLibraryCount', 3, 3, [OcaLibVolType], [OcaUint16]],
    ['GetLibraryList', 3, 4, [OcaLibVolType], [OcaList(OcaLibraryIdentifier)]],
    ['GetCurrentPatch', 3, 5, [], [OcaLibVolIdentifier]],
    ['ApplyPatch', 3, 6, [OcaLibVolIdentifier], []],
  ],
  [
    ['Libraries', [OcaList(OcaLibraryIdentifier)], 3, 1, false, false, null],
    ['CurrentPatch', [OcaLibVolIdentifier], 3, 2, false, false, null],
  ],
  []
);

/**
 * Adds a library to the device. Return value indicates whether the
 * library was successfully added.
 * @method RemoteControlClasses.OcaLibraryManager#AddLibrary
 * @param Type {OcaLibVolType}
 *
 * @returns {Promise<OcaLibraryIdentifier>}
 */
/**
 * Deletes a library from the device.
 * @method RemoteControlClasses.OcaLibraryManager#DeleteLibrary
 * @param ID {OcaONo}
 *
 * @returns {Promise}
 */
/**
 * Returns the number of libraries of the given type that are
 * instantiated in the device..
 * @method RemoteControlClasses.OcaLibraryManager#GetLibraryCount
 * @param Type {OcaLibVolType}
 *
 * @returns {Promise<OcaUint16>}
 */
/**
 * Returns the list of object numbers of libraries of libraries of the
 * given type that are instantiated in the device.
 * @method RemoteControlClasses.OcaLibraryManager#GetLibraryList
 * @param Type {OcaLibVolType}
 *
 * @returns {Promise<OcaList>}
 */
/**
 * Return the identifier of the most recently applied patch. The return
 * value indicates whether the method succeeded.
 * @method RemoteControlClasses.OcaLibraryManager#GetCurrentPatch
 * @returns {Promise<OcaLibVolIdentifier>}
 */
/**
 * Apply a patch to the device.
 * @method RemoteControlClasses.OcaLibraryManager#ApplyPatch
 * @param ID {OcaLibVolIdentifier}
 *
 * @returns {Promise}
 */
/**
 * List of identifiers of all libraries in the device.
 * @member RemoteControlClasses.OcaLibraryManager#OnLibrariesChanged {PropertyEvent<OcaList>} - This event is emitted when Libraries changes in the remote object.
 */
/**
 * Library volume identifier of the most-recently applied patch in this
 * device. Changing the value of this property applies the patch
 * represented by the new value.
 * @member RemoteControlClasses.OcaLibraryManager#OnCurrentPatchChanged {PropertyEvent<OcaLibVolIdentifier>} - This event is emitted when CurrentPatch changes in the remote object.
 */
