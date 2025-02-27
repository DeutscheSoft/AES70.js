import { IOcaMediaCoding } from '../../types/OcaMediaCoding';
import { IOcaMediaConnection } from '../../types/OcaMediaConnection';
import { IOcaMediaConnectorCommand } from '../../types/OcaMediaConnectorCommand';
import { IOcaMediaConnectorState } from '../../types/OcaMediaConnectorState';
import {
  IOcaMediaConnectorStatus,
  OcaMediaConnectorStatus,
} from '../../types/OcaMediaConnectorStatus';
import { OcaMediaSinkConnector } from '../../types/OcaMediaSinkConnector';
import {
  IOcaMediaSourceConnector,
  OcaMediaSourceConnector,
} from '../../types/OcaMediaSourceConnector';
import { OcaNetworkMediaProtocol } from '../../types/OcaNetworkMediaProtocol';
import { OcaPort } from '../../types/OcaPort';
import { IOcaPortID } from '../../types/OcaPortID';
import { Arguments } from '../arguments';
import { Event } from '../event';
import { PropertyEvent } from '../property_event';
import { RemoteDevice } from '../remote_device';
import { OcaApplicationNetwork } from './OcaApplicationNetwork';

/**
 * @extends OcaApplicationNetwork
 * @class OcaMediaTransportNetwork
 */
export declare class OcaMediaTransportNetwork extends OcaApplicationNetwork {
  /**
   * Event indicating that the status of a source or sink connector has changed.
   * @member OcaMediaTransportNetwork#OnConnectorStatusChanged {Event}
   */
  OnConnectorStatusChanged: Event;

  /**
   * Event indicating that a media sink connector has changed. The change type
   * indicates if the connector was added, deleted or changed.
   * @member OcaMediaTransportNetwork#OnSinkConnectorChanged {Event}
   */
  OnSinkConnectorChanged: Event;

  /**
   * Event indicating that a media source connector has changed. The change type
   * indicates if the connector was added, deleted or changed.
   * @member OcaMediaTransportNetwork#OnSourceConnectorChanged {Event}
   */
  OnSourceConnectorChanged: Event;
  /**
   * This event is emitted whenever Protocol changes.
   */
  OnProtocolChanged: PropertyEvent<OcaNetworkMediaProtocol>;

  /**
   * This event is emitted whenever Ports changes.
   */
  OnPortsChanged: PropertyEvent<OcaPort[]>;

  /**
   * This event is emitted whenever MaxSourceConnectors changes.
   */
  OnMaxSourceConnectorsChanged: PropertyEvent<number>;

  /**
   * This event is emitted whenever MaxSinkConnectors changes.
   */
  OnMaxSinkConnectorsChanged: PropertyEvent<number>;

  /**
   * This event is emitted whenever MaxPinsPerConnector changes.
   */
  OnMaxPinsPerConnectorChanged: PropertyEvent<number>;

  /**
   * This event is emitted whenever MaxPortsPerPin changes.
   */
  OnMaxPortsPerPinChanged: PropertyEvent<number>;

  /**
   * This event is emitted whenever AlignmentLevel changes.
   */
  OnAlignmentLevelChanged: PropertyEvent<number>;

  /**
   * This event is emitted whenever AlignmentGain changes.
   */
  OnAlignmentGainChanged: PropertyEvent<number>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the network's Protocol property. Return status indicates whether the
   * operation was successful.
   *
   * @method OcaMediaTransportNetwork#GetMediaProtocol
   * @returns {Promise<OcaNetworkMediaProtocol>}
   *   A promise which resolves to a single value of type :class:`OcaNetworkMediaProtocol`.
   */
  GetMediaProtocol(): Promise<OcaNetworkMediaProtocol>;

  /**
   * Gets the list of ports owned by the MediaTransportNetwork object
   * (representing the source and sink network channels). The return value
   * indicates whether the list was successfully retrieved.
   *
   * @method OcaMediaTransportNetwork#GetPorts
   * @returns {Promise<OcaPort[]>}
   *   A promise which resolves to a single value of type :class:`OcaPort[]`.
   */
  GetPorts(): Promise<OcaPort[]>;

  /**
   * Gets the name of the designated port. The return value indicates whether
   * the name was successfully retrieved.
   *
   * @method OcaMediaTransportNetwork#GetPortName
   * @param {IOcaPortID} PortID
   *
   * @returns {Promise<string>}
   *   A promise which resolves to a single value of type ``string``.
   */
  GetPortName(PortID: IOcaPortID): Promise<string>;

  /**
   * Sets the name of the designated port. The return value indicates whether
   * the name was successfully set.
   *
   * @method OcaMediaTransportNetwork#SetPortName
   * @param {IOcaPortID} PortID
   * @param {string} Name
   *
   * @returns {Promise<void>}
   */
  SetPortName(PortID: IOcaPortID, Name: string): Promise<void>;

