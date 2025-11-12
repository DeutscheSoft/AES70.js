import { OcaActionObjectSearchResult } from '../../types/OcaActionObjectSearchResult.js';
import { IOcaActionObjectSearchResultFlags } from '../../types/OcaActionObjectSearchResultFlags.js';
import { IOcaBlockConfigurability } from '../../types/OcaBlockConfigurability.js';
import { OcaBlockMember } from '../../types/OcaBlockMember.js';
import { IOcaConstructionParameter } from '../../types/OcaConstructionParameter.js';
import { OcaDatasetSearchResult } from '../../types/OcaDatasetSearchResult.js';
import { OcaGlobalTypeIdentifier } from '../../types/OcaGlobalTypeIdentifier.js';
import { OcaLibVolData_ParamSet } from '../../types/OcaLibVolData_ParamSet.js';
import {
  IOcaLibVolIdentifier,
  OcaLibVolIdentifier,
} from '../../types/OcaLibVolIdentifier.js';
import { OcaObjectIdentification } from '../../types/OcaObjectIdentification.js';
import { IOcaSignalPath, OcaSignalPath } from '../../types/OcaSignalPath.js';
import { IOcaStringComparisonType } from '../../types/OcaStringComparisonType.js';
import { PropertyEvent } from '../property_event.js';
import { RemoteDevice } from '../remote_device.js';
import { OcaWorker } from './OcaWorker.js';

/**
 * Collection object for hierarchical structuring of Control Object populations.
 * The term **Block **means an instance of **OcaBlock**. A Block may contain
 * **Action Objects** and/or **Dataset Objects**, where: An Action Object is
 * defined as one of:
 *
 *  - Worker object;
 *
 *  - Agent object;
 *
 *  - Network Interface object;
 *
 *  - Network Application object.
 *
 *
 * A Dataset Object is defined an instance of **OcaDataset** or of a subclass of
 * **OcaDataset**. The term **Block Member** (or just **Member **in context)
 * means an object contained in a Block - either an Action Object or a Dataset
 * Object. The Block that contains an object is termed the object's **Owner**. A
 * Block may define a **Signal Flow** that represents internal signal flows
 * among its Members. Typically, a Block contains a set of Members that together
 * function as a processing unit -- for example, a crossover channel or mixer
 * strip.
 * @extends OcaWorker
 * @class OcaBlock
 */
export declare class OcaBlock extends OcaWorker {
  /**
   * This event is emitted whenever ActionObjects changes.
   */
  OnActionObjectsChanged: PropertyEvent<OcaObjectIdentification[]>;

  /**
   * An alias for OnActionObjectsChanged
   */
  OnMembersChanged: PropertyEvent<OcaObjectIdentification[]>;
  /**
   * This event is emitted whenever SignalPaths changes.
   */
  OnSignalPathsChanged: PropertyEvent<Map<number, OcaSignalPath>>;

  /**
   * This event is emitted whenever MostRecentParamSetIdentifier changes.
   */
  OnMostRecentParamSetIdentifierChanged: PropertyEvent<number>;

  /**
   * This event is emitted whenever DatasetObjects changes.
   */
  OnDatasetObjectsChanged: PropertyEvent<OcaObjectIdentification[]>;

  /**
   * This event is emitted whenever MostRecentParamDatasetONo changes.
   */
  OnMostRecentParamDatasetONoChanged: PropertyEvent<number>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the Block type. For statically-defined Blocks, the Block type shall be
   * a Uint32 with a value corresponding to the unique configuration of this
   * Block . For dynamically-defined Blocks , the Block type shall be the ONo of
   * the Block's Factory. For the Root Block, the value of this property shall
   * be 1. Deprecated in v3 of this class.
   *
   * @method OcaBlock#GetType
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetType(): Promise<number>;

