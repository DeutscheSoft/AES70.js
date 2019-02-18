
/*
 * @namespace RemoteControlClasses
 * This namespace contains all control classes generated from the AES70
 * standards document. It currently contains all classes defined in
 * AES70-2018.
 */

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
    OcaPortMode,
    OcaPortID,
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
 * @class OcaRoot
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the class identification, a structure that contains the ClassID
 * and ClassVersion. The return value indicates whether the property was
 * successfully retrieved.
 * @method RemoteControlClasses.OcaRoot#GetClassIdentification
 * @returns {Promise<OcaClassIdentification>}
 */
/**
 * Gets the value of the Lockable property. The return value indicates
 * whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaRoot#GetLockable
 * @returns {Promise<OcaBoolean>}
 */
/**
 * Locks the object totally, so that it can only be accessed for reading
 * or writing by the lockholder. If the device is read-only locked (by a
 * prior call to LockReadonly()) when Lock() is called by the same
 * lockholder, the lock state is upgraded to total. If the call is from a
 * session other than the lockholder's, the call fails. The return value
 * indicates whether the operation succeeded.
 * @method RemoteControlClasses.OcaRoot#LockTotal
 * @returns {Promise}
 */
/**
 * Unlocks the object so that it can be freely accessed again. This
 * method can only succeed if it is called by the lockholder. The return
 * value indicates whether the operation succeeded.
 * @method RemoteControlClasses.OcaRoot#Unlock
 * @returns {Promise}
 */
/**
 * Returns value of Role property. The return value indicates whether the
 * operation succeeded.
 * @method RemoteControlClasses.OcaRoot#GetRole
 * @returns {Promise<OcaString>}
 */
/**
 * Locks the object so that its properties may only be modified by the
 * lockholder, but others can still retrieve property values. If the
 * device is already locked (by a prior call to Lock() or LockReadonly())
 * when LockReadonly() is called by the same lockholder, the lock state
 * is set to read-only. If the call is from a session other than the
 * lockholder's, the call fails. The return value indicates whether the
 * operation succeeded.
 * @method RemoteControlClasses.OcaRoot#LockReadonly
 * @returns {Promise}
 */
/**
 * General event that is emitted when a property changes. In each setter
 * method (of derived classes) this event must be raised with the proper
 * derived event data structure.
 * @member RemoteControlClasses.OcaRoot#OnPropertyChanged {Event} -
 * General event that is emitted when a property changes. In each setter
 * method (of derived classes) this event must be raised with the proper
 * derived event data structure.
 */
/**
 * Number that uniquely identifies the class. Note that this differs from
 * the object number, which identifies the instantiated object. This is a
 * class property instead of an object property. This property will be
 * overridden by each descendant class, in order to specify that class's
 * ClassID.
/**
 * Identifies the interface version of the class. Any change to the class
 * definition leads to a higher class version. This property will be
 * overridden by each descendant class, in order to specify that class's
 * ClassVersion.
/**
 * The object number that uniquely identifies the instantiated object.
 * This read-only property must be set at creation of the object. Derived
 * objects can hardcode the object number in its constructor, or offer a
 * constructor with object number parameter for dynamic allocation of
 * object numbers.
/**
 * Read-only property that indicates whether the object is lockable or
 * non-lockable. The property value must be set during construction of
 * the object.
/**
 * Read-only text property that describes object's role in the device.
 * Particularly useful for workers, e.g. "Input 1 Gain".

/**
 * Abstract base class for classes that represent the device's
 * application and support functions.
 * @extends RemoteControlClasses.OcaRoot
 * @class OcaWorker
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the value of the Enabled property. The return value indicates
 * whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaWorker#GetEnabled
 * @returns {Promise<OcaBoolean>}
 */
/**
 * Sets the value of the Enabled property. The return value indicates
 * whether the property was successfully set.
 * @method RemoteControlClasses.OcaWorker#SetEnabled
 * @param enabled {OcaBoolean}
 *
 * @returns {Promise}
 */
/**
 * Adds an input or output port.. The return value indicates whether the
 * port was successfully added.
 * @method RemoteControlClasses.OcaWorker#AddPort
 * @param Label {OcaString}
 *
 * @param Mode {OcaPortMode}
 *
 * @returns {Promise<OcaPortID>}
 */
/**
 * Deletes an input or output port.. The return value indicates whether
 * the port was successfully deleted.
 * @method RemoteControlClasses.OcaWorker#DeletePort
 * @param ID {OcaPortID}
 *
 * @returns {Promise}
 */
/**
 * Gets the list of ports owned by the Worker object. The return value
 * indicates whether the list was successfully retrieved.
 * @method RemoteControlClasses.OcaWorker#GetPorts
 * @returns {Promise<OcaList>}
 */
/**
 * Gets the name of the designated port. The return value indicates
 * whether the name was successfully retrieved.
 * @method RemoteControlClasses.OcaWorker#GetPortName
 * @param PortID {OcaPortID}
 *
 * @returns {Promise<OcaString>}
 */
/**
 * Sets the name of the designated port. The return value indicates
 * whether the name was successfully set.
 * @method RemoteControlClasses.OcaWorker#SetPortName
 * @param PortID {OcaPortID}
 *
 * @param Name {OcaString}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the Label property. The return value indicates
 * whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaWorker#GetLabel
 * @returns {Promise<OcaString>}
 */
/**
 * Sets the value of the Label property. The return value indicates
 * whether the property was successfully set.
 * @method RemoteControlClasses.OcaWorker#SetLabel
 * @param label {OcaString}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the Owner property. The return value indicates
 * whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaWorker#GetOwner
 * @returns {Promise<OcaONo>}
 */
/**
 * Gets the value of the Latency property. The return value indicates
 * whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaWorker#GetLatency
 * @returns {Promise<OcaTimeInterval>}
 */
/**
 * Sets the value of the Latency property. The return value indicates
 * whether the property was successfully set.
 * @method RemoteControlClasses.OcaWorker#SetLatency
 * @param latency {OcaTimeInterval}
 *
 * @returns {Promise}
 */
/**
 * Returns path from the given object down to root. The return value
 * indicates whether the operation succeeded. Added in version 2.
 * @method RemoteControlClasses.OcaWorker#GetPath
 * @returns {Promise<Arguments<OcaNamePath,OcaONoPath>>}
 */
/**
 * Read/write property that indicates whether the worker object is
 * enabled in the device. If an object is disabled it cannot be used by
 * the application. Note that the behavior of a disabled object depends
 * on the object itself (e.g. a disabled chime generator is silent, a
 * disabled equalizer is flat, etc.).
 * @member RemoteControlClasses.OcaWorker#OnEnabledChanged {PropertyEvent<OcaBoolean>} - This event is emitted when Enabled changes in the remote object.
 */
/**
 * The list of (input and output) OCA ports the worker object has. Note
 * that a worker object can have no ports (in which case the list is
 * empty).
 * @member RemoteControlClasses.OcaWorker#OnPortsChanged {PropertyEvent<OcaList>} - This event is emitted when Ports changes in the remote object.
 */
/**
 * Specific label of the worker. Can be used to provide human readable
 * information about the worker. The label can be get and set over the
 * network.
 * @member RemoteControlClasses.OcaWorker#OnLabelChanged {PropertyEvent<OcaString>} - This event is emitted when Label changes in the remote object.
 */
/**
 * Object number of block that contains this worker.
 * @member RemoteControlClasses.OcaWorker#OnOwnerChanged {PropertyEvent<OcaONo>} - This event is emitted when Owner changes in the remote object.
 */
/**
 * Processing latency of this object. Optional. Readonly or readwrite,
 * depending on implementation.
 * @member RemoteControlClasses.OcaWorker#OnLatencyChanged {PropertyEvent<OcaTimeInterval>} - This event is emitted when Latency changes in the remote object.
 */

/**
 * Abstract base class for all actuators (i.e. devices that affect the
 * routing and/or content of the audio signal, or provide ancillary
 * functions such as power).
 * @extends RemoteControlClasses.OcaWorker
 * @class OcaActuator
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * @extends RemoteControlClasses.OcaActuator
 * @class OcaMute
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the current mute state. The return value indicates whether the
 * state was successfully retrieved.
 * @method RemoteControlClasses.OcaMute#GetState
 * @returns {Promise<OcaMuteState>}
 */
/**
 * Sets the mute state (i.e. value of the State property). The return
 * value indicates whether the state was successfully set.
 * @method RemoteControlClasses.OcaMute#SetState
 * @param state {OcaMuteState}
 *
 * @returns {Promise}
 */
/**
 * Current state of the mute.
 * @member RemoteControlClasses.OcaMute#OnStateChanged {PropertyEvent<OcaMuteState>} - This event is emitted when State changes in the remote object.
 */

/**
 * Signal inverter
 * @extends RemoteControlClasses.OcaActuator
 * @class OcaPolarity
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the current inverter state. The return value indicates whether
 * the state was successfully retrieved.
 * @method RemoteControlClasses.OcaPolarity#GetState
 * @returns {Promise<OcaPolarityState>}
 */
/**
 * Sets the inversion state (i.e. value of the State property). The
 * return value indicates whether the state was successfully set.
 * @method RemoteControlClasses.OcaPolarity#SetState
 * @param state {OcaPolarityState}
 *
 * @returns {Promise}
 */
/**
 * Current state of the inverter - {noninverted, inverted].
 * @member RemoteControlClasses.OcaPolarity#OnStateChanged {PropertyEvent<OcaPolarityState>} - This event is emitted when State changes in the remote object.
 */

/**
 * (n)-position single-pole switch.
 * @extends RemoteControlClasses.OcaActuator
 * @class OcaSwitch
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the value of the Position property and, optionally, its
 * implementation min and max. The return value indicates whether the
 * data was successfully retrieved.
 * @method RemoteControlClasses.OcaSwitch#GetPosition
 * @returns {Promise<Arguments<OcaUint16,OcaUint16,OcaUint16>>}
 */
/**
 * Sets the value of the Position property. The return value indicates
 * whether the property was successfully set.
 * @method RemoteControlClasses.OcaSwitch#SetPosition
 * @param position {OcaUint16}
 *
 * @returns {Promise}
 */
/**
 * Gets the name assigned to a given switch position. The return value
 * indicates whether the name was successfully retrieved.
 * @method RemoteControlClasses.OcaSwitch#GetPositionName
 * @param Index {OcaUint16}
 *
 * @returns {Promise<OcaString>}
 */
/**
 * Assigns a name to a given switch position. The return value indicates
 * whether the name was successfully assigned.
 * @method RemoteControlClasses.OcaSwitch#SetPositionName
 * @param Index {OcaUint16}
 *
 * @param Name {OcaString}
 *
 * @returns {Promise}
 */
/**
 * Gets list of names assigned to the switch's positions. The return
 * value indicates whether the names were successfully retrieved.
 * @method RemoteControlClasses.OcaSwitch#GetPositionNames
 * @returns {Promise<OcaList>}
 */
/**
 * Assigns names to the switch's positions. The return value indicates
 * whether the names were successfully assigned.
 * @method RemoteControlClasses.OcaSwitch#SetPositionNames
 * @param Names {OcaList}
 *
 * @returns {Promise}
 */
/**
 * Gets the Enabled flag assigned to a given switch position. The return
 * value indicates whether the flag was successfully retrieved.
 * @method RemoteControlClasses.OcaSwitch#GetPositionEnabled
 * @param Index {OcaUint16}
 *
 * @returns {Promise<OcaBoolean>}
 */
/**
 * Sets the Enabled flag assigned to a given switch position. The return
 * value indicates whether the flag was successfully set.
 * @method RemoteControlClasses.OcaSwitch#SetPositionEnabled
 * @param Index {OcaUint16}
 *
 * @param enabled {OcaBoolean}
 *
 * @returns {Promise}
 */
/**
 * Gets list of Enabled flags assigned to the switch's positions. The
 * return value indicates whether the flags were successfully retrieved.
 * @method RemoteControlClasses.OcaSwitch#GetPositionEnableds
 * @returns {Promise<OcaList>}
 */
/**
 * Sets list of Enabled flags for the switch's positions. The return
 * value indicates whether the flags were successfully set.
 * @method RemoteControlClasses.OcaSwitch#SetPositionEnableds
 * @param enableds {OcaList}
 *
 * @returns {Promise}
 */
/**
 * The current position of the switch. Positions shall be numbered from
 * minPosition to (including) maxPosition. If the object does not return
 * the optional parameters minPosition and maxPosition in its GetPosition
 * method the positions shall be numbered from 1 to n.
 * @member RemoteControlClasses.OcaSwitch#OnPositionChanged {PropertyEvent<OcaUint16>} - This event is emitted when Position changes in the remote object.
 */
/**
 * Vector of switch position names. Supplied by controller.
 * @member RemoteControlClasses.OcaSwitch#OnPositionNamesChanged {PropertyEvent<OcaList>} - This event is emitted when PositionNames changes in the remote object.
 */
/**
 * Vector of booleans which enable or disable corresponding switch
 * positions. Default values are a construction parameter. The usual
 * default value is True.
 * @member RemoteControlClasses.OcaSwitch#OnPositionEnableChanged {PropertyEvent<OcaList>} - This event is emitted when PositionEnable changes in the remote object.
 */

/**
 * Gain (or attenuation) element.
 * @extends RemoteControlClasses.OcaActuator
 * @class OcaGain
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the value and limits of the Gain property. The return value
 * indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaGain#GetGain
 * @returns {Promise<Arguments<OcaDB,OcaDB,OcaDB>>}
 */
/**
 * Sets the value of the Gain property. The return value indicates
 * whether the property was successfully set.
 * @method RemoteControlClasses.OcaGain#SetGain
 * @param Gain {OcaDB}
 *
 * @returns {Promise}
 */
/**
 * Gain in dB.
 * @member RemoteControlClasses.OcaGain#OnGainChanged {PropertyEvent<OcaDB>} - This event is emitted when Gain changes in the remote object.
 */

/**
 * Pan or Balance control.
 * @extends RemoteControlClasses.OcaActuator
 * @class OcaPanBalance
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the value and limits of the Position property. The return value
 * indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaPanBalance#GetPosition
 * @returns {Promise<Arguments<OcaFloat32,OcaFloat32,OcaFloat32>>}
 */
/**
 * Sets the value of the Position property. The return value indicates
 * whether the property was successfully set.
 * @method RemoteControlClasses.OcaPanBalance#SetPosition
 * @param Position {OcaFloat32}
 *
 * @returns {Promise}
 */
/**
 * Gets the value and limits of the MidpointGain property. The return
 * value indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaPanBalance#GetMidpointGain
 * @returns {Promise<Arguments<OcaDB,OcaDB,OcaDB>>}
 */
/**
 * Sets the value of the MidpointGain property. The return value
 * indicates whether the property was successfully set.
 * @method RemoteControlClasses.OcaPanBalance#SetMidpointGain
 * @param Gain {OcaDB}
 *
 * @returns {Promise}
 */
/**
 * Pan position. Range = -1.0 to +1.0. -1.0 is 100% left, +1.0 is 100%
 * right.
 * @member RemoteControlClasses.OcaPanBalance#OnPositionChanged {PropertyEvent<OcaFloat32>} - This event is emitted when Position changes in the remote object.
 */
/**
 * Midpoint gain. Normally, max=0dB, min=-6dB. May be readonly for
 * pan/balance objects with fixed midpoint gains.
 * @member RemoteControlClasses.OcaPanBalance#OnMidpointGainChanged {PropertyEvent<OcaDB>} - This event is emitted when MidpointGain changes in the remote object.
 */

/**
 * Signal delay - basic version.
 * @extends RemoteControlClasses.OcaActuator
 * @class OcaDelay
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the value of the DelayTime property. The return value indicates
 * whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaDelay#GetDelayTime
 * @returns {Promise<Arguments<OcaTimeInterval,OcaTimeInterval,OcaTimeInterval>>}
 */
/**
 * Sets the value of the DelayTime property. The return value indicates
 * whether the property was successfully set.
 * @method RemoteControlClasses.OcaDelay#SetDelayTime
 * @param delayTime {OcaTimeInterval}
 *
 * @returns {Promise}
 */
/**
 * Delay in seconds.
 * @member RemoteControlClasses.OcaDelay#OnDelayTimeChanged {PropertyEvent<OcaTimeInterval>} - This event is emitted when DelayTime changes in the remote object.
 */

/**
 * Signal delay - extended version. Allows setting delay value in various
 * units. Note that the inherited property 04p01 DelayTime is also
 * supported by this class and reflects actual achieved delay in seconds.
 * @extends RemoteControlClasses.OcaDelay
 * @class OcaDelayExtended
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the value of the DelayValue property. The return value indicates
 * whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaDelayExtended#GetDelayValue
 * @returns {Promise<Arguments<OcaDelayValue,OcaDelayValue,OcaDelayValue>>}
 */
/**
 * Sets the value of the DelayValue property. The return value indicates
 * whether the property was successfully set.
 * @method RemoteControlClasses.OcaDelayExtended#SetDelayValue
 * @param Value {OcaDelayValue}
 *
 * @returns {Promise}
 */
/**
 * Return current delay setting, converted to given units. The return
 * value indicates whether the method has succeeded.
 * @method RemoteControlClasses.OcaDelayExtended#GetDelayValueConverted
 * @param UoM {OcaDelayUnit}
 *
 * @returns {Promise<OcaDelayValue>}
 */
/**
 * Delay value.
 * @member RemoteControlClasses.OcaDelayExtended#OnDelayValueChanged {PropertyEvent<OcaDelayValue>} - This event is emitted when DelayValue changes in the remote object.
 */

/**
 * Simple frequency actuator.
 * @extends RemoteControlClasses.OcaActuator
 * @class OcaFrequencyActuator
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the value of the Frequency property. The return value indicates
 * whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaFrequencyActuator#GetFrequency
 * @returns {Promise<Arguments<OcaFrequency,OcaFrequency,OcaFrequency>>}
 */
/**
 * Sets the value of the Frequency property. The return value indicates
 * whether the property was successfully set.
 * @method RemoteControlClasses.OcaFrequencyActuator#SetFrequency
 * @param Frequency {OcaFrequency}
 *
 * @returns {Promise}
 */
/**
 * Frequency in Hertz.
 * @member RemoteControlClasses.OcaFrequencyActuator#OnFrequencyChanged {PropertyEvent<OcaFrequency>} - This event is emitted when Frequency changes in the remote object.
 */

/**
 * A classical analog-style filter - highpass, lowpass, bandpass, etc.,
 * with shape characteristics such as Butterworth, Chebyshev, Bessel, and
 * Linkwitz-Riley. Frequently used in loudspeaker crossover networks.
 * @extends RemoteControlClasses.OcaActuator
 * @class OcaFilterClassical
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the value of the Frequency property. The return value indicates
 * if the property was successfully retrieved.
 * @method RemoteControlClasses.OcaFilterClassical#GetFrequency
 * @returns {Promise<Arguments<OcaFrequency,OcaFrequency,OcaFrequency>>}
 */
/**
 * Sets the value of the Frequency property. The return value indicates
 * if the property was successfully set.
 * @method RemoteControlClasses.OcaFilterClassical#SetFrequency
 * @param frequency {OcaFrequency}
 *
 * @returns {Promise}
 */
/**
 * Returns the passband specification of the filter object. The return
 * value indicates if the specification was successfully retrieved.
 * @method RemoteControlClasses.OcaFilterClassical#GetPassband
 * @returns {Promise<OcaFilterPassband>}
 */
/**
 * Sets the passband specification of the filter object. The return value
 * indicates if the specification was successfully set.
 * @method RemoteControlClasses.OcaFilterClassical#SetPassband
 * @param Passband {OcaFilterPassband}
 *
 * @returns {Promise}
 */
/**
 * Returns the Shape property of the filter. The return value indicates
 * if the property was successfully retrieved.
 * @method RemoteControlClasses.OcaFilterClassical#GetShape
 * @returns {Promise<OcaClassicalFilterShape>}
 */
/**
 * Sets the Shape property of the filter. The return value indicates if
 * the property was successfully set.
 * @method RemoteControlClasses.OcaFilterClassical#SetShape
 * @param Shape {OcaClassicalFilterShape}
 *
 * @returns {Promise}
 */
/**
 * Returns the order of the filter. The return value indicates if the
 * property was successfully retrieved.
 * @method RemoteControlClasses.OcaFilterClassical#GetOrder
 * @returns {Promise<Arguments<OcaUint16,OcaUint16,OcaUint16>>}
 */
/**
 * Sets the order of the filter. The return value indicates if the
 * property was successfully set.
 * @method RemoteControlClasses.OcaFilterClassical#SetOrder
 * @param Order {OcaUint16}
 *
 * @returns {Promise}
 */
/**
 * Returns the filter parameter. The return value indicates if the
 * property was successfully retrieved.
 * @method RemoteControlClasses.OcaFilterClassical#GetParameter
 * @returns {Promise<Arguments<OcaFloat32,OcaFloat32,OcaFloat32>>}
 */
/**
 * Sets the filter parameter. The return value indicates if the parameter
 * was successfully set.
 * @method RemoteControlClasses.OcaFilterClassical#SetParameter
 * @param Parameter {OcaFloat32}
 *
 * @returns {Promise}
 */
/**
 * Sets some or all filter parameter. The return value indicates if the
 * parameters were successfully set. The action of this method is atomic
 * - if any of the value changes fails, none of the changes are made.
 * @method RemoteControlClasses.OcaFilterClassical#SetMultiple
 * @param Mask {OcaParameterMask}
 *
 * @param Frequency {OcaFrequency}
 *
 * @param Passband {OcaFilterPassband}
 *
 * @param Shape {OcaClassicalFilterShape}
 *
 * @param Order {OcaUint16}
 *
 * @param Parameter {OcaFloat32}
 *
 * @returns {Promise}
 */
/**
 * The frequency of the filter.
 * @member RemoteControlClasses.OcaFilterClassical#OnFrequencyChanged {PropertyEvent<OcaFrequency>} - This event is emitted when Frequency changes in the remote object.
 */
/**
 * Lowpass, highpass, bandpass, bandreject
 * @member RemoteControlClasses.OcaFilterClassical#OnPassbandChanged {PropertyEvent<OcaFilterPassband>} - This event is emitted when Passband changes in the remote object.
 */
/**
 * Shape family - Butterworth, Bessell, etc.
 * @member RemoteControlClasses.OcaFilterClassical#OnShapeChanged {PropertyEvent<OcaClassicalFilterShape>} - This event is emitted when Shape changes in the remote object.
 */
/**
 * Filter order
 * @member RemoteControlClasses.OcaFilterClassical#OnOrderChanged {PropertyEvent<OcaUint16>} - This event is emitted when Order changes in the remote object.
 */
/**
 * Ripple or other filter parameter, depending on shape. Not used by some
 * shapes.
 * @member RemoteControlClasses.OcaFilterClassical#OnParameterChanged {PropertyEvent<OcaFloat32>} - This event is emitted when Parameter changes in the remote object.
 */

/**
 * A parametric equalizer section with various shape options.
 * @extends RemoteControlClasses.OcaActuator
 * @class OcaFilterParametric
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the equalizer frequency setpoint. The return value indicates
 * whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaFilterParametric#GetFrequency
 * @returns {Promise<Arguments<OcaFrequency,OcaFrequency,OcaFrequency>>}
 */
/**
 * Sets the equalizer frequency. The return value indicates whether the
 * value was successfully set.
 * @method RemoteControlClasses.OcaFilterParametric#SetFrequency
 * @param Frequency {OcaFrequency}
 *
 * @returns {Promise}
 */
/**
 * Gets the curve shape of the equalizer. The return value indicates
 * whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaFilterParametric#GetShape
 * @returns {Promise<OcaParametricEQShape>}
 */
/**
 * Sets the curve shape shape of the equalizer. The return value
 * indicates whether the shape was successfully set.
 * @method RemoteControlClasses.OcaFilterParametric#SetShape
 * @param type {OcaParametricEQShape}
 *
 * @returns {Promise}
 */
/**
 * Gets the width parameter property of the equalizer. The return value
 * indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaFilterParametric#GetWidthParameter
 * @returns {Promise<Arguments<OcaFloat32,OcaFloat32,OcaFloat32>>}
 */
/**
 * Sets the width parameter property of the equalizer. The return value
 * indicates whether the Q was successfully set.
 * @method RemoteControlClasses.OcaFilterParametric#SetWidthParameter
 * @param Width {OcaFloat32}
 *
 * @returns {Promise}
 */
/**
 * Returns the in-band gain of the equalizer. The return value indicates
 * whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaFilterParametric#GetInbandGain
 * @returns {Promise<Arguments<OcaDB,OcaDB,OcaDB>>}
 */
/**
 * Sets the in-band gain of the equalizer. The return value indicates
 * whether the gain was successfully set.
 * @method RemoteControlClasses.OcaFilterParametric#SetInbandgain
 * @param gain {OcaDB}
 *
 * @returns {Promise}
 */
/**
 * Returns the shape parameter of the equalizer. The return value
 * indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaFilterParametric#GetShapeParameter
 * @returns {Promise<Arguments<OcaFloat32,OcaFloat32,OcaFloat32>>}
 */
/**
 * Sets the shape parameter of the equalizer. The return value indicates
 * whether the parameter was successfully set.
 * @method RemoteControlClasses.OcaFilterParametric#SetShapeParameter
 * @param shape {OcaFloat32}
 *
 * @returns {Promise}
 */
/**
 * Sets some or all filter parameters. The return value indicates if the
 * parameters were successfully set. The action of this method is atomic
 * - if any of the value changes fails, none of the changes are made.
 * @method RemoteControlClasses.OcaFilterParametric#SetMultiple
 * @param Mask {OcaParameterMask}
 *
 * @param Frequency {OcaFrequency}
 *
 * @param Shape {OcaParametricEQShape}
 *
 * @param WidthParameter {OcaFloat32}
 *
 * @param InBandGain {OcaDB}
 *
 * @param ShapeParameter {OcaFloat32}
 *
 * @returns {Promise}
 */
/**
 * The frequency setpoint of the parametric filter.
 * @member RemoteControlClasses.OcaFilterParametric#OnFrequencyChanged {PropertyEvent<OcaFrequency>} - This event is emitted when Frequency changes in the remote object.
 */
/**
 * The shape of the parametric filter - peak, shelf, etc.
 * @member RemoteControlClasses.OcaFilterParametric#OnShapeChanged {PropertyEvent<OcaParametricEQShape>} - This event is emitted when Shape changes in the remote object.
 */
/**
 * Width parameter. For normal parametric implementations, this is the Q
 * of the filter.
 * @member RemoteControlClasses.OcaFilterParametric#OnWidthParameterChanged {PropertyEvent<OcaFloat32>} - This event is emitted when WidthParameter changes in the remote object.
 */
/**
 * In-band gain of the parametric filter.
 * @member RemoteControlClasses.OcaFilterParametric#OnInBandGainChanged {PropertyEvent<OcaDB>} - This event is emitted when InBandGain changes in the remote object.
 */
/**
 * Width parameter. For certain filter types, this parameter may be used
 * to represent extra information about the shape of the transfer
 * function.
 * @member RemoteControlClasses.OcaFilterParametric#OnShapeParameterChanged {PropertyEvent<OcaFloat32>} - This event is emitted when ShapeParameter changes in the remote object.
 */

/**
 * A generic Z-domain rational polynomial filter section: <u>A(0) + A(1)z
 * + A(2)z^2 + A(3)z^3 + ...</u> B(0) + B(1)z + B(2)z^2 + B(3)z^3 + ...
 * @extends RemoteControlClasses.OcaActuator
 * @class OcaFilterPolynomial
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Returns the polynomial coefficients used.
 * @method RemoteControlClasses.OcaFilterPolynomial#GetCoefficients
 * @returns {Promise<Arguments<OcaList,OcaList>>}
 */
/**
 * Sets the polynomial coefficients.
 * @method RemoteControlClasses.OcaFilterPolynomial#SetCoefficients
 * @param A {OcaList}
 *
 * @param B {OcaList}
 *
 * @returns {Promise}
 */
/**
 * Gets the filter sampling rate.
 * @method RemoteControlClasses.OcaFilterPolynomial#GetSampleRate
 * @returns {Promise<Arguments<OcaFrequency,OcaFrequency,OcaFrequency>>}
 */
/**
 * Sets the filter sampling rate.
 * @method RemoteControlClasses.OcaFilterPolynomial#SetSampleRate
 * @param Rate {OcaFrequency}
 *
 * @returns {Promise}
 */
/**
 * Gets the maximum allowable order (= max number of array elements in
 * numerator and for denominator arrays)
 * @method RemoteControlClasses.OcaFilterPolynomial#GetMaxOrder
 * @returns {Promise<OcaUint8>}
 */
