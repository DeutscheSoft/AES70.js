import { OcaDBr } from '../../OCP1/OcaDBr.js';
import { OcaFloat32 } from '../../OCP1/OcaFloat32.js';
import { OcaList } from '../../OCP1/OcaList.js';
import { OcaParameterMask } from '../../OCP1/OcaParameterMask.js';
import { OcaUint8 } from '../../OCP1/OcaUint8.js';
import { make_control_class } from '../make_control_class.js';
import { OcaActuator } from './OcaActuator.js';

/**
 * Dynamic compression / expansion curve. **Curve** means a function that
 * expresses the relationship of output level to input level. The dependent
 * variable (Y) of the curve is output level; the independent variable (X) is
 * input level. Every curve shall be composed of **(n+1)** straight-line
 * **segments** joined by **(n)** small fillets called **knees**. Each knee
 * shall occur at a particular input level value called the **threshold.** Each
 * segment shall be characterized by its **slope.** ** ** | ** / ** | S3 ** / **
 * | S2 ** / ** | T1**-------------**T2 | ** / ** | S1 ** / ** | ** / ** | ** /
 * ** +------------------------------------ This "drawing" shows a three-segment
 * curve. The horizontal axis is input level, vertical axis is output level.
 * Algebraically, a curve shall be a function ** Out = Curve( In, T[1..n-1],
 * S[1..n], K[1..n-1] )** where **n** is the number of segments, and **In** is
 * input level in dBr **Out** is output level in dBr **T[1...n-1]** is an array
 * of **thresholds** in dBr **S[1...n]** is an array of **slopes** in dBr per
 * dBr, i.e. unitless **K[1..n]** is the **knee parameter**, an
 * implementation-dependant parameter that specifies the shape of the curve
 * around the knee. Each segment shall have a slope that expresses its ratio of
 * output level to input level. Note that this slope is the inverse of what
 * dynamics processors call "ratio". For example, a ratio of 2:1 shall be
 * represented by a curve segment with slope 1/2 = 0.5. This model can represent
 * various kinds of audio dynamics elements (we ignore **K[]** in these
 * examples): - Compressor with ratio of 2:1 and threshold of 10dBr: ** n = 2**
 * ** T[1] = 10** ** S[1] = 1** ** S[2] = 0.5** - Hard limiter with threshold of
 * 18dBr: ** n = 2** T[1] = 18 S[1] = 1 S[2] = 0 - Upward expander with ratio of
 * 1.5:1 and threshold of -12dBr: ** n = 2** T[1] = -12 S[1] = 1 S[2] = 1.5 -
 * Downward expander (gate) with ratio of 50:1 and threshold of -45dBr: ** n =
 * 2** T[1] = -45 S[1] = 50 S[2] = 1 This class, **OcaDynamicsCurve,** shall add
 * two additional parameters to the basic curve mechanism. **Out = Curve( In,
 * T[1..n-1], S[1..n], K[1..n-1] , Floor, Ceiling)** where **In, T[], and S[],**
 * and **K[]** are as defined above. **Floor** shall be the lowest gain (in dBr)
 * that the dynamics element is allowed to produce. **Ceiling** shall be the
 * highest gain (in dBr) that the dynamics element is allowed to produce. To
 * show the use of **Floor** and **Ceiling**, we revisit some of the examples
 * above (again, **K[]** is ignored): - Compressor with ratio of 2:1, threshold
 * of 10dBr, and max gain reduction of 20dB: ** n = 2** ** T[1] = 10** ** S[1] =
 * 1** ** S[2] = 0.5** ** Floor = -20** ** Ceiling = 0** - Upward expander with
 * ratio of 1.5:1, threshold of -12dBr, and max gain boost of 4dB: ** n = 2**
 * T[1] = -12 S[1] = 1 S[2] = 1.5 Floor = 0 Ceiling = 4.0 More complex dynamics
 * curves may be modeled by using more segments (**n > 2)**.
 * @extends OcaActuator
 * @class OcaDynamicsCurve
 */
