/*
 * This file has been generated.
 */

export declare interface IOcaTypedBlob {
  /**
   * MIME type of the content of the **Content** field.
   * @type string
   */
  ContentType: string;

  /**
   * **OcaBlob** whose payload has the format specified by the **ContentType**
   * field.
   * @type Uint8Array
   */
  Content: Uint8Array;
}

export declare class OcaTypedBlob implements IOcaTypedBlob {
  /**
   * **OcaBlob** with ancillary field that shall specify the MIME type of the
   * **OcaBlob's** content.
   * @class OcaTypedBlob
   */
  constructor(ContentType: string, Content: Uint8Array);

  /**
   * MIME type of the content of the **Content** field.
   * @type string
   */
  ContentType: string;

  /**
   * **OcaBlob** whose payload has the format specified by the **ContentType**
   * field.
   * @type Uint8Array
   */
  Content: Uint8Array;
}
