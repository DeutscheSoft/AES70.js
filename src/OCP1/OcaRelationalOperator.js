import { Enum8 } from './Enum8.js';

/**
 * Enumeration of relational operators that can be used in OCA classes.
 * @category Types
 * @class OcaRelationalOperator
 * @extends Enum8
 */
export const OcaRelationalOperator = Enum8({
  None: 0,
  Equality: 1,
  Inequality: 2,
  GreaterThan: 3,
  GreaterThanOrEqual: 4,
  LessThan: 5,
  LessThanOrEqual: 6,
});
