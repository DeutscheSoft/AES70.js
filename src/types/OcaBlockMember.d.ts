/*
 * This file has been generated.
 */

import {
  OcaObjectIdentification,
  IOcaObjectIdentification,
} from './OcaObjectIdentification';

export declare interface IOcaBlockMember {
  /**
   * Object identification of a block member.
   * @type OcaObjectIdentification
   */
  MemberObjectIdentification: IOcaObjectIdentification;

  /**
   * Object number of a the block that contains the member.
   * @type number
   */
  ContainerObjectNumber: number;
}

export declare class OcaBlockMember implements IOcaBlockMember {
  /**
   * Describes an object that is a member of a block.
   * @class OcaBlockMember
   */
  constructor(
    MemberObjectIdentification: OcaObjectIdentification,
    ContainerObjectNumber: number
  );

  /**
   * Object identification of a block member.
   * @type OcaObjectIdentification
   */
  MemberObjectIdentification: OcaObjectIdentification;

  /**
   * Object number of a the block that contains the member.
   * @type number
   */
  ContainerObjectNumber: number;
}
