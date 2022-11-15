import { IOcaTimeProtocol, OcaTimeProtocol } from '../../types/OcaTimeProtocol';
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
 * A time source, internal or external. See RFC 7273 for a detailed discussion of time sources.
 * @extends OcaAgent
 * @class OcaTimeSource
 */
export declare class OcaTimeSource extends OcaAgent {
  /**
   * This event is emitted whenever Availability changes.
   */
  OnAvailabilityChanged: PropertyEvent<OcaTimeSourceAvailability>;

  /**
   * This event is emitted whenever Protocol changes.
   */
  OnProtocolChanged: PropertyEvent<OcaTimeProtocol>;

  /**
   * This event is emitted whenever Parameters changes.
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

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the value of the  **Availability** property. The return value indicates whether the value was successfully retrieved.
   *
   * @method OcaTimeSource#GetAvailability
   * @returns {Promise<OcaTimeSourceAvailability>}
   *   A promise which resolves to a single value of type :class:`OcaTimeSourceAvailability`.
   */
  GetAvailability(): Promise<OcaTimeSourceAvailability>;

  /**
   * Gets the value of the  **Protocol** property. The return value indicates whether the value was successfully retrieved.
   *
   * @method OcaTimeSource#GetProtocol
   * @returns {Promise<OcaTimeProtocol>}
   *   A promise which resolves to a single value of type :class:`OcaTimeProtocol`.
   */
  GetProtocol(): Promise<OcaTimeProtocol>;

  /**
   * Sets the value of the  **Protocol** property. The return value indicates whether the value was successfully set.
   *
   * @method OcaTimeSource#SetProtocol
   * @param {OcaTimeProtocol} Protocol
   *
   * @returns {Promise<void>}
   */
  SetProtocol(Protocol: IOcaTimeProtocol): Promise<void>;

  /**
   * Gets the value of the  **Parameters** property. The return value indicates whether the value was successfully retrieved.
   *
   * @method OcaTimeSource#GetParameters
   * @returns {Promise<string>}
   *   A promise which resolves to a single value of type ``string``.
   */
  GetParameters(): Promise<string>;

  /**
   * Sets the value of the  **Parameters** property. The return value indicates whether the value was successfully set. Optional method, may not be supported in all implementations.
   *
   * @method OcaTimeSource#SetParameters
   * @param {string} Parameters
   *
   * @returns {Promise<void>}
   */
  SetParameters(Parameters: string): Promise<void>;

  /**
   * Gets the time reference type. The return value indicates whether the value was successfully retrieved.
   *
   * @method OcaTimeSource#GetReferenceType
   * @returns {Promise<OcaTimeReferenceType>}
   *   A promise which resolves to a single value of type :class:`OcaTimeReferenceType`.
   */
  GetReferenceType(): Promise<OcaTimeReferenceType>;

  /**
   * Sets the time reference type. The return value indicates whether the value was successfully set. Optional method, may not be supported in all implementations.
   *
   * @method OcaTimeSource#SetReferenceType
   * @param {OcaTimeReferenceType} ReferenceType
   *
   * @returns {Promise<void>}
   */
  SetReferenceType(ReferenceType: IOcaTimeReferenceType): Promise<void>;

  /**
   * Gets the timing source ID. The return value indicates whether the value was successfully retrieved. Optional method, not required for all time reference types.
   *
   * @method OcaTimeSource#GetReferenceID
   * @returns {Promise<string>}
   *   A promise which resolves to a single value of type ``string``.
   */
  GetReferenceID(): Promise<string>;

  /**
   * Sets the time reference ID. The return value indicates whether the ID was successfully set. Optional method, not required for all time reference types.
   *
   * @method OcaTimeSource#SetReferenceID
   * @param {string} ID
   *
   * @returns {Promise<void>}
   */
  SetReferenceID(ID: string): Promise<void>;

  /**
   * Gets the synchronization status of this time source. The return value indicates whether the value was successfully retrieved.
   *
   * @method OcaTimeSource#GetSyncStatus
   * @returns {Promise<OcaTimeSourceSyncStatus>}
   *   A promise which resolves to a single value of type :class:`OcaTimeSourceSyncStatus`.
   */
  GetSyncStatus(): Promise<OcaTimeSourceSyncStatus>;

  /**
   * Resets this time source. Initiates a new synchronization sequence. The return value indicates whether the reset was successful.
   *
   * @method OcaTimeSource#Reset
   * @returns {Promise<void>}
   */
  Reset(): Promise<void>;
}
