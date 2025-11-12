/*
 * This file has been generated.
 */
import { IOcaTaskState, OcaTaskState } from './OcaTaskState.js';

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
   * Status of an OcaTask: task state plus an error code that gives more detail.
   * **Deprecated** in OCA 1.5.
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
