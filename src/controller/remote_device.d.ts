import { ClientConnection } from './client_connection';
import { Events } from '../events';

import { ObjectBase } from './object_base';

import { OcaDeviceManager } from './ControlClasses/OcaDeviceManager';
import { OcaSecurityManager } from './ControlClasses/OcaSecurityManager';
import { OcaFirmwareManager } from './ControlClasses/OcaFirmwareManager';
import { OcaSubscriptionManager } from './ControlClasses/OcaSubscriptionManager';
import { OcaPowerManager } from './ControlClasses/OcaPowerManager';
import { OcaNetworkManager } from './ControlClasses/OcaNetworkManager';
import { OcaMediaClockManager } from './ControlClasses/OcaMediaClockManager';
import { OcaLibraryManager } from './ControlClasses/OcaLibraryManager';
import { OcaAudioProcessingManager } from './ControlClasses/OcaAudioProcessingManager';
import { OcaDeviceTimeManager } from './ControlClasses/OcaDeviceTimeManager';
import { OcaTaskManager } from './ControlClasses/OcaTaskManager';
import { OcaCodingManager } from './ControlClasses/OcaCodingManager';
import { OcaDiagnosticManager } from './ControlClasses/OcaDiagnosticManager';
import { OcaBlock } from './ControlClasses/OcaBlock';

type DeviceTreeNode = ObjectBase | DeviceTreeNode[];
type DeviceTree = DeviceTreeNode[];

/**
 * Controller class for a remote OCA device.
 *
 * This is the entry point for any interaction with a remote device.
 * Can be used to query the available object tree, or interact with the manager
 * classes.
 */
export declare class RemoteDevice extends Events {
  /**
   * The device manager object.
   */
  DeviceManager: OcaDeviceManager;

  /**
   * The Security manager object.
   */
  SecurityManager: OcaSecurityManager;

  /**
   * The Firmware manager object.
   */
  FirmwareManager: OcaFirmwareManager;

  /**
   * The Subscription manager object.
   */
  SubscriptionManager: OcaSubscriptionManager;

  /**
   * The Power manager object.
   */
  PowerManager: OcaPowerManager;

  /**
   * The Network manager object.
   */
  NetworkManager: OcaNetworkManager;

  /**
   * The MediaClock manager object.
   */
  MediaClockManager: OcaMediaClockManager;

  /**
   * The Library manager object.
   */
  LibraryManager: OcaLibraryManager;

  /**
   * The AudioProcessing manager object.
   */
  AudioProcessingManager: OcaAudioProcessingManager;

  /**
   * The DeviceTime manager object.
   */
  DeviceTimeManager: OcaDeviceTimeManager;

  /**
   * The Task manager object.
   */
  TaskManager: OcaTaskManager;

  /**
   * The Coding manager object.
   */
  CodingManager: OcaCodingManager;

  /**
   * The Diagnostic manager object.
   */
  DiagnosticManager: OcaDiagnosticManager;

  /**
   * The Root block.
   */
  Root: OcaBlock;

  constructor(connection: ClientConnection);

  /**
   * Discovers the device object tree. This are all objects starting at the Root
   * block. It returns a recursive structure of arrays which contains all
   * objects contained in this device. Object of type ``OcaBlock`` are followed
   * by an array of their children.
   */
  get_device_tree(): Promise<DeviceTree>;

  /**
   * Returns a map of role paths to objects. This is a convenience function
   * which internally calls get_device_tree and then tree_to_rolemap.
   * If more than one object has the same role name on the same tree level,
   * their role names will be appended with numbers starting at 1.
   *
   * @param {String} [separator='/'] Optional argument used as a separator
   *                                 for levels in the tree.
   * @returns {Promise<Map<string, ObjectBase>>} The map of role paths to control
   *                                        objects.
   */
  get_role_map(separator?: string): Promise<Map<string, ObjectBase>>;

  /**
   * Set the keepalive interval.
   */
  set_keepalive_interval(seconds: number): void;
}
