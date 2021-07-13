/*
 * This file has been generated.
 */

export class OcaVersion {
  /**
   * Representation of a version number of a (hardware/software) component of a device in the form of Major.Minor.Build (e.g. 1.0.123).
   * @class OcaVersion
   */
  constructor(Major, Minor, Build, Component) {
    /**
     * The major version number.
     * @type number
     */
    this.Major = Major;
    /**
     * The minor version number.
     * @type number
     */
    this.Minor = Minor;
    /**
     * The build number. May be 0 if it is not used (e.g. for a hardware component).
     * @type number
     */
    this.Build = Build;
    /**
     * The component.
     * @type OcaComponent
     */
    this.Component = Component;
  }
}
