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
 * **DEPRECATED CLASS** *Replaced by class* **OcaMediaTransportNetwork ***in
 * version 3 of Connection Management (CM3)* Abstract base class for defining
 * network classes to which this device belongs. May be a media transport
 * network, a control and monitoring network, or a network that does both. There
 * shall be one OcaStreamNetwork instance for each network to which the device
 * belongs. This class may be subclassed to support networks of various types.
 * @extends OcaAgent
 * @class OcaStreamNetwork
 */
export declare class OcaStreamNetwork extends OcaAgent {
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
   * This event is emitted whenever StreamConnectorsSource changes.
   */
  OnStreamConnectorsSourceChanged: PropertyEvent<number[]>;

  /**
   * This event is emitted whenever StreamConnectorsSink changes.
   */
  OnStreamConnectorsSinkChanged: PropertyEvent<number[]>;

  /**
   * This event is emitted whenever SignalChannelsSource changes.
   */
  OnSignalChannelsSourceChanged: PropertyEvent<number[]>;

  /**
   * This event is emitted whenever SignalChannelsSink changes.
   */
  OnSignalChannelsSinkChanged: PropertyEvent<number[]>;

  /**
   * This event is emitted whenever Statistics changes.
   */
  OnStatisticsChanged: PropertyEvent<OcaNetworkStatistics>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the network's link type (wired Ethernet, USB, etc.). Return status
   * indicates whether the operation was successful.
   *
   * @method OcaStreamNetwork#GetLinkType
   * @returns {Promise<OcaNetworkLinkType>}
   *   A promise which resolves to a single value of type :class:`OcaNetworkLinkType`.
   */
  GetLinkType(): Promise<OcaNetworkLinkType>;

  /**
   * Gets the network's IDAdvertised. Return status indicates whether the
   * operation was successful.
   *
   * @method OcaStreamNetwork#GetIDAdvertised
   * @returns {Promise<Uint8Array>}
   *   A promise which resolves to a single value of type ``Uint8Array``.
   */
  GetIDAdvertised(): Promise<Uint8Array>;

  /**
   * Sets the network's IDAdvertised. Return status indicates whether the
   * operation was successful.
   *
   * @method OcaStreamNetwork#SetIDAdvertised
   * @param {Uint8Array} Name
   *
   * @returns {Promise<void>}
   */
  SetIDAdvertised(Name: Uint8Array): Promise<void>;

  /**
   * Gets the network's ControlProtocol property. Return status indicates
   * whether the operation was successful.
   *
   * @method OcaStreamNetwork#GetControlProtocol
   * @returns {Promise<OcaNetworkControlProtocol>}
   *   A promise which resolves to a single value of type :class:`OcaNetworkControlProtocol`.
   */
  GetControlProtocol(): Promise<OcaNetworkControlProtocol>;

  /**
   * Gets the network's MediaProtocol property. Return status indicates whether
   * the operation was successful.
   *
   * @method OcaStreamNetwork#GetMediaProtocol
   * @returns {Promise<OcaNetworkMediaProtocol>}
   *   A promise which resolves to a single value of type :class:`OcaNetworkMediaProtocol`.
   */
  GetMediaProtocol(): Promise<OcaNetworkMediaProtocol>;

  /**
   * Retrieves the network's status. Return status indicates whether the status
   * was successfully retrieved.
   *
   * @method OcaStreamNetwork#GetStatus
   * @returns {Promise<OcaNetworkStatus>}
   *   A promise which resolves to a single value of type :class:`OcaNetworkStatus`.
   */
  GetStatus(): Promise<OcaNetworkStatus>;

  /**
   * Retrieves network error statistics counter values. Return status indicates
   * whether the values were successfully retrieved.
   *
   * @method OcaStreamNetwork#GetStatistics
   * @returns {Promise<OcaNetworkStatistics>}
   *   A promise which resolves to a single value of type :class:`OcaNetworkStatistics`.
   */
  GetStatistics(): Promise<OcaNetworkStatistics>;

  /**
   * Resets network error statistics counters. Return status indicates whether
   * the counters were successfully reset.
   *
   * @method OcaStreamNetwork#ResetStatistics
   * @returns {Promise<void>}
   */
  ResetStatistics(): Promise<void>;

  /**
   * Gets the list of system interface IDs that this network is using. Return
   * status indicates success of the operation.
   *
   * @method OcaStreamNetwork#GetSystemInterfaces
   * @returns {Promise<OcaNetworkSystemInterfaceID[]>}
   *   A promise which resolves to a single value of type :class:`OcaNetworkSystemInterfaceID[]`.
   */
  GetSystemInterfaces(): Promise<OcaNetworkSystemInterfaceID[]>;

  /**
   * Sets the list of system interface IDs that this network will use. Return
   * status indicates success of the operation. This method is not implemented
   * by all network implementations.
   *
   * @method OcaStreamNetwork#SetSystemInterfaces
   * @param {IOcaNetworkSystemInterfaceID[]} Interfaces
   *
   * @returns {Promise<void>}
   */
  SetSystemInterfaces(
    Interfaces: IOcaNetworkSystemInterfaceID[]
  ): Promise<void>;

  /**
   * Gets the list of object numbers of Source **OcaStreamConnector** objects
   * owned by this network. Return status indicates success of the operation. If
   * the value of the network's MediaProtocol property is NONE, this method will
   * return the status value InvalidRequest. Members are added to and deleted
   * from this list when **OcaStreamConnector** objects' **Owner** properties
   * are updated, or when **OcaStreamConnector** objects are deleted. For
   * reconfigurable devices, such changes may be initiated by controllers during
   * device operation.
   *
   * @method OcaStreamNetwork#GetStreamConnectorsSource
   * @returns {Promise<number[]>}
   *   A promise which resolves to a single value of type ``number[]``.
   */
  GetStreamConnectorsSource(): Promise<number[]>;

