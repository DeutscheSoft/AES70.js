/*
 * This file has been generated.
 */

/**
 * A ParamSet assigment is the description of a binding of a ParamSet to
 * a block instance.
 */
export class OcaLibParamSetAssignment {
  constructor(ParamSetIdentifier, TargetBlockONo) {
    /**
     * Identifier of the library volume that holds the paramset.
     * @member RemoteControlClasses.OcaLibParamSetAssignment#OnParamSetIdentifierChanged {PropertyEvent<OcaLibVolIdentifier>} - This event is emitted when ParamSetIdentifier changes in the remote object.
     */
    this.ParamSetIdentifier = ParamSetIdentifier;
    /**
     * Object number of the block to which the paramset assignment applies.
     * @member RemoteControlClasses.OcaLibParamSetAssignment#OnTargetBlockONoChanged {PropertyEvent<OcaONo>} - This event is emitted when TargetBlockONo changes in the remote object.
     */
    this.TargetBlockONo = TargetBlockONo;
  }
}
