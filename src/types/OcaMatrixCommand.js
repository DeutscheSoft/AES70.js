/*
 * This file has been generated.
 */

export class OcaMatrixCommand {
  /**
   * (X,Y) of a Matrix Member. X=column, Y=row. Zero-relative: X=0 is first
   * column, Y=0 is first row.
   * @class OcaMatrixCommand
   */
  constructor(Coordinates, ID, Parameters) {
    /**
     * Coordinates of method owner's Matrix Member. First column and first row
     * are numbered zero.
     * @type OcaMatrixCoordinates
     */
    this.Coordinates = Coordinates;
    /**
     * ID of the method
     * @type OcaMethodID
     */
    this.ID = ID;
    /**
     * Command parameters, if any. Format is method-specific.
     * @type Uint8Array[]
     */
    this.Parameters = Parameters;
  }
}
