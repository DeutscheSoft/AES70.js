/*
 * This file has been generated.
 */
/**
 * State of a stream endpoint.
 * @class OcaMediaStreamEndpointState
 */
export class OcaMediaStreamEndpointState {
  /**
   * Singleton object corresponding to the entry with value ``0``.
   */
  static Unknown: OcaMediaStreamEndpointState;
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static NotReady: OcaMediaStreamEndpointState;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static Ready: OcaMediaStreamEndpointState;
  /**
   * Singleton object corresponding to the entry with value ``3``.
   */
  static Connected: OcaMediaStreamEndpointState;
  /**
   * Singleton object corresponding to the entry with value ``4``.
   */
  static Running: OcaMediaStreamEndpointState;
  /**
   * Singleton object corresponding to the entry with value ``5``.
   */
  static ErrorHalt: OcaMediaStreamEndpointState;

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

export type IOcaMediaStreamEndpointState =
  | OcaMediaStreamEndpointState
  | 'Unknown'
  | 'NotReady'
  | 'Ready'
  | 'Connected'
  | 'Running'
  | 'ErrorHalt'
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5;
