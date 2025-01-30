/**
 * Error class raised by remote function calls.
 *
 * @property {Command} cmd - The command object.
 * @property {OcaStatus} status - The error code.
 */
export class RemoteError extends Error {
  constructor(status, cmd) {
    super(`Call failed with OcaStatus ${status.name}`);
    this.name = 'aes70.RemoteError';
    this.status = status;
    this.cmd = cmd;
  }

  static check_status(error, status) {
    return error instanceof this && error.status === status;
  }
}
