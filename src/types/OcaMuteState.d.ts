/*
 * This file has been generated.
 */
/**
 * Mute states
 * @class OcaMuteState
 */
export class OcaMuteState {
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static Muted: OcaMuteState;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static Unmuted: OcaMuteState;

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

export type IOcaMuteState = OcaMuteState | 'Muted' | 'Unmuted' | 1 | 2;
