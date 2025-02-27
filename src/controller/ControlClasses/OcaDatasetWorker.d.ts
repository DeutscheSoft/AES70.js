import { PropertyEvent } from '../property_event';
import { RemoteDevice } from '../remote_device';
import { OcaWorker } from './OcaWorker';

/**
 * Abstract base class for Dataset Workers, i.e. Workers that perform operations
 * on Datasets.
 * @extends OcaWorker
 * @class OcaDatasetWorker
 */
export declare class OcaDatasetWorker extends OcaWorker {
  /**
   * This event is emitted whenever DatasetONo changes.
   */
  OnDatasetONoChanged: PropertyEvent<number>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Returns object number associated Dataset Object, or zero if no Dataset is
   * associated. Note: There is no corresponding **Set(...)** method, because it
   * is assumed the Dataset will be associated either at construction time, or
   * by actions defined by child classes, e.g. the **Open(...)** method of the
   * child class **OcaMediaRecorderPlayer**.
   *
   * @method OcaDatasetWorker#GetDatasetONo
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetDatasetONo(): Promise<number>;
}