  /**
   * Constructs an Action Object according to the given construction
   * specification and adds it to the Block. Added in version 3 of this class.
   *
   * @method OcaBlock#ConstructActionObject
   * @param {string} ClassID
   * @param {IOcaConstructionParameter[]} ConstructionParameters
   *
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  ConstructActionObject(
    ClassID: string,
    ConstructionParameters: IOcaConstructionParameter[]
  ): Promise<number>;

  /**
   * Invokes a Block Factory (i.e. an **OcaBlockFactoryAgent** instance) to
   * construct an instance of a Block inside this Block.
   *
   * @method OcaBlock#ConstructBlockUsingFactory
   * @param {number} FactoryONo
   *
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  ConstructBlockUsingFactory(FactoryONo: number): Promise<number>;

  /**
   * Invokes a Block Factory (i.e. an **OcaBlockFactoryAgent** instance) to
   * construct an instance of a Block inside this Block.
   * An alias for ConstructBlockUsingFactory.
   *
   * @method OcaBlock#ConstructMemberUsingFactory
   * @param {number} FactoryONo
   *
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  ConstructMemberUsingFactory(FactoryONo: number): Promise<number>;

  /**
   * Removes a Member from the Block and destroys the object. Deletes all Signal
   * Paths that were attached to the object's Ports.
   *
   * @method OcaBlock#DeleteMember
   * @param {number} ObjectNumber
   *
   * @returns {Promise<void>}
   */
  DeleteMember(ObjectNumber: number): Promise<void>;

  /**
   * Gets the list of Action Objects in the block. Does not recurse inner
   * Blocks. Each inner Block shall be included in the returned list as a single
   * object -- its contents shall not be enumerated. Return data shall not list
   * Dataset Objects. Previously named **GetMembers.**
   *
   * @method OcaBlock#GetActionObjects
   * @returns {Promise<OcaObjectIdentification[]>}
   *   A promise which resolves to a single value of type :class:`OcaObjectIdentification[]`.
   */
  GetActionObjects(): Promise<OcaObjectIdentification[]>;

  /**
   * Gets the list of Action Objects in the block. Does not recurse inner
   * Blocks. Each inner Block shall be included in the returned list as a single
   * object -- its contents shall not be enumerated. Return data shall not list
   * Dataset Objects. Previously named **GetMembers.**
   * An alias for GetActionObjects.
   *
   * @method OcaBlock#GetMembers
   * @returns {Promise<OcaObjectIdentification[]>}
   *   A promise which resolves to a single value of type :class:`OcaObjectIdentification[]`.
   */
  GetMembers(): Promise<OcaObjectIdentification[]>;

  /**
   * Get a list of Member Descriptors (see datatype OcaBlockMember) that
   * identify all the Action Objects in this Block and in all contained Blocks.
   * Each contained Block shall be included in the returned list, and its
   * contents shall be enumerated and returned in the list as well. Return data
   * shall not list Dataset Objects. In the event that the size of the returned
   * list exceeds the implementation limit, this method shall return the
   * **OcaStatus** value **BufferOverflow**. Previously named
   * **GetMembersRecursive.**
   *
   * @method OcaBlock#GetActionObjectsRecursive
   * @returns {Promise<OcaBlockMember[]>}
   *   A promise which resolves to a single value of type :class:`OcaBlockMember[]`.
   */
  GetActionObjectsRecursive(): Promise<OcaBlockMember[]>;

  /**
   * Get a list of Member Descriptors (see datatype OcaBlockMember) that
   * identify all the Action Objects in this Block and in all contained Blocks.
   * Each contained Block shall be included in the returned list, and its
   * contents shall be enumerated and returned in the list as well. Return data
   * shall not list Dataset Objects. In the event that the size of the returned
   * list exceeds the implementation limit, this method shall return the
   * **OcaStatus** value **BufferOverflow**. Previously named
   * **GetMembersRecursive.**
   * An alias for GetActionObjectsRecursive.
   *
   * @method OcaBlock#GetMembersRecursive
   * @returns {Promise<OcaBlockMember[]>}
   *   A promise which resolves to a single value of type :class:`OcaBlockMember[]`.
   */
  GetMembersRecursive(): Promise<OcaBlockMember[]>;

  /**
   * Adds a Signal Path to the Block.
   *
   * @method OcaBlock#AddSignalPath
   * @param {IOcaSignalPath} Path
   *
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  AddSignalPath(Path: IOcaSignalPath): Promise<number>;

  /**
   * Deletes a Signal Path from the block.
   *
   * @method OcaBlock#DeleteSignalPath
   * @param {number} Index
   *
   * @returns {Promise<void>}
   */
  DeleteSignalPath(Index: number): Promise<void>;

  /**
   * Gets the map of Signal Paths in the Block. Does not recurse inner Blocks.
   *
   * @method OcaBlock#GetSignalPaths
   * @returns {Promise<Map<number, OcaSignalPath>>}
   *   A promise which resolves to a single value of type ``Map<number, OcaSignalPath>``.
   */
  GetSignalPaths(): Promise<Map<number, OcaSignalPath>>;

