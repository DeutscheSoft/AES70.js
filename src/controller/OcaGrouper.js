import { make_control_class } from './Base.js';
import { OcaAgent } from './OcaAgent.js';
import { OcaBoolean } from '../OCP1/OcaBoolean.js';
import { OcaGrouperCitizen } from '../OCP1/OcaGrouperCitizen.js';
import { OcaGrouperEnrollment } from '../OCP1/OcaGrouperEnrollment.js';
import { OcaGrouperGroup } from '../OCP1/OcaGrouperGroup.js';
import { OcaGrouperMode } from '../OCP1/OcaGrouperMode.js';
import { OcaGrouperStatusChangeType } from '../OCP1/OcaGrouperStatusChangeType.js';
import { OcaList } from '../OCP1/OcaList.js';
import { OcaString } from '../OCP1/OcaString.js';
import { OcaUint16 } from '../OCP1/OcaUint16.js';
import { OcaUint32 } from '../OCP1/OcaUint32.js';
import { String16 } from '../OCP1/String16.js';

/**
 * <b><u>Concept</u></b> <b><u> </u></b>A <b>grouper</b> is an object
 * responsible for aggregating property values. An <b>actuator
 * grouper</b> allows control of many actuator objects from a single
 * input value; a <b>sensor grouper</b> allows observing many sensor
 * objects via a single output value. Actuator groupers are described
 * below; sensor groupers are TBD. In a working media system, many
 * actuator objects (we will call them <b>citizens</b>) will be members
 * of multiple groups. For example, in a multiway stereo sound
 * reinforcement system, the left woofer power amplifier might be
 * controlled by a master gain group, a left-side gain group, and a
 * woofer gain group. To manage the interactions of these multiple
 * memberships, we need a single entity that manages all three of these
 * groups, anticipating the interactions and taking appropriate action.
 * An actuator grouper is such an entity. The grouper: <ul> <li>Registers
 * all the groups and all the citizens.</li> <li>Remembers which citizens
 * belong to which groups.</li> <li>Computes new property values when
 * group settings change.</li> <li>Manages overrange and underrange
 * conditions proactively, so that citizens are never asked to assume out
 * of range values.</li> </ul> For any given grouper instance, all of its
 * citizens will all be of the same class. Applications may have a number
 * of grouper instances, one for each citizen class -- an OcaGain
 * grouper, an OcaFrequency grouper, etc. For controlling each group, the
 * grouper creates a proxy object of the same class as its citizens, so
 * that the same controller logic can be used for either a group or an
 * individual worker. It may be helpful to visualize a grouper as a
 * matrix whose rows are groups, columns are citizens, and each cell
 * contains information relating to the membership of the citizen in the
 * group. This information is called the citizen's <b>enrollment</b> in
 * the group. <b><u>Mechanism</u></b> Each Grouper is an instance of this
 * class (<b>OcaGrouper</b>). A <b>group </b>is a collection of citizens.
 * A citizen that belongs to a group is called a <b>member</b> of that
 * group. There is a many-to-many relationship between groups and
 * citizens -- any citizen can be a member of any number of groups. The
 * purpose of the Grouper is to contain the set of groups and the set of
 * citizens, to remember which citizens belong to which groups, and to
 * compute new aggregate values when settings or readings change. The
 * Grouper itself does not provide direct access to parameter data
 * values. That access is provided by <b>group proxies </b>or by <b>peer
 * to peer</b> mastering -- see below. It is useful to think of a Grouper
 * as a matrix in which groups are rows and citizens are columns. A cell
 * of the matrix is nonempty whenever its column (=citizen) belongs to
 * its row (=group). Such a cell is called an <b>enrollment.</b>
 * <b><u>Classes of Grouped Objects</u></b> Group members can be actuator
 * or sensor objects. A group whose members are actuators is called an
 * <b>actuator group</b>. A group whose members are sensors is called a
 * <b>sensor group</b>. All the citizens of a given Grouper must be of
 * the same worker class (sounds communistic, doesn't it :) called the
 * <b>citizen class</b>. Typically an application will have multiple
 * Groupers, each one supporting a different citizen class. <b><u>Adding
 * Groups</u></b> New groups can be added to the Grouper at any time,
 * using OcaGrouper's <b>AddGroup </b>method. <b><u>Group Proxies; Peer
 * to Peer Mastering</u></b> Depending on the setting of its <b>mode</b>
 * property, a grouper may be in <b>master-slave mode</b> or <b>peer to
 * peer mode. </b> <u>In master-slave mode</u>, each time a caller adds a
 * group to a Grouper instance, the Grouper instance creates an object
 * known as a <b>group proxy. </b>Thus, there is one group proxy instance
 * per group.<b> </b>The class of the group proxy is the same as the
 * Grouper's citizen class. For example, for a group of OcaGain
 * actuators, the group proxy is an OcaGain object. The purpose of the
 * group proxy is to allow controllers to access the group's setpoint
 * (for actuator groups) or reading (for sensor groups) in the same way
 * as they would access individual workers of the citizen class. <u>In
 * peer-to-peer mode</u>, no group proxy is created. Instead, the group
 * setpoint is changed whenever <i>any</i> member's setpoint is changed.
 * In effect, all the group's members behave as though they were group
 * proxies. <b><u>Adding Citizens</u></b> New citizens may be added to a
 * Grouper instance at any time, using OcaGrouper's <b>AddCitizen</b>
 * method. Newly-added citizens are by default not members of any group.
 * Citizens may be enrolled in groups at any time using OcaGrouper's
 * <b>SetEnrollment </b>method. <b><u>Deleting</u></b> The Grouper allows
 * deletion of groups and citizens at any time, although excessive
 * deletion may lead to sparse memory use, depending on Grouper
 * implementation.<b><u>Setpoints, Readings, and Aggregation</u></b>
 * <b><u>Setpoints and Rules</u></b> Each group has a <b>setpoint</b>
 * (for actuator groups) or <b>reading</b> (for sensor groups) whose
 * value is related to its members' setpoints or readings by the
 * combination of two rules: <ol> <li>The group's <b>saturation
 * rules</b>, which control handling of overrange conditions; and </li>
 * <li>Each member's <b>aggregation rules</b>, which determine the
 * algorithms by which aggregate values are computed. </li> </ol> <b><u>
 * </u></b><b><u>Scope of the OcaGrouper Class</u></b> Many aspects of
 * groupers will vary from product to product. <b>OcaGrouper</b> is an
 * abstract class that defines common concepts and terms for groupers, a
 * canonical control interface, and most aspects of membership management
 * . However it but stops short of specifying actual semantics.
 * Implementations will need to define (at least): <ul> <li>Saturation
 * rules</li> <li>Aggregation rules</li> <li>Error-handling mechanisms
 * (e.g. what happens when a grouper loses its connection to a citizen,
 * and what happens when it later re-attaches)</li> </ul>
 * @extends RemoteControlClasses.OcaAgent
 * @class OcaGrouper
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
  [['StatusChange', 3, 1, [OcaUint16, OcaUint16, OcaGrouperStatusChangeType]]]
);

/**
 * Adds a group to the grouper and returns its object number. (The
 * group's network address will be the same as the grouper's). The return
 * value indicates whether the group was successfully added.
 * @method RemoteControlClasses.OcaGrouper#AddGroup
 * @param Name {OcaString}
 *
 * @returns {Promise<Arguments<OcaUint16,OcaONo>>}
 */
