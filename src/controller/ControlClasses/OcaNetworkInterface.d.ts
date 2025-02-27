import { OcaCounter } from '../../types/OcaCounter';
import { OcaCounterSet } from '../../types/OcaCounterSet';
import { IOcaNetworkInterfaceCommand } from '../../types/OcaNetworkInterfaceCommand';
import { OcaNetworkInterfaceStatus } from '../../types/OcaNetworkInterfaceStatus';
import { Arguments } from '../arguments';
import { PropertyEvent } from '../property_event';
import { RemoteDevice } from '../remote_device';
import { OcaRoot } from './OcaRoot';

/**
 * Represents the device's connection to a data network.
 * @extends OcaRoot
 * @class OcaNetworkInterface
 */
export declare class OcaNetworkInterface extends OcaRoot {
  /**
   * This event is emitted whenever Label changes.
   */
  OnLabelChanged: PropertyEvent<string>;

  /**
   * This event is emitted whenever Enabled changes.
   */
  OnEnabledChanged: PropertyEvent<boolean>;

  /**
   * This event is emitted whenever SystemIoInterfaceName changes.
   */
  OnSystemIoInterfaceNameChanged: PropertyEvent<string>;

  /**
   * This event is emitted whenever GroupID changes.
   */
  OnGroupIDChanged: PropertyEvent<number>;

  /**
   * This event is emitted whenever Precedence changes.
   */
  OnPrecedenceChanged: PropertyEvent<number>;

  /**
   * This event is emitted whenever AdaptationIdentifier changes.
   */
  OnAdaptationIdentifierChanged: PropertyEvent<string>;

  /**
   * This event is emitted whenever ActiveNetworkSettings changes.
   */
  OnActiveNetworkSettingsChanged: PropertyEvent<Uint8Array>;

  /**
   * This event is emitted whenever TargetNetworkSettings changes.
   */
  OnTargetNetworkSettingsChanged: PropertyEvent<Uint8Array>;

  /**
   * This event is emitted whenever NetworkSettingsPending changes.
   */
  OnNetworkSettingsPendingChanged: PropertyEvent<boolean>;

  /**
   * This event is emitted whenever Status changes.
   */
  OnStatusChanged: PropertyEvent<OcaNetworkInterfaceStatus>;

  /**
   * This event is emitted whenever ErrorCode changes.
   */
  OnErrorCodeChanged: PropertyEvent<number>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the value of the **Label** property.
   *
   * @method OcaNetworkInterface#GetLabel
   * @returns {Promise<string>}
   *   A promise which resolves to a single value of type ``string``.
   */
  GetLabel(): Promise<string>;

  /**
   * Sets the value of the **Label** property.
   *
   * @method OcaNetworkInterface#SetLabel
   * @param {string} Label
   *
   * @returns {Promise<void>}
   */
  SetLabel(Label: string): Promise<void>;

  /**
   * Gets the value of the **Owner** property.
   *
   * @method OcaNetworkInterface#GetOwner
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetOwner(): Promise<number>;

  /**
   * Returns Role Path and ONo Path from the Root Block to this object. The
   * return value indicates whether the operation succeeded.
   * The return values of this method are
   *
   * - RolePath of type ``string[]``
   * - ONoPath of type ``number[]``
   *
   * @method OcaNetworkInterface#GetPath
   * @returns {Promise<Arguments<string[],number[]>>}
   */
  GetPath(): Promise<Arguments<[string[], number[]]>>;

  /**
   * Gets the value of the **Enabled** property.
   *
   * @method OcaNetworkInterface#GetEnabled
   * @returns {Promise<boolean>}
   *   A promise which resolves to a single value of type ``boolean``.
   */
  GetEnabled(): Promise<boolean>;

  /**
   * Sets the value of the **Enabled** property.
   *
   * @method OcaNetworkInterface#SetEnabled
   * @param {boolean} Enabled
   *
   * @returns {Promise<void>}
   */
  SetEnabled(Enabled: boolean): Promise<void>;

  /**
   * Gets the system I/O interface name.
   *
   * @method OcaNetworkInterface#GetSystemIoInterfaceName
   * @returns {Promise<string>}
   *   A promise which resolves to a single value of type ``string``.
   */
  GetSystemIoInterfaceName(): Promise<string>;

  /**
   * Sets the system I/O interface name.
   *
   * @method OcaNetworkInterface#SetSystemIoInterfaceName
   * @param {string} Identifier
   *
   * @returns {Promise<void>}
   */
  SetSystemIoInterfaceName(Identifier: string): Promise<void>;

