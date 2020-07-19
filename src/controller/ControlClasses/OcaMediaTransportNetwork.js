import { make_control_class } from '../Base.js';
import { OcaApplicationNetwork } from './OcaApplicationNetwork.js';
import { OcaFloat32 } from '../../OCP1/OcaFloat32.js';
import { OcaList } from '../../OCP1/OcaList.js';
import { OcaMap } from '../../OCP1/OcaMap.js';
import { OcaMediaCoding } from '../../OCP1/OcaMediaCoding.js';
import { OcaMediaConnection } from '../../OCP1/OcaMediaConnection.js';
import { OcaMediaConnectorCommand } from '../../OCP1/OcaMediaConnectorCommand.js';
import { OcaMediaConnectorElement } from '../../OCP1/OcaMediaConnectorElement.js';
import { OcaMediaConnectorState } from '../../OCP1/OcaMediaConnectorState.js';
import { OcaMediaConnectorStatus } from '../../OCP1/OcaMediaConnectorStatus.js';
import { OcaMediaSinkConnector } from '../../OCP1/OcaMediaSinkConnector.js';
import { OcaMediaSourceConnector } from '../../OCP1/OcaMediaSourceConnector.js';
import { OcaMultiMap } from '../../OCP1/OcaMultiMap.js';
import { OcaNetworkMediaProtocol } from '../../OCP1/OcaNetworkMediaProtocol.js';
import { OcaPort } from '../../OCP1/OcaPort.js';
import { OcaPortID } from '../../OCP1/OcaPortID.js';
import { OcaPropertyChangeType } from '../../OCP1/OcaPropertyChangeType.js';
import { OcaString } from '../../OCP1/OcaString.js';
import { OcaUint16 } from '../../OCP1/OcaUint16.js';

/**
 * This was not documented in the OCA standard.
 * @extends RemoteControlClasses.OcaApplicationNetwork
 * @class OcaMediaTransportNetwork
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
    [
      'SourceConnectorChanged',
      3,
      1,
      [
        OcaMediaSourceConnector,
        OcaPropertyChangeType,
        OcaMediaConnectorElement,
      ],
    ],
    [
      'SinkConnectorChanged',
      3,
      2,
      [OcaMediaSinkConnector, OcaPropertyChangeType, OcaMediaConnectorElement],
    ],
    ['ConnectorStatusChanged', 3, 3, [OcaMediaConnectorStatus]],
  ]
);

/**
 * Gets the network's Protocol property. Return status indicates whether
 * the operation was successful.
 * @method RemoteControlClasses.OcaMediaTransportNetwork#GetMediaProtocol
 * @returns {Promise<OcaNetworkMediaProtocol>}
 */
/**
 * Gets the list of ports owned by the MediaTransportNetwork object
 * (representing the source and sink network channels). The return value
 * indicates whether the list was successfully retrieved.
 * @method RemoteControlClasses.OcaMediaTransportNetwork#GetPorts
 * @returns {Promise<OcaList>}
 */
/**
 * Gets the name of the designated port. The return value indicates
 * whether the name was successfully retrieved.
 * @method RemoteControlClasses.OcaMediaTransportNetwork#GetPortName
 * @param PortID {OcaPortID}
 *
 * @returns {Promise<OcaString>}
 */
/**
 * Sets the name of the designated port. The return value indicates
 * whether the name was successfully set.
 * @method RemoteControlClasses.OcaMediaTransportNetwork#SetPortName
 * @param PortID {OcaPortID}
 *
 * @param Name {OcaString}
 *
 * @returns {Promise}
 */
/**
 * Gets the maximum number of source connectors this media transport
 * network supports.
 * @method RemoteControlClasses.OcaMediaTransportNetwork#GetMaxSourceConnectors
 * @returns {Promise<OcaUint16>}
 */
/**
 * Gets the maximum number of source connectors this media transport
 * network supports.
 * @method RemoteControlClasses.OcaMediaTransportNetwork#GetMaxSinkConnectors
 * @returns {Promise<OcaUint16>}
 */
/**
 * Gets the maximum number of ports per pin this media transport network
 * supports.
 * @method RemoteControlClasses.OcaMediaTransportNetwork#GetMaxPinsPerConnector
 * @returns {Promise<OcaUint16>}
 */
/**
 * Gets the maximum number of pins (channels) per connector this media
 * transport network supports.
 * @method RemoteControlClasses.OcaMediaTransportNetwork#GetMaxPortsPerPin
 * @returns {Promise<OcaUint16>}
 */
/**
 * Gets the descriptors of all the source (output) connectors collected
 * by this network object. Return status indicates success of the
 * operation.
 * @method RemoteControlClasses.OcaMediaTransportNetwork#GetSourceConnectors
 * @returns {Promise<OcaList>}
 */
/**
 * Retrieves the descriptor of a given source connector. Return status
 * indicates the success of the operation.
 * @method RemoteControlClasses.OcaMediaTransportNetwork#GetSourceConnector
 * @param ID {OcaMediaConnectorID}
 *
 * @returns {Promise<OcaMediaSourceConnector>}
 */
