/*
 * This file has been generated.
 */

export class OcaGrouperStatusChangeEventData {
  /**
   * Notification data supplied by the **OcaGrouper.StatusChange()** event.
   * **Deprecated** in AES70-2024.
   * @class OcaGrouperStatusChangeEventData
   */
  constructor(groupIndex, citizenIndex, changeType) {
    /**
     * Index of relevant group, or zero if event is non-group-specific.
     * @type number
     */
    this.groupIndex = groupIndex;
    /**
     * Index of citizen within given grouper, or zero if event is
     * non-citizen-specific.
     * @type number
     */
    this.citizenIndex = citizenIndex;
    /**
     * Type of change.
     * @type OcaGrouperStatusChangeType
     */
    this.changeType = changeType;
  }
}
