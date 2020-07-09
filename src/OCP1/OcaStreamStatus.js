import { Enum8 } from './Enum8.js';

/**
 * Status options for a stream.
 * @category Types
 * @class OcaStreamStatus
 * @extends Enum8
 */
export const OcaStreamStatus = Enum8({
  NotConnected: 0,
  Connected: 1,
  Paused: 2,
});