/**
 * Gets the descriptors of all the sink (output) connectors collected by
 * this network object. Return status indicates success of the operation.
 * @method RemoteControlClasses.OcaMediaTransportNetwork#GetSinkConnectors
 * @returns {Promise<OcaList>}
 */
/**
 * Retrieves the descriptor of a given sink connector. Return status
 * indicates the success of the operation.
 * @method RemoteControlClasses.OcaMediaTransportNetwork#GetSinkConnector
 * @param ID {OcaMediaConnectorID}
 *
 * @returns {Promise<OcaMediaSinkConnector>}
 */
/**
 * Gets the status of all the source and sink connectors collected by
 * this network object. Return status indicates success of the operation.
 * @method RemoteControlClasses.OcaMediaTransportNetwork#GetConnectorsStatuses
 * @returns {Promise<OcaList>}
 */
/**
 * Gets the status of a single connector. Return status indicates success
 * of the operation.
 * @method RemoteControlClasses.OcaMediaTransportNetwork#GetConnectorStatus
 * @param ConnectorID {OcaMediaConnectorID}
 *
 * @returns {Promise<OcaMediaConnectorStatus>}
 */
/**
 * Adds a source connector to this network. Parameters of the new
 * connector are given in the Connector parameter; device returns the
 * same parameter with the new connector ID filled in. If the new
 * connector's AlignmentLevel property value is given as NaN, the value
 * of this network's AlignmentLevel property will be used. Return status
 * indicates the success of the operation.
 * @method RemoteControlClasses.OcaMediaTransportNetwork#AddSourceConnector
 * @param Connector {OcaMediaSourceConnector}
 *
 * @param InitialStatus {OcaMediaConnectorState}
 *
 * @returns {Promise<OcaMediaSourceConnector>}
 */
/**
 * Adds a sinkconnector to this network. Parameters of the new connector
 * are given in the Connector parameter; device returns the same
 * parameter with the new connector ID filled in. If the new connector's
 * AlignmentLevel property value is given as NaN, the value of this
 * network's AlignmentLevel property will be used. If the new connector's
 * AlignmentGain property value is given as NaN, the value of this
 * network's AlignmentGain property will be used. Return status indicates
 * the success of the operation.
 * @method RemoteControlClasses.OcaMediaTransportNetwork#AddSinkConnector
 * @param InitialStatus {OcaMediaConnectorStatus}
 *
 * @param Connector {OcaMediaSinkConnector}
 *
 * @returns {Promise<OcaMediaSinkConnector>}
 */
/**
 * Change the state of a given connector. Return status indicates the
 * success of the operation.
 * @method RemoteControlClasses.OcaMediaTransportNetwork#ControlConnector
 * @param ConnectorID {OcaMediaConnectorID}
 *
 * @param Command {OcaMediaConnectorCommand}
 *
 * @returns {Promise}
 */
/**
 * Sets a source connector's channel pin map. Return status indicates the
 * success of the operation.
 * @method RemoteControlClasses.OcaMediaTransportNetwork#SetSourceConnectorPinMap
 * @param ConnectorID {OcaMediaConnectorID}
 *
 * @param ChannelPinMap {OcaMap}
 *
 * @returns {Promise}
 */
/**
 * Sets a sink connector's channel pin map. Return status indicates the
 * success of the operation.
 * @method RemoteControlClasses.OcaMediaTransportNetwork#SetSinkConnectorPinMap
 * @param ConnectorID {OcaMediaConnectorID}
 *
 * @param ChannelPinMap {OcaMultiMap}
 *
 * @returns {Promise}
 */
/**
 * Sets a connector's <b>Connection </b>property. Return status indicates
 * the success of the operation.
 * @method RemoteControlClasses.OcaMediaTransportNetwork#SetConnectorConnection
 * @param ConnectorID {OcaMediaConnectorID}
 *
 * @param Connection {OcaMediaConnection}
 *
 * @returns {Promise}
 */
/**
 * Sets the Coding field of the connection descriptor of the referenced
 * connector. Return status indicates the success of the operation.
 * @method RemoteControlClasses.OcaMediaTransportNetwork#SetConnectorCoding
 * @param ConnectorID {OcaMediaConnectorID}
 *
 * @param Coding {OcaMediaCoding}
 *
 * @returns {Promise}
 */
/**
 * Sets the Alignment Level field of a connector. Value must be between
 * the min and max values of the AlignmentLevel property of this network.
 * A value of NaN will cause the current value of this network's
 * AlignmentLevel property to be used. Return status indicates the
 * success of the operation.
 * @method RemoteControlClasses.OcaMediaTransportNetwork#SetConnectorAlignmentLevel
 * @param ConnectorID {OcaMediaConnectorID}
 *
 * @param Level {OcaDBFS}
 *
 * @returns {Promise}
 */
/**
 * For OcaMediaSinkConnectors only (not source). Sets the Alignment Gain
 * field of the connection descriptor of the referenced connector. Value
 * must be between the min and max values of the AlignmentGain property
 * of this network. A value of NaN will cause the current value of the
 * network's AlignmentGain property to be used. Return status indicates
 * the success of the operation.
 * @method RemoteControlClasses.OcaMediaTransportNetwork#SetConnectorAlignmentGain
 * @param ConnectorID {OcaMediaConnectorID}
 *
 * @param Gain {OcaDB}
 *
 * @returns {Promise}
 */
