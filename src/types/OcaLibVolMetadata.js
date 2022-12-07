/*
 * This file has been generated.
 */

export class OcaLibVolMetadata {
  /**
   * Descriptor of a library volume. See **03 OcaLibrary** for explanation.
   * @class OcaLibVolMetadata
   */
  constructor(Name, VolType, Access, Version, Creator, UpDate) {
    /**
     * Name of library volume
     * @type string
     */
    this.Name = Name;
    /**
     * Type of library volume
     * @type OcaLibVolType
     */
    this.VolType = VolType;
    /**
     * Access mode of library volume - readonly or readwrite.
     * @type OcaLibAccess
     */
    this.Access = Access;
    /**
     * Version number of library volume.
     * @type number
     */
    this.Version = Version;
    /**
     * Name of creator of library volume.
     * @type string
     */
    this.Creator = Creator;
    /**
     * Latest update timestamp.
     * @type OcaTimePTP
     */
    this.UpDate = UpDate;
  }
}
