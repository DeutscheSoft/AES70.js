/*
 * This file has been generated.
 */

export class OcaMatrixCoordinates {
  /**
   * (X,Y) of a Matrix Member. X=column, Y=row. Zero-relative: X=0 is first
   * column, Y=0 is first row.
   * @class OcaMatrixCoordinates
   */
  constructor(X, Y) {
    /**
     * Column index of Matrix Member. First column is numbered zero.
     * @type number
     */
    this.X = X;
    /**
     * Row index of Matrix Member. First row is numbered zero.
     * @type number
     */
    this.Y = Y;
  }
}
