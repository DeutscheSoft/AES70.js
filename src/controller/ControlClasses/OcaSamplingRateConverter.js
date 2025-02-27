import { OcaSamplingRateConverterType } from '../../OCP1/OcaSamplingRateConverterType.js';
import { make_control_class } from '../make_control_class.js';
import { OcaActuator } from './OcaActuator.js';

/**
 * Sampling rate converter. **ClockMap** property inherited from **OcaWorker**
 * shall define the input and output clocks to be used for the conversion(s).
 * @extends OcaActuator
 * @class OcaSamplingRateConverter
 */
export const OcaSamplingRateConverter = make_control_class(
  'OcaSamplingRateConverter',
  4,
  '\u0001\u0001\u0001\u0017',
  1,
  OcaActuator,
  [['GetType', 4, 1, [], [OcaSamplingRateConverterType]]],
  [['Type', [OcaSamplingRateConverterType], 4, 1, true, false, null]],
  []
);

/**
 * Gets type of this sampling rate converter.
 *
 * @method OcaSamplingRateConverter#GetType
 * @returns {Promise<OcaSamplingRateConverterType>}
 *   A promise which resolves to a single value of type :class:`OcaSamplingRateConverterType`.
 */
