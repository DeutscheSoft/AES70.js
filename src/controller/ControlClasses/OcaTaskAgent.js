import { OcaBlob } from '../../OCP1/OcaBlob.js';
import { OcaBoolean } from '../../OCP1/OcaBoolean.js';
import { OcaProgramRunMode } from '../../OCP1/OcaProgramRunMode.js';
import { OcaTaskExecutionTerminatedEventData } from '../../OCP1/OcaTaskExecutionTerminatedEventData.js';
import { OcaTaskOperationalState } from '../../OCP1/OcaTaskOperationalState.js';
import { OcaUint16 } from '../../OCP1/OcaUint16.js';
import { OcaUint32 } from '../../OCP1/OcaUint32.js';
import { make_control_class } from '../make_control_class.js';
import { OcaAgent } from './OcaAgent.js';

/**
 * Task scheduler. Holds a queue of task-program pairs to be executed under
 * specific future conditions.
 * @extends OcaAgent
 * @class OcaTaskAgent
 */
export const OcaTaskAgent = make_control_class(
  'OcaTaskAgent',
  3,
  '\u0001\u0002\f',
  1,
  OcaAgent,
  [
    ['ActionPrepare', 3, 1, [OcaUint32, OcaBlob, OcaProgramRunMode], []],
    ['ActionRun', 3, 2, [OcaUint32, OcaBlob, OcaProgramRunMode], []],
    ['ActionStart', 3, 3, [], []],
    ['ActionStop', 3, 4, [], []],
    ['ActionReset', 3, 5, [], []],
    ['ActionClear', 3, 6, [], []],
    ['GetBlocked', 3, 7, [], [OcaBoolean]],
    ['SetBlocked', 3, 8, [OcaBoolean], []],
    ['GetOperationalState', 3, 9, [], [OcaTaskOperationalState]],
    ['GetExecutableONo', 3, 10, [], [OcaUint32]],
    ['GetExecutionParameters', 3, 11, [], [OcaBlob]],
    ['GetRunMode', 3, 12, [], [OcaProgramRunMode]],
  ],
  [
    ['ExecutableONo', [OcaUint32], 3, 1, false, false, null],
    ['GroupID', [OcaUint16], 3, 2, false, false, null],
    ['ExecutionParameters', [OcaBlob], 3, 3, false, false, null],
    ['RunMode', [OcaProgramRunMode], 3, 4, false, false, null],
    ['Blocked', [OcaBoolean], 3, 5, false, false, null],
    ['OperationalState', [OcaTaskOperationalState], 3, 6, false, false, null],
  ],
  [['ExecutionTerminated', 3, 1, [OcaTaskExecutionTerminatedEventData]]]
);

/**
 * Prepares task for program execution, but does not start execution. Sets
 * **ExecutableONo** and **ExecutionParameters**. Changes state from
 * **NotPrepared** to **Ready**. If property **.Blocked** is TRUE, does nothing
 * and returns status of **ProcessingFailed**.
 *
 * @method OcaTaskAgent#ActionPrepare
 * @param {number} Program
 * @param {Uint8Array} ExecutionParameters
 * @param {IOcaProgramRunMode} RunMode
 *
 * @returns {Promise<void>}
 */
/**
 * Execute the given program immediately. Sets **ExecutableONo** and
 * **ExecutionParameters**. Changes state from **NotPrepared** to **Running**.
 * If property **.Blocked** is TRUE, does nothing and returns status of
 * **ProcessingFailed**.
 *
 * @method OcaTaskAgent#ActionRun
 * @param {number} Program
 * @param {Uint8Array} ExecutionParameters
 * @param {IOcaProgramRunMode} RunMode
 *
 * @returns {Promise<void>}
 */
/**
 * Executes the prepared program. Changes state from **Ready** to **Running**.
 * If property **.Blocked** is TRUE, does nothing and returns status of
 * **ProcessingFailed**.
 *
 * @method OcaTaskAgent#ActionStart
 * @returns {Promise<void>}
 */
/**
 * Requests orderly termination of running program. Changes state from
 * **Running** to **Stopping**. When termination is complete, state changes from
 * **Stopping** to **Ended.**
 *
 * @method OcaTaskAgent#ActionStop
 * @returns {Promise<void>}
 */
/**
 * Resets all internal states to their values at start of execution. Forces
 * immediate termination of running or stopping program. Changes state from
 * **Running, Stopping,** or **Ended** to **Ready.**
 *
 * @method OcaTaskAgent#ActionReset
 * @returns {Promise<void>}
 */
