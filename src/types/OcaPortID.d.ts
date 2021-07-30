/*
 * This file has been generated.
 */

import { OcaPortMode, IOcaPortMode } from './OcaPortMode';

export declare interface IOcaPortID {
  /**
   * Enum that indicates whether the port is for input or output.
   * @type OcaPortMode
   */
  Mode: IOcaPortMode;

  /**
   * Index of port within given input or output set of specified object.
   * @type number
   */
  Index: number;
}

export declare class OcaPortID implements IOcaPortID {
  /**
   * Unique identifier of input or output port within a given worker or block class. Port numbers are ordinals starting at 1, and there are separate numbering spaces for input and output ports.
   * @class OcaPortID
   */
  constructor(Mode: OcaPortMode, Index: number);

  /**
   * Enum that indicates whether the port is for input or output.
   * @type OcaPortMode
   */
  Mode: OcaPortMode;

  /**
   * Index of port within given input or output set of specified object.
   * @type number
   */
  Index: number;
}