export const OcaDynamicsCurve = make_control_class(
  'OcaDynamicsCurve',
  4,
  '\u0001\u0001\u0001\u0010',
  3,
  OcaActuator,
  [
    ['GetNSegments', 4, 1, [], [OcaUint8, OcaUint8, OcaUint8]],
    ['SetNSegments', 4, 2, [OcaUint8], []],
    ['GetThreshold', 4, 3, [], [OcaDBr, OcaFloat32, OcaFloat32]],
    ['SetThresholds', 4, 4, [OcaList(OcaDBr)], [], ['SetThreshold']],
    [
      'GetSlopes',
      4,
      5,
      [],
      [OcaList(OcaFloat32), OcaList(OcaFloat32), OcaList(OcaFloat32)],
      ['GetSlope'],
    ],
    ['SetSlopes', 4, 6, [OcaList(OcaFloat32)], [], ['SetSlope']],
    [
      'GetKneeParameters',
      4,
      7,
      [],
      [OcaList(OcaFloat32), OcaList(OcaFloat32), OcaList(OcaFloat32)],
      ['GetKneeParameter'],
    ],
    [
      'SetKneeParameters',
      4,
      8,
      [OcaList(OcaFloat32)],
      [],
      ['SetKneeParameter'],
    ],
    ['GetDynamicGainCeiling', 4, 9, [], [OcaFloat32, OcaFloat32, OcaFloat32]],
    ['SetDynamicGainCeiling', 4, 10, [OcaFloat32], []],
    ['GetDynamicGainFloor', 4, 11, [], [OcaFloat32, OcaFloat32, OcaFloat32]],
    ['SetDynamicGainFloor', 4, 12, [OcaFloat32], []],
    [
      'SetMultiple',
      4,
      13,
      [
        OcaParameterMask,
        OcaUint8,
        OcaList(OcaDBr),
        OcaList(OcaFloat32),
        OcaList(OcaFloat32),
        OcaFloat32,
        OcaFloat32,
      ],
      [],
    ],
    ['GetThresholds', 4, 14, [], [OcaList(OcaDBr), OcaFloat32, OcaFloat32]],
  ],
  [
    ['nSegments', [OcaUint8], 4, 1, false, false, null],
    ['Thresholds', [OcaList(OcaDBr)], 4, 2, false, false, ['Threshold']],
    ['Slopes', [OcaList(OcaFloat32)], 4, 3, false, false, ['Slope']],
    [
      'KneeParameters',
      [OcaList(OcaFloat32)],
      4,
      4,
      false,
      false,
      ['KneeParameter'],
    ],
    ['DynamicGainFloor', [OcaFloat32], 4, 5, false, false, null],
    ['DynamicGainCeiling', [OcaFloat32], 4, 6, false, false, null],
  ],
  []
);

/**
 * Gets the count, min count, and max count of curve segments.
 * The return values of this method are
 *
 * - NSegments of type ``number``
 * - minN of type ``number``
 * - maxN of type ``number``
 *
 * @method OcaDynamicsCurve#GetNSegments
 * @returns {Promise<Arguments<number,number,number>>}
 */
/**
 * Sets the number of curve segments. If this method increases the value of n,
 * the data in properties **Threshold**, **Slope**, and **KneeParameter** of the
 * new segment are by default set to the values of the previous segment.
 *
 * @method OcaDynamicsCurve#SetNSegments
 * @param {number} Slope
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the list of Threshold values. Deprecated in v3 of this class, replaced
 * by **GetThresholds(...)**. **Note: this method contains a definition error
 * and should not be used.**
 * The return values of this method are
 *
 * - Threshold of type ``IOcaDBr``
 * - minThreshold of type ``number``
 * - maxThreshold of type ``number``
 *
 * @method OcaDynamicsCurve#GetThreshold
 * @returns {Promise<Arguments<OcaDBr,number,number>>}
 */
