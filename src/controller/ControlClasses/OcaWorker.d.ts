import { IOcaIODirection } from '../../types/OcaIODirection';
import { OcaPort } from '../../types/OcaPort';
import {
  IOcaPortClockMapEntry,
  OcaPortClockMapEntry,
} from '../../types/OcaPortClockMapEntry';
import { IOcaPortID, OcaPortID } from '../../types/OcaPortID';
import { Arguments } from '../arguments';
import { PropertyEvent } from '../property_event';
import { RemoteDevice } from '../remote_device';
import { OcaRoot } from './OcaRoot';

/**
 * Abstract base class for classes that represent the device's application and
 * support functions.
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
   * This event is emitted whenever Latency changes.
   */
  OnLatencyChanged: PropertyEvent<number>;

  /**
   * This event is emitted whenever PortClockMap changes.
   */
  OnPortClockMapChanged: PropertyEvent<Map<OcaPortID, OcaPortClockMapEntry>>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the value of the Enabled property.
   *
   * @method OcaWorker#GetEnabled
   * @returns {Promise<boolean>}
   *   A promise which resolves to a single value of type ``boolean``.
   */
  GetEnabled(): Promise<boolean>;

  /**
   * Sets the value of the Enabled property.
   *
   * @method OcaWorker#SetEnabled
   * @param {boolean} enabled
   *
   * @returns {Promise<void>}
   */
  SetEnabled(enabled: boolean): Promise<void>;

  /**
   * Adds an input or output port..
   *
   * @method OcaWorker#AddPort
   * @param {string} Name
   * @param {IOcaIODirection} Mode
   *
   * @returns {Promise<OcaPortID>}
   *   A promise which resolves to a single value of type :class:`OcaPortID`.
   */
  AddPort(Name: string, Mode: IOcaIODirection): Promise<OcaPortID>;

  /**
   * Deletes an input or output port..
   *
   * @method OcaWorker#DeletePort
   * @param {IOcaPortID} ID
   *
   * @returns {Promise<void>}
   */
  DeletePort(ID: IOcaPortID): Promise<void>;

  /**
   * Gets the list of ports owned by the Worker object.
   *
   * @method OcaWorker#GetPorts
   * @returns {Promise<OcaPort[]>}
   *   A promise which resolves to a single value of type :class:`OcaPort[]`.
   */
  GetPorts(): Promise<OcaPort[]>;

  /**
   * Gets the name of the designated port.
   *
   * @method OcaWorker#GetPortName
   * @param {IOcaPortID} PortID
   *
   * @returns {Promise<string>}
   *   A promise which resolves to a single value of type ``string``.
   */
  GetPortName(PortID: IOcaPortID): Promise<string>;

  /**
   * Sets the name of the designated port.
   *
   * @method OcaWorker#SetPortName
   * @param {IOcaPortID} ID
   * @param {string} Name
   *
   * @returns {Promise<void>}
   */
  SetPortName(ID: IOcaPortID, Name: string): Promise<void>;

  /**
   * Gets the value of the Label property.
   *
   * @method OcaWorker#GetLabel
   * @returns {Promise<string>}
   *   A promise which resolves to a single value of type ``string``.
   */
  GetLabel(): Promise<string>;

  /**
   * Sets the value of the Label property.
   *
   * @method OcaWorker#SetLabel
   * @param {string} label
   *
   * @returns {Promise<void>}
   */
  SetLabel(label: string): Promise<void>;

  /**
   * Gets the value of the Owner property.
   *
   * @method OcaWorker#GetOwner
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetOwner(): Promise<number>;

  /**
   * Gets the value of the Latency property.
   *
   * @method OcaWorker#GetLatency
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetLatency(): Promise<number>;

  /**
   * Sets the value of the Latency property.
   *
   * @method OcaWorker#SetLatency
   * @param {number} latency
   *
   * @returns {Promise<void>}
   */
  SetLatency(latency: number): Promise<void>;

  /**
   * Returns Role Path and ONo Path from the Root Block to this object. The
   * return value indicates whether the operation succeeded.
   * The return values of this method are
   *
   * - RolePath of type ``string[]``
   * - ONoPath of type ``number[]``
   *
   * @method OcaWorker#GetPath
   * @returns {Promise<Arguments<string[],number[]>>}
   */
  GetPath(): Promise<Arguments<[string[], number[]]>>;

  /**
   * Gets the value of the PortClockMap property.
   *
   * @method OcaWorker#GetPortClockMap
   * @returns {Promise<Map<OcaPortID, OcaPortClockMapEntry>>}
   *   A promise which resolves to a single value of type ``Map<OcaPortID, OcaPortClockMapEntry>``.
   */
  GetPortClockMap(): Promise<Map<OcaPortID, OcaPortClockMapEntry>>;

  /**
   * Sets the value of the PortClockMap property.
   *
   * @method OcaWorker#SetPortClockMap
   * @param {Map<IOcaPortID, IOcaPortClockMapEntry>} Map
   *
   * @returns {Promise<void>}
   */
  SetPortClockMap(Map: Map<IOcaPortID, IOcaPortClockMapEntry>): Promise<void>;

  /**
   * Gets the value of the PortClockMap entry identified by the given PortID.
   *
   * @method OcaWorker#GetPortClockMapEntry
   * @param {IOcaPortID} ID
   *
   * @returns {Promise<OcaPortClockMapEntry>}
   *   A promise which resolves to a single value of type :class:`OcaPortClockMapEntry`.
   */
  GetPortClockMapEntry(ID: IOcaPortID): Promise<OcaPortClockMapEntry>;

  /**
   * Sets an entry in the PortClockMap property. Adds entry if none already
   * exists for the given port; replaces entry if it does already exist.
   *
   * @method OcaWorker#SetPortClockMapEntry
   * @param {IOcaPortID} PortID
   * @param {IOcaPortClockMapEntry} Entry
   *
   * @returns {Promise<void>}
   */
  SetPortClockMapEntry(
    PortID: IOcaPortID,
    Entry: IOcaPortClockMapEntry
  ): Promise<void>;

  /**
   * Deletes PortClockMap entry identified by the given ID.
   *
   * @method OcaWorker#DeletePortClockMapEntry
   * @param {IOcaPortID} ID
   *
   * @returns {Promise<void>}
   */
  DeletePortClockMapEntry(ID: IOcaPortID): Promise<void>;
}
