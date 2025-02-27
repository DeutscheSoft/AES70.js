/*
 * This file has been generated.
 */

export class OcaLogFilter {
  /**
   * Filter for log entry retrieval.
   * @class OcaLogFilter
   */
  constructor(FunctionalCategory, SeverityRange, EmitterONo, TimestampRange) {
    /**
     * Application-specific value used for categorizing log records
     * @type number
     */
    this.FunctionalCategory = FunctionalCategory;
    /**
     * Range of severity levels to retrieve
     * @type OcaInterval<number>
     */
    this.SeverityRange = SeverityRange;
    /**
     * ONo of object that generated the log record, or zero to accept log
     * entries from all objects.
     * @type number
     */
    this.EmitterONo = EmitterONo;
    /**
     * Range of timestamps to be accepted.
     * @type OcaInterval<OcaTime>
     */
    this.TimestampRange = TimestampRange;
  }
}
