
import {
    CommandRrq,
  } from '../OCA';

import {
    ObjectBase,
    Event,
    PropertyEvent,
    Property,
    Properties,
    createPropertySync,
    make_control_class,
  } from './Base.js';

import {
    OcaBaseDataType,
    OcaPortMode,
    OcaPortID,
    OcaClassAuthorityID,
    OcaComponent,
    OcaVersion,
    OcaClassIdentification,
    OcaOPath,
    OcaObjectIdentification,
    OcaMethodID,
    OcaPropertyID,
    OcaEventID,
    OcaPropertyDescriptor,
    OcaProperty,
    OcaStatus,
    OcaGlobalTypeIdentifier,
    OcaStringComparisonType,
    OcaPositionCoordinateSystem,
    OcaPositionDescriptor,
    OcaManagerDescriptor,
    OcaManagerDefaultObjectNumbers,
    OcaDeviceState,
    OcaModelGUID,
    OcaModelDescription,
    OcaResetCause,
    OcaPowerState,
    OcaEvent,
    OcaMethod,
    OcaPropertyChangeType,
    OcaLibVolChangedEventData,
    OcaMediaConnectorElement,
    OcaMediaConnectorState,
    OcaMediaConnectorStatus,
    OcaMediaConnectorStatusChangedEventData,
    OcaTaskState,
    OcaTaskStatus,
    OcaLibVolIdentifier,
    OcaTaskStateChangedEventData,
    OcaMediaStreamCastMode,
    OcaMediaConnection,
    OcaMediaCoding,
    OcaMediaSourceConnector,
    OcaMediaSourceConnectorChangedEventData,
    OcaMediaSinkConnector,
    OcaMediaSinkConnectorChangedEventData,
    OcaObjectListEventData,
    OcaObservationEventData,
    OcaObservationListEventData,
    OcaGrouperStatusChangeType,
    OcaGrouperStatusChangeEventData,
    OcaNotificationDeliveryMode,
    OcaSubscriptionManagerState,
    OcaImpedance,
    OcaMuteState,
    OcaPolarityState,
    OcaDelayUnit,
    OcaDelayValue,
    OcaTransferFunction,
    OcaClassicalFilterShape,
    OcaFilterPassband,
    OcaParametricEQShape,
    OcaDynamicsFunction,
    OcaPilotToneDetectorSpec,
    OcaWaveformType,
    OcaSweepType,
    OcaUnitOfMeasure,
    OcaPresentationUnit,
    OcaLevelDetectionLaw,
    OcaSensorReadingState,
    OcaLevelMeterLaw,
    OcaBlockMember,
    OcaPort,
    OcaSignalPath,
    OcaProtoObjectIdentification,
    OcaProtoPortID,
    OcaProtoPort,
    OcaProtoSignalPath,
    OcaObjectSearchResult,
    OcaObjectSearchResultFlags,
    OcaGrouperGroup,
    OcaGrouperCitizen,
    OcaGrouperEnrollment,
    OcaGrouperMode,
    OcaObserverState,
    OcaRelationalOperator,
    OcaPowerSupplyType,
    OcaPowerSupplyLocation,
    OcaPowerSupplyState,
    OcaRamperCommand,
    OcaRamperState,
    OcaTimeMode,
    OcaTimeUnits,
    OcaTimePTP,
    OcaTask,
    OcaTaskCommand,
    OcaTaskManagerState,
    OcaRamperInterpolationLaw,
    OcaLibVolStandardTypeID,
    OcaLibVolType,
    OcaLibraryIdentifier,
    OcaLibAccess,
    OcaLibVolMetadata,
    OcaLibVol,
    OcaLibVolData_ParamSet,
    OcaLibParamSetAssignment,
    OcaNetworkLinkType,
    OcaNetworkSystemInterfaceDescriptor,
    OcaApplicationNetworkState,
    OcaApplicationNetworkCommand,
    OcaNetworkMediaProtocol,
    OcaNetworkControlProtocol,
    OcaMediaConnectorCommand,
    OcaMediaClockAvailability,
    OcaMediaClockRate,
    OcaTimeReferenceType,
    OcaTimeProtocol,
    OcaTimeSourceAvailability,
    OcaTimeSourceSyncStatus,
    OcaNetworkSystemInterfaceID,
    OcaNetworkStatistics,
    OcaStreamConnectorIdentification,
    OcaStreamType,
    OcaStreamStatus,
    OcaStream,
    OcaMediaClockLockState,
    OcaMediaClockType,
    OcaNetworkStatus,
    OcaStreamConnectorStatus,
    OcaNetworkSignalChannelStatus,
    OcaNetworkMediaSourceOrSink,
  } from '../Types';

import {
    signature,
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
  } from '../signature_parser';

const OcaMultiMap = MULTIMAP;


/**
 * The abstract root class of which all OCA classes derive. It offers
 * basic OCA functionality such as locking an object and generalized data
 * access.
 * @extends ObjectBase
 */
export const OcaRoot = make_control_class(
    "OcaRoot",
    1,
    "\u0001",
    2,
    ObjectBase,
    [
      [ "GetClassIdentification", 1, 1, [  ], [ OcaClassIdentification ] ],
      [ "GetLockable", 1, 2, [  ], [ BOOLEAN ] ],
      [ "LockTotal", 1, 3, [  ], [  ] ],
      [ "Unlock", 1, 4, [  ], [  ] ],
      [ "GetRole", 1, 5, [  ], [ STRING ] ],
      [ "LockReadonly", 1, 6, [  ], [  ] ]
    ],
    [
      new Property("ClassID", new signature(BLOB16), 1, 1, true, true, null),
      new Property("ClassVersion", new signature(UINT16), 1, 2, true, true, null),
      new Property("ObjectNumber", new signature(UINT32), 1, 3, true, false, null),
      new Property("Lockable", new signature(BOOLEAN), 1, 4, true, false, null),
      new Property("Role", new signature(STRING), 1, 5, true, false, null)
    ],
    [
      [ "PropertyChanged", 1, 1, [ OcaPropertyID, REST ] ]
    ]
);


/**
 * Abstract base class for classes that represent the device's
 * application and support functions.
 * @extends OcaRoot
 */
export const OcaWorker = make_control_class(
    "OcaWorker",
    2,
    "\u0001\u0001",
    2,
    OcaRoot,
    [
      [ "GetEnabled", 2, 1, [  ], [ BOOLEAN ] ],
      [ "SetEnabled", 2, 2, [ BOOLEAN ], [  ] ],
      [ "AddPort", 2, 3, [ STRING, OcaPortMode ], [ OcaPortID ] ],
      [ "DeletePort", 2, 4, [ OcaPortID ], [  ] ],
      [ "GetPorts", 2, 5, [  ], [ LIST(OcaPort) ] ],
      [ "GetPortName", 2, 6, [ OcaPortID ], [ STRING ] ],
      [ "SetPortName", 2, 7, [ OcaPortID, STRING ], [  ] ],
      [ "GetLabel", 2, 8, [  ], [ STRING ] ],
      [ "SetLabel", 2, 9, [ STRING ], [  ] ],
      [ "GetOwner", 2, 10, [  ], [ UINT32 ] ],
      [ "GetLatency", 2, 11, [  ], [ FLOAT32 ] ],
      [ "SetLatency", 2, 12, [ FLOAT32 ], [  ] ],
      [ "GetPath", 2, 13, [  ], [ LIST(STRING), LIST(UINT32) ] ]
    ],
    [
      new Property("Enabled", new signature(BOOLEAN), 2, 1, false, false, null),
      new Property("Ports", new signature(LIST(OcaPort)), 2, 2, false, false, null),
      new Property("Label", new signature(STRING), 2, 3, false, false, null),
      new Property("Owner", new signature(UINT32), 2, 4, false, false, null),
      new Property("Latency", new signature(FLOAT32), 2, 5, false, false, null)
    ],
    [
    ]
);


/**
 * Abstract base class for all actuators (i.e. devices that affect the
 * routing and/or content of the audio signal, or provide ancillary
 * functions such as power).
 * @extends OcaWorker
 */
export const OcaActuator = make_control_class(
    "OcaActuator",
    3,
    "\u0001\u0001\u0001",
    2,
    OcaWorker,
    [
    ],
    [
    ],
    [
    ]
);


/**
 * Signal mute.
 * @extends OcaActuator
 */
export const OcaMute = make_control_class(
    "OcaMute",
    4,
    "\u0001\u0001\u0001\u0002",
    2,
    OcaActuator,
    [
      [ "GetState", 4, 1, [  ], [ OcaMuteState ] ],
      [ "SetState", 4, 2, [ OcaMuteState ], [  ] ]
    ],
    [
      new Property("State", new signature(OcaMuteState), 4, 1, false, false, null)
    ],
    [
    ]
);


/**
 * Signal inverter
 * @extends OcaActuator
 */
export const OcaPolarity = make_control_class(
    "OcaPolarity",
    4,
    "\u0001\u0001\u0001\u0003",
    2,
    OcaActuator,
    [
      [ "GetState", 4, 1, [  ], [ OcaPolarityState ] ],
      [ "SetState", 4, 2, [ OcaPolarityState ], [  ] ]
    ],
    [
      new Property("State", new signature(OcaPolarityState), 4, 1, false, false, null)
    ],
    [
    ]
);


/**
 * (n)-position single-pole switch.
 * @extends OcaActuator
 */
export const OcaSwitch = make_control_class(
    "OcaSwitch",
    4,
    "\u0001\u0001\u0001\u0004",
    2,
    OcaActuator,
    [
      [ "GetPosition", 4, 1, [  ], [ UINT16, UINT16, UINT16 ] ],
      [ "SetPosition", 4, 2, [ UINT16 ], [  ] ],
      [ "GetPositionName", 4, 3, [ UINT16 ], [ STRING ] ],
      [ "SetPositionName", 4, 4, [ UINT16, STRING ], [  ] ],
      [ "GetPositionNames", 4, 5, [  ], [ LIST(STRING) ] ],
      [ "SetPositionNames", 4, 6, [ LIST(STRING) ], [  ] ],
      [ "GetPositionEnabled", 4, 7, [ UINT16 ], [ BOOLEAN ] ],
      [ "SetPositionEnabled", 4, 8, [ UINT16, BOOLEAN ], [  ] ],
      [ "GetPositionEnableds", 4, 9, [  ], [ LIST(BOOLEAN) ] ],
      [ "SetPositionEnableds", 4, 10, [ LIST(BOOLEAN) ], [  ] ]
    ],
    [
      new Property("Position", new signature(UINT16), 4, 1, false, false, null),
      new Property("PositionNames", new signature(LIST(STRING)), 4, 2, false, false, null),
      new Property("PositionEnable", new signature(LIST(BOOLEAN)), 4, 3, false, false, null)
    ],
    [
    ]
);


/**
 * Gain (or attenuation) element.
 * @extends OcaActuator
 */
export const OcaGain = make_control_class(
    "OcaGain",
    4,
    "\u0001\u0001\u0001\u0005",
    2,
    OcaActuator,
    [
      [ "GetGain", 4, 1, [  ], [ FLOAT32, FLOAT32, FLOAT32 ] ],
      [ "SetGain", 4, 2, [ FLOAT32 ], [  ] ]
    ],
    [
      new Property("Gain", new signature(FLOAT32), 4, 1, false, false, null)
    ],
    [
    ]
);


/**
 * Pan or Balance control.
 * @extends OcaActuator
 */
export const OcaPanBalance = make_control_class(
    "OcaPanBalance",
    4,
    "\u0001\u0001\u0001\u0006",
    2,
    OcaActuator,
    [
      [ "GetPosition", 4, 1, [  ], [ FLOAT32, FLOAT32, FLOAT32 ] ],
      [ "SetPosition", 4, 2, [ FLOAT32 ], [  ] ],
      [ "GetMidpointGain", 4, 3, [  ], [ FLOAT32, FLOAT32, FLOAT32 ] ],
      [ "SetMidpointGain", 4, 4, [ FLOAT32 ], [  ] ]
    ],
    [
      new Property("Position", new signature(FLOAT32), 4, 1, false, false, null),
      new Property("MidpointGain", new signature(FLOAT32), 4, 2, false, false, null)
    ],
    [
    ]
);


/**
 * Signal delay - basic version.
 * @extends OcaActuator
 */
export const OcaDelay = make_control_class(
    "OcaDelay",
    4,
    "\u0001\u0001\u0001\u0007",
    2,
    OcaActuator,
    [
      [ "GetDelayTime", 4, 1, [  ], [ FLOAT32, FLOAT32, FLOAT32 ] ],
      [ "SetDelayTime", 4, 2, [ FLOAT32 ], [  ] ]
    ],
    [
      new Property("DelayTime", new signature(FLOAT32), 4, 1, false, false, null)
    ],
    [
    ]
);


/**
 * Signal delay - extended version. Allows setting delay value in various
 * units. Note that the inherited property 04p01 DelayTime is also
 * supported by this class and reflects actual achieved delay in seconds.
 * @extends OcaDelay
 */
export const OcaDelayExtended = make_control_class(
    "OcaDelayExtended",
    5,
    "\u0001\u0001\u0001\u0007\u0001",
    2,
    OcaDelay,
    [
      [ "GetDelayValue", 5, 1, [  ], [ OcaDelayValue, OcaDelayValue, OcaDelayValue ] ],
      [ "SetDelayValue", 5, 2, [ OcaDelayValue ], [  ] ],
      [ "GetDelayValueConverted", 5, 3, [ OcaDelayUnit ], [ OcaDelayValue ] ]
    ],
    [
      new Property("DelayValue", new signature(OcaDelayValue), 5, 1, false, false, null)
    ],
    [
    ]
);


/**
 * Simple frequency actuator.
 * @extends OcaActuator
 */
export const OcaFrequencyActuator = make_control_class(
    "OcaFrequencyActuator",
    4,
    "\u0001\u0001\u0001\b",
    2,
    OcaActuator,
    [
      [ "GetFrequency", 4, 1, [  ], [ FLOAT32, FLOAT32, FLOAT32 ] ],
      [ "SetFrequency", 4, 2, [ FLOAT32 ], [  ] ]
    ],
    [
      new Property("Frequency", new signature(FLOAT32), 4, 1, false, false, null)
    ],
    [
    ]
);


/**
 * A classical analog-style filter - highpass, lowpass, bandpass, etc.,
 * with shape characteristics such as Butterworth, Chebyshev, Bessel, and
 * Linkwitz-Riley. Frequently used in loudspeaker crossover networks.
 * @extends OcaActuator
 */
export const OcaFilterClassical = make_control_class(
    "OcaFilterClassical",
    4,
    "\u0001\u0001\u0001\t",
    2,
    OcaActuator,
    [
      [ "GetFrequency", 4, 1, [  ], [ FLOAT32, FLOAT32, FLOAT32 ] ],
      [ "SetFrequency", 4, 2, [ FLOAT32 ], [  ] ],
      [ "GetPassband", 4, 3, [  ], [ OcaFilterPassband ] ],
      [ "SetPassband", 4, 4, [ OcaFilterPassband ], [  ] ],
      [ "GetShape", 4, 5, [  ], [ OcaClassicalFilterShape ] ],
      [ "SetShape", 4, 6, [ OcaClassicalFilterShape ], [  ] ],
      [ "GetOrder", 4, 7, [  ], [ UINT16, UINT16, UINT16 ] ],
      [ "SetOrder", 4, 8, [ UINT16 ], [  ] ],
      [ "GetParameter", 4, 9, [  ], [ FLOAT32, FLOAT32, FLOAT32 ] ],
      [ "SetParameter", 4, 10, [ FLOAT32 ], [  ] ],
      [ "SetMultiple", 4, 11, [ UINT16, FLOAT32, OcaFilterPassband, OcaClassicalFilterShape, UINT16, FLOAT32 ], [  ] ]
    ],
    [
      new Property("Frequency", new signature(FLOAT32), 4, 1, false, false, null),
      new Property("Passband", new signature(OcaFilterPassband), 4, 2, false, false, null),
      new Property("Shape", new signature(OcaClassicalFilterShape), 4, 3, false, false, null),
      new Property("Order", new signature(UINT16), 4, 4, false, false, null),
      new Property("Parameter", new signature(FLOAT32), 4, 5, false, false, null)
    ],
    [
    ]
);


/**
 * A parametric equalizer section with various shape options.
 * @extends OcaActuator
 */
export const OcaFilterParametric = make_control_class(
    "OcaFilterParametric",
    4,
    "\u0001\u0001\u0001\n",
    2,
    OcaActuator,
    [
      [ "GetFrequency", 4, 1, [  ], [ FLOAT32, FLOAT32, FLOAT32 ] ],
      [ "SetFrequency", 4, 2, [ FLOAT32 ], [  ] ],
      [ "GetShape", 4, 3, [  ], [ OcaParametricEQShape ] ],
      [ "SetShape", 4, 4, [ OcaParametricEQShape ], [  ] ],
      [ "GetWidthParameter", 4, 5, [  ], [ FLOAT32, FLOAT32, FLOAT32 ] ],
      [ "SetWidthParameter", 4, 6, [ FLOAT32 ], [  ] ],
      [ "GetInbandGain", 4, 7, [  ], [ FLOAT32, FLOAT32, FLOAT32 ] ],
      [ "SetInbandgain", 4, 8, [ FLOAT32 ], [  ] ],
      [ "GetShapeParameter", 4, 9, [  ], [ FLOAT32, FLOAT32, FLOAT32 ] ],
      [ "SetShapeParameter", 4, 10, [ FLOAT32 ], [  ] ],
      [ "SetMultiple", 4, 11, [ UINT16, FLOAT32, OcaParametricEQShape, FLOAT32, FLOAT32, FLOAT32 ], [  ] ]
    ],
    [
      new Property("Frequency", new signature(FLOAT32), 4, 1, false, false, null),
      new Property("Shape", new signature(OcaParametricEQShape), 4, 2, false, false, null),
      new Property("WidthParameter", new signature(FLOAT32), 4, 3, false, false, ["Q"]),
      new Property("InBandGain", new signature(FLOAT32), 4, 4, false, false, null),
      new Property("ShapeParameter", new signature(FLOAT32), 4, 5, false, false, null)
    ],
    [
    ]
);


/**
 * A generic Z-domain rational polynomial filter section: <u>A(0) + A(1)z
 * + A(2)z^2 + A(3)z^3 + ...</u> B(0) + B(1)z + B(2)z^2 + B(3)z^3 + ...
 * @extends OcaActuator
 */
export const OcaFilterPolynomial = make_control_class(
    "OcaFilterPolynomial",
    4,
    "\u0001\u0001\u0001\u000b",
    2,
    OcaActuator,
    [
      [ "GetCoefficients", 4, 1, [  ], [ LIST(FLOAT32), LIST(FLOAT32) ] ],
      [ "SetCoefficients", 4, 2, [ LIST(FLOAT32), LIST(FLOAT32) ], [  ] ],
      [ "GetSampleRate", 4, 3, [  ], [ FLOAT32, FLOAT32, FLOAT32 ] ],
      [ "SetSampleRate", 4, 4, [ FLOAT32 ], [  ] ],
      [ "GetMaxOrder", 4, 5, [  ], [ UINT8 ] ]
    ],
    [
      new Property("A", new signature(LIST(FLOAT32)), 4, 1, false, false, null),
      new Property("B", new signature(LIST(FLOAT32)), 4, 2, false, false, null),
      new Property("SampleRate", new signature(FLOAT32), 4, 3, false, false, null),
      new Property("MaxOrder", new signature(UINT8), 4, 4, true, false, null)
    ],
    [
    ]
);


