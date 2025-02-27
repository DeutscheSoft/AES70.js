/*
 * This file has been generated.
 */
import { Enum } from './Enum.js';

/**
 * Types of run queue item disposition
 * @class OcaJobDisposition
 */
export class OcaJobDisposition extends Enum({
  RunStarted: 1,
  ItemDeleted: 2,
  FailedToStart_TaskNotAvailable: 3,
  FailedToStart_TaskNotCompatible: 4,
  FailedToStart_ResourceUnavailable: 5,
  FailedToStart_DeviceError: 6,
}) {}

/**
 * Singleton object corresponding to the entry with value ``1``.
 * @type {OcaJobDisposition}
 * @member RunStarted
 * @memberof OcaJobDisposition
 * @static
 */
/**
 * Singleton object corresponding to the entry with value ``2``.
 * @type {OcaJobDisposition}
 * @member ItemDeleted
 * @memberof OcaJobDisposition
 * @static
 */
/**
 * Singleton object corresponding to the entry with value ``3``.
 * @type {OcaJobDisposition}
 * @member FailedToStart_TaskNotAvailable
 * @memberof OcaJobDisposition
 * @static
 */
/**
 * Singleton object corresponding to the entry with value ``4``.
 * @type {OcaJobDisposition}
 * @member FailedToStart_TaskNotCompatible
 * @memberof OcaJobDisposition
 * @static
 */
/**
 * Singleton object corresponding to the entry with value ``5``.
 * @type {OcaJobDisposition}
 * @member FailedToStart_ResourceUnavailable
 * @memberof OcaJobDisposition
 * @static
 */
/**
 * Singleton object corresponding to the entry with value ``6``.
 * @type {OcaJobDisposition}
 * @member FailedToStart_DeviceError
 * @memberof OcaJobDisposition
 * @static
 */
