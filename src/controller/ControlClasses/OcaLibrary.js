import { make_control_class } from '../Base.js';
import { OcaAgent } from './OcaAgent.js';
import { OcaLibAccess } from '../../OCP1/OcaLibAccess.js';
import { OcaLibVol } from '../../OCP1/OcaLibVol.js';
import { OcaLibVolType } from '../../OCP1/OcaLibVolType.js';
import { OcaMap } from '../../OCP1/OcaMap.js';
import { OcaPropertyChangeType } from '../../OCP1/OcaPropertyChangeType.js';
import { OcaUint16 } from '../../OCP1/OcaUint16.js';
import { OcaUint32 } from '../../OCP1/OcaUint32.js';

/**
 * A <b>library</b> is an agent that holds a collection of datasets. We
 * refer to each dataset as a <b>Volume</b>. There are two kinds of
 * volumes: <b>ParamSet</b> (parameter set). A ParamSet is a collection
 * of operating parameter settings that can be applied to a block. Each
 * ParamSet is associated with a specific block type, but not with a
 * specific instance of that type. A ParamSet may be applied to any block
 * instance of the associated type. A block's type is the object number
 * of its factory or, for factory-defined blocks, a unique identifier set
 * at time of manufacture. <b>Patch</b>. A Patch is a collection of
 * ParamSet assignments. A ParamSet assigment is the description of a
 * binding of a ParamSet to a block instance. To "apply" a Patch is to
 * apply all of its assignments. To apply an assignment is to set all of
 * its ParamSet's parameter values into its block. A given library
 * instance can only hold one class of volume. A device that supports
 * libraries can have any number of Patch and ParamSet libraries. If a
 * device implements a Patch library, it must also implement at least one
 * ParamSet library. However, the reverse is not true: a device may
 * implement one or more ParamSet libraries without a Patch library.
 * <font color="#0000ff"> </font>
 * @extends RemoteControlClasses.OcaAgent
 * @class OcaLibrary
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaLibrary = make_control_class(
  'OcaLibrary',
  3,
  '\u0001\u0002\u0005',
  2,
  OcaAgent,
  [
    ['AddVolume', 3, 1, [OcaLibVol], [OcaUint32]],
    ['ReplaceVolume', 3, 2, [OcaUint32, OcaLibVol], []],
    ['DeleteVolume', 3, 3, [OcaUint32], []],
    ['GetVolume', 3, 4, [], [OcaLibVol]],
    ['GetVolumeCount', 3, 5, [], [OcaUint16]],
    ['GetVolumes', 3, 6, [], [OcaMap(OcaUint32, OcaLibVol)]],
    ['GetAccess', 3, 7, [], [OcaLibAccess]],
    ['SetAccess', 3, 8, [OcaLibAccess], []],
  ],
  [
    ['VolumeType', [OcaLibVolType], 3, 1, false, false, null],
    ['Access', [OcaLibAccess], 3, 2, false, false, null],
    ['Volumes', [OcaMap(OcaUint32, OcaLibVol)], 3, 3, false, false, null],
  ],
  [['OcaLibVolChanged', 3, 1, [OcaUint32, OcaPropertyChangeType]]]
);

/**
 * Adds a volume to the library and returns its volume ID. The return
 * value indicates whether the volume was successfully added. Changed in
 * version 2 because the definition of OcaLibVolMetaData, which is part
 * of OcaLibVol, has changed.
 * @method RemoteControlClasses.OcaLibrary#AddVolume
 * @param Volume {OcaLibVol}
 *
 * @returns {Promise<OcaLibVolID>}
 */
/**
 * Replaces a volume in the library at the given volume ID. The return
 * value indicates whether the volume was successfully replaced. Changed
 * in version 2 because the definition of OcaLibVolMetaData, which is
 * part of OcaLibVol, has changed.
 * @method RemoteControlClasses.OcaLibrary#ReplaceVolume
 * @param ID {OcaLibVolID}
 *
 * @param Volume {OcaLibVol}
 *
 * @returns {Promise}
 */
/**
 * Deletes a volume from the library. The return value indicates whether
 * the group was successfully deleted.
 * @method RemoteControlClasses.OcaLibrary#DeleteVolume
 * @param ID {OcaLibVolID}
 *
 * @returns {Promise}
 */
/**
 * Retrieves a library volume. The return value indicates whether the
 * volume was successfully retrieved. Changed in version 2 because the
 * definition of OcaLibVolMetaData, which is part of OcaLibVol, has
 * changed.
 * @method RemoteControlClasses.OcaLibrary#GetVolume
 * @returns {Promise<OcaLibVol>}
 */
/**
 * Gets the count of volumes in this library. The return value indicates
 * whether the count was successfully retrieved.
 * @method RemoteControlClasses.OcaLibrary#GetVolumeCount
 * @returns {Promise<OcaUint16>}
 */
/**
 * Gets the list of volumes held in this library. The return value
 * indicates whether the list was successfully retrieved. Changed in
 * version 2 because the definition of OcaLibVolMetaData, which is part
 * of OcaLibVol, has changed.
 * @method RemoteControlClasses.OcaLibrary#GetVolumes
 * @returns {Promise<OcaMap>}
 */
/**
 * Gets allowed access mode for this library. The return value indicates
 * whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaLibrary#GetAccess
 * @returns {Promise<OcaLibAccess>}
 */
/**
 * Sets allowed access mode for this library. The return value indicates
 * whether the property was successfully set. Not implemented for static,
 * manufacturer-supplied libraries.
 * @method RemoteControlClasses.OcaLibrary#SetAccess
 * @param Access {OcaLibAccess}
 *
 * @returns {Promise}
 */
/**
 * Event that is raised whenever private property <b>Volumes </b>changes.
 * Added in OcaLibrary Version 2.
 * @member RemoteControlClasses.OcaLibrary#OnOcaLibVolChanged {Event} -
 * Event that is raised whenever private property <b>Volumes </b>changes.
 * Added in OcaLibrary Version 2.
 */
/**
 * Type of library volumes:
 * @member RemoteControlClasses.OcaLibrary#OnVolumeTypeChanged {PropertyEvent<OcaLibVolType>} - This event is emitted when VolumeType changes in the remote object.
 */
/**
 * Readonly, read-expand, or full.
 * @member RemoteControlClasses.OcaLibrary#OnAccessChanged {PropertyEvent<OcaLibAccess>} - This event is emitted when Access changes in the remote object.
 */
/**
 * Map of volumes held in the Library. Changed in version 2 because the
 * definition of OcaLibVolMetaData, which is part of OcaLibVol, has
 * changed, and because it is now a private property whose changes are
 * signaled by the <b>OcaLibVolChanged </b>event.
 */