/**
 * Numerator - "A"
 * @member RemoteControlClasses.OcaFilterPolynomial#OnAChanged {PropertyEvent<OcaList>} - This event is emitted when A changes in the remote object.
 */
/**
 * Denominator - "B"
 * @member RemoteControlClasses.OcaFilterPolynomial#OnBChanged {PropertyEvent<OcaList>} - This event is emitted when B changes in the remote object.
 */
/**
 * Sample rate inside the filter. We can't assume it's the same as the
 * device input or output rate.
 * @member RemoteControlClasses.OcaFilterPolynomial#OnSampleRateChanged {PropertyEvent<OcaFrequency>} - This event is emitted when SampleRate changes in the remote object.
 */
/**
 * Maximum order of A[] and B[], i.e. the maximum size of the A[] and B[]
 * arrays. Readonly.

/**
 * A finite impulse response (FIR) filter.
 * @extends RemoteControlClasses.OcaActuator
 * @class OcaFilterFIR
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the length of the FIR filter. The return value indicates whether
 * the value was successfully retrieved.
 * @method RemoteControlClasses.OcaFilterFIR#GetLength
 * @returns {Promise<Arguments<OcaUint32,OcaUint32,OcaUint32>>}
 */
/**
 * Gets the coefficients of the FIR filter. The return value indicates
 * whether the coefficients were successfully retrieved.
 * @method RemoteControlClasses.OcaFilterFIR#GetCoefficients
 * @returns {Promise<OcaList>}
 */
/**
 * Sets the value of the properties of the FIR filter. The return value
 * indicates whether the properties were successfully set.
 * @method RemoteControlClasses.OcaFilterFIR#SetCoefficients
 * @param Coefficients {OcaList}
 *
 * @returns {Promise}
 */
/**
 * Gets the sample rate of the FIR filter. The return value indicates
 * whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaFilterFIR#GetSampleRate
 * @returns {Promise<Arguments<OcaFrequency,OcaFrequency,OcaFrequency>>}
 */
/**
 * Sets the sample rate of the FIR filter. The return value indicates
 * whether the rate was successfully set.
 * @method RemoteControlClasses.OcaFilterFIR#SetSampleRate
 * @param Rate {OcaFrequency}
 *
 * @returns {Promise}
 */
/**
 * Length of the filter, in samples. Readonly. Value is set when
 * SetCoefficients(...) method executes.
/**
 * Array of FIR Coefficients. The size of the array (number of entries)
 * is equal to the Order property plus 1.
 * @member RemoteControlClasses.OcaFilterFIR#OnCoefficientsChanged {PropertyEvent<OcaList>} - This event is emitted when Coefficients changes in the remote object.
 */
/**
 * Sample rate inside the filter. We can't assume it's the same as the
 * device input or output rate.
 * @member RemoteControlClasses.OcaFilterFIR#OnSampleRateChanged {PropertyEvent<OcaFrequency>} - This event is emitted when SampleRate changes in the remote object.
 */

/**
 * An arbitrary-curve filter, with transfer function specified as
 * amplitude and phase versus frequency.
 * @extends RemoteControlClasses.OcaActuator
 * @class OcaFilterArbitraryCurve
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Returns the complex transfer function.
 * @method RemoteControlClasses.OcaFilterArbitraryCurve#GetTransferFunction
 * @returns {Promise<OcaTransferFunction>}
 */
/**
 * Sets the complex transfer function.
 * @method RemoteControlClasses.OcaFilterArbitraryCurve#SetTransferFunction
 * @param TransferFunction {OcaTransferFunction}
 *
 * @returns {Promise}
 */
/**
 * Gets the filter sampling rate.
 * @method RemoteControlClasses.OcaFilterArbitraryCurve#GetSampleRate
 * @returns {Promise<Arguments<OcaFrequency,OcaFrequency,OcaFrequency>>}
 */
/**
 * Sets the filter sampling rate.
 * @method RemoteControlClasses.OcaFilterArbitraryCurve#SetSampleRate
 * @param Rate {OcaFrequency}
 *
 * @returns {Promise}
 */
/**
 * Returns the minimum number of required points in the specified
 * transfer function.
 * @method RemoteControlClasses.OcaFilterArbitraryCurve#GetTFMinLength
 * @returns {Promise<OcaUint16>}
 */
/**
 * Returns the maximum number of allowed points in the specified transfer
 * function.
 * @method RemoteControlClasses.OcaFilterArbitraryCurve#GetTFMaxLength
 * @returns {Promise<OcaUint16>}
 */
/**
 * Transfer function of the filter.
 * @member RemoteControlClasses.OcaFilterArbitraryCurve#OnTransferFunctionChanged {PropertyEvent<OcaTransferFunction>} - This event is emitted when TransferFunction changes in the remote object.
 */
/**
 * Sample rate inside the filter. We can't assume it's the same as the
 * device input or output rate.
 * @member RemoteControlClasses.OcaFilterArbitraryCurve#OnSampleRateChanged {PropertyEvent<OcaFrequency>} - This event is emitted when SampleRate changes in the remote object.
 */
/**
 * Minimum number of points that transfer function must specify
 * @member RemoteControlClasses.OcaFilterArbitraryCurve#OnTFMinLengthChanged {PropertyEvent<OcaUint16>} - This event is emitted when TFMinLength changes in the remote object.
 */
/**
 * Maximum number of points that transfer function may specify
 * @member RemoteControlClasses.OcaFilterArbitraryCurve#OnTFMaxLengthChanged {PropertyEvent<OcaUint16>} - This event is emitted when TFMaxLength changes in the remote object.
 */

/**
 * A multipurpose dynamics processor. Can be configured as compressor,
 * limiter, expander, or gate. This class is expected to handle the
 * majority of the basic cases. More complex devices may be described in
 * a different manner, using one or more <b>OcaDynamicsDetector</b> and
 * <b>OcaDynamicsCurve</b> objects, in conjunction with other Worker
 * objects as needed.
 * @extends RemoteControlClasses.OcaActuator
 * @class OcaDynamics
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the value of the Triggered property. The return value indicates
 * whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaDynamics#GetTriggered
 * @returns {Promise<OcaBoolean>}
 */
/**
 * Gets the value of the DynamicGain property. The return value indicates
 * whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaDynamics#GetDynamicGain
 * @returns {Promise<OcaDB>}
 */
/**
 * Sets the value of the Function property. The return value indicates
 * whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaDynamics#GetFunction
 * @returns {Promise<OcaDynamicsFunction>}
 */
/**
 * Sets the value of the Function property. The return value indicates
 * whether the property was successfully set.
 * @method RemoteControlClasses.OcaDynamics#SetFunction
 * @param Func {OcaDynamicsFunction}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the Ratio property. The return value indicates
 * whether the property was successfully retrieved. GetRatio() is a
 * DEPRECATED method. Please use <b>GetSlope()</b> instead.
 * @method RemoteControlClasses.OcaDynamics#GetRatio
 * @returns {Promise<Arguments<OcaFloat32,OcaFloat32,OcaFloat32>>}
 */
/**
 * Sets the value of the Ratio property. The return value indicates
 * whether the property was successfully set. SetRatio() is a DEPRECATED
 * method. Please use <b>SetSlope()</b> instead.
 * @method RemoteControlClasses.OcaDynamics#SetRatio
 * @param Ratio {OcaFloat32}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the Threshold property. The return value indicates
 * if the value was successfully retrieved.
 * @method RemoteControlClasses.OcaDynamics#GetThreshold
 * @returns {Promise<Arguments<OcaDBr,OcaDBz,OcaDBz>>}
 */
/**
 * Sets the value of the Threshold property. The return value indicates
 * if the value was successfully set.
 * @method RemoteControlClasses.OcaDynamics#SetThreshold
 * @param threshold {OcaDBr}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the ThresholdPresentationUnits property. The return
 * value indicates if the value was successfully retrieved.
 * @method RemoteControlClasses.OcaDynamics#GetThresholdPresentationUnits
 * @returns {Promise<OcaPresentationUnit>}
 */
/**
 * Sets the value of the ThresholdPresentationUnits property. The return
 * value indicates if the value was successfully set.
 * @method RemoteControlClasses.OcaDynamics#SetThresholdPresentationUnits
 * @param Units {OcaPresentationUnit}
 *
 * @returns {Promise}
 */
/**
 * Sets the value of the DetectorLaw property. The return value indicates
 * if the value was successfully set.
 * @method RemoteControlClasses.OcaDynamics#GetDetectorLaw
 * @returns {Promise<OcaLevelDetectionLaw>}
 */
/**
 * Sets the value of the DetectorLaw property. The return value indicates
 * if the value was successfully set.
 * @method RemoteControlClasses.OcaDynamics#SetDetectorLaw
 * @param Law {OcaLevelDetectionLaw}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the AttackTime property. The return value indicates
 * if the value was successfully retrieved.
 * @method RemoteControlClasses.OcaDynamics#GetAttackTime
 * @returns {Promise<Arguments<OcaTimeInterval,OcaTimeInterval,OcaTimeInterval>>}
 */
/**
 * Sets the value of the AttackTime property. The return value indicates
 * if the value was successfully set.
 * @method RemoteControlClasses.OcaDynamics#SetAttackTime
 * @param Time {OcaTimeInterval}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the ReleaseTime property. The return value indicates
 * if the value was successfully retrieved.
 * @method RemoteControlClasses.OcaDynamics#GetReleaseTime
 * @returns {Promise<Arguments<OcaTimeInterval,OcaTimeInterval,OcaTimeInterval>>}
 */
/**
 * Sets the value of the ReleaseTime property. The return value indicates
 * if the value was successfully set.
 * @method RemoteControlClasses.OcaDynamics#SetReleaseTime
 * @param Time {OcaTimeInterval}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the HoldTime property. The return value indicates if
 * the value was successfully retrieved.
 * @method RemoteControlClasses.OcaDynamics#GetHoldTime
 * @returns {Promise<Arguments<OcaTimeInterval,OcaTimeInterval,OcaTimeInterval>>}
 */
/**
 * Sets the value of the HoldTime property. The return value indicates if
 * the value was successfully set.
 * @method RemoteControlClasses.OcaDynamics#SetHoldTime
 * @param Time {OcaTimeInterval}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the DynamicGainFLoor property. The return value
 * indicates if the value was successfully retrieved.
 * @method RemoteControlClasses.OcaDynamics#GetDynamicGainFloor
 * @returns {Promise<Arguments<OcaDB,OcaDB,OcaDB>>}
 */
/**
 * Sets the value of the DynamicGainFloor property. The return value
 * indicates if the value was successfully set.
 * @method RemoteControlClasses.OcaDynamics#SetDynamicGainFloor
 * @param Limit {OcaDB}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the DynamicGainCeiling property. The return value
 * indicates if the value was successfully retrieved.
 * @method RemoteControlClasses.OcaDynamics#GetDynamicGainCeiling
 * @returns {Promise<Arguments<OcaDB,OcaDB,OcaDB>>}
 */
/**
 * Sets the value of the DynamicGainCeiling property. The return value
 * indicates if the value was successfully set.
 * @method RemoteControlClasses.OcaDynamics#SetDynamicGainCeiling
 * @param Limit {OcaDB}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the KneeParameter property. The return value
 * indicates if the value was successfully retrieved.
 * @method RemoteControlClasses.OcaDynamics#GetKneeParameter
 * @returns {Promise<Arguments<OcaFloat32,OcaFloat32,OcaFloat32>>}
 */
/**
 * Sets the value of the KneeParameter property. The return value
 * indicates if the value was successfully set.
 * @method RemoteControlClasses.OcaDynamics#SetKneeParameter
 * @param Parameter {OcaFloat32}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the Slope property. The return value indicates
 * whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaDynamics#GetSlope
 * @returns {Promise<Arguments<OcaFloat32,OcaFloat32,OcaFloat32>>}
 */
/**
 * Sets the value of the Slope property. The return value indicates
 * whether the property was successfully set.
 * @method RemoteControlClasses.OcaDynamics#SetSlope
 * @param Slope {OcaFloat32}
 *
 * @returns {Promise}
 */
/**
 * Sets some or all dynamics parameters. The return value indicates if
 * the parameters were successfully set. The action of this method is
 * atomic - if any of the value changes fails, none of the changes are
 * made.
 * @method RemoteControlClasses.OcaDynamics#SetMultiple
 * @param Mask {OcaParameterMask}
 *
 * @param Function {OcaDynamicsFunction}
 *
 * @param Threshold {OcaDBr}
 *
 * @param ThresholdPresentationUnits {OcaPresentationUnit}
 *
 * @param DetectorLaw {OcaLevelDetectionLaw}
 *
 * @param AttackTime {OcaTimeInterval}
 *
 * @param ReleaseTime {OcaTimeInterval}
 *
 * @param HoldTime {OcaTimeInterval}
 *
 * @param DynamicGainCeiling {OcaDB}
 *
 * @param DynamicGainFloor {OcaDB}
 *
 * @param Slope {OcaFloat32}
 *
 * @param KneeParameter {OcaFloat32}
 *
 * @returns {Promise}
 */
/**
 * Read-only property that indicates whether the dynamics processor is
 * currently triggered (i.e. the signal level is above upper threshold or
 * below lower threshold). This property can be monitored via a periodic
 * event subscription.
 * @member RemoteControlClasses.OcaDynamics#OnTriggeredChanged {PropertyEvent<OcaBoolean>} - This event is emitted when Triggered changes in the remote object.
 */
/**
 * Current instantaneous gain of dynamics object. Readonly.
 * @member RemoteControlClasses.OcaDynamics#OnDynamicGainChanged {PropertyEvent<OcaDB>} - This event is emitted when DynamicGain changes in the remote object.
 */
/**
 * Dynamics element function - compressor, limiter, expander, etc.
 * @member RemoteControlClasses.OcaDynamics#OnFunctionChanged {PropertyEvent<OcaDynamicsFunction>} - This event is emitted when Function changes in the remote object.
 */
/**
 * DEPRECATED PROPERTY - please use property <b>Slope </b>instead.
 * Compression or expansion ratio. For Function = Compress or Limit,
 * value is d(input amplitude)/d(output amplitude). For Function = Expand
 * or Gate, value is d(output amplitude)/d(input amplitude).
 * @member RemoteControlClasses.OcaDynamics#OnRatioChanged {PropertyEvent<OcaFloat32>} - This event is emitted when Ratio changes in the remote object.
 */
/**
 * Compression or expansion threshold.
 * @member RemoteControlClasses.OcaDynamics#OnThresholdChanged {PropertyEvent<OcaDBr>} - This event is emitted when Threshold changes in the remote object.
 */
/**
 * Compression or expansion threshold presentation units.
 * @member RemoteControlClasses.OcaDynamics#OnThresholdPresentationUnitsChanged {PropertyEvent<OcaPresentationUnit>} - This event is emitted when ThresholdPresentationUnits changes in the remote object.
 */
/**
 * This was not documented in the OCA standard.
 * @member RemoteControlClasses.OcaDynamics#OnDetectorLawChanged {PropertyEvent<OcaLevelDetectionLaw>} - This event is emitted when DetectorLaw changes in the remote object.
 */
/**
 * Attack time in seconds.
 * @member RemoteControlClasses.OcaDynamics#OnAttackTimeChanged {PropertyEvent<OcaTimeInterval>} - This event is emitted when AttackTime changes in the remote object.
 */
/**
 * Release time in seconds.
 * @member RemoteControlClasses.OcaDynamics#OnReleaseTimeChanged {PropertyEvent<OcaTimeInterval>} - This event is emitted when ReleaseTime changes in the remote object.
 */
/**
 * Hold time in seconds.
 * @member RemoteControlClasses.OcaDynamics#OnHoldTimeChanged {PropertyEvent<OcaTimeInterval>} - This event is emitted when HoldTime changes in the remote object.
 */
/**
 * Upper limit for DynamicGain
 * @member RemoteControlClasses.OcaDynamics#OnDynamicGainCeilingChanged {PropertyEvent<OcaDB>} - This event is emitted when DynamicGainCeiling changes in the remote object.
 */
/**
 * Lower limit for for DynamicGain
 * @member RemoteControlClasses.OcaDynamics#OnDynamicGainFloorChanged {PropertyEvent<OcaDB>} - This event is emitted when DynamicGainFloor changes in the remote object.
 */
/**
 * Soft knee parameter. Interpretation is device-dependent.
 * @member RemoteControlClasses.OcaDynamics#OnKneeParameterChanged {PropertyEvent<OcaFloat32>} - This event is emitted when KneeParameter changes in the remote object.
 */
/**
 * Slope of transfer function = d(output amplitude) / d(input amplitude).
 * See notes for class OcaDynamicsCurve for further detail. Note that the
 * definition of this value does not depend on the value of property
 * Function.
 * @member RemoteControlClasses.OcaDynamics#OnSlopeChanged {PropertyEvent<OcaFloat32>} - This event is emitted when Slope changes in the remote object.
 */

/**
 * Dynamics element : side-chain detector.
 * @extends RemoteControlClasses.OcaActuator
 * @class OcaDynamicsDetector
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the value of the Law property. Return status indicates whether
 * the value was successfully retrieved.
 * @method RemoteControlClasses.OcaDynamicsDetector#GetLaw
 * @returns {Promise<OcaLevelDetectionLaw>}
 */
/**
 * Sets the value of the Law property. Return status indicates whether
 * the value was successfully set.
 * @method RemoteControlClasses.OcaDynamicsDetector#SetLaw
 * @param Law {OcaLevelDetectionLaw}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the AttackTime property. The return value indicates
 * if the value was successfully retrieved.
 * @method RemoteControlClasses.OcaDynamicsDetector#GetAttackTime
 * @returns {Promise<Arguments<OcaTimeInterval,OcaTimeInterval,OcaTimeInterval>>}
 */
/**
 * Sets the value of the AttackTime property. The return value indicates
 * whether the property was successfully set.
 * @method RemoteControlClasses.OcaDynamicsDetector#SetAttackTime
 * @param Time {OcaTimeInterval}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the ReleaseTime property. The return value indicates
 * if the value was successfully retrieved.
 * @method RemoteControlClasses.OcaDynamicsDetector#GetReleaseTime
 * @returns {Promise<Arguments<OcaTimeInterval,OcaTimeInterval,OcaTimeInterval>>}
 */
/**
 * Sets the value of the ReleaseTime property. The return value indicates
 * whether the property was successfully set.
 * @method RemoteControlClasses.OcaDynamicsDetector#SetReleaseTime
 * @param Time {OcaTimeInterval}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the HoldTime property. The return value indicates if
 * the value was successfully retrieved.
 * @method RemoteControlClasses.OcaDynamicsDetector#GetHoldTime
 * @returns {Promise<Arguments<OcaTimeInterval,OcaTimeInterval,OcaTimeInterval>>}
 */
/**
 * Sets the value of the HoldTime property. The return value indicates
 * whether the property was successfully set.
 * @method RemoteControlClasses.OcaDynamicsDetector#SetHoldTime
 * @param Time {OcaTimeInterval}
 *
 * @returns {Promise}
 */
/**
 * Sets some or all detector parameters. The return value indicates if
 * the parameters were successfully set. The action of this method is
 * atomic - if any of the value changes fails, none of the changes are
 * made.
 * @method RemoteControlClasses.OcaDynamicsDetector#SetMultiple
 * @param Mask {OcaParameterMask}
 *
 * @param Law {OcaLevelDetectionLaw}
 *
 * @param AttackTime {OcaTimeInterval}
 *
 * @param ReleaseTime {OcaTimeInterval}
 *
 * @param HoldTime {OcaTimeInterval}
 *
 * @returns {Promise}
 */
/**
 * Level detection law: RMS, Peak, possibly others
 * @member RemoteControlClasses.OcaDynamicsDetector#OnLawChanged {PropertyEvent<OcaLevelDetectionLaw>} - This event is emitted when Law changes in the remote object.
 */
/**
 * Detector attack time in seconds.
 * @member RemoteControlClasses.OcaDynamicsDetector#OnAttackTimeChanged {PropertyEvent<OcaTimeInterval>} - This event is emitted when AttackTime changes in the remote object.
 */
/**
 * Detector release time in seconds.
 * @member RemoteControlClasses.OcaDynamicsDetector#OnReleaseTimeChanged {PropertyEvent<OcaTimeInterval>} - This event is emitted when ReleaseTime changes in the remote object.
 */
/**
 * Detector hold time in seconds.
 * @member RemoteControlClasses.OcaDynamicsDetector#OnHoldTimeChanged {PropertyEvent<OcaTimeInterval>} - This event is emitted when HoldTime changes in the remote object.
 */

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
 * @extends RemoteControlClasses.OcaActuator
 * @class OcaDynamicsCurve
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the number of curve segments. The return value indicates whether
 * the value was successfully retrieved.
 * @method RemoteControlClasses.OcaDynamicsCurve#GetNSegments
 * @returns {Promise<Arguments<OcaUint8,OcaUint8,OcaUint8>>}
 */
/**
 * Sets the number of curve segments. The return value indicates whether
 * the data was successfully set. If this method increases the value of
 * n, the data in properties <b>Threshold</b>, <b>Slope</b>, and
 * <b>KneeParameter </b>of the new segment are by default set to the
 * values of the previous segment.
 * @method RemoteControlClasses.OcaDynamicsCurve#SetNSegments
 * @param Slope {OcaUint8}
 *
 * @returns {Promise}
 */
/**
 * Gets the list of Threshold values. The return value indicates whether
 * the data was successfully retrieved.
 * @method RemoteControlClasses.OcaDynamicsCurve#GetThreshold
 * @returns {Promise<Arguments<OcaList,OcaDBz,OcaDBz>>}
 */
/**
 * Sets the list of Threshold values. The return value indicates whether
 * the values were successfully set.
 * @method RemoteControlClasses.OcaDynamicsCurve#SetThreshold
 * @param Threshold {OcaList}
 *
 * @returns {Promise}
 */
/**
 * Gets the list of Slope values. The return value indicates whether the
 * list was successfully retrieved.
 * @method RemoteControlClasses.OcaDynamicsCurve#GetSlope
 * @returns {Promise<Arguments<OcaList,OcaList,OcaList>>}
 */
/**
 * Sets the list of Slope values. The return value indicates whether the
 * values were successfully set.
 * @method RemoteControlClasses.OcaDynamicsCurve#SetSlope
 * @param slope {OcaList}
 *
 * @returns {Promise}
 */
/**
 * Gets the list of KneeParameter valuess. The return value indicates
 * whether the list was successfully retrieved.
 * @method RemoteControlClasses.OcaDynamicsCurve#GetKneeParameter
 * @returns {Promise<Arguments<OcaList,OcaList,OcaList>>}
 */
/**
 * Sets the list of KneeParameter values. The return value indicates
 * whether the values were successfully set.
 * @method RemoteControlClasses.OcaDynamicsCurve#SetKneeParameter
 * @param parameter {OcaList}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the DynamicGainCeiling property. The return value
 * indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaDynamicsCurve#GetDynamicGainCeiling
 * @returns {Promise<Arguments<OcaDB,OcaDB,OcaDB>>}
 */
/**
 * Sets the value of the DynamicGainCeiling property. The return value
 * indicates whether the data was successfully set.
 * @method RemoteControlClasses.OcaDynamicsCurve#SetDynamicGainCeiling
 * @param gain {OcaDB}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the DynamicGainFloor property. The return value
 * indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaDynamicsCurve#GetDynamicGainFloor
 * @returns {Promise<Arguments<OcaDB,OcaDB,OcaDB>>}
 */
/**
 * Sets the value of the DynamicGainFloor property. The return value
 * indicates whether the data was successfully set.
 * @method RemoteControlClasses.OcaDynamicsCurve#SetDynamicGainFloor
 * @param Gain {OcaDB}
 *
 * @returns {Promise}
 */
/**
 * Sets some or all dynamics curve parameters. The return value indicates
 * if the parameters were successfully set. The action of this method is
 * atomic - if any of the value changes fails, none of the changes are
 * made.
 * @method RemoteControlClasses.OcaDynamicsCurve#SetMultiple
 * @param Mask {OcaParameterMask}
 *
 * @param nSegments {OcaUint8}
 *
 * @param Threshold {OcaList}
 *
 * @param Slope {OcaList}
 *
 * @param KneeParameter {OcaList}
 *
 * @param DynamicGainFloor {OcaDB}
 *
 * @param DynamicGainCeiling {OcaDB}
 *
 * @returns {Promise}
 */
/**
 * Number of curve segments.
 * @member RemoteControlClasses.OcaDynamicsCurve#OnnSegmentsChanged {PropertyEvent<OcaUint8>} - This event is emitted when nSegments changes in the remote object.
 */
/**
 * <b>T[1..n-1]</b>. See class description for details.
 * @member RemoteControlClasses.OcaDynamicsCurve#OnThresholdChanged {PropertyEvent<OcaList>} - This event is emitted when Threshold changes in the remote object.
 */
/**
 * <b>S[1..n]</b>. See class description for details.
 * @member RemoteControlClasses.OcaDynamicsCurve#OnSlopeChanged {PropertyEvent<OcaList>} - This event is emitted when Slope changes in the remote object.
 */
/**
 * <b>K[1..n]</b>. See class description for details.
 * @member RemoteControlClasses.OcaDynamicsCurve#OnKneeParameterChanged {PropertyEvent<OcaList>} - This event is emitted when KneeParameter changes in the remote object.
 */
/**
 * Lowest allowed dynamic gain value. See class description for details.
 * @member RemoteControlClasses.OcaDynamicsCurve#OnDynamicGainFloorChanged {PropertyEvent<OcaDB>} - This event is emitted when DynamicGainFloor changes in the remote object.
 */
/**
 * Highest allowed dynamic gain value. See class description for details.
 * @member RemoteControlClasses.OcaDynamicsCurve#OnDynamicGainCeilingChanged {PropertyEvent<OcaDB>} - This event is emitted when DynamicGainCeiling changes in the remote object.
 */

/**
 * Multiwaveform signal generator with optional sweep capability.
 * @extends RemoteControlClasses.OcaActuator
 * @class OcaSignalGenerator
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the value of the Frequency1 property. The return value indicates
 * whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaSignalGenerator#GetFrequency1
 * @returns {Promise<Arguments<OcaFrequency,OcaFrequency,OcaFrequency>>}
 */
/**
 * Sets the value of the Frequency1 property. The return value indicates
 * whether the property was successfully set.
 * @method RemoteControlClasses.OcaSignalGenerator#SetFrequency1
 * @param frequency {OcaFrequency}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the Frequency2 property. The return value indicates
 * whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaSignalGenerator#GetFrequency2
 * @returns {Promise<Arguments<OcaFrequency,OcaFrequency,OcaFrequency>>}
 */
/**
 * Sets the value of the Frequency2 property. The return value indicates
 * whether the property was successfully set.
 * @method RemoteControlClasses.OcaSignalGenerator#SetFrequency2
 * @param frequency {OcaFrequency}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the Level property. The return value indicates
 * whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaSignalGenerator#GetLevel
 * @returns {Promise<Arguments<OcaDBz,OcaDBz,OcaDBz>>}
 */
/**
 * Sets the value of the Level property. The return value indicates
 * whether the property was successfully set.
 * @method RemoteControlClasses.OcaSignalGenerator#SetLevel
 * @param Level {OcaDBz}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the Waveform property. The return value indicates
 * whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaSignalGenerator#GetWaveform
 * @returns {Promise<OcaWaveformType>}
 */
/**
 * Sets the value of the Waveform property. The return value indicates
 * whether the property was successfully set.
 * @method RemoteControlClasses.OcaSignalGenerator#SetWaveform
 * @param waveform {OcaWaveformType}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the SweepType property. The return value indicates
 * whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaSignalGenerator#GetSweepType
 * @returns {Promise<OcaSweepType>}
 */
/**
 * Sets the value of the SweepType property. The return value indicates
 * whether the property was successfully set.
 * @method RemoteControlClasses.OcaSignalGenerator#SetSweepType
 * @param sweepType {OcaSweepType}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the SweepTime property. The return value indicates
 * whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaSignalGenerator#GetSweepTime
 * @returns {Promise<Arguments<OcaTimeInterval,OcaTimeInterval,OcaTimeInterval>>}
 */
/**
 * Sets the value of the SweepTime property. The return value indicates
 * whether the property was successfully set.
 * @method RemoteControlClasses.OcaSignalGenerator#SetSweepTime
 * @param sweepTime {OcaTimeInterval}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the SweepRepeat property. The return value indicates
 * whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaSignalGenerator#GetSweepRepeat
 * @returns {Promise<OcaBoolean>}
 */
