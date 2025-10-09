import { OcaBlob } from '../../OCP1/OcaBlob.js';
import { OcaBoolean } from '../../OCP1/OcaBoolean.js';
import { OcaList } from '../../OCP1/OcaList.js';
import { OcaMap } from '../../OCP1/OcaMap.js';
import { OcaMediaTransportSession } from '../../OCP1/OcaMediaTransportSession.js';
import { OcaMediaTransportSessionConnection } from '../../OCP1/OcaMediaTransportSessionConnection.js';
import { OcaMediaTransportSessionStatus } from '../../OCP1/OcaMediaTransportSessionStatus.js';
import { OcaString } from '../../OCP1/OcaString.js';
import { OcaUint32 } from '../../OCP1/OcaUint32.js';
import { make_control_class } from '../make_control_class.js';
import { OcaAgent } from './OcaAgent.js';

/**
 * Agent to set up, monitor, control, and take down media transport sessions.
 * This shall be the base class for the AES70-CM4 connection management feature.
 * See [AES70-1(Connection Management)]. This is an optional class. Session
 * management functionality is not a mandatory for CM4 implementations.
 * @extends OcaAgent
 * @class OcaMediaTransportSessionAgent
 */
export const OcaMediaTransportSessionAgent = make_control_class(
  'OcaMediaTransportSessionAgent',
  3,
  '\u0001\u0002\u0014',
  1,
  OcaAgent,
  [
    ['GetSessionType', 3, 1, [], [OcaString]],
    ['GetSessions', 3, 2, [], [OcaList(OcaMediaTransportSession)]],
    ['GetSession', 3, 3, [OcaUint32], [OcaMediaTransportSession]],
    [
      'AddSession',
      3,
      4,
      [OcaMediaTransportSession],
      [OcaMediaTransportSession],
    ],
    ['ConfigureSession', 3, 5, [OcaUint32, OcaBlob, OcaString, OcaBlob], []],
    ['DeleteSession', 3, 6, [OcaUint32], []],
    ['ResetSession', 3, 7, [OcaUint32], []],
    ['SetStreamingEnabled', 3, 8, [OcaUint32, OcaBoolean], []],
    ['StartStreaming', 3, 9, [OcaUint32], []],
    ['StopStreaming', 3, 10, [OcaUint32], []],
    [
      'GetSessionStatuses',
      3,
      11,
      [],
      [OcaMap(OcaUint32, OcaMediaTransportSessionStatus)],
    ],
    ['GetSessionStatus', 3, 12, [OcaUint32], [OcaMediaTransportSessionStatus]],
    [
      'AddConnection',
      3,
      13,
      [OcaUint32, OcaMediaTransportSessionConnection],
      [OcaMediaTransportSessionConnection],
    ],
    [
      'ConfigureConnection',
      3,
      14,
      [OcaUint32, OcaUint32, OcaUint32, OcaBlob],
      [],
    ],
    ['DeleteConnection', 3, 15, [OcaUint32, OcaUint32], []],
    ['DeleteConnections', 3, 16, [OcaUint32], []],
    ['GetAdaptationData', 3, 17, [], [OcaBlob]],
    ['SetAdaptationData', 3, 18, [OcaBlob], []],
  ],
  [
    ['SessionType', [OcaString], 3, 1, true, false, null],
    ['Sessions', [OcaList(OcaMediaTransportSession)], 3, 2, false, false, null],
    [
      'SessionStatuses',
      [OcaMap(OcaUint32, OcaMediaTransportSessionStatus)],
      3,
      3,
      false,
      false,
      null,
    ],
    ['AdaptationData', [OcaBlob], 3, 4, false, false, null],
  ],
  []
);

/**
 * Gets type of session supported by this session agent.
 *
 * @method OcaMediaTransportSessionAgent#GetSessionType
 * @returns {Promise<string>}
 *   A promise which resolves to a single value of type ``string``.
 */
/**
 * Gets the list of transport sessions held by this Agent.
 *
 * @method OcaMediaTransportSessionAgent#GetSessions
 * @returns {Promise<OcaMediaTransportSession[]>}
 *   A promise which resolves to a single value of type :class:`OcaMediaTransportSession[]`.
 */
/**
 * Gets the designated session.
 *
 * @method OcaMediaTransportSessionAgent#GetSession
 * @param {number} ID
 *
 * @returns {Promise<OcaMediaTransportSession>}
 *   A promise which resolves to a single value of type :class:`OcaMediaTransportSession`.
 */
/**
 * Adds a new session. Returns given **OcaMediaTransportSession** parameter with
 * session ID filled in.
 *
 * @method OcaMediaTransportSessionAgent#AddSession
 * @param {IOcaMediaTransportSession} Session
 *
 * @returns {Promise<OcaMediaTransportSession>}
 *   A promise which resolves to a single value of type :class:`OcaMediaTransportSession`.
 */
