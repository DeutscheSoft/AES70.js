import { Enum8 } from './Enum8.js';

/**
 * Type of media endpoint: unicast or multicast.
 * @category Types
 * @class OcaStreamType
 * @extends Enum8
 */
export const OcaStreamType = Enum8({
  None: 0,
  Unicast: 1,
  Multicast: 2,
});
