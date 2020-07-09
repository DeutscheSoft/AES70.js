import { Enum8 } from './Enum8.js';

/**
 * Enumeration of waveform types that can be used by OCA objects.
 * @category Types
 * @class OcaWaveformType
 * @extends Enum8
 */
export const OcaWaveformType = Enum8({
  None: 0,
  DC: 1,
  Sine: 2,
  Square: 3,
  Impulse: 4,
  NoisePink: 5,
  NoiseWhite: 6,
  PolarityTest: 7,
});
