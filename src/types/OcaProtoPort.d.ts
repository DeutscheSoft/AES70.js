/*
 * This file has been generated.
 */
import { IOcaPortID, OcaPortID } from './OcaPortID';

export declare interface IOcaProtoPort {
  /**
   * Prototype object number of the prototype member that owns the prototype
   * port. The value of 0 (zero) is special, and refers to the block itself,
   * rather than to any of its members.
   * @type number
   */
  Owner: number;

  /**
   * ID of the prototype port.
   * @type OcaPortID
   */
  ProtoID: IOcaPortID;

  /**
   * Name of the prototype port.
   * @type string
   */
  Name: string;
}

export declare class OcaProtoPort implements IOcaProtoPort {
  /**
   * @class OcaProtoPort
   */
  constructor(Owner: number, ProtoID: OcaPortID, Name: string);

  /**
   * Prototype object number of the prototype member that owns the prototype
   * port. The value of 0 (zero) is special, and refers to the block itself,
   * rather than to any of its members.
   * @type number
   */
  Owner: number;

  /**
   * ID of the prototype port.
   * @type OcaPortID
   */
  ProtoID: OcaPortID;

  /**
   * Name of the prototype port.
   * @type string
   */
  Name: string;
}
