/*
 * This file has been generated.
 */

/**
 * Object address. Composite of network address in which object resides,
 * and object number.
 */
export class OcaOPath {
  constructor(HostID, ONo) {
    /**
     * Host ID of device that contains the referenced object.
     * @member RemoteControlClasses.OcaOPath#OnHostIDChanged {PropertyEvent<OcaNetworkHostID>} - This event is emitted when HostID changes in the remote object.
     */
    this.HostID = HostID;
    /**
     * Object number of referenced object.
     * @member RemoteControlClasses.OcaOPath#OnONoChanged {PropertyEvent<OcaONo>} - This event is emitted when ONo changes in the remote object.
     */
    this.ONo = ONo;
  }
}
