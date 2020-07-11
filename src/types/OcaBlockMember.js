/*
 * This file has been generated.
 */

/**
 * Describes an object that is a member of a block.
 */
export class OcaBlockMember {
  constructor(MemberObjectIdentification, ContainerObjectNumber) {
    /**
     * Object identification of a block member.
     * @member RemoteControlClasses.OcaBlockMember#OnMemberObjectIdentificationChanged {PropertyEvent<OcaObjectIdentification>} - This event is emitted when MemberObjectIdentification changes in the remote object.
     */
    this.MemberObjectIdentification = MemberObjectIdentification;
    /**
     * Object number of a the block that contains the member.
     * @member RemoteControlClasses.OcaBlockMember#OnContainerObjectNumberChanged {PropertyEvent<OcaONo>} - This event is emitted when ContainerObjectNumber changes in the remote object.
     */
    this.ContainerObjectNumber = ContainerObjectNumber;
  }
}
