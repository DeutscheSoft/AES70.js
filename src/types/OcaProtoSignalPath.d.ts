/*
 * This file has been generated.
 */
import { IOcaProtoPort, OcaProtoPort } from './OcaProtoPort';

export declare interface IOcaProtoSignalPath {
  /**
   * Source proto-port (i.e. output port) of the proto-signal path.
   * @type OcaProtoPort
   */
  SourceProtoPort: IOcaProtoPort;

  /**
   * Sink proto-port (i.e. input port) of the proto-signal path.
   * @type OcaProtoPort
   */
  SinkProtoPort: IOcaProtoPort;
}

export declare class OcaProtoSignalPath implements IOcaProtoSignalPath {
  /**
   * Proto-signal path between two proto-member ports in a factory.
   * @class OcaProtoSignalPath
   */
  constructor(SourceProtoPort: OcaProtoPort, SinkProtoPort: OcaProtoPort);

  /**
   * Source proto-port (i.e. output port) of the proto-signal path.
   * @type OcaProtoPort
   */
  SourceProtoPort: OcaProtoPort;

  /**
   * Sink proto-port (i.e. input port) of the proto-signal path.
   * @type OcaProtoPort
   */
  SinkProtoPort: OcaProtoPort;
}
