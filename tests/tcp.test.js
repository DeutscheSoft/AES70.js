import { TCPConnection } from '../src/controller/tcp_connection.js';
import { describe, it } from 'node:test';
import assert, { equal, doesNotReject, rejects } from 'node:assert';
import { delay } from './delay.js';
import { allClassesTarget } from './all_classes_target.js';

describe('TCPConnection', { skip: !allClassesTarget }, () => {
  it('connect with abort', async () => {
    await rejects(
      TCPConnection.connect({
        ...allClassesTarget,
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
        ...allClassesTarget,
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
        ...allClassesTarget,
        connectSignal: AbortSignal.timeout(1000),
      });
    });

    await delay(2000);

    assert(!con.is_closed());

    con.close();
  });
});
