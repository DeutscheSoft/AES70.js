/*
 * This file has been generated.
 */

export class OcaLibParamSetAssignment {
  /**
   * A ParamSet assigment is the description of a binding of a ParamSet to a block instance.
   * @class OcaLibParamSetAssignment
   */
  constructor(ParamSetIdentifier, TargetBlockONo) {
    /**
     * Identifier of the library volume that holds the paramset.
     * @type OcaLibVolIdentifier
     */
    this.ParamSetIdentifier = ParamSetIdentifier;
    /**
     * Object number of the block to which the paramset assignment applies.
     * @type number
     */
    this.TargetBlockONo = TargetBlockONo;
  }
}
