/*
 * This file has been generated.
 */
import { IOcaStatus, OcaStatus } from './OcaStatus';

export declare interface IOcaCommandResult {
  /**
   * Status code returned by command method. **nb** This field replaces the
   * previous field **EndState** as of AES70-2024.
   * @type OcaStatus
   */
  Status: IOcaStatus;

  /**
   * Command-specific return info - may be null. **nb** Datatype changed from
   * **OcaBlob** to **OcaList<OcaLongBlob>** in AES70-2024.
   * @type Uint8Array[]
   */
  Data: Uint8Array[];
}

export declare class OcaCommandResult implements IOcaCommandResult {
  /**
   * Execution result of a Command in a Commandset.
   * @class OcaCommandResult
   */
  constructor(Status: OcaStatus, Data: Uint8Array[]);

  /**
   * Status code returned by command method. **nb** This field replaces the
   * previous field **EndState** as of AES70-2024.
   * @type OcaStatus
   */
  Status: OcaStatus;

  /**
   * Command-specific return info - may be null. **nb** Datatype changed from
   * **OcaBlob** to **OcaList<OcaLongBlob>** in AES70-2024.
   * @type Uint8Array[]
   */
  Data: Uint8Array[];
}
