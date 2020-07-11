import { make_control_class } from './Base.js';
import { OcaAgent } from './OcaAgent.js';
import { OcaList } from '../OCP1/OcaList.js';
import { OcaMap } from '../OCP1/OcaMap.js';
import { OcaMediaClockAvailability } from '../OCP1/OcaMediaClockAvailability.js';
import { OcaMediaClockRate } from '../OCP1/OcaMediaClockRate.js';
import { OcaTimePTP } from '../OCP1/OcaTimePTP.js';
import { OcaUint16 } from '../OCP1/OcaUint16.js';
import { OcaUint32 } from '../OCP1/OcaUint32.js';
import { String16 } from '../OCP1/String16.js';

/**
 * A media clock, internal or external. OCA Connection Management 3
 * (OCA-CM3) version.
 * @extends RemoteControlClasses.OcaAgent
 * @class OcaMediaClock3
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaMediaClock3 = make_control_class(
  'OcaMediaClock3',
  3,
  '\u0001\u0002\u000f',
  1,
  OcaAgent,
  [
    ['GetAvailability', 3, 1, [], [OcaMediaClockAvailability]],
    ['SetAvailability', 3, 2, [OcaMediaClockAvailability], []],
    ['GetCurrentRate', 3, 3, [], [OcaMediaClockRate, OcaUint32]],
    ['SetCurrentRate', 3, 4, [OcaMediaClockRate, OcaUint32], []],
    ['GetOffset', 3, 5, [], [OcaTimePTP]],
    ['SetOffset', 3, 6, [OcaTimePTP], []],
    [
      'GetSupportedRates',
      3,
      7,
      [],
      [OcaMap(OcaUint32, OcaList(OcaMediaClockRate))],
    ],
  ],
  [
    ['Availability', [OcaMediaClockAvailability], 3, 1, false, false, null],
    ['TimeSourceONo', [OcaUint32], 3, 2, false, false, null],
    ['Offset', [OcaTimePTP], 3, 3, false, false, null],
    ['CurrentRate', [OcaMediaClockRate], 3, 4, false, false, null],
    [
      'SupportedRates',
      [OcaMap(OcaUint32, OcaList(OcaMediaClockRate))],
      3,
      5,
      false,
      false,
      null,
    ],
  ],
  []
);

/**
 * Gets the value of the <b>Availability </b>property. The return value
 * indicates whether the value was successfully retrieved.
 * @method RemoteControlClasses.OcaMediaClock3#GetAvailability
 * @returns {Promise<OcaMediaClockAvailability>}
 */
/**
 * Sets the value of the <b>Availability </b>property. The return value
 * indicates whether the value was successfully set. Optional method, may
 * not be supported in all implementations.
 * @method RemoteControlClasses.OcaMediaClock3#SetAvailability
 * @param Availability {OcaMediaClockAvailability}
 *
 * @returns {Promise}
 */
/**
 * Gets the current clock rate and the ONo of the associated
 * <b>OcaTimeSource </b>object. The return value indicates whether the
 * value was successfully retrieved.
 * @method RemoteControlClasses.OcaMediaClock3#GetCurrentRate
 * @returns {Promise<Arguments<OcaMediaClockRate,OcaONo>>}
 */
/**
 * Sets the clock rate and the ONo of the associated <b>OcaTimeSource
 * </b>object. The return value indicates whether the value was
 * successfully set. Optional method, may not be supported in all
 * implementations.
 * @method RemoteControlClasses.OcaMediaClock3#SetCurrentRate
 * @param Rate {OcaMediaClockRate}
 *
 * @param TimeSourceONo {OcaONo}
 *
 * @returns {Promise}
 */
/**
 * Gets the offset of this media clock's time from that of the associated
 * <b>OcaTimeSource </b>object. The return value indicates whether the
 * value was successfully retrieved.
 * @method RemoteControlClasses.OcaMediaClock3#GetOffset
 * @returns {Promise<OcaTimePTP>}
 */
/**
 * Sets the offset of this media clock's time from that of the associated
 * <b>OcaTimeSource </b>object. The return value indicates whether the
 * value was successfully set. Optional method, may not be supported in
 * all implementations.
 * @method RemoteControlClasses.OcaMediaClock3#SetOffset
 * @param Offset {OcaTimePTP}
 *
 * @returns {Promise}
 */
/**
 * Gets the list of supported media clock rates for the given time
 * source. The return value indicates whether the list was successfully
 * retrieved.
 * @method RemoteControlClasses.OcaMediaClock3#GetSupportedRates
 * @returns {Promise<OcaMap>}
 */
/**
 * Availability of media clock.
 * @member RemoteControlClasses.OcaMediaClock3#OnAvailabilityChanged {PropertyEvent<OcaMediaClockAvailability>} - This event is emitted when Availability changes in the remote object.
 */
/**
 * ONo of time source that drives this media clock.
 * @member RemoteControlClasses.OcaMediaClock3#OnTimeSourceONoChanged {PropertyEvent<OcaONo>} - This event is emitted when TimeSourceONo changes in the remote object.
 */
/**
 * Offset of media clock time from reference time. Note: For RTP-based
 * media transport networks, this value is NOT the RTP time offset. RTP
 * time offset is an implementation detail that is out of AES70's scope.
 * @member RemoteControlClasses.OcaMediaClock3#OnOffsetChanged {PropertyEvent<OcaTimePTP>} - This event is emitted when Offset changes in the remote object.
 */
/**
 * Current clock rate
 * @member RemoteControlClasses.OcaMediaClock3#OnCurrentRateChanged {PropertyEvent<OcaMediaClockRate>} - This event is emitted when CurrentRate changes in the remote object.
 */
/**
 * Map of supported rates for each supported time source. Key of map is
 * ONo of supported time source; value is list of supported clock rates
 * for the given time source. Private parameter, does not generate
 * property-change events.
 * @member RemoteControlClasses.OcaMediaClock3#OnSupportedRatesChanged {PropertyEvent<OcaMap>} - This event is emitted when SupportedRates changes in the remote object.
 */
