/*
 * This file has been generated.
 */
import { IOcaComponent, OcaComponent } from './OcaComponent';

export declare interface IOcaVersion {
  /**
   * The major version number.
   * @type number
   */
  Major: number;

  /**
   * The minor version number.
   * @type number
   */
  Minor: number;

  /**
   * The build number. May be 0 if it is not used (e.g. for a hardware
   * component).
   * @type number
   */
  Build: number;

  /**
   * The component.
   * @type OcaComponent
   */
  Component: IOcaComponent;
}

export declare class OcaVersion implements IOcaVersion {
  /**
   * Representation of a version number of a (hardware/software) component of a
   * device in the form of Major.Minor.Build (e.g. 1.0.123).
   * @class OcaVersion
   */
  constructor(
    Major: number,
    Minor: number,
    Build: number,
    Component: OcaComponent
  );

  /**
   * The major version number.
   * @type number
   */
  Major: number;

  /**
   * The minor version number.
   * @type number
   */
  Minor: number;

  /**
   * The build number. May be 0 if it is not used (e.g. for a hardware
   * component).
   * @type number
   */
  Build: number;

  /**
   * The component.
   * @type OcaComponent
   */
  Component: OcaComponent;
}
