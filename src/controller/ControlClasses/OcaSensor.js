import { OcaSensorReadingState } from '../../OCP1/OcaSensorReadingState.js';
import { make_control_class } from '../make_control_class.js';
import { OcaWorker } from './OcaWorker.js';

/**
 * Abstract base class for all sensor classes.
 * @extends OcaWorker
 * @class OcaSensor
 */
export const OcaSensor = make_control_class(
  'OcaSensor',
  3,
  '\u0001\u0001\u0002',
  3,
  OcaWorker,
  [['GetReadingState', 3, 1, [], [OcaSensorReadingState]]],
  [['ReadingState', [OcaSensorReadingState], 3, 1, false, false, null]],
  []
);

/**
 * Gets the current reading state of the sensor.
 *
 * @method OcaSensor#GetReadingState
 * @returns {Promise<OcaSensorReadingState>}
 *   A promise which resolves to a single value of type :class:`OcaSensorReadingState`.
 */
/**
 * This event is emitted when the property ``ReadingState`` changes in the remote object.
 * The property ``ReadingState`` is described in the AES70 standard as follows.
 * Enum that describes whether current reading value is valid and if not, why
 * not. Readonly.
 *
 * @member {PropertyEvent<OcaSensorReadingState>} OcaSensor#OnReadingStateChanged
 */
