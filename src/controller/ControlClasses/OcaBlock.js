import { OcaActionObjectSearchResult } from '../../OCP1/OcaActionObjectSearchResult.js';
import { OcaActionObjectSearchResultFlags } from '../../OCP1/OcaActionObjectSearchResultFlags.js';
import { OcaBlockConfigurability } from '../../OCP1/OcaBlockConfigurability.js';
import { OcaBlockMember } from '../../OCP1/OcaBlockMember.js';
import { OcaConstructionParameter } from '../../OCP1/OcaConstructionParameter.js';
import { OcaDatasetSearchResult } from '../../OCP1/OcaDatasetSearchResult.js';
import { OcaGlobalTypeIdentifier } from '../../OCP1/OcaGlobalTypeIdentifier.js';
import { OcaLibVolData_ParamSet } from '../../OCP1/OcaLibVolData_ParamSet.js';
import { OcaLibVolIdentifier } from '../../OCP1/OcaLibVolIdentifier.js';
import { OcaList } from '../../OCP1/OcaList.js';
import { OcaLongBlob } from '../../OCP1/OcaLongBlob.js';
import { OcaMap } from '../../OCP1/OcaMap.js';
import { OcaObjectIdentification } from '../../OCP1/OcaObjectIdentification.js';
import { OcaSignalPath } from '../../OCP1/OcaSignalPath.js';
import { OcaString } from '../../OCP1/OcaString.js';
import { OcaStringComparisonType } from '../../OCP1/OcaStringComparisonType.js';
import { OcaUint16 } from '../../OCP1/OcaUint16.js';
import { OcaUint32 } from '../../OCP1/OcaUint32.js';
import { OcaUint64 } from '../../OCP1/OcaUint64.js';
import { String16 } from '../../OCP1/String16.js';
import { make_control_class } from '../make_control_class.js';
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
export const OcaBlock = make_control_class(
  'OcaBlock',
  3,
  '\u0001\u0001\u0003',
  3,
  OcaWorker,
  [
    ['GetType', 3, 1, [], [OcaUint32]],
    [
      'ConstructActionObject',
      3,
      2,
      [String16, OcaList(OcaConstructionParameter)],
      [OcaUint32],
    ],
    [
      'ConstructBlockUsingFactory',
      3,
      3,
      [OcaUint32],
      [OcaUint32],
      ['ConstructMemberUsingFactory'],
    ],
    ['DeleteMember', 3, 4, [OcaUint32], []],
    [
      'GetActionObjects',
      3,
      5,
      [],
      [OcaList(OcaObjectIdentification)],
      ['GetMembers'],
    ],
    [
      'GetActionObjectsRecursive',
      3,
      6,
      [],
      [OcaList(OcaBlockMember)],
      ['GetMembersRecursive'],
    ],
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
      'FindActionObjectsByRole',
      3,
      17,
      [
        OcaString,
        OcaStringComparisonType,
        String16,
        OcaActionObjectSearchResultFlags,
      ],
      [OcaList(OcaActionObjectSearchResult)],
      ['FindObjectsByRole'],
    ],
    [
      'FindActionObjectsByRoleRecursive',
      3,
      18,
      [
        OcaString,
        OcaStringComparisonType,
        String16,
        OcaActionObjectSearchResultFlags,
      ],
      [OcaList(OcaActionObjectSearchResult)],
      ['FindObjectsByRoleRecursive'],
    ],
    [
      'FindActionObjectsByLabelRecursive',
      3,
      19,
      [
        OcaString,
        OcaStringComparisonType,
        String16,
        OcaActionObjectSearchResultFlags,
      ],
      [OcaList(OcaActionObjectSearchResult)],
      ['FindObjectsByLabelRecursive'],
    ],
    [
      'FindActionObjectsByRolePath',
      3,
      20,
      [OcaList(OcaString), OcaActionObjectSearchResultFlags],
      [OcaList(OcaActionObjectSearchResult)],
      ['FindObjectsByPath'],
    ],
    ['GetConfigurability', 3, 21, [], [OcaBlockConfigurability]],
    ['GetMostRecentParamDatasetONo', 3, 22, [], [OcaUint32]],
    ['ApplyParamDataset', 3, 23, [OcaUint32], []],
    ['StoreCurrentParameterData', 3, 24, [OcaUint32], []],
    ['FetchCurrentParameterData', 3, 25, [], [OcaLongBlob]],
    ['ApplyParameterData', 3, 26, [], [OcaLongBlob]],
    [
      'ConstructDataset',
      3,
      27,
      [String16, OcaString, OcaString, OcaUint64, OcaLongBlob],
      [OcaUint32],
    ],
    [
      'DuplicateDataset',
      3,
      28,
      [OcaUint32, OcaUint32, OcaString, OcaUint64],
      [OcaUint32],
    ],
    ['GetDatasetObjects', 3, 29, [], [OcaList(OcaObjectIdentification)]],
    ['GetDatasetObjectsRecursive', 3, 30, [], [OcaList(OcaBlockMember)]],
    [
      'FindDatasets',
      3,
      31,
      [OcaString, OcaStringComparisonType, OcaString, OcaStringComparisonType],
      [OcaList(OcaDatasetSearchResult)],
    ],
    [
      'FindDatasetsRecursive',
      3,
      32,
      [OcaString, OcaStringComparisonType, OcaString, OcaStringComparisonType],
      [OcaList(OcaDatasetSearchResult)],
    ],
    ['GetBlockFactoryONo', 3, 33, [], [OcaUint32]],
  ],
  [
    ['Type', [OcaUint32], 3, 1, true, false, null],
    [
      'ActionObjects',
      [OcaList(OcaObjectIdentification)],
      3,
      2,
      false,
      false,
      ['Members'],
    ],
    [
      'SignalPaths',
      [OcaMap(OcaUint16, OcaSignalPath)],
      3,
      3,
      false,
      false,
      null,
    ],
    ['MostRecentParamSetIdentifier', [OcaUint32], 3, 4, false, false, null],
    ['GlobalType', [OcaGlobalTypeIdentifier], 3, 5, true, false, null],
    ['ONoMap', [OcaMap(OcaUint32, OcaUint32)], 3, 6, true, false, null],
    [
      'DatasetObjects',
      [OcaList(OcaObjectIdentification)],
      3,
      7,
      false,
      false,
      null,
    ],
    ['Configurability', [OcaBlockConfigurability], 3, 8, true, false, null],
    ['MostRecentParamDatasetONo', [OcaUint32], 3, 9, false, false, null],
    ['BlockFactoryONo', [OcaUint32], 3, 10, true, false, null],
  ],
  []
);

