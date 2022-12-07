import { OcaList } from '../../OCP1/OcaList.js';
import { OcaTimePTP } from '../../OCP1/OcaTimePTP.js';
import { OcaUint32 } from '../../OCP1/OcaUint32.js';
import { OcaUint64 } from '../../OCP1/OcaUint64.js';
import { make_control_class } from '../make_control_class.js';
import { OcaManager } from './OcaManager.js';

/**
 * Manager that allows controlling and monitoring a device's time-of-day clock,
 * and that collects the device's time source objects.
 *
 *  - Must be instantiated once in every device that has more than one time
 *    source object. In this context, a "time source object" is an instance of
 *    **OcaTimeSource** or a subclass of it.
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
export const OcaDeviceTimeManager = make_control_class(
  'OcaDeviceTimeManager',
  3,
  '\u0001\u0003\n',
  2,
  OcaManager,
  [
    ['GetDeviceTimeNTP', 3, 1, [], [OcaUint64]],
    ['SetDeviceTimeNTP', 3, 2, [OcaUint64], []],
    ['GetTimeSources', 3, 3, [], [OcaList(OcaUint32)]],
    ['GetCurrentDeviceTimeSource', 3, 4, [], [OcaUint32]],
    ['SetCurrentDeviceTimeSource', 3, 5, [OcaUint32], []],
    ['GetDeviceTimePTP', 3, 6, [], [OcaTimePTP]],
    ['SetDeviceTimePTP', 3, 7, [OcaTimePTP], []],
  ],
  [
    ['TimeSources', [OcaList(OcaUint32)], 3, 1, false, false, null],
    ['CurrentDeviceTimeSource', [OcaUint32], 3, 2, false, false, null],
  ],
  []
);

/**
 * Get current value of device time-of-day clock in NTP format. Return value
 * indicates whether value was successfully retrieved. This method is optional
 * and deprecated.
 *
 * @method OcaDeviceTimeManager#GetDeviceTimeNTP
 * @returns {Promise<number|BigInt>}
 *   A promise which resolves to a single value of type ``number|BigInt``.
 */
/**
 * Sets device time-of-day clock in NTP format. Return value indicates whether
 * value was successfully set. Not available if a time source is identified in
 * property CurrentDeviceTimeSource. This method is optional and deprecated.
 *
 * @method OcaDeviceTimeManager#SetDeviceTimeNTP
 * @param {number|BigInt} DeviceTime
 *
 * @returns {Promise<void>}
 */
/**
 * Returns list of object numbers of OcaTimeSource instances in this device.
 * Return value indicates whether list was successfully retrieved.
 *
 * @method OcaDeviceTimeManager#GetTimeSources
 * @returns {Promise<number[]>}
 *   A promise which resolves to a single value of type ``number[]``.
 */
/**
 * Retrieves ONo of current time source object, or zero if none. Return value
 * indicates whether value was successfully retrieved.
 *
 * @method OcaDeviceTimeManager#GetCurrentDeviceTimeSource
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Sets ONo of current time source object, or zero if none. Return value
 * indicates whether value was successfully retrieved.
 *
 * @method OcaDeviceTimeManager#SetCurrentDeviceTimeSource
 * @param {number} TimeSourceONo
 *
 * @returns {Promise<void>}
 */
/**
 * Get current value of device time-of-day clock in PTP format. Return value
 * indicates whether value was successfully retrieved.
 *
 * @method OcaDeviceTimeManager#GetDeviceTimePTP
 * @returns {Promise<OcaTimePTP>}
 *   A promise which resolves to a single value of type :class:`OcaTimePTP`.
 */
/**
 * Sets device time-of-day clock in PTP format. Return value indicates whether
 * value was successfully set. Not available if a time source is identified in
 * property CurrentDeviceTimeSource.
 *
 * @method OcaDeviceTimeManager#SetDeviceTimePTP
 * @param {IOcaTimePTP} DeviceTime
 *
 * @returns {Promise<void>}
 */
/**
 * This event is emitted when the property ``TimeSources`` changes in the remote object.
 * The property ``TimeSources`` is described in the AES70 standard as follows.
 * The list of ONos of OcaTimeSource objects in this device
 *
 * @member {PropertyEvent<number[]>} OcaDeviceTimeManager#OnTimeSourcesChanged
 */
/**
 * This event is emitted when the property ``CurrentDeviceTimeSource`` changes in the remote object.
 * The property ``CurrentDeviceTimeSource`` is described in the AES70 standard as follows.
 * The current time source for this device's device time, or zero if none.
 *
 * @member {PropertyEvent<number>} OcaDeviceTimeManager#OnCurrentDeviceTimeSourceChanged
 */