  /**
   * Sets the list of object numbers of Source **OcaStreamConnector** objects
   * owned by this network. Return status indicates success of the operation. If
   * the value of the network's MediaProtocol property is NONE, this method will
   * return the status value InvalidRequest. Members are added to and deleted
   * from this list when **OcaStreamConnector** objects' **Owner** properties
   * are updated, or when **OcaStreamConnector** objects are deleted. For
   * reconfigurable devices, such changes may be initiated by controllers during
   * device operation.
   *
   * @method OcaStreamNetwork#SetStreamConnectorsSource
   * @param {number[]} StreamConnectors
   *
   * @returns {Promise<void>}
   */
  SetStreamConnectorsSource(StreamConnectors: number[]): Promise<void>;

  /**
   * Gets the list of object numbers of Sink **OcaStreamConnector** objects
   * owned by this network. Return status indicates success of the operation. If
   * the value of the network's MediaProtocol property is NONE, this method will
   * return the status value InvalidRequest. Members are added to and deleted
   * from this list when **OcaStreamConnector** objects' **Owner** properties
   * are updated, or when **OcaStreamConnector** objects are deleted. For
   * reconfigurable devices, such changes may be initiated by controllers during
   * device operation.
   *
   * @method OcaStreamNetwork#GetStreamConnectorsSink
   * @returns {Promise<number[]>}
   *   A promise which resolves to a single value of type ``number[]``.
   */
  GetStreamConnectorsSink(): Promise<number[]>;

  /**
   * Sets the list of object numbers of Sink **OcaStreamConnector** objects
   * owned by this network. Return status indicates success of the operation. If
   * the value of the network's MediaProtocol property is NONE, this method will
   * return the status value InvalidRequest. Members are added to and deleted
   * from this list when **OcaStreamConnector** objects' **Owner** properties
   * are updated, or when **OcaStreamConnector** objects are deleted. For
   * reconfigurable devices, such changes may be initiated by controllers during
   * device operation.
   *
   * @method OcaStreamNetwork#SetStreamConnectorsSink
   * @param {number[]} StreamConnectors
   *
   * @returns {Promise<void>}
   */
  SetStreamConnectorsSink(StreamConnectors: number[]): Promise<void>;

  /**
   * Gets the list of object numbers of Source **OcaNetworkSignalChannel**
   * objects owned by this network. Return status indicates success of the
   * operation. If the value of the network's MediaProtocol property is NONE,
   * this method will return the status value InvalidRequest. Members are added
   * to and deleted from this list when **OcaNetworkSignalChannel** objects'
   * **Owner** properties are updated, or when **OcaNetworkSignalChannel**
   * objects are deleted. For reconfigurable devices, such changes may be
   * initiated by controllers during device operation.
   *
   * @method OcaStreamNetwork#GetSignalChannelsSource
   * @returns {Promise<number[]>}
   *   A promise which resolves to a single value of type ``number[]``.
   */
  GetSignalChannelsSource(): Promise<number[]>;

  /**
   * Sets the list of object numbers of Source **OcaNetworkSignalChannel**
   * objects owned by this network. Return status indicates success of the
   * operation. If the value of the network's MediaProtocol property is NONE,
   * this method will return the status value InvalidRequest. Members are added
   * to and deleted from this list when **OcaNetworkSignalChannel** objects'
   * **Owner** properties are updated, or when **OcaNetworkSignalChannel**
   * objects are deleted. For reconfigurable devices, such changes may be
   * initiated by controllers during device operation.
   *
   * @method OcaStreamNetwork#SetSignalChannelsSource
   * @param {number[]} SignalChannels
   *
   * @returns {Promise<void>}
   */
  SetSignalChannelsSource(SignalChannels: number[]): Promise<void>;

  /**
   * Gets the list of object numbers of Sink **OcaNetworkSignalChannel** objects
   * owned by this network. Return status indicates success of the operation. If
   * the value of the network's MediaProtocol property is NONE, this method will
   * return the status value InvalidRequest. Members are added to and deleted
   * from this list when **OcaNetworkSignalChannel** objects' **Owner**
   * properties are updated, or when **OcaNetworkSignalChannel** objects are
   * deleted. For reconfigurable devices, such changes may be initiated by
   * controllers during device operation.
   *
   * @method OcaStreamNetwork#GetSignalChannelsSink
   * @returns {Promise<number[]>}
   *   A promise which resolves to a single value of type ``number[]``.
   */
  GetSignalChannelsSink(): Promise<number[]>;

  /**
   * Sets the list of object numbers of Sink **OcaNetworkSignalChannel** objects
   * owned by this network. Return status indicates success of the operation. If
   * the value of the network's MediaProtocol property is NONE, this method will
   * return the status value InvalidRequest. Members are added to and deleted
   * from this list when **OcaNetworkSignalChannel** objects' **Owner**
   * properties are updated, or when **OcaNetworkSignalChannel** objects are
   * deleted. For reconfigurable devices, such changes may be initiated by
   * controllers during device operation.
   *
   * @method OcaStreamNetwork#SetSignalChannelsSink
   * @param {number[]} SignalChannels
   *
   * @returns {Promise<void>}
   */
  SetSignalChannelsSink(SignalChannels: number[]): Promise<void>;

  /**
   * Start up this network.
   *
   * @method OcaStreamNetwork#Startup
   * @returns {Promise<void>}
   */
  Startup(): Promise<void>;

  /**
   * Shut down this network.
   *
   * @method OcaStreamNetwork#Shutdown
   * @returns {Promise<void>}
   */
  Shutdown(): Promise<void>;
}
