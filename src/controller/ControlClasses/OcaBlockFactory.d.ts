import {
  IOcaGlobalTypeIdentifier,
  OcaGlobalTypeIdentifier,
} from '../../types/OcaGlobalTypeIdentifier';
import { IOcaPortMode } from '../../types/OcaPortMode';
import { OcaProtoObjectIdentification } from '../../types/OcaProtoObjectIdentification';
import { OcaProtoPort } from '../../types/OcaProtoPort';
import { IOcaProtoPortID, OcaProtoPortID } from '../../types/OcaProtoPortID';
import {
  IOcaProtoSignalPath,
  OcaProtoSignalPath,
} from '../../types/OcaProtoSignalPath';
import { PropertyEvent } from '../property_event';
import { RemoteDevice } from '../remote_device';
import { OcaWorker } from './OcaWorker';

/**
 * Factory to create custom block instances. Used only in reconfigurable
 * devices. The idea is that you instantiate a factory once, populate it with
 * proto-objects and proto-signal paths, then use it subsequently to instantiate
 * identical blocks. In this context, **proto-object** means a prototype of a
 * block member. Unbound objects are identified by **proto-object numbers
 * (PONo's)** instead of actual object numbers. PONos are unique within the
 * factory, and are converted to globally unique object numbers ONos) in all new
 * block instances that the factory builds. Correspondingly, **proto-signal
 * path** means a signal path expressed in terms of **PONos** rather than
 * **ONos**. When the factory constructs a block, it converts all of its unbound
 * signal paths to normal (bound) signal paths by mapping its **PONos** into
 * **ONos**. The factory also holds a list of **proto-blockports** which are
 * **OcaPorts** that are allocated to new blocks the factory builds. As well,
 * the proto-objects in the factory may contain lists of their own proto-ports.
 * Together, the factory's proto-ports and its members' proto-ports are used to
 * define the factory's set of proto-signal paths. Factories may be predefined
 * at time of device manufacture, or constructed "on the fly" by controllers. To
 * **create a factory**, the controller calls a block's **CreateMember(...)**
 * method with the **ClassID** of this class (**OcaBlockFactory**). Factories
 * ignore which block creates them, so it makes no difference which block's
 * **CreateMember(...)** method is used. It will usually make the most sense to
 * use the Root Block's method. To add proto-objects, proto-ports, and
 * proto-signal paths to a block factory, the controller calls the factory's
 * **DefineProtoMember(...), DefineProtoPort(...), and
 * DefineProtoSignalPath(...**) methods, respectively.
 * @extends OcaWorker
 * @class OcaBlockFactory
 */
export declare class OcaBlockFactory extends OcaWorker {
  /**
   * This event is emitted whenever ProtoPorts changes.
   */
  OnProtoPortsChanged: PropertyEvent<OcaProtoPort[]>;

  /**
   * This event is emitted whenever ProtoMembers changes.
   */
  OnProtoMembersChanged: PropertyEvent<OcaProtoObjectIdentification[]>;

  /**
   * This event is emitted whenever ProtoSignalPaths changes.
   */
  OnProtoSignalPathsChanged: PropertyEvent<Map<number, OcaProtoSignalPath>>;

  /**
   * This event is emitted whenever GlobalType changes.
   */
  OnGlobalTypeChanged: PropertyEvent<OcaGlobalTypeIdentifier>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Defines a proto-port in the factory. If proto-port already exists, it is
   * replaced with the one from this call. The return value indicates whether
   * the proto-port was successfully added.
   *
   * @method OcaBlockFactory#DefineProtoPort
   * @param {string} name
   * @param {IOcaPortMode} portmode
   *
   * @returns {Promise<OcaProtoPortID>}
   *   A promise which resolves to a single value of type :class:`OcaProtoPortID`.
   */
  DefineProtoPort(
    name: string,
    portmode: IOcaPortMode
  ): Promise<OcaProtoPortID>;

