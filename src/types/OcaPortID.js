/*
 * This file has been generated.
 */

export class OcaPortID {
  /**
   * Unique identifier of input or output Port within a given Worker or Block
   * class. Port numbers are ordinals starting at 1, and there are separate
   * numbering spaces for input and output Ports.
   * @class OcaPortID
   */
  constructor(Direction, Index) {
    /**
     * Indicates whether the port is for input or output. Before OCA 1.5, was
     * named **Mode**, with (now-renamed) datatype **OcaPortMode.**
     * @type OcaIODirection
     */
    this.Direction = Direction;
    /**
     * Index of port within given input or output set of specified object.
     * @type number
     */
    this.Index = Index;
  }
}
