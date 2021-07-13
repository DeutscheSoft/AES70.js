import { make_control_class } from '../Base.js';
import { OcaWorker } from './OcaWorker.js';
import { OcaBlockMember } from '../../OCP1/OcaBlockMember.js';
import { OcaGlobalTypeIdentifier } from '../../OCP1/OcaGlobalTypeIdentifier.js';
import { OcaLibVolData_ParamSet } from '../../OCP1/OcaLibVolData_ParamSet.js';
import { OcaLibVolIdentifier } from '../../OCP1/OcaLibVolIdentifier.js';
import { OcaList } from '../../OCP1/OcaList.js';
import { OcaMap } from '../../OCP1/OcaMap.js';
import { OcaObjectIdentification } from '../../OCP1/OcaObjectIdentification.js';
import { OcaObjectSearchResult } from '../../OCP1/OcaObjectSearchResult.js';
import { OcaObjectSearchResultFlags } from '../../OCP1/OcaObjectSearchResultFlags.js';
import { OcaSignalPath } from '../../OCP1/OcaSignalPath.js';
import { OcaString } from '../../OCP1/OcaString.js';
import { OcaStringComparisonType } from '../../OCP1/OcaStringComparisonType.js';
import { OcaUint16 } from '../../OCP1/OcaUint16.js';
import { OcaUint32 } from '../../OCP1/OcaUint32.js';
import { String16 } from '../../OCP1/String16.js';

/**
 * A block is an object with three aspects: - It can contain other blocks. - It can contain workers. - It can contain agents. - It can contain data networks. - It can contain application networks. - It has a signal flow topology. We refer to an object inside a block as a  **member**  of that block. We refer to the block which contains an object as the object's  **container.**  **1**  Normally, a block contains a set of members that together function as a processing unit -- for example, a crossover channel or mixer strip.
 * @extends OcaWorker
 * @class OcaBlock
 */
export const OcaBlock = make_control_class(
  'OcaBlock',
  3,
  '\u0001\u0001\u0003',
  2,
  OcaWorker,
  [
    ['GetType', 3, 1, [], [OcaUint32]],
    ,
    ['ConstructMemberUsingFactory', 3, 3, [OcaUint32], [OcaUint32]],
    ['DeleteMember', 3, 4, [OcaUint32], []],
    ['GetMembers', 3, 5, [], [OcaList(OcaObjectIdentification)]],
    ['GetMembersRecursive', 3, 6, [], [OcaList(OcaBlockMember)]],
    ['AddSignalPath', 3, 7, [OcaSignalPath], [OcaUint16]],
    ['DeleteSignalPath', 3, 8, [OcaUint16], []],
    ['GetSignalPaths', 3, 9, [], [OcaMap(OcaUint16, OcaSignalPath)]],
    ['GetSignalPathsRecursive', 3, 10, [], [OcaMap(OcaUint16, OcaSignalPath)]],
    ['GetMostRecentParamSetIdentifier', 3, 11, [], [OcaLibVolIdentifier]],
    ['ApplyParamSet', 3, 12, [], [OcaLibVolIdentifier]],
    ['GetCurrentParamSetData', 3, 13, [], [OcaLibVolData_ParamSet]],
    ['StoreCurrentParamSetData', 3, 14, [OcaLibVolIdentifier], []],
    ['GetGlobalType', 3, 15, [], [OcaGlobalTypeIdentifier]],
    ['GetONoMap', 3, 16, [], [OcaMap(OcaUint32, OcaUint32)]],
    [
      'FindObjectsByRole',
      3,
      17,
      [
        OcaString,
        OcaStringComparisonType,
        String16,
        OcaObjectSearchResultFlags,
      ],
      [OcaList(OcaObjectSearchResult)],
    ],
    [
      'FindObjectsByRoleRecursive',
      3,
      18,
      [
        OcaString,
        OcaStringComparisonType,
        String16,
        OcaObjectSearchResultFlags,
      ],
      [OcaList(OcaObjectSearchResult)],
    ],
    [
      'FindObjectsByPath',
      3,
      20,
      [OcaList(OcaString), OcaObjectSearchResultFlags],
      [OcaList(OcaObjectSearchResult)],
    ],
    [
      'FindObjectsByLabelRecursive',
      3,
      19,
      [
        OcaString,
        OcaStringComparisonType,
        String16,
        OcaObjectSearchResultFlags,
      ],
      [OcaList(OcaObjectSearchResult)],
    ],
  ],
  [
    ['Type', [OcaUint32], 3, 1, true, false, null],
    ['Members', [OcaList(OcaObjectIdentification)], 3, 2, false, false, null],
    [
      'SignalPaths',
      [OcaMap(OcaUint16, OcaSignalPath)],
      3,
      3,
      false,
      false,
      null,
    ],
    [
      'MostRecentParamSetIdentifier',
      [OcaLibVolIdentifier],
      3,
      4,
      false,
      false,
      null,
    ],
    ['GlobalType', [OcaGlobalTypeIdentifier], 3, 5, true, false, null],
    ['ONoMap', [OcaMap(OcaUint32, OcaUint32)], 3, 6, true, false, null],
  ],
  []
);

