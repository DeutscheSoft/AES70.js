import { OcaBlob } from '../../OCP1/OcaBlob.js';
import { OcaCounter } from '../../OCP1/OcaCounter.js';
import { OcaCounterSet } from '../../OCP1/OcaCounterSet.js';
import { OcaFloat32 } from '../../OCP1/OcaFloat32.js';
import { OcaIODirection } from '../../OCP1/OcaIODirection.js';
import { OcaInterval } from '../../OCP1/OcaInterval.js';
import { OcaList } from '../../OCP1/OcaList.js';
import { OcaMap } from '../../OCP1/OcaMap.js';
import { OcaMediaStreamEndpoint } from '../../OCP1/OcaMediaStreamEndpoint.js';
import { OcaMediaStreamEndpointCommand } from '../../OCP1/OcaMediaStreamEndpointCommand.js';
import { OcaMediaStreamEndpointState } from '../../OCP1/OcaMediaStreamEndpointState.js';
import { OcaMediaStreamEndpointStatus } from '../../OCP1/OcaMediaStreamEndpointStatus.js';
import { OcaMediaStreamMode } from '../../OCP1/OcaMediaStreamMode.js';
import { OcaMediaStreamModeCapability } from '../../OCP1/OcaMediaStreamModeCapability.js';
import { OcaMediaTransportTimingParameters } from '../../OCP1/OcaMediaTransportTimingParameters.js';
import { OcaMultiMap } from '../../OCP1/OcaMultiMap.js';
import { OcaPort } from '../../OCP1/OcaPort.js';
import { OcaPortClockMapEntry } from '../../OCP1/OcaPortClockMapEntry.js';
import { OcaPortID } from '../../OCP1/OcaPortID.js';
import { OcaString } from '../../OCP1/OcaString.js';
import { OcaTimeReferenceType } from '../../OCP1/OcaTimeReferenceType.js';
import { OcaUint16 } from '../../OCP1/OcaUint16.js';
import { OcaUint32 } from '../../OCP1/OcaUint32.js';
import { make_control_class } from '../make_control_class.js';
import { OcaNetworkApplication } from './OcaNetworkApplication.js';

/**
 * Connection Management 4 (CM4) class. Specifies the device's control interface
 * to media transport functions. This is the anchoring class for CM4 data
 * structures. Abstract class that shall be subclassed for each media transport
 * Adaptation.
 * @extends OcaNetworkApplication
 * @class OcaMediaTransportApplication
 */
