import { Event } from '../event';
import { PropertyEvent } from '../property_event';
import { RemoteDevice } from '../remote_device';
import { OcaAgent } from './OcaAgent';

/**
 * Control aggregator. See **[AES70-1(Control Aggregation)]** for the normative
 * specification of **OcaGroup** semantics.
 * @extends OcaAgent
 * @class OcaGroup
 */
export declare class OcaGroup extends OcaAgent {
  /**
   * Event that is emitted whenever a value-setting operation returns a status
   * other than OK. NOTE. This is an ordinary event that causes a normal
   * Notification message to be emitted. The OCP.1 protocol defines a special
   * type of Notification PDU called **'Exception'**, but that PDU type is only
   * used to signal cancellation of a subscription. This **GroupException**
   * event uses the normal Notification PDU type, which is called **'Event'**.
   * @member OcaGroup#OnGroupException {Event}
   */
  OnGroupException: Event;
  /**
   * This event is emitted whenever Members changes.
   */
  OnMembersChanged: PropertyEvent<number[]>;

  /**
   * This event is emitted whenever GroupControllerONo changes.
   */
  OnGroupControllerONoChanged: PropertyEvent<number>;

  /**
   * This event is emitted whenever AggregationRule changes.
   */
  OnAggregationRuleChanged: PropertyEvent<string>;

  /**
   * This event is emitted whenever SaturationRule changes.
   */
  OnSaturationRuleChanged: PropertyEvent<string>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the list of Group members.
   *
   * @method OcaGroup#GetMembers
   * @returns {Promise<number[]>}
   *   A promise which resolves to a single value of type ``number[]``.
   */
  GetMembers(): Promise<number[]>;

  /**
   * Sets the list of Group members.
   *
   * @method OcaGroup#SetMembers
   * @param {number[]} Members
   *
   * @returns {Promise<void>}
   */
  SetMembers(Members: number[]): Promise<void>;

  /**
   * Adds a Member to the Group.
   *
   * @method OcaGroup#AddMember
   * @param {number} Member
   *
   * @returns {Promise<void>}
   */
  AddMember(Member: number): Promise<void>;

  /**
   * Removes a Member from the Group.
   *
   * @method OcaGroup#RemoveMember
   * @param {number} Member
   *
   * @returns {Promise<void>}
   */
  RemoveMember(Member: number): Promise<void>;

  /**
   * Gets the Group Controller object number.
   *
   * @method OcaGroup#GetGroupControllerONo
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetGroupControllerONo(): Promise<number>;

  /**
   * Sets the Group Controller object number.
   *
   * @method OcaGroup#SetGroupControllerONo
   * @param {number} ONo
   *
   * @returns {Promise<void>}
   */
  SetGroupControllerONo(ONo: number): Promise<void>;

  /**
   * Gets the value of the **AggregationRule** property.
   *
   * @method OcaGroup#GetAggregationRule
   * @returns {Promise<string>}
   *   A promise which resolves to a single value of type ``string``.
   */
  GetAggregationRule(): Promise<string>;

  /**
   * Sets the value of the **AggregationRule** property.
   *
   * @method OcaGroup#SetAggregationRule
   * @param {string} Rule
   *
   * @returns {Promise<void>}
   */
  SetAggregationRule(Rule: string): Promise<void>;

  /**
   * Gets the value of the **SaturationRule** property.
   *
   * @method OcaGroup#GetSaturationRule
   * @returns {Promise<string>}
   *   A promise which resolves to a single value of type ``string``.
   */
  GetSaturationRule(): Promise<string>;

  /**
   * Sets the value of the **SaturationRule** property.
   *
   * @method OcaGroup#SetSaturationRule
   * @param {string} Rule
   *
   * @returns {Promise<void>}
   */
  SetSaturationRule(Rule: string): Promise<void>;
}
