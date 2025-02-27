import { OcaBoolean } from '../../OCP1/OcaBoolean.js';
import { OcaGrouperCitizen } from '../../OCP1/OcaGrouperCitizen.js';
import { OcaGrouperEnrollment } from '../../OCP1/OcaGrouperEnrollment.js';
import { OcaGrouperGroup } from '../../OCP1/OcaGrouperGroup.js';
import { OcaGrouperMode } from '../../OCP1/OcaGrouperMode.js';
import { OcaGrouperStatusChangeEventData } from '../../OCP1/OcaGrouperStatusChangeEventData.js';
import { OcaList } from '../../OCP1/OcaList.js';
import { OcaString } from '../../OCP1/OcaString.js';
import { OcaUint16 } from '../../OCP1/OcaUint16.js';
import { OcaUint32 } from '../../OCP1/OcaUint32.js';
import { make_control_class } from '../make_control_class.js';
import { OcaAgent } from './OcaAgent.js';

/**
 * Control aggregator. See **[AES70-1(Control Aggregation)]** for the normative
 * specification of **OcaGrouper** semantics. **Deprecated** in AES70-2024.
 * @extends OcaAgent
 * @class OcaGrouper
 */
export const OcaGrouper = make_control_class(
  'OcaGrouper',
  3,
  '\u0001\u0002\u0002',
  3,
  OcaAgent,
  [
    ['AddGroup', 3, 1, [OcaString], [OcaUint16, OcaUint32]],
    ['DeleteGroup', 3, 2, [OcaUint16], []],
    ['GetGroupCount', 3, 3, [], [OcaUint16]],
    ['GetGroupList', 3, 4, [], [OcaList(OcaGrouperGroup)]],
    ['AddCitizen', 3, 5, [OcaGrouperCitizen], [OcaUint16]],
    ['DeleteCitizen', 3, 6, [OcaUint16], []],
    ['GetCitizenCount', 3, 7, [], [OcaUint16]],
    ['GetCitizenList', 3, 8, [], [OcaList(OcaGrouperCitizen)]],
    ['GetEnrollment', 3, 9, [OcaGrouperEnrollment], [OcaBoolean]],
    ['SetEnrollment', 3, 10, [OcaGrouperEnrollment, OcaBoolean], []],
    ['GetGroupMemberList', 3, 11, [OcaUint16], [OcaList(OcaGrouperCitizen)]],
    ['GetActuatorOrSensor', 3, 12, [], [OcaBoolean]],
    ['SetActuatorOrSensor', 3, 13, [OcaBoolean], []],
    ['GetMode', 3, 14, [], [OcaGrouperMode]],
    ['SetMode', 3, 15, [OcaGrouperMode], []],
  ],
  [
    ['ActuatorOrSensor', [OcaBoolean], 3, 1, false, false, null],
    ['Groups', [OcaList(OcaGrouperGroup)], 3, 2, false, false, null],
    ['Citizens', [OcaList(OcaGrouperCitizen)], 3, 3, false, false, null],
    ['Enrollments', [OcaList(OcaGrouperEnrollment)], 3, 4, false, false, null],
    ['Mode', [OcaGrouperMode], 3, 5, false, false, null],
  ],
  [['StatusChange', 3, 1, [OcaGrouperStatusChangeEventData]]]
);

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
/**
 * Deletes a group from the grouper. Note: index values of deleted groups are
 * not reused during the lifetime of the grouper instance.
 *
 * @method OcaGrouper#DeleteGroup
 * @param {number} Index
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the count of groups owned by this grouper.
 *
 * @method OcaGrouper#GetGroupCount
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Gets the list of groups owned by this grouper.
 *
 * @method OcaGrouper#GetGroupList
 * @returns {Promise<OcaGrouperGroup[]>}
 *   A promise which resolves to a single value of type :class:`OcaGrouperGroup[]`.
 */
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
/**
 * Delete a citizen from the grouper (and therefore from all of its groups).
 * Note: index values of deleted citizens are not reused during the lifetime of
 * the grouper instance.
 *
 * @method OcaGrouper#DeleteCitizen
 * @param {number} Index
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the count of citizens registered in this grouper.
 *
 * @method OcaGrouper#GetCitizenCount
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Gets the list of citizens registered in this grouper.
 *
 * @method OcaGrouper#GetCitizenList
 * @returns {Promise<OcaGrouperCitizen[]>}
 *   A promise which resolves to a single value of type :class:`OcaGrouperCitizen[]`.
 */
