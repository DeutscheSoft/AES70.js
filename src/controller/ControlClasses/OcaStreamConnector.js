import { OcaBlob } from '../../OCP1/OcaBlob.js';
import { OcaMap } from '../../OCP1/OcaMap.js';
import { OcaNetworkMediaSourceOrSink } from '../../OCP1/OcaNetworkMediaSourceOrSink.js';
import { OcaStream } from '../../OCP1/OcaStream.js';
import { OcaStreamConnectorStatus } from '../../OCP1/OcaStreamConnectorStatus.js';
import { OcaUint16 } from '../../OCP1/OcaUint16.js';
import { OcaUint32 } from '../../OCP1/OcaUint32.js';
import { make_control_class } from '../make_control_class.js';
import { OcaAgent } from './OcaAgent.js';

/**
 * **DEPRECATED CLASS** *Replaced by the* **OcaMediaSinkConnector ***and*
 * **OcaMediaSourceConnector ***datatypes in version 3 of Connection Management
 * (CM3)* Agent class for objects ("connectors") that allow connection of
 * streams to the device. Streams may be single channels or multichannel groups.
 * A connector is either a *source* or a *sink.* Sources are sometimes called
 * "talkers". Sinks are sometimes called "listeners". Each connector links to
 * zero or more **OcaStream** data objects. Each **OcaStream** object represents
 * a signal flow to or from a local connector to a remote connector. The remote
 * connector is usually, but not necessarily, in a different node. Each
 * connector collects zero or more *signal channels*. A signal channel is an
 * instance of **OcaNetworkSignalChannel.** Each signal channel exposes one
 * media channel of the stream to the interior of the device. A signal channel
 * therefore is a Worker that contains exactly one **OcaPort** data object. Each
 * **OcaStreamConnector** object belongs to a particular instance of
 * **OcaStreamNetwork** or a subclass of **OcaStreamNetwork** **.** Each
 * **OcaStreamConnector** is linked to its network through the **Owner**
 * property.
 *
 *  - When a controller creates an **OcaStreamConnector** object dynamically,
 *    the controller must store the Object Number of the corresponding
 *    **OcaStreamNetwork** object in the **Owner** property.
 *
 *  - Upon receiving the **Owner** property change, the **OcaStreamConnector**
 *    object must register itself with the given stream network object via some
 *    internal means.
 *
 *
 * This class may be subclassed to support various network types. ** **
 * @extends OcaAgent
 * @class OcaStreamConnector
 */
export const OcaStreamConnector = make_control_class(
  'OcaStreamConnector',
  3,
  '\u0001\u0002\u000b',
  3,
  OcaAgent,
  [
    ['GetOwnerNetwork', 3, 1, [], [OcaUint32]],
    ['SetOwnerNetwork', 3, 2, [OcaUint32], []],
    ['GetIDAdvertised', 3, 3, [], [OcaBlob]],
    ['SetIDAdvertised', 3, 4, [OcaBlob], []],
    ['GetSourceOrSink', 3, 5, [], [OcaNetworkMediaSourceOrSink]],
    ['SetSourceOrSink', 3, 6, [OcaNetworkMediaSourceOrSink], []],
    ['ConnectStream', 3, 7, [OcaStream], [OcaUint16]],
    ['DisconnectStream', 3, 8, [OcaUint16], []],
    ['GetStreams', 3, 9, [], [OcaMap(OcaUint16, OcaStream)]],
    ['GetPins', 3, 10, [], [OcaMap(OcaUint16, OcaUint32)]],
    ['GetStatus', 3, 11, [], [OcaStreamConnectorStatus]],
  ],
  [
    ['OwnerNetwork', [OcaUint32], 3, 1, false, false, null],
    ['IDAdvertised', [OcaBlob], 3, 2, false, false, null],
    ['SourceOrSink', [OcaNetworkMediaSourceOrSink], 3, 3, false, false, null],
    ['Streams', [OcaMap(OcaUint16, OcaStream)], 3, 4, false, false, null],
    ['Pins', [OcaMap(OcaUint16, OcaUint32)], 3, 5, false, false, null],
    ['Status', [OcaStreamConnectorStatus], 3, 6, false, false, null],
  ],
  []
);

/**
 * Gets the object number of the **OcaStreamNetwork** object to which this
 * connector belongs. Return status indicates success of operation.
 *
 * @method OcaStreamConnector#GetOwnerNetwork
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Sets the object number of the **OcaStreamNetwork** object to which this
 * connector belongs. Return status indicates success of operation. Only
 * implemented for reconfigurable devices.
 *
 * @method OcaStreamConnector#SetOwnerNetwork
 * @param {number} Network
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value of the IDAdvertised property. Return status indicates success
 * of operation.
 *
 * @method OcaStreamConnector#GetIDAdvertised
 * @returns {Promise<Uint8Array>}
 *   A promise which resolves to a single value of type ``Uint8Array``.
 */
