/*
 * This file has been generated.
 */

export class OcaLogRecord {
  /**
   * Format of a log record. Payload format is application-specific; header data
   * is standard.
   * @class OcaLogRecord
   */
  constructor(FunctionalCategory, Severity, EmitterONo, Timestamp, Payload) {
    /**
     * Application-specific value used for categorizing log records for
     * selective retrieval.
     * @type number
     */
    this.FunctionalCategory = FunctionalCategory;
    /**
     * Severity of log record. Recommended values are the same as those for the
     * Syslog format as specified by [RFC 5424]; see also {Wiki-004}.
     * @type number
     */
    this.Severity = Severity;
    /**
     * ONo of object that generated the log record.
     * @type number
     */
    this.EmitterONo = EmitterONo;
    /**
     * Date/time the log record was generated.
     * @type OcaTime
     */
    this.Timestamp = Timestamp;
    /**
     * Device- or application- specific content of the log record.
     * @type Uint8Array
     */
    this.Payload = Payload;
  }
}
