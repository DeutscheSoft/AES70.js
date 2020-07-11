/*
 * This file has been generated.
 */

/**
 * Description of an OCA property, including property ID, Get and Set
 * method IDs, and datatype.
 */
export class OcaPropertyDescriptor {
  constructor(PropertyID, BaseDataType, GetterMethodID, SetterMethodID) {
    /**
     * This was not documented in the OCA standard.
     * @member RemoteControlClasses.OcaPropertyDescriptor#OnPropertyIDChanged {PropertyEvent<OcaPropertyID>} - This event is emitted when PropertyID changes in the remote object.
     */
    this.PropertyID = PropertyID;
    /**
     * The base datatype of the property. Chosen from an enum datatype that
     * represents the available set of basedatatypes<b>.</b>
     * @member RemoteControlClasses.OcaPropertyDescriptor#OnBaseDataTypeChanged {PropertyEvent<OcaBaseDataType>} - This event is emitted when BaseDataType changes in the remote object.
     */
    this.BaseDataType = BaseDataType;
    /**
     * Method ID of GET method
     * @member RemoteControlClasses.OcaPropertyDescriptor#OnGetterMethodIDChanged {PropertyEvent<OcaMethodID>} - This event is emitted when GetterMethodID changes in the remote object.
     */
    this.GetterMethodID = GetterMethodID;
    /**
     * Method ID of SET method
     * @member RemoteControlClasses.OcaPropertyDescriptor#OnSetterMethodIDChanged {PropertyEvent<OcaMethodID>} - This event is emitted when SetterMethodID changes in the remote object.
     */
    this.SetterMethodID = SetterMethodID;
  }
}
