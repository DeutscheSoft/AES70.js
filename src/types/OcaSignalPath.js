/*
 * This file has been generated.
 */

export class OcaSignalPath {
  /**
   * Signal path between two object ports in the same device.
   * @class OcaSignalPath
   */
  constructor(SourcePort, SinkPort) {
    /**
     * Source port (i.e. output port) of the signal path.
     * @type OcaPort
     */
    this.SourcePort = SourcePort;
    /**
     * Sink port (i.e. input port) of the signal path.
     * @type OcaPort
     */
    this.SinkPort = SinkPort;
  }
}
