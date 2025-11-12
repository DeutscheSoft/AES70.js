/*
 * This file has been generated.
 */
import {
  IOcaLibVolIdentifier,
  OcaLibVolIdentifier,
} from './OcaLibVolIdentifier.js';
import { IOcaTime, OcaTime } from './OcaTime.js';
import { IOcaTimeMode, OcaTimeMode } from './OcaTimeMode.js';

export declare interface IOcaTask {
  /**
   * Task ID - assigned by OcaTaskManager
   * @type number
   */
  ID: number;

  /**
   * @type string
   */
  Label: string;

  /**
   * ID of program this task was given or all null if it's idle.
   * @type OcaLibVolIdentifier
   */
  ProgramID: IOcaLibVolIdentifier;

  /**
   * ID of group the task is in, or zero if it isn't in a group
   * @type number
   */
  GroupID: number;

  /**
   * Absolute or Relative time.
   * @type OcaTimeMode
   */
  TimeMode: IOcaTimeMode;

  /**
   * ONo of relevant OcaTimeSource object, or zero if none.
   * @type number
   */
  TimeSourceONo: number;

  /**
   * Time at which to start task, or zero if task will be manually started. If
   * **TimeMode=Relative**, the actual event start time equals the value of
   * **StartTime** plus the absolute time that **StartTime** was most recently
   * set. Datatype shall depend on value of **TimeUnits**: - If **TimeUnits** is
   * seconds, datatype shall be **OcaTime;** - If TimeUnits is samples, datatype
   * shall be **OcaUint64**. If **TimeMode=Absolute**, the actual event start
   * time equals the value of **StartTime**
   * @type OcaTime
   */
  StartTime: IOcaTime;

  /**
   * Duration of task execution, or zero to run until complete or explicitly
   * stopped.
   * @type number
   */
  Duration: number;

  /**
   * Arbitrary application-specific parameters for the Task and its Program.
   * @type Uint8Array
   */
  ApplicationSpecificParameters: Uint8Array;
}

export declare class OcaTask implements IOcaTask {
  /**
   * An execution thread that runs an AES70 Program. Programs are OcaLibrary
   * volumes that contain application-specific execution instructions. **
   * Deprecated** in OCA 1.5.
   * @class OcaTask
   */
  constructor(
    ID: number,
    Label: string,
    ProgramID: OcaLibVolIdentifier,
    GroupID: number,
    TimeMode: OcaTimeMode,
    TimeSourceONo: number,
    StartTime: OcaTime,
    Duration: number,
    ApplicationSpecificParameters: Uint8Array
  );

  /**
   * Task ID - assigned by OcaTaskManager
   * @type number
   */
  ID: number;

  /**
   * @type string
   */
  Label: string;

  /**
   * ID of program this task was given or all null if it's idle.
   * @type OcaLibVolIdentifier
   */
  ProgramID: OcaLibVolIdentifier;

  /**
   * ID of group the task is in, or zero if it isn't in a group
   * @type number
   */
  GroupID: number;

  /**
   * Absolute or Relative time.
   * @type OcaTimeMode
   */
  TimeMode: OcaTimeMode;

  /**
   * ONo of relevant OcaTimeSource object, or zero if none.
   * @type number
   */
  TimeSourceONo: number;

  /**
   * Time at which to start task, or zero if task will be manually started. If
   * **TimeMode=Relative**, the actual event start time equals the value of
   * **StartTime** plus the absolute time that **StartTime** was most recently
   * set. Datatype shall depend on value of **TimeUnits**: - If **TimeUnits** is
   * seconds, datatype shall be **OcaTime;** - If TimeUnits is samples, datatype
   * shall be **OcaUint64**. If **TimeMode=Absolute**, the actual event start
   * time equals the value of **StartTime**
   * @type OcaTime
   */
  StartTime: OcaTime;

  /**
   * Duration of task execution, or zero to run until complete or explicitly
   * stopped.
   * @type number
   */
  Duration: number;

  /**
   * Arbitrary application-specific parameters for the Task and its Program.
   * @type Uint8Array
   */
  ApplicationSpecificParameters: Uint8Array;
}
