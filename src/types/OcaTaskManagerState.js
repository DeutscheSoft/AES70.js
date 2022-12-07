/*
 * This file has been generated.
 */
import { Enum } from './Enum.js';

/**
 * States of **OcaTaskManager** object. These states represent the overall state
 * of task processing in the device.
 *
 *  - Device task processing state is **Enabled** by default. In **Enabled**
 *    state, tasks may be running.
 *
 *  - Device task processing state may be **Disabled** by the **OcaTaskManager
 *    Disable** command.
 *
 *  - The **Disable** command will succeed only if no tasks are running.
 *
 *
 * Tasks may be stopped by:
 *
 *  - passing the **OcaTaskManager** a **Stop** or **Abort** command, which will
 *    stop all tasks in the device; or
 *
 *  - passing a **Stop** or **Abort** command to each **OcaTaskGroup** agent,
 *    which will stop all the tasks in the given task groups; or
 *
 *  - passing a **Stop** or **Abort** command to each task individually.
 *
 *
 * @class OcaTaskManagerState
 */
export class OcaTaskManagerState extends Enum({
  None: 0,
  Enabled: 1,
  Disabled: 2,
}) {}

/**
 * Singleton object corresponding to the entry with value ``0``.
 * @type {OcaTaskManagerState}
 * @member None
 * @memberof OcaTaskManagerState
 * @static
 */
/**
 * Singleton object corresponding to the entry with value ``1``.
 * @type {OcaTaskManagerState}
 * @member Enabled
 * @memberof OcaTaskManagerState
 * @static
 */
/**
 * Singleton object corresponding to the entry with value ``2``.
 * @type {OcaTaskManagerState}
 * @member Disabled
 * @memberof OcaTaskManagerState
 * @static
 */