/**
 * Gets the block type. For statically-defined blocks, the block type is a Uint32 with a value corresponding to the unique configuration of this block. For dynamically-defined blocks, the block type is the object number of the block's factory. For the root block, the value of this property is 1.
 *
 * @method OcaBlock#GetType
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Constructs an object according to the given construction specification and adds it to the block. The return value indicates whether the member was successfully created and added.
 *
 * @method OcaBlock#ConstructMember
 * @param {OcaClassID} ClassID
 *
 * @param {variant} ConstructionParameters
 *
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Invokes a factory to construct an instance of the given class, then adds it to the block. The return value indicates whether the member was successfully created and added.
 *
 * @method OcaBlock#ConstructMemberUsingFactory
 * @param {number} FactoryONo
 *
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Removes a member from the block and destroys the object. . Deletes all signal paths attached to its ports. The return value indicates whether the member was successfully removed and destroyed.
 *
 * @method OcaBlock#DeleteMember
 * @param {number} ObjectNumber
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the list of block members. Does not recurse inner blocks. Each inner block is included in the returned list as a single object -- its contents are not enumerated. The return value indicates whether the list was successfully retrieved.
 *
 * @method OcaBlock#GetMembers
 * @returns {Promise<OcaObjectIdentification[]>}
 *   A promise which resolves to a single value of type ``OcaObjectIdentification[]``.
 */
/**
 * Gets the list of block members. Recurses inner blocks. Each inner block is included in the returned list as a single object, amd its contents are enumerated. The return value indicates whether the list was successfully retrieved.
 *
 * @method OcaBlock#GetMembersRecursive
 * @returns {Promise<OcaBlockMember[]>}
 *   A promise which resolves to a single value of type ``OcaBlockMember[]``.
 */
/**
 * Adds a signal path to the block. The return value indicates whether the signal path was successfully added.
 *
 * @method OcaBlock#AddSignalPath
 * @param {OcaSignalPath} Path
 *
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Deletes a signal path from the block. The return value indicates whether the signal path was successfully added.
 *
 * @method OcaBlock#DeleteSignalPath
 * @param {number} Index
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the map of signal paths in the block. Does not recurse inner blocks. The return value indicates whether the list was successfully retrieved.
 *
 * @method OcaBlock#GetSignalPaths
 * @returns {Promise<Map<number, OcaSignalPath>>}
 *   A promise which resolves to a single value of type ``Map<number, OcaSignalPath>``.
 */
/**
 * Gets the mapof signal paths in the block. Recurses inner blocks. The return value indicates whether the list was successfully retrieved.
 *
 * @method OcaBlock#GetSignalPathsRecursive
 * @returns {Promise<Map<number, OcaSignalPath>>}
 *   A promise which resolves to a single value of type ``Map<number, OcaSignalPath>``.
 */
/**
 * Gets the identifier of the paramset most recently applied to this block.
 *
 * @method OcaBlock#GetMostRecentParamSetIdentifier
 * @returns {Promise<OcaLibVolIdentifier>}
 *   A promise which resolves to a single value of type :class:`OcaLibVolIdentifier`.
 */
/**
 * Applies the referenced paramset to this block, and sets the MostRecentParamSet property. The return value indicates whether the paramset was successfully applied.
 *
 * @method OcaBlock#ApplyParamSet
 * @returns {Promise<OcaLibVolIdentifier>}
 *   A promise which resolves to a single value of type :class:`OcaLibVolIdentifier`.
 */
/**
 * Returns a paramset library volume data block which represents the current state of the block -- i.e. a "snapshot".
 *
 * @method OcaBlock#GetCurrentParamSetData
 * @returns {Promise<OcaLibVolData_ParamSet>}
 *   A promise which resolves to a single value of type :class:`OcaLibVolData_ParamSet`.
 */
