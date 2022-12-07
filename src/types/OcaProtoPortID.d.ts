/*
 * This file has been generated.
 */
import { IOcaPortMode, OcaPortMode } from './OcaPortMode';

export declare interface IOcaProtoPortID {
  /**
   * Enum that indicates whether the prototype port is an for input or output.
   * @type OcaPortMode
   */
  Mode: IOcaPortMode;

  /**
   * Number of the proto port within input or output group. 1-based.
   * @type number
   */
  Index: number;
}

export declare class OcaProtoPortID implements IOcaProtoPortID {
  /**
   * Unique identifier of prototype input or output port within a block factory.
   * Prototype port numbers are ordinals starting at 1, and there are separate
   * numbering spaces for input and output ports.
   * @class OcaProtoPortID
   */
  constructor(Mode: OcaPortMode, Index: number);

  /**
   * Enum that indicates whether the prototype port is an for input or output.
   * @type OcaPortMode
   */
  Mode: OcaPortMode;

  /**
   * Number of the proto port within input or output group. 1-based.
   * @type number
   */
  Index: number;
}