/**
 * Gets the Block type. For statically-defined Blocks, the Block type shall be a
 * Uint32 with a value corresponding to the unique configuration of this Block .
 * For dynamically-defined Blocks , the Block type shall be the ONo of the
 * Block's Factory. For the Root Block, the value of this property shall be 1.
 * Deprecated in v3 of this class.
 *
 * @method OcaBlock#GetType
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Constructs an Action Object according to the given construction specification
 * and adds it to the Block. Added in version 3 of this class.
 *
 * @method OcaBlock#ConstructActionObject
 * @param {string} ClassID
 * @param {IOcaConstructionParameter[]} ConstructionParameters
 *
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
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
/**
 * Removes a Member from the Block and destroys the object. Deletes all Signal
 * Paths that were attached to the object's Ports.
 *
 * @method OcaBlock#DeleteMember
 * @param {number} ObjectNumber
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the list of Action Objects in the block. Does not recurse inner Blocks.
 * Each inner Block shall be included in the returned list as a single object --
 * its contents shall not be enumerated. Return data shall not list Dataset
 * Objects. Previously named **GetMembers.**
 *
 * @method OcaBlock#GetActionObjects
 * @returns {Promise<OcaObjectIdentification[]>}
 *   A promise which resolves to a single value of type :class:`OcaObjectIdentification[]`.
 */
