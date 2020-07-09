import { Enum8 } from './Enum8.js';

/**
 * Status options for a stream connector.
 * @category Types
 * @class OcaStreamConnectorStatus
 * @extends Enum8
 */
export const OcaStreamConnectorStatus = Enum8({
  NotAvailable: 0,
  Idle: 1,
  Connected: 2,
  Paused: 3,
});