/**
 * Gets membership status for given Citizen in given Group.
 *
 * @method OcaGrouper#GetEnrollment
 * @param {IOcaGrouperEnrollment} Enrollment
 *
 * @returns {Promise<boolean>}
 *   A promise which resolves to a single value of type ``boolean``.
 */
/**
 * Sets membership status for given target in given group.
 *
 * @method OcaGrouper#SetEnrollment
 * @param {IOcaGrouperEnrollment} Enrollment
 * @param {boolean} IsMember
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the list of members of the given group.
 *
 * @method OcaGrouper#GetGroupMemberList
 * @param {number} Index
 *
 * @returns {Promise<OcaGrouperCitizen[]>}
 *   A promise which resolves to a single value of type :class:`OcaGrouperCitizen[]`.
 */
/**
 * Gets the value of the **ActuatorOrSensor** property.
 *
 * @method OcaGrouper#GetActuatorOrSensor
 * @returns {Promise<boolean>}
 *   A promise which resolves to a single value of type ``boolean``.
 */
/**
 * Sets the value of the **ActuatorOrSensor** property. Note: only **Actuator**
 * groups are supported in the current version of AES70.
 *
 * @method OcaGrouper#SetActuatorOrSensor
 * @param {boolean} ActuatorOrSensor
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value of the **Mode** property.
 *
 * @method OcaGrouper#GetMode
 * @returns {Promise<OcaGrouperMode>}
 *   A promise which resolves to a single value of type :class:`OcaGrouperMode`.
 */
/**
 * Sets the value of the **Mode** property.
 *
 * @method OcaGrouper#SetMode
 * @param {IOcaGrouperMode} Mode
 *
 * @returns {Promise<void>}
 */
/**
 * Event that is emitted whenever key aspects of a group's status change. Status
 * events include:
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
/**
 * This event is emitted when the property ``ActuatorOrSensor`` changes in the remote object.
 * The property ``ActuatorOrSensor`` is described in the AES70 standard as follows.
 * True if Grouper is actuator grouper, false if sensor grouper.
 *
 * @member {PropertyEvent<boolean>} OcaGrouper#OnActuatorOrSensorChanged
 */
/**
 * This event is emitted when the property ``Groups`` changes in the remote object.
 * The property ``Groups`` is described in the AES70 standard as follows.
 * List of groups in the grouper. Groups shall be added to and deleted from a
 * grouper by the **OcaGrouper** methods **AddGroup(...)** and
 * **DeleteGroup(...)**, respectively.
 *
 * @member {PropertyEvent<OcaGrouperGroup[]>} OcaGrouper#OnGroupsChanged
 */
/**
 * This event is emitted when the property ``Citizens`` changes in the remote object.
 * The property ``Citizens`` is described in the AES70 standard as follows.
 * List of citizens defined for this grouper.
 *
 * @member {PropertyEvent<OcaGrouperCitizen[]>} OcaGrouper#OnCitizensChanged
 */
/**
 * This event is emitted when the property ``Enrollments`` changes in the remote object.
 * The property ``Enrollments`` is described in the AES70 standard as follows.
 * List of Grouper's enrollments, i.e. which Citizen(s) belong to which
 * Group(s).
 *
 * @member {PropertyEvent<OcaGrouperEnrollment[]>} OcaGrouper#OnEnrollmentsChanged
 */
/**
 * This event is emitted when the property ``Mode`` changes in the remote object.
 * The property ``Mode`` is described in the AES70 standard as follows.
 * Switch that determines whether grouper is in hierarchical mode or
 * peer-to-peer mode.
 *
 * @member {PropertyEvent<OcaGrouperMode>} OcaGrouper#OnModeChanged
 */