/**
 * Configures a session.
 *
 * @method OcaMediaTransportSessionAgent#ConfigureSession
 * @param {number} IDinternal
 * @param {Uint8Array} IDexternal
 * @param {string} UserLabel
 * @param {Uint8Array} AdaptationData
 *
 * @returns {Promise<void>}
 */
/**
 * Deletes the designated session. Closes all connections the session contains.
 *
 * @method OcaMediaTransportSessionAgent#DeleteSession
 * @param {number} ID
 *
 * @returns {Promise<void>}
 */
/**
 * Resets the designated session. Returns the session to the state it has
 * following a device reset.
 *
 * @method OcaMediaTransportSessionAgent#ResetSession
 * @param {number} ID
 *
 * @returns {Promise<void>}
 */
/**
 * Sets the streaming enabled switch.
 *
 * @method OcaMediaTransportSessionAgent#SetStreamingEnabled
 * @param {number} ID
 * @param {boolean} Active
 *
 * @returns {Promise<void>}
 */
/**
 * if **StreamingEnabled** is TRUE, changes state from **ConnectedNotStreaming**
 * to **ConnectedStreaming**.
 *
 * @method OcaMediaTransportSessionAgent#StartStreaming
 * @param {number} ID
 *
 * @returns {Promise<void>}
 */
/**
 * if state is **ConnectedStreaming**, changes state to
 * **ConnectedNotStreaming**.
 *
 * @method OcaMediaTransportSessionAgent#StopStreaming
 * @param {number} ID
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the map of statuses of transport sessions held by this Agent.
 *
 * @method OcaMediaTransportSessionAgent#GetSessionStatuses
 * @returns {Promise<Map<number, OcaMediaTransportSessionStatus>>}
 *   A promise which resolves to a single value of type ``Map<number, OcaMediaTransportSessionStatus>``.
 */
/**
 * Gets status of the designated transport session.
 *
 * @method OcaMediaTransportSessionAgent#GetSessionStatus
 * @param {number} ID
 *
 * @returns {Promise<OcaMediaTransportSessionStatus>}
 *   A promise which resolves to a single value of type :class:`OcaMediaTransportSessionStatus`.
 */
/**
 * Adds a new connection to an existing transport session. Returns given
 * **OcaMediaTransportSessionConnection** parameter with connection ID filled
 * in.
 *
 * @method OcaMediaTransportSessionAgent#AddConnection
 * @param {number} SessionID
 * @param {IOcaMediaTransportSessionConnection} Connection
 *
 * @returns {Promise<OcaMediaTransportSessionConnection>}
 *   A promise which resolves to a single value of type :class:`OcaMediaTransportSessionConnection`.
 */
/**
 * Configures a connection.
 *
 * @method OcaMediaTransportSessionAgent#ConfigureConnection
 * @param {number} SessionID
 * @param {number} ConnectionID
 * @param {number} LocalEndpointID
 * @param {Uint8Array} RemoteEndpointID
 *
 * @returns {Promise<void>}
 */
/**
 * Deletes a connection from a transport session.
 *
 * @method OcaMediaTransportSessionAgent#DeleteConnection
 * @param {number} SessionID
 * @param {number} ConnectionID
 *
 * @returns {Promise<void>}
 */
/**
 * Deletes all connections from a transport session.
 *
 * @method OcaMediaTransportSessionAgent#DeleteConnections
 * @param {number} SessionID
 *
 * @returns {Promise<void>}
 */
/**
 * Gets value of property **AdaptationData**
 *
 * @method OcaMediaTransportSessionAgent#GetAdaptationData
 * @returns {Promise<Uint8Array>}
 *   A promise which resolves to a single value of type ``Uint8Array``.
 */
/**
 * Sets value of property **AdaptationData**
 *
 * @method OcaMediaTransportSessionAgent#SetAdaptationData
 * @param {Uint8Array} Data
 *
 * @returns {Promise<void>}
 */
/**
 * This event is emitted when the property ``Sessions`` changes in the remote object.
 * The property ``Sessions`` is described in the AES70 standard as follows.
 * Set of transport sessions this Agent contains.
 *
 * @member {PropertyEvent<OcaMediaTransportSession[]>} OcaMediaTransportSessionAgent#OnSessionsChanged
 */
/**
 * This event is emitted when the property ``SessionStatuses`` changes in the remote object.
 * The property ``SessionStatuses`` is described in the AES70 standard as follows.
 * Statuses of transport sessions this Agent contains.
 *
 * @member {PropertyEvent<Map<number, OcaMediaTransportSessionStatus>>} OcaMediaTransportSessionAgent#OnSessionStatusesChanged
 */
/**
 * This event is emitted when the property ``AdaptationData`` changes in the remote object.
 * The property ``AdaptationData`` is described in the AES70 standard as follows.
 * Session-type-specific data.
 *
 * @member {PropertyEvent<Uint8Array>} OcaMediaTransportSessionAgent#OnAdaptationDataChanged
 */
