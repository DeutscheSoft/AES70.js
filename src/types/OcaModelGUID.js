/*
 * This file has been generated.
 */

/**
 * 64 bit device type GUID.
 */
export class OcaModelGUID {
  constructor(Reserved, MfrCode, ModelCode) {
    /**
     * 8 reserved bits.
     * @member RemoteControlClasses.OcaModelGUID#OnReservedChanged {PropertyEvent<string>} - This event is emitted when Reserved changes in the remote object.
     */
    this.Reserved = Reserved;
    /**
     * IEEE Manufacturer code. Unique worldwide.
     * @member RemoteControlClasses.OcaModelGUID#OnMfrCodeChanged {PropertyEvent<string>} - This event is emitted when MfrCode changes in the remote object.
     */
    this.MfrCode = MfrCode;
    /**
     * Model code. Unique within the given manufacturer's products. May be
     * set freely by the manufacturer.
     * @member RemoteControlClasses.OcaModelGUID#OnModelCodeChanged {PropertyEvent<string>} - This event is emitted when ModelCode changes in the remote object.
     */
    this.ModelCode = ModelCode;
  }
}
