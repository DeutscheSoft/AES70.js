/*
 * This file has been generated.
 */
import {
  IOcaClassIdentification,
  OcaClassIdentification,
} from './OcaClassIdentification';

export declare interface IOcaObjectSearchResult {
  /**
   * ONo of object found
   * @type number
   */
  ONo: number;

  /**
   * Class identification (class ID + class version) of object found
   * @type OcaClassIdentification
   */
  ClassIdentification: IOcaClassIdentification;

  /**
   * Chain of ONos leading from root to this object's container
   * @type number[]
   */
  ContainerPath: number[];

  /**
   * Object role in device
   * @type string
   */
  Role: string;

  /**
   * Object user-specified label
   * @type string
   */
  Label: string;
}

export declare class OcaObjectSearchResult implements IOcaObjectSearchResult {
  /**
   * Result of object search via the Find...() methods of  **OcaBlock** . Dynamic format, form used depends on type of search and options. The FieldMap parameter of the Find...() methods specifies which optional fields should be returned as nonnull.
   * @class OcaObjectSearchResult
   */
  constructor(
    ONo: number,
    ClassIdentification: OcaClassIdentification,
    ContainerPath: number[],
    Role: string,
    Label: string
  );

  /**
   * ONo of object found
   * @type number
   */
  ONo: number;

  /**
   * Class identification (class ID + class version) of object found
   * @type OcaClassIdentification
   */
  ClassIdentification: OcaClassIdentification;

  /**
   * Chain of ONos leading from root to this object's container
   * @type number[]
   */
  ContainerPath: number[];

  /**
   * Object role in device
   * @type string
   */
  Role: string;

  /**
   * Object user-specified label
   * @type string
   */
  Label: string;
}
