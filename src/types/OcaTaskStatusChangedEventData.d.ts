/*
 * This file has been generated.
 */
import {
  IOcaLibVolIdentifier,
  OcaLibVolIdentifier,
} from './OcaLibVolIdentifier';
import { IOcaTaskStatus, OcaTaskStatus } from './OcaTaskStatus';

export declare interface IOcaTaskStatusChangedEventData {
  /**
   * ID of Task
   * @type number
   */
  TaskID: number;

  /**
   * Identifier of OcaLibrary volume that was executing.
   * @type OcaLibVolIdentifier
   */
  ProgramID: IOcaLibVolIdentifier;

  /**
   * New task status
   * @type OcaTaskStatus
   */
  Status: IOcaTaskStatus;
}

export declare class OcaTaskStatusChangedEventData
  implements IOcaTaskStatusChangedEventData {
  /**
   * **Deprecated** event raised by **OcaTaskManager** when the status of a
   * legacy task changes. Legacy task are task that execute now-deprecated
   * **OcaLibrary** volumes.
   * @class OcaTaskStatusChangedEventData
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
   * Identifier of OcaLibrary volume that was executing.
   * @type OcaLibVolIdentifier
   */
  ProgramID: OcaLibVolIdentifier;

  /**
   * New task status
   * @type OcaTaskStatus
   */
  Status: OcaTaskStatus;
}
