/*
 * This file has been generated.
 */

export class OcaTaskStatusChangedEventData {
  /**
   * **Deprecated** event raised by **OcaTaskManager** when the status of a
   * legacy task changes. Legacy task are task that execute now-deprecated
   * **OcaLibrary** volumes.
   * @class OcaTaskStatusChangedEventData
   */
  constructor(TaskID, ProgramID, Status) {
    /**
     * ID of Task
     * @type number
     */
    this.TaskID = TaskID;
    /**
     * Identifier of OcaLibrary volume that was executing.
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
