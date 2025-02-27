/*
 * This file has been generated.
 */
/**
 * Select mode of **OcaGrouper**: hierarchical or peer-to-peer. **Deprecated**
 * in AES70-2024.
 * @class OcaGrouperMode
 */
export class OcaGrouperMode {
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static Hierarchical: OcaGrouperMode;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static PeerToPeer: OcaGrouperMode;

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

export type IOcaGrouperMode =
  | OcaGrouperMode
  | 'Hierarchical'
  | 'PeerToPeer'
  | 1
  | 2;
