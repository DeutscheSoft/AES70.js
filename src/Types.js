/*
 * This file has been generated. Please do not modify
 * it directly.
 *
 *
 * Copyright 2017-2018 DeusO GmbH
 */

import { Base, Enum8, Enum16, make_enum, make_struct, make_bitset } from './TypesBase.js';
import {
    signature,
    dynamic_signature,
    BOOLEAN,
    UINT8,
    UINT16,
    UINT32,
    UINT64,
    INT8,
    INT16,
    INT32,
    INT64,
    FLOAT32,
    FLOAT64,
    BLOB,
    BLOB16,
    REST,
    STRING,
    BITSTRING,
    LIST,
    LIST2D,
    LISTFIXED,
    MAP,
    MULTIMAP,
    BLOBFIXED,
    BITSTRINGFIXED,
  } from './signature_parser.js';

const OcaMultiMap = MULTIMAP;


const _values_OcaBaseDataType = {
  None: 0,
  OcaBoolean: 1,
  OcaInt8: 2,
  OcaInt16: 3,
  OcaInt32: 4,
  OcaInt64: 5,
  OcaUint8: 6,
  OcaUint16: 7,
  OcaUint32: 8,
  OcaUint64: 9,
  OcaFloat32: 10,
  OcaFloat64: 11,
  OcaString: 12,
  OcaBitstring: 13,
  OcaBlob: 14,
  OcaBlobFixedLen: 15,
  OcaBit: 16,
};

/**
 * Enum that describes all available base datatypes.
 * @category Types
 * @class OcaBaseDataType
 * @extends Enum8
 */
export const OcaBaseDataType = make_enum(Enum8, "OcaBaseDataType", _values_OcaBaseDataType);

/**
 * Class authority identifier. Identifies the authority for a class's
 * definition.
 * @category Types
 * @class OcaClassAuthorityID
 * @extends Base
 */
export const OcaClassAuthorityID = make_struct(
  "OcaClassAuthorityID",
  [ "Sentinel", "Reserved", "OrganizationID" ],
  [ UINT16, UINT8, BLOBFIXED(3) ]
);

const _values_OcaComponent = {
  BootLoader: 0,
};

/**
 * Enumeration (16-bit) for of software &amp; firmware components in the
 * device. Except for the boot loader, all other values of this enum are
 * device-specific and will be specified by subclassing this class.
 * @category Types
 * @class OcaComponent
 * @extends Enum16
 */
export const OcaComponent = make_enum(Enum16, "OcaComponent", _values_OcaComponent);

/**
 * Representation of a version number of a (hardware/software) component
 * of a device in the form of Major.Minor.Build (e.g. 1.0.123).
 * @category Types
 * @class OcaVersion
 * @extends Base
 */
export const OcaVersion = make_struct(
  "OcaVersion",
  [ "Major", "Minor", "Build", "Component" ],
  [ UINT32, UINT32, UINT32, OcaComponent ]
);


/**
 * A set of 16 1-bit boolean flags. Used to signify (m) of (n)
 * selections, where m &lt;= n. See AES70-Part 3 for rules for
 * marshalling bit sets.
 * @category Types
 * @class OcaBitSet16
 * @extends Base
 */
export const OcaBitSet16 = make_bitset(16, "OcaBitSet16", [
"Value" ]);

/**
 * This was not documented in the OCA standard.
 * @category Types
 * @class OcaClassIdentification
 * @extends Base
 */
export const OcaClassIdentification = make_struct(
  "OcaClassIdentification",
  [ "ClassID", "ClassVersion" ],
  [ BLOB16, UINT16 ]
);

/**
 * Object address. Composite of network address in which object resides,
 * and object number.
 * @category Types
 * @class OcaOPath
 * @extends Base
 */
export const OcaOPath = make_struct(
  "OcaOPath",
  [ "HostID", "ONo" ],
  [ BLOB, UINT32 ]
);

/**
 * Object identification. Composite of object number and object's class.
 * Used mainly in discovery processes.
 * @category Types
 * @class OcaObjectIdentification
 * @extends Base
 */
export const OcaObjectIdentification = make_struct(
  "OcaObjectIdentification",
  [ "ONo", "ClassIdentification" ],
  [ UINT32, OcaClassIdentification ]
);

/**
 * Representation of an OCA method ID. A class may define at most 255
 * methods of its own. Additional methods may be inherited, so the total
 * number may exceed 255.
 * @category Types
 * @class OcaMethodID
 * @extends Base
 */
export const OcaMethodID = make_struct(
  "OcaMethodID",
  [ "DefLevel", "MethodIndex" ],
  [ UINT16, UINT16 ]
);

/**
 * Representation of an OCA property ID. A class may define at most 255
 * properties of its own. Additional properties may be inherited, so the
 * total number may exceed 255.
 * @category Types
 * @class OcaPropertyID
 * @extends Base
 */
export const OcaPropertyID = make_struct(
  "OcaPropertyID",
  [ "DefLevel", "PropertyIndex" ],
  [ UINT16, UINT16 ]
);

/**
 * Representation of an OCA event ID. A class may define at most 255
 * events of its own. Additional events may be inherited, so the total
 * number may exceed 255.
 * @category Types
 * @class OcaEventID
 * @extends Base
 */
export const OcaEventID = make_struct(
  "OcaEventID",
  [ "DefLevel", "EventIndex" ],
  [ UINT16, UINT16 ]
);

/**
 * Description of an OCA property, including property ID, Get and Set
 * method IDs, and datatype.
 * @category Types
 * @class OcaPropertyDescriptor
 * @extends Base
 */
export const OcaPropertyDescriptor = make_struct(
  "OcaPropertyDescriptor",
  [ "PropertyID", "BaseDataType", "GetterMethodID", "SetterMethodID" ],
  [ OcaPropertyID, OcaBaseDataType, OcaMethodID, OcaMethodID ]
);

/**
 * Template for complete identification of an OCA property instance,
 * including object number, property ID, Get and Set method IDs, and
 * datatype.
 * @category Types
 * @class OcaProperty
 * @extends Base
 */
export const OcaProperty = make_struct(
  "OcaProperty",
  [ "ONo", "Descriptor" ],
  [ UINT32, OcaPropertyDescriptor ]
);

const _values_OcaStatus = {
  OK: 0,
  ProtocolVersionError: 1,
  DeviceError: 2,
  Locked: 3,
  BadFormat: 4,
  BadONo: 5,
  ParameterError: 6,
  ParameterOutOfRange: 7,
  NotImplemented: 8,
  InvalidRequest: 9,
  ProcessingFailed: 10,
  BadMethod: 11,
  PartiallySucceeded: 12,
  Timeout: 13,
  BufferOverflow: 14,
};

/**
 * Standard status codes returned from method calls.
 * @category Types
 * @class OcaStatus
 * @extends Enum8
 */
export const OcaStatus = make_enum(Enum8, "OcaStatus", _values_OcaStatus);

/**
 * Globally unique identifier of something that belongs to an
 * organization.
 * @category Types
 * @class OcaGlobalTypeIdentifier
 * @extends Base
 */
export const OcaGlobalTypeIdentifier = make_struct(
  "OcaGlobalTypeIdentifier",
  [ "Authority", "ID" ],
  [ BLOBFIXED(3), UINT32 ]
);

const _values_OcaStringComparisonType = {
  Exact: 0,
  Substring: 1,
  Contains: 2,
  ExactCaseInsensitive: 3,
  SubstringCaseInsensitive: 4,
  ContainsCaseInsensitive: 5,
};

/**
 * Type of string comparison.
 * @category Types
 * @class OcaStringComparisonType
 * @extends Enum8
 */
export const OcaStringComparisonType = make_enum(Enum8, "OcaStringComparisonType", _values_OcaStringComparisonType);

const _values_OcaPositionCoordinateSystem = {
  Robotic: 1,
  ItuAudioObjectBasedPolar: 2,
  ItuAudioObjectBasedCartesian: 3,
  ItuAudioSceneBasedPolar: 4,
  ItuAudioSceneBasedCartesian: 5,
  NAV: 6,
  ProprietaryBase: 128,
};

