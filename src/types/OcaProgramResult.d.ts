/*
 * This file has been generated.
 */
import {
  IOcaGenericEndState,
  OcaGenericEndState,
} from './OcaGenericEndState.js';
import { IOcaTypedBlob, OcaTypedBlob } from './OcaTypedBlob.js';

export declare interface IOcaProgramResult {
  /**
   * Completed normally, completed abnormally, aborted, or failed
   * @type OcaGenericEndState
   */
  EndState: IOcaGenericEndState;

  /**
   * Program-specific return info - may be null.
   * @type OcaTypedBlob[]
   */
  Data: IOcaTypedBlob[];
}

export declare class OcaProgramResult implements IOcaProgramResult {
  /**
   * Execution result of a Program.
   * @class OcaProgramResult
   */
  constructor(EndState: OcaGenericEndState, Data: OcaTypedBlob[]);

  /**
   * Completed normally, completed abnormally, aborted, or failed
   * @type OcaGenericEndState
   */
  EndState: OcaGenericEndState;

  /**
   * Program-specific return info - may be null.
   * @type OcaTypedBlob[]
   */
  Data: OcaTypedBlob[];
}
