import { Enum8 } from './Enum8.js';

/**
 * Enumeration of passband types that can be used by OCA objects.
 * @category Types
 * @class OcaFilterPassband
 * @extends Enum8
 */
export const OcaFilterPassband = Enum8({
  HiPass: 1,
  LowPass: 2,
  BandPass: 3,
  BandReject: 4,
  AllPass: 5,
});
