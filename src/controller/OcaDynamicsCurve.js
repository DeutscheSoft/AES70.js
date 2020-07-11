import { make_control_class } from './Base.js';
import { OcaActuator } from './OcaActuator.js';
import { OcaBitSet16 } from '../OCP1/OcaBitSet16.js';
import { OcaDBr } from '../OCP1/OcaDBr.js';
import { OcaFloat32 } from '../OCP1/OcaFloat32.js';
import { OcaList } from '../OCP1/OcaList.js';
import { OcaUint16 } from '../OCP1/OcaUint16.js';
import { OcaUint8 } from '../OCP1/OcaUint8.js';
import { String16 } from '../OCP1/String16.js';

/**
 * Dynamic compression / expansion curve. <b>Curve</b> means a function
 * that expresses the relationship of output level to input level. The
 * dependent variable (Y) of the curve is output level; the independent
 * variable (X) is input level. Every curve is composed of <b>(n+1)</b>
 * straight-line <b>segments</b> joined by <b>(n)</b> small fillets
 * called <b>knees</b>. Each knee occurs at a particular input level
 * value called the <b>threshold.</b> Each segment is characterized by
 * its <b>slope.</b> <b> </b> | <b>/</b> | S3 <b>/</b> | S2 <b>/</b> |
 * T1<b>-------------</b>T2 | <b>/</b> | S1 <b>/</b> | <b>/</b> |
 * <b>/</b> +------------------------------------ This "drawing" shows a
 * three-segment curve. The horizontal axis is input level, vertical axis
 * is output level. Algebraically, a curve is a function <b> Out = Curve(
 * In, T[1..n-1], S[1..n], K[1..n-1] )</b> where <b>n</b> is the number
 * of segments, and <b>In </b>is input level in dBr <b>Out </b>is output
 * level in dBr <b>T[1...n-1]</b> is an array of <b>thresholds</b> in dBr
 * <b>S[1...n] </b>is an array of <b>slopes</b> in dBr per dBr, i.e.
 * unitless <b>K[1..n]</b> is the <b>knee parameter</b>, an
 * implementation-dependant parameter that specifies the shape of the
 * curve around the knee. Each segment has a slope that expresses its
 * ratio of output level to input level. Note that this slope is the
 * inverse of what dynamics processors call "ratio". For example, a ratio
 * of 2:1 is represented by a curve segment with slope 1/2 = 0.5. This
 * model can represent familiar audio dynamics elements (we ignore
 * <b>K[]</b> in these examples): - Compressor with ratio of 2:1 and
 * threshold of 10dBr: <b> n = 2</b> <b> T[1] = 10</b> <b> S[1] = 1</b>
 * <b> S[2] = 0.5</b> - Hard limiter with threshold of 18dBr: <b> n =
 * 2</b> T[1] = 18 S[1] = 1 S[2] = 0 - Upward expander with ratio of
 * 1.5:1 and threshold of -12dBr: <b> n = 2</b> T[1] = -12 S[1] = 1 S[2]
 * = 1.5 - Downward expander (gate) with ratio of 50:1 and threshold of
 * -45dBr: <b> n = 2</b> T[1] = -45 S[1] = 50 S[2] = 1 This class,
 * <b>OcaDynamicsCurve,</b> adds two additional parameters to the basic
 * curve mechanism. <b>Out = Curve( In, T[1..n-1], S[1..n], K[1..n-1] ,
 * Floor, Ceiling)</b> where <b>In, T[], and S[], </b>and <b>K[]</b> are
 * as defined above. <b>Floor</b> is the lowest gain (in dBr) that the
 * dynamics element is allowed to produce. <b>Ceiling </b>is the highest
 * gain (in dBr) that the dynamics element is allowed to produce. To show
 * the use of <b>Floor</b> and <b>Ceiling</b>, we revisit some of the
 * examples above (again, <b>K[]</b> is ignored): - Compressor with ratio
 * of 2:1, threshold of 10dBr, and max gain reduction of 20dB: <b> n =
 * 2</b> <b> T[1] = 10</b> <b> S[1] = 1</b> <b> S[2] = 0.5</b> <b> Floor
 * = -20</b> <b> Ceiling = 0</b> - Upward expander with ratio of 1.5:1,
 * threshold of -12dBr, and max gain boost of 4dB: <b> n = 2</b> T[1] =
 * -12 S[1] = 1 S[2] = 1.5 Floor = 0 Ceiling = 4.0 More complex dynamics
 * curves can be modeled by using more segments (<b>n &gt; 2)</b>.
 * @extends RemoteControlClasses.OcaActuator
 * @class OcaDynamicsCurve
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaDynamicsCurve = make_control_class(
  'OcaDynamicsCurve',
  4,
  '\u0001\u0001\u0001\u0010',
  2,
  OcaActuator,
  [
    ['GetNSegments', 4, 1, [], [OcaUint8, OcaUint8, OcaUint8]],
    ['SetNSegments', 4, 2, [OcaUint8], []],
    ['GetThreshold', 4, 3, [], [OcaList(OcaDBr), OcaFloat32, OcaFloat32]],
    ['SetThreshold', 4, 4, [OcaList(OcaDBr)], []],
    [
      'GetSlope',
      4,
      5,
      [],
      [OcaList(OcaFloat32), OcaList(OcaFloat32), OcaList(OcaFloat32)],
    ],
    ['SetSlope', 4, 6, [OcaList(OcaFloat32)], []],
    [
      'GetKneeParameter',
      4,
      7,
      [],
      [OcaList(OcaFloat32), OcaList(OcaFloat32), OcaList(OcaFloat32)],
    ],
    ['SetKneeParameter', 4, 8, [OcaList(OcaFloat32)], []],
    ['GetDynamicGainCeiling', 4, 9, [], [OcaFloat32, OcaFloat32, OcaFloat32]],
    ['SetDynamicGainCeiling', 4, 10, [OcaFloat32], []],
    ['GetDynamicGainFloor', 4, 11, [], [OcaFloat32, OcaFloat32, OcaFloat32]],
    ['SetDynamicGainFloor', 4, 12, [OcaFloat32], []],
    [
      'SetMultiple',
      4,
      13,
      [
        OcaBitSet16,
        OcaUint8,
        OcaList(OcaDBr),
        OcaList(OcaFloat32),
        OcaList(OcaFloat32),
        OcaFloat32,
        OcaFloat32,
      ],
      [],
    ],
  ],
  [
    ['NSegments', [OcaUint8], 4, 1, false, false, null],
    ['Threshold', [OcaList(OcaDBr)], 4, 2, false, false, null],
    ['Slope', [OcaList(OcaFloat32)], 4, 3, false, false, null],
    ['KneeParameter', [OcaList(OcaFloat32)], 4, 4, false, false, null],
    ['DynamicGainFloor', [OcaFloat32], 4, 5, false, false, null],
    ['DynamicGainCeiling', [OcaFloat32], 4, 6, false, false, null],
  ],
  []
);

/**
 * Gets the number of curve segments. The return value indicates whether
 * the value was successfully retrieved.
 * @method RemoteControlClasses.OcaDynamicsCurve#GetNSegments
 * @returns {Promise<Arguments<OcaUint8,OcaUint8,OcaUint8>>}
 */
