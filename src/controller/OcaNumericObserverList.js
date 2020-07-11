import { make_control_class } from './Base.js';
import { OcaAgent } from './OcaAgent.js';
import { OcaBoolean } from '../OCP1/OcaBoolean.js';
import { OcaEvent } from '../OCP1/OcaEvent.js';
import { OcaFloat32 } from '../OCP1/OcaFloat32.js';
import { OcaFloat64 } from '../OCP1/OcaFloat64.js';
import { OcaList } from '../OCP1/OcaList.js';
import { OcaObserverState } from '../OCP1/OcaObserverState.js';
import { OcaProperty } from '../OCP1/OcaProperty.js';
import { OcaRelationalOperator } from '../OCP1/OcaRelationalOperator.js';
import { OcaUint16 } from '../OCP1/OcaUint16.js';
import { String16 } from '../OCP1/String16.js';

/**
 * Observer of a scalar numeric or boolean property ("target property")
 * of a set of specified objects. This class is a subclass of
 * <b>OcaNumericObserver</b>, and differs from that class only in that it
 * observes a set of properties rather than a single property. Does not
 * work for array, list, map, struct, or string properties.
 * <b>OcaNumericObserverList</b> emits an <b>Observation </b>event under
 * certain conditions. There are three kinds of conditions: <ol>
 * <li><b>Numeric comparison</b>. A target property value meets a certain
 * comparison condition. A selection of comparison operators is
 * available. Such observations are called "asynchronous observations".
 * </li> <li><b>Timer expiry</b>. The value of the<b> Period</b>
 * property, if nonzero, is a the time interval for the recurrent timed
 * emission of <b>Observation</b> events. Such events ("periodic
 * observations") are emitted regardless of the target property's value.
 * </li> <li><b>Combination of (1) and (2)</b>. If a numeric comparison
 * and a nonzero period are both specified, then the <b>Observation</b>
 * event is emitted when the timer expires <b>and</b> the numeric
 * comparison is true for at least one of the observed properties. Such
 * observations are called "conditional-periodic observations".</li>
 * </ol> This is a weakly typed class. Its threshold is specified as an
 * <b>OcaFloat64 </b>number. <ul> <li>For unsigned integer targets, the
 * threshold and target are both coerced to <b>OcaUint64 </b>before
 * comparing. </li> <li>For signed integer targets, the threshold and
 * target are both coerced to <b>OcaInt64 </b>before comparing. </li>
 * <li>For boolean values, the threshold hreshold and target are both
 * coerced to <b>OcaUint8</b>, True is assigned the value One, False is
 * assigned the value Zero.</li> </ul> Note that this coercion may result
 * in rounding errors if the observed datatype is of type OcaUint64 or
 * OcaUint64. An <b>OcaNumericObserver </b>instance and the property it
 * observes are bound at the time the <b>OcaNumericObserver</b> instance
 * is constructed. For static devices, construction will occur during
 * manufacture, or possibly during a subsequent hardware configuration
 * step. For reconfigurable devices, construction might be done by online
 * controllers as part of device configuration sessions. This class is
 * normally used for monitoring readings of sensor readings, but may be
 * used equally well for watching workers' parameter settings.
 * @extends RemoteControlClasses.OcaAgent
 * @class OcaNumericObserverList
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaNumericObserverList = make_control_class(
  'OcaNumericObserverList',
  3,
  '\u0001\u0002\t',
  2,
  OcaAgent,
  [
    ['GetLastObservation', 3, 1, [], [OcaList(OcaFloat64)]],
    ['GetState', 3, 2, [], [OcaObserverState]],
    ['GetObservedProperties', 3, 3, [], [OcaList(OcaProperty)]],
    ['SetObservedProperties', 3, 4, [OcaList(OcaProperty)], []],
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
    ['ObservedProperties', [OcaList(OcaProperty)], 3, 2, false, false, null],
    ['Threshold', [OcaFloat64], 3, 3, false, false, null],
    ['Operator', [OcaRelationalOperator], 3, 4, false, false, null],
    ['TwoWay', [OcaBoolean], 3, 5, false, false, null],
    ['Hysteresis', [OcaFloat64], 3, 6, false, false, null],
    ['Period', [OcaFloat32], 3, 7, false, false, null],
  ],
  [['Observation', 3, 1, [OcaEvent, OcaList(OcaFloat64)]]]
);

/**
 * Gets the values of the observed property that were reported by the
 * most recently emitted Observation event. If the numeric observer has
 * never emitted an Observation event, returns a list of IEEE
 * not-a-number values. The order of values in the returned list is
 * determined by the order of values set by SetObservedProperties, and is
 * the same as the order of values returned by the Observation event, and
 * the same as the order of object identifications returned by
 * GetObservedProperties. The return status indicates whether the value
 * has been successfully returned.
 * @method RemoteControlClasses.OcaNumericObserverList#GetLastObservation
 * @returns {Promise<OcaList>}
 */
/**
 * Gets the observer's state. The return value indicates whether the
 * state was successfully retrieved.
 * @method RemoteControlClasses.OcaNumericObserverList#GetState
 * @returns {Promise<OcaObserverState>}
 */
/**
 * Gets the identifications of the properties that the observer observes.
 * The order of property identifications in the returned list is
 * determined by the order of property identifications set by
 * SetObservedProperties, and is the same as the order of values returned
 * by GetLastObservation and the Observation event. The return value
 * indicates whether the identifications were successfully retrieved.
 * @method RemoteControlClasses.OcaNumericObserverList#GetObservedProperties
 * @returns {Promise<OcaList>}
 */
