import { make_control_class } from '../make_control_class.js';
import { OcaManager } from './OcaManager.js';

/**
 * Placeholder for optional manager that in future versions of the standard will hold various global audio processing parameters.
 *
 *  - May be instantiated once in any device.
 *
 *
 *  - If instantiated, object number must be 9.
 *
 * @extends OcaManager
 * @class OcaAudioProcessingManager
 */
export const OcaAudioProcessingManager = make_control_class(
  'OcaAudioProcessingManager',
  3,
  '\u0001\u0003\t',
  2,
  OcaManager,
  [],
  [],
  []
);
