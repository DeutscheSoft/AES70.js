import { make_control_class } from '../Base.js';
import { OcaActuator } from './OcaActuator.js';
import { OcaBitSet16 } from '../../OCP1/OcaBitSet16.js';
import { OcaFloat32 } from '../../OCP1/OcaFloat32.js';
import { OcaParametricEQShape } from '../../OCP1/OcaParametricEQShape.js';

/**
 * A parametric equalizer section with various shape options.
 * @extends OcaActuator
 * @class OcaFilterParametric
 */
export const OcaFilterParametric = make_control_class(
  'OcaFilterParametric',
  4,
  '\u0001\u0001\u0001\n',
  2,
  OcaActuator,
  [
    ['GetFrequency', 4, 1, [], [OcaFloat32, OcaFloat32, OcaFloat32]],
    ['SetFrequency', 4, 2, [OcaFloat32], []],
    ['GetShape', 4, 3, [], [OcaParametricEQShape]],
    ['SetShape', 4, 4, [OcaParametricEQShape], []],
    ['GetWidthParameter', 4, 5, [], [OcaFloat32, OcaFloat32, OcaFloat32]],
    ['SetWidthParameter', 4, 6, [OcaFloat32], []],
    ['GetInbandGain', 4, 7, [], [OcaFloat32, OcaFloat32, OcaFloat32]],
    ['SetInbandGain', 4, 8, [OcaFloat32], []],
    ['GetShapeParameter', 4, 9, [], [OcaFloat32, OcaFloat32, OcaFloat32]],
    ['SetShapeParameter', 4, 10, [OcaFloat32], []],
    [
      'SetMultiple',
      4,
      11,
      [
        OcaBitSet16,
        OcaFloat32,
        OcaParametricEQShape,
        OcaFloat32,
        OcaFloat32,
        OcaFloat32,
      ],
      [],
    ],
  ],
  [
    ['Frequency', [OcaFloat32], 4, 1, false, false, null],
    ['Shape', [OcaParametricEQShape], 4, 2, false, false, null],
    ['WidthParameter', [OcaFloat32], 4, 3, false, false, ['Q']],
    ['InbandGain', [OcaFloat32], 4, 4, false, false, null],
    ['ShapeParameter', [OcaFloat32], 4, 5, false, false, null],
  ],
  []
);

/**
 * Gets the equalizer frequency setpoint. The return value indicates whether the data was successfully retrieved.
 * The return values of this method are
 *
 * - Frequency of type ``number``
 * - minFrequency of type ``number``
 * - maxFrequency of type ``number``
 *
 * @method OcaFilterParametric#GetFrequency
 * @returns {Promise<Arguments<number,number,number>>}
 */
/**
 * Sets the equalizer frequency. The return value indicates whether the value was successfully set.
 *
 * @method OcaFilterParametric#SetFrequency
 * @param {number} Frequency
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the curve shape of the equalizer. The return value indicates whether the data was successfully retrieved.
 *
 * @method OcaFilterParametric#GetShape
 * @returns {Promise<OcaParametricEQShape>}
 *   A promise which resolves to a single value of type :class:`OcaParametricEQShape`.
 */
/**
 * Sets the curve shape shape of the equalizer. The return value indicates whether the shape was successfully set.
 *
 * @method OcaFilterParametric#SetShape
 * @param {OcaParametricEQShape} type
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the width parameter property of the equalizer. The return value indicates whether the data was successfully retrieved.
 * The return values of this method are
 *
 * - Width of type ``number``
 * - minWidth of type ``number``
 * - maxWidth of type ``number``
 *
 * @method OcaFilterParametric#GetWidthParameter
 * @returns {Promise<Arguments<number,number,number>>}
 */
/**
 * Sets the width parameter property of the equalizer. The return value indicates whether the Q was successfully set.
 *
 * @method OcaFilterParametric#SetWidthParameter
 * @param {number} Width
 *
 * @returns {Promise<void>}
 */
/**
 * Returns the in-band gain of the equalizer. The return value indicates whether the data was successfully retrieved.
 * The return values of this method are
 *
 * - gain of type ``number``
 * - minGain of type ``number``
 * - maxGain of type ``number``
 *
 * @method OcaFilterParametric#GetInbandGain
 * @returns {Promise<Arguments<number,number,number>>}
 */
/**
 * Sets the in-band gain of the equalizer. The return value indicates whether the gain was successfully set.
 *
 * @method OcaFilterParametric#SetInbandGain
 * @param {number} gain
 *
 * @returns {Promise<void>}
 */
/**
 * Returns the shape parameter of the equalizer. The return value indicates whether the data was successfully retrieved.
 * The return values of this method are
 *
 * - shape of type ``number``
 * - minShape of type ``number``
 * - maxShape of type ``number``
 *
 * @method OcaFilterParametric#GetShapeParameter
 * @returns {Promise<Arguments<number,number,number>>}
 */
/**
 * Sets the shape parameter of the equalizer. The return value indicates whether the parameter was successfully set.
 *
 * @method OcaFilterParametric#SetShapeParameter
 * @param {number} shape
 *
 * @returns {Promise<void>}
 */
/**
 * Sets some or all filter parameters. The return value indicates if the parameters were successfully set. The action of this method is atomic - if any of the value changes fails, none of the changes are made.
 *
 * @method OcaFilterParametric#SetMultiple
 * @param {number} Mask
 *
 * @param {number} Frequency
 *
 * @param {OcaParametricEQShape} Shape
 *
 * @param {number} WidthParameter
 *
 * @param {number} InBandGain
 *
 * @param {number} ShapeParameter
 *
 * @returns {Promise<void>}
 */
/**
 * This event is emitted when the property Frequency changes in the remote object.
 * The property ``Frequency`` is described in the AES70 standard as follows.
 * The frequency setpoint of the parametric filter.
 *
 * @member {PropertyEvent<number>} OcaFilterParametric#OnFrequencyChanged
 */
/**
 * This event is emitted when the property Shape changes in the remote object.
 * The property ``Shape`` is described in the AES70 standard as follows.
 * The shape of the parametric filter - peak, shelf, etc.
 *
 * @member {PropertyEvent<OcaParametricEQShape>} OcaFilterParametric#OnShapeChanged
 */
/**
 * This event is emitted when the property WidthParameter changes in the remote object.
 * The property ``WidthParameter`` is described in the AES70 standard as follows.
 * Width parameter. For normal parametric implementations, this is the Q
 * of the filter.
 *
 * @member {PropertyEvent<number>} OcaFilterParametric#OnWidthParameterChanged
 */
/**
 * This event is emitted when the property InbandGain changes in the remote object.
 * The property ``InbandGain`` is described in the AES70 standard as follows.
 * In-band gain of the parametric filter.
 *
 * @member {PropertyEvent<number>} OcaFilterParametric#OnInbandGainChanged
 */
/**
 * This event is emitted when the property ShapeParameter changes in the remote object.
 * The property ``ShapeParameter`` is described in the AES70 standard as follows.
 * Width parameter. For certain filter types, this parameter may be used
 * to represent extra information about the shape of the transfer
 * function.
 *
 * @member {PropertyEvent<number>} OcaFilterParametric#OnShapeParameterChanged
 */
