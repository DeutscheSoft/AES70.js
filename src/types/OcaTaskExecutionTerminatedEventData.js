/*
 * This file has been generated.
 */

export class OcaTaskExecutionTerminatedEventData {
  /**
   * Notification data emitted by the **OcaTaskAgent.TaskChanged** event upon
   * successful or unsuccessful termination of an Executable the task agent has
   * been running.
   * @class OcaTaskExecutionTerminatedEventData
   */
  constructor(ExecutableType, ExecutableONo, Result) {
    /**
     * Type of Executable - Program or Commandset.
     * @type OcaExecutableType
     */
    this.ExecutableType = ExecutableType;
    /**
     * Object number of Executable.
     * @type number
     */
    this.ExecutableONo = ExecutableONo;
    /**
     * Execution result: {generic status, program-type-specific details}.
     * Datatype depends on whether Executable is a Program or a Commandset.
     * @type (OcaProgramResult | OcaCommandSetResult)
     */
    this.Result = Result;
  }
}
