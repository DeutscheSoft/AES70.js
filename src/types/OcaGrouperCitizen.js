/*
 * This file has been generated.
 */

export class OcaGrouperCitizen {
  /**
   * Describes a Citizen of a Grouper. Refers to a specific Worker object
   * somewhere in the media network. **Deprecated** in AES70-2024.
   * @class OcaGrouperCitizen
   */
  constructor(Index, ObjectPath, Online) {
    /**
     * Index of Citizen in Grouper
     * @type number
     */
    this.Index = Index;
    /**
     * Object Path (= hostname + Object Number) of the Worker object that is the
     * Citizen of the Grouper.
     * @type OcaOPath
     */
    this.ObjectPath = ObjectPath;
    /**
     * True if and only if connection from Grouper to Citizen is healthy.
     * @type boolean
     */
    this.Online = Online;
  }
}
