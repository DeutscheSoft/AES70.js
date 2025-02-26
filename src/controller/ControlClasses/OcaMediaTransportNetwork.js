import { OcaFloat32 } from '../../OCP1/OcaFloat32.js';
import { OcaList } from '../../OCP1/OcaList.js';
import { OcaMap } from '../../OCP1/OcaMap.js';
import { OcaMediaCoding } from '../../OCP1/OcaMediaCoding.js';
import { OcaMediaConnection } from '../../OCP1/OcaMediaConnection.js';
import { OcaMediaConnectorCommand } from '../../OCP1/OcaMediaConnectorCommand.js';
import { OcaMediaConnectorState } from '../../OCP1/OcaMediaConnectorState.js';
import { OcaMediaConnectorStatus } from '../../OCP1/OcaMediaConnectorStatus.js';
import { OcaMediaConnectorStatusChangedEventData } from '../../OCP1/OcaMediaConnectorStatusChangedEventData.js';
import { OcaMediaSinkConnector } from '../../OCP1/OcaMediaSinkConnector.js';
import { OcaMediaSinkConnectorChangedEventData } from '../../OCP1/OcaMediaSinkConnectorChangedEventData.js';
import { OcaMediaSourceConnector } from '../../OCP1/OcaMediaSourceConnector.js';
import { OcaMediaSourceConnectorChangedEventData } from '../../OCP1/OcaMediaSourceConnectorChangedEventData.js';
import { OcaMultiMap } from '../../OCP1/OcaMultiMap.js';
import { OcaNetworkMediaProtocol } from '../../OCP1/OcaNetworkMediaProtocol.js';
import { OcaPort } from '../../OCP1/OcaPort.js';
import { OcaPortID } from '../../OCP1/OcaPortID.js';
import { OcaString } from '../../OCP1/OcaString.js';
import { OcaUint16 } from '../../OCP1/OcaUint16.js';
import { make_control_class } from '../make_control_class.js';
import { OcaApplicationNetwork } from './OcaApplicationNetwork.js';

/**
 * @extends OcaApplicationNetwork
 * @class OcaMediaTransportNetwork
 */
export const OcaMediaTransportNetwork = make_control_class(
  'OcaMediaTransportNetwork',
  3,
  '\u0001\u0004\u0002',
  1,
  OcaApplicationNetwork,
  [
    ['GetMediaProtocol', 3, 1, [], [OcaNetworkMediaProtocol]],
    ['GetPorts', 3, 2, [], [OcaList(OcaPort)]],
    ['GetPortName', 3, 3, [OcaPortID], [OcaString]],
    ['SetPortName', 3, 4, [OcaPortID, OcaString], []],
    ['GetMaxSourceConnectors', 3, 5, [], [OcaUint16]],
    ['GetMaxSinkConnectors', 3, 6, [], [OcaUint16]],
    ['GetMaxPinsPerConnector', 3, 7, [], [OcaUint16]],
    ['GetMaxPortsPerPin', 3, 8, [], [OcaUint16]],
    ['GetSourceConnectors', 3, 9, [], [OcaList(OcaMediaSourceConnector)]],
    ['GetSourceConnector', 3, 10, [OcaUint16], [OcaMediaSourceConnector]],
    ['GetSinkConnectors', 3, 11, [], [OcaList(OcaMediaSinkConnector)]],
    ['GetSinkConnector', 3, 12, [OcaUint16], [OcaMediaSinkConnector]],
    ['GetConnectorsStatuses', 3, 13, [], [OcaList(OcaMediaConnectorStatus)]],
    ['GetConnectorStatus', 3, 14, [OcaUint16], [OcaMediaConnectorStatus]],
    [
      'AddSourceConnector',
      3,
      15,
      [OcaMediaSourceConnector, OcaMediaConnectorState],
      [OcaMediaSourceConnector],
    ],
    [
      'AddSinkConnector',
      3,
      16,
      [OcaMediaConnectorStatus, OcaMediaSinkConnector],
      [OcaMediaSinkConnector],
    ],
    ['ControlConnector', 3, 17, [OcaUint16, OcaMediaConnectorCommand], []],
    [
      'SetSourceConnectorPinMap',
      3,
      18,
      [OcaUint16, OcaMap(OcaUint16, OcaPortID)],
      [],
    ],
    [
      'SetSinkConnectorPinMap',
      3,
      19,
      [OcaUint16, OcaMultiMap(OcaUint16, OcaPortID)],
      [],
    ],
    ['SetConnectorConnection', 3, 20, [OcaUint16, OcaMediaConnection], []],
    ['SetConnectorCoding', 3, 21, [OcaUint16, OcaMediaCoding], []],
    ['SetConnectorAlignmentLevel', 3, 22, [OcaUint16, OcaFloat32], []],
    ['SetConnectorAlignmentGain', 3, 23, [OcaUint16, OcaFloat32], []],
    ['DeleteConnector', 3, 24, [OcaUint16], []],
    ['GetAlignmentLevel', 3, 25, [], [OcaFloat32, OcaFloat32, OcaFloat32]],
    ['GetAlignmentGain', 3, 26, [], [OcaFloat32, OcaFloat32, OcaFloat32]],
  ],
  [
    [
      'Protocol',
      [OcaNetworkMediaProtocol],
      3,
      1,
      false,
      false,
      ['MediaProtocol'],
    ],
    ['Ports', [OcaList(OcaPort)], 3, 2, false, false, null],
    ['MaxSourceConnectors', [OcaUint16], 3, 3, false, false, null],
    ['MaxSinkConnectors', [OcaUint16], 3, 4, false, false, null],
    ['MaxPinsPerConnector', [OcaUint16], 3, 5, false, false, null],
    ['MaxPortsPerPin', [OcaUint16], 3, 6, false, false, null],
    ['AlignmentLevel', [OcaFloat32], 3, 7, false, false, null],
    ['AlignmentGain', [OcaFloat32], 3, 8, false, false, null],
  ],
  [
    ['SourceConnectorChanged', 3, 1, [OcaMediaSourceConnectorChangedEventData]],
    ['SinkConnectorChanged', 3, 2, [OcaMediaSinkConnectorChangedEventData]],
    ['ConnectorStatusChanged', 3, 3, [OcaMediaConnectorStatusChangedEventData]],
  ]
);

