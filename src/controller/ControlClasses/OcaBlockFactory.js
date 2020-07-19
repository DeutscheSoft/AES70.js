import { make_control_class } from '../Base.js';
import { OcaWorker } from './OcaWorker.js';
import { OcaGlobalTypeIdentifier } from '../../OCP1/OcaGlobalTypeIdentifier.js';
import { OcaList } from '../../OCP1/OcaList.js';
import { OcaMap } from '../../OCP1/OcaMap.js';
import { OcaPortMode } from '../../OCP1/OcaPortMode.js';
import { OcaProtoObjectIdentification } from '../../OCP1/OcaProtoObjectIdentification.js';
import { OcaProtoPort } from '../../OCP1/OcaProtoPort.js';
import { OcaProtoPortID } from '../../OCP1/OcaProtoPortID.js';
import { OcaProtoSignalPath } from '../../OCP1/OcaProtoSignalPath.js';
import { OcaString } from '../../OCP1/OcaString.js';
import { OcaUint16 } from '../../OCP1/OcaUint16.js';
import { OcaUint32 } from '../../OCP1/OcaUint32.js';
import { String16 } from '../../OCP1/String16.js';

/**
 * Factory to create custom block instances. Used only in reconfigurable
 * devices. The idea is that you instantiate a factory once, populate it
 * with proto-objects and proto-signal paths, then use it subsequently to
 * instantiate identical blocks. In this context, <b>proto-object</b>
 * means a prototype of a block member. Unbound objects are identified by
 * <b>proto-object numbers (PONo's)</b> instead of actual object numbers.
 * PONos are unique within the factory, and are converted to globally
 * unique object numbers ONos) in all new block instances that the
 * factory builds. Correspondingly, <b>proto-signal path</b> means a
 * signal path expressed in terms of <b>PONos </b>rather than
 * <b>ONos</b>. When the factory constructs a block, it converts all of
 * its unbound signal paths to normal (bound) signal paths by mapping its
 * <b>PONos </b>into <b>ONos</b>. The factory also holds a list of
 * <b>proto-blockports</b> which are <b>OcaPorts </b>that are allocated
 * to new blocks the factory builds. As well, the proto-objects in the
 * factory may contain lists of their own proto-ports. Together, the
 * factory's proto-ports and its members' proto-ports are used to define
 * the factory's set of proto-signal paths. Factories may be predefined
 * at time of device manufacture, or constructed "on the fly" by
 * controllers. To <b>create a factory</b>, the controller calls a
 * block's <b>CreateMember(...) </b>method with the <b>ClassID </b>of
 * this class (<b>OcaBlockFactory</b>). Factories ignore which block
 * creates them, so it makes no difference which block's
 * <b>CreateMember(...) </b>method is used. It will usually make the most
 * sense to use the Root Block's method. To add proto-objects,
 * proto-ports, and proto-signal paths to a block factory, the controller
 * calls the factory's <b>DefineProtoMember(...), DefineProtoPort(...),
 * and DefineProtoSignalPath(...</b>) methods, respectively.
 * @extends RemoteControlClasses.OcaWorker
 * @class OcaBlockFactory
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaBlockFactory = make_control_class(
  'OcaBlockFactory',
  3,
  '\u0001\u0001\u0004',
  2,
  OcaWorker,
  [
    ['DefineProtoPort', 3, 1, [OcaString, OcaPortMode], [OcaProtoPortID]],
    ['UndefineProtoPort', 3, 2, [OcaProtoPortID], []],
    ['GetProtoPorts', 3, 3, [], [OcaList(OcaProtoPort)]],
    ,
    ['DefineProtoMemberUsingFactory', 3, 5, [OcaUint32], [OcaUint32]],
    ['UndefineProtoMember', 3, 6, [OcaUint32], []],
    ['GetProtoMembers', 3, 7, [], [OcaList(OcaProtoObjectIdentification)]],
    ['DefineProtoSignalPath', 3, 8, [OcaProtoSignalPath], [OcaUint16]],
    ['UndefineProtoSignalPath', 3, 9, [], [OcaUint16]],
    ['GetProtoSignalPaths', 3, 10, [], [OcaMap(OcaUint16, OcaProtoSignalPath)]],
    ['GetGlobalType', 3, 11, [], [OcaGlobalTypeIdentifier]],
    ['SetGlobalType', 3, 12, [OcaGlobalTypeIdentifier], []],
  ],
  [
    ['ProtoPorts', [OcaList(OcaProtoPort)], 3, 1, false, false, null],
    [
      'ProtoMembers',
      [OcaList(OcaProtoObjectIdentification)],
      3,
      2,
      false,
      false,
      null,
    ],
    [
      'ProtoSignalPaths',
      [OcaMap(OcaUint16, OcaProtoSignalPath)],
      3,
      3,
      false,
      false,
      null,
    ],
    ['GlobalType', [OcaGlobalTypeIdentifier], 3, 4, false, false, null],
  ],
  []
);

/**
 * Defines a proto-port in the factory. If proto-port already exists, it
 * is replaced with the one from this call. The return value indicates
 * whether the proto-port was successfully added.
 * @method RemoteControlClasses.OcaBlockFactory#DefineProtoPort
 * @param name {OcaString}
 *
 * @param portmode {OcaPortMode}
 *
 * @returns {Promise<OcaProtoPortID>}
 */
