/*
 * This file has been generated.
 */

export class OcaJobDisposedEventData {
  /**
   * Notification data emitted by the **OcaTaskScheduler.RunQueueItemDisposed**
   * event.
   * @class OcaJobDisposedEventData
   */
  constructor(QueueItem, Disposition, DispositionDetails) {
    /**
     * The job queue item that is the subject of this event
     * @type OcaJobQueueItem
     */
    this.QueueItem = QueueItem;
    /**
     * Enum specifying what happened to the queue item.
     * @type OcaJobDisposition
     */
    this.Disposition = Disposition;
    /**
     * Optional disposition details
     * @type Uint8Array
     */
    this.DispositionDetails = DispositionDetails;
  }
}
