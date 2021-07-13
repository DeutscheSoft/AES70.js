import { OcaStatus } from '../types/OcaStatus.js';

/**
 * Error class raised by remote function calls.
 *
 * @property {Command} cmd - The command object.
 * @property {OcaStatus} status - The error code.
 */
export class RemoteError {
  constructor(status, cmd) {
    this.status = new OcaStatus(status);
    this.cmd = cmd;
  }

  static check_status(error, status) {
    return error instanceof this && error.status === status;
  }

  toString() {
    return 'RemoteError(' + this.status + ')';
  }
}
