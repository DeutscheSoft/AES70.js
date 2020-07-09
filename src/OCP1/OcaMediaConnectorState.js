import { Enum8 } from './Enum8.js';

/**
 * Status options for a stream connector.
 * @category Types
 * @class OcaMediaConnectorState
 * @extends Enum8
 */
export const OcaMediaConnectorState = Enum8({
  Stopped: 0,
  SettingUp: 1,
  Running: 2,
  Paused: 3,
  Fault: 4,
});
