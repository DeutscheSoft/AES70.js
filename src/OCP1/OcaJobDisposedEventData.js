/*
 * This file has been generated.
 */
import { OcaBlob } from './OcaBlob.js';
import { OcaJobDisposition } from './OcaJobDisposition.js';
import { OcaJobQueueItem } from './OcaJobQueueItem.js';
import { Struct } from './Struct.js';

import { OcaJobDisposedEventData as type } from '../types/OcaJobDisposedEventData.js';

export const OcaJobDisposedEventData = Struct(
  {
    QueueItem: OcaJobQueueItem,
    Disposition: OcaJobDisposition,
    DispositionDetails: OcaBlob,
  },
  type
);
