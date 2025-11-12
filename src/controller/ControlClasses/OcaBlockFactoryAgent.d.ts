import { IOcaConstructionParameter } from '../../types/OcaConstructionParameter.js';
import {
  IOcaGlobalTypeIdentifier,
  OcaGlobalTypeIdentifier,
} from '../../types/OcaGlobalTypeIdentifier.js';
import { IOcaIODirection } from '../../types/OcaIODirection.js';
import { IOcaPortID, OcaPortID } from '../../types/OcaPortID.js';
import { OcaProtoObjectIdentification } from '../../types/OcaProtoObjectIdentification.js';
import { IOcaProtoPort, OcaProtoPort } from '../../types/OcaProtoPort.js';
import {
  IOcaProtoPortClockMapEntry,
  OcaProtoPortClockMapEntry,
} from '../../types/OcaProtoPortClockMapEntry.js';
import {
  IOcaProtoSignalPath,
  OcaProtoSignalPath,
} from '../../types/OcaProtoSignalPath.js';
import { PropertyEvent } from '../property_event.js';
import { RemoteDevice } from '../remote_device.js';
import { OcaAgent } from './OcaAgent.js';

/**
 * Create custom **OcaBlock** instances (*blocks*). Usable only in
 * reconfigurable devices. See [AES70-1](Constructing and deleting objects)] for
 * an overview.
 * @extends OcaAgent
 * @class OcaBlockFactoryAgent
 */
export declare class OcaBlockFactoryAgent extends OcaAgent {
  /**
   * This event is emitted whenever GlobalType changes.
   */
  OnGlobalTypeChanged: PropertyEvent<OcaGlobalTypeIdentifier>;

  /**
   * This event is emitted whenever ProtoActionObjects changes.
   */
  OnProtoActionObjectsChanged: PropertyEvent<OcaProtoObjectIdentification[]>;

  /**
   * This event is emitted whenever ProtoDatasetObjects changes.
   */
  OnProtoDatasetObjectsChanged: PropertyEvent<OcaProtoObjectIdentification[]>;

  /**
   * This event is emitted whenever ProtoBlockPorts changes.
   */
  OnProtoBlockPortsChanged: PropertyEvent<OcaProtoPort[]>;

  /**
   * This event is emitted whenever ProtoBlockPortClockMap changes.
   */
  OnProtoBlockPortClockMapChanged: PropertyEvent<
    Map<OcaPortID, OcaProtoPortClockMapEntry>
  >;

  /**
   * This event is emitted whenever ProtoSignalPaths changes.
   */
  OnProtoSignalPathsChanged: PropertyEvent<Map<number, OcaProtoSignalPath>>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the global type identifier for blocks created by this factory.
   *
   * @method OcaBlockFactoryAgent#GetGlobalType
   * @returns {Promise<OcaGlobalTypeIdentifier>}
   *   A promise which resolves to a single value of type :class:`OcaGlobalTypeIdentifier`.
   */
  GetGlobalType(): Promise<OcaGlobalTypeIdentifier>;

  /**
   * Sets the global type identifier for blocks created by this factory.
   *
   * @method OcaBlockFactoryAgent#SetGlobalType
   * @param {IOcaGlobalTypeIdentifier} GlobalType
   *
   * @returns {Promise<void>}
   */
  SetGlobalType(GlobalType: IOcaGlobalTypeIdentifier): Promise<void>;

  /**
   * Adds a Prototype Action Object of the given class to this Factory. The most
   * current version of the given class shall be used.
   *
   * @method OcaBlockFactoryAgent#AddProtoActionObject
   * @param {string} ClassIdentification
   * @param {IOcaConstructionParameter[]} ConstructionParameters
   *
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  AddProtoActionObject(
    ClassIdentification: string,
    ConstructionParameters: IOcaConstructionParameter[]
  ): Promise<number>;

  /**
   * Adds a Prototype nested Block to this Factory. When this Factory constructs
   * a Block, the nested Block will be constructed as well.
   *
   * @method OcaBlockFactoryAgent#AddProtoBlockUsingFactory
   * @param {number} FactoryONo
   *
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  AddProtoBlockUsingFactory(FactoryONo: number): Promise<number>;

  /**
   * Gets the Factory's list of Prototype Action Objects. Does not recurse
   * nested Prototype Blocks, if any.
   *
   * @method OcaBlockFactoryAgent#GetProtoActionObjects
   * @returns {Promise<OcaProtoObjectIdentification[]>}
   *   A promise which resolves to a single value of type :class:`OcaProtoObjectIdentification[]`.
   */
  GetProtoActionObjects(): Promise<OcaProtoObjectIdentification[]>;

  /**
   * Adds a Prototype Dataset Object of the given class to this Factory. The
   * most current version of the class shall be used.
   *
   * @method OcaBlockFactoryAgent#AddProtoDatasetObject
   * @param {string} ClassIdentification
   * @param {IOcaConstructionParameter[]} ConstructionParameters
   *
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  AddProtoDatasetObject(
    ClassIdentification: string,
    ConstructionParameters: IOcaConstructionParameter[]
  ): Promise<number>;

  /**
   * Gets the Factory's list of Prototype Dataset Objects. Does not recurse
   * nested Prototype Blocks.
   *
   * @method OcaBlockFactoryAgent#GetProtoDatasetObjects
   * @returns {Promise<OcaProtoObjectIdentification[]>}
   *   A promise which resolves to a single value of type :class:`OcaProtoObjectIdentification[]`.
   */
  GetProtoDatasetObjects(): Promise<OcaProtoObjectIdentification[]>;

