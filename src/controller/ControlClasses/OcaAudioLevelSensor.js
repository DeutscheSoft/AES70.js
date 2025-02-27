import { OcaLevelMeterLaw } from '../../OCP1/OcaLevelMeterLaw.js';
import { make_control_class } from '../make_control_class.js';
import { OcaLevelSensor } from './OcaLevelSensor.js';

/**
 * Child of **OcaLevelSensor** that shall return an audio meter reading in dB
 * relative to a known reference level, and whose value shall be calculated by
 * the selected averaging algorithm.
 * @extends OcaLevelSensor
 * @class OcaAudioLevelSensor
 */
export const OcaAudioLevelSensor = make_control_class(
  'OcaAudioLevelSensor',
  5,
  '\u0001\u0001\u0002\u0002\u0001',
  3,
  OcaLevelSensor,
  [
    ['GetLaw', 5, 1, [], [OcaLevelMeterLaw]],
    ['SetLaw', 5, 2, [OcaLevelMeterLaw], []],
  ],
  [['Law', [OcaLevelMeterLaw], 5, 1, false, false, null]],
  []
);

/**
 * Gets the value of the **Law** property.
 *
 * @method OcaAudioLevelSensor#GetLaw
 * @returns {Promise<OcaLevelMeterLaw>}
 *   A promise which resolves to a single value of type :class:`OcaLevelMeterLaw`.
 */
/**
 * Sets the value of the **Law** property.
 *
 * @method OcaAudioLevelSensor#SetLaw
 * @param {IOcaLevelMeterLaw} law
 *
 * @returns {Promise<void>}
 */
/**
 * This event is emitted when the property ``Law`` changes in the remote object.
 * The property ``Law`` is described in the AES70 standard as follows.
 * Enum that defines metering algorithm, including averaging characteristics
 * and, in some cases, reference level. Readonly in some objects.
 *
 * @member {PropertyEvent<OcaLevelMeterLaw>} OcaAudioLevelSensor#OnLawChanged
 */
