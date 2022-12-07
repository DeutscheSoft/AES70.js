/*
 * This file has been generated.
 */

export class OcaGrouperCitizen {
  /**
   * Describes a citizen of a grouper. Refers to a specific worker object
   * somewhere in the media network.
   * @class OcaGrouperCitizen
   */
  constructor(Index, ObjectPath, Online) {
    /**
     * Index of citizen in Grouper
     * @type number
     */
    this.Index = Index;
    /**
     * Object path (= hostname + object number) of the worker object that is the
     * citizen of the grouper.
     * @type OcaOPath
     */
    this.ObjectPath = ObjectPath;
    /**
     * True iff connection from grouper to citizen is healthy.
     * @type boolean
     */
    this.Online = Online;
  }
}
