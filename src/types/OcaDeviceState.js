/*
 * This file has been generated.
 */
/**
 * Bitset defining bit flags that indicate the device states CAP devices can be in. The state is returned by the device's Device Manager on request. Any combination of the flags may be returned, unless specified otherwise for the specific flag. The value 0x0000 indicates the device is fully operational.
 * @enum {number}
 * @readonly
 */
export const OcaDeviceState = {
  Operational: 1,
  Disabled: 2,
  Error: 4,
  Initializing: 8,
  Updating: 16,
  unused: 32,
};

/**
 * Entry with value ``1``.
 * @type {number}
 * @member Operational
 * @memberof OcaDeviceState
 * @static
 */
/**
 * Entry with value ``2``.
 * @type {number}
 * @member Disabled
 * @memberof OcaDeviceState
 * @static
 */
/**
 * Entry with value ``4``.
 * @type {number}
 * @member Error
 * @memberof OcaDeviceState
 * @static
 */
/**
 * Entry with value ``8``.
 * @type {number}
 * @member Initializing
 * @memberof OcaDeviceState
 * @static
 */
/**
 * Entry with value ``16``.
 * @type {number}
 * @member Updating
 * @memberof OcaDeviceState
 * @static
 */
/**
 * Entry with value ``32``.
 * @type {number}
 * @member unused
 * @memberof OcaDeviceState
 * @static
 */
