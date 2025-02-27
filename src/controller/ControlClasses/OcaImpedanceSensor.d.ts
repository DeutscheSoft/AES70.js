import { OcaImpedance } from '../../types/OcaImpedance';
import { Arguments } from '../arguments';
import { PropertyEvent } from '../property_event';
import { RemoteDevice } from '../remote_device';
import { OcaSensor } from './OcaSensor';

/**
 * Complex impedance sensor. Value shall be reported as a magnitude and a phase.
 * @extends OcaSensor
 * @class OcaImpedanceSensor
 */
export declare class OcaImpedanceSensor extends OcaSensor {
  /**
   * This event is emitted whenever Reading changes.
   */
  OnReadingChanged: PropertyEvent<OcaImpedance>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the value and limits of the **Reading** property.
   * The return values of this method are
   *
   * - Reading of type ``IOcaImpedance``
   * - minReading of type ``IOcaImpedance``
   * - maxReading of type ``IOcaImpedance``
   *
   * @method OcaImpedanceSensor#GetReading
   * @returns {Promise<Arguments<OcaImpedance,OcaImpedance,OcaImpedance>>}
   */
  GetReading(): Promise<Arguments<[OcaImpedance, OcaImpedance, OcaImpedance]>>;
}