/**
 * Enumeration that designates the type of position coordinate system
 * used. For details, see the AES70-1 description of the
 * <b>OcaPhysicalPosition </b>class.
 * @category Types
 * @class OcaPositionCoordinateSystem
 * @extends Enum8
 */
export const OcaPositionCoordinateSystem = make_enum(Enum8, "OcaPositionCoordinateSystem", _values_OcaPositionCoordinateSystem);

/**
 * A six-axis c1,c2,c3,c4,c5,c6) coordinate. For mechanical systems,
 * these axes shall be interpreted as follows: <ul> <li>c1 = X; axial
 * (fore-and-aft) position</li> <li>c2 = Y; lateral (side-to-side)
 * position</li> <li>c3 = Z; vertical position</li> <li>c4 = rX; rotation
 * around the X-axis, also known as <i>Roll</i></li> <li>c5 = rY;
 * rotation around the Y-axis, also known as <i>Pitch</i></li> <li>c6 =
 * rZ; rotation around the Z-axis. also known as <i>Yaw</i></li> </ul>
 * Rotation angles are measured according to the <i>right-hand rule: </i>
 * if the right hand "holds" an axis with the thumb pointing in the
 * direction of ascending coordinate values, then the fingers point in
 * the direction of ascending angle values. For GPS systems, these axes
 * shall be interpreted as follows: <ul> <li>c1 = longitude</li> <li>c2 =
 * latitude</li> <li>c3 = altitude</li> <li>c4 : not used</li> <li>c5 :
 * not used</li> <li>c6 : not used</li> </ul>
 * @category Types
 * @class OcaPositionDescriptor
 * @extends Base
 */
export const OcaPositionDescriptor = make_struct(
  "OcaPositionDescriptor",
  [ "CoordinateSystem", "FieldFlags", "Values" ],
  [ OcaPositionCoordinateSystem, UINT16, FLOAT32 ]
);

/**
 * Structure that describes a manager instance.
 * @category Types
 * @class OcaManagerDescriptor
 * @extends Base
 */
export const OcaManagerDescriptor = make_struct(
  "OcaManagerDescriptor",
  [ "ObjectNumber", "Name", "ClassID", "ClassVersion" ],
  [ UINT32, STRING, BLOB16, UINT16 ]
);
export const OcaManagerDefaultObjectNumbers = {
  DeviceManager: 1,
  SecurityManager: 2,
  FirmwareManager: 3,
  SubscriptionManager: 4,
  PowerManager: 5,
  NetworkManager: 6,
  MediaClockManager: 7,
  LibraryManager: 8,
  AudioProcessingManager: 9,
  DeviceTimeManager: 10,
  TaskManager: 11,
  CodingManager: 12,
  DiagnosticManager: 13,
};


/**
 * Bitset defining bit flags that indicate the device states CAP devices
 * can be in. The state is returned by the device's Device Manager on
 * request. Any combination of the flags may be returned, unless
 * specified otherwise for the specific flag. The value 0x0000 indicates
 * the device is fully operational.
 * @category Types
 * @class OcaDeviceState
 * @extends Base
 */
export const OcaDeviceState = make_bitset(16, "OcaDeviceState", [
"Operational", "Disabled", "Error", "Initializing", "Updating", "unused" ]);

/**
 * 64 bit device type GUID.
 * @category Types
 * @class OcaModelGUID
 * @extends Base
 */
export const OcaModelGUID = make_struct(
  "OcaModelGUID",
  [ "Reserved", "MfrCode", "ModelCode" ],
  [ BLOBFIXED(1), BLOBFIXED(3), BLOBFIXED(4) ]
);

/**
 * Friendly description of this particular product model.
 * @category Types
 * @class OcaModelDescription
 * @extends Base
 */
export const OcaModelDescription = make_struct(
  "OcaModelDescription",
  [ "Manufacturer", "Name", "Version" ],
  [ STRING, STRING, STRING ]
);

const _values_OcaResetCause = {
  PowerOn: 0,
  InternalError: 1,
  Upgrade: 2,
  ExternalRequest: 3,
};

/**
 * Enumeration of reasons for device reset.
 * @category Types
 * @class OcaResetCause
 * @extends Enum8
 */
export const OcaResetCause = make_enum(Enum8, "OcaResetCause", _values_OcaResetCause);

const _values_OcaPowerState = {
  None: 0,
  Working: 1,
  Standby: 2,
  Off: 3,
};

/**
 * Enumeration defining the power states that OCA devices can be in. The
 * state is returned by the device's Power Manager on request.
 * @category Types
 * @class OcaPowerState
 * @extends Enum8
 */
export const OcaPowerState = make_enum(Enum8, "OcaPowerState", _values_OcaPowerState);

/**
 * Representation of an OCA event, i.e. the unique combination of emitter
 * ONo and the EventID.
 * @category Types
 * @class OcaEvent
 * @extends Base
 */
export const OcaEvent = make_struct(
  "OcaEvent",
  [ "EmitterONo", "EventID" ],
  [ UINT32, OcaEventID ]
);

/**
 * Representation of an OCA method, i.e. the unique combination of an ONo
 * and a MethodID. To denote the absence of a method, all field values
 * shall be zero. Such a value is called the <i>Null Method
 * Identifier</i>.
 * @category Types
 * @class OcaMethod
 * @extends Base
 */
export const OcaMethod = make_struct(
  "OcaMethod",
  [ "ONo", "MethodID" ],
  [ UINT32, OcaMethodID ]
);

const _values_OcaPropertyChangeType = {
  CurrentChanged: 1,
  MinChanged: 2,
  MaxChanged: 3,
  ItemAdded: 4,
  ItemChanged: 5,
  ItemDeleted: 6,
};

/**
 * Enum describing property change type.
 * @category Types
 * @class OcaPropertyChangeType
 * @extends Enum8
 */
export const OcaPropertyChangeType = make_enum(Enum8, "OcaPropertyChangeType", _values_OcaPropertyChangeType);

/**
 * Event data for the <b>OcaLibVolChanged </b>event, which signals a
 * change in an <b>OcaLibrary.Volumes</b> property.
 * @category Types
 * @class OcaLibVolChangedEventData
 * @extends Base
 */
export const OcaLibVolChangedEventData = make_struct(
  "OcaLibVolChangedEventData",
  [ "Event", "VolumeID", "ChangeType" ],
  [ OcaEvent, UINT32, OcaPropertyChangeType ]
);


/**
 * Bitset describing which elements of a media connector have changed.
 * @category Types
 * @class OcaMediaConnectorElement
 * @extends Base
 */
export const OcaMediaConnectorElement = make_bitset(5, "OcaMediaConnectorElement", [
"PinMap", "Connection", "Coding", "AlignmentLevel", "AlignmentGain" ]);

const _values_OcaMediaConnectorState = {
  Stopped: 0,
  SettingUp: 1,
  Running: 2,
  Paused: 3,
  Fault: 4,
};

/**
 * Status options for a stream connector.
 * @category Types
 * @class OcaMediaConnectorState
 * @extends Enum8
 */
export const OcaMediaConnectorState = make_enum(Enum8, "OcaMediaConnectorState", _values_OcaMediaConnectorState);

/**
 * Represents the current status of a media (source or sink) connector.
 * @category Types
 * @class OcaMediaConnectorStatus
 * @extends Base
 */
export const OcaMediaConnectorStatus = make_struct(
  "OcaMediaConnectorStatus",
  [ "ConnectorID", "State", "ErrorCode" ],
  [ UINT16, OcaMediaConnectorState, UINT16 ]
);

/**
 * This was not documented in the OCA standard.
 * @category Types
 * @class OcaMediaConnectorStatusChangedEventData
 * @extends Base
 */
export const OcaMediaConnectorStatusChangedEventData = make_struct(
  "OcaMediaConnectorStatusChangedEventData",
  [ "Event", "ConnectorStatus" ],
  [ OcaEvent, OcaMediaConnectorStatus ]
);

const _values_OcaTaskState = {
  None: 0,
  NotPrepared: 1,
  Disabled: 2,
  Enabled: 3,
  Running: 4,
  Completed: 5,
  Failed: 6,
  Stopped: 7,
  Aborted: 8,
};

