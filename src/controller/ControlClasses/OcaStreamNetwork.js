import { OcaBlob } from '../../OCP1/OcaBlob.js';
import { OcaList } from '../../OCP1/OcaList.js';
import { OcaNetworkControlProtocol } from '../../OCP1/OcaNetworkControlProtocol.js';
import { OcaNetworkLinkType } from '../../OCP1/OcaNetworkLinkType.js';
import { OcaNetworkMediaProtocol } from '../../OCP1/OcaNetworkMediaProtocol.js';
import { OcaNetworkStatistics } from '../../OCP1/OcaNetworkStatistics.js';
import { OcaNetworkStatus } from '../../OCP1/OcaNetworkStatus.js';
import { OcaNetworkSystemInterfaceID } from '../../OCP1/OcaNetworkSystemInterfaceID.js';
import { OcaUint32 } from '../../OCP1/OcaUint32.js';
import { make_control_class } from '../make_control_class.js';
import { OcaAgent } from './OcaAgent.js';

/**
 *  **DEPRECATED CLASS**   *Replaced by class*  **OcaMediaTransportNetwork **  *in version 3 of Connection Management (CM3)*  Abstract base class for defining network classes to which this device belongs. May be a media transport network, a control and monitoring network, or a network that does both. There shall be one OcaStreamNetwork instance for each network to which the device belongs. This class may be subclassed to support networks of various types.
 * @extends OcaAgent
 * @class OcaStreamNetwork
 */
export const OcaStreamNetwork = make_control_class(
  'OcaStreamNetwork',
  3,
  '\u0001\u0002\n',
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
    ['GetStreamConnectorsSource', 3, 11, [], [OcaList(OcaUint32)]],
    ['SetStreamConnectorsSource', 3, 12, [OcaList(OcaUint32)], []],
    ['GetStreamConnectorsSink', 3, 13, [], [OcaList(OcaUint32)]],
    ['SetStreamConnectorsSink', 3, 14, [OcaList(OcaUint32)], []],
    ['GetSignalChannelsSource', 3, 15, [], [OcaList(OcaUint32)]],
    ['SetSignalChannelsSource', 3, 16, [OcaList(OcaUint32)], []],
    ['GetSignalChannelsSink', 3, 17, [], [OcaList(OcaUint32)]],
    ['SetSignalChannelsSink', 3, 18, [OcaList(OcaUint32)], []],
    ['Startup', 3, 19, [], []],
    ['Shutdown', 3, 20, [], []],
  ],
  [
    ['ControlProtocol', [OcaNetworkControlProtocol], 3, 3, false, false, null],
    ['IDAdvertised', [OcaBlob], 3, 2, false, false, null],
    ['LinkType', [OcaNetworkLinkType], 3, 1, true, false, null],
    ['MediaProtocol', [OcaNetworkMediaProtocol], 3, 4, false, false, null],
    ['SignalChannelsSink', [OcaList(OcaUint32)], 3, 10, false, false, null],
    ['SignalChannelsSource', [OcaList(OcaUint32)], 3, 9, false, false, null],
    ['Statistics', [OcaNetworkStatistics], 3, 11, false, false, null],
    ['Status', [OcaNetworkStatus], 3, 5, false, false, null],
    ['StreamConnectorsSink', [OcaList(OcaUint32)], 3, 8, false, false, null],
    ['StreamConnectorsSource', [OcaList(OcaUint32)], 3, 7, false, false, null],
    [
      'SystemInterfaces',
      [OcaList(OcaNetworkSystemInterfaceID)],
      3,
      6,
      false,
      false,
      null,
    ],
  ],
  []
);

/**
 * Gets the network's link type (wired Ethernet, USB, etc.). Return status indicates whether the operation was successful.
 *
 * @method OcaStreamNetwork#GetLinkType
 * @returns {Promise<OcaNetworkLinkType>}
 *   A promise which resolves to a single value of type :class:`OcaNetworkLinkType`.
 */
/**
 * Gets the network's IDAdvertised. Return status indicates whether the operation was successful.
 *
 * @method OcaStreamNetwork#GetIDAdvertised
 * @returns {Promise<Uint8Array>}
 *   A promise which resolves to a single value of type ``Uint8Array``.
 */
/**
 * Sets the network's IDAdvertised. Return status indicates whether the operation was successful.
 *
 * @method OcaStreamNetwork#SetIDAdvertised
 * @param {Uint8Array} Name
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the network's ControlProtocol property. Return status indicates whether the operation was successful.
 *
 * @method OcaStreamNetwork#GetControlProtocol
 * @returns {Promise<OcaNetworkControlProtocol>}
 *   A promise which resolves to a single value of type :class:`OcaNetworkControlProtocol`.
 */
/**
 * Gets the network's MediaProtocol property. Return status indicates whether the operation was successful.
 *
 * @method OcaStreamNetwork#GetMediaProtocol
 * @returns {Promise<OcaNetworkMediaProtocol>}
 *   A promise which resolves to a single value of type :class:`OcaNetworkMediaProtocol`.
 */
