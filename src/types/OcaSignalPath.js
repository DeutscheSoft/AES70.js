/*
 * This file has been generated.
 */

export class OcaSignalPath {
  /**
   * Signal path between two OcaPorts in the same device.
   * @class OcaSignalPath
   */
  constructor(OutputPort, InputPort) {
    /**
     * Output port. Signal originates here.
     * @type OcaPort
     */
    this.OutputPort = OutputPort;
    /**
     * Input port. Signal is received here.
     * @type OcaPort
     */
    this.InputPort = InputPort;
  }
}
