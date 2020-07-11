/*
 * This file has been generated.
 */
import { Enum } from './Enum.js';

/**
 * Enumeration defining the power states that OCA devices can be in. The
 * state is returned by the device's Power Manager on request.
 */
export class OcaPowerState extends Enum({
  None: 0,
  Working: 1,
  Standby: 2,
  Off: 3,
}) {}
