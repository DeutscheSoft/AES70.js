import { make_control_class } from '../Base.js';
import { OcaAgent } from './OcaAgent.js';
import { OcaBlob } from '../../OCP1/OcaBlob.js';
import { OcaMap } from '../../OCP1/OcaMap.js';
import { OcaNetworkMediaSourceOrSink } from '../../OCP1/OcaNetworkMediaSourceOrSink.js';
import { OcaStream } from '../../OCP1/OcaStream.js';
import { OcaStreamConnectorStatus } from '../../OCP1/OcaStreamConnectorStatus.js';
import { OcaUint16 } from '../../OCP1/OcaUint16.js';
import { OcaUint32 } from '../../OCP1/OcaUint32.js';

/**
 * <b>DEPRECATED CLASS</b> <i>Replaced by the
 * </i><b><i>OcaMediaSinkConnector </i></b><i>and
 * </i><b><i>OcaMediaSourceConnector </i></b><i>datatypes in version 3 of
 * Connection Management (CM3)</i> Agent class for objects ("connectors")
 * that allow connection of streams to the device. Streams may be single
 * channels or multichannel groups. A connector is either a <i>source</i>
 * or a <i>sink. </i> Sources are sometimes called "talkers". Sinks are
 * sometimes called "listeners". Each connector links to zero or more
 * <b>OcaStream</b> data objects. Each <b>OcaStream</b> object represents
 * a signal flow to or from a local connector to a remote connector. The
 * remote connector is usually, but not necessarily, in a different node.
 * Each connector collects zero or more <i>signal channels</i>. A signal
 * channel is an instance of <b>OcaNetworkSignalChannel.</b> Each signal
 * channel exposes one media channel of the stream to the interior of the
 * device. A signal channel therefore is a Worker that contains exactly
 * one <b>OcaPort</b> data object. Each <b>OcaStreamConnector </b>object
 * belongs to a particular instance of <b>OcaStreamNetwork</b> or a
 * subclass of <b>OcaStreamNetwork</b> <b>.</b> Each
 * <b>OcaStreamConnector </b>is linked to its network through the
 * <b>Owner</b> property. <ul> <li>When a controller creates an
 * <b>OcaStreamConnector </b>object dynamically, the controller must
 * store the Object Number of the corresponding <b>OcaStreamNetwork
 * </b>object in the <b>Owner</b> property. </li> <li>Upon receiving the
 * <b>Owner</b> property change, the <b>OcaStreamConnector </b>object
 * must register itself with the given stream network object via some
 * internal means.</li> </ul> This class may be subclassed to support
 * various network types. <b> </b>
 * @extends RemoteControlClasses.OcaAgent
 * @class OcaStreamConnector
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaStreamConnector = make_control_class(
  'OcaStreamConnector',
  3,
  '\u0001\u0002\u000b',
  2,
  OcaAgent,
  [
    ['ConnectStream', 3, 7, [OcaStream], [OcaUint16]],
    ['DisconnectStream', 3, 8, [OcaUint16], []],
    ['GetIDAdvertised', 3, 3, [], [OcaBlob]],
    ['GetOwnerNetwork', 3, 1, [], [OcaUint32]],
    ['GetPins', 3, 10, [], [OcaMap(OcaUint16, OcaUint32)]],
    ['GetSourceOrSink', 3, 5, [], [OcaNetworkMediaSourceOrSink]],
    ['GetStatus', 3, 11, [], [OcaStreamConnectorStatus]],
    ['GetStreams', 3, 9, [], [OcaMap(OcaUint16, OcaStream)]],
    ['SetIDAdvertised', 3, 4, [OcaBlob], []],
    ['SetOwnerNetwork', 3, 2, [OcaUint32], []],
    ['SetSourceOrSink', 3, 6, [OcaNetworkMediaSourceOrSink], []],
  ],
  [
    ['IDAdvertised', [OcaBlob], 3, 2, false, false, null],
    ['OwnerNetwork', [OcaUint32], 3, 1, false, false, null],
    ['Pins', [OcaMap(OcaUint16, OcaUint32)], 3, 5, false, false, null],
    ['SourceOrSink', [OcaNetworkMediaSourceOrSink], 3, 3, false, false, null],
    ['Status', [OcaStreamConnectorStatus], 3, 6, false, false, null],
    ['Streams', [OcaMap(OcaUint16, OcaStream)], 3, 4, false, false, null],
  ],
  []
);

/**
 * Connects a stream to this connector. Return status indicates success
 * of operation.
 * @method RemoteControlClasses.OcaStreamConnector#ConnectStream
 * @param Stream {OcaStream}
 *
 * @returns {Promise<OcaStreamIndex>}
 */