/**
 * States of OcaTask object. State values change as a result of the
 * object's having received a comment or encountering processing events
 * (e.g. completion).
 * @category Types
 * @class OcaTaskState
 * @extends Enum8
 */
export const OcaTaskState = make_enum(Enum8, "OcaTaskState", _values_OcaTaskState);

/**
 * Status of an OcaTask: task state plus a nonspecific blob named
 * Parameter which the application can use, or not. <ul> <li>The initial
 * value of Parameter is null. </li> <li>The controller sets the value of
 * Parameter via the Control() method. </li> <li>If the task's state
 * changes due to an internal event (examples: task duration value
 * reached; or failure due to an error), Parameter is not changed.</li>
 * </ul>
 * @category Types
 * @class OcaTaskStatus
 * @extends Base
 */
export const OcaTaskStatus = make_struct(
  "OcaTaskStatus",
  [ "ID", "State", "ErrorCode" ],
  [ UINT32, OcaTaskState, UINT16 ]
);

/**
 * Unique identifier of a library volume within the device.
 * @category Types
 * @class OcaLibVolIdentifier
 * @extends Base
 */
export const OcaLibVolIdentifier = make_struct(
  "OcaLibVolIdentifier",
  [ "Library", "ID" ],
  [ UINT32, UINT32 ]
);

/**
 * This was not documented in the OCA standard.
 * @category Types
 * @class OcaTaskStateChangedEventData
 * @extends Base
 */
export const OcaTaskStateChangedEventData = make_struct(
  "OcaTaskStateChangedEventData",
  [ "TaskID", "ProgramID", "Status" ],
  [ UINT32, OcaLibVolIdentifier, OcaTaskStatus ]
);

const _values_OcaPortMode = {
  Input: 1,
  Output: 2,
};

/**
 * Enum that describes whether a port is for input or output.
 * @category Types
 * @class OcaPortMode
 * @extends Enum8
 */
export const OcaPortMode = make_enum(Enum8, "OcaPortMode", _values_OcaPortMode);

/**
 * Unique identifier of input or output port within a given worker or
 * block class. Port numbers are ordinals starting at 1, and there are
 * separate numbering spaces for input and output ports.
 * @category Types
 * @class OcaPortID
 * @extends Base
 */
export const OcaPortID = make_struct(
  "OcaPortID",
  [ "Mode", "Index" ],
  [ OcaPortMode, UINT16 ]
);

const _values_OcaMediaStreamCastMode = {
  None: 0,
  Unicast: 1,
  Multicast: 2,
};

/**
 * Type of media endpoint: unicast or multicast.
 * @category Types
 * @class OcaMediaStreamCastMode
 * @extends Enum8
 */
export const OcaMediaStreamCastMode = make_enum(Enum8, "OcaMediaStreamCastMode", _values_OcaMediaStreamCastMode);

/**
 * A single-channel or multichannel connection between a local media
 * connector (i.e. <b>OcaMedia(Source/Sink)Connector </b>instance) of an
 * <b>OcaMediaTransportNetwork </b>object in this node and another
 * ("remote") media source or sink. Normally, the remote source or sink
 * is in another node. The remote end may or may not be an OCA-compliant
 * device. A connection is unidirectional. Its direction is determined by
 * the connector that owns the connection. Its direction is either: <ul>
 * <li><i>Outbound: </i>A signal flow from a <b>source </b>connector to
 * an external destination; or</li> <li><i>Inbound: </i>A signal flow
 * from an external source to a <b>sink </b>connector.</li> </ul> An
 * <b>OcaMediaConnection </b>object may represent a connection to either
 * a unicast or a multicast stream. Any given
 * <b>OcaMedia(Source/Sink)Connector </b>object will only have one media
 * connection. In non-OCA documents, connections are sometimes referred
 * to as <i>streams</i> or <i>flows.</i>
 * @category Types
 * @class OcaMediaConnection
 * @extends Base
 */
export const OcaMediaConnection = make_struct(
  "OcaMediaConnection",
  [ "Secure", "StreamParameters", "StreamCastMode", "StreamChannelCount" ],
  [ BOOLEAN, BLOB, OcaMediaStreamCastMode, UINT16 ]
);

/**
 * Codec ID + Coding parameters
 * @category Types
 * @class OcaMediaCoding
 * @extends Base
 */
export const OcaMediaCoding = make_struct(
  "OcaMediaCoding",
  [ "CodingSchemeID", "CodecParameters", "ClockONo" ],
  [ UINT16, STRING, UINT32 ]
);

/**
 * Media source (i.e. output) connector. Connects to an outbound stream.
 * Collected by <b>OcaMediaTransportNetwork</b>.
 * @category Types
 * @class OcaMediaSourceConnector
 * @extends Base
 */
export const OcaMediaSourceConnector = make_struct(
  "OcaMediaSourceConnector",
  [ "IDInternal", "IDExternal", "Connection", "AvailableCodings", "PinCount", "ChannelPinMap", "AlignmentLevel", "CurrentCoding" ],
  [ UINT16, STRING, OcaMediaConnection, LIST(OcaMediaCoding), UINT16, MAP(UINT16, OcaPortID), FLOAT32, OcaMediaCoding ]
);

/**
 * This was not documented in the OCA standard.
 * @category Types
 * @class OcaMediaSourceConnectorChangedEventData
 * @extends Base
 */
export const OcaMediaSourceConnectorChangedEventData = make_struct(
  "OcaMediaSourceConnectorChangedEventData",
  [ "Event", "SourceConnector", "ChangeType", "ChangedElement" ],
  [ OcaEvent, OcaMediaSourceConnector, OcaPropertyChangeType, OcaMediaConnectorElement ]
);

/**
 * Media sink (i.e. input) connector. Connects to an inbound stream.
 * Collected by <b>OcaMediaTransportNetwork</b>.
 * @category Types
 * @class OcaMediaSinkConnector
 * @extends Base
 */
export const OcaMediaSinkConnector = make_struct(
  "OcaMediaSinkConnector",
  [ "IDInternal", "IDExternal", "Connection", "AvailableCodings", "PinCount", "ChannelPinMap", "AlignmentLevel", "AlignmentGain", "CurrentCoding" ],
  [ UINT16, STRING, OcaMediaConnection, LIST(OcaMediaCoding), UINT16, OcaMultiMap(UINT16, OcaPortID), FLOAT32, FLOAT32, OcaMediaCoding ]
);

/**
 * This was not documented in the OCA standard.
 * @category Types
 * @class OcaMediaSinkConnectorChangedEventData
 * @extends Base
 */
export const OcaMediaSinkConnectorChangedEventData = make_struct(
  "OcaMediaSinkConnectorChangedEventData",
  [ "Event", "SinkConnector", "ChangeType", "ChangedElement" ],
  [ OcaEvent, OcaMediaSinkConnector, OcaPropertyChangeType, OcaMediaConnectorElement ]
);

/**
 * Event data for events returning object lists, for example the
 * <b>SynchronizeState</b> event defined in
 * <b>OcaSubscriptionManager.</b>
 * @category Types
 * @class OcaObjectListEventData
 * @extends Base
 */
export const OcaObjectListEventData = make_struct(
  "OcaObjectListEventData",
  [ "Event", "objectList" ],
  [ OcaEvent, LIST(UINT32) ]
);

/**
 * Event data for event <b>OcaNumericObserver.Observation</b>. Note: due
 * to an error in AES70-2015, this class was not made a subclass of
 * <b>OcaEventData</b>. Therefore, this class explicitly defines the
 * <b>Event</b> property explicitly, rather than inheriting it from
 * <b>OcaEventData, </b>as other event data classes do. However, the
 * effect is the same as for all event data classes: the first property
 * in the data structure is an <b>OcaEvent </b>value.
 * @category Types
 * @class OcaObservationEventData
 * @extends Base
 */
export const OcaObservationEventData = make_struct(
  "OcaObservationEventData",
  [ "Event", "Reading" ],
  [ OcaEvent, FLOAT64 ]
);

