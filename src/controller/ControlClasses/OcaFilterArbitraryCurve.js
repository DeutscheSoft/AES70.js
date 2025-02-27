import { OcaFloat32 } from '../../OCP1/OcaFloat32.js';
import { OcaTransferFunction } from '../../OCP1/OcaTransferFunction.js';
import { OcaUint16 } from '../../OCP1/OcaUint16.js';
import { make_control_class } from '../make_control_class.js';
import { OcaActuator } from './OcaActuator.js';

/**
 * Arbitrary-curve filter, with transfer function specified as amplitude and
 * phase versus frequency.
 * @extends OcaActuator
 * @class OcaFilterArbitraryCurve
 */
export const OcaFilterArbitraryCurve = make_control_class(
  'OcaFilterArbitraryCurve',
  4,
  '\u0001\u0001\u0001\r',
  3,
  OcaActuator,
  [
    ['GetTransferFunction', 4, 1, [], [OcaTransferFunction]],
    ['SetTransferFunction', 4, 2, [OcaTransferFunction], []],
    ['GetSampleRate', 4, 3, [], [OcaFloat32, OcaFloat32, OcaFloat32]],
    ['SetSampleRate', 4, 4, [OcaFloat32], []],
    ['GetTFMinLength', 4, 5, [], [OcaUint16]],
    ['GetTFMaxLength', 4, 6, [], [OcaUint16]],
  ],
  [
    ['TransferFunction', [OcaTransferFunction], 4, 1, false, false, null],
    ['SampleRate', [OcaFloat32], 4, 2, false, false, null],
    ['TFMinLength', [OcaUint16], 4, 3, false, false, null],
    ['TFMaxLength', [OcaUint16], 4, 4, false, false, null],
  ],
  []
);

/**
 * Gets the complex transfer function.
 *
 * @method OcaFilterArbitraryCurve#GetTransferFunction
 * @returns {Promise<OcaTransferFunction>}
 *   A promise which resolves to a single value of type :class:`OcaTransferFunction`.
 */
/**
 * Sets the complex transfer function.
 *
 * @method OcaFilterArbitraryCurve#SetTransferFunction
 * @param {IOcaTransferFunction} TransferFunction
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value and limits of the filter sampling rate.
 * The return values of this method are
 *
 * - Rate of type ``number``
 * - minRate of type ``number``
 * - maxRate of type ``number``
 *
 * @method OcaFilterArbitraryCurve#GetSampleRate
 * @returns {Promise<Arguments<number,number,number>>}
 */
/**
 * Sets the filter sampling rate.
 *
 * @method OcaFilterArbitraryCurve#SetSampleRate
 * @param {number} Rate
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value and limits of the TFMinLength property.
 *
 * @method OcaFilterArbitraryCurve#GetTFMinLength
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Gets the value and limits of the TFMaxLength property.
 *
 * @method OcaFilterArbitraryCurve#GetTFMaxLength
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * This event is emitted when the property ``TransferFunction`` changes in the remote object.
 * The property ``TransferFunction`` is described in the AES70 standard as follows.
 * Transfer function of the filter.
 *
 * @member {PropertyEvent<OcaTransferFunction>} OcaFilterArbitraryCurve#OnTransferFunctionChanged
 */
/**
 * This event is emitted when the property ``SampleRate`` changes in the remote object.
 * The property ``SampleRate`` is described in the AES70 standard as follows.
 * Sampling rate inside the filter. Note: This rate is not necessarily the same
 * as the Device input or output sampling rate.
 *
 * @member {PropertyEvent<number>} OcaFilterArbitraryCurve#OnSampleRateChanged
 */
/**
 * This event is emitted when the property ``TFMinLength`` changes in the remote object.
 * The property ``TFMinLength`` is described in the AES70 standard as follows.
 * Minimum number of points that the transfer function must specify
 *
 * @member {PropertyEvent<number>} OcaFilterArbitraryCurve#OnTFMinLengthChanged
 */
/**
 * This event is emitted when the property ``TFMaxLength`` changes in the remote object.
 * The property ``TFMaxLength`` is described in the AES70 standard as follows.
 * Maximum number of points that the transfer function may specify
 *
 * @member {PropertyEvent<number>} OcaFilterArbitraryCurve#OnTFMaxLengthChanged
 */