export const OcaMediaTransportApplication = make_control_class(
  'OcaMediaTransportApplication',
  3,
  '\u0001\u0007\u0001',
  1,
  OcaNetworkApplication,
  [
    ['AddPort', 3, 1, [OcaString, OcaIODirection], [OcaPortID]],
    ['DeletePort', 3, 2, [OcaPortID], []],
    ['GetPorts', 3, 3, [], [OcaList(OcaPort)]],
    ['GetPortName', 3, 4, [OcaPortID], [OcaString]],
    ['SetPortName', 3, 5, [OcaPortID, OcaString], []],
    ['GetPortClockMap', 3, 6, [], [OcaMap(OcaPortID, OcaPortClockMapEntry)]],
    ['SetPortClockMap', 3, 7, [OcaMap(OcaPortID, OcaPortClockMapEntry)], []],
    ['SetPortClockMapEntry', 3, 8, [OcaPortID, OcaPortClockMapEntry], []],
    ['DeletePortClockMapEntry', 3, 9, [OcaPortID], []],
    ['GetPortClockMapEntry', 3, 10, [OcaPortID], [OcaPortClockMapEntry]],
    ['GetMaxEndpointCounts', 3, 11, [], [OcaUint16, OcaUint16]],
    ['GetMaxPortsPerChannel', 3, 12, [], [OcaUint16]],
    ['GetMaxChannelsPerEndpoint', 3, 13, [], [OcaUint16]],
    ['SetAlignmentLevelLimits', 3, 14, [OcaInterval(OcaFloat32)], []],
    [
      'GetMediaStreamModeCapabilities',
      3,
      15,
      [],
      [OcaList(OcaMediaStreamModeCapability)],
    ],
    [
      'SetMediaStreamModeCapabilities',
      3,
      16,
      [OcaList(OcaMediaStreamModeCapability)],
      [],
    ],
    [
      'GetMediaStreamModeCapability',
      3,
      17,
      [OcaUint16],
      [OcaMediaStreamModeCapability],
    ],
    [
      'GetTransportTimingParameters',
      3,
      18,
      [],
      [OcaMediaTransportTimingParameters],
    ],
    [
      'SetTransportTimingParameters',
      3,
      19,
      [OcaMediaTransportTimingParameters],
      [],
    ],
    ['GetAlignmentLevelLimits', 3, 20, [], [OcaInterval(OcaFloat32)]],
    ['GetEndpoints', 3, 21, [], [OcaList(OcaMediaStreamEndpoint)]],
    ['GetEndpoint', 3, 22, [OcaUint32], [OcaMediaStreamEndpoint]],
    [
      'GetEndpointStatuses',
      3,
      23,
      [],
      [OcaMap(OcaUint32, OcaMediaStreamEndpointStatus)],
    ],
    ['GetEndpointStatus', 3, 24, [OcaUint32], [OcaMediaStreamEndpointStatus]],
    [
      'AddEndpoint',
      3,
      25,
      [OcaMediaStreamEndpoint, OcaMediaStreamEndpointState],
      [OcaMediaStreamEndpoint],
    ],
    ['DeleteEndpoint', 3, 26, [OcaUint32], []],
    [
      'ApplyEndpointCommand',
      3,
      27,
      [OcaUint32, OcaMediaStreamEndpointCommand],
      [],
    ],
    ['SetEndpointUserLabel', 3, 28, [OcaUint32, OcaString], []],
    ['SetEndpointMediaStreamMode', 3, 29, [OcaUint32, OcaMediaStreamMode], []],
    [
      'SetEndpointChannelMap',
      3,
      30,
      [OcaUint32, OcaMultiMap(OcaUint16, OcaPortID)],
      [],
    ],
    ['SetEndpointAlignmentLevel', 3, 31, [OcaUint32, OcaFloat32], []],
    [
      'GetEndpointTimeSource',
      3,
      32,
      [OcaUint32],
      [OcaTimeReferenceType, OcaString],
    ],
    ['SetEndpointAdaptationData', 3, 33, [OcaUint32, OcaBlob], []],
    ['GetEndpointCounterSets', 3, 34, [], [OcaMap(OcaUint32, OcaCounterSet)]],
    ['GetEndpointCounterSet', 3, 35, [OcaUint32], [OcaCounterSet]],
    ['GetEndpointCounter', 3, 36, [OcaUint32, OcaUint16], [OcaCounter]],
    [
      'AttachEndpointCounterNotifier',
      3,
      37,
      [OcaUint32, OcaUint16, OcaUint32],
      [],
    ],
    [
      'DetachEndpointCounterNotifier',
      3,
      38,
      [OcaUint32, OcaUint16, OcaUint32],
      [],
    ],
    ['ResetEndpointCounterSet', 3, 39, [OcaUint32, OcaUint16], []],
    ['GetTransportSessionControlAgentONos', 3, 40, [], [OcaList(OcaUint32)]],
    ['SetTransportSessionControlAgentONos', 3, 41, [OcaList(OcaUint32)], []],
  ],
  [
    ['Ports', [OcaList(OcaPort)], 3, 1, false, false, null],
    [
      'PortClockMap',
      [OcaMap(OcaPortID, OcaPortClockMapEntry)],
      3,
      2,
      false,
      false,
      null,
    ],
    ['MaxInputEndpoints', [OcaUint16], 3, 3, false, false, null],
    ['MaxOutputEndpoints', [OcaUint16], 3, 4, false, false, null],
    ['MaxPortsPerChannel', [OcaUint16], 3, 5, false, false, null],
    ['MaxChannelsPerEndpoint', [OcaUint16], 3, 6, false, false, null],
    [
      'MediaStreamModeCapabilities',
      [OcaList(OcaMediaStreamModeCapability)],
      3,
      7,
      false,
      false,
      null,
    ],
    [
      'TransportTimingParameters',
      [OcaMediaTransportTimingParameters],
      3,
      8,
      false,
      false,
      null,
    ],
    [
      'AlignmentLevelLimits',
      [OcaInterval(OcaFloat32)],
      3,
      9,
      false,
      false,
      null,
    ],
    ['Endpoints', [OcaList(OcaMediaStreamEndpoint)], 3, 10, false, false, null],
    [
      'EndpointStatuses',
      [OcaMap(OcaUint32, OcaMediaStreamEndpointStatus)],
      3,
      11,
      false,
      false,
      null,
    ],
    [
      'TransportSessionControlAgentONos',
      [OcaList(OcaUint32)],
      3,
      13,
      false,
      false,
      null,
    ],
  ],
  []
);

