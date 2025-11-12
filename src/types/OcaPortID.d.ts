/*
 * This file has been generated.
 */
import { IOcaIODirection, OcaIODirection } from './OcaIODirection.js';

export declare interface IOcaPortID {
  /**
   * Indicates whether the port is for input or output. Before OCA 1.5, was
   * named **Mode**, with (now-renamed) datatype **OcaPortMode.**
   * @type OcaIODirection
   */
  Direction: IOcaIODirection;

  /**
   * Index of port within given input or output set of specified object.
   * @type number
   */
  Index: number;
}

export declare class OcaPortID implements IOcaPortID {
  /**
   * Unique identifier of input or output Port within a given Worker or Block
   * class. Port numbers are ordinals starting at 1, and there are separate
   * numbering spaces for input and output Ports.
   * @class OcaPortID
   */
  constructor(Direction: OcaIODirection, Index: number);

  /**
   * Indicates whether the port is for input or output. Before OCA 1.5, was
   * named **Mode**, with (now-renamed) datatype **OcaPortMode.**
   * @type OcaIODirection
   */
  Direction: OcaIODirection;

  /**
   * Index of port within given input or output set of specified object.
   * @type number
   */
  Index: number;
}
