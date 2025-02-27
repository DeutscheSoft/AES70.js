/*
 * This file has been generated.
 */
import { IOcaOPath, OcaOPath } from './OcaOPath';

export declare interface IOcaGrouperCitizen {
  /**
   * Index of Citizen in Grouper
   * @type number
   */
  Index: number;

  /**
   * Object Path (= hostname + Object Number) of the Worker object that is the
   * Citizen of the Grouper.
   * @type OcaOPath
   */
  ObjectPath: IOcaOPath;

  /**
   * True if and only if connection from Grouper to Citizen is healthy.
   * @type boolean
   */
  Online: boolean;
}

export declare class OcaGrouperCitizen implements IOcaGrouperCitizen {
  /**
   * Describes a Citizen of a Grouper. Refers to a specific Worker object
   * somewhere in the media network. **Deprecated** in AES70-2024.
   * @class OcaGrouperCitizen
   */
  constructor(Index: number, ObjectPath: OcaOPath, Online: boolean);

  /**
   * Index of Citizen in Grouper
   * @type number
   */
  Index: number;

  /**
   * Object Path (= hostname + Object Number) of the Worker object that is the
   * Citizen of the Grouper.
   * @type OcaOPath
   */
  ObjectPath: OcaOPath;

  /**
   * True if and only if connection from Grouper to Citizen is healthy.
   * @type boolean
   */
  Online: boolean;
}