/**
 * Adds an input or output port..
 *
 * @method OcaMediaTransportApplication#AddPort
 * @param {string} Name
 * @param {IOcaIODirection} Mode
 *
 * @returns {Promise<OcaPortID>}
 *   A promise which resolves to a single value of type :class:`OcaPortID`.
 */
/**
 * Deletes an input or output port..
 *
 * @method OcaMediaTransportApplication#DeletePort
 * @param {IOcaPortID} ID
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the list of ports owned by this object.
 *
 * @method OcaMediaTransportApplication#GetPorts
 * @returns {Promise<OcaPort[]>}
 *   A promise which resolves to a single value of type :class:`OcaPort[]`.
 */
/**
 * Gets the name of the designated port.
 *
 * @method OcaMediaTransportApplication#GetPortName
 * @param {IOcaPortID} PortID
 *
 * @returns {Promise<string>}
 *   A promise which resolves to a single value of type ``string``.
 */
/**
 * Sets the name of the designated port.
 *
 * @method OcaMediaTransportApplication#SetPortName
 * @param {IOcaPortID} PortID
 * @param {string} Name
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value of the **PortClockMap** property.
 *
 * @method OcaMediaTransportApplication#GetPortClockMap
 * @returns {Promise<Map<OcaPortID, OcaPortClockMapEntry>>}
 *   A promise which resolves to a single value of type ``Map<OcaPortID, OcaPortClockMapEntry>``.
 */
/**
 * Sets the value of the **PortClockMap** property.
 *
 * @method OcaMediaTransportApplication#SetPortClockMap
 * @param {Map<IOcaPortID, IOcaPortClockMapEntry>} Map
 *
 * @returns {Promise<void>}
 */
/**
 * Adds or replaces an entry in the **PortClockMap** property.
 *
 * @method OcaMediaTransportApplication#SetPortClockMapEntry
 * @param {IOcaPortID} ID
 * @param {IOcaPortClockMapEntry} Entry
 *
 * @returns {Promise<void>}
 */
/**
 * Deletes the **PortClockMap** entry identified by the given ID.
 *
 * @method OcaMediaTransportApplication#DeletePortClockMapEntry
 * @param {IOcaPortID} ID
 *
 * @returns {Promise<void>}
 */
/**
 * Retrieves the value of the **PortClockMap** entry identified by the given
 * port ID.
 *
 * @method OcaMediaTransportApplication#GetPortClockMapEntry
 * @param {IOcaPortID} ID
 *
 * @returns {Promise<OcaPortClockMapEntry>}
 *   A promise which resolves to a single value of type :class:`OcaPortClockMapEntry`.
 */
