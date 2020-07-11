/*
 * This file has been generated.
 */

/**
 * Describes the enrollment of a citizen into a group.
 */
export class OcaGrouperEnrollment {
  constructor(GroupIndex, CitizenIndex) {
    /**
     * Grouper's index of group in which the citizen identified by
     * CitizenIndex is enrolled.
     * @member RemoteControlClasses.OcaGrouperEnrollment#OnGroupIndexChanged {PropertyEvent<int>} - This event is emitted when GroupIndex changes in the remote object.
     */
    this.GroupIndex = GroupIndex;
    /**
     * Grouper's index of a citizen enrolled in the group identified by
     * GroupIndex.
     * @member RemoteControlClasses.OcaGrouperEnrollment#OnCitizenIndexChanged {PropertyEvent<int>} - This event is emitted when CitizenIndex changes in the remote object.
     */
    this.CitizenIndex = CitizenIndex;
  }
}
