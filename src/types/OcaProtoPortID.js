/*
 * This file has been generated.
 */

/**
 * Unique identifier of prototype input or output port within a block
 * factory. Prototype port numbers are ordinals starting at 1, and there
 * are separate numbering spaces for input and output ports.
 */
export class OcaProtoPortID {
  constructor(Mode, Index) {
    /**
     * Enum that indicates whether the prototype port is an for input or
     * output.
     * @member RemoteControlClasses.OcaProtoPortID#OnModeChanged {PropertyEvent<OcaPortMode>} - This event is emitted when Mode changes in the remote object.
     */
    this.Mode = Mode;
    /**
     * Number of the proto port within input or output group. 1-based.
     * @member RemoteControlClasses.OcaProtoPortID#OnIndexChanged {PropertyEvent<int>} - This event is emitted when Index changes in the remote object.
     */
    this.Index = Index;
  }
}