/**
 * Clears all memory of program and program execution from the task agent.
 * Forces immediate termination of running or stopping program. Changes state
 * from **Running, Stopping,** or **Ended** to **NotPrepared. ** Sets property
 * **ExecutableONo** to zero, property **ExecutionParameters** to a null blob,
 * and property **RunMode** to **None**.
 *
 * @method OcaTaskAgent#ActionClear
 * @returns {Promise<void>}
 */
/**
 * Gets property **Blocked**.
 *
 * @method OcaTaskAgent#GetBlocked
 * @returns {Promise<boolean>}
 *   A promise which resolves to a single value of type ``boolean``.
 */
/**
 * Sets the **Blocked** property.
 *
 * @method OcaTaskAgent#SetBlocked
 * @param {boolean} Blocked
 *
 * @returns {Promise<void>}
 */
/**
 * Gets value of the **OperationalState** property.
 *
 * @method OcaTaskAgent#GetOperationalState
 * @returns {Promise<OcaTaskOperationalState>}
 *   A promise which resolves to a single value of type :class:`OcaTaskOperationalState`.
 */
/**
 * Gets value of **ExecutableONo** property, as set by the
 * **ActionPrepare(...)** and **ActionRun(...)** methods. Returns zero if no
 * execution is pending or in progress.
 *
 * @method OcaTaskAgent#GetExecutableONo
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Gets value of **ExecutionParameters** property, as set by the
 * **ActionPrepare(...)** and **ActionRun(...)** methods. Returns an empty blob
 * if no execution is pending or in progress.
 *
 * @method OcaTaskAgent#GetExecutionParameters
 * @returns {Promise<Uint8Array>}
 *   A promise which resolves to a single value of type ``Uint8Array``.
 */
/**
 * Gets the value of the **RunMode** property, as set by the
 * **ActionPrepare(...)** and **ActionRun(...)** methods. Returns the value
 * **None** if no execution is pending or in progress.
 *
 * @method OcaTaskAgent#GetRunMode
 * @returns {Promise<IOcaProgramRunMode>}
 *   A promise which resolves to a single value of type ``IOcaProgramRunMode``.
 */
/**
 * Event raised when execution terminates for any reason.
 * @member OcaTaskAgent#OnExecutionTerminated {Event}
 */
/**
 * This event is emitted when the property ``ExecutableONo`` changes in the remote object.
 * The property ``ExecutableONo`` is described in the AES70 standard as follows.
 * **ONo** of **OcaProgram** or **OcaCommandSet** assigned to this task. Set by
 * the **ActionPrepare(...)** and **ActionRun(...)** methods. Value is zero if
 * no **OcaProgram** or **OcaCommandSet** is attached. or zero if no executable
 * is assigned.
 *
 * @member {PropertyEvent<number>} OcaTaskAgent#OnExecutableONoChanged
 */
/**
 * This event is emitted when the property ``GroupID`` changes in the remote object.
 * The property ``GroupID`` is described in the AES70 standard as follows.
 * ID of group the task is in, or zero if it isn't in a group
 *
 * @member {PropertyEvent<number>} OcaTaskAgent#OnGroupIDChanged
 */
/**
 * This event is emitted when the property ``ExecutionParameters`` changes in the remote object.
 * The property ``ExecutionParameters`` is described in the AES70 standard as follows.
 * Application-specific parameters for running the executable, as set by the
 * methods **ActionPrepare(...)** and **ActionRun(...)**. Value is an empty blob
 * if**** if no execution is pending. or in progress.
 *
 * @member {PropertyEvent<Uint8Array>} OcaTaskAgent#OnExecutionParametersChanged
 */
/**
 * This event is emitted when the property ``RunMode`` changes in the remote object.
 * The property ``RunMode`` is described in the AES70 standard as follows.
 * Run mode as set by the methods **ActionPrepare(...)** and **ActionRun(...)**.
 * Value is **None** if no execution is pending or in progress.
 *
 * @member {PropertyEvent<IOcaProgramRunMode>} OcaTaskAgent#OnRunModeChanged
 */
/**
 * This event is emitted when the property ``Blocked`` changes in the remote object.
 * The property ``Blocked`` is described in the AES70 standard as follows.
 * If value is TRUE, the task agent is allowed to complete any work in progress,
 * but is prevented from accepting any new work. When TRUE, the methods
 * **ActionPrepare, ActionRun,** and **ActionStart** will fail with **OcaStatus
 * = ProcessingFailed**.
 *
 * @member {PropertyEvent<boolean>} OcaTaskAgent#OnBlockedChanged
 */
/**
 * This event is emitted when the property ``OperationalState`` changes in the remote object.
 * The property ``OperationalState`` is described in the AES70 standard as follows.
 * Operational state of this agent's task = {generic state, task-specific blob}
 * .
 *
 * @member {PropertyEvent<OcaTaskOperationalState>} OcaTaskAgent#OnOperationalStateChanged
 */
