import { RemoteDevice } from '../remote_device';
import { OcaManager } from './OcaManager';

import { PropertyEvent } from '../property_event';
import { IOcaTimePTP } from '../../types/OcaTimePTP';
import { OcaTimePTP } from '../../types/OcaTimePTP';

/**
 * Manager that allows controlling and monitoring a device's time-of-day clock, and that collects the device's time source objects.
 *
 *  - Must be instantiated once in every device that has more than one time source object. In this context, a "time source object" is an instance of  **OcaTimeSource** or a subclass of it.
 *
 *
 *  - If instantiated, object number must be 10.
 *   Note: The clock value is accessible via Get and Set methods, but has not been defined as a public property because its value is volatile and should not cause property-change events. The current value of the  **OcaTimeSource** object designated by the  **CurrentDeviceTimeSource** property of this Manager is known as the  **Device Time** . The property  **TimeSources** was added in version 2 of this class.
 * @extends OcaManager
 * @class OcaDeviceTimeManager
 */
export declare class OcaDeviceTimeManager extends OcaManager {
  /**
   * This event is emitted whenever TimeSources changes.
   */
  OnTimeSourcesChanged: PropertyEvent<number[]>;

  /**
   * This event is emitted whenever CurrentDeviceTimeSource changes.
   */
  OnCurrentDeviceTimeSourceChanged: PropertyEvent<number>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Get current value of device time-of-day clock in NTP format. Return value indicates whether value was successfully retrieved. This method is  _optional_ and  _deprecated_ .
   *
   * @method OcaDeviceTimeManager#GetDeviceTimeNTP
   * @returns {Promise<number|BigInt>}
   *   A promise which resolves to a single value of type ``number|BigInt``.
   */
  GetDeviceTimeNTP(): Promise<number | BigInt>;

  /**
   * Sets device time-of-day clock in NTP format. Return value indicates whether value was successfully set. Not available if a time source is identified in property CurrentDeviceTimeSource. This method is  _optional_ and  _deprecated_ .
   *
   * @method OcaDeviceTimeManager#SetDeviceTimeNTP
   * @param {number|BigInt} DeviceTime
   *
   * @returns {Promise<void>}
   */
  SetDeviceTimeNTP(DeviceTime: number | BigInt): Promise<void>;

  /**
   * Returns list of object numbers of OcaTimeSource instances in this device. Return value indicates whether list was successfully retrieved.
   *
   * @method OcaDeviceTimeManager#GetTimeSources
   * @returns {Promise<number[]>}
   *   A promise which resolves to a single value of type ``number[]``.
   */
  GetTimeSources(): Promise<number[]>;

  /**
   * Retrieves ONo of current time source object, or zero if none. Return value indicates whether value was successfully retrieved.
   *
   * @method OcaDeviceTimeManager#GetCurrentDeviceTimeSource
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetCurrentDeviceTimeSource(): Promise<number>;

  /**
   * Sets ONo of current time source object, or zero if none. Return value indicates whether value was successfully retrieved.
   *
   * @method OcaDeviceTimeManager#SetCurrentDeviceTimeSource
   * @param {number} TimeSourceONo
   *
   * @returns {Promise<void>}
   */
  SetCurrentDeviceTimeSource(TimeSourceONo: number): Promise<void>;

  /**
   * Get current value of device time-of-day clock in PTP format. Return value indicates whether value was successfully retrieved.
   *
   * @method OcaDeviceTimeManager#GetDeviceTimePTP
   * @returns {Promise<OcaTimePTP>}
   *   A promise which resolves to a single value of type :class:`OcaTimePTP`.
   */
  GetDeviceTimePTP(): Promise<OcaTimePTP>;

  /**
   * Sets device time-of-day clock in PTP format. Return value indicates whether value was successfully set. Not available if a time source is identified in property CurrentDeviceTimeSource.
   *
   * @method OcaDeviceTimeManager#SetDeviceTimePTP
   * @param {OcaTimePTP} DeviceTime
   *
   * @returns {Promise<void>}
   */
  SetDeviceTimePTP(DeviceTime: IOcaTimePTP): Promise<void>;
}
