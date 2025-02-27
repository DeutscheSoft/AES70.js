import { OcaString } from '../../OCP1/OcaString.js';
import { OcaTimeDeliveryMechanism } from '../../OCP1/OcaTimeDeliveryMechanism.js';
import { OcaTimeReferenceType } from '../../OCP1/OcaTimeReferenceType.js';
import { OcaTimeSourceAvailability } from '../../OCP1/OcaTimeSourceAvailability.js';
import { OcaTimeSourceSyncStatus } from '../../OCP1/OcaTimeSourceSyncStatus.js';
import { make_control_class } from '../make_control_class.js';
import { OcaAgent } from './OcaAgent.js';

/**
 * A time source, internal or external, and the delivery method by which time
 * values reach this device.
 * @extends OcaAgent
 * @class OcaTimeSource
 */
export const OcaTimeSource = make_control_class(
  'OcaTimeSource',
  3,
  '\u0001\u0002\u0010',
  3,
  OcaAgent,
  [
    ['GetAvailability', 3, 1, [], [OcaTimeSourceAvailability]],
    [
      'GetTimeDeliveryMechanism',
      3,
      2,
      [],
      [OcaTimeDeliveryMechanism],
      ['GetProtocol'],
    ],
    [
      'SetTimeDeliveryMechanism',
      3,
      3,
      [OcaTimeDeliveryMechanism],
      [],
      ['SetProtocol'],
    ],
    ['GetReferenceSDPDescription', 3, 4, [], [OcaString], ['GetParameters']],
    ['SetReferenceSDPDescription', 3, 5, [OcaString], [], ['SetParameters']],
    ['GetReferenceType', 3, 6, [], [OcaTimeReferenceType]],
    ['SetReferenceType', 3, 7, [OcaTimeReferenceType], []],
    ['GetReferenceID', 3, 8, [], [OcaString]],
    ['SetReferenceID', 3, 9, [OcaString], []],
    ['GetSyncStatus', 3, 10, [], [OcaTimeSourceSyncStatus]],
    ['Reset', 3, 11, [], []],
    ['GetTimeDeliveryParameters', 3, 12, [], [OcaString]],
    ['SetTimeDeliveryParameters', 3, 13, [OcaString], []],
  ],
  [
    ['Availability', [OcaTimeSourceAvailability], 3, 1, false, false, null],
    [
      'TimeDeliveryMechanism',
      [OcaTimeDeliveryMechanism],
      3,
      2,
      false,
      false,
      ['Protocol'],
    ],
    [
      'ReferenceSDPDescription',
      [OcaString],
      3,
      3,
      false,
      false,
      ['Parameters'],
    ],
    ['ReferenceType', [OcaTimeReferenceType], 3, 4, false, false, null],
    ['ReferenceID', [OcaString], 3, 5, false, false, null],
    ['SyncStatus', [OcaTimeSourceSyncStatus], 3, 6, false, false, null],
    ['TimeDeliveryParameters', [OcaString], 3, 7, false, false, null],
  ],
  []
);

/**
 * Gets the value of the **Availability** property.
 *
 * @method OcaTimeSource#GetAvailability
 * @returns {Promise<OcaTimeSourceAvailability>}
 *   A promise which resolves to a single value of type :class:`OcaTimeSourceAvailability`.
 */
/**
 * Gets the value of the **TimeDeliveryMechanism** property. Prior to v3 of this
 * class, was named **GetProtocol.**
 *
 * @method OcaTimeSource#GetTimeDeliveryMechanism
 * @returns {Promise<OcaTimeDeliveryMechanism>}
 *   A promise which resolves to a single value of type :class:`OcaTimeDeliveryMechanism`.
 */
/**
 * Gets the value of the **TimeDeliveryMechanism** property. Prior to v3 of this
 * class, was named **GetProtocol.**
 * An alias for GetTimeDeliveryMechanism.
 *
 * @method OcaTimeSource#GetProtocol
 * @returns {Promise<OcaTimeDeliveryMechanism>}
 *   A promise which resolves to a single value of type :class:`OcaTimeDeliveryMechanism`.
 */
/**
 * Sets the value of the **TimeDeliveryMechanism** property. Prior to v3 of this
 * class, was named **SetProtocol**.
 *
 * @method OcaTimeSource#SetTimeDeliveryMechanism
 * @param {IOcaTimeDeliveryMechanism} Mechanism
 *
 * @returns {Promise<void>}
 */
/**
 * Sets the value of the **TimeDeliveryMechanism** property. Prior to v3 of this
 * class, was named **SetProtocol**.
 * An alias for SetTimeDeliveryMechanism.
 *
 * @method OcaTimeSource#SetProtocol
 * @param {IOcaTimeDeliveryMechanism} Mechanism
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value of the **ReferenceSDPDescription** property.
 *
 * @method OcaTimeSource#GetReferenceSDPDescription
 * @returns {Promise<string>}
 *   A promise which resolves to a single value of type ``string``.
 */
/**
 * Gets the value of the **ReferenceSDPDescription** property.
 * An alias for GetReferenceSDPDescription.
 *
 * @method OcaTimeSource#GetParameters
 * @returns {Promise<string>}
 *   A promise which resolves to a single value of type ``string``.
 */
/**
 * Sets the value of the **ReferenceSDPDescription** property. Optional method,
 * may not be supported in all implementations.
 *
 * @method OcaTimeSource#SetReferenceSDPDescription
 * @param {string} Parameters
 *
 * @returns {Promise<void>}
 */