/**
 * Event data for event <b>OcaNumericObserverList.Observation</b>. Note:
 * due to an error in AES70-2015, this class was not made a subclass of
 * <b>OcaEventData</b>. Therefore, this class explicitly defines the
 * <b>Event</b> property explicitly, rather than inheriting it from
 * <b>OcaEventData, </b>as other event data classes do. However, the
 * effect is the same as for all event data classes: the first property
 * in the data structure is an <b>OcaEvent </b>value.
 * @category Types
 * @class OcaObservationListEventData
 * @extends Base
 */
export const OcaObservationListEventData = make_struct(
  "OcaObservationListEventData",
  [ "Event", "Reading" ],
  [ OcaEvent, LIST(FLOAT64) ]
);

const _values_OcaGrouperStatusChangeType = {
  citizenAdded: 1,
  citizenDeleted: 2,
  citizenConnectionLost: 3,
  citizenConnectionReEstablished: 4,
  citizenError: 5,
  enrollment: 6,
  unEnrollment: 7,
};

/**
 * Enum describing status change types, as used in <b>OcaGrouper's
 * StatusChange </b>event.
 * @category Types
 * @class OcaGrouperStatusChangeType
 * @extends Enum8
 */
export const OcaGrouperStatusChangeType = make_enum(Enum8, "OcaGrouperStatusChangeType", _values_OcaGrouperStatusChangeType);

/**
 * Class that defines the event data parameter for the <b>StatusChange
 * </b>event defined in <b>OcaGrouper</b>.
 * @category Types
 * @class OcaGrouperStatusChangeEventData
 * @extends Base
 */
export const OcaGrouperStatusChangeEventData = make_struct(
  "OcaGrouperStatusChangeEventData",
  [ "Event", "groupIndex", "citizenIndex", "changeType" ],
  [ OcaEvent, UINT16, UINT16, OcaGrouperStatusChangeType ]
);

const _values_OcaNotificationDeliveryMode = {
  Reliable: 1,
  Fast: 2,
};

/**
 * Enum for subscriptions that specifies whether its notification
 * messages are to be delivered by reliable means (e.g. TCP) or fast
 * means (e.g. UDP).
 * @category Types
 * @class OcaNotificationDeliveryMode
 * @extends Enum8
 */
export const OcaNotificationDeliveryMode = make_enum(Enum8, "OcaNotificationDeliveryMode", _values_OcaNotificationDeliveryMode);

const _values_OcaSubscriptionManagerState = {
  Normal: 1,
  EventsDisabled: 2,
};

/**
 * Enum describing <b>OcaSubscriptionManager</b> states.
 * @category Types
 * @class OcaSubscriptionManagerState
 * @extends Enum8
 */
export const OcaSubscriptionManagerState = make_enum(Enum8, "OcaSubscriptionManagerState", _values_OcaSubscriptionManagerState);

/**
 * An absolute level expressed in dB above the given absolute reference
 * level.
 * @category Types
 * @class OcaDBr
 * @extends Base
 */
export const OcaDBr = make_struct(
  "OcaDBr",
  [ "Value", "Ref" ],
  [ FLOAT32, FLOAT32 ]
);

/**
 * Complex impedance. Expressed as a magnitude and phase.
 * @category Types
 * @class OcaImpedance
 * @extends Base
 */
export const OcaImpedance = make_struct(
  "OcaImpedance",
  [ "Magnitude", "Phase" ],
  [ FLOAT32, FLOAT32 ]
);

const _values_OcaMuteState = {
  Muted: 1,
  Unmuted: 2,
};

/**
 * Mute states
 * @category Types
 * @class OcaMuteState
 * @extends Enum8
 */
export const OcaMuteState = make_enum(Enum8, "OcaMuteState", _values_OcaMuteState);

const _values_OcaPolarityState = {
  NonInverted: 1,
  Inverted: 2,
};

/**
 * Polarity states
 * @category Types
 * @class OcaPolarityState
 * @extends Enum8
 */
export const OcaPolarityState = make_enum(Enum8, "OcaPolarityState", _values_OcaPolarityState);

const _values_OcaDelayUnit = {
  Time: 1,
  Distance: 2,
  Samples: 3,
  Microseconds: 4,
  Milliseconds: 5,
  Centimeters: 6,
  Inches: 7,
  Feet: 8,
};

/**
 * Enumeration of types of delay units that are available in OCA.
 * @category Types
 * @class OcaDelayUnit
 * @extends Enum8
 */
export const OcaDelayUnit = make_enum(Enum8, "OcaDelayUnit", _values_OcaDelayUnit);

/**
 * Multifield descriptor that defines a delay value element.
 * @category Types
 * @class OcaDelayValue
 * @extends Base
 */
export const OcaDelayValue = make_struct(
  "OcaDelayValue",
  [ "DelayValue", "DelayUnit" ],
  [ FLOAT32, OcaDelayUnit ]
);

/**
 * A complex (i.e. magnitude + phase) transfer function.
 * @category Types
 * @class OcaTransferFunction
 * @extends Base
 */
export const OcaTransferFunction = make_struct(
  "OcaTransferFunction",
  [ "Frequency", "Amplitude", "Phase" ],
  [ LIST(FLOAT32), LIST(FLOAT32), LIST(FLOAT32) ]
);

const _values_OcaClassicalFilterShape = {
  Butterworth: 1,
  Bessel: 2,
  Chebyshev: 3,
  LinkwitzRiley: 4,
};

/**
 * Enumeration of classicalr filter types that can be used by OCA
 * objects.
 * @category Types
 * @class OcaClassicalFilterShape
 * @extends Enum8
 */
export const OcaClassicalFilterShape = make_enum(Enum8, "OcaClassicalFilterShape", _values_OcaClassicalFilterShape);

const _values_OcaFilterPassband = {
  HiPass: 1,
  LowPass: 2,
  BandPass: 3,
  BandReject: 4,
  AllPass: 5,
};

/**
 * Enumeration of passband types that can be used by OCA objects.
 * @category Types
 * @class OcaFilterPassband
 * @extends Enum8
 */
export const OcaFilterPassband = make_enum(Enum8, "OcaFilterPassband", _values_OcaFilterPassband);

const _values_OcaParametricEQShape = {
  None: 0,
  PEQ: 1,
  LowShelv: 2,
  HighShelv: 3,
  LowPass: 4,
  HighPass: 5,
  BandPass: 6,
  AllPass: 7,
  Notch: 8,
  ToneControlLowFixed: 9,
  ToneControlLowSliding: 10,
  ToneControlHighFixed: 11,
  ToneControlHighSliding: 12,
};

/**
 * Enumeration of curve shapes used by OcaFilterParametric.
 * @category Types
 * @class OcaParametricEQShape
 * @extends Enum8
 */
export const OcaParametricEQShape = make_enum(Enum8, "OcaParametricEQShape", _values_OcaParametricEQShape);

const _values_OcaDynamicsFunction = {
  None: 0,
  Compress: 1,
  Limit: 2,
  Expand: 3,
  Gate: 4,
};

/**
 * Enumeration of the types of dynamics functions available from class
 * OcaDynamics.
 * @category Types
 * @class OcaDynamicsFunction
 * @extends Enum8
 */
export const OcaDynamicsFunction = make_enum(Enum8, "OcaDynamicsFunction", _values_OcaDynamicsFunction);

/**
 * Multifield descriptor for a pilot tone detector element.
 * @category Types
 * @class OcaPilotToneDetectorSpec
 * @extends Base
 */
export const OcaPilotToneDetectorSpec = make_struct(
  "OcaPilotToneDetectorSpec",
  [ "Threshold", "Frequency", "PollInterval" ],
  [ OcaDBr, FLOAT32, UINT32 ]
);

const _values_OcaWaveformType = {
  None: 0,
  DC: 1,
  Sine: 2,
  Square: 3,
  Impulse: 4,
  NoisePink: 5,
  NoiseWhite: 6,
  PolarityTest: 7,
};

/**
 * Enumeration of waveform types that can be used by OCA objects.
 * @category Types
 * @class OcaWaveformType
 * @extends Enum8
 */
export const OcaWaveformType = make_enum(Enum8, "OcaWaveformType", _values_OcaWaveformType);

const _values_OcaSweepType = {
  Linear: 1,
  Logarithmic: 2,
  None: 0,
};

