import { OcaCounter } from '../../types/OcaCounter';
import { OcaCounterSet } from '../../types/OcaCounterSet';
import { IOcaIODirection } from '../../types/OcaIODirection';
import { OcaMediaStreamEndpoint } from '../../types/OcaMediaStreamEndpoint';
import { IOcaMediaStreamEndpointCommand } from '../../types/OcaMediaStreamEndpointCommand';
import { IOcaMediaStreamEndpointState } from '../../types/OcaMediaStreamEndpointState';
import { OcaMediaStreamEndpointStatus } from '../../types/OcaMediaStreamEndpointStatus';
import { IOcaMediaStreamMode } from '../../types/OcaMediaStreamMode';
import {
  IOcaMediaStreamModeCapability,
  OcaMediaStreamModeCapability,
} from '../../types/OcaMediaStreamModeCapability';
import {
  IOcaMediaTransportTimingParameters,
  OcaMediaTransportTimingParameters,
} from '../../types/OcaMediaTransportTimingParameters';
import { OcaPort } from '../../types/OcaPort';
import {
  IOcaPortClockMapEntry,
  OcaPortClockMapEntry,
} from '../../types/OcaPortClockMapEntry';
import { IOcaPortID, OcaPortID } from '../../types/OcaPortID';
import { OcaTimeReferenceType } from '../../types/OcaTimeReferenceType';
import { Arguments } from '../arguments';
import { PropertyEvent } from '../property_event';
import { RemoteDevice } from '../remote_device';
import { OcaNetworkApplication } from './OcaNetworkApplication';

/**
 * Connection Management 4 (CM4) class. Specifies the device's control interface
 * to media transport functions. This is the anchoring class for CM4 data
 * structures. Abstract class that shall be subclassed for each media transport
 * Adaptation.
 * @extends OcaNetworkApplication
 * @class OcaMediaTransportApplication
 */
export declare class OcaMediaTransportApplication extends OcaNetworkApplication {
  /**
   * This event is emitted whenever Ports changes.
   */
  OnPortsChanged: PropertyEvent<OcaPort[]>;

  /**
   * This event is emitted whenever PortClockMap changes.
   */
  OnPortClockMapChanged: PropertyEvent<Map<OcaPortID, OcaPortClockMapEntry>>;

  /**
   * This event is emitted whenever MaxInputEndpoints changes.
   */
  OnMaxInputEndpointsChanged: PropertyEvent<number>;

  /**
   * This event is emitted whenever MaxOutputEndpoints changes.
   */
  OnMaxOutputEndpointsChanged: PropertyEvent<number>;

  /**
   * This event is emitted whenever MaxPortsPerChannel changes.
   */
  OnMaxPortsPerChannelChanged: PropertyEvent<number>;

  /**
   * This event is emitted whenever MaxChannelsPerEndpoint changes.
   */
  OnMaxChannelsPerEndpointChanged: PropertyEvent<number>;

  /**
   * This event is emitted whenever MediaStreamModeCapabilities changes.
   */
  OnMediaStreamModeCapabilitiesChanged: PropertyEvent<
    OcaMediaStreamModeCapability[]
  >;

  /**
   * This event is emitted whenever TransportTimingParameters changes.
   */
  OnTransportTimingParametersChanged: PropertyEvent<
    OcaMediaTransportTimingParameters
  >;

  /**
   * This event is emitted whenever AlignmentLevelLimits changes.
   */
  OnAlignmentLevelLimitsChanged: PropertyEvent<OcaInterval<number>>;

  /**
   * This event is emitted whenever Endpoints changes.
   */
  OnEndpointsChanged: PropertyEvent<OcaMediaStreamEndpoint[]>;

  /**
   * This event is emitted whenever EndpointStatuses changes.
   */
  OnEndpointStatusesChanged: PropertyEvent<
    Map<number, OcaMediaStreamEndpointStatus>
  >;

  /**
   * This event is emitted whenever TransportSessionControlAgentONos changes.
   */
  OnTransportSessionControlAgentONosChanged: PropertyEvent<number[]>;

  constructor(objectNumber: number, device: RemoteDevice);

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
  AddPort(Name: string, Mode: IOcaIODirection): Promise<OcaPortID>;

  /**
   * Deletes an input or output port..
   *
   * @method OcaMediaTransportApplication#DeletePort
   * @param {IOcaPortID} ID
   *
   * @returns {Promise<void>}
   */
  DeletePort(ID: IOcaPortID): Promise<void>;

