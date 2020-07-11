/*
 * This file has been generated.
 */

/**
 * Proto-signal path between two proto-member ports in a factory.
 */
export class OcaProtoSignalPath {
  constructor(SourceProtoPort, SinkProtoPort) {
    /**
     * Source proto-port (i.e. output port) of the proto-signal path.
     * @member RemoteControlClasses.OcaProtoSignalPath#OnSourceProtoPortChanged {PropertyEvent<OcaProtoPort>} - This event is emitted when SourceProtoPort changes in the remote object.
     */
    this.SourceProtoPort = SourceProtoPort;
    /**
     * Sink proto-port (i.e. input port) of the proto-signal path.
     * @member RemoteControlClasses.OcaProtoSignalPath#OnSinkProtoPortChanged {PropertyEvent<OcaProtoPort>} - This event is emitted when SinkProtoPort changes in the remote object.
     */
    this.SinkProtoPort = SinkProtoPort;
  }
}
