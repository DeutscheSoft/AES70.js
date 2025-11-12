/*
 * This file has been generated.
 */
import {
  IOcaMatrixCoordinates,
  OcaMatrixCoordinates,
} from './OcaMatrixCoordinates.js';
import { IOcaMethodID, OcaMethodID } from './OcaMethodID.js';

export declare interface IOcaMatrixCommand {
  /**
   * Coordinates of method owner's Matrix Member. First column and first row are
   * numbered zero.
   * @type OcaMatrixCoordinates
   */
  Coordinates: IOcaMatrixCoordinates;

  /**
   * ID of the method
   * @type OcaMethodID
   */
  ID: IOcaMethodID;

  /**
   * Command parameters, if any. Format is method-specific.
   * @type Uint8Array[]
   */
  Parameters: Uint8Array[];
}

export declare class OcaMatrixCommand implements IOcaMatrixCommand {
  /**
   * (X,Y) of a Matrix Member. X=column, Y=row. Zero-relative: X=0 is first
   * column, Y=0 is first row.
   * @class OcaMatrixCommand
   */
  constructor(
    Coordinates: OcaMatrixCoordinates,
    ID: OcaMethodID,
    Parameters: Uint8Array[]
  );

  /**
   * Coordinates of method owner's Matrix Member. First column and first row are
   * numbered zero.
   * @type OcaMatrixCoordinates
   */
  Coordinates: OcaMatrixCoordinates;

  /**
   * ID of the method
   * @type OcaMethodID
   */
  ID: OcaMethodID;

  /**
   * Command parameters, if any. Format is method-specific.
   * @type Uint8Array[]
   */
  Parameters: Uint8Array[];
}
