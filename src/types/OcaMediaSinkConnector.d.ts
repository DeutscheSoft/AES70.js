/*
 * This file has been generated.
 */

import { OcaMediaCoding, IOcaMediaCoding } from './OcaMediaCoding';
import { OcaMediaConnection, IOcaMediaConnection } from './OcaMediaConnection';
import { OcaPortID, IOcaPortID } from './OcaPortID';

export declare interface IOcaMediaSinkConnector {
  /**
   * Internal ID.
   * @type number
   */
  IDInternal: number;

  /**
   * Public name of connector. May be published to the media transport network, depending on the type of network.
   * @type string
   */
  IDExternal: string;

  /**
   * Descriptor of the stream connection to this connector. If there is no stream connected to this controller, (i.e. property Connected = FALSE), the value of this property is undefined.
   * @type OcaMediaConnection
   */
  Connection: IOcaMediaConnection;

  /**
   * List of codings available for this connector.
   * @type OcaMediaCoding[]
   */
  AvailableCodings: IOcaMediaCoding[];

  /**
   * Number of pins in this connector.
   * @type number
   */
  PinCount: number;

  /**
   * Map of stream pins (sink channels) to OCA ports (output ports) of the owning  **OcaMediaNetwork** object. This defines what pins that are received from the network are sent to what OCA ports. A pin can only carry one network channel, but can be sent to multiple ports. That is why this data member is a multimap, a pin identifier can map to multiple ports. A pin is identified by an OcaUint16 with value 1..MaxPinCount. Not having a certain pin identifier in this map means that the pin is empty (i.e. not carrying a sink channel). A pin identifier cannot be part of the map more than MaxChannelsPerPin times, unless MaxChannelsPerPin is zero.
   * @type Map<number, OcaPortID[]>
   */
  ChannelPinMap: Map<number, IOcaPortID[]>;

  /**
   * Alignment level of the interface. Note that the dBFS value is referenced to the  *interface's* fullscale value, not to device's internal fullscale value.
   * @type number
   */
  AlignmentLevel: number;

  /**
   * Alignment gain for the connector. This value will be applied to all signals incoming through all pins.
   * @type number
   */
  AlignmentGain: number;

  /**
   * Coding currently used by this connector.
   * @type OcaMediaCoding
   */
  CurrentCoding: IOcaMediaCoding;
}

export declare class OcaMediaSinkConnector implements IOcaMediaSinkConnector {
  /**
   * Media sink (i.e. input) connector. Connects to an inbound stream. Collected by  **OcaMediaTransportNetwork** .
   * @class OcaMediaSinkConnector
   */
  constructor(
    IDInternal: number,
    IDExternal: string,
    Connection: OcaMediaConnection,
    AvailableCodings: OcaMediaCoding[],
    PinCount: number,
    ChannelPinMap: Map<number, OcaPortID[]>,
    AlignmentLevel: number,
    AlignmentGain: number,
    CurrentCoding: OcaMediaCoding
  );

  /**
   * Internal ID.
   * @type number
   */
  IDInternal: number;

  /**
   * Public name of connector. May be published to the media transport network, depending on the type of network.
   * @type string
   */
  IDExternal: string;

  /**
   * Descriptor of the stream connection to this connector. If there is no stream connected to this controller, (i.e. property Connected = FALSE), the value of this property is undefined.
   * @type OcaMediaConnection
   */
  Connection: OcaMediaConnection;

  /**
   * List of codings available for this connector.
   * @type OcaMediaCoding[]
   */
  AvailableCodings: OcaMediaCoding[];

  /**
   * Number of pins in this connector.
   * @type number
   */
  PinCount: number;

  /**
   * Map of stream pins (sink channels) to OCA ports (output ports) of the owning  **OcaMediaNetwork** object. This defines what pins that are received from the network are sent to what OCA ports. A pin can only carry one network channel, but can be sent to multiple ports. That is why this data member is a multimap, a pin identifier can map to multiple ports. A pin is identified by an OcaUint16 with value 1..MaxPinCount. Not having a certain pin identifier in this map means that the pin is empty (i.e. not carrying a sink channel). A pin identifier cannot be part of the map more than MaxChannelsPerPin times, unless MaxChannelsPerPin is zero.
   * @type Map<number, OcaPortID[]>
   */
  ChannelPinMap: Map<number, OcaPortID[]>;

  /**
   * Alignment level of the interface. Note that the dBFS value is referenced to the  *interface's* fullscale value, not to device's internal fullscale value.
   * @type number
   */
  AlignmentLevel: number;

  /**
   * Alignment gain for the connector. This value will be applied to all signals incoming through all pins.
   * @type number
   */
  AlignmentGain: number;

  /**
   * Coding currently used by this connector.
   * @type OcaMediaCoding
   */
  CurrentCoding: OcaMediaCoding;
}
