/*
 * This file has been generated.
 */

import { OcaEvent, IOcaEvent } from './OcaEvent';
import {
  OcaGrouperStatusChangeType,
  IOcaGrouperStatusChangeType,
} from './OcaGrouperStatusChangeType';

export declare interface IOcaGrouperStatusChangeEventData {
  /**
   * The event that was raised.
   * @type OcaEvent
   */
  Event: IOcaEvent;

  /**
   * Index of relevant group, or zero if event is non-group-specific.
   * @type number
   */
  groupIndex: number;

  /**
   * Index of citizen within given grouper, or zero if event is non-citizen-specific.
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
   * Class that defines the event data parameter for the  **StatusChange** event defined in  **OcaGrouper** .
   * @class OcaGrouperStatusChangeEventData
   */
  constructor(
    Event: OcaEvent,
    groupIndex: number,
    citizenIndex: number,
    changeType: OcaGrouperStatusChangeType
  );

  /**
   * The event that was raised.
   * @type OcaEvent
   */
  Event: OcaEvent;

  /**
   * Index of relevant group, or zero if event is non-group-specific.
   * @type number
   */
  groupIndex: number;

  /**
   * Index of citizen within given grouper, or zero if event is non-citizen-specific.
   * @type number
   */
  citizenIndex: number;

  /**
   * Type of change.
   * @type OcaGrouperStatusChangeType
   */
  changeType: OcaGrouperStatusChangeType;
}
