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
 * **Concept** ** **A **grouper** is an object responsible for aggregating
 * property values. An **actuator grouper** allows control of many actuator
 * objects from a single input value; a **sensor grouper** allows observing many
 * sensor objects via a single output value. Actuator groupers are described
 * below; sensor groupers are TBD. In a working media system, many actuator
 * objects (we will call them **citizens**) will be members of multiple groups.
 * For example, in a multiway stereo sound reinforcement system, the left woofer
 * power amplifier might be controlled by a master gain group, a left-side gain
 * group, and a woofer gain group. To manage the interactions of these multiple
 * memberships, we need a single entity that manages all three of these groups,
 * anticipating the interactions and taking appropriate action. An actuator
 * grouper is such an entity. The grouper:
 *
 *  - Registers all the groups and all the citizens.
 *
 *  - Remembers which citizens belong to which groups.
 *
 *  - Computes new property values when group settings change.
 *
 *  - Manages overrange and underrange conditions proactively, so that citizens
 *    are never asked to assume out of range values.
 *
 *
 * For any given grouper instance, all of its citizens will all be of the same
 * class. Applications may have a number of grouper instances, one for each
 * citizen class -- an OcaGain grouper, an OcaFrequency grouper, etc. For
 * controlling each group, the grouper creates a proxy object of the same class
 * as its citizens, so that the same controller logic can be used for either a
 * group or an individual worker. It may be helpful to visualize a grouper as a
 * matrix whose rows are groups, columns are citizens, and each cell contains
 * information relating to the membership of the citizen in the group. This
 * information is called the citizen's **enrollment** in the group.
 * **Mechanism** Each Grouper is an instance of this class (**OcaGrouper**). A
 * **group** is a collection of citizens. A citizen that belongs to a group is
 * called a **member** of that group. There is a many-to-many relationship
 * between groups and citizens -- any citizen can be a member of any number of
 * groups. The purpose of the Grouper is to contain the set of groups and the
 * set of citizens, to remember which citizens belong to which groups, and to
 * compute new aggregate values when settings or readings change. The Grouper
 * itself does not provide direct access to parameter data values. That access
 * is provided by **group proxies** or by **peer to peer** mastering -- see
 * below. It is useful to think of a Grouper as a matrix in which groups are
 * rows and citizens are columns. A cell of the matrix is nonempty whenever its
 * column (=citizen) belongs to its row (=group). Such a cell is called an
 * **enrollment.** **Classes of Grouped Objects** Group members can be actuator
 * or sensor objects. A group whose members are actuators is called an
 * **actuator group**. A group whose members are sensors is called a **sensor
 * group**. All the citizens of a given Grouper must be of the same worker class
 * (sounds communistic, doesn't it :) called the **citizen class**. Typically an
 * application will have multiple Groupers, each one supporting a different
 * citizen class. **Adding Groups** New groups can be added to the Grouper at
 * any time, using OcaGrouper's **AddGroup** method. **Group Proxies; Peer to
 * Peer Mastering** Depending on the setting of its **mode** property, a grouper
 * may be in **master-slave mode** or **peer to peer mode. ** In master-slave
 * mode, each time a caller adds a group to a Grouper instance, the Grouper
 * instance creates an object known as a **group proxy.** Thus, there is one
 * group proxy instance per group.** ** The class of the group proxy is the same
 * as the Grouper's citizen class. For example, for a group of OcaGain
 * actuators, the group proxy is an OcaGain object. The purpose of the group
 * proxy is to allow controllers to access the group's setpoint (for actuator
 * groups) or reading (for sensor groups) in the same way as they would access
 * individual workers of the citizen class. In peer-to-peer mode, no group proxy
 * is created. Instead, the group setpoint is changed whenever *any* member's
 * setpoint is changed. In effect, all the group's members behave as though they
 * were group proxies. **Adding Citizens** New citizens may be added to a
 * Grouper instance at any time, using OcaGrouper's **AddCitizen** method.
 * Newly-added citizens are by default not members of any group. Citizens may be
 * enrolled in groups at any time using OcaGrouper's **SetEnrollment** method.
 * **Deleting** The Grouper allows deletion of groups and citizens at any time,
 * although excessive deletion may lead to sparse memory use, depending on
 * Grouper implementation.**Setpoints, Readings, and Aggregation** **Setpoints
 * and Rules** Each group has a **setpoint** (for actuator groups) or
 * **reading** (for sensor groups) whose value is related to its members'
 * setpoints or readings by the combination of two rules:
 *
 *  - The group's **saturation rules**, which control handling of overrange
 *    conditions; and
 *
 *  - Each member's **aggregation rules**, which determine the algorithms by
 *    which aggregate values are computed.
 *
 *
 * ** Scope of the OcaGrouper Class** Many aspects of groupers will vary from
 * product to product. **OcaGrouper** is an abstract class that defines common
 * concepts and terms for groupers, a canonical control interface, and most
 * aspects of membership management . However it but stops short of specifying
 * actual semantics. Implementations will need to define (at least):
 *
 *  - Saturation rules
 *
 *  - Aggregation rules
 *
 *  - Error-handling mechanisms (e.g. what happens when a grouper loses its
 *    connection to a citizen, and what happens when it later re-attaches)
 *
 *
 * @extends OcaAgent
 * @class OcaGrouper
 */
