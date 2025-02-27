import {
  IOcaTimeDeliveryMechanism,
  OcaTimeDeliveryMechanism,
} from '../../types/OcaTimeDeliveryMechanism';
import {
  IOcaTimeReferenceType,
  OcaTimeReferenceType,
} from '../../types/OcaTimeReferenceType';
import { OcaTimeSourceAvailability } from '../../types/OcaTimeSourceAvailability';
import { OcaTimeSourceSyncStatus } from '../../types/OcaTimeSourceSyncStatus';
import { PropertyEvent } from '../property_event';
import { RemoteDevice } from '../remote_device';
import { OcaAgent } from './OcaAgent';

/**
 * A time source, internal or external, and the delivery method by which time
 * values reach this device.
 * @extends OcaAgent
 * @class OcaTimeSource
 */
export declare class OcaTimeSource extends OcaAgent {
  /**
   * This event is emitted whenever Availability changes.
   */
  OnAvailabilityChanged: PropertyEvent<OcaTimeSourceAvailability>;

  /**
   * This event is emitted whenever TimeDeliveryMechanism changes.
   */
  OnTimeDeliveryMechanismChanged: PropertyEvent<OcaTimeDeliveryMechanism>;

  /**
   * An alias for OnTimeDeliveryMechanismChanged
   */
  OnProtocolChanged: PropertyEvent<OcaTimeDeliveryMechanism>;
  /**
   * This event is emitted whenever ReferenceSDPDescription changes.
   */
  OnReferenceSDPDescriptionChanged: PropertyEvent<string>;

  /**
   * An alias for OnReferenceSDPDescriptionChanged
   */
  OnParametersChanged: PropertyEvent<string>;
  /**
   * This event is emitted whenever ReferenceType changes.
   */
  OnReferenceTypeChanged: PropertyEvent<OcaTimeReferenceType>;

  /**
   * This event is emitted whenever ReferenceID changes.
   */
  OnReferenceIDChanged: PropertyEvent<string>;

  /**
   * This event is emitted whenever SyncStatus changes.
   */
  OnSyncStatusChanged: PropertyEvent<OcaTimeSourceSyncStatus>;

  /**
   * This event is emitted whenever TimeDeliveryParameters changes.
   */
  OnTimeDeliveryParametersChanged: PropertyEvent<string>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the value of the **Availability** property.
   *
   * @method OcaTimeSource#GetAvailability
   * @returns {Promise<OcaTimeSourceAvailability>}
   *   A promise which resolves to a single value of type :class:`OcaTimeSourceAvailability`.
   */
  GetAvailability(): Promise<OcaTimeSourceAvailability>;

  /**
   * Gets the value of the **TimeDeliveryMechanism** property. Prior to v3 of
   * this class, was named **GetProtocol.**
   *
   * @method OcaTimeSource#GetTimeDeliveryMechanism
   * @returns {Promise<OcaTimeDeliveryMechanism>}
   *   A promise which resolves to a single value of type :class:`OcaTimeDeliveryMechanism`.
   */
  GetTimeDeliveryMechanism(): Promise<OcaTimeDeliveryMechanism>;

  /**
   * Gets the value of the **TimeDeliveryMechanism** property. Prior to v3 of
   * this class, was named **GetProtocol.**
   * An alias for GetTimeDeliveryMechanism.
   *
   * @method OcaTimeSource#GetProtocol
   * @returns {Promise<OcaTimeDeliveryMechanism>}
   *   A promise which resolves to a single value of type :class:`OcaTimeDeliveryMechanism`.
   */
  GetProtocol(): Promise<OcaTimeDeliveryMechanism>;

  /**
   * Sets the value of the **TimeDeliveryMechanism** property. Prior to v3 of
   * this class, was named **SetProtocol**.
   *
   * @method OcaTimeSource#SetTimeDeliveryMechanism
   * @param {IOcaTimeDeliveryMechanism} Mechanism
   *
   * @returns {Promise<void>}
   */
  SetTimeDeliveryMechanism(Mechanism: IOcaTimeDeliveryMechanism): Promise<void>;

