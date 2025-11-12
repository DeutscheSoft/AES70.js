/*
 * This file has been generated.
 */
import {
  IOcaClassIdentification,
  OcaClassIdentification,
} from './OcaClassIdentification.js';

export declare interface IOcaProtoObjectIdentification {
  /**
   * Prototype object number of referenced prototype object.
   * @type number
   */
  POno: number;

  /**
   * Class identification of referenced object.
   * @type OcaClassIdentification
   */
  ClassIdentification: IOcaClassIdentification;
}

export declare class OcaProtoObjectIdentification
  implements IOcaProtoObjectIdentification {
  /**
   * Prototype object identification. Composite of prototype object number and
   * prototype object's class identification.
   * @class OcaProtoObjectIdentification
   */
  constructor(POno: number, ClassIdentification: OcaClassIdentification);

  /**
   * Prototype object number of referenced prototype object.
   * @type number
   */
  POno: number;

  /**
   * Class identification of referenced object.
   * @type OcaClassIdentification
   */
  ClassIdentification: OcaClassIdentification;
}