/**
 * Disconnects a stream from this connector. Return status indicates
 * success of operation.
 * @method RemoteControlClasses.OcaStreamConnector#DisconnectStream
 * @param StreamID {OcaStreamIndex}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the IDAdvertised property. Return status indicates
 * success of operation.
 * @method RemoteControlClasses.OcaStreamConnector#GetIDAdvertised
 * @returns {Promise<OcaStreamConnectorID>}
 */
/**
 * Gets the object number of the <b>OcaStreamNetwork </b>object to which
 * this connector belongs. Return status indicates success of operation.
 * @method RemoteControlClasses.OcaStreamConnector#GetOwnerNetwork
 * @returns {Promise<OcaONo>}
 */
/**
 * Gets the list of object numbers of <b>OcaNetworkSignalChannel
 * </b>objects connected to this connector. Return status indicates
 * success of operation.
 * @method RemoteControlClasses.OcaStreamConnector#GetPins
 * @returns {Promise<OcaMap>}
 */
/**
 * Gets the value of the SourceOrSink property. Return status indicates
 * success of operation.
 * @method RemoteControlClasses.OcaStreamConnector#GetSourceOrSink
 * @returns {Promise<OcaNetworkMediaSourceOrSink>}
 */
/**
 * Gets the value of the Status property. Return status indicates success
 * of operation.
 * @method RemoteControlClasses.OcaStreamConnector#GetStatus
 * @returns {Promise<OcaStreamConnectorStatus>}
 */
/**
 * Gets the map of OcaStream items connected to this connector. Return
 * status indicates success of operation.
 * @method RemoteControlClasses.OcaStreamConnector#GetStreams
 * @returns {Promise<OcaMap>}
 */
/**
 * Sets the value of the IDAdvertised property. Return status indicates
 * success of operation.
 * @method RemoteControlClasses.OcaStreamConnector#SetIDAdvertised
 * @param IDAdvertised {OcaStreamConnectorID}
 *
 * @returns {Promise}
 */
/**
 * Sets the object number of the <b>OcaStreamNetwork </b>object to which
 * this connector belongs. Return status indicates success of operation.
 * Only implemented for reconfigurable devices.
 * @method RemoteControlClasses.OcaStreamConnector#SetOwnerNetwork
 * @param Network {OcaONo}
 *
 * @returns {Promise}
 */
/**
 * Sets the value of the SourceOrSink property. Return status indicates
 * success of operation. Only implemented for reconfigurable devices.
 * Note that this method can only be called when the SignalChannels
 * property is empty, i.e. does not contain any actual channels.
 * @method RemoteControlClasses.OcaStreamConnector#SetSourceOrSink
 * @param SourceOrSink {OcaNetworkMediaSourceOrSink}
 *
 * @returns {Promise}
 */
/**
 * Character name or binary identifier of this connector. This ID is
 * advertised on the network to be found by other devices' discovery
 * processes.
 * @member RemoteControlClasses.OcaStreamConnector#OnIDAdvertisedChanged {PropertyEvent<OcaStreamConnectorID>} - This event is emitted when IDAdvertised changes in the remote object.
 */
/**
 * Object number of stream network object (<b>OcaStreamNetwork</b> or one
 * of its subclasses) to which this connector belongs. In reconfigurable
 * devices, a controller that creates an <b>OcaStreamConnector </b>object
 * must store the appropriate stream network object number into this
 * property. It is assumed that, upon receiving a value into its
 * <b>Owner</b> property, the terminus object will by internal means
 * register itself with the identified stream network.
 * @member RemoteControlClasses.OcaStreamConnector#OnOwnerNetworkChanged {PropertyEvent<OcaONo>} - This event is emitted when OwnerNetwork changes in the remote object.
 */
/**
 * The map of connector pin indexes to
 * <b>OcaNetworkSignalChannel[Source|Sink] </b>objects collected by this
 * connector. The pin indexes are <u>fixed indexes</u> 1 to n, where n is
 * the number of channels the connector accommodates (determined when the
 * connector is created). If a certain pin in the connector is currently
 * not attached the OcaONo of that index is 0.
 * @member RemoteControlClasses.OcaStreamConnector#OnPinsChanged {PropertyEvent<OcaMap>} - This event is emitted when Pins changes in the remote object.
 */
/**
 * Specifies whether this connector is for output (source) or input
 * (sink) signal channels.
 * @member RemoteControlClasses.OcaStreamConnector#OnSourceOrSinkChanged {PropertyEvent<OcaNetworkMediaSourceOrSink>} - This event is emitted when SourceOrSink changes in the remote object.
 */
/**
 * Status of this terminus.
 * @member RemoteControlClasses.OcaStreamConnector#OnStatusChanged {PropertyEvent<OcaStreamConnectorStatus>} - This event is emitted when Status changes in the remote object.
 */
/**
 * The list of <b>OcaStream </b>data objects contained in (i.e. connected
 * to) this connector.
 * @member RemoteControlClasses.OcaStreamConnector#OnStreamsChanged {PropertyEvent<OcaMap>} - This event is emitted when Streams changes in the remote object.
 */
