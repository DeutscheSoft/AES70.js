/*
 * This file has been generated.
 */
import { IOcaPortID, OcaPortID } from './OcaPortID';

export declare interface IOcaPort {
  /**
   * Object number of the object that owns the port.
   * @type number
   */
  Owner: number;

  /**
   * ID of the port.
   * @type OcaPortID
   */
  ID: IOcaPortID;

  /**
   * Port ID of the port.
   * @type string
   */
  Name: string;
}

export declare class OcaPort implements IOcaPort {
  /**
   * Representation of an OCA (input or output) port that is used in the signal
   * path representation of an OCA device.
   * @class OcaPort
   */
  constructor(Owner: number, ID: OcaPortID, Name: string);

  /**
   * Object number of the object that owns the port.
   * @type number
   */
  Owner: number;

  /**
   * ID of the port.
   * @type OcaPortID
   */
  ID: OcaPortID;

  /**
   * Port ID of the port.
   * @type string
   */
  Name: string;
}
