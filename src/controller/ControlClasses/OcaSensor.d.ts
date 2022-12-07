import { OcaSensorReadingState } from '../../types/OcaSensorReadingState';
import { PropertyEvent } from '../property_event';
import { RemoteDevice } from '../remote_device';
import { OcaWorker } from './OcaWorker';

/**
 * Abstract base class for all sensor classes.
 * @extends OcaWorker
 * @class OcaSensor
 */
export declare class OcaSensor extends OcaWorker {
  /**
   * This event is emitted whenever ReadingState changes.
   */
  OnReadingStateChanged: PropertyEvent<OcaSensorReadingState>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the current reading state of the sensor. The return value indicates
   * whether the state was successfully retrived.
   *
   * @method OcaSensor#GetReadingState
   * @returns {Promise<OcaSensorReadingState>}
   *   A promise which resolves to a single value of type :class:`OcaSensorReadingState`.
   */
  GetReadingState(): Promise<OcaSensorReadingState>;
}