export const OcaGrouper = make_control_class(
  'OcaGrouper',
  3,
  '\u0001\u0002\u0002',
  2,
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
    ['Groups', [OcaList(OcaGrouperGroup)], 3, 2, false, false, ['GroupList']],
    [
      'Citizens',
      [OcaList(OcaGrouperCitizen)],
      3,
      3,
      false,
      false,
      ['CitizenList'],
    ],
    [
      'Enrollments',
      [OcaList(OcaGrouperEnrollment)],
      3,
      4,
      false,
      false,
      ['EnrollmentList'],
    ],
    ['Mode', [OcaGrouperMode], 3, 5, false, false, null],
  ],
  [['StatusChange', 3, 1, [OcaGrouperStatusChangeEventData]]]
);

/**
 * Adds a group to the grouper and returns its object number. (The group's
 * network address will be the same as the grouper's). The return value
 * indicates whether the group was successfully added.
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
 * Deletes a group from the grouper. The return value indicates whether the
 * group was successfully deleted. Note: index values of deleted groups are not
 * reused during the lifetime of the grouper instance.
 *
 * @method OcaGrouper#DeleteGroup
 * @param {number} Index
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the count of groups owned by this grouper. The return value indicates
 * whether the count was successfully retrieved.
 *
 * @method OcaGrouper#GetGroupCount
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Gets the list of groups owned by this grouper. The return value indicates
 * whether the list was successfully retrieved.
 *
 * @method OcaGrouper#GetGroupList
 * @returns {Promise<OcaGrouperGroup[]>}
 *   A promise which resolves to a single value of type :class:`OcaGrouperGroup[]`.
 */
/**
 * Adds a target to the group. The return value indicates whether the target was
 * successfully added. This method does not enroll the new target in any of the
 * grouper's groups -- it merely makes the target available for enrollment.
 * Group membership is controlled by the SetEnrollment method, q.v.
 *
 * @method OcaGrouper#AddCitizen
 * @param {IOcaGrouperCitizen} Citizen
 *
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Delete a citizen from the grouper (and therefore from all of its groups). The
 * return value indicates whether the citizen was successfully deleted. Note:
 * index values of deleted citizens are not reused during the lifetime of the
 * grouper instance.
 *
 * @method OcaGrouper#DeleteCitizen
 * @param {number} Index
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the count of citizens registered in this grouper. The return value
 * indicates whether the count was successfully retrieved.
 *
 * @method OcaGrouper#GetCitizenCount
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Gets the list of citizens registered in this grouper. The return value
 * indicates whether the list was successfully retrieved.
 *
 * @method OcaGrouper#GetCitizenList
 * @returns {Promise<OcaGrouperCitizen[]>}
 *   A promise which resolves to a single value of type :class:`OcaGrouperCitizen[]`.
 */