/**
 * Deletes a group from the grouper. The return value indicates whether
 * the group was successfully deleted. Note: index values of deleted
 * groups are not reused during the lifetime of the grouper instance.
 * @method RemoteControlClasses.OcaGrouper#DeleteGroup
 * @param Index {OcaUint16}
 *
 * @returns {Promise}
 */
/**
 * Gets the count of groups owned by this grouper. The return value
 * indicates whether the count was successfully retrieved.
 * @method RemoteControlClasses.OcaGrouper#GetGroupCount
 * @returns {Promise<OcaUint16>}
 */
/**
 * Gets the list of groups owned by this grouper. The return value
 * indicates whether the list was successfully retrieved.
 * @method RemoteControlClasses.OcaGrouper#GetGroupList
 * @returns {Promise<OcaList>}
 */
/**
 * Adds a target to the group. The return value indicates whether the
 * target was successfully added. This method does not enroll the new
 * target in any of the grouper's groups -- it merely makes the target
 * available for enrollment. Group membership is controlled by the
 * SetEnrollment method, q.v.
 * @method RemoteControlClasses.OcaGrouper#AddCitizen
 * @param Citizen {OcaGrouperCitizen}
 *
 * @returns {Promise<OcaUint16>}
 */
/**
 * Delete a citizen from the grouper (and therefore from all of its
 * groups). The return value indicates whether the citizen was
 * successfully deleted. Note: index values of deleted citizens are not
 * reused during the lifetime of the grouper instance.
 * @method RemoteControlClasses.OcaGrouper#DeleteCitizen
 * @param Index {OcaUint16}
 *
 * @returns {Promise}
 */
