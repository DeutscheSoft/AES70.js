/*
 * This file has been generated.
 */
import { IOcaCounterUpdate, OcaCounterUpdate } from './OcaCounterUpdate';

export declare interface IOcaCounterUpdateEventData {
  /**
   * List of counter-update descriptors
   * @type OcaCounterUpdate[]
   */
  Updates: IOcaCounterUpdate[];
}

export declare class OcaCounterUpdateEventData
  implements IOcaCounterUpdateEventData {
  /**
   * Notification data supplied by **OcaCounterNotifier.CounterUpdate()** event
   * @class OcaCounterUpdateEventData
   */
  constructor(Updates: OcaCounterUpdate[]);

  /**
   * List of counter-update descriptors
   * @type OcaCounterUpdate[]
   */
  Updates: OcaCounterUpdate[];
}
