import { OcaBoolean } from '../../OCP1/OcaBoolean.js';
import { OcaFloat32 } from '../../OCP1/OcaFloat32.js';
import { OcaFloat64 } from '../../OCP1/OcaFloat64.js';
import { OcaList } from '../../OCP1/OcaList.js';
import { OcaObservationListEventData } from '../../OCP1/OcaObservationListEventData.js';
import { OcaObserverState } from '../../OCP1/OcaObserverState.js';
import { OcaProperty } from '../../OCP1/OcaProperty.js';
import { OcaRelationalOperator } from '../../OCP1/OcaRelationalOperator.js';
import { make_control_class } from '../make_control_class.js';
import { OcaAgent } from './OcaAgent.js';

/**
 * Observer of a scalar numeric or boolean property ("target property") of a set
 * of specified objects. This class is a subclass of **OcaNumericObserver**, and
 * differs from that class only in that it observes a set of properties rather
 * than a single property. Does not work for array, list, map, struct, or string
 * properties. **OcaNumericObserverList** emits an **Observation** event under
 * certain conditions. There are three kinds of conditions:
 *
 *  - **Numeric comparison**. A target property value meets a certain comparison
 *    condition. A selection of comparison operators is available. Such
 *    observations are called "asynchronous observations".
 *
 *  - **Timer expiry**. The value of the** Period** property, if nonzero, is a
 *    the time interval for the recurrent timed emission of **Observation**
 *    events. Such events ("periodic observations") are emitted regardless of
 *    the target property's value.
 *
 *  - **Combination of (1) and (2)**. If a numeric comparison and a nonzero
 *    period are both specified, then the **Observation** event is emitted when
 *    the timer expires **and** the numeric comparison is true for at least one
 *    of the observed properties. Such observations are called
 *    "conditional-periodic observations".
 *
 *
 * This is a weakly typed class. Its threshold is specified as an **OcaFloat64**
 * number.
 *
 *  - For unsigned integer targets, the threshold and target are both coerced to
 *    **OcaUint64** before comparing.
 *
 *  - For signed integer targets, the threshold and target are both coerced to
 *    **OcaInt64** before comparing.
 *
 *  - For boolean values, the threshold hreshold and target are both coerced to
 *    **OcaUint8**, True is assigned the value One, False is assigned the value
 *    Zero.
 *
 *
 * Note that this coercion may result in rounding errors if the observed
 * datatype is of type OcaUint64 or OcaUint64. An **OcaNumericObserver**
 * instance and the property it observes are bound at the time the
 * **OcaNumericObserver** instance is constructed. For static devices,
 * construction will occur during manufacture, or possibly during a subsequent
 * hardware configuration step. For reconfigurable devices, construction might
 * be done by online controllers as part of device configuration sessions. This
 * class is normally used for monitoring readings of sensor readings, but may be
 * used equally well for watching workers' parameter settings.
 * @extends OcaAgent
 * @class OcaNumericObserverList
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
  [['Observation', 3, 1, [OcaObservationListEventData]]]
);

/**
 * Gets the values of the observed property that were reported by the most
 * recently emitted Observation event. If the numeric observer has never emitted
 * an Observation event, returns a list of IEEE not-a-number values. The order
 * of values in the returned list is determined by the order of values set by
 * SetObservedProperties, and is the same as the order of values returned by the
 * Observation event, and the same as the order of object identifications
 * returned by GetObservedProperties. The return status indicates whether the
 * value has been successfully returned.
 *
 * @method OcaNumericObserverList#GetLastObservation
 * @returns {Promise<number[]>}
 *   A promise which resolves to a single value of type ``number[]``.
 */
/**
 * Gets the observer's state. The return value indicates whether the state was
 * successfully retrieved.
 *
 * @method OcaNumericObserverList#GetState
 * @returns {Promise<OcaObserverState>}
 *   A promise which resolves to a single value of type :class:`OcaObserverState`.
 */
/**
 * Gets the identifications of the properties that the observer observes. The
 * order of property identifications in the returned list is determined by the
 * order of property identifications set by SetObservedProperties, and is the
 * same as the order of values returned by GetLastObservation and the
 * Observation event. The return value indicates whether the identifications
 * were successfully retrieved.
 *
 * @method OcaNumericObserverList#GetObservedProperties
 * @returns {Promise<OcaProperty[]>}
 *   A promise which resolves to a single value of type :class:`OcaProperty[]`.
 */
/**
 * Sets the identifications of the properties that the observer observes. The
 * order of property identifications supplied determines the order of property
 * identifications returned by GetObservedProperties and the order of values
 * returned by GetLastObservation and the Observation event. The return value
 * indicates whether the identifications were successfully set.
 *
 * @method OcaNumericObserverList#SetObservedProperties
 * @param {IOcaProperty[]} property
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value of the **Threshold** property. The return value indicates
 * whether the threshold value was successfully retrieved.
 *
 * @method OcaNumericObserverList#GetThreshold
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Sets the value of the **Threshold** property. The return value indicates
 * whether the threshold value was successfully set.
 *
 * @method OcaNumericObserverList#SetThreshold
 * @param {number} Threshold
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value of the **Operator** property. The return value indicates
 * whether the property was successfully retrieved.
 *
 * @method OcaNumericObserverList#GetOperator
 * @returns {Promise<OcaRelationalOperator>}
 *   A promise which resolves to a single value of type :class:`OcaRelationalOperator`.
 */