/**
 * Sets the value of the SweepRepeat property. The return value indicates
 * whether the property was successfully set.
 * @method RemoteControlClasses.OcaSignalGenerator#SetSweepRepeat
 * @param sweepRepeat {OcaBoolean}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the Generating property. The return value indicates
 * whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaSignalGenerator#GetGenerating
 * @returns {Promise<OcaBoolean>}
 */
/**
 * Starts the signal generator. The return value indicates whether the
 * signal generator was successfully started.
 * @method RemoteControlClasses.OcaSignalGenerator#Start
 * @returns {Promise}
 */
/**
 * Stops the signal generator. The return value indicates whether the
 * signal generator was successfully stopped.
 * @method RemoteControlClasses.OcaSignalGenerator#Stop
 * @returns {Promise}
 */
/**
 * Sets some or all signal generation parameters. The return value
 * indicates if the parameters were successfully set. The action of this
 * method is atomic - if any of the value changes fails, none of the
 * changes are made.
 * @method RemoteControlClasses.OcaSignalGenerator#SetMultiple
 * @param Mask {OcaParameterMask}
 *
 * @param Frequency1 {OcaFrequency}
 *
 * @param Frequency2 {OcaFrequency}
 *
 * @param Level {OcaDBz}
 *
 * @param Waveform {OcaWaveformType}
 *
 * @param SweepType {OcaSweepType}
 *
 * @param SweepTime {OcaTimeInterval}
 *
 * @param SweepRepeat {OcaBoolean}
 *
 * @returns {Promise}
 */
/**
 * Center frequency or sweep start frequency.
 * @member RemoteControlClasses.OcaSignalGenerator#OnFrequency1Changed {PropertyEvent<OcaFrequency>} - This event is emitted when Frequency1 changes in the remote object.
 */
/**
 * Sweep end frequency.
 * @member RemoteControlClasses.OcaSignalGenerator#OnFrequency2Changed {PropertyEvent<OcaFrequency>} - This event is emitted when Frequency2 changes in the remote object.
 */
/**
 * Output level in dB relative to device-defined zero level.
 * @member RemoteControlClasses.OcaSignalGenerator#OnLevelChanged {PropertyEvent<OcaDBz>} - This event is emitted when Level changes in the remote object.
 */
/**
 * The waveform type this generator generates (e.g. sine, square, noise,
 * etc.).
 * @member RemoteControlClasses.OcaSignalGenerator#OnWaveformChanged {PropertyEvent<OcaWaveformType>} - This event is emitted when Waveform changes in the remote object.
 */
/**
 * The sweep type of the signal generator: None for no sweep, linear or
 * logarithmic if sweep is generated.
 * @member RemoteControlClasses.OcaSignalGenerator#OnSweepTypeChanged {PropertyEvent<OcaSweepType>} - This event is emitted when SweepType changes in the remote object.
 */
/**
 * Duration of sweep in seconds.
 * @member RemoteControlClasses.OcaSignalGenerator#OnSweepTimeChanged {PropertyEvent<OcaTimeInterval>} - This event is emitted when SweepTime changes in the remote object.
 */
/**
 * Indicates whether the sweep is repeated (true) or is one-shot (false).
 * @member RemoteControlClasses.OcaSignalGenerator#OnSweepRepeatChanged {PropertyEvent<OcaBoolean>} - This event is emitted when SweepRepeat changes in the remote object.
 */
/**
 * Read-only property that indicates whether the generator is producing
 * output (true) or not (false).
 * @member RemoteControlClasses.OcaSignalGenerator#OnGeneratingChanged {PropertyEvent<OcaBoolean>} - This event is emitted when Generating changes in the remote object.
 */

/**
 * A set of one or more non-network signal inputs. Number of channels is
 * set at construction time. This class has no native properties or
 * methods - they are all inherited from <b>OcaWorker</b> and above. It
 * is defined as a separate class as an aid to enumeration and signal
 * flow definition.
 * @extends RemoteControlClasses.OcaActuator
 * @class OcaSignalInput
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * @extends RemoteControlClasses.OcaActuator
 * @class OcaSignalOutput
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * @extends RemoteControlClasses.OcaActuator
 * @class OcaTemperatureActuator
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the value of the Temperature property. The return value indicates
 * whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaTemperatureActuator#GetTemperature
 * @returns {Promise<Arguments<OcaTemperature,OcaTemperature,OcaTemperature>>}
 */
/**
 * Sets the value of the Temperature property. The return value indicates
 * whether the property was successfully set.
 * @method RemoteControlClasses.OcaTemperatureActuator#SetTemperature
 * @param temperature {OcaTemperature}
 *
 * @returns {Promise}
 */
/**
 * The temperature.
 * @member RemoteControlClasses.OcaTemperatureActuator#OnTemperatureChanged {PropertyEvent<OcaTemperature>} - This event is emitted when Temperature changes in the remote object.
 */

/**
 * Represents a function that turns on some kind of human-detectable
 * indicator for purposes of device identification during network setup.
 * Physical form of indicator is not defined by OCA, so it could be
 * anything, e.g. <ul> <li>LED</li> <li>Foghorn</li> <li>Smoke
 * emitter</li> <li>Little waving robot hand wearing white glove</li>
 * <li>Jack-in-the-box popout</li> <li>et cetera</li> </ul>
 * @extends RemoteControlClasses.OcaActuator
 * @class OcaIdentificationActuator
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the current identification indicator activity state. The return
 * value indicates whether the state was successfully retrieved.
 * @method RemoteControlClasses.OcaIdentificationActuator#GetActive
 * @returns {Promise<OcaBoolean>}
 */
/**
 * Sets the Active state (i.e. value of the Active property). The return
 * value indicates whether the state was successfully set.
 * @method RemoteControlClasses.OcaIdentificationActuator#SetActive
 * @param active {OcaBoolean}
 *
 * @returns {Promise}
 */
/**
 * True iff indicator is active.
 * @member RemoteControlClasses.OcaIdentificationActuator#OnactiveChanged {PropertyEvent<OcaBoolean>} - This event is emitted when active changes in the remote object.
 */

/**
 * Actuator with no control parameters, used as a simple node to
 * represent summations in block signal flows.
 * @extends RemoteControlClasses.OcaActuator
 * @class OcaSummingPoint
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * @extends RemoteControlClasses.OcaActuator
 * @class OcaBasicActuator
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * @extends RemoteControlClasses.OcaBasicActuator
 * @class OcaBooleanActuator
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the <b>Setting </b>property. The return value indicates whether
 * the data was successfully retrieved.
 * @method RemoteControlClasses.OcaBooleanActuator#GetSetting
 * @returns {Promise<OcaBoolean>}
 */
/**
 * Sets the <b>Setting </b>property. The return value indicates whether
 * the property was successfully set.
 * @method RemoteControlClasses.OcaBooleanActuator#SetSetting
 * @param Setting {OcaBoolean}
 *
 * @returns {Promise}
 */
/**
 * Boolean setting.
 * @member RemoteControlClasses.OcaBooleanActuator#OnSettingChanged {PropertyEvent<OcaBoolean>} - This event is emitted when Setting changes in the remote object.
 */

/**
 * Basic int8 actuator.
 * @extends RemoteControlClasses.OcaBasicActuator
 * @class OcaInt8Actuator
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the value and limits of the <b>Setting </b>property. The return
 * value indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaInt8Actuator#GetSetting
 * @returns {Promise<Arguments<OcaInt8,OcaInt8,OcaInt8>>}
 */
/**
 * Sets the <b>Setting </b>property. The return value indicates whether
 * the property was successfully set.
 * @method RemoteControlClasses.OcaInt8Actuator#SetSetting
 * @param Setting {OcaInt8}
 *
 * @returns {Promise}
 */
/**
 * Int8 setting.
 * @member RemoteControlClasses.OcaInt8Actuator#OnSettingChanged {PropertyEvent<OcaInt8>} - This event is emitted when Setting changes in the remote object.
 */

/**
 * Basic int16 actuator.
 * @extends RemoteControlClasses.OcaBasicActuator
 * @class OcaInt16Actuator
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the value and limits of the <b>Setting </b>property. The return
 * value indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaInt16Actuator#GetSetting
 * @returns {Promise<Arguments<OcaInt16,OcaInt16,OcaInt16>>}
 */
/**
 * Sets the <b>Setting </b>property. The return value indicates whether
 * the property was successfully set.
 * @method RemoteControlClasses.OcaInt16Actuator#SetSetting
 * @param Setting {OcaInt16}
 *
 * @returns {Promise}
 */
/**
 * Int16 setting.
 * @member RemoteControlClasses.OcaInt16Actuator#OnSettingChanged {PropertyEvent<OcaInt16>} - This event is emitted when Setting changes in the remote object.
 */

/**
 * Basic int32 actuator.
 * @extends RemoteControlClasses.OcaBasicActuator
 * @class OcaInt32Actuator
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the value and limits of the <b>Setting </b>property. The return
 * value indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaInt32Actuator#GetSetting
 * @returns {Promise<Arguments<OcaInt32,OcaInt32,OcaInt32>>}
 */
/**
 * Sets the<b> Setting </b>property. The return value indicates whether
 * the property was successfully set.
 * @method RemoteControlClasses.OcaInt32Actuator#SetSetting
 * @param Setting {OcaInt32}
 *
 * @returns {Promise}
 */
/**
 * Int32 setting.
 * @member RemoteControlClasses.OcaInt32Actuator#OnSettingChanged {PropertyEvent<OcaInt32>} - This event is emitted when Setting changes in the remote object.
 */

/**
 * Basic int64 actuator.
 * @extends RemoteControlClasses.OcaBasicActuator
 * @class OcaInt64Actuator
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the value and limits of the <b>Setting </b>property. The return
 * value indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaInt64Actuator#GetSetting
 * @returns {Promise<Arguments<OcaInt64,OcaInt64,OcaInt64>>}
 */
/**
 * Sets the <b>Setting </b>property. The return value indicates whether
 * the property was successfully set.
 * @method RemoteControlClasses.OcaInt64Actuator#SetSetting
 * @param Value {OcaInt64}
 *
 * @returns {Promise}
 */
/**
 * Int64 setting.
 * @member RemoteControlClasses.OcaInt64Actuator#OnSettingChanged {PropertyEvent<OcaInt64>} - This event is emitted when Setting changes in the remote object.
 */

/**
 * Basic uint8 actuator.
 * @extends RemoteControlClasses.OcaBasicActuator
 * @class OcaUint8Actuator
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the value and limits of the <b>Setting </b>property. The return
 * value indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaUint8Actuator#GetSetting
 * @returns {Promise<Arguments<OcaUint8,OcaUint8,OcaUint8>>}
 */
/**
 * Sets the <b>Setting </b>property. The return value indicates whether
 * the property was successfully set.
 * @method RemoteControlClasses.OcaUint8Actuator#SetSetting
 * @param Setting {OcaUint8}
 *
 * @returns {Promise}
 */
/**
 * Uint8 setting.
 * @member RemoteControlClasses.OcaUint8Actuator#OnSettingChanged {PropertyEvent<OcaUint8>} - This event is emitted when Setting changes in the remote object.
 */

/**
 * Basic uint16 actuator.
 * @extends RemoteControlClasses.OcaBasicActuator
 * @class OcaUint16Actuator
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the value and limits of the Setting property. The return value
 * indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaUint16Actuator#GetSetting
 * @returns {Promise<Arguments<OcaUint16,OcaUint16,OcaUint16>>}
 */
/**
 * Sets the value of the <b>Setting </b>property. The return value
 * indicates whether the property was successfully set.
 * @method RemoteControlClasses.OcaUint16Actuator#SetSetting
 * @param Setting {OcaUint16}
 *
 * @returns {Promise}
 */
/**
 * Uint16 setting.
 * @member RemoteControlClasses.OcaUint16Actuator#OnSettingChanged {PropertyEvent<OcaUint16>} - This event is emitted when Setting changes in the remote object.
 */

/**
 * Basic uint32 actuator.
 * @extends RemoteControlClasses.OcaBasicActuator
 * @class OcaUint32Actuator
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the value and limits of the <b>Setting </b>property. The return
 * value indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaUint32Actuator#GetSetting
 * @returns {Promise<Arguments<OcaUint32,OcaUint32,OcaUint32>>}
 */
/**
 * Sets the <b>Setting </b>property. The return value indicates whether
 * the property was successfully set.
 * @method RemoteControlClasses.OcaUint32Actuator#SetSetting
 * @param Setting {OcaUint32}
 *
 * @returns {Promise}
 */
/**
 * Uint32 setting.
 * @member RemoteControlClasses.OcaUint32Actuator#OnSettingChanged {PropertyEvent<OcaUint32>} - This event is emitted when Setting changes in the remote object.
 */

/**
 * Basic Uint64 actuator.
 * @extends RemoteControlClasses.OcaBasicActuator
 * @class OcaUint64Actuator
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the value and limits of the Gain property. The return value
 * indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaUint64Actuator#GetSetting
 * @returns {Promise<Arguments<OcaUint64,OcaUint64,OcaUint64>>}
 */
/**
 * Sets the value of the Level property. The return value indicates
 * whether the property was successfully set.
 * @method RemoteControlClasses.OcaUint64Actuator#SetSetting
 * @param Setting {OcaUint64}
 *
 * @returns {Promise}
 */
/**
 * Uint64 setting.
 * @member RemoteControlClasses.OcaUint64Actuator#OnSettingChanged {PropertyEvent<OcaUint64>} - This event is emitted when Setting changes in the remote object.
 */

/**
 * Basic float32 actuator.
 * @extends RemoteControlClasses.OcaBasicActuator
 * @class OcaFloat32Actuator
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the value and limits of the <b>Setting </b>property. The return
 * value indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaFloat32Actuator#GetSetting
 * @returns {Promise<Arguments<OcaFloat32,OcaFloat32,OcaFloat32>>}
 */
/**
 * Sets the <b>Setting </b>property. The return value indicates whether
 * the property was successfully set.
 * @method RemoteControlClasses.OcaFloat32Actuator#SetSetting
 * @param Setting {OcaFloat32}
 *
 * @returns {Promise}
 */
/**
 * Float32 setting.
 * @member RemoteControlClasses.OcaFloat32Actuator#OnSettingChanged {PropertyEvent<OcaFloat32>} - This event is emitted when Setting changes in the remote object.
 */

/**
 * Basic Float64 actuator.
 * @extends RemoteControlClasses.OcaBasicActuator
 * @class OcaFloat64Actuator
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the value and limits of the <b>Setting </b>property. The return
 * value indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaFloat64Actuator#GetSetting
 * @returns {Promise<Arguments<OcaFloat64,OcaFloat64,OcaFloat64>>}
 */
/**
 * Sets the value of the Level property. The return value indicates
 * whether the property was successfully set.
 * @method RemoteControlClasses.OcaFloat64Actuator#SetSetting
 * @param Setting {OcaFloat64}
 *
 * @returns {Promise}
 */
/**
 * Float64 value.
 * @member RemoteControlClasses.OcaFloat64Actuator#OnSettingChanged {PropertyEvent<OcaFloat64>} - This event is emitted when Setting changes in the remote object.
 */

/**
 * String actuator.
 * @extends RemoteControlClasses.OcaBasicActuator
 * @class OcaStringActuator
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the value and max length of the Value property. The return value
 * indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaStringActuator#GetValue
 * @returns {Promise<OcaString>}
 */
/**
 * Sets the value of the Value property. The return value indicates
 * whether the property was successfully set.
 * @method RemoteControlClasses.OcaStringActuator#SetValue
 * @param Value {OcaString}
 *
 * @returns {Promise}
 */
/**
 * Gets the maximum string length that this object can handle.
 * @method RemoteControlClasses.OcaStringActuator#GetMaxLen
 * @returns {Promise<OcaUint16>}
 */
/**
 * Value.
 * @member RemoteControlClasses.OcaStringActuator#OnSettingChanged {PropertyEvent<OcaString>} - This event is emitted when Setting changes in the remote object.
 */
/**
 * Maximum string length that this object can accept.

/**
 * Bitstring actuator. Maximum bitstring length is 65,536 bits.
 * @extends RemoteControlClasses.OcaBasicActuator
 * @class OcaBitstringActuator
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the number of bits in the string. The return value indicates
 * whether the property was successfully gathered.
 * @method RemoteControlClasses.OcaBitstringActuator#GetNrBits
 * @returns {Promise<OcaUint16>}
 */
/**
 * Gets the bit value of the given bit. The return value indicates
 * whether the property was successfully gathered.
 * @method RemoteControlClasses.OcaBitstringActuator#GetBit
 * @param bitNr {OcaUint16}
 *
 * @returns {Promise<OcaBoolean>}
 */
/**
 * Sets the bit value of the given bit. The return value indicates
 * whether the property was successfully set.
 * @method RemoteControlClasses.OcaBitstringActuator#SetBit
 * @param bitNr {OcaUint16}
 *
 * @param Value {OcaBoolean}
 *
 * @returns {Promise}
 */
/**
 * Gets the entire bitstring.The return value indicates whether the
 * property was successfully gathered.
 * @method RemoteControlClasses.OcaBitstringActuator#GetBitstring
 * @returns {Promise<OcaBitstring>}
 */
/**
 * Sets the entire bitstring. The return value indicates whether the
 * property was successfully set.
 * @method RemoteControlClasses.OcaBitstringActuator#SetBitstring
 * @param BitString {OcaBitstring}
 *
 * @returns {Promise}
 */
/**
 * The bitstring data.
 * @member RemoteControlClasses.OcaBitstringActuator#OnBitstringChanged {PropertyEvent<OcaBitstring>} - This event is emitted when Bitstring changes in the remote object.
 */

/**
 * Abstract base class for all sensor classes.
 * @extends RemoteControlClasses.OcaWorker
 * @class OcaSensor
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the current reading state of the sensor. The return value
 * indicates whether the state was successfully retrived.
 * @method RemoteControlClasses.OcaSensor#GetReadingState
 * @returns {Promise<OcaSensorReadingState>}
 */
/**
 * Enum that describes whether current reading value is valid and if not,
 * why not. Readonly.

/**
 * Signal level sensor.
 * @extends RemoteControlClasses.OcaSensor
 * @class OcaLevelSensor
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the value and limits of the <b>Reading </b>property. The return
 * value indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaLevelSensor#GetReading
 * @returns {Promise<Arguments<OcaDB,OcaDB,OcaDB>>}
 */
/**
 * dB reading.
 * @member RemoteControlClasses.OcaLevelSensor#OnReadingChanged {PropertyEvent<OcaDB>} - This event is emitted when Reading changes in the remote object.
 */

/**
 * Child of <b>OcaLevelSensor </b>that returns an audio meter reading in
 * dB relative to a known reference level, and whose value has been
 * calculated by the selected averaging algorithm.
 * @extends RemoteControlClasses.OcaLevelSensor
 * @class OcaAudioLevelSensor
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the value of the Law property. The return value indicates whether
 * the property was successfully retrieved.
 * @method RemoteControlClasses.OcaAudioLevelSensor#GetLaw
 * @returns {Promise<OcaLevelMeterLaw>}
 */
/**
 * Sets the value of the Law property. The return value indicates whether
 * the property was successfully set. Only implemented for objects whose
 * Law property is read/write.
 * @method RemoteControlClasses.OcaAudioLevelSensor#SetLaw
 * @param law {OcaLevelMeterLaw}
 *
 * @returns {Promise}
 */
/**
 * Enum that defines metering algorithm, including averaging
 * characteristics and, in some cases, reference level. Readonly in some
 * objects.
 * @member RemoteControlClasses.OcaAudioLevelSensor#OnLawChanged {PropertyEvent<OcaLevelMeterLaw>} - This event is emitted when Law changes in the remote object.
 */

/**
 * Time interval sensor.
 * @extends RemoteControlClasses.OcaSensor
 * @class OcaTimeIntervalSensor
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the value and limits of the <b>Reading </b>property. The return
 * value indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaTimeIntervalSensor#GetReading
 * @returns {Promise<Arguments<OcaTimeInterval,OcaTimeInterval,OcaTimeInterval>>}
 */
/**
 * Time interval reading.
 * @member RemoteControlClasses.OcaTimeIntervalSensor#OnReadingChanged {PropertyEvent<OcaTimeInterval>} - This event is emitted when Reading changes in the remote object.
 */

/**
 * Frequency sensor.
 * @extends RemoteControlClasses.OcaSensor
 * @class OcaFrequencySensor
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the value and limits of the <b>Reading </b>property. The return
 * value indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaFrequencySensor#GetReading
 * @returns {Promise<Arguments<OcaFrequency,OcaFrequency,OcaFrequency>>}
 */
/**
 * Frequency value.
 * @member RemoteControlClasses.OcaFrequencySensor#OnReadingChanged {PropertyEvent<OcaFrequency>} - This event is emitted when Reading changes in the remote object.
 */

/**
 * Basic temperature sensor.
 * @extends RemoteControlClasses.OcaSensor
 * @class OcaTemperatureSensor
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the value and limits of the <b>Reading </b>property. The return
 * value indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaTemperatureSensor#GetReading
 * @returns {Promise<Arguments<OcaTemperature,OcaTemperature,OcaTemperature>>}
 */
/**
 * Temperature value (Celsius).
 * @member RemoteControlClasses.OcaTemperatureSensor#OnReadingChanged {PropertyEvent<OcaTemperature>} - This event is emitted when Reading changes in the remote object.
 */

/**
 * Sensor for device identification mechanism. The idea of this mechanism
 * is that there is some kind of control -- a pushbutton, for instance --
 * that the user depresses to send a device identification event to the
 * controller. Such mechanisms aid in the setup of networks.
 * @extends RemoteControlClasses.OcaSensor
 * @class OcaIdentificationSensor
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Event that is emitted when someone actuates the device identification
 * control.
 * @member RemoteControlClasses.OcaIdentificationSensor#OnIdentify {Event} -
 * Event that is emitted when someone actuates the device identification
 * control.
 */

/**
 * Basic voltage sensor.
 * @extends RemoteControlClasses.OcaSensor
 * @class OcaVoltageSensor
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the value and limits of the <b>Reading </b>property. The return
 * value indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaVoltageSensor#GetReading
 * @returns {Promise<Arguments<OcaVoltage,OcaVoltage,OcaVoltage>>}
 */
/**
 * Voltage value (volts).
 * @member RemoteControlClasses.OcaVoltageSensor#OnReadingChanged {PropertyEvent<OcaVoltage>} - This event is emitted when Reading changes in the remote object.
 */

/**
 * Basic current sensor.
 * @extends RemoteControlClasses.OcaSensor
 * @class OcaCurrentSensor
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the value and limits of the <b>Reading </b>property. The return
 * value indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaCurrentSensor#GetReading
 * @returns {Promise<Arguments<OcaCurrent,OcaCurrent,OcaCurrent>>}
 */
/**
 * Current value (amperes).
 * @member RemoteControlClasses.OcaCurrentSensor#OnReadingChanged {PropertyEvent<OcaCurrent>} - This event is emitted when Reading changes in the remote object.
 */

/**
 * Basic impedance sensor. Value is complex (magnitude and phase).
 * @extends RemoteControlClasses.OcaSensor
 * @class OcaImpedanceSensor
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the value and limits of the <b>Reading </b>property. The return
 * value indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaImpedanceSensor#GetReading
 * @returns {Promise<Arguments<OcaImpedance,OcaImpedance,OcaImpedance>>}
 */
/**
 * Impedance value (magnitude and phase).
 * @member RemoteControlClasses.OcaImpedanceSensor#OnReadingChanged {PropertyEvent<OcaImpedance>} - This event is emitted when Reading changes in the remote object.
 */

/**
 * Senses a gain value. Typically used to indicate instantaneous gain
 * value of a dynamics element.
 * @extends RemoteControlClasses.OcaSensor
 * @class OcaGainSensor
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the value and limits of the <b>Reading </b>property. The return
 * value indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaGainSensor#GetReading
 * @returns {Promise<Arguments<OcaDB,OcaDB,OcaDB>>}
 */
/**
 * Gain in dB
 * @member RemoteControlClasses.OcaGainSensor#OnReadingChanged {PropertyEvent<OcaDB>} - This event is emitted when Reading changes in the remote object.
 */

/**
 * Abstract base class for weakly typed sensors.
 * @extends RemoteControlClasses.OcaSensor
 * @class OcaBasicSensor
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * @extends RemoteControlClasses.OcaBasicSensor
 * @class OcaBooleanSensor
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the <b>Reading </b>property. The return value indicates whether
 * the data was successfully retrieved.
 * @method RemoteControlClasses.OcaBooleanSensor#GetReading
 * @returns {Promise<OcaBoolean>}
 */
/**
 * Boolean reading.
 * @member RemoteControlClasses.OcaBooleanSensor#OnReadingChanged {PropertyEvent<OcaBoolean>} - This event is emitted when Reading changes in the remote object.
 */

/**
 * Basic int8 sensor.
 * @extends RemoteControlClasses.OcaBasicSensor
 * @class OcaInt8Sensor
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the value and limits of the <b>Reading </b>property. The return
 * value indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaInt8Sensor#GetReading
 * @returns {Promise<Arguments<OcaInt8,OcaInt8,OcaInt8>>}
 */
/**
 * Int8 reading.
 * @member RemoteControlClasses.OcaInt8Sensor#OnReadingChanged {PropertyEvent<OcaInt8>} - This event is emitted when Reading changes in the remote object.
 */

/**
 * Basic int16 sensor.
 * @extends RemoteControlClasses.OcaBasicSensor
 * @class OcaInt16Sensor
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the value and limits of the <b>Reading </b>property. The return
 * value indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaInt16Sensor#GetReading
 * @returns {Promise<Arguments<OcaInt16,OcaInt16,OcaInt16>>}
 */
/**
 * Int16 reading.
 * @member RemoteControlClasses.OcaInt16Sensor#OnReadingChanged {PropertyEvent<OcaInt16>} - This event is emitted when Reading changes in the remote object.
 */

/**
 * Basic int32 sensor.
 * @extends RemoteControlClasses.OcaBasicSensor
 * @class OcaInt32Sensor
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the value and limits of the <b>Reading </b>property. The return
 * value indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaInt32Sensor#GetReading
 * @returns {Promise<Arguments<OcaInt32,OcaInt32,OcaInt32>>}
 */
/**
 * Int32 reading.
 * @member RemoteControlClasses.OcaInt32Sensor#OnReadingChanged {PropertyEvent<OcaInt32>} - This event is emitted when Reading changes in the remote object.
 */

/**
 * Basic int64 sensor.
 * @extends RemoteControlClasses.OcaBasicSensor
 * @class OcaInt64Sensor
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the value and limits of the <b>Reading </b>property. The return
 * value indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaInt64Sensor#GetReading
 * @returns {Promise<Arguments<OcaInt64,OcaInt64,OcaInt64>>}
 */
/**
 * Int64 reading.
 * @member RemoteControlClasses.OcaInt64Sensor#OnReadingChanged {PropertyEvent<OcaInt64>} - This event is emitted when Reading changes in the remote object.
 */

/**
 * Basic uint8 sensor.
 * @extends RemoteControlClasses.OcaBasicSensor
 * @class OcaUint8Sensor
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the value and limits of the <b>Reading </b>property. The return
 * value indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaUint8Sensor#GetReading
 * @returns {Promise<Arguments<OcaUint8,OcaUint8,OcaUint8>>}
 */
/**
 * Uint8 reading.
 * @member RemoteControlClasses.OcaUint8Sensor#OnReadingChanged {PropertyEvent<OcaUint8>} - This event is emitted when Reading changes in the remote object.
 */

/**
 * Basic uint16 sensor.
 * @extends RemoteControlClasses.OcaBasicSensor
 * @class OcaUint16Sensor
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the value and limits of the <b>Reading </b>property. The return
 * value indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaUint16Sensor#GetReading
 * @returns {Promise<Arguments<OcaUint16,OcaUint16,OcaUint16>>}
 */
/**
 * Uint16 reading.
 * @member RemoteControlClasses.OcaUint16Sensor#OnReadingChanged {PropertyEvent<OcaUint16>} - This event is emitted when Reading changes in the remote object.
 */

/**
 * Basic uint32 sensor.
 * @extends RemoteControlClasses.OcaBasicSensor
 * @class OcaUint32Sensor
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the value and limits of the <b>Reading </b>property. The return
 * value indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaUint32Sensor#GetReading
 * @returns {Promise<Arguments<OcaUint32,OcaUint32,OcaUint32>>}
 */
/**
 * Uint32 reading.
 * @member RemoteControlClasses.OcaUint32Sensor#OnReadingChanged {PropertyEvent<OcaUint32>} - This event is emitted when Reading changes in the remote object.
 */

