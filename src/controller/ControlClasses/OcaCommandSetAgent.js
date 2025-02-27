import { OcaCommand } from '../../OCP1/OcaCommand.js';
import { OcaCommandResult } from '../../OCP1/OcaCommandResult.js';
import { OcaList32 } from '../../OCP1/OcaList32.js';
import { make_control_class } from '../make_control_class.js';
import { OcaAgent } from './OcaAgent.js';

/**
 * Agent for immediate execution of commandsets. This agent provides a mechanism
 * for simple execution of commandsets in cases where the application does not
 * require the more advanced storage and scheduling features provided by the
 * **OcaCommandSet**, **OcaTaskAgent**, and **OcaTaskScheduler** classes.
 * @extends OcaAgent
 * @class OcaCommandSetAgent
 */
export const OcaCommandSetAgent = make_control_class(
  'OcaCommandSetAgent',
  3,
  '\u0001\u0002\u0017',
  1,
  OcaAgent,
  [['Execute', 3, 1, [OcaList32(OcaCommand)], [OcaList32(OcaCommandResult)]]],
  [],
  []
);

/**
 * Execute a command set. Return the status and returned parameter values from
 * each command. The **OcaStatus** value returned by this** Execute(...)**
 * method shall be as follows: **OK ** Given commands were executed; all, none,
 * or some of them succeeded. **<anything else>** Problem, no command execution
 * was attempted
 *
 * @method OcaCommandSetAgent#Execute
 * @param {IOcaCommand[]} Commands
 *
 * @returns {Promise<OcaCommandResult[]>}
 *   A promise which resolves to a single value of type :class:`OcaCommandResult[]`.
 */