/**
 * Gets the list of Action Objects in the block. Does not recurse inner Blocks.
 * Each inner Block shall be included in the returned list as a single object --
 * its contents shall not be enumerated. Return data shall not list Dataset
 * Objects. Previously named **GetMembers.**
 * An alias for GetActionObjects.
 *
 * @method OcaBlock#GetMembers
 * @returns {Promise<OcaObjectIdentification[]>}
 *   A promise which resolves to a single value of type :class:`OcaObjectIdentification[]`.
 */
/**
 * Get a list of Member Descriptors (see datatype OcaBlockMember) that identify
 * all the Action Objects in this Block and in all contained Blocks. Each
 * contained Block shall be included in the returned list, and its contents
 * shall be enumerated and returned in the list as well. Return data shall not
 * list Dataset Objects. In the event that the size of the returned list exceeds
 * the implementation limit, this method shall return the **OcaStatus** value
 * **BufferOverflow**. Previously named **GetMembersRecursive.**
 *
 * @method OcaBlock#GetActionObjectsRecursive
 * @returns {Promise<OcaBlockMember[]>}
 *   A promise which resolves to a single value of type :class:`OcaBlockMember[]`.
 */
/**
 * Get a list of Member Descriptors (see datatype OcaBlockMember) that identify
 * all the Action Objects in this Block and in all contained Blocks. Each
 * contained Block shall be included in the returned list, and its contents
 * shall be enumerated and returned in the list as well. Return data shall not
 * list Dataset Objects. In the event that the size of the returned list exceeds
 * the implementation limit, this method shall return the **OcaStatus** value
 * **BufferOverflow**. Previously named **GetMembersRecursive.**
 * An alias for GetActionObjectsRecursive.
 *
 * @method OcaBlock#GetMembersRecursive
 * @returns {Promise<OcaBlockMember[]>}
 *   A promise which resolves to a single value of type :class:`OcaBlockMember[]`.
 */
/**
 * Adds a Signal Path to the Block.
 *
 * @method OcaBlock#AddSignalPath
 * @param {IOcaSignalPath} Path
 *
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Deletes a Signal Path from the block.
 *
 * @method OcaBlock#DeleteSignalPath
 * @param {number} Index
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the map of Signal Paths in the Block. Does not recurse inner Blocks.
 *
 * @method OcaBlock#GetSignalPaths
 * @returns {Promise<Map<number, OcaSignalPath>>}
 *   A promise which resolves to a single value of type ``Map<number, OcaSignalPath>``.
 */
/**
 * Gets the map of Signal Paths in the Block and all inner Blocks. In the event
 * that the size of the returned data exceeds the implementation limit, this
 * method shall return the **OcaStatus** value **BufferOverflow**.
 *
 * @method OcaBlock#GetSignalPathsRecursive
 * @returns {Promise<Map<number, OcaSignalPath>>}
 *   A promise which resolves to a single value of type ``Map<number, OcaSignalPath>``.
 */
/**
 * Gets the identifier of the ParamSet most recently applied to this Block.
 * **Deprecated** in v3 of this class.
 *
 * @method OcaBlock#GetMostRecentParamSetIdentifier
 * @returns {Promise<OcaLibVolIdentifier>}
 *   A promise which resolves to a single value of type :class:`OcaLibVolIdentifier`.
 */
/**
 * Applies the referenced ParamSet to this block, and sets the
 * **MostRecentParamSetIdentifier** property. **Deprecated** in v3 of this class
 * (OCA 1.5)** -** controllers should use the new **OcaDataset** method of
 * storing ParamSets,
 *
 * @method OcaBlock#ApplyParamSet
 * @returns {Promise<OcaLibVolIdentifier>}
 *   A promise which resolves to a single value of type :class:`OcaLibVolIdentifier`.
 */
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
/**
 * Stores a ParamSet library volume data block which represents the current
 * state of the block. **Deprecated** in v3 of this class (OCA 1.5)** -**
 * controllers should use the new **OcaDataset** method of storing ParamSets. If
 * using the (current) OcaDataset mechanism, the dataset identified must have
 * been created prior to calling this method.
 *
 * @method OcaBlock#StoreCurrentParamSetData
 * @param {IOcaLibVolIdentifier} Identifier
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the Global Blocktype. If this Block has no Global Blocktype, the
 * **Authority** field of the returned **GlobalType** parameter shall be zero.
 * Added in version 2 of this class.
 *
 * @method OcaBlock#GetGlobalType
 * @returns {Promise<OcaGlobalTypeIdentifier>}
 *   A promise which resolves to a single value of type :class:`OcaGlobalTypeIdentifier`.
 */
