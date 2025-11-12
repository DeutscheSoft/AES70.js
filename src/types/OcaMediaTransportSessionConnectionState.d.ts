/*
 * This file has been generated.
 */
import {
  IOcaMediaStreamEndpointState,
  OcaMediaStreamEndpointState,
} from './OcaMediaStreamEndpointState.js';

export declare interface IOcaMediaTransportSessionConnectionState {
  /**
   * State of local endpoint of a connection.
   * @type OcaMediaStreamEndpointState
   */
  LocalEndpointState: IOcaMediaStreamEndpointState;

  /**
   * State of remote endpoint of a connection.
   * @type OcaMediaStreamEndpointState
   */
  RemoteEndpointState: IOcaMediaStreamEndpointState;
}

export declare class OcaMediaTransportSessionConnectionState
  implements IOcaMediaTransportSessionConnectionState {
  /**
   * State of a stream connection belonging to an **OcaMediaTransportSession**
   * instance. The state of a stream connection is the union of the states of
   * its two endpoints.
   * @class OcaMediaTransportSessionConnectionState
   */
  constructor(
    LocalEndpointState: OcaMediaStreamEndpointState,
    RemoteEndpointState: OcaMediaStreamEndpointState
  );

  /**
   * State of local endpoint of a connection.
   * @type OcaMediaStreamEndpointState
   */
  LocalEndpointState: OcaMediaStreamEndpointState;

  /**
   * State of remote endpoint of a connection.
   * @type OcaMediaStreamEndpointState
   */
  RemoteEndpointState: OcaMediaStreamEndpointState;
}
