/*
 * This file has been generated.
 */

export class OcaGrouperStatusChangeEventData {
  /**
   * Class that defines the event data parameter for the  **StatusChange** event defined in  **OcaGrouper** .
   * @class OcaGrouperStatusChangeEventData
   */
  constructor(groupIndex, citizenIndex, changeType) {
    /**
     * Index of relevant group, or zero if event is non-group-specific.
     * @type number
     */
    this.groupIndex = groupIndex;
    /**
     * Index of citizen within given grouper, or zero if event is non-citizen-specific.
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
