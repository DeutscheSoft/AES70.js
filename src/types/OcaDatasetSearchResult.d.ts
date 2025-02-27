/*
 * This file has been generated.
 */
import { IOcaBlockMember, OcaBlockMember } from './OcaBlockMember';

export declare interface IOcaDatasetSearchResult {
  /**
   * Member descriptor of Dataset Object
   * @type OcaBlockMember
   */
  Object: IOcaBlockMember;

  /**
   * Dataset name
   * @type string
   */
  Name: string;

  /**
   * Dataset type
   * @type string
   */
  Type: string;
}

export declare class OcaDatasetSearchResult implements IOcaDatasetSearchResult {
  /**
   * Result of Dataset search via the **FindDatasets(...)** and
   * **FindDatasetsRecursive(...)** methods of **OcaBlock**.
   * @class OcaDatasetSearchResult
   */
  constructor(Object: OcaBlockMember, Name: string, Type: string);

  /**
   * Member descriptor of Dataset Object
   * @type OcaBlockMember
   */
  Object: OcaBlockMember;

  /**
   * Dataset name
   * @type string
   */
  Name: string;

  /**
   * Dataset type
   * @type string
   */
  Type: string;
}
