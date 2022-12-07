import {
  IOcaMediaClockAvailability,
  OcaMediaClockAvailability,
} from '../../types/OcaMediaClockAvailability';
import {
  IOcaMediaClockRate,
  OcaMediaClockRate,
} from '../../types/OcaMediaClockRate';
import { IOcaTimePTP, OcaTimePTP } from '../../types/OcaTimePTP';
import { Arguments } from '../arguments';
import { PropertyEvent } from '../property_event';
import { RemoteDevice } from '../remote_device';
import { OcaAgent } from './OcaAgent';

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
  OnOffsetChanged: PropertyEvent<OcaTimePTP>;

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
   * Gets the value of the **Availability** property. The return value indicates
   * whether the value was successfully retrieved.
   *
   * @method OcaMediaClock3#GetAvailability
   * @returns {Promise<OcaMediaClockAvailability>}
   *   A promise which resolves to a single value of type :class:`OcaMediaClockAvailability`.
   */
  GetAvailability(): Promise<OcaMediaClockAvailability>;

  /**
   * Sets the value of the **Availability** property. The return value indicates
   * whether the value was successfully set. Optional method, may not be
   * supported in all implementations.
   *
   * @method OcaMediaClock3#SetAvailability
   * @param {IOcaMediaClockAvailability} Availability
   *
   * @returns {Promise<void>}
   */
  SetAvailability(Availability: IOcaMediaClockAvailability): Promise<void>;

  /**
   * Gets the current clock rate and the ONo of the associated **OcaTimeSource**
   * object. The return value indicates whether the value was successfully
   * retrieved.
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
   * The return value indicates whether the value was successfully set. Optional
   * method, may not be supported in all implementations.
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
   * **OcaTimeSource** object. The return value indicates whether the value was
   * successfully retrieved.
   *
   * @method OcaMediaClock3#GetOffset
   * @returns {Promise<OcaTimePTP>}
   *   A promise which resolves to a single value of type :class:`OcaTimePTP`.
   */
  GetOffset(): Promise<OcaTimePTP>;

  /**
   * Sets the offset of this media clock's time from that of the associated
   * **OcaTimeSource** object. The return value indicates whether the value was
   * successfully set. Optional method, may not be supported in all
   * implementations.
   *
   * @method OcaMediaClock3#SetOffset
   * @param {IOcaTimePTP} Offset
   *
   * @returns {Promise<void>}
   */
  SetOffset(Offset: IOcaTimePTP): Promise<void>;

  /**
   * Gets the list of supported media clock rates for the given time source. The
   * return value indicates whether the list was successfully retrieved.
   *
   * @method OcaMediaClock3#GetSupportedRates
   * @returns {Promise<Map<number, OcaMediaClockRate[]>>}
   *   A promise which resolves to a single value of type ``Map<number, OcaMediaClockRate[]>``.
   */
  GetSupportedRates(): Promise<Map<number, OcaMediaClockRate[]>>;
}
