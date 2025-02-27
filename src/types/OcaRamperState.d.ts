/*
 * This file has been generated.
 */
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
export class OcaRamperState {
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static NotInitialized: OcaRamperState;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static Initialized: OcaRamperState;
  /**
   * Singleton object corresponding to the entry with value ``3``.
   */
  static Scheduled: OcaRamperState;
  /**
   * Singleton object corresponding to the entry with value ``4``.
   */
  static Enabled: OcaRamperState;
  /**
   * Singleton object corresponding to the entry with value ``5``.
   */
  static Ramping: OcaRamperState;

  /**
   * Returns the numeric value of this enum entry.
   */
  valueOf(): number;

  /**
   * Returns the string representation of this enum entry.
   */
  toString(): string;

  /**
   * Returns the name of an enum entry.
   */
  static getName(value: number): string;

  /**
   * Returns the value of an enum entry name.
   */
  static getValue(name: string): number;
}

export type IOcaRamperState =
  | OcaRamperState
  | 'NotInitialized'
  | 'Initialized'
  | 'Scheduled'
  | 'Enabled'
  | 'Ramping'
  | 1
  | 2
  | 3
  | 4
  | 5;
