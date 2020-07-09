import { Enum8 } from './Enum8.js';

/**
 * Type of string comparison.
 * @category Types
 * @class OcaStringComparisonType
 * @extends Enum8
 */
export const OcaStringComparisonType = Enum8({
  Exact: 0,
  Substring: 1,
  Contains: 2,
  ExactCaseInsensitive: 3,
  SubstringCaseInsensitive: 4,
  ContainsCaseInsensitive: 5,
});
