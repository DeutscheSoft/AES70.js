import { Bitset16 } from './Bitset16.js';

/**
 * Bitset defining bit flags that indicate the device states CAP devices
 * can be in. The state is returned by the device's Device Manager on
 * request. Any combination of the flags may be returned, unless
 * specified otherwise for the specific flag. The value 0x0000 indicates
 * the device is fully operational.
 * @category Types
 * @class OcaDeviceState
 * @extends Base
 */
export const OcaDeviceState = Bitset16([
  'Operational',
  'Disabled',
  'Error',
  'Initializing',
  'Updating',
  'unused',
]);
