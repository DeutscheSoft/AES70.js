/*
 * This file has been generated.
 */

export class OcaPortID {
  /**
   * Unique identifier of input or output port within a given worker or block class. Port numbers are ordinals starting at 1, and there are separate numbering spaces for input and output ports.
   * @class OcaPortID
   */
  constructor(Mode, Index) {
    /**
     * Enum that indicates whether the port is for input or output.
     * @type OcaPortMode
     */
    this.Mode = Mode;
    /**
     * Index of port within given input or output set of specified object.
     * @type number
     */
    this.Index = Index;
  }
}
