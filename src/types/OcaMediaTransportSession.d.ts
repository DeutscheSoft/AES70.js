/*
 * This file has been generated.
 */
import {
  IOcaMediaTransportSessionConnection,
  OcaMediaTransportSessionConnection,
} from './OcaMediaTransportSessionConnection.js';
import {
  IOcaMediaTransportSessionConnectionState,
  OcaMediaTransportSessionConnectionState,
} from './OcaMediaTransportSessionConnectionState.js';

export declare interface IOcaMediaTransportSession {
  /**
   * Internal ID, unique within OcaTransportSessionControlAgent instance.
   * @type number
   */
  IDInternal: number;

  /**
   * External ID, i.e. the ID that is published to the network. Format is
   * Adaptation-specific.
   * @type Uint8Array
   */
  IDExternal: Uint8Array;

  /**
   * Arbitrary text label - not programmatically significant.
   * @type string
   */
  UserLabel: string;

  /**
   * TRUE if and only if media streaming is allowed. If set to FALSE, does not
   * cause disconnection.
   * @type boolean
   */
  StreamingEnabled: boolean;

  /**
   * Adaptation-specific data.
   * @type Uint8Array
   */
  AdaptationData: Uint8Array;

  /**
   * This session's stream connections.
   * @type OcaMediaTransportSessionConnection[]
   */
  Connections: IOcaMediaTransportSessionConnection[];

  /**
   * State(s) of session's connection(s). Map key is connection ID.
   * @type Map<number, OcaMediaTransportSessionConnectionState>
   */
  ConnectionStates: Map<number, IOcaMediaTransportSessionConnectionState>;
}

export declare class OcaMediaTransportSession
  implements IOcaMediaTransportSession {
  /**
   * Container of all the Media Transport Sessions belonging to a Media
   * Transport Session control Agent.
   * @class OcaMediaTransportSession
   */
  constructor(
    IDInternal: number,
    IDExternal: Uint8Array,
    UserLabel: string,
    StreamingEnabled: boolean,
    AdaptationData: Uint8Array,
    Connections: OcaMediaTransportSessionConnection[],
    ConnectionStates: Map<number, OcaMediaTransportSessionConnectionState>
  );

  /**
   * Internal ID, unique within OcaTransportSessionControlAgent instance.
   * @type number
   */
  IDInternal: number;

  /**
   * External ID, i.e. the ID that is published to the network. Format is
   * Adaptation-specific.
   * @type Uint8Array
   */
  IDExternal: Uint8Array;

  /**
   * Arbitrary text label - not programmatically significant.
   * @type string
   */
  UserLabel: string;

  /**
   * TRUE if and only if media streaming is allowed. If set to FALSE, does not
   * cause disconnection.
   * @type boolean
   */
  StreamingEnabled: boolean;

  /**
   * Adaptation-specific data.
   * @type Uint8Array
   */
  AdaptationData: Uint8Array;

  /**
   * This session's stream connections.
   * @type OcaMediaTransportSessionConnection[]
   */
  Connections: OcaMediaTransportSessionConnection[];

  /**
   * State(s) of session's connection(s). Map key is connection ID.
   * @type Map<number, OcaMediaTransportSessionConnectionState>
   */
  ConnectionStates: Map<number, OcaMediaTransportSessionConnectionState>;
}
