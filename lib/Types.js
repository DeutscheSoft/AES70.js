/*
 * This file has been generated. Please do not modify
 * it directly.
 *
 */
(function(w, module) {
var f = function(w, OCA) {
 var SP = w.SP;
/*!
 *! General-purpose short index
 */
/* typedef int OcaUint8; */

/*!
 *! True or false
 */
/* typedef int OcaBoolean; */

/*!
 *! Generic 8 bit integer parameter
 */
/* typedef int OcaInt8; */

/*!
 *! Generic integer parameter
 */
/* typedef int OcaInt16; */

/*!
 *! Generic long integer parameter
 */
/* typedef int OcaInt32; */

/*!
 *! Generic long integer parameter
 */
/* typedef number OcaInt64; */

/*!
 *! General-purpose short index
 */
/* typedef int OcaUint16; */

/* typedef number OcaUint32; */

/* typedef number OcaUint64; */

/*!
 *! Generic integer parameter
 */
/* typedef float OcaFloat32; */

/*!
 *! Generic integer parameter
 */
/* typedef float OcaFloat64; */

/*!
 *! General character string, UTF-8 encoded.
 */
/* typedef string OcaString; */

/*!
 *! Representation of a bitmask that is used on the network to send
 *! bitmask data.
 */
/* typedef string OcaBitstring; */

/*!
 *! Representation of a binary large object that is used on the network to
 *! send large chunks of binary data.
 */
/* typedef string OcaBlob; */

/*!
 *! Template class for fixed-length blob.
 */
/* typedef string OcaBlobFixedLen; */

/*!
 *! Template class representing a list of items.
 */
/* typedef array OcaList; */

/*!
 *! Template class representing a two-dimensional list of items. This
 *! class describes only the data, not how it will be marshalled for
 *! transport via the various OCA protocol implementations.
 */
/* typedef array(array) OcaList2D; */

/*!
 *! Template class representing a map of keys to values.
 */
/* typedef mapping OcaMap; */

/*!
 *! General-purpose short index
 */
/* typedef int OcaUint16; */

/*!
 *! Class identifier : vector that describes the class's ancestry. The
 *! normative definition of the Class identifier is given in Part 1 of
 *! this standard, in the section entitled "Class identifiers". The UML
 *! definition given here is intended to be identical, but in the case of
 *! any discrepancy, Part 1 shall be definitive..
 */
/* typedef string) OcaClassID; */

/*!
 *! General-purpose short index
 */
/* typedef int OcaUint16; */

/*!
 *! General-purpose short index
 */
/* typedef int OcaUint16; */

/* typedef number OcaUint32; */

/*!
 *! Representation of a binary large object that is used on the network to
 *! send large chunks of binary data.
 */
/* typedef string OcaBlob; */

/* typedef array OcaList; */

/* typedef array OcaList; */

/* typedef string OcaBlobFixedLen; */

/*!
 *! General-purpose short index
 */
/* typedef int OcaUint16; */

/*!
 *! Generic integer parameter
 */
/* typedef float OcaFloat32; */

/*!
 *! A ratio expressed in dB. Typically used for gain settings.
 */
/* typedef number OcaDB; */

/*!
 *! Representation of a binary large object that is used on the network to
 *! send large chunks of binary data.
 */
/* typedef string OcaBlob; */

/*!
 *! General-purpose short index
 */
/* typedef int OcaUint16; */

/* typedef array OcaList; */

/*!
 *! A ratio expressed in dB. Typically used for gain settings.
 */
/* typedef number OcaDB; */

/*!
 *! An absolute level expressed in dB above the given absolute reference
 *! level.
 */
/* typedef number OcaDBr; */

/*!
 *! A ratio expressed in dB. Typically used for gain settings.
 */
/* typedef number OcaDB; */

/*!
 *! A ratio expressed in dB. Typically used for gain settings.
 */
/* typedef number OcaDB; */

/*!
 *! Generic integer parameter
 */
/* typedef float OcaFloat32; */

/*!
 *! Generic integer parameter
 */
/* typedef float OcaFloat32; */

/*!
 *! Generic integer parameter
 */
/* typedef float OcaFloat32; */

/* typedef mapping OcaMap; */

/* typedef number OcaUint64; */

/*!
 *! Generic integer parameter
 */
/* typedef float OcaFloat32; */

/* typedef number OcaUint32; */

/*!
 *! Generic integer parameter
 */
/* typedef float OcaFloat32; */

/* typedef number OcaUint32; */

/*!
 *! Object number of an OCA object.
 */
/* typedef number OcaProtoONo; */

/*!
 *! General-purpose short index
 */
/* typedef int OcaUint16; */

/*!
 *! Generic integer parameter
 */
/* typedef float OcaFloat32; */

/*!
 *! General-purpose short index
 */
/* typedef int OcaUint16; */

/*!
 *! General-purpose short index
 */
/* typedef int OcaUint16; */

/* typedef number OcaUint32; */

/* typedef array OcaList; */

/*!
 *! Representation of a binary large object that is used on the network to
 *! send large chunks of binary data.
 */
/* typedef string OcaBlob; */

/*!
 *! Representation of a binary large object that is used on the network to
 *! send large chunks of binary data.
 */
/* typedef string OcaBlob; */

/*!
 *! General character string, UTF-8 encoded.
 */
/* typedef string OcaString; */

/* typedef number OcaUint64; */

/*!
 *! Representation of a binary large object that is used on the network to
 *! send large chunks of binary data.
 */
/* typedef string OcaBlob; */

/*!
 *! General-purpose short index
 */
/* typedef int OcaUint16; */

/*!
 *! Representation of a binary large object that is used on the network to
 *! send large chunks of binary data.
 */
/* typedef string OcaBlob; */

/*!
 *! Representation of a binary large object that is used on the network to
 *! send large chunks of binary data.
 */
/* typedef string OcaBlob; */

/*!
 *! Representation of a binary large object that is used on the network to
 *! send large chunks of binary data.
 */
/* typedef string OcaBlob; */

/*!
 *! Representation of a binary large object that is used on the network to
 *! send large chunks of binary data.
 */
/* typedef string OcaBlob; */

/*!
 *! General-purpose short index
 */
/* typedef int OcaUint16; */

/*!
 *! Enum that describes all available base datatypes.
 */
OCA.OcaBaseDataType = SP.enum({
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
});

/*!
 *! Enumeration (16-bit) for of software &amp; firmware components in the
 *! device. Except for the boot loader, all other values of this enum are
 *! device-specific and will be specified by subclassing this class.
 */
OCA.OcaComponent = SP.enum({
    BootLoader: 0,
});

/*!
 *! Standard status codes returned from method calls.
 */
OCA.OcaStatus = SP.enum({
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
});

/*!
 *! Type of string comparison.
 */
OCA.OcaStringComparisonType = SP.enum({
    Exact: 0,
    Substring: 1,
    Contains: 2,
    ExactCaseInsensitive: 3,
    SubstringCaseInsensitive: 4,
    ContainsCaseInsensitive: 5,
});

/*!
 *! Bitset defining bit flags that indicate the device states CAP devices
 *! can be in. The state is returned by the device's Device Manager on
 *! request. Any combination of the flags may be returned, unless
 *! specified otherwise for the specific flag. The value 0x0000 indicates
 *! the device is fully operational.
 */
OCA.OcaDeviceState = SP.enum({
    Operational: 0x0001,
    Disabled: 0x0002,
    Error: 0x0004,
    Initializing: 0x0008,
    Updating: 0x0010,
});

/*!
 *! Enumeration of reasons for device reset.
 */
OCA.OcaResetCause = SP.enum({
    PowerOn: 0,
    InternalError: 1,
    Upgrade: 2,
    ExternalRequest: 3,
});

/*!
 *! Enumeration defining the power states that OCA devices can be in. The
 *! state is returned by the device's Power Manager on request.
 */
OCA.OcaPowerState = SP.enum({
    None: 0,
    Working: 1,
    Standby: 2,
    Off: 3,
});

/*!
 *! Enum describing property change type.
 */
OCA.OcaPropertyChangeType = SP.enum({
    CurrentChanged: 1,
    MinChanged: 2,
    MaxChanged: 3,
    ItemAdded: 4,
    ItemChanged: 5,
    ItemDeleted: 6,
});

/*!
 *! Bitset describing which elements of a media connector have changed.
 */
OCA.OcaMediaConnectorElement = SP.enum({
    PinMap: 0x0001,
    Connection: 0x0002,
    Coding: 0x0004,
    AlignmentLevel: 0x0008,
    AlignmentGain: 0x0010,
});

/*!
 *! Status options for a stream connector.
 */
OCA.OcaMediaConnectorState = SP.enum({
    Stopped: 0,
    SettingUp: 1,
    Running: 2,
    Paused: 3,
    Fault: 4,
});

/*!
 *! Enum that describes whether a port is for input or output.
 */
OCA.OcaPortMode = SP.enum({
    Input: 1,
    Output: 2,
});

/*!
 *! Type of media endpoint: unicast or multicast.
 */
OCA.OcaMediaStreamCastMode = SP.enum({
    None: 0,
    Unicast: 1,
    Multicast: 2,
});

/*!
 *! Enum describing status change types, as used in <b>OcaGrouper's
 *! StatusChange </b>event.
 */
OCA.OcaGrouperStatusChangeType = SP.enum({
    citizenAdded: 1,
    citizenDeleted: 2,
    citizenConnectionLost: 3,
    citizenConnectionReEstablished: 4,
    citizenError: 5,
    enrollment: 6,
    unEnrollment: 7,
});

/*!
 *! Enum for subscriptions that specifies whether its notification
 *! messages are to be delivered by reliable means (e.g. TCP) or fast
 *! means (e.g. UDP).
 */
OCA.OcaNotificationDeliveryMode = SP.enum({
    Reliable: 1,
    Fast: 2,
});

/*!
 *! Enum describing <b>OcaSubscriptionManager</b> states.
 */
OCA.OcaSubscriptionManagerState = SP.enum({
    Normal: 1,
    EventsDisabled: 2,
});

/*!
 *! Mute states
 */
OCA.OcaMuteState = SP.enum({
    Muted: 1,
    Unmuted: 2,
});

/*!
 *! Polarity states
 */
OCA.OcaPolarityState = SP.enum({
    NonInverted: 1,
    Inverted: 2,
});

/*!
 *! Enumeration of types of delay units that are available in OCA.
 */
OCA.OcaDelayUnit = SP.enum({
    Time: 1,
    Distance: 2,
    Samples: 3,
    Microseconds: 4,
    Milliseconds: 5,
    Centimeters: 6,
    Inches: 7,
    Feet: 8,
});

/*!
 *! Enumeration of classicalr filter types that can be used by OCA
 *! objects.
 */
OCA.OcaClassicalFilterShape = SP.enum({
    Butterworth: 1,
    Bessel: 2,
    Chebyshev: 3,
    LinkwitzRiley: 4,
});

/*!
 *! Enumeration of passband types that can be used by OCA objects.
 */
OCA.OcaFilterPassband = SP.enum({
    HiPass: 1,
    LowPass: 2,
    BandPass: 3,
    BandReject: 4,
    AllPass: 5,
});

/*!
 *! Enumeration of curve shapes used by OcaFilterParametric.
 */
OCA.OcaParametricEQShape = SP.enum({
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
});

/*!
 *! Enumeration of the types of dynamics functions available from class
 *! OcaDynamics.
 */
OCA.OcaDynamicsFunction = SP.enum({
    None: 0,
    Compress: 1,
    Limit: 2,
    Expand: 3,
    Gate: 4,
});

/*!
 *! Enumeration of waveform types that can be used by OCA objects.
 */
OCA.OcaWaveformType = SP.enum({
    None: 0,
    DC: 1,
    Sine: 2,
    Square: 3,
    Impulse: 4,
    NoisePink: 5,
    NoiseWhite: 6,
    PolarityTest: 7,
});

/*!
 *! Enumeration of waveform types that can be used by OCA objects.
 */
OCA.OcaSweepType = SP.enum({
    Linear: 1,
    Logarithmic: 2,
    None: 0,
});

/*!
 *! Enumeration of units of measure that can be used in OCA classes. Only
 *! SI (base or derived) units are specified, so that internal
 *! calculations will not need to convert. If conversion is needed it
 *! should only be done in user interfaces. The datatype of a reading
 *! expressed in one of these units of measure is FLOAT.
 */
OCA.OcaUnitOfMeasure = SP.enum({
    Ampere: 4,
    DegreeCelsius: 2,
    Hertz: 1,
    None: 0,
    Ohm: 5,
    Volt: 3,
});

/*!
 *! Enumeration of presentation units that can be used in OCA classes.
 *! Property values of OCA objects are always in SI units (unless
 *! explicitly documented otherwise), but the presentation unit can also
 *! be stored to indicate in which unit the value was presented in a user
 *! interface. This way another controller can also present it in that
 *! unit (i.e. doing a conversion on the controller before presenting it)
 *! to keep the user presentation uniform. Note that the presentation unit
 *! may be equal to the unit of the property (in which case of course no
 *! conversion is needed).
 */
OCA.OcaPresentationUnit = SP.enum({
    dBu: 0,
    dBV: 1,
    V: 2,
});

/*!
 *! Enumeration of the types of level detector characteristics. Used in
 *! dynamics classes and for sensors.
 */
OCA.OcaLevelDetectionLaw = SP.enum({
    None: 0,
    RMS: 1,
    Peak: 2,
});

/*!
 *! Enum that describes whether an <b>OcaSensor</b>'s current reading
 *! value can be trusted, and if not, why not.
 */
OCA.OcaSensorReadingState = SP.enum({
    Unknown: 0,
    Valid: 1,
    Underrange: 2,
    Overrange: 3,
    Error: 4,
});

/*!
 *! Enumeration of level meter laws.
 */
OCA.OcaLevelMeterLaw = SP.enum({
    VU: 1,
    StandardVU: 2,
    PPM1: 3,
    PPM2: 4,
    LKFS: 5,
    RMS: 6,
    Peak: 7,
    ProprietaryValueBase: 128,
});

/*!
 *! Bitset that describes the contents of an <b>OcaSearchResult</b>
 */
OCA.OcaObjectSearchResultFlags = SP.enum({
    ONo: 0x0001,
    ClassIdentification: 0x0002,
    ContainerPath: 0x0004,
    Role: 0x0008,
    Label: 0x0010,
});

/*!
 *! BItset that specifies which fields in <b>OcaPositionAndOrientation</b>
 *! are used. A "1" value signifies that the corresponding
 *! <b>OcaPositionAndOrientation </b>field is used.
 */
OCA.OcaPositionAndRotationFlags = SP.enum({
    c1: 1,
    c2: 2,
    c3: 4,
    c4: 8,
    c5: 16,
    c6: 32,
});

/*!
 *! Select mode of <b>OcaGrouper</b>: master-slave or peer-to-peer
 */
OCA.OcaGrouperMode = SP.enum({
    MasterSlave: 1,
    PeerToPeer: 2,
});

/*!
 *! Interpolation law for ramper to use.
 */
OCA.OcaObserverState = SP.enum({
    NotTriggered: 0,
    Triggered: 1,
});

/*!
 *! Enumeration of relational operators that can be used in OCA classes.
 */
OCA.OcaRelationalOperator = SP.enum({
    None: 0,
    Equality: 1,
    Inequality: 2,
    GreaterThan: 3,
    GreaterThanOrEqual: 4,
    LessThan: 5,
    LessThanOrEqual: 6,
});

/*!
 *! Type of power supply.
 */
OCA.OcaPowerSupplyType = SP.enum({
    None: 0,
    Mains: 1,
    Battery: 2,
    Phantom: 3,
    Solar: 4,
});

/*!
 *! Physical location of a device power supply.
 */
OCA.OcaPowerSupplyLocation = SP.enum({
    Unspecified: 1,
    Internal: 2,
    External: 3,
});

/*!
 *! Status of a device power supply.
 */
OCA.OcaPowerSupplyState = SP.enum({
    Off: 0,
    Unavailable: 1,
    Available: 2,
    Active: 3,
});

/*!
 *! States of OcaTask object. State values change as a result of the
 *! object's having received a comment or encountering processing events
 *! (e.g. completion).
 */
OCA.OcaTaskState = SP.enum({
    None: 0,
    NotPrepared: 1,
    Disabled: 2,
    Enabled: 3,
    Running: 4,
    Completed: 5,
    Failed: 6,
    Stopped: 7,
    Aborted: 8,
});

/*!
 *! Commands controllers can send to OcaTasks to change their states
 */
OCA.OcaTaskCommand = SP.enum({
    None: 0,
    Prepare: 1,
    Enable: 2,
    Start: 3,
    Stop: 4,
    Abort: 5,
    Disable: 6,
    Clear: 7,
});

/*!
 *! States of <b>OcaTaskManager </b>object. These states represent the
 *! overall state of task processing in the device. <ul> <li>Device task
 *! processing state is <b>Enabled </b>by default. In <b>Enabled
 *! </b>state, tasks may be running.</li> </ul> <ul> <li>Device task
 *! processing state may be <b>Disabled </b>by the <b>OcaTaskManager
 *! Disable </b>command. </li> <li>The <b>Disable </b>command will succeed
 *! only if no tasks are running. </li> </ul> Tasks may be stopped by:
 *! <ul> <li>passing the <b>OcaTaskManager </b>a <b>Stop </b>or <b>Abort
 *! </b>command, which will stop all tasks in the device; or</li>
 *! <li>passing a <b>Stop </b>or <b>Abort </b>command to each
 *! <b>OcaTaskGroup </b>agent, which will stop all the tasks in the given
 *! task groups; or </li> <li>passing a <b>Stop </b>or <b>Abort
 *! </b>command to each task individually.</li> </ul>
 */
OCA.OcaTaskManagerState = SP.enum({
    None: 0,
    Enabled: 1,
    Disabled: 2,
});

/*!
 *! Interpolation law for ramper to use.
 */
OCA.OcaRamperInterpolationLaw = SP.enum({
    Linear: 1,
    ReverseLinear: 2,
    Sine: 3,
    Exponential: 4,
});

/*!
 *! Enum that describes type of data in a library volume.
 */
OCA.OcaLibVolType = SP.enum({
    None: 0,
    ParamSet: 1,
    Patch: 2,
});

/*!
 *! Library volume access modes
 */
OCA.OcaLibAccess = SP.enum({
    None: 0,
    ReadOnly: 1,
    ReadExpand: 2,
    Full: 3,
});

/*!
 *! Types of layer 2 networks.
 */
OCA.OcaNetworkLinkType = SP.enum({
    None: 0,
    EthernetWired: 1,
    EthernetWireless: 2,
    USB: 3,
    SerialP2P: 4,
});

/*!
 *! Network states.
 */
OCA.OcaApplicationNetworkState = SP.enum({
    Unknown: 0,
    NotReady: 1,
    Readying: 2,
    Ready: 3,
    Running: 4,
    Paused: 5,
    Stopping: 6,
    Stopped: 7,
    Fault: 8,
});

/*!
 *! Command values for OcaMediaNetwork.Control().
 */
OCA.OcaApplicationNetworkCommand = SP.enum({
    None: 0,
    Prepare: 1,
    Start: 2,
    Pause: 3,
    Stop: 4,
    Reset: 5,
});

/*!
 *! Media transport protocols available.
 */
OCA.OcaNetworkMediaProtocol = SP.enum({
    None: 0,
    AV3: 1,
    AVBTP: 2,
    Dante: 3,
    Cobranet: 4,
    AES67: 5,
    SMPTEAudio: 6,
    LiveWire: 7,
    ExtensionPoint: 65,
});

/*!
 *! Network control protocols available.
 */
OCA.OcaNetworkControlProtocol = SP.enum({
    None: 0,
    OCP01: 1,
    OCP02: 2,
    OCP03: 3,
});

/*!
 *! Command values for OcaMediaNetwork.ControlConnector(...)
 */
OCA.OcaMediaConnectorCommand = SP.enum({
    None: 0,
    Start: 1,
    Pause: 2,
});

/*!
 *! Lock states of media clocks.
 */
OCA.OcaMediaClockAvailability = SP.enum({
    Unavailable: 0,
    Available: 1,
});

/*!
 *! Types of time references.
 */
OCA.OcaTimeReferenceType = SP.enum({
    Undefined: 0,
    Local: 1,
    Private: 2,
    GPS: 3,
    Galileo: 4,
    GLONASS: 5,
});

/*!
 *! Types of time sources. See RFC7273 particularly sections 4.4-4.8 .
 */
OCA.OcaTimeProtocol = SP.enum({
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
});

/*!
 *! States of time sources
 */
OCA.OcaTimeSourceAvailability = SP.enum({
    Unavailable: 0,
    Available: 1,
});

/*!
 *! Time mode of <b>OcaTask </b>agent.
 */
OCA.OcaTimeMode = SP.enum({
    Absolute: 1,
    Relative: 2,
});

/*!
 *! Time units of <b>OcaTask </b>agent.
 */
OCA.OcaTimeUnits = SP.enum({
    Seconds: 1,
    Samples: 2,
});

/*!
 *! Synchronization statuses.
 */
OCA.OcaTimeSourceSyncStatus = SP.enum({
    Undefined: 0,
    Unsynchronized: 1,
    Synchronizing: 2,
    Synchronized: 3,
});

/*!
 *! Type of media endpoint: unicast or multicast.
 */
OCA.OcaStreamType = SP.enum({
    None: 0,
    Unicast: 1,
    Multicast: 2,
});

/*!
 *! Status options for a stream.
 */
OCA.OcaStreamStatus = SP.enum({
    NotConnected: 0,
    Connected: 1,
    Paused: 2,
});

/*!
 *! Lock states of media clocks.
 */
OCA.OcaMediaClockLockState = SP.enum({
    Undefined: 0,
    Locked: 1,
    Synchronizing: 2,
    FreeRun: 3,
    Stopped: 4,
});

/*!
 *! Types of media clocks.
 */
OCA.OcaMediaClockType = SP.enum({
    None: 0,
    Internal: 1,
    Network: 2,
    External: 3,
});

/*!
 *! Command repertoire of OcaRamper's <b>Control </b>method.
 */
OCA.OcaRamperCommand = SP.enum({
    Enable: 1,
    Start: 2,
    Halt: 3,
});

/*!
 *! States of the ramper. Here are the rules for ramper state change: <ul>
 *! <li>A freshly-constructed ramper's state is <b>NotInitialized</b>.
 *! </li> </ul> <ul> <li>A ramper becomes <b>Initialized</b> when : The
 *! ramper is <b>NotInitialized</b>; AND <b> TargetProperty</b> has been
 *! set to a valid value; AND <b> Goal</b> has been set; AND <b>
 *! Duration</b> has been set. </li> </ul> <ul> <li>A ramper becomes
 *! <b>Scheduled</b> when It is <b>Initialized</b>; AND
 *! <b>T</b><b><sub>start</sub></b> and <b>TimeMode</b> have been set; AND
 *! (T<sub>start</sub> + <b>Duration</b>) is in the future. </li> </ul>
 *! <ul> <li>A ramper becomes <b>Enabled</b> when it is <b>Scheduled</b>
 *! AND receives an <i>Enable </i>command. </li> </ul> <ul> <li>A ramper
 *! becomes <b>Ramping</b> when: It is <b>Enabled</b> and the ramp start
 *! time is reached; OR It is <b>Initialized</b>, <b>Scheduled</b>, or
 *! <b>Enabled</b> and a <i>Start</i> command is received. </li> </ul>
 *! <ul> <li>Completion of a ramp or Receipt of a <i>Halt</i> command
 *! causes the state to become: <b>Scheduled</b>, if T<sub>start</sub>,
 *! Time Mode have been set; AND (T<sub>start</sub> + Duration) is in the
 *! future. Otherwise, <b>Initialized.</b></li> </ul>
 */
OCA.OcaRamperState = SP.enum({
    NotInitialized: 1,
    Iniitialized: 2,
    Scheduled: 3,
    Enabled: 4,
    Ramping: 5,
});

/*!
 *! Network status enum.
 */
OCA.OcaNetworkStatus = SP.enum({
    Unknown: 0,
    Ready: 1,
    StartingUp: 2,
    Stopped: 3,
});

/*!
 *! Status options for a stream connector.
 */
OCA.OcaStreamConnectorStatus = SP.enum({
    NotAvailable: 0,
    Idle: 1,
    Connected: 2,
    Paused: 3,
});

/*!
 *! Status options for a stream.
 */
OCA.OcaNetworkSignalChannelStatus = SP.enum({
    NotConnected: 0,
    Connected: 1,
    Muted: 2,
});

/*!
 *! enum that describes whether a port is a source (= sends program into
 *! the network; "talker") or sink (=receives program from the network;
 *! "listener")
 */
OCA.OcaNetworkMediaSourceOrSink = SP.enum({
    None: 0,
    Source: 1,
    Sink: 2,
});

/*!
 *! Template <u>class</u> representing a map of keys to values where keys
 *! do not have to be unique (e.g. can be present multiple times).
 */
OCA.OcaMultiMap = function(keytype, valuetype) {
    var OcaMultiMap = function (items) {
        this.map = new Map();
        for (var i = 0; i < items.length; i++) {
            this.add(items[0], items[1]);
        }
        this.__values = items;
    };
    OcaMultiMap.prototype = {
        signature: new SP.signature(SP.LIST(new SP.signature(keytype, valuetype))),
        add: function(key, value) {
            var a = this.map.get(key);
            if (a) a.push(value);
            else this.map.set(key, [ value ]);
            this.__values = null;
        },
        get: function(key) {
            var a = this.map.get(key);

            return a || [];
        },
        delete: function(key, value) {
            var a = this.map.get(key);
            if (!a) return;

            while (true) {
                var pos = a.indexOf(value);
                if (pos === -1) break;
                a.splice(pos, 1);
            }

            this.__values = null;

            if (!a.length) this.map.delete(key);
        },
        _values : function() {
            var a = this.__values;
            if (a !== null) return [ a ];
            this.__values = a = [];

            var key, value;

            for (var entry of this.map) {
                key = entry[0];
                for (value of entry[1]) {
                    a.push([ key, value ]);
                }
            }

            return [ a ];
        },
    };
    return OcaMultiMap;
};
/*!
 *! The datatype of an enumeration choice. Long format, used if normal
 *! 8-bit format isn't going to be big enough.
 */
OCA.OcaEnumItem16 = function(Value) {
    this.Value = Value;
};
OCA.OcaEnumItem16.prototype = {
    signature: new SP.signature(SP.UINT16),
    _values : function() {
        return [ this.Value ];
    },
};
/*!
 *! Representation of a version number of a (hardware/software) component
 *! of a device in the form of Major.Minor.Build (e.g. 1.0.123).
 */
OCA.OcaVersion = function(Major, Minor, Build, Component) {
    this.Major = Major;
    this.Minor = Minor;
    this.Build = Build;
    this.Component = Component;
};
OCA.OcaVersion.prototype = {
    signature: new SP.signature(SP.UINT32, SP.UINT32, SP.UINT32, SP.UINT16),
    _values : function() {
        return [ this.Major, this.Minor, this.Build, this.Component ];
    },
};
OCA.OcaClassIdentification = function(ClassID, ClassVersion) {
    this.ClassID = ClassID;
    this.ClassVersion = ClassVersion;
};
OCA.OcaClassIdentification.prototype = {
    signature: new SP.signature(SP.BLOB16, SP.UINT16),
    _values : function() {
        return [ this.ClassID, this.ClassVersion ];
    },
};
/*!
 *! Object address. Composite of network address in which object resides,
 *! and object number.
 */
OCA.OcaOPath = function(HostID, ONo) {
    this.HostID = HostID;
    this.ONo = ONo;
};
OCA.OcaOPath.prototype = {
    signature: new SP.signature(SP.BLOB, SP.UINT32),
    _values : function() {
        return [ this.HostID, this.ONo ];
    },
};
/*!
 *! Object identification. Composite of object number and object's class.
 *! Used mainly in discovery processes.
 */
OCA.OcaObjectIdentification = function(ONo, ClassIdentification) {
    this.ONo = ONo;
    this.ClassIdentification = ClassIdentification;
};
OCA.OcaObjectIdentification.prototype = {
    signature: new SP.signature(SP.UINT32, OCA.OcaClassIdentification),
    _values : function() {
        return [ this.ONo, this.ClassIdentification ];
    },
};
/*!
 *! Representation of an OCA method ID. A class may define at most 255
 *! methods of its own. Additional methods may be inherited, so the total
 *! number may exceed 255.
 */
OCA.OcaMethodID = function(DefLevel, MethodIndex) {
    this.DefLevel = DefLevel;
    this.MethodIndex = MethodIndex;
};
OCA.OcaMethodID.prototype = {
    signature: new SP.signature(SP.UINT16, SP.UINT16),
    _values : function() {
        return [ this.DefLevel, this.MethodIndex ];
    },
};
/*!
 *! Representation of an OCA property ID. A class may define at most 255
 *! properties of its own. Additional properties may be inherited, so the
 *! total number may exceed 255.
 */
OCA.OcaPropertyID = function(DefLevel, PropertyIndex) {
    this.DefLevel = DefLevel;
    this.PropertyIndex = PropertyIndex;
};
OCA.OcaPropertyID.prototype = {
    signature: new SP.signature(SP.UINT16, SP.UINT16),
    _values : function() {
        return [ this.DefLevel, this.PropertyIndex ];
    },
};
/*!
 *! Representation of an OCA event ID. A class may define at most 255
 *! events of its own. Additional events may be inherited, so the total
 *! number may exceed 255.
 */
OCA.OcaEventID = function(DefLevel, EventIndex) {
    this.DefLevel = DefLevel;
    this.EventIndex = EventIndex;
};
OCA.OcaEventID.prototype = {
    signature: new SP.signature(SP.UINT16, SP.UINT16),
    _values : function() {
        return [ this.DefLevel, this.EventIndex ];
    },
};
/*!
 *! Description of an OCA property, including property ID, Get and Set
 *! method IDs, and datatype.
 */
OCA.OcaPropertyDescriptor = function(PropertyID, BaseDataType, GetterMethodID, SetterMethodID) {
    this.PropertyID = PropertyID;
    this.BaseDataType = BaseDataType;
    this.GetterMethodID = GetterMethodID;
    this.SetterMethodID = SetterMethodID;
};
OCA.OcaPropertyDescriptor.prototype = {
    signature: new SP.signature(OCA.OcaPropertyID, SP.UINT8, OCA.OcaMethodID, OCA.OcaMethodID),
    _values : function() {
        return [ this.PropertyID, this.BaseDataType, this.GetterMethodID, this.SetterMethodID ];
    },
};
/*!
 *! Template for complete identification of an OCA property instance,
 *! including object number, property ID, Get and Set method IDs, and
 *! datatype.
 */
OCA.OcaProperty = function(ONo, Descriptor) {
    this.ONo = ONo;
    this.Descriptor = Descriptor;
};
OCA.OcaProperty.prototype = {
    signature: new SP.signature(SP.UINT32, OCA.OcaPropertyDescriptor),
    _values : function() {
        return [ this.ONo, this.Descriptor ];
    },
};
/*!
 *! Structure that describes a manager instance.
 */
OCA.OcaManagerDescriptor = function(ObjectNumber, Name, ClassID, ClassVersion) {
    this.ObjectNumber = ObjectNumber;
    this.Name = Name;
    this.ClassID = ClassID;
    this.ClassVersion = ClassVersion;
};
OCA.OcaManagerDescriptor.prototype = {
    signature: new SP.signature(SP.UINT32, SP.STRING, SP.BLOB16, SP.UINT16),
    _values : function() {
        return [ this.ObjectNumber, this.Name, this.ClassID, this.ClassVersion ];
    },
};
OCA.OcaManagerDefaultObjectNumbers = SP.enum({
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
});
/*!
 *! 64 bit device type GUID.
 */
OCA.OcaModelGUID = function(Reserved, MfrCode, ModelCode) {
    this.Reserved = Reserved;
    this.MfrCode = MfrCode;
    this.ModelCode = ModelCode;
};
OCA.OcaModelGUID.prototype = {
    signature: new SP.signature(SP.BLOBFIXED(1), SP.BLOBFIXED(3), SP.BLOBFIXED(4)),
    _values : function() {
        return [ this.Reserved, this.MfrCode, this.ModelCode ];
    },
};
/*!
 *! Friendly description of this particular product model.
 */
OCA.OcaModelDescription = function(Manufacturer, Name, Version) {
    this.Manufacturer = Manufacturer;
    this.Name = Name;
    this.Version = Version;
};
OCA.OcaModelDescription.prototype = {
    signature: new SP.signature(SP.STRING, SP.STRING, SP.STRING),
    _values : function() {
        return [ this.Manufacturer, this.Name, this.Version ];
    },
};
/*!
 *! Representation of an OCA event, i.e. the unique combination of emitter
 *! ONo and the EventID.
 */
OCA.OcaEvent = function(EmitterONo, EventID) {
    this.EmitterONo = EmitterONo;
    this.EventID = EventID;
};
OCA.OcaEvent.prototype = {
    signature: new SP.signature(SP.UINT32, OCA.OcaEventID),
    _values : function() {
        return [ this.EmitterONo, this.EventID ];
    },
};
/*!
 *! Representation of an OCA method, i.e. the unique combination of an ONo
 *! and a MethodID.
 */
OCA.OcaMethod = function(ONo, MethodID) {
    this.ONo = ONo;
    this.MethodID = MethodID;
};
OCA.OcaMethod.prototype = {
    signature: new SP.signature(SP.UINT32, OCA.OcaMethodID),
    _values : function() {
        return [ this.ONo, this.MethodID ];
    },
};
/*!
 *! Representation of an OCA event, i.e. the unique combination of emitter
 *! ONo and the EventID.
 */
OCA.OcaEvent = function(EmitterONo, EventID) {
    this.EmitterONo = EmitterONo;
    this.EventID = EventID;
};
OCA.OcaEvent.prototype = {
    signature: new SP.signature(SP.UINT32, OCA.OcaEventID),
    _values : function() {
        return [ this.EmitterONo, this.EventID ];
    },
};
/*
class OcaPropertyChangedEventData<DataType>(OcaPropertyID PropertyID, T PropertyValue, OcaPropertyChangeType ChangeType, T PropertyKey) {
    constant signature = ({ OCA.OcaPropertyID, OCA.T, OCA.OcaPropertyChangeType, OCA.T});
    array _values() {
        return ({ PropertyID, PropertyValue, ChangeType, PropertyKey });
    }
}
*/
/*!
 *! Represents the current status of a media (source or sink) connector.
 */
OCA.OcaMediaConnectorStatus = function(ConnectorID, State, ErrorCode) {
    this.ConnectorID = ConnectorID;
    this.State = State;
    this.ErrorCode = ErrorCode;
};
OCA.OcaMediaConnectorStatus.prototype = {
    signature: new SP.signature(SP.UINT16, SP.UINT8, SP.UINT16),
    _values : function() {
        return [ this.ConnectorID, this.State, this.ErrorCode ];
    },
};
/*!
 *! Represents the current status of a media (source or sink) connector.
 */
OCA.OcaMediaConnectorStatus = function(ConnectorID, State, ErrorCode) {
    this.ConnectorID = ConnectorID;
    this.State = State;
    this.ErrorCode = ErrorCode;
};
OCA.OcaMediaConnectorStatus.prototype = {
    signature: new SP.signature(SP.UINT16, SP.UINT8, SP.UINT16),
    _values : function() {
        return [ this.ConnectorID, this.State, this.ErrorCode ];
    },
};
/*!
 *! Unique identifier of input or output port within a given worker or
 *! block class. Port numbers are ordinals starting at 1, and there are
 *! separate numbering spaces for input and output ports.
 */
OCA.OcaPortID = function(Mode, Index) {
    this.Mode = Mode;
    this.Index = Index;
};
OCA.OcaPortID.prototype = {
    signature: new SP.signature(SP.UINT8, SP.UINT16),
    _values : function() {
        return [ this.Mode, this.Index ];
    },
};
/*!
 *! A single-channel or multichannel connection between a local media
 *! connector (i.e. <b>OcaMedia(Source/Sink)Connector </b>instance) of an
 *! <b>OcaMediaTransportNetwork </b>object in this node and another
 *! ("remote") media source or sink. Normally, the remote source or sink
 *! is in another node. The remote end may or may not be an OCA-compliant
 *! device. A connection is unidirectional. Its direction is determined by
 *! the connector that owns the connection. Its direction is either: <ul>
 *! <li><i>Outbound: </i>A signal flow from a <b>source </b>connector to
 *! an external destination; or</li> <li><i>Inbound: </i>A signal flow
 *! from an external source to a <b>sink </b>connector.</li> </ul> An
 *! <b>OcaMediaConnection </b>object may represent a connection to either
 *! a unicast or a multicast stream. Any given
 *! <b>OcaMedia(Source/Sink)Connector </b>object will only have one media
 *! connection. In non-OCA documents, connections are sometimes referred
 *! to as <i>streams</i> or <i>flows.</i>
 */
OCA.OcaMediaConnection = function(Secure, StreamParameters, StreamCastMode) {
    this.Secure = Secure;
    this.StreamParameters = StreamParameters;
    this.StreamCastMode = StreamCastMode;
};
OCA.OcaMediaConnection.prototype = {
    signature: new SP.signature(SP.BOOLEAN, SP.BLOB, SP.UINT8),
    _values : function() {
        return [ this.Secure, this.StreamParameters, this.StreamCastMode ];
    },
};
/*!
 *! Codec ID + Coding parameters
 */
OCA.OcaMediaCoding = function(CodingSchemeID, CodecParameters, ClockONo) {
    this.CodingSchemeID = CodingSchemeID;
    this.CodecParameters = CodecParameters;
    this.ClockONo = ClockONo;
};
OCA.OcaMediaCoding.prototype = {
    signature: new SP.signature(SP.UINT16, SP.STRING, SP.UINT32),
    _values : function() {
        return [ this.CodingSchemeID, this.CodecParameters, this.ClockONo ];
    },
};
/*!
 *! Media source (i.e. output) connector. Connects to an outbound stream.
 *! Collected by <b>OcaMediaTransportNetwork</b>.
 */
OCA.OcaMediaSourceConnector = function(IDInternal, IDExternal, Connection, Coding, PinCount, ChannelPinMap, AlignmentLevel) {
    this.IDInternal = IDInternal;
    this.IDExternal = IDExternal;
    this.Connection = Connection;
    this.Coding = Coding;
    this.PinCount = PinCount;
    this.ChannelPinMap = ChannelPinMap;
    this.AlignmentLevel = AlignmentLevel;
};
OCA.OcaMediaSourceConnector.prototype = {
    signature: new SP.signature(SP.UINT16, SP.STRING, OCA.OcaMediaConnection, OCA.OcaMediaCoding, SP.UINT16, SP.MAP(SP.UINT16, OCA.OcaPortID), SP.FLOAT32),
    _values : function() {
        return [ this.IDInternal, this.IDExternal, this.Connection, this.Coding, this.PinCount, this.ChannelPinMap, this.AlignmentLevel ];
    },
};
OCA.OcaMediaSourceConnectorChangedEventData = function(Event, SourceConnector, ChangeType, ChangedElement) {
    this.Event = Event;
    this.SourceConnector = SourceConnector;
    this.ChangeType = ChangeType;
    this.ChangedElement = ChangedElement;
};
OCA.OcaMediaSourceConnectorChangedEventData.prototype = {
    signature: new SP.signature(OCA.OcaEvent, OCA.OcaMediaSourceConnector, SP.UINT8, SP.UINT16),
    _values : function() {
        return [ this.Event, this.SourceConnector, this.ChangeType, this.ChangedElement ];
    },
};
/*!
 *! Media sink (i.e. input) connector. Connects to an inbound stream.
 *! Collected by <b>OcaMediaTransportNetwork</b>.
 */
OCA.OcaMediaSinkConnector = function(IDInternal, IDExternal, Connection, Coding, PinCount, ChannelPinMap, AlignmentLevel, AlignmentGain) {
    this.IDInternal = IDInternal;
    this.IDExternal = IDExternal;
    this.Connection = Connection;
    this.Coding = Coding;
    this.PinCount = PinCount;
    this.ChannelPinMap = ChannelPinMap;
    this.AlignmentLevel = AlignmentLevel;
    this.AlignmentGain = AlignmentGain;
};
OCA.OcaMediaSinkConnector.prototype = {
    signature: new SP.signature(SP.UINT16, SP.STRING, OCA.OcaMediaConnection, OCA.OcaMediaCoding, SP.UINT16, OCA.OcaMultiMap(SP.UINT16, OCA.OcaPortID), SP.FLOAT32, SP.FLOAT32),
    _values : function() {
        return [ this.IDInternal, this.IDExternal, this.Connection, this.Coding, this.PinCount, this.ChannelPinMap, this.AlignmentLevel, this.AlignmentGain ];
    },
};
OCA.OcaMediaSinkConnectorChangedEventData = function(Event, SinkConnector, ChangeType, ChangedElement) {
    this.Event = Event;
    this.SinkConnector = SinkConnector;
    this.ChangeType = ChangeType;
    this.ChangedElement = ChangedElement;
};
OCA.OcaMediaSinkConnectorChangedEventData.prototype = {
    signature: new SP.signature(OCA.OcaEvent, OCA.OcaMediaSinkConnector, SP.UINT8, SP.UINT16),
    _values : function() {
        return [ this.Event, this.SinkConnector, this.ChangeType, this.ChangedElement ];
    },
};
/*!
 *! Event data for event OcaNumericObserver.Observation
 */
OCA.OcaObservationEventData = function(Event, Reading) {
    this.Event = Event;
    this.Reading = Reading;
};
OCA.OcaObservationEventData.prototype = {
    signature: new SP.signature(OCA.OcaEvent, SP.FLOAT64),
    _values : function() {
        return [ this.Event, this.Reading ];
    },
};
/*!
 *! Event data for event OcaNumericObserver.Observation
 */
OCA.OcaObservationListEventData = function(Event, Reading) {
    this.Event = Event;
    this.Reading = Reading;
};
OCA.OcaObservationListEventData.prototype = {
    signature: new SP.signature(OCA.OcaEvent, SP.LIST(SP.FLOAT64)),
    _values : function() {
        return [ this.Event, this.Reading ];
    },
};
/*!
 *! Class that defines the event data parameter for the <b>StatusChange
 *! </b>event defined in <b>OcaGrouper</b>.
 */
OCA.OcaGrouperStatusChangeEventData = function(Event, groupIndex, citizenIndex, changeType) {
    this.Event = Event;
    this.groupIndex = groupIndex;
    this.citizenIndex = citizenIndex;
    this.changeType = changeType;
};
OCA.OcaGrouperStatusChangeEventData.prototype = {
    signature: new SP.signature(OCA.OcaEvent, SP.UINT16, SP.UINT16, SP.UINT8),
    _values : function() {
        return [ this.Event, this.groupIndex, this.citizenIndex, this.changeType ];
    },
};
/*!
 *! Complex impedance. Expressed as a magnitude and phase.
 */
OCA.OcaImpedance = function(Magnitude, Phase) {
    this.Magnitude = Magnitude;
    this.Phase = Phase;
};
OCA.OcaImpedance.prototype = {
    signature: new SP.signature(SP.FLOAT32, SP.FLOAT32),
    _values : function() {
        return [ this.Magnitude, this.Phase ];
    },
};
/*!
 *! Multifield descriptor that defines a delay value element.
 */
OCA.OcaDelayValue = function(DelayValue, DelayUnit) {
    this.DelayValue = DelayValue;
    this.DelayUnit = DelayUnit;
};
OCA.OcaDelayValue.prototype = {
    signature: new SP.signature(SP.FLOAT32, SP.UINT8),
    _values : function() {
        return [ this.DelayValue, this.DelayUnit ];
    },
};
/*!
 *! A complex (i.e. magnitude + phase) transfer function.
 */
OCA.OcaTransferFunction = function(Frequency, Amplitude, Phase) {
    this.Frequency = Frequency;
    this.Amplitude = Amplitude;
    this.Phase = Phase;
};
OCA.OcaTransferFunction.prototype = {
    signature: new SP.signature(SP.LIST(SP.FLOAT32), SP.LIST(SP.FLOAT32), SP.LIST(SP.FLOAT32)),
    _values : function() {
        return [ this.Frequency, this.Amplitude, this.Phase ];
    },
};
/*!
 *! Multifield descriptor for a pilot tone detector element.
 */
OCA.OcaPilotToneDetectorSpec = function(Threshold, Frequency, PollInterval) {
    this.Threshold = Threshold;
    this.Frequency = Frequency;
    this.PollInterval = PollInterval;
};
OCA.OcaPilotToneDetectorSpec.prototype = {
    signature: new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.UINT32),
    _values : function() {
        return [ this.Threshold, this.Frequency, this.PollInterval ];
    },
};
/*!
 *! Describes an object that is a member of a block.
 */
OCA.OcaBlockMember = function(MemberObjectIdentification, ContainerObjectNumber) {
    this.MemberObjectIdentification = MemberObjectIdentification;
    this.ContainerObjectNumber = ContainerObjectNumber;
};
OCA.OcaBlockMember.prototype = {
    signature: new SP.signature(OCA.OcaObjectIdentification, SP.UINT32),
    _values : function() {
        return [ this.MemberObjectIdentification, this.ContainerObjectNumber ];
    },
};
/*!
 *! Unique identifier of type of reusable block.
 */
OCA.OcaGlobalBlockTypeIdentifier = function(Authority, ID) {
    this.Authority = Authority;
    this.ID = ID;
};
OCA.OcaGlobalBlockTypeIdentifier.prototype = {
    signature: new SP.signature(SP.BLOBFIXED(3), SP.UINT32),
    _values : function() {
        return [ this.Authority, this.ID ];
    },
};
/*!
 *! Representation of an OCA (input or output) port that is used in the
 *! signal path representation of an OCA device.
 */
OCA.OcaPort = function(Owner, ID, Name) {
    this.Owner = Owner;
    this.ID = ID;
    this.Name = Name;
};
OCA.OcaPort.prototype = {
    signature: new SP.signature(SP.UINT32, OCA.OcaPortID, SP.STRING),
    _values : function() {
        return [ this.Owner, this.ID, this.Name ];
    },
};
/*!
 *! Signal path between two object ports in the same device.
 */
OCA.OcaSignalPath = function(SourcePort, SinkPort) {
    this.SourcePort = SourcePort;
    this.SinkPort = SinkPort;
};
OCA.OcaSignalPath.prototype = {
    signature: new SP.signature(OCA.OcaPort, OCA.OcaPort),
    _values : function() {
        return [ this.SourcePort, this.SinkPort ];
    },
};
/*!
 *! Prototype object identification. Composite of prototype object number
 *! and prototype object's class identification. Used in
 *! <b>OcaBlockFactory</b>.
 */
OCA.OcaProtoObjectIdentification = function(POno, ClassIdentification) {
    this.POno = POno;
    this.ClassIdentification = ClassIdentification;
};
OCA.OcaProtoObjectIdentification.prototype = {
    signature: new SP.signature(SP.UINT32, OCA.OcaClassIdentification),
    _values : function() {
        return [ this.POno, this.ClassIdentification ];
    },
};
/*!
 *! Unique identifier of prototype input or output port within a block
 *! factory. Prototype port numbers are ordinals starting at 1, and there
 *! are separate numbering spaces for input and output ports.
 */
OCA.OcaProtoPortID = function(Mode, Index) {
    this.Mode = Mode;
    this.Index = Index;
};
OCA.OcaProtoPortID.prototype = {
    signature: new SP.signature(SP.UINT8, SP.UINT16),
    _values : function() {
        return [ this.Mode, this.Index ];
    },
};
/*!
 *! Representation of an OCA (input or output) proto-port that is used in
 *! the proto-signal path representation of an OCA device.
 */
OCA.OcaProtoPort = function(Owner, ProtoID, Name) {
    this.Owner = Owner;
    this.ProtoID = ProtoID;
    this.Name = Name;
};
OCA.OcaProtoPort.prototype = {
    signature: new SP.signature(SP.UINT32, OCA.OcaProtoPortID, SP.STRING),
    _values : function() {
        return [ this.Owner, this.ProtoID, this.Name ];
    },
};
/*!
 *! Proto-signal path between two proto-member ports in a factory.
 */
OCA.OcaProtoSignalPath = function(SourceProtoPort, SinkProtoPort) {
    this.SourceProtoPort = SourceProtoPort;
    this.SinkProtoPort = SinkProtoPort;
};
OCA.OcaProtoSignalPath.prototype = {
    signature: new SP.signature(OCA.OcaProtoPort, OCA.OcaProtoPort),
    _values : function() {
        return [ this.SourceProtoPort, this.SinkProtoPort ];
    },
};
/*!
 *! Result of object search via the Find...() methods of <b>OcaBlock</b>.
 *! Dynamic format, form used depends on type of search and options. The
 *! FieldMap parameter of the Find...() methods specifies which optional
 *! fields should be returned as nonnull.
 */
OCA.OcaObjectSearchResult = function(ONo, ClassIdentification, ContainerPath, Role, Label) {
    this.ONo = ONo;
    this.ClassIdentification = ClassIdentification;
    this.ContainerPath = ContainerPath;
    this.Role = Role;
    this.Label = Label;
};
OCA.OcaObjectSearchResult.prototype = {
    signature: new SP.signature(SP.UINT32, OCA.OcaClassIdentification, SP.LIST(SP.UINT32), SP.STRING, SP.STRING),
    _values : function() {
        return [ this.ONo, this.ClassIdentification, this.ContainerPath, this.Role, this.Label ];
    },
};
/*!
 *! Describes a group in a grouper.
 */
OCA.OcaGrouperGroup = function(Index, Name, ProxyONo) {
    this.Index = Index;
    this.Name = Name;
    this.ProxyONo = ProxyONo;
};
OCA.OcaGrouperGroup.prototype = {
    signature: new SP.signature(SP.UINT16, SP.STRING, SP.UINT32),
    _values : function() {
        return [ this.Index, this.Name, this.ProxyONo ];
    },
};
/*!
 *! Describes a citizen of a grouper. Refers to a specific worker object
 *! somewhere in the media network.
 */
OCA.OcaGrouperCitizen = function(Index, ObjectPath, Online) {
    this.Index = Index;
    this.ObjectPath = ObjectPath;
    this.Online = Online;
};
OCA.OcaGrouperCitizen.prototype = {
    signature: new SP.signature(SP.UINT16, OCA.OcaOPath, SP.BOOLEAN),
    _values : function() {
        return [ this.Index, this.ObjectPath, this.Online ];
    },
};
/*!
 *! Describes the enrollment of a citizen into a group.
 */
OCA.OcaGrouperEnrollment = function(GroupIndex, CitizenIndex) {
    this.GroupIndex = GroupIndex;
    this.CitizenIndex = CitizenIndex;
};
OCA.OcaGrouperEnrollment.prototype = {
    signature: new SP.signature(SP.UINT16, SP.UINT16),
    _values : function() {
        return [ this.GroupIndex, this.CitizenIndex ];
    },
};
/*!
 *! Status of an OcaTask: task state plus a nonspecific blob named
 *! Parameter which the application can use, or not. <ul> <li>The initial
 *! value of Parameter is null. </li> <li>The controller sets the value of
 *! Parameter via the Control() method. </li> <li>If the task's state
 *! changes due to an internal event (examples: task duration value
 *! reached; or failure due to an error), Parameter is not changed.</li>
 *! </ul>
 */
OCA.OcaTaskStatus = function(State, Parameter) {
    this.State = State;
    this.Parameter = Parameter;
};
OCA.OcaTaskStatus.prototype = {
    signature: new SP.signature(SP.UINT8, SP.BLOB),
    _values : function() {
        return [ this.State, this.Parameter ];
    },
};
/*!
 *! Unique identifier of a library volume within the device.
 */
OCA.OcaLibVolIdentifier = function(Library, ID) {
    this.Library = Library;
    this.ID = ID;
};
OCA.OcaLibVolIdentifier.prototype = {
    signature: new SP.signature(SP.UINT32, SP.UINT32),
    _values : function() {
        return [ this.Library, this.ID ];
    },
};
/*!
 *! Descriptor of a library volume. See <b>03 OcaLibrary</b> for
 *! explanation.
 */
OCA.OcaLibVolMetadata = function(Name, Type, Access, Version, Creator, UpDate) {
    this.Name = Name;
    this.Type = Type;
    this.Access = Access;
    this.Version = Version;
    this.Creator = Creator;
    this.UpDate = UpDate;
};
OCA.OcaLibVolMetadata.prototype = {
    signature: new SP.signature(SP.STRING, SP.UINT8, SP.UINT8, SP.UINT32, SP.STRING, SP.UINT64),
    _values : function() {
        return [ this.Name, this.Type, this.Access, this.Version, this.Creator, this.UpDate ];
    },
};
/*!
 *! Library volume. template. Template parameter is datatype of the
 *! volume. See <b>03 OcaLibrary</b> for explanation.
 */
OCA.OcaLibVol = function(Metadata, Data) {
    this.Metadata = Metadata;
    this.Data = Data;
};
OCA.OcaLibVol.prototype = {
    signature: new SP.signature(OCA.OcaLibVolMetadata, SP.BLOB),
    _values : function() {
        return [ this.Metadata, this.Data ];
    },
};
/*!
 *! Library volume data for a Parset (short for Parameter Set) volume. A
 *! Parset is a collection of operating parameter settings that can be
 *! applied to a block. Each Parset is associated with a specific block
 *! type, but not with a specific instance of that type. A Parset may be
 *! applied to any block instance of the associated type. A block's type
 *! is a the object number of its factory or, for factory-defined blocks,
 *! a unique identifier set at time of manufacture.
 */
OCA.OcaLibVolData_ParamSet = function(TargetBlockType, ParData) {
    this.TargetBlockType = TargetBlockType;
    this.ParData = ParData;
};
OCA.OcaLibVolData_ParamSet.prototype = {
    signature: new SP.signature(SP.UINT32, SP.BLOB),
    _values : function() {
        return [ this.TargetBlockType, this.ParData ];
    },
};
/*!
 *! A ParamSet assigment is the description of a binding of a ParamSet to
 *! a block instance.
 */
OCA.OcaLibParamSetAssignment = function(ParamSetIdentifier, TargetBlockONo) {
    this.ParamSetIdentifier = ParamSetIdentifier;
    this.TargetBlockONo = TargetBlockONo;
};
OCA.OcaLibParamSetAssignment.prototype = {
    signature: new SP.signature(SP.UINT16, SP.UINT32),
    _values : function() {
        return [ this.ParamSetIdentifier, this.TargetBlockONo ];
    },
};
/*!
 *! Descriptor of a system interface used by a network. Format is data
 *! network type dependent.
 */
OCA.OcaNetworkSystemInterfaceDescriptor = function(SystemInterfaceParameters, MyNetworkAddress) {
    this.SystemInterfaceParameters = SystemInterfaceParameters;
    this.MyNetworkAddress = MyNetworkAddress;
};
OCA.OcaNetworkSystemInterfaceDescriptor.prototype = {
    signature: new SP.signature(SP.BLOB, SP.BLOB),
    _values : function() {
        return [ this.SystemInterfaceParameters, this.MyNetworkAddress ];
    },
};
/*!
 *! Media clock nominal rate and associated parameters.
 */
OCA.OcaMediaClockRate = function(NominalRate, PullRange, Accuracy, JitterMax) {
    this.NominalRate = NominalRate;
    this.PullRange = PullRange;
    this.Accuracy = Accuracy;
    this.JitterMax = JitterMax;
};
OCA.OcaMediaClockRate.prototype = {
    signature: new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32, SP.FLOAT32),
    _values : function() {
        return [ this.NominalRate, this.PullRange, this.Accuracy, this.JitterMax ];
    },
};
/*!
 *! ID of a system interface used by a network. Format is data network
 *! type dependent.
 */
OCA.OcaNetworkSystemInterfaceID = function(SystemInterfaceHandle, MyNetworkAddress) {
    this.SystemInterfaceHandle = SystemInterfaceHandle;
    this.MyNetworkAddress = MyNetworkAddress;
};
OCA.OcaNetworkSystemInterfaceID.prototype = {
    signature: new SP.signature(SP.BLOB, SP.BLOB),
    _values : function() {
        return [ this.SystemInterfaceHandle, this.MyNetworkAddress ];
    },
};
/*!
 *! Historical statistics of the network.
 */
OCA.OcaNetworkStatistics = function(rxPacketErrors, txPacketErrors) {
    this.rxPacketErrors = rxPacketErrors;
    this.txPacketErrors = txPacketErrors;
};
OCA.OcaNetworkStatistics.prototype = {
    signature: new SP.signature(SP.UINT32, SP.UINT32),
    _values : function() {
        return [ this.rxPacketErrors, this.txPacketErrors ];
    },
};
/*!
 *! A signal source or sink connector at the far end of a stream -
 *! normally, in another device. Not all of the fields of this datatype
 *! need be used. The fields used will depend on remote device type, media
 *! transport network type, and media transport implementation. Normal
 *! usage scenarios are: <ol> <li><b><u>Unicast input or output</u></b>:
 *! The <b>OcaStream </b>object is instantiated in an
 *! <b>OcaStreamConnector </b>object in the local device, and it links to
 *! an <b>OcaStreamConnector </b>object in a remote device. </li>
 *! <li><b><u>Multicast input</u></b><u>:</u> The <b>OcaStream </b>object
 *! is instantiated in an <b>OcaStreamConnector </b>object in the local
 *! device, and, it may or may not link to an <b>OcaStreamConnector
 *! </b>object in a remote device. </li> <li><b><u>Multicast
 *! output</u></b><u>:</u> The <b>OcaStream </b>object is instantiated in
 *! an <b>OcaStreamConnector </b>object in the local device, but in this
 *! case does <u>not </u>link to any specific remote connector object.
 *! </li> </ol>
 */
OCA.OcaStreamConnectorIdentification = function(HostID, NetworkAddress, NodeID, StreamConnectorID) {
    this.HostID = HostID;
    this.NetworkAddress = NetworkAddress;
    this.NodeID = NodeID;
    this.StreamConnectorID = StreamConnectorID;
};
OCA.OcaStreamConnectorIdentification.prototype = {
    signature: new SP.signature(SP.BLOB, SP.BLOB, SP.BLOB, SP.BLOB),
    _values : function() {
        return [ this.HostID, this.NetworkAddress, this.NodeID, this.StreamConnectorID ];
    },
};
/*!
 *! A single-channel or multichannel signal flow between a local stream
 *! connector (i.e. <b>OcaStreamConnector </b>instance) of an
 *! <b>OcaStreamNetwork </b>object in this node and another ("remote")
 *! stream connector. Normally, the remote stream connector is in another
 *! node. Each stream is unidirectional. With respect to the
 *! <b>OcaStreamNetwork </b>object in question, a stream is either: <ul>
 *! <li><i>Outbound: </i>A signal flow from an output connector port in
 *! the <b>OcaStreamNetwork </b>object to an external destination; or</li>
 *! <li><i>Inbound: </i>A signal flow from an external source to an
 *! <i>input </i>connector in the <b>OcaStreamNetwork </b>object.</li>
 *! </ul> An <b>OcaStream </b>object may represent either a unicast or a
 *! multicast stream. Any given <b>OcaStreamConnector </b>object may
 *! support multiple outbound flows, but not multiple inbound flows.
 */
OCA.OcaStream = function(ErrorNumber, IDAdvertised, Index, Label, LocalConnectorONo, Priority, RemoteConnectorIdentification, Secure, Status, StreamParameters, StreamType) {
    this.ErrorNumber = ErrorNumber;
    this.IDAdvertised = IDAdvertised;
    this.Index = Index;
    this.Label = Label;
    this.LocalConnectorONo = LocalConnectorONo;
    this.Priority = Priority;
    this.RemoteConnectorIdentification = RemoteConnectorIdentification;
    this.Secure = Secure;
    this.Status = Status;
    this.StreamParameters = StreamParameters;
    this.StreamType = StreamType;
};
OCA.OcaStream.prototype = {
    signature: new SP.signature(SP.UINT16, SP.BLOB, SP.UINT16, SP.STRING, SP.UINT32, SP.UINT16, OCA.OcaStreamConnectorIdentification, SP.BOOLEAN, SP.UINT8, SP.BLOB, SP.UINT8),
    _values : function() {
        return [ this.ErrorNumber, this.IDAdvertised, this.Index, this.Label, this.LocalConnectorONo, this.Priority, this.RemoteConnectorIdentification, this.Secure, this.Status, this.StreamParameters, this.StreamType ];
    },
};
};
if (module) module.exports = f;
else f(w, w.OCA || (w.OCA = {}));
})(this, module);