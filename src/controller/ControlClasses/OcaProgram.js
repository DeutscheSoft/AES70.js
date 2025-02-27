import { OcaList } from '../../OCP1/OcaList.js';
import { OcaProgramRunMode } from '../../OCP1/OcaProgramRunMode.js';
import { make_control_class } from '../make_control_class.js';
import { OcaDataset } from './OcaDataset.js';

/**
 * A Program. Child of **OcaDataset**. **Execution:** A program executes in a
 * task. Tasks may be explicitly created by **OcaTaskManager2**, or they may be
 * implicitly created at execution time. The execution task may be explicitly
 * specified, by giving its task ID, or automatically created by the device. In
 * either case, the given task ID parameter will be updated by the **Run()** or
 * **Schedule()** method call to reflect the task actually assigned to the run.
 * Once a task is set up, subscribing controllers will receive notifications
 * about changes in its status from **OcaTaskManager2.** As well, running tasks
 * can be controlled using **OcaTaskManager2** methods. Running and scheduling
 * methods are as follows:
 *
 *  - **Run(...)** starts execution, then returns immediately.
 *
 *  - **Schedule(...)** schedules execution, then returns immediately.
 *
 *  - **RunWait(...)** starts execution, but does not return until execution
 *    terminates.
 *
 *  - **ScheduleWait(...)** schedules execution, but does not return until
 *    execution termiantes.
 *
 *
 * If execution is invoked via **Run(...)** or **Schedule(...),
 * OcaTaskManager2** will raise a **CommandSetTerminated** event when execution
 * terminates. If execution is invoked via **RunWait(...)** or
 * **ScheduleWait(...),** termination information is returned by the method, and
 * no such event is raised.
 * @extends OcaDataset
 * @class OcaProgram
 */
export const OcaProgram = make_control_class(
  'OcaProgram',
  3,
  '\u0001\u0005\u0002',
  1,
  OcaDataset,
  [
    ['GetSupportedRunModes', 3, 1, [], [OcaList(OcaProgramRunMode)]],
    ['SetSupportedRunModes', 3, 2, [OcaList(OcaProgramRunMode)], []],
  ],
  [
    [
      'SupportedRunModes',
      [OcaList(OcaProgramRunMode)],
      3,
      1,
      false,
      false,
      null,
    ],
  ],
  []
);

/**
 * Gets the list of run modes this program supports.
 *
 * @method OcaProgram#GetSupportedRunModes
 * @returns {Promise<IOcaProgramRunMode[]>}
 *   A promise which resolves to a single value of type ``IOcaProgramRunMode[]``.
 */
/**
 * Sets the list of run modes this program supports.
 *
 * @method OcaProgram#SetSupportedRunModes
 * @param {IOcaProgramRunMode[]} RunModes
 *
 * @returns {Promise<void>}
 */
/**
 * This event is emitted when the property ``SupportedRunModes`` changes in the remote object.
 * The property ``SupportedRunModes`` is described in the AES70 standard as follows.
 * List of runmodes the task supports.
 *
 * @member {PropertyEvent<IOcaProgramRunMode[]>} OcaProgram#OnSupportedRunModesChanged
 */