/**
 * Retrieves the network's status. Return status indicates whether the status was successfully retrieved.
 *
 * @method OcaStreamNetwork#GetStatus
 * @returns {Promise<OcaNetworkStatus>}
 *   A promise which resolves to a single value of type :class:`OcaNetworkStatus`.
 */
/**
 * Retrieves network error statistics counter values. Return status indicates whether the values were successfully retrieved.
 *
 * @method OcaStreamNetwork#GetStatistics
 * @returns {Promise<OcaNetworkStatistics>}
 *   A promise which resolves to a single value of type :class:`OcaNetworkStatistics`.
 */
/**
 * Resets network error statistics counters. Return status indicates whether the counters were successfully reset.
 *
 * @method OcaStreamNetwork#ResetStatistics
 * @returns {Promise<void>}
 */
/**
 * Gets the list of system interface IDs that this network is using. Return status indicates success of the operation.
 *
 * @method OcaStreamNetwork#GetSystemInterfaces
 * @returns {Promise<OcaNetworkSystemInterfaceID[]>}
 *   A promise which resolves to a single value of type ``OcaNetworkSystemInterfaceID[]``.
 */
/**
 * Sets the list of system interface IDs that this network will use. Return status indicates success of the operation. This method is not implemented by all network implementations.
 *
 * @method OcaStreamNetwork#SetSystemInterfaces
 * @param {IOcaNetworkSystemInterfaceID[]} Interfaces
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the list of object numbers of Source  **OcaStreamConnector** objects owned by this network. Return status indicates success of the operation. If the value of the network's MediaProtocol property is NONE, this method will return the status value InvalidRequest. Members are added to and deleted from this list when  **OcaStreamConnector** objects'  **Owner**  properties are updated, or when  **OcaStreamConnector**  objects are deleted. For reconfigurable devices, such changes may be initiated by controllers during device operation.
 *
 * @method OcaStreamNetwork#GetStreamConnectorsSource
 * @returns {Promise<number[]>}
 *   A promise which resolves to a single value of type ``number[]``.
 */
/**
 * Sets the list of object numbers of Source  **OcaStreamConnector** objects owned by this network. Return status indicates success of the operation. If the value of the network's MediaProtocol property is NONE, this method will return the status value InvalidRequest. Members are added to and deleted from this list when  **OcaStreamConnector** objects'  **Owner**  properties are updated, or when  **OcaStreamConnector**  objects are deleted. For reconfigurable devices, such changes may be initiated by controllers during device operation.
 *
 * @method OcaStreamNetwork#SetStreamConnectorsSource
 * @param {number[]} StreamConnectors
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the list of object numbers of Sink  **OcaStreamConnector** objects owned by this network. Return status indicates success of the operation. If the value of the network's MediaProtocol property is NONE, this method will return the status value InvalidRequest. Members are added to and deleted from this list when  **OcaStreamConnector**  objects'  **Owner**  properties are updated, or when  **OcaStreamConnector** objects are deleted. For reconfigurable devices, such changes may be initiated by controllers during device operation.
 *
 * @method OcaStreamNetwork#GetStreamConnectorsSink
 * @returns {Promise<number[]>}
 *   A promise which resolves to a single value of type ``number[]``.
 */
/**
 * Sets the list of object numbers of Sink  **OcaStreamConnector** objects owned by this network. Return status indicates success of the operation. If the value of the network's MediaProtocol property is NONE, this method will return the status value InvalidRequest. Members are added to and deleted from this list when  **OcaStreamConnector**  objects'  **Owner**  properties are updated, or when  **OcaStreamConnector**  objects are deleted. For reconfigurable devices, such changes may be initiated by controllers during device operation.
 *
 * @method OcaStreamNetwork#SetStreamConnectorsSink
 * @param {number[]} StreamConnectors
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the list of object numbers of Source  **OcaNetworkSignalChannel** objects owned by this network. Return status indicates success of the operation. If the value of the network's MediaProtocol property is NONE, this method will return the status value InvalidRequest. Members are added to and deleted from this list when  **OcaNetworkSignalChannel**  objects'  **Owner**  properties are updated, or when  **OcaNetworkSignalChannel**  objects are deleted. For reconfigurable devices, such changes may be initiated by controllers during device operation.
 *
 * @method OcaStreamNetwork#GetSignalChannelsSource
 * @returns {Promise<number[]>}
 *   A promise which resolves to a single value of type ``number[]``.
 */
/**
 * Sets the list of object numbers of Source  **OcaNetworkSignalChannel** objects owned by this network. Return status indicates success of the operation. If the value of the network's MediaProtocol property is NONE, this method will return the status value InvalidRequest. Members are added to and deleted from this list when  **OcaNetworkSignalChannel**  objects'  **Owner**  properties are updated, or when  **OcaNetworkSignalChannel**  objects are deleted. For reconfigurable devices, such changes may be initiated by controllers during device operation.
 *
 * @method OcaStreamNetwork#SetSignalChannelsSource
 * @param {number[]} SignalChannels
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the list of object numbers of Sink  **OcaNetworkSignalChannel** objects owned by this network. Return status indicates success of the operation. If the value of the network's MediaProtocol property is NONE, this method will return the status value InvalidRequest. Members are added to and deleted from this list when  **OcaNetworkSignalChannel**  objects'  **Owner**  properties are updated, or when  **OcaNetworkSignalChannel**  objects are deleted. For reconfigurable devices, such changes may be initiated by controllers during device operation.
 *
 * @method OcaStreamNetwork#GetSignalChannelsSink
 * @returns {Promise<number[]>}
 *   A promise which resolves to a single value of type ``number[]``.
 */