/**
 * Basic float32 sensor.
 * @extends RemoteControlClasses.OcaBasicSensor
 * @class OcaFloat32Sensor
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the value and limits of the <b>Reading </b>property. The return
 * value indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaFloat32Sensor#GetReading
 * @returns {Promise<Arguments<OcaFloat32,OcaFloat32,OcaFloat32>>}
 */
/**
 * Float32 reading.
 * @member RemoteControlClasses.OcaFloat32Sensor#OnReadingChanged {PropertyEvent<OcaFloat32>} - This event is emitted when Reading changes in the remote object.
 */

/**
 * Basic Float64 sensor.
 * @extends RemoteControlClasses.OcaBasicSensor
 * @class OcaFloat64Sensor
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the value and limits of the <b>Reading </b>property. The return
 * value indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaFloat64Sensor#GetReading
 * @returns {Promise<Arguments<OcaFloat64,OcaFloat64,OcaFloat64>>}
 */
/**
 * Uint64 reading.
 * @member RemoteControlClasses.OcaFloat64Sensor#OnReadingChanged {PropertyEvent<OcaFloat64>} - This event is emitted when Reading changes in the remote object.
 */

/**
 * Text string sensor.
 * @extends RemoteControlClasses.OcaBasicSensor
 * @class OcaStringSensor
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the entire string. Return status indicates success or failure of
 * the retrieval.
 * @method RemoteControlClasses.OcaStringSensor#GetString
 * @returns {Promise<OcaString>}
 */
/**
 * Gets the maximum number of bytes that may be returned. Returned status
 * indicates success or failure of the retrieval.
 * @method RemoteControlClasses.OcaStringSensor#GetMaxLen
 * @returns {Promise<OcaUint16>}
 */
/**
 * Sets the maximum number of bytes that the object may return. Returned
 * status indicates success or failure of the set.
 * @method RemoteControlClasses.OcaStringSensor#SetMaxLen
 * @param maxLen {OcaUint16}
 *
 * @returns {Promise}
 */
/**
 * The string.
 * @member RemoteControlClasses.OcaStringSensor#OnStringChanged {PropertyEvent<OcaString>} - This event is emitted when String changes in the remote object.
 */
/**
 * Maximum length of the returned string. May be readonly in some
 * implementations.
 * @member RemoteControlClasses.OcaStringSensor#OnMaxLenChanged {PropertyEvent<OcaUint16>} - This event is emitted when MaxLen changes in the remote object.
 */

/**
 * Bit string sensor.
 * @extends RemoteControlClasses.OcaBasicSensor
 * @class OcaBitstringSensor
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the number of bits of the bitmask data. Returned status indicates
 * success or failure of the retrieval.
 * @method RemoteControlClasses.OcaBitstringSensor#GetNrBits
 * @returns {Promise<OcaUint16>}
 */
/**
 * Gets the value of the given bit. Return status indicates success or
 * failure of the retrieval.
 * @method RemoteControlClasses.OcaBitstringSensor#GetBit
 * @param bitNr {OcaUint16}
 *
 * @returns {Promise<OcaUint8>}
 */
/**
 * Gets the entire bitstring. Return status indicates success or failure
 * of the retrieval.
 * @method RemoteControlClasses.OcaBitstringSensor#GetBitString
 * @returns {Promise<OcaBitstring>}
 */
/**
 * The bitstring.
 * @member RemoteControlClasses.OcaBitstringSensor#OnBitStringChanged {PropertyEvent<OcaBitstring>} - This event is emitted when BitString changes in the remote object.
 */

/**
 * A block is an object with three aspects: - It can contain other
 * blocks. - It can contain workers. - It can contain agents. - It can
 * contain data networks. - It can contain application networks. - It has
 * a signal flow topology. We refer to an object inside a block as a
 * <b>member</b> of that block. We refer to the block which contains an
 * object as the object's <b>container.</b><b><sup>1</sup></b> Normally,
 * a block contains a set of members that together function as a
 * processing unit -- for example, a crossover channel or mixer strip.
 * @extends RemoteControlClasses.OcaWorker
 * @class OcaBlock
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the block type. For statically-defined blocks, the block type is
 * a Uint32 with a value corresponding to the unique configuration of
 * this block. For dynamically-defined blocks, the block type is the
 * object number of the block's factory. For the root block, the value of
 * this property is 1.
 * @method RemoteControlClasses.OcaBlock#GetType
 * @returns {Promise<OcaONo>}
 */
/**
 * Constructs an object according to the given construction specification
 * and adds it to the block. The return value indicates whether the
 * member was successfully created and added.
 * @method RemoteControlClasses.OcaBlock#ConstructMember
 * @param ClassID {OcaClassID}
 *
 * @param ConstructionParameters {variant}
 *
 * @returns {Promise<OcaONo>}
 */
/**
 * Invokes a factory to construct an instance of the given class, then
 * adds it to the block. The return value indicates whether the member
 * was successfully created and added.
 * @method RemoteControlClasses.OcaBlock#ConstructMemberUsingFactory
 * @param FactoryONo {OcaONo}
 *
 * @returns {Promise<OcaONo>}
 */
/**
 * Removes a member from the block and destroys the object. . Deletes all
 * signal paths attached to its ports. The return value indicates whether
 * the member was successfully removed and destroyed.
 * @method RemoteControlClasses.OcaBlock#DeleteMember
 * @param ObjectNumber {OcaONo}
 *
 * @returns {Promise}
 */
/**
 * Gets the list of block members. Does not recurse inner blocks. Each
 * inner block is included in the returned list as a single object -- its
 * contents are not enumerated. The return value indicates whether the
 * list was successfully retrieved.
 * @method RemoteControlClasses.OcaBlock#GetMembers
 * @returns {Promise<OcaList>}
 */
/**
 * Gets the list of block members. Recurses inner blocks. Each inner
 * block is included in the returned list as a single object, amd its
 * contents are enumerated. The return value indicates whether the list
 * was successfully retrieved.
 * @method RemoteControlClasses.OcaBlock#GetMembersRecursive
 * @returns {Promise<OcaList>}
 */
/**
 * Adds a signal path to the block. The return value indicates whether
 * the signal path was successfully added.
 * @method RemoteControlClasses.OcaBlock#AddSignalPath
 * @param Path {OcaSignalPath}
 *
 * @returns {Promise<OcaUint16>}
 */
/**
 * Deletes a signal path from the block. The return value indicates
 * whether the signal path was successfully added.
 * @method RemoteControlClasses.OcaBlock#DeleteSignalPath
 * @param Index {OcaUint16}
 *
 * @returns {Promise}
 */
/**
 * Gets the map of signal paths in the block. Does not recurse inner
 * blocks. The return value indicates whether the list was successfully
 * retrieved.
 * @method RemoteControlClasses.OcaBlock#GetSignalPaths
 * @returns {Promise<OcaMap>}
 */
/**
 * Gets the mapof signal paths in the block. Recurses inner blocks. The
 * return value indicates whether the list was successfully retrieved.
 * @method RemoteControlClasses.OcaBlock#GetSignalPathsRecursive
 * @returns {Promise<OcaMap>}
 */
/**
 * Gets the identifier of the paramset most recently applied to this
 * block.
 * @method RemoteControlClasses.OcaBlock#GetMostRecentParamSetIdentifier
 * @returns {Promise<OcaLibVolIdentifier>}
 */
/**
 * Applies the referenced paramset to this block, and sets the
 * MostRecentParamSet property. The return value indicates whether the
 * paramset was successfully applied.
 * @method RemoteControlClasses.OcaBlock#ApplyParamSet
 * @returns {Promise<OcaLibVolIdentifier>}
 */
/**
 * Returns a paramset library volume data block which represents the
 * current state of the block -- i.e. a "snapshot".
 * @method RemoteControlClasses.OcaBlock#GetCurrentParamSetData
 * @returns {Promise<OcaLibVolData_ParamSet>}
 */
/**
 * Stores a paramset library volume data block which represents the
 * current state of the block ("snapshot") in the given library.
 * <b>Replaces </b>the library volume at the specified LibVolIdentifier.
 * @method RemoteControlClasses.OcaBlock#StoreCurrentParamSetData
 * @param LibVolIdentifier {OcaLibVolIdentifier}
 *
 * @returns {Promise}
 */
/**
 * Gets the global blocktype. The return value indicates whether the type
 * was successfully retrieved. If this block has no global blocktype, the
 * <b>Authority</b> field of the returned <b>GlobalType</b> parameter
 * will be zero. <b>Added in version 2 of this class.</b>
 * @method RemoteControlClasses.OcaBlock#GetGlobalType
 * @returns {Promise<OcaGlobalTypeIdentifier>}
 */
/**
 * Gets the block's ONo map. The return value indicates whether the map
 * was successfully retrieved. <b>Added in version 2 of this class.</b>
 * @method RemoteControlClasses.OcaBlock#GetONoMap
 * @returns {Promise<OcaMap>}
 */
/**
 * Returns object identifications of all objects in the block that match
 * the given Role search string and Class ID. Return value indicates
 * whether the method succeeded. <b>Added in version 2 of this class.</b>
 * @method RemoteControlClasses.OcaBlock#FindObjectsByRole
 * @param SearchName {OcaString}
 *
 * @param NameComparisonType {OcaStringComparisonType}
 *
 * @param SearchClassID {OcaClassID}
 *
 * @param ResultFlags {OcaObjectSearchResultFlags}
 *
 * @returns {Promise<OcaList>}
 */
/**
 * Returns block member descriptors of all objects in the block and all
 * contained blocks that match the given Role search string and Class ID.
 * <b>Added in version 2 of this class.</b>
 * @method RemoteControlClasses.OcaBlock#FindObjectsByRoleRecursive
 * @param SearchName {OcaString}
 *
 * @param NameComparisonType {OcaStringComparisonType}
 *
 * @param SearchClassID {OcaClassID}
 *
 * @param ResultFlags {OcaObjectSearchResultFlags}
 *
 * @returns {Promise<OcaList>}
 */
/**
 * Returns object identifications of all objects with the given name
 * path. <b>Added in version 2 of this class.</b>
 * @method RemoteControlClasses.OcaBlock#FindObjectsByPath
 * @param SearchPath {OcaNamePath}
 *
 * @param ResultFlags {OcaObjectSearchResultFlags}
 *
 * @returns {Promise<OcaList>}
 */
/**
 * Returns block member descriptors of all objects in the block and all
 * contained blocks that match the given Label search string and Class
 * ID. <b>Added in version 2 of this class.</b>
 * @method RemoteControlClasses.OcaBlock#FindObjectsByLabelRecursive
 * @param SearchName {OcaString}
 *
 * @param NameComparisonType {OcaStringComparisonType}
 *
 * @param SearchClassID {OcaClassID}
 *
 * @param ResultFlags {OcaObjectSearchResultFlags}
 *
 * @returns {Promise<OcaList>}
 */
/**
 * Readonly block type. For statically-defined blocks, this value is a
 * Uint32 with a value corresponding to the unique configuration of this
 * block. For dynamically-defined blocks, this value is the object number
 * of the block's factory. For the root block, the value of this property
 * is 1.
/**
 * List of members in the block.
 * @member RemoteControlClasses.OcaBlock#OnMembersChanged {PropertyEvent<OcaList>} - This event is emitted when Members changes in the remote object.
 */
/**
 * List of signal paths in the block.
 * @member RemoteControlClasses.OcaBlock#OnSignalPathsChanged {PropertyEvent<OcaMap>} - This event is emitted when SignalPaths changes in the remote object.
 */
/**
 * Library volume identifier of the paramset most recently applied to
 * this block.
 * @member RemoteControlClasses.OcaBlock#OnMostRecentParamSetIdentifierChanged {PropertyEvent<OcaLibVolIdentifier>} - This event is emitted when MostRecentParamSetIdentifier changes in the remote object.
 */
/**
 * Global block type identifier for reusable blocks. <b>Added in version
 * 2 of this class.</b>
/**
 * For blocks constructed by factories. Map that indicates the actual
 * ONos allocated to the constructing OcaBlockFactory's prototype ONos.
 * Key is prototype ONo, value is actual ONo. <b>Added in version 2 of
 * this class.</b>

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
 * @extends RemoteControlClasses.OcaWorker
 * @class OcaBlockFactory
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Defines a proto-port in the factory. If proto-port already exists, it
 * is replaced with the one from this call. The return value indicates
 * whether the proto-port was successfully added.
 * @method RemoteControlClasses.OcaBlockFactory#DefineProtoPort
 * @param name {OcaString}
 *
 * @param portmode {OcaPortMode}
 *
 * @returns {Promise<OcaProtoPortID>}
 */
/**
 * Deletes a proto-port from the factory. The return value indicates
 * whether the proto-port was successfully deleted.
 * @method RemoteControlClasses.OcaBlockFactory#UndefineProtoPort
 * @param ProtoPortID {OcaProtoPortID}
 *
 * @returns {Promise}
 */
/**
 * Gets the factory's list of proto-ports. The return value indicates
 * whether the list was successfully retrieved.
 * @method RemoteControlClasses.OcaBlockFactory#GetProtoPorts
 * @returns {Promise<OcaList>}
 */
/**
 * Defines a proto-member of the given class in the factory. The most
 * current version of the class is used. The return value indicates
 * whether the proto-member was successfully defined.
 * @method RemoteControlClasses.OcaBlockFactory#DefineProtoMember
 * @param ClassIdentification {OcaClassID}
 *
 * @param ConstructionParameters {ConstructionParameterDataType}
 *
 * @returns {Promise<OcaProtoONo>}
 */
/**
 * Defines a proto-member which will be instantiated by a specified
 * factory when the block is built. The return value indicates whether
 * the proto-member was successfully defined.
 * @method RemoteControlClasses.OcaBlockFactory#DefineProtoMemberUsingFactory
 * @param FactoryONo {OcaONo}
 *
 * @returns {Promise<OcaProtoONo>}
 */
/**
 * Deletes a proto-member from the factory. Deletes all proto-signal
 * paths attached to its ports. The return value indicates whether the
 * member was successfully deleted.
 * @method RemoteControlClasses.OcaBlockFactory#UndefineProtoMember
 * @param ProtoObjectNumber {OcaProtoONo}
 *
 * @returns {Promise}
 */
/**
 * Gets the factory's list of proto-members. Does not recurse inner
 * proto-blocks. The return value indicates whether the list was
 * successfully retrieved.
 * @method RemoteControlClasses.OcaBlockFactory#GetProtoMembers
 * @returns {Promise<OcaList>}
 */
/**
 * Defines a proto-signal path in the factory. The return value indicates
 * whether the proto-signal path was successfully defined.
 * @method RemoteControlClasses.OcaBlockFactory#DefineProtoSignalPath
 * @param Path {OcaProtoSignalPath}
 *
 * @returns {Promise<OcaUint16>}
 */
/**
 * Deletes a proto-signal path from the factory. The return value
 * indicates whether the signal path was successfully added.
 * @method RemoteControlClasses.OcaBlockFactory#UndefineProtoSignalPath
 * @returns {Promise<OcaUint16>}
 */
/**
 * Gets the factory's list of proto-signal paths. Map key is proto-signal
 * path ID. Does not recurse inner proto-blocks. The return value
 * indicates whether the list was successfully retrieved.
 * @method RemoteControlClasses.OcaBlockFactory#GetProtoSignalPaths
 * @returns {Promise<OcaMap>}
 */
/**
 * Gets the global type identifier for blocks created by this factory.
 * The return value indicates whether the identifier was successfully
 * retrieved. <b>Added in version 2 of this class.</b>
 * @method RemoteControlClasses.OcaBlockFactory#GetGlobalType
 * @returns {Promise<OcaGlobalTypeIdentifier>}
 */
/**
 * Sets the global type identifier for blocks created by this factory.
 * The return value indicates whether the identifier was successfully
 * set. <b>Added in version 2 of this class.</b>
 * @method RemoteControlClasses.OcaBlockFactory#SetGlobalType
 * @param GlobalType {OcaGlobalTypeIdentifier}
 *
 * @returns {Promise}
 */
/**
 * List of proto-ports for built objects. The factory itself has no
 * ports.
 * @member RemoteControlClasses.OcaBlockFactory#OnProtoPortsChanged {PropertyEvent<OcaList>} - This event is emitted when ProtoPorts changes in the remote object.
 */
/**
 * List of prot-object identifiers of proto-members in the block.
 * @member RemoteControlClasses.OcaBlockFactory#OnProtoMembersChanged {PropertyEvent<OcaList>} - This event is emitted when ProtoMembers changes in the remote object.
 */
/**
 * List of proto-signal paths in the block.
 * @member RemoteControlClasses.OcaBlockFactory#OnProtoSignalPathsChanged {PropertyEvent<OcaMap>} - This event is emitted when ProtoSignalPaths changes in the remote object.
 */
/**
 * Global block type identifier for reusable blocks. <b>Added in version
 * 2 of this class.</b>
 * @member RemoteControlClasses.OcaBlockFactory#OnGlobalTypeChanged {PropertyEvent<OcaGlobalTypeIdentifier>} - This event is emitted when GlobalType changes in the remote object.
 */

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
 * @extends RemoteControlClasses.OcaWorker
 * @class OcaMatrix
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets coordinates of the currently active area (cell, row, column, or
 * whole matrix). The returned status indicates whether the operation was
 * successful.
 * @method RemoteControlClasses.OcaMatrix#GetCurrentXY
 * @returns {Promise<Arguments<OcaMatrixCoordinate,OcaMatrixCoordinate>>}
 */
/**
 * Sets the currently active area (cell, row, column, or whole matrix).
 * The returned status indicates whether the operation was successful.
 * @method RemoteControlClasses.OcaMatrix#SetCurrentXY
 * @param x {OcaMatrixCoordinate}
 *
 * @param y {OcaMatrixCoordinate}
 *
 * @returns {Promise}
 */
/**
 * Gets the matrix size. The returned status indicates whether the
 * operation was successful.
 * @method RemoteControlClasses.OcaMatrix#GetSize
 * @returns {Promise<Arguments<OcaMatrixCoordinate,OcaMatrixCoordinate,OcaMatrixCoordinate,OcaMatrixCoordinate,OcaMatrixCoordinate,OcaMatrixCoordinate>>}
 */
/**
 * Sets the matrix size. The returned status indicates whether the
 * operation was successful. This method will not be available for
 * fixed-size matrices.
 * @method RemoteControlClasses.OcaMatrix#SetSize
 * @param xSize {OcaMatrixCoordinate}
 *
 * @param ySize {OcaMatrixCoordinate}
 *
 * @returns {Promise}
 */
/**
 * Retrieves the 2D array of member object numbers. Cells for which no
 * member has been defined will return Zero as the object number.
 * @method RemoteControlClasses.OcaMatrix#GetMembers
 * @returns {Promise<OcaList2D>}
 */
/**
 * Sets the entire 2D array of member object numbers. Row and column size
 * of the <b>members</b> parameter must be equal to the current size of
 * the matrix.
 * @method RemoteControlClasses.OcaMatrix#SetMembers
 * @param members {OcaList2D}
 *
 * @returns {Promise}
 */
/**
 * Retrieves the object number of the member at position (x,y). If no
 * member is defined at this position, returns an object number value of
 * Zero.
 * @method RemoteControlClasses.OcaMatrix#GetMember
 * @param x {OcaMatrixCoordinate}
 *
 * @param y {OcaMatrixCoordinate}
 *
 * @returns {Promise<OcaONo>}
 */
/**
 * Installs a particular object as a member at position (x,y). If another
 * object was at this position, it is removed.
 * @method RemoteControlClasses.OcaMatrix#SetMember
 * @param x {OcaMatrixCoordinate}
 *
 * @param y {OcaMatrixCoordinate}
 *
 * @param memberONo {OcaONo}
 *
 * @returns {Promise}
 */
/**
 * Gets the object number of the matrix proxy.
 * @method RemoteControlClasses.OcaMatrix#GetProxy
 * @returns {Promise<OcaONo>}
 */
/**
 * Sets the object number of the matrix proxy.
 * @method RemoteControlClasses.OcaMatrix#SetProxy
 * @param ONo {OcaONo}
 *
 * @returns {Promise}
 */
/**
 * Gets the number of ports per row. These are input ports.
 * @method RemoteControlClasses.OcaMatrix#GetPortsPerRow
 * @returns {Promise<OcaUint8>}
 */
/**
 * Sets the number of ports per row. These must be input ports.
 * @method RemoteControlClasses.OcaMatrix#SetPortsPerRow
 * @param Ports {OcaUint8}
 *
 * @returns {Promise}
 */
/**
 * Gets the number of ports per output channel. These are output ports.
 * @method RemoteControlClasses.OcaMatrix#GetPortsPerColumn
 * @returns {Promise<OcaUint8>}
 */
/**
 * Sets the number of ports per column. These must be output ports.
 * @method RemoteControlClasses.OcaMatrix#SetPortsPerColumn
 * @param Ports {OcaUint8}
 *
 * @returns {Promise}
 */
/**
 * Sets the currently active area (cell, row, column, or whole matrix)
 * and locks it. Fails if the referenced members cannot all be locked.
 * The returned status indicates whether the operation was successful.
 * @method RemoteControlClasses.OcaMatrix#SetCurrentXYLock
 * @param x {OcaMatrixCoordinate}
 *
 * @param y {OcaMatrixCoordinate}
 *
 * @returns {Promise}
 */
/**
 * Unlocks the currently active area of the matrix. Fails if all the
 * members of the currently active area cannot be unlocked. Failure is
 * <u>not </u>triggered if one or more members of the currently active
 * area are already unlocked at the time Unlock() is called. The returned
 * status indicates whether the operation was successful.
 * @method RemoteControlClasses.OcaMatrix#UnlockCurrent
 * @returns {Promise}
 */
/**
 * Active column index. The active column is the column to which matrix
 * proxy method calls will be reflected. Value is zero-relative, i.e. the
 * first column is number zero. A value of 65535 means all columns in the
 * matrix.
 * @member RemoteControlClasses.OcaMatrix#OnXChanged {PropertyEvent<OcaMatrixCoordinate>} - This event is emitted when X changes in the remote object.
 */
/**
 * Active row index. The active row is the row to which matrix proxy
 * changes will be reflected. Value is zero-relative, i.e. the first row
 * is number zero. A value of 65535 means all rows in the matrix.
 * @member RemoteControlClasses.OcaMatrix#OnYChanged {PropertyEvent<OcaMatrixCoordinate>} - This event is emitted when Y changes in the remote object.
 */
/**
 * Number of columns in the matrix. Readonly in some cases.
 * @member RemoteControlClasses.OcaMatrix#OnxSizeChanged {PropertyEvent<OcaMatrixCoordinate>} - This event is emitted when xSize changes in the remote object.
 */
/**
 * Number of rows in the matrix. Readonly in some cases.
 * @member RemoteControlClasses.OcaMatrix#OnySizeChanged {PropertyEvent<OcaMatrixCoordinate>} - This event is emitted when ySize changes in the remote object.
 */
/**
 * 2D array of member object numbers.
 * @member RemoteControlClasses.OcaMatrix#OnMembersChanged {PropertyEvent<OcaList2D>} - This event is emitted when Members changes in the remote object.
 */
/**
 * Object number of the matrix proxy.
 * @member RemoteControlClasses.OcaMatrix#OnProxyChanged {PropertyEvent<OcaONo>} - This event is emitted when Proxy changes in the remote object.
 */
/**
 * Number of input ports per row- e.g. for a stereo matrix, the value
 * would be 2.
 * @member RemoteControlClasses.OcaMatrix#OnPortsPerRowChanged {PropertyEvent<OcaUint8>} - This event is emitted when PortsPerRow changes in the remote object.
 */
/**
 * Number of output ports per column - e.g. for a stereo matrix, the
 * value would be 2.
 * @member RemoteControlClasses.OcaMatrix#OnPortsPerColumnChanged {PropertyEvent<OcaUint8>} - This event is emitted when PortsPerColumn changes in the remote object.
 */

/**
 * Abstract base class for defining agents.
 * @extends RemoteControlClasses.OcaRoot
 * @class OcaAgent
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the value of the Label property. The return value indicates
 * whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaAgent#GetLabel
 * @returns {Promise<OcaString>}
 */
/**
 * Sets the value of the Label property. The return value indicates
 * whether the property was successfully set.
 * @method RemoteControlClasses.OcaAgent#SetLabel
 * @param Label {OcaString}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the Owner property. The return value indicates
 * whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaAgent#GetOwner
 * @returns {Promise<OcaONo>}
 */
/**
 * Returns path from the given object down to root. The return value
 * indicates whether the operation succeeded. Added in version 2.
 * @method RemoteControlClasses.OcaAgent#GetPath
 * @returns {Promise<Arguments<OcaNamePath,OcaONoPath>>}
 */
/**
 * User-specified label.
 * @member RemoteControlClasses.OcaAgent#OnLabelChanged {PropertyEvent<OcaString>} - This event is emitted when Label changes in the remote object.
 */
/**
 * Object number of block that contains this agent.
 * @member RemoteControlClasses.OcaAgent#OnOwnerChanged {PropertyEvent<OcaONo>} - This event is emitted when Owner changes in the remote object.
 */

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
 * @extends RemoteControlClasses.OcaAgent
 * @class OcaGrouper
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Adds a group to the grouper and returns its object number. (The
 * group's network address will be the same as the grouper's). The return
 * value indicates whether the group was successfully added.
 * @method RemoteControlClasses.OcaGrouper#AddGroup
 * @param Name {OcaString}
 *
 * @returns {Promise<Arguments<OcaUint16,OcaONo>>}
 */
/**
 * Deletes a group from the grouper. The return value indicates whether
 * the group was successfully deleted. Note: index values of deleted
 * groups are not reused during the lifetime of the grouper instance.
 * @method RemoteControlClasses.OcaGrouper#DeleteGroup
 * @param Index {OcaUint16}
 *
 * @returns {Promise}
 */
/**
 * Gets the count of groups owned by this grouper. The return value
 * indicates whether the count was successfully retrieved.
 * @method RemoteControlClasses.OcaGrouper#GetGroupCount
 * @returns {Promise<OcaUint16>}
 */
/**
 * Gets the list of groups owned by this grouper. The return value
 * indicates whether the list was successfully retrieved.
 * @method RemoteControlClasses.OcaGrouper#GetGroupList
 * @returns {Promise<OcaList>}
 */
/**
 * Adds a target to the group. The return value indicates whether the
 * target was successfully added. This method does not enroll the new
 * target in any of the grouper's groups -- it merely makes the target
 * available for enrollment. Group membership is controlled by the
 * SetEnrollment method, q.v.
 * @method RemoteControlClasses.OcaGrouper#AddCitizen
 * @param Citizen {OcaGrouperCitizen}
 *
 * @returns {Promise<OcaUint16>}
 */
/**
 * Delete a citizen from the grouper (and therefore from all of its
 * groups). The return value indicates whether the citizen was
 * successfully deleted. Note: index values of deleted citizens are not
 * reused during the lifetime of the grouper instance.
 * @method RemoteControlClasses.OcaGrouper#DeleteCitizen
 * @param Index {OcaUint16}
 *
 * @returns {Promise}
 */
/**
 * Gets the count of citizens registered in this grouper. The return
 * value indicates whether the count was successfully retrieved.
 * @method RemoteControlClasses.OcaGrouper#GetCitizenCount
 * @returns {Promise<OcaUint16>}
 */
/**
 * Gets the list of citizens registered in this grouper. The return value
 * indicates whether the list was successfully retrieved.
 * @method RemoteControlClasses.OcaGrouper#GetCitizenList
 * @returns {Promise<OcaList>}
 */
/**
 * Gets membership status for given target in given group. The return
 * value indicates whether the status was successfully retrieved.
 * @method RemoteControlClasses.OcaGrouper#GetEnrollment
 * @param Enrollment {OcaGrouperEnrollment}
 *
 * @returns {Promise<OcaBoolean>}
 */
/**
 * Sets membership status for given target in given group. The return
 * value indicates whether the status was successfully set.
 * @method RemoteControlClasses.OcaGrouper#SetEnrollment
 * @param Enrollment {OcaGrouperEnrollment}
 *
 * @param IsMember {OcaBoolean}
 *
 * @returns {Promise}
 */
/**
 * Gets the list of members of the given group. The return value
 * indicates whether the list was successfully retrieved.
 * @method RemoteControlClasses.OcaGrouper#GetGroupMemberList
 * @param Index {OcaUint16}
 *
 * @returns {Promise<OcaList>}
 */
/**
 * Gets the value of the ActuatorOrSensor property. The return value
 * indicates whether the value was successfully retrieved.
 * @method RemoteControlClasses.OcaGrouper#GetActuatorOrSensor
 * @returns {Promise<OcaBoolean>}
 */
