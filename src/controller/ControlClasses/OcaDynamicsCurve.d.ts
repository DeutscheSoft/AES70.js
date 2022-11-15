import { IOcaDBr, OcaDBr } from '../../types/OcaDBr';
import { IOcaParameterMask } from '../../types/OcaParameterMask';
import { Arguments } from '../arguments';
import { PropertyEvent } from '../property_event';
import { RemoteDevice } from '../remote_device';
import { OcaActuator } from './OcaActuator';

/**
 * Dynamic compression / expansion curve.  **Curve**  means a function that expresses the relationship of output level to input level. The dependent variable (Y) of the curve is output level; the independent variable (X) is input level. Every curve is composed of  **(n+1)**  straight-line  **segments**  joined by  **(n)**  small fillets called  **knees** . Each knee occurs at a particular input level value called the  **threshold.**  Each segment is characterized by its  **slope.**   |    /    | S3    /    | S2    /    | T1 **-------------** T2 |    /    | S1    /    |    /    |    /    +------------------------------------ This "drawing" shows a three-segment curve. The horizontal axis is input level, vertical axis is output level. Algebraically, a curve is a function  **Out = Curve( In, T[1..n-1], S[1..n], K[1..n-1] )**  where  **n**  is the number of segments, and  **In** is input level in dBr  **Out** is output level in dBr  **T[1...n-1]**  is an array of  **thresholds**  in dBr  **S[1...n]** is an array of  **slopes**  in dBr per dBr, i.e. unitless  **K[1..n]**  is the  **knee parameter** , an implementation-dependant parameter that specifies the shape of the curve around the knee. Each segment has a slope that expresses its ratio of output level to input level. Note that this slope is the inverse of what dynamics processors call "ratio". For example, a ratio of 2:1 is represented by a curve segment with slope 1/2 = 0.5. This model can represent familiar audio dynamics elements (we ignore  **K[]**  in these examples): - Compressor with ratio of 2:1 and threshold of 10dBr:  **n = 2**   **T[1] = 10**   **S[1] = 1**   **S[2] = 0.5**  - Hard limiter with threshold of 18dBr:  **n = 2**  T[1] = 18 S[1] = 1 S[2] = 0 - Upward expander with ratio of 1.5:1 and threshold of -12dBr:  **n = 2**  T[1] = -12 S[1] = 1 S[2] = 1.5 - Downward expander (gate) with ratio of 50:1 and threshold of -45dBr:  **n = 2**  T[1] = -45 S[1] = 50 S[2] = 1 This class,  **OcaDynamicsCurve,**  adds two additional parameters to the basic curve mechanism.  **Out = Curve( In, T[1..n-1], S[1..n], K[1..n-1] , Floor, Ceiling)**  where  **In, T[], and S[],** and  **K[]**  are as defined above.  **Floor**  is the lowest gain (in dBr) that the dynamics element is allowed to produce.  **Ceiling** is the highest gain (in dBr) that the dynamics element is allowed to produce. To show the use of  **Floor**  and  **Ceiling** , we revisit some of the examples above (again,  **K[]**  is ignored): - Compressor with ratio of 2:1, threshold of 10dBr, and max gain reduction of 20dB:  **n = 2**   **T[1] = 10**   **S[1] = 1**   **S[2] = 0.5**   **Floor = -20**   **Ceiling = 0**  - Upward expander with ratio of 1.5:1, threshold of -12dBr, and max gain boost of 4dB:  **n = 2**  T[1] = -12 S[1] = 1 S[2] = 1.5 Floor = 0 Ceiling = 4.0 More complex dynamics curves can be modeled by using more segments ( **n &gt; 2)** .
 * @extends OcaActuator
 * @class OcaDynamicsCurve
 */
export declare class OcaDynamicsCurve extends OcaActuator {
  /**
   * This event is emitted whenever NSegments changes.
   */
  OnNSegmentsChanged: PropertyEvent<number>;

  /**
   * This event is emitted whenever Threshold changes.
   */
  OnThresholdChanged: PropertyEvent<OcaDBr[]>;

  /**
   * This event is emitted whenever Slope changes.
   */
  OnSlopeChanged: PropertyEvent<number[]>;

  /**
   * This event is emitted whenever KneeParameter changes.
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
   * Gets the number of curve segments. The return value indicates whether the value was successfully retrieved.
   * The return values of this method are
   *
   * - n of type ``number``
   * - minN of type ``number``
   * - maxN of type ``number``
   *
   * @method OcaDynamicsCurve#GetNSegments
   * @returns {Promise<Arguments<number,number,number>>}
   */
  GetNSegments(): Promise<Arguments<[number, number, number]>>;

