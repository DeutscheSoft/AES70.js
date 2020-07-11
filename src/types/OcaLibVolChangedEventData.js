/*
 * This file has been generated.
 */

/**
 * Event data for the <b>OcaLibVolChanged </b>event, which signals a
 * change in an <b>OcaLibrary.Volumes</b> property.
 */
export class OcaLibVolChangedEventData {
  constructor(Event, VolumeID, ChangeType) {
    /**
     * The event that was raised.
     * @member RemoteControlClasses.OcaLibVolChangedEventData#OnEventChanged {PropertyEvent<OcaEvent>} - This event is emitted when Event changes in the remote object.
     */
    this.Event = Event;
    /**
     * ID of library volume that changed.
     * @member RemoteControlClasses.OcaLibVolChangedEventData#OnVolumeIDChanged {PropertyEvent<OcaLibVolID>} - This event is emitted when VolumeID changes in the remote object.
     */
    this.VolumeID = VolumeID;
    /**
     * Type of change : Will be either itemChanged, itemAdded, or
     * itemDeleted.
     * @member RemoteControlClasses.OcaLibVolChangedEventData#OnChangeTypeChanged {PropertyEvent<OcaPropertyChangeType>} - This event is emitted when ChangeType changes in the remote object.
     */
    this.ChangeType = ChangeType;
  }
}
