/*
 * This file has been generated.
 */
import { IOcaTaskState, OcaTaskState } from './OcaTaskState';

export declare interface IOcaTaskStatus {
  /**
   * ID of the task to which this state descriptor applies.
   * @type number
   */
  ID: number;

  /**
   * State of the task - running, stopped, etc.
   * @type OcaTaskState
   */
  State: IOcaTaskState;

  /**
   * Error code. Value is application-specific.
   * @type number
   */
  ErrorCode: number;
}

export declare class OcaTaskStatus implements IOcaTaskStatus {
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
  constructor(ID: number, State: OcaTaskState, ErrorCode: number);

  /**
   * ID of the task to which this state descriptor applies.
   * @type number
   */
  ID: number;

  /**
   * State of the task - running, stopped, etc.
   * @type OcaTaskState
   */
  State: OcaTaskState;

  /**
   * Error code. Value is application-specific.
   * @type number
   */
  ErrorCode: number;
}