/**
 * A finite impulse response (FIR) filter.
 * @extends OcaActuator
 */
export const OcaFilterFIR = make_control_class(
    "OcaFilterFIR",
    4,
    "\u0001\u0001\u0001\f",
    2,
    OcaActuator,
    [
      [ "GetLength", 4, 1, [  ], [ UINT32, UINT32, UINT32 ] ],
      [ "GetCoefficients", 4, 2, [  ], [ LIST(FLOAT32) ] ],
      [ "SetCoefficients", 4, 3, [ LIST(FLOAT32) ], [  ] ],
      [ "GetSampleRate", 4, 4, [  ], [ FLOAT32, FLOAT32, FLOAT32 ] ],
      [ "SetSampleRate", 4, 5, [ FLOAT32 ], [  ] ]
    ],
    [
      new Property("Length", new signature(UINT32), 4, 1, true, false, null),
      new Property("Coefficients", new signature(LIST(FLOAT32)), 4, 2, false, false, null),
      new Property("SampleRate", new signature(FLOAT32), 4, 3, false, false, null)
    ],
    [
    ]
);


/**
 * An arbitrary-curve filter, with transfer function specified as
 * amplitude and phase versus frequency.
 * @extends OcaActuator
 */
export const OcaFilterArbitraryCurve = make_control_class(
    "OcaFilterArbitraryCurve",
    4,
    "\u0001\u0001\u0001\r",
    2,
    OcaActuator,
    [
      [ "GetTransferFunction", 4, 1, [  ], [ OcaTransferFunction ] ],
      [ "SetTransferFunction", 4, 2, [ OcaTransferFunction ], [  ] ],
      [ "GetSampleRate", 4, 3, [  ], [ FLOAT32, FLOAT32, FLOAT32 ] ],
      [ "SetSampleRate", 4, 4, [ FLOAT32 ], [  ] ],
      [ "GetTFMinLength", 4, 5, [  ], [ UINT16 ] ],
      [ "GetTFMaxLength", 4, 6, [  ], [ UINT16 ] ]
    ],
    [
      new Property("TransferFunction", new signature(OcaTransferFunction), 4, 1, false, false, null),
      new Property("SampleRate", new signature(FLOAT32), 4, 2, false, false, null),
      new Property("TFMinLength", new signature(UINT16), 4, 3, false, false, null),
      new Property("TFMaxLength", new signature(UINT16), 4, 4, false, false, null)
    ],
    [
    ]
);


/**
 * A multipurpose dynamics processor. Can be configured as compressor,
 * limiter, expander, or gate. This class is expected to handle the
 * majority of the basic cases. More complex devices may be described in
 * a different manner, using one or more <b>OcaDynamicsDetector</b> and
 * <b>OcaDynamicsCurve</b> objects, in conjunction with other Worker
 * objects as needed.
 * @extends OcaActuator
 */
export const OcaDynamics = make_control_class(
    "OcaDynamics",
    4,
    "\u0001\u0001\u0001\u000e",
    2,
    OcaActuator,
    [
      [ "GetTriggered", 4, 1, [  ], [ BOOLEAN ] ],
      [ "GetDynamicGain", 4, 2, [  ], [ FLOAT32 ] ],
      [ "GetFunction", 4, 3, [  ], [ OcaDynamicsFunction ] ],
      [ "SetFunction", 4, 4, [ OcaDynamicsFunction ], [  ] ],
      [ "GetRatio", 4, 5, [  ], [ FLOAT32, FLOAT32, FLOAT32 ] ],
      [ "SetRatio", 4, 6, [ FLOAT32 ], [  ] ],
      [ "GetThreshold", 4, 7, [  ], [ FLOAT32, FLOAT32, FLOAT32 ] ],
      [ "SetThreshold", 4, 8, [ FLOAT32 ], [  ] ],
      [ "GetThresholdPresentationUnits", 4, 9, [  ], [ OcaPresentationUnit ] ],
      [ "SetThresholdPresentationUnits", 4, 10, [ OcaPresentationUnit ], [  ] ],
      [ "GetDetectorLaw", 4, 11, [  ], [ OcaLevelDetectionLaw ] ],
      [ "SetDetectorLaw", 4, 12, [ OcaLevelDetectionLaw ], [  ] ],
      [ "GetAttackTime", 4, 13, [  ], [ FLOAT32, FLOAT32, FLOAT32 ] ],
      [ "SetAttackTime", 4, 14, [ FLOAT32 ], [  ] ],
      [ "GetReleaseTime", 4, 15, [  ], [ FLOAT32, FLOAT32, FLOAT32 ] ],
      [ "SetReleaseTime", 4, 16, [ FLOAT32 ], [  ] ],
      [ "GetHoldTime", 4, 17, [  ], [ FLOAT32, FLOAT32, FLOAT32 ] ],
      [ "SetHoldTime", 4, 18, [ FLOAT32 ], [  ] ],
      [ "GetDynamicGainFloor", 4, 19, [  ], [ FLOAT32, FLOAT32, FLOAT32 ] ],
      [ "SetDynamicGainFloor", 4, 20, [ FLOAT32 ], [  ] ],
      [ "GetDynamicGainCeiling", 4, 21, [  ], [ FLOAT32, FLOAT32, FLOAT32 ] ],
      [ "SetDynamicGainCeiling", 4, 22, [ FLOAT32 ], [  ] ],
      [ "GetKneeParameter", 4, 23, [  ], [ FLOAT32, FLOAT32, FLOAT32 ] ],
      [ "SetKneeParameter", 4, 24, [ FLOAT32 ], [  ] ],
      [ "GetSlope", 4, 25, [  ], [ FLOAT32, FLOAT32, FLOAT32 ] ],
      [ "SetSlope", 4, 26, [ FLOAT32 ], [  ] ],
      [ "SetMultiple", 4, 27, [ UINT16, OcaDynamicsFunction, FLOAT32, OcaPresentationUnit, OcaLevelDetectionLaw, FLOAT32, FLOAT32, FLOAT32, FLOAT32, FLOAT32, FLOAT32, FLOAT32 ], [  ] ]
    ],
    [
      new Property("Triggered", new signature(BOOLEAN), 4, 1, false, false, null),
      new Property("DynamicGain", new signature(FLOAT32), 4, 2, false, false, null),
      new Property("Function", new signature(OcaDynamicsFunction), 4, 3, false, false, null),
      new Property("Ratio", new signature(FLOAT32), 4, 4, false, false, null),
      new Property("Threshold", new signature(FLOAT32), 4, 5, false, false, null),
      new Property("ThresholdPresentationUnits", new signature(OcaPresentationUnit), 4, 6, false, false, null),
      new Property("DetectorLaw", new signature(OcaLevelDetectionLaw), 4, 7, false, false, null),
      new Property("AttackTime", new signature(FLOAT32), 4, 8, false, false, null),
      new Property("ReleaseTime", new signature(FLOAT32), 4, 9, false, false, null),
      new Property("HoldTime", new signature(FLOAT32), 4, 10, false, false, null),
      new Property("DynamicGainCeiling", new signature(FLOAT32), 4, 11, false, false, null),
      new Property("DynamicGainFloor", new signature(FLOAT32), 4, 12, false, false, null),
      new Property("KneeParameter", new signature(FLOAT32), 4, 13, false, false, null),
      new Property("Slope", new signature(FLOAT32), 4, 14, false, false, null)
    ],
    [
    ]
);


/**
 * Dynamics element : side-chain detector.
 * @extends OcaActuator
 */
export const OcaDynamicsDetector = make_control_class(
    "OcaDynamicsDetector",
    4,
    "\u0001\u0001\u0001\u000f",
    2,
    OcaActuator,
    [
      [ "GetLaw", 4, 1, [  ], [ OcaLevelDetectionLaw ] ],
      [ "SetLaw", 4, 2, [ OcaLevelDetectionLaw ], [  ] ],
      [ "GetAttackTime", 4, 3, [  ], [ FLOAT32, FLOAT32, FLOAT32 ] ],
      [ "SetAttackTime", 4, 4, [ FLOAT32 ], [  ] ],
      [ "GetReleaseTime", 4, 5, [  ], [ FLOAT32, FLOAT32, FLOAT32 ] ],
      [ "SetReleaseTime", 4, 6, [ FLOAT32 ], [  ] ],
      [ "GetHoldTime", 4, 7, [  ], [ FLOAT32, FLOAT32, FLOAT32 ] ],
      [ "SetHoldTime", 4, 8, [ FLOAT32 ], [  ] ],
      [ "SetMultiple", 4, 9, [ UINT16, OcaLevelDetectionLaw, FLOAT32, FLOAT32, FLOAT32 ], [  ] ]
    ],
    [
      new Property("Law", new signature(OcaLevelDetectionLaw), 4, 1, false, false, null),
      new Property("AttackTime", new signature(FLOAT32), 4, 2, false, false, null),
      new Property("ReleaseTime", new signature(FLOAT32), 4, 3, false, false, null),
      new Property("HoldTime", new signature(FLOAT32), 4, 4, false, false, null)
    ],
    [
    ]
);


/**
 * Dynamic compression / expansion curve. <b>Curve</b> means a function
 * that expresses the relationship of output level to input level. The
 * dependent variable (Y) of the curve is output level; the independent
 * variable (X) is input level. Every curve is composed of <b>(n+1)</b>
 * straight-line <b>segments</b> joined by <b>(n)</b> small fillets
 * called <b>knees</b>. Each knee occurs at a particular input level
 * value called the <b>threshold.</b> Each segment is characterized by
 * its <b>slope.</b> <b> </b> | <b>/</b> | S3 <b>/</b> | S2 <b>/</b> |
 * T1<b>-------------</b>T2 | <b>/</b> | S1 <b>/</b> | <b>/</b> |
 * <b>/</b> +------------------------------------ This "drawing" shows a
 * three-segment curve. The horizontal axis is input level, vertical axis
 * is output level. Algebraically, a curve is a function <b> Out = Curve(
 * In, T[1..n-1], S[1..n], K[1..n-1] )</b> where <b>n</b> is the number
 * of segments, and <b>In </b>is input level in dBr <b>Out </b>is output
 * level in dBr <b>T[1...n-1]</b> is an array of <b>thresholds</b> in dBr
 * <b>S[1...n] </b>is an array of <b>slopes</b> in dBr per dBr, i.e.
 * unitless <b>K[1..n]</b> is the <b>knee parameter</b>, an
 * implementation-dependant parameter that specifies the shape of the
 * curve around the knee. Each segment has a slope that expresses its
 * ratio of output level to input level. Note that this slope is the
 * inverse of what dynamics processors call "ratio". For example, a ratio
 * of 2:1 is represented by a curve segment with slope 1/2 = 0.5. This
 * model can represent familiar audio dynamics elements (we ignore
 * <b>K[]</b> in these examples): - Compressor with ratio of 2:1 and
 * threshold of 10dBr: <b> n = 2</b> <b> T[1] = 10</b> <b> S[1] = 1</b>
 * <b> S[2] = 0.5</b> - Hard limiter with threshold of 18dBr: <b> n =
 * 2</b> T[1] = 18 S[1] = 1 S[2] = 0 - Upward expander with ratio of
 * 1.5:1 and threshold of -12dBr: <b> n = 2</b> T[1] = -12 S[1] = 1 S[2]
 * = 1.5 - Downward expander (gate) with ratio of 50:1 and threshold of
 * -45dBr: <b> n = 2</b> T[1] = -45 S[1] = 50 S[2] = 1 This class,
 * <b>OcaDynamicsCurve,</b> adds two additional parameters to the basic
 * curve mechanism. <b>Out = Curve( In, T[1..n-1], S[1..n], K[1..n-1] ,
 * Floor, Ceiling)</b> where <b>In, T[], and S[], </b>and <b>K[]</b> are
 * as defined above. <b>Floor</b> is the lowest gain (in dBr) that the
 * dynamics element is allowed to produce. <b>Ceiling </b>is the highest
 * gain (in dBr) that the dynamics element is allowed to produce. To show
 * the use of <b>Floor</b> and <b>Ceiling</b>, we revisit some of the
 * examples above (again, <b>K[]</b> is ignored): - Compressor with ratio
 * of 2:1, threshold of 10dBr, and max gain reduction of 20dB: <b> n =
 * 2</b> <b> T[1] = 10</b> <b> S[1] = 1</b> <b> S[2] = 0.5</b> <b> Floor
 * = -20</b> <b> Ceiling = 0</b> - Upward expander with ratio of 1.5:1,
 * threshold of -12dBr, and max gain boost of 4dB: <b> n = 2</b> T[1] =
 * -12 S[1] = 1 S[2] = 1.5 Floor = 0 Ceiling = 4.0 More complex dynamics
 * curves can be modeled by using more segments (<b>n &gt; 2)</b>.
 * @extends OcaActuator
 */
export const OcaDynamicsCurve = make_control_class(
    "OcaDynamicsCurve",
    4,
    "\u0001\u0001\u0001\u0010",
    2,
    OcaActuator,
    [
      [ "GetNSegments", 4, 1, [  ], [ UINT8, UINT8, UINT8 ] ],
      [ "SetNSegments", 4, 2, [ UINT8 ], [  ] ],
      [ "GetThreshold", 4, 3, [  ], [ LIST(FLOAT32), FLOAT32, FLOAT32 ] ],
      [ "SetThreshold", 4, 4, [ LIST(FLOAT32) ], [  ] ],
      [ "GetSlope", 4, 5, [  ], [ LIST(FLOAT32), LIST(FLOAT32), LIST(FLOAT32) ] ],
      [ "SetSlope", 4, 6, [ LIST(FLOAT32) ], [  ] ],
      [ "GetKneeParameter", 4, 7, [  ], [ LIST(FLOAT32), LIST(FLOAT32), LIST(FLOAT32) ] ],
      [ "SetKneeParameter", 4, 8, [ LIST(FLOAT32) ], [  ] ],
      [ "GetDynamicGainCeiling", 4, 9, [  ], [ FLOAT32, FLOAT32, FLOAT32 ] ],
      [ "SetDynamicGainCeiling", 4, 10, [ FLOAT32 ], [  ] ],
      [ "GetDynamicGainFloor", 4, 11, [  ], [ FLOAT32, FLOAT32, FLOAT32 ] ],
      [ "SetDynamicGainFloor", 4, 12, [ FLOAT32 ], [  ] ],
      [ "SetMultiple", 4, 13, [ UINT16, UINT8, LIST(FLOAT32), LIST(FLOAT32), LIST(FLOAT32), FLOAT32, FLOAT32 ], [  ] ]
    ],
    [
      new Property("nSegments", new signature(UINT8), 4, 1, false, false, null),
      new Property("Threshold", new signature(LIST(FLOAT32)), 4, 2, false, false, null),
      new Property("Slope", new signature(LIST(FLOAT32)), 4, 3, false, false, null),
      new Property("KneeParameter", new signature(LIST(FLOAT32)), 4, 4, false, false, null),
      new Property("DynamicGainFloor", new signature(FLOAT32), 4, 5, false, false, null),
      new Property("DynamicGainCeiling", new signature(FLOAT32), 4, 6, false, false, null)
    ],
    [
    ]
);


/**
 * Multiwaveform signal generator with optional sweep capability.
 * @extends OcaActuator
 */
export const OcaSignalGenerator = make_control_class(
    "OcaSignalGenerator",
    4,
    "\u0001\u0001\u0001\u0011",
    2,
    OcaActuator,
    [
      [ "GetFrequency1", 4, 1, [  ], [ FLOAT32, FLOAT32, FLOAT32 ] ],
      [ "SetFrequency1", 4, 2, [ FLOAT32 ], [  ] ],
      [ "GetFrequency2", 4, 3, [  ], [ FLOAT32, FLOAT32, FLOAT32 ] ],
      [ "SetFrequency2", 4, 4, [ FLOAT32 ], [  ] ],
      [ "GetLevel", 4, 5, [  ], [ FLOAT32, FLOAT32, FLOAT32 ] ],
      [ "SetLevel", 4, 6, [ FLOAT32 ], [  ] ],
      [ "GetWaveform", 4, 7, [  ], [ OcaWaveformType ] ],
      [ "SetWaveform", 4, 8, [ OcaWaveformType ], [  ] ],
      [ "GetSweepType", 4, 9, [  ], [ OcaSweepType ] ],
      [ "SetSweepType", 4, 10, [ OcaSweepType ], [  ] ],
      [ "GetSweepTime", 4, 11, [  ], [ FLOAT32, FLOAT32, FLOAT32 ] ],
      [ "SetSweepTime", 4, 12, [ FLOAT32 ], [  ] ],
      [ "GetSweepRepeat", 4, 13, [  ], [ BOOLEAN ] ],
      [ "SetSweepRepeat", 4, 14, [ BOOLEAN ], [  ] ],
      [ "GetGenerating", 4, 15, [  ], [ BOOLEAN ] ],
      [ "Start", 4, 16, [  ], [  ] ],
      [ "Stop", 4, 17, [  ], [  ] ],
      [ "SetMultiple", 4, 18, [ UINT16, FLOAT32, FLOAT32, FLOAT32, OcaWaveformType, OcaSweepType, FLOAT32, BOOLEAN ], [  ] ]
    ],
    [
      new Property("Frequency1", new signature(FLOAT32), 4, 1, false, false, null),
      new Property("Frequency2", new signature(FLOAT32), 4, 2, false, false, null),
      new Property("Level", new signature(FLOAT32), 4, 3, false, false, null),
      new Property("Waveform", new signature(OcaWaveformType), 4, 4, false, false, null),
      new Property("SweepType", new signature(OcaSweepType), 4, 5, false, false, null),
      new Property("SweepTime", new signature(FLOAT32), 4, 6, false, false, null),
      new Property("SweepRepeat", new signature(BOOLEAN), 4, 7, false, false, null),
      new Property("Generating", new signature(BOOLEAN), 4, 8, false, false, null)
    ],
    [
    ]
);


/**
 * A set of one or more non-network signal inputs. Number of channels is
 * set at construction time. This class has no native properties or
 * methods - they are all inherited from <b>OcaWorker</b> and above. It
 * is defined as a separate class as an aid to enumeration and signal
 * flow definition.
 * @extends OcaActuator
 */
export const OcaSignalInput = make_control_class(
    "OcaSignalInput",
    4,
    "\u0001\u0001\u0001\u0012",
    2,
    OcaActuator,
    [
    ],
    [
    ],
    [
    ]
);


/**
 * A set of one or more non-network signal outputs. Number of channels is
 * set at construction time. This class has no native properties or
 * methods - they are all inherited from <b>OcaWorker</b> and above. It
 * is defined as a separate class as an aid to enumeration and signal
 * flow definition.
 * @extends OcaActuator
 */
export const OcaSignalOutput = make_control_class(
    "OcaSignalOutput",
    4,
    "\u0001\u0001\u0001\u0013",
    2,
    OcaActuator,
    [
    ],
    [
    ],
    [
    ]
);


/**
 * A temperature actuator. Works in Celsius.
 * @extends OcaActuator
 */
