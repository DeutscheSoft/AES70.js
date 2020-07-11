/*
 * This file has been generated.
 */

/**
 * Representation of an OCA method, i.e. the unique combination of an ONo
 * and a MethodID. To denote the absence of a method, all field values
 * shall be zero. Such a value is called the <i>Null Method
 * Identifier</i>.
 */
export class OcaMethod {
  constructor(ONo, MethodID) {
    /**
     * The object number. For Null Method Identifier, value shall be zero.
     * @member RemoteControlClasses.OcaMethod#OnONoChanged {PropertyEvent<OcaONo>} - This event is emitted when ONo changes in the remote object.
     */
    this.ONo = ONo;
    /**
     * The method ID. For Null Method Identifier, value of all subfields
     * shall be zero.
     * @member RemoteControlClasses.OcaMethod#OnMethodIDChanged {PropertyEvent<OcaMethodID>} - This event is emitted when MethodID changes in the remote object.
     */
    this.MethodID = MethodID;
  }
}
