/*
 * This file has been generated.
 */

export class OcaJobQueueItem {
  /**
   * An item of the Job Queue in **OcaTaskAgentManager**.
   * @class OcaJobQueueItem
   */
  constructor(ID, ProgramONo, RunMode, RunParameters, RunWhen, RunWhere) {
    /**
     * ID of this queue item.
     * @type number
     */
    this.ID = ID;
    /**
     * ONo of Executable to run
     * @type number
     */
    this.ProgramONo = ProgramONo;
    /**
     * Run mode
     * @type IOcaProgramRunMode
     */
    this.RunMode = RunMode;
    /**
     * Run parameters to use
     * @type Uint8Array
     */
    this.RunParameters = RunParameters;
    /**
     * When to run the Task
     * @type (OcaWhenPhysicalAbsolute | OcaWhenPhysicalRelative)
     */
    this.RunWhen = RunWhen;
    /**
     * Where to run the Task. Special values are as follows: 0 do not run 1 run
     * on any available task in the scheduler's task list 2-4095 reserved
     * 4096-up Value of ONo of OcaTaskAgent to use
     * @type number
     */
    this.RunWhere = RunWhere;
  }
}
