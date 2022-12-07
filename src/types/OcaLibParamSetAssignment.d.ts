/*
 * This file has been generated.
 */
import {
  IOcaLibVolIdentifier,
  OcaLibVolIdentifier,
} from './OcaLibVolIdentifier';

export declare interface IOcaLibParamSetAssignment {
  /**
   * Identifier of the library volume that holds the paramset.
   * @type OcaLibVolIdentifier
   */
  ParamSetIdentifier: IOcaLibVolIdentifier;

  /**
   * Object number of the block to which the paramset assignment applies.
   * @type number
   */
  TargetBlockONo: number;
}

export declare class OcaLibParamSetAssignment
  implements IOcaLibParamSetAssignment {
  /**
   * A ParamSet assigment is the description of a binding of a ParamSet to a
   * block instance.
   * @class OcaLibParamSetAssignment
   */
  constructor(ParamSetIdentifier: OcaLibVolIdentifier, TargetBlockONo: number);

  /**
   * Identifier of the library volume that holds the paramset.
   * @type OcaLibVolIdentifier
   */
  ParamSetIdentifier: OcaLibVolIdentifier;

  /**
   * Object number of the block to which the paramset assignment applies.
   * @type number
   */
  TargetBlockONo: number;
}
