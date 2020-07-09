import { Enum8 } from './Enum8.js';

/**
 * Type of media endpoint: unicast or multicast.
 * @category Types
 * @class OcaMediaStreamCastMode
 * @extends Enum8
 */
export const OcaMediaStreamCastMode = Enum8({
  None: 0,
  Unicast: 1,
  Multicast: 2,
});