/**
 * Enumeration of waveform types that can be used by OCA objects.
 * @category Types
 * @class OcaSweepType
 * @extends Enum8
 */
export const OcaSweepType = make_enum(Enum8, "OcaSweepType", _values_OcaSweepType);

const _values_OcaUnitOfMeasure = {
  Ampere: 4,
  DegreeCelsius: 2,
  Hertz: 1,
  None: 0,
  Ohm: 5,
  Volt: 3,
};

/**
 * Enumeration of units of measure that can be used in OCA classes. Only
 * SI (base or derived) units are specified, so that internal
 * calculations will not need to convert. If conversion is needed it
 * should only be done in user interfaces. The datatype of a reading
 * expressed in one of these units of measure is FLOAT.
 * @category Types
 * @class OcaUnitOfMeasure
 * @extends Enum8
 */
export const OcaUnitOfMeasure = make_enum(Enum8, "OcaUnitOfMeasure", _values_OcaUnitOfMeasure);

const _values_OcaPresentationUnit = {
  dBu: 0,
  dBV: 1,
  V: 2,
};

/**
 * Enumeration of presentation units that can be used in OCA classes.
 * Property values of OCA objects are always in SI units (unless
 * explicitly documented otherwise), but the presentation unit can also
 * be stored to indicate in which unit the value was presented in a user
 * interface. This way another controller can also present it in that
 * unit (i.e. doing a conversion on the controller before presenting it)
 * to keep the user presentation uniform. Note that the presentation unit
 * may be equal to the unit of the property (in which case of course no
 * conversion is needed).
 * @category Types
 * @class OcaPresentationUnit
 * @extends Enum8
 */
export const OcaPresentationUnit = make_enum(Enum8, "OcaPresentationUnit", _values_OcaPresentationUnit);

const _values_OcaLevelDetectionLaw = {
  None: 0,
  RMS: 1,
  Peak: 2,
};

/**
 * Enumeration of the types of level detector characteristics. Used in
 * dynamics classes and for sensors.
 * @category Types
 * @class OcaLevelDetectionLaw
 * @extends Enum8
 */
export const OcaLevelDetectionLaw = make_enum(Enum8, "OcaLevelDetectionLaw", _values_OcaLevelDetectionLaw);

const _values_OcaSensorReadingState = {
  Unknown: 0,
  Valid: 1,
  Underrange: 2,
  Overrange: 3,
  Error: 4,
};

/**
 * Enum that describes whether an <b>OcaSensor</b>'s current reading
 * value can be trusted, and if not, why not.
 * @category Types
 * @class OcaSensorReadingState
 * @extends Enum8
 */
export const OcaSensorReadingState = make_enum(Enum8, "OcaSensorReadingState", _values_OcaSensorReadingState);

const _values_OcaLevelMeterLaw = {
  VU: 1,
  StandardVU: 2,
  PPM1: 3,
  PPM2: 4,
  LKFS: 5,
  RMS: 6,
  Peak: 7,
  ProprietaryValueBase: 128,
};

/**
 * Enumeration of level meter laws.
 * @category Types
 * @class OcaLevelMeterLaw
 * @extends Enum8
 */
export const OcaLevelMeterLaw = make_enum(Enum8, "OcaLevelMeterLaw", _values_OcaLevelMeterLaw);

/**
 * Describes an object that is a member of a block.
 * @category Types
 * @class OcaBlockMember
 * @extends Base
 */
export const OcaBlockMember = make_struct(
  "OcaBlockMember",
  [ "MemberObjectIdentification", "ContainerObjectNumber" ],
  [ OcaObjectIdentification, UINT32 ]
);

/**
 * Representation of an OCA (input or output) port that is used in the
 * signal path representation of an OCA device.
 * @category Types
 * @class OcaPort
 * @extends Base
 */
export const OcaPort = make_struct(
  "OcaPort",
  [ "Owner", "ID", "Name" ],
  [ UINT32, OcaPortID, STRING ]
);

/**
 * Signal path between two object ports in the same device.
 * @category Types
 * @class OcaSignalPath
 * @extends Base
 */
export const OcaSignalPath = make_struct(
  "OcaSignalPath",
  [ "SourcePort", "SinkPort" ],
  [ OcaPort, OcaPort ]
);

/**
 * Prototype object identification. Composite of prototype object number
 * and prototype object's class identification. Used in
 * <b>OcaBlockFactory</b>.
 * @category Types
 * @class OcaProtoObjectIdentification
 * @extends Base
 */
export const OcaProtoObjectIdentification = make_struct(
  "OcaProtoObjectIdentification",
  [ "POno", "ClassIdentification" ],
  [ UINT32, OcaClassIdentification ]
);

/**
 * Unique identifier of prototype input or output port within a block
 * factory. Prototype port numbers are ordinals starting at 1, and there
 * are separate numbering spaces for input and output ports.
 * @category Types
 * @class OcaProtoPortID
 * @extends Base
 */
export const OcaProtoPortID = make_struct(
  "OcaProtoPortID",
  [ "Mode", "Index" ],
  [ OcaPortMode, UINT16 ]
);

/**
 * Representation of an OCA (input or output) proto-port that is used in
 * the proto-signal path representation of an OCA device.
 * @category Types
 * @class OcaProtoPort
 * @extends Base
 */
export const OcaProtoPort = make_struct(
  "OcaProtoPort",
  [ "Owner", "ProtoID", "Name" ],
  [ UINT32, OcaProtoPortID, STRING ]
);

/**
 * Proto-signal path between two proto-member ports in a factory.
 * @category Types
 * @class OcaProtoSignalPath
 * @extends Base
 */
export const OcaProtoSignalPath = make_struct(
  "OcaProtoSignalPath",
  [ "SourceProtoPort", "SinkProtoPort" ],
  [ OcaProtoPort, OcaProtoPort ]
);

/**
 * Result of object search via the Find...() methods of <b>OcaBlock</b>.
 * Dynamic format, form used depends on type of search and options. The
 * FieldMap parameter of the Find...() methods specifies which optional
 * fields should be returned as nonnull.
 * @category Types
 * @class OcaObjectSearchResult
 * @extends Base
 */
export const OcaObjectSearchResult = make_struct(
  "OcaObjectSearchResult",
  [ "ONo", "ClassIdentification", "ContainerPath", "Role", "Label" ],
  [ UINT32, OcaClassIdentification, LIST(UINT32), STRING, STRING ]
);


/**
 * Bitset that describes the contents of an <b>OcaSearchResult</b>
 * @category Types
 * @class OcaObjectSearchResultFlags
 * @extends Base
 */
export const OcaObjectSearchResultFlags = make_bitset(16, "OcaObjectSearchResultFlags", [
"ONo", "ClassIdentification", "ContainerPath", "Role", "Label", "unused" ]);

/**
 * Describes a group in a grouper.
 * @category Types
 * @class OcaGrouperGroup
 * @extends Base
 */
export const OcaGrouperGroup = make_struct(
  "OcaGrouperGroup",
  [ "Index", "Name", "ProxyONo" ],
  [ UINT16, STRING, UINT32 ]
);

/**
 * Describes a citizen of a grouper. Refers to a specific worker object
 * somewhere in the media network.
 * @category Types
 * @class OcaGrouperCitizen
 * @extends Base
 */
export const OcaGrouperCitizen = make_struct(
  "OcaGrouperCitizen",
  [ "Index", "ObjectPath", "Online" ],
  [ UINT16, OcaOPath, BOOLEAN ]
);

/**
 * Describes the enrollment of a citizen into a group.
 * @category Types
 * @class OcaGrouperEnrollment
 * @extends Base
 */
export const OcaGrouperEnrollment = make_struct(
  "OcaGrouperEnrollment",
  [ "GroupIndex", "CitizenIndex" ],
  [ UINT16, UINT16 ]
);

const _values_OcaGrouperMode = {
  MasterSlave: 1,
  PeerToPeer: 2,
};

/**
 * Select mode of <b>OcaGrouper</b>: master-slave or peer-to-peer
 * @category Types
 * @class OcaGrouperMode
 * @extends Enum8
 */
