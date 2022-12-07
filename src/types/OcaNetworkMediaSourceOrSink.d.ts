/*
 * This file has been generated.
 */
/**
 * enum that describes whether a port is a source (= sends program into the
 * network; "talker") or sink (=receives program from the network; "listener")
 * @class OcaNetworkMediaSourceOrSink
 */
export class OcaNetworkMediaSourceOrSink {
  /**
   * Singleton object corresponding to the entry with value ``0``.
   */
  static None: OcaNetworkMediaSourceOrSink;
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static Source: OcaNetworkMediaSourceOrSink;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static Sink: OcaNetworkMediaSourceOrSink;

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

export type IOcaNetworkMediaSourceOrSink =
  | OcaNetworkMediaSourceOrSink
  | 'None'
  | 'Source'
  | 'Sink'
  | 0
  | 1
  | 2;
