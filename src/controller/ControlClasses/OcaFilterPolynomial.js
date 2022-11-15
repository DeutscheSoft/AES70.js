import { OcaFloat32 } from '../../OCP1/OcaFloat32.js';
import { OcaList } from '../../OCP1/OcaList.js';
import { OcaUint8 } from '../../OCP1/OcaUint8.js';
import { make_control_class } from '../make_control_class.js';
import { OcaActuator } from './OcaActuator.js';

/**
 * A generic Z-domain rational polynomial filter section:  _A(0) + A(1)z + A(2)z^2 + A(3)z^3 + ..._  B(0) + B(1)z + B(2)z^2 + B(3)z^3 + ...
 * @extends OcaActuator
 * @class OcaFilterPolynomial
 */
export const OcaFilterPolynomial = make_control_class(
  'OcaFilterPolynomial',
  4,
  '\u0001\u0001\u0001\u000b',
  2,
  OcaActuator,
  [
    ['GetCoefficients', 4, 1, [], [OcaList(OcaFloat32), OcaList(OcaFloat32)]],
    ['SetCoefficients', 4, 2, [OcaList(OcaFloat32), OcaList(OcaFloat32)], []],
    ['GetSampleRate', 4, 3, [], [OcaFloat32, OcaFloat32, OcaFloat32]],
    ['SetSampleRate', 4, 4, [OcaFloat32], []],
    ['GetMaxOrder', 4, 5, [], [OcaUint8]],
  ],
  [
    ['A', [OcaList(OcaFloat32)], 4, 1, false, false, null],
    ['B', [OcaList(OcaFloat32)], 4, 2, false, false, null],
    ['SampleRate', [OcaFloat32], 4, 3, false, false, null],
    ['MaxOrder', [OcaUint8], 4, 4, true, false, null],
  ],
  []
);

/**
 * Returns the polynomial coefficients used.
 * The return values of this method are
 *
 * - A of type ``number[]``
 * - B of type ``number[]``
 *
 * @method OcaFilterPolynomial#GetCoefficients
 * @returns {Promise<Arguments<number[],number[]>>}
 */
/**
 * Sets the polynomial coefficients.
 *
 * @method OcaFilterPolynomial#SetCoefficients
 * @param {number[]} A
 *
 * @param {number[]} B
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the filter sampling rate.
 * The return values of this method are
 *
 * - Rate of type ``number``
 * - minRate of type ``number``
 * - maxRate of type ``number``
 *
 * @method OcaFilterPolynomial#GetSampleRate
 * @returns {Promise<Arguments<number,number,number>>}
 */
/**
 * Sets the filter sampling rate.
 *
 * @method OcaFilterPolynomial#SetSampleRate
 * @param {number} Rate
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the maximum allowable order (= max number of array elements in numerator and for denominator arrays)
 *
 * @method OcaFilterPolynomial#GetMaxOrder
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * This event is emitted when the property A changes in the remote object.
 * The property ``A`` is described in the AES70 standard as follows.
 * Numerator - "A"
 *
 * @member {PropertyEvent<number[]>} OcaFilterPolynomial#OnAChanged
 */
/**
 * This event is emitted when the property B changes in the remote object.
 * The property ``B`` is described in the AES70 standard as follows.
 * Denominator - "B"
 *
 * @member {PropertyEvent<number[]>} OcaFilterPolynomial#OnBChanged
 */
/**
 * This event is emitted when the property SampleRate changes in the remote object.
 * The property ``SampleRate`` is described in the AES70 standard as follows.
 * Sample rate inside the filter. We can't assume it's the same as the
 * device input or output rate.
 *
 * @member {PropertyEvent<number>} OcaFilterPolynomial#OnSampleRateChanged
 */
