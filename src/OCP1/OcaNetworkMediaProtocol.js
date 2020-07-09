import { Enum8 } from './Enum8.js';

/**
 * Media transport protocols available.
 * @category Types
 * @class OcaNetworkMediaProtocol
 * @extends Enum8
 */
export const OcaNetworkMediaProtocol = Enum8({
  None: 0,
  AV3: 1,
  AVBTP: 2,
  Dante: 3,
  Cobranet: 4,
  AES67: 5,
  SMPTEAudio: 6,
  LiveWire: 7,
  ExtensionPoint: 65,
});
