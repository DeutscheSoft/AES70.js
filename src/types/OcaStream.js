/*
 * This file has been generated.
 */

/**
 * A single-channel or multichannel signal flow between a local stream
 * connector (i.e. <b>OcaStreamConnector </b>instance) of an
 * <b>OcaStreamNetwork </b>object in this node and another ("remote")
 * stream connector. Normally, the remote stream connector is in another
 * node. Each stream is unidirectional. With respect to the
 * <b>OcaStreamNetwork </b>object in question, a stream is either: <ul>
 * <li><i>Outbound: </i>A signal flow from an output connector port in
 * the <b>OcaStreamNetwork </b>object to an external destination; or</li>
 * <li><i>Inbound: </i>A signal flow from an external source to an
 * <i>input </i>connector in the <b>OcaStreamNetwork </b>object.</li>
 * </ul> An <b>OcaStream </b>object may represent either a unicast or a
 * multicast stream. Any given <b>OcaStreamConnector </b>object may
 * support multiple outbound flows, but not multiple inbound flows.
 */
export class OcaStream {
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
     * @member RemoteControlClasses.OcaStream#OnErrorNumberChanged {PropertyEvent<int>} - This event is emitted when ErrorNumber changes in the remote object.
     */
    this.ErrorNumber = ErrorNumber;
    /**
     * Public identifier of this stream.
     * @member RemoteControlClasses.OcaStream#OnIDAdvertisedChanged {PropertyEvent<OcaStreamID>} - This event is emitted when IDAdvertised changes in the remote object.
     */
    this.IDAdvertised = IDAdvertised;
    /**
     * Index of this stream. Unique within owner OcaNetwork2 object.
     * @member RemoteControlClasses.OcaStream#OnIndexChanged {PropertyEvent<OcaStreamIndex>} - This event is emitted when Index changes in the remote object.
     */
    this.Index = Index;
    /**
     * Arbitrary user-settable name for this stream.
     * @member RemoteControlClasses.OcaStream#OnLabelChanged {PropertyEvent<string>} - This event is emitted when Label changes in the remote object.
     */
    this.Label = Label;
    /**
     * Object number of <b>OcaStreamConnector </b>object to which this stream
     * is connected. A value of zero means the stream is not connected to any
     * connector in this device.
     * @member RemoteControlClasses.OcaStream#OnLocalConnectorONoChanged {PropertyEvent<OcaONo>} - This event is emitted when LocalConnectorONo changes in the remote object.
     */
    this.LocalConnectorONo = LocalConnectorONo;
    /**
     * Traffic priority of stream. Values are network implementation
     * dependant.
     * @member RemoteControlClasses.OcaStream#OnPriorityChanged {PropertyEvent<int>} - This event is emitted when Priority changes in the remote object.
     */
    this.Priority = Priority;
    /**
     * Full identifier of the connector at the far end of this stream.
     * @member RemoteControlClasses.OcaStream#OnRemoteConnectorIdentificationChanged {PropertyEvent<OcaStreamConnectorIdentification>} - This event is emitted when RemoteConnectorIdentification changes in the remote object.
     */
    this.RemoteConnectorIdentification = RemoteConnectorIdentification;
    /**
     * True iff connection is secure.
     * @member RemoteControlClasses.OcaStream#OnSecureChanged {PropertyEvent<int>} - This event is emitted when Secure changes in the remote object.
     */
    this.Secure = Secure;
    /**
     * Current status of the stream.
     * @member RemoteControlClasses.OcaStream#OnStatusChanged {PropertyEvent<OcaStreamStatus>} - This event is emitted when Status changes in the remote object.
     */
    this.Status = Status;
    /**
     * Stream parameters (encoding, sampling, etc). Details TBD
     * @member RemoteControlClasses.OcaStream#OnStreamParametersChanged {PropertyEvent<OcaStreamParameters>} - This event is emitted when StreamParameters changes in the remote object.
     */
    this.StreamParameters = StreamParameters;
    /**
     * Unicast or multicast
     * @member RemoteControlClasses.OcaStream#OnStreamTypeChanged {PropertyEvent<OcaStreamType>} - This event is emitted when StreamType changes in the remote object.
     */
    this.StreamType = StreamType;
  }
}
