/*
 * This file has been generated.
 */
/**
 * Enum describing  **OcaSubscriptionManager**  states.
 * @class OcaSubscriptionManagerState
 */
export class OcaSubscriptionManagerState {
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static Normal: OcaSubscriptionManagerState;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static EventsDisabled: OcaSubscriptionManagerState;

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

export type IOcaSubscriptionManagerState =
  | OcaSubscriptionManagerState
  | 'Normal'
  | 'EventsDisabled'
  | 1
  | 2;
