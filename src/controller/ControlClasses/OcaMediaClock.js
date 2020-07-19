import { make_control_class } from '../Base.js';
import { OcaAgent } from './OcaAgent.js';
import { OcaList } from '../../OCP1/OcaList.js';
import { OcaMediaClockLockState } from '../../OCP1/OcaMediaClockLockState.js';
import { OcaMediaClockRate } from '../../OCP1/OcaMediaClockRate.js';
import { OcaMediaClockType } from '../../OCP1/OcaMediaClockType.js';
import { OcaUint16 } from '../../OCP1/OcaUint16.js';

/**
 * <b>DEPRECATED CLASS</b> <i>Replaced by
 * </i><b><i>OcaMediaClock3</i></b> A media clock, internal or external.
 * @extends RemoteControlClasses.OcaAgent
 * @class OcaMediaClock
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the value of the <b>Type </b>property. The return value indicates
 * whether the value was successfully retrieved.
 * @method RemoteControlClasses.OcaMediaClock#GetType
 * @returns {Promise<OcaMediaClockType>}
 */
/**
 * Sets the value of the <b>Type </b>property. The return value indicates
 * whether the value was successfully set. Optional method, may not be
 * supported in all implementations.
 * @method RemoteControlClasses.OcaMediaClock#SetType
 * @param Type {OcaMediaClockType}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the <b>DomainID </b>property. The return value
 * indicates whether the value was successfully retrieved.
 * @method RemoteControlClasses.OcaMediaClock#GetDomainID
 * @returns {Promise<OcaUint16>}
 */
/**
 * Sets the value of the <b>DomainID </b>property. The return value
 * indicates whether the value was successfully set. Optional method, may
 * not be supported in all implementations.
 * @method RemoteControlClasses.OcaMediaClock#SetDomainID
 * @param ID {OcaUint16}
 *
 * @returns {Promise}
 */
/**
 * Gets the list of supported sampling rates. The return value indicates
 * whether the list was successfully retrieved.
 * @method RemoteControlClasses.OcaMediaClock#GetSupportedRates
 * @returns {Promise<OcaList>}
 */
/**
 * Gets the current sampling rate. The return value indicates whether the
 * value was successfully retrieved.
 * @method RemoteControlClasses.OcaMediaClock#GetCurrentRate
 * @returns {Promise<OcaMediaClockRate>}
 */
/**
 * Sets the sampling rate. The return value indicates whether the rate
 * was successfully set.
 * @method RemoteControlClasses.OcaMediaClock#SetCurrentRate
 * @param rate {OcaMediaClockRate}
 *
 * @returns {Promise}
 */
/**
 * Gets the current media clock lock state. The return value indicates
 * whether the value was successfully retrieved.
 * @method RemoteControlClasses.OcaMediaClock#GetLockState
 * @returns {Promise<OcaMediaClockLockState>}
 */
/**
 * Type of clock.
 * @member RemoteControlClasses.OcaMediaClock#OnTypeChanged {PropertyEvent<OcaMediaClockType>} - This event is emitted when Type changes in the remote object.
 */
/**
 * Clock domain ID. Arbitrary value.
 * @member RemoteControlClasses.OcaMediaClock#OnDomainIDChanged {PropertyEvent<OcaUint16>} - This event is emitted when DomainID changes in the remote object.
 */
/**
 * List of supported rates
 * @member RemoteControlClasses.OcaMediaClock#OnRatesSupportedChanged {PropertyEvent<OcaList>} - This event is emitted when RatesSupported changes in the remote object.
 */
/**
 * Current clock rate
 * @member RemoteControlClasses.OcaMediaClock#OnCurrentRateChanged {PropertyEvent<OcaMediaClockRate>} - This event is emitted when CurrentRate changes in the remote object.
 */
/**
 * Lock state of clock.
 * @member RemoteControlClasses.OcaMediaClock#OnLockStateChanged {PropertyEvent<OcaMediaClockLockState>} - This event is emitted when LockState changes in the remote object.
 */
