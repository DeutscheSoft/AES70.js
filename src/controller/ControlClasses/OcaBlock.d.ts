import { RemoteDevice } from '../remote_device';
import { OcaWorker } from './OcaWorker';

import { PropertyEvent } from '../Base';
import { IOcaLibVolIdentifier } from '../../types/OcaLibVolIdentifier';
import { IOcaObjectSearchResultFlags } from '../../types/OcaObjectSearchResultFlags';
import { IOcaSignalPath } from '../../types/OcaSignalPath';
import { IOcaStringComparisonType } from '../../types/OcaStringComparisonType';
import { OcaBlockMember } from '../../types/OcaBlockMember';
import { OcaGlobalTypeIdentifier } from '../../types/OcaGlobalTypeIdentifier';
import { OcaLibVolData_ParamSet } from '../../types/OcaLibVolData_ParamSet';
import { OcaLibVolIdentifier } from '../../types/OcaLibVolIdentifier';
import { OcaObjectIdentification } from '../../types/OcaObjectIdentification';
import { OcaObjectSearchResult } from '../../types/OcaObjectSearchResult';
import { OcaSignalPath } from '../../types/OcaSignalPath';

/**
 * A block is an object with three aspects: - It can contain other blocks. - It can contain workers. - It can contain agents. - It can contain data networks. - It can contain application networks. - It has a signal flow topology. We refer to an object inside a block as a  **member**  of that block. We refer to the block which contains an object as the object's  **container.**  **1**  Normally, a block contains a set of members that together function as a processing unit -- for example, a crossover channel or mixer strip.
 * @extends OcaWorker
 * @class OcaBlock
 */
export declare class OcaBlock extends OcaWorker {
  /**
   * This event is emitted whenever Members changes.
   */
  OnMembersChanged: PropertyEvent<OcaObjectIdentification[]>;

  /**
   * This event is emitted whenever SignalPaths changes.
   */
  OnSignalPathsChanged: PropertyEvent<Map<number, OcaSignalPath>>;

  /**
   * This event is emitted whenever MostRecentParamSetIdentifier changes.
   */
  OnMostRecentParamSetIdentifierChanged: PropertyEvent<OcaLibVolIdentifier>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the block type. For statically-defined blocks, the block type is a Uint32 with a value corresponding to the unique configuration of this block. For dynamically-defined blocks, the block type is the object number of the block's factory. For the root block, the value of this property is 1.
   *
   * @method OcaBlock#GetType
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetType(): Promise<number>;

  /**
   * Constructs an object according to the given construction specification and adds it to the block. The return value indicates whether the member was successfully created and added.
   *
   * @method OcaBlock#ConstructMember
   * @param {string} ClassID
   *
   * @param {any} ConstructionParameters
   *
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  ConstructMember(
    ClassID: string,
    ConstructionParameters: any
  ): Promise<number>;

  /**
   * Invokes a factory to construct an instance of the given class, then adds it to the block. The return value indicates whether the member was successfully created and added.
   *
   * @method OcaBlock#ConstructMemberUsingFactory
   * @param {number} FactoryONo
   *
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  ConstructMemberUsingFactory(FactoryONo: number): Promise<number>;

  /**
   * Removes a member from the block and destroys the object. . Deletes all signal paths attached to its ports. The return value indicates whether the member was successfully removed and destroyed.
   *
   * @method OcaBlock#DeleteMember
   * @param {number} ObjectNumber
   *
   * @returns {Promise<void>}
   */
  DeleteMember(ObjectNumber: number): Promise<void>;

  /**
   * Gets the list of block members. Does not recurse inner blocks. Each inner block is included in the returned list as a single object -- its contents are not enumerated. The return value indicates whether the list was successfully retrieved.
   *
   * @method OcaBlock#GetMembers
   * @returns {Promise<OcaObjectIdentification[]>}
   *   A promise which resolves to a single value of type ``OcaObjectIdentification[]``.
   */
  GetMembers(): Promise<OcaObjectIdentification[]>;

  /**
   * Gets the list of block members. Recurses inner blocks. Each inner block is included in the returned list as a single object, amd its contents are enumerated. The return value indicates whether the list was successfully retrieved.
   *
   * @method OcaBlock#GetMembersRecursive
   * @returns {Promise<OcaBlockMember[]>}
   *   A promise which resolves to a single value of type ``OcaBlockMember[]``.
   */
  GetMembersRecursive(): Promise<OcaBlockMember[]>;

  /**
   * Adds a signal path to the block. The return value indicates whether the signal path was successfully added.
   *
   * @method OcaBlock#AddSignalPath
   * @param {OcaSignalPath} Path
   *
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  AddSignalPath(Path: IOcaSignalPath): Promise<number>;

  /**
   * Deletes a signal path from the block. The return value indicates whether the signal path was successfully added.
   *
   * @method OcaBlock#DeleteSignalPath
   * @param {number} Index
   *
   * @returns {Promise<void>}
   */
  DeleteSignalPath(Index: number): Promise<void>;

  /**
   * Gets the map of signal paths in the block. Does not recurse inner blocks. The return value indicates whether the list was successfully retrieved.
   *
   * @method OcaBlock#GetSignalPaths
   * @returns {Promise<Map<number, OcaSignalPath>>}
   *   A promise which resolves to a single value of type ``Map<number, OcaSignalPath>``.
   */
  GetSignalPaths(): Promise<Map<number, OcaSignalPath>>;

  /**
   * Gets the mapof signal paths in the block. Recurses inner blocks. The return value indicates whether the list was successfully retrieved.
   *
   * @method OcaBlock#GetSignalPathsRecursive
   * @returns {Promise<Map<number, OcaSignalPath>>}
   *   A promise which resolves to a single value of type ``Map<number, OcaSignalPath>``.
   */
  GetSignalPathsRecursive(): Promise<Map<number, OcaSignalPath>>;

