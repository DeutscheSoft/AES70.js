/*
 * This file has been generated.
 */
import { IOcaTime, OcaTime } from './OcaTime.js';

export declare interface IOcaWhenPhysicalRelative {
  /**
   * ONo of an **OcaTimeSource** object or zero to use device time
   * @type number
   */
  TimeRefONo: number;

  /**
   * Time relative to time when method using this datatype was called
   * @type OcaTime
   */
  Value: IOcaTime;
}

export declare class OcaWhenPhysicalRelative
  implements IOcaWhenPhysicalRelative {
  /**
   * Physical time relative to time of method call.
   * @class OcaWhenPhysicalRelative
   */
  constructor(TimeRefONo: number, Value: OcaTime);

  /**
   * ONo of an **OcaTimeSource** object or zero to use device time
   * @type number
   */
  TimeRefONo: number;

  /**
   * Time relative to time when method using this datatype was called
   * @type OcaTime
   */
  Value: OcaTime;
}