/**
 * Sets the value of the IDAdvertised property. Return status indicates success
 * of operation.
 *
 * @method OcaStreamConnector#SetIDAdvertised
 * @param {Uint8Array} IDAdvertised
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value of the SourceOrSink property. Return status indicates success
 * of operation.
 *
 * @method OcaStreamConnector#GetSourceOrSink
 * @returns {Promise<OcaNetworkMediaSourceOrSink>}
 *   A promise which resolves to a single value of type :class:`OcaNetworkMediaSourceOrSink`.
 */
/**
 * Sets the value of the SourceOrSink property. Return status indicates success
 * of operation. Only implemented for reconfigurable devices. Note that this
 * method can only be called when the SignalChannels property is empty, i.e.
 * does not contain any actual channels.
 *
 * @method OcaStreamConnector#SetSourceOrSink
 * @param {IOcaNetworkMediaSourceOrSink} SourceOrSink
 *
 * @returns {Promise<void>}
 */
/**
 * Connects a stream to this connector. Return status indicates success of
 * operation.
 *
 * @method OcaStreamConnector#ConnectStream
 * @param {IOcaStream} Stream
 *
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Disconnects a stream from this connector. Return status indicates success of
 * operation.
 *
 * @method OcaStreamConnector#DisconnectStream
 * @param {number} StreamID
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the map of OcaStream items connected to this connector. Return status
 * indicates success of operation.
 *
 * @method OcaStreamConnector#GetStreams
 * @returns {Promise<Map<number, OcaStream>>}
 *   A promise which resolves to a single value of type ``Map<number, OcaStream>``.
 */
/**
 * Gets the list of object numbers of **OcaNetworkSignalChannel** objects
 * connected to this connector. Return status indicates success of operation.
 *
 * @method OcaStreamConnector#GetPins
 * @returns {Promise<Map<number, number>>}
 *   A promise which resolves to a single value of type ``Map<number, number>``.
 */
/**
 * Gets the value of the Status property. Return status indicates success of
 * operation.
 *
 * @method OcaStreamConnector#GetStatus
 * @returns {Promise<OcaStreamConnectorStatus>}
 *   A promise which resolves to a single value of type :class:`OcaStreamConnectorStatus`.
 */
/**
 * This event is emitted when the property ``OwnerNetwork`` changes in the remote object.
 * The property ``OwnerNetwork`` is described in the AES70 standard as follows.
 * Object number of stream network object (**OcaStreamNetwork** or one of its
 * subclasses) to which this connector belongs. In reconfigurable devices, a
 * controller that creates an **OcaStreamConnector** object must store the
 * appropriate stream network object number into this property. It is assumed
 * that, upon receiving a value into its **Owner** property, the terminus object
 * will by internal means register itself with the identified stream network.
 *
 * @member {PropertyEvent<number>} OcaStreamConnector#OnOwnerNetworkChanged
 */
/**
 * This event is emitted when the property ``IDAdvertised`` changes in the remote object.
 * The property ``IDAdvertised`` is described in the AES70 standard as follows.
 * Character name or binary identifier of this connector. This ID is advertised
 * on the network to be found by other devices' discovery processes.
 *
 * @member {PropertyEvent<Uint8Array>} OcaStreamConnector#OnIDAdvertisedChanged
 */
/**
 * This event is emitted when the property ``SourceOrSink`` changes in the remote object.
 * The property ``SourceOrSink`` is described in the AES70 standard as follows.
 * Specifies whether this connector is for output (source) or input (sink)
 * signal channels.
 *
 * @member {PropertyEvent<OcaNetworkMediaSourceOrSink>} OcaStreamConnector#OnSourceOrSinkChanged
 */
/**
 * This event is emitted when the property ``Streams`` changes in the remote object.
 * The property ``Streams`` is described in the AES70 standard as follows.
 * The list of **OcaStream** data objects contained in (i.e. connected to) this
 * connector.
 *
 * @member {PropertyEvent<Map<number, OcaStream>>} OcaStreamConnector#OnStreamsChanged
 */
/**
 * This event is emitted when the property ``Pins`` changes in the remote object.
 * The property ``Pins`` is described in the AES70 standard as follows.
 * The map of connector pin indexes to **OcaNetworkSignalChannel[Source|Sink]**
 * objects collected by this connector. The pin indexes are fixed indexes 1 to
 * n, where n is the number of channels the connector accommodates (determined
 * when the connector is created). If a certain pin in the connector is
 * currently not attached the OcaONo of that index is 0.
 *
 * @member {PropertyEvent<Map<number, number>>} OcaStreamConnector#OnPinsChanged
 */
/**
 * This event is emitted when the property ``Status`` changes in the remote object.
 * The property ``Status`` is described in the AES70 standard as follows.
 * Status of this terminus.
 *
 * @member {PropertyEvent<OcaStreamConnectorStatus>} OcaStreamConnector#OnStatusChanged
 */
