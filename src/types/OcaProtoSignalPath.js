/*
 * This file has been generated.
 */

export class OcaProtoSignalPath {
  /**
   * Proto-signal path between two proto-member ports in a factory.
   * @class OcaProtoSignalPath
   */
  constructor(SourceProtoPort, SinkProtoPort) {
    /**
     * Source proto-port (i.e. output port) of the proto-signal path.
     * @type OcaProtoPort
     */
    this.SourceProtoPort = SourceProtoPort;
    /**
     * Sink proto-port (i.e. input port) of the proto-signal path.
     * @type OcaProtoPort
     */
    this.SinkProtoPort = SinkProtoPort;
  }
}