/**
 * Gets the count of citizens registered in this grouper. The return
 * value indicates whether the count was successfully retrieved.
 * @method RemoteControlClasses.OcaGrouper#GetCitizenCount
 * @returns {Promise<OcaUint16>}
 */
/**
 * Gets the list of citizens registered in this grouper. The return value
 * indicates whether the list was successfully retrieved.
 * @method RemoteControlClasses.OcaGrouper#GetCitizenList
 * @returns {Promise<OcaList>}
 */
/**
 * Gets membership status for given target in given group. The return
 * value indicates whether the status was successfully retrieved.
 * @method RemoteControlClasses.OcaGrouper#GetEnrollment
 * @param Enrollment {OcaGrouperEnrollment}
 *
 * @returns {Promise<OcaBoolean>}
 */
/**
 * Sets membership status for given target in given group. The return
 * value indicates whether the status was successfully set.
 * @method RemoteControlClasses.OcaGrouper#SetEnrollment
 * @param Enrollment {OcaGrouperEnrollment}
 *
 * @param IsMember {OcaBoolean}
 *
 * @returns {Promise}
 */
/**
 * Gets the list of members of the given group. The return value
 * indicates whether the list was successfully retrieved.
 * @method RemoteControlClasses.OcaGrouper#GetGroupMemberList
 * @param Index {OcaUint16}
 *
 * @returns {Promise<OcaList>}
 */
/**
 * Gets the value of the ActuatorOrSensor property. The return value
 * indicates whether the value was successfully retrieved.
 * @method RemoteControlClasses.OcaGrouper#GetActuatorOrSensor
 * @returns {Promise<OcaBoolean>}
 */
/**
 * Sets the value of the ActuatorOrSensor property. The return value
 * indicates whether the value was successfully set.
 * @method RemoteControlClasses.OcaGrouper#SetActuatorOrSensor
 * @param ActuatorOrSensor {OcaBoolean}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the Mode property. The return value indicates
 * whether the value was successfully retrieved.
 * @method RemoteControlClasses.OcaGrouper#GetMode
 * @returns {Promise<OcaGrouperMode>}
 */
/**
 * Sets the value of the Mode property. The return value indicates
 * whether the value was successfully set.
 * @method RemoteControlClasses.OcaGrouper#SetMode
 * @param Mode {OcaGrouperMode}
 *
 * @returns {Promise}
 */
/**
 * Event that is emitted whenever key aspects of a group's status change.
 * Status events include: <ul> <li>Citizen joins grouper</li> <li>Citizen
 * leaves grouper</li> <li>Citizen fails to execute grouper value change
 * request</li> <li>Connection to online citizen is lost</li>
 * <li>Connection to offline citizen is reestablished</li> <li>Citizen
 * enrolls in group</li> <li>Citizen de-enrolls from group</li> </ul>
 * @member RemoteControlClasses.OcaGrouper#OnStatusChange {Event} -
 * Event that is emitted whenever key aspects of a group's status change.
 * Status events include: <ul> <li>Citizen joins grouper</li> <li>Citizen
 * leaves grouper</li> <li>Citizen fails to execute grouper value change
 * request</li> <li>Connection to online citizen is lost</li>
 * <li>Connection to offline citizen is reestablished</li> <li>Citizen
 * enrolls in group</li> <li>Citizen de-enrolls from group</li> </ul>
 */
/**
 * True if Grouper is actuator grouper, false if sensor grouper.
 * @member RemoteControlClasses.OcaGrouper#OnActuatorOrSensorChanged {PropertyEvent<OcaBoolean>} - This event is emitted when ActuatorOrSensor changes in the remote object.
 */
/**
 * List of groups in the grouper. Groups are added to and deleted from a
 * grouper by the AdGroup and DeleteGroup methods of OcaGrouper.
 * @member RemoteControlClasses.OcaGrouper#OnGroupsChanged {PropertyEvent<OcaList>} - This event is emitted when Groups changes in the remote object.
 */
/**
 * List of citizens defined for this grouper.
 * @member RemoteControlClasses.OcaGrouper#OnCitizensChanged {PropertyEvent<OcaList>} - This event is emitted when Citizens changes in the remote object.
 */
/**
 * List of grouper's enrollments, i.e. which citizen(s) belong to which
 * group(s).
 * @member RemoteControlClasses.OcaGrouper#OnEnrollmentsChanged {PropertyEvent<OcaList>} - This event is emitted when Enrollments changes in the remote object.
 */
/**
 * Switch that determines whether grouper is in master-slave mode or
 * peer-to-peer mode.
 * @member RemoteControlClasses.OcaGrouper#OnModeChanged {PropertyEvent<OcaGrouperMode>} - This event is emitted when Mode changes in the remote object.
 */
