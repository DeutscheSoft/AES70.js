import { make_control_class } from '../make_control_class.js';
import { OcaAgent } from './OcaAgent.js';
import { OcaList } from '../../OCP1/OcaList.js';
import { OcaMediaClockLockState } from '../../OCP1/OcaMediaClockLockState.js';
import { OcaMediaClockRate } from '../../OCP1/OcaMediaClockRate.js';
import { OcaMediaClockType } from '../../OCP1/OcaMediaClockType.js';
import { OcaUint16 } from '../../OCP1/OcaUint16.js';

/**
 *  **DEPRECATED CLASS**   *Replaced by*  **OcaMediaClock3**  A media clock, internal or external.
 * @extends OcaAgent
 * @class OcaMediaClock
 */
export const OcaMediaClock = make_control_class(
  'OcaMediaClock',
  3,
  '\u0001\u0002\u0006',
  2,
  OcaAgent,
  [
    ['GetType', 3, 1, [], [OcaMediaClockType]],
    ['SetType', 3, 2, [OcaMediaClockType], []],
    ['GetDomainID', 3, 3, [], [OcaUint16]],
    ['SetDomainID', 3, 4, [OcaUint16], []],
    ['GetSupportedRates', 3, 5, [], [OcaList(OcaMediaClockRate)]],
    ['GetCurrentRate', 3, 6, [], [OcaMediaClockRate]],
    ['SetCurrentRate', 3, 7, [OcaMediaClockRate], []],
    ['GetLockState', 3, 8, [], [OcaMediaClockLockState]],
  ],
  [
    ['Type', [OcaMediaClockType], 3, 1, false, false, null],
    ['DomainID', [OcaUint16], 3, 2, false, false, null],
    ['RatesSupported', [OcaList(OcaMediaClockRate)], 3, 3, false, false, null],
    ['CurrentRate', [OcaMediaClockRate], 3, 4, false, false, null],
    ['LockState', [OcaMediaClockLockState], 3, 5, false, false, null],
  ],
  []
);

/**
 * Gets the value of the  **Type** property. The return value indicates whether the value was successfully retrieved.
 *
 * @method OcaMediaClock#GetType
 * @returns {Promise<OcaMediaClockType>}
 *   A promise which resolves to a single value of type :class:`OcaMediaClockType`.
 */
/**
 * Sets the value of the  **Type** property. The return value indicates whether the value was successfully set. Optional method, may not be supported in all implementations.
 *
 * @method OcaMediaClock#SetType
 * @param {OcaMediaClockType} Type
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value of the  **DomainID** property. The return value indicates whether the value was successfully retrieved.
 *
 * @method OcaMediaClock#GetDomainID
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Sets the value of the  **DomainID** property. The return value indicates whether the value was successfully set. Optional method, may not be supported in all implementations.
 *
 * @method OcaMediaClock#SetDomainID
 * @param {number} ID
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the list of supported sampling rates. The return value indicates whether the list was successfully retrieved.
 *
 * @method OcaMediaClock#GetSupportedRates
 * @returns {Promise<OcaMediaClockRate[]>}
 *   A promise which resolves to a single value of type ``OcaMediaClockRate[]``.
 */
/**
 * Gets the current sampling rate. The return value indicates whether the value was successfully retrieved.
 *
 * @method OcaMediaClock#GetCurrentRate
 * @returns {Promise<OcaMediaClockRate>}
 *   A promise which resolves to a single value of type :class:`OcaMediaClockRate`.
 */
/**
 * Sets the sampling rate. The return value indicates whether the rate was successfully set.
 *
 * @method OcaMediaClock#SetCurrentRate
 * @param {OcaMediaClockRate} rate
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the current media clock lock state. The return value indicates whether the value was successfully retrieved.
 *
 * @method OcaMediaClock#GetLockState
 * @returns {Promise<OcaMediaClockLockState>}
 *   A promise which resolves to a single value of type :class:`OcaMediaClockLockState`.
 */
/**
 * This event is emitted when the property Type changes in the remote object.
 * The property ``Type`` is described in the AES70 standard as follows.
 * Type of clock.
 *
 * @member {PropertyEvent<OcaMediaClockType>} OcaMediaClock#OnTypeChanged
 */
/**
 * This event is emitted when the property DomainID changes in the remote object.
 * The property ``DomainID`` is described in the AES70 standard as follows.
 * Clock domain ID. Arbitrary value.
 *
 * @member {PropertyEvent<number>} OcaMediaClock#OnDomainIDChanged
 */
/**
 * This event is emitted when the property RatesSupported changes in the remote object.
 * The property ``RatesSupported`` is described in the AES70 standard as follows.
 * List of supported rates
 *
 * @member {PropertyEvent<OcaMediaClockRate[]>} OcaMediaClock#OnRatesSupportedChanged
 */
/**
 * This event is emitted when the property CurrentRate changes in the remote object.
 * The property ``CurrentRate`` is described in the AES70 standard as follows.
 * Current clock rate
 *
 * @member {PropertyEvent<OcaMediaClockRate>} OcaMediaClock#OnCurrentRateChanged
 */
/**
 * This event is emitted when the property LockState changes in the remote object.
 * The property ``LockState`` is described in the AES70 standard as follows.
 * Lock state of clock.
 *
 * @member {PropertyEvent<OcaMediaClockLockState>} OcaMediaClock#OnLockStateChanged
 */
