/*
 * This file has been generated.
 */

import { OcaProtoPortID, IOcaProtoPortID } from './OcaProtoPortID';

export declare interface IOcaProtoPort {
  /**
   * Proto-object number of the proto-member that owns the proto-port.  **The value of 0 (zero) is special, and refers to the block itself, rather than to any of its members.**
   * @type number
   */
  Owner: number;

  /**
   * ID of the proto-port.
   * @type OcaProtoPortID
   */
  ProtoID: IOcaProtoPortID;

  /**
   * Name of the proto-port.
   * @type string
   */
  Name: string;
}

export declare class OcaProtoPort implements IOcaProtoPort {
  /**
   * Representation of an OCA (input or output) proto-port that is used in the proto-signal path representation of an OCA device.
   * @class OcaProtoPort
   */
  constructor(Owner: number, ProtoID: OcaProtoPortID, Name: string);

  /**
   * Proto-object number of the proto-member that owns the proto-port.  **The value of 0 (zero) is special, and refers to the block itself, rather than to any of its members.**
   * @type number
   */
  Owner: number;

  /**
   * ID of the proto-port.
   * @type OcaProtoPortID
   */
  ProtoID: OcaProtoPortID;

  /**
   * Name of the proto-port.
   * @type string
   */
  Name: string;
}
