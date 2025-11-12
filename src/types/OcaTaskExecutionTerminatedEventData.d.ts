/*
 * This file has been generated.
 */
import {
  IOcaCommandSetResult,
  OcaCommandSetResult,
} from './OcaCommandSetResult.js';
import { IOcaExecutableType, OcaExecutableType } from './OcaExecutableType.js';
import { IOcaProgramResult, OcaProgramResult } from './OcaProgramResult.js';

export declare interface IOcaTaskExecutionTerminatedEventData {
  /**
   * Type of Executable - Program or Commandset.
   * @type OcaExecutableType
   */
  ExecutableType: IOcaExecutableType;

  /**
   * Object number of Executable.
   * @type number
   */
  ExecutableONo: number;

  /**
   * Execution result: {generic status, program-type-specific details}. Datatype
   * depends on whether Executable is a Program or a Commandset.
   * @type (OcaProgramResult | OcaCommandSetResult)
   */
  Result: IOcaProgramResult | IOcaCommandSetResult;
}

export declare class OcaTaskExecutionTerminatedEventData
  implements IOcaTaskExecutionTerminatedEventData {
  /**
   * Notification data emitted by the **OcaTaskAgent.TaskChanged** event upon
   * successful or unsuccessful termination of an Executable the task agent has
   * been running.
   * @class OcaTaskExecutionTerminatedEventData
   */
  constructor(
    ExecutableType: OcaExecutableType,
    ExecutableONo: number,
    Result: OcaProgramResult | OcaCommandSetResult
  );

  /**
   * Type of Executable - Program or Commandset.
   * @type OcaExecutableType
   */
  ExecutableType: OcaExecutableType;

  /**
   * Object number of Executable.
   * @type number
   */
  ExecutableONo: number;

  /**
   * Execution result: {generic status, program-type-specific details}. Datatype
   * depends on whether Executable is a Program or a Commandset.
   * @type (OcaProgramResult | OcaCommandSetResult)
   */
  Result: OcaProgramResult | OcaCommandSetResult;
}
