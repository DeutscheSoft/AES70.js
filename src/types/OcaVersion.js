/*
 * This file has been generated.
 */

/**
 * Representation of a version number of a (hardware/software) component
 * of a device in the form of Major.Minor.Build (e.g. 1.0.123).
 */
export class OcaVersion {
  constructor(Major, Minor, Build, Component) {
    /**
     * The major version number.
     * @member RemoteControlClasses.OcaVersion#OnMajorChanged {PropertyEvent<number>} - This event is emitted when Major changes in the remote object.
     */
    this.Major = Major;
    /**
     * The minor version number.
     * @member RemoteControlClasses.OcaVersion#OnMinorChanged {PropertyEvent<number>} - This event is emitted when Minor changes in the remote object.
     */
    this.Minor = Minor;
    /**
     * The build number. May be 0 if it is not used (e.g. for a hardware
     * component).
     * @member RemoteControlClasses.OcaVersion#OnBuildChanged {PropertyEvent<number>} - This event is emitted when Build changes in the remote object.
     */
    this.Build = Build;
    /**
     * The component.
     * @member RemoteControlClasses.OcaVersion#OnComponentChanged {PropertyEvent<OcaComponent>} - This event is emitted when Component changes in the remote object.
     */
    this.Component = Component;
  }
}
