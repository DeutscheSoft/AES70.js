import { OcaPort } from '../../types/OcaPort';
import { IOcaPortID, OcaPortID } from '../../types/OcaPortID';
import { IOcaPortMode } from '../../types/OcaPortMode';
import { Arguments } from '../arguments';
import { PropertyEvent } from '../property_event';
import { RemoteDevice } from '../remote_device';
import { OcaRoot } from './OcaRoot';

/**
 * Abstract base class for classes that represent the device's application and support functions.
 * @extends OcaRoot
 * @class OcaWorker
 */
export declare class OcaWorker extends OcaRoot {
  /**
   * This event is emitted whenever Enabled changes.
   */
  OnEnabledChanged: PropertyEvent<boolean>;

  /**
   * This event is emitted whenever Ports changes.
   */
  OnPortsChanged: PropertyEvent<OcaPort[]>;

  /**
   * This event is emitted whenever Label changes.
   */
  OnLabelChanged: PropertyEvent<string>;

  /**
   * This event is emitted whenever Owner changes.
   */
  OnOwnerChanged: PropertyEvent<number>;

  /**
   * This event is emitted whenever Latency changes.
   */
  OnLatencyChanged: PropertyEvent<number>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the value of the Enabled property. The return value indicates whether the property was successfully retrieved.
   *
   * @method OcaWorker#GetEnabled
   * @returns {Promise<boolean>}
   *   A promise which resolves to a single value of type ``boolean``.
   */
  GetEnabled(): Promise<boolean>;

  /**
   * Sets the value of the Enabled property. The return value indicates whether the property was successfully set.
   *
   * @method OcaWorker#SetEnabled
   * @param {boolean} enabled
   *
   * @returns {Promise<void>}
   */
  SetEnabled(enabled: boolean): Promise<void>;

  /**
   * Adds an input or output port.. The return value indicates whether the port was successfully added.
   *
   * @method OcaWorker#AddPort
   * @param {string} Label
   * @param {IOcaPortMode} Mode
   *
   * @returns {Promise<OcaPortID>}
   *   A promise which resolves to a single value of type :class:`OcaPortID`.
   */
  AddPort(Label: string, Mode: IOcaPortMode): Promise<OcaPortID>;

  /**
   * Deletes an input or output port.. The return value indicates whether the port was successfully deleted.
   *
   * @method OcaWorker#DeletePort
   * @param {IOcaPortID} ID
   *
   * @returns {Promise<void>}
   */
  DeletePort(ID: IOcaPortID): Promise<void>;

  /**
   * Gets the list of ports owned by the Worker object. The return value indicates whether the list was successfully retrieved.
   *
   * @method OcaWorker#GetPorts
   * @returns {Promise<OcaPort[]>}
   *   A promise which resolves to a single value of type ``OcaPort[]``.
   */
  GetPorts(): Promise<OcaPort[]>;

  /**
   * Gets the name of the designated port. The return value indicates whether the name was successfully retrieved.
   *
   * @method OcaWorker#GetPortName
   * @param {IOcaPortID} PortID
   *
   * @returns {Promise<string>}
   *   A promise which resolves to a single value of type ``string``.
   */
  GetPortName(PortID: IOcaPortID): Promise<string>;

  /**
   * Sets the name of the designated port. The return value indicates whether the name was successfully set.
   *
   * @method OcaWorker#SetPortName
   * @param {IOcaPortID} PortID
   * @param {string} Name
   *
   * @returns {Promise<void>}
   */
  SetPortName(PortID: IOcaPortID, Name: string): Promise<void>;

  /**
   * Gets the value of the Label property. The return value indicates whether the property was successfully retrieved.
   *
   * @method OcaWorker#GetLabel
   * @returns {Promise<string>}
   *   A promise which resolves to a single value of type ``string``.
   */
  GetLabel(): Promise<string>;

  /**
   * Sets the value of the Label property. The return value indicates whether the property was successfully set.
   *
   * @method OcaWorker#SetLabel
   * @param {string} label
   *
   * @returns {Promise<void>}
   */
  SetLabel(label: string): Promise<void>;

  /**
   * Gets the value of the Owner property. The return value indicates whether the property was successfully retrieved.
   *
   * @method OcaWorker#GetOwner
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetOwner(): Promise<number>;

  /**
   * Gets the value of the Latency property. The return value indicates whether the property was successfully retrieved.
   *
   * @method OcaWorker#GetLatency
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetLatency(): Promise<number>;

  /**
   * Sets the value of the Latency property. The return value indicates whether the property was successfully set.
   *
   * @method OcaWorker#SetLatency
   * @param {number} latency
   *
   * @returns {Promise<void>}
   */
  SetLatency(latency: number): Promise<void>;

  /**
   * Returns path from the given object down to root. The return value indicates whether the operation succeeded. Added in version 2.
   * The return values of this method are
   *
   * - NamePath of type ``string[]``
   * - ONoPath of type ``number[]``
   *
   * @method OcaWorker#GetPath
   * @returns {Promise<Arguments<string[],number[]>>}
   */
  GetPath(): Promise<Arguments<[string[], number[]]>>;
}
