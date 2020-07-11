import { make_control_class } from './Base.js';
import { OcaWorker } from './OcaWorker.js';
import { OcaBlockMember } from '../OCP1/OcaBlockMember.js';
import { OcaGlobalTypeIdentifier } from '../OCP1/OcaGlobalTypeIdentifier.js';
import { OcaLibVolData_ParamSet } from '../OCP1/OcaLibVolData_ParamSet.js';
import { OcaLibVolIdentifier } from '../OCP1/OcaLibVolIdentifier.js';
import { OcaList } from '../OCP1/OcaList.js';
import { OcaMap } from '../OCP1/OcaMap.js';
import { OcaObjectIdentification } from '../OCP1/OcaObjectIdentification.js';
import { OcaObjectSearchResult } from '../OCP1/OcaObjectSearchResult.js';
import { OcaObjectSearchResultFlags } from '../OCP1/OcaObjectSearchResultFlags.js';
import { OcaSignalPath } from '../OCP1/OcaSignalPath.js';
import { OcaString } from '../OCP1/OcaString.js';
import { OcaStringComparisonType } from '../OCP1/OcaStringComparisonType.js';
import { OcaUint16 } from '../OCP1/OcaUint16.js';
import { OcaUint32 } from '../OCP1/OcaUint32.js';
import { String16 } from '../OCP1/String16.js';

/**
 * A block is an object with three aspects: - It can contain other
 * blocks. - It can contain workers. - It can contain agents. - It can
 * contain data networks. - It can contain application networks. - It has
 * a signal flow topology. We refer to an object inside a block as a
 * <b>member</b> of that block. We refer to the block which contains an
 * object as the object's <b>container.</b><b><sup>1</sup></b> Normally,
 * a block contains a set of members that together function as a
 * processing unit -- for example, a crossover channel or mixer strip.
 * @extends RemoteControlClasses.OcaWorker
 * @class OcaBlock
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the block type. For statically-defined blocks, the block type is
 * a Uint32 with a value corresponding to the unique configuration of
 * this block. For dynamically-defined blocks, the block type is the
 * object number of the block's factory. For the root block, the value of
 * this property is 1.
 * @method RemoteControlClasses.OcaBlock#GetType
 * @returns {Promise<OcaONo>}
 */
/**
 * Constructs an object according to the given construction specification
 * and adds it to the block. The return value indicates whether the
 * member was successfully created and added.
 * @method RemoteControlClasses.OcaBlock#ConstructMember
 * @param ClassID {OcaClassID}
 *
 * @param ConstructionParameters {variant}
 *
 * @returns {Promise<OcaONo>}
 */
/**
 * Invokes a factory to construct an instance of the given class, then
 * adds it to the block. The return value indicates whether the member
 * was successfully created and added.
 * @method RemoteControlClasses.OcaBlock#ConstructMemberUsingFactory
 * @param FactoryONo {OcaONo}
 *
 * @returns {Promise<OcaONo>}
 */
/**
 * Removes a member from the block and destroys the object. . Deletes all
 * signal paths attached to its ports. The return value indicates whether
 * the member was successfully removed and destroyed.
 * @method RemoteControlClasses.OcaBlock#DeleteMember
 * @param ObjectNumber {OcaONo}
 *
 * @returns {Promise}
 */
/**
 * Gets the list of block members. Does not recurse inner blocks. Each
 * inner block is included in the returned list as a single object -- its
 * contents are not enumerated. The return value indicates whether the
 * list was successfully retrieved.
 * @method RemoteControlClasses.OcaBlock#GetMembers
 * @returns {Promise<OcaList>}
 */
/**
 * Gets the list of block members. Recurses inner blocks. Each inner
 * block is included in the returned list as a single object, amd its
 * contents are enumerated. The return value indicates whether the list
 * was successfully retrieved.
 * @method RemoteControlClasses.OcaBlock#GetMembersRecursive
 * @returns {Promise<OcaList>}
 */
/**
 * Adds a signal path to the block. The return value indicates whether
 * the signal path was successfully added.
 * @method RemoteControlClasses.OcaBlock#AddSignalPath
 * @param Path {OcaSignalPath}
 *
 * @returns {Promise<OcaUint16>}
 */
/**
 * Deletes a signal path from the block. The return value indicates
 * whether the signal path was successfully added.
 * @method RemoteControlClasses.OcaBlock#DeleteSignalPath
 * @param Index {OcaUint16}
 *
 * @returns {Promise}
 */
/**
 * Gets the map of signal paths in the block. Does not recurse inner
 * blocks. The return value indicates whether the list was successfully
 * retrieved.
 * @method RemoteControlClasses.OcaBlock#GetSignalPaths
 * @returns {Promise<OcaMap>}
 */
/**
 * Gets the mapof signal paths in the block. Recurses inner blocks. The
 * return value indicates whether the list was successfully retrieved.
 * @method RemoteControlClasses.OcaBlock#GetSignalPathsRecursive
 * @returns {Promise<OcaMap>}
 */
/**
 * Gets the identifier of the paramset most recently applied to this
 * block.
 * @method RemoteControlClasses.OcaBlock#GetMostRecentParamSetIdentifier
 * @returns {Promise<OcaLibVolIdentifier>}
 */
