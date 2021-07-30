import { RemoteDevice } from '../remote_device';
import { OcaLevelSensor } from './OcaLevelSensor';

import { PropertyEvent } from '../Base';
import { IOcaLevelMeterLaw } from '../../types/OcaLevelMeterLaw';
import { OcaLevelMeterLaw } from '../../types/OcaLevelMeterLaw';

/**
 * Child of  **OcaLevelSensor** that returns an audio meter reading in dB relative to a known reference level, and whose value has been calculated by the selected averaging algorithm.
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
   * Gets the value of the Law property. The return value indicates whether the property was successfully retrieved.
   *
   * @method OcaAudioLevelSensor#GetLaw
   * @returns {Promise<OcaLevelMeterLaw>}
   *   A promise which resolves to a single value of type :class:`OcaLevelMeterLaw`.
   */
  GetLaw(): Promise<OcaLevelMeterLaw>;

  /**
   * Sets the value of the Law property. The return value indicates whether the property was successfully set. Only implemented for objects whose Law property is read/write.
   *
   * @method OcaAudioLevelSensor#SetLaw
   * @param {OcaLevelMeterLaw} law
   *
   * @returns {Promise<void>}
   */
  SetLaw(law: IOcaLevelMeterLaw): Promise<void>;
}