/**
 * Sets the number of curve segments. The return value indicates whether
 * the data was successfully set. If this method increases the value of
 * n, the data in properties <b>Threshold</b>, <b>Slope</b>, and
 * <b>KneeParameter </b>of the new segment are by default set to the
 * values of the previous segment.
 * @method RemoteControlClasses.OcaDynamicsCurve#SetNSegments
 * @param Slope {OcaUint8}
 *
 * @returns {Promise}
 */
/**
 * Gets the list of Threshold values. The return value indicates whether
 * the data was successfully retrieved.
 * @method RemoteControlClasses.OcaDynamicsCurve#GetThreshold
 * @returns {Promise<Arguments<OcaList,OcaDBz,OcaDBz>>}
 */
/**
 * Sets the list of Threshold values. The return value indicates whether
 * the values were successfully set.
 * @method RemoteControlClasses.OcaDynamicsCurve#SetThreshold
 * @param Threshold {OcaList}
 *
 * @returns {Promise}
 */
/**
 * Gets the list of Slope values. The return value indicates whether the
 * list was successfully retrieved.
 * @method RemoteControlClasses.OcaDynamicsCurve#GetSlope
 * @returns {Promise<Arguments<OcaList,OcaList,OcaList>>}
 */
/**
 * Sets the list of Slope values. The return value indicates whether the
 * values were successfully set.
 * @method RemoteControlClasses.OcaDynamicsCurve#SetSlope
 * @param slope {OcaList}
 *
 * @returns {Promise}
 */