/**
 * Gets the network's Protocol property. Return status indicates whether the
 * operation was successful.
 *
 * @method OcaMediaTransportNetwork#GetMediaProtocol
 * @returns {Promise<OcaNetworkMediaProtocol>}
 *   A promise which resolves to a single value of type :class:`OcaNetworkMediaProtocol`.
 */
/**
 * Gets the list of ports owned by the MediaTransportNetwork object
 * (representing the source and sink network channels). The return value
 * indicates whether the list was successfully retrieved.
 *
 * @method OcaMediaTransportNetwork#GetPorts
 * @returns {Promise<OcaPort[]>}
 *   A promise which resolves to a single value of type :class:`OcaPort[]`.
 */
/**
 * Gets the name of the designated port. The return value indicates whether the
 * name was successfully retrieved.
 *
 * @method OcaMediaTransportNetwork#GetPortName
 * @param {IOcaPortID} PortID
 *
 * @returns {Promise<string>}
 *   A promise which resolves to a single value of type ``string``.
 */
/**
 * Sets the name of the designated port. The return value indicates whether the
 * name was successfully set.
 *
 * @method OcaMediaTransportNetwork#SetPortName
 * @param {IOcaPortID} PortID
 * @param {string} Name
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the maximum number of source connectors this media transport network
 * supports.
 *
 * @method OcaMediaTransportNetwork#GetMaxSourceConnectors
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Gets the maximum number of source connectors this media transport network
 * supports.
 *
 * @method OcaMediaTransportNetwork#GetMaxSinkConnectors
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Gets the maximum number of ports per pin this media transport network
 * supports.
 *
 * @method OcaMediaTransportNetwork#GetMaxPinsPerConnector
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Gets the maximum number of pins (channels) per connector this media transport
 * network supports.
 *
 * @method OcaMediaTransportNetwork#GetMaxPortsPerPin
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Gets the descriptors of all the source (output) connectors collected by this
 * network object. Return status indicates success of the operation.
 *
 * @method OcaMediaTransportNetwork#GetSourceConnectors
 * @returns {Promise<OcaMediaSourceConnector[]>}
 *   A promise which resolves to a single value of type :class:`OcaMediaSourceConnector[]`.
 */
/**
 * Retrieves the descriptor of a given source connector. Return status indicates
 * the success of the operation.
 *
 * @method OcaMediaTransportNetwork#GetSourceConnector
 * @param {number} ID
 *
 * @returns {Promise<OcaMediaSourceConnector>}
 *   A promise which resolves to a single value of type :class:`OcaMediaSourceConnector`.
 */
