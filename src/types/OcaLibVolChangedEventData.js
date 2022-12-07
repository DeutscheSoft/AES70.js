/*
 * This file has been generated.
 */

export class OcaLibVolChangedEventData {
  /**
   * Event data for the **OcaLibVolChanged** event, which signals a change in an
   * **OcaLibrary.Volumes** property.
   * @class OcaLibVolChangedEventData
   */
  constructor(VolumeID, ChangeType) {
    /**
     * ID of library volume that changed.
     * @type number
     */
    this.VolumeID = VolumeID;
    /**
     * Type of change : Will be either itemChanged, itemAdded, or itemDeleted.
     * @type OcaPropertyChangeType
     */
    this.ChangeType = ChangeType;
  }
}