/**
 * Sets the value of the **Operator** property. The return value indicates
 * whether the operator was successfully set.
 *
 * @method OcaNumericObserverList#SetOperator
 * @param {IOcaRelationalOperator} operator
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value of the **TwoWay** property. The return value indicates whether
 * the property was successfully retrieved.
 *
 * @method OcaNumericObserverList#GetTwoWay
 * @returns {Promise<boolean>}
 *   A promise which resolves to a single value of type ``boolean``.
 */
/**
 * Sets the value of the **TwoWay** property. The return value indicates whether
 * the property was successfully set.
 *
 * @method OcaNumericObserverList#SetTwoWay
 * @param {boolean} twoWay
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value of the **Hysteresis** property. The return value indicates
 * whether the property was successfully retrieved.
 *
 * @method OcaNumericObserverList#GetHysteresis
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Sets the value of the **Hysteresis** property. The return value indicates
 * whether the property was successfully set.
 *
 * @method OcaNumericObserverList#SetHysteresis
 * @param {number} hysteresis
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value of the **Period** property. The return value indicates whether
 * the property was successfully retrieved.
 *
 * @method OcaNumericObserverList#GetPeriod
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Sets the value of the **Period** property. The return value indicates whether
 * the property was successfully set.
 *
 * @method OcaNumericObserverList#SetPeriod
 * @param {number} period
 *
 * @returns {Promise<void>}
 */
/**
 * Event emitted to signal an asynchronous, periodic, or conditional-periodic
 * observation. This event returns the complete list of values being observed,
 * regardless of which one(s) may have triggered it in the first place. The
 * order of values in the returned list is determined by the order of values set
 * by SetObservedProperties, and is the same as the order of values returned by
 * GetLastObservation, and the same as the order of object identifications
 * returned by GetObservedProperties.
 * @member OcaNumericObserverList#OnObservation {Event}
 */
/**
 * This event is emitted when the property ``State`` changes in the remote object.
 * The property ``State`` is described in the AES70 standard as follows.
 * State: triggered, not triggered
 *
 * @member {PropertyEvent<OcaObserverState>} OcaNumericObserverList#OnStateChanged
 */
/**
 * This event is emitted when the property ``ObservedProperties`` changes in the remote object.
 * The property ``ObservedProperties`` is described in the AES70 standard as follows.
 * List of identifiers of the properties are being observed.
 *
 * @member {PropertyEvent<OcaProperty[]>} OcaNumericObserverList#OnObservedPropertiesChanged
 */
/**
 * This event is emitted when the property ``Threshold`` changes in the remote object.
 * The property ``Threshold`` is described in the AES70 standard as follows.
 * Comparison value for raising the **Triggered** event.
 *
 * @member {PropertyEvent<number>} OcaNumericObserverList#OnThresholdChanged
 */
/**
 * This event is emitted when the property ``Operator`` changes in the remote object.
 * The property ``Operator`` is described in the AES70 standard as follows.
 * Relational operator used when comparing the value of the observed property to
 * the threshold value.
 *
 * @member {PropertyEvent<OcaRelationalOperator>} OcaNumericObserverList#OnOperatorChanged
 */
/**
 * This event is emitted when the property ``TwoWay`` changes in the remote object.
 * The property ``TwoWay`` is described in the AES70 standard as follows.
 * True to emit a **Triggered** event upon crossing the threshold in either
 * direction; false to emit only upon crossing in the primary direction (i.e.
 * rising when **Operator** is set to GreaterThan or GreaterThanOrEqual; falling
 * when **Operator** is set to LessThan**** or LessThanOrEqual; equality when
 * **Operator** is set to Equality; inequality when **Operator** is set to
 * Inequality).
 *
 * @member {PropertyEvent<boolean>} OcaNumericObserverList#OnTwoWayChanged
 */
/**
 * This event is emitted when the property ``Hysteresis`` changes in the remote object.
 * The property ``Hysteresis`` is described in the AES70 standard as follows.
 * Hysteresis that is used when observing the property value. This indicates
 * which amount must be added/subtracted from the **Threshold** value to raise
 * or re-enable the **Triggered** event of this **OcaObserver** object. The
 * rules for hysteresis handling depend upon the configured **Operator** and
 * **TwoWay** properties. The **Hysteresis** property is ignored if the
 * **Operator** property is 'Inequality'. If the State is **Not Triggered** it
 * changes to **Triggered** if any of the ObservedProperties reaches the
 * Threshold. If the State is **Triggered** it changes to **Not Triggered** only
 * if all of the ObservedProperties no longer meet the ‘Threshold including
 * Hysteresis’** .**
 *
 * @member {PropertyEvent<number>} OcaNumericObserverList#OnHysteresisChanged
 */
/**
 * This event is emitted when the property ``Period`` changes in the remote object.
 * The property ``Period`` is described in the AES70 standard as follows.
 * Repetition period or zero. If nonzero, the observer will retrieve the value
 * and emit
 *
 * @member {PropertyEvent<number>} OcaNumericObserverList#OnPeriodChanged
 */
