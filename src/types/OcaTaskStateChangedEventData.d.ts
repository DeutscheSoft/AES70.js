/*
 * This file has been generated.
 */
import {
  IOcaLibVolIdentifier,
  OcaLibVolIdentifier,
} from './OcaLibVolIdentifier';
import { IOcaTaskStatus, OcaTaskStatus } from './OcaTaskStatus';

export declare interface IOcaTaskStateChangedEventData {
  /**
   * ID of Task
   * @type number
   */
  TaskID: number;

  /**
   * Library volume identifier of Program running in the task at the time of the change, or null
   * @type OcaLibVolIdentifier
   */
  ProgramID: IOcaLibVolIdentifier;

  /**
   * New task status
   * @type OcaTaskStatus
   */
  Status: IOcaTaskStatus;
}

export declare class OcaTaskStateChangedEventData
  implements IOcaTaskStateChangedEventData {
  /**
   * This was not documented in the OCA standard.
   * @class OcaTaskStateChangedEventData
   */
  constructor(
    TaskID: number,
    ProgramID: OcaLibVolIdentifier,
    Status: OcaTaskStatus
  );

  /**
   * ID of Task
   * @type number
   */
  TaskID: number;

  /**
   * Library volume identifier of Program running in the task at the time of the change, or null
   * @type OcaLibVolIdentifier
   */
  ProgramID: OcaLibVolIdentifier;

  /**
   * New task status
   * @type OcaTaskStatus
   */
  Status: OcaTaskStatus;
}
