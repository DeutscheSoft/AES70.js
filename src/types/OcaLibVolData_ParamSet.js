/*
 * This file has been generated.
 */

export class OcaLibVolData_ParamSet {
  /**
   * Library volume data for a Parset (short for Parameter Set) volume. A Parset
   * is a collection of operating parameter settings that can be applied to a
   * block. Each Parset is associated with a specific block type, but not with a
   * specific instance of that type. A Parset may be applied to any block
   * instance of the associated type. A block's type is a the object number of
   * its factory or, for factory-defined blocks, a unique identifier set at time
   * of manufacture.
   * @class OcaLibVolData_ParamSet
   */
  constructor(TargetBlockType, ParData) {
    /**
     * Block type to which this paramset applies. A block's type is a the object
     * number of its factory or, for factory-defined blocks, a unique identifier
     * set at time of manufacture
     * @type number
     */
    this.TargetBlockType = TargetBlockType;
    /**
     * ParamSet payload
     * @type Uint8Array
     */
    this.ParData = ParData;
  }
}
