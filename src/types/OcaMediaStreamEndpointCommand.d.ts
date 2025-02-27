/*
 * This file has been generated.
 */
/**
 * Command values for **OcaMediaTransportApplication.ApplyEndpointCommand(...)**
 * @class OcaMediaStreamEndpointCommand
 */
export class OcaMediaStreamEndpointCommand {
  /**
   * Singleton object corresponding to the entry with value ``0``.
   */
  static None: OcaMediaStreamEndpointCommand;
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static SetReady: OcaMediaStreamEndpointCommand;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static Connect: OcaMediaStreamEndpointCommand;
  /**
   * Singleton object corresponding to the entry with value ``3``.
   */
  static ConnectAndStart: OcaMediaStreamEndpointCommand;
  /**
   * Singleton object corresponding to the entry with value ``4``.
   */
  static Disconnect: OcaMediaStreamEndpointCommand;
  /**
   * Singleton object corresponding to the entry with value ``5``.
   */
  static StopAndDisconnect: OcaMediaStreamEndpointCommand;
  /**
   * Singleton object corresponding to the entry with value ``6``.
   */
  static Start: OcaMediaStreamEndpointCommand;
  /**
   * Singleton object corresponding to the entry with value ``7``.
   */
  static Stop: OcaMediaStreamEndpointCommand;

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

export type IOcaMediaStreamEndpointCommand =
  | OcaMediaStreamEndpointCommand
  | 'None'
  | 'SetReady'
  | 'Connect'
  | 'ConnectAndStart'
  | 'Disconnect'
  | 'StopAndDisconnect'
  | 'Start'
  | 'Stop'
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7;
