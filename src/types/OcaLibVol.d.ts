/*
 * This file has been generated.
 */

import { OcaLibVolMetadata, IOcaLibVolMetadata } from './OcaLibVolMetadata';

export declare interface IOcaLibVol {
  /**
   * Descriptor of library volume
   * @type OcaLibVolMetadata
   */
  Metadata: IOcaLibVolMetadata;

  /**
   * Contents of library volume. Type depends on template parameter.
   * @type Uint8Array
   */
  Data: Uint8Array;
}

export declare class OcaLibVol implements IOcaLibVol {
  /**
   * Library volume. template. Template parameter is datatype of the volume. See  **03 OcaLibrary**  for explanation.
   * @class OcaLibVol
   */
  constructor(Metadata: OcaLibVolMetadata, Data: Uint8Array);

  /**
   * Descriptor of library volume
   * @type OcaLibVolMetadata
   */
  Metadata: OcaLibVolMetadata;

  /**
   * Contents of library volume. Type depends on template parameter.
   * @type Uint8Array
   */
  Data: Uint8Array;
}
