/*
 * This file has been generated.
 */

export declare interface IOcaGrouperGroup {
  /**
   * Index of Group in Grouper
   * @type number
   */
  Index: number;

  /**
   * Name of Group
   * @type string
   */
  Name: string;

  /**
   * Object Number of the Group's Proxy. The Proxy's class shall be the same as
   * the Grouper's Citizen Class.
   * @type number
   */
  ProxyONo: number;
}

export declare class OcaGrouperGroup implements IOcaGrouperGroup {
  /**
   * Describes a Group in a Grouper. **Deprecated** in AES70-2024.
   * @class OcaGrouperGroup
   */
  constructor(Index: number, Name: string, ProxyONo: number);

  /**
   * Index of Group in Grouper
   * @type number
   */
  Index: number;

  /**
   * Name of Group
   * @type string
   */
  Name: string;

  /**
   * Object Number of the Group's Proxy. The Proxy's class shall be the same as
   * the Grouper's Citizen Class.
   * @type number
   */
  ProxyONo: number;
}