  /**
   * Gets the identifier of the paramset most recently applied to this block.
   *
   * @method OcaBlock#GetMostRecentParamSetIdentifier
   * @returns {Promise<OcaLibVolIdentifier>}
   *   A promise which resolves to a single value of type :class:`OcaLibVolIdentifier`.
   */
  GetMostRecentParamSetIdentifier(): Promise<OcaLibVolIdentifier>;

  /**
   * Applies the referenced paramset to this block, and sets the MostRecentParamSet property. The return value indicates whether the paramset was successfully applied.
   *
   * @method OcaBlock#ApplyParamSet
   * @returns {Promise<OcaLibVolIdentifier>}
   *   A promise which resolves to a single value of type :class:`OcaLibVolIdentifier`.
   */
  ApplyParamSet(): Promise<OcaLibVolIdentifier>;

  /**
   * Returns a paramset library volume data block which represents the current state of the block -- i.e. a "snapshot".
   *
   * @method OcaBlock#GetCurrentParamSetData
   * @returns {Promise<OcaLibVolData_ParamSet>}
   *   A promise which resolves to a single value of type :class:`OcaLibVolData_ParamSet`.
   */
  GetCurrentParamSetData(): Promise<OcaLibVolData_ParamSet>;

  /**
   * Stores a paramset library volume data block which represents the current state of the block ("snapshot") in the given library.  **Replaces** the library volume at the specified LibVolIdentifier.
   *
   * @method OcaBlock#StoreCurrentParamSetData
   * @param {OcaLibVolIdentifier} LibVolIdentifier
   *
   * @returns {Promise<void>}
   */
  StoreCurrentParamSetData(
    LibVolIdentifier: IOcaLibVolIdentifier
  ): Promise<void>;

  /**
   * Gets the global blocktype. The return value indicates whether the type was successfully retrieved. If this block has no global blocktype, the  **Authority**  field of the returned  **GlobalType**  parameter will be zero.  **Added in version 2 of this class.**
   *
   * @method OcaBlock#GetGlobalType
   * @returns {Promise<OcaGlobalTypeIdentifier>}
   *   A promise which resolves to a single value of type :class:`OcaGlobalTypeIdentifier`.
   */
  GetGlobalType(): Promise<OcaGlobalTypeIdentifier>;

  /**
   * Gets the block's ONo map. The return value indicates whether the map was successfully retrieved.  **Added in version 2 of this class.**
   *
   * @method OcaBlock#GetONoMap
   * @returns {Promise<Map<number, number>>}
   *   A promise which resolves to a single value of type ``Map<number, number>``.
   */
  GetONoMap(): Promise<Map<number, number>>;

  /**
   * Returns object identifications of all objects in the block that match the given Role search string and Class ID. Return value indicates whether the method succeeded.  **Added in version 2 of this class.**
   *
   * @method OcaBlock#FindObjectsByRole
   * @param {string} SearchName
   *
   * @param {OcaStringComparisonType} NameComparisonType
   *
   * @param {string} SearchClassID
   *
   * @param {number} ResultFlags
   *
   * @returns {Promise<OcaObjectSearchResult[]>}
   *   A promise which resolves to a single value of type ``OcaObjectSearchResult[]``.
   */
  FindObjectsByRole(
    SearchName: string,
    NameComparisonType: IOcaStringComparisonType,
    SearchClassID: string,
    ResultFlags: number
  ): Promise<OcaObjectSearchResult[]>;

  /**
   * Returns block member descriptors of all objects in the block and all contained blocks that match the given Role search string and Class ID.  **Added in version 2 of this class.**
   *
   * @method OcaBlock#FindObjectsByRoleRecursive
   * @param {string} SearchName
   *
   * @param {OcaStringComparisonType} NameComparisonType
   *
   * @param {string} SearchClassID
   *
   * @param {number} ResultFlags
   *
   * @returns {Promise<OcaObjectSearchResult[]>}
   *   A promise which resolves to a single value of type ``OcaObjectSearchResult[]``.
   */
  FindObjectsByRoleRecursive(
    SearchName: string,
    NameComparisonType: IOcaStringComparisonType,
    SearchClassID: string,
    ResultFlags: number
  ): Promise<OcaObjectSearchResult[]>;

  /**
   * Returns object identifications of all objects with the given name path.  **Added in version 2 of this class.**
   *
   * @method OcaBlock#FindObjectsByPath
   * @param {string[]} SearchPath
   *
   * @param {number} ResultFlags
   *
   * @returns {Promise<OcaObjectSearchResult[]>}
   *   A promise which resolves to a single value of type ``OcaObjectSearchResult[]``.
   */
  FindObjectsByPath(
    SearchPath: string[],
    ResultFlags: number
  ): Promise<OcaObjectSearchResult[]>;

  /**
   * Returns block member descriptors of all objects in the block and all contained blocks that match the given Label search string and Class ID.  **Added in version 2 of this class.**
   *
   * @method OcaBlock#FindObjectsByLabelRecursive
   * @param {string} SearchName
   *
   * @param {OcaStringComparisonType} NameComparisonType
   *
   * @param {string} SearchClassID
   *
   * @param {number} ResultFlags
   *
   * @returns {Promise<OcaObjectSearchResult[]>}
   *   A promise which resolves to a single value of type ``OcaObjectSearchResult[]``.
   */
  FindObjectsByLabelRecursive(
    SearchName: string,
    NameComparisonType: IOcaStringComparisonType,
    SearchClassID: string,
    ResultFlags: number
  ): Promise<OcaObjectSearchResult[]>;
}
