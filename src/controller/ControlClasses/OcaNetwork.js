import { make_control_class } from '../make_control_class.js';
import { OcaAgent } from './OcaAgent.js';
import { OcaBlob } from '../../OCP1/OcaBlob.js';
import { OcaList } from '../../OCP1/OcaList.js';
import { OcaNetworkControlProtocol } from '../../OCP1/OcaNetworkControlProtocol.js';
import { OcaNetworkLinkType } from '../../OCP1/OcaNetworkLinkType.js';
import { OcaNetworkMediaProtocol } from '../../OCP1/OcaNetworkMediaProtocol.js';
import { OcaNetworkStatistics } from '../../OCP1/OcaNetworkStatistics.js';
import { OcaNetworkStatus } from '../../OCP1/OcaNetworkStatus.js';
import { OcaNetworkSystemInterfaceID } from '../../OCP1/OcaNetworkSystemInterfaceID.js';
import { OcaUint32 } from '../../OCP1/OcaUint32.js';

/**
 *  **DEPRECATED CLASS**   *Replaced by class*  **OcaControlNetwork **  *in version 3 of Connection Management (CM3)*  Abstract base class for defining network classes to which this device belongs. This class is to be used for control and monitoring networks only. For media transport networks, and for networks that combine media transport and control, the  **OcaStreamNetwork**  class should be used instead.
 * @extends OcaAgent
 * @class OcaNetwork
 */
export const OcaNetwork = make_control_class(
  'OcaNetwork',
  3,
  '\u0001\u0002\u0001',
  2,
  OcaAgent,
  [
    ['GetLinkType', 3, 1, [], [OcaNetworkLinkType]],
    ['GetIDAdvertised', 3, 2, [], [OcaBlob]],
    ['SetIDAdvertised', 3, 3, [OcaBlob], []],
    ['GetControlProtocol', 3, 4, [], [OcaNetworkControlProtocol]],
    ['GetMediaProtocol', 3, 5, [], [OcaNetworkMediaProtocol]],
    ['GetStatus', 3, 6, [], [OcaNetworkStatus]],
    ['GetStatistics', 3, 7, [], [OcaNetworkStatistics]],
    ['ResetStatistics', 3, 8, [], []],
    ['GetSystemInterfaces', 3, 9, [], [OcaList(OcaNetworkSystemInterfaceID)]],
    ['SetSystemInterfaces', 3, 10, [OcaList(OcaNetworkSystemInterfaceID)], []],
    ['GetMediaPorts', 3, 11, [], [OcaList(OcaUint32)]],
    ['Startup', 3, 12, [], []],
    ['Shutdown', 3, 13, [], []],
  ],
  [
    ['LinkType', [OcaNetworkLinkType], 3, 1, true, false, null],
    ['IDAdvertised', [OcaBlob], 3, 2, false, false, null],
    ['ControlProtocol', [OcaNetworkControlProtocol], 3, 3, false, false, null],
    ['MediaProtocol', [OcaNetworkMediaProtocol], 3, 4, false, false, null],
    ['Status', [OcaNetworkStatus], 3, 5, false, false, null],
    [
      'SystemInterfaces',
      [OcaList(OcaNetworkSystemInterfaceID)],
      3,
      6,
      false,
      false,
      null,
    ],
    ['MediaPorts', [OcaList(OcaUint32)], 3, 7, false, false, null],
    ['Statistics', [OcaNetworkStatistics], 3, 8, false, false, null],
  ],
  []
);

/**
 * Gets the network's link type (wired Ethernet, USB, etc.). Return status indicates whether the operation was successful.
 *
 * @method OcaNetwork#GetLinkType
 * @returns {Promise<OcaNetworkLinkType>}
 *   A promise which resolves to a single value of type :class:`OcaNetworkLinkType`.
 */
/**
 * Gets the network's IDAdvertised. Return status indicates whether the operation was successful.
 *
 * @method OcaNetwork#GetIDAdvertised
 * @returns {Promise<Uint8Array>}
 *   A promise which resolves to a single value of type ``Uint8Array``.
 */
/**
 * Sets the network's IDAdvertised. Return status indicates whether the operation was successful.
 *
 * @method OcaNetwork#SetIDAdvertised
 * @param {Uint8Array} Name
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the network's ControlProtocol property. Return status indicates whether the operation was successful.
 *
 * @method OcaNetwork#GetControlProtocol
 * @returns {Promise<OcaNetworkControlProtocol>}
 *   A promise which resolves to a single value of type :class:`OcaNetworkControlProtocol`.
 */
/**
 * Gets the network's MediaProtocol property. This is a deprecated method that always returns the value NONE.
 *
 * @method OcaNetwork#GetMediaProtocol
 * @returns {Promise<OcaNetworkMediaProtocol>}
 *   A promise which resolves to a single value of type :class:`OcaNetworkMediaProtocol`.
 */
