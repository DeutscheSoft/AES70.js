import { Enum16 } from './Enum16.js';

/**
 * Enumeration (16-bit) for of software &amp; firmware components in the
 * device. Except for the boot loader, all other values of this enum are
 * device-specific and will be specified by subclassing this class.
 * @category Types
 * @class OcaComponent
 * @extends Enum16
 */
export const OcaComponent = Enum16({
  BootLoader: 0,
});
