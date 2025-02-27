import { OcaJobDisposedEventData } from '../../OCP1/OcaJobDisposedEventData.js';
import { OcaJobQueueItem } from '../../OCP1/OcaJobQueueItem.js';
import { OcaList } from '../../OCP1/OcaList.js';
import { OcaTaskSchedulerState } from '../../OCP1/OcaTaskSchedulerState.js';
import { OcaUint32 } from '../../OCP1/OcaUint32.js';
import { make_control_class } from '../make_control_class.js';
import { OcaAgent } from './OcaAgent.js';

/**
 * Optional scheduler for scheduling tasks to run programs and commandsets in
 * the future.
 * @extends OcaAgent
 * @class OcaTaskScheduler
 */
export const OcaTaskScheduler = make_control_class(
  'OcaTaskScheduler',
  3,
  '\u0001\u0002\r',
  1,
  OcaAgent,
  [
    ['ActionStart', 3, 1, [], []],
    ['ActionStop', 3, 2, [], []],
    ['ActionPause', 3, 3, [], []],
    ['ActionDrain', 3, 4, [], []],
    ['GetState', 3, 5, [], [OcaTaskSchedulerState]],
    ['GetTaskAgents', 3, 6, [], [OcaList(OcaUint32)]],
    ['GetJobQueue', 3, 7, [], [OcaList(OcaJobQueueItem)]],
    ['GetJob', 3, 8, [OcaUint32], [OcaJobQueueItem]],
    ['SetJob', 3, 9, [OcaUint32, OcaJobQueueItem], []],
    ['AddJob', 3, 10, [OcaJobQueueItem], [OcaUint32]],
    ['DeleteJob', 3, 11, [OcaUint32], []],
    ['ClearJobQueue', 3, 12, [], []],
  ],
  [
    ['State', [OcaTaskSchedulerState], 3, 1, false, false, null],
    ['TaskAgents', [OcaList(OcaUint32)], 3, 2, false, false, null],
    ['JobQueue', [OcaList(OcaJobQueueItem)], 3, 3, false, false, null],
  ],
  [['JobDisposed', 3, 1, [OcaJobDisposedEventData]]]
);

/**
 * Changes state to **Running.**
 *
 * @method OcaTaskScheduler#ActionStart
 * @returns {Promise<void>}
 */
/**
 * Changes state to **Stopped.**
 *
 * @method OcaTaskScheduler#ActionStop
 * @returns {Promise<void>}
 */
/**
 * Changes state to **Paused.**
 *
 * @method OcaTaskScheduler#ActionPause
 * @returns {Promise<void>}
 */
/**
 * Changes state to **Draining.**
 *
 * @method OcaTaskScheduler#ActionDrain
 * @returns {Promise<void>}
 */
/**
 * Gets the scheduler's state.
 *
 * @method OcaTaskScheduler#GetState
 * @returns {Promise<OcaTaskSchedulerState>}
 *   A promise which resolves to a single value of type :class:`OcaTaskSchedulerState`.
 */
/**
 * Gets the list of all **OcaTaskAgent** ONos.
 *
 * @method OcaTaskScheduler#GetTaskAgents
 * @returns {Promise<number[]>}
 *   A promise which resolves to a single value of type ``number[]``.
 */
/**
 * Gets the job queue.
 *
 * @method OcaTaskScheduler#GetJobQueue
 * @returns {Promise<OcaJobQueueItem[]>}
 *   A promise which resolves to a single value of type :class:`OcaJobQueueItem[]`.
 */
/**
 * Gets a jobqueue item, given its ID.
 *
 * @method OcaTaskScheduler#GetJob
 * @param {number} ID
 *
 * @returns {Promise<OcaJobQueueItem>}
 *   A promise which resolves to a single value of type :class:`OcaJobQueueItem`.
 */
/**
 * Replaces a job queue item, given its ID. If given ID references a nonexistent
 * job queue item, method shall return status value **ParameterOutOfRange**.
 *
 * @method OcaTaskScheduler#SetJob
 * @param {number} ID
 * @param {IOcaJobQueueItem} Item
 *
 * @returns {Promise<void>}
 */
/**
 * Adds a job queue item, returns its ID.
 *
 * @method OcaTaskScheduler#AddJob
 * @param {IOcaJobQueueItem} Item
 *
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Deletes a job queue item given its ID.
 *
 * @method OcaTaskScheduler#DeleteJob
 * @param {number} ID
 *
 * @returns {Promise<void>}
 */
/**
 * Deletes all job queue items.
 *
 * @method OcaTaskScheduler#ClearJobQueue
 * @returns {Promise<void>}
 */
/**
 * Event raised when a job queue item is removed from the queue, either because
 * it has fulfilled its purpose or because it has been explicitly deleted by the
 * **DeleteJob()** or **ClearJobQueue()** method.
 * @member OcaTaskScheduler#OnJobDisposed {Event}
 */
/**
 * This event is emitted when the property ``State`` changes in the remote object.
 * The property ``State`` is described in the AES70 standard as follows.
 * See **OcaTaskSchedulerState** for state values and their semantics.
 *
 * @member {PropertyEvent<OcaTaskSchedulerState>} OcaTaskScheduler#OnStateChanged
 */
/**
 * This event is emitted when the property ``TaskAgents`` changes in the remote object.
 * The property ``TaskAgents`` is described in the AES70 standard as follows.
 * List of ONos of **OcaTaskAgent** objects. Readonly; updated automatically
 * when **OcaTaskAgent** objects are created or deleted.
 *
 * @member {PropertyEvent<number[]>} OcaTaskScheduler#OnTaskAgentsChanged
 */
/**
 * This event is emitted when the property ``JobQueue`` changes in the remote object.
 * The property ``JobQueue`` is described in the AES70 standard as follows.
 * List of queued jobs. Items are added to the queue by the **AddJob()** method,
 * and removed from the queue when they have run to completion, or by the
 * **DeleteJob()** or **ClearJobQueue()** methods.
 *
 * @member {PropertyEvent<OcaJobQueueItem[]>} OcaTaskScheduler#OnJobQueueChanged
 */