export const OcaTemperatureActuator = make_control_class(
    "OcaTemperatureActuator",
    4,
    "\u0001\u0001\u0001\u0014",
    2,
    OcaActuator,
    [
      [ "GetTemperature", 4, 1, [  ], [ FLOAT32, FLOAT32, FLOAT32 ] ],
      [ "SetTemperature", 4, 2, [ FLOAT32 ], [  ] ]
    ],
    [
      new Property("Temperature", new signature(FLOAT32), 4, 1, false, false, null)
    ],
    [
    ]
);


/**
 * Represents a function that turns on some kind of human-detectable
 * indicator for purposes of device identification during network setup.
 * Physical form of indicator is not defined by OCA, so it could be
 * anything, e.g. <ul> <li>LED</li> <li>Foghorn</li> <li>Smoke
 * emitter</li> <li>Little waving robot hand wearing white glove</li>
 * <li>Jack-in-the-box popout</li> <li>et cetera</li> </ul>
 * @extends OcaActuator
 */
export const OcaIdentificationActuator = make_control_class(
    "OcaIdentificationActuator",
    4,
    "\u0001\u0001\u0001\u0015",
    2,
    OcaActuator,
    [
      [ "GetActive", 4, 1, [  ], [ BOOLEAN ] ],
      [ "SetActive", 4, 2, [ BOOLEAN ], [  ] ]
    ],
    [
      new Property("active", new signature(BOOLEAN), 4, 1, false, false, null)
    ],
    [
    ]
);


/**
 * Actuator with no control parameters, used as a simple node to
 * represent summations in block signal flows.
 * @extends OcaActuator
 */
export const OcaSummingPoint = make_control_class(
    "OcaSummingPoint",
    4,
    "\u0001\u0001\u0001\u0016",
    1,
    OcaActuator,
    [
    ],
    [
    ],
    [
    ]
);


/**
 * Abstract base class for weakly typed actuators.
 * @extends OcaActuator
 */
export const OcaBasicActuator = make_control_class(
    "OcaBasicActuator",
    4,
    "\u0001\u0001\u0001\u0001",
    2,
    OcaActuator,
    [
    ],
    [
    ],
    [
    ]
);


/**
 * Basic boolean actuator.
 * @extends OcaBasicActuator
 */
export const OcaBooleanActuator = make_control_class(
    "OcaBooleanActuator",
    5,
    "\u0001\u0001\u0001\u0001\u0001",
    2,
    OcaBasicActuator,
    [
      [ "GetSetting", 5, 1, [  ], [ BOOLEAN ] ],
      [ "SetSetting", 5, 2, [ BOOLEAN ], [  ] ]
    ],
    [
      new Property("Setting", new signature(BOOLEAN), 5, 1, false, false, null)
    ],
    [
    ]
);


/**
 * Basic int8 actuator.
 * @extends OcaBasicActuator
 */
export const OcaInt8Actuator = make_control_class(
    "OcaInt8Actuator",
    5,
    "\u0001\u0001\u0001\u0001\u0002",
    2,
    OcaBasicActuator,
    [
      [ "GetSetting", 5, 1, [  ], [ INT8, INT8, INT8 ] ],
      [ "SetSetting", 5, 2, [ INT8 ], [  ] ]
    ],
    [
      new Property("Setting", new signature(INT8), 5, 1, false, false, null)
    ],
    [
    ]
);


/**
 * Basic int16 actuator.
 * @extends OcaBasicActuator
 */
export const OcaInt16Actuator = make_control_class(
    "OcaInt16Actuator",
    5,
    "\u0001\u0001\u0001\u0001\u0003",
    2,
    OcaBasicActuator,
    [
      [ "GetSetting", 5, 1, [  ], [ INT16, INT16, INT16 ] ],
      [ "SetSetting", 5, 2, [ INT16 ], [  ] ]
    ],
    [
      new Property("Setting", new signature(INT16), 5, 1, false, false, null)
    ],
    [
    ]
);


/**
 * Basic int32 actuator.
 * @extends OcaBasicActuator
 */
export const OcaInt32Actuator = make_control_class(
    "OcaInt32Actuator",
    5,
    "\u0001\u0001\u0001\u0001\u0004",
    2,
    OcaBasicActuator,
    [
      [ "GetSetting", 5, 1, [  ], [ INT32, INT32, INT32 ] ],
      [ "SetSetting", 5, 2, [ INT32 ], [  ] ]
    ],
    [
      new Property("Setting", new signature(INT32), 5, 1, false, false, null)
    ],
    [
    ]
);


/**
 * Basic int64 actuator.
 * @extends OcaBasicActuator
 */
export const OcaInt64Actuator = make_control_class(
    "OcaInt64Actuator",
    5,
    "\u0001\u0001\u0001\u0001\u0005",
    2,
    OcaBasicActuator,
    [
      [ "GetSetting", 5, 1, [  ], [ INT64, INT64, INT64 ] ],
      [ "SetSetting", 5, 2, [ INT64 ], [  ] ]
    ],
    [
      new Property("Setting", new signature(INT64), 5, 1, false, false, null)
    ],
    [
    ]
);


/**
 * Basic uint8 actuator.
 * @extends OcaBasicActuator
 */
export const OcaUint8Actuator = make_control_class(
    "OcaUint8Actuator",
    5,
    "\u0001\u0001\u0001\u0001\u0006",
    2,
    OcaBasicActuator,
    [
      [ "GetSetting", 5, 1, [  ], [ UINT8, UINT8, UINT8 ] ],
      [ "SetSetting", 5, 2, [ UINT8 ], [  ] ]
    ],
    [
      new Property("Setting", new signature(UINT8), 5, 1, false, false, null)
    ],
    [
    ]
);


/**
 * Basic uint16 actuator.
 * @extends OcaBasicActuator
 */
export const OcaUint16Actuator = make_control_class(
    "OcaUint16Actuator",
    5,
    "\u0001\u0001\u0001\u0001\u0007",
    2,
    OcaBasicActuator,
    [
      [ "GetSetting", 5, 1, [  ], [ UINT16, UINT16, UINT16 ] ],
      [ "SetSetting", 5, 2, [ UINT16 ], [  ] ]
    ],
    [
      new Property("Setting", new signature(UINT16), 5, 1, false, false, null)
    ],
    [
    ]
);


/**
 * Basic uint32 actuator.
 * @extends OcaBasicActuator
 */
export const OcaUint32Actuator = make_control_class(
    "OcaUint32Actuator",
    5,
    "\u0001\u0001\u0001\u0001\b",
    2,
    OcaBasicActuator,
    [
      [ "GetSetting", 5, 1, [  ], [ UINT32, UINT32, UINT32 ] ],
      [ "SetSetting", 5, 2, [ UINT32 ], [  ] ]
    ],
    [
      new Property("Setting", new signature(UINT32), 5, 1, false, false, null)
    ],
    [
    ]
);


/**
 * Basic Uint64 actuator.
 * @extends OcaBasicActuator
 */
export const OcaUint64Actuator = make_control_class(
    "OcaUint64Actuator",
    5,
    "\u0001\u0001\u0001\u0001\t",
    2,
    OcaBasicActuator,
    [
      [ "GetSetting", 5, 1, [  ], [ UINT64, UINT64, UINT64 ] ],
      [ "SetSetting", 5, 2, [ UINT64 ], [  ] ]
    ],
    [
      new Property("Setting", new signature(UINT64), 5, 1, false, false, null)
    ],
    [
    ]
);


/**
 * Basic float32 actuator.
 * @extends OcaBasicActuator
 */
export const OcaFloat32Actuator = make_control_class(
    "OcaFloat32Actuator",
    5,
    "\u0001\u0001\u0001\u0001\n",
    2,
    OcaBasicActuator,
    [
      [ "GetSetting", 5, 1, [  ], [ FLOAT32, FLOAT32, FLOAT32 ] ],
      [ "SetSetting", 5, 2, [ FLOAT32 ], [  ] ]
    ],
    [
      new Property("Setting", new signature(FLOAT32), 5, 1, false, false, null)
    ],
    [
    ]
);


/**
 * Basic Float64 actuator.
 * @extends OcaBasicActuator
 */
export const OcaFloat64Actuator = make_control_class(
    "OcaFloat64Actuator",
    5,
    "\u0001\u0001\u0001\u0001\u000b",
    2,
    OcaBasicActuator,
    [
      [ "GetSetting", 5, 1, [  ], [ FLOAT64, FLOAT64, FLOAT64 ] ],
      [ "SetSetting", 5, 2, [ FLOAT64 ], [  ] ]
    ],
    [
      new Property("Setting", new signature(FLOAT64), 5, 1, false, false, null)
    ],
    [
    ]
);


/**
 * String actuator.
 * @extends OcaBasicActuator
 */
export const OcaStringActuator = make_control_class(
    "OcaStringActuator",
    5,
    "\u0001\u0001\u0001\u0001\f",
    2,
    OcaBasicActuator,
    [
      [ "GetValue", 5, 1, [  ], [ STRING ] ],
      [ "SetValue", 5, 2, [ STRING ], [  ] ],
      [ "GetMaxLen", 5, 3, [  ], [ UINT16 ] ]
    ],
    [
      new Property("Setting", new signature(STRING), 5, 1, false, false, null),
      new Property("MaxLen", new signature(UINT16), 5, 2, true, false, null)
    ],
    [
    ]
);


/**
 * Bitstring actuator. Maximum bitstring length is 65,536 bits.
 * @extends OcaBasicActuator
 */
export const OcaBitstringActuator = make_control_class(
    "OcaBitstringActuator",
    5,
    "\u0001\u0001\u0001\u0001\r",
    2,
    OcaBasicActuator,
    [
      [ "GetNrBits", 5, 1, [  ], [ UINT16 ] ],
      [ "GetBit", 5, 2, [ UINT16 ], [ BOOLEAN ] ],
      [ "SetBit", 5, 3, [ UINT16, BOOLEAN ], [  ] ],
      [ "GetBitstring", 5, 4, [  ], [ BITSTRING ] ],
      [ "SetBitstring", 5, 5, [ BITSTRING ], [  ] ]
    ],
    [
      new Property("Bitstring", new signature(BITSTRING), 5, 1, false, false, null)
    ],
    [
    ]
);


/**
 * Abstract base class for all sensor classes.
 * @extends OcaWorker
 */
export const OcaSensor = make_control_class(
    "OcaSensor",
    3,
    "\u0001\u0001\u0002",
    2,
    OcaWorker,
    [
      [ "GetReadingState", 3, 1, [  ], [ OcaSensorReadingState ] ]
    ],
    [
      new Property("ReadingState", new signature(OcaSensorReadingState), 3, 1, false, true, null)
    ],
    [
    ]
);


/**
 * Signal level sensor.
 * @extends OcaSensor
 */
export const OcaLevelSensor = make_control_class(
    "OcaLevelSensor",
    4,
    "\u0001\u0001\u0002\u0002",
    2,
    OcaSensor,
    [
      [ "GetReading", 4, 1, [  ], [ FLOAT32, FLOAT32, FLOAT32 ] ]
    ],
    [
      new Property("Reading", new signature(FLOAT32), 4, 1, false, false, null)
    ],
    [
    ]
);


/**
 * Child of <b>OcaLevelSensor </b>that returns an audio meter reading in
 * dB relative to a known reference level, and whose value has been
 * calculated by the selected averaging algorithm.
 * @extends OcaLevelSensor
 */
export const OcaAudioLevelSensor = make_control_class(
    "OcaAudioLevelSensor",
    5,
    "\u0001\u0001\u0002\u0002\u0001",
    2,
    OcaLevelSensor,
    [
      [ "GetLaw", 5, 1, [  ], [ OcaLevelMeterLaw ] ],
      [ "SetLaw", 5, 2, [ OcaLevelMeterLaw ], [  ] ]
    ],
    [
      new Property("Law", new signature(OcaLevelMeterLaw), 5, 1, false, false, null)
    ],
    [
    ]
);


/**
 * Time interval sensor.
 * @extends OcaSensor
 */
export const OcaTimeIntervalSensor = make_control_class(
    "OcaTimeIntervalSensor",
    4,
    "\u0001\u0001\u0002\u0003",
    2,
    OcaSensor,
    [
      [ "GetReading", 4, 1, [  ], [ FLOAT32, FLOAT32, FLOAT32 ] ]
    ],
    [
      new Property("Reading", new signature(FLOAT32), 4, 1, false, false, null)
    ],
    [
    ]
);


/**
 * Frequency sensor.
 * @extends OcaSensor
 */
export const OcaFrequencySensor = make_control_class(
    "OcaFrequencySensor",
    4,
    "\u0001\u0001\u0002\u0004",
    2,
    OcaSensor,
    [
      [ "GetReading", 4, 1, [  ], [ FLOAT32, FLOAT32, FLOAT32 ] ]
    ],
    [
      new Property("Reading", new signature(FLOAT32), 4, 1, false, false, null)
    ],
    [
    ]
);


/**
 * Basic temperature sensor.
 * @extends OcaSensor
 */
export const OcaTemperatureSensor = make_control_class(
    "OcaTemperatureSensor",
    4,
    "\u0001\u0001\u0002\u0005",
    2,
    OcaSensor,
    [
      [ "GetReading", 4, 1, [  ], [ FLOAT32, FLOAT32, FLOAT32 ] ]
    ],
    [
      new Property("Reading", new signature(FLOAT32), 4, 1, false, false, null)
    ],
    [
    ]
);


/**
 * Sensor for device identification mechanism. The idea of this mechanism
 * is that there is some kind of control -- a pushbutton, for instance --
 * that the user depresses to send a device identification event to the
 * controller. Such mechanisms aid in the setup of networks.
 * @extends OcaSensor
 */
export const OcaIdentificationSensor = make_control_class(
    "OcaIdentificationSensor",
    4,
    "\u0001\u0001\u0002\u0006",
    2,
    OcaSensor,
    [
    ],
    [
    ],
    [
      [ "Identify", 4, 1, [  ] ]
    ]
);


/**
 * Basic voltage sensor.
 * @extends OcaSensor
 */
export const OcaVoltageSensor = make_control_class(
    "OcaVoltageSensor",
    4,
    "\u0001\u0001\u0002\u0007",
    1,
    OcaSensor,
    [
      [ "GetReading", 4, 1, [  ], [ FLOAT32, FLOAT32, FLOAT32 ] ]
    ],
    [
      new Property("Reading", new signature(FLOAT32), 4, 1, false, false, null)
    ],
    [
    ]
);


/**
 * Basic current sensor.
 * @extends OcaSensor
 */
export const OcaCurrentSensor = make_control_class(
    "OcaCurrentSensor",
    4,
    "\u0001\u0001\u0002\b",
    1,
    OcaSensor,
    [
      [ "GetReading", 4, 1, [  ], [ FLOAT32, FLOAT32, FLOAT32 ] ]
    ],
    [
      new Property("Reading", new signature(FLOAT32), 4, 1, false, false, null)
    ],
    [
    ]
);


/**
 * Basic impedance sensor. Value is complex (magnitude and phase).
 * @extends OcaSensor
 */
export const OcaImpedanceSensor = make_control_class(
    "OcaImpedanceSensor",
    4,
    "\u0001\u0001\u0002\t",
    1,
    OcaSensor,
    [
      [ "GetReading", 4, 1, [  ], [ OcaImpedance, OcaImpedance, OcaImpedance ] ]
    ],
    [
      new Property("Reading", new signature(OcaImpedance), 4, 1, false, false, null)
    ],
    [
    ]
);


/**
 * Senses a gain value. Typically used to indicate instantaneous gain
 * value of a dynamics element.
 * @extends OcaSensor
 */
export const OcaGainSensor = make_control_class(
    "OcaGainSensor",
    4,
    "\u0001\u0001\u0002\n",
    1,
    OcaSensor,
    [
      [ "GetReading", 4, 1, [  ], [ FLOAT32, FLOAT32, FLOAT32 ] ]
    ],
    [
      new Property("Reading", new signature(FLOAT32), 4, 1, false, false, null)
    ],
    [
    ]
);


/**
 * Abstract base class for weakly typed sensors.
 * @extends OcaSensor
 */
export const OcaBasicSensor = make_control_class(
    "OcaBasicSensor",
    4,
    "\u0001\u0001\u0002\u0001",
    2,
    OcaSensor,
    [
    ],
    [
    ],
    [
    ]
);


/**
 * Basic boolean sensor.
 * @extends OcaBasicSensor
 */
export const OcaBooleanSensor = make_control_class(
    "OcaBooleanSensor",
    5,
    "\u0001\u0001\u0002\u0001\u0001",
    2,
    OcaBasicSensor,
    [
      [ "GetReading", 5, 1, [  ], [ BOOLEAN ] ]
    ],
    [
      new Property("Reading", new signature(BOOLEAN), 5, 1, false, false, null)
    ],
    [
    ]
);


/**
 * Basic int8 sensor.
 * @extends OcaBasicSensor
 */
export const OcaInt8Sensor = make_control_class(
    "OcaInt8Sensor",
    5,
    "\u0001\u0001\u0002\u0001\u0002",
    2,
    OcaBasicSensor,
    [
      [ "GetReading", 5, 1, [  ], [ INT8, INT8, INT8 ] ]
    ],
    [
      new Property("Reading", new signature(INT8), 5, 1, false, false, null)
    ],
    [
    ]
);


/**
 * Basic int16 sensor.
 * @extends OcaBasicSensor
 */
export const OcaInt16Sensor = make_control_class(
    "OcaInt16Sensor",
    5,
    "\u0001\u0001\u0002\u0001\u0003",
    2,
    OcaBasicSensor,
    [
      [ "GetReading", 5, 1, [  ], [ INT16, INT16, INT16 ] ]
    ],
    [
      new Property("Reading", new signature(INT16), 5, 1, false, false, null)
    ],
    [
    ]
);


/**
 * Basic int32 sensor.
 * @extends OcaBasicSensor
 */
export const OcaInt32Sensor = make_control_class(
    "OcaInt32Sensor",
    5,
    "\u0001\u0001\u0002\u0001\u0004",
    2,
    OcaBasicSensor,
    [
      [ "GetReading", 5, 1, [  ], [ INT32, INT32, INT32 ] ]
    ],
    [
      new Property("Reading", new signature(INT32), 5, 1, false, false, null)
    ],
    [
    ]
);


/**
 * Basic int64 sensor.
 * @extends OcaBasicSensor
 */
export const OcaInt64Sensor = make_control_class(
    "OcaInt64Sensor",
    5,
    "\u0001\u0001\u0002\u0001\u0005",
    2,
    OcaBasicSensor,
    [
      [ "GetReading", 5, 1, [  ], [ INT64, INT64, INT64 ] ]
    ],
    [
      new Property("Reading", new signature(INT64), 5, 1, false, false, null)
    ],
    [
    ]
);


/**
 * Basic uint8 sensor.
 * @extends OcaBasicSensor
 */
export const OcaUint8Sensor = make_control_class(
    "OcaUint8Sensor",
    5,
    "\u0001\u0001\u0002\u0001\u0006",
    2,
    OcaBasicSensor,
    [
      [ "GetReading", 5, 1, [  ], [ UINT8, UINT8, UINT8 ] ]
    ],
    [
      new Property("Reading", new signature(UINT8), 5, 1, false, false, null)
    ],
    [
    ]
);


/**
 * Basic uint16 sensor.
 * @extends OcaBasicSensor
 */
