import { OcaFloat32 } from '../../OCP1/OcaFloat32.js';
import { OcaList } from '../../OCP1/OcaList.js';
import { OcaUint32 } from '../../OCP1/OcaUint32.js';
import { make_control_class } from '../make_control_class.js';
import { OcaActuator } from './OcaActuator.js';

/**
 * Finite impulse response (FIR) filter.
 * @extends OcaActuator
 * @class OcaFilterFIR
 */
export const OcaFilterFIR = make_control_class(
  'OcaFilterFIR',
  4,
  '\u0001\u0001\u0001\f',
  3,
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
 * Gets the length and length limits of the FIR filter.
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
 * Gets the coefficients of the FIR filter.
 *
 * @method OcaFilterFIR#GetCoefficients
 * @returns {Promise<number[]>}
 *   A promise which resolves to a single value of type ``number[]``.
 */
/**
 * Sets the coefficients of the FIR filter.
 *
 * @method OcaFilterFIR#SetCoefficients
 * @param {number[]} Coefficients
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value and limits of the **SampleRate** property.
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
 * Sets the sampling rate of the FIR filter.
 *
 * @method OcaFilterFIR#SetSampleRate
 * @param {number} Rate
 *
 * @returns {Promise<void>}
 */
/**
 * This event is emitted when the property ``Length`` changes in the remote object.
 * The property ``Length`` is described in the AES70 standard as follows.
 * Length of the filter, in samples. Readonly.
 *
 * @member {PropertyEvent<number>} OcaFilterFIR#OnLengthChanged
 */
/**
 * This event is emitted when the property ``Coefficients`` changes in the remote object.
 * The property ``Coefficients`` is described in the AES70 standard as follows.
 * Array of FIR Coefficients. Number of entries shall be equal to the value of
 * the **Order** property plus 1.
 *
 * @member {PropertyEvent<number[]>} OcaFilterFIR#OnCoefficientsChanged
 */
/**
 * This event is emitted when the property ``SampleRate`` changes in the remote object.
 * The property ``SampleRate`` is described in the AES70 standard as follows.
 * Sampling rate inside the filter. Note: This rate is not necessarily the same
 * as the Device input or output sampling rate.
 *
 * @member {PropertyEvent<number>} OcaFilterFIR#OnSampleRateChanged
 */
