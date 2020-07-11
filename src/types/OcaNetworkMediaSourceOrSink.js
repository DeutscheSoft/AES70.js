/*
 * This file has been generated.
 */
import { Enum } from './Enum.js';

/**
 * enum that describes whether a port is a source (= sends program into
 * the network; "talker") or sink (=receives program from the network;
 * "listener")
 */
export class OcaNetworkMediaSourceOrSink extends Enum({
  None: 0,
  Source: 1,
  Sink: 2,
}) {}
