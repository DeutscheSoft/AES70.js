import { make_control_class } from './Base.js';
import { OcaActuator } from './OcaActuator.js';
import { OcaBitSet16 } from '../OCP1/OcaBitSet16.js';
import { OcaFloat32 } from '../OCP1/OcaFloat32.js';
import { OcaParametricEQShape } from '../OCP1/OcaParametricEQShape.js';
import { OcaUint16 } from '../OCP1/OcaUint16.js';
import { String16 } from '../OCP1/String16.js';

/**
 * A parametric equalizer section with various shape options.
 * @extends RemoteControlClasses.OcaActuator
 * @class OcaFilterParametric
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the equalizer frequency setpoint. The return value indicates
 * whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaFilterParametric#GetFrequency
 * @returns {Promise<Arguments<OcaFrequency,OcaFrequency,OcaFrequency>>}
 */
/**
 * Sets the equalizer frequency. The return value indicates whether the
 * value was successfully set.
 * @method RemoteControlClasses.OcaFilterParametric#SetFrequency
 * @param Frequency {OcaFrequency}
 *
 * @returns {Promise}
 */
/**
 * Gets the curve shape of the equalizer. The return value indicates
 * whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaFilterParametric#GetShape
 * @returns {Promise<OcaParametricEQShape>}
 */
/**
 * Sets the curve shape shape of the equalizer. The return value
 * indicates whether the shape was successfully set.
 * @method RemoteControlClasses.OcaFilterParametric#SetShape
 * @param type {OcaParametricEQShape}
 *
 * @returns {Promise}
 */
/**
 * Gets the width parameter property of the equalizer. The return value
 * indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaFilterParametric#GetWidthParameter
 * @returns {Promise<Arguments<OcaFloat32,OcaFloat32,OcaFloat32>>}
 */
/**
 * Sets the width parameter property of the equalizer. The return value
 * indicates whether the Q was successfully set.
 * @method RemoteControlClasses.OcaFilterParametric#SetWidthParameter
 * @param Width {OcaFloat32}
 *
 * @returns {Promise}
 */
/**
 * Returns the in-band gain of the equalizer. The return value indicates
 * whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaFilterParametric#GetInbandGain
 * @returns {Promise<Arguments<OcaDB,OcaDB,OcaDB>>}
 */
/**
 * Sets the in-band gain of the equalizer. The return value indicates
 * whether the gain was successfully set.
 * @method RemoteControlClasses.OcaFilterParametric#SetInbandGain
 * @param gain {OcaDB}
 *
 * @returns {Promise}
 */
/**
 * Returns the shape parameter of the equalizer. The return value
 * indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaFilterParametric#GetShapeParameter
 * @returns {Promise<Arguments<OcaFloat32,OcaFloat32,OcaFloat32>>}
 */
/**
 * Sets the shape parameter of the equalizer. The return value indicates
 * whether the parameter was successfully set.
 * @method RemoteControlClasses.OcaFilterParametric#SetShapeParameter
 * @param shape {OcaFloat32}
 *
 * @returns {Promise}
 */
/**
 * Sets some or all filter parameters. The return value indicates if the
 * parameters were successfully set. The action of this method is atomic
 * - if any of the value changes fails, none of the changes are made.
 * @method RemoteControlClasses.OcaFilterParametric#SetMultiple
 * @param Mask {OcaParameterMask}
 *
 * @param Frequency {OcaFrequency}
 *
 * @param Shape {OcaParametricEQShape}
 *
 * @param WidthParameter {OcaFloat32}
 *
 * @param InBandGain {OcaDB}
 *
 * @param ShapeParameter {OcaFloat32}
 *
 * @returns {Promise}
 */
/**
 * The frequency setpoint of the parametric filter.
 * @member RemoteControlClasses.OcaFilterParametric#OnFrequencyChanged {PropertyEvent<OcaFrequency>} - This event is emitted when Frequency changes in the remote object.
 */
/**
 * The shape of the parametric filter - peak, shelf, etc.
 * @member RemoteControlClasses.OcaFilterParametric#OnShapeChanged {PropertyEvent<OcaParametricEQShape>} - This event is emitted when Shape changes in the remote object.
 */
/**
 * Width parameter. For normal parametric implementations, this is the Q
 * of the filter.
 * @member RemoteControlClasses.OcaFilterParametric#OnWidthParameterChanged {PropertyEvent<OcaFloat32>} - This event is emitted when WidthParameter changes in the remote object.
 */
/**
 * In-band gain of the parametric filter.
 * @member RemoteControlClasses.OcaFilterParametric#OnInbandGainChanged {PropertyEvent<OcaDB>} - This event is emitted when InbandGain changes in the remote object.
 */
/**
 * Width parameter. For certain filter types, this parameter may be used
 * to represent extra information about the shape of the transfer
 * function.
 * @member RemoteControlClasses.OcaFilterParametric#OnShapeParameterChanged {PropertyEvent<OcaFloat32>} - This event is emitted when ShapeParameter changes in the remote object.
 */
