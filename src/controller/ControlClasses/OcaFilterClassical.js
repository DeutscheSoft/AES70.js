import { make_control_class } from '../Base.js';
import { OcaActuator } from './OcaActuator.js';
import { OcaBitSet16 } from '../../OCP1/OcaBitSet16.js';
import { OcaClassicalFilterShape } from '../../OCP1/OcaClassicalFilterShape.js';
import { OcaFilterPassband } from '../../OCP1/OcaFilterPassband.js';
import { OcaFloat32 } from '../../OCP1/OcaFloat32.js';
import { OcaUint16 } from '../../OCP1/OcaUint16.js';

/**
 * A classical analog-style filter - highpass, lowpass, bandpass, etc., with shape characteristics such as Butterworth, Chebyshev, Bessel, and Linkwitz-Riley. Frequently used in loudspeaker crossover networks.
 * @extends RemoteControlClasses.OcaActuator
 * @class OcaFilterClassical
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaFilterClassical = make_control_class(
  'OcaFilterClassical',
  4,
  '\u0001\u0001\u0001\t',
  2,
  OcaActuator,
  [
    ['GetFrequency', 4, 1, [], [OcaFloat32, OcaFloat32, OcaFloat32]],
    ['SetFrequency', 4, 2, [OcaFloat32], []],
    ['GetPassband', 4, 3, [], [OcaFilterPassband]],
    ['SetPassband', 4, 4, [OcaFilterPassband], []],
    ['GetShape', 4, 5, [], [OcaClassicalFilterShape]],
    ['SetShape', 4, 6, [OcaClassicalFilterShape], []],
    ['GetOrder', 4, 7, [], [OcaUint16, OcaUint16, OcaUint16]],
    ['SetOrder', 4, 8, [OcaUint16], []],
    ['GetParameter', 4, 9, [], [OcaFloat32, OcaFloat32, OcaFloat32]],
    ['SetParameter', 4, 10, [OcaFloat32], []],
    [
      'SetMultiple',
      4,
      11,
      [
        OcaBitSet16,
        OcaFloat32,
        OcaFilterPassband,
        OcaClassicalFilterShape,
        OcaUint16,
        OcaFloat32,
      ],
      [],
    ],
  ],
  [
    ['Frequency', [OcaFloat32], 4, 1, false, false, null],
    ['Passband', [OcaFilterPassband], 4, 2, false, false, null],
    ['Shape', [OcaClassicalFilterShape], 4, 3, false, false, null],
    ['Order', [OcaUint16], 4, 4, false, false, null],
    ['Parameter', [OcaFloat32], 4, 5, false, false, null],
  ],
  []
);

/**
 * Gets the value of the Frequency property. The return value indicates if the property was successfully retrieved.
 * The return values of this method are
 *
 * - Frequency of type ``number``
 * - minFrequency of type ``number``
 * - maxFrequency of type ``number``
 *
 * @method RemoteControlClasses.OcaFilterClassical#GetFrequency
 * @returns {Promise<Arguments<number,number,number>>}
 */
/**
 * Sets the value of the Frequency property. The return value indicates if the property was successfully set.
 *
 * @method RemoteControlClasses.OcaFilterClassical#SetFrequency
 * @param {number} frequency
 *
 * @returns {Promise<void>}
 */
/**
 * Returns the passband specification of the filter object. The return value indicates if the specification was successfully retrieved.
 *
 * @method RemoteControlClasses.OcaFilterClassical#GetPassband
 * @returns {Promise<OcaFilterPassband>}
 *   A promise which resolves to a single value of type :class:`OcaFilterPassband`.
 */
/**
 * Sets the passband specification of the filter object. The return value indicates if the specification was successfully set.
 *
 * @method RemoteControlClasses.OcaFilterClassical#SetPassband
 * @param {OcaFilterPassband} Passband
 *
 * @returns {Promise<void>}
 */