/**
 * Sets the value of the ActuatorOrSensor property. The return value
 * indicates whether the value was successfully set.
 * @method RemoteControlClasses.OcaGrouper#SetActuatorOrSensor
 * @param ActuatorOrSensor {OcaBoolean}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the Mode property. The return value indicates
 * whether the value was successfully retrieved.
 * @method RemoteControlClasses.OcaGrouper#GetMode
 * @returns {Promise<OcaGrouperMode>}
 */
/**
 * Sets the value of the Mode property. The return value indicates
 * whether the value was successfully set.
 * @method RemoteControlClasses.OcaGrouper#SetMode
 * @param Mode {OcaGrouperMode}
 *
 * @returns {Promise}
 */
/**
 * Event that is emitted whenever key aspects of a group's status change.
 * Status events include: <ul> <li>Citizen joins grouper</li> <li>Citizen
 * leaves grouper</li> <li>Citizen fails to execute grouper value change
 * request</li> <li>Connection to online citizen is lost</li>
 * <li>Connection to offline citizen is reestablished</li> <li>Citizen
 * enrolls in group</li> <li>Citizen de-enrolls from group</li> </ul>
 * @member RemoteControlClasses.OcaGrouper#OnStatusChange {Event} -
 * Event that is emitted whenever key aspects of a group's status change.
 * Status events include: <ul> <li>Citizen joins grouper</li> <li>Citizen
 * leaves grouper</li> <li>Citizen fails to execute grouper value change
 * request</li> <li>Connection to online citizen is lost</li>
 * <li>Connection to offline citizen is reestablished</li> <li>Citizen
 * enrolls in group</li> <li>Citizen de-enrolls from group</li> </ul>
 */
/**
 * True if Grouper is actuator grouper, false if sensor grouper.
 * @member RemoteControlClasses.OcaGrouper#OnActuatorOrSensorChanged {PropertyEvent<OcaBoolean>} - This event is emitted when ActuatorOrSensor changes in the remote object.
 */
/**
 * List of groups in the grouper. Groups are added to and deleted from a
 * grouper by the AdGroup and DeleteGroup methods of OcaGrouper.
 * @member RemoteControlClasses.OcaGrouper#OnGroupsChanged {PropertyEvent<OcaList>} - This event is emitted when Groups changes in the remote object.
 */
/**
 * List of citizens defined for this grouper.
 * @member RemoteControlClasses.OcaGrouper#OnCitizensChanged {PropertyEvent<OcaList>} - This event is emitted when Citizens changes in the remote object.
 */
/**
 * List of grouper's enrollments, i.e. which citizen(s) belong to which
 * group(s).
 * @member RemoteControlClasses.OcaGrouper#OnEnrollmentsChanged {PropertyEvent<OcaList>} - This event is emitted when Enrollments changes in the remote object.
 */
/**
 * Switch that determines whether grouper is in master-slave mode or
 * peer-to-peer mode.
 * @member RemoteControlClasses.OcaGrouper#OnModeChanged {PropertyEvent<OcaGrouperMode>} - This event is emitted when Mode changes in the remote object.
 */

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
 * @extends RemoteControlClasses.OcaAgent
 * @class OcaRamper
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Executes the given ramper command. The return value indicates whether
 * the command was successfully executed.
 * @method RemoteControlClasses.OcaRamper#Control
 * @param Command {OcaRamperCommand}
 *
 * @returns {Promise}
 */
/**
 * Gets current state of ramper. The return value indicates whether the
 * state was successfully retrieved.
 * @method RemoteControlClasses.OcaRamper#GetState
 * @returns {Promise<OcaRamperState>}
 */
/**
 * Gets definition of ramped property. The return value indicates whether
 * the object number was successfully retrieved.
 * @method RemoteControlClasses.OcaRamper#GetRampedProperty
 * @returns {Promise<OcaProperty>}
 */
/**
 * Defines property to be ramped. The return value indicates whether the
 * definition was successful.
 * @method RemoteControlClasses.OcaRamper#SetRampedProperty
 * @param property {OcaProperty}
 *
 * @returns {Promise}
 */
/**
 * Gets ramper time mode (absolute or relative). The return value
 * indicates whether the time mode was successfully retrieved.
 * @method RemoteControlClasses.OcaRamper#GetTimeMode
 * @returns {Promise<OcaTimeMode>}
 */
/**
 * Sets ramper time mode (absolute or relative). The return value
 * indicates whether the time mode was successfully set.
 * @method RemoteControlClasses.OcaRamper#SetTimeMode
 * @param TimeMode {OcaTimeMode}
 *
 * @returns {Promise}
 */
/**
 * Gets ramp start time. The return value indicates whether the start
 * time was successfully retrieved.
 * @method RemoteControlClasses.OcaRamper#GetStartTime
 * @returns {Promise<OcaTimeNTP>}
 */
/**
 * Sets ramper start time. The return value indicates whether the start
 * time was successfully set.
 * @method RemoteControlClasses.OcaRamper#SetStartTime
 * @param TimeMode {OcaTimeNTP}
 *
 * @returns {Promise}
 */
/**
 * Gets ramp duration. The return value indicates whether the duration
 * was successfully retrieved.
 * @method RemoteControlClasses.OcaRamper#GetDuration
 * @returns {Promise<Arguments<OcaTimeInterval,OcaTimeInterval,OcaTimeInterval>>}
 */
/**
 * Sets ramp duration. The return value indicates whether the duration
 * was successfully set.
 * @method RemoteControlClasses.OcaRamper#SetDuration
 * @param Duration {OcaTimeInterval}
 *
 * @returns {Promise}
 */
/**
 * Retrieves interpolation law setting. The return value indicates
 * whether the setting was successfully retrieved.
 * @method RemoteControlClasses.OcaRamper#GetInterpolationLaw
 * @returns {Promise<OcaRamperInterpolationLaw>}
 */
/**
 * Sets ramp interpolation law. The return value indicates whether the
 * law was successfully set.
 * @method RemoteControlClasses.OcaRamper#SetInterpolationLaw
 * @param law {OcaRamperInterpolationLaw}
 *
 * @returns {Promise}
 */
/**
 * Retrieves ramp goal value. The return value indicates whether the
 * duration was successfully retrieved.
 * @method RemoteControlClasses.OcaRamper#GetGoal
 * @returns {Promise<OcaFloat64>}
 */
/**
 * Sets ramp goal value. The return value indicates whether the duration
 * was successfully set.
 * @method RemoteControlClasses.OcaRamper#SetGoal
 * @param goal {OcaFloat64}
 *
 * @returns {Promise}
 */
/**
 * {Ready, Ramping, Paused, Completed, Disabled} Readonly.
 * @member RemoteControlClasses.OcaRamper#OnStateChanged {PropertyEvent<OcaRamperState>} - This event is emitted when State changes in the remote object.
 */
/**
 * Identification of the property being ramped.
 * @member RemoteControlClasses.OcaRamper#OnRampedPropertyChanged {PropertyEvent<OcaProperty>} - This event is emitted when RampedProperty changes in the remote object.
 */
/**
 * Absolute or Relative time.
 * @member RemoteControlClasses.OcaRamper#OnTimeModeChanged {PropertyEvent<OcaTimeMode>} - This event is emitted when TimeMode changes in the remote object.
 */
/**
 * Time at which to start ramp. If <b>TimeMode=Relative</b>, the actual
 * event start time equals the value of <b>StartTime</b> plus the
 * absolute time that <b>StartTime</b> was most recently set. If
 * <b>TimeMode=Absolute</b>, the actual event start time equals the value
 * of <b>StartTime</b>
 * @member RemoteControlClasses.OcaRamper#OnStartTimeChanged {PropertyEvent<OcaTimeNTP>} - This event is emitted when StartTime changes in the remote object.
 */
/**
 * Duration of ramp period.
 * @member RemoteControlClasses.OcaRamper#OnDurationChanged {PropertyEvent<OcaTimeInterval>} - This event is emitted when Duration changes in the remote object.
 */
/**
 * Ramper interpolation law
 * @member RemoteControlClasses.OcaRamper#OnInterpolationLawChanged {PropertyEvent<OcaRamperInterpolationLaw>} - This event is emitted when InterpolationLaw changes in the remote object.
 */
/**
 * Final value of ramp. Datatype is target property's datatype.
 * @member RemoteControlClasses.OcaRamper#OnGoalChanged {PropertyEvent<OcaFloat64>} - This event is emitted when Goal changes in the remote object.
 */

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
 * @extends RemoteControlClasses.OcaAgent
 * @class OcaNumericObserver
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the value of the observed property that was reported by the most
 * recently emitted Observation event. If the numeric observer has never
 * emitted an Observation event, returns the IEEE not-a-number value. The
 * return status indicates whether the value has been successfully
 * returned.
 * @method RemoteControlClasses.OcaNumericObserver#GetLastObservation
 * @returns {Promise<OcaFloat64>}
 */
/**
 * Gets the observer's state. The return value indicates whether the
 * state was successfully retrieved.
 * @method RemoteControlClasses.OcaNumericObserver#GetState
 * @returns {Promise<OcaObserverState>}
 */
/**
 * Gets the identification of the property that the observer observes.
 * The return value indicates whether the identification was successfully
 * retrieved.
 * @method RemoteControlClasses.OcaNumericObserver#GetObservedProperty
 * @returns {Promise<OcaProperty>}
 */
/**
 * Sets the identification of the property that the observer observes.
 * The return value indicates whether the identification was successfully
 * set.
 * @method RemoteControlClasses.OcaNumericObserver#SetObservedProperty
 * @param property {OcaProperty}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the <b>Threshold </b>property. The return value
 * indicates whether the threshold value was successfully retrieved.
 * @method RemoteControlClasses.OcaNumericObserver#GetThreshold
 * @returns {Promise<OcaFloat64>}
 */
/**
 * Sets the value of the <b>Threshold </b>property. The return value
 * indicates whether the threshold value was successfully set.
 * @method RemoteControlClasses.OcaNumericObserver#SetThreshold
 * @param Threshold {OcaFloat64}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the <b>Operator </b>property. The return value
 * indicates whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaNumericObserver#GetOperator
 * @returns {Promise<OcaRelationalOperator>}
 */
/**
 * Sets the value of the <b>Operator </b>property. The return value
 * indicates whether the operator was successfully set.
 * @method RemoteControlClasses.OcaNumericObserver#SetOperator
 * @param _operator {OcaRelationalOperator}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the <b>TwoWay </b>property. The return value
 * indicates whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaNumericObserver#GetTwoWay
 * @returns {Promise<OcaBoolean>}
 */
/**
 * Sets the value of the <b>TwoWay </b>property. The return value
 * indicates whether the property was successfully set.
 * @method RemoteControlClasses.OcaNumericObserver#SetTwoWay
 * @param twoWay {OcaBoolean}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the <b>Hysteresis </b>property. The return value
 * indicates whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaNumericObserver#GetHysteresis
 * @returns {Promise<OcaFloat64>}
 */
/**
 * Sets the value of the <b>Hysteresis </b>property. The return value
 * indicates whether the property was successfully set.
 * @method RemoteControlClasses.OcaNumericObserver#SetHysteresis
 * @param hysteresis {OcaFloat64}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the <b>Period </b>property. The return value
 * indicates whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaNumericObserver#GetPeriod
 * @returns {Promise<OcaTimeInterval>}
 */
/**
 * Sets the value of the <b>Period </b>property. The return value
 * indicates whether the property was successfully set.
 * @method RemoteControlClasses.OcaNumericObserver#SetPeriod
 * @param period {OcaTimeInterval}
 *
 * @returns {Promise}
 */
/**
 * Event emitted to signal an asynchronous, periodic, or
 * conditional-periodic observation.
 * @member RemoteControlClasses.OcaNumericObserver#OnObservation {Event} -
 * Event emitted to signal an asynchronous, periodic, or
 * conditional-periodic observation.
 */
/**
 * State: triggered, not triggered
 * @member RemoteControlClasses.OcaNumericObserver#OnStateChanged {PropertyEvent<OcaObserverState>} - This event is emitted when State changes in the remote object.
 */
/**
 * Identification of the property being observed.
 * @member RemoteControlClasses.OcaNumericObserver#OnObservedPropertyChanged {PropertyEvent<OcaProperty>} - This event is emitted when ObservedProperty changes in the remote object.
 */
/**
 * Comparison value for raising the <b>Triggered </b>event.
 * @member RemoteControlClasses.OcaNumericObserver#OnThresholdChanged {PropertyEvent<OcaFloat64>} - This event is emitted when Threshold changes in the remote object.
 */
/**
 * Relational operator used when comparing the value of the observed
 * property to the threshold value.
 * @member RemoteControlClasses.OcaNumericObserver#OnOperatorChanged {PropertyEvent<OcaRelationalOperator>} - This event is emitted when Operator changes in the remote object.
 */
/**
 * True to emit a <b>Triggered </b>event upon crossing the threshold in
 * either direction; false to emit only upon crossing in the primary
 * direction (i.e. rising when <b>Operator </b>is set to
 * <u>GreaterThan</u> or <u>GreaterThanOrEqual</u>; falling when
 * <b>Operator </b>is set to <u>LessThan</u><b> </b>or
 * <u>LessThanOrEqual</u>; equality when <b>Operator </b>is set to
 * <u>Equality</u>; inequality when <b>Operator </b>is set to
 * <u>Inequality</u>).
 * @member RemoteControlClasses.OcaNumericObserver#OnTwoWayChanged {PropertyEvent<OcaBoolean>} - This event is emitted when TwoWay changes in the remote object.
 */
/**
 * Hysteresis that is used when observing the property value. This
 * indicates which amount must be added/subtracted from the <b>Threshold
 * </b>value to raise or re-enable the <b>Triggered </b>event of this
 * <b>OcaObserver </b>object. The rules for hysteresis handling depend
 * upon the configured <b>Operator </b>and <b>TwoWay </b>properties. The
 * <b>Hysteresis </b>property is ignored if the <b>Operator </b>property
 * is 'Inequality'.
 * @member RemoteControlClasses.OcaNumericObserver#OnHysteresisChanged {PropertyEvent<OcaFloat64>} - This event is emitted when Hysteresis changes in the remote object.
 */
/**
 * Repetition period or zero. If nonzero, the observer will retrieve the
 * value and emit
 * @member RemoteControlClasses.OcaNumericObserver#OnPeriodChanged {PropertyEvent<OcaTimeInterval>} - This event is emitted when Period changes in the remote object.
 */

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
 * @extends RemoteControlClasses.OcaAgent
 * @class OcaLibrary
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Adds a volume to the library and returns its volume ID. The return
 * value indicates whether the volume was successfully added. Changed in
 * version 2 because the definition of OcaLibVolMetaData, which is part
 * of OcaLibVol, has changed.
 * @method RemoteControlClasses.OcaLibrary#AddVolume
 * @param Volume {OcaLibVol}
 *
 * @returns {Promise<OcaLibVolID>}
 */
/**
 * Replaces a volume in the library at the given volume ID. The return
 * value indicates whether the volume was successfully replaced. Changed
 * in version 2 because the definition of OcaLibVolMetaData, which is
 * part of OcaLibVol, has changed.
 * @method RemoteControlClasses.OcaLibrary#ReplaceVolume
 * @param ID {OcaLibVolID}
 *
 * @param Volume {OcaLibVol}
 *
 * @returns {Promise}
 */
/**
 * Deletes a volume from the library. The return value indicates whether
 * the group was successfully deleted.
 * @method RemoteControlClasses.OcaLibrary#DeleteVolume
 * @param ID {OcaLibVolID}
 *
 * @returns {Promise}
 */
/**
 * Retrieves a library volume. The return value indicates whether the
 * volume was successfully retrieved. Changed in version 2 because the
 * definition of OcaLibVolMetaData, which is part of OcaLibVol, has
 * changed.
 * @method RemoteControlClasses.OcaLibrary#GetVolume
 * @returns {Promise<OcaLibVol>}
 */
/**
 * Gets the count of volumes in this library. The return value indicates
 * whether the count was successfully retrieved.
 * @method RemoteControlClasses.OcaLibrary#GetVolumeCount
 * @returns {Promise<OcaUint16>}
 */
/**
 * Gets the list of volumes held in this library. The return value
 * indicates whether the list was successfully retrieved. Changed in
 * version 2 because the definition of OcaLibVolMetaData, which is part
 * of OcaLibVol, has changed.
 * @method RemoteControlClasses.OcaLibrary#GetVolumes
 * @returns {Promise<OcaMap>}
 */
/**
 * Gets allowed access mode for this library. The return value indicates
 * whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaLibrary#GetAccess
 * @returns {Promise<OcaLibAccess>}
 */
/**
 * Sets allowed access mode for this library. The return value indicates
 * whether the property was successfully set. Not implemented for static,
 * manufacturer-supplied libraries.
 * @method RemoteControlClasses.OcaLibrary#SetAccess
 * @param Access {OcaLibAccess}
 *
 * @returns {Promise}
 */
/**
 * Event that is raised whenever private property <b>Volumes </b>changes.
 * Added in OcaLibrary Version 2.
 * @member RemoteControlClasses.OcaLibrary#OnOcaLibVolChanged {Event} -
 * Event that is raised whenever private property <b>Volumes </b>changes.
 * Added in OcaLibrary Version 2.
 */
/**
 * Type of library volumes:
 * @member RemoteControlClasses.OcaLibrary#OnVolumeTypeChanged {PropertyEvent<OcaLibVolType>} - This event is emitted when VolumeType changes in the remote object.
 */
/**
 * Readonly, read-expand, or full.
 * @member RemoteControlClasses.OcaLibrary#OnAccessChanged {PropertyEvent<OcaLibAccess>} - This event is emitted when Access changes in the remote object.
 */
/**
 * Map of volumes held in the Library. Changed in version 2 because the
 * definition of OcaLibVolMetaData, which is part of OcaLibVol, has
 * changed, and because it is now a private property whose changes are
 * signaled by the <b>OcaLibVolChanged </b>event.

/**
 * A power supply.
 * @extends RemoteControlClasses.OcaAgent
 * @class OcaPowerSupply
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the type of the power supply. Return value indicates whether the
 * data was successfully retrieved.
 * @method RemoteControlClasses.OcaPowerSupply#GetType
 * @returns {Promise<OcaPowerSupplyType>}
 */
/**
 * Gets the power supply's model information text. Return value indicates
 * whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaPowerSupply#GetModelInfo
 * @returns {Promise<OcaString>}
 */
/**
 * Gets the state of the power supply. Return value indicates whether the
 * data was successfully retrieved.
 * @method RemoteControlClasses.OcaPowerSupply#GetState
 * @returns {Promise<OcaPowerSupplyState>}
 */
/**
 * Changes the power supply's state. Return value indicates whether the
 * state was successfully changed.
 * @method RemoteControlClasses.OcaPowerSupply#SetState
 * @param state {OcaPowerSupplyState}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of property <b>Charging</b>. Return value indicates
 * whether the value was successfully retrieved.
 * @method RemoteControlClasses.OcaPowerSupply#GetCharging
 * @returns {Promise<OcaBoolean>}
 */
/**
 * Gets the available load fraction. Return value indicates whether the
 * data was successfully retrieved.
 * @method RemoteControlClasses.OcaPowerSupply#GetLoadFractionAvailable
 * @returns {Promise<OcaFloat32>}
 */
/**
 * Gets the available storage fraction. Return value indicates whether
 * the data was successfully retrieved.
 * @method RemoteControlClasses.OcaPowerSupply#GetStorageFractionAvailable
 * @returns {Promise<OcaFloat32>}
 */
/**
 * Gets the power supply physical location. Return value indicates
 * whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaPowerSupply#GetLocation
 * @returns {Promise<OcaPowerSupplyLocation>}
 */
/**
 * Type of power supply.
 * @member RemoteControlClasses.OcaPowerSupply#OnTypeChanged {PropertyEvent<OcaPowerSupplyType>} - This event is emitted when Type changes in the remote object.
 */
/**
 * Model information for power supply. Text; content is
 * implementation-dependent.
 * @member RemoteControlClasses.OcaPowerSupply#OnModelInfoChanged {PropertyEvent<OcaString>} - This event is emitted when ModelInfo changes in the remote object.
 */
/**
 * State of power supply: off, unavailable, available, active.
 * @member RemoteControlClasses.OcaPowerSupply#OnStateChanged {PropertyEvent<OcaPowerSupplyState>} - This event is emitted when State changes in the remote object.
 */
/**
 * True iff charging. For rechargable supplies (obviously).
 * @member RemoteControlClasses.OcaPowerSupply#OnChargingChanged {PropertyEvent<OcaBoolean>} - This event is emitted when Charging changes in the remote object.
 */
/**
 * Fraction of power supply's load capacity that is currently not being
 * used. Readonly. Normal value range 0...1. A negative value indicates
 * this data is not available.
/**
 * Fraction of power supply's energy storage that remains available. For
 * battery supplies. Readonly. Normal value range 0...1. A negative value
 * indicates this data is not available.
/**
 * Physical location of power supply - internal or external.

/**
 * Base class for event handler objects. This class applies to
 * controllers that subscribe to events and receive notifications for
 * them. Controller developers can derive from this class and add
 * specific callback methods that perform processing and/or have specific
 * event data structures.
 * @extends RemoteControlClasses.OcaAgent
 * @class OcaEventHandler
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Generic empty callback method for events. Application developers can
 * override this method in a derived class to add behavior.
 * @method RemoteControlClasses.OcaEventHandler#OnEvent
 * @param Context {OcaBlob}
 *
 * @param eventData {OcaEventData}
 *
 * @returns {Promise}
 */

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
 * @extends RemoteControlClasses.OcaAgent
 * @class OcaNumericObserverList
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the values of the observed property that were reported by the
 * most recently emitted Observation event. If the numeric observer has
 * never emitted an Observation event, returns a list of IEEE
 * not-a-number values. The order of values in the returned list is
 * determined by the order of values set by SetObservedProperties, and is
 * the same as the order of values returned by the Observation event, and
 * the same as the order of object identifications returned by
 * GetObservedProperties. The return status indicates whether the value
 * has been successfully returned.
 * @method RemoteControlClasses.OcaNumericObserverList#GetLastObservation
 * @returns {Promise<OcaList>}
 */
/**
 * Gets the observer's state. The return value indicates whether the
 * state was successfully retrieved.
 * @method RemoteControlClasses.OcaNumericObserverList#GetState
 * @returns {Promise<OcaObserverState>}
 */
/**
 * Gets the identifications of the properties that the observer observes.
 * The order of property identifications in the returned list is
 * determined by the order of property identifications set by
 * SetObservedProperties, and is the same as the order of values returned
 * by GetLastObservation and the Observation event. The return value
 * indicates whether the identifications were successfully retrieved.
 * @method RemoteControlClasses.OcaNumericObserverList#GetObservedProperties
 * @returns {Promise<OcaList>}
 */
/**
 * Sets the identifications of the properties that the observer observes.
 * The order of property identifications supplied determines the order of
 * property identifications returned by GetObservedProperties and the
 * order of values returned by GetLastObservation and the Observation
 * event. The return value indicates whether the identifications were
 * successfully set.
 * @method RemoteControlClasses.OcaNumericObserverList#SetObservedProperties
 * @param property {OcaList}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the <b>Threshold </b>property. The return value
 * indicates whether the threshold value was successfully retrieved.
 * @method RemoteControlClasses.OcaNumericObserverList#GetThreshold
 * @returns {Promise<OcaFloat64>}
 */
/**
 * Sets the value of the <b>Threshold </b>property. The return value
 * indicates whether the threshold value was successfully set.
 * @method RemoteControlClasses.OcaNumericObserverList#SetThreshold
 * @param Threshold {OcaFloat64}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the <b>Operator </b>property. The return value
 * indicates whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaNumericObserverList#GetOperator
 * @returns {Promise<OcaRelationalOperator>}
 */
/**
 * Sets the value of the <b>Operator </b>property. The return value
 * indicates whether the operator was successfully set.
 * @method RemoteControlClasses.OcaNumericObserverList#SetOperator
 * @param _operator {OcaRelationalOperator}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the <b>TwoWay </b>property. The return value
 * indicates whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaNumericObserverList#GetTwoWay
 * @returns {Promise<OcaBoolean>}
 */
/**
 * Sets the value of the <b>TwoWay </b>property. The return value
 * indicates whether the property was successfully set.
 * @method RemoteControlClasses.OcaNumericObserverList#SetTwoWay
 * @param twoWay {OcaBoolean}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the <b>Hysteresis </b>property. The return value
 * indicates whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaNumericObserverList#GetHysteresis
 * @returns {Promise<OcaFloat64>}
 */
/**
 * Sets the value of the <b>Hysteresis </b>property. The return value
 * indicates whether the property was successfully set.
 * @method RemoteControlClasses.OcaNumericObserverList#SetHysteresis
 * @param hysteresis {OcaFloat64}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the <b>Period </b>property. The return value
 * indicates whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaNumericObserverList#GetPeriod
 * @returns {Promise<OcaTimeInterval>}
 */
/**
 * Sets the value of the <b>Period </b>property. The return value
 * indicates whether the property was successfully set.
 * @method RemoteControlClasses.OcaNumericObserverList#SetPeriod
 * @param period {OcaTimeInterval}
 *
 * @returns {Promise}
 */
/**
 * Event emitted to signal an asynchronous, periodic, or
 * conditional-periodic observation. This event returns the complete list
 * of values being observed, regardless of which one(s) may have
 * triggered it in the first place. The order of values in the returned
 * list is determined by the order of values set by
 * SetObservedProperties, and is the same as the order of values returned
 * by GetLastObservation, and the same as the order of object
 * identifications returned by GetObservedProperties.
 * @member RemoteControlClasses.OcaNumericObserverList#OnObservation {Event} -
 * Event emitted to signal an asynchronous, periodic, or
 * conditional-periodic observation. This event returns the complete list
 * of values being observed, regardless of which one(s) may have
 * triggered it in the first place. The order of values in the returned
 * list is determined by the order of values set by
 * SetObservedProperties, and is the same as the order of values returned
 * by GetLastObservation, and the same as the order of object
 * identifications returned by GetObservedProperties.
 */
/**
 * State: triggered, not triggered
 * @member RemoteControlClasses.OcaNumericObserverList#OnStateChanged {PropertyEvent<OcaObserverState>} - This event is emitted when State changes in the remote object.
 */
/**
 * List of identifiers of the properties are being observed.
 * @member RemoteControlClasses.OcaNumericObserverList#OnObservedPropertiesChanged {PropertyEvent<OcaList>} - This event is emitted when ObservedProperties changes in the remote object.
 */
/**
 * Comparison value for raising the <b>Triggered </b>event.
 * @member RemoteControlClasses.OcaNumericObserverList#OnThresholdChanged {PropertyEvent<OcaFloat64>} - This event is emitted when Threshold changes in the remote object.
 */
/**
 * Relational operator used when comparing the value of the observed
 * property to the threshold value.
 * @member RemoteControlClasses.OcaNumericObserverList#OnOperatorChanged {PropertyEvent<OcaRelationalOperator>} - This event is emitted when Operator changes in the remote object.
 */
/**
 * True to emit a <b>Triggered </b>event upon crossing the threshold in
 * either direction; false to emit only upon crossing in the primary
 * direction (i.e. rising when <b>Operator </b>is set to
 * <u>GreaterThan</u> or <u>GreaterThanOrEqual</u>; falling when
 * <b>Operator </b>is set to <u>LessThan</u><b> </b>or
 * <u>LessThanOrEqual</u>; equality when <b>Operator </b>is set to
 * <u>Equality</u>; inequality when <b>Operator </b>is set to
 * <u>Inequality</u>).
 * @member RemoteControlClasses.OcaNumericObserverList#OnTwoWayChanged {PropertyEvent<OcaBoolean>} - This event is emitted when TwoWay changes in the remote object.
 */
/**
 * Hysteresis that is used when observing the property value. This
 * indicates which amount must be added/subtracted from the <b>Threshold
 * </b>value to raise or re-enable the <b>Triggered </b>event of this
 * <b>OcaObserver </b>object. The rules for hysteresis handling depend
 * upon the configured <b>Operator </b>and <b>TwoWay </b>properties. The
 * <b>Hysteresis </b>property is ignored if the <b>Operator </b>property
 * is 'Inequality'. If the State is <b>Not Triggered</b> it changes to
 * <b>Triggered </b>if <u>any </u>of the ObservedProperties reaches the
 * Threshold. If the State is <b>Triggered </b>it changes to <b>Not
 * Triggered</b> only if <u>all </u>of the ObservedProperties no longer
 * meet the ‘Threshold including Hysteresis’<b> .</b>
 * @member RemoteControlClasses.OcaNumericObserverList#OnHysteresisChanged {PropertyEvent<OcaFloat64>} - This event is emitted when Hysteresis changes in the remote object.
 */
