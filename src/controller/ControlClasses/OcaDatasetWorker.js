import { OcaUint32 } from '../../OCP1/OcaUint32.js';
import { make_control_class } from '../make_control_class.js';
import { OcaWorker } from './OcaWorker.js';

/**
 * Abstract base class for Dataset Workers, i.e. Workers that perform operations
 * on Datasets.
 * @extends OcaWorker
 * @class OcaDatasetWorker
 */
export const OcaDatasetWorker = make_control_class(
  'OcaDatasetWorker',
  3,
  '\u0001\u0001\u0007',
  3,
  OcaWorker,
  [['GetDatasetONo', 3, 1, [], [OcaUint32]]],
  [['DatasetONo', [OcaUint32], 3, 1, false, false, null]],
  []
);

/**
 * Returns object number associated Dataset Object, or zero if no Dataset is
 * associated. Note: There is no corresponding **Set(...)** method, because it
 * is assumed the Dataset will be associated either at construction time, or by
 * actions defined by child classes, e.g. the **Open(...)** method of the child
 * class **OcaMediaRecorderPlayer**.
 *
 * @method OcaDatasetWorker#GetDatasetONo
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * This event is emitted when the property ``DatasetONo`` changes in the remote object.
 * The property ``DatasetONo`` is described in the AES70 standard as follows.
 * ONo of the **OcaDataset** object that this Dataset Worker is currently
 * working on, zero if none.
 *
 * @member {PropertyEvent<number>} OcaDatasetWorker#OnDatasetONoChanged
 */