export const OcaGrouperMode = make_enum(Enum8, "OcaGrouperMode", _values_OcaGrouperMode);

const _values_OcaObserverState = {
  NotTriggered: 0,
  Triggered: 1,
};

/**
 * Interpolation law for ramper to use.
 * @category Types
 * @class OcaObserverState
 * @extends Enum8
 */
export const OcaObserverState = make_enum(Enum8, "OcaObserverState", _values_OcaObserverState);

const _values_OcaRelationalOperator = {
  None: 0,
  Equality: 1,
  Inequality: 2,
  GreaterThan: 3,
  GreaterThanOrEqual: 4,
  LessThan: 5,
  LessThanOrEqual: 6,
};

/**
 * Enumeration of relational operators that can be used in OCA classes.
 * @category Types
 * @class OcaRelationalOperator
 * @extends Enum8
 */
export const OcaRelationalOperator = make_enum(Enum8, "OcaRelationalOperator", _values_OcaRelationalOperator);

const _values_OcaPowerSupplyType = {
  None: 0,
  Mains: 1,
  Battery: 2,
  Phantom: 3,
  Solar: 4,
};

/**
 * Type of power supply.
 * @category Types
 * @class OcaPowerSupplyType
 * @extends Enum8
 */
export const OcaPowerSupplyType = make_enum(Enum8, "OcaPowerSupplyType", _values_OcaPowerSupplyType);

const _values_OcaPowerSupplyLocation = {
  Unspecified: 1,
  Internal: 2,
  External: 3,
};

/**
 * Physical location of a device power supply.
 * @category Types
 * @class OcaPowerSupplyLocation
 * @extends Enum8
 */
export const OcaPowerSupplyLocation = make_enum(Enum8, "OcaPowerSupplyLocation", _values_OcaPowerSupplyLocation);

const _values_OcaPowerSupplyState = {
  Off: 0,
  Unavailable: 1,
  Available: 2,
  Active: 3,
};

/**
 * Status of a device power supply.
 * @category Types
 * @class OcaPowerSupplyState
 * @extends Enum8
 */
export const OcaPowerSupplyState = make_enum(Enum8, "OcaPowerSupplyState", _values_OcaPowerSupplyState);

const _values_OcaRamperCommand = {
  Enable: 1,
  Start: 2,
  Halt: 3,
};

/**
 * Command repertoire of OcaRamper's <b>Control </b>method.
 * @category Types
 * @class OcaRamperCommand
 * @extends Enum8
 */
export const OcaRamperCommand = make_enum(Enum8, "OcaRamperCommand", _values_OcaRamperCommand);

const _values_OcaRamperState = {
  NotInitialized: 1,
  Iniitialized: 2,
  Scheduled: 3,
  Enabled: 4,
  Ramping: 5,
};

/**
 * States of the ramper. Here are the rules for ramper state change: <ul>
 * <li>A freshly-constructed ramper's state is <b>NotInitialized</b>.
 * </li> </ul> <ul> <li>A ramper becomes <b>Initialized</b> when : The
 * ramper is <b>NotInitialized</b>; AND <b> TargetProperty</b> has been
 * set to a valid value; AND <b> Goal</b> has been set; AND <b>
 * Duration</b> has been set. </li> </ul> <ul> <li>A ramper becomes
 * <b>Scheduled</b> when It is <b>Initialized</b>; AND
 * <b>T</b><b><sub>start</sub></b> and <b>TimeMode</b> have been set; AND
 * (T<sub>start</sub> + <b>Duration</b>) is in the future. </li> </ul>
 * <ul> <li>A ramper becomes <b>Enabled</b> when it is <b>Scheduled</b>
 * AND receives an <i>Enable </i>command. </li> </ul> <ul> <li>A ramper
 * becomes <b>Ramping</b> when: It is <b>Enabled</b> and the ramp start
 * time is reached; OR It is <b>Initialized</b>, <b>Scheduled</b>, or
 * <b>Enabled</b> and a <i>Start</i> command is received. </li> </ul>
 * <ul> <li>Completion of a ramp or Receipt of a <i>Halt</i> command
 * causes the state to become: <b>Scheduled</b>, if T<sub>start</sub>,
 * Time Mode have been set; AND (T<sub>start</sub> + Duration) is in the
 * future. Otherwise, <b>Initialized.</b></li> </ul>
 * @category Types
 * @class OcaRamperState
 * @extends Enum8
 */
export const OcaRamperState = make_enum(Enum8, "OcaRamperState", _values_OcaRamperState);

const _values_OcaTimeMode = {
  Absolute: 1,
  Relative: 2,
};

/**
 * Time mode of <b>OcaTask </b>agent.
 * @category Types
 * @class OcaTimeMode
 * @extends Enum8
 */
export const OcaTimeMode = make_enum(Enum8, "OcaTimeMode", _values_OcaTimeMode);

/**
 * An absolute or relative PTP time. Format is standard PTP format: - 48
 * bit integer seconds - 32 bit integer nanoseconds PLUS a boolean sign
 * (positive=TRUE) field. Absolute times are always positive. Relative
 * times may be positive or negative.
 * @category Types
 * @class OcaTimePTP
 * @extends Base
 */
export const OcaTimePTP = make_struct(
  "OcaTimePTP",
  [ "Negative", "Seconds", "Nanoseconds" ],
  [ BOOLEAN, UINT64, UINT32 ]
);

/**
 * <font color="#223274">An execution thread that runs an AES70 Program.
 * Programs are OcaLibrary volumes that contain application-specific
 * execution instructions.</font>
 * @category Types
 * @class OcaTask
 * @extends Base
 */
export const OcaTask = make_struct(
  "OcaTask",
  [ "ID", "Label", "ProgramID", "GroupID", "TimeMode", "TimeSourceONo", "StartTime", "Duration", "ApplicationSpecificParameters" ],
  [ UINT32, STRING, OcaLibVolIdentifier, UINT16, OcaTimeMode, UINT32, OcaTimePTP, OcaTimePTP, BLOB ]
);

const _values_OcaTaskCommand = {
  None: 0,
  Prepare: 1,
  Enable: 2,
  Start: 3,
  Stop: 4,
  Abort: 5,
  Disable: 6,
  Clear: 7,
};

/**
 * Commands controllers can send to OcaTasks to change their states
 * @category Types
 * @class OcaTaskCommand
 * @extends Enum8
 */
export const OcaTaskCommand = make_enum(Enum8, "OcaTaskCommand", _values_OcaTaskCommand);

const _values_OcaTaskManagerState = {
  None: 0,
  Enabled: 1,
  Disabled: 2,
};

/**
 * States of <b>OcaTaskManager </b>object. These states represent the
 * overall state of task processing in the device. <ul> <li>Device task
 * processing state is <b>Enabled </b>by default. In <b>Enabled
 * </b>state, tasks may be running.</li> </ul> <ul> <li>Device task
 * processing state may be <b>Disabled </b>by the <b>OcaTaskManager
 * Disable </b>command. </li> <li>The <b>Disable </b>command will succeed
 * only if no tasks are running. </li> </ul> Tasks may be stopped by:
 * <ul> <li>passing the <b>OcaTaskManager </b>a <b>Stop </b>or <b>Abort
 * </b>command, which will stop all tasks in the device; or</li>
 * <li>passing a <b>Stop </b>or <b>Abort </b>command to each
 * <b>OcaTaskGroup </b>agent, which will stop all the tasks in the given
 * task groups; or </li> <li>passing a <b>Stop </b>or <b>Abort
 * </b>command to each task individually.</li> </ul>
 * @category Types
 * @class OcaTaskManagerState
 * @extends Enum8
 */
export const OcaTaskManagerState = make_enum(Enum8, "OcaTaskManagerState", _values_OcaTaskManagerState);

const _values_OcaRamperInterpolationLaw = {
  Linear: 1,
  ReverseLinear: 2,
  Sine: 3,
  Exponential: 4,
};

/**
 * Interpolation law for ramper to use.
 * @category Types
 * @class OcaRamperInterpolationLaw
 * @extends Enum8
 */
export const OcaRamperInterpolationLaw = make_enum(Enum8, "OcaRamperInterpolationLaw", _values_OcaRamperInterpolationLaw);