/**
 * Stores a paramset library volume data block which represents the current state of the block ("snapshot") in the given library.  **Replaces** the library volume at the specified LibVolIdentifier.
 *
 * @method OcaBlock#StoreCurrentParamSetData
 * @param {OcaLibVolIdentifier} LibVolIdentifier
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the global blocktype. The return value indicates whether the type was successfully retrieved. If this block has no global blocktype, the  **Authority**  field of the returned  **GlobalType**  parameter will be zero.  **Added in version 2 of this class.**
 *
 * @method OcaBlock#GetGlobalType
 * @returns {Promise<OcaGlobalTypeIdentifier>}
 *   A promise which resolves to a single value of type :class:`OcaGlobalTypeIdentifier`.
 */
/**
 * Gets the block's ONo map. The return value indicates whether the map was successfully retrieved.  **Added in version 2 of this class.**
 *
 * @method OcaBlock#GetONoMap
 * @returns {Promise<Map<number, number>>}
 *   A promise which resolves to a single value of type ``Map<number, number>``.
 */
/**
 * Returns object identifications of all objects in the block that match the given Role search string and Class ID. Return value indicates whether the method succeeded.  **Added in version 2 of this class.**
 *
 * @method OcaBlock#FindObjectsByRole
 * @param {string} SearchName
 *
 * @param {OcaStringComparisonType} NameComparisonType
 *
 * @param {OcaClassID} SearchClassID
 *
 * @param {OcaObjectSearchResultFlags} ResultFlags
 *
 * @returns {Promise<OcaObjectSearchResult[]>}
 *   A promise which resolves to a single value of type ``OcaObjectSearchResult[]``.
 */
/**
 * Returns block member descriptors of all objects in the block and all contained blocks that match the given Role search string and Class ID.  **Added in version 2 of this class.**
 *
 * @method OcaBlock#FindObjectsByRoleRecursive
 * @param {string} SearchName
 *
 * @param {OcaStringComparisonType} NameComparisonType
 *
 * @param {OcaClassID} SearchClassID
 *
 * @param {OcaObjectSearchResultFlags} ResultFlags
 *
 * @returns {Promise<OcaObjectSearchResult[]>}
 *   A promise which resolves to a single value of type ``OcaObjectSearchResult[]``.
 */
/**
 * Returns object identifications of all objects with the given name path.  **Added in version 2 of this class.**
 *
 * @method OcaBlock#FindObjectsByPath
 * @param {string[]} SearchPath
 *
 * @param {OcaObjectSearchResultFlags} ResultFlags
 *
 * @returns {Promise<OcaObjectSearchResult[]>}
 *   A promise which resolves to a single value of type ``OcaObjectSearchResult[]``.
 */
/**
 * Returns block member descriptors of all objects in the block and all contained blocks that match the given Label search string and Class ID.  **Added in version 2 of this class.**
 *
 * @method OcaBlock#FindObjectsByLabelRecursive
 * @param {string} SearchName
 *
 * @param {OcaStringComparisonType} NameComparisonType
 *
 * @param {OcaClassID} SearchClassID
 *
 * @param {OcaObjectSearchResultFlags} ResultFlags
 *
 * @returns {Promise<OcaObjectSearchResult[]>}
 *   A promise which resolves to a single value of type ``OcaObjectSearchResult[]``.
 */
/**
 * This event is emitted when the property Members changes in the remote object.
 * The property ``Members`` is described in the AES70 standard as follows.
 * List of members in the block.
 *
 * @member {PropertyEvent<OcaObjectIdentification[]>} OcaBlock#OnMembersChanged
 */
/**
 * This event is emitted when the property SignalPaths changes in the remote object.
 * The property ``SignalPaths`` is described in the AES70 standard as follows.
 * List of signal paths in the block.
 *
 * @member {PropertyEvent<Map<number, OcaSignalPath>>} OcaBlock#OnSignalPathsChanged
 */
/**
 * This event is emitted when the property MostRecentParamSetIdentifier changes in the remote object.
 * The property ``MostRecentParamSetIdentifier`` is described in the AES70 standard as follows.
 * Library volume identifier of the paramset most recently applied to
 * this block.
 *
 * @member {PropertyEvent<OcaLibVolIdentifier>} OcaBlock#OnMostRecentParamSetIdentifierChanged
 */
