/*
 * This file has been generated.
 */

export class OcaTaskStateChangedEventData {
  /**
   * This was not documented in the OCA standard.
   * @class OcaTaskStateChangedEventData
   */
  constructor(TaskID, ProgramID, Status) {
    /**
     * ID of Task
     * @type number
     */
    this.TaskID = TaskID;
    /**
     * Library volume identifier of Program running in the task at the time of the change, or null
     * @type OcaLibVolIdentifier
     */
    this.ProgramID = ProgramID;
    /**
     * New task status
     * @type OcaTaskStatus
     */
    this.Status = Status;
  }
}
