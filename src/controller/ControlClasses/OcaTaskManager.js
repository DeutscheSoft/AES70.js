import { make_control_class } from '../Base.js';
import { OcaManager } from './OcaManager.js';
import { OcaBlob } from '../../OCP1/OcaBlob.js';
import { OcaBoolean } from '../../OCP1/OcaBoolean.js';
import { OcaLibVolIdentifier } from '../../OCP1/OcaLibVolIdentifier.js';
import { OcaMap } from '../../OCP1/OcaMap.js';
import { OcaTask } from '../../OCP1/OcaTask.js';
import { OcaTaskCommand } from '../../OCP1/OcaTaskCommand.js';
import { OcaTaskManagerState } from '../../OCP1/OcaTaskManagerState.js';
import { OcaTaskStatus } from '../../OCP1/OcaTaskStatus.js';
import { OcaUint16 } from '../../OCP1/OcaUint16.js';
import { OcaUint32 } from '../../OCP1/OcaUint32.js';

/**
 * Optional manager that collects OcaTask and OcaProgram objects. <ul>
 * <li>May be instantiated once in any device. </li> </ul> <ul> <li>If
 * instantiated, object number must be 11.</li> </ul> Tasks shall be
 * device execution threads that start, execute, and (normally) stop. The
 * action of an <b>OcaTask </b>is defined by an <b>OcaProgram</b>. The
 * idea is that <b>OcaTasks </b>shall execute <b>OcaPrograms</b>.
 * <b>OcaTaskManager </b>offers global control over tasks in the device.
 * <ul> <li>Device task processing state is <b>Enabled </b>by default. In
 * <b>Enabled </b>state, tasks may be running.</li> </ul> <ul> <li>Device
 * task processing state may be <b>Disabled </b>by the <b>OcaTaskManager
 * Disable </b>command. </li> <li>The <b>Disable </b>command will succeed
 * only if no tasks are running. </li> </ul> Tasks may be stopped by:
 * passing the <b>OcaTaskManager </b>a <b>Stop </b>or <b>Abort
 * </b>command, which will stop designated tasks in the device;.
 * @extends RemoteControlClasses.OcaManager
 * @class OcaTaskManager
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaTaskManager = make_control_class(
  'OcaTaskManager',
  3,
  '\u0001\u0003\u000b',
  1,
  OcaManager,
  [
    ['Enable', 3, 1, [OcaBoolean], []],
    ['ControlAllTasks', 3, 2, [OcaTaskCommand, OcaBlob], []],
    ['ControlTaskGroup', 3, 3, [OcaUint16, OcaTaskCommand, OcaBlob], []],
    ['ControlTask', 3, 4, [OcaUint32, OcaTaskCommand, OcaBlob], []],
    ['GetState', 3, 5, [], [OcaTaskManagerState]],
    ['GetTaskStatuses', 3, 6, [], [OcaTaskStatus]],
    ['GetTaskStatus', 3, 7, [OcaUint32], [OcaTaskStatus]],
    ['AddTask', 3, 8, [OcaTask], [OcaTask]],
    ['GetTasks', 3, 9, [], [OcaMap(OcaUint32, OcaTask)]],
    ['GetTask', 3, 10, [OcaUint32], [OcaTask]],
    ['SetTask', 3, 11, [OcaUint32, OcaTask], []],
    ['DeleteTask', 3, 12, [OcaUint32], []],
  ],
  [
    ['State', [OcaTaskManagerState], 3, 1, false, false, null],
    ['Tasks', [OcaMap(OcaUint32, OcaTask)], 3, 2, false, false, null],
  ],
  [['TaskStateChanged', 3, 1, [OcaUint32, OcaLibVolIdentifier, OcaTaskStatus]]]
);

/**
 * Enables (parameter =TRUE) or disables (parameter = FALSE) the running
 * of tasks. Changes value of property State from Disabled to Enabled and
 * vice versa. All tasks running when Enable is called with parameter =
 * FALSE are immediately aborted.
 * @method RemoteControlClasses.OcaTaskManager#Enable
 * @param Enable {OcaBoolean}
 *
 * @returns {Promise}
 */
