/*
 * This file has been generated.
 */
export class OcaInterval {
  /**
   * Template datatype that expresses a range of values according to the
   * mathematical definition of "interval". An interval consists of one or two
   * values called "bounds".
   *
   *  - An interval with two bounds (an upper and a lower) is called "bounded".
   *
   *  - An interval with only one bound is called "half-bounded".
   *
   *
   * A bound may be "inclusive" or "exclusive".
   *
   *  - An inclusive bound includes its value in the interval.
   *
   *  - An exclusive bound excludes its value from the interval.
   *
   *  - Inclusive bounds are usually indicated by "[ ]" delimiters, exclusive
   *    bounds by "( )" or "][".
   *
   *
   * For example:
   *
   *  - [5,10] includes all values V such that 5 ``<=`` V ``<=`` 10.
   *
   *  - (5,10) includes all values V such that 5 ``<`` V ``<`` 10.
   *
   *  - [5,10) includes all values V such that 5 ``<=`` V ``<`` 10.
   *
   *  - (5,10] includes all values V such that 5 ``<`` V ``<=`` 10.
   *
   *
   * Here are some half-bounded intervals:
   *
   *  - [5,) and [5,] mean all values V such that 5 ``<=`` V.
   *
   *  - (5,) and (5,] mean all values V such that 5 ``<`` V.
   *
   *  - (,10] and [,10] mean all values V such that V ``<=`` 10.
   *
   *  - (,10) and [,10) mean all values V such that V ``<`` 10.
   *
   *
   * When a datatype (e.g. **OcaFloat32**, **OcaFloat64**) has a value
   * ("**inf**" below) to represent Infinity, it may be used as a bound. For
   * example:
   *
   *  - [1.0, **inf**) means all values V such that 1.0 ``<=`` V and V ``<``
   *    **inf**
   *
   *  - [1.0,** inf**] means all values V such that 1.0 ``<=`` V
   *
   *  - (**-inf**, 1.0] means all values V such that V ``<=`` 1.0 and V ``>``
   *    **-inf**
   *
   *  - [**-inf**, 1.0] means all values V such that V ``<=`` 1.0
   *
   *
   * ... and so on. The usual term "range" means an inclusive, bounded interval,
   * e.g. "the range from 3 to 12" means [3,12]. The property **.Bounds** is a
   * bitset that specifies which bounds are given and whether the given bounds
   * are inclusive or exclusive. **OcaInterval** is a **template** datatype,
   * where the template variable is the datatype of the bounds. Thus, may be
   * defined for integers, floats, and even strings.
   */
  constructor(Min, Max, Bounds) {
    /**
     * Lower bound. Datatype is determined by the template variable DT.
     */
    this.Min = Min;
    /**
     * Upper bound. Datatype is determined by the template variable DT.
     */
    this.Max = Max;
    /**
     * Bounds descriptor. See the definition of **OcaIntervalBounds** for
     * details and examples.
     */
    this.Bounds = Bounds;
  }
}
