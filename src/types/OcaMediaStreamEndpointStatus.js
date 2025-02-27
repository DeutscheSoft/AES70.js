/*
 * This file has been generated.
 */

export class OcaMediaStreamEndpointStatus {
  /**
   * Current status of a media stream endpoint.
   * @class OcaMediaStreamEndpointStatus
   */
  constructor(State, ErrorCode) {
    /**
     * Endpoint state
     * @type OcaMediaStreamEndpointState
     */
    this.State = State;
    /**
     * Indicates what type of error the endpoint has encountered. Irrelevant if
     * State is not **Fault**.
     * @type number
     */
    this.ErrorCode = ErrorCode;
  }
}
