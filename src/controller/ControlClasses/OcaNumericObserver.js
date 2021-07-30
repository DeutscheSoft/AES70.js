import { make_control_class } from '../make_control_class.js';
import { OcaAgent } from './OcaAgent.js';
import { OcaBoolean } from '../../OCP1/OcaBoolean.js';
import { OcaEvent } from '../../OCP1/OcaEvent.js';
import { OcaFloat32 } from '../../OCP1/OcaFloat32.js';
import { OcaFloat64 } from '../../OCP1/OcaFloat64.js';
import { OcaObserverState } from '../../OCP1/OcaObserverState.js';
import { OcaProperty } from '../../OCP1/OcaProperty.js';
import { OcaRelationalOperator } from '../../OCP1/OcaRelationalOperator.js';

/**
 * Observer of a scalar numeric or boolean property ("target property") of a specified object. Does not work for array, list, map, struct, or string properties.  **OcaNumericObserver**  emits an  **Observation** event under certain conditions. There are three kinds of conditions:
 *
 *  -  **Numeric comparison** . The target property value meets a certain comparison condition. A selection of comparison operators is available. Such observations are called "asynchronous observations".
 *
 *
 *  -  **Timer expiry** . The value of the **Period**  property, if nonzero, is a the time interval for the recurrent timed emission of  **Observation**  events. Such events ("periodic observations") are emitted regardless of the target property's value.
 *
 *
 *  -  **Combination of (1) and (2)** . If a numeric comparison and a nonzero period are both specified, then the  **Observation**  event is emitted when the timer expires  **and**  the numeric comparison is true. Such observations are called "conditional-periodic observations".
 *   This is a weakly typed class. Its threshold is specified as an  **OcaFloat64** number.
 *
 *  - For unsigned integer targets, the threshold and target are both coerced to  **OcaUint64** before comparing.
 *
 *
 *  - For signed integer targets, the threshold and target are both coerced to  **OcaInt64** before comparing.
 *
 *
 *  - For boolean values, the threshold hreshold and target are both coerced to  **OcaUint8** , True is assigned the value One, False is assigned the value Zero.
 *   Note that this coercion may result in rounding errors if the observed datatype is of type OcaUint64 or OcaUint64. An  **OcaNumericObserver** instance and the property it observes are bound at the time the  **OcaNumericObserver**  instance is constructed. For static devices, construction will occur during manufacture, or possibly during a subsequent hardware configuration step. For reconfigurable devices, construction might be done by online controllers as part of device configuration sessions. This class is normally used for monitoring readings of sensor readings, but may be used equally well for watching workers' parameter settings.
 * @extends OcaAgent
 * @class OcaNumericObserver
 */
export const OcaNumericObserver = make_control_class(
  'OcaNumericObserver',
  3,
  '\u0001\u0002\u0004',
  2,
  OcaAgent,
  [
    ['GetLastObservation', 3, 1, [], [OcaFloat64]],
    ['GetState', 3, 2, [], [OcaObserverState]],
    ['GetObservedProperty', 3, 3, [], [OcaProperty]],
    ['SetObservedProperty', 3, 4, [OcaProperty], []],
    ['GetThreshold', 3, 5, [], [OcaFloat64]],
    ['SetThreshold', 3, 6, [OcaFloat64], []],
    ['GetOperator', 3, 7, [], [OcaRelationalOperator]],
    ['SetOperator', 3, 8, [OcaRelationalOperator], []],
    ['GetTwoWay', 3, 9, [], [OcaBoolean]],
    ['SetTwoWay', 3, 10, [OcaBoolean], []],
    ['GetHysteresis', 3, 11, [], [OcaFloat64]],
    ['SetHysteresis', 3, 12, [OcaFloat64], []],
    ['GetPeriod', 3, 13, [], [OcaFloat32]],
    ['SetPeriod', 3, 14, [OcaFloat32], []],
  ],
  [
    ['State', [OcaObserverState], 3, 1, false, false, null],
    ['ObservedProperty', [OcaProperty], 3, 2, false, false, null],
    ['Threshold', [OcaFloat64], 3, 3, false, false, null],
    ['Operator', [OcaRelationalOperator], 3, 4, false, false, null],
    ['TwoWay', [OcaBoolean], 3, 5, false, false, null],
    ['Hysteresis', [OcaFloat64], 3, 6, false, false, null],
    ['Period', [OcaFloat32], 3, 7, false, false, null],
  ],
  [['Observation', 3, 1, [OcaEvent, OcaFloat64]]]
);

/**
 * Gets the value of the observed property that was reported by the most recently emitted Observation event. If the numeric observer has never emitted an Observation event, returns the IEEE not-a-number value. The return status indicates whether the value has been successfully returned.
 *
 * @method OcaNumericObserver#GetLastObservation
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Gets the observer's state. The return value indicates whether the state was successfully retrieved.
 *
 * @method OcaNumericObserver#GetState
 * @returns {Promise<OcaObserverState>}
 *   A promise which resolves to a single value of type :class:`OcaObserverState`.
 */
/**
 * Gets the identification of the property that the observer observes. The return value indicates whether the identification was successfully retrieved.
 *
 * @method OcaNumericObserver#GetObservedProperty
 * @returns {Promise<OcaProperty>}
 *   A promise which resolves to a single value of type :class:`OcaProperty`.
 */
