/**
 * Error class raised when a connection is closed due to a timeout.
 */
export class TimeoutError extends Error {
  constructor(error) {
    super(`Connection has timed out.`);
    this.name = 'aes70.TimeoutError';
  }
}
