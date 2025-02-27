/*
 * This file has been generated.
 */

export class OcaTaskStatus {
  /**
   * Status of an OcaTask: task state plus an error code that gives more detail.
   * **Deprecated** in OCA 1.5.
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