/**
 * Gets the Block's ONo map. Added in version 2 of this class.
 *
 * @method OcaBlock#GetONoMap
 * @returns {Promise<Map<number, number>>}
 *   A promise which resolves to a single value of type ``Map<number, number>``.
 */
/**
 * Returns object identifications of all Action Objects in the Block that match
 * the given Role search string and Class ID. Return data shall not list Dataset
 * Objects. Replaces deprecated method **FindMembersByRole**.
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
/**
 * Returns object identifications of all Action Objects in the Block that match
 * the given Role search string and Class ID. Return data shall not list Dataset
 * Objects. Replaces deprecated method **FindMembersByRole**.
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
/**
 * Returns descriptors of all Action Objects that match the given Role search
 * string and Class ID. Searches this Block and all contained Blocks. Return
 * data shall not list Dataset Objects. In the event that the size of the
 * returned data exceeds the implementation limit, this method shall return the
 * **OcaStatus** value **BufferOverflow**.
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
/**
 * Returns descriptors of all Action Objects that match the given Role search
 * string and Class ID. Searches this Block and all contained Blocks. Return
 * data shall not list Dataset Objects. In the event that the size of the
 * returned data exceeds the implementation limit, this method shall return the
 * **OcaStatus** value **BufferOverflow**.
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
/**
 * Returns descriptors of all Action Objects that match the given Label search
 * string and Class ID. Searches this Block and all contained Blocks. Return
 * data shall not list Dataset Objects. In the event that the size of the
 * returned data exceeds the implementation limit, this method shall return the
 * **OcaStatus** value **BufferOverflow**.
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
/**
 * Returns descriptors of all Action Objects that match the given Label search
 * string and Class ID. Searches this Block and all contained Blocks. Return
 * data shall not list Dataset Objects. In the event that the size of the
 * returned data exceeds the implementation limit, this method shall return the
 * **OcaStatus** value **BufferOverflow**.
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
/**
 * Gets the Block's Configurability.
 *
 * @method OcaBlock#GetConfigurability
 * @returns {Promise<IOcaBlockConfigurability>}
 *   A promise which resolves to a single value of type ``IOcaBlockConfigurability``.
 */
/**
 * Gets the ONo of the paramDataset most recently applied to this Block.
 *
 * @method OcaBlock#GetMostRecentParamDatasetONo
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Applies the**** ParamDataset with the given ONo to this block, and sets the
 * **MostRecentParamDatasetONo** property.
 *
 * @method OcaBlock#ApplyParamDataset
 * @param {number} ONo
 *
 * @returns {Promise<void>}
 */
/**
 * Stores current parameter values of this Block in the Dataset Object
 * identified by the ONo parameter. The Dataset Object must exist - this method
 * shall not create it.
 *
 * @method OcaBlock#StoreCurrentParameterData
 * @param {number} ONo
 *
 * @returns {Promise<void>}
 */
/**
 * Returns current parameter values of this Block to the Controller in a single
 * **OcaBlob**. Format of the parameter data shall be implementation-specific
 * and not defined in this standard.
 *
 * @method OcaBlock#FetchCurrentParameterData
 * @returns {Promise<Uint8Array>}
 *   A promise which resolves to a single value of type ``Uint8Array``.
 */