  /**
   * Gets the list of ports owned by this object.
   *
   * @method OcaMediaTransportApplication#GetPorts
   * @returns {Promise<OcaPort[]>}
   *   A promise which resolves to a single value of type :class:`OcaPort[]`.
   */
  GetPorts(): Promise<OcaPort[]>;

  /**
   * Gets the name of the designated port.
   *
   * @method OcaMediaTransportApplication#GetPortName
   * @param {IOcaPortID} PortID
   *
   * @returns {Promise<string>}
   *   A promise which resolves to a single value of type ``string``.
   */
  GetPortName(PortID: IOcaPortID): Promise<string>;

  /**
   * Sets the name of the designated port.
   *
   * @method OcaMediaTransportApplication#SetPortName
   * @param {IOcaPortID} PortID
   * @param {string} Name
   *
   * @returns {Promise<void>}
   */
  SetPortName(PortID: IOcaPortID, Name: string): Promise<void>;

  /**
   * Gets the value of the **PortClockMap** property.
   *
   * @method OcaMediaTransportApplication#GetPortClockMap
   * @returns {Promise<Map<OcaPortID, OcaPortClockMapEntry>>}
   *   A promise which resolves to a single value of type ``Map<OcaPortID, OcaPortClockMapEntry>``.
   */
  GetPortClockMap(): Promise<Map<OcaPortID, OcaPortClockMapEntry>>;

  /**
   * Sets the value of the **PortClockMap** property.
   *
   * @method OcaMediaTransportApplication#SetPortClockMap
   * @param {Map<IOcaPortID, IOcaPortClockMapEntry>} Map
   *
   * @returns {Promise<void>}
   */
  SetPortClockMap(Map: Map<IOcaPortID, IOcaPortClockMapEntry>): Promise<void>;

  /**
   * Adds or replaces an entry in the **PortClockMap** property.
   *
   * @method OcaMediaTransportApplication#SetPortClockMapEntry
   * @param {IOcaPortID} ID
   * @param {IOcaPortClockMapEntry} Entry
   *
   * @returns {Promise<void>}
   */
  SetPortClockMapEntry(
    ID: IOcaPortID,
    Entry: IOcaPortClockMapEntry
  ): Promise<void>;

  /**
   * Deletes the **PortClockMap** entry identified by the given ID.
   *
   * @method OcaMediaTransportApplication#DeletePortClockMapEntry
   * @param {IOcaPortID} ID
   *
   * @returns {Promise<void>}
   */
  DeletePortClockMapEntry(ID: IOcaPortID): Promise<void>;

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
  GetPortClockMapEntry(ID: IOcaPortID): Promise<OcaPortClockMapEntry>;

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
  GetMaxEndpointCounts(): Promise<Arguments<[number, number]>>;

  /**
   * Gets the maximum number of ports per stream endpoint channel this media
   * transport application supports.
   *
   * @method OcaMediaTransportApplication#GetMaxPortsPerChannel
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetMaxPortsPerChannel(): Promise<number>;

  /**
   * Gets the maximum number of channels per stream endpoint this media
   * transport application supports.
   *
   * @method OcaMediaTransportApplication#GetMaxChannelsPerEndpoint
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetMaxChannelsPerEndpoint(): Promise<number>;

  /**
   * Sets the alignment level limits for stream endpoints attached to this media
   * transport application.
   *
   * @method OcaMediaTransportApplication#SetAlignmentLevelLimits
   * @param {IOcaInterval<number>} Limits
   *
   * @returns {Promise<void>}
   */
  SetAlignmentLevelLimits(Limits: IOcaInterval<number>): Promise<void>;

  /**
   * Gets this media transport application's media stream mode capability
   * descriptors.
   *
   * @method OcaMediaTransportApplication#GetMediaStreamModeCapabilities
   * @returns {Promise<OcaMediaStreamModeCapability[]>}
   *   A promise which resolves to a single value of type :class:`OcaMediaStreamModeCapability[]`.
   */
  GetMediaStreamModeCapabilities(): Promise<OcaMediaStreamModeCapability[]>;

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
  SetMediaStreamModeCapabilities(
    Capabilities: IOcaMediaStreamModeCapability[]
  ): Promise<void>;

