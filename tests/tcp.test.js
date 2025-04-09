import { env, exit } from 'node:process';
import { TCPConnection } from '../src/controller/tcp_connection.js';
import { describe, it } from 'node:test';
import assert, { equal, doesNotReject, rejects } from 'node:assert';
import { delay } from './delay.js';

const AES70_TEST_DEVICE_ALL_CLASSES = env.AES70_TEST_DEVICE_ALL_CLASSES;

if (!AES70_TEST_DEVICE_ALL_CLASSES) {
  console.log('Missing variable AES70_TEST_DEVICE_ALL_CLASSES');
  exit(0);
}

const [host, portStr] = AES70_TEST_DEVICE_ALL_CLASSES.split(':');

const port = parseInt(portStr);

describe('TCPConnection', () => {
  it('connect with abort', async () => {
    await rejects(
      TCPConnection.connect({
        host,
        port,
        connectSignal: AbortSignal.timeout(10),
      }),
      (err) => {
        equal(err.name, 'TimeoutError');
        return true;
      }
    );
  });
  it('connect with late abort', async () => {
    let con;
    await doesNotReject(async () => {
      con = await TCPConnection.connect({
        host,
        port,
        signal: AbortSignal.timeout(1000),
      });
    });

    await delay(2000);

    assert(con.is_closed());
  });
  it('connect with late connect abort', async () => {
    let con;
    await doesNotReject(async () => {
      con = await TCPConnection.connect({
        host,
        port,
        connectSignal: AbortSignal.timeout(1000),
      });
    });

    await delay(2000);

    assert(!con.is_closed());

    con.close();
  });
});
