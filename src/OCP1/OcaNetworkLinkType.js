import { Enum8 } from './Enum8.js';

/**
 * Types of layer 2 networks.
 * @category Types
 * @class OcaNetworkLinkType
 * @extends Enum8
 */
export const OcaNetworkLinkType = Enum8({
  None: 0,
  EthernetWired: 1,
  EthernetWireless: 2,
  USB: 3,
  SerialP2P: 4,
});
