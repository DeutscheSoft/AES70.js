import { OcaList } from '../../OCP1/OcaList.js';
import { OcaMap } from '../../OCP1/OcaMap.js';
import { OcaMediaClockAvailability } from '../../OCP1/OcaMediaClockAvailability.js';
import { OcaMediaClockRate } from '../../OCP1/OcaMediaClockRate.js';
import { OcaTimePTP } from '../../OCP1/OcaTimePTP.js';
import { OcaUint32 } from '../../OCP1/OcaUint32.js';
import { make_control_class } from '../make_control_class.js';
import { OcaAgent } from './OcaAgent.js';

/**
 * A media clock, internal or external. OCA Connection Management 3 (OCA-CM3) version.
 * @extends OcaAgent
 * @class OcaMediaClock3
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
 * Gets the value of the  **Availability** property. The return value indicates whether the value was successfully retrieved.
 *
 * @method OcaMediaClock3#GetAvailability
 * @returns {Promise<OcaMediaClockAvailability>}
 *   A promise which resolves to a single value of type :class:`OcaMediaClockAvailability`.
 */
/**
 * Sets the value of the  **Availability** property. The return value indicates whether the value was successfully set. Optional method, may not be supported in all implementations.
 *
 * @method OcaMediaClock3#SetAvailability
 * @param {OcaMediaClockAvailability} Availability
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the current clock rate and the ONo of the associated  **OcaTimeSource** object. The return value indicates whether the value was successfully retrieved.
 * The return values of this method are
 *
 * - Rate of type :class:`OcaMediaClockRate`
 * - TimeSourceONo of type ``number``
 *
 * @method OcaMediaClock3#GetCurrentRate
 * @returns {Promise<Arguments<OcaMediaClockRate,number>>}
 */
/**
 * Sets the clock rate and the ONo of the associated  **OcaTimeSource** object. The return value indicates whether the value was successfully set. Optional method, may not be supported in all implementations.
 *
 * @method OcaMediaClock3#SetCurrentRate
 * @param {OcaMediaClockRate} Rate
 *
 * @param {number} TimeSourceONo
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the offset of this media clock's time from that of the associated  **OcaTimeSource** object. The return value indicates whether the value was successfully retrieved.
 *
 * @method OcaMediaClock3#GetOffset
 * @returns {Promise<OcaTimePTP>}
 *   A promise which resolves to a single value of type :class:`OcaTimePTP`.
 */
/**
 * Sets the offset of this media clock's time from that of the associated  **OcaTimeSource** object. The return value indicates whether the value was successfully set. Optional method, may not be supported in all implementations.
 *
 * @method OcaMediaClock3#SetOffset
 * @param {OcaTimePTP} Offset
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the list of supported media clock rates for the given time source. The return value indicates whether the list was successfully retrieved.
 *
 * @method OcaMediaClock3#GetSupportedRates
 * @returns {Promise<Map<number, OcaMediaClockRate[]>>}
 *   A promise which resolves to a single value of type ``Map<number, OcaMediaClockRate[]>``.
 */
/**
 * This event is emitted when the property Availability changes in the remote object.
 * The property ``Availability`` is described in the AES70 standard as follows.
 * Availability of media clock.
 *
 * @member {PropertyEvent<OcaMediaClockAvailability>} OcaMediaClock3#OnAvailabilityChanged
 */
/**
 * This event is emitted when the property TimeSourceONo changes in the remote object.
 * The property ``TimeSourceONo`` is described in the AES70 standard as follows.
 * ONo of time source that drives this media clock.
 *
 * @member {PropertyEvent<number>} OcaMediaClock3#OnTimeSourceONoChanged
 */
/**
 * This event is emitted when the property Offset changes in the remote object.
 * The property ``Offset`` is described in the AES70 standard as follows.
 * Offset of media clock time from reference time. Note: For RTP-based
 * media transport networks, this value is NOT the RTP time offset. RTP
 * time offset is an implementation detail that is out of AES70's scope.
 *
 * @member {PropertyEvent<OcaTimePTP>} OcaMediaClock3#OnOffsetChanged
 */
/**
 * This event is emitted when the property CurrentRate changes in the remote object.
 * The property ``CurrentRate`` is described in the AES70 standard as follows.
 * Current clock rate
 *
 * @member {PropertyEvent<OcaMediaClockRate>} OcaMediaClock3#OnCurrentRateChanged
 */
/**
 * This event is emitted when the property SupportedRates changes in the remote object.
 * The property ``SupportedRates`` is described in the AES70 standard as follows.
 * Map of supported rates for each supported time source. Key of map is
 * ONo of supported time source; value is list of supported clock rates
 * for the given time source. Private parameter, does not generate
 * property-change events.
 *
 * @member {PropertyEvent<Map<number, OcaMediaClockRate[]>>} OcaMediaClock3#OnSupportedRatesChanged
 */