/**
 * Gets the maximum number of input and output stream endpoints this media
 * transport application supports.
 * The return values of this method are
 *
 * - MaxOutputCount of type ``number``
 * - MaxInputCount of type ``number``
 *
 * @method OcaMediaTransportApplication#GetMaxEndpointCounts
 * @returns {Promise<Arguments<number,number>>}
 */
/**
 * Gets the maximum number of ports per stream endpoint channel this media
 * transport application supports.
 *
 * @method OcaMediaTransportApplication#GetMaxPortsPerChannel
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Gets the maximum number of channels per stream endpoint this media transport
 * application supports.
 *
 * @method OcaMediaTransportApplication#GetMaxChannelsPerEndpoint
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Sets the alignment level limits for stream endpoints attached to this media
 * transport application.
 *
 * @method OcaMediaTransportApplication#SetAlignmentLevelLimits
 * @param {IOcaInterval<number>} Limits
 *
 * @returns {Promise<void>}
 */
/**
 * Gets this media transport application's media stream mode capability
 * descriptors.
 *
 * @method OcaMediaTransportApplication#GetMediaStreamModeCapabilities
 * @returns {Promise<OcaMediaStreamModeCapability[]>}
 *   A promise which resolves to a single value of type :class:`OcaMediaStreamModeCapability[]`.
 */
/**
 * Sets this media transport application's media stream mode capability
 * descriptors. May only be called when there are no media stream endpoints
 * defined. If this condition is not met, the call will return status value
 * **InvalidRequest.**
 *
 * @method OcaMediaTransportApplication#SetMediaStreamModeCapabilities
 * @param {IOcaMediaStreamModeCapability[]} Capabilities
 *
 * @returns {Promise<void>}
 */
/**
 * Gets a specific media stream mode capability descriptor.
 *
 * @method OcaMediaTransportApplication#GetMediaStreamModeCapability
 * @param {number} CapabilityID
 *
 * @returns {Promise<OcaMediaStreamModeCapability>}
 *   A promise which resolves to a single value of type :class:`OcaMediaStreamModeCapability`.
 */
/**
 * Gets this media transport application's media transport timing parameters.
 *
 * @method OcaMediaTransportApplication#GetTransportTimingParameters
 * @returns {Promise<OcaMediaTransportTimingParameters>}
 *   A promise which resolves to a single value of type :class:`OcaMediaTransportTimingParameters`.
 */
/**
 * Sets this media transport application's media transport timing parameters.
 * Optional method.
 *
 * @method OcaMediaTransportApplication#SetTransportTimingParameters
 * @param {IOcaMediaTransportTimingParameters} Parameters
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the min and max alignment levels for stream endpoints attached to this
 * media transport application.
 *
 * @method OcaMediaTransportApplication#GetAlignmentLevelLimits
 * @returns {Promise<OcaInterval<number>>}
 *   A promise which resolves to a single value of type :class:`OcaInterval<number>`.
 */
/**
 * Gets the descriptors of all the stream endpoints owned by this media
 * transport application object.
 *
 * @method OcaMediaTransportApplication#GetEndpoints
 * @returns {Promise<OcaMediaStreamEndpoint[]>}
 *   A promise which resolves to a single value of type :class:`OcaMediaStreamEndpoint[]`.
 */
/**
 * Retrieves the descriptor of a given stream endpoint.
 *
 * @method OcaMediaTransportApplication#GetEndpoint
 * @param {number} ID
 *
 * @returns {Promise<OcaMediaStreamEndpoint>}
 *   A promise which resolves to a single value of type :class:`OcaMediaStreamEndpoint`.
 */
/**
 * Gets the status of all the stream endpoints collected by this media transport
 * application. Key of returned map is endpoint ID.
 *
 * @method OcaMediaTransportApplication#GetEndpointStatuses
 * @returns {Promise<Map<number, OcaMediaStreamEndpointStatus>>}
 *   A promise which resolves to a single value of type ``Map<number, OcaMediaStreamEndpointStatus>``.
 */
