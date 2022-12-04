/*
 * This file has been generated.
 */

export class OcaLibVol {
  /**
   * Library volume. template. Template parameter is datatype of the volume. See  **03 OcaLibrary**  for explanation.
   * @class OcaLibVol
   */
  constructor(Metadata, Data) {
    /**
     * Descriptor of library volume
     * @type OcaLibVolMetadata
     */
    this.Metadata = Metadata;
    /**
     * Contents of library volume. Type depends on template parameter.
     * @type Uint8Array
     */
    this.Data = Data;
  }
}
