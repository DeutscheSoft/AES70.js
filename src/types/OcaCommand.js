/*
 * This file has been generated.
 */

export class OcaCommand {
  /**
   * A member of a CommandSet. See the datatype **OcaCommandSet**.
   * @class OcaCommand
   */
  constructor(Method, Parameters) {
    /**
     * Method identification (ONo & ID) of method the command invokes. **nb**
     * Datatype corrected to **OcaMethod** in AES70-2024.
     * @type OcaMethod
     */
    this.Method = Method;
    /**
     * Command parameters, if any. Format is method-specific. **nb** Datatype
     * changed from **OcaList<OcaBlob>** to **OcaList<OcaLongBlob>** in
     * AES70-2024.
     * @type Uint8Array[]
     */
    this.Parameters = Parameters;
  }
}
