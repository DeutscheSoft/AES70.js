import {
  IOcaLevelMeterLaw,
  OcaLevelMeterLaw,
} from '../../types/OcaLevelMeterLaw';
import { PropertyEvent } from '../property_event';
import { RemoteDevice } from '../remote_device';
import { OcaLevelSensor } from './OcaLevelSensor';

/**
 * Child of **OcaLevelSensor** that shall return an audio meter reading in dB
 * relative to a known reference level, and whose value shall be calculated by
 * the selected averaging algorithm.
 * @extends OcaLevelSensor
 * @class OcaAudioLevelSensor
 */
export declare class OcaAudioLevelSensor extends OcaLevelSensor {
  /**
   * This event is emitted whenever Law changes.
   */
  OnLawChanged: PropertyEvent<OcaLevelMeterLaw>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the value of the **Law** property.
   *
   * @method OcaAudioLevelSensor#GetLaw
   * @returns {Promise<OcaLevelMeterLaw>}
   *   A promise which resolves to a single value of type :class:`OcaLevelMeterLaw`.
   */
  GetLaw(): Promise<OcaLevelMeterLaw>;

  /**
   * Sets the value of the **Law** property.
   *
   * @method OcaAudioLevelSensor#SetLaw
   * @param {IOcaLevelMeterLaw} law
   *
   * @returns {Promise<void>}
   */
  SetLaw(law: IOcaLevelMeterLaw): Promise<void>;
}