/**
 * Controls all tasks in device. Return value indicates whether tasks
 * were successfully controlled.
 * @method RemoteControlClasses.OcaTaskManager#ControlAllTasks
 * @param Command {OcaTaskCommand}
 *
 * @param ApplicationTaskParameter {OcaBlob}
 *
 * @returns {Promise}
 */
/**
 * Controls all tasks in the given group. Return value indicates whether
 * tasks were successfully controlled.
 * @method RemoteControlClasses.OcaTaskManager#ControlTaskGroup
 * @param GroupID {OcaTaskGroupID}
 *
 * @param Command {OcaTaskCommand}
 *
 * @param ApplicationTaskParameter {OcaBlob}
 *
 * @returns {Promise}
 */
/**
 * Controls a specified task. Return value indicates whether tasks were
 * successfully controlled.
 * @method RemoteControlClasses.OcaTaskManager#ControlTask
 * @param TaskID {OcaTaskID}
 *
 * @param Command {OcaTaskCommand}
 *
 * @param ApplicationTaskParameter {OcaBlob}
 *
 * @returns {Promise}
 */
/**
 * Gets value of property <b>State</b>. Return value indicates whether
 * value was successfully retrieved.
 * @method RemoteControlClasses.OcaTaskManager#GetState
 * @returns {Promise<OcaTaskManagerState>}
 */
/**
 * This was not documented in the OCA standard.
 * @method RemoteControlClasses.OcaTaskManager#GetTaskStatuses
 * @returns {Promise<OcaTaskStatus>}
 */
/**
 * This was not documented in the OCA standard.
 * @method RemoteControlClasses.OcaTaskManager#GetTaskStatus
 * @param TaskID {OcaTaskID}
 *
 * @returns {Promise<OcaTaskStatus>}
 */
/**
 * Creates a Task. Parameters of the new Task are given in the Task
 * parameter; device returns the same parameter with the new Task ID
 * filled in. Initial task state is set to Disabled. Return value
 * indicates whether Task was successfully created.
 * @method RemoteControlClasses.OcaTaskManager#AddTask
 * @param Task {OcaTask}
 *
 * @returns {Promise<OcaTask>}
 */
/**
 * Gets map of Tasks in the device. Return value indicates whether map
 * was successfully retrieved.
 * @method RemoteControlClasses.OcaTaskManager#GetTasks
 * @returns {Promise<OcaMap>}
 */
/**
 * Retrieves a Task. Return value indicates whether Task was successfully
 * retrieved.
 * @method RemoteControlClasses.OcaTaskManager#GetTask
 * @param ID {OcaTaskID}
 *
 * @returns {Promise<OcaTask>}
 */
/**
 * Updates a Task. Return value indicates whether Task was successfully
 * updated.
 * @method RemoteControlClasses.OcaTaskManager#SetTask
 * @param ID {OcaTaskID}
 *
 * @param Task {OcaTask}
 *
 * @returns {Promise}
 */
/**
 * Deletes a task. Return value indicates whether task was successfully
 * deleted. Method fails with status=ProcessingFailed if task is running.
 * @method RemoteControlClasses.OcaTaskManager#DeleteTask
 * @param ID {OcaTaskID}
 *
 * @returns {Promise}
 */
/**
 * This was not documented in the OCA standard.
 * @member RemoteControlClasses.OcaTaskManager#OnTaskStateChanged {Event} -
 */
/**
 * Current state of task processing. State is Disabled after a Disable
 * command has been received, Enabled otherwise.
 * @member RemoteControlClasses.OcaTaskManager#OnStateChanged {PropertyEvent<OcaTaskManagerState>} - This event is emitted when State changes in the remote object.
 */
/**
 * Task collection
 * @member RemoteControlClasses.OcaTaskManager#OnTasksChanged {PropertyEvent<OcaMap>} - This event is emitted when Tasks changes in the remote object.
 */