/**
 * Sets the value of the **ReferenceSDPDescription** property. Optional method,
 * may not be supported in all implementations.
 * An alias for SetReferenceSDPDescription.
 *
 * @method OcaTimeSource#SetParameters
 * @param {string} Parameters
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the time reference type. **This method is deprecated.**
 *
 * @method OcaTimeSource#GetReferenceType
 * @returns {Promise<OcaTimeReferenceType>}
 *   A promise which resolves to a single value of type :class:`OcaTimeReferenceType`.
 */
/**
 * Sets the time reference type. Optional method, may not be supported in all
 * implementations. **This method is deprecated.**
 *
 * @method OcaTimeSource#SetReferenceType
 * @param {IOcaTimeReferenceType} ReferenceType
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the timing source ID. Optional method, not required for all time
 * reference types.
 *
 * @method OcaTimeSource#GetReferenceID
 * @returns {Promise<string>}
 *   A promise which resolves to a single value of type ``string``.
 */
/**
 * Sets the time reference ID. Optional method, not required for all time
 * reference types.
 *
 * @method OcaTimeSource#SetReferenceID
 * @param {string} ID
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the synchronization status of this time source.
 *
 * @method OcaTimeSource#GetSyncStatus
 * @returns {Promise<OcaTimeSourceSyncStatus>}
 *   A promise which resolves to a single value of type :class:`OcaTimeSourceSyncStatus`.
 */
/**
 * Resets this time source. Initiates a new synchronization sequence.
 *
 * @method OcaTimeSource#Reset
 * @returns {Promise<void>}
 */
/**
 * Gets the value of the **TimeDeliveryParameters** property. Optional method.
 *
 * @method OcaTimeSource#GetTimeDeliveryParameters
 * @returns {Promise<string>}
 *   A promise which resolves to a single value of type ``string``.
 */
/**
 * Sets the value of the **TimeDeliveryParameters** property. Optional method.
 *
 * @method OcaTimeSource#SetTimeDeliveryParameters
 * @param {string} Record
 *
 * @returns {Promise<void>}
 */
/**
 * This event is emitted when the property ``Availability`` changes in the remote object.
 * The property ``Availability`` is described in the AES70 standard as follows.
 * Availability of this time source.
 *
 * @member {PropertyEvent<OcaTimeSourceAvailability>} OcaTimeSource#OnAvailabilityChanged
 */
/**
 * This event is emitted when the property ``TimeDeliveryMechanism`` changes in the remote object.
 * The property ``TimeDeliveryMechanism`` is described in the AES70 standard as follows.
 * Time delivery mechanism used by this time source. Named **Protocol** prior to
 * v3 of this class.
 *
 * @member {PropertyEvent<OcaTimeDeliveryMechanism>} OcaTimeSource#OnTimeDeliveryMechanismChanged
 */
/**
 * An alias for OnTimeDeliveryMechanismChanged
 *
 * @member {PropertyEvent<OcaTimeDeliveryMechanism>} OcaTimeSource#OnProtocolChanged
 */
/**
 * This event is emitted when the property ``ReferenceSDPDescription`` changes in the remote object.
 * The property ``ReferenceSDPDescription`` is described in the AES70 standard as follows.
 * Parameters (identifiers, modifiers, etc.) for this time source . Content is
 * an SDP time reference specification as defined in RFC7273, section 4.8.
 *
 * @member {PropertyEvent<string>} OcaTimeSource#OnReferenceSDPDescriptionChanged
 */
/**
 * An alias for OnReferenceSDPDescriptionChanged
 *
 * @member {PropertyEvent<string>} OcaTimeSource#OnParametersChanged
 */
/**
 * This event is emitted when the property ``ReferenceType`` changes in the remote object.
 * The property ``ReferenceType`` is described in the AES70 standard as follows.
 * Type of time reference to which this time source is synchronized, if any.
 * **This property is deprecated.**
 *
 * @member {PropertyEvent<OcaTimeReferenceType>} OcaTimeSource#OnReferenceTypeChanged
 */
/**
 * This event is emitted when the property ``ReferenceID`` changes in the remote object.
 * The property ``ReferenceID`` is described in the AES70 standard as follows.
 * Identifier of reference to which this time source is synchronized, if any.
 * Not needed for all time reference types. **This property is deprecated.**
 *
 * @member {PropertyEvent<string>} OcaTimeSource#OnReferenceIDChanged
 */
/**
 * This event is emitted when the property ``SyncStatus`` changes in the remote object.
 * The property ``SyncStatus`` is described in the AES70 standard as follows.
 * Synchronization status of this time source.
 *
 * @member {PropertyEvent<OcaTimeSourceSyncStatus>} OcaTimeSource#OnSyncStatusChanged
 */
/**
 * This event is emitted when the property ``TimeDeliveryParameters`` changes in the remote object.
 * The property ``TimeDeliveryParameters`` is described in the AES70 standard as follows.
 * External parameter record for time delivery parameters. If
 * **TimeDeliveryMechanism**=**StreamEndpoint**, then the schema of this
 * parameter record shall be defined by the datatype
 * **OcaTimeDeliveryParameters_StreamEndpoint**. Otherwise, the schema shall
 * depend on the time delivery method chosen, and is out of scope of AES70-2.
 *
 * @member {PropertyEvent<string>} OcaTimeSource#OnTimeDeliveryParametersChanged
 */
