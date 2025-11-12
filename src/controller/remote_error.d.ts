import { OcaStatus } from '../types/OcaStatus.js';

export declare class RemoteError extends Error {
  status: OcaStatus;
  cmd: unknown;

  constructor(status: OcaStatus, cmd: unknown);

  static check_status<ErrorType extends Error>(
    error: ErrorType,
    status: OcaStatus
  ): boolean;
}
