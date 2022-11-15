/*
 * This file has been generated.
 */
import { IOcaDBr, OcaDBr } from './OcaDBr';

export declare interface IOcaPilotToneDetectorSpec {
  /**
   * Tone level threshold in dB.
   * @type OcaDBr
   */
  Threshold: IOcaDBr;

  /**
   * Frequency of the measured tone (in Hz).
   * @type number
   */
  Frequency: number;

  /**
   * Poll interval in milliseconds.
   * @type number
   */
  PollInterval: number;
}

export declare class OcaPilotToneDetectorSpec
  implements IOcaPilotToneDetectorSpec {
  /**
   * Multifield descriptor for a pilot tone detector element.
   * @class OcaPilotToneDetectorSpec
   */
  constructor(Threshold: OcaDBr, Frequency: number, PollInterval: number);

  /**
   * Tone level threshold in dB.
   * @type OcaDBr
   */
  Threshold: OcaDBr;

  /**
   * Frequency of the measured tone (in Hz).
   * @type number
   */
  Frequency: number;

  /**
   * Poll interval in milliseconds.
   * @type number
   */
  PollInterval: number;
}