/**
 * Deletes a connector from this network. Return status indicates the
 * success of the operation.
 * @method RemoteControlClasses.OcaMediaTransportNetwork#DeleteConnector
 * @param ID {OcaMediaConnectorID}
 *
 * @returns {Promise}
 */
/**
 * Gets the default, min, and max alignment levels for
 * OcaMedia{Source|Sink}Connectors attached to this network. Return
 * status indicates success of the operation.
 * @method RemoteControlClasses.OcaMediaTransportNetwork#GetAlignmentLevel
 * @returns {Promise<Arguments<OcaDBFS,OcaDBFS,OcaDBFS>>}
 */
/**
 * Gets the default, min, and max alignment gains for
 * OcaMediaSinkConnectors attached to this network. Return status
 * indicates success of the operation.
 * @method RemoteControlClasses.OcaMediaTransportNetwork#GetAlignmentGain
 * @returns {Promise<Arguments<OcaDB,OcaDB,OcaDB>>}
 */
/**
 * Event indicating that a media source connector has changed. The change
 * type indicates if the connector was added, deleted or changed.
 * @member RemoteControlClasses.OcaMediaTransportNetwork#OnSourceConnectorChanged {Event} -
 * Event indicating that a media source connector has changed. The change
 * type indicates if the connector was added, deleted or changed.
 */
/**
 * Event indicating that a media sink connector has changed. The change
 * type indicates if the connector was added, deleted or changed.
 * @member RemoteControlClasses.OcaMediaTransportNetwork#OnSinkConnectorChanged {Event} -
 * Event indicating that a media sink connector has changed. The change
 * type indicates if the connector was added, deleted or changed.
 */
/**
 * Event indicating that the status of a source or sink connector has
 * changed.
 * @member RemoteControlClasses.OcaMediaTransportNetwork#OnConnectorStatusChanged {Event} -
 * Event indicating that the status of a source or sink connector has
 * changed.
 */
/**
 * Type of media transport protocol used by the network.
 * @member RemoteControlClasses.OcaMediaTransportNetwork#OnProtocolChanged {PropertyEvent<OcaNetworkMediaProtocol>} - This event is emitted when Protocol changes in the remote object.
 */
/**
 * The list of ports this network has. Note that these represent network
 * channels of the media transport network. Each input port represents a
 * source (transmit) network channel, each output port represents a sink
 * (receive) network channel. Such network channels are directly linked
 * to the ports, so the first input port represents the first source
 * network channel, etc.
 * @member RemoteControlClasses.OcaMediaTransportNetwork#OnPortsChanged {PropertyEvent<OcaList>} - This event is emitted when Ports changes in the remote object.
 */
/**
 * The maximum number of source connectors this media transport network
 * can have (read-only property).
 * @member RemoteControlClasses.OcaMediaTransportNetwork#OnMaxSourceConnectorsChanged {PropertyEvent<OcaUint16>} - This event is emitted when MaxSourceConnectors changes in the remote object.
 */
/**
 * The maximum number of sink connectors this media transport network can
 * have (read-only property).
 * @member RemoteControlClasses.OcaMediaTransportNetwork#OnMaxSinkConnectorsChanged {PropertyEvent<OcaUint16>} - This event is emitted when MaxSinkConnectors changes in the remote object.
 */
/**
 * The maximum number of pins (channels) in a connector that this network
 * will support.
 * @member RemoteControlClasses.OcaMediaTransportNetwork#OnMaxPinsPerConnectorChanged {PropertyEvent<OcaUint16>} - This event is emitted when MaxPinsPerConnector changes in the remote object.
 */
/**
 * The maximum number of ports per pin that this network will support.
 * Value of zero indicates there is no specific limit.
 * @member RemoteControlClasses.OcaMediaTransportNetwork#OnMaxPortsPerPinChanged {PropertyEvent<OcaUint16>} - This event is emitted when MaxPortsPerPin changes in the remote object.
 */
/**
 * Default alignment level value for newly-created
 * <b>OcaMedia{Source|Sink}Connector </b>elements. The min and max values
 * of this property define respectively the lowest and highest alignment
 * level values that may be specified when adding connectors to this
 * network.
 * @member RemoteControlClasses.OcaMediaTransportNetwork#OnAlignmentLevelChanged {PropertyEvent<OcaDBFS>} - This event is emitted when AlignmentLevel changes in the remote object.
 */
/**
 * Default value of AlignmentGain for newly-created
 * OcaMediaSinkConnectors attached to this network. The min and max
 * values of this property define respectively the lowest and highest
 * alignment level values that may be specified when adding sink
 * connectors to this network.
 * @member RemoteControlClasses.OcaMediaTransportNetwork#OnAlignmentGainChanged {PropertyEvent<OcaDB>} - This event is emitted when AlignmentGain changes in the remote object.
 */
