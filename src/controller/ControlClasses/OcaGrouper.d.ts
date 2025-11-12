import {
  IOcaGrouperCitizen,
  OcaGrouperCitizen,
} from '../../types/OcaGrouperCitizen.js';
import {
  IOcaGrouperEnrollment,
  OcaGrouperEnrollment,
} from '../../types/OcaGrouperEnrollment.js';
import { OcaGrouperGroup } from '../../types/OcaGrouperGroup.js';
import { IOcaGrouperMode, OcaGrouperMode } from '../../types/OcaGrouperMode.js';
import { Arguments } from '../arguments.js';
import { Event } from '../event.js';
import { PropertyEvent } from '../property_event.js';
import { RemoteDevice } from '../remote_device.js';
import { OcaAgent } from './OcaAgent.js';

/**
 * Control aggregator. See **[AES70-1(Control Aggregation)]** for the normative
 * specification of **OcaGrouper** semantics. **Deprecated** in AES70-2024.
 * @extends OcaAgent
 * @class OcaGrouper
 */
export declare class OcaGrouper extends OcaAgent {
  /**
   * Event that is emitted whenever key aspects of a group's status change.
   * Status events include:
   *
   *  - Citizen joins grouper
   *
   *  - Citizen leaves grouper
   *
   *  - Citizen fails to execute grouper value change request
   *
   *  - Connection to online citizen is lost
   *
   *  - Connection to offline citizen is reestablished
   *
   *  - Citizen enrolls in group
   *
   *  - Citizen de-enrolls from group
   *
   *
   * @member OcaGrouper#OnStatusChange {Event}
   */
  OnStatusChange: Event;
  /**
   * This event is emitted whenever ActuatorOrSensor changes.
   */
  OnActuatorOrSensorChanged: PropertyEvent<boolean>;

  /**
   * This event is emitted whenever Groups changes.
   */
  OnGroupsChanged: PropertyEvent<OcaGrouperGroup[]>;

  /**
   * This event is emitted whenever Citizens changes.
   */
  OnCitizensChanged: PropertyEvent<OcaGrouperCitizen[]>;

  /**
   * This event is emitted whenever Enrollments changes.
   */
  OnEnrollmentsChanged: PropertyEvent<OcaGrouperEnrollment[]>;

  /**
   * This event is emitted whenever Mode changes.
   */
  OnModeChanged: PropertyEvent<OcaGrouperMode>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Adds a group to the grouper and returns its object number. (The group's
   * network address will be the same as the grouper's).
   * The return values of this method are
   *
   * - Index of type ``number``
   * - ProxyONo of type ``number``
   *
   * @method OcaGrouper#AddGroup
   * @param {string} Name
   *
   * @returns {Promise<Arguments<number,number>>}
   */
  AddGroup(Name: string): Promise<Arguments<[number, number]>>;

  /**
   * Deletes a group from the grouper. Note: index values of deleted groups are
   * not reused during the lifetime of the grouper instance.
   *
   * @method OcaGrouper#DeleteGroup
   * @param {number} Index
   *
   * @returns {Promise<void>}
   */
  DeleteGroup(Index: number): Promise<void>;

  /**
   * Gets the count of groups owned by this grouper.
   *
   * @method OcaGrouper#GetGroupCount
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetGroupCount(): Promise<number>;

  /**
   * Gets the list of groups owned by this grouper.
   *
   * @method OcaGrouper#GetGroupList
   * @returns {Promise<OcaGrouperGroup[]>}
   *   A promise which resolves to a single value of type :class:`OcaGrouperGroup[]`.
   */
  GetGroupList(): Promise<OcaGrouperGroup[]>;

  /**
   * Adds a citizen to the group. This method does not enroll the new citizen in
   * any of the grouper's groups -- it merely makes the citizen available for
   * enrollment. Group enrollment is controlled by the **SetEnrollment(...)**
   * method, q.v.
   *
   * @method OcaGrouper#AddCitizen
   * @param {IOcaGrouperCitizen} Citizen
   *
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  AddCitizen(Citizen: IOcaGrouperCitizen): Promise<number>;

  /**
   * Delete a citizen from the grouper (and therefore from all of its groups).
   * Note: index values of deleted citizens are not reused during the lifetime
   * of the grouper instance.
   *
   * @method OcaGrouper#DeleteCitizen
   * @param {number} Index
   *
   * @returns {Promise<void>}
   */
  DeleteCitizen(Index: number): Promise<void>;

  /**
   * Gets the count of citizens registered in this grouper.
   *
   * @method OcaGrouper#GetCitizenCount
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetCitizenCount(): Promise<number>;

  /**
   * Gets the list of citizens registered in this grouper.
   *
   * @method OcaGrouper#GetCitizenList
   * @returns {Promise<OcaGrouperCitizen[]>}
   *   A promise which resolves to a single value of type :class:`OcaGrouperCitizen[]`.
   */
  GetCitizenList(): Promise<OcaGrouperCitizen[]>;

  /**
   * Gets membership status for given Citizen in given Group.
   *
   * @method OcaGrouper#GetEnrollment
   * @param {IOcaGrouperEnrollment} Enrollment
   *
   * @returns {Promise<boolean>}
   *   A promise which resolves to a single value of type ``boolean``.
   */
  GetEnrollment(Enrollment: IOcaGrouperEnrollment): Promise<boolean>;

  /**
   * Sets membership status for given target in given group.
   *
   * @method OcaGrouper#SetEnrollment
   * @param {IOcaGrouperEnrollment} Enrollment
   * @param {boolean} IsMember
   *
   * @returns {Promise<void>}
   */
  SetEnrollment(
    Enrollment: IOcaGrouperEnrollment,
    IsMember: boolean
  ): Promise<void>;

  /**
   * Gets the list of members of the given group.
   *
   * @method OcaGrouper#GetGroupMemberList
   * @param {number} Index
   *
   * @returns {Promise<OcaGrouperCitizen[]>}
   *   A promise which resolves to a single value of type :class:`OcaGrouperCitizen[]`.
   */
  GetGroupMemberList(Index: number): Promise<OcaGrouperCitizen[]>;

  /**
   * Gets the value of the **ActuatorOrSensor** property.
   *
   * @method OcaGrouper#GetActuatorOrSensor
   * @returns {Promise<boolean>}
   *   A promise which resolves to a single value of type ``boolean``.
   */
  GetActuatorOrSensor(): Promise<boolean>;

  /**
   * Sets the value of the **ActuatorOrSensor** property. Note: only
   * **Actuator** groups are supported in the current version of AES70.
   *
   * @method OcaGrouper#SetActuatorOrSensor
   * @param {boolean} ActuatorOrSensor
   *
   * @returns {Promise<void>}
   */
  SetActuatorOrSensor(ActuatorOrSensor: boolean): Promise<void>;

  /**
   * Gets the value of the **Mode** property.
   *
   * @method OcaGrouper#GetMode
   * @returns {Promise<OcaGrouperMode>}
   *   A promise which resolves to a single value of type :class:`OcaGrouperMode`.
   */
  GetMode(): Promise<OcaGrouperMode>;

  /**
   * Sets the value of the **Mode** property.
   *
   * @method OcaGrouper#SetMode
   * @param {IOcaGrouperMode} Mode
   *
   * @returns {Promise<void>}
   */
  SetMode(Mode: IOcaGrouperMode): Promise<void>;
}
