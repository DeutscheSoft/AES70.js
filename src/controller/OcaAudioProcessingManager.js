import { make_control_class } from './Base.js';
import { OcaManager } from './OcaManager.js';
import { OcaUint16 } from '../OCP1/OcaUint16.js';
import { String16 } from '../OCP1/String16.js';

/**
 * Placeholder for optional manager that in future versions of the
 * standard will hold various global audio processing parameters. <ul>
 * <li>May be instantiated once in any device. </li> </ul> <ul> <li>If
 * instantiated, object number must be 9.</li> </ul>
 * @extends RemoteControlClasses.OcaManager
 * @class OcaAudioProcessingManager
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
