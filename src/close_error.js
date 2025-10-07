/**
 * Error class raised when a connection is closed.
 *
 * @property {Error} [error] - The actual failure reason. May be undefined,
 *   for instance if the connection was closed using close().
 */
export class CloseError extends Error {
  constructor(error) {
    super(`Connection has been closed.`);
    this.name = 'aes70.CloseError';
    this.error = error;
  }
}
