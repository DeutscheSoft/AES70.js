/*
 * This file has been generated.
 */

export class OcaTaskOperationalState {
  /**
   * Operational state of task: generic state + task-specific details
   * @class OcaTaskOperationalState
   */
  constructor(Generic, Details) {
    /**
     * Generic state of this Task Agent.
     * @type OcaTaskGenericState
     */
    this.Generic = Generic;
    /**
     * Device-specific state details (optional)
     * @type OcaTypedBlob[]
     */
    this.Details = Details;
  }
}
