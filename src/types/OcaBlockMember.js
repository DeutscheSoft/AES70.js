/*
 * This file has been generated.
 */

export class OcaBlockMember {
  /**
   * Describes an object that is a member of a block.
   * @class OcaBlockMember
   */
  constructor(MemberObjectIdentification, ContainerObjectNumber) {
    /**
     * Object identification of a block member.
     * @type OcaObjectIdentification
     */
    this.MemberObjectIdentification = MemberObjectIdentification;
    /**
     * Object number of a the block that contains the member.
     * @type number
     */
    this.ContainerObjectNumber = ContainerObjectNumber;
  }
}
