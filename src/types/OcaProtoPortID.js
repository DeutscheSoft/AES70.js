/*
 * This file has been generated.
 */

export class OcaProtoPortID {
  /**
   * Unique identifier of prototype input or output port within a block factory. Prototype port numbers are ordinals starting at 1, and there are separate numbering spaces for input and output ports.
   * @class OcaProtoPortID
   */
  constructor(Mode, Index) {
    /**
     * Enum that indicates whether the prototype port is an for input or output.
     * @type OcaPortMode
     */
    this.Mode = Mode;
    /**
     * Number of the proto port within input or output group. 1-based.
     * @type number
     */
    this.Index = Index;
  }
}
