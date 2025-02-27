/*
 * This file has been generated.
 */

export class OcaGrouperEnrollment {
  /**
   * Describes the Enrollment of a Citizen in a Group. **Deprecated** in
   * AES70-2024.
   * @class OcaGrouperEnrollment
   */
  constructor(GroupIndex, CitizenIndex) {
    /**
     * Index of Group in which the given Citizen identified is enrolled.
     * @type number
     */
    this.GroupIndex = GroupIndex;
    /**
     * @type number
     */
    this.CitizenIndex = CitizenIndex;
  }
}