/**
 * Repetition period or zero. If nonzero, the observer will retrieve the
 * value and emit
 * @member RemoteControlClasses.OcaNumericObserverList#OnPeriodChanged {PropertyEvent<OcaTimeInterval>} - This event is emitted when Period changes in the remote object.
 */

/**
 * A media clock, internal or external. OCA Connection Management 3
 * (OCA-CM3) version.
 * @extends RemoteControlClasses.OcaAgent
 * @class OcaMediaClock3
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the value of the <b>Availability </b>property. The return value
 * indicates whether the value was successfully retrieved.
 * @method RemoteControlClasses.OcaMediaClock3#GetAvailability
 * @returns {Promise<OcaMediaClockAvailability>}
 */
/**
 * Sets the value of the <b>Availability </b>property. The return value
 * indicates whether the value was successfully set. Optional method, may
 * not be supported in all implementations.
 * @method RemoteControlClasses.OcaMediaClock3#SetAvailability
 * @param Availability {OcaMediaClockAvailability}
 *
 * @returns {Promise}
 */
/**
 * Gets the current clock rate and the ONo of the associated
 * <b>OcaTimeSource </b>object. The return value indicates whether the
 * value was successfully retrieved.
 * @method RemoteControlClasses.OcaMediaClock3#GetCurrentRate
 * @returns {Promise<Arguments<OcaMediaClockRate,OcaONo>>}
 */
/**
 * Sets the clock rate and the ONo of the associated <b>OcaTimeSource
 * </b>object. The return value indicates whether the value was
 * successfully set. Optional method, may not be supported in all
 * implementations.
 * @method RemoteControlClasses.OcaMediaClock3#SetCurrentRate
 * @param Rate {OcaMediaClockRate}
 *
 * @param TimeSourceONo {OcaONo}
 *
 * @returns {Promise}
 */
/**
 * Gets the offset of this media clock's time from that of the associated
 * <b>OcaTimeSource </b>object. The return value indicates whether the
 * value was successfully retrieved.
 * @method RemoteControlClasses.OcaMediaClock3#GetOffset
 * @returns {Promise<OcaTimePTP>}
 */
/**
 * Sets the offset of this media clock's time from that of the associated
 * <b>OcaTimeSource </b>object. The return value indicates whether the
 * value was successfully set. Optional method, may not be supported in
 * all implementations.
 * @method RemoteControlClasses.OcaMediaClock3#SetOffset
 * @param Offset {OcaTimePTP}
 *
 * @returns {Promise}
 */
/**
 * Gets the list of supported media clock rates for the given time
 * source. The return value indicates whether the list was successfully
 * retrieved.
 * @method RemoteControlClasses.OcaMediaClock3#GetSupportedRates
 * @returns {Promise<OcaMap>}
 */
/**
 * Availability of media clock.
 * @member RemoteControlClasses.OcaMediaClock3#OnAvailabilityChanged {PropertyEvent<OcaMediaClockAvailability>} - This event is emitted when Availability changes in the remote object.
 */
/**
 * ONo of time source that drives this media clock.
 * @member RemoteControlClasses.OcaMediaClock3#OnTimeSourceONoChanged {PropertyEvent<OcaONo>} - This event is emitted when TimeSourceONo changes in the remote object.
 */
/**
 * Offset of media clock time from reference time. Note: For RTP-based
 * media transport networks, this value is NOT the RTP time offset. RTP
 * time offset is an implementation detail that is out of AES70's scope.
 * @member RemoteControlClasses.OcaMediaClock3#OnOffsetChanged {PropertyEvent<OcaTimePTP>} - This event is emitted when Offset changes in the remote object.
 */
/**
 * Current clock rate
 * @member RemoteControlClasses.OcaMediaClock3#OnCurrentRateChanged {PropertyEvent<OcaMediaClockRate>} - This event is emitted when CurrentRate changes in the remote object.
 */
/**
 * Map of supported rates for each supported time source. Key of map is
 * ONo of supported time source; value is list of supported clock rates
 * for the given time source. Private parameter, does not generate
 * property-change events.
 * @member RemoteControlClasses.OcaMediaClock3#OnSupportedRatesChanged {PropertyEvent<OcaMap>} - This event is emitted when SupportedRates changes in the remote object.
 */

/**
 * A time source, internal or external. See RFC 7273 for a detailed
 * discussion of time sources.
 * @extends RemoteControlClasses.OcaAgent
 * @class OcaTimeSource
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the value of the <b>Availability </b>property. The return value
 * indicates whether the value was successfully retrieved.
 * @method RemoteControlClasses.OcaTimeSource#GetAvailability
 * @returns {Promise<OcaTimeSourceAvailability>}
 */
/**
 * Gets the value of the <b>Protocol </b>property. The return value
 * indicates whether the value was successfully retrieved.
 * @method RemoteControlClasses.OcaTimeSource#GetProtocol
 * @returns {Promise<OcaTimeProtocol>}
 */
/**
 * Sets the value of the <b>Protocol </b>property. The return value
 * indicates whether the value was successfully set.
 * @method RemoteControlClasses.OcaTimeSource#SetProtocol
 * @param Protocol {OcaTimeProtocol}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the <b>Parameters </b>property. The return value
 * indicates whether the value was successfully retrieved.
 * @method RemoteControlClasses.OcaTimeSource#GetParameters
 * @returns {Promise<OcaSDPString>}
 */
/**
 * Sets the value of the <b>Parameters </b>property. The return value
 * indicates whether the value was successfully set. Optional method, may
 * not be supported in all implementations.
 * @method RemoteControlClasses.OcaTimeSource#SetParameters
 * @param Parameters {OcaSDPString}
 *
 * @returns {Promise}
 */
/**
 * Gets the time reference type. The return value indicates whether the
 * value was successfully retrieved.
 * @method RemoteControlClasses.OcaTimeSource#GetReferenceType
 * @returns {Promise<OcaTimeReferenceType>}
 */
/**
 * Sets the time reference type. The return value indicates whether the
 * value was successfully set. Optional method, may not be supported in
 * all implementations.
 * @method RemoteControlClasses.OcaTimeSource#SetReferenceType
 * @param ReferenceType {OcaTimeReferenceType}
 *
 * @returns {Promise}
 */
/**
 * Gets the timing source ID. The return value indicates whether the
 * value was successfully retrieved. Optional method, not required for
 * all time reference types.
 * @method RemoteControlClasses.OcaTimeSource#GetReferenceID
 * @returns {Promise<OcaString>}
 */
/**
 * Sets the time reference ID. The return value indicates whether the ID
 * was successfully set. Optional method, not required for all time
 * reference types.
 * @method RemoteControlClasses.OcaTimeSource#SetReferenceID
 * @param ID {OcaString}
 *
 * @returns {Promise}
 */
/**
 * Gets the synchronization status of this time source. The return value
 * indicates whether the value was successfully retrieved.
 * @method RemoteControlClasses.OcaTimeSource#GetSyncStatus
 * @returns {Promise<OcaTimeSourceSyncStatus>}
 */
/**
 * Resets this time source. Initiates a new synchronization sequence. The
 * return value indicates whether the reset was successful.
 * @method RemoteControlClasses.OcaTimeSource#Reset
 * @returns {Promise}
 */
/**
 * Availability of this time source.
 * @member RemoteControlClasses.OcaTimeSource#OnAvailabilityChanged {PropertyEvent<OcaTimeSourceAvailability>} - This event is emitted when Availability changes in the remote object.
 */
/**
 * Time transport protocol used by this time source
 * @member RemoteControlClasses.OcaTimeSource#OnProtocolChanged {PropertyEvent<OcaTimeProtocol>} - This event is emitted when Protocol changes in the remote object.
 */
/**
 * Parameters (identifiers, modifiers, etc.) for this time source .
 * Content is an SDP timestamp reference specification as defined in
 * RFC7273, section 4.8.
 * @member RemoteControlClasses.OcaTimeSource#OnParametersChanged {PropertyEvent<OcaSDPString>} - This event is emitted when Parameters changes in the remote object.
 */
/**
 * Type of time reference to which this time source is synced, if any.
 * @member RemoteControlClasses.OcaTimeSource#OnReferenceTypeChanged {PropertyEvent<OcaTimeReferenceType>} - This event is emitted when ReferenceType changes in the remote object.
 */
/**
 * Identifier of reference to which this time source is synced, if any.
 * Not needed for all reference types.
 * @member RemoteControlClasses.OcaTimeSource#OnReferenceIDChanged {PropertyEvent<OcaString>} - This event is emitted when ReferenceID changes in the remote object.
 */
/**
 * Synchronization status of this time source.
 * @member RemoteControlClasses.OcaTimeSource#OnSyncStatusChanged {PropertyEvent<OcaTimeSourceSyncStatus>} - This event is emitted when SyncStatus changes in the remote object.
 */

/**
 * Physical position of device or an element of it. AES70 supports a
 * variety of positional coordinate systems. For details, see AES70-1,
 * section 5.5.9.
 * @extends RemoteControlClasses.OcaAgent
 * @class OcaPhysicalPosition
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Retrieves value of property <b>CoordinateSystem</b>. Result indicates
 * whether retrieval was successful.
 * @method RemoteControlClasses.OcaPhysicalPosition#GetCoordinateSystem
 * @returns {Promise<OcaPositionCoordinateSystem>}
 */
/**
 * Retrieves value of property <b>PositionDescriptorFieldFlags</b>.
 * Result indicates whether retrieval was successful.
 * @method RemoteControlClasses.OcaPhysicalPosition#GetPositionDescriptorFieldFlags
 * @returns {Promise<OcaPositionDescriptorFieldFlags>}
 */
/**
 * Retrieves value of property <b>PositioinDescriptor</b>. Result
 * indicates whether retrieval was successful.
 * @method RemoteControlClasses.OcaPhysicalPosition#GetPositionDescriptor
 * @returns {Promise<Arguments<OcaPositionDescriptor,OcaPositionDescriptor,OcaPositionDescriptor>>}
 */
/**
 * Sets value of property <b>PositionDescriptor</b>. Result indicates
 * whether setting was successful. The <b>ParameterError </b>status is
 * returned if: (a) the <b>FieldFlags </b>field of the given
 * <b>PositionDescriptor </b>value differs from the object's basic
 * position descriptor as given in its <b>PositionDescriptorFieldFlags
 * </b>property, or (b) the given <b>CoordinateSystem </b>value conflicts
 * with the object's basic coordinate system as given in its
 * <b>CoordinateSystem </b>property. This is an optional method, not
 * implemented for read-only position objects.
 * @method RemoteControlClasses.OcaPhysicalPosition#SetPositionDescriptor
 * @param PositionDescriptor {OcaPositionDescriptor}
 *
 * @returns {Promise}
 */
/**
 * Type of physical coordinate system this object uses. Read-only, set at
 * object construction time.
/**
 * Position descriptor field flags. Describe which position descriptor
 * fields are used by this object. Read-only, set at object construction
 * time.
/**
 * Position coordinates. For details, see AES70-1, section 5.5.9 and the
 * <b>OcaPositionDescriptor </b>datatype definition.
 * @member RemoteControlClasses.OcaPhysicalPosition#OnPositionDescriptorChanged {PropertyEvent<OcaPositionDescriptor>} - This event is emitted when PositionDescriptor changes in the remote object.
 */

/**
 * Abstract base class from which the application network classes
 * inherit.
 * @extends RemoteControlClasses.OcaRoot
 * @class OcaApplicationNetwork
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the network's user-specified label. Return status indicates
 * whether the operation was successful.
 * @method RemoteControlClasses.OcaApplicationNetwork#GetLabel
 * @returns {Promise<OcaString>}
 */
/**
 * Sets the network's user-specified label. Return status indicates
 * whether the operation was successful.
 * @method RemoteControlClasses.OcaApplicationNetwork#SetLabel
 * @param Label {OcaString}
 *
 * @returns {Promise}
 */
/**
 * Gets the ONo of this network's containing block. Return status
 * indicates whether the operation was successful.
 * @method RemoteControlClasses.OcaApplicationNetwork#GetOwner
 * @returns {Promise<OcaONo>}
 */
/**
 * Gets the network's IDAdvertised. Return status indicates whether the
 * operation was successful.
 * @method RemoteControlClasses.OcaApplicationNetwork#GetServiceID
 * @returns {Promise<OcaApplicationNetworkServiceID>}
 */
/**
 * Sets the network's IDAdvertised. Return status indicates whether the
 * operation was successful.
 * @method RemoteControlClasses.OcaApplicationNetwork#SetServiceID
 * @param Name {OcaApplicationNetworkServiceID}
 *
 * @returns {Promise}
 */
/**
 * Retrieves the list of this network's system interface descriptor.
 * Return status indicates whether the list was successfully retrieved.
 * @method RemoteControlClasses.OcaApplicationNetwork#GetSystemInterfaces
 * @returns {Promise<OcaList>}
 */
/**
 * Sets the network's System Interface Descriptor(s). Return status
 * indicates whether the operation was successful. Optional method;
 * System Interface Descriptor may be set at construction time.
 * @method RemoteControlClasses.OcaApplicationNetwork#SetSystemInterfaces
 * @param Descriptors {OcaList}
 *
 * @returns {Promise}
 */
/**
 * Retrieves the network's state. Return status indicates whether the
 * status was successfully retrieved.
 * @method RemoteControlClasses.OcaApplicationNetwork#GetState
 * @returns {Promise<OcaApplicationNetworkState>}
 */
/**
 * Retrieves the most recent error code. Return status indicates whether
 * the operation was successful. Note that a second parameter 'Reset' is
 * removed in v02 of this class.
 * @method RemoteControlClasses.OcaApplicationNetwork#GetErrorCode
 * @returns {Promise<OcaUint16>}
 */
/**
 * Control the application network. Return value indicates success of
 * command execution.
 * @method RemoteControlClasses.OcaApplicationNetwork#Control
 * @param Command {OcaApplicationNetworkCommand}
 *
 * @returns {Promise}
 */
/**
 * Returns path from given object down to root. The return value
 * indicates whether the operation succeeded.
 * @method RemoteControlClasses.OcaApplicationNetwork#GetPath
 * @returns {Promise<Arguments<OcaNamePath,OcaONoPath>>}
 */
/**
 * Specific label of the network. Can be used to provide human readable
 * information about the network. The label can be get and set over any
 * network.
/**
 * Object number of block that contains this network.
/**
 * Name or GUID that this device publishes in the network's
 * directory/discovery system to designate the services offered via this
 * application network object. This may or may not be the same as the
 * device's host name, if any. For data network types that have host
 * names (e.g. IP networks), the authoritative copy of the host name is
 * in the system interface ID.
 * @member RemoteControlClasses.OcaApplicationNetwork#OnServiceIDChanged {PropertyEvent<OcaApplicationNetworkServiceID>} - This event is emitted when ServiceID changes in the remote object.
 */
/**
 * Collection of identifiers of system interface descriptor(s) used by
 * the network. A "system interface" is the system service through which
 * network traffic passes into and out of the device -- e.g. a socket.
 * The descriptor format is system and network dependent; for OCA
 * purposes, it is maintained as a variable-length blob which the
 * protocol does not inspect.
 * @member RemoteControlClasses.OcaApplicationNetwork#OnSystemInterfacesChanged {PropertyEvent<OcaList>} - This event is emitted when SystemInterfaces changes in the remote object.
 */
/**
 * Operational state of the network.
 * @member RemoteControlClasses.OcaApplicationNetwork#OnStateChanged {PropertyEvent<OcaApplicationNetworkState>} - This event is emitted when State changes in the remote object.
 */
/**
 * Most recent error code. 0=no error.
 * @member RemoteControlClasses.OcaApplicationNetwork#OnErrorCodeChanged {PropertyEvent<OcaUint16>} - This event is emitted when ErrorCode changes in the remote object.
 */

/**
 * This was not documented in the OCA standard.
 * @extends RemoteControlClasses.OcaApplicationNetwork
 * @class OcaControlNetwork
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the network's Protocol property. Return status indicates whether
 * the operation was successful.
 * @method RemoteControlClasses.OcaControlNetwork#GetControlProtocol
 * @returns {Promise<OcaNetworkControlProtocol>}
 */
/**
 * Type of control protocol used by the network (OCAnn). Read-only
 * property.
 * @member RemoteControlClasses.OcaControlNetwork#OnProtocolChanged {PropertyEvent<OcaNetworkControlProtocol>} - This event is emitted when Protocol changes in the remote object.
 */

/**
 * This was not documented in the OCA standard.
 * @extends RemoteControlClasses.OcaApplicationNetwork
 * @class OcaMediaTransportNetwork
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the network's Protocol property. Return status indicates whether
 * the operation was successful.
 * @method RemoteControlClasses.OcaMediaTransportNetwork#GetMediaProtocol
 * @returns {Promise<OcaNetworkMediaProtocol>}
 */
/**
 * Gets the list of ports owned by the MediaTransportNetwork object
 * (representing the source and sink network channels). The return value
 * indicates whether the list was successfully retrieved.
 * @method RemoteControlClasses.OcaMediaTransportNetwork#GetPorts
 * @returns {Promise<OcaList>}
 */
/**
 * Gets the name of the designated port. The return value indicates
 * whether the name was successfully retrieved.
 * @method RemoteControlClasses.OcaMediaTransportNetwork#GetPortName
 * @param PortID {OcaPortID}
 *
 * @returns {Promise<OcaString>}
 */
/**
 * Sets the name of the designated port. The return value indicates
 * whether the name was successfully set.
 * @method RemoteControlClasses.OcaMediaTransportNetwork#SetPortName
 * @param PortID {OcaPortID}
 *
 * @param Name {OcaString}
 *
 * @returns {Promise}
 */
/**
 * Gets the maximum number of source connectors this media transport
 * network supports.
 * @method RemoteControlClasses.OcaMediaTransportNetwork#GetMaxSourceConnectors
 * @returns {Promise<OcaUint16>}
 */
/**
 * Gets the maximum number of source connectors this media transport
 * network supports.
 * @method RemoteControlClasses.OcaMediaTransportNetwork#GetMaxSinkConnectors
 * @returns {Promise<OcaUint16>}
 */
/**
 * Gets the maximum number of ports per pin this media transport network
 * supports.
 * @method RemoteControlClasses.OcaMediaTransportNetwork#GetMaxPinsPerConnector
 * @returns {Promise<OcaUint16>}
 */
/**
 * Gets the maximum number of pins (channels) per connector this media
 * transport network supports.
 * @method RemoteControlClasses.OcaMediaTransportNetwork#GetMaxPortsPerPin
 * @returns {Promise<OcaUint16>}
 */
/**
 * Gets the descriptors of all the source (output) connectors collected
 * by this network object. Return status indicates success of the
 * operation.
 * @method RemoteControlClasses.OcaMediaTransportNetwork#GetSourceConnectors
 * @returns {Promise<OcaList>}
 */
/**
 * Retrieves the descriptor of a given source connector. Return status
 * indicates the success of the operation.
 * @method RemoteControlClasses.OcaMediaTransportNetwork#GetSourceConnector
 * @param ID {OcaMediaConnectorID}
 *
 * @returns {Promise<OcaMediaSourceConnector>}
 */
/**
 * Gets the descriptors of all the sink (output) connectors collected by
 * this network object. Return status indicates success of the operation.
 * @method RemoteControlClasses.OcaMediaTransportNetwork#GetSinkConnectors
 * @returns {Promise<OcaList>}
 */
/**
 * Retrieves the descriptor of a given sink connector. Return status
 * indicates the success of the operation.
 * @method RemoteControlClasses.OcaMediaTransportNetwork#GetSinkConnector
 * @param ID {OcaMediaConnectorID}
 *
 * @returns {Promise<OcaMediaSinkConnector>}
 */
/**
 * Gets the status of all the source and sink connectors collected by
 * this network object. Return status indicates success of the operation.
 * @method RemoteControlClasses.OcaMediaTransportNetwork#GetConnectorsStatuses
 * @returns {Promise<OcaList>}
 */
/**
 * Gets the status of a single connector. Return status indicates success
 * of the operation.
 * @method RemoteControlClasses.OcaMediaTransportNetwork#GetConnectorStatus
 * @param ConnectorID {OcaMediaConnectorID}
 *
 * @returns {Promise<OcaMediaConnectorStatus>}
 */
/**
 * Adds a source connector to this network. Parameters of the new
 * connector are given in the Connector parameter; device returns the
 * same parameter with the new connector ID filled in. If the new
 * connector's AlignmentLevel property value is given as NaN, the value
 * of this network's AlignmentLevel property will be used. Return status
 * indicates the success of the operation.
 * @method RemoteControlClasses.OcaMediaTransportNetwork#AddSourceConnector
 * @param Connector {OcaMediaSourceConnector}
 *
 * @param InitialStatus {OcaMediaConnectorState}
 *
 * @returns {Promise<OcaMediaSourceConnector>}
 */
/**
 * Adds a sinkconnector to this network. Parameters of the new connector
 * are given in the Connector parameter; device returns the same
 * parameter with the new connector ID filled in. If the new connector's
 * AlignmentLevel property value is given as NaN, the value of this
 * network's AlignmentLevel property will be used. If the new connector's
 * AlignmentGain property value is given as NaN, the value of this
 * network's AlignmentGain property will be used. Return status indicates
 * the success of the operation.
 * @method RemoteControlClasses.OcaMediaTransportNetwork#AddSinkConnector
 * @param InitialStatus {OcaMediaConnectorStatus}
 *
 * @param Connector {OcaMediaSinkConnector}
 *
 * @returns {Promise<OcaMediaSinkConnector>}
 */
/**
 * Change the state of a given connector. Return status indicates the
 * success of the operation.
 * @method RemoteControlClasses.OcaMediaTransportNetwork#ControlConnector
 * @param ConnectorID {OcaMediaConnectorID}
 *
 * @param Command {OcaMediaConnectorCommand}
 *
 * @returns {Promise}
 */
/**
 * Sets a source connector's channel pin map. Return status indicates the
 * success of the operation.
 * @method RemoteControlClasses.OcaMediaTransportNetwork#SetSourceConnectorPinMap
 * @param ConnectorID {OcaMediaConnectorID}
 *
 * @param ChannelPinMap {OcaMap}
 *
 * @returns {Promise}
 */
/**
 * Sets a sink connector's channel pin map. Return status indicates the
 * success of the operation.
 * @method RemoteControlClasses.OcaMediaTransportNetwork#SetSinkConnectorPinMap
 * @param ConnectorID {OcaMediaConnectorID}
 *
 * @param ChannelPinMap {OcaMultiMap}
 *
 * @returns {Promise}
 */
/**
 * Sets a connector's <b>Connection </b>property. Return status indicates
 * the success of the operation.
 * @method RemoteControlClasses.OcaMediaTransportNetwork#SetConnectorConnection
 * @param ConnectorID {OcaMediaConnectorID}
 *
 * @param Connection {OcaMediaConnection}
 *
 * @returns {Promise}
 */
/**
 * Sets the Coding field of the connection descriptor of the referenced
 * connector. Return status indicates the success of the operation.
 * @method RemoteControlClasses.OcaMediaTransportNetwork#SetConnectorCoding
 * @param ConnectorID {OcaMediaConnectorID}
 *
 * @param Coding {OcaMediaCoding}
 *
 * @returns {Promise}
 */
/**
 * Sets the Alignment Level field of a connector. Value must be between
 * the min and max values of the AlignmentLevel property of this network.
 * A value of NaN will cause the current value of this network's
 * AlignmentLevel property to be used. Return status indicates the
 * success of the operation.
 * @method RemoteControlClasses.OcaMediaTransportNetwork#SetConnectorAlignmentLevel
 * @param ConnectorID {OcaMediaConnectorID}
 *
 * @param Level {OcaDBFS}
 *
 * @returns {Promise}
 */
/**
 * For OcaMediaSinkConnectors only (not source). Sets the Alignment Gain
 * field of the connection descriptor of the referenced connector. Value
 * must be between the min and max values of the AlignmentGain property
 * of this network. A value of NaN will cause the current value of the
 * network's AlignmentGain property to be used. Return status indicates
 * the success of the operation.
 * @method RemoteControlClasses.OcaMediaTransportNetwork#SetConnectorAlignmentGain
 * @param ConnectorID {OcaMediaConnectorID}
 *
 * @param Gain {OcaDB}
 *
 * @returns {Promise}
 */
/**
 * Deletes a connector from this network. Return status indicates the
 * success of the operation.
 * @method RemoteControlClasses.OcaMediaTransportNetwork#DeleteConnector
 * @param ID {OcaMediaConnectorID}
 *
 * @returns {Promise}
 */
/**
 * Gets the default, min, and max alignment levels for
 * OcaMedia{Source|Sink}Connectors attached to this network. Return
 * status indicates success of the operation.
 * @method RemoteControlClasses.OcaMediaTransportNetwork#GetAlignmentLevel
 * @returns {Promise<Arguments<OcaDBFS,OcaDBFS,OcaDBFS>>}
 */
/**
 * Gets the default, min, and max alignment gains for
 * OcaMediaSinkConnectors attached to this network. Return status
 * indicates success of the operation.
 * @method RemoteControlClasses.OcaMediaTransportNetwork#GetAlignmentGain
 * @returns {Promise<Arguments<OcaDB,OcaDB,OcaDB>>}
 */
/**
 * Event indicating that a media source connector has changed. The change
 * type indicates if the connector was added, deleted or changed.
 * @member RemoteControlClasses.OcaMediaTransportNetwork#OnSourceConnectorChanged {Event} -
 * Event indicating that a media source connector has changed. The change
 * type indicates if the connector was added, deleted or changed.
 */
/**
 * Event indicating that a media sink connector has changed. The change
 * type indicates if the connector was added, deleted or changed.
 * @member RemoteControlClasses.OcaMediaTransportNetwork#OnSinkConnectorChanged {Event} -
 * Event indicating that a media sink connector has changed. The change
 * type indicates if the connector was added, deleted or changed.
 */
/**
 * Event indicating that the status of a source or sink connector has
 * changed.
 * @member RemoteControlClasses.OcaMediaTransportNetwork#OnConnectorStatusChanged {Event} -
 * Event indicating that the status of a source or sink connector has
 * changed.
 */
/**
 * Type of media transport protocol used by the network.
 * @member RemoteControlClasses.OcaMediaTransportNetwork#OnProtocolChanged {PropertyEvent<OcaNetworkMediaProtocol>} - This event is emitted when Protocol changes in the remote object.
 */
/**
 * The list of ports this network has. Note that these represent network
 * channels of the media transport network. Each input port represents a
 * source (transmit) network channel, each output port represents a sink
 * (receive) network channel. Such network channels are directly linked
 * to the ports, so the first input port represents the first source
 * network channel, etc.
 * @member RemoteControlClasses.OcaMediaTransportNetwork#OnPortsChanged {PropertyEvent<OcaList>} - This event is emitted when Ports changes in the remote object.
 */
/**
 * The maximum number of source connectors this media transport network
 * can have (read-only property).
 * @member RemoteControlClasses.OcaMediaTransportNetwork#OnMaxSourceConnectorsChanged {PropertyEvent<OcaUint16>} - This event is emitted when MaxSourceConnectors changes in the remote object.
 */
/**
 * The maximum number of sink connectors this media transport network can
 * have (read-only property).
 * @member RemoteControlClasses.OcaMediaTransportNetwork#OnMaxSinkConnectorsChanged {PropertyEvent<OcaUint16>} - This event is emitted when MaxSinkConnectors changes in the remote object.
 */
/**
 * The maximum number of pins (channels) in a connector that this network
 * will support.
 * @member RemoteControlClasses.OcaMediaTransportNetwork#OnMaxPinsPerConnectorChanged {PropertyEvent<OcaUint16>} - This event is emitted when MaxPinsPerConnector changes in the remote object.
 */
/**
 * The maximum number of ports per pin that this network will support.
 * Value of zero indicates there is no specific limit.
 * @member RemoteControlClasses.OcaMediaTransportNetwork#OnMaxPortsPerPinChanged {PropertyEvent<OcaUint16>} - This event is emitted when MaxPortsPerPin changes in the remote object.
 */
/**
 * Default alignment level value for newly-created
 * <b>OcaMedia{Source|Sink}Connector </b>elements. The min and max values
 * of this property define respectively the lowest and highest alignment
 * level values that may be specified when adding connectors to this
 * network.
 * @member RemoteControlClasses.OcaMediaTransportNetwork#OnAlignmentLevelChanged {PropertyEvent<OcaDBFS>} - This event is emitted when AlignmentLevel changes in the remote object.
 */
