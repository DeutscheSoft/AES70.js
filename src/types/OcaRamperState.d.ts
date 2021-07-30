/*
 * This file has been generated.
 */
/**
 * States of the ramper. Here are the rules for ramper state change:
 *
 *  - A freshly-constructed ramper's state is  **NotInitialized** .
 *
 *
 *  - A ramper becomes  **Initialized**  when : The ramper is  **NotInitialized** ; AND  **TargetProperty**  has been set to a valid value; AND  **Goal**  has been set; AND  **Duration**  has been set.
 *
 *
 *  - A ramper becomes  **Scheduled**  when It is  **Initialized** ; AND  **T**  **start**  and  **TimeMode**  have been set; AND (Tstart +  **Duration** ) is in the future.
 *
 *
 *  - A ramper becomes  **Enabled**  when it is  **Scheduled**  AND receives an  *Enable* command.
 *
 *
 *  - A ramper becomes  **Ramping**  when: It is  **Enabled**  and the ramp start time is reached; OR It is  **Initialized** ,  **Scheduled** , or  **Enabled**  and a  *Start*  command is received.
 *
 *
 *  - Completion of a ramp or Receipt of a  *Halt*  command causes the state to become:  **Scheduled** , if Tstart, Time Mode have been set; AND (Tstart + Duration) is in the future. Otherwise,  **Initialized.**
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
  static Iniitialized: OcaRamperState;
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
  | 'Iniitialized'
  | 'Scheduled'
  | 'Enabled'
  | 'Ramping'
  | 1
  | 2
  | 3
  | 4
  | 5;
