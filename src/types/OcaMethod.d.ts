/*
 * This file has been generated.
 */

import { OcaMethodID, IOcaMethodID } from './OcaMethodID';

export declare interface IOcaMethod {
  /**
   * The object number. For Null Method Identifier, value shall be zero.
   * @type number
   */
  ONo: number;

  /**
   * The method ID. For Null Method Identifier, value of all subfields shall be zero.
   * @type OcaMethodID
   */
  MethodID: IOcaMethodID;
}

export declare class OcaMethod implements IOcaMethod {
  /**
   * Representation of an OCA method, i.e. the unique combination of an ONo and a MethodID. To denote the absence of a method, all field values shall be zero. Such a value is called the  *Null Method Identifier* .
   * @class OcaMethod
   */
  constructor(ONo: number, MethodID: OcaMethodID);

  /**
   * The object number. For Null Method Identifier, value shall be zero.
   * @type number
   */
  ONo: number;

  /**
   * The method ID. For Null Method Identifier, value of all subfields shall be zero.
   * @type OcaMethodID
   */
  MethodID: OcaMethodID;
}
