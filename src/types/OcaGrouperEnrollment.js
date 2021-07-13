/*
 * This file has been generated.
 */

export class OcaGrouperEnrollment {
  /**
   * Describes the enrollment of a citizen into a group.
   * @class OcaGrouperEnrollment
   */
  constructor(GroupIndex, CitizenIndex) {
    /**
     * Grouper's index of group in which the citizen identified by CitizenIndex is enrolled.
     * @type number
     */
    this.GroupIndex = GroupIndex;
    /**
     * Grouper's index of a citizen enrolled in the group identified by GroupIndex.
     * @type number
     */
    this.CitizenIndex = CitizenIndex;
  }
}
