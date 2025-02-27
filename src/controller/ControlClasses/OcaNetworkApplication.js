import { OcaBlob } from '../../OCP1/OcaBlob.js';
import { OcaCounter } from '../../OCP1/OcaCounter.js';
import { OcaCounterSet } from '../../OCP1/OcaCounterSet.js';
import { OcaList } from '../../OCP1/OcaList.js';
import { OcaNetworkInterfaceAssignment } from '../../OCP1/OcaNetworkInterfaceAssignment.js';
import { OcaString } from '../../OCP1/OcaString.js';
import { OcaUint16 } from '../../OCP1/OcaUint16.js';
import { OcaUint32 } from '../../OCP1/OcaUint32.js';
import { make_control_class } from '../make_control_class.js';
import { OcaRoot } from './OcaRoot.js';

/**
 * Base class for network applications
 * @extends OcaRoot
 * @class OcaNetworkApplication
 */
export const OcaNetworkApplication = make_control_class(
  'OcaNetworkApplication',
  2,
  '\u0001\u0007',
  1,
  OcaRoot,
  [
    ['GetLabel', 2, 1, [], [OcaString]],
    ['SetLabel', 2, 2, [OcaString], []],
    ['GetOwner', 2, 3, [], [OcaUint32]],
    ['GetPath', 2, 4, [], [OcaList(OcaString), OcaList(OcaUint32)]],
    [
      'GetNetworkInterfaceAssignments',
      2,
      5,
      [],
      [OcaList(OcaNetworkInterfaceAssignment)],
    ],
    [
      'SetNetworkInterfaceAssignments',
      2,
      6,
      [OcaList(OcaNetworkInterfaceAssignment)],
      [],
    ],
    ['GetAdaptationIdentifier', 2, 7, [], [OcaString]],
    ['GetAdaptationData', 2, 8, [], [OcaBlob]],
    ['SetAdaptationData', 2, 9, [OcaBlob], []],
    ['GetCounterSet', 2, 10, [], [OcaCounterSet]],
    ['GetCounter', 2, 11, [OcaUint16], [OcaCounter]],
    ['AttachCounterNotifier', 2, 12, [OcaUint16, OcaUint32], []],
    ['DetachCounterNotifier', 2, 13, [OcaUint16, OcaUint32], []],
    ['ResetCounters', 2, 14, [], []],
  ],
  [
    ['Label', [OcaString], 2, 1, false, false, null],
    ['Owner', [OcaUint32], 2, 2, true, false, null],
    [
      'NetworkInterfaceAssignments',
      [OcaList(OcaNetworkInterfaceAssignment)],
      2,
      3,
      false,
      false,
      null,
    ],
    ['AdaptationIdentifier', [OcaString], 2, 4, true, false, null],
    ['AdaptationData', [OcaBlob], 2, 5, false, false, null],
  ],
  []
);

/**
 * Gets the value of the **Label** property.
 *
 * @method OcaNetworkApplication#GetLabel
 * @returns {Promise<string>}
 *   A promise which resolves to a single value of type ``string``.
 */
/**
 * Sets the value of the **Label** property.
 *
 * @method OcaNetworkApplication#SetLabel
 * @param {string} Label
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value of the **Owner** property.
 *
 * @method OcaNetworkApplication#GetOwner
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Returns Role Path and ONo Path from the Root Block to this object. The return
 * value indicates whether the operation succeeded.
 * The return values of this method are
 *
 * - RolePath of type ``string[]``
 * - ONoPath of type ``number[]``
 *
 * @method OcaNetworkApplication#GetPath
 * @returns {Promise<Arguments<string[],number[]>>}
 */
/**
 * Gets the list of network interface assignments
 *
 * @method OcaNetworkApplication#GetNetworkInterfaceAssignments
 * @returns {Promise<OcaNetworkInterfaceAssignment[]>}
 *   A promise which resolves to a single value of type :class:`OcaNetworkInterfaceAssignment[]`.
 */
/**
 * Sets the list of network interface assignments
 *
 * @method OcaNetworkApplication#SetNetworkInterfaceAssignments
 * @param {IOcaNetworkInterfaceAssignment[]} Assignments
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the identifier of the Adaptation this network object implements.
 *
 * @method OcaNetworkApplication#GetAdaptationIdentifier
 * @returns {Promise<string>}
 *   A promise which resolves to a single value of type ``string``.
 */
/**
 * Gets the value of property **AdaptationData.**
 *
 * @method OcaNetworkApplication#GetAdaptationData
 * @returns {Promise<Uint8Array>}
 *   A promise which resolves to a single value of type ``Uint8Array``.
 */
/**
 * Sets the value of property **AdaptationData.**
 *
 * @method OcaNetworkApplication#SetAdaptationData
 * @param {Uint8Array} Data
 *
 * @returns {Promise<void>}
 */
/**
 * Get this object's CounterSet.
 *
 * @method OcaNetworkApplication#GetCounterSet
 * @returns {Promise<OcaCounterSet>}
 *   A promise which resolves to a single value of type :class:`OcaCounterSet`.
 */
/**
 * Gets the given counter from this object's CounterSet.
 *
 * @method OcaNetworkApplication#GetCounter
 * @param {number} CounterID
 *
 * @returns {Promise<OcaCounter>}
 *   A promise which resolves to a single value of type :class:`OcaCounter`.
 */
/**
 * Adds a notifier **ONo** to the **Notifiers** list of the designated Counter.
 *
 * @method OcaNetworkApplication#AttachCounterNotifier
 * @param {number} CounterID
 * @param {number} ONo
 *
 * @returns {Promise<void>}
 */
/**
 * Removes the given notifier ONo from the **Notifiers** list of the designated
 * counter.
 *
 * @method OcaNetworkApplication#DetachCounterNotifier
 * @param {number} CounterID
 * @param {number} ONo
 *
 * @returns {Promise<void>}
 */
/**
 * Reset this object's CounterSet. Sets all its counters to their specified
 * initial values.
 *
 * @method OcaNetworkApplication#ResetCounters
 * @returns {Promise<void>}
 */
/**
 * This event is emitted when the property ``Label`` changes in the remote object.
 * The property ``Label`` is described in the AES70 standard as follows.
 * User-defined label. No programmatic significance. Read/write.
 *
 * @member {PropertyEvent<string>} OcaNetworkApplication#OnLabelChanged
 */
/**
 * This event is emitted when the property ``NetworkInterfaceAssignments`` changes in the remote object.
 * The property ``NetworkInterfaceAssignments`` is described in the AES70 standard as follows.
 * List of network interface assignments that bind this application network to
 * one or more network interfaces.
 *
 * @member {PropertyEvent<OcaNetworkInterfaceAssignment[]>} OcaNetworkApplication#OnNetworkInterfaceAssignmentsChanged
 */
/**
 * This event is emitted when the property ``AdaptationData`` changes in the remote object.
 * The property ``AdaptationData`` is described in the AES70 standard as follows.
 * Adaptation-specific data, if any
 *
 * @member {PropertyEvent<Uint8Array>} OcaNetworkApplication#OnAdaptationDataChanged
 */
