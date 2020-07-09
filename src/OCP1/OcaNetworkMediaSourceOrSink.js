import { Enum8 } from './Enum8.js';

/**
 * enum that describes whether a port is a source (= sends program into
 * the network; "talker") or sink (=receives program from the network;
 * "listener")
 * @category Types
 * @class OcaNetworkMediaSourceOrSink
 * @extends Enum8
 */
export const OcaNetworkMediaSourceOrSink = Enum8({
  None: 0,
  Source: 1,
  Sink: 2,
});
