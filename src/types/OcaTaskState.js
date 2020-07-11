/*
 * This file has been generated.
 */
import { Enum } from './Enum.js';

/**
 * States of OcaTask object. State values change as a result of the
 * object's having received a comment or encountering processing events
 * (e.g. completion).
 */
export class OcaTaskState extends Enum({
  None: 0,
  NotPrepared: 1,
  Disabled: 2,
  Enabled: 3,
  Running: 4,
  Completed: 5,
  Failed: 6,
  Stopped: 7,
  Aborted: 8,
}) {}
