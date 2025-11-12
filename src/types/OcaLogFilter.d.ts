/*
 * This file has been generated.
 */
import { IOcaInterval, OcaInterval } from './OcaInterval.js';
import { IOcaTime, OcaTime } from './OcaTime.js';

export declare interface IOcaLogFilter {
  /**
   * Application-specific value used for categorizing log records
   * @type number
   */
  FunctionalCategory: number;

  /**
   * Range of severity levels to retrieve
   * @type OcaInterval<number>
   */
  SeverityRange: IOcaInterval<number>;

  /**
   * ONo of object that generated the log record, or zero to accept log entries
   * from all objects.
   * @type number
   */
  EmitterONo: number;

  /**
   * Range of timestamps to be accepted.
   * @type OcaInterval<OcaTime>
   */
  TimestampRange: IOcaInterval<IOcaTime>;
}

export declare class OcaLogFilter implements IOcaLogFilter {
  /**
   * Filter for log entry retrieval.
   * @class OcaLogFilter
   */
  constructor(
    FunctionalCategory: number,
    SeverityRange: OcaInterval<number>,
    EmitterONo: number,
    TimestampRange: OcaInterval<OcaTime>
  );

  /**
   * Application-specific value used for categorizing log records
   * @type number
   */
  FunctionalCategory: number;

  /**
   * Range of severity levels to retrieve
   * @type OcaInterval<number>
   */
  SeverityRange: OcaInterval<number>;

  /**
   * ONo of object that generated the log record, or zero to accept log entries
   * from all objects.
   * @type number
   */
  EmitterONo: number;

  /**
   * Range of timestamps to be accepted.
   * @type OcaInterval<OcaTime>
   */
  TimestampRange: OcaInterval<OcaTime>;
}
