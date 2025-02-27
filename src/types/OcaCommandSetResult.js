/*
 * This file has been generated.
 */

export class OcaCommandSetResult {
  /**
   * Execution result of a Commandset
   * @class OcaCommandSetResult
   */
  constructor(EndState, CommandResults) {
    /**
     * Completed normally, completed abnormally, aborted, or failed
     * @type OcaGenericEndState
     */
    this.EndState = EndState;
    /**
     * One entry per (successfully or unsuccessfully) executed command.
     * Unexecuted commands are not in the list.
     * @type OcaCommandResult[]
     */
    this.CommandResults = CommandResults;
  }
}
