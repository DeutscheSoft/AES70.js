import { IOcaCommand, OcaCommand } from '../../types/OcaCommand';
import { PropertyEvent } from '../property_event';
import { RemoteDevice } from '../remote_device';
import { OcaProgram } from './OcaProgram';

/**
 * A command set. Child of **OcaProgram**.
 * @extends OcaProgram
 * @class OcaCommandSet
 */
export declare class OcaCommandSet extends OcaProgram {
  /**
   * This event is emitted whenever Commands changes.
   */
  OnCommandsChanged: PropertyEvent<OcaCommand[]>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the list of commands in the commandset.
   *
   * @method OcaCommandSet#GetCommands
   * @returns {Promise<OcaCommand[]>}
   *   A promise which resolves to a single value of type :class:`OcaCommand[]`.
   */
  GetCommands(): Promise<OcaCommand[]>;

  /**
   * Sets the list of commands in the commandset.
   *
   * @method OcaCommandSet#SetCommands
   * @param {IOcaCommand[]} Commands
   *
   * @returns {Promise<void>}
   */
  SetCommands(Commands: IOcaCommand[]): Promise<void>;

  /**
   * Gets the command designated by the **Index** parameter.
   *
   * @method OcaCommandSet#GetCommand
   * @param {number} Index
   *
   * @returns {Promise<OcaCommand>}
   *   A promise which resolves to a single value of type :class:`OcaCommand`.
   */
  GetCommand(Index: number): Promise<OcaCommand>;

  /**
   * Replaces the command designated by the **Index** parameter.
   *
   * @method OcaCommandSet#SetCommand
   * @param {number} Index
   * @param {IOcaCommand} Command
   *
   * @returns {Promise<void>}
   */
  SetCommand(Index: number, Command: IOcaCommand): Promise<void>;

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
  InsertCommand(Index: number, Command: IOcaCommand): Promise<void>;

  /**
   * Removes command with the given **Index** value from the commandset.
   *
   * @method OcaCommandSet#DeleteCommand
   * @param {number} Index
   *
   * @returns {Promise<void>}
   */
  DeleteCommand(Index: number): Promise<void>;

  /**
   * Removes all commands from the command set.
   *
   * @method OcaCommandSet#Clear
   * @returns {Promise<void>}
   */
  Clear(): Promise<void>;
}
