/*
 * This file has been generated.
 */

export class OcaStream {
  /**
   * A single-channel or multichannel signal flow between a local stream
   * connector (i.e. **OcaStreamConnector** instance) of an **OcaStreamNetwork**
   * object in this node and another ("remote") stream connector. Normally, the
   * remote stream connector is in another node. Each stream is unidirectional.
   * With respect to the **OcaStreamNetwork** object in question, a stream is
   * either:
   *
   *  - *Outbound: * A signal flow from an output connector port in the
   *    **OcaStreamNetwork** object to an external destination; or
   *
   *  - *Inbound: * A signal flow from an external source to an *input*
   *    connector in the **OcaStreamNetwork** object.
   *
   *
   * An **OcaStream** object may represent either a unicast or a multicast
   * stream. Any given **OcaStreamConnector** object may support multiple
   * outbound flows, but not multiple inbound flows.
   * @class OcaStream
   */
  constructor(
    ErrorNumber,
    IDAdvertised,
    Index,
    Label,
    LocalConnectorONo,
    Priority,
    RemoteConnectorIdentification,
    Secure,
    Status,
    StreamParameters,
    StreamType
  ) {
    /**
     * Index of most recent error encountered.
     * @type number
     */
    this.ErrorNumber = ErrorNumber;
    /**
     * Public identifier of this stream.
     * @type Uint8Array
     */
    this.IDAdvertised = IDAdvertised;
    /**
     * Index of this stream. Unique within owner OcaNetwork2 object.
     * @type number
     */
    this.Index = Index;
    /**
     * Arbitrary user-settable name for this stream.
     * @type string
     */
    this.Label = Label;
    /**
     * Object number of **OcaStreamConnector** object to which this stream is
     * connected. A value of zero means the stream is not connected to any
     * connector in this device.
     * @type number
     */
    this.LocalConnectorONo = LocalConnectorONo;
    /**
     * Traffic priority of stream. Values are network implementation dependant.
     * @type number
     */
    this.Priority = Priority;
    /**
     * Full identifier of the connector at the far end of this stream.
     * @type OcaStreamConnectorIdentification
     */
    this.RemoteConnectorIdentification = RemoteConnectorIdentification;
    /**
     * True iff connection is secure.
     * @type boolean
     */
    this.Secure = Secure;
    /**
     * Current status of the stream.
     * @type OcaStreamStatus
     */
    this.Status = Status;
    /**
     * Stream parameters (encoding, sampling, etc). Details TBD
     * @type Uint8Array
     */
    this.StreamParameters = StreamParameters;
    /**
     * Unicast or multicast
     * @type OcaStreamType
     */
    this.StreamType = StreamType;
  }
}
