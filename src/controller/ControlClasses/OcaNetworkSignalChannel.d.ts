import { OcaNetworkMediaSourceOrSink } from '../../types/OcaNetworkMediaSourceOrSink.js';
import { OcaNetworkSignalChannelStatus } from '../../types/OcaNetworkSignalChannelStatus.js';
import { PropertyEvent } from '../property_event.js';
import { RemoteDevice } from '../remote_device.js';
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
export declare class OcaNetworkSignalChannel extends OcaWorker {
  /**
   * This event is emitted whenever IDAdvertised changes.
   */
  OnIDAdvertisedChanged: PropertyEvent<Uint8Array>;

  /**
   * This event is emitted whenever Network changes.
   */
  OnNetworkChanged: PropertyEvent<number>;

  /**
   * This event is emitted whenever ConnectorPins changes.
   */
  OnConnectorPinsChanged: PropertyEvent<Map<number, number>>;

  /**
   * This event is emitted whenever RemoteChannelID changes.
   */
  OnRemoteChannelIDChanged: PropertyEvent<Uint8Array>;

  /**
   * This event is emitted whenever SourceOrSink changes.
   */
  OnSourceOrSinkChanged: PropertyEvent<OcaNetworkMediaSourceOrSink>;

  /**
   * This event is emitted whenever Status changes.
   */
  OnStatusChanged: PropertyEvent<OcaNetworkSignalChannelStatus>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the value of the IDAdvertised property. Return status indicates
   * success of operation.
   *
   * @method OcaNetworkSignalChannel#GetIDAdvertised
   * @returns {Promise<Uint8Array>}
   *   A promise which resolves to a single value of type ``Uint8Array``.
   */
  GetIDAdvertised(): Promise<Uint8Array>;

  /**
   * Sets the value of the IDAdvertised property. Return status indicates
   * success of operation.
   *
   * @method OcaNetworkSignalChannel#SetIDAdvertised
   * @param {Uint8Array} IDAdvertised
   *
   * @returns {Promise<void>}
   */
  SetIDAdvertised(IDAdvertised: Uint8Array): Promise<void>;

  /**
   * Gets the object number of the stream network object to which this media
   * port belongs. Return status indicates success of operation.
   *
   * @method OcaNetworkSignalChannel#GetNetwork
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetNetwork(): Promise<number>;

  /**
   * Sets the object number of the stream network object to which this media
   * port belongs. Return status indicates success of operation. Only
   * implemented for reconfigurable devices.
   *
   * @method OcaNetworkSignalChannel#SetNetwork
   * @param {number} Network
   *
   * @returns {Promise<void>}
   */
  SetNetwork(Network: number): Promise<void>;

  /**
   * Gets the object number of the stream connector object to which this media
   * port belongs, if any. If port does not belong to a stream connector,
   * returns zero. Return status indicates success of operation.
   *
   * @method OcaNetworkSignalChannel#GetConnectorPins
   * @returns {Promise<Map<number, number>>}
   *   A promise which resolves to a single value of type ``Map<number, number>``.
   */
  GetConnectorPins(): Promise<Map<number, number>>;

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
  AddToConnector(Connector: number, Index: number): Promise<void>;

  /**
   * Removes this channel from the passed stream connector. Return status
   * indicates success of operation.
   *
   * @method OcaNetworkSignalChannel#RemoveFromConnector
   * @param {number} Connector
   *
   * @returns {Promise<void>}
   */
  RemoveFromConnector(Connector: number): Promise<void>;

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
  GetRemoteChannelID(): Promise<Uint8Array>;

  /**
   * Sets the remote channel ID to which this channel must be connected. Only
   * used for channel-oriented connection management. For stream-oriented
   * connection management this method is not used. Clearing the remote channel
   * ID (i.e. tearing down the connection) can be done by passing an empty
   * remote channel ID as parameter.
   *
   * @method OcaNetworkSignalChannel#SetRemoteChannelID
   * @param {Uint8Array} RemoteChannelID
   *
   * @returns {Promise<void>}
   */
  SetRemoteChannelID(RemoteChannelID: Uint8Array): Promise<void>;

  /**
   * Gets the value of the SourceOrSink property. Return status indicates
   * success of operation.
   *
   * @method OcaNetworkSignalChannel#GetSourceOrSink
   * @returns {Promise<OcaNetworkMediaSourceOrSink>}
   *   A promise which resolves to a single value of type :class:`OcaNetworkMediaSourceOrSink`.
   */
  GetSourceOrSink(): Promise<OcaNetworkMediaSourceOrSink>;

  /**
   * Gets the value of the Status property. Return status indicates success of
   * operation.
   *
   * @method OcaNetworkSignalChannel#GetStatus
   * @returns {Promise<OcaNetworkSignalChannelStatus>}
   *   A promise which resolves to a single value of type :class:`OcaNetworkSignalChannelStatus`.
   */
  GetStatus(): Promise<OcaNetworkSignalChannelStatus>;
}
