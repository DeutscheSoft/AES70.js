import {
  IOcaMediaClockAvailability,
  OcaMediaClockAvailability,
} from '../../types/OcaMediaClockAvailability.js';
import {
  IOcaMediaClockRate,
  OcaMediaClockRate,
} from '../../types/OcaMediaClockRate.js';
import { IOcaTime, OcaTime } from '../../types/OcaTime.js';
import { Arguments } from '../arguments.js';
import { PropertyEvent } from '../property_event.js';
import { RemoteDevice } from '../remote_device.js';
import { OcaAgent } from './OcaAgent.js';

/**
 * A media clock, internal or external. OCA Connection Management 3 (OCA-CM3)
 * version.
 * @extends OcaAgent
 * @class OcaMediaClock3
 */
export declare class OcaMediaClock3 extends OcaAgent {
  /**
   * This event is emitted whenever Availability changes.
   */
  OnAvailabilityChanged: PropertyEvent<OcaMediaClockAvailability>;

  /**
   * This event is emitted whenever TimeSourceONo changes.
   */
  OnTimeSourceONoChanged: PropertyEvent<number>;

  /**
   * This event is emitted whenever Offset changes.
   */
  OnOffsetChanged: PropertyEvent<OcaTime>;

  /**
   * This event is emitted whenever CurrentRate changes.
   */
  OnCurrentRateChanged: PropertyEvent<OcaMediaClockRate>;

  /**
   * This event is emitted whenever SupportedRates changes.
   */
  OnSupportedRatesChanged: PropertyEvent<Map<number, OcaMediaClockRate[]>>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the value of the **Availability** property.
   *
   * @method OcaMediaClock3#GetAvailability
   * @returns {Promise<OcaMediaClockAvailability>}
   *   A promise which resolves to a single value of type :class:`OcaMediaClockAvailability`.
   */
  GetAvailability(): Promise<OcaMediaClockAvailability>;

  /**
   * Sets the value of the **Availability** property. Optional method, need not
   * be supported in all implementations.
   *
   * @method OcaMediaClock3#SetAvailability
   * @param {IOcaMediaClockAvailability} Availability
   *
   * @returns {Promise<void>}
   */
  SetAvailability(Availability: IOcaMediaClockAvailability): Promise<void>;

  /**
   * Gets the current clock rate and the ONo of the associated **OcaTimeSource**
   * object.
   * The return values of this method are
   *
   * - Rate of type ``IOcaMediaClockRate``
   * - TimeSourceONo of type ``number``
   *
   * @method OcaMediaClock3#GetCurrentRate
   * @returns {Promise<Arguments<OcaMediaClockRate,number>>}
   */
  GetCurrentRate(): Promise<Arguments<[OcaMediaClockRate, number]>>;

  /**
   * Sets the clock rate and the ONo of the associated **OcaTimeSource** object.
   * Optional method, may not be supported in all implementations.
   *
   * @method OcaMediaClock3#SetCurrentRate
   * @param {IOcaMediaClockRate} Rate
   * @param {number} TimeSourceONo
   *
   * @returns {Promise<void>}
   */
  SetCurrentRate(
    Rate: IOcaMediaClockRate,
    TimeSourceONo: number
  ): Promise<void>;

  /**
   * Gets the offset of this media clock's time from that of the associated
   * **OcaTimeSource** object.
   *
   * @method OcaMediaClock3#GetOffset
   * @returns {Promise<OcaTime>}
   *   A promise which resolves to a single value of type :class:`OcaTime`.
   */
  GetOffset(): Promise<OcaTime>;

  /**
   * Sets the offset of this media clock's time from that of the associated
   * **OcaTimeSource** object. Optional method, may not be supported in all
   * implementations.
   *
   * @method OcaMediaClock3#SetOffset
   * @param {IOcaTime} Offset
   *
   * @returns {Promise<void>}
   */
  SetOffset(Offset: IOcaTime): Promise<void>;

  /**
   * Gets the list of supported media clock rates for each supported time
   * source.
   *
   * @method OcaMediaClock3#GetSupportedRates
   * @returns {Promise<Map<number, OcaMediaClockRate[]>>}
   *   A promise which resolves to a single value of type ``Map<number, OcaMediaClockRate[]>``.
   */
  GetSupportedRates(): Promise<Map<number, OcaMediaClockRate[]>>;
}
