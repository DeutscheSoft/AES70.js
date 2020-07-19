import { make_control_class } from '../Base.js';
import { OcaManager } from './OcaManager.js';
import { OcaList } from '../../OCP1/OcaList.js';
import { OcaTimePTP } from '../../OCP1/OcaTimePTP.js';
import { OcaUint32 } from '../../OCP1/OcaUint32.js';
import { OcaUint64 } from '../../OCP1/OcaUint64.js';

/**
 * Manager that allows controlling and monitoring a device's time-of-day
 * clock, and that collects the device's time source objects. <ul>
 * <li>Must be instantiated once in every device that has more than one
 * time source object. In this context, a "time source object" is an
 * instance of <b>OcaTimeSource </b>or a subclass of it. </li> </ul> <ul>
 * <li>If instantiated, object number must be 10.</li> </ul> Note: The
 * clock value is accessible via Get and Set methods, but has not been
 * defined as a public property because its value is volatile and should
 * not cause property-change events. The current value of the
 * <b>OcaTimeSource </b>object designated by the
 * <b>CurrentDeviceTimeSource </b>property of this Manager is known as
 * the <b><i>Device Time</i></b>. The property <b>TimeSources </b>was
 * added in version 2 of this class.
 * @extends RemoteControlClasses.OcaManager
 * @class OcaDeviceTimeManager
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Get current value of device time-of-day clock in NTP format. Return
 * value indicates whether value was successfully retrieved. This method
 * is <u>optional </u>and <u>deprecated</u>.
 * @method RemoteControlClasses.OcaDeviceTimeManager#GetDeviceTimeNTP
 * @returns {Promise<OcaTimeNTP>}
 */
/**
 * Sets device time-of-day clock in NTP format. Return value indicates
 * whether value was successfully set. Not available if a time source is
 * identified in property CurrentDeviceTimeSource. This method is
 * <u>optional </u>and <u>deprecated</u>.
 * @method RemoteControlClasses.OcaDeviceTimeManager#SetDeviceTimeNTP
 * @param DeviceTime {OcaTimeNTP}
 *
 * @returns {Promise}
 */
/**
 * Returns list of object numbers of OcaTimeSource instances in this
 * device. Return value indicates whether list was successfully
 * retrieved.
 * @method RemoteControlClasses.OcaDeviceTimeManager#GetTimeSources
 * @returns {Promise<OcaList>}
 */
/**
 * Retrieves ONo of current time source object, or zero if none. Return
 * value indicates whether value was successfully retrieved.
 * @method RemoteControlClasses.OcaDeviceTimeManager#GetCurrentDeviceTimeSource
 * @returns {Promise<OcaONo>}
 */
/**
 * Sets ONo of current time source object, or zero if none. Return value
 * indicates whether value was successfully retrieved.
 * @method RemoteControlClasses.OcaDeviceTimeManager#SetCurrentDeviceTimeSource
 * @param TimeSourceONo {OcaONo}
 *
 * @returns {Promise}
 */
/**
 * Get current value of device time-of-day clock in PTP format. Return
 * value indicates whether value was successfully retrieved.
 * @method RemoteControlClasses.OcaDeviceTimeManager#GetDeviceTimePTP
 * @returns {Promise<OcaTimePTP>}
 */
/**
 * Sets device time-of-day clock in PTP format. Return value indicates
 * whether value was successfully set. Not available if a time source is
 * identified in property CurrentDeviceTimeSource.
 * @method RemoteControlClasses.OcaDeviceTimeManager#SetDeviceTimePTP
 * @param DeviceTime {OcaTimePTP}
 *
 * @returns {Promise}
 */
/**
 * The list of ONos of OcaTimeSource objects in this device
 * @member RemoteControlClasses.OcaDeviceTimeManager#OnTimeSourcesChanged {PropertyEvent<OcaList>} - This event is emitted when TimeSources changes in the remote object.
 */
/**
 * The current time source for this device's device time, or zero if
 * none.
 * @member RemoteControlClasses.OcaDeviceTimeManager#OnCurrentDeviceTimeSourceChanged {PropertyEvent<OcaONo>} - This event is emitted when CurrentDeviceTimeSource changes in the remote object.
 */