/**
 * Sets the identifications of the properties that the observer observes.
 * The order of property identifications supplied determines the order of
 * property identifications returned by GetObservedProperties and the
 * order of values returned by GetLastObservation and the Observation
 * event. The return value indicates whether the identifications were
 * successfully set.
 * @method RemoteControlClasses.OcaNumericObserverList#SetObservedProperties
 * @param property {OcaList}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the <b>Threshold </b>property. The return value
 * indicates whether the threshold value was successfully retrieved.
 * @method RemoteControlClasses.OcaNumericObserverList#GetThreshold
 * @returns {Promise<OcaFloat64>}
 */
/**
 * Sets the value of the <b>Threshold </b>property. The return value
 * indicates whether the threshold value was successfully set.
 * @method RemoteControlClasses.OcaNumericObserverList#SetThreshold
 * @param Threshold {OcaFloat64}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the <b>Operator </b>property. The return value
 * indicates whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaNumericObserverList#GetOperator
 * @returns {Promise<OcaRelationalOperator>}
 */
/**
 * Sets the value of the <b>Operator </b>property. The return value
 * indicates whether the operator was successfully set.
 * @method RemoteControlClasses.OcaNumericObserverList#SetOperator
 * @param _operator {OcaRelationalOperator}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the <b>TwoWay </b>property. The return value
 * indicates whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaNumericObserverList#GetTwoWay
 * @returns {Promise<OcaBoolean>}
 */
/**
 * Sets the value of the <b>TwoWay </b>property. The return value
 * indicates whether the property was successfully set.
 * @method RemoteControlClasses.OcaNumericObserverList#SetTwoWay
 * @param twoWay {OcaBoolean}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the <b>Hysteresis </b>property. The return value
 * indicates whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaNumericObserverList#GetHysteresis
 * @returns {Promise<OcaFloat64>}
 */
/**
 * Sets the value of the <b>Hysteresis </b>property. The return value
 * indicates whether the property was successfully set.
 * @method RemoteControlClasses.OcaNumericObserverList#SetHysteresis
 * @param hysteresis {OcaFloat64}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the <b>Period </b>property. The return value
 * indicates whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaNumericObserverList#GetPeriod
 * @returns {Promise<OcaTimeInterval>}
 */
/**
 * Sets the value of the <b>Period </b>property. The return value
 * indicates whether the property was successfully set.
 * @method RemoteControlClasses.OcaNumericObserverList#SetPeriod
 * @param period {OcaTimeInterval}
 *
 * @returns {Promise}
 */
/**
 * Event emitted to signal an asynchronous, periodic, or
 * conditional-periodic observation. This event returns the complete list
 * of values being observed, regardless of which one(s) may have
 * triggered it in the first place. The order of values in the returned
 * list is determined by the order of values set by
 * SetObservedProperties, and is the same as the order of values returned
 * by GetLastObservation, and the same as the order of object
 * identifications returned by GetObservedProperties.
 * @member RemoteControlClasses.OcaNumericObserverList#OnObservation {Event} -
 * Event emitted to signal an asynchronous, periodic, or
 * conditional-periodic observation. This event returns the complete list
 * of values being observed, regardless of which one(s) may have
 * triggered it in the first place. The order of values in the returned
 * list is determined by the order of values set by
 * SetObservedProperties, and is the same as the order of values returned
 * by GetLastObservation, and the same as the order of object
 * identifications returned by GetObservedProperties.
 */
/**
 * State: triggered, not triggered
 * @member RemoteControlClasses.OcaNumericObserverList#OnStateChanged {PropertyEvent<OcaObserverState>} - This event is emitted when State changes in the remote object.
 */
/**
 * List of identifiers of the properties are being observed.
 * @member RemoteControlClasses.OcaNumericObserverList#OnObservedPropertiesChanged {PropertyEvent<OcaList>} - This event is emitted when ObservedProperties changes in the remote object.
 */
/**
 * Comparison value for raising the <b>Triggered </b>event.
 * @member RemoteControlClasses.OcaNumericObserverList#OnThresholdChanged {PropertyEvent<OcaFloat64>} - This event is emitted when Threshold changes in the remote object.
 */
/**
 * Relational operator used when comparing the value of the observed
 * property to the threshold value.
 * @member RemoteControlClasses.OcaNumericObserverList#OnOperatorChanged {PropertyEvent<OcaRelationalOperator>} - This event is emitted when Operator changes in the remote object.
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
 * @member RemoteControlClasses.OcaNumericObserverList#OnTwoWayChanged {PropertyEvent<OcaBoolean>} - This event is emitted when TwoWay changes in the remote object.
 */
/**
 * Hysteresis that is used when observing the property value. This
 * indicates which amount must be added/subtracted from the <b>Threshold
 * </b>value to raise or re-enable the <b>Triggered </b>event of this
 * <b>OcaObserver </b>object. The rules for hysteresis handling depend
 * upon the configured <b>Operator </b>and <b>TwoWay </b>properties. The
 * <b>Hysteresis </b>property is ignored if the <b>Operator </b>property
 * is 'Inequality'. If the State is <b>Not Triggered</b> it changes to
 * <b>Triggered </b>if <u>any </u>of the ObservedProperties reaches the
 * Threshold. If the State is <b>Triggered </b>it changes to <b>Not
 * Triggered</b> only if <u>all </u>of the ObservedProperties no longer
 * meet the ‘Threshold including Hysteresis’<b> .</b>
 * @member RemoteControlClasses.OcaNumericObserverList#OnHysteresisChanged {PropertyEvent<OcaFloat64>} - This event is emitted when Hysteresis changes in the remote object.
 */
/**
 * Repetition period or zero. If nonzero, the observer will retrieve the
 * value and emit
 * @member RemoteControlClasses.OcaNumericObserverList#OnPeriodChanged {PropertyEvent<OcaTimeInterval>} - This event is emitted when Period changes in the remote object.
 */
