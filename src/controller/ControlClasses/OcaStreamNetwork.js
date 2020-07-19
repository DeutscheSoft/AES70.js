import { make_control_class } from '../Base.js';
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
 * <b>DEPRECATED CLASS</b> <i>Replaced by class
 * </i><b><i>OcaMediaTransportNetwork </i></b><i>in version 3 of
 * Connection Management (CM3)</i> Abstract base class for defining
 * network classes to which this device belongs. May be a media transport
 * network, a control and monitoring network, or a network that does
 * both. There shall be one OcaStreamNetwork instance for each network to
 * which the device belongs. This class may be subclassed to support
 * networks of various types.
 * @extends RemoteControlClasses.OcaAgent
 * @class OcaStreamNetwork
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the network's link type (wired Ethernet, USB, etc.). Return
 * status indicates whether the operation was successful.
 * @method RemoteControlClasses.OcaStreamNetwork#GetLinkType
 * @returns {Promise<OcaNetworkLinkType>}
 */
/**
 * Gets the network's IDAdvertised. Return status indicates whether the
 * operation was successful.
 * @method RemoteControlClasses.OcaStreamNetwork#GetIDAdvertised
 * @returns {Promise<OcaNetworkNodeID>}
 */
/**
 * Sets the network's IDAdvertised. Return status indicates whether the
 * operation was successful.
 * @method RemoteControlClasses.OcaStreamNetwork#SetIDAdvertised
 * @param Name {OcaNetworkNodeID}
 *
 * @returns {Promise}
 */
/**
 * Gets the network's ControlProtocol property. Return status indicates
 * whether the operation was successful.
 * @method RemoteControlClasses.OcaStreamNetwork#GetControlProtocol
 * @returns {Promise<OcaNetworkControlProtocol>}
 */
/**
 * Gets the network's MediaProtocol property. Return status indicates
 * whether the operation was successful.
 * @method RemoteControlClasses.OcaStreamNetwork#GetMediaProtocol
 * @returns {Promise<OcaNetworkMediaProtocol>}
 */
/**
 * Retrieves the network's status. Return status indicates whether the
 * status was successfully retrieved.
 * @method RemoteControlClasses.OcaStreamNetwork#GetStatus
 * @returns {Promise<OcaNetworkStatus>}
 */
/**
 * Retrieves network error statistics counter values. Return status
 * indicates whether the values were successfully retrieved.
 * @method RemoteControlClasses.OcaStreamNetwork#GetStatistics
 * @returns {Promise<OcaNetworkStatistics>}
 */
/**
 * Resets network error statistics counters. Return status indicates
 * whether the counters were successfully reset.
 * @method RemoteControlClasses.OcaStreamNetwork#ResetStatistics
 * @returns {Promise}
 */
/**
 * Gets the list of system interface IDs that this network is using.
 * Return status indicates success of the operation.
 * @method RemoteControlClasses.OcaStreamNetwork#GetSystemInterfaces
 * @returns {Promise<OcaList>}
 */
/**
 * Sets the list of system interface IDs that this network will use.
 * Return status indicates success of the operation. This method is not
 * implemented by all network implementations.
 * @method RemoteControlClasses.OcaStreamNetwork#SetSystemInterfaces
 * @param Interfaces {OcaList}
 *
 * @returns {Promise}
 */
/**
 * Gets the list of object numbers of Source <b>OcaStreamConnector
 * </b>objects owned by this network. Return status indicates success of
 * the operation. If the value of the network's MediaProtocol property is
 * NONE, this method will return the status value InvalidRequest. Members
 * are added to and deleted from this list when <b>OcaStreamConnector
 * </b>objects' <b>Owner</b> properties are updated, or when
 * <b>OcaStreamConnector</b> objects are deleted. For reconfigurable
 * devices, such changes may be initiated by controllers during device
 * operation.
 * @method RemoteControlClasses.OcaStreamNetwork#GetStreamConnectorsSource
 * @returns {Promise<OcaList>}
 */