export const OcaUint16Sensor = make_control_class(
    "OcaUint16Sensor",
    5,
    "\u0001\u0001\u0002\u0001\u0007",
    2,
    OcaBasicSensor,
    [
      [ "GetReading", 5, 1, [  ], [ UINT16, UINT16, UINT16 ] ]
    ],
    [
      new Property("Reading", new signature(UINT16), 5, 1, false, false, null)
    ],
    [
    ]
);


/**
 * Basic uint32 sensor.
 * @extends OcaBasicSensor
 */
export const OcaUint32Sensor = make_control_class(
    "OcaUint32Sensor",
    5,
    "\u0001\u0001\u0002\u0001\b",
    2,
    OcaBasicSensor,
    [
      [ "GetReading", 5, 1, [  ], [ UINT32, UINT32, UINT32 ] ]
    ],
    [
      new Property("Reading", new signature(UINT32), 5, 1, false, false, null)
    ],
    [
    ]
);


/**
 * Basic float32 sensor.
 * @extends OcaBasicSensor
 */
export const OcaFloat32Sensor = make_control_class(
    "OcaFloat32Sensor",
    5,
    "\u0001\u0001\u0002\u0001\n",
    2,
    OcaBasicSensor,
    [
      [ "GetReading", 5, 1, [  ], [ FLOAT32, FLOAT32, FLOAT32 ] ]
    ],
    [
      new Property("Reading", new signature(FLOAT32), 5, 1, false, false, null)
    ],
    [
    ]
);


/**
 * Basic Float64 sensor.
 * @extends OcaBasicSensor
 */
export const OcaFloat64Sensor = make_control_class(
    "OcaFloat64Sensor",
    5,
    "\u0001\u0001\u0002\u0001\u000b",
    2,
    OcaBasicSensor,
    [
      [ "GetReading", 5, 1, [  ], [ FLOAT64, FLOAT64, FLOAT64 ] ]
    ],
    [
      new Property("Reading", new signature(FLOAT64), 5, 1, false, false, null)
    ],
    [
    ]
);


/**
 * Text string sensor.
 * @extends OcaBasicSensor
 */
export const OcaStringSensor = make_control_class(
    "OcaStringSensor",
    5,
    "\u0001\u0001\u0002\u0001\f",
    2,
    OcaBasicSensor,
    [
      [ "GetString", 5, 1, [  ], [ STRING ] ],
      [ "GetMaxLen", 5, 2, [  ], [ UINT16 ] ],
      [ "SetMaxLen", 5, 3, [ UINT16 ], [  ] ]
    ],
    [
      new Property("String", new signature(STRING), 5, 1, false, false, null),
      new Property("MaxLen", new signature(UINT16), 5, 2, false, false, null)
    ],
    [
    ]
);


/**
 * Bit string sensor.
 * @extends OcaBasicSensor
 */
export const OcaBitstringSensor = make_control_class(
    "OcaBitstringSensor",
    5,
    "\u0001\u0001\u0002\u0001\r",
    2,
    OcaBasicSensor,
    [
      [ "GetNrBits", 5, 1, [  ], [ UINT16 ] ],
      [ "GetBit", 5, 2, [ UINT16 ], [ UINT8 ] ],
      [ "GetBitString", 5, 3, [  ], [ BITSTRING ] ]
    ],
    [
      new Property("BitString", new signature(BITSTRING), 5, 1, false, false, null)
    ],
    [
    ]
);


/**
 * A block is an object with three aspects: - It can contain other
 * blocks. - It can contain workers. - It can contain agents. - It can
 * contain data networks. - It can contain application networks. - It has
 * a signal flow topology. We refer to an object inside a block as a
 * <b>member</b> of that block. We refer to the block which contains an
 * object as the object's <b>container.</b><b><sup>1</sup></b> Normally,
 * a block contains a set of members that together function as a
 * processing unit -- for example, a crossover channel or mixer strip.
 * @extends OcaWorker
 */
export const OcaBlock = make_control_class(
    "OcaBlock",
    3,
    "\u0001\u0001\u0003",
    2,
    OcaWorker,
    [
      [ "GetType", 3, 1, [  ], [ UINT32 ] ], ,
      [ "ConstructMemberUsingFactory", 3, 3, [ UINT32 ], [ UINT32 ] ],
      [ "DeleteMember", 3, 4, [ UINT32 ], [  ] ],
      [ "GetMembers", 3, 5, [  ], [ LIST(OcaObjectIdentification) ] ],
      [ "GetMembersRecursive", 3, 6, [  ], [ LIST(OcaBlockMember) ] ],
      [ "AddSignalPath", 3, 7, [ OcaSignalPath ], [ UINT16 ] ],
      [ "DeleteSignalPath", 3, 8, [ UINT16 ], [  ] ],
      [ "GetSignalPaths", 3, 9, [  ], [ MAP(UINT16, OcaSignalPath) ] ],
      [ "GetSignalPathsRecursive", 3, 10, [  ], [ MAP(UINT16, OcaSignalPath) ] ],
      [ "GetMostRecentParamSetIdentifier", 3, 11, [  ], [ OcaLibVolIdentifier ] ],
      [ "ApplyParamSet", 3, 12, [  ], [ OcaLibVolIdentifier ] ],
      [ "GetCurrentParamSetData", 3, 13, [  ], [ OcaLibVolData_ParamSet ] ],
      [ "StoreCurrentParamSetData", 3, 14, [ OcaLibVolIdentifier ], [  ] ],
      [ "GetGlobalType", 3, 15, [  ], [ OcaGlobalTypeIdentifier ] ],
      [ "GetONoMap", 3, 16, [  ], [ MAP(UINT32, UINT32) ] ],
      [ "FindObjectsByRole", 3, 17, [ STRING, OcaStringComparisonType, BLOB16, OcaObjectSearchResultFlags ], [ LIST(OcaObjectSearchResult) ] ],
      [ "FindObjectsByRoleRecursive", 3, 18, [ STRING, OcaStringComparisonType, BLOB16, OcaObjectSearchResultFlags ], [ LIST(OcaObjectSearchResult) ] ],
      [ "FindObjectsByPath", 3, 20, [ LIST(STRING), OcaObjectSearchResultFlags ], [ LIST(OcaObjectSearchResult) ] ],
      [ "FindObjectsByLabelRecursive", 3, 19, [ STRING, OcaStringComparisonType, BLOB16, OcaObjectSearchResultFlags ], [ LIST(OcaObjectSearchResult) ] ]
    ],
    [
      new Property("Type", new signature(UINT32), 3, 1, true, false, null),
      new Property("Members", new signature(LIST(OcaObjectIdentification)), 3, 2, false, false, null),
      new Property("SignalPaths", new signature(MAP(UINT16, OcaSignalPath)), 3, 3, false, false, null),
      new Property("MostRecentParamSetIdentifier", new signature(OcaLibVolIdentifier), 3, 4, false, false, null),
      new Property("GlobalType", new signature(OcaGlobalTypeIdentifier), 3, 5, true, false, null),
      new Property("ONoMap", new signature(MAP(UINT32, UINT32)), 3, 6, true, false, null)
    ],
    [
    ]
);


/**
 * Factory to create custom block instances. Used only in reconfigurable
 * devices. The idea is that you instantiate a factory once, populate it
 * with proto-objects and proto-signal paths, then use it subsequently to
 * instantiate identical blocks. In this context, <b>proto-object</b>
 * means a prototype of a block member. Unbound objects are identified by
 * <b>proto-object numbers (PONo's)</b> instead of actual object numbers.
 * PONos are unique within the factory, and are converted to globally
 * unique object numbers ONos) in all new block instances that the
 * factory builds. Correspondingly, <b>proto-signal path</b> means a
 * signal path expressed in terms of <b>PONos </b>rather than
 * <b>ONos</b>. When the factory constructs a block, it converts all of
 * its unbound signal paths to normal (bound) signal paths by mapping its
 * <b>PONos </b>into <b>ONos</b>. The factory also holds a list of
 * <b>proto-blockports</b> which are <b>OcaPorts </b>that are allocated
 * to new blocks the factory builds. As well, the proto-objects in the
 * factory may contain lists of their own proto-ports. Together, the
 * factory's proto-ports and its members' proto-ports are used to define
 * the factory's set of proto-signal paths. Factories may be predefined
 * at time of device manufacture, or constructed "on the fly" by
 * controllers. To <b>create a factory</b>, the controller calls a
 * block's <b>CreateMember(...) </b>method with the <b>ClassID </b>of
 * this class (<b>OcaBlockFactory</b>). Factories ignore which block
 * creates them, so it makes no difference which block's
 * <b>CreateMember(...) </b>method is used. It will usually make the most
 * sense to use the Root Block's method. To add proto-objects,
 * proto-ports, and proto-signal paths to a block factory, the controller
 * calls the factory's <b>DefineProtoMember(...), DefineProtoPort(...),
 * and DefineProtoSignalPath(...</b>) methods, respectively.
 * @extends OcaWorker
 */
export const OcaBlockFactory = make_control_class(
    "OcaBlockFactory",
    3,
    "\u0001\u0001\u0004",
    2,
    OcaWorker,
    [
      [ "DefineProtoPort", 3, 1, [ STRING, OcaPortMode ], [ OcaProtoPortID ] ],
      [ "UndefineProtoPort", 3, 2, [ OcaProtoPortID ], [  ] ],
      [ "GetProtoPorts", 3, 3, [  ], [ LIST(OcaProtoPort) ] ], ,
      [ "DefineProtoMemberUsingFactory", 3, 5, [ UINT32 ], [ UINT32 ] ],
      [ "UndefineProtoMember", 3, 6, [ UINT32 ], [  ] ],
      [ "GetProtoMembers", 3, 7, [  ], [ LIST(OcaProtoObjectIdentification) ] ],
      [ "DefineProtoSignalPath", 3, 8, [ OcaProtoSignalPath ], [ UINT16 ] ],
      [ "UndefineProtoSignalPath", 3, 9, [  ], [ UINT16 ] ],
      [ "GetProtoSignalPaths", 3, 10, [  ], [ MAP(UINT16, OcaProtoSignalPath) ] ],
      [ "GetGlobalType", 3, 11, [  ], [ OcaGlobalTypeIdentifier ] ],
      [ "SetGlobalType", 3, 12, [ OcaGlobalTypeIdentifier ], [  ] ]
    ],
    [
      new Property("ProtoPorts", new signature(LIST(OcaProtoPort)), 3, 1, false, false, null),
      new Property("ProtoMembers", new signature(LIST(OcaProtoObjectIdentification)), 3, 2, false, false, null),
      new Property("ProtoSignalPaths", new signature(MAP(UINT16, OcaProtoSignalPath)), 3, 3, false, false, null),
      new Property("GlobalType", new signature(OcaGlobalTypeIdentifier), 3, 4, false, false, null)
    ],
    [
    ]
);


/**
 * A matrix is a rectangular array of identical objects
 * ("<b>members</b>") that is coordinate addressable and has sets of
 * common input and output ports. The matrix host does not instantiate
 * these objects, but instead mediates the coordinate addressing,
 * implements the common input and output ports, and provdes certain
 * other aggregate functions. Matrix members may be workers (including
 * blocks), or agents. All members of a matrix must be of the same class.
 * No object may belong to more than one matrix at a time. No object may
 * appear more than once in a given matrix. The complete model of an OCA
 * matrix consists of: 1. One instance of <font
 * color="#00006c"><b>OcaMatrix.</b></font> 2. <b>(N x M) members</b>,
 * where each member is an instance of a worker or agent class. For any
 * given matrix, this class must be the same for all members, and is
 * referred to as the <b>member class.</b> Members are sometimes referred
 * to as <b>cells</b> of the matrix. 3. One additional instance of the
 * member class, called the <b>matrix proxy.</b> Thus, the <font
 * color="#00006c"><b>OcaMatrix</b></font> instance is a container for
 * the two-dimensional collection of its members. Once a matrix is set
 * up, the controller may get and set member properties by the following
 * procedures: <b>Get</b> To get a property value of member
 * (x<sub>1</sub>, y<sub>1</sub>): 1. Controller calls <font
 * color="#00006c"><b>OcaMatrix.SetXY(x1, y1)</b></font>. This action: -
 * locks the <font color="#00006c"><b>OcaMatrix</b></font> instance, and
 * - posts x<sub>1</sub> and y<sub>1</sub> as coordinates of the object
 * whose property value is to be retrieved. 2. Controller calls the
 * matrix proxy's <font color="#00006c"><b>Get</b></font> method for the
 * property value desired. This action causes the <font
 * color="#00006c"><b>OcaMatrix</b></font> instance to: - decode the
 * posted x<sub>1</sub> and y<sub>1</sub> values into a member ONo. -
 * call the given <font color="#00006c"><b>Get</b></font> method for the
 * object identified by the decoded ONo. - aggregate the <font
 * color="#00006c"><b>OcaResult</b></font> from each <font
 * color="#00006c"><b>Get</b></font> call into a consolidated <font
 * color="#00006c"><b>OcaResult</b></font>. - unlock the <font
 * color="#00006c"><b>OcaMatrix</b></font> instance. - return the
 * consolidated <font color="#00006c"><b>OcaResult</b></font> to the
 * controller. <b>Set</b> <b> </b>To set a property value of member
 * (x<sub>1</sub>, y<sub>1</sub>), or of row (0, y<sub>1</sub>) or column
 * (x<sub>1</sub>, 0) or whole matrix (0,0) 1. Controller calls <font
 * color="#00006c"><b>OcaMatrix.SetXY(x1, y1)</b></font>. This action: -
 * locks the <font color="#00006c"><b>OcaMatrix</b></font> instance, and
 * - posts x<sub>1</sub> and y<sub>1</sub> as coordinates of the object
 * whose property value is to be changed. 2. Controller calls the matrix
 * proxy's <font color="#00006c"><b>Set</b></font> method for the target
 * property. This action causes the <font
 * color="#00006c"><b>OcaMatrix</b></font> instance to: - decode the
 * posted x<sub>1</sub> and y<sub>1</sub> values into a list of target
 * member ONos, as follows: If x<sub>1</sub> &gt; 0 and y<sub>1</sub>
 * &gt; 0, the list will be the single ONo of the addressed cell. If
 * x<sub>1</sub> = 0 and y<sub>1</sub> &gt; 0, the list will be the list
 * of ONos of the cells in row y<sub>1</sub> . If x<sub>1</sub> &gt; 0
 * and y<sub>1</sub> = 0, the list will be the list of ONos of the cells
 * in column x<sub>1</sub>. If x<sub>1</sub> = 0 and y<sub>1</sub> = 0,
 * the list will be the list of ONos of all cells of the matrix. - call
 * the given <font color="#00006c"><b>Set</b></font> method for each
 * target member in the ONo list. - aggregate the <font
 * color="#00006c"><b>OcaResult</b></font> from each <font
 * color="#00006c"><b>Set</b></font> call into a consolidated <font
 * color="#00006c"><b>OcaResult</b></font>. - unlock the <font
 * color="#00006c"><b>OcaMatrix</b></font> instance.
 * @extends OcaWorker
 */
export const OcaMatrix = make_control_class(
    "OcaMatrix",
    3,
    "\u0001\u0001\u0005",
    2,
    OcaWorker,
    [
      [ "GetCurrentXY", 3, 1, [  ], [ UINT16, UINT16 ] ],
      [ "SetCurrentXY", 3, 2, [ UINT16, UINT16 ], [  ] ],
      [ "GetSize", 3, 3, [  ], [ UINT16, UINT16, UINT16, UINT16, UINT16, UINT16 ] ],
      [ "SetSize", 3, 4, [ UINT16, UINT16 ], [  ] ],
      [ "GetMembers", 3, 5, [  ], [ LIST2D(UINT32) ] ],
      [ "SetMembers", 3, 6, [ LIST2D(UINT32) ], [  ] ],
      [ "GetMember", 3, 7, [ UINT16, UINT16 ], [ UINT32 ] ],
      [ "SetMember", 3, 8, [ UINT16, UINT16, UINT32 ], [  ] ],
      [ "GetProxy", 3, 9, [  ], [ UINT32 ] ],
      [ "SetProxy", 3, 10, [ UINT32 ], [  ] ],
      [ "GetPortsPerRow", 3, 11, [  ], [ UINT8 ] ],
      [ "SetPortsPerRow", 3, 12, [ UINT8 ], [  ] ],
      [ "GetPortsPerColumn", 3, 13, [  ], [ UINT8 ] ],
      [ "SetPortsPerColumn", 3, 14, [ UINT8 ], [  ] ],
      [ "SetCurrentXYLock", 3, 15, [ UINT16, UINT16 ], [  ] ],
      [ "UnlockCurrent", 3, 16, [  ], [  ] ]
    ],
    [
      new Property("X", new signature(UINT16), 3, 1, false, false, null),
      new Property("Y", new signature(UINT16), 3, 2, false, false, null),
      new Property("xSize", new signature(UINT16), 3, 3, false, false, null),
      new Property("ySize", new signature(UINT16), 3, 4, false, false, null),
      new Property("Members", new signature(LIST2D(UINT32)), 3, 5, false, false, null),
      new Property("Proxy", new signature(UINT32), 3, 6, false, false, null),
      new Property("PortsPerRow", new signature(UINT8), 3, 7, false, false, null),
      new Property("PortsPerColumn", new signature(UINT8), 3, 8, false, false, null)
    ],
    [
    ]
);


/**
 * Abstract base class for defining agents.
 * @extends OcaRoot
 */
export const OcaAgent = make_control_class(
    "OcaAgent",
    2,
    "\u0001\u0002",
    2,
    OcaRoot,
    [
      [ "GetLabel", 2, 1, [  ], [ STRING ] ],
      [ "SetLabel", 2, 2, [ STRING ], [  ] ],
      [ "GetOwner", 2, 3, [  ], [ UINT32 ] ],
      [ "GetPath", 2, 4, [  ], [ LIST(STRING), LIST(UINT32) ] ]
    ],
    [
      new Property("Label", new signature(STRING), 2, 1, false, false, null),
      new Property("Owner", new signature(UINT32), 2, 2, false, false, null)
    ],
    [
    ]
);


