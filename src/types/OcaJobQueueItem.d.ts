/*
 * This file has been generated.
 */
import { IOcaProgramRunMode } from './OcaProgramRunMode.js';
import {
  IOcaWhenPhysicalAbsolute,
  OcaWhenPhysicalAbsolute,
} from './OcaWhenPhysicalAbsolute.js';
import {
  IOcaWhenPhysicalRelative,
  OcaWhenPhysicalRelative,
} from './OcaWhenPhysicalRelative.js';

export declare interface IOcaJobQueueItem {
  /**
   * ID of this queue item.
   * @type number
   */
  ID: number;

  /**
   * ONo of Executable to run
   * @type number
   */
  ProgramONo: number;

  /**
   * Run mode
   * @type IOcaProgramRunMode
   */
  RunMode: IOcaProgramRunMode;

  /**
   * Run parameters to use
   * @type Uint8Array
   */
  RunParameters: Uint8Array;

  /**
   * When to run the Task
   * @type (OcaWhenPhysicalAbsolute | OcaWhenPhysicalRelative)
   */
  RunWhen: IOcaWhenPhysicalAbsolute | IOcaWhenPhysicalRelative;

  /**
   * Where to run the Task. Special values are as follows: 0 do not run 1 run on
   * any available task in the scheduler's task list 2-4095 reserved 4096-up
   * Value of ONo of OcaTaskAgent to use
   * @type number
   */
  RunWhere: number;
}

export declare class OcaJobQueueItem implements IOcaJobQueueItem {
  /**
   * An item of the Job Queue in **OcaTaskAgentManager**.
   * @class OcaJobQueueItem
   */
  constructor(
    ID: number,
    ProgramONo: number,
    RunMode: IOcaProgramRunMode,
    RunParameters: Uint8Array,
    RunWhen: OcaWhenPhysicalAbsolute | OcaWhenPhysicalRelative,
    RunWhere: number
  );

  /**
   * ID of this queue item.
   * @type number
   */
  ID: number;

  /**
   * ONo of Executable to run
   * @type number
   */
  ProgramONo: number;

  /**
   * Run mode
   * @type IOcaProgramRunMode
   */
  RunMode: IOcaProgramRunMode;

  /**
   * Run parameters to use
   * @type Uint8Array
   */
  RunParameters: Uint8Array;

  /**
   * When to run the Task
   * @type (OcaWhenPhysicalAbsolute | OcaWhenPhysicalRelative)
   */
  RunWhen: OcaWhenPhysicalAbsolute | OcaWhenPhysicalRelative;

  /**
   * Where to run the Task. Special values are as follows: 0 do not run 1 run on
   * any available task in the scheduler's task list 2-4095 reserved 4096-up
   * Value of ONo of OcaTaskAgent to use
   * @type number
   */
  RunWhere: number;
}
