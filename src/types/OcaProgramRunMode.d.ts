/*
 * This file has been generated.
 */
/**
 * Two-bit bitset that specifies run mode: Bit 1: ExecutionOrder 0 = sequential,
 * 1 = arbitrary // execution order of steps Bit 2: RollBackOnError 0 = no
 * rollback, 1 = rollback Thus, the RunMode value for simple sequential
 * execution with no rollback mechanism shall be 0b00.
 * @enum {number}
 * @readonly
 */
export declare const OcaProgramRunMode: {
  /**
   * Entry with value ``1``.
   */
  ExecutionOrder: number;

  /**
   * Entry with value ``2``.
   */
  RollbackOnError: number;
};

export declare type IOcaProgramRunMode = number;
