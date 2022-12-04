import { OcaString } from '../../OCP1/OcaString.js';
import { OcaTimeProtocol } from '../../OCP1/OcaTimeProtocol.js';
import { OcaTimeReferenceType } from '../../OCP1/OcaTimeReferenceType.js';
import { OcaTimeSourceAvailability } from '../../OCP1/OcaTimeSourceAvailability.js';
import { OcaTimeSourceSyncStatus } from '../../OCP1/OcaTimeSourceSyncStatus.js';
import { make_control_class } from '../make_control_class.js';
import { OcaAgent } from './OcaAgent.js';

/**
 * A time source, internal or external. See RFC 7273 for a detailed discussion of time sources.
 * @extends OcaAgent
 * @class OcaTimeSource
 */
export const OcaTimeSource = make_control_class(
  'OcaTimeSource',
  3,
  '\u0001\u0002\u0010',
  1,
  OcaAgent,
  [
    ['GetAvailability', 3, 1, [], [OcaTimeSourceAvailability]],
    ['GetProtocol', 3, 2, [], [OcaTimeProtocol]],
    ['SetProtocol', 3, 3, [OcaTimeProtocol], []],
    ['GetParameters', 3, 4, [], [OcaString]],
    ['SetParameters', 3, 5, [OcaString], []],
    ['GetReferenceType', 3, 6, [], [OcaTimeReferenceType]],
    ['SetReferenceType', 3, 7, [OcaTimeReferenceType], []],
    ['GetReferenceID', 3, 8, [], [OcaString]],
    ['SetReferenceID', 3, 9, [OcaString], []],
    ['GetSyncStatus', 3, 10, [], [OcaTimeSourceSyncStatus]],
    ['Reset', 3, 11, [], []],
  ],
  [
    ['Availability', [OcaTimeSourceAvailability], 3, 1, false, false, null],
    ['Protocol', [OcaTimeProtocol], 3, 2, false, false, null],
    ['Parameters', [OcaString], 3, 3, false, false, null],
    ['ReferenceType', [OcaTimeReferenceType], 3, 4, false, false, null],
    ['ReferenceID', [OcaString], 3, 5, false, false, null],
    ['SyncStatus', [OcaTimeSourceSyncStatus], 3, 6, false, false, null],
  ],
  []
);

/**
 * Gets the value of the  **Availability** property. The return value indicates whether the value was successfully retrieved.
 *
 * @method OcaTimeSource#GetAvailability
 * @returns {Promise<OcaTimeSourceAvailability>}
 *   A promise which resolves to a single value of type :class:`OcaTimeSourceAvailability`.
 */
/**
 * Gets the value of the  **Protocol** property. The return value indicates whether the value was successfully retrieved.
 *
 * @method OcaTimeSource#GetProtocol
 * @returns {Promise<OcaTimeProtocol>}
 *   A promise which resolves to a single value of type :class:`OcaTimeProtocol`.
 */
/**
 * Sets the value of the  **Protocol** property. The return value indicates whether the value was successfully set.
 *
 * @method OcaTimeSource#SetProtocol
 * @param {IOcaTimeProtocol} Protocol
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value of the  **Parameters** property. The return value indicates whether the value was successfully retrieved.
 *
 * @method OcaTimeSource#GetParameters
 * @returns {Promise<string>}
 *   A promise which resolves to a single value of type ``string``.
 */
/**
 * Sets the value of the  **Parameters** property. The return value indicates whether the value was successfully set. Optional method, may not be supported in all implementations.
 *
 * @method OcaTimeSource#SetParameters
 * @param {string} Parameters
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the time reference type. The return value indicates whether the value was successfully retrieved.
 *
 * @method OcaTimeSource#GetReferenceType
 * @returns {Promise<OcaTimeReferenceType>}
 *   A promise which resolves to a single value of type :class:`OcaTimeReferenceType`.
 */
/**
 * Sets the time reference type. The return value indicates whether the value was successfully set. Optional method, may not be supported in all implementations.
 *
 * @method OcaTimeSource#SetReferenceType
 * @param {IOcaTimeReferenceType} ReferenceType
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the timing source ID. The return value indicates whether the value was successfully retrieved. Optional method, not required for all time reference types.
 *
 * @method OcaTimeSource#GetReferenceID
 * @returns {Promise<string>}
 *   A promise which resolves to a single value of type ``string``.
 */
/**
 * Sets the time reference ID. The return value indicates whether the ID was successfully set. Optional method, not required for all time reference types.
 *
 * @method OcaTimeSource#SetReferenceID
 * @param {string} ID
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the synchronization status of this time source. The return value indicates whether the value was successfully retrieved.
 *
 * @method OcaTimeSource#GetSyncStatus
 * @returns {Promise<OcaTimeSourceSyncStatus>}
 *   A promise which resolves to a single value of type :class:`OcaTimeSourceSyncStatus`.
 */
/**
 * Resets this time source. Initiates a new synchronization sequence. The return value indicates whether the reset was successful.
 *
 * @method OcaTimeSource#Reset
 * @returns {Promise<void>}
 */
/**
 * This event is emitted when the property Availability changes in the remote object.
 * The property ``Availability`` is described in the AES70 standard as follows.
 * Availability of this time source.
 *
 * @member {PropertyEvent<OcaTimeSourceAvailability>} OcaTimeSource#OnAvailabilityChanged
 */
/**
 * This event is emitted when the property Protocol changes in the remote object.
 * The property ``Protocol`` is described in the AES70 standard as follows.
 * Time transport protocol used by this time source
 *
 * @member {PropertyEvent<OcaTimeProtocol>} OcaTimeSource#OnProtocolChanged
 */
/**
 * This event is emitted when the property Parameters changes in the remote object.
 * The property ``Parameters`` is described in the AES70 standard as follows.
 * Parameters (identifiers, modifiers, etc.) for this time source .
 * Content is an SDP timestamp reference specification as defined in
 * RFC7273, section 4.8.
 *
 * @member {PropertyEvent<string>} OcaTimeSource#OnParametersChanged
 */
/**
 * This event is emitted when the property ReferenceType changes in the remote object.
 * The property ``ReferenceType`` is described in the AES70 standard as follows.
 * Type of time reference to which this time source is synced, if any.
 *
 * @member {PropertyEvent<OcaTimeReferenceType>} OcaTimeSource#OnReferenceTypeChanged
 */
/**
 * This event is emitted when the property ReferenceID changes in the remote object.
 * The property ``ReferenceID`` is described in the AES70 standard as follows.
 * Identifier of reference to which this time source is synced, if any.
 * Not needed for all reference types.
 *
 * @member {PropertyEvent<string>} OcaTimeSource#OnReferenceIDChanged
 */
/**
 * This event is emitted when the property SyncStatus changes in the remote object.
 * The property ``SyncStatus`` is described in the AES70 standard as follows.
 * Synchronization status of this time source.
 *
 * @member {PropertyEvent<OcaTimeSourceSyncStatus>} OcaTimeSource#OnSyncStatusChanged
 */
