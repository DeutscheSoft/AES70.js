import { OcaMediaClockType } from '../../types/OcaMediaClockType';
import { PropertyEvent } from '../property_event';
import { RemoteDevice } from '../remote_device';
import { OcaManager } from './OcaManager';

/**
 * Optional manager that collects all media clocks the device uses.
 *
 *  - Must be instantiated once for every device that has more than one media
 *    clock object. In this context, "media clock" means an instance of
 *    **OcaMediaClock**, **OcaMediaClock3**, or any subclass of these classes.
 *
 *  - If instantiated, object number must be 7.
 *
 *
 * @extends OcaManager
 * @class OcaMediaClockManager
 */
export declare class OcaMediaClockManager extends OcaManager {
  /**
   * This event is emitted whenever ClockSourceTypesSupported changes.
   */
  OnClockSourceTypesSupportedChanged: PropertyEvent<OcaMediaClockType[]>;

  /**
   * This event is emitted whenever Clocks changes.
   */
  OnClocksChanged: PropertyEvent<number[]>;

  /**
   * This event is emitted whenever Clock3s changes.
   */
  OnClock3sChanged: PropertyEvent<number[]>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the list of object numbers of **OcaMediaClock** instances in this
   * device. Return value indicates whether list was successfully retrieved.
   * Note: In AES70-2017, this method is deprecated.
   *
   * @method OcaMediaClockManager#GetClocks
   * @returns {Promise<number[]>}
   *   A promise which resolves to a single value of type ``number[]``.
   */
  GetClocks(): Promise<number[]>;

  /**
   * Gets the list of media clock types supported by **OcaMediaClock** objects
   * in the device. Return value indicates whether the list was successfully
   * retrieved. Note : In AES70-2017, this method is deprecated.
   *
   * @method OcaMediaClockManager#GetMediaClockTypesSupported
   * @returns {Promise<OcaMediaClockType[]>}
   *   A promise which resolves to a single value of type :class:`OcaMediaClockType[]`.
   */
  GetMediaClockTypesSupported(): Promise<OcaMediaClockType[]>;

  /**
   * Gets the list of object numbers of **OcaMediaClock3** instances in this
   * device. Return value indicates whether list was successfully retrieved.
   *
   * @method OcaMediaClockManager#GetClock3s
   * @returns {Promise<number[]>}
   *   A promise which resolves to a single value of type ``number[]``.
   */
  GetClock3s(): Promise<number[]>;
}