const _values_OcaLibVolStandardTypeID = {
  None: 0,
  ParamSet: 1,
  Patch: 2,
  Program: 3,
};

/**
 * Enum that describes type of data in a standard library volume.
 * @category Types
 * @class OcaLibVolStandardTypeID
 * @extends Enum8
 */
export const OcaLibVolStandardTypeID = make_enum(Enum8, "OcaLibVolStandardTypeID", _values_OcaLibVolStandardTypeID);

/**
 * Globally unique identifier of a library type.
 * @category Types
 * @class OcaLibVolType
 * @extends Base
 */
export const OcaLibVolType = make_struct(
  "OcaLibVolType",
  [ "Authority", "ID" ],
  [ BLOBFIXED(3), UINT32 ]
);

/**
 * Full identifier (type + object number) of Library (i.e. of an
 * <b>OcaLibrary </b>instance)
 * @category Types
 * @class OcaLibraryIdentifier
 * @extends Base
 */
export const OcaLibraryIdentifier = make_struct(
  "OcaLibraryIdentifier",
  [ "Type", "ONo" ],
  [ OcaLibVolType, UINT32 ]
);

const _values_OcaLibAccess = {
  None: 0,
  ReadOnly: 1,
  ReadExpand: 2,
  Full: 3,
};

/**
 * Library volume access modes
 * @category Types
 * @class OcaLibAccess
 * @extends Enum8
 */
export const OcaLibAccess = make_enum(Enum8, "OcaLibAccess", _values_OcaLibAccess);

/**
 * Descriptor of a library volume. See <b>03 OcaLibrary</b> for
 * explanation.
 * @category Types
 * @class OcaLibVolMetadata
 * @extends Base
 */
export const OcaLibVolMetadata = make_struct(
  "OcaLibVolMetadata",
  [ "Name", "VolType", "Access", "Version", "Creator", "UpDate" ],
  [ STRING, OcaLibVolType, OcaLibAccess, UINT32, STRING, OcaTimePTP ]
);

/**
 * Library volume. template. Template parameter is datatype of the
 * volume. See <b>03 OcaLibrary</b> for explanation.
 * @category Types
 * @class OcaLibVol
 * @extends Base
 */
export const OcaLibVol = make_struct(
  "OcaLibVol",
  [ "Metadata", "Data" ],
  [ OcaLibVolMetadata, BLOB ]
);

/**
 * Library volume data for a Parset (short for Parameter Set) volume. A
 * Parset is a collection of operating parameter settings that can be
 * applied to a block. Each Parset is associated with a specific block
 * type, but not with a specific instance of that type. A Parset may be
 * applied to any block instance of the associated type. A block's type
 * is a the object number of its factory or, for factory-defined blocks,
 * a unique identifier set at time of manufacture.
 * @category Types
 * @class OcaLibVolData_ParamSet
 * @extends Base
 */
export const OcaLibVolData_ParamSet = make_struct(
  "OcaLibVolData_ParamSet",
  [ "TargetBlockType", "ParData" ],
  [ UINT32, BLOB ]
);

/**
 * A ParamSet assigment is the description of a binding of a ParamSet to
 * a block instance.
 * @category Types
 * @class OcaLibParamSetAssignment
 * @extends Base
 */
export const OcaLibParamSetAssignment = make_struct(
  "OcaLibParamSetAssignment",
  [ "ParamSetIdentifier", "TargetBlockONo" ],
  [ OcaLibVolIdentifier, UINT32 ]
);

const _values_OcaNetworkLinkType = {
  None: 0,
  EthernetWired: 1,
  EthernetWireless: 2,
  USB: 3,
  SerialP2P: 4,
};

/**
 * Types of layer 2 networks.
 * @category Types
 * @class OcaNetworkLinkType
 * @extends Enum8
 */
export const OcaNetworkLinkType = make_enum(Enum8, "OcaNetworkLinkType", _values_OcaNetworkLinkType);

/**
 * Descriptor of a system interface used by a network. Format is data
 * network type dependent.
 * @category Types
 * @class OcaNetworkSystemInterfaceDescriptor
 * @extends Base
 */
export const OcaNetworkSystemInterfaceDescriptor = make_struct(
  "OcaNetworkSystemInterfaceDescriptor",
  [ "SystemInterfaceParameters", "MyNetworkAddress" ],
  [ BLOB, BLOB ]
);

const _values_OcaApplicationNetworkState = {
  Unknown: 0,
  NotReady: 1,
  Readying: 2,
  Ready: 3,
  Running: 4,
  Paused: 5,
  Stopping: 6,
  Stopped: 7,
  Fault: 8,
};

/**
 * Network states.
 * @category Types
 * @class OcaApplicationNetworkState
 * @extends Enum8
 */
export const OcaApplicationNetworkState = make_enum(Enum8, "OcaApplicationNetworkState", _values_OcaApplicationNetworkState);

const _values_OcaApplicationNetworkCommand = {
  None: 0,
  Prepare: 1,
  Start: 2,
  Pause: 3,
  Stop: 4,
  Reset: 5,
};

/**
 * Command values for OcaMediaNetwork.Control().
 * @category Types
 * @class OcaApplicationNetworkCommand
 * @extends Enum8
 */
export const OcaApplicationNetworkCommand = make_enum(Enum8, "OcaApplicationNetworkCommand", _values_OcaApplicationNetworkCommand);

const _values_OcaNetworkMediaProtocol = {
  None: 0,
  AV3: 1,
  AVBTP: 2,
  Dante: 3,
  Cobranet: 4,
  AES67: 5,
  SMPTEAudio: 6,
  LiveWire: 7,
  ExtensionPoint: 65,
};

/**
 * Media transport protocols available.
 * @category Types
 * @class OcaNetworkMediaProtocol
 * @extends Enum8
 */
export const OcaNetworkMediaProtocol = make_enum(Enum8, "OcaNetworkMediaProtocol", _values_OcaNetworkMediaProtocol);

const _values_OcaNetworkControlProtocol = {
  None: 0,
  OCP01: 1,
  OCP02: 2,
  OCP03: 3,
};

/**
 * Network control protocols available.
 * @category Types
 * @class OcaNetworkControlProtocol
 * @extends Enum8
 */
export const OcaNetworkControlProtocol = make_enum(Enum8, "OcaNetworkControlProtocol", _values_OcaNetworkControlProtocol);

const _values_OcaMediaConnectorCommand = {
  None: 0,
  Start: 1,
  Pause: 2,
};

/**
 * Command values for OcaMediaNetwork.ControlConnector(...)
 * @category Types
 * @class OcaMediaConnectorCommand
 * @extends Enum8
 */
export const OcaMediaConnectorCommand = make_enum(Enum8, "OcaMediaConnectorCommand", _values_OcaMediaConnectorCommand);

const _values_OcaMediaClockAvailability = {
  Unavailable: 0,
  Available: 1,
};

/**
 * Lock states of media clocks.
 * @category Types
 * @class OcaMediaClockAvailability
 * @extends Enum8
 */
export const OcaMediaClockAvailability = make_enum(Enum8, "OcaMediaClockAvailability", _values_OcaMediaClockAvailability);

/**
 * Media clock nominal rate and associated parameters.
 * @category Types
 * @class OcaMediaClockRate
 * @extends Base
 */
export const OcaMediaClockRate = make_struct(
  "OcaMediaClockRate",
  [ "NominalRate", "PullRange", "Accuracy", "JitterMax" ],
  [ FLOAT32, FLOAT32, FLOAT32, FLOAT32 ]
);

const _values_OcaTimeReferenceType = {
  Undefined: 0,
  Local: 1,
  Private: 2,
  GPS: 3,
  Galileo: 4,
  GLONASS: 5,
};

/**
 * Types of time references.
 * @category Types
 * @class OcaTimeReferenceType
 * @extends Enum8
 */
export const OcaTimeReferenceType = make_enum(Enum8, "OcaTimeReferenceType", _values_OcaTimeReferenceType);