  /**
   * Gets a specific media stream mode capability descriptor.
   *
   * @method OcaMediaTransportApplication#GetMediaStreamModeCapability
   * @param {number} CapabilityID
   *
   * @returns {Promise<OcaMediaStreamModeCapability>}
   *   A promise which resolves to a single value of type :class:`OcaMediaStreamModeCapability`.
   */
  GetMediaStreamModeCapability(
    CapabilityID: number
  ): Promise<OcaMediaStreamModeCapability>;

  /**
   * Gets this media transport application's media transport timing parameters.
   *
   * @method OcaMediaTransportApplication#GetTransportTimingParameters
   * @returns {Promise<OcaMediaTransportTimingParameters>}
   *   A promise which resolves to a single value of type :class:`OcaMediaTransportTimingParameters`.
   */
  GetTransportTimingParameters(): Promise<OcaMediaTransportTimingParameters>;

  /**
   * Sets this media transport application's media transport timing parameters.
   * Optional method.
   *
   * @method OcaMediaTransportApplication#SetTransportTimingParameters
   * @param {IOcaMediaTransportTimingParameters} Parameters
   *
   * @returns {Promise<void>}
   */
  SetTransportTimingParameters(
    Parameters: IOcaMediaTransportTimingParameters
  ): Promise<void>;

  /**
   * Gets the min and max alignment levels for stream endpoints attached to this
   * media transport application.
   *
   * @method OcaMediaTransportApplication#GetAlignmentLevelLimits
   * @returns {Promise<OcaInterval<number>>}
   *   A promise which resolves to a single value of type :class:`OcaInterval<number>`.
   */
  GetAlignmentLevelLimits(): Promise<OcaInterval<number>>;

  /**
   * Gets the descriptors of all the stream endpoints owned by this media
   * transport application object.
   *
   * @method OcaMediaTransportApplication#GetEndpoints
   * @returns {Promise<OcaMediaStreamEndpoint[]>}
   *   A promise which resolves to a single value of type :class:`OcaMediaStreamEndpoint[]`.
   */
  GetEndpoints(): Promise<OcaMediaStreamEndpoint[]>;

  /**
   * Retrieves the descriptor of a given stream endpoint.
   *
   * @method OcaMediaTransportApplication#GetEndpoint
   * @param {number} ID
   *
   * @returns {Promise<OcaMediaStreamEndpoint>}
   *   A promise which resolves to a single value of type :class:`OcaMediaStreamEndpoint`.
   */
  GetEndpoint(ID: number): Promise<OcaMediaStreamEndpoint>;

  /**
   * Gets the status of all the stream endpoints collected by this media
   * transport application. Key of returned map is endpoint ID.
   *
   * @method OcaMediaTransportApplication#GetEndpointStatuses
   * @returns {Promise<Map<number, OcaMediaStreamEndpointStatus>>}
   *   A promise which resolves to a single value of type ``Map<number, OcaMediaStreamEndpointStatus>``.
   */
  GetEndpointStatuses(): Promise<Map<number, OcaMediaStreamEndpointStatus>>;

  /**
   * Gets the status of a single stream endpoint.
   *
   * @method OcaMediaTransportApplication#GetEndpointStatus
   * @param {number} ID
   *
   * @returns {Promise<OcaMediaStreamEndpointStatus>}
   *   A promise which resolves to a single value of type :class:`OcaMediaStreamEndpointStatus`.
   */
  GetEndpointStatus(ID: number): Promise<OcaMediaStreamEndpointStatus>;

  /**
   * Adds an Endpoint to this media transport application object. Parameters of
   * the new Endpoint shall be given in the **Endpoint** parameter; Device shall
   * return the same parameter with the new Endpoint ID filled in. The new
   * Endpoint's **AlignmentLevel** value shall be within the bounds set by the
   * property **AlignmentLevelLimits**.
   *
   * @method OcaMediaTransportApplication#AddEndpoint
   * @param {IOcaMediaStreamEndpointState} InitialStatus
   *
   * @returns {Promise<void>}
   */
  AddEndpoint(InitialStatus: IOcaMediaStreamEndpointState): Promise<void>;

  /**
   * Deletes a stream endpoint from this media transport application object.
   *
   * @method OcaMediaTransportApplication#DeleteEndpoint
   * @param {number} ID
   *
   * @returns {Promise<void>}
   */
  DeleteEndpoint(ID: number): Promise<void>;