  /**
   * Gets the map of Signal Paths in the Block and all inner Blocks. In the
   * event that the size of the returned data exceeds the implementation limit,
   * this method shall return the **OcaStatus** value **BufferOverflow**.
   *
   * @method OcaBlock#GetSignalPathsRecursive
   * @returns {Promise<Map<number, OcaSignalPath>>}
   *   A promise which resolves to a single value of type ``Map<number, OcaSignalPath>``.
   */
  GetSignalPathsRecursive(): Promise<Map<number, OcaSignalPath>>;

  /**
   * Gets the identifier of the ParamSet most recently applied to this Block.
   * **Deprecated** in v3 of this class.
   *
   * @method OcaBlock#GetMostRecentParamSetIdentifier
   * @returns {Promise<OcaLibVolIdentifier>}
   *   A promise which resolves to a single value of type :class:`OcaLibVolIdentifier`.
   */
  GetMostRecentParamSetIdentifier(): Promise<OcaLibVolIdentifier>;

  /**
   * Applies the referenced ParamSet to this block, and sets the
   * **MostRecentParamSetIdentifier** property. **Deprecated** in v3 of this
   * class (OCA 1.5)** -** controllers should use the new **OcaDataset** method
   * of storing ParamSets,
   *
   * @method OcaBlock#ApplyParamSet
   * @returns {Promise<OcaLibVolIdentifier>}
   *   A promise which resolves to a single value of type :class:`OcaLibVolIdentifier`.
   */
  ApplyParamSet(): Promise<OcaLibVolIdentifier>;

  /**
   * Returns a ParamSet library volume data block which represents the current
   * state of the block -- i.e. a "snapshot". **Deprecated** in v3 of this class
   * (OCA 1.5)** -** controllers should use the new **OcaDataset** method of
   * storing ParamSet, and use normal **OcaDataset** reading procedures for
   * retrieving ParamSets.
   *
   * @method OcaBlock#GetCurrentParamSetData
   * @returns {Promise<OcaLibVolData_ParamSet>}
   *   A promise which resolves to a single value of type :class:`OcaLibVolData_ParamSet`.
   */
  GetCurrentParamSetData(): Promise<OcaLibVolData_ParamSet>;

  /**
   * Stores a ParamSet library volume data block which represents the current
   * state of the block. **Deprecated** in v3 of this class (OCA 1.5)** -**
   * controllers should use the new **OcaDataset** method of storing ParamSets.
   * If using the (current) OcaDataset mechanism, the dataset identified must
   * have been created prior to calling this method.
   *
   * @method OcaBlock#StoreCurrentParamSetData
   * @param {IOcaLibVolIdentifier} Identifier
   *
   * @returns {Promise<void>}
   */
  StoreCurrentParamSetData(Identifier: IOcaLibVolIdentifier): Promise<void>;

  /**
   * Gets the Global Blocktype. If this Block has no Global Blocktype, the
   * **Authority** field of the returned **GlobalType** parameter shall be zero.
   * Added in version 2 of this class.
   *
   * @method OcaBlock#GetGlobalType
   * @returns {Promise<OcaGlobalTypeIdentifier>}
   *   A promise which resolves to a single value of type :class:`OcaGlobalTypeIdentifier`.
   */
  GetGlobalType(): Promise<OcaGlobalTypeIdentifier>;

  /**
   * Gets the Block's ONo map. Added in version 2 of this class.
   *
   * @method OcaBlock#GetONoMap
   * @returns {Promise<Map<number, number>>}
   *   A promise which resolves to a single value of type ``Map<number, number>``.
   */
  GetONoMap(): Promise<Map<number, number>>;

  /**
   * Returns object identifications of all Action Objects in the Block that
   * match the given Role search string and Class ID. Return data shall not list
   * Dataset Objects. Replaces deprecated method **FindMembersByRole**.
   *
   * @method OcaBlock#FindActionObjectsByRole
   * @param {string} SearchName
   * @param {IOcaStringComparisonType} NameComparisonType
   * @param {string} SearchClassID
   * @param {IOcaActionObjectSearchResultFlags} ResultFlags
   *
   * @returns {Promise<OcaActionObjectSearchResult[]>}
   *   A promise which resolves to a single value of type :class:`OcaActionObjectSearchResult[]`.
   */
  FindActionObjectsByRole(
    SearchName: string,
    NameComparisonType: IOcaStringComparisonType,
    SearchClassID: string,
    ResultFlags: IOcaActionObjectSearchResultFlags
  ): Promise<OcaActionObjectSearchResult[]>;

