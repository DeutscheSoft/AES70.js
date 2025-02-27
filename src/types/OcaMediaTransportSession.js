/*
 * This file has been generated.
 */

export class OcaMediaTransportSession {
  /**
   * Container of all the Media Transport Sessions belonging to a Media
   * Transport Session control Agent.
   * @class OcaMediaTransportSession
   */
  constructor(
    IDInternal,
    IDExternal,
    UserLabel,
    StreamingEnabled,
    AdaptationData,
    Connections,
    ConnectionStates
  ) {
    /**
     * Internal ID, unique within OcaTransportSessionControlAgent instance.
     * @type number
     */
    this.IDInternal = IDInternal;
    /**
     * External ID, i.e. the ID that is published to the network. Format is
     * Adaptation-specific.
     * @type Uint8Array
     */
    this.IDExternal = IDExternal;
    /**
     * Arbitrary text label - not programmatically significant.
     * @type string
     */
    this.UserLabel = UserLabel;
    /**
     * TRUE if and only if media streaming is allowed. If set to FALSE, does not
     * cause disconnection.
     * @type boolean
     */
    this.StreamingEnabled = StreamingEnabled;
    /**
     * Adaptation-specific data.
     * @type Uint8Array
     */
    this.AdaptationData = AdaptationData;
    /**
     * This session's stream connections.
     * @type OcaMediaTransportSessionConnection[]
     */
    this.Connections = Connections;
    /**
     * State(s) of session's connection(s). Map key is connection ID.
     * @type Map<number, OcaMediaTransportSessionConnectionState>
     */
    this.ConnectionStates = ConnectionStates;
  }
}
