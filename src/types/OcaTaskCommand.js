/*
 * This file has been generated.
 */
import { Enum } from './Enum.js';

/**
 * Commands controllers can send to OcaTasks to change their states
 */
export class OcaTaskCommand extends Enum({
  None: 0,
  Prepare: 1,
  Enable: 2,
  Start: 3,
  Stop: 4,
  Abort: 5,
  Disable: 6,
  Clear: 7,
}) {}
