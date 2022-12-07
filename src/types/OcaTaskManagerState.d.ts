/*
 * This file has been generated.
 */
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
export class OcaTaskManagerState {
  /**
   * Singleton object corresponding to the entry with value ``0``.
   */
  static None: OcaTaskManagerState;
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static Enabled: OcaTaskManagerState;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static Disabled: OcaTaskManagerState;

  /**
   * Returns the numeric value of this enum entry.
   */
  valueOf(): number;

  /**
   * Returns the string representation of this enum entry.
   */
  toString(): string;

  /**
   * Returns the name of an enum entry.
   */
  static getName(value: number): string;

  /**
   * Returns the value of an enum entry name.
   */
  static getValue(name: string): number;
}

export type IOcaTaskManagerState =
  | OcaTaskManagerState
  | 'None'
  | 'Enabled'
  | 'Disabled'
  | 0
  | 1
  | 2;