/**
 * Sets the list of object numbers of Sink  **OcaNetworkSignalChannel** objects owned by this network. Return status indicates success of the operation. If the value of the network's MediaProtocol property is NONE, this method will return the status value InvalidRequest. Members are added to and deleted from this list when  **OcaNetworkSignalChannel**  objects'  **Owner**  properties are updated, or when  **OcaNetworkSignalChannel**  objects are deleted. For reconfigurable devices, such changes may be initiated by controllers during device operation.
 *
 * @method OcaStreamNetwork#SetSignalChannelsSink
 * @param {number[]} SignalChannels
 *
 * @returns {Promise<void>}
 */
/**
 * Start up this network.
 *
 * @method OcaStreamNetwork#Startup
 * @returns {Promise<void>}
 */
/**
 * Shut down this network.
 *
 * @method OcaStreamNetwork#Shutdown
 * @returns {Promise<void>}
 */
/**
 * This event is emitted when the property ControlProtocol changes in the remote object.
 * The property ``ControlProtocol`` is described in the AES70 standard as follows.
 * Type of control protocol used by the network (OCAnn) or NONE if this
 * network is not used for control.
 *
 * @member {PropertyEvent<OcaNetworkControlProtocol>} OcaStreamNetwork#OnControlProtocolChanged
 */
/**
 * This event is emitted when the property IDAdvertised changes in the remote object.
 * The property ``IDAdvertised`` is described in the AES70 standard as follows.
 * ID by which this device is known on the network, i.e. the host name or
 * GUID that this device publishes in the network's directory/discovery
 * system.
 *
 * @member {PropertyEvent<Uint8Array>} OcaStreamNetwork#OnIDAdvertisedChanged
 */
/**
 * This event is emitted when the property MediaProtocol changes in the remote object.
 * The property ``MediaProtocol`` is described in the AES70 standard as follows.
 * Type of media transport protocol used by the network, or NONE if this
 * network is not used for media transport.
 *
 * @member {PropertyEvent<OcaNetworkMediaProtocol>} OcaStreamNetwork#OnMediaProtocolChanged
 */
/**
 * This event is emitted when the property SignalChannelsSink changes in the remote object.
 * The property ``SignalChannelsSink`` is described in the AES70 standard as follows.
 * List of object numbers of <u>sink </u><b>OcaNetworkSignalChannel
 * </b>objects collected by this network.
 *
 * @member {PropertyEvent<number[]>} OcaStreamNetwork#OnSignalChannelsSinkChanged
 */
/**
 * This event is emitted when the property SignalChannelsSource changes in the remote object.
 * The property ``SignalChannelsSource`` is described in the AES70 standard as follows.
 * List of object numbers of <u>source </u><b>OcaNetworkSignalChannel
 * </b>objects collected by this network.
 *
 * @member {PropertyEvent<number[]>} OcaStreamNetwork#OnSignalChannelsSourceChanged
 */
/**
 * This event is emitted when the property Statistics changes in the remote object.
 * The property ``Statistics`` is described in the AES70 standard as follows.
 * Error statistics for this network
 *
 * @member {PropertyEvent<OcaNetworkStatistics>} OcaStreamNetwork#OnStatisticsChanged
 */
/**
 * This event is emitted when the property Status changes in the remote object.
 * The property ``Status`` is described in the AES70 standard as follows.
 * Operational status of the network.
 *
 * @member {PropertyEvent<OcaNetworkStatus>} OcaStreamNetwork#OnStatusChanged
 */
/**
 * This event is emitted when the property StreamConnectorsSink changes in the remote object.
 * The property ``StreamConnectorsSink`` is described in the AES70 standard as follows.
 * List of object numbers of <u>sink </u><b>OcaStreamConnector
 * </b>objects collected by this network.
 *
 * @member {PropertyEvent<number[]>} OcaStreamNetwork#OnStreamConnectorsSinkChanged
 */
/**
 * This event is emitted when the property StreamConnectorsSource changes in the remote object.
 * The property ``StreamConnectorsSource`` is described in the AES70 standard as follows.
 * List of object numbers of <u>source </u><b>OcaStreamConnector
 * </b>objects collected by this network.
 *
 * @member {PropertyEvent<number[]>} OcaStreamNetwork#OnStreamConnectorsSourceChanged
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
 * @member {PropertyEvent<OcaNetworkSystemInterfaceID[]>} OcaStreamNetwork#OnSystemInterfacesChanged
 */
