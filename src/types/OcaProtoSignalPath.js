/*
 * This file has been generated.
 */

export class OcaProtoSignalPath {
  /**
   * Prototype signal path between two prototype member ports in a factory.
   * @class OcaProtoSignalPath
   */
  constructor(OutputProtoPort, InputProtoPort) {
    /**
     * Output port (i.e. signal source) of the prototype signal path.
     * @type OcaProtoPort
     */
    this.OutputProtoPort = OutputProtoPort;
    /**
     * Input prototype port (i.e. signal destination port) of the prototype
     * signal path.
     * @type OcaProtoPort
     */
    this.InputProtoPort = InputProtoPort;
  }
}
