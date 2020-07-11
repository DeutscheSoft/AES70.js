import { make_control_class } from './Base.js';
import { OcaLevelSensor } from './OcaLevelSensor.js';
import { OcaLevelMeterLaw } from '../OCP1/OcaLevelMeterLaw.js';
import { OcaUint16 } from '../OCP1/OcaUint16.js';
import { String16 } from '../OCP1/String16.js';

/**
 * Child of <b>OcaLevelSensor </b>that returns an audio meter reading in
 * dB relative to a known reference level, and whose value has been
 * calculated by the selected averaging algorithm.
 * @extends RemoteControlClasses.OcaLevelSensor
 * @class OcaAudioLevelSensor
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaAudioLevelSensor = make_control_class(
  'OcaAudioLevelSensor',
  5,
  '\u0001\u0001\u0002\u0002\u0001',
  2,
  OcaLevelSensor,
  [
    ['GetLaw', 5, 1, [], [OcaLevelMeterLaw]],
    ['SetLaw', 5, 2, [OcaLevelMeterLaw], []],
  ],
  [['Law', [OcaLevelMeterLaw], 5, 1, false, false, null]],
  []
);

/**
 * Gets the value of the Law property. The return value indicates whether
 * the property was successfully retrieved.
 * @method RemoteControlClasses.OcaAudioLevelSensor#GetLaw
 * @returns {Promise<OcaLevelMeterLaw>}
 */
/**
 * Sets the value of the Law property. The return value indicates whether
 * the property was successfully set. Only implemented for objects whose
 * Law property is read/write.
 * @method RemoteControlClasses.OcaAudioLevelSensor#SetLaw
 * @param law {OcaLevelMeterLaw}
 *
 * @returns {Promise}
 */
/**
 * Enum that defines metering algorithm, including averaging
 * characteristics and, in some cases, reference level. Readonly in some
 * objects.
 * @member RemoteControlClasses.OcaAudioLevelSensor#OnLawChanged {PropertyEvent<OcaLevelMeterLaw>} - This event is emitted when Law changes in the remote object.
 */
