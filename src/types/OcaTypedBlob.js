/*
 * This file has been generated.
 */

export class OcaTypedBlob {
  /**
   * **OcaBlob** with ancillary field that shall specify the MIME type of the
   * **OcaBlob's** content.
   * @class OcaTypedBlob
   */
  constructor(ContentType, Content) {
    /**
     * MIME type of the content of the **Content** field.
     * @type string
     */
    this.ContentType = ContentType;
    /**
     * **OcaBlob** whose payload has the format specified by the **ContentType**
     * field.
     * @type Uint8Array
     */
    this.Content = Content;
  }
}