/**
 * <b><u>Concept</u></b> <b><u> </u></b>A <b>grouper</b> is an object
 * responsible for aggregating property values. An <b>actuator
 * grouper</b> allows control of many actuator objects from a single
 * input value; a <b>sensor grouper</b> allows observing many sensor
 * objects via a single output value. Actuator groupers are described
 * below; sensor groupers are TBD. In a working media system, many
 * actuator objects (we will call them <b>citizens</b>) will be members
 * of multiple groups. For example, in a multiway stereo sound
 * reinforcement system, the left woofer power amplifier might be
 * controlled by a master gain group, a left-side gain group, and a
 * woofer gain group. To manage the interactions of these multiple
 * memberships, we need a single entity that manages all three of these
 * groups, anticipating the interactions and taking appropriate action.
 * An actuator grouper is such an entity. The grouper: <ul> <li>Registers
 * all the groups and all the citizens.</li> <li>Remembers which citizens
 * belong to which groups.</li> <li>Computes new property values when
 * group settings change.</li> <li>Manages overrange and underrange
 * conditions proactively, so that citizens are never asked to assume out
 * of range values.</li> </ul> For any given grouper instance, all of its
 * citizens will all be of the same class. Applications may have a number
 * of grouper instances, one for each citizen class -- an OcaGain
 * grouper, an OcaFrequency grouper, etc. For controlling each group, the
 * grouper creates a proxy object of the same class as its citizens, so
 * that the same controller logic can be used for either a group or an
 * individual worker. It may be helpful to visualize a grouper as a
 * matrix whose rows are groups, columns are citizens, and each cell
 * contains information relating to the membership of the citizen in the
 * group. This information is called the citizen's <b>enrollment</b> in
 * the group. <b><u>Mechanism</u></b> Each Grouper is an instance of this
 * class (<b>OcaGrouper</b>). A <b>group </b>is a collection of citizens.
 * A citizen that belongs to a group is called a <b>member</b> of that
 * group. There is a many-to-many relationship between groups and
 * citizens -- any citizen can be a member of any number of groups. The
 * purpose of the Grouper is to contain the set of groups and the set of
 * citizens, to remember which citizens belong to which groups, and to
 * compute new aggregate values when settings or readings change. The
 * Grouper itself does not provide direct access to parameter data
 * values. That access is provided by <b>group proxies </b>or by <b>peer
 * to peer</b> mastering -- see below. It is useful to think of a Grouper
 * as a matrix in which groups are rows and citizens are columns. A cell
 * of the matrix is nonempty whenever its column (=citizen) belongs to
 * its row (=group). Such a cell is called an <b>enrollment.</b>
 * <b><u>Classes of Grouped Objects</u></b> Group members can be actuator
 * or sensor objects. A group whose members are actuators is called an
 * <b>actuator group</b>. A group whose members are sensors is called a
 * <b>sensor group</b>. All the citizens of a given Grouper must be of
 * the same worker class (sounds communistic, doesn't it :) called the
 * <b>citizen class</b>. Typically an application will have multiple
 * Groupers, each one supporting a different citizen class. <b><u>Adding
 * Groups</u></b> New groups can be added to the Grouper at any time,
 * using OcaGrouper's <b>AddGroup </b>method. <b><u>Group Proxies; Peer
 * to Peer Mastering</u></b> Depending on the setting of its <b>mode</b>
 * property, a grouper may be in <b>master-slave mode</b> or <b>peer to
 * peer mode. </b> <u>In master-slave mode</u>, each time a caller adds a
 * group to a Grouper instance, the Grouper instance creates an object
 * known as a <b>group proxy. </b>Thus, there is one group proxy instance
 * per group.<b> </b>The class of the group proxy is the same as the
 * Grouper's citizen class. For example, for a group of OcaGain
 * actuators, the group proxy is an OcaGain object. The purpose of the
 * group proxy is to allow controllers to access the group's setpoint
 * (for actuator groups) or reading (for sensor groups) in the same way
 * as they would access individual workers of the citizen class. <u>In
 * peer-to-peer mode</u>, no group proxy is created. Instead, the group
 * setpoint is changed whenever <i>any</i> member's setpoint is changed.
 * In effect, all the group's members behave as though they were group
 * proxies. <b><u>Adding Citizens</u></b> New citizens may be added to a
 * Grouper instance at any time, using OcaGrouper's <b>AddCitizen</b>
 * method. Newly-added citizens are by default not members of any group.
 * Citizens may be enrolled in groups at any time using OcaGrouper's
 * <b>SetEnrollment </b>method. <b><u>Deleting</u></b> The Grouper allows
 * deletion of groups and citizens at any time, although excessive
 * deletion may lead to sparse memory use, depending on Grouper
 * implementation.<b><u>Setpoints, Readings, and Aggregation</u></b>
 * <b><u>Setpoints and Rules</u></b> Each group has a <b>setpoint</b>
 * (for actuator groups) or <b>reading</b> (for sensor groups) whose
 * value is related to its members' setpoints or readings by the
 * combination of two rules: <ol> <li>The group's <b>saturation
 * rules</b>, which control handling of overrange conditions; and </li>
 * <li>Each member's <b>aggregation rules</b>, which determine the
 * algorithms by which aggregate values are computed. </li> </ol> <b><u>
 * </u></b><b><u>Scope of the OcaGrouper Class</u></b> Many aspects of
 * groupers will vary from product to product. <b>OcaGrouper</b> is an
 * abstract class that defines common concepts and terms for groupers, a
 * canonical control interface, and most aspects of membership management
 * . However it but stops short of specifying actual semantics.
 * Implementations will need to define (at least): <ul> <li>Saturation
 * rules</li> <li>Aggregation rules</li> <li>Error-handling mechanisms
 * (e.g. what happens when a grouper loses its connection to a citizen,
 * and what happens when it later re-attaches)</li> </ul>
 * @extends OcaAgent
 */
export const OcaGrouper = make_control_class(
    "OcaGrouper",
    3,
    "\u0001\u0002\u0002",
    2,
    OcaAgent,
    [
      [ "AddGroup", 3, 1, [ STRING ], [ UINT16, UINT32 ] ],
      [ "DeleteGroup", 3, 2, [ UINT16 ], [  ] ],
      [ "GetGroupCount", 3, 3, [  ], [ UINT16 ] ],
      [ "GetGroupList", 3, 4, [  ], [ LIST(OcaGrouperGroup) ] ],
      [ "AddCitizen", 3, 5, [ OcaGrouperCitizen ], [ UINT16 ] ],
      [ "DeleteCitizen", 3, 6, [ UINT16 ], [  ] ],
      [ "GetCitizenCount", 3, 7, [  ], [ UINT16 ] ],
      [ "GetCitizenList", 3, 8, [  ], [ LIST(OcaGrouperCitizen) ] ],
      [ "GetEnrollment", 3, 9, [ OcaGrouperEnrollment ], [ BOOLEAN ] ],
      [ "SetEnrollment", 3, 10, [ OcaGrouperEnrollment, BOOLEAN ], [  ] ],
      [ "GetGroupMemberList", 3, 11, [ UINT16 ], [ LIST(OcaGrouperCitizen) ] ],
      [ "GetActuatorOrSensor", 3, 12, [  ], [ BOOLEAN ] ],
      [ "SetActuatorOrSensor", 3, 13, [ BOOLEAN ], [  ] ],
      [ "GetMode", 3, 14, [  ], [ OcaGrouperMode ] ],
      [ "SetMode", 3, 15, [ OcaGrouperMode ], [  ] ]
    ],
    [
      new Property("ActuatorOrSensor", new signature(BOOLEAN), 3, 1, false, false, null),
      new Property("Groups", new signature(LIST(OcaGrouperGroup)), 3, 2, false, false, ["GroupList"]),
      new Property("Citizens", new signature(LIST(OcaGrouperCitizen)), 3, 3, false, false, ["CitizenList"]),
      new Property("Enrollments", new signature(LIST(OcaGrouperEnrollment)), 3, 4, false, false, ["EnrollmentList"]),
      new Property("Mode", new signature(OcaGrouperMode), 3, 5, false, false, null)
    ],
    [
      [ "StatusChange", 3, 1, [ UINT16, UINT16, OcaGrouperStatusChangeType ] ]
    ]
);


/**
 * Agent that gradually changes a property setting from one value to
 * another. Works on a scalar numeric or boolean property of a specified
 * object. Does not work for array, list, map, struct, or string
 * properties. Contains timer features to allow ramps to start
 * immediately or at any time in the future. This is a weakly typed
 * class. All ramping parameters are specified as a <b>OcaFloat64
 * </b>numbers. <ul> <li>For unsigned integer targets, the ramping
 * parameters are coerced to <b>OcaUint64 </b>before comparing. </li>
 * <li>For signed integer targets, the ramping parameters are coerced to
 * <b>OcaInt64 </b>before comparing. </li> <li>For boolean values, the
 * the ramping parameters are coerced to <b>OcaUint8. </b>True is
 * assigned the value One, False is assigned the value Zero.</li> </ul>
 * @extends OcaAgent
 */
export const OcaRamper = make_control_class(
    "OcaRamper",
    3,
    "\u0001\u0002\u0003",
    2,
    OcaAgent,
    [
      [ "Control", 3, 1, [ OcaRamperCommand ], [  ] ],
      [ "GetState", 3, 2, [  ], [ OcaRamperState ] ],
      [ "GetRampedProperty", 3, 3, [  ], [ OcaProperty ] ],
      [ "SetRampedProperty", 3, 4, [ OcaProperty ], [  ] ],
      [ "GetTimeMode", 3, 5, [  ], [ OcaTimeMode ] ],
      [ "SetTimeMode", 3, 6, [ OcaTimeMode ], [  ] ],
      [ "GetStartTime", 3, 7, [  ], [ UINT64 ] ],
      [ "SetStartTime", 3, 8, [ UINT64 ], [  ] ],
      [ "GetDuration", 3, 9, [  ], [ FLOAT32, FLOAT32, FLOAT32 ] ],
      [ "SetDuration", 3, 10, [ FLOAT32 ], [  ] ],
      [ "GetInterpolationLaw", 3, 11, [  ], [ OcaRamperInterpolationLaw ] ],
      [ "SetInterpolationLaw", 3, 12, [ OcaRamperInterpolationLaw ], [  ] ],
      [ "GetGoal", 3, 13, [  ], [ FLOAT64 ] ],
      [ "SetGoal", 3, 14, [ FLOAT64 ], [  ] ]
    ],
    [
      new Property("State", new signature(OcaRamperState), 3, 1, false, false, null),
      new Property("RampedProperty", new signature(OcaProperty), 3, 2, false, false, null),
      new Property("TimeMode", new signature(OcaTimeMode), 3, 3, false, false, null),
      new Property("StartTime", new signature(UINT64), 3, 4, false, false, null),
      new Property("Duration", new signature(FLOAT32), 3, 5, false, false, null),
      new Property("InterpolationLaw", new signature(OcaRamperInterpolationLaw), 3, 6, false, false, null),
      new Property("Goal", new signature(FLOAT64), 3, 7, false, false, null)
    ],
    [
    ]
);


/**
 * Observer of a scalar numeric or boolean property ("target property")
 * of a specified object. Does not work for array, list, map, struct, or
 * string properties. <b>OcaNumericObserver</b> emits an <b>Observation
 * </b>event under certain conditions. There are three kinds of
 * conditions: <ol> <li><b>Numeric comparison</b>. The target property
 * value meets a certain comparison condition. A selection of comparison
 * operators is available. Such observations are called "asynchronous
 * observations". </li> <li><b>Timer expiry</b>. The value of the<b>
 * Period</b> property, if nonzero, is a the time interval for the
 * recurrent timed emission of <b>Observation</b> events. Such events
 * ("periodic observations") are emitted regardless of the target
 * property's value. </li> <li><b>Combination of (1) and (2)</b>. If a
 * numeric comparison and a nonzero period are both specified, then the
 * <b>Observation</b> event is emitted when the timer expires <b>and</b>
 * the numeric comparison is true. Such observations are called
 * "conditional-periodic observations".</li> </ol> This is a weakly typed
 * class. Its threshold is specified as an <b>OcaFloat64 </b>number. <ul>
 * <li>For unsigned integer targets, the threshold and target are both
 * coerced to <b>OcaUint64 </b>before comparing. </li> <li>For signed
 * integer targets, the threshold and target are both coerced to
 * <b>OcaInt64 </b>before comparing. </li> <li>For boolean values, the
 * threshold hreshold and target are both coerced to <b>OcaUint8</b>,
 * True is assigned the value One, False is assigned the value Zero.</li>
 * </ul> Note that this coercion may result in rounding errors if the
 * observed datatype is of type OcaUint64 or OcaUint64. An
 * <b>OcaNumericObserver </b>instance and the property it observes are
 * bound at the time the <b>OcaNumericObserver</b> instance is
 * constructed. For static devices, construction will occur during
 * manufacture, or possibly during a subsequent hardware configuration
 * step. For reconfigurable devices, construction might be done by online
 * controllers as part of device configuration sessions. This class is
 * normally used for monitoring readings of sensor readings, but may be
 * used equally well for watching workers' parameter settings.
 * @extends OcaAgent
 */
export const OcaNumericObserver = make_control_class(
    "OcaNumericObserver",
    3,
    "\u0001\u0002\u0004",
    2,
    OcaAgent,
    [
      [ "GetLastObservation", 3, 1, [  ], [ FLOAT64 ] ],
      [ "GetState", 3, 2, [  ], [ OcaObserverState ] ],
      [ "GetObservedProperty", 3, 3, [  ], [ OcaProperty ] ],
      [ "SetObservedProperty", 3, 4, [ OcaProperty ], [  ] ],
      [ "GetThreshold", 3, 5, [  ], [ FLOAT64 ] ],
      [ "SetThreshold", 3, 6, [ FLOAT64 ], [  ] ],
      [ "GetOperator", 3, 7, [  ], [ OcaRelationalOperator ] ],
      [ "SetOperator", 3, 8, [ OcaRelationalOperator ], [  ] ],
      [ "GetTwoWay", 3, 9, [  ], [ BOOLEAN ] ],
      [ "SetTwoWay", 3, 10, [ BOOLEAN ], [  ] ],
      [ "GetHysteresis", 3, 11, [  ], [ FLOAT64 ] ],
      [ "SetHysteresis", 3, 12, [ FLOAT64 ], [  ] ],
      [ "GetPeriod", 3, 13, [  ], [ FLOAT32 ] ],
      [ "SetPeriod", 3, 14, [ FLOAT32 ], [  ] ]
    ],
    [
      new Property("State", new signature(OcaObserverState), 3, 1, false, false, null),
      new Property("ObservedProperty", new signature(OcaProperty), 3, 2, false, false, null),
      new Property("Threshold", new signature(FLOAT64), 3, 3, false, false, null),
      new Property("Operator", new signature(OcaRelationalOperator), 3, 4, false, false, null),
      new Property("TwoWay", new signature(BOOLEAN), 3, 5, false, false, null),
      new Property("Hysteresis", new signature(FLOAT64), 3, 6, false, false, null),
      new Property("Period", new signature(FLOAT32), 3, 7, false, false, null)
    ],
    [
      [ "Observation", 3, 1, [ OcaEvent, FLOAT64 ] ]
    ]
);


/**
 * A <b>library</b> is an agent that holds a collection of datasets. We
 * refer to each dataset as a <b>Volume</b>. There are two kinds of
 * volumes: <b>ParamSet</b> (parameter set). A ParamSet is a collection
 * of operating parameter settings that can be applied to a block. Each
 * ParamSet is associated with a specific block type, but not with a
 * specific instance of that type. A ParamSet may be applied to any block
 * instance of the associated type. A block's type is the object number
 * of its factory or, for factory-defined blocks, a unique identifier set
 * at time of manufacture. <b>Patch</b>. A Patch is a collection of
 * ParamSet assignments. A ParamSet assigment is the description of a
 * binding of a ParamSet to a block instance. To "apply" a Patch is to
 * apply all of its assignments. To apply an assignment is to set all of
 * its ParamSet's parameter values into its block. A given library
 * instance can only hold one class of volume. A device that supports
 * libraries can have any number of Patch and ParamSet libraries. If a
 * device implements a Patch library, it must also implement at least one
 * ParamSet library. However, the reverse is not true: a device may
 * implement one or more ParamSet libraries without a Patch library.
 * <font color="#0000ff"> </font>
 * @extends OcaAgent
 */
export const OcaLibrary = make_control_class(
    "OcaLibrary",
    3,
    "\u0001\u0002\u0005",
    2,
    OcaAgent,
    [
      [ "AddVolume", 3, 1, [ OcaLibVol ], [ UINT32 ] ],
      [ "ReplaceVolume", 3, 2, [ UINT32, OcaLibVol ], [  ] ],
      [ "DeleteVolume", 3, 3, [ UINT32 ], [  ] ],
      [ "GetVolume", 3, 4, [  ], [ OcaLibVol ] ],
      [ "GetVolumeCount", 3, 5, [  ], [ UINT16 ] ],
      [ "GetVolumes", 3, 6, [  ], [ MAP(UINT32, OcaLibVol) ] ],
      [ "GetAccess", 3, 7, [  ], [ OcaLibAccess ] ],
      [ "SetAccess", 3, 8, [ OcaLibAccess ], [  ] ]
    ],
    [
      new Property("VolumeType", new signature(OcaLibVolType), 3, 1, false, false, null),
      new Property("Access", new signature(OcaLibAccess), 3, 2, false, false, null),
      new Property("Volumes", new signature(MAP(UINT32, OcaLibVol)), 3, 3, false, false, null)
    ],
    [
      [ "OcaLibVolChanged", 3, 1, [ UINT32, OcaPropertyChangeType ] ]
    ]
);


/**
 * A power supply.
 * @extends OcaAgent
 */
export const OcaPowerSupply = make_control_class(
    "OcaPowerSupply",
    3,
    "\u0001\u0002\u0007",
    3,
    OcaAgent,
    [
      [ "GetType", 3, 1, [  ], [ OcaPowerSupplyType ] ],
      [ "GetModelInfo", 3, 2, [  ], [ STRING ] ],
      [ "GetState", 3, 3, [  ], [ OcaPowerSupplyState ] ],
      [ "SetState", 3, 4, [ OcaPowerSupplyState ], [  ] ],
      [ "GetCharging", 3, 5, [  ], [ BOOLEAN ] ],
      [ "GetLoadFractionAvailable", 3, 6, [  ], [ FLOAT32 ] ],
      [ "GetStorageFractionAvailable", 3, 7, [  ], [ FLOAT32 ] ],
      [ "GetLocation", 3, 8, [  ], [ OcaPowerSupplyLocation ] ]
    ],
    [
      new Property("Type", new signature(OcaPowerSupplyType), 3, 1, false, false, null),
      new Property("ModelInfo", new signature(STRING), 3, 2, false, false, null),
      new Property("State", new signature(OcaPowerSupplyState), 3, 3, false, false, null),
      new Property("Charging", new signature(BOOLEAN), 3, 4, false, false, null),
      new Property("LoadFractionAvailable", new signature(FLOAT32), 3, 5, true, false, null),
      new Property("StorageFractionAvailable", new signature(FLOAT32), 3, 6, true, false, null),
      new Property("Location", new signature(OcaPowerSupplyLocation), 3, 7, true, false, null)
    ],
    [
    ]
);


/**
 * Base class for event handler objects. This class applies to
 * controllers that subscribe to events and receive notifications for
 * them. Controller developers can derive from this class and add
 * specific callback methods that perform processing and/or have specific
 * event data structures.
 * @extends OcaAgent
 */
export const OcaEventHandler = make_control_class(
    "OcaEventHandler",
    3,
    "\u0001\u0002\b",
    2,
    OcaAgent,
    [
      [ "OnEvent", 3, 1, [ BLOB, OcaEvent ], [  ] ]
    ],
    [
    ],
    [
    ]
);


