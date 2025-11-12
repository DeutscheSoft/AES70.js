/*
 * This file has been generated.
 */
import { IOcaPropertyID, OcaPropertyID } from './OcaPropertyID.js';

export declare interface IOcaConstructionParameter {
  /**
   * Property ID.
   * @type OcaPropertyID
   */
  ID: IOcaPropertyID;

  /**
   * Property value.
   * @type Uint8Array
   */
  Value: Uint8Array;
}

export declare class OcaConstructionParameter
  implements IOcaConstructionParameter {
  /**
   * Construction parameter. Defines the value of a property that will be set at
   * object construction time.
   * @class OcaConstructionParameter
   */
  constructor(ID: OcaPropertyID, Value: Uint8Array);

  /**
   * Property ID.
   * @type OcaPropertyID
   */
  ID: OcaPropertyID;

  /**
   * Property value.
   * @type Uint8Array
   */
  Value: Uint8Array;
}
