import { OcaConstructionParameter } from '../../OCP1/OcaConstructionParameter.js';
import { OcaGlobalTypeIdentifier } from '../../OCP1/OcaGlobalTypeIdentifier.js';
import { OcaIODirection } from '../../OCP1/OcaIODirection.js';
import { OcaList } from '../../OCP1/OcaList.js';
import { OcaMap } from '../../OCP1/OcaMap.js';
import { OcaPortID } from '../../OCP1/OcaPortID.js';
import { OcaProtoObjectIdentification } from '../../OCP1/OcaProtoObjectIdentification.js';
import { OcaProtoPort } from '../../OCP1/OcaProtoPort.js';
import { OcaProtoPortClockMapEntry } from '../../OCP1/OcaProtoPortClockMapEntry.js';
import { OcaProtoSignalPath } from '../../OCP1/OcaProtoSignalPath.js';
import { OcaString } from '../../OCP1/OcaString.js';
import { OcaUint16 } from '../../OCP1/OcaUint16.js';
import { OcaUint32 } from '../../OCP1/OcaUint32.js';
import { String16 } from '../../OCP1/String16.js';
import { make_control_class } from '../make_control_class.js';
import { OcaAgent } from './OcaAgent.js';

/**
 * Create custom **OcaBlock** instances (*blocks*). Usable only in
 * reconfigurable devices. See [AES70-1](Constructing and deleting objects)] for
 * an overview.
 * @extends OcaAgent
 * @class OcaBlockFactoryAgent
 */
export const OcaBlockFactoryAgent = make_control_class(
  'OcaBlockFactoryAgent',
  3,
  '\u0001\u0002\u0015',
  1,
  OcaAgent,
  [
    ['GetGlobalType', 3, 1, [], [OcaGlobalTypeIdentifier]],
    ['SetGlobalType', 3, 2, [OcaGlobalTypeIdentifier], []],
    [
      'AddProtoActionObject',
      3,
      3,
      [String16, OcaList(OcaConstructionParameter)],
      [OcaUint32],
    ],
    ['AddProtoBlockUsingFactory', 3, 4, [OcaUint32], [OcaUint32]],
    [
      'GetProtoActionObjects',
      3,
      5,
      [],
      [OcaList(OcaProtoObjectIdentification)],
    ],
    [
      'AddProtoDatasetObject',
      3,
      6,
      [String16, OcaList(OcaConstructionParameter)],
      [OcaUint32],
    ],
    [
      'GetProtoDatasetObjects',
      3,
      7,
      [],
      [OcaList(OcaProtoObjectIdentification)],
    ],
    ['DeleteProtoMember', 3, 8, [OcaUint32], []],
    ['GetProtoBlockPorts', 3, 9, [], [OcaList(OcaProtoPort)]],
    ['SetProtoBlockPorts', 3, 10, [OcaList(OcaProtoPort)], []],
    ['SetProtoBlockPort', 3, 11, [OcaString, OcaIODirection], [OcaPortID]],
    ['DeleteProtoBlockPort', 3, 12, [OcaPortID], []],
    ['GetProtoSignalPaths', 3, 13, [], [OcaMap(OcaUint16, OcaProtoSignalPath)]],
    ['SetProtoSignalPaths', 3, 14, [OcaMap(OcaUint16, OcaProtoSignalPath)], []],
    ['SetProtoSignalPath', 3, 15, [OcaProtoSignalPath], [OcaUint16]],
    ['DeleteProtoSignalPath', 3, 16, [], [OcaUint16]],
    [
      'GetProtoBlockPortClockMap',
      3,
      17,
      [],
      [OcaMap(OcaPortID, OcaProtoPortClockMapEntry)],
    ],
    [
      'SetProtoBlockPortClockMap',
      3,
      18,
      [OcaMap(OcaPortID, OcaProtoPortClockMapEntry)],
      [],
    ],
    [
      'SetProtoBlockPortClockMapEntry',
      3,
      19,
      [OcaPortID, OcaProtoPortClockMapEntry],
      [],
    ],
    ['DeleteProtoBlockPortClockMapEntry', 3, 20, [OcaPortID], []],
  ],
  [
    ['GlobalType', [OcaGlobalTypeIdentifier], 3, 1, false, false, null],
    [
      'ProtoActionObjects',
      [OcaList(OcaProtoObjectIdentification)],
      3,
      2,
      false,
      false,
      null,
    ],
    [
      'ProtoDatasetObjects',
      [OcaList(OcaProtoObjectIdentification)],
      3,
      3,
      false,
      false,
      null,
    ],
    ['ProtoBlockPorts', [OcaList(OcaProtoPort)], 3, 4, false, false, null],
    [
      'ProtoBlockPortClockMap',
      [OcaMap(OcaPortID, OcaProtoPortClockMapEntry)],
      3,
      5,
      false,
      false,
      null,
    ],
    [
      'ProtoSignalPaths',
      [OcaMap(OcaUint16, OcaProtoSignalPath)],
      3,
      6,
      false,
      false,
      null,
    ],
  ],
  []
);