/**
 * Sets the list of object numbers of Source <b>OcaStreamConnector
 * </b>objects owned by this network. Return status indicates success of
 * the operation. If the value of the network's MediaProtocol property is
 * NONE, this method will return the status value InvalidRequest. Members
 * are added to and deleted from this list when <b>OcaStreamConnector
 * </b>objects' <b>Owner</b> properties are updated, or when
 * <b>OcaStreamConnector</b> objects are deleted. For reconfigurable
 * devices, such changes may be initiated by controllers during device
 * operation.
 * @method RemoteControlClasses.OcaStreamNetwork#SetStreamConnectorsSource
 * @param StreamConnectors {OcaList}
 *
 * @returns {Promise}
 */
/**
 * Gets the list of object numbers of Sink <b>OcaStreamConnector
 * </b>objects owned by this network. Return status indicates success of
 * the operation. If the value of the network's MediaProtocol property is
 * NONE, this method will return the status value InvalidRequest. Members
 * are added to and deleted from this list when <b>OcaStreamConnector</b>
 * objects' <b>Owner</b> properties are updated, or when
 * <b>OcaStreamConnector </b>objects are deleted. For reconfigurable
 * devices, such changes may be initiated by controllers during device
 * operation.
 * @method RemoteControlClasses.OcaStreamNetwork#GetStreamConnectorsSink
 * @returns {Promise<OcaList>}
 */
/**
 * Sets the list of object numbers of Sink <b>OcaStreamConnector
 * </b>objects owned by this network. Return status indicates success of
 * the operation. If the value of the network's MediaProtocol property is
 * NONE, this method will return the status value InvalidRequest. Members
 * are added to and deleted from this list when <b>OcaStreamConnector</b>
 * objects' <b>Owner</b> properties are updated, or when
 * <b>OcaStreamConnector</b> objects are deleted. For reconfigurable
 * devices, such changes may be initiated by controllers during device
 * operation.
 * @method RemoteControlClasses.OcaStreamNetwork#SetStreamConnectorsSink
 * @param StreamConnectors {OcaList}
 *
 * @returns {Promise}
 */
/**
 * Gets the list of object numbers of Source <b>OcaNetworkSignalChannel
 * </b>objects owned by this network. Return status indicates success of
 * the operation. If the value of the network's MediaProtocol property is
 * NONE, this method will return the status value InvalidRequest. Members
 * are added to and deleted from this list when
 * <b>OcaNetworkSignalChannel</b> objects' <b>Owner</b> properties are
 * updated, or when <b>OcaNetworkSignalChannel</b> objects are deleted.
 * For reconfigurable devices, such changes may be initiated by
 * controllers during device operation.
 * @method RemoteControlClasses.OcaStreamNetwork#GetSignalChannelsSource
 * @returns {Promise<OcaList>}
 */
/**
 * Sets the list of object numbers of Source <b>OcaNetworkSignalChannel
 * </b>objects owned by this network. Return status indicates success of
 * the operation. If the value of the network's MediaProtocol property is
 * NONE, this method will return the status value InvalidRequest. Members
 * are added to and deleted from this list when
 * <b>OcaNetworkSignalChannel</b> objects' <b>Owner</b> properties are
 * updated, or when <b>OcaNetworkSignalChannel</b> objects are deleted.
 * For reconfigurable devices, such changes may be initiated by
 * controllers during device operation.
 * @method RemoteControlClasses.OcaStreamNetwork#SetSignalChannelsSource
 * @param SignalChannels {OcaList}
 *
 * @returns {Promise}
 */
/**
 * Gets the list of object numbers of Sink <b>OcaNetworkSignalChannel
 * </b>objects owned by this network. Return status indicates success of
 * the operation. If the value of the network's MediaProtocol property is
 * NONE, this method will return the status value InvalidRequest. Members
 * are added to and deleted from this list when
 * <b>OcaNetworkSignalChannel</b> objects' <b>Owner</b> properties are
 * updated, or when <b>OcaNetworkSignalChannel</b> objects are deleted.
 * For reconfigurable devices, such changes may be initiated by
 * controllers during device operation.
 * @method RemoteControlClasses.OcaStreamNetwork#GetSignalChannelsSink
 * @returns {Promise<OcaList>}
 */
