import { IOcaLockState } from '../../types/OcaLockState';
import { IOcaLogFilter } from '../../types/OcaLogFilter';
import { IOcaLogRecord, OcaLogRecord } from '../../types/OcaLogRecord';
import { Arguments } from '../arguments';
import { PropertyEvent } from '../property_event';
import { RemoteDevice } from '../remote_device';
import { OcaDataset } from './OcaDataset';

/**
 * A log object. Child of **OcaDataSet.**
 * @extends OcaDataset
 * @class OcaLog
 */
export declare class OcaLog extends OcaDataset {
  /**
   * This event is emitted whenever Enabled changes.
   */
  OnEnabledChanged: PropertyEvent<boolean>;

  /**
   * This event is emitted whenever SeverityThreshold changes.
   */
  OnSeverityThresholdChanged: PropertyEvent<number>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Adds a log entry.
   *
   * @method OcaLog#AddLogRecord
   * @param {IOcaLogRecord} Entry
   *
   * @returns {Promise<void>}
   */
  AddLogRecord(Entry: IOcaLogRecord): Promise<void>;

  /**
   * Gets the value of the **SeverityThreshold** property.
   *
   * @method OcaLog#GetSeverityThreshold
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetSeverityThreshold(): Promise<number>;

  /**
   * Sets the value of the **SeverityThreshold** property.
   *
   * @method OcaLog#SetSeverityThreshold
   * @param {number} Severity
   *
   * @returns {Promise<void>}
   */
  SetSeverityThreshold(Severity: number): Promise<void>;

  /**
   * Opens a log retrieval session. Sets the record filter that the retrievals
   * will use. Returns a handle for subsequent **RetrieveRecords(...)** calls to
   * use.
   *
   * @method OcaLog#OpenRetrievalSession
   * @param {IOcaLockState} LockType
   * @param {IOcaLogFilter} Filter
   *
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  OpenRetrievalSession(
    LockType: IOcaLockState,
    Filter: IOcaLogFilter
  ): Promise<number>;

  /**
   * Closes a log retrieval session.
   *
   * @method OcaLog#CloseRetrievalSession
   * @param {number} Handle
   *
   * @returns {Promise<void>}
   */
  CloseRetrievalSession(Handle: number): Promise<void>;

  /**
   * In a given log reading session, retrieves the next log record(s) that match
   * the session's retrieval criteria. There must have an open log retrieval
   * session created by calling OpenLogRetrievalSession(...). This call
   * specifies the retrieval criteria. Returns **.EndOfData**=TRUE when there
   * are no more records to retrieve.
   * The return values of this method are
   *
   * - EndOfData of type ``boolean``
   * - LengthOfRequestedData of type ``number|BigInt``
   * - Records of type ``IOcaLogRecord[]``
   *
   * @method OcaLog#RetrieveRecords
   * @param {number} Handle
   * @param {number|BigInt} RecStartNo
   * @param {number} RecCount
   * @param {number|BigInt} MaxDataLength
   *
   * @returns {Promise<Arguments<boolean,number|BigInt,OcaLogRecord[]>>}
   */
  RetrieveRecords(
    Handle: number,
    RecStartNo: number | BigInt,
    RecCount: number,
    MaxDataLength: number | BigInt
  ): Promise<Arguments<[boolean, number | BigInt, OcaLogRecord[]]>>;

  /**
   * Gets the value of the **Enabled** property.
   *
   * @method OcaLog#GetEnabled
   * @returns {Promise<boolean>}
   *   A promise which resolves to a single value of type ``boolean``.
   */
  GetEnabled(): Promise<boolean>;

  /**
   * Sets the value of the **Enabled** property.
   *
   * @method OcaLog#SetEnabled
   * @param {boolean} Enabled
   *
   * @returns {Promise<void>}
   */
  SetEnabled(Enabled: boolean): Promise<void>;
}
