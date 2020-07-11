/*
 * This file has been generated.
 */

/**
 * Library volume. template. Template parameter is datatype of the
 * volume. See <b>03 OcaLibrary</b> for explanation.
 */
export class OcaLibVol {
  constructor(Metadata, Data) {
    /**
     * Descriptor of library volume
     * @member RemoteControlClasses.OcaLibVol#OnMetadataChanged {PropertyEvent<OcaLibVolMetadata>} - This event is emitted when Metadata changes in the remote object.
     */
    this.Metadata = Metadata;
    /**
     * Contents of library volume. Type depends on template parameter.
     * @member RemoteControlClasses.OcaLibVol#OnDataChanged {PropertyEvent<string>} - This event is emitted when Data changes in the remote object.
     */
    this.Data = Data;
  }
}
