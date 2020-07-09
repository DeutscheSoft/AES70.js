import { Enum8 } from './Enum8.js';

/**
 * Status options for a stream.
 * @category Types
 * @class OcaNetworkSignalChannelStatus
 * @extends Enum8
 */
export const OcaNetworkSignalChannelStatus = Enum8({
  NotConnected: 0,
  Connected: 1,
  Muted: 2,
});