/**
 * Applies the referenced paramset to this block, and sets the
 * MostRecentParamSet property. The return value indicates whether the
 * paramset was successfully applied.
 * @method RemoteControlClasses.OcaBlock#ApplyParamSet
 * @returns {Promise<OcaLibVolIdentifier>}
 */
/**
 * Returns a paramset library volume data block which represents the
 * current state of the block -- i.e. a "snapshot".
 * @method RemoteControlClasses.OcaBlock#GetCurrentParamSetData
 * @returns {Promise<OcaLibVolData_ParamSet>}
 */
/**
 * Stores a paramset library volume data block which represents the
 * current state of the block ("snapshot") in the given library.
 * <b>Replaces </b>the library volume at the specified LibVolIdentifier.
 * @method RemoteControlClasses.OcaBlock#StoreCurrentParamSetData
 * @param LibVolIdentifier {OcaLibVolIdentifier}
 *
 * @returns {Promise}
 */
/**
 * Gets the global blocktype. The return value indicates whether the type
 * was successfully retrieved. If this block has no global blocktype, the
 * <b>Authority</b> field of the returned <b>GlobalType</b> parameter
 * will be zero. <b>Added in version 2 of this class.</b>
 * @method RemoteControlClasses.OcaBlock#GetGlobalType
 * @returns {Promise<OcaGlobalTypeIdentifier>}
 */
/**
 * Gets the block's ONo map. The return value indicates whether the map
 * was successfully retrieved. <b>Added in version 2 of this class.</b>
 * @method RemoteControlClasses.OcaBlock#GetONoMap
 * @returns {Promise<OcaMap>}
 */
/**
 * Returns object identifications of all objects in the block that match
 * the given Role search string and Class ID. Return value indicates
 * whether the method succeeded. <b>Added in version 2 of this class.</b>
 * @method RemoteControlClasses.OcaBlock#FindObjectsByRole
 * @param SearchName {OcaString}
 *
 * @param NameComparisonType {OcaStringComparisonType}
 *
 * @param SearchClassID {OcaClassID}
 *
 * @param ResultFlags {OcaObjectSearchResultFlags}
 *
 * @returns {Promise<OcaList>}
 */
/**
 * Returns block member descriptors of all objects in the block and all
 * contained blocks that match the given Role search string and Class ID.
 * <b>Added in version 2 of this class.</b>
 * @method RemoteControlClasses.OcaBlock#FindObjectsByRoleRecursive
 * @param SearchName {OcaString}
 *
 * @param NameComparisonType {OcaStringComparisonType}
 *
 * @param SearchClassID {OcaClassID}
 *
 * @param ResultFlags {OcaObjectSearchResultFlags}
 *
 * @returns {Promise<OcaList>}
 */
/**
 * Returns object identifications of all objects with the given name
 * path. <b>Added in version 2 of this class.</b>
 * @method RemoteControlClasses.OcaBlock#FindObjectsByPath
 * @param SearchPath {OcaNamePath}
 *
 * @param ResultFlags {OcaObjectSearchResultFlags}
 *
 * @returns {Promise<OcaList>}
 */
/**
 * Returns block member descriptors of all objects in the block and all
 * contained blocks that match the given Label search string and Class
 * ID. <b>Added in version 2 of this class.</b>
 * @method RemoteControlClasses.OcaBlock#FindObjectsByLabelRecursive
 * @param SearchName {OcaString}
 *
 * @param NameComparisonType {OcaStringComparisonType}
 *
 * @param SearchClassID {OcaClassID}
 *
 * @param ResultFlags {OcaObjectSearchResultFlags}
 *
 * @returns {Promise<OcaList>}
 */
/**
 * Readonly block type. For statically-defined blocks, this value is a
 * Uint32 with a value corresponding to the unique configuration of this
 * block. For dynamically-defined blocks, this value is the object number
 * of the block's factory. For the root block, the value of this property
 * is 1.
 */
/**
 * List of members in the block.
 * @member RemoteControlClasses.OcaBlock#OnMembersChanged {PropertyEvent<OcaList>} - This event is emitted when Members changes in the remote object.
 */
/**
 * List of signal paths in the block.
 * @member RemoteControlClasses.OcaBlock#OnSignalPathsChanged {PropertyEvent<OcaMap>} - This event is emitted when SignalPaths changes in the remote object.
 */
/**
 * Library volume identifier of the paramset most recently applied to
 * this block.
 * @member RemoteControlClasses.OcaBlock#OnMostRecentParamSetIdentifierChanged {PropertyEvent<OcaLibVolIdentifier>} - This event is emitted when MostRecentParamSetIdentifier changes in the remote object.
 */
/**
 * Global block type identifier for reusable blocks. <b>Added in version
 * 2 of this class.</b>
 */
/**
 * For blocks constructed by factories. Map that indicates the actual
 * ONos allocated to the constructing OcaBlockFactory's prototype ONos.
 * Key is prototype ONo, value is actual ONo. <b>Added in version 2 of
 * this class.</b>
 */
