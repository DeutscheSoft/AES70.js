/*
 * This file has been generated.
 */
import {
  IOcaDeviceGenericState,
  OcaDeviceGenericState,
} from './OcaDeviceGenericState';

export declare interface IOcaDeviceOperationalState {
  /**
   * Generic device state
   * @type OcaDeviceGenericState
   */
  Generic: IOcaDeviceGenericState;

  /**
   * Device-specific state details (optional)
   * @type Uint8Array
   */
  Details: Uint8Array;
}

export declare class OcaDeviceOperationalState
  implements IOcaDeviceOperationalState {
  /**
   * Operating state of device: generic state + device-specific details
   * @class OcaDeviceOperationalState
   */
  constructor(Generic: OcaDeviceGenericState, Details: Uint8Array);

  /**
   * Generic device state
   * @type OcaDeviceGenericState
   */
  Generic: OcaDeviceGenericState;

  /**
   * Device-specific state details (optional)
   * @type Uint8Array
   */
  Details: Uint8Array;
}