/**
 * Sets the identification of the property that the observer observes. The return value indicates whether the identification was successfully set.
 *
 * @method OcaNumericObserver#SetObservedProperty
 * @param {OcaProperty} property
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value of the  **Threshold** property. The return value indicates whether the threshold value was successfully retrieved.
 *
 * @method OcaNumericObserver#GetThreshold
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Sets the value of the  **Threshold** property. The return value indicates whether the threshold value was successfully set.
 *
 * @method OcaNumericObserver#SetThreshold
 * @param {number} Threshold
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value of the  **Operator** property. The return value indicates whether the property was successfully retrieved.
 *
 * @method OcaNumericObserver#GetOperator
 * @returns {Promise<OcaRelationalOperator>}
 *   A promise which resolves to a single value of type :class:`OcaRelationalOperator`.
 */
/**
 * Sets the value of the  **Operator** property. The return value indicates whether the operator was successfully set.
 *
 * @method OcaNumericObserver#SetOperator
 * @param {OcaRelationalOperator} _operator
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value of the  **TwoWay** property. The return value indicates whether the property was successfully retrieved.
 *
 * @method OcaNumericObserver#GetTwoWay
 * @returns {Promise<boolean>}
 *   A promise which resolves to a single value of type ``boolean``.
 */
/**
 * Sets the value of the  **TwoWay** property. The return value indicates whether the property was successfully set.
 *
 * @method OcaNumericObserver#SetTwoWay
 * @param {boolean} twoWay
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value of the  **Hysteresis** property. The return value indicates whether the property was successfully retrieved.
 *
 * @method OcaNumericObserver#GetHysteresis
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Sets the value of the  **Hysteresis** property. The return value indicates whether the property was successfully set.
 *
 * @method OcaNumericObserver#SetHysteresis
 * @param {number} hysteresis
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value of the  **Period** property. The return value indicates whether the property was successfully retrieved.
 *
 * @method OcaNumericObserver#GetPeriod
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Sets the value of the  **Period** property. The return value indicates whether the property was successfully set.
 *
 * @method OcaNumericObserver#SetPeriod
 * @param {number} period
 *
 * @returns {Promise<void>}
 */
/**
 * Event emitted to signal an asynchronous, periodic, or conditional-periodic observation.
 * @member OcaNumericObserver#OnObservation {Event}
 * Event emitted to signal an asynchronous, periodic, or
 * conditional-periodic observation.
 */
/**
 * This event is emitted when the property State changes in the remote object.
 * The property ``State`` is described in the AES70 standard as follows.
 * State: triggered, not triggered
 *
 * @member {PropertyEvent<OcaObserverState>} OcaNumericObserver#OnStateChanged
 */
/**
 * This event is emitted when the property ObservedProperty changes in the remote object.
 * The property ``ObservedProperty`` is described in the AES70 standard as follows.
 * Identification of the property being observed.
 *
 * @member {PropertyEvent<OcaProperty>} OcaNumericObserver#OnObservedPropertyChanged
 */
/**
 * This event is emitted when the property Threshold changes in the remote object.
 * The property ``Threshold`` is described in the AES70 standard as follows.
 * Comparison value for raising the <b>Triggered </b>event.
 *
 * @member {PropertyEvent<number>} OcaNumericObserver#OnThresholdChanged
 */
/**
 * This event is emitted when the property Operator changes in the remote object.
 * The property ``Operator`` is described in the AES70 standard as follows.
 * Relational operator used when comparing the value of the observed
 * property to the threshold value.
 *
 * @member {PropertyEvent<OcaRelationalOperator>} OcaNumericObserver#OnOperatorChanged
 */
/**
 * This event is emitted when the property TwoWay changes in the remote object.
 * The property ``TwoWay`` is described in the AES70 standard as follows.
 * True to emit a <b>Triggered </b>event upon crossing the threshold in
 * either direction; false to emit only upon crossing in the primary
 * direction (i.e. rising when <b>Operator </b>is set to
 * <u>GreaterThan</u> or <u>GreaterThanOrEqual</u>; falling when
 * <b>Operator </b>is set to <u>LessThan</u><b> </b>or
 * <u>LessThanOrEqual</u>; equality when <b>Operator </b>is set to
 * <u>Equality</u>; inequality when <b>Operator </b>is set to
 * <u>Inequality</u>).
 *
 * @member {PropertyEvent<boolean>} OcaNumericObserver#OnTwoWayChanged
 */
/**
 * This event is emitted when the property Hysteresis changes in the remote object.
 * The property ``Hysteresis`` is described in the AES70 standard as follows.
 * Hysteresis that is used when observing the property value. This
 * indicates which amount must be added/subtracted from the <b>Threshold
 * </b>value to raise or re-enable the <b>Triggered </b>event of this
 * <b>OcaObserver </b>object. The rules for hysteresis handling depend
 * upon the configured <b>Operator </b>and <b>TwoWay </b>properties. The
 * <b>Hysteresis </b>property is ignored if the <b>Operator </b>property
 * is 'Inequality'.
 *
 * @member {PropertyEvent<number>} OcaNumericObserver#OnHysteresisChanged
 */
/**
 * This event is emitted when the property Period changes in the remote object.
 * The property ``Period`` is described in the AES70 standard as follows.
 * Repetition period or zero. If nonzero, the observer will retrieve the
 * value and emit
 *
 * @member {PropertyEvent<number>} OcaNumericObserver#OnPeriodChanged
 */
