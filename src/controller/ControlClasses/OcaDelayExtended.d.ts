import { IOcaDelayUnit } from '../../types/OcaDelayUnit';
import { IOcaDelayValue, OcaDelayValue } from '../../types/OcaDelayValue';
import { Arguments } from '../arguments';
import { PropertyEvent } from '../property_event';
import { RemoteDevice } from '../remote_device';
import { OcaDelay } from './OcaDelay';

/**
 * Signal delay - extended version. Allows setting delay value in various units.
 * Note that the inherited property 04p01 DelayTime is also supported by this
 * class and reflects actual achieved delay in seconds.
 * @extends OcaDelay
 * @class OcaDelayExtended
 */
export declare class OcaDelayExtended extends OcaDelay {
  /**
   * This event is emitted whenever DelayValue changes.
   */
  OnDelayValueChanged: PropertyEvent<OcaDelayValue>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the value of the DelayValue property. The return value indicates
   * whether the property was successfully retrieved.
   * The return values of this method are
   *
   * - Value of type ``IOcaDelayValue``
   * - minValue of type ``IOcaDelayValue``
   * - maxValue of type ``IOcaDelayValue``
   *
   * @method OcaDelayExtended#GetDelayValue
   * @returns {Promise<Arguments<OcaDelayValue,OcaDelayValue,OcaDelayValue>>}
   */
  GetDelayValue(): Promise<
    Arguments<[OcaDelayValue, OcaDelayValue, OcaDelayValue]>
  >;

  /**
   * Sets the value of the DelayValue property. The return value indicates
   * whether the property was successfully set.
   *
   * @method OcaDelayExtended#SetDelayValue
   * @param {IOcaDelayValue} Value
   *
   * @returns {Promise<void>}
   */
  SetDelayValue(Value: IOcaDelayValue): Promise<void>;

  /**
   * Return current delay setting, converted to given units. The return value
   * indicates whether the method has succeeded.
   *
   * @method OcaDelayExtended#GetDelayValueConverted
   * @param {IOcaDelayUnit} UoM
   *
   * @returns {Promise<OcaDelayValue>}
   *   A promise which resolves to a single value of type :class:`OcaDelayValue`.
   */
  GetDelayValueConverted(UoM: IOcaDelayUnit): Promise<OcaDelayValue>;
}