  /**
   * Returns object identifications of all Action Objects in the Block that
   * match the given Role search string and Class ID. Return data shall not list
   * Dataset Objects. Replaces deprecated method **FindMembersByRole**.
   * An alias for FindActionObjectsByRole.
   *
   * @method OcaBlock#FindObjectsByRole
   * @param {string} SearchName
   * @param {IOcaStringComparisonType} NameComparisonType
   * @param {string} SearchClassID
   * @param {IOcaActionObjectSearchResultFlags} ResultFlags
   *
   * @returns {Promise<OcaActionObjectSearchResult[]>}
   *   A promise which resolves to a single value of type :class:`OcaActionObjectSearchResult[]`.
   */
  FindObjectsByRole(
    SearchName: string,
    NameComparisonType: IOcaStringComparisonType,
    SearchClassID: string,
    ResultFlags: IOcaActionObjectSearchResultFlags
  ): Promise<OcaActionObjectSearchResult[]>;

  /**
   * Returns descriptors of all Action Objects that match the given Role search
   * string and Class ID. Searches this Block and all contained Blocks. Return
   * data shall not list Dataset Objects. In the event that the size of the
   * returned data exceeds the implementation limit, this method shall return
   * the **OcaStatus** value **BufferOverflow**.
   *
   * @method OcaBlock#FindActionObjectsByRoleRecursive
   * @param {string} SearchName
   * @param {IOcaStringComparisonType} NameComparisonType
   * @param {string} SearchClassID
   * @param {IOcaActionObjectSearchResultFlags} ResultFlags
   *
   * @returns {Promise<OcaActionObjectSearchResult[]>}
   *   A promise which resolves to a single value of type :class:`OcaActionObjectSearchResult[]`.
   */
  FindActionObjectsByRoleRecursive(
    SearchName: string,
    NameComparisonType: IOcaStringComparisonType,
    SearchClassID: string,
    ResultFlags: IOcaActionObjectSearchResultFlags
  ): Promise<OcaActionObjectSearchResult[]>;

  /**
   * Returns descriptors of all Action Objects that match the given Role search
   * string and Class ID. Searches this Block and all contained Blocks. Return
   * data shall not list Dataset Objects. In the event that the size of the
   * returned data exceeds the implementation limit, this method shall return
   * the **OcaStatus** value **BufferOverflow**.
   * An alias for FindActionObjectsByRoleRecursive.
   *
   * @method OcaBlock#FindObjectsByRoleRecursive
   * @param {string} SearchName
   * @param {IOcaStringComparisonType} NameComparisonType
   * @param {string} SearchClassID
   * @param {IOcaActionObjectSearchResultFlags} ResultFlags
   *
   * @returns {Promise<OcaActionObjectSearchResult[]>}
   *   A promise which resolves to a single value of type :class:`OcaActionObjectSearchResult[]`.
   */
  FindObjectsByRoleRecursive(
    SearchName: string,
    NameComparisonType: IOcaStringComparisonType,
    SearchClassID: string,
    ResultFlags: IOcaActionObjectSearchResultFlags
  ): Promise<OcaActionObjectSearchResult[]>;

  /**
   * Returns descriptors of all Action Objects that match the given Label search
   * string and Class ID. Searches this Block and all contained Blocks. Return
   * data shall not list Dataset Objects. In the event that the size of the
   * returned data exceeds the implementation limit, this method shall return
   * the **OcaStatus** value **BufferOverflow**.
   *
   * @method OcaBlock#FindActionObjectsByLabelRecursive
   * @param {string} SearchName
   * @param {IOcaStringComparisonType} NameComparisonType
   * @param {string} SearchClassID
   * @param {IOcaActionObjectSearchResultFlags} ResultFlags
   *
   * @returns {Promise<OcaActionObjectSearchResult[]>}
   *   A promise which resolves to a single value of type :class:`OcaActionObjectSearchResult[]`.
   */
  FindActionObjectsByLabelRecursive(
    SearchName: string,
    NameComparisonType: IOcaStringComparisonType,
    SearchClassID: string,
    ResultFlags: IOcaActionObjectSearchResultFlags
  ): Promise<OcaActionObjectSearchResult[]>;