  /**
   * Sets the number of curve segments. The return value indicates whether the data was successfully set. If this method increases the value of n, the data in properties  **Threshold** ,  **Slope** , and  **KneeParameter** of the new segment are by default set to the values of the previous segment.
   *
   * @method OcaDynamicsCurve#SetNSegments
   * @param {number} Slope
   *
   * @returns {Promise<void>}
   */
  SetNSegments(Slope: number): Promise<void>;

  /**
   * Gets the list of Threshold values. The return value indicates whether the data was successfully retrieved.
   * The return values of this method are
   *
   * - Threshold of type ``OcaDBr[]``
   * - minThreshold of type ``number``
   * - maxThreshold of type ``number``
   *
   * @method OcaDynamicsCurve#GetThreshold
   * @returns {Promise<Arguments<OcaDBr[],number,number>>}
   */
  GetThreshold(): Promise<Arguments<[OcaDBr[], number, number]>>;

  /**
   * Sets the list of Threshold values. The return value indicates whether the values were successfully set.
   *
   * @method OcaDynamicsCurve#SetThreshold
   * @param {OcaDBr[]} Threshold
   *
   * @returns {Promise<void>}
   */
  SetThreshold(Threshold: IOcaDBr[]): Promise<void>;

  /**
   * Gets the list of Slope values. The return value indicates whether the list was successfully retrieved.
   * The return values of this method are
   *
   * - slope of type ``number[]``
   * - minSlope of type ``number[]``
   * - maxSlope of type ``number[]``
   *
   * @method OcaDynamicsCurve#GetSlope
   * @returns {Promise<Arguments<number[],number[],number[]>>}
   */
  GetSlope(): Promise<Arguments<[number[], number[], number[]]>>;

  /**
   * Sets the list of Slope values. The return value indicates whether the values were successfully set.
   *
   * @method OcaDynamicsCurve#SetSlope
   * @param {number[]} slope
   *
   * @returns {Promise<void>}
   */
  SetSlope(slope: number[]): Promise<void>;

  /**
   * Gets the list of KneeParameter valuess. The return value indicates whether the list was successfully retrieved.
   * The return values of this method are
   *
   * - parameter of type ``number[]``
   * - minParameter of type ``number[]``
   * - maxParameter of type ``number[]``
   *
   * @method OcaDynamicsCurve#GetKneeParameter
   * @returns {Promise<Arguments<number[],number[],number[]>>}
   */
  GetKneeParameter(): Promise<Arguments<[number[], number[], number[]]>>;

  /**
   * Sets the list of KneeParameter values. The return value indicates whether the values were successfully set.
   *
   * @method OcaDynamicsCurve#SetKneeParameter
   * @param {number[]} parameter
   *
   * @returns {Promise<void>}
   */
  SetKneeParameter(parameter: number[]): Promise<void>;

  /**
   * Gets the value of the DynamicGainCeiling property. The return value indicates whether the data was successfully retrieved.
   * The return values of this method are
   *
   * - gain of type ``number``
   * - minGain of type ``number``
   * - maxGain of type ``number``
   *
   * @method OcaDynamicsCurve#GetDynamicGainCeiling
   * @returns {Promise<Arguments<number,number,number>>}
   */
  GetDynamicGainCeiling(): Promise<Arguments<[number, number, number]>>;

  /**
   * Sets the value of the DynamicGainCeiling property. The return value indicates whether the data was successfully set.
   *
   * @method OcaDynamicsCurve#SetDynamicGainCeiling
   * @param {number} gain
   *
   * @returns {Promise<void>}
   */
  SetDynamicGainCeiling(gain: number): Promise<void>;

  /**
   * Gets the value of the DynamicGainFloor property. The return value indicates whether the data was successfully retrieved.
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
   * Sets the value of the DynamicGainFloor property. The return value indicates whether the data was successfully set.
   *
   * @method OcaDynamicsCurve#SetDynamicGainFloor
   * @param {number} Gain
   *
   * @returns {Promise<void>}
   */
  SetDynamicGainFloor(Gain: number): Promise<void>;

  /**
   * Sets some or all dynamics curve parameters. The return value indicates if the parameters were successfully set. The action of this method is atomic - if any of the value changes fails, none of the changes are made.
   *
   * @method OcaDynamicsCurve#SetMultiple
   * @param {number} Mask
   *
   * @param {number} nSegments
   *
   * @param {OcaDBr[]} Threshold
   *
   * @param {number[]} Slope
   *
   * @param {number[]} KneeParameter
   *
   * @param {number} DynamicGainFloor
   *
   * @param {number} DynamicGainCeiling
   *
   * @returns {Promise<void>}
   */
  SetMultiple(
    Mask: number,
    nSegments: number,
    Threshold: IOcaDBr[],
    Slope: number[],
    KneeParameter: number[],
    DynamicGainFloor: number,
    DynamicGainCeiling: number
  ): Promise<void>;
}
