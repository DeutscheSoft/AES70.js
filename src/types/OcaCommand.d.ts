/*
 * This file has been generated.
 */
import { IOcaMethod, OcaMethod } from './OcaMethod.js';

export declare interface IOcaCommand {
  /**
   * Method identification (ONo & ID) of method the command invokes. **nb**
   * Datatype corrected to **OcaMethod** in AES70-2024.
   * @type OcaMethod
   */
  Method: IOcaMethod;

  /**
   * Command parameters, if any. Format is method-specific. **nb** Datatype
   * changed from **OcaList<OcaBlob>** to **OcaList<OcaLongBlob>** in
   * AES70-2024.
   * @type Uint8Array[]
   */
  Parameters: Uint8Array[];
}

export declare class OcaCommand implements IOcaCommand {
  /**
   * A member of a CommandSet. See the datatype **OcaCommandSet**.
   * @class OcaCommand
   */
  constructor(Method: OcaMethod, Parameters: Uint8Array[]);

  /**
   * Method identification (ONo & ID) of method the command invokes. **nb**
   * Datatype corrected to **OcaMethod** in AES70-2024.
   * @type OcaMethod
   */
  Method: OcaMethod;

  /**
   * Command parameters, if any. Format is method-specific. **nb** Datatype
   * changed from **OcaList<OcaBlob>** to **OcaList<OcaLongBlob>** in
   * AES70-2024.
   * @type Uint8Array[]
   */
  Parameters: Uint8Array[];
}
