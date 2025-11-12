import { IOcaDBr, OcaDBr } from '../../types/OcaDBr.js';
import { IOcaParameterMask } from '../../types/OcaParameterMask.js';
import { Arguments } from '../arguments.js';
import { PropertyEvent } from '../property_event.js';
import { RemoteDevice } from '../remote_device.js';
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
export declare class OcaDynamicsCurve extends OcaActuator {
  /**
   * This event is emitted whenever nSegments changes.
   */
  OnnSegmentsChanged: PropertyEvent<number>;

  /**
   * This event is emitted whenever Thresholds changes.
   */
  OnThresholdsChanged: PropertyEvent<OcaDBr[]>;

  /**
   * An alias for OnThresholdsChanged
   */
  OnThresholdChanged: PropertyEvent<OcaDBr[]>;
  /**
   * This event is emitted whenever Slopes changes.
   */
  OnSlopesChanged: PropertyEvent<number[]>;

  /**
   * An alias for OnSlopesChanged
   */
  OnSlopeChanged: PropertyEvent<number[]>;
  /**
   * This event is emitted whenever KneeParameters changes.
   */
  OnKneeParametersChanged: PropertyEvent<number[]>;

  /**
   * An alias for OnKneeParametersChanged
   */
  OnKneeParameterChanged: PropertyEvent<number[]>;
  /**
   * This event is emitted whenever DynamicGainFloor changes.
   */
  OnDynamicGainFloorChanged: PropertyEvent<number>;

  /**
   * This event is emitted whenever DynamicGainCeiling changes.
   */
  OnDynamicGainCeilingChanged: PropertyEvent<number>;

  constructor(objectNumber: number, device: RemoteDevice);

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
  GetNSegments(): Promise<Arguments<[number, number, number]>>;

  /**
   * Sets the number of curve segments. If this method increases the value of n,
   * the data in properties **Threshold**, **Slope**, and **KneeParameter** of
   * the new segment are by default set to the values of the previous segment.
   *
   * @method OcaDynamicsCurve#SetNSegments
   * @param {number} Slope
   *
   * @returns {Promise<void>}
   */
  SetNSegments(Slope: number): Promise<void>;

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
  GetThreshold(): Promise<Arguments<[OcaDBr, number, number]>>;

  /**
   * Sets the list of **Threshold** values. In v3 of this class, replaces
   * **SetThreshold(..)**
   *
   * @method OcaDynamicsCurve#SetThresholds
   * @param {IOcaDBr[]} Threshold
   *
   * @returns {Promise<void>}
   */
  SetThresholds(Threshold: IOcaDBr[]): Promise<void>;

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
  SetThreshold(Threshold: IOcaDBr[]): Promise<void>;

  /**
   * Gets the lists of **Slope** values, minima, and maxima. In v3 of this
   * class, replaces **GetSlope(..).**
   * The return values of this method are
   *
   * - Slopes of type ``number[]``
   * - minSlope of type ``number[]``
   * - maxSlope of type ``number[]``
   *
   * @method OcaDynamicsCurve#GetSlopes
   * @returns {Promise<Arguments<number[],number[],number[]>>}
   */
  GetSlopes(): Promise<Arguments<[number[], number[], number[]]>>;

  /**
   * Gets the lists of **Slope** values, minima, and maxima. In v3 of this
   * class, replaces **GetSlope(..).**
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
  GetSlope(): Promise<Arguments<[number[], number[], number[]]>>;

  /**
   * Sets the list of **Slope** values. In v3 of this class, replaces
   * **SetSlope(..)**
   *
   * @method OcaDynamicsCurve#SetSlopes
   * @param {number[]} slope
   *
   * @returns {Promise<void>}
   */
  SetSlopes(slope: number[]): Promise<void>;

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
  SetSlope(slope: number[]): Promise<void>;

  /**
   * Gets the list of **KneeParameter** values, minima, and maxima. In v3 of
   * this class, replaces **GetKneeParameter(..).**
   * The return values of this method are
   *
   * - Parameters of type ``number[]``
   * - minParameter of type ``number[]``
   * - maxParameter of type ``number[]``
   *
   * @method OcaDynamicsCurve#GetKneeParameters
   * @returns {Promise<Arguments<number[],number[],number[]>>}
   */
  GetKneeParameters(): Promise<Arguments<[number[], number[], number[]]>>;

  /**
   * Gets the list of **KneeParameter** values, minima, and maxima. In v3 of
   * this class, replaces **GetKneeParameter(..).**
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
  GetKneeParameter(): Promise<Arguments<[number[], number[], number[]]>>;

  /**
   * Sets the list of **KneeParameter** values. In v3 of this class, replaces
   * **SetKneeParameter(..).**
   *
   * @method OcaDynamicsCurve#SetKneeParameters
   * @param {number[]} Parameters
   *
   * @returns {Promise<void>}
   */
  SetKneeParameters(Parameters: number[]): Promise<void>;

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
  SetKneeParameter(Parameters: number[]): Promise<void>;

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
  GetDynamicGainCeiling(): Promise<Arguments<[number, number, number]>>;

  /**
   * Sets the value of the **DynamicGainCeiling** property.
   *
   * @method OcaDynamicsCurve#SetDynamicGainCeiling
   * @param {number} gain
   *
   * @returns {Promise<void>}
   */
  SetDynamicGainCeiling(gain: number): Promise<void>;

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
  GetDynamicGainFloor(): Promise<Arguments<[number, number, number]>>;

  /**
   * Sets the value of the **DynamicGainFloor** property.
   *
   * @method OcaDynamicsCurve#SetDynamicGainFloor
   * @param {number} Gain
   *
   * @returns {Promise<void>}
   */
  SetDynamicGainFloor(Gain: number): Promise<void>;

  /**
   * Sets some or all dynamics curve parameters. The action of this method shall
   * be atomic - if any of the value changes fails, **none** of the changes
   * shall be made.
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
  SetMultiple(
    Mask: IOcaParameterMask,
    NSegments: number,
    Thresholds: IOcaDBr[],
    Slope: number[],
    KneeParameter: number[],
    DynamicGainFloor: number,
    DynamicGainCeiling: number
  ): Promise<void>;

  /**
   * Gets the list of **Threshold** values, and the minimum and maximum slope.
   * In v3 of this class, replaces **GetThreshold(..).**
   * The return values of this method are
   *
   * - Thresholds of type ``IOcaDBr[]``
   * - minThreshold of type ``number``
   * - maxThreshold of type ``number``
   *
   * @method OcaDynamicsCurve#GetThresholds
   * @returns {Promise<Arguments<OcaDBr[],number,number>>}
   */
  GetThresholds(): Promise<Arguments<[OcaDBr[], number, number]>>;
}
