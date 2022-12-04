import {
  IOcaNetworkMediaSourceOrSink,
  OcaNetworkMediaSourceOrSink,
} from '../../types/OcaNetworkMediaSourceOrSink';
import { IOcaStream, OcaStream } from '../../types/OcaStream';
import { OcaStreamConnectorStatus } from '../../types/OcaStreamConnectorStatus';
import { PropertyEvent } from '../property_event';
import { RemoteDevice } from '../remote_device';
import { OcaAgent } from './OcaAgent';

/**
 *  **DEPRECATED CLASS**   *Replaced by the*  **OcaMediaSinkConnector **  *and*  **OcaMediaSourceConnector **  *datatypes in version 3 of Connection Management (CM3)*  Agent class for objects ("connectors") that allow connection of streams to the device. Streams may be single channels or multichannel groups. A connector is either a  *source*  or a  *sink.*  Sources are sometimes called "talkers". Sinks are sometimes called "listeners". Each connector links to zero or more  **OcaStream**  data objects. Each  **OcaStream**  object represents a signal flow to or from a local connector to a remote connector. The remote connector is usually, but not necessarily, in a different node. Each connector collects zero or more  *signal channels* . A signal channel is an instance of  **OcaNetworkSignalChannel.**  Each signal channel exposes one media channel of the stream to the interior of the device. A signal channel therefore is a Worker that contains exactly one  **OcaPort**  data object. Each  **OcaStreamConnector** object belongs to a particular instance of  **OcaStreamNetwork**  or a subclass of  **OcaStreamNetwork**   **.**  Each  **OcaStreamConnector** is linked to its network through the  **Owner**  property.
 *
 *  - When a controller creates an  **OcaStreamConnector** object dynamically, the controller must store the Object Number of the corresponding  **OcaStreamNetwork** object in the  **Owner**  property.
 *
 *
 *  - Upon receiving the  **Owner**  property change, the  **OcaStreamConnector** object must register itself with the given stream network object via some internal means.
 *   This class may be subclassed to support various network types.
 * @extends OcaAgent
 * @class OcaStreamConnector
 */
export declare class OcaStreamConnector extends OcaAgent {
  /**
   * This event is emitted whenever IDAdvertised changes.
   */
  OnIDAdvertisedChanged: PropertyEvent<Uint8Array>;

  /**
   * This event is emitted whenever OwnerNetwork changes.
   */
  OnOwnerNetworkChanged: PropertyEvent<number>;

  /**
   * This event is emitted whenever Pins changes.
   */
  OnPinsChanged: PropertyEvent<Map<number, number>>;

  /**
   * This event is emitted whenever SourceOrSink changes.
   */
  OnSourceOrSinkChanged: PropertyEvent<OcaNetworkMediaSourceOrSink>;

  /**
   * This event is emitted whenever Status changes.
   */
  OnStatusChanged: PropertyEvent<OcaStreamConnectorStatus>;

  /**
   * This event is emitted whenever Streams changes.
   */
  OnStreamsChanged: PropertyEvent<Map<number, OcaStream>>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Connects a stream to this connector. Return status indicates success of operation.
   *
   * @method OcaStreamConnector#ConnectStream
   * @param {IOcaStream} Stream
   *
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  ConnectStream(Stream: IOcaStream): Promise<number>;

  /**
   * Disconnects a stream from this connector. Return status indicates success of operation.
   *
   * @method OcaStreamConnector#DisconnectStream
   * @param {number} StreamID
   *
   * @returns {Promise<void>}
   */
  DisconnectStream(StreamID: number): Promise<void>;

  /**
   * Gets the value of the IDAdvertised property. Return status indicates success of operation.
   *
   * @method OcaStreamConnector#GetIDAdvertised
   * @returns {Promise<Uint8Array>}
   *   A promise which resolves to a single value of type ``Uint8Array``.
   */
  GetIDAdvertised(): Promise<Uint8Array>;

  /**
   * Gets the object number of the  **OcaStreamNetwork** object to which this connector belongs. Return status indicates success of operation.
   *
   * @method OcaStreamConnector#GetOwnerNetwork
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetOwnerNetwork(): Promise<number>;

  /**
   * Gets the list of object numbers of  **OcaNetworkSignalChannel** objects connected to this connector. Return status indicates success of operation.
   *
   * @method OcaStreamConnector#GetPins
   * @returns {Promise<Map<number, number>>}
   *   A promise which resolves to a single value of type ``Map<number, number>``.
   */
  GetPins(): Promise<Map<number, number>>;

  /**
   * Gets the value of the SourceOrSink property. Return status indicates success of operation.
   *
   * @method OcaStreamConnector#GetSourceOrSink
   * @returns {Promise<OcaNetworkMediaSourceOrSink>}
   *   A promise which resolves to a single value of type :class:`OcaNetworkMediaSourceOrSink`.
   */
  GetSourceOrSink(): Promise<OcaNetworkMediaSourceOrSink>;

  /**
   * Gets the value of the Status property. Return status indicates success of operation.
   *
   * @method OcaStreamConnector#GetStatus
   * @returns {Promise<OcaStreamConnectorStatus>}
   *   A promise which resolves to a single value of type :class:`OcaStreamConnectorStatus`.
   */
  GetStatus(): Promise<OcaStreamConnectorStatus>;

  /**
   * Gets the map of OcaStream items connected to this connector. Return status indicates success of operation.
   *
   * @method OcaStreamConnector#GetStreams
   * @returns {Promise<Map<number, OcaStream>>}
   *   A promise which resolves to a single value of type ``Map<number, OcaStream>``.
   */
  GetStreams(): Promise<Map<number, OcaStream>>;

  /**
   * Sets the value of the IDAdvertised property. Return status indicates success of operation.
   *
   * @method OcaStreamConnector#SetIDAdvertised
   * @param {Uint8Array} IDAdvertised
   *
   * @returns {Promise<void>}
   */
  SetIDAdvertised(IDAdvertised: Uint8Array): Promise<void>;

  /**
   * Sets the object number of the  **OcaStreamNetwork** object to which this connector belongs. Return status indicates success of operation. Only implemented for reconfigurable devices.
   *
   * @method OcaStreamConnector#SetOwnerNetwork
   * @param {number} Network
   *
   * @returns {Promise<void>}
   */
  SetOwnerNetwork(Network: number): Promise<void>;

  /**
   * Sets the value of the SourceOrSink property. Return status indicates success of operation. Only implemented for reconfigurable devices. Note that this method can only be called when the SignalChannels property is empty, i.e. does not contain any actual channels.
   *
   * @method OcaStreamConnector#SetSourceOrSink
   * @param {IOcaNetworkMediaSourceOrSink} SourceOrSink
   *
   * @returns {Promise<void>}
   */
  SetSourceOrSink(SourceOrSink: IOcaNetworkMediaSourceOrSink): Promise<void>;
}
