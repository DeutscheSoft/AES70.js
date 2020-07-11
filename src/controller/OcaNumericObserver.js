import { make_control_class } from './Base.js';
import { OcaAgent } from './OcaAgent.js';
import { OcaBoolean } from '../OCP1/OcaBoolean.js';
import { OcaEvent } from '../OCP1/OcaEvent.js';
import { OcaFloat32 } from '../OCP1/OcaFloat32.js';
import { OcaFloat64 } from '../OCP1/OcaFloat64.js';
import { OcaObserverState } from '../OCP1/OcaObserverState.js';
import { OcaProperty } from '../OCP1/OcaProperty.js';
import { OcaRelationalOperator } from '../OCP1/OcaRelationalOperator.js';
import { OcaUint16 } from '../OCP1/OcaUint16.js';
import { String16 } from '../OCP1/String16.js';

/**
 * Observer of a scalar numeric or boolean property ("target property")
 * of a specified object. Does not work for array, list, map, struct, or
 * string properties. <b>OcaNumericObserver</b> emits an <b>Observation
 * </b>event under certain conditions. There are three kinds of
 * conditions: <ol> <li><b>Numeric comparison</b>. The target property
 * value meets a certain comparison condition. A selection of comparison
 * operators is available. Such observations are called "asynchronous
 * observations". </li> <li><b>Timer expiry</b>. The value of the<b>
 * Period</b> property, if nonzero, is a the time interval for the
 * recurrent timed emission of <b>Observation</b> events. Such events
 * ("periodic observations") are emitted regardless of the target
 * property's value. </li> <li><b>Combination of (1) and (2)</b>. If a
 * numeric comparison and a nonzero period are both specified, then the
 * <b>Observation</b> event is emitted when the timer expires <b>and</b>
 * the numeric comparison is true. Such observations are called
 * "conditional-periodic observations".</li> </ol> This is a weakly typed
 * class. Its threshold is specified as an <b>OcaFloat64 </b>number. <ul>
 * <li>For unsigned integer targets, the threshold and target are both
 * coerced to <b>OcaUint64 </b>before comparing. </li> <li>For signed
 * integer targets, the threshold and target are both coerced to
 * <b>OcaInt64 </b>before comparing. </li> <li>For boolean values, the
 * threshold hreshold and target are both coerced to <b>OcaUint8</b>,
 * True is assigned the value One, False is assigned the value Zero.</li>
 * </ul> Note that this coercion may result in rounding errors if the
 * observed datatype is of type OcaUint64 or OcaUint64. An
 * <b>OcaNumericObserver </b>instance and the property it observes are
 * bound at the time the <b>OcaNumericObserver</b> instance is
 * constructed. For static devices, construction will occur during
 * manufacture, or possibly during a subsequent hardware configuration
 * step. For reconfigurable devices, construction might be done by online
 * controllers as part of device configuration sessions. This class is
 * normally used for monitoring readings of sensor readings, but may be
 * used equally well for watching workers' parameter settings.
 * @extends RemoteControlClasses.OcaAgent
 * @class OcaNumericObserver
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the value of the observed property that was reported by the most
 * recently emitted Observation event. If the numeric observer has never
 * emitted an Observation event, returns the IEEE not-a-number value. The
 * return status indicates whether the value has been successfully
 * returned.
 * @method RemoteControlClasses.OcaNumericObserver#GetLastObservation
 * @returns {Promise<OcaFloat64>}
 */
/**
 * Gets the observer's state. The return value indicates whether the
 * state was successfully retrieved.
 * @method RemoteControlClasses.OcaNumericObserver#GetState
 * @returns {Promise<OcaObserverState>}
 */
/**
 * Gets the identification of the property that the observer observes.
 * The return value indicates whether the identification was successfully
 * retrieved.
 * @method RemoteControlClasses.OcaNumericObserver#GetObservedProperty
 * @returns {Promise<OcaProperty>}
 */
/**
 * Sets the identification of the property that the observer observes.
 * The return value indicates whether the identification was successfully
 * set.
 * @method RemoteControlClasses.OcaNumericObserver#SetObservedProperty
 * @param property {OcaProperty}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the <b>Threshold </b>property. The return value
 * indicates whether the threshold value was successfully retrieved.
 * @method RemoteControlClasses.OcaNumericObserver#GetThreshold
 * @returns {Promise<OcaFloat64>}
 */
/**
 * Sets the value of the <b>Threshold </b>property. The return value
 * indicates whether the threshold value was successfully set.
 * @method RemoteControlClasses.OcaNumericObserver#SetThreshold
 * @param Threshold {OcaFloat64}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the <b>Operator </b>property. The return value
 * indicates whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaNumericObserver#GetOperator
 * @returns {Promise<OcaRelationalOperator>}
 */