/**
 * Sets the list of object numbers of Sink <b>OcaNetworkSignalChannel
 * </b>objects owned by this network. Return status indicates success of
 * the operation. If the value of the network's MediaProtocol property is
 * NONE, this method will return the status value InvalidRequest. Members
 * are added to and deleted from this list when
 * <b>OcaNetworkSignalChannel</b> objects' <b>Owner</b> properties are
 * updated, or when <b>OcaNetworkSignalChannel</b> objects are deleted.
 * For reconfigurable devices, such changes may be initiated by
 * controllers during device operation.
 * @method RemoteControlClasses.OcaStreamNetwork#SetSignalChannelsSink
 * @param SignalChannels {OcaList}
 *
 * @returns {Promise}
 */
/**
 * Start up this network.
 * @method RemoteControlClasses.OcaStreamNetwork#Startup
 * @returns {Promise}
 */
/**
 * Shut down this network.
 * @method RemoteControlClasses.OcaStreamNetwork#Shutdown
 * @returns {Promise}
 */
/**
 * Type of control protocol used by the network (OCAnn) or NONE if this
 * network is not used for control.
 * @member RemoteControlClasses.OcaStreamNetwork#OnControlProtocolChanged {PropertyEvent<OcaNetworkControlProtocol>} - This event is emitted when ControlProtocol changes in the remote object.
 */
/**
 * ID by which this device is known on the network, i.e. the host name or
 * GUID that this device publishes in the network's directory/discovery
 * system.
 * @member RemoteControlClasses.OcaStreamNetwork#OnIDAdvertisedChanged {PropertyEvent<OcaNetworkNodeID>} - This event is emitted when IDAdvertised changes in the remote object.
 */
/**
 * Network link type - e.g. wired Ethernet, USB, ... See the
 * OcaNetworkType enum for details. This is a read-only property whose
 * value is fixed to the class that is inherited from OcaNetwork to
 * implement each specific type of network.
 */
/**
 * Type of media transport protocol used by the network, or NONE if this
 * network is not used for media transport.
 * @member RemoteControlClasses.OcaStreamNetwork#OnMediaProtocolChanged {PropertyEvent<OcaNetworkMediaProtocol>} - This event is emitted when MediaProtocol changes in the remote object.
 */
/**
 * List of object numbers of <u>sink </u><b>OcaNetworkSignalChannel
 * </b>objects collected by this network.
 * @member RemoteControlClasses.OcaStreamNetwork#OnSignalChannelsSinkChanged {PropertyEvent<OcaList>} - This event is emitted when SignalChannelsSink changes in the remote object.
 */
/**
 * List of object numbers of <u>source </u><b>OcaNetworkSignalChannel
 * </b>objects collected by this network.
 * @member RemoteControlClasses.OcaStreamNetwork#OnSignalChannelsSourceChanged {PropertyEvent<OcaList>} - This event is emitted when SignalChannelsSource changes in the remote object.
 */
/**
 * Error statistics for this network
 * @member RemoteControlClasses.OcaStreamNetwork#OnStatisticsChanged {PropertyEvent<OcaNetworkStatistics>} - This event is emitted when Statistics changes in the remote object.
 */
/**
 * Operational status of the network.
 * @member RemoteControlClasses.OcaStreamNetwork#OnStatusChanged {PropertyEvent<OcaNetworkStatus>} - This event is emitted when Status changes in the remote object.
 */
/**
 * List of object numbers of <u>sink </u><b>OcaStreamConnector
 * </b>objects collected by this network.
 * @member RemoteControlClasses.OcaStreamNetwork#OnStreamConnectorsSinkChanged {PropertyEvent<OcaList>} - This event is emitted when StreamConnectorsSink changes in the remote object.
 */
/**
 * List of object numbers of <u>source </u><b>OcaStreamConnector
 * </b>objects collected by this network.
 * @member RemoteControlClasses.OcaStreamNetwork#OnStreamConnectorsSourceChanged {PropertyEvent<OcaList>} - This event is emitted when StreamConnectorsSource changes in the remote object.
 */
/**
 * Collection of identifiers of system interface(s) used by the network.
 * A "system interface" is the system service through which network
 * traffic passes into and out of the device -- e.g. a socket. The
 * identifier format is system and network dependent; for OCA purposes,
 * it is maintained as a variable-length blob which the protocol does not
 * inspect.
 * @member RemoteControlClasses.OcaStreamNetwork#OnSystemInterfacesChanged {PropertyEvent<OcaList>} - This event is emitted when SystemInterfaces changes in the remote object.
 */
