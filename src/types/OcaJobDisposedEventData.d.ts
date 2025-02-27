/*
 * This file has been generated.
 */
import { IOcaJobDisposition, OcaJobDisposition } from './OcaJobDisposition';
import { IOcaJobQueueItem, OcaJobQueueItem } from './OcaJobQueueItem';

export declare interface IOcaJobDisposedEventData {
  /**
   * The job queue item that is the subject of this event
   * @type OcaJobQueueItem
   */
  QueueItem: IOcaJobQueueItem;

  /**
   * Enum specifying what happened to the queue item.
   * @type OcaJobDisposition
   */
  Disposition: IOcaJobDisposition;

  /**
   * Optional disposition details
   * @type Uint8Array
   */
  DispositionDetails: Uint8Array;
}

export declare class OcaJobDisposedEventData
  implements IOcaJobDisposedEventData {
  /**
   * Notification data emitted by the **OcaTaskScheduler.RunQueueItemDisposed**
   * event.
   * @class OcaJobDisposedEventData
   */
  constructor(
    QueueItem: OcaJobQueueItem,
    Disposition: OcaJobDisposition,
    DispositionDetails: Uint8Array
  );

  /**
   * The job queue item that is the subject of this event
   * @type OcaJobQueueItem
   */
  QueueItem: OcaJobQueueItem;

  /**
   * Enum specifying what happened to the queue item.
   * @type OcaJobDisposition
   */
  Disposition: OcaJobDisposition;

  /**
   * Optional disposition details
   * @type Uint8Array
   */
  DispositionDetails: Uint8Array;
}