/**
 * Observer of a scalar numeric or boolean property ("target property")
 * of a set of specified objects. This class is a subclass of
 * <b>OcaNumericObserver</b>, and differs from that class only in that it
 * observes a set of properties rather than a single property. Does not
 * work for array, list, map, struct, or string properties.
 * <b>OcaNumericObserverList</b> emits an <b>Observation </b>event under
 * certain conditions. There are three kinds of conditions: <ol>
 * <li><b>Numeric comparison</b>. A target property value meets a certain
 * comparison condition. A selection of comparison operators is
 * available. Such observations are called "asynchronous observations".
 * </li> <li><b>Timer expiry</b>. The value of the<b> Period</b>
 * property, if nonzero, is a the time interval for the recurrent timed
 * emission of <b>Observation</b> events. Such events ("periodic
 * observations") are emitted regardless of the target property's value.
 * </li> <li><b>Combination of (1) and (2)</b>. If a numeric comparison
 * and a nonzero period are both specified, then the <b>Observation</b>
 * event is emitted when the timer expires <b>and</b> the numeric
 * comparison is true for at least one of the observed properties. Such
 * observations are called "conditional-periodic observations".</li>
 * </ol> This is a weakly typed class. Its threshold is specified as an
 * <b>OcaFloat64 </b>number. <ul> <li>For unsigned integer targets, the
 * threshold and target are both coerced to <b>OcaUint64 </b>before
 * comparing. </li> <li>For signed integer targets, the threshold and
 * target are both coerced to <b>OcaInt64 </b>before comparing. </li>
 * <li>For boolean values, the threshold hreshold and target are both
 * coerced to <b>OcaUint8</b>, True is assigned the value One, False is
 * assigned the value Zero.</li> </ul> Note that this coercion may result
 * in rounding errors if the observed datatype is of type OcaUint64 or
 * OcaUint64. An <b>OcaNumericObserver </b>instance and the property it
 * observes are bound at the time the <b>OcaNumericObserver</b> instance
 * is constructed. For static devices, construction will occur during
 * manufacture, or possibly during a subsequent hardware configuration
 * step. For reconfigurable devices, construction might be done by online
 * controllers as part of device configuration sessions. This class is
 * normally used for monitoring readings of sensor readings, but may be
 * used equally well for watching workers' parameter settings.
 * @extends OcaAgent
 */
export const OcaNumericObserverList = make_control_class(
    "OcaNumericObserverList",
    3,
    "\u0001\u0002\t",
    2,
    OcaAgent,
    [
      [ "GetLastObservation", 3, 1, [  ], [ LIST(FLOAT64) ] ],
      [ "GetState", 3, 2, [  ], [ OcaObserverState ] ],
      [ "GetObservedProperties", 3, 3, [  ], [ LIST(OcaProperty) ] ],
      [ "SetObservedProperties", 3, 4, [ LIST(OcaProperty) ], [  ] ],
      [ "GetThreshold", 3, 5, [  ], [ FLOAT64 ] ],
      [ "SetThreshold", 3, 6, [ FLOAT64 ], [  ] ],
      [ "GetOperator", 3, 7, [  ], [ OcaRelationalOperator ] ],
      [ "SetOperator", 3, 8, [ OcaRelationalOperator ], [  ] ],
      [ "GetTwoWay", 3, 9, [  ], [ BOOLEAN ] ],
      [ "SetTwoWay", 3, 10, [ BOOLEAN ], [  ] ],
      [ "GetHysteresis", 3, 11, [  ], [ FLOAT64 ] ],
      [ "SetHysteresis", 3, 12, [ FLOAT64 ], [  ] ],
      [ "GetPeriod", 3, 13, [  ], [ FLOAT32 ] ],
      [ "SetPeriod", 3, 14, [ FLOAT32 ], [  ] ]
    ],
    [
      new Property("State", new signature(OcaObserverState), 3, 1, false, false, null),
      new Property("ObservedProperties", new signature(LIST(OcaProperty)), 3, 2, false, false, null),
      new Property("Threshold", new signature(FLOAT64), 3, 3, false, false, null),
      new Property("Operator", new signature(OcaRelationalOperator), 3, 4, false, false, null),
      new Property("TwoWay", new signature(BOOLEAN), 3, 5, false, false, null),
      new Property("Hysteresis", new signature(FLOAT64), 3, 6, false, false, null),
      new Property("Period", new signature(FLOAT32), 3, 7, false, false, null)
    ],
    [
      [ "Observation", 3, 1, [ OcaEvent, LIST(FLOAT64) ] ]
    ]
);


/**
 * A media clock, internal or external. OCA Connection Management 3
 * (OCA-CM3) version.
 * @extends OcaAgent
 */
export const OcaMediaClock3 = make_control_class(
    "OcaMediaClock3",
    3,
    "\u0001\u0002\u000f",
    1,
    OcaAgent,
    [
      [ "GetAvailability", 3, 1, [  ], [ OcaMediaClockAvailability ] ],
      [ "SetAvailability", 3, 2, [ OcaMediaClockAvailability ], [  ] ],
      [ "GetCurrentRate", 3, 3, [  ], [ OcaMediaClockRate, UINT32 ] ],
      [ "SetCurrentRate", 3, 4, [ OcaMediaClockRate, UINT32 ], [  ] ],
      [ "GetOffset", 3, 5, [  ], [ OcaTimePTP ] ],
      [ "SetOffset", 3, 6, [ OcaTimePTP ], [  ] ],
      [ "GetSupportedRates", 3, 7, [  ], [ MAP(UINT32, LIST(OcaMediaClockRate)) ] ]
    ],
    [
      new Property("Availability", new signature(OcaMediaClockAvailability), 3, 1, false, false, null),
      new Property("TimeSourceONo", new signature(UINT32), 3, 2, false, false, null),
      new Property("Offset", new signature(OcaTimePTP), 3, 3, false, false, null),
      new Property("CurrentRate", new signature(OcaMediaClockRate), 3, 4, false, false, null),
      new Property("SupportedRates", new signature(MAP(UINT32, LIST(OcaMediaClockRate))), 3, 5, false, false, null)
    ],
    [
    ]
);


/**
 * A time source, internal or external. See RFC 7273 for a detailed
 * discussion of time sources.
 * @extends OcaAgent
 */
export const OcaTimeSource = make_control_class(
    "OcaTimeSource",
    3,
    "\u0001\u0002\u0010",
    1,
    OcaAgent,
    [
      [ "GetAvailability", 3, 1, [  ], [ OcaTimeSourceAvailability ] ],
      [ "GetProtocol", 3, 2, [  ], [ OcaTimeProtocol ] ],
      [ "SetProtocol", 3, 3, [ OcaTimeProtocol ], [  ] ],
      [ "GetParameters", 3, 4, [  ], [ STRING ] ],
      [ "SetParameters", 3, 5, [ STRING ], [  ] ],
      [ "GetReferenceType", 3, 6, [  ], [ OcaTimeReferenceType ] ],
      [ "SetReferenceType", 3, 7, [ OcaTimeReferenceType ], [  ] ],
      [ "GetReferenceID", 3, 8, [  ], [ STRING ] ],
      [ "SetReferenceID", 3, 9, [ STRING ], [  ] ],
      [ "GetSyncStatus", 3, 10, [  ], [ OcaTimeSourceSyncStatus ] ],
      [ "Reset", 3, 11, [  ], [  ] ]
    ],
    [
      new Property("Availability", new signature(OcaTimeSourceAvailability), 3, 1, false, false, null),
      new Property("Protocol", new signature(OcaTimeProtocol), 3, 2, false, false, null),
      new Property("Parameters", new signature(STRING), 3, 3, false, false, null),
      new Property("ReferenceType", new signature(OcaTimeReferenceType), 3, 4, false, false, null),
      new Property("ReferenceID", new signature(STRING), 3, 5, false, false, null),
      new Property("SyncStatus", new signature(OcaTimeSourceSyncStatus), 3, 6, false, false, null)
    ],
    [
    ]
);


/**
 * Physical position of device or an element of it. AES70 supports a
 * variety of positional coordinate systems. For details, see AES70-1,
 * section 5.5.9.
 * @extends OcaAgent
 */
export const OcaPhysicalPosition = make_control_class(
    "OcaPhysicalPosition",
    3,
    "\u0001\u0002\u0011",
    1,
    OcaAgent,
    [
      [ "GetCoordinateSystem", 3, 1, [  ], [ OcaPositionCoordinateSystem ] ],
      [ "GetPositionDescriptorFieldFlags", 3, 2, [  ], [ UINT16 ] ],
      [ "GetPositionDescriptor", 3, 3, [  ], [ OcaPositionDescriptor, OcaPositionDescriptor, OcaPositionDescriptor ] ],
      [ "SetPositionDescriptor", 3, 4, [ OcaPositionDescriptor ], [  ] ]
    ],
    [
      new Property("CoordinateSystem", new signature(OcaPositionCoordinateSystem), 3, 1, true, false, null),
      new Property("PositionDescriptorFieldFlags", new signature(UINT16), 3, 2, true, false, null),
      new Property("PositionDescriptor", new signature(OcaPositionDescriptor), 3, 3, false, false, null)
    ],
    [
    ]
);


/**
 * Abstract base class from which the application network classes
 * inherit.
 * @extends OcaRoot
 */
export const OcaApplicationNetwork = make_control_class(
    "OcaApplicationNetwork",
    2,
    "\u0001\u0004",
    1,
    OcaRoot,
    [
      [ "GetLabel", 2, 1, [  ], [ STRING ] ],
      [ "SetLabel", 2, 2, [ STRING ], [  ] ],
      [ "GetOwner", 2, 3, [  ], [ UINT32 ] ],
      [ "GetServiceID", 2, 4, [  ], [ BLOB ] ],
      [ "SetServiceID", 2, 5, [ BLOB ], [  ] ],
      [ "GetSystemInterfaces", 2, 6, [  ], [ LIST(OcaNetworkSystemInterfaceDescriptor) ] ],
      [ "SetSystemInterfaces", 2, 7, [ LIST(OcaNetworkSystemInterfaceDescriptor) ], [  ] ],
      [ "GetState", 2, 8, [  ], [ OcaApplicationNetworkState ] ],
      [ "GetErrorCode", 2, 9, [  ], [ UINT16 ] ],
      [ "Control", 2, 10, [ OcaApplicationNetworkCommand ], [  ] ],
      [ "GetPath", 2, 11, [  ], [ LIST(STRING), LIST(UINT32) ] ]
    ],
    [
      new Property("Label", new signature(STRING), 2, 1, false, true, null),
      new Property("Owner", new signature(UINT32), 2, 2, false, true, null),
      new Property("ServiceID", new signature(BLOB), 2, 3, false, false, null),
      new Property("SystemInterfaces", new signature(LIST(OcaNetworkSystemInterfaceDescriptor)), 2, 4, false, false, null),
      new Property("State", new signature(OcaApplicationNetworkState), 2, 5, false, false, null),
      new Property("ErrorCode", new signature(UINT16), 2, 6, false, false, null)
    ],
    [
    ]
);


/**
 * This was not documented in the OCA standard.
 */
export const OcaControlNetwork = make_control_class(
    "OcaControlNetwork",
    3,
    "\u0001\u0004\u0001",
    1,
    OcaApplicationNetwork,
    [
      [ "GetControlProtocol", 3, 1, [  ], [ OcaNetworkControlProtocol ] ]
    ],
    [
      new Property("Protocol", new signature(OcaNetworkControlProtocol), 3, 1, false, false, ["ControlProtocol"])
    ],
    [
    ]
);


/**
 * This was not documented in the OCA standard.
 */
export const OcaMediaTransportNetwork = make_control_class(
    "OcaMediaTransportNetwork",
    3,
    "\u0001\u0004\u0002",
    1,
    OcaApplicationNetwork,
    [
      [ "GetMediaProtocol", 3, 1, [  ], [ OcaNetworkMediaProtocol ] ],
      [ "GetPorts", 3, 2, [  ], [ LIST(OcaPort) ] ],
      [ "GetPortName", 3, 3, [ OcaPortID ], [ STRING ] ],
      [ "SetPortName", 3, 4, [ OcaPortID, STRING ], [  ] ],
      [ "GetMaxSourceConnectors", 3, 5, [  ], [ UINT16 ] ],
      [ "GetMaxSinkConnectors", 3, 6, [  ], [ UINT16 ] ],
      [ "GetMaxPinsPerConnector", 3, 7, [  ], [ UINT16 ] ],
      [ "GetMaxPortsPerPin", 3, 8, [  ], [ UINT16 ] ],
      [ "GetSourceConnectors", 3, 9, [  ], [ LIST(OcaMediaSourceConnector) ] ],
      [ "GetSourceConnector", 3, 10, [ UINT16 ], [ OcaMediaSourceConnector ] ],
      [ "GetSinkConnectors", 3, 11, [  ], [ LIST(OcaMediaSinkConnector) ] ],
      [ "GetSinkConnector", 3, 12, [ UINT16 ], [ OcaMediaSinkConnector ] ],
      [ "GetConnectorsStatuses", 3, 13, [  ], [ LIST(OcaMediaConnectorStatus) ] ],
      [ "GetConnectorStatus", 3, 14, [ UINT16 ], [ OcaMediaConnectorStatus ] ],
      [ "AddSourceConnector", 3, 15, [ OcaMediaSourceConnector, OcaMediaConnectorState ], [ OcaMediaSourceConnector ] ],
      [ "AddSinkConnector", 3, 16, [ OcaMediaConnectorStatus, OcaMediaSinkConnector ], [ OcaMediaSinkConnector ] ],
      [ "ControlConnector", 3, 17, [ UINT16, OcaMediaConnectorCommand ], [  ] ],
      [ "SetSourceConnectorPinMap", 3, 18, [ UINT16, MAP(UINT16, OcaPortID) ], [  ] ],
      [ "SetSinkConnectorPinMap", 3, 19, [ UINT16, OcaMultiMap(UINT16, OcaPortID) ], [  ] ],
      [ "SetConnectorConnection", 3, 20, [ UINT16, OcaMediaConnection ], [  ] ],
      [ "SetConnectorCoding", 3, 21, [ UINT16, OcaMediaCoding ], [  ] ],
      [ "SetConnectorAlignmentLevel", 3, 22, [ UINT16, FLOAT32 ], [  ] ],
      [ "SetConnectorAlignmentGain", 3, 23, [ UINT16, FLOAT32 ], [  ] ],
      [ "DeleteConnector", 3, 24, [ UINT16 ], [  ] ],
      [ "GetAlignmentLevel", 3, 25, [  ], [ FLOAT32, FLOAT32, FLOAT32 ] ],
      [ "GetAlignmentGain", 3, 26, [  ], [ FLOAT32, FLOAT32, FLOAT32 ] ]
    ],
    [
      new Property("Protocol", new signature(OcaNetworkMediaProtocol), 3, 1, false, false, ["MediaProtocol"]),
      new Property("Ports", new signature(LIST(OcaPort)), 3, 2, false, false, null),
      new Property("MaxSourceConnectors", new signature(UINT16), 3, 3, false, false, null),
      new Property("MaxSinkConnectors", new signature(UINT16), 3, 4, false, false, null),
      new Property("MaxPinsPerConnector", new signature(UINT16), 3, 5, false, false, null),
      new Property("MaxPortsPerPin", new signature(UINT16), 3, 6, false, false, null),
      new Property("AlignmentLevel", new signature(FLOAT32), 3, 7, false, false, null),
      new Property("AlignmentGain", new signature(FLOAT32), 3, 8, false, false, null)
    ],
    [
      [ "SourceConnectorChanged", 3, 1, [ OcaMediaSourceConnector, OcaPropertyChangeType, OcaMediaConnectorElement ] ],
      [ "SinkConnectorChanged", 3, 2, [ OcaMediaSinkConnector, OcaPropertyChangeType, OcaMediaConnectorElement ] ],
      [ "ConnectorStatusChanged", 3, 3, [ OcaMediaConnectorStatus ] ]
    ]
);


/**
 * Abstract base class for classes that represent non-audio (i.e. control
 * and monitoring) functions. All concrete manager objects are lockable
 * (the constructor of this class initializes the Root object with
 * property Lockable true).
 * @extends OcaRoot
 */
export const OcaManager = make_control_class(
    "OcaManager",
    2,
    "\u0001\u0003",
    2,
    OcaRoot,
    [
    ],
    [
    ],
    [
    ]
);


/**
 * Mandatory manager that contains information relevant to the whole
 * device. <ul> <li>Must be instantiated once in every device. </li>
 * <li>Must have object number 1.</li> </ul>
 * @extends OcaManager
 */
export const OcaDeviceManager = make_control_class(
    "OcaDeviceManager",
    3,
    "\u0001\u0003\u0001",
    2,
    OcaManager,
    [
      [ "GetOcaVersion", 3, 1, [  ], [ UINT16 ] ],
      [ "GetModelGUID", 3, 2, [  ], [ OcaModelGUID ] ],
      [ "GetSerialNumber", 3, 3, [  ], [ STRING ] ],
      [ "GetDeviceName", 3, 4, [  ], [ STRING ] ],
      [ "SetDeviceName", 3, 5, [ STRING ], [  ] ],
      [ "GetModelDescription", 3, 6, [  ], [ OcaModelDescription ] ],
      [ "GetDeviceRole", 3, 7, [  ], [ STRING ] ],
      [ "SetRole", 3, 8, [ STRING ], [  ] ],
      [ "GetUserInventoryCode", 3, 9, [  ], [ STRING ] ],
      [ "SetUserInventoryCode", 3, 10, [ STRING ], [  ] ],
      [ "GetEnabled", 3, 11, [  ], [ BOOLEAN ] ],
      [ "SetEnabled", 3, 12, [ BOOLEAN ], [  ] ],
      [ "GetState", 3, 13, [  ], [ OcaDeviceState ] ],
      [ "SetResetKey", 3, 14, [ BLOBFIXED(16), BLOB ], [  ] ],
      [ "GetResetCause", 3, 15, [  ], [ OcaResetCause ] ],
      [ "ClearResetCause", 3, 16, [  ], [  ] ],
      [ "GetMessage", 3, 17, [  ], [ STRING ] ],
      [ "SetMessage", 3, 18, [ STRING ], [  ] ],
      [ "GetManagers", 3, 19, [  ], [ LIST(OcaManagerDescriptor) ] ],
      [ "GetDeviceRevisionID", 3, 20, [  ], [ STRING ] ]
    ],
    [
      new Property("ModelGUID", new signature(OcaModelGUID), 3, 1, false, false, null),
      new Property("SerialNumber", new signature(STRING), 3, 2, false, false, null),
      new Property("ModelDescription", new signature(OcaModelDescription), 3, 3, false, false, null),
      new Property("DeviceName", new signature(STRING), 3, 4, false, false, null),
      new Property("OcaVersion", new signature(UINT16), 3, 5, false, false, null),
      new Property("DeviceRole", new signature(STRING), 3, 6, false, false, null),
      new Property("UserInventoryCode", new signature(STRING), 3, 7, false, false, null),
      new Property("Enabled", new signature(BOOLEAN), 3, 8, false, false, null),
      new Property("State", new signature(OcaDeviceState), 3, 9, false, false, null),
      new Property("Busy", new signature(BOOLEAN), 3, 10, false, false, null),
      new Property("ResetCause", new signature(OcaResetCause), 3, 11, false, false, null),
      new Property("Message", new signature(STRING), 3, 12, false, false, null),
      new Property("Managers", new signature(LIST(OcaManagerDescriptor)), 3, 13, false, false, null),
      new Property("DeviceRevisionID", new signature(STRING), 3, 14, true, false, null)
    ],
    [
    ]
);


/**
 * Manager that collects and controls security settings (including
 * security keys). <ul> <li>Must be instantiated in every device that
 * supports secure control and monitoring; otherwise, is optional. </li>
 * <li>May be instantiated at most once in any device. </li> <li>If
 * instantiated, object number must be 2.</li> </ul>
 * @extends OcaManager
 */
