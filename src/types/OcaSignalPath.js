/*
 * This file has been generated.
 */

/**
 * Signal path between two object ports in the same device.
 */
export class OcaSignalPath {
  constructor(SourcePort, SinkPort) {
    /**
     * Source port (i.e. output port) of the signal path.
     * @member RemoteControlClasses.OcaSignalPath#OnSourcePortChanged {PropertyEvent<OcaPort>} - This event is emitted when SourcePort changes in the remote object.
     */
    this.SourcePort = SourcePort;
    /**
     * Sink port (i.e. input port) of the signal path.
     * @member RemoteControlClasses.OcaSignalPath#OnSinkPortChanged {PropertyEvent<OcaPort>} - This event is emitted when SinkPort changes in the remote object.
     */
    this.SinkPort = SinkPort;
  }
}
