/*
 * This file has been generated.
 */
import { IOcaTime, OcaTime } from './OcaTime';

export declare interface IOcaWhenPhysicalAbsolute {
  /**
   * ONo of an **OcaTimeSource** object or zero to use device time - 4 bytes
   * @type number
   */
  TimeRefONo: number;

  /**
   * Absolute physical time.
   * @type OcaTime
   */
  Value: IOcaTime;
}

export declare class OcaWhenPhysicalAbsolute
  implements IOcaWhenPhysicalAbsolute {
  /**
   * Absolute physical time.
   * @class OcaWhenPhysicalAbsolute
   */
  constructor(TimeRefONo: number, Value: OcaTime);

  /**
   * ONo of an **OcaTimeSource** object or zero to use device time - 4 bytes
   * @type number
   */
  TimeRefONo: number;

  /**
   * Absolute physical time.
   * @type OcaTime
   */
  Value: OcaTime;
}
