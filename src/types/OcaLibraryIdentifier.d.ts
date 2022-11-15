/*
 * This file has been generated.
 */
import { IOcaLibVolType, OcaLibVolType } from './OcaLibVolType';

export declare interface IOcaLibraryIdentifier {
  /**
   * Type of the library (= type of its volumes)
   * @type OcaLibVolType
   */
  Type: IOcaLibVolType;

  /**
   * Object number of library.
   * @type number
   */
  ONo: number;
}

export declare class OcaLibraryIdentifier implements IOcaLibraryIdentifier {
  /**
   * Full identifier (type + object number) of Library (i.e. of an  **OcaLibrary** instance)
   * @class OcaLibraryIdentifier
   */
  constructor(Type: OcaLibVolType, ONo: number);

  /**
   * Type of the library (= type of its volumes)
   * @type OcaLibVolType
   */
  Type: OcaLibVolType;

  /**
   * Object number of library.
   * @type number
   */
  ONo: number;
}
