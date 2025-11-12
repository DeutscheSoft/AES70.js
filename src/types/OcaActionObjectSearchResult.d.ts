/*
 * This file has been generated.
 */
import {
  IOcaObjectIdentification,
  OcaObjectIdentification,
} from './OcaObjectIdentification.js';

export declare interface IOcaActionObjectSearchResult {
  /**
   * ONo & class identification of Action Object found
   * @type OcaObjectIdentification
   */
  Identification: IOcaObjectIdentification;

  /**
   * Array of ONos leading from root to this Action Object's Owner
   * @type number[]
   */
  ContainerPath: number[];

  /**
   * **Role** property of Action Object found
   * @type string
   */
  Role: string;

  /**
   * **Label** property of Action Object found
   * @type string
   */
  Label: string;
}

export declare class OcaActionObjectSearchResult
  implements IOcaActionObjectSearchResult {
  /**
   * Result of Action Object search via the **FindActionObject...()** methods of
   * **OcaBlock**. Dynamic format, form used depends on type of search and
   * options.
   * @class OcaActionObjectSearchResult
   */
  constructor(
    Identification: OcaObjectIdentification,
    ContainerPath: number[],
    Role: string,
    Label: string
  );

  /**
   * ONo & class identification of Action Object found
   * @type OcaObjectIdentification
   */
  Identification: OcaObjectIdentification;

  /**
   * Array of ONos leading from root to this Action Object's Owner
   * @type number[]
   */
  ContainerPath: number[];

  /**
   * **Role** property of Action Object found
   * @type string
   */
  Role: string;

  /**
   * **Label** property of Action Object found
   * @type string
   */
  Label: string;
}
