/*
 * This file has been generated.
 */
import {
  IOcaTaskGenericState,
  OcaTaskGenericState,
} from './OcaTaskGenericState';
import { IOcaTypedBlob, OcaTypedBlob } from './OcaTypedBlob';

export declare interface IOcaTaskOperationalState {
  /**
   * Generic state of this Task Agent.
   * @type OcaTaskGenericState
   */
  Generic: IOcaTaskGenericState;

  /**
   * Device-specific state details (optional)
   * @type OcaTypedBlob[]
   */
  Details: IOcaTypedBlob[];
}

export declare class OcaTaskOperationalState
  implements IOcaTaskOperationalState {
  /**
   * Operational state of task: generic state + task-specific details
   * @class OcaTaskOperationalState
   */
  constructor(Generic: OcaTaskGenericState, Details: OcaTypedBlob[]);

  /**
   * Generic state of this Task Agent.
   * @type OcaTaskGenericState
   */
  Generic: OcaTaskGenericState;

  /**
   * Device-specific state details (optional)
   * @type OcaTypedBlob[]
   */
  Details: OcaTypedBlob[];
}
