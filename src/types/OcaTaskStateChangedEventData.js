/*
 * This file has been generated.
 */

/**
 * This was not documented in the OCA standard.
 */
export class OcaTaskStateChangedEventData {
  constructor(TaskID, ProgramID, Status) {
    /**
     * ID of Task
     * @member RemoteControlClasses.OcaTaskStateChangedEventData#OnTaskIDChanged {PropertyEvent<OcaTaskID>} - This event is emitted when TaskID changes in the remote object.
     */
    this.TaskID = TaskID;
    /**
     * Library volume identifier of Program running in the task at the time
     * of the change, or null
     * @member RemoteControlClasses.OcaTaskStateChangedEventData#OnProgramIDChanged {PropertyEvent<OcaLibVolIdentifier>} - This event is emitted when ProgramID changes in the remote object.
     */
    this.ProgramID = ProgramID;
    /**
     * New task status
     * @member RemoteControlClasses.OcaTaskStateChangedEventData#OnStatusChanged {PropertyEvent<OcaTaskStatus>} - This event is emitted when Status changes in the remote object.
     */
    this.Status = Status;
  }
}
