/*
 * This file has been generated.
 */

export declare interface IOcaGrouperEnrollment {
  /**
   * Grouper's index of group in which the citizen identified by CitizenIndex is enrolled.
   * @type number
   */
  GroupIndex: number;

  /**
   * Grouper's index of a citizen enrolled in the group identified by GroupIndex.
   * @type number
   */
  CitizenIndex: number;
}

export declare class OcaGrouperEnrollment implements IOcaGrouperEnrollment {
  /**
   * Describes the enrollment of a citizen into a group.
   * @class OcaGrouperEnrollment
   */
  constructor(GroupIndex: number, CitizenIndex: number);

  /**
   * Grouper's index of group in which the citizen identified by CitizenIndex is enrolled.
   * @type number
   */
  GroupIndex: number;

  /**
   * Grouper's index of a citizen enrolled in the group identified by GroupIndex.
   * @type number
   */
  CitizenIndex: number;
}
