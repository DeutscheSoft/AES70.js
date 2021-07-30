import { RemoteDevice } from '../remote_device';
import { OcaManager } from './OcaManager';
import { Event } from '../Base';

import { PropertyEvent } from '../Base';
import { IOcaTask } from '../../types/OcaTask';
import { IOcaTaskCommand } from '../../types/OcaTaskCommand';
import { OcaTask } from '../../types/OcaTask';
import { OcaTaskManagerState } from '../../types/OcaTaskManagerState';
import { OcaTaskStatus } from '../../types/OcaTaskStatus';

/**
 * Optional manager that collects OcaTask and OcaProgram objects.
 *
 *  - May be instantiated once in any device.
 *
 *
 *  - If instantiated, object number must be 11.
 *   Tasks shall be device execution threads that start, execute, and (normally) stop. The action of an  **OcaTask** is defined by an  **OcaProgram** . The idea is that  **OcaTasks** shall execute  **OcaPrograms** .  **OcaTaskManager** offers global control over tasks in the device.
 *
 *  - Device task processing state is  **Enabled** by default. In  **Enabled** state, tasks may be running.
 *
 *
 *  - Device task processing state may be  **Disabled** by the  **OcaTaskManager Disable** command.
 *
 *
 *  - The  **Disable** command will succeed only if no tasks are running.
 *   Tasks may be stopped by: passing the  **OcaTaskManager** a  **Stop** or  **Abort** command, which will stop designated tasks in the device;.
 * @extends OcaManager
 * @class OcaTaskManager
 */
export declare class OcaTaskManager extends OcaManager {
  /**
   * This was not documented in the OCA standard.
   * @member OcaTaskManager#OnTaskStateChanged {Event}
   */
  OnTaskStateChanged: Event;

  /**
   * This event is emitted whenever State changes.
   */
  OnStateChanged: PropertyEvent<OcaTaskManagerState>;

  /**
   * This event is emitted whenever Tasks changes.
   */
  OnTasksChanged: PropertyEvent<Map<number, OcaTask>>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Enables (parameter =TRUE) or disables (parameter = FALSE) the running of tasks. Changes value of property State from Disabled to Enabled and vice versa. All tasks running when Enable is called with parameter = FALSE are immediately aborted.
   *
   * @method OcaTaskManager#Enable
   * @param {boolean} Enable
   *
   * @returns {Promise<void>}
   */
  Enable(Enable: boolean): Promise<void>;

  /**
   * Controls all tasks in device. Return value indicates whether tasks were successfully controlled.
   *
   * @method OcaTaskManager#ControlAllTasks
   * @param {OcaTaskCommand} Command
   *
   * @param {Uint8Array} ApplicationTaskParameter
   *
   * @returns {Promise<void>}
   */
  ControlAllTasks(
    Command: IOcaTaskCommand,
    ApplicationTaskParameter: Uint8Array
  ): Promise<void>;

  /**
   * Controls all tasks in the given group. Return value indicates whether tasks were successfully controlled.
   *
   * @method OcaTaskManager#ControlTaskGroup
   * @param {number} GroupID
   *
   * @param {OcaTaskCommand} Command
   *
   * @param {Uint8Array} ApplicationTaskParameter
   *
   * @returns {Promise<void>}
   */
  ControlTaskGroup(
    GroupID: number,
    Command: IOcaTaskCommand,
    ApplicationTaskParameter: Uint8Array
  ): Promise<void>;

  /**
   * Controls a specified task. Return value indicates whether tasks were successfully controlled.
   *
   * @method OcaTaskManager#ControlTask
   * @param {number} TaskID
   *
   * @param {OcaTaskCommand} Command
   *
   * @param {Uint8Array} ApplicationTaskParameter
   *
   * @returns {Promise<void>}
   */
  ControlTask(
    TaskID: number,
    Command: IOcaTaskCommand,
    ApplicationTaskParameter: Uint8Array
  ): Promise<void>;

  /**
   * Gets value of property  **State** . Return value indicates whether value was successfully retrieved.
   *
   * @method OcaTaskManager#GetState
   * @returns {Promise<OcaTaskManagerState>}
   *   A promise which resolves to a single value of type :class:`OcaTaskManagerState`.
   */
  GetState(): Promise<OcaTaskManagerState>;

  /**
   * This was not documented in the OCA standard.
   *
   * @method OcaTaskManager#GetTaskStatuses
   * @returns {Promise<OcaTaskStatus>}
   *   A promise which resolves to a single value of type :class:`OcaTaskStatus`.
   */
  GetTaskStatuses(): Promise<OcaTaskStatus>;

  /**
   * This was not documented in the OCA standard.
   *
   * @method OcaTaskManager#GetTaskStatus
   * @param {number} TaskID
   *
   * @returns {Promise<OcaTaskStatus>}
   *   A promise which resolves to a single value of type :class:`OcaTaskStatus`.
   */
  GetTaskStatus(TaskID: number): Promise<OcaTaskStatus>;

  /**
   * Creates a Task. Parameters of the new Task are given in the Task parameter; device returns the same parameter with the new Task ID filled in. Initial task state is set to Disabled. Return value indicates whether Task was successfully created.
   *
   * @method OcaTaskManager#AddTask
   * @param {OcaTask} Task
   *
   * @returns {Promise<OcaTask>}
   *   A promise which resolves to a single value of type :class:`OcaTask`.
   */
  AddTask(Task: IOcaTask): Promise<OcaTask>;

  /**
   * Gets map of Tasks in the device. Return value indicates whether map was successfully retrieved.
   *
   * @method OcaTaskManager#GetTasks
   * @returns {Promise<Map<number, OcaTask>>}
   *   A promise which resolves to a single value of type ``Map<number, OcaTask>``.
   */
  GetTasks(): Promise<Map<number, OcaTask>>;

  /**
   * Retrieves a Task. Return value indicates whether Task was successfully retrieved.
   *
   * @method OcaTaskManager#GetTask
   * @param {number} ID
   *
   * @returns {Promise<OcaTask>}
   *   A promise which resolves to a single value of type :class:`OcaTask`.
   */
  GetTask(ID: number): Promise<OcaTask>;

  /**
   * Updates a Task. Return value indicates whether Task was successfully updated.
   *
   * @method OcaTaskManager#SetTask
   * @param {number} ID
   *
   * @param {OcaTask} Task
   *
   * @returns {Promise<void>}
   */
  SetTask(ID: number, Task: IOcaTask): Promise<void>;

  /**
   * Deletes a task. Return value indicates whether task was successfully deleted. Method fails with status=ProcessingFailed if task is running.
   *
   * @method OcaTaskManager#DeleteTask
   * @param {number} ID
   *
   * @returns {Promise<void>}
   */
  DeleteTask(ID: number): Promise<void>;
}
