import { OcaGroupException } from '../../OCP1/OcaGroupException.js';
import { OcaList } from '../../OCP1/OcaList.js';
import { OcaString } from '../../OCP1/OcaString.js';
import { OcaUint32 } from '../../OCP1/OcaUint32.js';
import { make_control_class } from '../make_control_class.js';
import { OcaAgent } from './OcaAgent.js';

/**
 * Control aggregator. See **[AES70-1(Control Aggregation)]** for the normative
 * specification of **OcaGroup** semantics.
 * @extends OcaAgent
 * @class OcaGroup
 */
export const OcaGroup = make_control_class(
  'OcaGroup',
  3,
  '\u0001\u0002\u0016',
  4,
  OcaAgent,
  [
    ['GetMembers', 3, 1, [], [OcaList(OcaUint32)]],
    ['SetMembers', 3, 2, [OcaList(OcaUint32)], []],
    ['AddMember', 3, 3, [OcaUint32], []],
    ['RemoveMember', 3, 4, [OcaUint32], []],
    ['GetGroupControllerONo', 3, 5, [], [OcaUint32]],
    ['SetGroupControllerONo', 3, 6, [OcaUint32], []],
    ['GetAggregationRule', 3, 7, [], [OcaString]],
    ['SetAggregationRule', 3, 8, [OcaString], []],
    ['GetSaturationRule', 3, 9, [], [OcaString]],
    ['SetSaturationRule', 3, 10, [OcaString], []],
  ],
  [
    ['Members', [OcaList(OcaUint32)], 3, 1, false, false, null],
    ['GroupControllerONo', [OcaUint32], 3, 2, false, false, null],
    ['AggregationRule', [OcaString], 3, 3, false, false, null],
    ['SaturationRule', [OcaString], 3, 4, false, false, null],
  ],
  [['GroupException', 3, 1, [OcaList(OcaGroupException)]]]
);

/**
 * Gets the list of Group members.
 *
 * @method OcaGroup#GetMembers
 * @returns {Promise<number[]>}
 *   A promise which resolves to a single value of type ``number[]``.
 */
/**
 * Sets the list of Group members.
 *
 * @method OcaGroup#SetMembers
 * @param {number[]} Members
 *
 * @returns {Promise<void>}
 */
/**
 * Adds a Member to the Group.
 *
 * @method OcaGroup#AddMember
 * @param {number} Member
 *
 * @returns {Promise<void>}
 */
/**
 * Removes a Member from the Group.
 *
 * @method OcaGroup#RemoveMember
 * @param {number} Member
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the Group Controller object number.
 *
 * @method OcaGroup#GetGroupControllerONo
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Sets the Group Controller object number.
 *
 * @method OcaGroup#SetGroupControllerONo
 * @param {number} ONo
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value of the **AggregationRule** property.
 *
 * @method OcaGroup#GetAggregationRule
 * @returns {Promise<string>}
 *   A promise which resolves to a single value of type ``string``.
 */
/**
 * Sets the value of the **AggregationRule** property.
 *
 * @method OcaGroup#SetAggregationRule
 * @param {string} Rule
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value of the **SaturationRule** property.
 *
 * @method OcaGroup#GetSaturationRule
 * @returns {Promise<string>}
 *   A promise which resolves to a single value of type ``string``.
 */
/**
 * Sets the value of the **SaturationRule** property.
 *
 * @method OcaGroup#SetSaturationRule
 * @param {string} Rule
 *
 * @returns {Promise<void>}
 */
/**
 * Event that is emitted whenever a value-setting operation returns a status
 * other than OK. NOTE. This is an ordinary event that causes a normal
 * Notification message to be emitted. The OCP.1 protocol defines a special type
 * of Notification PDU called **'Exception'**, but that PDU type is only used to
 * signal cancellation of a subscription. This **GroupException** event uses the
 * normal Notification PDU type, which is called **'Event'**.
 * @member OcaGroup#OnGroupException {Event}
 */
/**
 * This event is emitted when the property ``Members`` changes in the remote object.
 * The property ``Members`` is described in the AES70 standard as follows.
 * Object numbers of group members
 *
 * @member {PropertyEvent<number[]>} OcaGroup#OnMembersChanged
 */
/**
 * This event is emitted when the property ``GroupControllerONo`` changes in the remote object.
 * The property ``GroupControllerONo`` is described in the AES70 standard as follows.
 * Object number of group controller object. Zero value means group is peer to
 * peer group in which a change to any member affects all members.
 *
 * @member {PropertyEvent<number>} OcaGroup#OnGroupControllerONoChanged
 */
/**
 * This event is emitted when the property ``AggregationRule`` changes in the remote object.
 * The property ``AggregationRule`` is described in the AES70 standard as follows.
 * Aggregation rule of group. Optional; null string if not used. Values are
 * implementation-dependent.
 *
 * @member {PropertyEvent<string>} OcaGroup#OnAggregationRuleChanged
 */
/**
 * This event is emitted when the property ``SaturationRule`` changes in the remote object.
 * The property ``SaturationRule`` is described in the AES70 standard as follows.
 * Saturation rule of group. Optional; null string if not used. Values are
 * implementation-dependent.
 *
 * @member {PropertyEvent<string>} OcaGroup#OnSaturationRuleChanged
 */
