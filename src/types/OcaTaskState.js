/*
 * This file has been generated.
 */
import { Enum } from './Enum.js';

/**
 * States of OcaTask object. State values change as a result of the object's
 * having received a comment or encountering processing events (e.g.
 * completion).
 * @class OcaTaskState
 */
export class OcaTaskState extends Enum({
  None: 0,
  NotPrepared: 1,
  Disabled: 2,
  Enabled: 3,
  Running: 4,
  Completed: 5,
  Failed: 6,
  Stopped: 7,
  Aborted: 8,
}) {}

/**
 * Singleton object corresponding to the entry with value ``0``.
 * @type {OcaTaskState}
 * @member None
 * @memberof OcaTaskState
 * @static
 */
/**
 * Singleton object corresponding to the entry with value ``1``.
 * @type {OcaTaskState}
 * @member NotPrepared
 * @memberof OcaTaskState
 * @static
 */
/**
 * Singleton object corresponding to the entry with value ``2``.
 * @type {OcaTaskState}
 * @member Disabled
 * @memberof OcaTaskState
 * @static
 */
/**
 * Singleton object corresponding to the entry with value ``3``.
 * @type {OcaTaskState}
 * @member Enabled
 * @memberof OcaTaskState
 * @static
 */
/**
 * Singleton object corresponding to the entry with value ``4``.
 * @type {OcaTaskState}
 * @member Running
 * @memberof OcaTaskState
 * @static
 */
/**
 * Singleton object corresponding to the entry with value ``5``.
 * @type {OcaTaskState}
 * @member Completed
 * @memberof OcaTaskState
 * @static
 */
/**
 * Singleton object corresponding to the entry with value ``6``.
 * @type {OcaTaskState}
 * @member Failed
 * @memberof OcaTaskState
 * @static
 */
/**
 * Singleton object corresponding to the entry with value ``7``.
 * @type {OcaTaskState}
 * @member Stopped
 * @memberof OcaTaskState
 * @static
 */
/**
 * Singleton object corresponding to the entry with value ``8``.
 * @type {OcaTaskState}
 * @member Aborted
 * @memberof OcaTaskState
 * @static
 */
