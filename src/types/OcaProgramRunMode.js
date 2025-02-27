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
export const OcaProgramRunMode = {
  ExecutionOrder: 1,
  RollbackOnError: 2,
};

/**
 * Entry with value ``1``.
 * @type {number}
 * @member ExecutionOrder
 * @memberof OcaProgramRunMode
 * @static
 */
/**
 * Entry with value ``2``.
 * @type {number}
 * @member RollbackOnError
 * @memberof OcaProgramRunMode
 * @static
 */
