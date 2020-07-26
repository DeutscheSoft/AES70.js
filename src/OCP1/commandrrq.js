import { Command } from './command.js';

/**
 * Command packet with response required.
 */
export class CommandRrq extends Command
{
  static get messageType()
  {
    return 1;
  }
}

