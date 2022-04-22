import { make_control_class } from '../make_control_class.js';
import { OcaActuator } from './OcaActuator.js';
import { OcaFloat32 } from '../../OCP1/OcaFloat32.js';
import { OcaList } from '../../OCP1/OcaList.js';
import { OcaUint32 } from '../../OCP1/OcaUint32.js';

/**
 * A finite impulse response (FIR) filter.
 * @extends OcaActuator
 * @class OcaFilterFIR
 */
export const OcaFilterFIR = make_control_class(
  'OcaFilterFIR',
  4,
  '\u0001\u0001\u0001\f',
  2,
  OcaActuator,
  [
    ['GetLength', 4, 1, [], [OcaUint32, OcaUint32, OcaUint32]],
    ['GetCoefficients', 4, 2, [], [OcaList(OcaFloat32)]],
    ['SetCoefficients', 4, 3, [OcaList(OcaFloat32)], []],
    ['GetSampleRate', 4, 4, [], [OcaFloat32, OcaFloat32, OcaFloat32]],
    ['SetSampleRate', 4, 5, [OcaFloat32], []],
  ],
  [
    ['Length', [OcaUint32], 4, 1, false, false, null],
    ['Coefficients', [OcaList(OcaFloat32)], 4, 2, false, false, null],
    ['SampleRate', [OcaFloat32], 4, 3, false, false, null],
  ],
  []
);

/**
 * Gets the length of the FIR filter. The return value indicates whether the value was successfully retrieved.
 * The return values of this method are
 *
 * - Length of type ``number``
 * - minLength of type ``number``
 * - maxLength of type ``number``
 *
 * @method OcaFilterFIR#GetLength
 * @returns {Promise<Arguments<number,number,number>>}
 */
/**
 * Gets the coefficients of the FIR filter. The return value indicates whether the coefficients were successfully retrieved.
 *
 * @method OcaFilterFIR#GetCoefficients
 * @returns {Promise<number[]>}
 *   A promise which resolves to a single value of type ``number[]``.
 */
/**
 * Sets the value of the properties of the FIR filter. The return value indicates whether the properties were successfully set.
 *
 * @method OcaFilterFIR#SetCoefficients
 * @param {number[]} Coefficients
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the sample rate of the FIR filter. The return value indicates whether the data was successfully retrieved.
 * The return values of this method are
 *
 * - Rate of type ``number``
 * - minRate of type ``number``
 * - maxRate of type ``number``
 *
 * @method OcaFilterFIR#GetSampleRate
 * @returns {Promise<Arguments<number,number,number>>}
 */
/**
 * Sets the sample rate of the FIR filter. The return value indicates whether the rate was successfully set.
 *
 * @method OcaFilterFIR#SetSampleRate
 * @param {number} Rate
 *
 * @returns {Promise<void>}
 */
/**
 * This event is emitted when the property Length changes in the remote object.
 * The property ``Length`` is described in the AES70 standard as follows.
 * Length of the filter, in samples. Readonly. Value is set when
 * SetCoefficients(...) method executes.
 *
 * @member {PropertyEvent<number>} OcaFilterFIR#OnLengthChanged
 */
/**
 * This event is emitted when the property Coefficients changes in the remote object.
 * The property ``Coefficients`` is described in the AES70 standard as follows.
 * Array of FIR Coefficients. The size of the array (number of entries)
 * is equal to the Order property plus 1.
 *
 * @member {PropertyEvent<number[]>} OcaFilterFIR#OnCoefficientsChanged
 */
/**
 * This event is emitted when the property SampleRate changes in the remote object.
 * The property ``SampleRate`` is described in the AES70 standard as follows.
 * Sample rate inside the filter. We can't assume it's the same as the
 * device input or output rate.
 *
 * @member {PropertyEvent<number>} OcaFilterFIR#OnSampleRateChanged
 */