export const OcaSecurityManager = make_control_class(
    "OcaSecurityManager",
    3,
    "\u0001\u0003\u0002",
    2,
    OcaManager,
    [
      [ "AddPreSharedKey", 3, 4, [ STRING, BLOB ], [  ] ],
      [ "ChangePreSharedKey", 3, 3, [ STRING, BLOB ], [  ] ],
      [ "DeletePreSharedKey", 3, 5, [ STRING ], [  ] ],
      [ "DisableControlSecurity", 3, 2, [  ], [  ] ],
      [ "EnableControlSecurity", 3, 1, [  ], [  ] ]
    ],
    [
      new Property("secureControlData", new signature(BOOLEAN), 3, 1, false, false, null)
    ],
    [
    ]
);


/**
 * Optional manager that manages versions of the different firmware and
 * software images of the device. <ul> <li>May be instantiated at most
 * once in any device. </li> <li>If instantiated, must have object number
 * 3. </li> </ul> A device that does not support firmware updating may
 * support the subset of this class's functions needed to report firmware
 * version numbers to inquiring controllers. This firmware manager offers
 * a generic interface for updating OCA devices. The actual robustness of
 * the update process is left up to the implementer. The interface allows
 * for any of: - Fully transactional based uploads (i.e. only committing
 * to the newly uploaded images after all component uploads have
 * succeeded, and reverting back to the old images if any step fails) -
 * Partly transactional based uploads (i.e. committing to a newly
 * uploaded image after each individual component upload succeeds,
 * possibly leading to a device containing a mix of old and new images) -
 * Non-transactional based uploads guarded by golden images (i.e.
 * accepting a 'weak' spot in the upload process where interruption may
 * lead to a corrupt regular image, which is solved by loading a
 * read-only failsafe ("golden") image in such cases that will allow
 * recovery of the regular image) - Non-transactional based uploads that
 * may lead to bricked devices
 * @extends OcaManager
 */
export const OcaFirmwareManager = make_control_class(
    "OcaFirmwareManager",
    3,
    "\u0001\u0003\u0003",
    2,
    OcaManager,
    [
      [ "GetComponentVersions", 3, 1, [  ], [ LIST(OcaVersion) ] ],
      [ "StartUpdateProcess", 3, 2, [  ], [  ] ],
      [ "BeginActiveImageUpdate", 3, 3, [ OcaComponent ], [  ] ],
      [ "AddImageData", 3, 4, [ UINT32, BLOB ], [  ] ],
      [ "VerifyImage", 3, 5, [ BLOB ], [  ] ],
      [ "EndActiveImageUpdate", 3, 6, [  ], [  ] ],
      [ "BeginPassiveComponentUpdate", 3, 7, [ OcaComponent, BLOB, STRING ], [  ] ],
      [ "EndUpdateProcess", 3, 8, [  ], [  ] ]
    ],
    [
      new Property("ComponentVersions", new signature(LIST(OcaVersion)), 3, 1, false, false, null)
    ],
    [
    ]
);


/**
 * Manager that collects and controls the event subscriptions of the
 * device. <ul> <li>Must be instantiated once in every device that
 * supports subscriptions. </li> <li>May be instantiated at most once in
 * any device. </li> <li>If instantiated, must have object number 4.</li>
 * </ul> Absence of an <b>OcaSubscriptionManager </b>object signifies
 * that the device does not support event subscriptions.
 * @extends OcaManager
 */
export const OcaSubscriptionManager = make_control_class(
    "OcaSubscriptionManager",
    3,
    "\u0001\u0003\u0004",
    2,
    OcaManager,
    [
      [ "RemoveSubscription", 3, 2, [ OcaEvent, OcaMethod ], [  ] ],
      [ "AddSubscription", 3, 1, [ OcaEvent, OcaMethod, BLOB, OcaNotificationDeliveryMode, BLOB ], [  ] ],
      [ "DisableNotifications", 3, 3, [  ], [  ] ],
      [ "ReEnableNotifications", 3, 4, [  ], [  ] ],
      [ "AddPropertyChangeSubscription", 3, 5, [ UINT32, OcaPropertyID, OcaMethod, BLOB, OcaNotificationDeliveryMode, BLOB ], [  ] ],
      [ "RemovePropertyChangeSubscription", 3, 6, [ UINT32, OcaPropertyID, OcaMethod ], [  ] ],
      [ "GetMaximumSubscriberContextLength", 3, 7, [  ], [ UINT16 ] ]
    ],
    [
      new Property("State", new signature(OcaSubscriptionManagerState), 3, 1, false, false, null)
    ],
    [
      [ "NotificationsDisabled", 3, 1, [  ] ],
      [ "SynchronizeState", 3, 2, [ LIST(UINT32) ] ]
    ]
);


/**
 * Optional manager that manages power settings and state. <ul> <li>May
 * be instantiated once in any device. </li> <li>If instantiated, object
 * number must be 5.</li> </ul>
 * @extends OcaManager
 */
export const OcaPowerManager = make_control_class(
    "OcaPowerManager",
    3,
    "\u0001\u0003\u0005",
    2,
    OcaManager,
    [
      [ "GetState", 3, 1, [  ], [ OcaPowerState ] ],
      [ "SetState", 3, 2, [ OcaPowerState ], [  ] ],
      [ "GetPowerSupplies", 3, 3, [  ], [ LIST(UINT32) ] ],
      [ "GetActivePowerSupplies", 3, 4, [  ], [ LIST(UINT32) ] ],
      [ "ExchangePowerSupply", 3, 5, [ UINT32, UINT32, BOOLEAN ], [  ] ],
      [ "GetAutoState", 3, 6, [  ], [ BOOLEAN ] ]
    ],
    [
      new Property("State", new signature(OcaPowerState), 3, 1, false, false, null),
      new Property("PowerSupplies", new signature(LIST(UINT32)), 3, 2, false, false, null),
      new Property("ActivePowerSupplies", new signature(LIST(UINT32)), 3, 3, false, false, null),
      new Property("AutoState", new signature(BOOLEAN), 3, 4, false, false, null),
      new Property("TargetState", new signature(OcaPowerState), 3, 5, true, false, null)
    ],
    [
    ]
);


/**
 * Optional manager that collects all media transport and control
 * networks to which the device belongs. <ul> <li>Must be instantiated
 * once in every device that has more than one network object. In this
 * context, "network object" shall mean an instance of <b>OcaNetwork</b>,
 * <b>OcaStreamNetwork</b>, <b>OcaApplicationNetwork</b>, or any subclass
 * of these classes.</li> </ul> <ul> <li>If instantiated, must have
 * object number 6.</li> </ul>
 * @extends OcaManager
 */
export const OcaNetworkManager = make_control_class(
    "OcaNetworkManager",
    3,
    "\u0001\u0003\u0006",
    2,
    OcaManager,
    [
      [ "GetNetworks", 3, 1, [  ], [ LIST(UINT32) ] ],
      [ "GetStreamNetworks", 3, 2, [  ], [ LIST(UINT32) ] ],
      [ "GetControlNetworks", 3, 3, [  ], [ LIST(UINT32) ] ],
      [ "GetMediaTransportNetworks", 3, 4, [  ], [ LIST(UINT32) ] ]
    ],
    [
      new Property("Networks", new signature(LIST(UINT32)), 3, 1, false, false, null),
      new Property("StreamNetworks", new signature(LIST(UINT32)), 3, 2, false, false, null),
      new Property("ControlNetworks", new signature(LIST(UINT32)), 3, 3, false, false, null),
      new Property("MediaTransportNetworks", new signature(LIST(UINT32)), 3, 4, false, false, null)
    ],
    [
    ]
);


/**
 * Optional manager that collects all media clocks the device uses. <ul>
 * <li>Must be instantiated once for every device that has more than one
 * media clock object. In this context, "media clock" means an instance
 * of <b>OcaMediaClock</b>, <b>OcaMediaClock3</b>, or any subclass of
 * these classes. </li> </ul> <ul> <li>If instantiated, object number
 * must be 7.</li> </ul>
 * @extends OcaManager
 */
export const OcaMediaClockManager = make_control_class(
    "OcaMediaClockManager",
    3,
    "\u0001\u0003\u0007",
    2,
    OcaManager,
    [
      [ "GetClocks", 3, 1, [  ], [ LIST(UINT32) ] ],
      [ "GetMediaClockTypesSupported", 3, 2, [  ], [ LIST(OcaMediaClockType) ] ],
      [ "GetClock3s", 3, 3, [  ], [ LIST(UINT32) ] ]
    ],
    [
      new Property("ClockSourceTypesSupported", new signature(LIST(OcaMediaClockType)), 3, 1, false, false, ["MediaClockTypesSupported"]),
      new Property("Clocks", new signature(LIST(UINT32)), 3, 2, false, false, null),
      new Property("Clock3s", new signature(LIST(UINT32)), 3, 3, false, false, null)
    ],
    [
    ]
);


/**
 * Optional manager for handling device presets -- Patch and ParamSet
 * libraries. <ul> <li>May be instantiated once in any device. </li>
 * </ul> <ul> <li>If instantiated, object number must be 8.</li> </ul>
 * @extends OcaManager
 */
export const OcaLibraryManager = make_control_class(
    "OcaLibraryManager",
    3,
    "\u0001\u0003\b",
    2,
    OcaManager,
    [
      [ "AddLibrary", 3, 1, [ OcaLibVolType ], [ OcaLibraryIdentifier ] ],
      [ "DeleteLibrary", 3, 2, [ UINT32 ], [  ] ],
      [ "GetLibraryCount", 3, 3, [ OcaLibVolType ], [ UINT16 ] ],
      [ "GetLibraryList", 3, 4, [ OcaLibVolType ], [ LIST(OcaLibraryIdentifier) ] ],
      [ "GetCurrentPatch", 3, 5, [  ], [ OcaLibVolIdentifier ] ],
      [ "ApplyPatch", 3, 6, [ OcaLibVolIdentifier ], [  ] ]
    ],
    [
      new Property("Libraries", new signature(LIST(OcaLibraryIdentifier)), 3, 1, false, false, null),
      new Property("CurrentPatch", new signature(OcaLibVolIdentifier), 3, 2, false, false, null)
    ],
    [
    ]
);


/**
 * Placeholder for optional manager that in future versions of the
 * standard will hold various global audio processing parameters. <ul>
 * <li>May be instantiated once in any device. </li> </ul> <ul> <li>If
 * instantiated, object number must be 9.</li> </ul>
 * @extends OcaManager
 */
export const OcaAudioProcessingManager = make_control_class(
    "OcaAudioProcessingManager",
    3,
    "\u0001\u0003\t",
    2,
    OcaManager,
    [
    ],
    [
    ],
    [
    ]
);


/**
 * Manager that allows controlling and monitoring a device's time-of-day
 * clock, and that collects the device's time source objects. <ul>
 * <li>Must be instantiated once in every device that has more than one
 * time source object. In this context, a "time source object" is an
 * instance of <b>OcaTimeSource </b>or a subclass of it. </li> </ul> <ul>
 * <li>If instantiated, object number must be 10.</li> </ul> Note: The
 * clock value is accessible via Get and Set methods, but has not been
 * defined as a public property because its value is volatile and should
 * not cause property-change events. The property <b>TimeSources </b>was
 * added in version 2 of this class.
 * @extends OcaManager
 */
export const OcaDeviceTimeManager = make_control_class(
    "OcaDeviceTimeManager",
    3,
    "\u0001\u0003\n",
    2,
    OcaManager,
    [
      [ "GetDeviceTimeNTP", 3, 1, [  ], [ UINT64 ] ],
      [ "SetDeviceTimeNTP", 3, 2, [ UINT64 ], [  ] ],
      [ "GetTimeSources", 3, 3, [  ], [ LIST(UINT32) ] ],
      [ "GetCurrentDeviceTimeSource", 3, 4, [  ], [ UINT32 ] ],
      [ "SetCurrentDeviceTimeSource", 3, 5, [ UINT32 ], [  ] ],
      [ "GetDeviceTimePTP", 3, 6, [  ], [ OcaTimePTP ] ],
      [ "SetDeviceTimePTP", 3, 7, [ OcaTimePTP ], [  ] ]
    ],
    [
      new Property("TimeSources", new signature(LIST(UINT32)), 3, 1, false, false, null),
      new Property("CurrentDeviceTimeSource", new signature(UINT32), 3, 2, false, false, null)
    ],
    [
    ]
);


/**
 * Optional manager that collects OcaTask and OcaProgram objects. <ul>
 * <li>May be instantiated once in any device. </li> </ul> <ul> <li>If
 * instantiated, object number must be 11.</li> </ul> Tasks shall be
 * device execution threads that start, execute, and (normally) stop. The
 * action of an <b>OcaTask </b>is defined by an <b>OcaProgram</b>. The
 * idea is that <b>OcaTasks </b>shall execute <b>OcaPrograms</b>.
 * <b>OcaTaskManager </b>offers global control over tasks in the device.
 * <ul> <li>Device task processing state is <b>Enabled </b>by default. In
 * <b>Enabled </b>state, tasks may be running.</li> </ul> <ul> <li>Device
 * task processing state may be <b>Disabled </b>by the <b>OcaTaskManager
 * Disable </b>command. </li> <li>The <b>Disable </b>command will succeed
 * only if no tasks are running. </li> </ul> Tasks may be stopped by:
 * passing the <b>OcaTaskManager </b>a <b>Stop </b>or <b>Abort
 * </b>command, which will stop designated tasks in the device;.
 * @extends OcaManager
 */
export const OcaTaskManager = make_control_class(
    "OcaTaskManager",
    3,
    "\u0001\u0003\u000b",
    1,
    OcaManager,
    [
      [ "Enable", 3, 2, [ BOOLEAN ], [  ] ],
      [ "ControlAllTasks", 3, 3, [ OcaTaskCommand, BLOB ], [  ] ],
      [ "ControlTaskGroup", 3, 4, [ UINT16, OcaTaskCommand, BLOB ], [  ] ],
      [ "ControlTask", 3, 5, [ UINT32, OcaTaskCommand, BLOB ], [  ] ],
      [ "GetState", 3, 6, [  ], [ OcaTaskManagerState ] ],
      [ "GetTaskStatuses", 3, 7, [  ], [ OcaTaskStatus ] ],
      [ "GetTaskStatus", 3, 8, [ UINT32 ], [ OcaTaskStatus ] ],
      [ "AddTask", 3, 9, [ OcaTask ], [ OcaTask ] ],
      [ "GetTasks", 3, 10, [  ], [ MAP(UINT32, OcaTask) ] ],
      [ "GetTask", 3, 11, [ UINT32 ], [ OcaTask ] ],
      [ "SetTask", 3, 12, [ UINT32, OcaTask ], [  ] ],
      [ "DeleteTask", 3, 13, [ UINT32 ], [  ] ]
    ],
    [
      new Property("State", new signature(OcaTaskManagerState), 3, 1, false, false, null),
      new Property("Tasks", new signature(MAP(UINT32, OcaTask)), 3, 2, false, false, null)
    ],
    [
      [ "TaskStateChanged", 3, 1, [ UINT32, OcaLibVolIdentifier, OcaTaskStatus ] ]
    ]
);


/**
 * Optional manager that collects all media decoders/encoders (Codecs)
 * which the device owns. <ul> <li>Must be instantiated in every device
 * that implements more than one media encoding scheme and/or more than
 * one media decoding scheme. </li> </ul> <ul> <li>If instantiated,
 * object number must be 12.</li> </ul>
 * @extends OcaManager
 */
export const OcaCodingManager = make_control_class(
    "OcaCodingManager",
    3,
    "\u0001\u0003\f",
    1,
    OcaManager,
    [
      [ "GetAvailableEncodingSchemes", 3, 1, [  ], [ MAP(UINT16, STRING) ] ],
      [ "GetAvailableDecodingSchemes", 3, 2, [  ], [ MAP(UINT16, STRING) ] ]
    ],
    [
      new Property("AvailableEncodingSchemes", new signature(MAP(UINT16, STRING)), 3, 1, false, false, null),
      new Property("AvailableDecodingSchemes", new signature(MAP(UINT16, STRING)), 3, 2, false, false, null)
    ],
    [
    ]
);


/**
 * Optional manager that provides application diagnostic aids. Unlike
 * other manager classes, OcaDiagnosticManager may be subclassed to
 * provide proprietary application diagnostic enhancements. <ul> <li>May
 * be instantiated once in any device. </li> <li>If instantiated, object
 * number must be 13.</li> </ul>
 * @extends OcaManager
 */
export const OcaDiagnosticManager = make_control_class(
    "OcaDiagnosticManager",
    3,
    "\u0001\u0003\r",
    1,
    OcaManager,
    [
      [ "GetLockStatus", 3, 1, [ UINT32 ], [ STRING ] ]
    ],
    [
    ],
    [
    ]
);


/**
 * <b>DEPRECATED CLASS</b> <i>Replaced by features of the
 * </i><b><i>OcaMediaSinkConnector </i></b><i>and
 * </i><b><i>OcaMediaSourceConnector </i></b><i>datatypes in version 3 of
 * Connection Management (CM3)</i> Worker that allows connection of one
 * or more internal signal paths to a network signal channel. <ul>
 * <li>For stream-oriented media connection management such as used by
 * AVB, this worker will be linked to an <b>OcaStreamConnector</b> object
 * and to the appropriate <b>OcaStreamNetwork </b>object. </li> <li>For
 * channel-oriented media connection management, such as the Dante
 * name-based routing mechanism, this worker will be linked only to the
 * <b>OcaStreamNetwork </b>object.</li> </ul>
 * @extends OcaWorker
 */
export const OcaNetworkSignalChannel = make_control_class(
    "OcaNetworkSignalChannel",
    3,
    "\u0001\u0001\u0006",
    2,
    OcaWorker,
    [
      [ "AddToConnector", 3, 6, [ UINT32, UINT16 ], [  ] ],
      [ "GetConnectorPins", 3, 5, [  ], [ MAP(UINT32, UINT16) ] ],
      [ "GetIDAdvertised", 3, 1, [  ], [ BLOB ] ],
      [ "GetNetwork", 3, 3, [  ], [ UINT32 ] ],
      [ "GetRemoteChannelID", 3, 8, [  ], [ BLOB ] ],
      [ "GetSourceOrSink", 3, 10, [  ], [ OcaNetworkMediaSourceOrSink ] ],
      [ "GetStatus", 3, 11, [  ], [ OcaNetworkSignalChannelStatus ] ],
      [ "RemoveFromConnector", 3, 7, [ UINT32 ], [  ] ],
      [ "SetIDAdvertised", 3, 2, [ BLOB ], [  ] ],
      [ "SetNetwork", 3, 4, [ UINT32 ], [  ] ],
      [ "SetRemoteChannelID", 3, 9, [ BLOB ], [  ] ]
    ],
    [
      new Property("ConnectorPins", new signature(MAP(UINT32, UINT16)), 3, 3, false, false, null),
      new Property("IDAdvertised", new signature(BLOB), 3, 1, false, false, null),
      new Property("Network", new signature(UINT32), 3, 2, false, false, null),
      new Property("RemoteChannelID", new signature(BLOB), 3, 4, false, false, null),
      new Property("SourceOrSink", new signature(OcaNetworkMediaSourceOrSink), 3, 5, false, false, null),
      new Property("Status", new signature(OcaNetworkSignalChannelStatus), 3, 6, false, false, null)
    ],
    [
    ]
);