/**
 * Default value of AlignmentGain for newly-created
 * OcaMediaSinkConnectors attached to this network. The min and max
 * values of this property define respectively the lowest and highest
 * alignment level values that may be specified when adding sink
 * connectors to this network.
 * @member RemoteControlClasses.OcaMediaTransportNetwork#OnAlignmentGainChanged {PropertyEvent<OcaDB>} - This event is emitted when AlignmentGain changes in the remote object.
 */

/**
 * Abstract base class for classes that represent non-audio (i.e. control
 * and monitoring) functions. All concrete manager objects are lockable
 * (the constructor of this class initializes the Root object with
 * property Lockable true).
 * @extends RemoteControlClasses.OcaRoot
 * @class OcaManager
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * @extends RemoteControlClasses.OcaManager
 * @class OcaDeviceManager
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the value of the OcaVersion property. The return value indicates
 * whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaDeviceManager#GetOcaVersion
 * @returns {Promise<OcaUint16>}
 */
/**
 * Gets the model GUID. The return value indicates whether the GUID was
 * successfully retrieved.
 * @method RemoteControlClasses.OcaDeviceManager#GetModelGUID
 * @returns {Promise<OcaModelGUID>}
 */
/**
 * Gets the value of the SerialNumber property. The return value
 * indicates whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaDeviceManager#GetSerialNumber
 * @returns {Promise<OcaString>}
 */
/**
 * Gets the device name. The return value indicates whether the property
 * was successfully retrieved.
 * @method RemoteControlClasses.OcaDeviceManager#GetDeviceName
 * @returns {Promise<OcaString>}
 */
/**
 * Sets the device name. The return value indicates whether the property
 * was successfully set.
 * @method RemoteControlClasses.OcaDeviceManager#SetDeviceName
 * @param Name {OcaString}
 *
 * @returns {Promise}
 */
/**
 * Gets the model description. The return value indicates whether the
 * description was successfully retrieved.
 * @method RemoteControlClasses.OcaDeviceManager#GetModelDescription
 * @returns {Promise<OcaModelDescription>}
 */
/**
 * Gets the value of the Role property. The return value indicates
 * whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaDeviceManager#GetDeviceRole
 * @returns {Promise<OcaString>}
 */
/**
 * Sets the value of the Role property. The return value indicates
 * whether the property was successfully set.
 * @method RemoteControlClasses.OcaDeviceManager#SetRole
 * @param role {OcaString}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the UserInventoryCode property. The return value
 * indicates whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaDeviceManager#GetUserInventoryCode
 * @returns {Promise<OcaString>}
 */
/**
 * Sets the value of the UserInventoryCode property. The return value
 * indicates whether the property was successfully set.
 * @method RemoteControlClasses.OcaDeviceManager#SetUserInventoryCode
 * @param Code {OcaString}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the Enabled property. The return value indicates
 * whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaDeviceManager#GetEnabled
 * @returns {Promise<OcaBoolean>}
 */
/**
 * Sets the value of the Enabled property. The return value indicates
 * whether the property was successfully set.
 * @method RemoteControlClasses.OcaDeviceManager#SetEnabled
 * @param enabled {OcaBoolean}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the State property. The return value indicates
 * whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaDeviceManager#GetState
 * @returns {Promise<OcaDeviceState>}
 */
/**
 * Sets the value of the reset key of the device. The return value
 * indicates whether the property was successfully set. Note that the
 * device manager must inform the CAP gateway of this key (via the host
 * interface), since the CAP gateway will check for and handle the
 * special reset message.
 * @method RemoteControlClasses.OcaDeviceManager#SetResetKey
 * @param Key {OcaBlobFixedLen}
 *
 * @param Address {OcaNetworkAddress}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the ResetCause property. The return value indicates
 * whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaDeviceManager#GetResetCause
 * @returns {Promise<OcaResetCause>}
 */
/**
 * Clears the ResetCause property, i.e. resets it to the default value
 * 'PowerOn'. Must be used after the reset cause has been read out to
 * ensure differentation between reconnects due to network loss and
 * reconnects due to external or internal reset. Offered as a separate
 * method (instead of implicitly clearing the cause after it has been
 * read out) to accomodate systems that have multiple controllers. The
 * return value indicates whether the property was successfully
 * retrieved.
 * @method RemoteControlClasses.OcaDeviceManager#ClearResetCause
 * @returns {Promise}
 */
/**
 * Gets the value of property <b>Message</b>. Return value indicates
 * whether value was successfully retrieved.
 * @method RemoteControlClasses.OcaDeviceManager#GetMessage
 * @returns {Promise<OcaString>}
 */
/**
 * Set arbitrary text message into <b>Message </b>property. The return
 * value indicates whether the value was successfully set.
 * @method RemoteControlClasses.OcaDeviceManager#SetMessage
 * @param Text {OcaString}
 *
 * @returns {Promise}
 */
/**
 * Retrive the list of descriptors of managers instantiated in this
 * device. The return value indicates whether the retrieval was
 * successful.
 * @method RemoteControlClasses.OcaDeviceManager#GetManagers
 * @returns {Promise<OcaList>}
 */
/**
 * Gets the value of property <b>DeviceRevisionID</b>. Return value
 * indicates whether value was successfully retrieved.
 * @method RemoteControlClasses.OcaDeviceManager#GetDeviceRevisionID
 * @returns {Promise<OcaString>}
 */
/**
 * Read-only property that identifies the model of the device. Note this
 * property is not equivalent to a MAC address, because (a) MAC addresses
 * identify individual devices, not models, and (b) MAC addresses are
 * Ethernet-specific, but an OCA device need not have an Ethernet port.
 * @member RemoteControlClasses.OcaDeviceManager#OnModelGUIDChanged {PropertyEvent<OcaModelGUID>} - This event is emitted when ModelGUID changes in the remote object.
 */
/**
 * Read-only property that identifies the serial number of the CAP
 * device.
 * @member RemoteControlClasses.OcaDeviceManager#OnSerialNumberChanged {PropertyEvent<OcaString>} - This event is emitted when SerialNumber changes in the remote object.
 */
/**
 * Read-only property that contains text names for this model, its
 * manufacturer, and its version.
 * @member RemoteControlClasses.OcaDeviceManager#OnModelDescriptionChanged {PropertyEvent<OcaModelDescription>} - This event is emitted when ModelDescription changes in the remote object.
 */
/**
 * Name of the device. Should be unique manufacturer-qualified
 * identifier.
 * @member RemoteControlClasses.OcaDeviceManager#OnDeviceNameChanged {PropertyEvent<OcaString>} - This event is emitted when DeviceName changes in the remote object.
 */
/**
 * Read-only property that indicates the AES70 version number used by the
 * device.
 * @member RemoteControlClasses.OcaDeviceManager#OnOcaVersionChanged {PropertyEvent<OcaUint16>} - This event is emitted when OcaVersion changes in the remote object.
 */
/**
 * Role of device in application (arbitrary).
 * @member RemoteControlClasses.OcaDeviceManager#OnDeviceRoleChanged {PropertyEvent<OcaString>} - This event is emitted when DeviceRole changes in the remote object.
 */
/**
 * Code used for equipment tracking.
 * @member RemoteControlClasses.OcaDeviceManager#OnUserInventoryCodeChanged {PropertyEvent<OcaString>} - This event is emitted when UserInventoryCode changes in the remote object.
 */
/**
 * Indicates whether the device is enabled (and therefore operational).
 * @member RemoteControlClasses.OcaDeviceManager#OnEnabledChanged {PropertyEvent<OcaBoolean>} - This event is emitted when Enabled changes in the remote object.
 */
/**
 * Read-only property that indicates the current state of the device.
 * @member RemoteControlClasses.OcaDeviceManager#OnStateChanged {PropertyEvent<OcaDeviceState>} - This event is emitted when State changes in the remote object.
 */
/**
 * True iff device is working on something and is not available for OCA
 * command activity. Readonly.
 * @member RemoteControlClasses.OcaDeviceManager#OnBusyChanged {PropertyEvent<OcaBoolean>} - This event is emitted when Busy changes in the remote object.
 */
/**
 * Read-only attribute that indicates the reset cause of the last reset.
 * @member RemoteControlClasses.OcaDeviceManager#OnResetCauseChanged {PropertyEvent<OcaResetCause>} - This event is emitted when ResetCause changes in the remote object.
 */
/**
 * Arbitrary text message provided by controller. Display and handling of
 * the text is device-dependent and not defined by OCA.
 * @member RemoteControlClasses.OcaDeviceManager#OnMessageChanged {PropertyEvent<OcaString>} - This event is emitted when Message changes in the remote object.
 */
/**
 * List of all manager objects instantiated in this device.
 * @member RemoteControlClasses.OcaDeviceManager#OnManagersChanged {PropertyEvent<OcaList>} - This event is emitted when Managers changes in the remote object.
 */
/**
 * Overall device revision identifier. Format of string is
 * manufacturer-specific. Readonly. May be changed by proprietery
 * functions of firmware upload processes.

/**
 * Manager that collects and controls security settings (including
 * security keys). <ul> <li>Must be instantiated in every device that
 * supports secure control and monitoring; otherwise, is optional. </li>
 * <li>May be instantiated at most once in any device. </li> <li>If
 * instantiated, object number must be 2.</li> </ul>
 * @extends RemoteControlClasses.OcaManager
 * @class OcaSecurityManager
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Adds a pre-shared key (identified by the passed identity) to the
 * device. By having multiple PSKs the device is able to participate in
 * multiple secure systems. Note that adding a PSK over the network will
 * only work if the controller has a secure connection to the device and
 * control security has been turned on. If this is not the case the
 * method will return DeviceError.
 * @method RemoteControlClasses.OcaSecurityManager#AddPreSharedKey
 * @param identity {OcaString}
 *
 * @param key {OcaBlob}
 *
 * @returns {Promise}
 */
/**
 * Changes the pre-shared key identified by the passed identity. Note
 * that changing a PSK over the network will only work if the controller
 * has a secure connection to the device and control security has been
 * turned on. If this is not the case the method will return DeviceError.
 * @method RemoteControlClasses.OcaSecurityManager#ChangePreSharedKey
 * @param identity {OcaString}
 *
 * @param newKey {OcaBlob}
 *
 * @returns {Promise}
 */
/**
 * Deletes a pre-shared key (identified by the passed identity) on the
 * device. After deleting the pre-shared key the device will no longer be
 * able to participate in the secure system that uses the PSK. Note that
 * deleting a PSK over the network will only work if the controller has a
 * secure connection to the device and control security has been turned
 * on. If this is not the case the method will return DeviceError.
 * @method RemoteControlClasses.OcaSecurityManager#DeletePreSharedKey
 * @param identity {OcaString}
 *
 * @returns {Promise}
 */
/**
 * Disables security of control data (OCA messages). After calling this
 * method all OCA messages can be sent and received both on insecure and
 * secure connections. The return value indicates whether the operation
 * succeeded. If the operation fails security is not disabled.
 * @method RemoteControlClasses.OcaSecurityManager#DisableControlSecurity
 * @returns {Promise}
 */
/**
 * Enables security of control data (OCA messages). After calling this
 * method all OCA messages are sent and received using a secure
 * connection. The return value indicates whether the operation
 * succeeded. If the operation fails security is not enabled.
 * @method RemoteControlClasses.OcaSecurityManager#EnableControlSecurity
 * @returns {Promise}
 */
/**
 * Indicates whether the OCA control data in the system is secured.
 * @member RemoteControlClasses.OcaSecurityManager#OnsecureControlDataChanged {PropertyEvent<OcaBoolean>} - This event is emitted when secureControlData changes in the remote object.
 */

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
 * @extends RemoteControlClasses.OcaManager
 * @class OcaFirmwareManager
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the value of the ComponentVersions property. The return value
 * indicates whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaFirmwareManager#GetComponentVersions
 * @returns {Promise<OcaList>}
 */
/**
 * Marks the start of the update process of an OCA device, meaning one or
 * more components will be updated. If the method succeeds the device
 * will be in state 'Updating'. One or more active or passive updates can
 * then follow, after which the update process is ended by calling the
 * '03m08 EndUpdateProcess' method. The return value indicates if
 * starting the update process succeeded.
 * @method RemoteControlClasses.OcaFirmwareManager#StartUpdateProcess
 * @returns {Promise}
 */
/**
 * Starts an active update of a software/firmware image on the device.
 * This generic interface can be used to update any component which can
 * be updated actively, i.e. where the upload tool actively pushes the
 * software/firmware image to the firmware manager. The actual firmware
 * manager implementation may implement separate processes for different
 * components, but in each case the interface is the same. The active
 * interface consists of this method and the methods 03m03 AddImageData,
 * 03m04 VerifyImage and 03m05 EndActiveImageUpdate. The return value
 * indicates if starting the active update succeeded.
 * @method RemoteControlClasses.OcaFirmwareManager#BeginActiveImageUpdate
 * @param component {OcaComponent}
 *
 * @returns {Promise}
 */
/**
 * Adds a new part of the software/firmware image to the upgrade memory
 * as part of the active update. Where this data is stored, is up to the
 * implementation of the manager. It can either be stored in RAM to be
 * written to Flash later, or directly to Flash, dependent on the chosen
 * architecture and requirements. The return value indicates whether the
 * data is correctly received and the data is not out of order.
 * @method RemoteControlClasses.OcaFirmwareManager#AddImageData
 * @param id {OcaUint32}
 *
 * @param imageData {OcaBlob}
 *
 * @returns {Promise}
 */
/**
 * Verifies the entire host processor image using the passed verification
 * data.
 * @method RemoteControlClasses.OcaFirmwareManager#VerifyImage
 * @param verifyData {OcaBlob}
 *
 * @returns {Promise}
 */
/**
 * Ends the active software/firmware image update. This is needed to let
 * the device know that the current active component has finished, and
 * therefore a new active or passive update can be started (or the upload
 * process can be ended by invoking the '03m08 EndUpdateProcess' method).
 * The return value indicates if ending the active update succeeded.
 * @method RemoteControlClasses.OcaFirmwareManager#EndActiveImageUpdate
 * @returns {Promise}
 */
/**
 * Begin a passive software/firmware component update. This generic
 * interface can be used for any component that can be passively updated,
 * i.e. where the device requests the actual software/firmware image from
 * an external server. In the function the component type, details of the
 * server and the filename of the file containing the component
 * software/firmware image needs to be passed. The device will try to
 * retrieve the new software/firmware image from the server and update
 * its component using this image. The actual method for retrieving the
 * image (e.g. TFTP) and the underlying update technique (e.g. netflash)
 * depend on the implementation and may differ between components. Just
 * the interface is standardized.
 * @method RemoteControlClasses.OcaFirmwareManager#BeginPassiveComponentUpdate
 * @param component {OcaComponent}
 *
 * @param serverAddress {OcaNetworkAddress}
 *
 * @param updateFileName {OcaString}
 *
 * @returns {Promise}
 */
/**
 * Ends the current update process in which one or more components haven
 * been updated (actively or passively). This action will trigger the
 * device to start using the new images. This should bring the device
 * back into standard operational mode (e.g. rebooting the device, this
 * however depends on the implementation of the upgrade process). As it
 * will usually trigger a reset of the device in some cases no response
 * parameter is used for this method.
 * @method RemoteControlClasses.OcaFirmwareManager#EndUpdateProcess
 * @returns {Promise}
 */
/**
 * List of the versions of the components of the device. As of version 2
 * of this class, component numbers are of datatype<b> OcaEnum,
 * </b>rather than the previous <b>OcaUint16.</b>
 * @member RemoteControlClasses.OcaFirmwareManager#OnComponentVersionsChanged {PropertyEvent<OcaList>} - This event is emitted when ComponentVersions changes in the remote object.
 */

/**
 * Manager that collects and controls the event subscriptions of the
 * device. <ul> <li>Must be instantiated once in every device that
 * supports subscriptions. </li> <li>May be instantiated at most once in
 * any device. </li> <li>If instantiated, must have object number 4.</li>
 * </ul> Absence of an <b>OcaSubscriptionManager </b>object signifies
 * that the device does not support event subscriptions.
 * @extends RemoteControlClasses.OcaManager
 * @class OcaSubscriptionManager
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Removes all subscriptions to the given event with the given
 * <b>OcaMethod</b>. The return value indicates whether the
 * subscription(s) was (were) successfully removed.
 * @method RemoteControlClasses.OcaSubscriptionManager#RemoveSubscription
 * @param Event {OcaEvent}
 *
 * @param Subscriber {OcaMethod}
 *
 * @returns {Promise}
 */
/**
 * Adds a subscription to an event. The subscription is added for the
 * session on which the command came in. If a subscription identical to
 * the one being requested already exists, an additional one shall not be
 * added. Two subscriptions are identical if the <b>Event, Subscriber,
 * NotificationDeliveryMode</b>, and <b>DestinationInformation
 * </b>parameters are all identical. The return value indicates whether
 * the subscription succeeded.
 * @method RemoteControlClasses.OcaSubscriptionManager#AddSubscription
 * @param Event {OcaEvent}
 *
 * @param Subscriber {OcaMethod}
 *
 * @param SubscriberContext {OcaBlob}
 *
 * @param NotificationDeliveryMode {OcaNotificationDeliveryMode}
 *
 * @param DestinationInformation {OcaNetworkAddress}
 *
 * @returns {Promise}
 */
/**
 * Temporarily disables emitting of event notifications (to all
 * subscribers, not just to the subscriber calling this method). Events
 * from the Subscription Manager itself are not disabled. This method can
 * be used if either a controller or the local device knows that it is
 * going to change the state of the device significantly, which could
 * lead to a notification storm of events. Invoking this method will
 * prevent the notification storm. The event '03e01 EventsDisabled' will
 * be raised to notify all controllers of the fact that events are
 * temporarily disabled. The subscription manager will start collecting
 * the object numbers of the objects that raise events, so that it can
 * pass a list of changed objects once the events are re-enabled. The
 * return value indicates if disabling events succeeded.
 * @method RemoteControlClasses.OcaSubscriptionManager#DisableNotifications
 * @returns {Promise}
 */
/**
 * Re-enables the sending of event notifications to all subscribers. When
 * events are re-enabled, the subscription manager will raise the
 * <b>SynchronizeState </b>event, passing the list of objects that have
 * changed state. Subsequently, the subscription manager will transmit
 * all notifications as normal. If the connection to the controller that
 * invoked the DisableEvents() is lost, this method will be called
 * automatically to prevent the situation in which the raising of events
 * would never be re-enabled. The return value indicates if re-enabling
 * the event-based events succeeded.
 * @method RemoteControlClasses.OcaSubscriptionManager#ReEnableNotifications
 * @returns {Promise}
 */
/**
 * Adds a subscription to the PropertyChanged event in the object Emitter
 * for changes of the property Property. If the NotificationDeliveryMode
 * is Fast, the subscription is added for the session on which the
 * command came in. If a subscription identical to the one being
 * requested already exists, an additional one shall not be added. Two
 * subscriptions are identical if the Emitter, Property, Subscriber,
 * SubsciberContext, NotificationDeliveryMode, and DestinationInformation
 * parameters are all identical. The return value indicates whether the
 * subscription succeeded. Added in v2 of this class, in AES70-2017.
 * @method RemoteControlClasses.OcaSubscriptionManager#AddPropertyChangeSubscription
 * @param Emitter {OcaONo}
 *
 * @param Property {OcaPropertyID}
 *
 * @param Subscriber {OcaMethod}
 *
 * @param SubscriberContext {OcaBlob}
 *
 * @param NotificationDeliveryMode {OcaNotificationDeliveryMode}
 *
 * @param DestinationInformation {OcaNetworkAddress}
 *
 * @returns {Promise}
 */
/**
 * Removes any subscription to a PropertyChanged event with the given
 * Emitter, Property, Subscriber, SubscriberContext,
 * NotificationDeliveryMode, and DestinationInformation. The return value
 * indicates whether the subscription(s) was (were) successfully removed.
 * Added in v2 of this class, in AES70-2017.
 * @method RemoteControlClasses.OcaSubscriptionManager#RemovePropertyChangeSubscription
 * @param Emitter {OcaONo}
 *
 * @param Property {OcaPropertyID}
 *
 * @param Subscriber {OcaMethod}
 *
 * @returns {Promise}
 */
/**
 * Returns maximum byte length of payload of subscriber context parameter
 * that this device supports. This returned value shall be either zero or
 * four. If the returned payload length is not zero, it shall be four. No
 * other values shall be allowed, and the returned value shall not change
 * once the device has initialized. NOTE: In AES70-2015, arbitrary
 * subscriber context lengths were allowed; this is no longer true.
 * @method RemoteControlClasses.OcaSubscriptionManager#GetMaximumSubscriberContextLength
 * @returns {Promise<OcaUint16>}
 */
/**
 * Event that is raised when the value of the <b>State </b>property
 * changes from <b><i>Normal </i></b>to <b><i>EventsDisabled.</i></b>
 * @member RemoteControlClasses.OcaSubscriptionManager#OnNotificationsDisabled {Event} -
 * Event that is raised when the value of the <b>State </b>property
 * changes from <b><i>Normal </i></b>to <b><i>EventsDisabled.</i></b>
 */
/**
 * Event that is raised when the value of the <b>State </b>property
 * changes from <b><i>EventsDisabled </i></b>to <b><i>Normal.</i></b>
 * Event data includes a lists of which objects changed state during the
 * period that notifications were disabled.
 * @member RemoteControlClasses.OcaSubscriptionManager#OnSynchronizeState {Event} -
 * Event that is raised when the value of the <b>State </b>property
 * changes from <b><i>EventsDisabled </i></b>to <b><i>Normal.</i></b>
 * Event data includes a lists of which objects changed state during the
 * period that notifications were disabled.
 */
/**
 * Events enabled or disabled. When events are disabled, (1) Only
 * notification from the subscription manager itself are sent to
 * subscribers, and (2) the subscription manager saves the object numbers
 * of all objects that raise events while notifications are disabled. The
 * saved numbers are eventually returned by the <b>SynchronizeState
 * </b>event that occurs when notifications are re-enabled.
 * @member RemoteControlClasses.OcaSubscriptionManager#OnStateChanged {PropertyEvent<OcaSubscriptionManagerState>} - This event is emitted when State changes in the remote object.
 */

/**
 * Optional manager that manages power settings and state. <ul> <li>May
 * be instantiated once in any device. </li> <li>If instantiated, object
 * number must be 5.</li> </ul>
 * @extends RemoteControlClasses.OcaManager
 * @class OcaPowerManager
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Retrieve the value of property <b>03p01 State</b>, the current power
 * state of the device. Return value indicates whether the value was
 * successfully retrieved.
 * @method RemoteControlClasses.OcaPowerManager#GetState
 * @returns {Promise<OcaPowerState>}
 */
/**
 * Change the device power state. The return value indicates whether the
 * requested change has been successfully made.
 * @method RemoteControlClasses.OcaPowerManager#SetState
 * @param State {OcaPowerState}
 *
 * @returns {Promise}
 */
/**
 * Retrieves list of object number(s) of all power supply(ies). Return
 * value indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaPowerManager#GetPowerSupplies
 * @returns {Promise<OcaList>}
 */
/**
 * Retrieves list of object number(s) of active power supply(ies). Return
 * value indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaPowerManager#GetActivePowerSupplies
 * @returns {Promise<OcaList>}
 */
/**
 * Deactivate one power supply and activate another. An option switch
 * indicates whether the previously active power supply is to be turned
 * off. If it is not turned off, it will be placed in the
 * <b>Unavailable</b> state. The return value indicates whether the
 * requested exchange has been successfully made.
 * @method RemoteControlClasses.OcaPowerManager#ExchangePowerSupply
 * @param oldPsu {OcaONo}
 *
 * @param newPsu {OcaONo}
 *
 * @param powerOffOld {OcaBoolean}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the <b>AutoState</b> property. The return value
 * indicates whether the value was successfully retrieved.
 * @method RemoteControlClasses.OcaPowerManager#GetAutoState
 * @returns {Promise<OcaBoolean>}
 */
/**
 * Current power state of device. Readonly.
 * @member RemoteControlClasses.OcaPowerManager#OnStateChanged {PropertyEvent<OcaPowerState>} - This event is emitted when State changes in the remote object.
 */
/**
 * List of object numbers of available power supplies.
 * @member RemoteControlClasses.OcaPowerManager#OnPowerSuppliesChanged {PropertyEvent<OcaList>} - This event is emitted when PowerSupplies changes in the remote object.
 */
/**
 * Object number(s) of power suppl(ies) currently in use.
 * @member RemoteControlClasses.OcaPowerManager#OnActivePowerSuppliesChanged {PropertyEvent<OcaList>} - This event is emitted when ActivePowerSupplies changes in the remote object.
 */
/**
 * True if current state was invoked automatically, not by a controller
 * action.
 * @member RemoteControlClasses.OcaPowerManager#OnAutoStateChanged {PropertyEvent<OcaBoolean>} - This event is emitted when AutoState changes in the remote object.
 */
/**
 * Power state to which the device is transitioning. If no transition is
 * in progress, has value None. Readonly.

/**
 * Optional manager that collects all media transport and control
 * networks to which the device belongs. <ul> <li>Must be instantiated
 * once in every device that has more than one network object. In this
 * context, "network object" shall mean an instance of <b>OcaNetwork</b>,
 * <b>OcaStreamNetwork</b>, <b>OcaApplicationNetwork</b>, or any subclass
 * of these classes.</li> </ul> <ul> <li>If instantiated, must have
 * object number 6.</li> </ul>
 * @extends RemoteControlClasses.OcaManager
 * @class OcaNetworkManager
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the list of object numbers of <b>OcaNetwork </b>instances in this
 * device. Return value indicates whether the list was successfully
 * retrieved. <b><u>Deprecated as of OCA 1.2</u></b>
 * @method RemoteControlClasses.OcaNetworkManager#GetNetworks
 * @returns {Promise<OcaList>}
 */
/**
 * Gets the list of object numbers of <b>OcaStreamNetwork </b>instances
 * in this device. Return value indicates whether list was successfully
 * retrieved. <b><u>Deprecated as of OCA 1.4.</u></b>
 * @method RemoteControlClasses.OcaNetworkManager#GetStreamNetworks
 * @returns {Promise<OcaList>}
 */
/**
 * Gets the list of object numbers of <b>OcaControlNetwork </b>instances
 * in this device. Return value indicates whether list was successfully
 * retrieved. Introduced in version 1.4.
 * @method RemoteControlClasses.OcaNetworkManager#GetControlNetworks
 * @returns {Promise<OcaList>}
 */
/**
 * Gets the list of object numbers of <b>OcaMediaTransportNetwork
 * </b>instances in this device. Return value indicates whether list was
 * successfully retrieved. Introduced in version 1.4.
 * @method RemoteControlClasses.OcaNetworkManager#GetMediaTransportNetworks
 * @returns {Promise<OcaList>}
 */
/**
 * Object numbers of <b>OcaNetwork </b>objects, one for each network to
 * which this device belongs. <b><u>Deprecated as of OCA 1.2.</u></b>
 * @member RemoteControlClasses.OcaNetworkManager#OnNetworksChanged {PropertyEvent<OcaList>} - This event is emitted when Networks changes in the remote object.
 */
/**
 * Object numbers of <b>OcaStreamNetwork </b>objects, one for each
 * network to which this device belongs. <b><u>Deprecated as of OCA
 * 1.4.</u></b>
 * @member RemoteControlClasses.OcaNetworkManager#OnStreamNetworksChanged {PropertyEvent<OcaList>} - This event is emitted when StreamNetworks changes in the remote object.
 */
/**
 * Object numbers of <b>OcaControlNetwork </b>objects, one for each
 * control network to which this device belongs. Added in version 2.
 * @member RemoteControlClasses.OcaNetworkManager#OnControlNetworksChanged {PropertyEvent<OcaList>} - This event is emitted when ControlNetworks changes in the remote object.
 */
/**
 * Object numbers of <b>OcaMediaTransportNetwork </b>objects, one for
 * each media transport network to which this device belongs. Added in
 * version 2.
 * @member RemoteControlClasses.OcaNetworkManager#OnMediaTransportNetworksChanged {PropertyEvent<OcaList>} - This event is emitted when MediaTransportNetworks changes in the remote object.
 */

/**
 * Optional manager that collects all media clocks the device uses. <ul>
 * <li>Must be instantiated once for every device that has more than one
 * media clock object. In this context, "media clock" means an instance
 * of <b>OcaMediaClock</b>, <b>OcaMediaClock3</b>, or any subclass of
 * these classes. </li> </ul> <ul> <li>If instantiated, object number
 * must be 7.</li> </ul>
 * @extends RemoteControlClasses.OcaManager
 * @class OcaMediaClockManager
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the list of object numbers of <b>OcaMediaClock </b>instances in
 * this device. Return value indicates whether list was successfully
 * retrieved. Note: In AES70-2017, this method is deprecated.
 * @method RemoteControlClasses.OcaMediaClockManager#GetClocks
 * @returns {Promise<OcaList>}
 */
