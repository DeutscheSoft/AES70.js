/*
 * This file has been generated.
 */
import { IOcaPort, OcaPort } from './OcaPort';

export declare interface IOcaSignalPath {
  /**
   * Source port (i.e. output port) of the signal path.
   * @type OcaPort
   */
  SourcePort: IOcaPort;

  /**
   * Sink port (i.e. input port) of the signal path.
   * @type OcaPort
   */
  SinkPort: IOcaPort;
}

export declare class OcaSignalPath implements IOcaSignalPath {
  /**
   * Signal path between two object ports in the same device.
   * @class OcaSignalPath
   */
  constructor(SourcePort: OcaPort, SinkPort: OcaPort);

  /**
   * Source port (i.e. output port) of the signal path.
   * @type OcaPort
   */
  SourcePort: OcaPort;

  /**
   * Sink port (i.e. input port) of the signal path.
   * @type OcaPort
   */
  SinkPort: OcaPort;
}
