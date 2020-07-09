import { Enum8 } from './Enum8.js';

/**
 * Enumeration of waveform types that can be used by OCA objects.
 * @category Types
 * @class OcaSweepType
 * @extends Enum8
 */
export const OcaSweepType = Enum8({
  Linear: 1,
  Logarithmic: 2,
  None: 0,
});