  /**
   * Deletes a proto-port from the factory. The return value indicates whether
   * the proto-port was successfully deleted.
   *
   * @method OcaBlockFactory#UndefineProtoPort
   * @param {IOcaProtoPortID} ProtoPortID
   *
   * @returns {Promise<void>}
   */
  UndefineProtoPort(ProtoPortID: IOcaProtoPortID): Promise<void>;

  /**
   * Gets the factory's list of proto-ports. The return value indicates whether
   * the list was successfully retrieved.
   *
   * @method OcaBlockFactory#GetProtoPorts
   * @returns {Promise<OcaProtoPort[]>}
   *   A promise which resolves to a single value of type :class:`OcaProtoPort[]`.
   */
  GetProtoPorts(): Promise<OcaProtoPort[]>;

  /**
   * Defines a proto-member which will be instantiated by a specified factory
   * when the block is built. The return value indicates whether the
   * proto-member was successfully defined.
   *
   * @method OcaBlockFactory#DefineProtoMemberUsingFactory
   * @param {number} FactoryONo
   *
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  DefineProtoMemberUsingFactory(FactoryONo: number): Promise<number>;

  /**
   * Deletes a proto-member from the factory. Deletes all proto-signal paths
   * attached to its ports. The return value indicates whether the member was
   * successfully deleted.
   *
   * @method OcaBlockFactory#UndefineProtoMember
   * @param {number} ProtoObjectNumber
   *
   * @returns {Promise<void>}
   */
  UndefineProtoMember(ProtoObjectNumber: number): Promise<void>;

  /**
   * Gets the factory's list of proto-members. Does not recurse inner
   * proto-blocks. The return value indicates whether the list was successfully
   * retrieved.
   *
   * @method OcaBlockFactory#GetProtoMembers
   * @returns {Promise<OcaProtoObjectIdentification[]>}
   *   A promise which resolves to a single value of type :class:`OcaProtoObjectIdentification[]`.
   */
  GetProtoMembers(): Promise<OcaProtoObjectIdentification[]>;

  /**
   * Defines a proto-signal path in the factory. The return value indicates
   * whether the proto-signal path was successfully defined.
   *
   * @method OcaBlockFactory#DefineProtoSignalPath
   * @param {IOcaProtoSignalPath} Path
   *
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  DefineProtoSignalPath(Path: IOcaProtoSignalPath): Promise<number>;

  /**
   * Deletes a proto-signal path from the factory. The return value indicates
   * whether the signal path was successfully added.
   *
   * @method OcaBlockFactory#UndefineProtoSignalPath
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  UndefineProtoSignalPath(): Promise<number>;

  /**
   * Gets the factory's list of proto-signal paths. Map key is proto-signal path
   * ID. Does not recurse inner proto-blocks. The return value indicates whether
   * the list was successfully retrieved.
   *
   * @method OcaBlockFactory#GetProtoSignalPaths
   * @returns {Promise<Map<number, OcaProtoSignalPath>>}
   *   A promise which resolves to a single value of type ``Map<number, OcaProtoSignalPath>``.
   */
  GetProtoSignalPaths(): Promise<Map<number, OcaProtoSignalPath>>;

  /**
   * Gets the global type identifier for blocks created by this factory. The
   * return value indicates whether the identifier was successfully retrieved.
   * **Added in version 2 of this class.**
   *
   * @method OcaBlockFactory#GetGlobalType
   * @returns {Promise<OcaGlobalTypeIdentifier>}
   *   A promise which resolves to a single value of type :class:`OcaGlobalTypeIdentifier`.
   */
  GetGlobalType(): Promise<OcaGlobalTypeIdentifier>;

  /**
   * Sets the global type identifier for blocks created by this factory. The
   * return value indicates whether the identifier was successfully set. **Added
   * in version 2 of this class.**
   *
   * @method OcaBlockFactory#SetGlobalType
   * @param {IOcaGlobalTypeIdentifier} GlobalType
   *
   * @returns {Promise<void>}
   */
  SetGlobalType(GlobalType: IOcaGlobalTypeIdentifier): Promise<void>;
}
