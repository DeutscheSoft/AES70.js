/*
 * This file has been generated.
 */

export class OcaTaskStatus {
  /**
   * Status of an OcaTask: task state plus a nonspecific blob named Parameter
   * which the application can use, or not.
   *
   *  - The initial value of Parameter is null.
   *
   *  - The controller sets the value of Parameter via the Control() method.
   *
   *  - If the task's state changes due to an internal event (examples: task
   *    duration value reached; or failure due to an error), Parameter is not
   *    changed.
   *
   *
   * @class OcaTaskStatus
   */
  constructor(ID, State, ErrorCode) {
    /**
     * ID of the task to which this state descriptor applies.
     * @type number
     */
    this.ID = ID;
    /**
     * State of the task - running, stopped, etc.
     * @type OcaTaskState
     */
    this.State = State;
    /**
     * Error code. Value is application-specific.
     * @type number
     */
    this.ErrorCode = ErrorCode;
  }
}