/**
 * Deletes a proto-port from the factory. The return value indicates
 * whether the proto-port was successfully deleted.
 * @method RemoteControlClasses.OcaBlockFactory#UndefineProtoPort
 * @param ProtoPortID {OcaProtoPortID}
 *
 * @returns {Promise}
 */
/**
 * Gets the factory's list of proto-ports. The return value indicates
 * whether the list was successfully retrieved.
 * @method RemoteControlClasses.OcaBlockFactory#GetProtoPorts
 * @returns {Promise<OcaList>}
 */
/**
 * Defines a proto-member of the given class in the factory. The most
 * current version of the class is used. The return value indicates
 * whether the proto-member was successfully defined.
 * @method RemoteControlClasses.OcaBlockFactory#DefineProtoMember
 * @param ClassIdentification {OcaClassID}
 *
 * @param ConstructionParameters {ConstructionParameterDataType}
 *
 * @returns {Promise<OcaProtoONo>}
 */
/**
 * Defines a proto-member which will be instantiated by a specified
 * factory when the block is built. The return value indicates whether
 * the proto-member was successfully defined.
 * @method RemoteControlClasses.OcaBlockFactory#DefineProtoMemberUsingFactory
 * @param FactoryONo {OcaONo}
 *
 * @returns {Promise<OcaProtoONo>}
 */
/**
 * Deletes a proto-member from the factory. Deletes all proto-signal
 * paths attached to its ports. The return value indicates whether the
 * member was successfully deleted.
 * @method RemoteControlClasses.OcaBlockFactory#UndefineProtoMember
 * @param ProtoObjectNumber {OcaProtoONo}
 *
 * @returns {Promise}
 */
/**
 * Gets the factory's list of proto-members. Does not recurse inner
 * proto-blocks. The return value indicates whether the list was
 * successfully retrieved.
 * @method RemoteControlClasses.OcaBlockFactory#GetProtoMembers
 * @returns {Promise<OcaList>}
 */
/**
 * Defines a proto-signal path in the factory. The return value indicates
 * whether the proto-signal path was successfully defined.
 * @method RemoteControlClasses.OcaBlockFactory#DefineProtoSignalPath
 * @param Path {OcaProtoSignalPath}
 *
 * @returns {Promise<OcaUint16>}
 */
/**
 * Deletes a proto-signal path from the factory. The return value
 * indicates whether the signal path was successfully added.
 * @method RemoteControlClasses.OcaBlockFactory#UndefineProtoSignalPath
 * @returns {Promise<OcaUint16>}
 */
/**
 * Gets the factory's list of proto-signal paths. Map key is proto-signal
 * path ID. Does not recurse inner proto-blocks. The return value
 * indicates whether the list was successfully retrieved.
 * @method RemoteControlClasses.OcaBlockFactory#GetProtoSignalPaths
 * @returns {Promise<OcaMap>}
 */
/**
 * Gets the global type identifier for blocks created by this factory.
 * The return value indicates whether the identifier was successfully
 * retrieved. <b>Added in version 2 of this class.</b>
 * @method RemoteControlClasses.OcaBlockFactory#GetGlobalType
 * @returns {Promise<OcaGlobalTypeIdentifier>}
 */
/**
 * Sets the global type identifier for blocks created by this factory.
 * The return value indicates whether the identifier was successfully
 * set. <b>Added in version 2 of this class.</b>
 * @method RemoteControlClasses.OcaBlockFactory#SetGlobalType
 * @param GlobalType {OcaGlobalTypeIdentifier}
 *
 * @returns {Promise}
 */
/**
 * List of proto-ports for built objects. The factory itself has no
 * ports.
 * @member RemoteControlClasses.OcaBlockFactory#OnProtoPortsChanged {PropertyEvent<OcaList>} - This event is emitted when ProtoPorts changes in the remote object.
 */
/**
 * List of prot-object identifiers of proto-members in the block.
 * @member RemoteControlClasses.OcaBlockFactory#OnProtoMembersChanged {PropertyEvent<OcaList>} - This event is emitted when ProtoMembers changes in the remote object.
 */
/**
 * List of proto-signal paths in the block.
 * @member RemoteControlClasses.OcaBlockFactory#OnProtoSignalPathsChanged {PropertyEvent<OcaMap>} - This event is emitted when ProtoSignalPaths changes in the remote object.
 */
/**
 * Global block type identifier for reusable blocks. <b>Added in version
 * 2 of this class.</b>
 * @member RemoteControlClasses.OcaBlockFactory#OnGlobalTypeChanged {PropertyEvent<OcaGlobalTypeIdentifier>} - This event is emitted when GlobalType changes in the remote object.
 */