/**
 * Sets the value of the <b>Operator </b>property. The return value
 * indicates whether the operator was successfully set.
 * @method RemoteControlClasses.OcaNumericObserver#SetOperator
 * @param _operator {OcaRelationalOperator}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the <b>TwoWay </b>property. The return value
 * indicates whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaNumericObserver#GetTwoWay
 * @returns {Promise<OcaBoolean>}
 */
/**
 * Sets the value of the <b>TwoWay </b>property. The return value
 * indicates whether the property was successfully set.
 * @method RemoteControlClasses.OcaNumericObserver#SetTwoWay
 * @param twoWay {OcaBoolean}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the <b>Hysteresis </b>property. The return value
 * indicates whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaNumericObserver#GetHysteresis
 * @returns {Promise<OcaFloat64>}
 */
/**
 * Sets the value of the <b>Hysteresis </b>property. The return value
 * indicates whether the property was successfully set.
 * @method RemoteControlClasses.OcaNumericObserver#SetHysteresis
 * @param hysteresis {OcaFloat64}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the <b>Period </b>property. The return value
 * indicates whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaNumericObserver#GetPeriod
 * @returns {Promise<OcaTimeInterval>}
 */
/**
 * Sets the value of the <b>Period </b>property. The return value
 * indicates whether the property was successfully set.
 * @method RemoteControlClasses.OcaNumericObserver#SetPeriod
 * @param period {OcaTimeInterval}
 *
 * @returns {Promise}
 */
/**
 * Event emitted to signal an asynchronous, periodic, or
 * conditional-periodic observation.
 * @member RemoteControlClasses.OcaNumericObserver#OnObservation {Event} -
 * Event emitted to signal an asynchronous, periodic, or
 * conditional-periodic observation.
 */
/**
 * State: triggered, not triggered
 * @member RemoteControlClasses.OcaNumericObserver#OnStateChanged {PropertyEvent<OcaObserverState>} - This event is emitted when State changes in the remote object.
 */
/**
 * Identification of the property being observed.
 * @member RemoteControlClasses.OcaNumericObserver#OnObservedPropertyChanged {PropertyEvent<OcaProperty>} - This event is emitted when ObservedProperty changes in the remote object.
 */
/**
 * Comparison value for raising the <b>Triggered </b>event.
 * @member RemoteControlClasses.OcaNumericObserver#OnThresholdChanged {PropertyEvent<OcaFloat64>} - This event is emitted when Threshold changes in the remote object.
 */
/**
 * Relational operator used when comparing the value of the observed
 * property to the threshold value.
 * @member RemoteControlClasses.OcaNumericObserver#OnOperatorChanged {PropertyEvent<OcaRelationalOperator>} - This event is emitted when Operator changes in the remote object.
 */
/**
 * True to emit a <b>Triggered </b>event upon crossing the threshold in
 * either direction; false to emit only upon crossing in the primary
 * direction (i.e. rising when <b>Operator </b>is set to
 * <u>GreaterThan</u> or <u>GreaterThanOrEqual</u>; falling when
 * <b>Operator </b>is set to <u>LessThan</u><b> </b>or
 * <u>LessThanOrEqual</u>; equality when <b>Operator </b>is set to
 * <u>Equality</u>; inequality when <b>Operator </b>is set to
 * <u>Inequality</u>).
 * @member RemoteControlClasses.OcaNumericObserver#OnTwoWayChanged {PropertyEvent<OcaBoolean>} - This event is emitted when TwoWay changes in the remote object.
 */
/**
 * Hysteresis that is used when observing the property value. This
 * indicates which amount must be added/subtracted from the <b>Threshold
 * </b>value to raise or re-enable the <b>Triggered </b>event of this
 * <b>OcaObserver </b>object. The rules for hysteresis handling depend
 * upon the configured <b>Operator </b>and <b>TwoWay </b>properties. The
 * <b>Hysteresis </b>property is ignored if the <b>Operator </b>property
 * is 'Inequality'.
 * @member RemoteControlClasses.OcaNumericObserver#OnHysteresisChanged {PropertyEvent<OcaFloat64>} - This event is emitted when Hysteresis changes in the remote object.
 */
/**
 * Repetition period or zero. If nonzero, the observer will retrieve the
 * value and emit
 * @member RemoteControlClasses.OcaNumericObserver#OnPeriodChanged {PropertyEvent<OcaTimeInterval>} - This event is emitted when Period changes in the remote object.
 */
