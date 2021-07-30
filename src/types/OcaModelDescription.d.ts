/*
 * This file has been generated.
 */

export declare interface IOcaModelDescription {
  /**
   * Name of manufacturer.
   * @type string
   */
  Manufacturer: string;

  /**
   * Name of this model (whatever the manufacturer wants to call it).
   * @type string
   */
  Name: string;

  /**
   * Text name for the version of this model, e.g. "1.2.1a".
   * @type string
   */
  Version: string;
}

export declare class OcaModelDescription implements IOcaModelDescription {
  /**
   * Friendly description of this particular product model.
   * @class OcaModelDescription
   */
  constructor(Manufacturer: string, Name: string, Version: string);

  /**
   * Name of manufacturer.
   * @type string
   */
  Manufacturer: string;

  /**
   * Name of this model (whatever the manufacturer wants to call it).
   * @type string
   */
  Name: string;

  /**
   * Text name for the version of this model, e.g. "1.2.1a".
   * @type string
   */
  Version: string;
}
