/*
 * This file has been generated.
 */
import { IOcaTime, OcaTime } from './OcaTime';

export declare interface IOcaLogRecord {
  /**
   * Application-specific value used for categorizing log records for selective
   * retrieval.
   * @type number
   */
  FunctionalCategory: number;

  /**
   * Severity of log record. Recommended values are the same as those for the
   * Syslog format as specified by [RFC 5424]; see also {Wiki-004}.
   * @type number
   */
  Severity: number;

  /**
   * ONo of object that generated the log record.
   * @type number
   */
  EmitterONo: number;

  /**
   * Date/time the log record was generated.
   * @type OcaTime
   */
  Timestamp: IOcaTime;

  /**
   * Device- or application- specific content of the log record.
   * @type Uint8Array
   */
  Payload: Uint8Array;
}

export declare class OcaLogRecord implements IOcaLogRecord {
  /**
   * Format of a log record. Payload format is application-specific; header data
   * is standard.
   * @class OcaLogRecord
   */
  constructor(
    FunctionalCategory: number,
    Severity: number,
    EmitterONo: number,
    Timestamp: OcaTime,
    Payload: Uint8Array
  );

  /**
   * Application-specific value used for categorizing log records for selective
   * retrieval.
   * @type number
   */
  FunctionalCategory: number;

  /**
   * Severity of log record. Recommended values are the same as those for the
   * Syslog format as specified by [RFC 5424]; see also {Wiki-004}.
   * @type number
   */
  Severity: number;

  /**
   * ONo of object that generated the log record.
   * @type number
   */
  EmitterONo: number;

  /**
   * Date/time the log record was generated.
   * @type OcaTime
   */
  Timestamp: OcaTime;

  /**
   * Device- or application- specific content of the log record.
   * @type Uint8Array
   */
  Payload: Uint8Array;
}
