/*
 * This file has been generated.
 */

export class OcaMediaTransportSessionStatus {
  /**
   * Status of a media transport session. Two parts: a generic part, and an
   * application-specific part.
   * @class OcaMediaTransportSessionStatus
   */
  constructor(State, AdaptationData) {
    /**
     * Generic state of session
     * @type OcaMediaTransportSessionState
     */
    this.State = State;
    /**
     * Adaptation-dependent state data
     * @type Uint8Array
     */
    this.AdaptationData = AdaptationData;
  }
}
