import { UDPConnection } from '../src/controller/udp_connection.js';
import { after, before, describe, it } from 'node:test';
import assert, { equal, doesNotReject, rejects } from 'node:assert';
import { delay } from './delay.js';
import { allClassesTarget } from './all_classes_target.js';
import { createSocket } from 'node:dgram';

const socket = createSocket('udp4');

before(() => {
  return new Promise((resolve, reject) => {
    socket.bind(0, () => {
      resolve();
    });
  });
});

after(() => {
  socket.close();
});

describe('UDPConnection', () => {
  it('connect with unknown host', async () => {
    await rejects(
      UDPConnection.connect({
        host: 'this_hostname_does_not_exist.example.com',
        port: 1234,
      }).then((con) => con.close())
    );
  });
  it('connect with failing keepalive', async () => {
    await rejects(
      UDPConnection.connect({
        host: '127.0.0.1',
        port: socket.address().port,
      }).then((con) => con.close())
    );
  });
});

describe('UDPConnection', { skip: !allClassesTarget }, () => {
  it('connect with abort', async () => {
    await rejects(
      UDPConnection.connect({
        ...allClassesTarget,
        connectSignal: AbortSignal.timeout(0),
      }).then((con) => con.close()),
      (err) => {
        equal(err.name, 'TimeoutError');
        return true;
      }
    );
  });

  it('connect with aborted signal', async () => {
    const connectSignal = AbortSignal.timeout(0);
    await delay(10);
    assert(connectSignal.aborted);
    await rejects(
      UDPConnection.connect({
        ...allClassesTarget,
        connectSignal,
      }),
      (err) => {
        equal(err.name, 'TimeoutError');
        return true;
      }
    );
  });
  it('connect with late connect abort', async () => {
    let con;
    await doesNotReject(async () => {
      con = await UDPConnection.connect({
        ...allClassesTarget,
        connectSignal: AbortSignal.timeout(1000),
      });
    });

    await delay(2000);

    assert(!con.is_closed());

    con.close();
  });
  it('wait_for_keepalive success', async () => {
    const con = await UDPConnection.connect({
      ...allClassesTarget,
    });
    await con.wait_for_keepalive(1);
    con.close();
  });
});
