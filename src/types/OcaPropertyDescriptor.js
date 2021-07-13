/*
 * This file has been generated.
 */

export class OcaPropertyDescriptor {
  /**
   * Description of an OCA property, including property ID, Get and Set method IDs, and datatype.
   * @class OcaPropertyDescriptor
   */
  constructor(PropertyID, BaseDataType, GetterMethodID, SetterMethodID) {
    /**
     * This was not documented in the OCA standard.
     * @type OcaPropertyID
     */
    this.PropertyID = PropertyID;
    /**
     * The base datatype of the property. Chosen from an enum datatype that represents the available set of basedatatypes **.**
     * @type OcaBaseDataType
     */
    this.BaseDataType = BaseDataType;
    /**
     * Method ID of GET method
     * @type OcaMethodID
     */
    this.GetterMethodID = GetterMethodID;
    /**
     * Method ID of SET method
     * @type OcaMethodID
     */
    this.SetterMethodID = SetterMethodID;
  }
}
