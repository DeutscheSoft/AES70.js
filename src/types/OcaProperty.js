/*
 * This file has been generated.
 */

/**
 * Template for complete identification of an OCA property instance,
 * including object number, property ID, Get and Set method IDs, and
 * datatype.
 */
export class OcaProperty {
  constructor(ONo, Descriptor) {
    /**
     * Object number
     * @member RemoteControlClasses.OcaProperty#OnONoChanged {PropertyEvent<OcaONo>} - This event is emitted when ONo changes in the remote object.
     */
    this.ONo = ONo;
    /**
     * Property descriptor.
     * @member RemoteControlClasses.OcaProperty#OnDescriptorChanged {PropertyEvent<OcaPropertyDescriptor>} - This event is emitted when Descriptor changes in the remote object.
     */
    this.Descriptor = Descriptor;
  }
}
