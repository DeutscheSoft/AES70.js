/*
 * This file has been generated.
 */

/**
 * Full identifier (type + object number) of Library (i.e. of an
 * <b>OcaLibrary </b>instance)
 */
export class OcaLibraryIdentifier {
  constructor(Type, ONo) {
    /**
     * Type of the library (= type of its volumes)
     * @member RemoteControlClasses.OcaLibraryIdentifier#OnTypeChanged {PropertyEvent<OcaLibVolType>} - This event is emitted when Type changes in the remote object.
     */
    this.Type = Type;
    /**
     * Object number of library.
     * @member RemoteControlClasses.OcaLibraryIdentifier#OnONoChanged {PropertyEvent<OcaONo>} - This event is emitted when ONo changes in the remote object.
     */
    this.ONo = ONo;
  }
}