/**
 * <b>DEPRECATED CLASS</b> <i>Replaced by class
 * </i><b><i>OcaControlNetwork </i></b><i>in version 3 of Connection
 * Management (CM3)</i> Abstract base class for defining network classes
 * to which this device belongs. This class is to be used for control and
 * monitoring networks only. For media transport networks, and for
 * networks that combine media transport and control, the
 * <b>OcaStreamNetwork</b> class should be used instead.
 * @extends OcaAgent
 */
export const OcaNetwork = make_control_class(
    "OcaNetwork",
    3,
    "\u0001\u0002\u0001",
    2,
    OcaAgent,
    [
      [ "GetLinkType", 3, 1, [  ], [ OcaNetworkLinkType ] ],
      [ "GetIDAdvertised", 3, 2, [  ], [ BLOB ] ],
      [ "SetIDAdvertised", 3, 3, [ BLOB ], [  ] ],
      [ "GetControlProtocol", 3, 4, [  ], [ OcaNetworkControlProtocol ] ],
      [ "GetMediaProtocol", 3, 5, [  ], [ OcaNetworkMediaProtocol ] ],
      [ "GetStatus", 3, 6, [  ], [ OcaNetworkStatus ] ],
      [ "GetStatistics", 3, 7, [  ], [ OcaNetworkStatistics ] ],
      [ "ResetStatistics", 3, 8, [  ], [  ] ],
      [ "GetSystemInterfaces", 3, 9, [  ], [ LIST(OcaNetworkSystemInterfaceID) ] ],
      [ "SetSystemInterfaces", 3, 10, [ LIST(OcaNetworkSystemInterfaceID) ], [  ] ],
      [ "GetMediaPorts", 3, 11, [  ], [ LIST(UINT32) ] ],
      [ "Startup", 3, 12, [  ], [  ] ],
      [ "Shutdown", 3, 13, [  ], [  ] ]
    ],
    [
      new Property("LinkType", new signature(OcaNetworkLinkType), 3, 1, true, false, null),
      new Property("IDAdvertised", new signature(BLOB), 3, 2, false, false, null),
      new Property("ControlProtocol", new signature(OcaNetworkControlProtocol), 3, 3, false, false, null),
      new Property("MediaProtocol", new signature(OcaNetworkMediaProtocol), 3, 4, false, false, null),
      new Property("Status", new signature(OcaNetworkStatus), 3, 5, false, false, null),
      new Property("SystemInterfaces", new signature(LIST(OcaNetworkSystemInterfaceID)), 3, 6, false, false, null),
      new Property("MediaPorts", new signature(LIST(UINT32)), 3, 7, false, false, null),
      new Property("Statistics", new signature(OcaNetworkStatistics), 3, 8, false, false, null)
    ],
    [
    ]
);


/**
 * <b>DEPRECATED CLASS</b> <i>Replaced by
 * </i><b><i>OcaMediaClock3</i></b> A media clock, internal or external.
 * @extends OcaAgent
 */
export const OcaMediaClock = make_control_class(
    "OcaMediaClock",
    3,
    "\u0001\u0002\u0006",
    2,
    OcaAgent,
    [
      [ "GetType", 3, 1, [  ], [ OcaMediaClockType ] ],
      [ "SetType", 3, 2, [ OcaMediaClockType ], [  ] ],
      [ "GetDomainID", 3, 3, [  ], [ UINT16 ] ],
      [ "SetDomainID", 3, 4, [ UINT16 ], [  ] ],
      [ "GetSupportedRates", 3, 5, [  ], [ LIST(OcaMediaClockRate) ] ],
      [ "GetRate", 3, 6, [  ], [ OcaMediaClockRate ] ],
      [ "SetRate", 3, 7, [ OcaMediaClockRate ], [  ] ],
      [ "GetLockState", 3, 8, [  ], [ OcaMediaClockLockState ] ]
    ],
    [
      new Property("Type", new signature(OcaMediaClockType), 3, 1, false, false, null),
      new Property("DomainID", new signature(UINT16), 3, 2, false, false, null),
      new Property("RatesSupported", new signature(LIST(OcaMediaClockRate)), 3, 3, false, false, null),
      new Property("CurrentRate", new signature(OcaMediaClockRate), 3, 4, false, false, null),
      new Property("LockState", new signature(OcaMediaClockLockState), 3, 5, false, false, null)
    ],
    [
    ]
);


/**
 * <b>DEPRECATED CLASS</b> <i>Replaced by class
 * </i><b><i>OcaMediaTransportNetwork </i></b><i>in version 3 of
 * Connection Management (CM3)</i> Abstract base class for defining
 * network classes to which this device belongs. May be a media transport
 * network, a control and monitoring network, or a network that does
 * both. There shall be one OcaStreamNetwork instance for each network to
 * which the device belongs. This class may be subclassed to support
 * networks of various types.
 * @extends OcaAgent
 */
export const OcaStreamNetwork = make_control_class(
    "OcaStreamNetwork",
    3,
    "\u0001\u0002\n",
    2,
    OcaAgent,
    [
      [ "GetLinkType", 3, 1, [  ], [ OcaNetworkLinkType ] ],
      [ "GetIDAdvertised", 3, 2, [  ], [ BLOB ] ],
      [ "SetIDAdvertised", 3, 3, [ BLOB ], [  ] ],
      [ "GetControlProtocol", 3, 4, [  ], [ OcaNetworkControlProtocol ] ],
      [ "GetMediaProtocol", 3, 5, [  ], [ OcaNetworkMediaProtocol ] ],
      [ "GetStatus", 3, 6, [  ], [ OcaNetworkStatus ] ],
      [ "GetStatistics", 3, 7, [  ], [ OcaNetworkStatistics ] ],
      [ "ResetStatistics", 3, 8, [  ], [  ] ],
      [ "GetSystemInterfaces", 3, 9, [  ], [ LIST(OcaNetworkSystemInterfaceID) ] ],
      [ "SetSystemInterfaces", 3, 10, [ LIST(OcaNetworkSystemInterfaceID) ], [  ] ],
      [ "GetStreamConnectorsSource", 3, 11, [  ], [ LIST(UINT32) ] ],
      [ "SetStreamConnectorsSource", 3, 12, [ LIST(UINT32) ], [  ] ],
      [ "GetStreamConnectorsSink", 3, 13, [  ], [ LIST(UINT32) ] ],
      [ "SetStreamConnectorsSink", 3, 14, [ LIST(UINT32) ], [  ] ],
      [ "GetSignalChannelsSource", 3, 15, [  ], [ LIST(UINT32) ] ],
      [ "SetSignalChannelsSource", 3, 16, [ LIST(UINT32) ], [  ] ],
      [ "GetSignalChannelsSink", 3, 17, [  ], [ LIST(UINT32) ] ],
      [ "SetSignalChannelsSink", 3, 18, [ LIST(UINT32) ], [  ] ],
      [ "Startup", 3, 19, [  ], [  ] ],
      [ "Shutdown", 3, 20, [  ], [  ] ]
    ],
    [
      new Property("ControlProtocol", new signature(OcaNetworkControlProtocol), 3, 3, false, false, null),
      new Property("IDAdvertised", new signature(BLOB), 3, 2, false, false, null),
      new Property("LinkType", new signature(OcaNetworkLinkType), 3, 1, true, false, null),
      new Property("MediaProtocol", new signature(OcaNetworkMediaProtocol), 3, 4, false, false, null),
      new Property("SignalChannelsSink", new signature(LIST(UINT32)), 3, 10, false, false, null),
      new Property("SignalChannelsSource", new signature(LIST(UINT32)), 3, 9, false, false, null),
      new Property("Statistics", new signature(OcaNetworkStatistics), 3, 11, false, false, null),
      new Property("Status", new signature(OcaNetworkStatus), 3, 5, false, false, null),
      new Property("StreamConnectorsSink", new signature(LIST(UINT32)), 3, 8, false, false, null),
      new Property("StreamConnectorsSource", new signature(LIST(UINT32)), 3, 7, false, false, null),
      new Property("SystemInterfaces", new signature(LIST(OcaNetworkSystemInterfaceID)), 3, 6, false, false, null)
    ],
    [
    ]
);


/**
 * <b>DEPRECATED CLASS</b> <i>Replaced by the
 * </i><b><i>OcaMediaSinkConnector </i></b><i>and
 * </i><b><i>OcaMediaSourceConnector </i></b><i>datatypes in version 3 of
 * Connection Management (CM3)</i> Agent class for objects ("connectors")
 * that allow connection of streams to the device. Streams may be single
 * channels or multichannel groups. A connector is either a <i>source</i>
 * or a <i>sink. </i> Sources are sometimes called "talkers". Sinks are
 * sometimes called "listeners". Each connector links to zero or more
 * <b>OcaStream</b> data objects. Each <b>OcaStream</b> object represents
 * a signal flow to or from a local connector to a remote connector. The
 * remote connector is usually, but not necessarily, in a different node.
 * Each connector collects zero or more <i>signal channels</i>. A signal
 * channel is an instance of <b>OcaNetworkSignalChannel.</b> Each signal
 * channel exposes one media channel of the stream to the interior of the
 * device. A signal channel therefore is a Worker that contains exactly
 * one <b>OcaPort</b> data object. Each <b>OcaStreamConnector </b>object
 * belongs to a particular instance of <b>OcaStreamNetwork</b> or a
 * subclass of <b>OcaStreamNetwork</b> <b>.</b> Each
 * <b>OcaStreamConnector </b>is linked to its network through the
 * <b>Owner</b> property. <ul> <li>When a controller creates an
 * <b>OcaStreamConnector </b>object dynamically, the controller must
 * store the Object Number of the corresponding <b>OcaStreamNetwork
 * </b>object in the <b>Owner</b> property. </li> <li>Upon receiving the
 * <b>Owner</b> property change, the <b>OcaStreamConnector </b>object
 * must register itself with the given stream network object via some
 * internal means.</li> </ul> This class may be subclassed to support
 * various network types. <b> </b>
 * @extends OcaAgent
 */
export const OcaStreamConnector = make_control_class(
    "OcaStreamConnector",
    3,
    "\u0001\u0002\u000b",
    2,
    OcaAgent,
    [
      [ "ConnectStream", 3, 7, [ OcaStream ], [ UINT16 ] ],
      [ "DisconnectStream", 3, 8, [ UINT16 ], [  ] ],
      [ "GetIDAdvertised", 3, 3, [  ], [ BLOB ] ],
      [ "GetOwnerNetwork", 3, 1, [  ], [ UINT32 ] ],
      [ "GetPins", 3, 10, [  ], [ MAP(UINT16, UINT32) ] ],
      [ "GetSourceOrSink", 3, 5, [  ], [ OcaNetworkMediaSourceOrSink ] ],
      [ "GetStatus", 3, 11, [  ], [ OcaStreamConnectorStatus ] ],
      [ "GetStreams", 3, 9, [  ], [ MAP(UINT16, OcaStream) ] ],
      [ "SetIDAdvertised", 3, 4, [ BLOB ], [  ] ],
      [ "SetOwnerNetwork", 3, 2, [ UINT32 ], [  ] ],
      [ "SetSourceOrSink", 3, 6, [ OcaNetworkMediaSourceOrSink ], [  ] ]
    ],
    [
      new Property("IDAdvertised", new signature(BLOB), 3, 2, false, false, null),
      new Property("OwnerNetwork", new signature(UINT32), 3, 1, false, false, null),
      new Property("Pins", new signature(MAP(UINT16, UINT32)), 3, 5, false, false, null),
      new Property("SourceOrSink", new signature(OcaNetworkMediaSourceOrSink), 3, 3, false, false, null),
      new Property("Status", new signature(OcaStreamConnectorStatus), 3, 6, false, false, null),
      new Property("Streams", new signature(MAP(UINT16, OcaStream)), 3, 4, false, false, null)
    ],
    [
    ]
);


/**
 * All classes defined in this module by their ClassID.
 */
export const Classes = {
  "\u0001" : OcaRoot,
  "\u0001\u0001" : OcaWorker,
  "\u0001\u0001\u0001" : OcaActuator,
  "\u0001\u0001\u0001\u0002" : OcaMute,
  "\u0001\u0001\u0001\u0003" : OcaPolarity,
  "\u0001\u0001\u0001\u0004" : OcaSwitch,
  "\u0001\u0001\u0001\u0005" : OcaGain,
  "\u0001\u0001\u0001\u0006" : OcaPanBalance,
  "\u0001\u0001\u0001\u0007" : OcaDelay,
  "\u0001\u0001\u0001\u0007\u0001" : OcaDelayExtended,
  "\u0001\u0001\u0001\b" : OcaFrequencyActuator,
  "\u0001\u0001\u0001\t" : OcaFilterClassical,
  "\u0001\u0001\u0001\n" : OcaFilterParametric,
  "\u0001\u0001\u0001\u000b" : OcaFilterPolynomial,
  "\u0001\u0001\u0001\f" : OcaFilterFIR,
  "\u0001\u0001\u0001\r" : OcaFilterArbitraryCurve,
  "\u0001\u0001\u0001\u000e" : OcaDynamics,
  "\u0001\u0001\u0001\u000f" : OcaDynamicsDetector,
  "\u0001\u0001\u0001\u0010" : OcaDynamicsCurve,
  "\u0001\u0001\u0001\u0011" : OcaSignalGenerator,
  "\u0001\u0001\u0001\u0012" : OcaSignalInput,
  "\u0001\u0001\u0001\u0013" : OcaSignalOutput,
  "\u0001\u0001\u0001\u0014" : OcaTemperatureActuator,
  "\u0001\u0001\u0001\u0015" : OcaIdentificationActuator,
  "\u0001\u0001\u0001\u0016" : OcaSummingPoint,
  "\u0001\u0001\u0001\u0001" : OcaBasicActuator,
  "\u0001\u0001\u0001\u0001\u0001" : OcaBooleanActuator,
  "\u0001\u0001\u0001\u0001\u0002" : OcaInt8Actuator,
  "\u0001\u0001\u0001\u0001\u0003" : OcaInt16Actuator,
  "\u0001\u0001\u0001\u0001\u0004" : OcaInt32Actuator,
  "\u0001\u0001\u0001\u0001\u0005" : OcaInt64Actuator,
  "\u0001\u0001\u0001\u0001\u0006" : OcaUint8Actuator,
  "\u0001\u0001\u0001\u0001\u0007" : OcaUint16Actuator,
  "\u0001\u0001\u0001\u0001\b" : OcaUint32Actuator,
  "\u0001\u0001\u0001\u0001\t" : OcaUint64Actuator,
  "\u0001\u0001\u0001\u0001\n" : OcaFloat32Actuator,
  "\u0001\u0001\u0001\u0001\u000b" : OcaFloat64Actuator,
  "\u0001\u0001\u0001\u0001\f" : OcaStringActuator,
  "\u0001\u0001\u0001\u0001\r" : OcaBitstringActuator,
  "\u0001\u0001\u0002" : OcaSensor,
  "\u0001\u0001\u0002\u0002" : OcaLevelSensor,
  "\u0001\u0001\u0002\u0002\u0001" : OcaAudioLevelSensor,
  "\u0001\u0001\u0002\u0003" : OcaTimeIntervalSensor,
  "\u0001\u0001\u0002\u0004" : OcaFrequencySensor,
  "\u0001\u0001\u0002\u0005" : OcaTemperatureSensor,
  "\u0001\u0001\u0002\u0006" : OcaIdentificationSensor,
  "\u0001\u0001\u0002\u0007" : OcaVoltageSensor,
  "\u0001\u0001\u0002\b" : OcaCurrentSensor,
  "\u0001\u0001\u0002\t" : OcaImpedanceSensor,
  "\u0001\u0001\u0002\n" : OcaGainSensor,
  "\u0001\u0001\u0002\u0001" : OcaBasicSensor,
  "\u0001\u0001\u0002\u0001\u0001" : OcaBooleanSensor,
  "\u0001\u0001\u0002\u0001\u0002" : OcaInt8Sensor,
  "\u0001\u0001\u0002\u0001\u0003" : OcaInt16Sensor,
  "\u0001\u0001\u0002\u0001\u0004" : OcaInt32Sensor,
  "\u0001\u0001\u0002\u0001\u0005" : OcaInt64Sensor,
  "\u0001\u0001\u0002\u0001\u0006" : OcaUint8Sensor,
  "\u0001\u0001\u0002\u0001\u0007" : OcaUint16Sensor,
  "\u0001\u0001\u0002\u0001\b" : OcaUint32Sensor,
  "\u0001\u0001\u0002\u0001\n" : OcaFloat32Sensor,
  "\u0001\u0001\u0002\u0001\u000b" : OcaFloat64Sensor,
  "\u0001\u0001\u0002\u0001\f" : OcaStringSensor,
  "\u0001\u0001\u0002\u0001\r" : OcaBitstringSensor,
  "\u0001\u0001\u0003" : OcaBlock,
  "\u0001\u0001\u0004" : OcaBlockFactory,
  "\u0001\u0001\u0005" : OcaMatrix,
  "\u0001\u0002" : OcaAgent,
  "\u0001\u0002\u0002" : OcaGrouper,
  "\u0001\u0002\u0003" : OcaRamper,
  "\u0001\u0002\u0004" : OcaNumericObserver,
  "\u0001\u0002\u0005" : OcaLibrary,
  "\u0001\u0002\u0007" : OcaPowerSupply,
  "\u0001\u0002\b" : OcaEventHandler,
  "\u0001\u0002\t" : OcaNumericObserverList,
  "\u0001\u0002\u000f" : OcaMediaClock3,
  "\u0001\u0002\u0010" : OcaTimeSource,
  "\u0001\u0002\u0011" : OcaPhysicalPosition,
  "\u0001\u0004" : OcaApplicationNetwork,
  "\u0001\u0004\u0001" : OcaControlNetwork,
  "\u0001\u0004\u0002" : OcaMediaTransportNetwork,
  "\u0001\u0003" : OcaManager,
  "\u0001\u0003\u0001" : OcaDeviceManager,
  "\u0001\u0003\u0002" : OcaSecurityManager,
  "\u0001\u0003\u0003" : OcaFirmwareManager,
  "\u0001\u0003\u0004" : OcaSubscriptionManager,
  "\u0001\u0003\u0005" : OcaPowerManager,
  "\u0001\u0003\u0006" : OcaNetworkManager,
  "\u0001\u0003\u0007" : OcaMediaClockManager,
  "\u0001\u0003\b" : OcaLibraryManager,
  "\u0001\u0003\t" : OcaAudioProcessingManager,
  "\u0001\u0003\n" : OcaDeviceTimeManager,
  "\u0001\u0003\u000b" : OcaTaskManager,
  "\u0001\u0003\f" : OcaCodingManager,
  "\u0001\u0003\r" : OcaDiagnosticManager,
  "\u0001\u0001\u0006" : OcaNetworkSignalChannel,
  "\u0001\u0002\u0001" : OcaNetwork,
  "\u0001\u0002\u0006" : OcaMediaClock,
  "\u0001\u0002\n" : OcaStreamNetwork,
  "\u0001\u0002\u000b" : OcaStreamConnector,
};

/**
 * A factory function for classes in this module.
 */
export function CreateObject(ClassID, device, ono)
{
  if (Classes.hasOwnProperty(ClassID))
    return new Classes[ClassID](device, ono);
  return null;
}