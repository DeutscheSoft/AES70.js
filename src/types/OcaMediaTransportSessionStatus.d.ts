/*
 * This file has been generated.
 */
import {
  IOcaMediaTransportSessionState,
  OcaMediaTransportSessionState,
} from './OcaMediaTransportSessionState.js';

export declare interface IOcaMediaTransportSessionStatus {
  /**
   * Generic state of session
   * @type OcaMediaTransportSessionState
   */
  State: IOcaMediaTransportSessionState;

  /**
   * Adaptation-dependent state data
   * @type Uint8Array
   */
  AdaptationData: Uint8Array;
}

export declare class OcaMediaTransportSessionStatus
  implements IOcaMediaTransportSessionStatus {
  /**
   * Status of a media transport session. Two parts: a generic part, and an
   * application-specific part.
   * @class OcaMediaTransportSessionStatus
   */
  constructor(State: OcaMediaTransportSessionState, AdaptationData: Uint8Array);

  /**
   * Generic state of session
   * @type OcaMediaTransportSessionState
   */
  State: OcaMediaTransportSessionState;

  /**
   * Adaptation-dependent state data
   * @type Uint8Array
   */
  AdaptationData: Uint8Array;
}
