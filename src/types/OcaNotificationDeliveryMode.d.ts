/*
 * This file has been generated.
 */
/**
 * Enum for subscriptions that specifies whether its notification messages are
 * to be delivered by reliable means (e.g. TCP) or fast means (e.g. UDP).
 * @class OcaNotificationDeliveryMode
 */
export class OcaNotificationDeliveryMode {
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static Reliable: OcaNotificationDeliveryMode;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static Fast: OcaNotificationDeliveryMode;

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

export type IOcaNotificationDeliveryMode =
  | OcaNotificationDeliveryMode
  | 'Reliable'
  | 'Fast'
  | 1
  | 2;
