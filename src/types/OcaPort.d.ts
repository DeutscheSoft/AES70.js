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
   * Role of the port in the containing object. Values beginning with "oca" in
   * any character case are reserved for AES use.
   * @type string
   */
  Role: string;
}

export declare class OcaPort implements IOcaPort {
  /**
   * Representation of an OCA (input or output) port that is used in the signal
   * path representation of an OCA device.
   * @class OcaPort
   */
  constructor(Owner: number, ID: OcaPortID, Role: string);

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
   * Role of the port in the containing object. Values beginning with "oca" in
   * any character case are reserved for AES use.
   * @type string
   */
  Role: string;
}