/**
 * Gets the global type identifier for blocks created by this factory.
 *
 * @method OcaBlockFactoryAgent#GetGlobalType
 * @returns {Promise<OcaGlobalTypeIdentifier>}
 *   A promise which resolves to a single value of type :class:`OcaGlobalTypeIdentifier`.
 */
/**
 * Sets the global type identifier for blocks created by this factory.
 *
 * @method OcaBlockFactoryAgent#SetGlobalType
 * @param {IOcaGlobalTypeIdentifier} GlobalType
 *
 * @returns {Promise<void>}
 */
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
/**
 * Adds a Prototype nested Block to this Factory. When this Factory constructs a
 * Block, the nested Block will be constructed as well.
 *
 * @method OcaBlockFactoryAgent#AddProtoBlockUsingFactory
 * @param {number} FactoryONo
 *
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Gets the Factory's list of Prototype Action Objects. Does not recurse nested
 * Prototype Blocks, if any.
 *
 * @method OcaBlockFactoryAgent#GetProtoActionObjects
 * @returns {Promise<OcaProtoObjectIdentification[]>}
 *   A promise which resolves to a single value of type :class:`OcaProtoObjectIdentification[]`.
 */
/**
 * Adds a Prototype Dataset Object of the given class to this Factory. The most
 * current version of the class shall be used.
 *
 * @method OcaBlockFactoryAgent#AddProtoDatasetObject
 * @param {string} ClassIdentification
 * @param {IOcaConstructionParameter[]} ConstructionParameters
 *
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Gets the Factory's list of Prototype Dataset Objects. Does not recurse nested
 * Prototype Blocks.
 *
 * @method OcaBlockFactoryAgent#GetProtoDatasetObjects
 * @returns {Promise<OcaProtoObjectIdentification[]>}
 *   A promise which resolves to a single value of type :class:`OcaProtoObjectIdentification[]`.
 */
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
/**
 * Gets the Factory's list of Prototype Block Ports.
 *
 * @method OcaBlockFactoryAgent#GetProtoBlockPorts
 * @returns {Promise<OcaProtoPort[]>}
 *   A promise which resolves to a single value of type :class:`OcaProtoPort[]`.
 */
/**
 * Sets the complete list of Prototype Block Ports. When the Factory constructs
 * a Block, it will create a Block Port in the Block for each Prototype Block
 * Port . Null list removes all Prototype Block Ports.
 *
 * @method OcaBlockFactoryAgent#SetProtoBlockPorts
 * @param {IOcaProtoPort[]} Ports
 *
 * @returns {Promise<void>}
 */
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
/**
 * If the method succeeds, deletes the designated Prototype Block Port from the
 * Factory.
 *
 * @method OcaBlockFactoryAgent#DeleteProtoBlockPort
 * @param {IOcaPortID} ProtoPortID
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the Factory's list of Prototype Signal Paths. Map key is Prototype
 * Signal Path ID.
 *
 * @method OcaBlockFactoryAgent#GetProtoSignalPaths
 * @returns {Promise<Map<number, OcaProtoSignalPath>>}
 *   A promise which resolves to a single value of type ``Map<number, OcaProtoSignalPath>``.
 */
/**
 * Gets the Factory's list of Prototype Signal Paths. Map key is Prototype
 * Signal Path ID.
 *
 * @method OcaBlockFactoryAgent#SetProtoSignalPaths
 * @param {Map<number, IOcaProtoSignalPath>} SignalPaths
 *
 * @returns {Promise<void>}
 */
