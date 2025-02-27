/*
 * This file has been generated.
 */
import { IOcaIODirection, OcaIODirection } from './OcaIODirection';
import {
  IOcaMediaStreamCastMode,
  OcaMediaStreamCastMode,
} from './OcaMediaStreamCastMode';
import { IOcaMediaStreamMode, OcaMediaStreamMode } from './OcaMediaStreamMode';
import { IOcaPortID, OcaPortID } from './OcaPortID';
import { IOcaSecurityType, OcaSecurityType } from './OcaSecurityType';

export declare interface IOcaMediaStreamEndpoint {
  /**
   * Internal ID.
   * @type number
   */
  IDInternal: number;

  /**
   * Public identifier of endpoint. May be advertised on the network.
   * @type Uint8Array
   */
  IDExternal: Uint8Array;

  /**
   * Input or output (input ``->`` samples flow into endpoint from network,
   * ``output->samples`` flow out of endpoint into network)
   * @type OcaIODirection
   */
  Direction: IOcaIODirection;

  /**
   * Arbitrary user-settable label for endpoint.
   * @type string
   */
  UserLabel: string;

  /**
   * ID(s) of the Network Assignment(s) this endpoint is using.
   * @type number[]
   */
  NetworkAssignmentIDs: number[];

  /**
   * Media stream mode capabilities of this endpoint. List of indexes into
   * **OcaMediaTransportApplication.MediaStreamModeCapabilities**.
   * @type number[]
   */
  StreamModeCapabilityIDs: number[];

  /**
   * ONo of **OcaMediaClock3** media clock for this endpoint.
   * @type number
   */
  ClockONo: number;

  /**
   * TRUE if and only if channel map may be modified at runtime.
   * @type boolean
   */
  ChannelMapDynamic: boolean;

  /**
   * Map of this endpoint's signal channels to OCA Ports of the owning
   * **OcaMediaTransportApplication** object. Each input endpoint channel may be
   * mapped to zero or more **output** Ports; each output endpoint channel may
   * be mapped to at most one **input** Port.
   * @type Map<number, OcaPortID[]>
   */
  ChannelMap: Map<number, IOcaPortID[]>;

  /**
   * Alignment Level of the endpoint. The dBFS value is referenced to the
   * endpoint's fullscale value, not to Device's internal fullscale value.
   * @type number
   */
  AlignmentLevel: number;

  /**
   * Stream mode of current connection. If there is a no current connection,
   * value is undefined.
   * @type OcaMediaStreamMode
   */
  CurrentStreamMode: IOcaMediaStreamMode;

  /**
   * Security type of this endpoint, if any.
   * @type OcaSecurityType
   */
  SecurityType: IOcaSecurityType;

  /**
   * Unicast or multicast
   * @type OcaMediaStreamCastMode
   */
  StreamCastMode: IOcaMediaStreamCastMode;

  /**
   * Adaptation-specific connection data, e.g. IP addresses and ports of input
   * and output endpoints. Specific media transport adaptations will define the
   * fine-structure of this **OcaBlob**.
   * @type Uint8Array
   */
  AdaptationData: Uint8Array;

  /**
   * ID of redundant set this endpoint belongs to. Unique within
   * **OcaMediaTransportApplication** instance.
   * @type number
   */
  RedundantSetID: number;
}

export declare class OcaMediaStreamEndpoint implements IOcaMediaStreamEndpoint {
  /**
   * Media stream endpoint descriptor. Collected by
   * **OcaMediaTransportApplication**.
   * @class OcaMediaStreamEndpoint
   */
  constructor(
    IDInternal: number,
    IDExternal: Uint8Array,
    Direction: OcaIODirection,
    UserLabel: string,
    NetworkAssignmentIDs: number[],
    StreamModeCapabilityIDs: number[],
    ClockONo: number,
    ChannelMapDynamic: boolean,
    ChannelMap: Map<number, OcaPortID[]>,
    AlignmentLevel: number,
    CurrentStreamMode: OcaMediaStreamMode,
    SecurityType: OcaSecurityType,
    StreamCastMode: OcaMediaStreamCastMode,
    AdaptationData: Uint8Array,
    RedundantSetID: number
  );

  /**
   * Internal ID.
   * @type number
   */
  IDInternal: number;

  /**
   * Public identifier of endpoint. May be advertised on the network.
   * @type Uint8Array
   */
  IDExternal: Uint8Array;

  /**
   * Input or output (input ``->`` samples flow into endpoint from network,
   * ``output->samples`` flow out of endpoint into network)
   * @type OcaIODirection
   */
  Direction: OcaIODirection;

  /**
   * Arbitrary user-settable label for endpoint.
   * @type string
   */
  UserLabel: string;

  /**
   * ID(s) of the Network Assignment(s) this endpoint is using.
   * @type number[]
   */
  NetworkAssignmentIDs: number[];

  /**
   * Media stream mode capabilities of this endpoint. List of indexes into
   * **OcaMediaTransportApplication.MediaStreamModeCapabilities**.
   * @type number[]
   */
  StreamModeCapabilityIDs: number[];

  /**
   * ONo of **OcaMediaClock3** media clock for this endpoint.
   * @type number
   */
  ClockONo: number;

  /**
   * TRUE if and only if channel map may be modified at runtime.
   * @type boolean
   */
  ChannelMapDynamic: boolean;

  /**
   * Map of this endpoint's signal channels to OCA Ports of the owning
   * **OcaMediaTransportApplication** object. Each input endpoint channel may be
   * mapped to zero or more **output** Ports; each output endpoint channel may
   * be mapped to at most one **input** Port.
   * @type Map<number, OcaPortID[]>
   */
  ChannelMap: Map<number, OcaPortID[]>;

  /**
   * Alignment Level of the endpoint. The dBFS value is referenced to the
   * endpoint's fullscale value, not to Device's internal fullscale value.
   * @type number
   */
  AlignmentLevel: number;

  /**
   * Stream mode of current connection. If there is a no current connection,
   * value is undefined.
   * @type OcaMediaStreamMode
   */
  CurrentStreamMode: OcaMediaStreamMode;

  /**
   * Security type of this endpoint, if any.
   * @type OcaSecurityType
   */
  SecurityType: OcaSecurityType;

  /**
   * Unicast or multicast
   * @type OcaMediaStreamCastMode
   */
  StreamCastMode: OcaMediaStreamCastMode;

  /**
   * Adaptation-specific connection data, e.g. IP addresses and ports of input
   * and output endpoints. Specific media transport adaptations will define the
   * fine-structure of this **OcaBlob**.
   * @type Uint8Array
   */
  AdaptationData: Uint8Array;

  /**
   * ID of redundant set this endpoint belongs to. Unique within
   * **OcaMediaTransportApplication** instance.
   * @type number
   */
  RedundantSetID: number;
}
