/*
 * This file has been generated.
 */

export class OcaProgramResult {
  /**
   * Execution result of a Program.
   * @class OcaProgramResult
   */
  constructor(EndState, Data) {
    /**
     * Completed normally, completed abnormally, aborted, or failed
     * @type OcaGenericEndState
     */
    this.EndState = EndState;
    /**
     * Program-specific return info - may be null.
     * @type OcaTypedBlob[]
     */
    this.Data = Data;
  }
}
