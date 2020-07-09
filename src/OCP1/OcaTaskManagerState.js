import { Enum8 } from './Enum8.js';

/**
 * States of <b>OcaTaskManager </b>object. These states represent the
 * overall state of task processing in the device. <ul> <li>Device task
 * processing state is <b>Enabled </b>by default. In <b>Enabled
 * </b>state, tasks may be running.</li> </ul> <ul> <li>Device task
 * processing state may be <b>Disabled </b>by the <b>OcaTaskManager
 * Disable </b>command. </li> <li>The <b>Disable </b>command will succeed
 * only if no tasks are running. </li> </ul> Tasks may be stopped by:
 * <ul> <li>passing the <b>OcaTaskManager </b>a <b>Stop </b>or <b>Abort
 * </b>command, which will stop all tasks in the device; or</li>
 * <li>passing a <b>Stop </b>or <b>Abort </b>command to each
 * <b>OcaTaskGroup </b>agent, which will stop all the tasks in the given
 * task groups; or </li> <li>passing a <b>Stop </b>or <b>Abort
 * </b>command to each task individually.</li> </ul>
 * @category Types
 * @class OcaTaskManagerState
 * @extends Enum8
 */
export const OcaTaskManagerState = Enum8({
  None: 0,
  Enabled: 1,
  Disabled: 2,
});
