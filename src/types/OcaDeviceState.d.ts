/*
 * This file has been generated.
 */
/**
 * Bitset defining bit flags that indicate the device states CAP devices can be in. The state is returned by the device's Device Manager on request. Any combination of the flags may be returned, unless specified otherwise for the specific flag. The value 0x0000 indicates the device is fully operational.
 * @enum {number}
 * @readonly
 */
export declare const OcaDeviceState: {
  /**
   * Entry with value ``1``.
   */
  Operational: number;

  /**
   * Entry with value ``2``.
   */
  Disabled: number;

  /**
   * Entry with value ``4``.
   */
  Error: number;

  /**
   * Entry with value ``8``.
   */
  Initializing: number;

  /**
   * Entry with value ``16``.
   */
  Updating: number;

  /**
   * Entry with value ``32``.
   */
  unused: number;
};

export declare type IOcaDeviceState = number;
