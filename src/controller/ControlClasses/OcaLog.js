import { OcaBoolean } from '../../OCP1/OcaBoolean.js';
import { OcaInt32 } from '../../OCP1/OcaInt32.js';
import { OcaList } from '../../OCP1/OcaList.js';
import { OcaLockState } from '../../OCP1/OcaLockState.js';
import { OcaLogFilter } from '../../OCP1/OcaLogFilter.js';
import { OcaLogRecord } from '../../OCP1/OcaLogRecord.js';
import { OcaUint16 } from '../../OCP1/OcaUint16.js';
import { OcaUint32 } from '../../OCP1/OcaUint32.js';
import { OcaUint64 } from '../../OCP1/OcaUint64.js';
import { make_control_class } from '../make_control_class.js';
import { OcaDataset } from './OcaDataset.js';

/**
 * A log object. Child of **OcaDataSet.**
 * @extends OcaDataset
 * @class OcaLog
 */
export const OcaLog = make_control_class(
  'OcaLog',
  3,
  '\u0001\u0005\u0001',
  1,
  OcaDataset,
  [
    ['AddLogRecord', 3, 1, [OcaLogRecord], []],
    ['GetSeverityThreshold', 3, 2, [], [OcaInt32]],
    ['SetSeverityThreshold', 3, 3, [OcaInt32], []],
    ['OpenRetrievalSession', 3, 4, [OcaLockState, OcaLogFilter], [OcaUint32]],
    ['CloseRetrievalSession', 3, 5, [OcaUint32], []],
    [
      'RetrieveRecords',
      3,
      6,
      [OcaUint32, OcaUint64, OcaUint16, OcaUint64],
      [OcaBoolean, OcaUint64, OcaList(OcaLogRecord)],
    ],
    ['GetEnabled', 3, 7, [], [OcaBoolean]],
    ['SetEnabled', 3, 8, [OcaBoolean], []],
  ],
  [
    ['Enabled', [OcaBoolean], 3, 1, false, false, null],
    ['SeverityThreshold', [OcaInt32], 3, 2, false, false, null],
  ],
  []
);

/**
 * Adds a log entry.
 *
 * @method OcaLog#AddLogRecord
 * @param {IOcaLogRecord} Entry
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value of the **SeverityThreshold** property.
 *
 * @method OcaLog#GetSeverityThreshold
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Sets the value of the **SeverityThreshold** property.
 *
 * @method OcaLog#SetSeverityThreshold
 * @param {number} Severity
 *
 * @returns {Promise<void>}
 */
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
/**
 * Closes a log retrieval session.
 *
 * @method OcaLog#CloseRetrievalSession
 * @param {number} Handle
 *
 * @returns {Promise<void>}
 */
/**
 * In a given log reading session, retrieves the next log record(s) that match
 * the session's retrieval criteria. There must have an open log retrieval
 * session created by calling OpenLogRetrievalSession(...). This call specifies
 * the retrieval criteria. Returns **.EndOfData**=TRUE when there are no more
 * records to retrieve.
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
/**
 * Gets the value of the **Enabled** property.
 *
 * @method OcaLog#GetEnabled
 * @returns {Promise<boolean>}
 *   A promise which resolves to a single value of type ``boolean``.
 */
/**
 * Sets the value of the **Enabled** property.
 *
 * @method OcaLog#SetEnabled
 * @param {boolean} Enabled
 *
 * @returns {Promise<void>}
 */
/**
 * This event is emitted when the property ``Enabled`` changes in the remote object.
 * The property ``Enabled`` is described in the AES70 standard as follows.
 * TRUE if and only if logging is enabled.
 *
 * @member {PropertyEvent<boolean>} OcaLog#OnEnabledChanged
 */
/**
 * This event is emitted when the property ``SeverityThreshold`` changes in the remote object.
 * The property ``SeverityThreshold`` is described in the AES70 standard as follows.
 * Log input filter: Only events whose severity level designator values are at
 * or below this threshold will be logged. Note: **OcaLogSeverityLevel** is
 * defined to follow the Syslog format as described in [RFC 5424]. In [RFC
 * 5424], higher importance of an event is represented by a lower numeric value
 * of its Severity Level.
 *
 * @member {PropertyEvent<number>} OcaLog#OnSeverityThresholdChanged
 */
