/*
 * This file has been generated.
 */
import { Enum } from './Enum.js';

/**
 * States of the Ramper . Here are the rules for Ramper state changes:
 *
 *  - A freshly-constructed Ramper's state shall be **NotInitialized**.
 *
 *  - A Ramper's state shall become **Initialized** when: Its state is
 *    **NotInitialized,** AND ** TargetProperty** has been set to a valid value,
 *    AND ** Goal** has been set, AND ** Duration** has been set.
 *
 *  - A Ramper's state shall become **Scheduled** when: It is **Initialized,**
 *    AND **StartWhen** has been set, AND The given start time + **Duration** is
 *    in the future.
 *
 *  - A Ramper's state shall become **Enabled** when: Its state is
 *    **Scheduled,** AND It receives an **Enable **command.
 *
 *  - A Ramper's state shall become **Ramping** when: It is **Enabled** and the
 *    ramp start time is reached, OR It is **Initialized**, **Scheduled**, or
 *    **Enabled** and a **Start** command is received.
 *
 *  - When a ramp operation completes, or when **Halt** command is received: -
 *    The Ramper's state shall become **Scheduled**, when: **StartWhen** has
 *    been set, AND The given start time + **Duration** is in the future. -
 *    Otherwise, the Ramper's state shall become **Initialized.**
 *
 *
 * @class OcaRamperState
 */
export class OcaRamperState extends Enum({
  NotInitialized: 1,
  Initialized: 2,
  Scheduled: 3,
  Enabled: 4,
  Ramping: 5,
}) {}

/**
 * Singleton object corresponding to the entry with value ``1``.
 * @type {OcaRamperState}
 * @member NotInitialized
 * @memberof OcaRamperState
 * @static
 */
/**
 * Singleton object corresponding to the entry with value ``2``.
 * @type {OcaRamperState}
 * @member Initialized
 * @memberof OcaRamperState
 * @static
 */
/**
 * Singleton object corresponding to the entry with value ``3``.
 * @type {OcaRamperState}
 * @member Scheduled
 * @memberof OcaRamperState
 * @static
 */
/**
 * Singleton object corresponding to the entry with value ``4``.
 * @type {OcaRamperState}
 * @member Enabled
 * @memberof OcaRamperState
 * @static
 */
/**
 * Singleton object corresponding to the entry with value ``5``.
 * @type {OcaRamperState}
 * @member Ramping
 * @memberof OcaRamperState
 * @static
 */
