/*
 * This file has been generated.
 */
import { IOcaOPath, OcaOPath } from './OcaOPath';

export declare interface IOcaGrouperCitizen {
  /**
   * Index of citizen in Grouper
   * @type number
   */
  Index: number;

  /**
   * Object path (= hostname + object number) of the worker object that is the
   * citizen of the grouper.
   * @type OcaOPath
   */
  ObjectPath: IOcaOPath;

  /**
   * True iff connection from grouper to citizen is healthy.
   * @type boolean
   */
  Online: boolean;
}

export declare class OcaGrouperCitizen implements IOcaGrouperCitizen {
  /**
   * Describes a citizen of a grouper. Refers to a specific worker object
   * somewhere in the media network.
   * @class OcaGrouperCitizen
   */
  constructor(Index: number, ObjectPath: OcaOPath, Online: boolean);

  /**
   * Index of citizen in Grouper
   * @type number
   */
  Index: number;

  /**
   * Object path (= hostname + object number) of the worker object that is the
   * citizen of the grouper.
   * @type OcaOPath
   */
  ObjectPath: OcaOPath;

  /**
   * True iff connection from grouper to citizen is healthy.
   * @type boolean
   */
  Online: boolean;
}
