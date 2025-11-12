/*
 * This file has been generated.
 */
import {
  IOcaMediaStreamEndpointState,
  OcaMediaStreamEndpointState,
} from './OcaMediaStreamEndpointState.js';

export declare interface IOcaMediaStreamEndpointStatus {
  /**
   * Endpoint state
   * @type OcaMediaStreamEndpointState
   */
  State: IOcaMediaStreamEndpointState;

  /**
   * Indicates what type of error the endpoint has encountered. Irrelevant if
   * State is not **Fault**.
   * @type number
   */
  ErrorCode: number;
}

export declare class OcaMediaStreamEndpointStatus
  implements IOcaMediaStreamEndpointStatus {
  /**
   * Current status of a media stream endpoint.
   * @class OcaMediaStreamEndpointStatus
   */
  constructor(State: OcaMediaStreamEndpointState, ErrorCode: number);

  /**
   * Endpoint state
   * @type OcaMediaStreamEndpointState
   */
  State: OcaMediaStreamEndpointState;

  /**
   * Indicates what type of error the endpoint has encountered. Irrelevant if
   * State is not **Fault**.
   * @type number
   */
  ErrorCode: number;
}
