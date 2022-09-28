/* eslint-env node */

import { NodeUDP } from './node_udp.js';
import { performance } from 'perf_hooks';
import { AbstractUDPConnection } from './abstract_udp_connection.js';

/**
 * :class:`ClientConnection` subclass which implements OCP.1 with UDP
 * transport.
 */
export class UDPConnection extends AbstractUDPConnection {
  _now() {
    return performance.now();
  }

  static connect(options) {
    return AbstractUDPConnection.connect.call(this, NodeUDP, options);
  }
}
