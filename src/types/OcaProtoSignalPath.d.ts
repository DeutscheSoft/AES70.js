/*
 * This file has been generated.
 */
import { IOcaProtoPort, OcaProtoPort } from './OcaProtoPort';

export declare interface IOcaProtoSignalPath {
  /**
   * Output port (i.e. signal source) of the prototype signal path.
   * @type OcaProtoPort
   */
  OutputProtoPort: IOcaProtoPort;

  /**
   * Input prototype port (i.e. signal destination port) of the prototype signal
   * path.
   * @type OcaProtoPort
   */
  InputProtoPort: IOcaProtoPort;
}

export declare class OcaProtoSignalPath implements IOcaProtoSignalPath {
  /**
   * Prototype signal path between two prototype member ports in a factory.
   * @class OcaProtoSignalPath
   */
  constructor(OutputProtoPort: OcaProtoPort, InputProtoPort: OcaProtoPort);

  /**
   * Output port (i.e. signal source) of the prototype signal path.
   * @type OcaProtoPort
   */
  OutputProtoPort: OcaProtoPort;

  /**
   * Input prototype port (i.e. signal destination port) of the prototype signal
   * path.
   * @type OcaProtoPort
   */
  InputProtoPort: OcaProtoPort;
}
