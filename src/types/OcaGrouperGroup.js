/*
 * This file has been generated.
 */

export class OcaGrouperGroup {
  /**
   * Describes a Group in a Grouper. **Deprecated** in AES70-2024.
   * @class OcaGrouperGroup
   */
  constructor(Index, Name, ProxyONo) {
    /**
     * Index of Group in Grouper
     * @type number
     */
    this.Index = Index;
    /**
     * Name of Group
     * @type string
     */
    this.Name = Name;
    /**
     * Object Number of the Group's Proxy. The Proxy's class shall be the same
     * as the Grouper's Citizen Class.
     * @type number
     */
    this.ProxyONo = ProxyONo;
  }
}