/**
 * Gets the descriptors of all the sink (output) connectors collected by this
 * network object. Return status indicates success of the operation.
 *
 * @method OcaMediaTransportNetwork#GetSinkConnectors
 * @returns {Promise<OcaMediaSinkConnector[]>}
 *   A promise which resolves to a single value of type :class:`OcaMediaSinkConnector[]`.
 */
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
/**
 * Gets the status of all the source and sink connectors collected by this
 * network object. Return status indicates success of the operation.
 *
 * @method OcaMediaTransportNetwork#GetConnectorsStatuses
 * @returns {Promise<OcaMediaConnectorStatus[]>}
 *   A promise which resolves to a single value of type :class:`OcaMediaConnectorStatus[]`.
 */
/**
 * Gets the status of a single connector. Return status indicates success of the
 * operation.
 *
 * @method OcaMediaTransportNetwork#GetConnectorStatus
 * @param {number} ConnectorID
 *
 * @returns {Promise<OcaMediaConnectorStatus>}
 *   A promise which resolves to a single value of type :class:`OcaMediaConnectorStatus`.
 */
/**
 * Adds a source connector to this network. Parameters of the new connector are
 * given in the Connector parameter; device returns the same parameter with the
 * new connector ID filled in. If the new connector's AlignmentLevel property
 * value is given as NaN, the value of this network's AlignmentLevel property
 * will be used. Return status indicates the success of the operation.
 *
 * @method OcaMediaTransportNetwork#AddSourceConnector
 * @param {IOcaMediaSourceConnector} Connector
 * @param {IOcaMediaConnectorState} InitialStatus
 *
 * @returns {Promise<OcaMediaSourceConnector>}
 *   A promise which resolves to a single value of type :class:`OcaMediaSourceConnector`.
 */
/**
 * Adds a sinkconnector to this network. Parameters of the new connector are
 * given in the Connector parameter; device returns the same parameter with the
 * new connector ID filled in. If the new connector's AlignmentLevel property
 * value is given as NaN, the value of this network's AlignmentLevel property
 * will be used. If the new connector's AlignmentGain property value is given as
 * NaN, the value of this network's AlignmentGain property will be used. Return
 * status indicates the success of the operation.
 *
 * @method OcaMediaTransportNetwork#AddSinkConnector
 * @param {IOcaMediaConnectorStatus} InitialStatus
 * @param {IOcaMediaSinkConnector} Connector
 *
 * @returns {Promise<OcaMediaSinkConnector>}
 *   A promise which resolves to a single value of type :class:`OcaMediaSinkConnector`.
 */
/**
 * Change the state of a given connector. Return status indicates the success of
 * the operation.
 *
 * @method OcaMediaTransportNetwork#ControlConnector
 * @param {number} ConnectorID
 * @param {IOcaMediaConnectorCommand} Command
 *
 * @returns {Promise<void>}
 */
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
/**
 * Sets a sink connector's channel pin map. Return status indicates the success
 * of the operation.
 *
 * @method OcaMediaTransportNetwork#SetSinkConnectorPinMap
 * @param {number} ConnectorID
 * @param {Map<number, IOcaPortID[]>} ChannelPinMap
 *
 * @returns {Promise<void>}
 */
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
/**
 * Sets the Alignment Level field of a connector. Value must be between the min
 * and max values of the AlignmentLevel property of this network. A value of NaN
 * will cause the current value of this network's AlignmentLevel property to be
 * used. Return status indicates the success of the operation.
 *
 * @method OcaMediaTransportNetwork#SetConnectorAlignmentLevel
 * @param {number} ConnectorID
 * @param {number} Level
 *
 * @returns {Promise<void>}
 */
/**
 * For OcaMediaSinkConnectors only (not source). Sets the Alignment Gain field
 * of the connection descriptor of the referenced connector. Value must be
 * between the min and max values of the AlignmentGain property of this network.
 * A value of NaN will cause the current value of the network's AlignmentGain
 * property to be used. Return status indicates the success of the operation.
 *
 * @method OcaMediaTransportNetwork#SetConnectorAlignmentGain
 * @param {number} ConnectorID
 * @param {number} Gain
 *
 * @returns {Promise<void>}
 */
