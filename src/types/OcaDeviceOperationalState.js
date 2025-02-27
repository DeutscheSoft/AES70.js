/*
 * This file has been generated.
 */

export class OcaDeviceOperationalState {
  /**
   * Operating state of device: generic state + device-specific details
   * @class OcaDeviceOperationalState
   */
  constructor(Generic, Details) {
    /**
     * Generic device state
     * @type OcaDeviceGenericState
     */
    this.Generic = Generic;
    /**
     * Device-specific state details (optional)
     * @type Uint8Array
     */
    this.Details = Details;
  }
}
