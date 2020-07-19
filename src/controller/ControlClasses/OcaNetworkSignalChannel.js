import { make_control_class } from '../Base.js';
import { OcaWorker } from './OcaWorker.js';
import { OcaBlob } from '../../OCP1/OcaBlob.js';
import { OcaMap } from '../../OCP1/OcaMap.js';
import { OcaNetworkMediaSourceOrSink } from '../../OCP1/OcaNetworkMediaSourceOrSink.js';
import { OcaNetworkSignalChannelStatus } from '../../OCP1/OcaNetworkSignalChannelStatus.js';
import { OcaUint16 } from '../../OCP1/OcaUint16.js';
import { OcaUint32 } from '../../OCP1/OcaUint32.js';

/**
 * <b>DEPRECATED CLASS</b> <i>Replaced by features of the
 * </i><b><i>OcaMediaSinkConnector </i></b><i>and
 * </i><b><i>OcaMediaSourceConnector </i></b><i>datatypes in version 3 of
 * Connection Management (CM3)</i> Worker that allows connection of one
 * or more internal signal paths to a network signal channel. <ul>
 * <li>For stream-oriented media connection management such as used by
 * AVB, this worker will be linked to an <b>OcaStreamConnector</b> object
 * and to the appropriate <b>OcaStreamNetwork </b>object. </li> <li>For
 * channel-oriented media connection management, such as the Dante
 * name-based routing mechanism, this worker will be linked only to the
 * <b>OcaStreamNetwork </b>object.</li> </ul>
 * @extends RemoteControlClasses.OcaWorker
 * @class OcaNetworkSignalChannel
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaNetworkSignalChannel = make_control_class(
  'OcaNetworkSignalChannel',
  3,
  '\u0001\u0001\u0006',
  2,
  OcaWorker,
  [
    ['AddToConnector', 3, 6, [OcaUint32, OcaUint16], []],
    ['GetConnectorPins', 3, 5, [], [OcaMap(OcaUint32, OcaUint16)]],
    ['GetIDAdvertised', 3, 1, [], [OcaBlob]],
    ['GetNetwork', 3, 3, [], [OcaUint32]],
    ['GetRemoteChannelID', 3, 8, [], [OcaBlob]],
    ['GetSourceOrSink', 3, 10, [], [OcaNetworkMediaSourceOrSink]],
    ['GetStatus', 3, 11, [], [OcaNetworkSignalChannelStatus]],
    ['RemoveFromConnector', 3, 7, [OcaUint32], []],
    ['SetIDAdvertised', 3, 2, [OcaBlob], []],
    ['SetNetwork', 3, 4, [OcaUint32], []],
    ['SetRemoteChannelID', 3, 9, [OcaBlob], []],
  ],
  [
    ['ConnectorPins', [OcaMap(OcaUint32, OcaUint16)], 3, 3, false, false, null],
    ['IDAdvertised', [OcaBlob], 3, 1, false, false, null],
    ['Network', [OcaUint32], 3, 2, false, false, null],
    ['RemoteChannelID', [OcaBlob], 3, 4, false, false, null],
    ['SourceOrSink', [OcaNetworkMediaSourceOrSink], 3, 5, false, false, null],
    ['Status', [OcaNetworkSignalChannelStatus], 3, 6, false, false, null],
  ],
  []
);

/**
 * Adds the object number of the stream connector object to which this
 * media port belongs, and specifies on what index of the stream
 * connector this channel can be found. Return status indicates success
 * of operation.
 * @method RemoteControlClasses.OcaNetworkSignalChannel#AddToConnector
 * @param Connector {OcaONo}
 *
 * @param Index {OcaStreamConnectorPinIndex}
 *
 * @returns {Promise}
 */
/**
 * Gets the object number of the stream connector object to which this
 * media port belongs, if any. If port does not belong to a stream
 * connector, returns zero. Return status indicates success of operation.
 * @method RemoteControlClasses.OcaNetworkSignalChannel#GetConnectorPins
 * @returns {Promise<OcaMap>}
 */
/**
 * Gets the value of the IDAdvertised property. Return status indicates
 * success of operation.
 * @method RemoteControlClasses.OcaNetworkSignalChannel#GetIDAdvertised
 * @returns {Promise<OcaNetworkSignalChannelID>}
 */
/**
 * Gets the object number of the stream network object to which this
 * media port belongs. Return status indicates success of operation.
 * @method RemoteControlClasses.OcaNetworkSignalChannel#GetNetwork
 * @returns {Promise<OcaONo>}
 */
/**
 * Gets the remote channel ID to which this channel is connected. Empty
 * if the channel is not connected (at least not directly to another
 * channel). For stream-oriented connection management this functionality
 * is not used (i.e. the remote channel ID will always be empty).
 * @method RemoteControlClasses.OcaNetworkSignalChannel#GetRemoteChannelID
 * @returns {Promise<OcaNetworkSignalChannelID>}
 */
