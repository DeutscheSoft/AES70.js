/*
 * This file has been generated.
 */

/**
 * Unique identifier of input or output port within a given worker or
 * block class. Port numbers are ordinals starting at 1, and there are
 * separate numbering spaces for input and output ports.
 */
export class OcaPortID {
  constructor(Mode, Index) {
    /**
     * Enum that indicates whether the port is for input or output.
     * @member RemoteControlClasses.OcaPortID#OnModeChanged {PropertyEvent<OcaPortMode>} - This event is emitted when Mode changes in the remote object.
     */
    this.Mode = Mode;
    /**
     * Index of port within given input or output set of specified object.
     * @member RemoteControlClasses.OcaPortID#OnIndexChanged {PropertyEvent<int>} - This event is emitted when Index changes in the remote object.
     */
    this.Index = Index;
  }
}
