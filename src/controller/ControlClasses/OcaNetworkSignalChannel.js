import { OcaBlob } from '../../OCP1/OcaBlob.js';
import { OcaMap } from '../../OCP1/OcaMap.js';
import { OcaNetworkMediaSourceOrSink } from '../../OCP1/OcaNetworkMediaSourceOrSink.js';
import { OcaNetworkSignalChannelStatus } from '../../OCP1/OcaNetworkSignalChannelStatus.js';
import { OcaUint16 } from '../../OCP1/OcaUint16.js';
import { OcaUint32 } from '../../OCP1/OcaUint32.js';
import { make_control_class } from '../make_control_class.js';
import { OcaWorker } from './OcaWorker.js';

/**
 * **DEPRECATED CLASS** *Replaced by features of the* **OcaMediaSinkConnector
 * ***and* **OcaMediaSourceConnector ***datatypes in version 3 of Connection
 * Management (CM3)* Worker that allows connection of one or more internal
 * signal paths to a network signal channel.
 *
 *  - For stream-oriented media connection management such as used by AVB, this
 *    worker will be linked to an **OcaStreamConnector** object and to the
 *    appropriate **OcaStreamNetwork** object.
 *
 *  - For channel-oriented media connection management, such as the Dante
 *    name-based routing mechanism, this worker will be linked only to the
 *    **OcaStreamNetwork** object.
 *
 *
 * @extends OcaWorker
 * @class OcaNetworkSignalChannel
 */
export const OcaNetworkSignalChannel = make_control_class(
  'OcaNetworkSignalChannel',
  3,
  '\u0001\u0001\u0006',
  3,
  OcaWorker,
  [
    ['GetIDAdvertised', 3, 1, [], [OcaBlob]],
    ['SetIDAdvertised', 3, 2, [OcaBlob], []],
    ['GetNetwork', 3, 3, [], [OcaUint32]],
    ['SetNetwork', 3, 4, [OcaUint32], []],
    ['GetConnectorPins', 3, 5, [], [OcaMap(OcaUint32, OcaUint16)]],
    ['AddToConnector', 3, 6, [OcaUint32, OcaUint16], []],
    ['RemoveFromConnector', 3, 7, [OcaUint32], []],
    ['GetRemoteChannelID', 3, 8, [], [OcaBlob]],
    ['SetRemoteChannelID', 3, 9, [OcaBlob], []],
    ['GetSourceOrSink', 3, 10, [], [OcaNetworkMediaSourceOrSink]],
    ['GetStatus', 3, 11, [], [OcaNetworkSignalChannelStatus]],
  ],
  [
    ['IDAdvertised', [OcaBlob], 3, 1, false, false, null],
    ['Network', [OcaUint32], 3, 2, false, false, null],
    ['ConnectorPins', [OcaMap(OcaUint32, OcaUint16)], 3, 3, false, false, null],
    ['RemoteChannelID', [OcaBlob], 3, 4, false, false, null],
    ['SourceOrSink', [OcaNetworkMediaSourceOrSink], 3, 5, false, false, null],
    ['Status', [OcaNetworkSignalChannelStatus], 3, 6, false, false, null],
  ],
  []
);

/**
 * Gets the value of the IDAdvertised property. Return status indicates success
 * of operation.
 *
 * @method OcaNetworkSignalChannel#GetIDAdvertised
 * @returns {Promise<Uint8Array>}
 *   A promise which resolves to a single value of type ``Uint8Array``.
 */
/**
 * Sets the value of the IDAdvertised property. Return status indicates success
 * of operation.
 *
 * @method OcaNetworkSignalChannel#SetIDAdvertised
 * @param {Uint8Array} IDAdvertised
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the object number of the stream network object to which this media port
 * belongs. Return status indicates success of operation.
 *
 * @method OcaNetworkSignalChannel#GetNetwork
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Sets the object number of the stream network object to which this media port
 * belongs. Return status indicates success of operation. Only implemented for
 * reconfigurable devices.
 *
 * @method OcaNetworkSignalChannel#SetNetwork
 * @param {number} Network
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the object number of the stream connector object to which this media
 * port belongs, if any. If port does not belong to a stream connector, returns
 * zero. Return status indicates success of operation.
 *
 * @method OcaNetworkSignalChannel#GetConnectorPins
 * @returns {Promise<Map<number, number>>}
 *   A promise which resolves to a single value of type ``Map<number, number>``.
 */
/**
 * Adds the object number of the stream connector object to which this media
 * port belongs, and specifies on what index of the stream connector this
 * channel can be found. Return status indicates success of operation.
 *
 * @method OcaNetworkSignalChannel#AddToConnector
 * @param {number} Connector
 * @param {number} Index
 *
 * @returns {Promise<void>}
 */