/**
 * Deletes a connector from this network. Return status indicates the success of
 * the operation.
 *
 * @method OcaMediaTransportNetwork#DeleteConnector
 * @param {number} ID
 *
 * @returns {Promise<void>}
 */
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
/**
 * Event indicating that a media source connector has changed. The change type
 * indicates if the connector was added, deleted or changed.
 * @member OcaMediaTransportNetwork#OnSourceConnectorChanged {Event}
 */
/**
 * Event indicating that a media sink connector has changed. The change type
 * indicates if the connector was added, deleted or changed.
 * @member OcaMediaTransportNetwork#OnSinkConnectorChanged {Event}
 */
/**
 * Event indicating that the status of a source or sink connector has changed.
 * @member OcaMediaTransportNetwork#OnConnectorStatusChanged {Event}
 */
/**
 * This event is emitted when the property ``Protocol`` changes in the remote object.
 * The property ``Protocol`` is described in the AES70 standard as follows.
 * Type of media transport protocol used by the network.
 *
 * @member {PropertyEvent<OcaNetworkMediaProtocol>} OcaMediaTransportNetwork#OnProtocolChanged
 */
/**
 * An alias for OnProtocolChanged
 *
 * @member {PropertyEvent<OcaNetworkMediaProtocol>} OcaMediaTransportNetwork#OnMediaProtocolChanged
 */
/**
 * This event is emitted when the property ``Ports`` changes in the remote object.
 * The property ``Ports`` is described in the AES70 standard as follows.
 * The list of ports this network has. Note that these represent network
 * channels of the media transport network. Each input port represents a source
 * (transmit) network channel, each output port represents a sink (receive)
 * network channel. Such network channels are directly linked to the ports, so
 * the first input port represents the first source network channel, etc.
 *
 * @member {PropertyEvent<OcaPort[]>} OcaMediaTransportNetwork#OnPortsChanged
 */
/**
 * This event is emitted when the property ``MaxSourceConnectors`` changes in the remote object.
 * The property ``MaxSourceConnectors`` is described in the AES70 standard as follows.
 * The maximum number of source connectors this media transport network can have
 * (read-only property).
 *
 * @member {PropertyEvent<number>} OcaMediaTransportNetwork#OnMaxSourceConnectorsChanged
 */
/**
 * This event is emitted when the property ``MaxSinkConnectors`` changes in the remote object.
 * The property ``MaxSinkConnectors`` is described in the AES70 standard as follows.
 * The maximum number of sink connectors this media transport network can have
 * (read-only property).
 *
 * @member {PropertyEvent<number>} OcaMediaTransportNetwork#OnMaxSinkConnectorsChanged
 */
/**
 * This event is emitted when the property ``MaxPinsPerConnector`` changes in the remote object.
 * The property ``MaxPinsPerConnector`` is described in the AES70 standard as follows.
 * The maximum number of pins (channels) in a connector that this network will
 * support.
 *
 * @member {PropertyEvent<number>} OcaMediaTransportNetwork#OnMaxPinsPerConnectorChanged
 */
/**
 * This event is emitted when the property ``MaxPortsPerPin`` changes in the remote object.
 * The property ``MaxPortsPerPin`` is described in the AES70 standard as follows.
 * The maximum number of ports per pin that this network will support. Value of
 * zero indicates there is no specific limit.
 *
 * @member {PropertyEvent<number>} OcaMediaTransportNetwork#OnMaxPortsPerPinChanged
 */
/**
 * This event is emitted when the property ``AlignmentLevel`` changes in the remote object.
 * The property ``AlignmentLevel`` is described in the AES70 standard as follows.
 * Default alignment level value for newly-created
 * **OcaMedia{Source|Sink}Connector** elements. The min and max values of this
 * property define respectively the lowest and highest alignment level values
 * that may be specified when adding connectors to this network.
 *
 * @member {PropertyEvent<number>} OcaMediaTransportNetwork#OnAlignmentLevelChanged
 */
/**
 * This event is emitted when the property ``AlignmentGain`` changes in the remote object.
 * The property ``AlignmentGain`` is described in the AES70 standard as follows.
 * Default value of AlignmentGain for newly-created OcaMediaSinkConnectors
 * attached to this network. The min and max values of this property define
 * respectively the lowest and highest alignment level values that may be
 * specified when adding sink connectors to this network.
 *
 * @member {PropertyEvent<number>} OcaMediaTransportNetwork#OnAlignmentGainChanged
 */
