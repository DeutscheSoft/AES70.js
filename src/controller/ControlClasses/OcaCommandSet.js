import { OcaCommand } from '../../OCP1/OcaCommand.js';
import { OcaList } from '../../OCP1/OcaList.js';
import { OcaUint16 } from '../../OCP1/OcaUint16.js';
import { make_control_class } from '../make_control_class.js';
import { OcaProgram } from './OcaProgram.js';

/**
 * A command set. Child of **OcaProgram**.
 * @extends OcaProgram
 * @class OcaCommandSet
 */
export const OcaCommandSet = make_control_class(
  'OcaCommandSet',
  4,
  '\u0001\u0005\u0002\u0001',
  2,
  OcaProgram,
  [
    ['GetCommands', 4, 1, [], [OcaList(OcaCommand)]],
    ['SetCommands', 4, 2, [OcaList(OcaCommand)], []],
    ['GetCommand', 4, 3, [OcaUint16], [OcaCommand]],
    ['SetCommand', 4, 4, [OcaUint16, OcaCommand], []],
    ['InsertCommand', 4, 5, [OcaUint16, OcaCommand], []],
    ['DeleteCommand', 4, 6, [OcaUint16], []],
    ['Clear', 4, 7, [], []],
  ],
  [['Commands', [OcaList(OcaCommand)], 4, 1, false, false, null]],
  []
);

/**
 * Gets the list of commands in the commandset.
 *
 * @method OcaCommandSet#GetCommands
 * @returns {Promise<OcaCommand[]>}
 *   A promise which resolves to a single value of type :class:`OcaCommand[]`.
 */
/**
 * Sets the list of commands in the commandset.
 *
 * @method OcaCommandSet#SetCommands
 * @param {IOcaCommand[]} Commands
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the command designated by the **Index** parameter.
 *
 * @method OcaCommandSet#GetCommand
 * @param {number} Index
 *
 * @returns {Promise<OcaCommand>}
 *   A promise which resolves to a single value of type :class:`OcaCommand`.
 */
/**
 * Replaces the command designated by the **Index** parameter.
 *
 * @method OcaCommandSet#SetCommand
 * @param {number} Index
 * @param {IOcaCommand} Command
 *
 * @returns {Promise<void>}
 */
/**
 * Inserts a command into the CommandSet after the command with the given
 * **Index** value.
 *
 * @method OcaCommandSet#InsertCommand
 * @param {number} Index
 * @param {IOcaCommand} Command
 *
 * @returns {Promise<void>}
 */
/**
 * Removes command with the given **Index** value from the commandset.
 *
 * @method OcaCommandSet#DeleteCommand
 * @param {number} Index
 *
 * @returns {Promise<void>}
 */
/**
 * Removes all commands from the command set.
 *
 * @method OcaCommandSet#Clear
 * @returns {Promise<void>}
 */
/**
 * This event is emitted when the property ``Commands`` changes in the remote object.
 * The property ``Commands`` is described in the AES70 standard as follows.
 * The commands in the commandSet.
 *
 * @member {PropertyEvent<OcaCommand[]>} OcaCommandSet#OnCommandsChanged
 */