  /**
   * Returns descriptors of all Action Objects that match the given Label search
   * string and Class ID. Searches this Block and all contained Blocks. Return
   * data shall not list Dataset Objects. In the event that the size of the
   * returned data exceeds the implementation limit, this method shall return
   * the **OcaStatus** value **BufferOverflow**.
   * An alias for FindActionObjectsByLabelRecursive.
   *
   * @method OcaBlock#FindObjectsByLabelRecursive
   * @param {string} SearchName
   * @param {IOcaStringComparisonType} NameComparisonType
   * @param {string} SearchClassID
   * @param {IOcaActionObjectSearchResultFlags} ResultFlags
   *
   * @returns {Promise<OcaActionObjectSearchResult[]>}
   *   A promise which resolves to a single value of type :class:`OcaActionObjectSearchResult[]`.
   */
  FindObjectsByLabelRecursive(
    SearchName: string,
    NameComparisonType: IOcaStringComparisonType,
    SearchClassID: string,
    ResultFlags: IOcaActionObjectSearchResultFlags
  ): Promise<OcaActionObjectSearchResult[]>;

  /**
   * Returns descriptors of all Action Objects with the given Role Path. Return
   * data shall not list Dataset Objects.
   *
   * @method OcaBlock#FindActionObjectsByRolePath
   * @param {string[]} SearchPath
   * @param {IOcaActionObjectSearchResultFlags} ResultFlags
   *
   * @returns {Promise<OcaActionObjectSearchResult[]>}
   *   A promise which resolves to a single value of type :class:`OcaActionObjectSearchResult[]`.
   */
  FindActionObjectsByRolePath(
    SearchPath: string[],
    ResultFlags: IOcaActionObjectSearchResultFlags
  ): Promise<OcaActionObjectSearchResult[]>;

  /**
   * Returns descriptors of all Action Objects with the given Role Path. Return
   * data shall not list Dataset Objects.
   * An alias for FindActionObjectsByRolePath.
   *
   * @method OcaBlock#FindObjectsByPath
   * @param {string[]} SearchPath
   * @param {IOcaActionObjectSearchResultFlags} ResultFlags
   *
   * @returns {Promise<OcaActionObjectSearchResult[]>}
   *   A promise which resolves to a single value of type :class:`OcaActionObjectSearchResult[]`.
   */
  FindObjectsByPath(
    SearchPath: string[],
    ResultFlags: IOcaActionObjectSearchResultFlags
  ): Promise<OcaActionObjectSearchResult[]>;

  /**
   * Gets the Block's Configurability.
   *
   * @method OcaBlock#GetConfigurability
   * @returns {Promise<IOcaBlockConfigurability>}
   *   A promise which resolves to a single value of type ``IOcaBlockConfigurability``.
   */
  GetConfigurability(): Promise<IOcaBlockConfigurability>;

  /**
   * Gets the ONo of the paramDataset most recently applied to this Block.
   *
   * @method OcaBlock#GetMostRecentParamDatasetONo
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetMostRecentParamDatasetONo(): Promise<number>;

  /**
   * Applies the**** ParamDataset with the given ONo to this block, and sets the
   * **MostRecentParamDatasetONo** property.
   *
   * @method OcaBlock#ApplyParamDataset
   * @param {number} ONo
   *
   * @returns {Promise<void>}
   */
  ApplyParamDataset(ONo: number): Promise<void>;

  /**
   * Stores current parameter values of this Block in the Dataset Object
   * identified by the ONo parameter. The Dataset Object must exist - this
   * method shall not create it.
   *
   * @method OcaBlock#StoreCurrentParameterData
   * @param {number} ONo
   *
   * @returns {Promise<void>}
   */
  StoreCurrentParameterData(ONo: number): Promise<void>;

  /**
   * Returns current parameter values of this Block to the Controller in a
   * single **OcaBlob**. Format of the parameter data shall be
   * implementation-specific and not defined in this standard.
   *
   * @method OcaBlock#FetchCurrentParameterData
   * @returns {Promise<Uint8Array>}
   *   A promise which resolves to a single value of type ``Uint8Array``.
   */
  FetchCurrentParameterData(): Promise<Uint8Array>;

