/*
 * This file has been generated.
 */

/**
 * Status of an OcaTask: task state plus a nonspecific blob named
 * Parameter which the application can use, or not. <ul> <li>The initial
 * value of Parameter is null. </li> <li>The controller sets the value of
 * Parameter via the Control() method. </li> <li>If the task's state
 * changes due to an internal event (examples: task duration value
 * reached; or failure due to an error), Parameter is not changed.</li>
 * </ul>
 */
export class OcaTaskStatus {
  constructor(ID, State, ErrorCode) {
    /**
     * ID of the task to which this state descriptor applies.
     * @member RemoteControlClasses.OcaTaskStatus#OnIDChanged {PropertyEvent<OcaTaskID>} - This event is emitted when ID changes in the remote object.
     */
    this.ID = ID;
    /**
     * State of the task - running, stopped, etc.
     * @member RemoteControlClasses.OcaTaskStatus#OnStateChanged {PropertyEvent<OcaTaskState>} - This event is emitted when State changes in the remote object.
     */
    this.State = State;
    /**
     * Error code. Value is application-specific.
     * @member RemoteControlClasses.OcaTaskStatus#OnErrorCodeChanged {PropertyEvent<int>} - This event is emitted when ErrorCode changes in the remote object.
     */
    this.ErrorCode = ErrorCode;
  }
}
