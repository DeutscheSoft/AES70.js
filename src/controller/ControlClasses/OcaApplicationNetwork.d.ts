import { IOcaApplicationNetworkCommand } from '../../types/OcaApplicationNetworkCommand';
import { OcaApplicationNetworkState } from '../../types/OcaApplicationNetworkState';
import { Arguments } from '../arguments';
import { PropertyEvent } from '../property_event';
import { RemoteDevice } from '../remote_device';
import { OcaRoot } from './OcaRoot';

/**
 * Abstract base class from which the application network classes inherit.
 * @extends OcaRoot
 * @class OcaApplicationNetwork
 */
export declare class OcaApplicationNetwork extends OcaRoot {
  /**
   * This event is emitted whenever ServiceID changes.
   */
  OnServiceIDChanged: PropertyEvent<Uint8Array>;

  /**
   * This event is emitted whenever SystemInterfaces changes.
   */
  OnSystemInterfacesChanged: PropertyEvent<Uint8Array[]>;

  /**
   * This event is emitted whenever State changes.
   */
  OnStateChanged: PropertyEvent<OcaApplicationNetworkState>;

  /**
   * This event is emitted whenever ErrorCode changes.
   */
  OnErrorCodeChanged: PropertyEvent<number>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the network's user-specified label. Return status indicates whether
   * the operation was successful.
   *
   * @method OcaApplicationNetwork#GetLabel
   * @returns {Promise<string>}
   *   A promise which resolves to a single value of type ``string``.
   */
  GetLabel(): Promise<string>;

  /**
   * Sets the network's user-specified label. Return status indicates whether
   * the operation was successful.
   *
   * @method OcaApplicationNetwork#SetLabel
   * @param {string} Label
   *
   * @returns {Promise<void>}
   */
  SetLabel(Label: string): Promise<void>;

  /**
   * Gets the ONo of this network's containing block. Return status indicates
   * whether the operation was successful.
   *
   * @method OcaApplicationNetwork#GetOwner
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetOwner(): Promise<number>;

  /**
   * Gets the network's IDAdvertised. Return status indicates whether the
   * operation was successful.
   *
   * @method OcaApplicationNetwork#GetServiceID
   * @returns {Promise<Uint8Array>}
   *   A promise which resolves to a single value of type ``Uint8Array``.
   */
  GetServiceID(): Promise<Uint8Array>;

  /**
   * Sets the network's IDAdvertised. Return status indicates whether the
   * operation was successful.
   *
   * @method OcaApplicationNetwork#SetServiceID
   * @param {Uint8Array} Name
   *
   * @returns {Promise<void>}
   */
  SetServiceID(Name: Uint8Array): Promise<void>;

  /**
   * Retrieves the list of this network's system interface descriptor. Return
   * status indicates whether the list was successfully retrieved.
   *
   * @method OcaApplicationNetwork#GetSystemInterfaces
   * @returns {Promise<Uint8Array[]>}
   *   A promise which resolves to a single value of type ``Uint8Array[]``.
   */
  GetSystemInterfaces(): Promise<Uint8Array[]>;

  /**
   * Sets the network's System Interface Descriptor(s). Return status indicates
   * whether the operation was successful. Optional method; System Interface
   * Descriptor may be set at construction time.
   *
   * @method OcaApplicationNetwork#SetSystemInterfaces
   * @param {Uint8Array[]} Descriptors
   *
   * @returns {Promise<void>}
   */
  SetSystemInterfaces(Descriptors: Uint8Array[]): Promise<void>;

  /**
   * Retrieves the network's state. Return status indicates whether the status
   * was successfully retrieved.
   *
   * @method OcaApplicationNetwork#GetState
   * @returns {Promise<OcaApplicationNetworkState>}
   *   A promise which resolves to a single value of type :class:`OcaApplicationNetworkState`.
   */
  GetState(): Promise<OcaApplicationNetworkState>;

  /**
   * Retrieves the most recent error code. Return status indicates whether the
   * operation was successful. Note that a second parameter 'Reset' is removed
   * in v02 of this class.
   *
   * @method OcaApplicationNetwork#GetErrorCode
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetErrorCode(): Promise<number>;

  /**
   * Control the application network. Return value indicates success of command
   * execution.
   *
   * @method OcaApplicationNetwork#Control
   * @param {IOcaApplicationNetworkCommand} Command
   *
   * @returns {Promise<void>}
   */
  Control(Command: IOcaApplicationNetworkCommand): Promise<void>;

  /**
   * Returns Role Path and ONo Path from the Root Block to this object. The
   * return value indicates whether the operation succeeded.
   * The return values of this method are
   *
   * - RolePath of type ``string[]``
   * - ONoPath of type ``number[]``
   *
   * @method OcaApplicationNetwork#GetPath
   * @returns {Promise<Arguments<string[],number[]>>}
   */
  GetPath(): Promise<Arguments<[string[], number[]]>>;
}
