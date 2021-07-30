import { RemoteDevice } from '../remote_device';
import { OcaWorker } from './OcaWorker';

import { PropertyEvent } from '../Base';
import { OcaSensorReadingState } from '../../types/OcaSensorReadingState';

/**
 * Abstract base class for all sensor classes.
 * @extends OcaWorker
 * @class OcaSensor
 */
export declare class OcaSensor extends OcaWorker {
  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the current reading state of the sensor. The return value indicates whether the state was successfully retrived.
   *
   * @method OcaSensor#GetReadingState
   * @returns {Promise<OcaSensorReadingState>}
   *   A promise which resolves to a single value of type :class:`OcaSensorReadingState`.
   */
  GetReadingState(): Promise<OcaSensorReadingState>;
}
