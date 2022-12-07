import { OcaNetworkControlProtocol } from '../../types/OcaNetworkControlProtocol';
import { OcaNetworkLinkType } from '../../types/OcaNetworkLinkType';
import { OcaNetworkMediaProtocol } from '../../types/OcaNetworkMediaProtocol';
import { OcaNetworkStatistics } from '../../types/OcaNetworkStatistics';
import { OcaNetworkStatus } from '../../types/OcaNetworkStatus';
import {
  IOcaNetworkSystemInterfaceID,
  OcaNetworkSystemInterfaceID,
} from '../../types/OcaNetworkSystemInterfaceID';
import { PropertyEvent } from '../property_event';
import { RemoteDevice } from '../remote_device';
import { OcaAgent } from './OcaAgent';

/**
 * **DEPRECATED CLASS** *Replaced by class* **OcaControlNetwork ***in version 3
 * of Connection Management (CM3)* Abstract base class for defining network
 * classes to which this device belongs. This class is to be used for control
 * and monitoring networks only. For media transport networks, and for networks
 * that combine media transport and control, the **OcaStreamNetwork** class
 * should be used instead.
 * @extends OcaAgent
 * @class OcaNetwork
 */
export declare class OcaNetwork extends OcaAgent {
  /**
   * This event is emitted whenever IDAdvertised changes.
   */
  OnIDAdvertisedChanged: PropertyEvent<Uint8Array>;

  /**
   * This event is emitted whenever ControlProtocol changes.
   */
  OnControlProtocolChanged: PropertyEvent<OcaNetworkControlProtocol>;

  /**
   * This event is emitted whenever MediaProtocol changes.
   */
  OnMediaProtocolChanged: PropertyEvent<OcaNetworkMediaProtocol>;

  /**
   * This event is emitted whenever Status changes.
   */
  OnStatusChanged: PropertyEvent<OcaNetworkStatus>;

  /**
   * This event is emitted whenever SystemInterfaces changes.
   */
  OnSystemInterfacesChanged: PropertyEvent<OcaNetworkSystemInterfaceID[]>;

  /**
   * This event is emitted whenever MediaPorts changes.
   */
  OnMediaPortsChanged: PropertyEvent<number[]>;

  /**
   * This event is emitted whenever Statistics changes.
   */
  OnStatisticsChanged: PropertyEvent<OcaNetworkStatistics>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the network's link type (wired Ethernet, USB, etc.). Return status
   * indicates whether the operation was successful.
   *
   * @method OcaNetwork#GetLinkType
   * @returns {Promise<OcaNetworkLinkType>}
   *   A promise which resolves to a single value of type :class:`OcaNetworkLinkType`.
   */
  GetLinkType(): Promise<OcaNetworkLinkType>;

  /**
   * Gets the network's IDAdvertised. Return status indicates whether the
   * operation was successful.
   *
   * @method OcaNetwork#GetIDAdvertised
   * @returns {Promise<Uint8Array>}
   *   A promise which resolves to a single value of type ``Uint8Array``.
   */
  GetIDAdvertised(): Promise<Uint8Array>;

  /**
   * Sets the network's IDAdvertised. Return status indicates whether the
   * operation was successful.
   *
   * @method OcaNetwork#SetIDAdvertised
   * @param {Uint8Array} Name
   *
   * @returns {Promise<void>}
   */
  SetIDAdvertised(Name: Uint8Array): Promise<void>;

  /**
   * Gets the network's ControlProtocol property. Return status indicates
   * whether the operation was successful.
   *
   * @method OcaNetwork#GetControlProtocol
   * @returns {Promise<OcaNetworkControlProtocol>}
   *   A promise which resolves to a single value of type :class:`OcaNetworkControlProtocol`.
   */
  GetControlProtocol(): Promise<OcaNetworkControlProtocol>;

  /**
   * Gets the network's MediaProtocol property. This is a deprecated method that
   * always returns the value NONE.
   *
   * @method OcaNetwork#GetMediaProtocol
   * @returns {Promise<OcaNetworkMediaProtocol>}
   *   A promise which resolves to a single value of type :class:`OcaNetworkMediaProtocol`.
   */
  GetMediaProtocol(): Promise<OcaNetworkMediaProtocol>;

  /**
   * Retrieves the network's status. Return status indicates whether the status
   * was successfully retrieved.
   *
   * @method OcaNetwork#GetStatus
   * @returns {Promise<OcaNetworkStatus>}
   *   A promise which resolves to a single value of type :class:`OcaNetworkStatus`.
   */
  GetStatus(): Promise<OcaNetworkStatus>;

  /**
   * Retrieves network error statistics counter values. Return status indicates
   * whether the values were successfully retrieved.
   *
   * @method OcaNetwork#GetStatistics
   * @returns {Promise<OcaNetworkStatistics>}
   *   A promise which resolves to a single value of type :class:`OcaNetworkStatistics`.
   */
  GetStatistics(): Promise<OcaNetworkStatistics>;

  /**
   * Resets network error statistics counters. Return status indicates whether
   * the counters were successfully reset.
   *
   * @method OcaNetwork#ResetStatistics
   * @returns {Promise<void>}
   */
  ResetStatistics(): Promise<void>;

  /**
   * Gets the list of system interface IDs that this network is using. Return
   * status indicates success of the operation.
   *
   * @method OcaNetwork#GetSystemInterfaces
   * @returns {Promise<OcaNetworkSystemInterfaceID[]>}
   *   A promise which resolves to a single value of type :class:`OcaNetworkSystemInterfaceID[]`.
   */
  GetSystemInterfaces(): Promise<OcaNetworkSystemInterfaceID[]>;

  /**
   * Sets the list of system interface IDs that this network will use. Return
   * status indicates success of the operation. This method is not implemented
   * by all network implementations.
   *
   * @method OcaNetwork#SetSystemInterfaces
   * @param {IOcaNetworkSystemInterfaceID[]} Interfaces
   *
   * @returns {Promise<void>}
   */
  SetSystemInterfaces(
    Interfaces: IOcaNetworkSystemInterfaceID[]
  ): Promise<void>;

  /**
   * Deprecated method. Always returns status INVALID_REQUEST. Media transport
   * is now managed by the class **OcaStreamNetwork.**
   *
   * @method OcaNetwork#GetMediaPorts
   * @returns {Promise<number[]>}
   *   A promise which resolves to a single value of type ``number[]``.
   */
  GetMediaPorts(): Promise<number[]>;

  /**
   * Start up this network.
   *
   * @method OcaNetwork#Startup
   * @returns {Promise<void>}
   */
  Startup(): Promise<void>;

  /**
   * Shut down this network.
   *
   * @method OcaNetwork#Shutdown
   * @returns {Promise<void>}
   */
  Shutdown(): Promise<void>;
}