  /**
   * Applies the supplied parameter data to the Block. Format of the parameter
   * data shall be implementation-specific and not defined in this standard. The
   * implementation may elect to save the supplied data in a ParamDataset. If
   * so, this method shall set the **MostRecentParamDatasetONo** property to the
   * object number of this ParamDataset. If not, this method shall set
   * **MostRecentParamDatasetONo** to zero.
   *
   * @method OcaBlock#ApplyParameterData
   * @returns {Promise<Uint8Array>}
   *   A promise which resolves to a single value of type ``Uint8Array``.
   */
  ApplyParameterData(): Promise<Uint8Array>;

  /**
   * Constructs a Dataset and its Dataset Object.
   *
   * @method OcaBlock#ConstructDataset
   * @param {string} ClassID
   * @param {string} Name
   * @param {string} Type
   * @param {number|BigInt} MaxSize
   * @param {Uint8Array} InitialContents
   *
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  ConstructDataset(
    ClassID: string,
    Name: string,
    Type: string,
    MaxSize: number | BigInt,
    InitialContents: Uint8Array
  ): Promise<number>;

  /**
   * Duplicates a Dataset and its Dataset Object.
   *
   * @method OcaBlock#DuplicateDataset
   * @param {number} OldONo
   * @param {number} TargetBlockONo
   * @param {string} NewName
   * @param {number|BigInt} NewMaxSize
   *
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  DuplicateDataset(
    OldONo: number,
    TargetBlockONo: number,
    NewName: string,
    NewMaxSize: number | BigInt
  ): Promise<number>;

  /**
   * Returns identifiers of Dataset Objects in the Block. Shall not recurse
   * inner Blocks. Return data shall not list Action Objects.
   *
   * @method OcaBlock#GetDatasetObjects
   * @returns {Promise<OcaObjectIdentification[]>}
   *   A promise which resolves to a single value of type :class:`OcaObjectIdentification[]`.
   */
  GetDatasetObjects(): Promise<OcaObjectIdentification[]>;

  /**
   * Returns descriptors of Dataset Objects in the Block and in contained
   * Blocks. Return data shall not list Action Objects. In the event that the
   * size of the returned data exceeds the implementation limit, this method
   * shall return the **OcaStatus** value **BufferOverflow**.
   *
   * @method OcaBlock#GetDatasetObjectsRecursive
   * @returns {Promise<OcaBlockMember[]>}
   *   A promise which resolves to a single value of type :class:`OcaBlockMember[]`.
   */
  GetDatasetObjectsRecursive(): Promise<OcaBlockMember[]>;

  /**
   * Returns descriptors of all Datasets in the block that match the given
   * search terms. Note: If substring comparison type is selected, null search
   * terms match anything. Return data shall not list Action Objects.
   *
   * @method OcaBlock#FindDatasets
   * @param {string} Name
   * @param {IOcaStringComparisonType} NameComparisonType
   * @param {string} Type
   * @param {IOcaStringComparisonType} TypeComparisonType
   *
   * @returns {Promise<OcaDatasetSearchResult[]>}
   *   A promise which resolves to a single value of type :class:`OcaDatasetSearchResult[]`.
   */
  FindDatasets(
    Name: string,
    NameComparisonType: IOcaStringComparisonType,
    Type: string,
    TypeComparisonType: IOcaStringComparisonType
  ): Promise<OcaDatasetSearchResult[]>;

  /**
   * Returns descriptors of all Datasets in this Block and all contained Blocks
   * that match the given search terms. Note: If substring comparison type is
   * selected, null search terms match anything. In the event that the size of
   * the returned list exceeds the implementation limit, this method shall
   * return the **OcaStatus** value **BufferOverflow**.
   *
   * @method OcaBlock#FindDatasetsRecursive
   * @param {string} Name
   * @param {IOcaStringComparisonType} NameComparisonType
   * @param {string} Type
   * @param {IOcaStringComparisonType} TypeComparisonType
   *
   * @returns {Promise<OcaDatasetSearchResult[]>}
   *   A promise which resolves to a single value of type :class:`OcaDatasetSearchResult[]`.
   */
  FindDatasetsRecursive(
    Name: string,
    NameComparisonType: IOcaStringComparisonType,
    Type: string,
    TypeComparisonType: IOcaStringComparisonType
  ): Promise<OcaDatasetSearchResult[]>;

  /**
   * Gets the value of property **BlockFactoryONo**
   *
   * @method OcaBlock#GetBlockFactoryONo
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetBlockFactoryONo(): Promise<number>;
}