  /**
   * Gets the maximum number of source connectors this media transport network
   * supports.
   *
   * @method OcaMediaTransportNetwork#GetMaxSourceConnectors
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetMaxSourceConnectors(): Promise<number>;

  /**
   * Gets the maximum number of source connectors this media transport network
   * supports.
   *
   * @method OcaMediaTransportNetwork#GetMaxSinkConnectors
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetMaxSinkConnectors(): Promise<number>;

  /**
   * Gets the maximum number of ports per pin this media transport network
   * supports.
   *
   * @method OcaMediaTransportNetwork#GetMaxPinsPerConnector
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetMaxPinsPerConnector(): Promise<number>;

  /**
   * Gets the maximum number of pins (channels) per connector this media
   * transport network supports.
   *
   * @method OcaMediaTransportNetwork#GetMaxPortsPerPin
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetMaxPortsPerPin(): Promise<number>;

  /**
   * Gets the descriptors of all the source (output) connectors collected by
   * this network object. Return status indicates success of the operation.
   *
   * @method OcaMediaTransportNetwork#GetSourceConnectors
   * @returns {Promise<OcaMediaSourceConnector[]>}
   *   A promise which resolves to a single value of type :class:`OcaMediaSourceConnector[]`.
   */
  GetSourceConnectors(): Promise<OcaMediaSourceConnector[]>;

  /**
   * Retrieves the descriptor of a given source connector. Return status
   * indicates the success of the operation.
   *
   * @method OcaMediaTransportNetwork#GetSourceConnector
   * @param {number} ID
   *
   * @returns {Promise<OcaMediaSourceConnector>}
   *   A promise which resolves to a single value of type :class:`OcaMediaSourceConnector`.
   */
  GetSourceConnector(ID: number): Promise<OcaMediaSourceConnector>;

  /**
   * Gets the descriptors of all the sink (output) connectors collected by this
   * network object. Return status indicates success of the operation.
   *
   * @method OcaMediaTransportNetwork#GetSinkConnectors
   * @returns {Promise<OcaMediaSinkConnector[]>}
   *   A promise which resolves to a single value of type :class:`OcaMediaSinkConnector[]`.
   */
  GetSinkConnectors(): Promise<OcaMediaSinkConnector[]>;

  /**
   * Retrieves the descriptor of a given sink connector. Return status indicates
   * the success of the operation.
   *
   * @method OcaMediaTransportNetwork#GetSinkConnector
   * @param {number} ID
   *
   * @returns {Promise<OcaMediaSinkConnector>}
   *   A promise which resolves to a single value of type :class:`OcaMediaSinkConnector`.
   */
  GetSinkConnector(ID: number): Promise<OcaMediaSinkConnector>;

  /**
   * Gets the status of all the source and sink connectors collected by this
   * network object. Return status indicates success of the operation.
   *
   * @method OcaMediaTransportNetwork#GetConnectorsStatuses
   * @returns {Promise<OcaMediaConnectorStatus[]>}
   *   A promise which resolves to a single value of type :class:`OcaMediaConnectorStatus[]`.
   */
  GetConnectorsStatuses(): Promise<OcaMediaConnectorStatus[]>;

  /**
   * Gets the status of a single connector. Return status indicates success of
   * the operation.
   *
   * @method OcaMediaTransportNetwork#GetConnectorStatus
   * @param {number} ConnectorID
   *
   * @returns {Promise<OcaMediaConnectorStatus>}
   *   A promise which resolves to a single value of type :class:`OcaMediaConnectorStatus`.
   */
  GetConnectorStatus(ConnectorID: number): Promise<OcaMediaConnectorStatus>;

  /**
   * Adds a source connector to this network. Parameters of the new connector
   * are given in the Connector parameter; device returns the same parameter
   * with the new connector ID filled in. If the new connector's AlignmentLevel
   * property value is given as NaN, the value of this network's AlignmentLevel
   * property will be used. Return status indicates the success of the
   * operation.
   *
   * @method OcaMediaTransportNetwork#AddSourceConnector
   * @param {IOcaMediaSourceConnector} Connector
   * @param {IOcaMediaConnectorState} InitialStatus
   *
   * @returns {Promise<void>}
   */
  AddSourceConnector(
    Connector: IOcaMediaSourceConnector,
    InitialStatus: IOcaMediaConnectorState
  ): Promise<void>;

  /**
   * Adds a sinkconnector to this network. Parameters of the new connector are
   * given in the Connector parameter; device returns the same parameter with
   * the new connector ID filled in. If the new connector's AlignmentLevel
   * property value is given as NaN, the value of this network's AlignmentLevel
   * property will be used. If the new connector's AlignmentGain property value
   * is given as NaN, the value of this network's AlignmentGain property will be
   * used. Return status indicates the success of the operation.
   *
   * @method OcaMediaTransportNetwork#AddSinkConnector
   * @param {IOcaMediaConnectorStatus} InitialStatus
   *
   * @returns {Promise<void>}
   */
  AddSinkConnector(InitialStatus: IOcaMediaConnectorStatus): Promise<void>;

