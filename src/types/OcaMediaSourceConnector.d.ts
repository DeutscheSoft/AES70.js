/*
 * This file has been generated.
 */
import { IOcaMediaCoding, OcaMediaCoding } from './OcaMediaCoding';
import { IOcaMediaConnection, OcaMediaConnection } from './OcaMediaConnection';
import { IOcaPortID, OcaPortID } from './OcaPortID';

export declare interface IOcaMediaSourceConnector {
  /**
   * Internal ID.
   * @type number
   */
  IDInternal: number;

  /**
   * Public name of connector. May be published to the media transport network,
   * depending on the type of network.
   * @type string
   */
  IDExternal: string;

  /**
   * Descriptor of the stream connection to this connector. If there is no
   * stream connected to this controller, (i.e. property Connected = FALSE), the
   * value of this property is undefined.
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
   * Map of stream pins (source channels) to OCA ports (input ports) of the
   * owning **OcaMediaNetwork** object. This defines what source channels are
   * sent to the network. A pin is identified by an OcaUint16 with value
   * 1..MaxPinCount. Not having a certain pin identifier in this map means that
   * the pin is empty (i.e. not carrying a source channel).
   * @type Map<number, OcaPortID>
   */
  ChannelPinMap: Map<number, IOcaPortID>;

  /**
   * Alignment level of the interface. Note that the dBFS value is referenced to
   * the *interface's* fullscale value, not to device's internal fullscale
   * value.
   * @type number
   */
  AlignmentLevel: number;

  /**
   * Coding currently used by this connector.
   * @type OcaMediaCoding
   */
  CurrentCoding: IOcaMediaCoding;
}

export declare class OcaMediaSourceConnector
  implements IOcaMediaSourceConnector {
  /**
   * Media source (i.e. output) connector. Connects to an outbound stream.
   * Collected by **OcaMediaTransportNetwork**.
   * @class OcaMediaSourceConnector
   */
  constructor(
    IDInternal: number,
    IDExternal: string,
    Connection: OcaMediaConnection,
    AvailableCodings: OcaMediaCoding[],
    PinCount: number,
    ChannelPinMap: Map<number, OcaPortID>,
    AlignmentLevel: number,
    CurrentCoding: OcaMediaCoding
  );

  /**
   * Internal ID.
   * @type number
   */
  IDInternal: number;

  /**
   * Public name of connector. May be published to the media transport network,
   * depending on the type of network.
   * @type string
   */
  IDExternal: string;

  /**
   * Descriptor of the stream connection to this connector. If there is no
   * stream connected to this controller, (i.e. property Connected = FALSE), the
   * value of this property is undefined.
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
   * Map of stream pins (source channels) to OCA ports (input ports) of the
   * owning **OcaMediaNetwork** object. This defines what source channels are
   * sent to the network. A pin is identified by an OcaUint16 with value
   * 1..MaxPinCount. Not having a certain pin identifier in this map means that
   * the pin is empty (i.e. not carrying a source channel).
   * @type Map<number, OcaPortID>
   */
  ChannelPinMap: Map<number, OcaPortID>;

  /**
   * Alignment level of the interface. Note that the dBFS value is referenced to
   * the *interface's* fullscale value, not to device's internal fullscale
   * value.
   * @type number
   */
  AlignmentLevel: number;

  /**
   * Coding currently used by this connector.
   * @type OcaMediaCoding
   */
  CurrentCoding: OcaMediaCoding;
}