/**
 * Returns the Shape property of the filter. The return value indicates if the property was successfully retrieved.
 *
 * @method RemoteControlClasses.OcaFilterClassical#GetShape
 * @returns {Promise<OcaClassicalFilterShape>}
 *   A promise which resolves to a single value of type :class:`OcaClassicalFilterShape`.
 */
/**
 * Sets the Shape property of the filter. The return value indicates if the property was successfully set.
 *
 * @method RemoteControlClasses.OcaFilterClassical#SetShape
 * @param {OcaClassicalFilterShape} Shape
 *
 * @returns {Promise<void>}
 */
/**
 * Returns the order of the filter. The return value indicates if the property was successfully retrieved.
 * The return values of this method are
 *
 * - Order of type ``number``
 * - minOrder of type ``number``
 * - maxOrder of type ``number``
 *
 * @method RemoteControlClasses.OcaFilterClassical#GetOrder
 * @returns {Promise<Arguments<number,number,number>>}
 */
/**
 * Sets the order of the filter. The return value indicates if the property was successfully set.
 *
 * @method RemoteControlClasses.OcaFilterClassical#SetOrder
 * @param {number} Order
 *
 * @returns {Promise<void>}
 */
/**
 * Returns the filter parameter. The return value indicates if the property was successfully retrieved.
 * The return values of this method are
 *
 * - Parameter of type ``number``
 * - minParameter of type ``number``
 * - maxParameter of type ``number``
 *
 * @method RemoteControlClasses.OcaFilterClassical#GetParameter
 * @returns {Promise<Arguments<number,number,number>>}
 */
/**
 * Sets the filter parameter. The return value indicates if the parameter was successfully set.
 *
 * @method RemoteControlClasses.OcaFilterClassical#SetParameter
 * @param {number} Parameter
 *
 * @returns {Promise<void>}
 */
/**
 * Sets some or all filter parameter. The return value indicates if the parameters were successfully set. The action of this method is atomic - if any of the value changes fails, none of the changes are made.
 *
 * @method RemoteControlClasses.OcaFilterClassical#SetMultiple
 * @param {int} Mask
 *
 * @param {number} Frequency
 *
 * @param {OcaFilterPassband} Passband
 *
 * @param {OcaClassicalFilterShape} Shape
 *
 * @param {number} Order
 *
 * @param {number} Parameter
 *
 * @returns {Promise<void>}
 */
/**
 * This event is emitted when the property Frequency changes in the remote object.
 * The property ``Frequency`` is described in the AES70 standard as follows.
 * The frequency of the filter.
 *
 * @member {PropertyEvent<number>} RemoteControlClasses.OcaFilterClassical#OnFrequencyChanged
 */
/**
 * This event is emitted when the property Passband changes in the remote object.
 * The property ``Passband`` is described in the AES70 standard as follows.
 * Lowpass, highpass, bandpass, bandreject
 *
 * @member {PropertyEvent<OcaFilterPassband>} RemoteControlClasses.OcaFilterClassical#OnPassbandChanged
 */
/**
 * This event is emitted when the property Shape changes in the remote object.
 * The property ``Shape`` is described in the AES70 standard as follows.
 * Shape family - Butterworth, Bessell, etc.
 *
 * @member {PropertyEvent<OcaClassicalFilterShape>} RemoteControlClasses.OcaFilterClassical#OnShapeChanged
 */
/**
 * This event is emitted when the property Order changes in the remote object.
 * The property ``Order`` is described in the AES70 standard as follows.
 * Filter order
 *
 * @member {PropertyEvent<number>} RemoteControlClasses.OcaFilterClassical#OnOrderChanged
 */
/**
 * This event is emitted when the property Parameter changes in the remote object.
 * The property ``Parameter`` is described in the AES70 standard as follows.
 * Ripple or other filter parameter, depending on shape. Not used by some
 * shapes.
 *
 * @member {PropertyEvent<number>} RemoteControlClasses.OcaFilterClassical#OnParameterChanged
 */
