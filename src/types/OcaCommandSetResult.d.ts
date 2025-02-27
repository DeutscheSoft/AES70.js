/*
 * This file has been generated.
 */
import { IOcaCommandResult, OcaCommandResult } from './OcaCommandResult';
import { IOcaGenericEndState, OcaGenericEndState } from './OcaGenericEndState';

export declare interface IOcaCommandSetResult {
  /**
   * Completed normally, completed abnormally, aborted, or failed
   * @type OcaGenericEndState
   */
  EndState: IOcaGenericEndState;

  /**
   * One entry per (successfully or unsuccessfully) executed command. Unexecuted
   * commands are not in the list.
   * @type OcaCommandResult[]
   */
  CommandResults: IOcaCommandResult[];
}

export declare class OcaCommandSetResult implements IOcaCommandSetResult {
  /**
   * Execution result of a Commandset
   * @class OcaCommandSetResult
   */
  constructor(EndState: OcaGenericEndState, CommandResults: OcaCommandResult[]);

  /**
   * Completed normally, completed abnormally, aborted, or failed
   * @type OcaGenericEndState
   */
  EndState: OcaGenericEndState;

  /**
   * One entry per (successfully or unsuccessfully) executed command. Unexecuted
   * commands are not in the list.
   * @type OcaCommandResult[]
   */
  CommandResults: OcaCommandResult[];
}
