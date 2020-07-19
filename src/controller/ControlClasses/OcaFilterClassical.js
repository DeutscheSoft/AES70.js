import { make_control_class } from '../Base.js';
import { OcaActuator } from './OcaActuator.js';
import { OcaBitSet16 } from '../../OCP1/OcaBitSet16.js';
import { OcaClassicalFilterShape } from '../../OCP1/OcaClassicalFilterShape.js';
import { OcaFilterPassband } from '../../OCP1/OcaFilterPassband.js';
import { OcaFloat32 } from '../../OCP1/OcaFloat32.js';
import { OcaUint16 } from '../../OCP1/OcaUint16.js';

/**
 * A classical analog-style filter - highpass, lowpass, bandpass, etc.,
 * with shape characteristics such as Butterworth, Chebyshev, Bessel, and
 * Linkwitz-Riley. Frequently used in loudspeaker crossover networks.
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
 * Gets the value of the Frequency property. The return value indicates
 * if the property was successfully retrieved.
 * @method RemoteControlClasses.OcaFilterClassical#GetFrequency
 * @returns {Promise<Arguments<OcaFrequency,OcaFrequency,OcaFrequency>>}
 */
/**
 * Sets the value of the Frequency property. The return value indicates
 * if the property was successfully set.
 * @method RemoteControlClasses.OcaFilterClassical#SetFrequency
 * @param frequency {OcaFrequency}
 *
 * @returns {Promise}
 */
/**
 * Returns the passband specification of the filter object. The return
 * value indicates if the specification was successfully retrieved.
 * @method RemoteControlClasses.OcaFilterClassical#GetPassband
 * @returns {Promise<OcaFilterPassband>}
 */
/**
 * Sets the passband specification of the filter object. The return value
 * indicates if the specification was successfully set.
 * @method RemoteControlClasses.OcaFilterClassical#SetPassband
 * @param Passband {OcaFilterPassband}
 *
 * @returns {Promise}
 */
/**
 * Returns the Shape property of the filter. The return value indicates
 * if the property was successfully retrieved.
 * @method RemoteControlClasses.OcaFilterClassical#GetShape
 * @returns {Promise<OcaClassicalFilterShape>}
 */
/**
 * Sets the Shape property of the filter. The return value indicates if
 * the property was successfully set.
 * @method RemoteControlClasses.OcaFilterClassical#SetShape
 * @param Shape {OcaClassicalFilterShape}
 *
 * @returns {Promise}
 */
/**
 * Returns the order of the filter. The return value indicates if the
 * property was successfully retrieved.
 * @method RemoteControlClasses.OcaFilterClassical#GetOrder
 * @returns {Promise<Arguments<OcaUint16,OcaUint16,OcaUint16>>}
 */
/**
 * Sets the order of the filter. The return value indicates if the
 * property was successfully set.
 * @method RemoteControlClasses.OcaFilterClassical#SetOrder
 * @param Order {OcaUint16}
 *
 * @returns {Promise}
 */
/**
 * Returns the filter parameter. The return value indicates if the
 * property was successfully retrieved.
 * @method RemoteControlClasses.OcaFilterClassical#GetParameter
 * @returns {Promise<Arguments<OcaFloat32,OcaFloat32,OcaFloat32>>}
 */
/**
 * Sets the filter parameter. The return value indicates if the parameter
 * was successfully set.
 * @method RemoteControlClasses.OcaFilterClassical#SetParameter
 * @param Parameter {OcaFloat32}
 *
 * @returns {Promise}
 */
/**
 * Sets some or all filter parameter. The return value indicates if the
 * parameters were successfully set. The action of this method is atomic
 * - if any of the value changes fails, none of the changes are made.
 * @method RemoteControlClasses.OcaFilterClassical#SetMultiple
 * @param Mask {OcaParameterMask}
 *
 * @param Frequency {OcaFrequency}
 *
 * @param Passband {OcaFilterPassband}
 *
 * @param Shape {OcaClassicalFilterShape}
 *
 * @param Order {OcaUint16}
 *
 * @param Parameter {OcaFloat32}
 *
 * @returns {Promise}
 */
/**
 * The frequency of the filter.
 * @member RemoteControlClasses.OcaFilterClassical#OnFrequencyChanged {PropertyEvent<OcaFrequency>} - This event is emitted when Frequency changes in the remote object.
 */
/**
 * Lowpass, highpass, bandpass, bandreject
 * @member RemoteControlClasses.OcaFilterClassical#OnPassbandChanged {PropertyEvent<OcaFilterPassband>} - This event is emitted when Passband changes in the remote object.
 */
/**
 * Shape family - Butterworth, Bessell, etc.
 * @member RemoteControlClasses.OcaFilterClassical#OnShapeChanged {PropertyEvent<OcaClassicalFilterShape>} - This event is emitted when Shape changes in the remote object.
 */
/**
 * Filter order
 * @member RemoteControlClasses.OcaFilterClassical#OnOrderChanged {PropertyEvent<OcaUint16>} - This event is emitted when Order changes in the remote object.
 */
/**
 * Ripple or other filter parameter, depending on shape. Not used by some
 * shapes.
 * @member RemoteControlClasses.OcaFilterClassical#OnParameterChanged {PropertyEvent<OcaFloat32>} - This event is emitted when Parameter changes in the remote object.
 */
