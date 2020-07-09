import { Enum8 } from './Enum8.js';

/**
 * Enumeration of curve shapes used by OcaFilterParametric.
 * @category Types
 * @class OcaParametricEQShape
 * @extends Enum8
 */
export const OcaParametricEQShape = Enum8({
  None: 0,
  PEQ: 1,
  LowShelv: 2,
  HighShelv: 3,
  LowPass: 4,
  HighPass: 5,
  BandPass: 6,
  AllPass: 7,
  Notch: 8,
  ToneControlLowFixed: 9,
  ToneControlLowSliding: 10,
  ToneControlHighFixed: 11,
  ToneControlHighSliding: 12,
});