/**
 * Removes this channel from the passed stream connector. Return status
 * indicates success of operation.
 *
 * @method OcaNetworkSignalChannel#RemoveFromConnector
 * @param {number} Connector
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the remote channel ID to which this channel is connected. Empty if the
 * channel is not connected (at least not directly to another channel). For
 * stream-oriented connection management this functionality is not used (i.e.
 * the remote channel ID will always be empty).
 *
 * @method OcaNetworkSignalChannel#GetRemoteChannelID
 * @returns {Promise<Uint8Array>}
 *   A promise which resolves to a single value of type ``Uint8Array``.
 */
/**
 * Sets the remote channel ID to which this channel must be connected. Only used
 * for channel-oriented connection management. For stream-oriented connection
 * management this method is not used. Clearing the remote channel ID (i.e.
 * tearing down the connection) can be done by passing an empty remote channel
 * ID as parameter.
 *
 * @method OcaNetworkSignalChannel#SetRemoteChannelID
 * @param {Uint8Array} RemoteChannelID
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value of the SourceOrSink property. Return status indicates success
 * of operation.
 *
 * @method OcaNetworkSignalChannel#GetSourceOrSink
 * @returns {Promise<OcaNetworkMediaSourceOrSink>}
 *   A promise which resolves to a single value of type :class:`OcaNetworkMediaSourceOrSink`.
 */
/**
 * Gets the value of the Status property. Return status indicates success of
 * operation.
 *
 * @method OcaNetworkSignalChannel#GetStatus
 * @returns {Promise<OcaNetworkSignalChannelStatus>}
 *   A promise which resolves to a single value of type :class:`OcaNetworkSignalChannelStatus`.
 */
/**
 * This event is emitted when the property ``IDAdvertised`` changes in the remote object.
 * The property ``IDAdvertised`` is described in the AES70 standard as follows.
 * Character name or binary identifier of the port that is advertised on the
 * network to be found by other devices' discovery processes. Depending on the
 * media transport architecture being used, this ID may be globally unique
 * throughout the network, or only unique within the scope of the specific
 * Network instance to which the port is attached.
 *
 * @member {PropertyEvent<Uint8Array>} OcaNetworkSignalChannel#OnIDAdvertisedChanged
 */
/**
 * This event is emitted when the property ``Network`` changes in the remote object.
 * The property ``Network`` is described in the AES70 standard as follows.
 * Object number of stream network object (**OcaStreamNetwork** or one of its
 * subclasses) to which this signal channel belongs.
 *
 * @member {PropertyEvent<number>} OcaNetworkSignalChannel#OnNetworkChanged
 */
/**
 * This event is emitted when the property ``ConnectorPins`` changes in the remote object.
 * The property ``ConnectorPins`` is described in the AES70 standard as follows.
 * Map of object numbers of **OcaStreamConnector** objects to
 * **OcaStreamConnectorPinIndex** of these connectors. This map identifies which
 * **OcaStreamConnector** objects contain this network signal channel, and
 * indicates at what pin of the connector this channel is found. If the
 * **OcaNetworkSignalChannel** object is not part of any **OcaStreamConnector**
 * this map is empty. Note that **OcaNetworkSignalChannel** objects of type
 * **Sink** cannot have more than one entry in the map, else it would implicitly
 * perform mixing. **OcaNetworkSignalChannel** objects of type **Source** can
 * have multiple entries in the map.
 *
 * @member {PropertyEvent<Map<number, number>>} OcaNetworkSignalChannel#OnConnectorPinsChanged
 */
/**
 * This event is emitted when the property ``RemoteChannelID`` changes in the remote object.
 * The property ``RemoteChannelID`` is described in the AES70 standard as follows.
 * External ID of ultimate source or destination of signal.
 *
 * @member {PropertyEvent<Uint8Array>} OcaNetworkSignalChannel#OnRemoteChannelIDChanged
 */
/**
 * This event is emitted when the property ``SourceOrSink`` changes in the remote object.
 * The property ``SourceOrSink`` is described in the AES70 standard as follows.
 * Describes whether this signal channel is source (emits signals into the
 * network) or sink (receives signals from the network). Sources are sometimes
 * called "talkers", and sinks are sometimes called "listeners".
 *
 * @member {PropertyEvent<OcaNetworkMediaSourceOrSink>} OcaNetworkSignalChannel#OnSourceOrSinkChanged
 */
/**
 * This event is emitted when the property ``Status`` changes in the remote object.
 * The property ``Status`` is described in the AES70 standard as follows.
 * Status of the port
 *
 * @member {PropertyEvent<OcaNetworkSignalChannelStatus>} OcaNetworkSignalChannel#OnStatusChanged
 */