/**
 * Retrieves the network's status. Return status indicates whether the status was successfully retrieved.
 *
 * @method OcaNetwork#GetStatus
 * @returns {Promise<OcaNetworkStatus>}
 *   A promise which resolves to a single value of type :class:`OcaNetworkStatus`.
 */
/**
 * Retrieves network error statistics counter values. Return status indicates whether the values were successfully retrieved.
 *
 * @method OcaNetwork#GetStatistics
 * @returns {Promise<OcaNetworkStatistics>}
 *   A promise which resolves to a single value of type :class:`OcaNetworkStatistics`.
 */
/**
 * Resets network error statistics counters. Return status indicates whether the counters were successfully reset.
 *
 * @method OcaNetwork#ResetStatistics
 * @returns {Promise<void>}
 */
/**
 * Gets the list of system interface IDs that this network is using. Return status indicates success of the operation.
 *
 * @method OcaNetwork#GetSystemInterfaces
 * @returns {Promise<OcaNetworkSystemInterfaceID[]>}
 *   A promise which resolves to a single value of type ``OcaNetworkSystemInterfaceID[]``.
 */
/**
 * Sets the list of system interface IDs that this network will use. Return status indicates success of the operation. This method is not implemented by all network implementations.
 *
 * @method OcaNetwork#SetSystemInterfaces
 * @param {OcaNetworkSystemInterfaceID[]} Interfaces
 *
 * @returns {Promise<void>}
 */
/**
 * Deprecated method. Always returns status INVALID_REQUEST. Media transport is now managed by the class  **OcaStreamNetwork.**
 *
 * @method OcaNetwork#GetMediaPorts
 * @returns {Promise<number[]>}
 *   A promise which resolves to a single value of type ``number[]``.
 */
/**
 * Start up this network.
 *
 * @method OcaNetwork#Startup
 * @returns {Promise<void>}
 */
/**
 * Shut down this network.
 *
 * @method OcaNetwork#Shutdown
 * @returns {Promise<void>}
 */
/**
 * This event is emitted when the property IDAdvertised changes in the remote object.
 * The property ``IDAdvertised`` is described in the AES70 standard as follows.
 * ID by which this network object is known on the network, i.e. the name
 * or GUID that this network object publishes in the network's
 * directory/discovery system. As of OCA 1.4, this description has been
 * clarified to indicate this property is the registered service name,
 * which may or may not be the same as the device's host name, if any.
 * For data network types that have host names (e.g. IP networks), the
 * authoritative copy of the host name is in the system interface ID.
 *
 * @member {PropertyEvent<Uint8Array>} OcaNetwork#OnIDAdvertisedChanged
 */
/**
 * This event is emitted when the property ControlProtocol changes in the remote object.
 * The property ``ControlProtocol`` is described in the AES70 standard as follows.
 * Type of control protocol used by the network (OCAnn) or NONE if this
 * network is not used for control.
 *
 * @member {PropertyEvent<OcaNetworkControlProtocol>} OcaNetwork#OnControlProtocolChanged
 */
/**
 * This event is emitted when the property MediaProtocol changes in the remote object.
 * The property ``MediaProtocol`` is described in the AES70 standard as follows.
 * Deprecated property. Always has value NONE. Media transport is managed
 * by the <b>OcaStreamNetwork</b> class.
 *
 * @member {PropertyEvent<OcaNetworkMediaProtocol>} OcaNetwork#OnMediaProtocolChanged
 */
/**
 * This event is emitted when the property Status changes in the remote object.
 * The property ``Status`` is described in the AES70 standard as follows.
 * Operational status of the network.
 *
 * @member {PropertyEvent<OcaNetworkStatus>} OcaNetwork#OnStatusChanged
 */
/**
 * This event is emitted when the property SystemInterfaces changes in the remote object.
 * The property ``SystemInterfaces`` is described in the AES70 standard as follows.
 * Collection of identifiers of system interface(s) used by the network.
 * A "system interface" is the system service through which network
 * traffic passes into and out of the device -- e.g. a socket. The
 * identifier format is system and network dependent; for OCA purposes,
 * it is maintained as a variable-length blob which the protocol does not
 * inspect.
 *
 * @member {PropertyEvent<OcaNetworkSystemInterfaceID[]>} OcaNetwork#OnSystemInterfacesChanged
 */
/**
 * This event is emitted when the property MediaPorts changes in the remote object.
 * The property ``MediaPorts`` is described in the AES70 standard as follows.
 * Deprecated property. Always is empty. Media transport is now managed
 * by the class <b>OcaStreamNetwork.</b>
 *
 * @member {PropertyEvent<number[]>} OcaNetwork#OnMediaPortsChanged
 */
/**
 * This event is emitted when the property Statistics changes in the remote object.
 * The property ``Statistics`` is described in the AES70 standard as follows.
 * Error statistics for this network
 *
 * @member {PropertyEvent<OcaNetworkStatistics>} OcaNetwork#OnStatisticsChanged
 */
