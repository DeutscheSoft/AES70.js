import { OcaCounter } from '../../types/OcaCounter';
import { OcaCounterSet } from '../../types/OcaCounterSet';
import {
  IOcaNetworkInterfaceAssignment,
  OcaNetworkInterfaceAssignment,
} from '../../types/OcaNetworkInterfaceAssignment';
import { Arguments } from '../arguments';
import { PropertyEvent } from '../property_event';
import { RemoteDevice } from '../remote_device';
import { OcaRoot } from './OcaRoot';

/**
 * Base class for network applications
 * @extends OcaRoot
 * @class OcaNetworkApplication
 */
export declare class OcaNetworkApplication extends OcaRoot {
  /**
   * This event is emitted whenever Label changes.
   */
  OnLabelChanged: PropertyEvent<string>;

  /**
   * This event is emitted whenever NetworkInterfaceAssignments changes.
   */
  OnNetworkInterfaceAssignmentsChanged: PropertyEvent<
    OcaNetworkInterfaceAssignment[]
  >;

  /**
   * This event is emitted whenever AdaptationData changes.
   */
  OnAdaptationDataChanged: PropertyEvent<Uint8Array>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the value of the **Label** property.
   *
   * @method OcaNetworkApplication#GetLabel
   * @returns {Promise<string>}
   *   A promise which resolves to a single value of type ``string``.
   */
  GetLabel(): Promise<string>;

  /**
   * Sets the value of the **Label** property.
   *
   * @method OcaNetworkApplication#SetLabel
   * @param {string} Label
   *
   * @returns {Promise<void>}
   */
  SetLabel(Label: string): Promise<void>;

  /**
   * Gets the value of the **Owner** property.
   *
   * @method OcaNetworkApplication#GetOwner
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetOwner(): Promise<number>;

  /**
   * Returns Role Path and ONo Path from the Root Block to this object. The
   * return value indicates whether the operation succeeded.
   * The return values of this method are
   *
   * - RolePath of type ``string[]``
   * - ONoPath of type ``number[]``
   *
   * @method OcaNetworkApplication#GetPath
   * @returns {Promise<Arguments<string[],number[]>>}
   */
  GetPath(): Promise<Arguments<[string[], number[]]>>;

  /**
   * Gets the list of network interface assignments
   *
   * @method OcaNetworkApplication#GetNetworkInterfaceAssignments
   * @returns {Promise<OcaNetworkInterfaceAssignment[]>}
   *   A promise which resolves to a single value of type :class:`OcaNetworkInterfaceAssignment[]`.
   */
  GetNetworkInterfaceAssignments(): Promise<OcaNetworkInterfaceAssignment[]>;

  /**
   * Sets the list of network interface assignments
   *
   * @method OcaNetworkApplication#SetNetworkInterfaceAssignments
   * @param {IOcaNetworkInterfaceAssignment[]} Assignments
   *
   * @returns {Promise<void>}
   */
  SetNetworkInterfaceAssignments(
    Assignments: IOcaNetworkInterfaceAssignment[]
  ): Promise<void>;

  /**
   * Gets the identifier of the Adaptation this network object implements.
   *
   * @method OcaNetworkApplication#GetAdaptationIdentifier
   * @returns {Promise<string>}
   *   A promise which resolves to a single value of type ``string``.
   */
  GetAdaptationIdentifier(): Promise<string>;

  /**
   * Gets the value of property **AdaptationData.**
   *
   * @method OcaNetworkApplication#GetAdaptationData
   * @returns {Promise<Uint8Array>}
   *   A promise which resolves to a single value of type ``Uint8Array``.
   */
  GetAdaptationData(): Promise<Uint8Array>;

  /**
   * Sets the value of property **AdaptationData.**
   *
   * @method OcaNetworkApplication#SetAdaptationData
   * @param {Uint8Array} Data
   *
   * @returns {Promise<void>}
   */
  SetAdaptationData(Data: Uint8Array): Promise<void>;

  /**
   * Get this object's CounterSet.
   *
   * @method OcaNetworkApplication#GetCounterSet
   * @returns {Promise<OcaCounterSet>}
   *   A promise which resolves to a single value of type :class:`OcaCounterSet`.
   */
  GetCounterSet(): Promise<OcaCounterSet>;

  /**
   * Gets the given counter from this object's CounterSet.
   *
   * @method OcaNetworkApplication#GetCounter
   * @param {number} CounterID
   *
   * @returns {Promise<OcaCounter>}
   *   A promise which resolves to a single value of type :class:`OcaCounter`.
   */
  GetCounter(CounterID: number): Promise<OcaCounter>;

  /**
   * Adds a notifier **ONo** to the **Notifiers** list of the designated
   * Counter.
   *
   * @method OcaNetworkApplication#AttachCounterNotifier
   * @param {number} CounterID
   * @param {number} ONo
   *
   * @returns {Promise<void>}
   */
  AttachCounterNotifier(CounterID: number, ONo: number): Promise<void>;

  /**
   * Removes the given notifier ONo from the **Notifiers** list of the
   * designated counter.
   *
   * @method OcaNetworkApplication#DetachCounterNotifier
   * @param {number} CounterID
   * @param {number} ONo
   *
   * @returns {Promise<void>}
   */
  DetachCounterNotifier(CounterID: number, ONo: number): Promise<void>;

  /**
   * Reset this object's CounterSet. Sets all its counters to their specified
   * initial values.
   *
   * @method OcaNetworkApplication#ResetCounters
   * @returns {Promise<void>}
   */
  ResetCounters(): Promise<void>;
}