const _values_OcaTimeProtocol = {
  Undefined: 0,
  None: 1,
  Private: 2,
  NTP: 3,
  SNTP: 4,
  IEEE1588_2002: 5,
  IEEE1588_2008: 6,
  IEEE_AVB: 7,
  AES11: 8,
  Genlock: 9,
};

/**
 * Types of time sources. See RFC7273 particularly sections 4.4-4.8 .
 * @category Types
 * @class OcaTimeProtocol
 * @extends Enum8
 */
export const OcaTimeProtocol = make_enum(Enum8, "OcaTimeProtocol", _values_OcaTimeProtocol);

const _values_OcaTimeSourceAvailability = {
  Unavailable: 0,
  Available: 1,
};

/**
 * States of time sources
 * @category Types
 * @class OcaTimeSourceAvailability
 * @extends Enum8
 */
export const OcaTimeSourceAvailability = make_enum(Enum8, "OcaTimeSourceAvailability", _values_OcaTimeSourceAvailability);

const _values_OcaTimeSourceSyncStatus = {
  Undefined: 0,
  Unsynchronized: 1,
  Synchronizing: 2,
  Synchronized: 3,
};

/**
 * Synchronization statuses.
 * @category Types
 * @class OcaTimeSourceSyncStatus
 * @extends Enum8
 */
export const OcaTimeSourceSyncStatus = make_enum(Enum8, "OcaTimeSourceSyncStatus", _values_OcaTimeSourceSyncStatus);

/**
 * ID of a system interface used by a network. Format is data network
 * type dependent.
 * @category Types
 * @class OcaNetworkSystemInterfaceID
 * @extends Base
 */
export const OcaNetworkSystemInterfaceID = make_struct(
  "OcaNetworkSystemInterfaceID",
  [ "SystemInterfaceHandle", "MyNetworkAddress" ],
  [ BLOB, BLOB ]
);

/**
 * Historical statistics of the network.
 * @category Types
 * @class OcaNetworkStatistics
 * @extends Base
 */
export const OcaNetworkStatistics = make_struct(
  "OcaNetworkStatistics",
  [ "rxPacketErrors", "txPacketErrors" ],
  [ UINT32, UINT32 ]
);

/**
 * A signal source or sink connector at the far end of a stream -
 * normally, in another device. Not all of the fields of this datatype
 * need be used. The fields used will depend on remote device type, media
 * transport network type, and media transport implementation. Normal
 * usage scenarios are: <ol> <li><b><u>Unicast input or output</u></b>:
 * The <b>OcaStream </b>object is instantiated in an
 * <b>OcaStreamConnector </b>object in the local device, and it links to
 * an <b>OcaStreamConnector </b>object in a remote device. </li>
 * <li><b><u>Multicast input</u></b><u>:</u> The <b>OcaStream </b>object
 * is instantiated in an <b>OcaStreamConnector </b>object in the local
 * device, and, it may or may not link to an <b>OcaStreamConnector
 * </b>object in a remote device. </li> <li><b><u>Multicast
 * output</u></b><u>:</u> The <b>OcaStream </b>object is instantiated in
 * an <b>OcaStreamConnector </b>object in the local device, but in this
 * case does <u>not </u>link to any specific remote connector object.
 * </li> </ol>
 * @category Types
 * @class OcaStreamConnectorIdentification
 * @extends Base
 */
export const OcaStreamConnectorIdentification = make_struct(
  "OcaStreamConnectorIdentification",
  [ "HostID", "NetworkAddress", "NodeID", "StreamConnectorID" ],
  [ BLOB, BLOB, BLOB, BLOB ]
);

const _values_OcaStreamType = {
  None: 0,
  Unicast: 1,
  Multicast: 2,
};

/**
 * Type of media endpoint: unicast or multicast.
 * @category Types
 * @class OcaStreamType
 * @extends Enum8
 */
export const OcaStreamType = make_enum(Enum8, "OcaStreamType", _values_OcaStreamType);

const _values_OcaStreamStatus = {
  NotConnected: 0,
  Connected: 1,
  Paused: 2,
};

/**
 * Status options for a stream.
 * @category Types
 * @class OcaStreamStatus
 * @extends Enum8
 */
export const OcaStreamStatus = make_enum(Enum8, "OcaStreamStatus", _values_OcaStreamStatus);

/**
 * A single-channel or multichannel signal flow between a local stream
 * connector (i.e. <b>OcaStreamConnector </b>instance) of an
 * <b>OcaStreamNetwork </b>object in this node and another ("remote")
 * stream connector. Normally, the remote stream connector is in another
 * node. Each stream is unidirectional. With respect to the
 * <b>OcaStreamNetwork </b>object in question, a stream is either: <ul>
 * <li><i>Outbound: </i>A signal flow from an output connector port in
 * the <b>OcaStreamNetwork </b>object to an external destination; or</li>
 * <li><i>Inbound: </i>A signal flow from an external source to an
 * <i>input </i>connector in the <b>OcaStreamNetwork </b>object.</li>
 * </ul> An <b>OcaStream </b>object may represent either a unicast or a
 * multicast stream. Any given <b>OcaStreamConnector </b>object may
 * support multiple outbound flows, but not multiple inbound flows.
 * @category Types
 * @class OcaStream
 * @extends Base
 */
export const OcaStream = make_struct(
  "OcaStream",
  [ "ErrorNumber", "IDAdvertised", "Index", "Label", "LocalConnectorONo", "Priority", "RemoteConnectorIdentification", "Secure", "Status", "StreamParameters", "StreamType" ],
  [ UINT16, BLOB, UINT16, STRING, UINT32, UINT16, OcaStreamConnectorIdentification, BOOLEAN, OcaStreamStatus, BLOB, OcaStreamType ]
);

const _values_OcaMediaClockLockState = {
  Undefined: 0,
  Locked: 1,
  Synchronizing: 2,
  FreeRun: 3,
  Stopped: 4,
};

/**
 * Lock states of media clocks.
 * @category Types
 * @class OcaMediaClockLockState
 * @extends Enum8
 */
export const OcaMediaClockLockState = make_enum(Enum8, "OcaMediaClockLockState", _values_OcaMediaClockLockState);

const _values_OcaMediaClockType = {
  None: 0,
  Internal: 1,
  Network: 2,
  External: 3,
};

/**
 * Types of media clocks.
 * @category Types
 * @class OcaMediaClockType
 * @extends Enum8
 */
export const OcaMediaClockType = make_enum(Enum8, "OcaMediaClockType", _values_OcaMediaClockType);

const _values_OcaNetworkStatus = {
  Unknown: 0,
  Ready: 1,
  StartingUp: 2,
  Stopped: 3,
};

/**
 * Network status enum.
 * @category Types
 * @class OcaNetworkStatus
 * @extends Enum8
 */
export const OcaNetworkStatus = make_enum(Enum8, "OcaNetworkStatus", _values_OcaNetworkStatus);

const _values_OcaStreamConnectorStatus = {
  NotAvailable: 0,
  Idle: 1,
  Connected: 2,
  Paused: 3,
};

/**
 * Status options for a stream connector.
 * @category Types
 * @class OcaStreamConnectorStatus
 * @extends Enum8
 */
export const OcaStreamConnectorStatus = make_enum(Enum8, "OcaStreamConnectorStatus", _values_OcaStreamConnectorStatus);

const _values_OcaNetworkSignalChannelStatus = {
  NotConnected: 0,
  Connected: 1,
  Muted: 2,
};

/**
 * Status options for a stream.
 * @category Types
 * @class OcaNetworkSignalChannelStatus
 * @extends Enum8
 */
export const OcaNetworkSignalChannelStatus = make_enum(Enum8, "OcaNetworkSignalChannelStatus", _values_OcaNetworkSignalChannelStatus);

const _values_OcaNetworkMediaSourceOrSink = {
  None: 0,
  Source: 1,
  Sink: 2,
};

/**
 * enum that describes whether a port is a source (= sends program into
 * the network; "talker") or sink (=receives program from the network;
 * "listener")
 * @category Types
 * @class OcaNetworkMediaSourceOrSink
 * @extends Enum8
 */
export const OcaNetworkMediaSourceOrSink = make_enum(Enum8, "OcaNetworkMediaSourceOrSink", _values_OcaNetworkMediaSourceOrSink);
