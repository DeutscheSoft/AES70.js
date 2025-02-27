/*
 * This file has been generated.
 */

export class OcaProduct {
  /**
   * Structure that describes a Product.
   * @class OcaProduct
   */
  constructor(Name, ModelID, RevisionLevel, BrandName, UUID, Description) {
    /**
     * Product name
     * @type string
     */
    this.Name = Name;
    /**
     * Manufacturer's unique model identifier.
     * @type string
     */
    this.ModelID = ModelID;
    /**
     * Manufacturer's product revision level code
     * @type string
     */
    this.RevisionLevel = RevisionLevel;
    /**
     * Brand name under which product is sold
     * @type string
     */
    this.BrandName = BrandName;
    /**
     * Unique UUID of product. Not manufacturer-specific.
     * @type string
     */
    this.UUID = UUID;
    /**
     * Text description of product
     * @type string
     */
    this.Description = Description;
  }
}
