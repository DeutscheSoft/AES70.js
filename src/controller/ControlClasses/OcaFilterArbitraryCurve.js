import { make_control_class } from '../Base.js';
import { OcaActuator } from './OcaActuator.js';
import { OcaFloat32 } from '../../OCP1/OcaFloat32.js';
import { OcaTransferFunction } from '../../OCP1/OcaTransferFunction.js';
import { OcaUint16 } from '../../OCP1/OcaUint16.js';

/**
 * An arbitrary-curve filter, with transfer function specified as
 * amplitude and phase versus frequency.
 * @extends RemoteControlClasses.OcaActuator
 * @class OcaFilterArbitraryCurve
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaFilterArbitraryCurve = make_control_class(
  'OcaFilterArbitraryCurve',
  4,
  '\u0001\u0001\u0001\r',
  2,
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
 * Returns the complex transfer function.
 * @method RemoteControlClasses.OcaFilterArbitraryCurve#GetTransferFunction
 * @returns {Promise<OcaTransferFunction>}
 */
/**
 * Sets the complex transfer function.
 * @method RemoteControlClasses.OcaFilterArbitraryCurve#SetTransferFunction
 * @param TransferFunction {OcaTransferFunction}
 *
 * @returns {Promise}
 */
/**
 * Gets the filter sampling rate.
 * @method RemoteControlClasses.OcaFilterArbitraryCurve#GetSampleRate
 * @returns {Promise<Arguments<OcaFrequency,OcaFrequency,OcaFrequency>>}
 */
/**
 * Sets the filter sampling rate.
 * @method RemoteControlClasses.OcaFilterArbitraryCurve#SetSampleRate
 * @param Rate {OcaFrequency}
 *
 * @returns {Promise}
 */
/**
 * Returns the minimum number of required points in the specified
 * transfer function.
 * @method RemoteControlClasses.OcaFilterArbitraryCurve#GetTFMinLength
 * @returns {Promise<OcaUint16>}
 */
/**
 * Returns the maximum number of allowed points in the specified transfer
 * function.
 * @method RemoteControlClasses.OcaFilterArbitraryCurve#GetTFMaxLength
 * @returns {Promise<OcaUint16>}
 */
/**
 * Transfer function of the filter.
 * @member RemoteControlClasses.OcaFilterArbitraryCurve#OnTransferFunctionChanged {PropertyEvent<OcaTransferFunction>} - This event is emitted when TransferFunction changes in the remote object.
 */
/**
 * Sample rate inside the filter. We can't assume it's the same as the
 * device input or output rate.
 * @member RemoteControlClasses.OcaFilterArbitraryCurve#OnSampleRateChanged {PropertyEvent<OcaFrequency>} - This event is emitted when SampleRate changes in the remote object.
 */
/**
 * Minimum number of points that transfer function must specify
 * @member RemoteControlClasses.OcaFilterArbitraryCurve#OnTFMinLengthChanged {PropertyEvent<OcaUint16>} - This event is emitted when TFMinLength changes in the remote object.
 */
/**
 * Maximum number of points that transfer function may specify
 * @member RemoteControlClasses.OcaFilterArbitraryCurve#OnTFMaxLengthChanged {PropertyEvent<OcaUint16>} - This event is emitted when TFMaxLength changes in the remote object.
 */
