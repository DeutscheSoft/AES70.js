import { make_control_class } from './Base.js';
import { OcaAgent } from './OcaAgent.js';
import { OcaString } from '../OCP1/OcaString.js';
import { OcaTimeProtocol } from '../OCP1/OcaTimeProtocol.js';
import { OcaTimeReferenceType } from '../OCP1/OcaTimeReferenceType.js';
import { OcaTimeSourceAvailability } from '../OCP1/OcaTimeSourceAvailability.js';
import { OcaTimeSourceSyncStatus } from '../OCP1/OcaTimeSourceSyncStatus.js';
import { OcaUint16 } from '../OCP1/OcaUint16.js';
import { String16 } from '../OCP1/String16.js';

/**
 * A time source, internal or external. See RFC 7273 for a detailed
 * discussion of time sources.
 * @extends RemoteControlClasses.OcaAgent
 * @class OcaTimeSource
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the value of the <b>Availability </b>property. The return value
 * indicates whether the value was successfully retrieved.
 * @method RemoteControlClasses.OcaTimeSource#GetAvailability
 * @returns {Promise<OcaTimeSourceAvailability>}
 */
/**
 * Gets the value of the <b>Protocol </b>property. The return value
 * indicates whether the value was successfully retrieved.
 * @method RemoteControlClasses.OcaTimeSource#GetProtocol
 * @returns {Promise<OcaTimeProtocol>}
 */
/**
 * Sets the value of the <b>Protocol </b>property. The return value
 * indicates whether the value was successfully set.
 * @method RemoteControlClasses.OcaTimeSource#SetProtocol
 * @param Protocol {OcaTimeProtocol}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the <b>Parameters </b>property. The return value
 * indicates whether the value was successfully retrieved.
 * @method RemoteControlClasses.OcaTimeSource#GetParameters
 * @returns {Promise<OcaSDPString>}
 */
/**
 * Sets the value of the <b>Parameters </b>property. The return value
 * indicates whether the value was successfully set. Optional method, may
 * not be supported in all implementations.
 * @method RemoteControlClasses.OcaTimeSource#SetParameters
 * @param Parameters {OcaSDPString}
 *
 * @returns {Promise}
 */
/**
 * Gets the time reference type. The return value indicates whether the
 * value was successfully retrieved.
 * @method RemoteControlClasses.OcaTimeSource#GetReferenceType
 * @returns {Promise<OcaTimeReferenceType>}
 */
/**
 * Sets the time reference type. The return value indicates whether the
 * value was successfully set. Optional method, may not be supported in
 * all implementations.
 * @method RemoteControlClasses.OcaTimeSource#SetReferenceType
 * @param ReferenceType {OcaTimeReferenceType}
 *
 * @returns {Promise}
 */
/**
 * Gets the timing source ID. The return value indicates whether the
 * value was successfully retrieved. Optional method, not required for
 * all time reference types.
 * @method RemoteControlClasses.OcaTimeSource#GetReferenceID
 * @returns {Promise<OcaString>}
 */
/**
 * Sets the time reference ID. The return value indicates whether the ID
 * was successfully set. Optional method, not required for all time
 * reference types.
 * @method RemoteControlClasses.OcaTimeSource#SetReferenceID
 * @param ID {OcaString}
 *
 * @returns {Promise}
 */
/**
 * Gets the synchronization status of this time source. The return value
 * indicates whether the value was successfully retrieved.
 * @method RemoteControlClasses.OcaTimeSource#GetSyncStatus
 * @returns {Promise<OcaTimeSourceSyncStatus>}
 */
/**
 * Resets this time source. Initiates a new synchronization sequence. The
 * return value indicates whether the reset was successful.
 * @method RemoteControlClasses.OcaTimeSource#Reset
 * @returns {Promise}
 */
/**
 * Availability of this time source.
 * @member RemoteControlClasses.OcaTimeSource#OnAvailabilityChanged {PropertyEvent<OcaTimeSourceAvailability>} - This event is emitted when Availability changes in the remote object.
 */
/**
 * Time transport protocol used by this time source
 * @member RemoteControlClasses.OcaTimeSource#OnProtocolChanged {PropertyEvent<OcaTimeProtocol>} - This event is emitted when Protocol changes in the remote object.
 */
/**
 * Parameters (identifiers, modifiers, etc.) for this time source .
 * Content is an SDP timestamp reference specification as defined in
 * RFC7273, section 4.8.
 * @member RemoteControlClasses.OcaTimeSource#OnParametersChanged {PropertyEvent<OcaSDPString>} - This event is emitted when Parameters changes in the remote object.
 */
/**
 * Type of time reference to which this time source is synced, if any.
 * @member RemoteControlClasses.OcaTimeSource#OnReferenceTypeChanged {PropertyEvent<OcaTimeReferenceType>} - This event is emitted when ReferenceType changes in the remote object.
 */
/**
 * Identifier of reference to which this time source is synced, if any.
 * Not needed for all reference types.
 * @member RemoteControlClasses.OcaTimeSource#OnReferenceIDChanged {PropertyEvent<OcaString>} - This event is emitted when ReferenceID changes in the remote object.
 */
/**
 * Synchronization status of this time source.
 * @member RemoteControlClasses.OcaTimeSource#OnSyncStatusChanged {PropertyEvent<OcaTimeSourceSyncStatus>} - This event is emitted when SyncStatus changes in the remote object.
 */
