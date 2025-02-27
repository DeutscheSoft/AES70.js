/*
 * This file has been generated.
 */

export declare interface IOcaMatrixCoordinates {
  /**
   * Column index of Matrix Member. First column is numbered zero.
   * @type number
   */
  X: number;

  /**
   * Row index of Matrix Member. First row is numbered zero.
   * @type number
   */
  Y: number;
}

export declare class OcaMatrixCoordinates implements IOcaMatrixCoordinates {
  /**
   * (X,Y) of a Matrix Member. X=column, Y=row. Zero-relative: X=0 is first
   * column, Y=0 is first row.
   * @class OcaMatrixCoordinates
   */
  constructor(X: number, Y: number);

  /**
   * Column index of Matrix Member. First column is numbered zero.
   * @type number
   */
  X: number;

  /**
   * Row index of Matrix Member. First row is numbered zero.
   * @type number
   */
  Y: number;
}
