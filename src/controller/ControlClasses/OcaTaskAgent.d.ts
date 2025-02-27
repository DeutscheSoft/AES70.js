import { IOcaProgramRunMode } from '../../types/OcaProgramRunMode';
import { OcaTaskOperationalState } from '../../types/OcaTaskOperationalState';
import { Event } from '../event';
import { PropertyEvent } from '../property_event';
import { RemoteDevice } from '../remote_device';
import { OcaAgent } from './OcaAgent';

/**
 * Task scheduler. Holds a queue of task-program pairs to be executed under
 * specific future conditions.
 * @extends OcaAgent
 * @class OcaTaskAgent
 */
export declare class OcaTaskAgent extends OcaAgent {
  /**
   * Event raised when execution terminates for any reason.
   * @member OcaTaskAgent#OnExecutionTerminated {Event}
   */
  OnExecutionTerminated: Event;
  /**
   * This event is emitted whenever ExecutableONo changes.
   */
  OnExecutableONoChanged: PropertyEvent<number>;

  /**
   * This event is emitted whenever GroupID changes.
   */
  OnGroupIDChanged: PropertyEvent<number>;

  /**
   * This event is emitted whenever ExecutionParameters changes.
   */
  OnExecutionParametersChanged: PropertyEvent<Uint8Array>;

  /**
   * This event is emitted whenever RunMode changes.
   */
  OnRunModeChanged: PropertyEvent<IOcaProgramRunMode>;

  /**
   * This event is emitted whenever Blocked changes.
   */
  OnBlockedChanged: PropertyEvent<boolean>;

  /**
   * This event is emitted whenever OperationalState changes.
   */
  OnOperationalStateChanged: PropertyEvent<OcaTaskOperationalState>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Prepares task for program execution, but does not start execution. Sets
   * **ExecutableONo** and **ExecutionParameters**. Changes state from
   * **NotPrepared** to **Ready**. If property **.Blocked** is TRUE, does
   * nothing and returns status of **ProcessingFailed**.
   *
   * @method OcaTaskAgent#ActionPrepare
   * @param {number} Program
   * @param {Uint8Array} ExecutionParameters
   * @param {IOcaProgramRunMode} RunMode
   *
   * @returns {Promise<void>}
   */
  ActionPrepare(
    Program: number,
    ExecutionParameters: Uint8Array,
    RunMode: IOcaProgramRunMode
  ): Promise<void>;

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
  ActionRun(
    Program: number,
    ExecutionParameters: Uint8Array,
    RunMode: IOcaProgramRunMode
  ): Promise<void>;

  /**
   * Executes the prepared program. Changes state from **Ready** to **Running**.
   * If property **.Blocked** is TRUE, does nothing and returns status of
   * **ProcessingFailed**.
   *
   * @method OcaTaskAgent#ActionStart
   * @returns {Promise<void>}
   */
  ActionStart(): Promise<void>;

  /**
   * Requests orderly termination of running program. Changes state from
   * **Running** to **Stopping**. When termination is complete, state changes
   * from **Stopping** to **Ended.**
   *
   * @method OcaTaskAgent#ActionStop
   * @returns {Promise<void>}
   */
  ActionStop(): Promise<void>;

  /**
   * Resets all internal states to their values at start of execution. Forces
   * immediate termination of running or stopping program. Changes state from
   * **Running, Stopping,** or **Ended** to **Ready.**
   *
   * @method OcaTaskAgent#ActionReset
   * @returns {Promise<void>}
   */
  ActionReset(): Promise<void>;

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
  ActionClear(): Promise<void>;

  /**
   * Gets property **Blocked**.
   *
   * @method OcaTaskAgent#GetBlocked
   * @returns {Promise<boolean>}
   *   A promise which resolves to a single value of type ``boolean``.
   */
  GetBlocked(): Promise<boolean>;

  /**
   * Sets the **Blocked** property.
   *
   * @method OcaTaskAgent#SetBlocked
   * @param {boolean} Blocked
   *
   * @returns {Promise<void>}
   */
  SetBlocked(Blocked: boolean): Promise<void>;

  /**
   * Gets value of the **OperationalState** property.
   *
   * @method OcaTaskAgent#GetOperationalState
   * @returns {Promise<OcaTaskOperationalState>}
   *   A promise which resolves to a single value of type :class:`OcaTaskOperationalState`.
   */
  GetOperationalState(): Promise<OcaTaskOperationalState>;

  /**
   * Gets value of **ExecutableONo** property, as set by the
   * **ActionPrepare(...)** and **ActionRun(...)** methods. Returns zero if no
   * execution is pending or in progress.
   *
   * @method OcaTaskAgent#GetExecutableONo
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetExecutableONo(): Promise<number>;

  /**
   * Gets value of **ExecutionParameters** property, as set by the
   * **ActionPrepare(...)** and **ActionRun(...)** methods. Returns an empty
   * blob if no execution is pending or in progress.
   *
   * @method OcaTaskAgent#GetExecutionParameters
   * @returns {Promise<Uint8Array>}
   *   A promise which resolves to a single value of type ``Uint8Array``.
   */
  GetExecutionParameters(): Promise<Uint8Array>;

  /**
   * Gets the value of the **RunMode** property, as set by the
   * **ActionPrepare(...)** and **ActionRun(...)** methods. Returns the value
   * **None** if no execution is pending or in progress.
   *
   * @method OcaTaskAgent#GetRunMode
   * @returns {Promise<IOcaProgramRunMode>}
   *   A promise which resolves to a single value of type ``IOcaProgramRunMode``.
   */
  GetRunMode(): Promise<IOcaProgramRunMode>;
}
