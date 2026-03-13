export declare class CloseError extends Error {
  readonly error?: Error;
  readonly name: 'aes70.CloseError';
  constructor(error?: Error);
}
