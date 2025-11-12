/*
 * This file has been generated.
 */
import { IOcaPortID, OcaPortID } from './OcaPortID.js';

export declare interface IOcaPortIdentification {
  /**
   * ONo of object that owns the port.
   * @type number
   */
  Owner: number;

  /**
   * ID of the port. ID={mode,index}; mode is input or output.
   * @type OcaPortID
   */
  ID: IOcaPortID;
}

export declare class OcaPortIdentification implements IOcaPortIdentification {
  /**
   * Representation of an OCA (input or output) port that is used in the signal
   * path representation of an OCA device.
   * @class OcaPortIdentification
   */
  constructor(Owner: number, ID: OcaPortID);

  /**
   * ONo of object that owns the port.
   * @type number
   */
  Owner: number;

  /**
   * ID of the port. ID={mode,index}; mode is input or output.
   * @type OcaPortID
   */
  ID: OcaPortID;
}
