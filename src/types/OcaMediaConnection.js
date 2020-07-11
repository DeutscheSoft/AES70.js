/*
 * This file has been generated.
 */

/**
 * A single-channel or multichannel connection between a local media
 * connector (i.e. <b>OcaMedia(Source/Sink)Connector </b>instance) of an
 * <b>OcaMediaTransportNetwork </b>object in this node and another
 * ("remote") media source or sink. Normally, the remote source or sink
 * is in another node. The remote end may or may not be an OCA-compliant
 * device. A connection is unidirectional. Its direction is determined by
 * the connector that owns the connection. Its direction is either: <ul>
 * <li><i>Outbound: </i>A signal flow from a <b>source </b>connector to
 * an external destination; or</li> <li><i>Inbound: </i>A signal flow
 * from an external source to a <b>sink </b>connector.</li> </ul> An
 * <b>OcaMediaConnection </b>object may represent a connection to either
 * a unicast or a multicast stream. Any given
 * <b>OcaMedia(Source/Sink)Connector </b>object will only have one media
 * connection. In non-OCA documents, connections are sometimes referred
 * to as <i>streams</i> or <i>flows.</i>
 */
export class OcaMediaConnection {
  constructor(Secure, StreamParameters, StreamCastMode, StreamChannelCount) {
    /**
     * True iff connection is secure.
     * @member RemoteControlClasses.OcaMediaConnection#OnSecureChanged {PropertyEvent<int>} - This event is emitted when Secure changes in the remote object.
     */
    this.Secure = Secure;
    /**
     * Stream parameters (encoding, sampling, etc). Format is media network
     * type dependent.
     * @member RemoteControlClasses.OcaMediaConnection#OnStreamParametersChanged {PropertyEvent<OcaMediaStreamParameters>} - This event is emitted when StreamParameters changes in the remote object.
     */
    this.StreamParameters = StreamParameters;
    /**
     * Unicast or multicast
     * @member RemoteControlClasses.OcaMediaConnection#OnStreamCastModeChanged {PropertyEvent<OcaMediaStreamCastMode>} - This event is emitted when StreamCastMode changes in the remote object.
     */
    this.StreamCastMode = StreamCastMode;
    /**
     * Number of channels in connected stream
     * @member RemoteControlClasses.OcaMediaConnection#OnStreamChannelCountChanged {PropertyEvent<int>} - This event is emitted when StreamChannelCount changes in the remote object.
     */
    this.StreamChannelCount = StreamChannelCount;
  }
}