/**
 * Adds or replaces a Prototype Signal Path in the Factory.
 *
 * @method OcaBlockFactoryAgent#SetProtoSignalPath
 * @param {IOcaProtoSignalPath} Path
 *
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Deletes a Prototype Signal Path from the Factory.
 *
 * @method OcaBlockFactoryAgent#DeleteProtoSignalPath
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Gets the Prototype Block Port Clock Map.
 *
 * @method OcaBlockFactoryAgent#GetProtoBlockPortClockMap
 * @returns {Promise<Map<OcaPortID, OcaProtoPortClockMapEntry>>}
 *   A promise which resolves to a single value of type ``Map<OcaPortID, OcaProtoPortClockMapEntry>``.
 */
/**
 * Sets the complete Prototype Block Port Clock Map. Null parameter clears the
 * map.
 *
 * @method OcaBlockFactoryAgent#SetProtoBlockPortClockMap
 * @param {Map<IOcaPortID, IOcaProtoPortClockMapEntry>} Map
 *
 * @returns {Promise<void>}
 */
/**
 * Adds or replaces an entry to the Factory's current Prototype Block Port Clock
 * Map
 *
 * @method OcaBlockFactoryAgent#SetProtoBlockPortClockMapEntry
 * @param {IOcaPortID} Port
 * @param {IOcaProtoPortClockMapEntry} MapEntry
 *
 * @returns {Promise<void>}
 */
/**
 * Deletes an entry from the Prototype Block Port Clock Map.
 *
 * @method OcaBlockFactoryAgent#DeleteProtoBlockPortClockMapEntry
 * @param {IOcaPortID} PortID
 *
 * @returns {Promise<void>}
 */
/**
 * This event is emitted when the property ``GlobalType`` changes in the remote object.
 * The property ``GlobalType`` is described in the AES70 standard as follows.
 * Global block type identifier for reusable blocks. Blocks created by this
 * Factory shall be given this value.
 *
 * @member {PropertyEvent<OcaGlobalTypeIdentifier>} OcaBlockFactoryAgent#OnGlobalTypeChanged
 */
/**
 * This event is emitted when the property ``ProtoActionObjects`` changes in the remote object.
 * The property ``ProtoActionObjects`` is described in the AES70 standard as follows.
 * List of Prototype Object Identifiers of Action Objects in the Block.
 *
 * @member {PropertyEvent<OcaProtoObjectIdentification[]>} OcaBlockFactoryAgent#OnProtoActionObjectsChanged
 */
/**
 * This event is emitted when the property ``ProtoDatasetObjects`` changes in the remote object.
 * The property ``ProtoDatasetObjects`` is described in the AES70 standard as follows.
 * List of Prototype Object Identifiers of Dataset Objects in the Block.
 *
 * @member {PropertyEvent<OcaProtoObjectIdentification[]>} OcaBlockFactoryAgent#OnProtoDatasetObjectsChanged
 */
/**
 * This event is emitted when the property ``ProtoBlockPorts`` changes in the remote object.
 * The property ``ProtoBlockPorts`` is described in the AES70 standard as follows.
 * List of Prototype Block Ports. This list defines the Block Ports that each
 * Block constructed by this Factory shall have.
 *
 * @member {PropertyEvent<OcaProtoPort[]>} OcaBlockFactoryAgent#OnProtoBlockPortsChanged
 */
/**
 * This event is emitted when the property ``ProtoBlockPortClockMap`` changes in the remote object.
 * The property ``ProtoBlockPortClockMap`` is described in the AES70 standard as follows.
 * Prototype Block Port Clock Map. This map defines the Block Port Clock Map
 * that each Block constructed by this Factory shall have.
 *
 * @member {PropertyEvent<Map<OcaPortID, OcaProtoPortClockMapEntry>>} OcaBlockFactoryAgent#OnProtoBlockPortClockMapChanged
 */
/**
 * This event is emitted when the property ``ProtoSignalPaths`` changes in the remote object.
 * The property ``ProtoSignalPaths`` is described in the AES70 standard as follows.
 * List of Prototype Signal Paths in the Block.
 *
 * @member {PropertyEvent<Map<number, OcaProtoSignalPath>>} OcaBlockFactoryAgent#OnProtoSignalPathsChanged
 */