/**
 * Gets the status of a single stream endpoint.
 *
 * @method OcaMediaTransportApplication#GetEndpointStatus
 * @param {number} ID
 *
 * @returns {Promise<OcaMediaStreamEndpointStatus>}
 *   A promise which resolves to a single value of type :class:`OcaMediaStreamEndpointStatus`.
 */
/**
 * Adds an Endpoint to this media transport application object. Parameters of
 * the new Endpoint shall be given in the **Endpoint** parameter; Device shall
 * return the same parameter with the new Endpoint ID filled in. The new
 * Endpoint's **AlignmentLevel** value shall be within the bounds set by the
 * property **AlignmentLevelLimits**.
 *
 * @method OcaMediaTransportApplication#AddEndpoint
 * @param {IOcaMediaStreamEndpoint} Endpoint
 * @param {IOcaMediaStreamEndpointState} InitialStatus
 *
 * @returns {Promise<OcaMediaStreamEndpoint>}
 *   A promise which resolves to a single value of type :class:`OcaMediaStreamEndpoint`.
 */
/**
 * Deletes a stream endpoint from this media transport application object.
 *
 * @method OcaMediaTransportApplication#DeleteEndpoint
 * @param {number} ID
 *
 * @returns {Promise<void>}
 */
/**
 * Changes the state of a given Endpoint.
 *
 * @method OcaMediaTransportApplication#ApplyEndpointCommand
 * @param {number} EndpointID
 * @param {IOcaMediaStreamEndpointCommand} Command
 *
 * @returns {Promise<void>}
 */
/**
 * Sets the **UserLabel** field of the of the referenced Endpoint.
 *
 * @method OcaMediaTransportApplication#SetEndpointUserLabel
 * @param {number} EndpointID
 * @param {string} Label
 *
 * @returns {Promise<void>}
 */
/**
 * Sets the **CurrentStreamMode** field of the of the designated stream
 * endpoint.
 *
 * @method OcaMediaTransportApplication#SetEndpointMediaStreamMode
 * @param {number} EndpointID
 * @param {IOcaMediaStreamMode} StreamMode
 *
 * @returns {Promise<void>}
 */
/**
 * Sets an Endpoint's ChannelMap field. Mapping rules:
 *
 *  - Input Endpoint maps shall specify only OCA Output Ports.
 *
 *  - Output Endpoint maps shall specify only OCA Input Ports.
 *
 *  - Input Endpoint maps may specify any number of OCA Output Ports per stream
 *    channel.
 *
 *  - Output Endpoint maps may specify at most one OCA Input Port per stream
 *    channel.
 *
 *
 *
 * @method OcaMediaTransportApplication#SetEndpointChannelMap
 * @param {number} EndpointID
 * @param {Map<number, IOcaPortID[]>} ChannelMap
 *
 * @returns {Promise<void>}
 */
/**
 * Sets **OcaEndpoint.AlignmentLevel** for the identified endpoint.
 *
 * @method OcaMediaTransportApplication#SetEndpointAlignmentLevel
 * @param {number} EndpointID
 * @param {number} Level
 *
 * @returns {Promise<void>}
 */
/**
 * Gets type and ID of this Endpoint's time source.
 * The return values of this method are
 *
 * - ReferenceType of type ``IOcaTimeReferenceType``
 * - ReferenceID of type ``string``
 *
 * @method OcaMediaTransportApplication#GetEndpointTimeSource
 * @param {number} ID
 *
 * @returns {Promise<Arguments<OcaTimeReferenceType,string>>}
 */
/**
 * Sets the AdaptationData field of the given Endpoint.
 *
 * @method OcaMediaTransportApplication#SetEndpointAdaptationData
 * @param {number} EndpointID
 * @param {Uint8Array} Data
 *
 * @returns {Promise<void>}
 */
/**
 * Retrieves map of counter sets of all Endpoints.
 *
 * @method OcaMediaTransportApplication#GetEndpointCounterSets
 * @returns {Promise<Map<number, OcaCounterSet>>}
 *   A promise which resolves to a single value of type ``Map<number, OcaCounterSet>``.
 */
