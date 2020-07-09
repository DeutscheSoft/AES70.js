import { Enum8 } from './Enum8.js';

/**
 * Select mode of <b>OcaGrouper</b>: master-slave or peer-to-peer
 * @category Types
 * @class OcaGrouperMode
 * @extends Enum8
 */
export const OcaGrouperMode = Enum8({
  MasterSlave: 1,
  PeerToPeer: 2,
});