/**
 * Sets the list of **Threshold** values. In v3 of this class, replaces
 * **SetThreshold(..)**
 *
 * @method OcaDynamicsCurve#SetThresholds
 * @param {IOcaDBr[]} Threshold
 *
 * @returns {Promise<void>}
 */
/**
 * Sets the list of **Threshold** values. In v3 of this class, replaces
 * **SetThreshold(..)**
 * An alias for SetThresholds.
 *
 * @method OcaDynamicsCurve#SetThreshold
 * @param {IOcaDBr[]} Threshold
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the lists of **Slope** values, minima, and maxima. In v3 of this class,
 * replaces **GetSlope(..).**
 * The return values of this method are
 *
 * - Slopes of type ``number[]``
 * - minSlope of type ``number[]``
 * - maxSlope of type ``number[]``
 *
 * @method OcaDynamicsCurve#GetSlopes
 * @returns {Promise<Arguments<number[],number[],number[]>>}
 */
/**
 * Gets the lists of **Slope** values, minima, and maxima. In v3 of this class,
 * replaces **GetSlope(..).**
 * An alias for GetSlopes.
 * The return values of this method are
 *
 * - Slopes of type ``number[]``
 * - minSlope of type ``number[]``
 * - maxSlope of type ``number[]``
 *
 * @method OcaDynamicsCurve#GetSlope
 * @returns {Promise<Arguments<number[],number[],number[]>>}
 */
/**
 * Sets the list of **Slope** values. In v3 of this class, replaces
 * **SetSlope(..)**
 *
 * @method OcaDynamicsCurve#SetSlopes
 * @param {number[]} slope
 *
 * @returns {Promise<void>}
 */
/**
 * Sets the list of **Slope** values. In v3 of this class, replaces
 * **SetSlope(..)**
 * An alias for SetSlopes.
 *
 * @method OcaDynamicsCurve#SetSlope
 * @param {number[]} slope
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the list of **KneeParameter** values, minima, and maxima. In v3 of this
 * class, replaces **GetKneeParameter(..).**
 * The return values of this method are
 *
 * - Parameters of type ``number[]``
 * - minParameter of type ``number[]``
 * - maxParameter of type ``number[]``
 *
 * @method OcaDynamicsCurve#GetKneeParameters
 * @returns {Promise<Arguments<number[],number[],number[]>>}
 */
/**
 * Gets the list of **KneeParameter** values, minima, and maxima. In v3 of this
 * class, replaces **GetKneeParameter(..).**
 * An alias for GetKneeParameters.
 * The return values of this method are
 *
 * - Parameters of type ``number[]``
 * - minParameter of type ``number[]``
 * - maxParameter of type ``number[]``
 *
 * @method OcaDynamicsCurve#GetKneeParameter
 * @returns {Promise<Arguments<number[],number[],number[]>>}
 */
/**
 * Sets the list of **KneeParameter** values. In v3 of this class, replaces
 * **SetKneeParameter(..).**
 *
 * @method OcaDynamicsCurve#SetKneeParameters
 * @param {number[]} Parameters
 *
 * @returns {Promise<void>}
 */
/**
 * Sets the list of **KneeParameter** values. In v3 of this class, replaces
 * **SetKneeParameter(..).**
 * An alias for SetKneeParameters.
 *
 * @method OcaDynamicsCurve#SetKneeParameter
 * @param {number[]} Parameters
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value and limits of the **DynamicGainCeiling** property.
 * The return values of this method are
 *
 * - Gain of type ``number``
 * - minGain of type ``number``
 * - maxGain of type ``number``
 *
 * @method OcaDynamicsCurve#GetDynamicGainCeiling
 * @returns {Promise<Arguments<number,number,number>>}
 */
