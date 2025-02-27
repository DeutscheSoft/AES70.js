import { IOcaJobQueueItem, OcaJobQueueItem } from '../../types/OcaJobQueueItem';
import { OcaTaskSchedulerState } from '../../types/OcaTaskSchedulerState';
import { Event } from '../event';
import { PropertyEvent } from '../property_event';
import { RemoteDevice } from '../remote_device';
import { OcaAgent } from './OcaAgent';

/**
 * Optional scheduler for scheduling tasks to run programs and commandsets in
 * the future.
 * @extends OcaAgent
 * @class OcaTaskScheduler
 */
export declare class OcaTaskScheduler extends OcaAgent {
  /**
   * Event raised when a job queue item is removed from the queue, either
   * because it has fulfilled its purpose or because it has been explicitly
   * deleted by the **DeleteJob()** or **ClearJobQueue()** method.
   * @member OcaTaskScheduler#OnJobDisposed {Event}
   */
  OnJobDisposed: Event;
  /**
   * This event is emitted whenever State changes.
   */
  OnStateChanged: PropertyEvent<OcaTaskSchedulerState>;

  /**
   * This event is emitted whenever TaskAgents changes.
   */
  OnTaskAgentsChanged: PropertyEvent<number[]>;

  /**
   * This event is emitted whenever JobQueue changes.
   */
  OnJobQueueChanged: PropertyEvent<OcaJobQueueItem[]>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Changes state to **Running.**
   *
   * @method OcaTaskScheduler#ActionStart
   * @returns {Promise<void>}
   */
  ActionStart(): Promise<void>;

  /**
   * Changes state to **Stopped.**
   *
   * @method OcaTaskScheduler#ActionStop
   * @returns {Promise<void>}
   */
  ActionStop(): Promise<void>;

  /**
   * Changes state to **Paused.**
   *
   * @method OcaTaskScheduler#ActionPause
   * @returns {Promise<void>}
   */
  ActionPause(): Promise<void>;

  /**
   * Changes state to **Draining.**
   *
   * @method OcaTaskScheduler#ActionDrain
   * @returns {Promise<void>}
   */
  ActionDrain(): Promise<void>;

  /**
   * Gets the scheduler's state.
   *
   * @method OcaTaskScheduler#GetState
   * @returns {Promise<OcaTaskSchedulerState>}
   *   A promise which resolves to a single value of type :class:`OcaTaskSchedulerState`.
   */
  GetState(): Promise<OcaTaskSchedulerState>;

  /**
   * Gets the list of all **OcaTaskAgent** ONos.
   *
   * @method OcaTaskScheduler#GetTaskAgents
   * @returns {Promise<number[]>}
   *   A promise which resolves to a single value of type ``number[]``.
   */
  GetTaskAgents(): Promise<number[]>;

  /**
   * Gets the job queue.
   *
   * @method OcaTaskScheduler#GetJobQueue
   * @returns {Promise<OcaJobQueueItem[]>}
   *   A promise which resolves to a single value of type :class:`OcaJobQueueItem[]`.
   */
  GetJobQueue(): Promise<OcaJobQueueItem[]>;

  /**
   * Gets a jobqueue item, given its ID.
   *
   * @method OcaTaskScheduler#GetJob
   * @param {number} ID
   *
   * @returns {Promise<OcaJobQueueItem>}
   *   A promise which resolves to a single value of type :class:`OcaJobQueueItem`.
   */
  GetJob(ID: number): Promise<OcaJobQueueItem>;

  /**
   * Replaces a job queue item, given its ID. If given ID references a
   * nonexistent job queue item, method shall return status value
   * **ParameterOutOfRange**.
   *
   * @method OcaTaskScheduler#SetJob
   * @param {number} ID
   * @param {IOcaJobQueueItem} Item
   *
   * @returns {Promise<void>}
   */
  SetJob(ID: number, Item: IOcaJobQueueItem): Promise<void>;

  /**
   * Adds a job queue item, returns its ID.
   *
   * @method OcaTaskScheduler#AddJob
   * @param {IOcaJobQueueItem} Item
   *
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  AddJob(Item: IOcaJobQueueItem): Promise<number>;

  /**
   * Deletes a job queue item given its ID.
   *
   * @method OcaTaskScheduler#DeleteJob
   * @param {number} ID
   *
   * @returns {Promise<void>}
   */
  DeleteJob(ID: number): Promise<void>;

  /**
   * Deletes all job queue items.
   *
   * @method OcaTaskScheduler#ClearJobQueue
   * @returns {Promise<void>}
   */
  ClearJobQueue(): Promise<void>;
}
