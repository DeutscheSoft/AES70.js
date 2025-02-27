import { OcaSamplingRateConverterType } from '../../types/OcaSamplingRateConverterType';
import { RemoteDevice } from '../remote_device';
import { OcaActuator } from './OcaActuator';

/**
 * Sampling rate converter. **ClockMap** property inherited from **OcaWorker**
 * shall define the input and output clocks to be used for the conversion(s).
 * @extends OcaActuator
 * @class OcaSamplingRateConverter
 */
export declare class OcaSamplingRateConverter extends OcaActuator {
  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets type of this sampling rate converter.
   *
   * @method OcaSamplingRateConverter#GetType
   * @returns {Promise<OcaSamplingRateConverterType>}
   *   A promise which resolves to a single value of type :class:`OcaSamplingRateConverterType`.
   */
  GetType(): Promise<OcaSamplingRateConverterType>;
}
