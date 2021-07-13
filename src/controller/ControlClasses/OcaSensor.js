import { make_control_class } from '../Base.js';
import { OcaWorker } from './OcaWorker.js';
import { OcaSensorReadingState } from '../../OCP1/OcaSensorReadingState.js';

/**
 * Abstract base class for all sensor classes.
 * @extends RemoteControlClasses.OcaWorker
 * @class OcaSensor
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaSensor = make_control_class(
  'OcaSensor',
  3,
  '\u0001\u0001\u0002',
  2,
  OcaWorker,
  [['GetReadingState', 3, 1, [], [OcaSensorReadingState]]],
  [['ReadingState', [OcaSensorReadingState], 3, 1, false, true, null]],
  []
);

/**
 * Gets the current reading state of the sensor. The return value indicates whether the state was successfully retrived.
 *
 * @method RemoteControlClasses.OcaSensor#GetReadingState
 * @returns {Promise<OcaSensorReadingState>}
 *   A promise which resolves to a single value of type :class:`OcaSensorReadingState`.
 */
