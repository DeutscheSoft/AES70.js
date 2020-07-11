/*
 * This file has been generated.
 */
import { Enum } from './Enum.js';

/**
 * Enum that describes whether an <b>OcaSensor</b>'s current reading
 * value can be trusted, and if not, why not.
 */
export class OcaSensorReadingState extends Enum({
  Unknown: 0,
  Valid: 1,
  Underrange: 2,
  Overrange: 3,
  Error: 4,
}) {}
