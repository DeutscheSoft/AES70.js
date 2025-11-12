/*
 * This file has been generated.
 */
import {
  IOcaClassIdentification,
  OcaClassIdentification,
} from './OcaClassIdentification.js';

export declare interface IOcaObjectIdentification {
  /**
   * Object number of referenced object.
   * @type number
   */
  ONo: number;

  /**
   * Class identification of referenced object.
   * @type OcaClassIdentification
   */
  ClassIdentification: IOcaClassIdentification;
}

export declare class OcaObjectIdentification
  implements IOcaObjectIdentification {
  /**
   * Object identification. Composite of object number and object's class. Used
   * mainly in discovery processes.
   * @class OcaObjectIdentification
   */
  constructor(ONo: number, ClassIdentification: OcaClassIdentification);

  /**
   * Object number of referenced object.
   * @type number
   */
  ONo: number;

  /**
   * Class identification of referenced object.
   * @type OcaClassIdentification
   */
  ClassIdentification: OcaClassIdentification;
}
