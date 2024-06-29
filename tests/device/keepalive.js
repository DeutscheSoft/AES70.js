import { Test } from './test.js';
import { UDPConnection } from '../../src/controller/udp_connection.js';

function wait(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, n * 1000);
  });
}

class IdleTime extends Test {
  async run() {
    this.device.set_keepalive_interval(1);

    await wait(2);

    const connection = this.device.connection;

    this.check(
      connection.tx_idle_time() < 1500,
      'TX Idle time too big: %o',
      connection.tx_idle_time()
    );
    this.check(
      connection.rx_idle_time() < 1500,
      'RX Idle time too big: %o',
      connection.rx_idle_time()
    );
  }
}

class RemoteClose extends Test {
  run() {
    // we cannot detect this properly
    if (this.device.connection instanceof UDPConnection)
      return Promise.resolve(true);

    return new Promise((resolve, reject) => {
      this.device.set_keepalive_interval(1);
      const connection = this.device.connection;

      // we manually remove the keepalive interval
      // out connection will be silent from now on
      clearInterval(connection.keepalive_interval);

      // we expect a close
      connection.on('close', resolve);
      setTimeout(function () {
        reject(new Error('Connection not closed by remote side.'));
      }, 1000 * 4);
    });
  }
}

export default [IdleTime, RemoteClose];