/**
 * Gets the list of media clock types supported by <b>OcaMediaClock
 * </b>objects in the device. Return value indicates whether the list was
 * successfully retrieved. Note : In AES70-2017, this method is
 * deprecated.
 * @method RemoteControlClasses.OcaMediaClockManager#GetMediaClockTypesSupported
 * @returns {Promise<OcaList>}
 */
/**
 * Gets the list of object numbers of <b>OcaMediaClock3 </b>instances in
 * this device. Return value indicates whether list was successfully
 * retrieved.
 * @method RemoteControlClasses.OcaMediaClockManager#GetClock3s
 * @returns {Promise<OcaList>}
 */
/**
 * List of clock source types supported by <b>OcaMediaClock </b>objects
 * in this device. Note: In AES70-2017, this method is deprecated. It
 * only reflects the clock types of <b>OcaMediaClock </b>objects, which
 * are now deprecated. It does not apply to <b>OcaMediaClock3
 * </b>objects, since these do not have type attributes. If the number of
 * <b>OcaMediaClock </b>objects in the device is zero, this property is
 * empty.
 * @member RemoteControlClasses.OcaMediaClockManager#OnClockSourceTypesSupportedChanged {PropertyEvent<OcaList>} - This event is emitted when ClockSourceTypesSupported changes in the remote object.
 */
/**
 * Object numbers of <b>OcaMediaClock </b>objects, one for each clock
 * which this device uses and/or sources. Note: In AES70-2017, this
 * property is deprecated.
 * @member RemoteControlClasses.OcaMediaClockManager#OnClocksChanged {PropertyEvent<OcaList>} - This event is emitted when Clocks changes in the remote object.
 */
/**
 * Object numbers of <b>OcaMediaClock3 </b>objects, one for each clock
 * which this device uses and/or sources.
 * @member RemoteControlClasses.OcaMediaClockManager#OnClock3sChanged {PropertyEvent<OcaList>} - This event is emitted when Clock3s changes in the remote object.
 */

/**
 * Optional manager for handling device presets -- Patch and ParamSet
 * libraries. <ul> <li>May be instantiated once in any device. </li>
 * </ul> <ul> <li>If instantiated, object number must be 8.</li> </ul>
 * @extends RemoteControlClasses.OcaManager
 * @class OcaLibraryManager
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Adds a library to the device. Return value indicates whether the
 * library was successfully added.
 * @method RemoteControlClasses.OcaLibraryManager#AddLibrary
 * @param Type {OcaLibVolType}
 *
 * @returns {Promise<OcaLibraryIdentifier>}
 */
/**
 * Deletes a library from the device.
 * @method RemoteControlClasses.OcaLibraryManager#DeleteLibrary
 * @param ID {OcaONo}
 *
 * @returns {Promise}
 */
/**
 * Returns the number of libraries of the given type that are
 * instantiated in the device..
 * @method RemoteControlClasses.OcaLibraryManager#GetLibraryCount
 * @param Type {OcaLibVolType}
 *
 * @returns {Promise<OcaUint16>}
 */
/**
 * Returns the list of object numbers of libraries of libraries of the
 * given type that are instantiated in the device.
 * @method RemoteControlClasses.OcaLibraryManager#GetLibraryList
 * @param Type {OcaLibVolType}
 *
 * @returns {Promise<OcaList>}
 */
/**
 * Return the identifier of the most recently applied patch. The return
 * value indicates whether the method succeeded.
 * @method RemoteControlClasses.OcaLibraryManager#GetCurrentPatch
 * @returns {Promise<OcaLibVolIdentifier>}
 */
/**
 * Apply a patch to the device.
 * @method RemoteControlClasses.OcaLibraryManager#ApplyPatch
 * @param ID {OcaLibVolIdentifier}
 *
 * @returns {Promise}
 */
/**
 * List of identifiers of all libraries in the device.
 * @member RemoteControlClasses.OcaLibraryManager#OnLibrariesChanged {PropertyEvent<OcaList>} - This event is emitted when Libraries changes in the remote object.
 */
/**
 * Library volume identifier of the most-recently applied patch in this
 * device. Changing the value of this property applies the patch
 * represented by the new value.
 * @member RemoteControlClasses.OcaLibraryManager#OnCurrentPatchChanged {PropertyEvent<OcaLibVolIdentifier>} - This event is emitted when CurrentPatch changes in the remote object.
 */

/**
 * Placeholder for optional manager that in future versions of the
 * standard will hold various global audio processing parameters. <ul>
 * <li>May be instantiated once in any device. </li> </ul> <ul> <li>If
 * instantiated, object number must be 9.</li> </ul>
 * @extends RemoteControlClasses.OcaManager
 * @class OcaAudioProcessingManager
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * @extends RemoteControlClasses.OcaManager
 * @class OcaDeviceTimeManager
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Get current value of device time-of-day clock in NTP format. Return
 * value indicates whether value was successfully retrieved. This method
 * is <u>optional </u>and <u>deprecated</u>.
 * @method RemoteControlClasses.OcaDeviceTimeManager#GetDeviceTimeNTP
 * @returns {Promise<OcaTimeNTP>}
 */
/**
 * Sets device time-of-day clock in NTP format. Return value indicates
 * whether value was successfully set. Not available if a time source is
 * identified in property CurrentDeviceTimeSource. This method is
 * <u>optional </u>and <u>deprecated</u>.
 * @method RemoteControlClasses.OcaDeviceTimeManager#SetDeviceTimeNTP
 * @param DeviceTime {OcaTimeNTP}
 *
 * @returns {Promise}
 */
/**
 * Returns list of object numbers of OcaTimeSource instances in this
 * device. Return value indicates whether list was successfully
 * retrieved.
 * @method RemoteControlClasses.OcaDeviceTimeManager#GetTimeSources
 * @returns {Promise<OcaList>}
 */
/**
 * Retrieves ONo of current time source object, or zero if none. Return
 * value indicates whether value was successfully retrieved.
 * @method RemoteControlClasses.OcaDeviceTimeManager#GetCurrentDeviceTimeSource
 * @returns {Promise<OcaONo>}
 */
/**
 * Sets ONo of current time source object, or zero if none. Return value
 * indicates whether value was successfully retrieved.
 * @method RemoteControlClasses.OcaDeviceTimeManager#SetCurrentDeviceTimeSource
 * @param TimeSourceONo {OcaONo}
 *
 * @returns {Promise}
 */
/**
 * Get current value of device time-of-day clock in PTP format. Return
 * value indicates whether value was successfully retrieved.
 * @method RemoteControlClasses.OcaDeviceTimeManager#GetDeviceTimePTP
 * @returns {Promise<OcaTimePTP>}
 */
/**
 * Sets device time-of-day clock in PTP format. Return value indicates
 * whether value was successfully set. Not available if a time source is
 * identified in property CurrentDeviceTimeSource.
 * @method RemoteControlClasses.OcaDeviceTimeManager#SetDeviceTimePTP
 * @param DeviceTime {OcaTimePTP}
 *
 * @returns {Promise}
 */
/**
 * The list of ONos of OcaTimeSource objects in this device
 * @member RemoteControlClasses.OcaDeviceTimeManager#OnTimeSourcesChanged {PropertyEvent<OcaList>} - This event is emitted when TimeSources changes in the remote object.
 */
/**
 * The current time source for this device's device time, or zero if
 * none.
 * @member RemoteControlClasses.OcaDeviceTimeManager#OnCurrentDeviceTimeSourceChanged {PropertyEvent<OcaONo>} - This event is emitted when CurrentDeviceTimeSource changes in the remote object.
 */

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
 * @extends RemoteControlClasses.OcaManager
 * @class OcaTaskManager
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Enables (parameter =TRUE) or disables (parameter = FALSE) the running
 * of tasks. Changes value of property State from Disabled to Enabled and
 * vice versa. All tasks running when Enable is called with parameter =
 * FALSE are immediately aborted.
 * @method RemoteControlClasses.OcaTaskManager#Enable
 * @param Enable {OcaBoolean}
 *
 * @returns {Promise}
 */
/**
 * Controls all tasks in device. Return value indicates whether tasks
 * were successfully controlled.
 * @method RemoteControlClasses.OcaTaskManager#ControlAllTasks
 * @param Command {OcaTaskCommand}
 *
 * @param ApplicationTaskParameter {OcaBlob}
 *
 * @returns {Promise}
 */
/**
 * Controls all tasks in the given group. Return value indicates whether
 * tasks were successfully controlled.
 * @method RemoteControlClasses.OcaTaskManager#ControlTaskGroup
 * @param GroupID {OcaTaskGroupID}
 *
 * @param Command {OcaTaskCommand}
 *
 * @param ApplicationTaskParameter {OcaBlob}
 *
 * @returns {Promise}
 */
/**
 * Controls a specified task. Return value indicates whether tasks were
 * successfully controlled.
 * @method RemoteControlClasses.OcaTaskManager#ControlTask
 * @param TaskID {OcaTaskID}
 *
 * @param Command {OcaTaskCommand}
 *
 * @param ApplicationTaskParameter {OcaBlob}
 *
 * @returns {Promise}
 */
/**
 * Gets value of property <b>State</b>. Return value indicates whether
 * value was successfully retrieved.
 * @method RemoteControlClasses.OcaTaskManager#GetState
 * @returns {Promise<OcaTaskManagerState>}
 */
/**
 * This was not documented in the OCA standard.
 * @method RemoteControlClasses.OcaTaskManager#GetTaskStatuses
 * @returns {Promise<OcaTaskStatus>}
 */
/**
 * This was not documented in the OCA standard.
 * @method RemoteControlClasses.OcaTaskManager#GetTaskStatus
 * @param TaskID {OcaTaskID}
 *
 * @returns {Promise<OcaTaskStatus>}
 */
/**
 * Creates a Task. Parameters of the new Task are given in the Task
 * parameter; device returns the same parameter with the new Task ID
 * filled in. Initial task state is set to Disabled. Return value
 * indicates whether Task was successfully created.
 * @method RemoteControlClasses.OcaTaskManager#AddTask
 * @param Task {OcaTask}
 *
 * @returns {Promise<OcaTask>}
 */
/**
 * Gets map of Tasks in the device. Return value indicates whether map
 * was successfully retrieved.
 * @method RemoteControlClasses.OcaTaskManager#GetTasks
 * @returns {Promise<OcaMap>}
 */
/**
 * Retrieves a Task. Return value indicates whether Task was successfully
 * retrieved.
 * @method RemoteControlClasses.OcaTaskManager#GetTask
 * @param ID {OcaTaskID}
 *
 * @returns {Promise<OcaTask>}
 */
/**
 * Updates a Task. Return value indicates whether Task was successfully
 * updated.
 * @method RemoteControlClasses.OcaTaskManager#SetTask
 * @param ID {OcaTaskID}
 *
 * @param Task {OcaTask}
 *
 * @returns {Promise}
 */
/**
 * Deletes a task. Return value indicates whether task was successfully
 * deleted. Method fails with status=ProcessingFailed if task is running.
 * @method RemoteControlClasses.OcaTaskManager#DeleteTask
 * @param ID {OcaTaskID}
 *
 * @returns {Promise}
 */
/**
 * This was not documented in the OCA standard.
 * @member RemoteControlClasses.OcaTaskManager#OnTaskStateChanged {Event} -
 */
/**
 * Current state of task processing. State is Disabled after a Disable
 * command has been received, Enabled otherwise.
 * @member RemoteControlClasses.OcaTaskManager#OnStateChanged {PropertyEvent<OcaTaskManagerState>} - This event is emitted when State changes in the remote object.
 */
/**
 * Task collection
 * @member RemoteControlClasses.OcaTaskManager#OnTasksChanged {PropertyEvent<OcaMap>} - This event is emitted when Tasks changes in the remote object.
 */

/**
 * Optional manager that collects all media decoders/encoders (Codecs)
 * which the device owns. <ul> <li>Must be instantiated in every device
 * that implements more than one media encoding scheme and/or more than
 * one media decoding scheme. </li> </ul> <ul> <li>If instantiated,
 * object number must be 12.</li> </ul>
 * @extends RemoteControlClasses.OcaManager
 * @class OcaCodingManager
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Retrieves the map of available encoding schemes, indexed by scheme ID.
 * Return value indicates success of the retrieval.
 * @method RemoteControlClasses.OcaCodingManager#GetAvailableEncodingSchemes
 * @returns {Promise<OcaMap>}
 */
/**
 * Retrieves the map of available decoding schemes, indexed by scheme ID.
 * Return value indicates success of the retrieval.
 * @method RemoteControlClasses.OcaCodingManager#GetAvailableDecodingSchemes
 * @returns {Promise<OcaMap>}
 */
/**
 * Map of names of media encoding schemes the device supports, indexed by
 * scheme ID.
 * @member RemoteControlClasses.OcaCodingManager#OnAvailableEncodingSchemesChanged {PropertyEvent<OcaMap>} - This event is emitted when AvailableEncodingSchemes changes in the remote object.
 */
/**
 * Map of names of media decoding schemes the device supports, indexed by
 * scheme ID.
 * @member RemoteControlClasses.OcaCodingManager#OnAvailableDecodingSchemesChanged {PropertyEvent<OcaMap>} - This event is emitted when AvailableDecodingSchemes changes in the remote object.
 */

/**
 * Optional manager that provides application diagnostic aids. Unlike
 * other manager classes, OcaDiagnosticManager may be subclassed to
 * provide proprietary application diagnostic enhancements. <ul> <li>May
 * be instantiated once in any device. </li> <li>If instantiated, object
 * number must be 13.</li> </ul>
 * @extends RemoteControlClasses.OcaManager
 * @class OcaDiagnosticManager
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Retrieves a text description of the given object's lock status. Return
 * value indicates success of the retrieval.
 * @method RemoteControlClasses.OcaDiagnosticManager#GetLockStatus
 * @param ONo {OcaONo}
 *
 * @returns {Promise<OcaString>}
 */

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
 * @extends RemoteControlClasses.OcaWorker
 * @class OcaNetworkSignalChannel
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Adds the object number of the stream connector object to which this
 * media port belongs, and specifies on what index of the stream
 * connector this channel can be found. Return status indicates success
 * of operation.
 * @method RemoteControlClasses.OcaNetworkSignalChannel#AddToConnector
 * @param Connector {OcaONo}
 *
 * @param Index {OcaStreamConnectorPinIndex}
 *
 * @returns {Promise}
 */
/**
 * Gets the object number of the stream connector object to which this
 * media port belongs, if any. If port does not belong to a stream
 * connector, returns zero. Return status indicates success of operation.
 * @method RemoteControlClasses.OcaNetworkSignalChannel#GetConnectorPins
 * @returns {Promise<OcaMap>}
 */
/**
 * Gets the value of the IDAdvertised property. Return status indicates
 * success of operation.
 * @method RemoteControlClasses.OcaNetworkSignalChannel#GetIDAdvertised
 * @returns {Promise<OcaNetworkSignalChannelID>}
 */
/**
 * Gets the object number of the stream network object to which this
 * media port belongs. Return status indicates success of operation.
 * @method RemoteControlClasses.OcaNetworkSignalChannel#GetNetwork
 * @returns {Promise<OcaONo>}
 */
/**
 * Gets the remote channel ID to which this channel is connected. Empty
 * if the channel is not connected (at least not directly to another
 * channel). For stream-oriented connection management this functionality
 * is not used (i.e. the remote channel ID will always be empty).
 * @method RemoteControlClasses.OcaNetworkSignalChannel#GetRemoteChannelID
 * @returns {Promise<OcaNetworkSignalChannelID>}
 */
/**
 * Gets the value of the SourceOrSink property. Return status indicates
 * success of operation.
 * @method RemoteControlClasses.OcaNetworkSignalChannel#GetSourceOrSink
 * @returns {Promise<OcaNetworkMediaSourceOrSink>}
 */
/**
 * Gets the value of the Status property. Return status indicates success
 * of operation.
 * @method RemoteControlClasses.OcaNetworkSignalChannel#GetStatus
 * @returns {Promise<OcaNetworkSignalChannelStatus>}
 */
/**
 * Removes this channel from the passed stream connector. Return status
 * indicates success of operation.
 * @method RemoteControlClasses.OcaNetworkSignalChannel#RemoveFromConnector
 * @param Connector {OcaONo}
 *
 * @returns {Promise}
 */
/**
 * Sets the value of the IDAdvertised property. Return status indicates
 * success of operation.
 * @method RemoteControlClasses.OcaNetworkSignalChannel#SetIDAdvertised
 * @param IDAdvertised {OcaNetworkSignalChannelID}
 *
 * @returns {Promise}
 */
/**
 * Sets the object number of the stream network object to which this
 * media port belongs. Return status indicates success of operation. Only
 * implemented for reconfigurable devices.
 * @method RemoteControlClasses.OcaNetworkSignalChannel#SetNetwork
 * @param Network {OcaONo}
 *
 * @returns {Promise}
 */
/**
 * Sets the remote channel ID to which this channel must be connected.
 * Only used for channel-oriented connection management. For
 * stream-oriented connection management this method is not used.
 * Clearing the remote channel ID (i.e. tearing down the connection) can
 * be done by passing an empty remote channel ID as parameter.
 * @method RemoteControlClasses.OcaNetworkSignalChannel#SetRemoteChannelID
 * @param RemoteChannelID {OcaNetworkSignalChannelID}
 *
 * @returns {Promise}
 */
/**
 * Map of object numbers of <b>OcaStreamConnector</b> objects to
 * <b>OcaStreamConnectorPinIndex </b>of these connectors. This map
 * identifies which <b>OcaStreamConnector</b> objects contain this
 * network signal channel, and indicates at what pin of the connector
 * this channel is found. If the <b>OcaNetworkSignalChannel</b> object is
 * not part of any <b>OcaStreamConnector </b>this map is empty. Note that
 * <b>OcaNetworkSignalChannel</b> objects of type <b>Sink</b> cannot have
 * more than one entry in the map, else it would implicitly perform
 * mixing. <b>OcaNetworkSignalChannel </b>objects of type <b>Source</b>
 * can have multiple entries in the map.
 * @member RemoteControlClasses.OcaNetworkSignalChannel#OnConnectorPinsChanged {PropertyEvent<OcaMap>} - This event is emitted when ConnectorPins changes in the remote object.
 */
/**
 * Character name or binary identifier of the port that is advertised on
 * the network to be found by other devices' discovery processes.
 * Depending on the media transport architecture being used, this ID may
 * be globally unique throughout the network, or only unique within the
 * scope of the specific Network instance to which the port is attached.
 * @member RemoteControlClasses.OcaNetworkSignalChannel#OnIDAdvertisedChanged {PropertyEvent<OcaNetworkSignalChannelID>} - This event is emitted when IDAdvertised changes in the remote object.
 */
/**
 * Object number of stream network object (<b>OcaStreamNetwork</b> or one
 * of its subclasses) to which this signal channel belongs.
 * @member RemoteControlClasses.OcaNetworkSignalChannel#OnNetworkChanged {PropertyEvent<OcaONo>} - This event is emitted when Network changes in the remote object.
 */
/**
 * External ID of ultimate source or destination of signal.
 * @member RemoteControlClasses.OcaNetworkSignalChannel#OnRemoteChannelIDChanged {PropertyEvent<OcaNetworkSignalChannelID>} - This event is emitted when RemoteChannelID changes in the remote object.
 */
/**
 * Describes whether this signal channel is source (emits signals into
 * the network) or sink (receives signals from the network). Sources are
 * sometimes called "talkers", and sinks are sometimes called
 * "listeners".
 * @member RemoteControlClasses.OcaNetworkSignalChannel#OnSourceOrSinkChanged {PropertyEvent<OcaNetworkMediaSourceOrSink>} - This event is emitted when SourceOrSink changes in the remote object.
 */
/**
 * Status of the port
 * @member RemoteControlClasses.OcaNetworkSignalChannel#OnStatusChanged {PropertyEvent<OcaNetworkSignalChannelStatus>} - This event is emitted when Status changes in the remote object.
 */

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

/**
 * <b>DEPRECATED CLASS</b> <i>Replaced by
 * </i><b><i>OcaMediaClock3</i></b> A media clock, internal or external.
 * @extends RemoteControlClasses.OcaAgent
 * @class OcaMediaClock
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the value of the <b>Type </b>property. The return value indicates
 * whether the value was successfully retrieved.
 * @method RemoteControlClasses.OcaMediaClock#GetType
 * @returns {Promise<OcaMediaClockType>}
 */
/**
 * Sets the value of the <b>Type </b>property. The return value indicates
 * whether the value was successfully set. Optional method, may not be
 * supported in all implementations.
 * @method RemoteControlClasses.OcaMediaClock#SetType
 * @param Type {OcaMediaClockType}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the <b>DomainID </b>property. The return value
 * indicates whether the value was successfully retrieved.
 * @method RemoteControlClasses.OcaMediaClock#GetDomainID
 * @returns {Promise<OcaUint16>}
 */
/**
 * Sets the value of the <b>DomainID </b>property. The return value
 * indicates whether the value was successfully set. Optional method, may
 * not be supported in all implementations.
 * @method RemoteControlClasses.OcaMediaClock#SetDomainID
 * @param ID {OcaUint16}
 *
 * @returns {Promise}
 */
/**
 * Gets the list of supported sampling rates. The return value indicates
 * whether the list was successfully retrieved.
 * @method RemoteControlClasses.OcaMediaClock#GetSupportedRates
 * @returns {Promise<OcaList>}
 */
/**
 * Gets the current sampling rate. The return value indicates whether the
 * value was successfully retrieved.
 * @method RemoteControlClasses.OcaMediaClock#GetRate
 * @returns {Promise<OcaMediaClockRate>}
 */
/**
 * Sets the sampling rate. The return value indicates whether the rate
 * was successfully set.
 * @method RemoteControlClasses.OcaMediaClock#SetRate
 * @param rate {OcaMediaClockRate}
 *
 * @returns {Promise}
 */
/**
 * Gets the current media clock lock state. The return value indicates
 * whether the value was successfully retrieved.
 * @method RemoteControlClasses.OcaMediaClock#GetLockState
 * @returns {Promise<OcaMediaClockLockState>}
 */
/**
 * Type of clock.
 * @member RemoteControlClasses.OcaMediaClock#OnTypeChanged {PropertyEvent<OcaMediaClockType>} - This event is emitted when Type changes in the remote object.
 */
/**
 * Clock domain ID. Arbitrary value.
 * @member RemoteControlClasses.OcaMediaClock#OnDomainIDChanged {PropertyEvent<OcaUint16>} - This event is emitted when DomainID changes in the remote object.
 */
/**
 * List of supported rates
 * @member RemoteControlClasses.OcaMediaClock#OnRatesSupportedChanged {PropertyEvent<OcaList>} - This event is emitted when RatesSupported changes in the remote object.
 */
/**
 * Current clock rate
 * @member RemoteControlClasses.OcaMediaClock#OnCurrentRateChanged {PropertyEvent<OcaMediaClockRate>} - This event is emitted when CurrentRate changes in the remote object.
 */
/**
 * Lock state of clock.
 * @member RemoteControlClasses.OcaMediaClock#OnLockStateChanged {PropertyEvent<OcaMediaClockLockState>} - This event is emitted when LockState changes in the remote object.
 */

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
 * @extends RemoteControlClasses.OcaAgent
 * @class OcaStreamConnector
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Connects a stream to this connector. Return status indicates success
 * of operation.
 * @method RemoteControlClasses.OcaStreamConnector#ConnectStream
 * @param Stream {OcaStream}
 *
 * @returns {Promise<OcaStreamIndex>}
 */
/**
 * Disconnects a stream from this connector. Return status indicates
 * success of operation.
 * @method RemoteControlClasses.OcaStreamConnector#DisconnectStream
 * @param StreamID {OcaStreamIndex}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the IDAdvertised property. Return status indicates
 * success of operation.
 * @method RemoteControlClasses.OcaStreamConnector#GetIDAdvertised
 * @returns {Promise<OcaStreamConnectorID>}
 */
/**
 * Gets the object number of the <b>OcaStreamNetwork </b>object to which
 * this connector belongs. Return status indicates success of operation.
 * @method RemoteControlClasses.OcaStreamConnector#GetOwnerNetwork
 * @returns {Promise<OcaONo>}
 */
/**
 * Gets the list of object numbers of <b>OcaNetworkSignalChannel
 * </b>objects connected to this connector. Return status indicates
 * success of operation.
 * @method RemoteControlClasses.OcaStreamConnector#GetPins
 * @returns {Promise<OcaMap>}
 */
/**
 * Gets the value of the SourceOrSink property. Return status indicates
 * success of operation.
 * @method RemoteControlClasses.OcaStreamConnector#GetSourceOrSink
 * @returns {Promise<OcaNetworkMediaSourceOrSink>}
 */
/**
 * Gets the value of the Status property. Return status indicates success
 * of operation.
 * @method RemoteControlClasses.OcaStreamConnector#GetStatus
 * @returns {Promise<OcaStreamConnectorStatus>}
 */
/**
 * Gets the map of OcaStream items connected to this connector. Return
 * status indicates success of operation.
 * @method RemoteControlClasses.OcaStreamConnector#GetStreams
 * @returns {Promise<OcaMap>}
 */
/**
 * Sets the value of the IDAdvertised property. Return status indicates
 * success of operation.
 * @method RemoteControlClasses.OcaStreamConnector#SetIDAdvertised
 * @param IDAdvertised {OcaStreamConnectorID}
 *
 * @returns {Promise}
 */
/**
 * Sets the object number of the <b>OcaStreamNetwork </b>object to which
 * this connector belongs. Return status indicates success of operation.
 * Only implemented for reconfigurable devices.
 * @method RemoteControlClasses.OcaStreamConnector#SetOwnerNetwork
 * @param Network {OcaONo}
 *
 * @returns {Promise}
 */
/**
 * Sets the value of the SourceOrSink property. Return status indicates
 * success of operation. Only implemented for reconfigurable devices.
 * Note that this method can only be called when the SignalChannels
 * property is empty, i.e. does not contain any actual channels.
 * @method RemoteControlClasses.OcaStreamConnector#SetSourceOrSink
 * @param SourceOrSink {OcaNetworkMediaSourceOrSink}
 *
 * @returns {Promise}
 */
/**
 * Character name or binary identifier of this connector. This ID is
 * advertised on the network to be found by other devices' discovery
 * processes.
 * @member RemoteControlClasses.OcaStreamConnector#OnIDAdvertisedChanged {PropertyEvent<OcaStreamConnectorID>} - This event is emitted when IDAdvertised changes in the remote object.
 */
/**
 * Object number of stream network object (<b>OcaStreamNetwork</b> or one
 * of its subclasses) to which this connector belongs. In reconfigurable
 * devices, a controller that creates an <b>OcaStreamConnector </b>object
 * must store the appropriate stream network object number into this
 * property. It is assumed that, upon receiving a value into its
 * <b>Owner</b> property, the terminus object will by internal means
 * register itself with the identified stream network.
 * @member RemoteControlClasses.OcaStreamConnector#OnOwnerNetworkChanged {PropertyEvent<OcaONo>} - This event is emitted when OwnerNetwork changes in the remote object.
 */
/**
 * The map of connector pin indexes to
 * <b>OcaNetworkSignalChannel[Source|Sink] </b>objects collected by this
 * connector. The pin indexes are <u>fixed indexes</u> 1 to n, where n is
 * the number of channels the connector accommodates (determined when the
 * connector is created). If a certain pin in the connector is currently
 * not attached the OcaONo of that index is 0.
 * @member RemoteControlClasses.OcaStreamConnector#OnPinsChanged {PropertyEvent<OcaMap>} - This event is emitted when Pins changes in the remote object.
 */
/**
 * Specifies whether this connector is for output (source) or input
 * (sink) signal channels.
 * @member RemoteControlClasses.OcaStreamConnector#OnSourceOrSinkChanged {PropertyEvent<OcaNetworkMediaSourceOrSink>} - This event is emitted when SourceOrSink changes in the remote object.
 */
/**
 * Status of this terminus.
 * @member RemoteControlClasses.OcaStreamConnector#OnStatusChanged {PropertyEvent<OcaStreamConnectorStatus>} - This event is emitted when Status changes in the remote object.
 */
/**
 * The list of <b>OcaStream </b>data objects contained in (i.e. connected
 * to) this connector.
 * @member RemoteControlClasses.OcaStreamConnector#OnStreamsChanged {PropertyEvent<OcaMap>} - This event is emitted when Streams changes in the remote object.
 */

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