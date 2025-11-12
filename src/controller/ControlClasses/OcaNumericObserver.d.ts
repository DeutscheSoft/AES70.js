import { OcaObserverState } from '../../types/OcaObserverState.js';
import { IOcaProperty, OcaProperty } from '../../types/OcaProperty.js';
import {
  IOcaRelationalOperator,
  OcaRelationalOperator,
} from '../../types/OcaRelationalOperator.js';
import { Event } from '../event.js';
import { PropertyEvent } from '../property_event.js';
import { RemoteDevice } from '../remote_device.js';
import { OcaAgent } from './OcaAgent.js';

/**
 * Observer of a scalar numeric or boolean property ("target property") of a
 * specified object. Does not work for array, list, map, struct, or string
 * properties. **OcaNumericObserver** emits an **Observation** event under
 * certain conditions. There are three kinds of conditions:
 *
 *  - **Numeric comparison**. The target property value meets a certain
 *    comparison condition. A selection of comparison operators is available.
 *    Such observations are called "asynchronous observations".
 *
 *  - **Timer expiry**. The value of the** Period** property, if nonzero, is the
 *    time interval for the recurrent timed emission of **Observation** events.
 *    Such events ("periodic observations") are emitted regardless of the target
 *    property's value.
 *
 *  - **Combination of (1) and (2)**. If a numeric comparison and a nonzero
 *    period are both specified, then the **Observation** event is emitted when
 *    the timer expires **and** the numeric comparison is true. Such
 *    observations are called "conditional-periodic observations".
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
 *  - For boolean values, the threshold threshold and target are both coerced to
 *    **OcaUint8**, True is assigned the value One, False is assigned the value
 *    Zero.
 *
 *
 * Note that this coercion may result in rounding errors if the observed
 * datatype is of type **OcaUint64** or **OcaInt64**. An **OcaNumericObserver**
 * instance and the property it observes are bound at the time the
 * **OcaNumericObserver** instance is constructed. For static devices,
 * construction will occur during manufacture, or possibly during a subsequent
 * hardware configuration step. For reconfigurable devices, construction might
 * be done by online controllers as part of device configuration sessions. This
 * class is normally used for monitoring sensor readings, but may be used
 * equally well for watching workers' parameter settings.
 * @extends OcaAgent
 * @class OcaNumericObserver
 */
export declare class OcaNumericObserver extends OcaAgent {
  /**
   * Gets state of the Observer.
   * @member OcaNumericObserver#OnObservation {Event}
   */
  OnObservation: Event;
  /**
   * This event is emitted whenever State changes.
   */
  OnStateChanged: PropertyEvent<OcaObserverState>;

  /**
   * This event is emitted whenever ObservedProperty changes.
   */
  OnObservedPropertyChanged: PropertyEvent<OcaProperty>;

  /**
   * This event is emitted whenever Threshold changes.
   */
  OnThresholdChanged: PropertyEvent<number>;

  /**
   * This event is emitted whenever Operator changes.
   */
  OnOperatorChanged: PropertyEvent<OcaRelationalOperator>;

  /**
   * This event is emitted whenever TwoWay changes.
   */
  OnTwoWayChanged: PropertyEvent<boolean>;

  /**
   * This event is emitted whenever Hysteresis changes.
   */
  OnHysteresisChanged: PropertyEvent<number>;

  /**
   * This event is emitted whenever Period changes.
   */
  OnPeriodChanged: PropertyEvent<number>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the value of the observed property that was reported by the most
   * recently emitted **Observation** event. If the numeric observer has never
   * emitted an **Observation** event, returns the IEEE not-a-number value.
   *
   * @method OcaNumericObserver#GetLastObservation
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetLastObservation(): Promise<number>;

  /**
   * Gets the value of the **State** property.
   *
   * @method OcaNumericObserver#GetState
   * @returns {Promise<OcaObserverState>}
   *   A promise which resolves to a single value of type :class:`OcaObserverState`.
   */
  GetState(): Promise<OcaObserverState>;

  /**
   * Gets the identification of the property that the observer is observing.
   *
   * @method OcaNumericObserver#GetObservedProperty
   * @returns {Promise<OcaProperty>}
   *   A promise which resolves to a single value of type :class:`OcaProperty`.
   */
  GetObservedProperty(): Promise<OcaProperty>;

  /**
   * Sets the identification of the property that the observer shall observe.
   *
   * @method OcaNumericObserver#SetObservedProperty
   * @param {IOcaProperty} property
   *
   * @returns {Promise<void>}
   */
  SetObservedProperty(property: IOcaProperty): Promise<void>;

  /**
   * Gets the value of the **Threshold** property.
   *
   * @method OcaNumericObserver#GetThreshold
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetThreshold(): Promise<number>;

  /**
   * Sets the value of the **Threshold** property.
   *
   * @method OcaNumericObserver#SetThreshold
   * @param {number} Threshold
   *
   * @returns {Promise<void>}
   */
  SetThreshold(Threshold: number): Promise<void>;

  /**
   * Gets the value of the **Operator** property.
   *
   * @method OcaNumericObserver#GetOperator
   * @returns {Promise<OcaRelationalOperator>}
   *   A promise which resolves to a single value of type :class:`OcaRelationalOperator`.
   */
  GetOperator(): Promise<OcaRelationalOperator>;

  /**
   * Sets the value of the **Operator** property.
   *
   * @method OcaNumericObserver#SetOperator
   * @param {IOcaRelationalOperator} operator
   *
   * @returns {Promise<void>}
   */
  SetOperator(operator: IOcaRelationalOperator): Promise<void>;

  /**
   * Gets the value of the **TwoWay** property.
   *
   * @method OcaNumericObserver#GetTwoWay
   * @returns {Promise<boolean>}
   *   A promise which resolves to a single value of type ``boolean``.
   */
  GetTwoWay(): Promise<boolean>;

  /**
   * Sets the value of the **TwoWay** property.
   *
   * @method OcaNumericObserver#SetTwoWay
   * @param {boolean} twoWay
   *
   * @returns {Promise<void>}
   */
  SetTwoWay(twoWay: boolean): Promise<void>;

  /**
   * Gets the value of the **Hysteresis** property.
   *
   * @method OcaNumericObserver#GetHysteresis
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetHysteresis(): Promise<number>;

  /**
   * Sets the value of the **Hysteresis** property.
   *
   * @method OcaNumericObserver#SetHysteresis
   * @param {number} hysteresis
   *
   * @returns {Promise<void>}
   */
  SetHysteresis(hysteresis: number): Promise<void>;

  /**
   * Gets the value of the **Period** property.
   *
   * @method OcaNumericObserver#GetPeriod
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetPeriod(): Promise<number>;

  /**
   * Sets the value of the **Period** property.
   *
   * @method OcaNumericObserver#SetPeriod
   * @param {number} period
   *
   * @returns {Promise<void>}
   */
  SetPeriod(period: number): Promise<void>;
}
