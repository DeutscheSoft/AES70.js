import { RemoteDevice } from '../remote_device';
import { OcaAgent } from './OcaAgent';
import { Event } from '../event';

import { PropertyEvent } from '../property_event';
import { IOcaProperty } from '../../types/OcaProperty';
import { IOcaRelationalOperator } from '../../types/OcaRelationalOperator';
import { OcaObserverState } from '../../types/OcaObserverState';
import { OcaProperty } from '../../types/OcaProperty';
import { OcaRelationalOperator } from '../../types/OcaRelationalOperator';

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
export declare class OcaNumericObserver extends OcaAgent {
  /**
   * Event emitted to signal an asynchronous, periodic, or conditional-periodic observation.
   * @member OcaNumericObserver#OnObservation {Event}
   * Event emitted to signal an asynchronous, periodic, or
   * conditional-periodic observation.
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
   * Gets the value of the observed property that was reported by the most recently emitted Observation event. If the numeric observer has never emitted an Observation event, returns the IEEE not-a-number value. The return status indicates whether the value has been successfully returned.
   *
   * @method OcaNumericObserver#GetLastObservation
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetLastObservation(): Promise<number>;

  /**
   * Gets the observer's state. The return value indicates whether the state was successfully retrieved.
   *
   * @method OcaNumericObserver#GetState
   * @returns {Promise<OcaObserverState>}
   *   A promise which resolves to a single value of type :class:`OcaObserverState`.
   */
  GetState(): Promise<OcaObserverState>;

  /**
   * Gets the identification of the property that the observer observes. The return value indicates whether the identification was successfully retrieved.
   *
   * @method OcaNumericObserver#GetObservedProperty
   * @returns {Promise<OcaProperty>}
   *   A promise which resolves to a single value of type :class:`OcaProperty`.
   */
  GetObservedProperty(): Promise<OcaProperty>;

  /**
   * Sets the identification of the property that the observer observes. The return value indicates whether the identification was successfully set.
   *
   * @method OcaNumericObserver#SetObservedProperty
   * @param {OcaProperty} property
   *
   * @returns {Promise<void>}
   */
  SetObservedProperty(property: IOcaProperty): Promise<void>;

  /**
   * Gets the value of the  **Threshold** property. The return value indicates whether the threshold value was successfully retrieved.
   *
   * @method OcaNumericObserver#GetThreshold
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetThreshold(): Promise<number>;

  /**
   * Sets the value of the  **Threshold** property. The return value indicates whether the threshold value was successfully set.
   *
   * @method OcaNumericObserver#SetThreshold
   * @param {number} Threshold
   *
   * @returns {Promise<void>}
   */
  SetThreshold(Threshold: number): Promise<void>;

  /**
   * Gets the value of the  **Operator** property. The return value indicates whether the property was successfully retrieved.
   *
   * @method OcaNumericObserver#GetOperator
   * @returns {Promise<OcaRelationalOperator>}
   *   A promise which resolves to a single value of type :class:`OcaRelationalOperator`.
   */
  GetOperator(): Promise<OcaRelationalOperator>;

  /**
   * Sets the value of the  **Operator** property. The return value indicates whether the operator was successfully set.
   *
   * @method OcaNumericObserver#SetOperator
   * @param {OcaRelationalOperator} _operator
   *
   * @returns {Promise<void>}
   */
  SetOperator(_operator: IOcaRelationalOperator): Promise<void>;

  /**
   * Gets the value of the  **TwoWay** property. The return value indicates whether the property was successfully retrieved.
   *
   * @method OcaNumericObserver#GetTwoWay
   * @returns {Promise<boolean>}
   *   A promise which resolves to a single value of type ``boolean``.
   */
  GetTwoWay(): Promise<boolean>;

  /**
   * Sets the value of the  **TwoWay** property. The return value indicates whether the property was successfully set.
   *
   * @method OcaNumericObserver#SetTwoWay
   * @param {boolean} twoWay
   *
   * @returns {Promise<void>}
   */
  SetTwoWay(twoWay: boolean): Promise<void>;

  /**
   * Gets the value of the  **Hysteresis** property. The return value indicates whether the property was successfully retrieved.
   *
   * @method OcaNumericObserver#GetHysteresis
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetHysteresis(): Promise<number>;

  /**
   * Sets the value of the  **Hysteresis** property. The return value indicates whether the property was successfully set.
   *
   * @method OcaNumericObserver#SetHysteresis
   * @param {number} hysteresis
   *
   * @returns {Promise<void>}
   */
  SetHysteresis(hysteresis: number): Promise<void>;

  /**
   * Gets the value of the  **Period** property. The return value indicates whether the property was successfully retrieved.
   *
   * @method OcaNumericObserver#GetPeriod
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetPeriod(): Promise<number>;

  /**
   * Sets the value of the  **Period** property. The return value indicates whether the property was successfully set.
   *
   * @method OcaNumericObserver#SetPeriod
   * @param {number} period
   *
   * @returns {Promise<void>}
   */
  SetPeriod(period: number): Promise<void>;
}