/**
 * Sets the value of the **DynamicGainCeiling** property.
 *
 * @method OcaDynamicsCurve#SetDynamicGainCeiling
 * @param {number} gain
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value and limits of the **DynamicGainFloor** property.
 * The return values of this method are
 *
 * - Gain of type ``number``
 * - minGain of type ``number``
 * - maxGain of type ``number``
 *
 * @method OcaDynamicsCurve#GetDynamicGainFloor
 * @returns {Promise<Arguments<number,number,number>>}
 */
/**
 * Sets the value of the **DynamicGainFloor** property.
 *
 * @method OcaDynamicsCurve#SetDynamicGainFloor
 * @param {number} Gain
 *
 * @returns {Promise<void>}
 */
/**
 * Sets some or all dynamics curve parameters. The action of this method shall
 * be atomic - if any of the value changes fails, **none** of the changes shall
 * be made.
 *
 * @method OcaDynamicsCurve#SetMultiple
 * @param {IOcaParameterMask} Mask
 * @param {number} NSegments
 * @param {IOcaDBr[]} Thresholds
 * @param {number[]} Slope
 * @param {number[]} KneeParameter
 * @param {number} DynamicGainFloor
 * @param {number} DynamicGainCeiling
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the list of **Threshold** values, and the minimum and maximum slope. In
 * v3 of this class, replaces **GetThreshold(..).**
 * The return values of this method are
 *
 * - Thresholds of type ``IOcaDBr[]``
 * - minThreshold of type ``number``
 * - maxThreshold of type ``number``
 *
 * @method OcaDynamicsCurve#GetThresholds
 * @returns {Promise<Arguments<OcaDBr[],number,number>>}
 */
/**
 * This event is emitted when the property ``nSegments`` changes in the remote object.
 * The property ``nSegments`` is described in the AES70 standard as follows.
 * Number of curve segments.
 *
 * @member {PropertyEvent<number>} OcaDynamicsCurve#OnnSegmentsChanged
 */
/**
 * This event is emitted when the property ``Thresholds`` changes in the remote object.
 * The property ``Thresholds`` is described in the AES70 standard as follows.
 * List of curve segment thresholds. See class description.
 *
 * @member {PropertyEvent<OcaDBr[]>} OcaDynamicsCurve#OnThresholdsChanged
 */
/**
 * An alias for OnThresholdsChanged
 *
 * @member {PropertyEvent<OcaDBr[]>} OcaDynamicsCurve#OnThresholdChanged
 */
/**
 * This event is emitted when the property ``Slopes`` changes in the remote object.
 * The property ``Slopes`` is described in the AES70 standard as follows.
 * **S[1..n]**. See class description for details.
 *
 * @member {PropertyEvent<number[]>} OcaDynamicsCurve#OnSlopesChanged
 */
/**
 * An alias for OnSlopesChanged
 *
 * @member {PropertyEvent<number[]>} OcaDynamicsCurve#OnSlopeChanged
 */
/**
 * This event is emitted when the property ``KneeParameters`` changes in the remote object.
 * The property ``KneeParameters`` is described in the AES70 standard as follows.
 * **K[1..n]**. See class description for details.
 *
 * @member {PropertyEvent<number[]>} OcaDynamicsCurve#OnKneeParametersChanged
 */
/**
 * An alias for OnKneeParametersChanged
 *
 * @member {PropertyEvent<number[]>} OcaDynamicsCurve#OnKneeParameterChanged
 */
/**
 * This event is emitted when the property ``DynamicGainFloor`` changes in the remote object.
 * The property ``DynamicGainFloor`` is described in the AES70 standard as follows.
 * Lowest allowed dynamic gain value. See class description for details.
 *
 * @member {PropertyEvent<number>} OcaDynamicsCurve#OnDynamicGainFloorChanged
 */
/**
 * This event is emitted when the property ``DynamicGainCeiling`` changes in the remote object.
 * The property ``DynamicGainCeiling`` is described in the AES70 standard as follows.
 * Highest allowed dynamic gain value. See class description for details.
 *
 * @member {PropertyEvent<number>} OcaDynamicsCurve#OnDynamicGainCeilingChanged
 */
