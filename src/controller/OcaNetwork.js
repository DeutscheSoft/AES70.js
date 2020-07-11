import { make_control_class } from './Base.js';
import { OcaAgent } from './OcaAgent.js';
import { OcaBlob } from '../OCP1/OcaBlob.js';
import { OcaList } from '../OCP1/OcaList.js';
import { OcaNetworkControlProtocol } from '../OCP1/OcaNetworkControlProtocol.js';
import { OcaNetworkLinkType } from '../OCP1/OcaNetworkLinkType.js';
import { OcaNetworkMediaProtocol } from '../OCP1/OcaNetworkMediaProtocol.js';
import { OcaNetworkStatistics } from '../OCP1/OcaNetworkStatistics.js';
import { OcaNetworkStatus } from '../OCP1/OcaNetworkStatus.js';
import { OcaNetworkSystemInterfaceID } from '../OCP1/OcaNetworkSystemInterfaceID.js';
import { OcaUint16 } from '../OCP1/OcaUint16.js';
import { OcaUint32 } from '../OCP1/OcaUint32.js';
import { String16 } from '../OCP1/String16.js';

/**
 * <b>DEPRECATED CLASS</b> <i>Replaced by class
 * </i><b><i>OcaControlNetwork </i></b><i>in version 3 of Connection
 * Management (CM3)</i> Abstract base class for defining network classes
 * to which this device belongs. This class is to be used for control and
 * monitoring networks only. For media transport networks, and for
 * networks that combine media transport and control, the
 * <b>OcaStreamNetwork</b> class should be used instead.
 * @extends RemoteControlClasses.OcaAgent
 * @class OcaNetwork
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the network's link type (wired Ethernet, USB, etc.). Return
 * status indicates whether the operation was successful.
 * @method RemoteControlClasses.OcaNetwork#GetLinkType
 * @returns {Promise<OcaNetworkLinkType>}
 */
/**
 * Gets the network's IDAdvertised. Return status indicates whether the
 * operation was successful.
 * @method RemoteControlClasses.OcaNetwork#GetIDAdvertised
 * @returns {Promise<OcaApplicationNetworkServiceID>}
 */
/**
 * Sets the network's IDAdvertised. Return status indicates whether the
 * operation was successful.
 * @method RemoteControlClasses.OcaNetwork#SetIDAdvertised
 * @param Name {OcaApplicationNetworkServiceID}
 *
 * @returns {Promise}
 */
/**
 * Gets the network's ControlProtocol property. Return status indicates
 * whether the operation was successful.
 * @method RemoteControlClasses.OcaNetwork#GetControlProtocol
 * @returns {Promise<OcaNetworkControlProtocol>}
 */
/**
 * Gets the network's MediaProtocol property. This is a deprecated method
 * that always returns the value NONE.
 * @method RemoteControlClasses.OcaNetwork#GetMediaProtocol
 * @returns {Promise<OcaNetworkMediaProtocol>}
 */
/**
 * Retrieves the network's status. Return status indicates whether the
 * status was successfully retrieved.
 * @method RemoteControlClasses.OcaNetwork#GetStatus
 * @returns {Promise<OcaNetworkStatus>}
 */
/**
 * Retrieves network error statistics counter values. Return status
 * indicates whether the values were successfully retrieved.
 * @method RemoteControlClasses.OcaNetwork#GetStatistics
 * @returns {Promise<OcaNetworkStatistics>}
 */
/**
 * Resets network error statistics counters. Return status indicates
 * whether the counters were successfully reset.
 * @method RemoteControlClasses.OcaNetwork#ResetStatistics
 * @returns {Promise}
 */
/**
 * Gets the list of system interface IDs that this network is using.
 * Return status indicates success of the operation.
 * @method RemoteControlClasses.OcaNetwork#GetSystemInterfaces
 * @returns {Promise<OcaList>}
 */
/**
 * Sets the list of system interface IDs that this network will use.
 * Return status indicates success of the operation. This method is not
 * implemented by all network implementations.
 * @method RemoteControlClasses.OcaNetwork#SetSystemInterfaces
 * @param Interfaces {OcaList}
 *
 * @returns {Promise}
 */
/**
 * Deprecated method. Always returns status INVALID_REQUEST. Media
 * transport is now managed by the class <b>OcaStreamNetwork.</b>
 * @method RemoteControlClasses.OcaNetwork#GetMediaPorts
 * @returns {Promise<OcaList>}
 */
/**
 * Start up this network.
 * @method RemoteControlClasses.OcaNetwork#Startup
 * @returns {Promise}
 */
/**
 * Shut down this network.
 * @method RemoteControlClasses.OcaNetwork#Shutdown
 * @returns {Promise}
 */
/**
 * Network link type - e.g. wired Ethernet, USB, ... See the
 * OcaNetworkType enum for details. This is a read-only property whose
 * value is fixed to the class that is inherited from OcaNetwork to
 * implement each specific type of network.
 */
/**
 * ID by which this network object is known on the network, i.e. the name
 * or GUID that this network object publishes in the network's
 * directory/discovery system. As of OCA 1.4, this description has been
 * clarified to indicate this property is the registered service name,
 * which may or may not be the same as the device's host name, if any.
 * For data network types that have host names (e.g. IP networks), the
 * authoritative copy of the host name is in the system interface ID.
 * @member RemoteControlClasses.OcaNetwork#OnIDAdvertisedChanged {PropertyEvent<OcaApplicationNetworkServiceID>} - This event is emitted when IDAdvertised changes in the remote object.
 */
/**
 * Type of control protocol used by the network (OCAnn) or NONE if this
 * network is not used for control.
 * @member RemoteControlClasses.OcaNetwork#OnControlProtocolChanged {PropertyEvent<OcaNetworkControlProtocol>} - This event is emitted when ControlProtocol changes in the remote object.
 */
/**
 * Deprecated property. Always has value NONE. Media transport is managed
 * by the <b>OcaStreamNetwork</b> class.
 * @member RemoteControlClasses.OcaNetwork#OnMediaProtocolChanged {PropertyEvent<OcaNetworkMediaProtocol>} - This event is emitted when MediaProtocol changes in the remote object.
 */
/**
 * Operational status of the network.
 * @member RemoteControlClasses.OcaNetwork#OnStatusChanged {PropertyEvent<OcaNetworkStatus>} - This event is emitted when Status changes in the remote object.
 */
/**
 * Collection of identifiers of system interface(s) used by the network.
 * A "system interface" is the system service through which network
 * traffic passes into and out of the device -- e.g. a socket. The
 * identifier format is system and network dependent; for OCA purposes,
 * it is maintained as a variable-length blob which the protocol does not
 * inspect.
 * @member RemoteControlClasses.OcaNetwork#OnSystemInterfacesChanged {PropertyEvent<OcaList>} - This event is emitted when SystemInterfaces changes in the remote object.
 */
/**
 * Deprecated property. Always is empty. Media transport is now managed
 * by the class <b>OcaStreamNetwork.</b>
 * @member RemoteControlClasses.OcaNetwork#OnMediaPortsChanged {PropertyEvent<OcaList>} - This event is emitted when MediaPorts changes in the remote object.
 */
/**
 * Error statistics for this network
 * @member RemoteControlClasses.OcaNetwork#OnStatisticsChanged {PropertyEvent<OcaNetworkStatistics>} - This event is emitted when Statistics changes in the remote object.
 */
