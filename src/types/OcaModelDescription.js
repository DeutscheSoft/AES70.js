/*
 * This file has been generated.
 */

export class OcaModelDescription {
  /**
   * Friendly description of this particular product model.
   * @class OcaModelDescription
   */
  constructor(Manufacturer, Name, Version) {
    /**
     * Name of manufacturer.
     * @type string
     */
    this.Manufacturer = Manufacturer;
    /**
     * Name of this model (whatever the manufacturer wants to call it).
     * @type string
     */
    this.Name = Name;
    /**
     * Text name for the version of this model, e.g. "1.2.1a".
     * @type string
     */
    this.Version = Version;
  }
}
