import { IOcaTime, OcaTime } from '../../types/OcaTime.js';
import { PropertyEvent } from '../property_event.js';
import { RemoteDevice } from '../remote_device.js';
import { OcaManager } from './OcaManager.js';

/**
 * Manager that allows controlling and monitoring a device's time-of-day clock,
 * and that collects the device's time source objects.
 *
 *  - Must be instantiated in every device that has more than one time source
 *    object. In this context, a "time source object" is an instance of
 *    **OcaTimeSource** or a subclass of it.
 *
 *  - May be instantiated at most once in any device.
 *
 *  - If instantiated, object number must be 10.
 *
 *
 * Note: The clock value is accessible via Get and Set methods, but has not been
 * defined as a public property because its value is volatile and should not
 * cause property-change events. The current value of the **OcaTimeSource**
 * object designated by the **CurrentDeviceTimeSource** property of this Manager
 * is known as the **Device Time**. The property **TimeSources** was added in
 * version 2 of this class.
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
   * Get current value of device time-of-day clock in NTP format. **Deprecated**
   * in version 3 of this class.
   *
   * @method OcaDeviceTimeManager#GetDeviceTimeNTP
   * @returns {Promise<number|BigInt>}
   *   A promise which resolves to a single value of type ``number|BigInt``.
   */
  GetDeviceTimeNTP(): Promise<number | BigInt>;

  /**
   * Sets device time-of-day clock in NTP format. Not available if a time source
   * is identified in property CurrentDeviceTimeSource. **Deprecated** in
   * version 3 of this class.
   *
   * @method OcaDeviceTimeManager#SetDeviceTimeNTP
   * @param {number|BigInt} DeviceTime
   *
   * @returns {Promise<void>}
   */
  SetDeviceTimeNTP(DeviceTime: number | BigInt): Promise<void>;

  /**
   * Gets the list of object numbers of OcaTimeSource instances in this device.
   *
   * @method OcaDeviceTimeManager#GetTimeSources
   * @returns {Promise<number[]>}
   *   A promise which resolves to a single value of type ``number[]``.
   */
  GetTimeSources(): Promise<number[]>;

  /**
   * Retrieves **ONo** of current time source object, or zero if none.
   *
   * @method OcaDeviceTimeManager#GetCurrentDeviceTimeSource
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetCurrentDeviceTimeSource(): Promise<number>;

  /**
   * Sets **ONo** of current time source object, or zero if none.
   *
   * @method OcaDeviceTimeManager#SetCurrentDeviceTimeSource
   * @param {number} TimeSourceONo
   *
   * @returns {Promise<void>}
   */
  SetCurrentDeviceTimeSource(TimeSourceONo: number): Promise<void>;

  /**
   * Get current value of device time-of-day clock.
   *
   * @method OcaDeviceTimeManager#GetDeviceTime
   * @returns {Promise<OcaTime>}
   *   A promise which resolves to a single value of type :class:`OcaTime`.
   */
  GetDeviceTime(): Promise<OcaTime>;

  /**
   * Get current value of device time-of-day clock.
   * An alias for GetDeviceTime.
   *
   * @method OcaDeviceTimeManager#GetDeviceTimePTP
   * @returns {Promise<OcaTime>}
   *   A promise which resolves to a single value of type :class:`OcaTime`.
   */
  GetDeviceTimePTP(): Promise<OcaTime>;

  /**
   * Sets device time-of-day clock Not available if a time source is identified
   * in property **CurrentDeviceTimeSource**.
   *
   * @method OcaDeviceTimeManager#SetDeviceTime
   * @param {IOcaTime} DeviceTime
   *
   * @returns {Promise<void>}
   */
  SetDeviceTime(DeviceTime: IOcaTime): Promise<void>;

  /**
   * Sets device time-of-day clock Not available if a time source is identified
   * in property **CurrentDeviceTimeSource**.
   * An alias for SetDeviceTime.
   *
   * @method OcaDeviceTimeManager#SetDeviceTimePTP
   * @param {IOcaTime} DeviceTime
   *
   * @returns {Promise<void>}
   */
  SetDeviceTimePTP(DeviceTime: IOcaTime): Promise<void>;
}
