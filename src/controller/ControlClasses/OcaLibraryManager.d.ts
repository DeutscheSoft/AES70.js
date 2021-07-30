import { RemoteDevice } from '../remote_device';
import { OcaManager } from './OcaManager';

import { PropertyEvent } from '../Base';
import { IOcaLibVolIdentifier } from '../../types/OcaLibVolIdentifier';
import { IOcaLibVolType } from '../../types/OcaLibVolType';
import { OcaLibVolIdentifier } from '../../types/OcaLibVolIdentifier';
import { OcaLibraryIdentifier } from '../../types/OcaLibraryIdentifier';

/**
 * Optional manager for handling device presets -- Patch and ParamSet libraries.
 *
 *  - May be instantiated once in any device.
 *
 *
 *  - If instantiated, object number must be 8.
 *
 * @extends OcaManager
 * @class OcaLibraryManager
 */
export declare class OcaLibraryManager extends OcaManager {
  /**
   * This event is emitted whenever Libraries changes.
   */
  OnLibrariesChanged: PropertyEvent<OcaLibraryIdentifier[]>;

  /**
   * This event is emitted whenever CurrentPatch changes.
   */
  OnCurrentPatchChanged: PropertyEvent<OcaLibVolIdentifier>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Adds a library to the device. Return value indicates whether the library was successfully added.
   *
   * @method OcaLibraryManager#AddLibrary
   * @param {OcaLibVolType} Type
   *
   * @returns {Promise<OcaLibraryIdentifier>}
   *   A promise which resolves to a single value of type :class:`OcaLibraryIdentifier`.
   */
  AddLibrary(Type: IOcaLibVolType): Promise<OcaLibraryIdentifier>;

  /**
   * Deletes a library from the device.
   *
   * @method OcaLibraryManager#DeleteLibrary
   * @param {number} ID
   *
   * @returns {Promise<void>}
   */
  DeleteLibrary(ID: number): Promise<void>;

  /**
   * Returns the number of libraries of the given type that are instantiated in the device..
   *
   * @method OcaLibraryManager#GetLibraryCount
   * @param {OcaLibVolType} Type
   *
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetLibraryCount(Type: IOcaLibVolType): Promise<number>;

  /**
   * Returns the list of object numbers of libraries of libraries of the given type that are instantiated in the device.
   *
   * @method OcaLibraryManager#GetLibraryList
   * @param {OcaLibVolType} Type
   *
   * @returns {Promise<OcaLibraryIdentifier[]>}
   *   A promise which resolves to a single value of type ``OcaLibraryIdentifier[]``.
   */
  GetLibraryList(Type: IOcaLibVolType): Promise<OcaLibraryIdentifier[]>;

  /**
   * Return the identifier of the most recently applied patch. The return value indicates whether the method succeeded.
   *
   * @method OcaLibraryManager#GetCurrentPatch
   * @returns {Promise<OcaLibVolIdentifier>}
   *   A promise which resolves to a single value of type :class:`OcaLibVolIdentifier`.
   */
  GetCurrentPatch(): Promise<OcaLibVolIdentifier>;

  /**
   * Apply a patch to the device.
   *
   * @method OcaLibraryManager#ApplyPatch
   * @param {OcaLibVolIdentifier} ID
   *
   * @returns {Promise<void>}
   */
  ApplyPatch(ID: IOcaLibVolIdentifier): Promise<void>;
}