  /**
   * Change the state of a given connector. Return status indicates the success
   * of the operation.
   *
   * @method OcaMediaTransportNetwork#ControlConnector
   * @param {number} ConnectorID
   * @param {IOcaMediaConnectorCommand} Command
   *
   * @returns {Promise<void>}
   */
  ControlConnector(
    ConnectorID: number,
    Command: IOcaMediaConnectorCommand
  ): Promise<void>;

  /**
   * Sets a source connector's channel pin map. Return status indicates the
   * success of the operation.
   *
   * @method OcaMediaTransportNetwork#SetSourceConnectorPinMap
   * @param {number} ConnectorID
   * @param {Map<number, IOcaPortID>} ChannelPinMap
   *
   * @returns {Promise<void>}
   */
  SetSourceConnectorPinMap(
    ConnectorID: number,
    ChannelPinMap: Map<number, IOcaPortID>
  ): Promise<void>;

  /**
   * Sets a sink connector's channel pin map. Return status indicates the
   * success of the operation.
   *
   * @method OcaMediaTransportNetwork#SetSinkConnectorPinMap
   * @param {number} ConnectorID
   * @param {Map<number, IOcaPortID[]>} ChannelPinMap
   *
   * @returns {Promise<void>}
   */
  SetSinkConnectorPinMap(
    ConnectorID: number,
    ChannelPinMap: Map<number, IOcaPortID[]>
  ): Promise<void>;

  /**
   * Sets a connector's **Connection** property. Return status indicates the
   * success of the operation.
   *
   * @method OcaMediaTransportNetwork#SetConnectorConnection
   * @param {number} ConnectorID
   * @param {IOcaMediaConnection} Connection
   *
   * @returns {Promise<void>}
   */
  SetConnectorConnection(
    ConnectorID: number,
    Connection: IOcaMediaConnection
  ): Promise<void>;

  /**
   * Sets the Coding field of the connection descriptor of the referenced
   * connector. Return status indicates the success of the operation.
   *
   * @method OcaMediaTransportNetwork#SetConnectorCoding
   * @param {number} ConnectorID
   * @param {IOcaMediaCoding} Coding
   *
   * @returns {Promise<void>}
   */
  SetConnectorCoding(
    ConnectorID: number,
    Coding: IOcaMediaCoding
  ): Promise<void>;

  /**
   * Sets the Alignment Level field of a connector. Value must be between the
   * min and max values of the AlignmentLevel property of this network. A value
   * of NaN will cause the current value of this network's AlignmentLevel
   * property to be used. Return status indicates the success of the operation.
   *
   * @method OcaMediaTransportNetwork#SetConnectorAlignmentLevel
   * @param {number} ConnectorID
   * @param {number} Level
   *
   * @returns {Promise<void>}
   */
  SetConnectorAlignmentLevel(ConnectorID: number, Level: number): Promise<void>;

  /**
   * For OcaMediaSinkConnectors only (not source). Sets the Alignment Gain field
   * of the connection descriptor of the referenced connector. Value must be
   * between the min and max values of the AlignmentGain property of this
   * network. A value of NaN will cause the current value of the network's
   * AlignmentGain property to be used. Return status indicates the success of
   * the operation.
   *
   * @method OcaMediaTransportNetwork#SetConnectorAlignmentGain
   * @param {number} ConnectorID
   * @param {number} Gain
   *
   * @returns {Promise<void>}
   */
  SetConnectorAlignmentGain(ConnectorID: number, Gain: number): Promise<void>;

  /**
   * Deletes a connector from this network. Return status indicates the success
   * of the operation.
   *
   * @method OcaMediaTransportNetwork#DeleteConnector
   * @param {number} ID
   *
   * @returns {Promise<void>}
   */
  DeleteConnector(ID: number): Promise<void>;

  /**
   * Gets the default, min, and max alignment levels for
   * OcaMedia{Source|Sink}Connectors attached to this network. Return status
   * indicates success of the operation.
   * The return values of this method are
   *
   * - Level of type ``number``
   * - MinLevel of type ``number``
   * - MaxLevel of type ``number``
   *
   * @method OcaMediaTransportNetwork#GetAlignmentLevel
   * @returns {Promise<Arguments<number,number,number>>}
   */
  GetAlignmentLevel(): Promise<Arguments<[number, number, number]>>;

  /**
   * Gets the default, min, and max alignment gains for OcaMediaSinkConnectors
   * attached to this network. Return status indicates success of the operation.
   * The return values of this method are
   *
   * - Gain of type ``number``
   * - minGain of type ``number``
   * - maxGain of type ``number``
   *
   * @method OcaMediaTransportNetwork#GetAlignmentGain
   * @returns {Promise<Arguments<number,number,number>>}
   */
  GetAlignmentGain(): Promise<Arguments<[number, number, number]>>;
}
