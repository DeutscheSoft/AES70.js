/*
 * This file has been generated.
 */
/**
 * Bitset defining bit flags that indicate the device states CAP devices
 * can be in. The state is returned by the device's Device Manager on
 * request. Any combination of the flags may be returned, unless
 * specified otherwise for the specific flag. The value 0x0000 indicates
 * the device is fully operational.
 */
export const OcaDeviceState = {
  Operational: 1,
  Disabled: 2,
  Error: 4,
  Initializing: 8,
  Updating: 16,
  unused: 32,
};
