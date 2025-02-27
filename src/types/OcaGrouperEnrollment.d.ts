/*
 * This file has been generated.
 */

export declare interface IOcaGrouperEnrollment {
  /**
   * Index of Group in which the given Citizen identified is enrolled.
   * @type number
   */
  GroupIndex: number;

  /**
   * @type number
   */
  CitizenIndex: number;
}

export declare class OcaGrouperEnrollment implements IOcaGrouperEnrollment {
  /**
   * Describes the Enrollment of a Citizen in a Group. **Deprecated** in
   * AES70-2024.
   * @class OcaGrouperEnrollment
   */
  constructor(GroupIndex: number, CitizenIndex: number);

  /**
   * Index of Group in which the given Citizen identified is enrolled.
   * @type number
   */
  GroupIndex: number;

  /**
   * @type number
   */
  CitizenIndex: number;
}