/**
 * Applies the supplied parameter data to the Block. Format of the parameter
 * data shall be implementation-specific and not defined in this standard. The
 * implementation may elect to save the supplied data in a ParamDataset. If so,
 * this method shall set the **MostRecentParamDatasetONo** property to the
 * object number of this ParamDataset. If not, this method shall set
 * **MostRecentParamDatasetONo** to zero.
 *
 * @method OcaBlock#ApplyParameterData
 * @returns {Promise<Uint8Array>}
 *   A promise which resolves to a single value of type ``Uint8Array``.
 */
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
/**
 * Returns identifiers of Dataset Objects in the Block. Shall not recurse inner
 * Blocks. Return data shall not list Action Objects.
 *
 * @method OcaBlock#GetDatasetObjects
 * @returns {Promise<OcaObjectIdentification[]>}
 *   A promise which resolves to a single value of type :class:`OcaObjectIdentification[]`.
 */
/**
 * Returns descriptors of Dataset Objects in the Block and in contained Blocks.
 * Return data shall not list Action Objects. In the event that the size of the
 * returned data exceeds the implementation limit, this method shall return the
 * **OcaStatus** value **BufferOverflow**.
 *
 * @method OcaBlock#GetDatasetObjectsRecursive
 * @returns {Promise<OcaBlockMember[]>}
 *   A promise which resolves to a single value of type :class:`OcaBlockMember[]`.
 */
/**
 * Returns descriptors of all Datasets in the block that match the given search
 * terms. Note: If substring comparison type is selected, null search terms
 * match anything. Return data shall not list Action Objects.
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
/**
 * Returns descriptors of all Datasets in this Block and all contained Blocks
 * that match the given search terms. Note: If substring comparison type is
 * selected, null search terms match anything. In the event that the size of the
 * returned list exceeds the implementation limit, this method shall return the
 * **OcaStatus** value **BufferOverflow**.
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
/**
 * Gets the value of property **BlockFactoryONo**
 *
 * @method OcaBlock#GetBlockFactoryONo
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * This event is emitted when the property ``ActionObjects`` changes in the remote object.
 * The property ``ActionObjects`` is described in the AES70 standard as follows.
 * List of object identifiers of Action Objects in the block.
 *
 * @member {PropertyEvent<OcaObjectIdentification[]>} OcaBlock#OnActionObjectsChanged
 */
/**
 * An alias for OnActionObjectsChanged
 *
 * @member {PropertyEvent<OcaObjectIdentification[]>} OcaBlock#OnMembersChanged
 */
/**
 * This event is emitted when the property ``SignalPaths`` changes in the remote object.
 * The property ``SignalPaths`` is described in the AES70 standard as follows.
 * Map of Signal Paths in the Block. Key is Block-local signal path ID.
 *
 * @member {PropertyEvent<Map<number, OcaSignalPath>>} OcaBlock#OnSignalPathsChanged
 */
/**
 * This event is emitted when the property ``MostRecentParamSetIdentifier`` changes in the remote object.
 * The property ``MostRecentParamSetIdentifier`` is described in the AES70 standard as follows.
 * Identifier of the ParamSet most recently applied to this block.
 * **Deprecated** in v3 of this class (OCA 1.5)** -** controllers should use the
 * new **OcaDataset** method of storing ParamSets.
 *
 * @member {PropertyEvent<number>} OcaBlock#OnMostRecentParamSetIdentifierChanged
 */
/**
 * This event is emitted when the property ``DatasetObjects`` changes in the remote object.
 * The property ``DatasetObjects`` is described in the AES70 standard as follows.
 * List of object identifiers of Dataset Objects in the Block.
 *
 * @member {PropertyEvent<OcaObjectIdentification[]>} OcaBlock#OnDatasetObjectsChanged
 */
/**
 * This event is emitted when the property ``MostRecentParamDatasetONo`` changes in the remote object.
 * The property ``MostRecentParamDatasetONo`` is described in the AES70 standard as follows.
 * ONo of the paramDataset most recently applied to this Block. A value of zero
 * indicates that there is no current paramDataset. Replaces
 * **MostRecentParamSetIdentifier**. Added in version 3 (OCA 1.5).
 *
 * @member {PropertyEvent<number>} OcaBlock#OnMostRecentParamDatasetONoChanged
 */
