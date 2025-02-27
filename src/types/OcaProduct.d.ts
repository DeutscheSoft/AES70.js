/*
 * This file has been generated.
 */

export declare interface IOcaProduct {
  /**
   * Product name
   * @type string
   */
  Name: string;

  /**
   * Manufacturer's unique model identifier.
   * @type string
   */
  ModelID: string;

  /**
   * Manufacturer's product revision level code
   * @type string
   */
  RevisionLevel: string;

  /**
   * Brand name under which product is sold
   * @type string
   */
  BrandName: string;

  /**
   * Unique UUID of product. Not manufacturer-specific.
   * @type string
   */
  UUID: string;

  /**
   * Text description of product
   * @type string
   */
  Description: string;
}

export declare class OcaProduct implements IOcaProduct {
  /**
   * Structure that describes a Product.
   * @class OcaProduct
   */
  constructor(
    Name: string,
    ModelID: string,
    RevisionLevel: string,
    BrandName: string,
    UUID: string,
    Description: string
  );

  /**
   * Product name
   * @type string
   */
  Name: string;

  /**
   * Manufacturer's unique model identifier.
   * @type string
   */
  ModelID: string;

  /**
   * Manufacturer's product revision level code
   * @type string
   */
  RevisionLevel: string;

  /**
   * Brand name under which product is sold
   * @type string
   */
  BrandName: string;

  /**
   * Unique UUID of product. Not manufacturer-specific.
   * @type string
   */
  UUID: string;

  /**
   * Text description of product
   * @type string
   */
  Description: string;
}
