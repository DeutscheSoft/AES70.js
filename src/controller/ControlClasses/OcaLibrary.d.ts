import { RemoteDevice } from '../remote_device';
import { OcaAgent } from './OcaAgent';
import { Event } from '../event';

import { PropertyEvent } from '../property_event';
import { IOcaLibAccess } from '../../types/OcaLibAccess';
import { IOcaLibVol } from '../../types/OcaLibVol';
import { OcaLibAccess } from '../../types/OcaLibAccess';
import { OcaLibVol } from '../../types/OcaLibVol';
import { OcaLibVolType } from '../../types/OcaLibVolType';

/**
 * A  **library**  is an agent that holds a collection of datasets. We refer to each dataset as a  **Volume** . There are two kinds of volumes:  **ParamSet**  (parameter set). A ParamSet is a collection of operating parameter settings that can be applied to a block. Each ParamSet is associated with a specific block type, but not with a specific instance of that type. A ParamSet may be applied to any block instance of the associated type. A block's type is the object number of its factory or, for factory-defined blocks, a unique identifier set at time of manufacture.  **Patch** . A Patch is a collection of ParamSet assignments. A ParamSet assigment is the description of a binding of a ParamSet to a block instance. To "apply" a Patch is to apply all of its assignments. To apply an assignment is to set all of its ParamSet's parameter values into its block. A given library instance can only hold one class of volume. A device that supports libraries can have any number of Patch and ParamSet libraries. If a device implements a Patch library, it must also implement at least one ParamSet library. However, the reverse is not true: a device may implement one or more ParamSet libraries without a Patch library.
 * @extends OcaAgent
 * @class OcaLibrary
 */
export declare class OcaLibrary extends OcaAgent {
  /**
   * Event that is raised whenever private property  **Volumes** changes. Added in OcaLibrary Version 2.
   * @member OcaLibrary#OnOcaLibVolChanged {Event}
   * Event that is raised whenever private property <b>Volumes </b>changes.
   * Added in OcaLibrary Version 2.
   */
  OnOcaLibVolChanged: Event;

  /**
   * This event is emitted whenever VolumeType changes.
   */
  OnVolumeTypeChanged: PropertyEvent<OcaLibVolType>;

  /**
   * This event is emitted whenever Access changes.
   */
  OnAccessChanged: PropertyEvent<OcaLibAccess>;

  /**
   * This event is emitted whenever Volumes changes.
   */
  OnVolumesChanged: PropertyEvent<Map<number, OcaLibVol>>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Adds a volume to the library and returns its volume ID. The return value indicates whether the volume was successfully added. Changed in version 2 because the definition of OcaLibVolMetaData, which is part of OcaLibVol, has changed.
   *
   * @method OcaLibrary#AddVolume
   * @param {OcaLibVol} Volume
   *
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  AddVolume(Volume: IOcaLibVol): Promise<number>;

  /**
   * Replaces a volume in the library at the given volume ID. The return value indicates whether the volume was successfully replaced. Changed in version 2 because the definition of OcaLibVolMetaData, which is part of OcaLibVol, has changed.
   *
   * @method OcaLibrary#ReplaceVolume
   * @param {number} ID
   *
   * @param {OcaLibVol} Volume
   *
   * @returns {Promise<void>}
   */
  ReplaceVolume(ID: number, Volume: IOcaLibVol): Promise<void>;

  /**
   * Deletes a volume from the library. The return value indicates whether the group was successfully deleted.
   *
   * @method OcaLibrary#DeleteVolume
   * @param {number} ID
   *
   * @returns {Promise<void>}
   */
  DeleteVolume(ID: number): Promise<void>;

  /**
   * Retrieves a library volume. The return value indicates whether the volume was successfully retrieved. Changed in version 2 because the definition of OcaLibVolMetaData, which is part of OcaLibVol, has changed.
   *
   * @method OcaLibrary#GetVolume
   * @returns {Promise<OcaLibVol>}
   *   A promise which resolves to a single value of type :class:`OcaLibVol`.
   */
  GetVolume(): Promise<OcaLibVol>;

  /**
   * Gets the count of volumes in this library. The return value indicates whether the count was successfully retrieved.
   *
   * @method OcaLibrary#GetVolumeCount
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetVolumeCount(): Promise<number>;

  /**
   * Gets the list of volumes held in this library. The return value indicates whether the list was successfully retrieved. Changed in version 2 because the definition of OcaLibVolMetaData, which is part of OcaLibVol, has changed.
   *
   * @method OcaLibrary#GetVolumes
   * @returns {Promise<Map<number, OcaLibVol>>}
   *   A promise which resolves to a single value of type ``Map<number, OcaLibVol>``.
   */
  GetVolumes(): Promise<Map<number, OcaLibVol>>;

  /**
   * Gets allowed access mode for this library. The return value indicates whether the property was successfully retrieved.
   *
   * @method OcaLibrary#GetAccess
   * @returns {Promise<OcaLibAccess>}
   *   A promise which resolves to a single value of type :class:`OcaLibAccess`.
   */
  GetAccess(): Promise<OcaLibAccess>;

  /**
   * Sets allowed access mode for this library. The return value indicates whether the property was successfully set. Not implemented for static, manufacturer-supplied libraries.
   *
   * @method OcaLibrary#SetAccess
   * @param {OcaLibAccess} Access
   *
   * @returns {Promise<void>}
   */
  SetAccess(Access: IOcaLibAccess): Promise<void>;
}
