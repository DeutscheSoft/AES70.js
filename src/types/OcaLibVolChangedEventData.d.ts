/*
 * This file has been generated.
 */

import { OcaEvent, IOcaEvent } from './OcaEvent';
import {
  OcaPropertyChangeType,
  IOcaPropertyChangeType,
} from './OcaPropertyChangeType';

export declare interface IOcaLibVolChangedEventData {
  /**
   * The event that was raised.
   * @type OcaEvent
   */
  Event: IOcaEvent;

  /**
   * ID of library volume that changed.
   * @type number
   */
  VolumeID: number;

  /**
   * Type of change : Will be either itemChanged, itemAdded, or itemDeleted.
   * @type OcaPropertyChangeType
   */
  ChangeType: IOcaPropertyChangeType;
}

export declare class OcaLibVolChangedEventData
  implements IOcaLibVolChangedEventData {
  /**
   * Event data for the  **OcaLibVolChanged** event, which signals a change in an  **OcaLibrary.Volumes**  property.
   * @class OcaLibVolChangedEventData
   */
  constructor(
    Event: OcaEvent,
    VolumeID: number,
    ChangeType: OcaPropertyChangeType
  );

  /**
   * The event that was raised.
   * @type OcaEvent
   */
  Event: OcaEvent;

  /**
   * ID of library volume that changed.
   * @type number
   */
  VolumeID: number;

  /**
   * Type of change : Will be either itemChanged, itemAdded, or itemDeleted.
   * @type OcaPropertyChangeType
   */
  ChangeType: OcaPropertyChangeType;
}