  /**
   * Deletes a Prototype Action Object or Prototype Dataset Object from the
   * Factory. If the object being deleted is an Action Object, all Prototype
   * Signal Paths attached to it
   *
   * @method OcaBlockFactoryAgent#DeleteProtoMember
   * @param {number} ProtoObjectNumber
   *
   * @returns {Promise<void>}
   */
  DeleteProtoMember(ProtoObjectNumber: number): Promise<void>;

  /**
   * Gets the Factory's list of Prototype Block Ports.
   *
   * @method OcaBlockFactoryAgent#GetProtoBlockPorts
   * @returns {Promise<OcaProtoPort[]>}
   *   A promise which resolves to a single value of type :class:`OcaProtoPort[]`.
   */
  GetProtoBlockPorts(): Promise<OcaProtoPort[]>;

  /**
   * Sets the complete list of Prototype Block Ports. When the Factory
   * constructs a Block, it will create a Block Port in the Block for each
   * Prototype Block Port . Null list removes all Prototype Block Ports.
   *
   * @method OcaBlockFactoryAgent#SetProtoBlockPorts
   * @param {IOcaProtoPort[]} Ports
   *
   * @returns {Promise<void>}
   */
  SetProtoBlockPorts(Ports: IOcaProtoPort[]): Promise<void>;

  /**
   * Adds a single Prototype Block Port to the factory. If the identified
   * Prototype Block Port already exists in the Factory, it is replaced with the
   * one from this call.
   *
   * @method OcaBlockFactoryAgent#SetProtoBlockPort
   * @param {string} Name
   * @param {IOcaIODirection} PortMode
   *
   * @returns {Promise<OcaPortID>}
   *   A promise which resolves to a single value of type :class:`OcaPortID`.
   */
  SetProtoBlockPort(
    Name: string,
    PortMode: IOcaIODirection
  ): Promise<OcaPortID>;

  /**
   * If the method succeeds, deletes the designated Prototype Block Port from
   * the Factory.
   *
   * @method OcaBlockFactoryAgent#DeleteProtoBlockPort
   * @param {IOcaPortID} ProtoPortID
   *
   * @returns {Promise<void>}
   */
  DeleteProtoBlockPort(ProtoPortID: IOcaPortID): Promise<void>;

  /**
   * Gets the Factory's list of Prototype Signal Paths. Map key is Prototype
   * Signal Path ID.
   *
   * @method OcaBlockFactoryAgent#GetProtoSignalPaths
   * @returns {Promise<Map<number, OcaProtoSignalPath>>}
   *   A promise which resolves to a single value of type ``Map<number, OcaProtoSignalPath>``.
   */
  GetProtoSignalPaths(): Promise<Map<number, OcaProtoSignalPath>>;

  /**
   * Gets the Factory's list of Prototype Signal Paths. Map key is Prototype
   * Signal Path ID.
   *
   * @method OcaBlockFactoryAgent#SetProtoSignalPaths
   * @param {Map<number, IOcaProtoSignalPath>} SignalPaths
   *
   * @returns {Promise<void>}
   */
  SetProtoSignalPaths(
    SignalPaths: Map<number, IOcaProtoSignalPath>
  ): Promise<void>;

  /**
   * Adds or replaces a Prototype Signal Path in the Factory.
   *
   * @method OcaBlockFactoryAgent#SetProtoSignalPath
   * @param {IOcaProtoSignalPath} Path
   *
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  SetProtoSignalPath(Path: IOcaProtoSignalPath): Promise<number>;

  /**
   * Deletes a Prototype Signal Path from the Factory.
   *
   * @method OcaBlockFactoryAgent#DeleteProtoSignalPath
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  DeleteProtoSignalPath(): Promise<number>;

  /**
   * Gets the Prototype Block Port Clock Map.
   *
   * @method OcaBlockFactoryAgent#GetProtoBlockPortClockMap
   * @returns {Promise<Map<OcaPortID, OcaProtoPortClockMapEntry>>}
   *   A promise which resolves to a single value of type ``Map<OcaPortID, OcaProtoPortClockMapEntry>``.
   */
  GetProtoBlockPortClockMap(): Promise<
    Map<OcaPortID, OcaProtoPortClockMapEntry>
  >;

  /**
   * Sets the complete Prototype Block Port Clock Map. Null parameter clears the
   * map.
   *
   * @method OcaBlockFactoryAgent#SetProtoBlockPortClockMap
   * @param {Map<IOcaPortID, IOcaProtoPortClockMapEntry>} Map
   *
   * @returns {Promise<void>}
   */
  SetProtoBlockPortClockMap(
    Map: Map<IOcaPortID, IOcaProtoPortClockMapEntry>
  ): Promise<void>;

  /**
   * Adds or replaces an entry to the Factory's current Prototype Block Port
   * Clock Map
   *
   * @method OcaBlockFactoryAgent#SetProtoBlockPortClockMapEntry
   * @param {IOcaPortID} Port
   * @param {IOcaProtoPortClockMapEntry} MapEntry
   *
   * @returns {Promise<void>}
   */
  SetProtoBlockPortClockMapEntry(
    Port: IOcaPortID,
    MapEntry: IOcaProtoPortClockMapEntry
  ): Promise<void>;

  /**
   * Deletes an entry from the Prototype Block Port Clock Map.
   *
   * @method OcaBlockFactoryAgent#DeleteProtoBlockPortClockMapEntry
   * @param {IOcaPortID} PortID
   *
   * @returns {Promise<void>}
   */
  DeleteProtoBlockPortClockMapEntry(PortID: IOcaPortID): Promise<void>;
}
