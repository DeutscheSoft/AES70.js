/*
 * This file has been generated.
 */

export class OcaActionObjectSearchResult {
  /**
   * Result of Action Object search via the **FindActionObject...()** methods of
   * **OcaBlock**. Dynamic format, form used depends on type of search and
   * options.
   * @class OcaActionObjectSearchResult
   */
  constructor(Identification, ContainerPath, Role, Label) {
    /**
     * ONo & class identification of Action Object found
     * @type OcaObjectIdentification
     */
    this.Identification = Identification;
    /**
     * Array of ONos leading from root to this Action Object's Owner
     * @type number[]
     */
    this.ContainerPath = ContainerPath;
    /**
     * **Role** property of Action Object found
     * @type string
     */
    this.Role = Role;
    /**
     * **Label** property of Action Object found
     * @type string
     */
    this.Label = Label;
  }
}
