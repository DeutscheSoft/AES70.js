import { OcaMediaClockLockState } from '../../types/OcaMediaClockLockState.js';
import {
  IOcaMediaClockRate,
  OcaMediaClockRate,
} from '../../types/OcaMediaClockRate.js';
import {
  IOcaMediaClockType,
  OcaMediaClockType,
} from '../../types/OcaMediaClockType.js';
import { PropertyEvent } from '../property_event.js';
import { RemoteDevice } from '../remote_device.js';
import { OcaAgent } from './OcaAgent.js';

/**
 * **DEPRECATED CLASS** *Replaced by* **OcaMediaClock3** A media clock, internal
 * or external.
 * @extends OcaAgent
 * @class OcaMediaClock
 */
export declare class OcaMediaClock extends OcaAgent {
  /**
   * This event is emitted whenever Type changes.
   */
  OnTypeChanged: PropertyEvent<OcaMediaClockType>;

  /**
   * This event is emitted whenever DomainID changes.
   */
  OnDomainIDChanged: PropertyEvent<number>;

  /**
   * This event is emitted whenever RatesSupported changes.
   */
  OnRatesSupportedChanged: PropertyEvent<OcaMediaClockRate[]>;

  /**
   * This event is emitted whenever CurrentRate changes.
   */
  OnCurrentRateChanged: PropertyEvent<OcaMediaClockRate>;

  /**
   * An alias for OnCurrentRateChanged
   */
  OnRateChanged: PropertyEvent<OcaMediaClockRate>;
  /**
   * This event is emitted whenever LockState changes.
   */
  OnLockStateChanged: PropertyEvent<OcaMediaClockLockState>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the value of the **Type** property. The return value indicates whether
   * the value was successfully retrieved.
   *
   * @method OcaMediaClock#GetType
   * @returns {Promise<OcaMediaClockType>}
   *   A promise which resolves to a single value of type :class:`OcaMediaClockType`.
   */
  GetType(): Promise<OcaMediaClockType>;

  /**
   * Sets the value of the **Type** property. The return value indicates whether
   * the value was successfully set. Optional method, may not be supported in
   * all implementations.
   *
   * @method OcaMediaClock#SetType
   * @param {IOcaMediaClockType} Type
   *
   * @returns {Promise<void>}
   */
  SetType(Type: IOcaMediaClockType): Promise<void>;

  /**
   * Gets the value of the **DomainID** property. The return value indicates
   * whether the value was successfully retrieved.
   *
   * @method OcaMediaClock#GetDomainID
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetDomainID(): Promise<number>;

  /**
   * Sets the value of the **DomainID** property. The return value indicates
   * whether the value was successfully set. Optional method, may not be
   * supported in all implementations.
   *
   * @method OcaMediaClock#SetDomainID
   * @param {number} ID
   *
   * @returns {Promise<void>}
   */
  SetDomainID(ID: number): Promise<void>;

  /**
   * Gets the list of supported sampling rates. The return value indicates
   * whether the list was successfully retrieved.
   *
   * @method OcaMediaClock#GetSupportedRates
   * @returns {Promise<OcaMediaClockRate[]>}
   *   A promise which resolves to a single value of type :class:`OcaMediaClockRate[]`.
   */
  GetSupportedRates(): Promise<OcaMediaClockRate[]>;

  /**
   * Gets the current sampling rate. The return value indicates whether the
   * value was successfully retrieved.
   *
   * @method OcaMediaClock#GetRate
   * @returns {Promise<OcaMediaClockRate>}
   *   A promise which resolves to a single value of type :class:`OcaMediaClockRate`.
   */
  GetRate(): Promise<OcaMediaClockRate>;

  /**
   * Gets the current sampling rate. The return value indicates whether the
   * value was successfully retrieved.
   * An alias for GetRate.
   *
   * @method OcaMediaClock#GetCurrentRate
   * @returns {Promise<OcaMediaClockRate>}
   *   A promise which resolves to a single value of type :class:`OcaMediaClockRate`.
   */
  GetCurrentRate(): Promise<OcaMediaClockRate>;

  /**
   * Sets the sampling rate. The return value indicates whether the rate was
   * successfully set.
   *
   * @method OcaMediaClock#SetRate
   * @param {IOcaMediaClockRate} rate
   *
   * @returns {Promise<void>}
   */
  SetRate(rate: IOcaMediaClockRate): Promise<void>;

  /**
   * Sets the sampling rate. The return value indicates whether the rate was
   * successfully set.
   * An alias for SetRate.
   *
   * @method OcaMediaClock#SetCurrentRate
   * @param {IOcaMediaClockRate} rate
   *
   * @returns {Promise<void>}
   */
  SetCurrentRate(rate: IOcaMediaClockRate): Promise<void>;

  /**
   * Gets the current media clock lock state. The return value indicates whether
   * the value was successfully retrieved.
   *
   * @method OcaMediaClock#GetLockState
   * @returns {Promise<OcaMediaClockLockState>}
   *   A promise which resolves to a single value of type :class:`OcaMediaClockLockState`.
   */
  GetLockState(): Promise<OcaMediaClockLockState>;
}
