/*
 * This file has been generated.
 */
/**
 * Bitset describing which bounds of an **OcaInterval** have been specified, and
 * whether each specified bound is inclusive or exclusive. Bitset values have
 * the following meanings: **MinOmitted**: 0 if Min is specified, 1 if omitted
 * **MaxOmitted**: 0 if Max is specified, 1 if omitted **MinInclusive**: 0 if
 * Min is an exclusive bound, 1 if inclusive **MaxInclusive**: 0 if Max is an
 * exclusive bound, 1 if inclusive Thus , for **OcaInterval** = **{Min, Max,
 * Bounds}**, and where a means any bit value - 1 or 0 x means any number Q
 * designates the quantity under test: {x,x,0b0000} = empty interval
 * {x,x,0baa11} = whole number line {10,40,0b0000} = 10 ``<`` Q ``<`` 40
 * {10,40,0b1100} = 10 ``<=`` Q ``<=`` 40 {10,x,0ba110} = 10 ``<=`` Q
 * {10,x,0ba010} = 10 ``<`` Q
 * @enum {number}
 * @readonly
 */
export declare const OcaIntervalBounds: {
  /**
   * Entry with value ``1``.
   */
  MinOmitted: number;

  /**
   * Entry with value ``2``.
   */
  MaxOmitted: number;

  /**
   * Entry with value ``4``.
   */
  MinInclusive: number;

  /**
   * Entry with value ``8``.
   */
  MaxInclusive: number;
};

export declare type IOcaIntervalBounds = number;
