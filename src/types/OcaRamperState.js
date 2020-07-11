/*
 * This file has been generated.
 */
import { Enum } from './Enum.js';

/**
 * States of the ramper. Here are the rules for ramper state change: <ul>
 * <li>A freshly-constructed ramper's state is <b>NotInitialized</b>.
 * </li> </ul> <ul> <li>A ramper becomes <b>Initialized</b> when : The
 * ramper is <b>NotInitialized</b>; AND <b> TargetProperty</b> has been
 * set to a valid value; AND <b> Goal</b> has been set; AND <b>
 * Duration</b> has been set. </li> </ul> <ul> <li>A ramper becomes
 * <b>Scheduled</b> when It is <b>Initialized</b>; AND
 * <b>T</b><b><sub>start</sub></b> and <b>TimeMode</b> have been set; AND
 * (T<sub>start</sub> + <b>Duration</b>) is in the future. </li> </ul>
 * <ul> <li>A ramper becomes <b>Enabled</b> when it is <b>Scheduled</b>
 * AND receives an <i>Enable </i>command. </li> </ul> <ul> <li>A ramper
 * becomes <b>Ramping</b> when: It is <b>Enabled</b> and the ramp start
 * time is reached; OR It is <b>Initialized</b>, <b>Scheduled</b>, or
 * <b>Enabled</b> and a <i>Start</i> command is received. </li> </ul>
 * <ul> <li>Completion of a ramp or Receipt of a <i>Halt</i> command
 * causes the state to become: <b>Scheduled</b>, if T<sub>start</sub>,
 * Time Mode have been set; AND (T<sub>start</sub> + Duration) is in the
 * future. Otherwise, <b>Initialized.</b></li> </ul>
 */
export class OcaRamperState extends Enum({
  NotInitialized: 1,
  Iniitialized: 2,
  Scheduled: 3,
  Enabled: 4,
  Ramping: 5,
}) {}
