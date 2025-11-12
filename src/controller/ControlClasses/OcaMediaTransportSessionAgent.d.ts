import {
  IOcaMediaTransportSession,
  OcaMediaTransportSession,
} from '../../types/OcaMediaTransportSession.js';
import {
  IOcaMediaTransportSessionConnection,
  OcaMediaTransportSessionConnection,
} from '../../types/OcaMediaTransportSessionConnection.js';
import { OcaMediaTransportSessionStatus } from '../../types/OcaMediaTransportSessionStatus.js';
import { PropertyEvent } from '../property_event.js';
import { RemoteDevice } from '../remote_device.js';
import { OcaAgent } from './OcaAgent.js';

/**
 * Agent to set up, monitor, control, and take down media transport sessions.
 * This shall be the base class for the AES70-CM4 connection management feature.
 * See [AES70-1(Connection Management)]. This is an optional class. Session
 * management functionality is not a mandatory for CM4 implementations.
 * @extends OcaAgent
 * @class OcaMediaTransportSessionAgent
 */
export declare class OcaMediaTransportSessionAgent extends OcaAgent {
  /**
   * This event is emitted whenever Sessions changes.
   */
  OnSessionsChanged: PropertyEvent<OcaMediaTransportSession[]>;

  /**
   * This event is emitted whenever SessionStatuses changes.
   */
  OnSessionStatusesChanged: PropertyEvent<
    Map<number, OcaMediaTransportSessionStatus>
  >;

  /**
   * This event is emitted whenever AdaptationData changes.
   */
  OnAdaptationDataChanged: PropertyEvent<Uint8Array>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets type of session supported by this session agent.
   *
   * @method OcaMediaTransportSessionAgent#GetSessionType
   * @returns {Promise<string>}
   *   A promise which resolves to a single value of type ``string``.
   */
  GetSessionType(): Promise<string>;

  /**
   * Gets the list of transport sessions held by this Agent.
   *
   * @method OcaMediaTransportSessionAgent#GetSessions
   * @returns {Promise<OcaMediaTransportSession[]>}
   *   A promise which resolves to a single value of type :class:`OcaMediaTransportSession[]`.
   */
  GetSessions(): Promise<OcaMediaTransportSession[]>;

  /**
   * Gets the designated session.
   *
   * @method OcaMediaTransportSessionAgent#GetSession
   * @param {number} ID
   *
   * @returns {Promise<OcaMediaTransportSession>}
   *   A promise which resolves to a single value of type :class:`OcaMediaTransportSession`.
   */
  GetSession(ID: number): Promise<OcaMediaTransportSession>;

  /**
   * Adds a new session. Returns given **OcaMediaTransportSession** parameter
   * with session ID filled in.
   *
   * @method OcaMediaTransportSessionAgent#AddSession
   * @param {IOcaMediaTransportSession} Session
   *
   * @returns {Promise<OcaMediaTransportSession>}
   *   A promise which resolves to a single value of type :class:`OcaMediaTransportSession`.
   */
  AddSession(
    Session: IOcaMediaTransportSession
  ): Promise<OcaMediaTransportSession>;

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
  ConfigureSession(
    IDinternal: number,
    IDexternal: Uint8Array,
    UserLabel: string,
    AdaptationData: Uint8Array
  ): Promise<void>;

  /**
   * Deletes the designated session. Closes all connections the session
   * contains.
   *
   * @method OcaMediaTransportSessionAgent#DeleteSession
   * @param {number} ID
   *
   * @returns {Promise<void>}
   */
  DeleteSession(ID: number): Promise<void>;

  /**
   * Resets the designated session. Returns the session to the state it has
   * following a device reset.
   *
   * @method OcaMediaTransportSessionAgent#ResetSession
   * @param {number} ID
   *
   * @returns {Promise<void>}
   */
  ResetSession(ID: number): Promise<void>;

  /**
   * Sets the streaming enabled switch.
   *
   * @method OcaMediaTransportSessionAgent#SetStreamingEnabled
   * @param {number} ID
   * @param {boolean} Active
   *
   * @returns {Promise<void>}
   */
  SetStreamingEnabled(ID: number, Active: boolean): Promise<void>;

  /**
   * if **StreamingEnabled** is TRUE, changes state from
   * **ConnectedNotStreaming** to **ConnectedStreaming**.
   *
   * @method OcaMediaTransportSessionAgent#StartStreaming
   * @param {number} ID
   *
   * @returns {Promise<void>}
   */
  StartStreaming(ID: number): Promise<void>;

  /**
   * if state is **ConnectedStreaming**, changes state to
   * **ConnectedNotStreaming**.
   *
   * @method OcaMediaTransportSessionAgent#StopStreaming
   * @param {number} ID
   *
   * @returns {Promise<void>}
   */
  StopStreaming(ID: number): Promise<void>;

  /**
   * Gets the map of statuses of transport sessions held by this Agent.
   *
   * @method OcaMediaTransportSessionAgent#GetSessionStatuses
   * @returns {Promise<Map<number, OcaMediaTransportSessionStatus>>}
   *   A promise which resolves to a single value of type ``Map<number, OcaMediaTransportSessionStatus>``.
   */
  GetSessionStatuses(): Promise<Map<number, OcaMediaTransportSessionStatus>>;

  /**
   * Gets status of the designated transport session.
   *
   * @method OcaMediaTransportSessionAgent#GetSessionStatus
   * @param {number} ID
   *
   * @returns {Promise<OcaMediaTransportSessionStatus>}
   *   A promise which resolves to a single value of type :class:`OcaMediaTransportSessionStatus`.
   */
  GetSessionStatus(ID: number): Promise<OcaMediaTransportSessionStatus>;

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
  AddConnection(
    SessionID: number,
    Connection: IOcaMediaTransportSessionConnection
  ): Promise<OcaMediaTransportSessionConnection>;

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
  ConfigureConnection(
    SessionID: number,
    ConnectionID: number,
    LocalEndpointID: number,
    RemoteEndpointID: Uint8Array
  ): Promise<void>;

  /**
   * Deletes a connection from a transport session.
   *
   * @method OcaMediaTransportSessionAgent#DeleteConnection
   * @param {number} SessionID
   * @param {number} ConnectionID
   *
   * @returns {Promise<void>}
   */
  DeleteConnection(SessionID: number, ConnectionID: number): Promise<void>;

  /**
   * Deletes all connections from a transport session.
   *
   * @method OcaMediaTransportSessionAgent#DeleteConnections
   * @param {number} SessionID
   *
   * @returns {Promise<void>}
   */
  DeleteConnections(SessionID: number): Promise<void>;

  /**
   * Gets value of property **AdaptationData**
   *
   * @method OcaMediaTransportSessionAgent#GetAdaptationData
   * @returns {Promise<Uint8Array>}
   *   A promise which resolves to a single value of type ``Uint8Array``.
   */
  GetAdaptationData(): Promise<Uint8Array>;

  /**
   * Sets value of property **AdaptationData**
   *
   * @method OcaMediaTransportSessionAgent#SetAdaptationData
   * @param {Uint8Array} Data
   *
   * @returns {Promise<void>}
   */
  SetAdaptationData(Data: Uint8Array): Promise<void>;
}
