/*
 * This file has been generated.
 */
import { IOcaPort, OcaPort } from './OcaPort';

export declare interface IOcaSignalPath {
  /**
   * Output port. Signal originates here.
   * @type OcaPort
   */
  OutputPort: IOcaPort;

  /**
   * Input port. Signal is received here.
   * @type OcaPort
   */
  InputPort: IOcaPort;
}

export declare class OcaSignalPath implements IOcaSignalPath {
  /**
   * Signal path between two OcaPorts in the same device.
   * @class OcaSignalPath
   */
  constructor(OutputPort: OcaPort, InputPort: OcaPort);

  /**
   * Output port. Signal originates here.
   * @type OcaPort
   */
  OutputPort: OcaPort;

  /**
   * Input port. Signal is received here.
   * @type OcaPort
   */
  InputPort: OcaPort;
}
