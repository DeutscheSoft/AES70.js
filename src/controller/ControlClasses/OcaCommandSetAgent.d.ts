import { IOcaCommand } from '../../types/OcaCommand';
import { OcaCommandResult } from '../../types/OcaCommandResult';
import { RemoteDevice } from '../remote_device';
import { OcaAgent } from './OcaAgent';

/**
 * Agent for immediate execution of commandsets. This agent provides a mechanism
 * for simple execution of commandsets in cases where the application does not
 * require the more advanced storage and scheduling features provided by the
 * **OcaCommandSet**, **OcaTaskAgent**, and **OcaTaskScheduler** classes.
 * @extends OcaAgent
 * @class OcaCommandSetAgent
 */
export declare class OcaCommandSetAgent extends OcaAgent {
  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Execute a command set. Return the status and returned parameter values from
   * each command. The **OcaStatus** value returned by this** Execute(...)**
   * method shall be as follows: **OK ** Given commands were executed; all,
   * none, or some of them succeeded. **<anything else>** Problem, no command
   * execution was attempted
   *
   * @method OcaCommandSetAgent#Execute
   * @param {IOcaCommand[]} Commands
   *
   * @returns {Promise<OcaCommandResult[]>}
   *   A promise which resolves to a single value of type :class:`OcaCommandResult[]`.
   */
  Execute(Commands: IOcaCommand[]): Promise<OcaCommandResult[]>;
}
