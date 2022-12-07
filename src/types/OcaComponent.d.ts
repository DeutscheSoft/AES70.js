/*
 * This file has been generated.
 */
/**
 * Enumeration (16-bit) for of software & firmware components in the device.
 * Except for the boot loader, all other values of this enum are device-specific
 * and will be specified by subclassing this class.
 * @class OcaComponent
 */
export class OcaComponent {
  /**
   * Singleton object corresponding to the entry with value ``0``.
   */
  static BootLoader: OcaComponent;

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

export type IOcaComponent = OcaComponent | 'BootLoader' | 0;
