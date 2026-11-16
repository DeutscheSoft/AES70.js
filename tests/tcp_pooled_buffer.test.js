import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { EventEmitter } from 'events';
import { TCPConnection } from '../src/controller/tcp_connection.js';
import { KeepAlive } from '../src/OCP1/keepalive.js';
import { encodeMessage } from '../src/OCP1/encode_message.js';

class MockSocket extends EventEmitter {
  destroy() {}
  write() {}
}

/**
 * Build a Buffer view into a large pooled ArrayBuffer (as Node TLS often does),
 * with garbage outside the view.
 */
function pooledView(bytes) {
  const pool = Buffer.alloc(65536, 0xff);
  const offset = 38;
  bytes.copy(pool, offset);
  return pool.subarray(offset, offset + bytes.length);
}

describe('TCPConnection pooled Buffer views', () => {
  it('parses TLS-style Buffer views without reading backing-pool garbage', async () => {
    const socket = new MockSocket();
    const connection = new TCPConnection(socket);
    const errors = [];
    connection.on('error', (e) => errors.push(e));

    const keepalive = encodeMessage(new KeepAlive(1000));
    const plaintext = Buffer.from(keepalive);

    // Two consecutive views into the same pool at different offsets,
    // mimicking TLS decrypt chunks.
    const pool = Buffer.alloc(65536, 0xff);
    plaintext.copy(pool, 0);
    plaintext.copy(pool, plaintext.length);
    const first = pool.subarray(0, plaintext.length);
    const second = pool.subarray(plaintext.length, plaintext.length * 2);

    assert.equal(first.buffer.byteLength, 65536);
    assert.equal(first.byteOffset, 0);
    assert.equal(second.byteOffset, plaintext.length);
    assert.notEqual(first.byteLength, first.buffer.byteLength);

    socket.emit('data', first);
    socket.emit('data', second);

    assert.equal(errors.length, 0);
    assert.equal(connection.is_closed(), false);
    assert.ok(connection.rx_bytes >= plaintext.length * 2);

    connection.close();
  });

  it('parses a view that starts at a non-zero byteOffset', async () => {
    const socket = new MockSocket();
    const connection = new TCPConnection(socket);
    const errors = [];
    connection.on('error', (e) => errors.push(e));

    const keepalive = encodeMessage(new KeepAlive(1500));
    const view = pooledView(Buffer.from(keepalive));

    assert.ok(view.byteOffset > 0);
    assert.ok(view.buffer.byteLength > view.byteLength);

    socket.emit('data', view);

    assert.equal(errors.length, 0);
    assert.equal(connection.is_closed(), false);

    connection.close();
  });

  it('reassembles a message split across pooled Buffer views', async () => {
    const socket = new MockSocket();
    const connection = new TCPConnection(socket);
    const errors = [];
    connection.on('error', (e) => errors.push(e));

    const plaintext = Buffer.from(encodeMessage(new KeepAlive(2000)));
    const split = 5;
    const first = pooledView(plaintext.subarray(0, split));
    const second = pooledView(plaintext.subarray(split));

    socket.emit('data', first);
    assert.notEqual(connection.inbuf, null);
    assert.equal(connection.inbuf.byteLength, split);

    socket.emit('data', second);

    assert.equal(errors.length, 0);
    assert.equal(connection.inbuf, null);
    assert.equal(connection.is_closed(), false);

    connection.close();
  });
});