/**
 * Gets the value of the SourceOrSink property. Return status indicates
 * success of operation.
 * @method RemoteControlClasses.OcaNetworkSignalChannel#GetSourceOrSink
 * @returns {Promise<OcaNetworkMediaSourceOrSink>}
 */
/**
 * Gets the value of the Status property. Return status indicates success
 * of operation.
 * @method RemoteControlClasses.OcaNetworkSignalChannel#GetStatus
 * @returns {Promise<OcaNetworkSignalChannelStatus>}
 */
/**
 * Removes this channel from the passed stream connector. Return status
 * indicates success of operation.
 * @method RemoteControlClasses.OcaNetworkSignalChannel#RemoveFromConnector
 * @param Connector {OcaONo}
 *
 * @returns {Promise}
 */
/**
 * Sets the value of the IDAdvertised property. Return status indicates
 * success of operation.
 * @method RemoteControlClasses.OcaNetworkSignalChannel#SetIDAdvertised
 * @param IDAdvertised {OcaNetworkSignalChannelID}
 *
 * @returns {Promise}
 */
/**
 * Sets the object number of the stream network object to which this
 * media port belongs. Return status indicates success of operation. Only
 * implemented for reconfigurable devices.
 * @method RemoteControlClasses.OcaNetworkSignalChannel#SetNetwork
 * @param Network {OcaONo}
 *
 * @returns {Promise}
 */
/**
 * Sets the remote channel ID to which this channel must be connected.
 * Only used for channel-oriented connection management. For
 * stream-oriented connection management this method is not used.
 * Clearing the remote channel ID (i.e. tearing down the connection) can
 * be done by passing an empty remote channel ID as parameter.
 * @method RemoteControlClasses.OcaNetworkSignalChannel#SetRemoteChannelID
 * @param RemoteChannelID {OcaNetworkSignalChannelID}
 *
 * @returns {Promise}
 */
/**
 * Map of object numbers of <b>OcaStreamConnector</b> objects to
 * <b>OcaStreamConnectorPinIndex </b>of these connectors. This map
 * identifies which <b>OcaStreamConnector</b> objects contain this
 * network signal channel, and indicates at what pin of the connector
 * this channel is found. If the <b>OcaNetworkSignalChannel</b> object is
 * not part of any <b>OcaStreamConnector </b>this map is empty. Note that
 * <b>OcaNetworkSignalChannel</b> objects of type <b>Sink</b> cannot have
 * more than one entry in the map, else it would implicitly perform
 * mixing. <b>OcaNetworkSignalChannel </b>objects of type <b>Source</b>
 * can have multiple entries in the map.
 * @member RemoteControlClasses.OcaNetworkSignalChannel#OnConnectorPinsChanged {PropertyEvent<OcaMap>} - This event is emitted when ConnectorPins changes in the remote object.
 */
/**
 * Character name or binary identifier of the port that is advertised on
 * the network to be found by other devices' discovery processes.
 * Depending on the media transport architecture being used, this ID may
 * be globally unique throughout the network, or only unique within the
 * scope of the specific Network instance to which the port is attached.
 * @member RemoteControlClasses.OcaNetworkSignalChannel#OnIDAdvertisedChanged {PropertyEvent<OcaNetworkSignalChannelID>} - This event is emitted when IDAdvertised changes in the remote object.
 */
/**
 * Object number of stream network object (<b>OcaStreamNetwork</b> or one
 * of its subclasses) to which this signal channel belongs.
 * @member RemoteControlClasses.OcaNetworkSignalChannel#OnNetworkChanged {PropertyEvent<OcaONo>} - This event is emitted when Network changes in the remote object.
 */
/**
 * External ID of ultimate source or destination of signal.
 * @member RemoteControlClasses.OcaNetworkSignalChannel#OnRemoteChannelIDChanged {PropertyEvent<OcaNetworkSignalChannelID>} - This event is emitted when RemoteChannelID changes in the remote object.
 */
/**
 * Describes whether this signal channel is source (emits signals into
 * the network) or sink (receives signals from the network). Sources are
 * sometimes called "talkers", and sinks are sometimes called
 * "listeners".
 * @member RemoteControlClasses.OcaNetworkSignalChannel#OnSourceOrSinkChanged {PropertyEvent<OcaNetworkMediaSourceOrSink>} - This event is emitted when SourceOrSink changes in the remote object.
 */
/**
 * Status of the port
 * @member RemoteControlClasses.OcaNetworkSignalChannel#OnStatusChanged {PropertyEvent<OcaNetworkSignalChannelStatus>} - This event is emitted when Status changes in the remote object.
 */
