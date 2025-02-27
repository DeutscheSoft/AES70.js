/*
 * This file has been generated.
 */
import { Enum } from './Enum.js';

/**
 * States of **OcaTaskScheduler** object. State values shall change when the
 * object receives a Command or when processing events (e.g. completion) occur.
 * @class OcaTaskSchedulerState
 */
export class OcaTaskSchedulerState extends Enum({
  Unknown: 0,
  Running: 1,
  Paused: 2,
  Draining: 3,
  Stopped: 4,
}) {}

/**
 * Singleton object corresponding to the entry with value ``0``.
 * @type {OcaTaskSchedulerState}
 * @member Unknown
 * @memberof OcaTaskSchedulerState
 * @static
 */
/**
 * Singleton object corresponding to the entry with value ``1``.
 * @type {OcaTaskSchedulerState}
 * @member Running
 * @memberof OcaTaskSchedulerState
 * @static
 */
/**
 * Singleton object corresponding to the entry with value ``2``.
 * @type {OcaTaskSchedulerState}
 * @member Paused
 * @memberof OcaTaskSchedulerState
 * @static
 */
/**
 * Singleton object corresponding to the entry with value ``3``.
 * @type {OcaTaskSchedulerState}
 * @member Draining
 * @memberof OcaTaskSchedulerState
 * @static
 */
/**
 * Singleton object corresponding to the entry with value ``4``.
 * @type {OcaTaskSchedulerState}
 * @member Stopped
 * @memberof OcaTaskSchedulerState
 * @static
 */
