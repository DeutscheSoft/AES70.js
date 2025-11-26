/* eslint-env node */
import { ClientConnection } from './client_connection.js';

/**
 * :class:`ClientConnection` subclass which implements OCP.1 with UDP
 * transport.
 */
export class AbstractUDPConnection extends ClientConnection {
  constructor(socket, options) {
    // allow us to batch 128 bytes max
    // Set this to a higher value, e.g. close to MTU
    // if you are sure that the device can handle it.
    if (!(options.batch >= 0)) options.batch = 128;
    super(options);
    this.socket = socket;
    this.delay = options.delay >= 0 ? options.delay : 5;
    this.retry_interval =
      options.retry_interval >= 0 ? options.retry_interval : 250;
    this.retry_count = options.retry_count >= 0 ? options.retry_count : 3;
    this._write_out_id = -1;
    this._write_out_callback = () => {
      this._write_out_id = -1;
      this._write_out();
    };
    this._retry_id =
      this.retry_interval > 0
        ? setInterval(() => this._retryCommands(), this.retry_interval)
        : -1;
    this.q = [];
    socket.onmessage = (buffer) => {
      try {
        this.read(buffer);
      } catch (err) {
        console.warn('Failed to parse incoming AES70 packet: %o', err);
      }
      if (this.inbuf !== null) this.close();
    };
    socket.onerror = (err) => this.error(err);
    this.set_keepalive_interval(1);
  }

  get is_reliable() {
    return false;
  }

  /**
   * Connect to the given endpoint.
   *
   * @param {String} options.host
   *  Hostname or ip address.
   * @param {number} options.port
   *  Port number.
   * @param {'udp4' | 'udp6'} [options.type]
   *  Optional ip protocol type.
   * @param {number} [options.delay=10] - Delay in ms between individual packets.
   *    This can be a useful strategy when communicating with devices which
   *    cannot handle high packet rates.
   * @param {number} [options.retry_interval=250] - Delay in ms after which a
   *    command should be automatically re-sent if no response has been
   *    received, yet.
   * @param {number} [options.retry_count=3] - Number of times to retry sending
   *    commands. If no response has been received after all retries, the
   *    command will fail with an error.
   * @param {number} [options.batch=128] - Maximum number of bytes to send
   *    in an individual UDP packet. Note that AES70 messages which are larger
   *    than this limit are sent anyway. This only limits how many seperate
   *    messages are batched into a single packet.
   * @param {AbortSignal} [options.connectSignal]
   *    An optional AbortSignal which can be used to abort the connect attempt.
   *    Note that this is different from the `signal` option which will destroy
   *    the socket also after the connect attempt has been successful.
   * @returns {Promise<AbstractUDPConnection>}
   *    The connection.
   */
  static async connect(udpApi, options) {
    const { host, port, type, connectSignal } = options;
    const socket = await udpApi.connect({
      host,
      port,
      type,
      signal: connectSignal,
    });

    const connection = new this(socket, options);

    try {
      await connection.wait_for_keepalive(1, connectSignal);
      connectSignal?.throwIfAborted();
    } catch (err) {
      connection.close();
      throw err;
    }

    return connection;
  }

  write(buf) {
    this.q.push(buf);

    if (this.tx_idle_time() >= this.delay) this._write_out();
    else this._schedule_write_out();
  }

  flush() {
    super.flush();
    if (this.tx_idle_time() > this.delay) this._write_out();
  }

  cleanup() {
    super.cleanup();
    if (this.socket) {
      this.socket.close();
      this.socket = null;
    }
    if (this._write_out_id !== -1) {
      clearTimeout(this._write_out_id);
      this._write_out_id = -1;
    }
    if (this._retry_id !== -1) {
      clearInterval(this._retry_id);
      this._retry_id = -1;
    }
  }

  _estimate_next_tx_time() {
    return this._now() + (this.delay + 2) * this.q.length;
  }

  _write_out() {
    if (!this.socket) return;
    const q = this.q;

    if (!q.length) return;

    const buf = q.shift();

    this.socket.send(buf);
    super.write(buf);

    if (q.length) this._schedule_write_out();
  }

  _schedule_write_out() {
    const tx_idle_time = this.tx_idle_time();
    const delay = this.delay;

    if (tx_idle_time >= delay) {
      this._write_out();
      return;
    }

    // Already scheduled.
    if (this._write_out_id !== -1) return;

    this._write_out_id = setTimeout(
      this._write_out_callback,
      delay - tx_idle_time
    );
  }

  _retryCommands() {
    const now = this._now();
    const retryTime = now - this.retry_interval;
    // This is an estimate for how many commands we would manage to send
    // off.
    const max = 5 * (this.retry_interval / this.delay) - this.q.length;
    const pendingCommands = this._pendingCommands;

    const retries = [];
    const failed = [];

    for (const entry of pendingCommands) {
      const [, pendingCommand] = entry;

      // All later commands are newer than the cutoff.
      if (pendingCommand.lastSent > retryTime) break;
      if (pendingCommand.retries >= this.retry_count) {
        failed.push(entry);
      } else if (retries.length < max) {
        retries.push(entry);
      }
    }

    if (failed.length) {
      const timeoutError = new Error('Timeout.');

      failed.forEach(([handle, pendingCommand]) => {
        pendingCommands.delete(handle);
        pendingCommand.reject(timeoutError);
      });
    }

    retries.forEach(([handle, pendingCommand]) => {
      pendingCommands.delete(handle);
      pendingCommands.set(handle, pendingCommand);
      this.send(pendingCommand.command);
      pendingCommand.lastSent = now;
      pendingCommand.retries++;
    });
  }
}