  /**
   * Sets the value of the **TimeDeliveryMechanism** property. Prior to v3 of
   * this class, was named **SetProtocol**.
   * An alias for SetTimeDeliveryMechanism.
   *
   * @method OcaTimeSource#SetProtocol
   * @param {IOcaTimeDeliveryMechanism} Mechanism
   *
   * @returns {Promise<void>}
   */
  SetProtocol(Mechanism: IOcaTimeDeliveryMechanism): Promise<void>;

  /**
   * Gets the value of the **ReferenceSDPDescription** property.
   *
   * @method OcaTimeSource#GetReferenceSDPDescription
   * @returns {Promise<string>}
   *   A promise which resolves to a single value of type ``string``.
   */
  GetReferenceSDPDescription(): Promise<string>;

  /**
   * Gets the value of the **ReferenceSDPDescription** property.
   * An alias for GetReferenceSDPDescription.
   *
   * @method OcaTimeSource#GetParameters
   * @returns {Promise<string>}
   *   A promise which resolves to a single value of type ``string``.
   */
  GetParameters(): Promise<string>;

  /**
   * Sets the value of the **ReferenceSDPDescription** property. Optional
   * method, may not be supported in all implementations.
   *
   * @method OcaTimeSource#SetReferenceSDPDescription
   * @param {string} Parameters
   *
   * @returns {Promise<void>}
   */
  SetReferenceSDPDescription(Parameters: string): Promise<void>;

  /**
   * Sets the value of the **ReferenceSDPDescription** property. Optional
   * method, may not be supported in all implementations.
   * An alias for SetReferenceSDPDescription.
   *
   * @method OcaTimeSource#SetParameters
   * @param {string} Parameters
   *
   * @returns {Promise<void>}
   */
  SetParameters(Parameters: string): Promise<void>;

  /**
   * Gets the time reference type. **This method is deprecated.**
   *
   * @method OcaTimeSource#GetReferenceType
   * @returns {Promise<OcaTimeReferenceType>}
   *   A promise which resolves to a single value of type :class:`OcaTimeReferenceType`.
   */
  GetReferenceType(): Promise<OcaTimeReferenceType>;

  /**
   * Sets the time reference type. Optional method, may not be supported in all
   * implementations. **This method is deprecated.**
   *
   * @method OcaTimeSource#SetReferenceType
   * @param {IOcaTimeReferenceType} ReferenceType
   *
   * @returns {Promise<void>}
   */
  SetReferenceType(ReferenceType: IOcaTimeReferenceType): Promise<void>;

  /**
   * Gets the timing source ID. Optional method, not required for all time
   * reference types.
   *
   * @method OcaTimeSource#GetReferenceID
   * @returns {Promise<string>}
   *   A promise which resolves to a single value of type ``string``.
   */
  GetReferenceID(): Promise<string>;

  /**
   * Sets the time reference ID. Optional method, not required for all time
   * reference types.
   *
   * @method OcaTimeSource#SetReferenceID
   * @param {string} ID
   *
   * @returns {Promise<void>}
   */
  SetReferenceID(ID: string): Promise<void>;

  /**
   * Gets the synchronization status of this time source.
   *
   * @method OcaTimeSource#GetSyncStatus
   * @returns {Promise<OcaTimeSourceSyncStatus>}
   *   A promise which resolves to a single value of type :class:`OcaTimeSourceSyncStatus`.
   */
  GetSyncStatus(): Promise<OcaTimeSourceSyncStatus>;

  /**
   * Resets this time source. Initiates a new synchronization sequence.
   *
   * @method OcaTimeSource#Reset
   * @returns {Promise<void>}
   */
  Reset(): Promise<void>;

  /**
   * Gets the value of the **TimeDeliveryParameters** property. Optional method.
   *
   * @method OcaTimeSource#GetTimeDeliveryParameters
   * @returns {Promise<string>}
   *   A promise which resolves to a single value of type ``string``.
   */
  GetTimeDeliveryParameters(): Promise<string>;

  /**
   * Sets the value of the **TimeDeliveryParameters** property. Optional method.
   *
   * @method OcaTimeSource#SetTimeDeliveryParameters
   * @param {string} Record
   *
   * @returns {Promise<void>}
   */
  SetTimeDeliveryParameters(Record: string): Promise<void>;
}