/**
 * Gets membership status for given target in given group. The return value
 * indicates whether the status was successfully retrieved.
 *
 * @method OcaGrouper#GetEnrollment
 * @param {IOcaGrouperEnrollment} Enrollment
 *
 * @returns {Promise<boolean>}
 *   A promise which resolves to a single value of type ``boolean``.
 */
/**
 * Sets membership status for given target in given group. The return value
 * indicates whether the status was successfully set.
 *
 * @method OcaGrouper#SetEnrollment
 * @param {IOcaGrouperEnrollment} Enrollment
 * @param {boolean} IsMember
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the list of members of the given group. The return value indicates
 * whether the list was successfully retrieved.
 *
 * @method OcaGrouper#GetGroupMemberList
 * @param {number} Index
 *
 * @returns {Promise<OcaGrouperCitizen[]>}
 *   A promise which resolves to a single value of type :class:`OcaGrouperCitizen[]`.
 */
/**
 * Gets the value of the ActuatorOrSensor property. The return value indicates
 * whether the value was successfully retrieved.
 *
 * @method OcaGrouper#GetActuatorOrSensor
 * @returns {Promise<boolean>}
 *   A promise which resolves to a single value of type ``boolean``.
 */
/**
 * Sets the value of the ActuatorOrSensor property. The return value indicates
 * whether the value was successfully set.
 *
 * @method OcaGrouper#SetActuatorOrSensor
 * @param {boolean} ActuatorOrSensor
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value of the Mode property. The return value indicates whether the
 * value was successfully retrieved.
 *
 * @method OcaGrouper#GetMode
 * @returns {Promise<OcaGrouperMode>}
 *   A promise which resolves to a single value of type :class:`OcaGrouperMode`.
 */
/**
 * Sets the value of the Mode property. The return value indicates whether the
 * value was successfully set.
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
 * List of groups in the grouper. Groups are added to and deleted from a grouper
 * by the AdGroup and DeleteGroup methods of OcaGrouper.
 *
 * @member {PropertyEvent<OcaGrouperGroup[]>} OcaGrouper#OnGroupsChanged
 */
/**
 * An alias for OnGroupsChanged
 *
 * @member {PropertyEvent<OcaGrouperGroup[]>} OcaGrouper#OnGroupListChanged
 */
/**
 * This event is emitted when the property ``Citizens`` changes in the remote object.
 * The property ``Citizens`` is described in the AES70 standard as follows.
 * List of citizens defined for this grouper.
 *
 * @member {PropertyEvent<OcaGrouperCitizen[]>} OcaGrouper#OnCitizensChanged
 */
/**
 * An alias for OnCitizensChanged
 *
 * @member {PropertyEvent<OcaGrouperCitizen[]>} OcaGrouper#OnCitizenListChanged
 */
/**
 * This event is emitted when the property ``Enrollments`` changes in the remote object.
 * The property ``Enrollments`` is described in the AES70 standard as follows.
 * List of grouper's enrollments, i.e. which citizen(s) belong to which
 * group(s).
 *
 * @member {PropertyEvent<OcaGrouperEnrollment[]>} OcaGrouper#OnEnrollmentsChanged
 */
/**
 * An alias for OnEnrollmentsChanged
 *
 * @member {PropertyEvent<OcaGrouperEnrollment[]>} OcaGrouper#OnEnrollmentListChanged
 */
/**
 * This event is emitted when the property ``Mode`` changes in the remote object.
 * The property ``Mode`` is described in the AES70 standard as follows.
 * Switch that determines whether grouper is in master-slave mode or
 * peer-to-peer mode.
 *
 * @member {PropertyEvent<OcaGrouperMode>} OcaGrouper#OnModeChanged
 */
