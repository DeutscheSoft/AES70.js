/*
 * This file has been generated.
 */

/**
 * Descriptor of a library volume. See <b>03 OcaLibrary</b> for
 * explanation.
 */
export class OcaLibVolMetadata {
  constructor(Name, VolType, Access, Version, Creator, UpDate) {
    /**
     * Name of library volume
     * @member RemoteControlClasses.OcaLibVolMetadata#OnNameChanged {PropertyEvent<string>} - This event is emitted when Name changes in the remote object.
     */
    this.Name = Name;
    /**
     * Type of library volume
     * @member RemoteControlClasses.OcaLibVolMetadata#OnVolTypeChanged {PropertyEvent<OcaLibVolType>} - This event is emitted when VolType changes in the remote object.
     */
    this.VolType = VolType;
    /**
     * Access mode of library volume - readonly or readwrite.
     * @member RemoteControlClasses.OcaLibVolMetadata#OnAccessChanged {PropertyEvent<OcaLibAccess>} - This event is emitted when Access changes in the remote object.
     */
    this.Access = Access;
    /**
     * Version number of library volume.
     * @member RemoteControlClasses.OcaLibVolMetadata#OnVersionChanged {PropertyEvent<number>} - This event is emitted when Version changes in the remote object.
     */
    this.Version = Version;
    /**
     * Name of creator of library volume.
     * @member RemoteControlClasses.OcaLibVolMetadata#OnCreatorChanged {PropertyEvent<string>} - This event is emitted when Creator changes in the remote object.
     */
    this.Creator = Creator;
    /**
     * Latest update timestamp.
     * @member RemoteControlClasses.OcaLibVolMetadata#OnUpDateChanged {PropertyEvent<OcaTimePTP>} - This event is emitted when UpDate changes in the remote object.
     */
    this.UpDate = UpDate;
  }
}
