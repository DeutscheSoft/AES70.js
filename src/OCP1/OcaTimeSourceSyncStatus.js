import { Enum8 } from './Enum8.js';

/**
 * Synchronization statuses.
 * @category Types
 * @class OcaTimeSourceSyncStatus
 * @extends Enum8
 */
export const OcaTimeSourceSyncStatus = Enum8({
  Undefined: 0,
  Unsynchronized: 1,
  Synchronizing: 2,
  Synchronized: 3,
});