  /**
   * Changes the state of a given Endpoint.
   *
   * @method OcaMediaTransportApplication#ApplyEndpointCommand
   * @param {number} EndpointID
   * @param {IOcaMediaStreamEndpointCommand} Command
   *
   * @returns {Promise<void>}
   */
  ApplyEndpointCommand(
    EndpointID: number,
    Command: IOcaMediaStreamEndpointCommand
  ): Promise<void>;

  /**
   * Sets the **UserLabel** field of the of the referenced Endpoint.
   *
   * @method OcaMediaTransportApplication#SetEndpointUserLabel
   * @param {number} EndpointID
   * @param {string} Label
   *
   * @returns {Promise<void>}
   */
  SetEndpointUserLabel(EndpointID: number, Label: string): Promise<void>;

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
  SetEndpointMediaStreamMode(
    EndpointID: number,
    StreamMode: IOcaMediaStreamMode
  ): Promise<void>;

  /**
   * Sets an Endpoint's ChannelMap field. Mapping rules:
   *
   *  - Input Endpoint maps shall specify only OCA Output Ports.
   *
   *  - Output Endpoint maps shall specify only OCA Input Ports.
   *
   *  - Input Endpoint maps may specify any number of OCA Output Ports per
   *    stream channel.
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
  SetEndpointChannelMap(
    EndpointID: number,
    ChannelMap: Map<number, IOcaPortID[]>
  ): Promise<void>;

  /**
   * Sets **OcaEndpoint.AlignmentLevel** for the identified endpoint.
   *
   * @method OcaMediaTransportApplication#SetEndpointAlignmentLevel
   * @param {number} EndpointID
   * @param {number} Level
   *
   * @returns {Promise<void>}
   */
  SetEndpointAlignmentLevel(EndpointID: number, Level: number): Promise<void>;

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
  GetEndpointTimeSource(
    ID: number
  ): Promise<Arguments<[OcaTimeReferenceType, string]>>;

  /**
   * Sets the AdaptationData field of the given Endpoint.
   *
   * @method OcaMediaTransportApplication#SetEndpointAdaptationData
   * @param {number} EndpointID
   * @param {Uint8Array} Data
   *
   * @returns {Promise<void>}
   */
  SetEndpointAdaptationData(
    EndpointID: number,
    Data: Uint8Array
  ): Promise<void>;

  /**
   * Retrieves map of counter sets of all Endpoints.
   *
   * @method OcaMediaTransportApplication#GetEndpointCounterSets
   * @returns {Promise<Map<number, OcaCounterSet>>}
   *   A promise which resolves to a single value of type ``Map<number, OcaCounterSet>``.
   */
  GetEndpointCounterSets(): Promise<Map<number, OcaCounterSet>>;

  /**
   * Gets the Counterset of a designated Endpoint.
   *
   * @method OcaMediaTransportApplication#GetEndpointCounterSet
   * @param {number} EndpointID
   *
   * @returns {Promise<OcaCounterSet>}
   *   A promise which resolves to a single value of type :class:`OcaCounterSet`.
   */
  GetEndpointCounterSet(EndpointID: number): Promise<OcaCounterSet>;

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
  GetEndpointCounter(
    EndpointID: number,
    CounterID: number
  ): Promise<OcaCounter>;

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
  AttachEndpointCounterNotifier(
    EndpointID: number,
    CounterID: number,
    NotifierONo: number
  ): Promise<void>;

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
  DetachEndpointCounterNotifier(
    EndpointID: number,
    CounterID: number,
    NotifierONo: number
  ): Promise<void>;

  /**
   * Resets Counter(s) of one or all of this media transport application
   * object's Endpoints.
   *
   *  - If given Counter ID is zero, resets entire Counterset; otherwise, resets
   *    designated Counter only.
   *
   *  - If given Endpoint ID is zero, resets the designated Counter(s) in all
   *    this media transport application object's Endpoints; otherwise, resets
   *    the designated Counter(s) in the designated Endpoint only.
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
  ResetEndpointCounterSet(EndpointID: number, CounterID: number): Promise<void>;

  /**
   * Gets list of ONos of Media Transport Session Agents associated with this
   * media transport application object, or empty list if there aren't any.
   *
   * @method OcaMediaTransportApplication#GetTransportSessionControlAgentONos
   * @returns {Promise<number[]>}
   *   A promise which resolves to a single value of type ``number[]``.
   */
  GetTransportSessionControlAgentONos(): Promise<number[]>;

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
  SetTransportSessionControlAgentONos(ONos: number[]): Promise<void>;
}