/**
 * Gets the list of KneeParameter valuess. The return value indicates
 * whether the list was successfully retrieved.
 * @method RemoteControlClasses.OcaDynamicsCurve#GetKneeParameter
 * @returns {Promise<Arguments<OcaList,OcaList,OcaList>>}
 */
/**
 * Sets the list of KneeParameter values. The return value indicates
 * whether the values were successfully set.
 * @method RemoteControlClasses.OcaDynamicsCurve#SetKneeParameter
 * @param parameter {OcaList}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the DynamicGainCeiling property. The return value
 * indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaDynamicsCurve#GetDynamicGainCeiling
 * @returns {Promise<Arguments<OcaDB,OcaDB,OcaDB>>}
 */
/**
 * Sets the value of the DynamicGainCeiling property. The return value
 * indicates whether the data was successfully set.
 * @method RemoteControlClasses.OcaDynamicsCurve#SetDynamicGainCeiling
 * @param gain {OcaDB}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the DynamicGainFloor property. The return value
 * indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaDynamicsCurve#GetDynamicGainFloor
 * @returns {Promise<Arguments<OcaDB,OcaDB,OcaDB>>}
 */
/**
 * Sets the value of the DynamicGainFloor property. The return value
 * indicates whether the data was successfully set.
 * @method RemoteControlClasses.OcaDynamicsCurve#SetDynamicGainFloor
 * @param Gain {OcaDB}
 *
 * @returns {Promise}
 */
/**
 * Sets some or all dynamics curve parameters. The return value indicates
 * if the parameters were successfully set. The action of this method is
 * atomic - if any of the value changes fails, none of the changes are
 * made.
 * @method RemoteControlClasses.OcaDynamicsCurve#SetMultiple
 * @param Mask {OcaParameterMask}
 *
 * @param nSegments {OcaUint8}
 *
 * @param Threshold {OcaList}
 *
 * @param Slope {OcaList}
 *
 * @param KneeParameter {OcaList}
 *
 * @param DynamicGainFloor {OcaDB}
 *
 * @param DynamicGainCeiling {OcaDB}
 *
 * @returns {Promise}
 */
/**
 * Number of curve segments.
 * @member RemoteControlClasses.OcaDynamicsCurve#OnNSegmentsChanged {PropertyEvent<OcaUint8>} - This event is emitted when NSegments changes in the remote object.
 */
/**
 * <b>T[1..n-1]</b>. See class description for details.
 * @member RemoteControlClasses.OcaDynamicsCurve#OnThresholdChanged {PropertyEvent<OcaList>} - This event is emitted when Threshold changes in the remote object.
 */
/**
 * <b>S[1..n]</b>. See class description for details.
 * @member RemoteControlClasses.OcaDynamicsCurve#OnSlopeChanged {PropertyEvent<OcaList>} - This event is emitted when Slope changes in the remote object.
 */
/**
 * <b>K[1..n]</b>. See class description for details.
 * @member RemoteControlClasses.OcaDynamicsCurve#OnKneeParameterChanged {PropertyEvent<OcaList>} - This event is emitted when KneeParameter changes in the remote object.
 */
/**
 * Lowest allowed dynamic gain value. See class description for details.
 * @member RemoteControlClasses.OcaDynamicsCurve#OnDynamicGainFloorChanged {PropertyEvent<OcaDB>} - This event is emitted when DynamicGainFloor changes in the remote object.
 */
/**
 * Highest allowed dynamic gain value. See class description for details.
 * @member RemoteControlClasses.OcaDynamicsCurve#OnDynamicGainCeilingChanged {PropertyEvent<OcaDB>} - This event is emitted when DynamicGainCeiling changes in the remote object.
 */
