/*
 * This file has been generated.
 */

export class OcaCommandResult {
  /**
   * Execution result of a Command in a Commandset.
   * @class OcaCommandResult
   */
  constructor(Status, Data) {
    /**
     * Status code returned by command method. **nb** This field replaces the
     * previous field **EndState** as of AES70-2024.
     * @type OcaStatus
     */
    this.Status = Status;
    /**
     * Command-specific return info - may be null. **nb** Datatype changed from
     * **OcaBlob** to **OcaList<OcaLongBlob>** in AES70-2024.
     * @type Uint8Array[]
     */
    this.Data = Data;
  }
}
