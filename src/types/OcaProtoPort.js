/*
 * This file has been generated.
 */

/**
 * Representation of an OCA (input or output) proto-port that is used in
 * the proto-signal path representation of an OCA device.
 */
export class OcaProtoPort {
  constructor(Owner, ProtoID, Name) {
    /**
     * Proto-object number of the proto-member that owns the proto-port.
     * <b>The value of 0 (zero) is special, and refers to the block itself,
     * rather than to any of its members.</b>
     * @member RemoteControlClasses.OcaProtoPort#OnOwnerChanged {PropertyEvent<OcaProtoONo>} - This event is emitted when Owner changes in the remote object.
     */
    this.Owner = Owner;
    /**
     * ID of the proto-port.
     * @member RemoteControlClasses.OcaProtoPort#OnProtoIDChanged {PropertyEvent<OcaProtoPortID>} - This event is emitted when ProtoID changes in the remote object.
     */
    this.ProtoID = ProtoID;
    /**
     * Name of the proto-port.
     * @member RemoteControlClasses.OcaProtoPort#OnNameChanged {PropertyEvent<string>} - This event is emitted when Name changes in the remote object.
     */
    this.Name = Name;
  }
}
