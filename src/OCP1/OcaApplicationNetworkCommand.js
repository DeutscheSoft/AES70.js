import { Enum8 } from './Enum8.js';

/**
 * Command values for OcaMediaNetwork.Control().
 * @category Types
 * @class OcaApplicationNetworkCommand
 * @extends Enum8
 */
export const OcaApplicationNetworkCommand = Enum8({
  None: 0,
  Prepare: 1,
  Start: 2,
  Pause: 3,
  Stop: 4,
  Reset: 5,
});
