/*
 * This file has been generated.
 */

/**
 * Describes a group in a grouper.
 */
export class OcaGrouperGroup {
  constructor(Index, Name, ProxyONo) {
    /**
     * Index of group in Grouper
     * @member RemoteControlClasses.OcaGrouperGroup#OnIndexChanged {PropertyEvent<int>} - This event is emitted when Index changes in the remote object.
     */
    this.Index = Index;
    /**
     * Name of the group.
     * @member RemoteControlClasses.OcaGrouperGroup#OnNameChanged {PropertyEvent<string>} - This event is emitted when Name changes in the remote object.
     */
    this.Name = Name;
    /**
     * Object number of the group's proxy. The proxy's class is the same as
     * the Grouper's citizen class.
     * @member RemoteControlClasses.OcaGrouperGroup#OnProxyONoChanged {PropertyEvent<OcaONo>} - This event is emitted when ProxyONo changes in the remote object.
     */
    this.ProxyONo = ProxyONo;
  }
}
