/*
 * This file has been generated.
 */

/**
 * Unique identifier of a library volume within the device.
 */
export class OcaLibVolIdentifier {
  constructor(Library, ID) {
    /**
     * Library that holds the LibVol in question.
     * @member RemoteControlClasses.OcaLibVolIdentifier#OnLibraryChanged {PropertyEvent<OcaONo>} - This event is emitted when Library changes in the remote object.
     */
    this.Library = Library;
    /**
     * ID of LibVol within the given library.
     * @member RemoteControlClasses.OcaLibVolIdentifier#OnIDChanged {PropertyEvent<OcaLibVolID>} - This event is emitted when ID changes in the remote object.
     */
    this.ID = ID;
  }
}
