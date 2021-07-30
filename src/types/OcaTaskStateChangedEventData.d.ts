/*
 * This file has been generated.
 */

import {
  OcaLibVolIdentifier,
  IOcaLibVolIdentifier,
} from './OcaLibVolIdentifier';
import { OcaTaskStatus, IOcaTaskStatus } from './OcaTaskStatus';

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
