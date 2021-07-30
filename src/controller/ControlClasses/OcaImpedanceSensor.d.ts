import { RemoteDevice } from '../remote_device';
import { OcaSensor } from './OcaSensor';
import { Arguments } from '../arguments';

import { PropertyEvent } from '../property_event';
import { OcaImpedance } from '../../types/OcaImpedance';

/**
 * Basic impedance sensor. Value is complex (magnitude and phase).
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
   * Gets the value and limits of the  **Reading** property. The return value indicates whether the data was successfully retrieved.
   * The return values of this method are
   *
   * - Reading of type :class:`OcaImpedance`
   * - minReading of type :class:`OcaImpedance`
   * - maxReading of type :class:`OcaImpedance`
   *
   * @method OcaImpedanceSensor#GetReading
   * @returns {Promise<Arguments<OcaImpedance,OcaImpedance,OcaImpedance>>}
   */
  GetReading(): Promise<Arguments<[OcaImpedance, OcaImpedance, OcaImpedance]>>;
}
