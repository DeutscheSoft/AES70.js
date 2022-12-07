/*
 * This file has been generated.
 */
/**
 * Select mode of **OcaGrouper**: master-slave or peer-to-peer
 * @class OcaGrouperMode
 */
export class OcaGrouperMode {
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static MasterSlave: OcaGrouperMode;
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
  | 'MasterSlave'
  | 'PeerToPeer'
  | 1
  | 2;
