/*
 * This file has been generated.
 */

export declare interface IOcaGrouperGroup {
  /**
   * Index of group in Grouper
   * @type number
   */
  Index: number;

  /**
   * Name of the group.
   * @type string
   */
  Name: string;

  /**
   * Object number of the group's proxy. The proxy's class is the same as the
   * Grouper's citizen class.
   * @type number
   */
  ProxyONo: number;
}

export declare class OcaGrouperGroup implements IOcaGrouperGroup {
  /**
   * Describes a group in a grouper.
   * @class OcaGrouperGroup
   */
  constructor(Index: number, Name: string, ProxyONo: number);

  /**
   * Index of group in Grouper
   * @type number
   */
  Index: number;

  /**
   * Name of the group.
   * @type string
   */
  Name: string;

  /**
   * Object number of the group's proxy. The proxy's class is the same as the
   * Grouper's citizen class.
   * @type number
   */
  ProxyONo: number;
}
