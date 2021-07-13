/*
 * This file has been generated.
 */

export class OcaLibraryIdentifier {
  /**
   * Full identifier (type + object number) of Library (i.e. of an  **OcaLibrary** instance)
   * @class OcaLibraryIdentifier
   */
  constructor(Type, ONo) {
    /**
     * Type of the library (= type of its volumes)
     * @type OcaLibVolType
     */
    this.Type = Type;
    /**
     * Object number of library.
     * @type number
     */
    this.ONo = ONo;
  }
}
