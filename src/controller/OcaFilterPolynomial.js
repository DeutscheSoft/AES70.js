import { make_control_class } from './Base.js';
import { OcaActuator } from './OcaActuator.js';
import { OcaFloat32 } from '../OCP1/OcaFloat32.js';
import { OcaList } from '../OCP1/OcaList.js';
import { OcaUint16 } from '../OCP1/OcaUint16.js';
import { OcaUint8 } from '../OCP1/OcaUint8.js';
import { String16 } from '../OCP1/String16.js';

/**
 * A generic Z-domain rational polynomial filter section: <u>A(0) + A(1)z
 * + A(2)z^2 + A(3)z^3 + ...</u> B(0) + B(1)z + B(2)z^2 + B(3)z^3 + ...
 * @extends RemoteControlClasses.OcaActuator
 * @class OcaFilterPolynomial
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * @method RemoteControlClasses.OcaFilterPolynomial#GetCoefficients
 * @returns {Promise<Arguments<OcaList,OcaList>>}
 */
/**
 * Sets the polynomial coefficients.
 * @method RemoteControlClasses.OcaFilterPolynomial#SetCoefficients
 * @param A {OcaList}
 *
 * @param B {OcaList}
 *
 * @returns {Promise}
 */
/**
 * Gets the filter sampling rate.
 * @method RemoteControlClasses.OcaFilterPolynomial#GetSampleRate
 * @returns {Promise<Arguments<OcaFrequency,OcaFrequency,OcaFrequency>>}
 */
/**
 * Sets the filter sampling rate.
 * @method RemoteControlClasses.OcaFilterPolynomial#SetSampleRate
 * @param Rate {OcaFrequency}
 *
 * @returns {Promise}
 */
/**
 * Gets the maximum allowable order (= max number of array elements in
 * numerator and for denominator arrays)
 * @method RemoteControlClasses.OcaFilterPolynomial#GetMaxOrder
 * @returns {Promise<OcaUint8>}
 */
/**
 * Numerator - "A"
 * @member RemoteControlClasses.OcaFilterPolynomial#OnAChanged {PropertyEvent<OcaList>} - This event is emitted when A changes in the remote object.
 */
/**
 * Denominator - "B"
 * @member RemoteControlClasses.OcaFilterPolynomial#OnBChanged {PropertyEvent<OcaList>} - This event is emitted when B changes in the remote object.
 */
/**
 * Sample rate inside the filter. We can't assume it's the same as the
 * device input or output rate.
 * @member RemoteControlClasses.OcaFilterPolynomial#OnSampleRateChanged {PropertyEvent<OcaFrequency>} - This event is emitted when SampleRate changes in the remote object.
 */
/**
 * Maximum order of A[] and B[], i.e. the maximum size of the A[] and B[]
 * arrays. Readonly.
 */