  /**
   * Gets the network group ID. Returns value of zero if this network does not
   * belong to a group.
   *
   * @method OcaNetworkInterface#GetGroupID
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetGroupID(): Promise<number>;

  /**
   * Sets the network group ID. An ID value of zero means this network interface
   * does not belong to a group.
   *
   * @method OcaNetworkInterface#SetGroupID
   * @param {number} Id
   *
   * @returns {Promise<void>}
   */
  SetGroupID(Id: number): Promise<void>;

  /**
   * Gets the value of the **Precedence** property.
   *
   * @method OcaNetworkInterface#GetPrecedence
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetPrecedence(): Promise<number>;

  /**
   * Sets the value of the **Precedence** property.
   *
   * @method OcaNetworkInterface#SetPrecedence
   * @param {number} Precedence
   *
   * @returns {Promise<void>}
   */
  SetPrecedence(Precedence: number): Promise<void>;

  /**
   * Gets the identifier of the Adaptation this network object implements.
   *
   * @method OcaNetworkInterface#GetAdaptationIdentifier
   * @returns {Promise<string>}
   *   A promise which resolves to a single value of type ``string``.
   */
  GetAdaptationIdentifier(): Promise<string>;

  /**
   * Gets the value of property **ActiveNetworkSettings.**
   *
   * @method OcaNetworkInterface#GetActiveNetworkSettings
   * @returns {Promise<Uint8Array>}
   *   A promise which resolves to a single value of type ``Uint8Array``.
   */
  GetActiveNetworkSettings(): Promise<Uint8Array>;

  /**
   * Gets the value of property **TargetNetworkSettings.**
   *
   * @method OcaNetworkInterface#GetTargetNetworkSettings
   * @returns {Promise<Uint8Array>}
   *   A promise which resolves to a single value of type ``Uint8Array``.
   */
  GetTargetNetworkSettings(): Promise<Uint8Array>;

  /**
   * Sets the value of property **TargetNetworkSettings.**
   *
   * @method OcaNetworkInterface#SetTargetNetworkSettings
   * @param {Uint8Array} Settings
   *
   * @returns {Promise<void>}
   */
  SetTargetNetworkSettings(Settings: Uint8Array): Promise<void>;

  /**
   * Gets the value of property **NetworkSettingsPending.**
   *
   * @method OcaNetworkInterface#GetNetworkSettingsPending
   * @returns {Promise<boolean>}
   *   A promise which resolves to a single value of type ``boolean``.
   */
  GetNetworkSettingsPending(): Promise<boolean>;

  /**
   * Gets the network's operational status.
   *
   * @method OcaNetworkInterface#GetStatus
   * @returns {Promise<OcaNetworkInterfaceStatus>}
   *   A promise which resolves to a single value of type :class:`OcaNetworkInterfaceStatus`.
   */
  GetStatus(): Promise<OcaNetworkInterfaceStatus>;

  /**
   * Gets the most recent error code.
   *
   * @method OcaNetworkInterface#GetErrorCode
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetErrorCode(): Promise<number>;

  /**
   * Get this object's CounterSet.
   *
   * @method OcaNetworkInterface#GetCounterSet
   * @returns {Promise<OcaCounterSet>}
   *   A promise which resolves to a single value of type :class:`OcaCounterSet`.
   */
  GetCounterSet(): Promise<OcaCounterSet>;

  /**
   * Gets the given counter from this object's CounterSet.
   *
   * @method OcaNetworkInterface#GetCounter
   * @param {number} CounterID
   *
   * @returns {Promise<OcaCounter>}
   *   A promise which resolves to a single value of type :class:`OcaCounter`.
   */
  GetCounter(CounterID: number): Promise<OcaCounter>;

  /**
   * Adds a notifier **ONo** to the **Notifiers** property of the designated
   * counter.
   *
   * @method OcaNetworkInterface#AttachCounterNotifier
   * @param {number} CounterID
   * @param {number} ONo
   *
   * @returns {Promise<void>}
   */
  AttachCounterNotifier(CounterID: number, ONo: number): Promise<void>;

  /**
   * Removes given notifier ONo from the **Notifiers** property of the
   * designated counter.
   *
   * @method OcaNetworkInterface#DetachCounterNotifier
   * @param {number} CounterID
   * @param {number} ONo
   *
   * @returns {Promise<void>}
   */
  DetachCounterNotifier(CounterID: number, ONo: number): Promise<void>;

  /**
   * Resets this object's counterset. Sets all counters to their specified
   * default values.
   *
   * @method OcaNetworkInterface#ResetCounters
   * @returns {Promise<void>}
   */
  ResetCounters(): Promise<void>;

  /**
   * Controls the network interface.
   *
   * @method OcaNetworkInterface#ApplyCommand
   * @param {IOcaNetworkInterfaceCommand} Command
   *
   * @returns {Promise<void>}
   */
  ApplyCommand(Command: IOcaNetworkInterfaceCommand): Promise<void>;
}
