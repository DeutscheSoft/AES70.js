import { make_control_class } from '../Base.js';
import { OcaManager } from './OcaManager.js';
import { OcaList } from '../../OCP1/OcaList.js';
import { OcaMediaClockType } from '../../OCP1/OcaMediaClockType.js';
import { OcaUint32 } from '../../OCP1/OcaUint32.js';

/**
 * Optional manager that collects all media clocks the device uses. <ul>
 * <li>Must be instantiated once for every device that has more than one
 * media clock object. In this context, "media clock" means an instance
 * of <b>OcaMediaClock</b>, <b>OcaMediaClock3</b>, or any subclass of
 * these classes. </li> </ul> <ul> <li>If instantiated, object number
 * must be 7.</li> </ul>
 * @extends RemoteControlClasses.OcaManager
 * @class OcaMediaClockManager
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaMediaClockManager = make_control_class(
  'OcaMediaClockManager',
  3,
  '\u0001\u0003\u0007',
  2,
  OcaManager,
  [
    ['GetClocks', 3, 1, [], [OcaList(OcaUint32)]],
    ['GetMediaClockTypesSupported', 3, 2, [], [OcaList(OcaMediaClockType)]],
    ['GetClock3s', 3, 3, [], [OcaList(OcaUint32)]],
  ],
  [
    [
      'ClockSourceTypesSupported',
      [OcaList(OcaMediaClockType)],
      3,
      1,
      false,
      false,
      ['MediaClockTypesSupported'],
    ],
    ['Clocks', [OcaList(OcaUint32)], 3, 2, false, false, null],
    ['Clock3s', [OcaList(OcaUint32)], 3, 3, false, false, null],
  ],
  []
);

/**
 * Gets the list of object numbers of <b>OcaMediaClock </b>instances in
 * this device. Return value indicates whether list was successfully
 * retrieved. Note: In AES70-2017, this method is deprecated.
 * @method RemoteControlClasses.OcaMediaClockManager#GetClocks
 * @returns {Promise<OcaList>}
 */
/**
 * Gets the list of media clock types supported by <b>OcaMediaClock
 * </b>objects in the device. Return value indicates whether the list was
 * successfully retrieved. Note : In AES70-2017, this method is
 * deprecated.
 * @method RemoteControlClasses.OcaMediaClockManager#GetMediaClockTypesSupported
 * @returns {Promise<OcaList>}
 */
/**
 * Gets the list of object numbers of <b>OcaMediaClock3 </b>instances in
 * this device. Return value indicates whether list was successfully
 * retrieved.
 * @method RemoteControlClasses.OcaMediaClockManager#GetClock3s
 * @returns {Promise<OcaList>}
 */
/**
 * List of clock source types supported by <b>OcaMediaClock </b>objects
 * in this device. Note: In AES70-2017, this method is deprecated. It
 * only reflects the clock types of <b>OcaMediaClock </b>objects, which
 * are now deprecated. It does not apply to <b>OcaMediaClock3
 * </b>objects, since these do not have type attributes. If the number of
 * <b>OcaMediaClock </b>objects in the device is zero, this property is
 * empty.
 * @member RemoteControlClasses.OcaMediaClockManager#OnClockSourceTypesSupportedChanged {PropertyEvent<OcaList>} - This event is emitted when ClockSourceTypesSupported changes in the remote object.
 */
/**
 * Object numbers of <b>OcaMediaClock </b>objects, one for each clock
 * which this device uses and/or sources. Note: In AES70-2017, this
 * property is deprecated.
 * @member RemoteControlClasses.OcaMediaClockManager#OnClocksChanged {PropertyEvent<OcaList>} - This event is emitted when Clocks changes in the remote object.
 */
/**
 * Object numbers of <b>OcaMediaClock3 </b>objects, one for each clock
 * which this device uses and/or sources.
 * @member RemoteControlClasses.OcaMediaClockManager#OnClock3sChanged {PropertyEvent<OcaList>} - This event is emitted when Clock3s changes in the remote object.
 */
