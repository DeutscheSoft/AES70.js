export class OcaNotificationExceptionType {
  static Unspecified: OcaNotificationExceptionType;
  // Device canceled subscription
  static CanceledByDevice: OcaNotificationExceptionType;
  // Object was deleted
  static ObjectDeleted: OcaNotificationExceptionType;
  // Something went wrong in the Device.
  static DeviceError: OcaNotificationExceptionType;

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

export declare class NotificationError extends Error {
  notification: unknown;
  type: OcaNotificationExceptionType;
  try_again: boolean;
  data: ArrayBuffer | null;

  constructor(notification: unknown);

  is_object_deleted(): boolean;
}