/**
 * Gets the Counterset of a designated Endpoint.
 *
 * @method OcaMediaTransportApplication#GetEndpointCounterSet
 * @param {number} EndpointID
 *
 * @returns {Promise<OcaCounterSet>}
 *   A promise which resolves to a single value of type :class:`OcaCounterSet`.
 */
/**
 * Retrieves a Counter of a designated Endpoint
 *
 * @method OcaMediaTransportApplication#GetEndpointCounter
 * @param {number} EndpointID
 * @param {number} CounterID
 *
 * @returns {Promise<OcaCounter>}
 *   A promise which resolves to a single value of type :class:`OcaCounter`.
 */
/**
 * Adds a Notifier to the designated Counter.
 *
 * @method OcaMediaTransportApplication#AttachEndpointCounterNotifier
 * @param {number} EndpointID
 * @param {number} CounterID
 * @param {number} NotifierONo
 *
 * @returns {Promise<void>}
 */
/**
 * Removes a Notifier from the designated Counter.
 *
 * @method OcaMediaTransportApplication#DetachEndpointCounterNotifier
 * @param {number} EndpointID
 * @param {number} CounterID
 * @param {number} NotifierONo
 *
 * @returns {Promise<void>}
 */
/**
 * Resets Counter(s) of one or all of this media transport application object's
 * Endpoints.
 *
 *  - If given Counter ID is zero, resets entire Counterset; otherwise, resets
 *    designated Counter only.
 *
 *  - If given Endpoint ID is zero, resets the designated Counter(s) in all this
 *    media transport application object's Endpoints; otherwise, resets the
 *    designated Counter(s) in the designated Endpoint only.
 *
 *
 * Resetting a Counter causes its value to be set to its initial value, as
 * defined in its **OcaCounter** instance.
 *
 * @method OcaMediaTransportApplication#ResetEndpointCounterSet
 * @param {number} EndpointID
 * @param {number} CounterID
 *
 * @returns {Promise<void>}
 */
/**
 * Gets list of ONos of Media Transport Session Agents associated with this
 * media transport application object, or empty list if there aren't any.
 *
 * @method OcaMediaTransportApplication#GetTransportSessionControlAgentONos
 * @returns {Promise<number[]>}
 *   A promise which resolves to a single value of type ``number[]``.
 */
/**
 * Sets list of ONos of Media Transport Session Agents associated with this
 * media transport application object. Optional method, mainly useful for
 * dynamic devices.
 *
 * @method OcaMediaTransportApplication#SetTransportSessionControlAgentONos
 * @param {number[]} ONos
 *
 * @returns {Promise<void>}
 */
/**
 * This event is emitted when the property ``Ports`` changes in the remote object.
 * The property ``Ports`` is described in the AES70 standard as follows.
 * The list of **OcaPorts** this network offers on its inward face.
 *
 * @member {PropertyEvent<OcaPort[]>} OcaMediaTransportApplication#OnPortsChanged
 */
/**
 * This event is emitted when the property ``PortClockMap`` changes in the remote object.
 * The property ``PortClockMap`` is described in the AES70 standard as follows.
 * Map that connects **OcaMediaClock3** object numbers to this network's input
 * and output **OcaPorts** and specifies sampling rate converters, if any.
 * **OcaPortID** = {mode,index}, where mode = Input or Output. Optional
 * property.
 *
 * @member {PropertyEvent<Map<OcaPortID, OcaPortClockMapEntry>>} OcaMediaTransportApplication#OnPortClockMapChanged
 */
/**
 * This event is emitted when the property ``MaxInputEndpoints`` changes in the remote object.
 * The property ``MaxInputEndpoints`` is described in the AES70 standard as follows.
 * The maximum number of input stream endpoints this media transport network
 * application can have (read-only property).
 *
 * @member {PropertyEvent<number>} OcaMediaTransportApplication#OnMaxInputEndpointsChanged
 */
