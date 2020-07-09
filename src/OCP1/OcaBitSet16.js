import { OcaUint16 } from './OcaUint16.js';

/**
 * A set of 16 1-bit boolean flags. Used to signify (m) of (n)
 * selections, where m &lt;= n. See AES70-Part 3 for rules for
 * marshalling bit sets.
 * @category Types
 * @class OcaBitSet16
 * @extends Base
 */
export const OcaBitSet16 = OcaUint16;
