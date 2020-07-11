/*
 * This file has been generated.
 */

/**
 * Representation of an OCA (input or output) port that is used in the
 * signal path representation of an OCA device.
 */
export class OcaPort {
  constructor(Owner, ID, Name) {
    /**
     * Object number of the object that owns the port.
     * @member RemoteControlClasses.OcaPort#OnOwnerChanged {PropertyEvent<OcaONo>} - This event is emitted when Owner changes in the remote object.
     */
    this.Owner = Owner;
    /**
     * ID of the port.
     * @member RemoteControlClasses.OcaPort#OnIDChanged {PropertyEvent<OcaPortID>} - This event is emitted when ID changes in the remote object.
     */
    this.ID = ID;
    /**
     * Port ID of the port.
     * @member RemoteControlClasses.OcaPort#OnNameChanged {PropertyEvent<string>} - This event is emitted when Name changes in the remote object.
     */
    this.Name = Name;
  }
}