/**
 * This event is emitted when the property ``MaxOutputEndpoints`` changes in the remote object.
 * The property ``MaxOutputEndpoints`` is described in the AES70 standard as follows.
 * The maximum number of output stream endpoints this media transport
 * application can have (read-only property).
 *
 * @member {PropertyEvent<number>} OcaMediaTransportApplication#OnMaxOutputEndpointsChanged
 */
/**
 * This event is emitted when the property ``MaxPortsPerChannel`` changes in the remote object.
 * The property ``MaxPortsPerChannel`` is described in the AES70 standard as follows.
 * The maximum number of ports per stream endpoint channel that this media
 * transport application will support. Value of zero indicates there is no
 * specific limit.
 *
 * @member {PropertyEvent<number>} OcaMediaTransportApplication#OnMaxPortsPerChannelChanged
 */
/**
 * This event is emitted when the property ``MaxChannelsPerEndpoint`` changes in the remote object.
 * The property ``MaxChannelsPerEndpoint`` is described in the AES70 standard as follows.
 * The maximum number of channels in a stream endpoint that this media transport
 * application will support.
 *
 * @member {PropertyEvent<number>} OcaMediaTransportApplication#OnMaxChannelsPerEndpointChanged
 */
/**
 * This event is emitted when the property ``MediaStreamModeCapabilities`` changes in the remote object.
 * The property ``MediaStreamModeCapabilities`` is described in the AES70 standard as follows.
 * List of media stream mode capability descriptors that apply to this media
 * transport application.
 *
 * @member {PropertyEvent<OcaMediaStreamModeCapability[]>} OcaMediaTransportApplication#OnMediaStreamModeCapabilitiesChanged
 */
/**
 * This event is emitted when the property ``TransportTimingParameters`` changes in the remote object.
 * The property ``TransportTimingParameters`` is described in the AES70 standard as follows.
 * Timing parameters for media transport through this media transport
 * application.
 *
 * @member {PropertyEvent<OcaMediaTransportTimingParameters>} OcaMediaTransportApplication#OnTransportTimingParametersChanged
 */
/**
 * This event is emitted when the property ``AlignmentLevelLimits`` changes in the remote object.
 * The property ``AlignmentLevelLimits`` is described in the AES70 standard as follows.
 * Alignment level limits for newly-created **OcaMediaStreamEndpoint**
 * instances. The min and max values of this property define respectively the
 * lowest and highest alignment level values that may be specified when adding
 * stream endpoints to this media transport application.
 *
 * @member {PropertyEvent<OcaInterval<number>>} OcaMediaTransportApplication#OnAlignmentLevelLimitsChanged
 */
/**
 * This event is emitted when the property ``Endpoints`` changes in the remote object.
 * The property ``Endpoints`` is described in the AES70 standard as follows.
 * The list of stream endpoints this media transport application has.
 *
 * @member {PropertyEvent<OcaMediaStreamEndpoint[]>} OcaMediaTransportApplication#OnEndpointsChanged
 */
/**
 * This event is emitted when the property ``EndpointStatuses`` changes in the remote object.
 * The property ``EndpointStatuses`` is described in the AES70 standard as follows.
 * Map of states of this media transport application's endpoints. Map key is
 * endpoint ID.
 *
 * @member {PropertyEvent<Map<number, OcaMediaStreamEndpointStatus>>} OcaMediaTransportApplication#OnEndpointStatusesChanged
 */
/**
 * This event is emitted when the property ``TransportSessionControlAgentONos`` changes in the remote object.
 * The property ``TransportSessionControlAgentONos`` is described in the AES70 standard as follows.
 * Object number(s) of media transport session control agent(s) associated with
 * this media transport application.
 *
 * @member {PropertyEvent<number[]>} OcaMediaTransportApplication#OnTransportSessionControlAgentONosChanged
 */
