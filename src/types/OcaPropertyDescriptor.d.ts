/*
 * This file has been generated.
 */
import { IOcaBaseDataType, OcaBaseDataType } from './OcaBaseDataType';
import { IOcaMethodID, OcaMethodID } from './OcaMethodID';
import { IOcaPropertyID, OcaPropertyID } from './OcaPropertyID';

export declare interface IOcaPropertyDescriptor {
  /**
   * This was not documented in the OCA standard.
   * @type OcaPropertyID
   */
  PropertyID: IOcaPropertyID;

  /**
   * The base datatype of the property. Chosen from an enum datatype that represents the available set of basedatatypes **.**
   * @type OcaBaseDataType
   */
  BaseDataType: IOcaBaseDataType;

  /**
   * Method ID of GET method
   * @type OcaMethodID
   */
  GetterMethodID: IOcaMethodID;

  /**
   * Method ID of SET method
   * @type OcaMethodID
   */
  SetterMethodID: IOcaMethodID;
}

export declare class OcaPropertyDescriptor implements IOcaPropertyDescriptor {
  /**
   * Description of an OCA property, including property ID, Get and Set method IDs, and datatype.
   * @class OcaPropertyDescriptor
   */
  constructor(
    PropertyID: OcaPropertyID,
    BaseDataType: OcaBaseDataType,
    GetterMethodID: OcaMethodID,
    SetterMethodID: OcaMethodID
  );

  /**
   * This was not documented in the OCA standard.
   * @type OcaPropertyID
   */
  PropertyID: OcaPropertyID;

  /**
   * The base datatype of the property. Chosen from an enum datatype that represents the available set of basedatatypes **.**
   * @type OcaBaseDataType
   */
  BaseDataType: OcaBaseDataType;

  /**
   * Method ID of GET method
   * @type OcaMethodID
   */
  GetterMethodID: OcaMethodID;

  /**
   * Method ID of SET method
   * @type OcaMethodID
   */
  SetterMethodID: OcaMethodID;
}
