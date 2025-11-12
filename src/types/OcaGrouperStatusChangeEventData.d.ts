/*
 * This file has been generated.
 */
import {
  IOcaGrouperStatusChangeType,
  OcaGrouperStatusChangeType,
} from './OcaGrouperStatusChangeType.js';

export declare interface IOcaGrouperStatusChangeEventData {
  /**
   * Index of relevant group, or zero if event is non-group-specific.
   * @type number
   */
  groupIndex: number;

  /**
   * Index of citizen within given grouper, or zero if event is
   * non-citizen-specific.
   * @type number
   */
  citizenIndex: number;

  /**
   * Type of change.
   * @type OcaGrouperStatusChangeType
   */
  changeType: IOcaGrouperStatusChangeType;
}

export declare class OcaGrouperStatusChangeEventData
  implements IOcaGrouperStatusChangeEventData {
  /**
   * Notification data supplied by the **OcaGrouper.StatusChange()** event.
   * **Deprecated** in AES70-2024.
   * @class OcaGrouperStatusChangeEventData
   */
  constructor(
    groupIndex: number,
    citizenIndex: number,
    changeType: OcaGrouperStatusChangeType
  );

  /**
   * Index of relevant group, or zero if event is non-group-specific.
   * @type number
   */
  groupIndex: number;

  /**
   * Index of citizen within given grouper, or zero if event is
   * non-citizen-specific.
   * @type number
   */
  citizenIndex: number;

  /**
   * Type of change.
   * @type OcaGrouperStatusChangeType
   */
  changeType: OcaGrouperStatusChangeType;
}
