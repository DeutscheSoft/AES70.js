
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
  } from './Base.js';

import {
    OcaBaseDataType,
    OcaPortMode,
    OcaPortID,
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
    OcaStringComparisonType,
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
    OcaMediaConnectorElement,
    OcaMediaConnectorState,
    OcaMediaConnectorStatus,
    OcaMediaConnectorStatusChangedEventData,
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
    OcaGlobalBlockTypeIdentifier,
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
    OcaPositionAndRotationFlags,
    OcaGrouperMode,
    OcaObserverState,
    OcaRelationalOperator,
    OcaPowerSupplyType,
    OcaPowerSupplyLocation,
    OcaPowerSupplyState,
    OcaTaskState,
    OcaTaskStatus,
    OcaTaskCommand,
    OcaTaskManagerState,
    OcaRamperInterpolationLaw,
    OcaLibVolType,
    OcaLibVolIdentifier,
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
    OcaTimeMode,
    OcaTimeUnits,
    OcaTimeSourceSyncStatus,
    OcaNetworkSystemInterfaceID,
    OcaNetworkStatistics,
    OcaStreamConnectorIdentification,
    OcaStreamType,
    OcaStreamStatus,
    OcaStream,
    OcaMediaClockLockState,
    OcaMediaClockType,
    OcaRamperCommand,
    OcaRamperState,
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
    BLOBFIXED,
    BITSTRINGFIXED,
  } from '../signature_parser';



let OcaRoot_GetClassIdentification_rs = null;
let OcaRoot_GetLockable_rs = null;
let OcaRoot_GetRole_rs = null;
let OcaRoot_p = null;

let OcaRoot_sync = null;

/**
 * The abstract root class of which all OCA classes derive. It offers
 * basic OCA functionality such as locking an object and generalized data
 * access.
 * @extends ObjectBase
 */
export class OcaRoot extends ObjectBase
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._PropertyChanged = null;
    this._LockableChanged = null;
    this._RoleChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This is a
   * class property instead of an object property. This property will be
   * overridden by each descendant class, in order to specify that class's
   * ClassID.
   */
  static get ClassID()
  {
    return "\u0001";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property will be
   * overridden by each descendant class, in order to specify that class's
   * ClassVersion.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Gets the class identification, a structure that contains the ClassID
   * and ClassVersion. The return value indicates whether the property was
   * successfully retrieved.
   * @retval {Promise}
   */
  GetClassIdentification()
  {
    let rs = OcaRoot_GetClassIdentification_rs;
    if (!rs) rs = OcaRoot_GetClassIdentification_rs = new signature(OcaClassIdentification);
    const cmd = new CommandRrq(this.ono, 1, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the value of the Lockable property. The return value indicates
   * whether the property was successfully retrieved.
   * @retval {Promise}
   */
  GetLockable()
  {
    let rs = OcaRoot_GetLockable_rs;
    if (!rs) rs = OcaRoot_GetLockable_rs = new signature(BOOLEAN);
    const cmd = new CommandRrq(this.ono, 1, 2, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Locks the object totally, so that it can only be accessed for reading
   * or writing by the lockholder. If the device is read-only locked (by a
   * prior call to LockReadonly()) when Lock() is called by the same
   * lockholder, the lock state is upgraded to total. If the call is from a
   * session other than the lockholder's, the call fails. The return value
   * indicates whether the operation succeeded.
   * @retval {Promise}
   */
  Lock()
  {
    const cmd = new CommandRrq(this.ono, 1, 3, 0);
    return this.device.send_command(cmd);
  }

  /**
   * Unlocks the object so that it can be freely accessed again. This
   * method can only succeed if it is called by the lockholder. The return
   * value indicates whether the operation succeeded.
   * @retval {Promise}
   */
  Unlock()
  {
    const cmd = new CommandRrq(this.ono, 1, 4, 0);
    return this.device.send_command(cmd);
  }

  /**
   * Returns value of Role property. The return value indicates whether the
   * operation succeeded.
   * @retval {Promise}
   */
  GetRole()
  {
    let rs = OcaRoot_GetRole_rs;
    if (!rs) rs = OcaRoot_GetRole_rs = new signature(STRING);
    const cmd = new CommandRrq(this.ono, 1, 5, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Locks the object so that its objects only be modified by the
   * lockholder, but others can still retrieve property values. If the
   * device is locked (by a prior call to Lock() or LockReadonly()) when
   * LockReadonly() is called by the same lockholder, the lock state is set
   * to read-only. If the call is from a session other than the
   * lockholder's, the call fails. The return value indicates whether the
   * operation succeeded.
   * @retval {Promise}
   */
  LockReadonly()
  {
    const cmd = new CommandRrq(this.ono, 1, 6, 0);
    return this.device.send_command(cmd);
  }

  /**
   * General event that is emitted when a property changes. In each setter
   * method (of derived classes) this event must be raised with the proper
   * derived event data structure.
   */
  get OnPropertyChanged()
  {
    const event = this._PropertyChanged;

    if (event) return event;

    const s = new signature(OcaPropertyID, REST);

    return this._PropertyChanged = new Event(this, new OcaEventID(1, 1), s);
  }

  /**
   * Event that is triggered when the value of Lockable changes.
   * @type {PropertyEvent}
   */
  get OnLockableChanged()
  {
    const event = this._LockableChanged;

    if (event) return event;

    return this._LockableChanged =
      new PropertyEvent(this, new OcaPropertyID(1, 4), new signature(BOOLEAN));
  }

  /**
   * Event that is triggered when the value of Role changes.
   * @type {PropertyEvent}
   */
  get OnRoleChanged()
  {
    const event = this._RoleChanged;

    if (event) return event;

    return this._RoleChanged =
      new PropertyEvent(this, new OcaPropertyID(1, 5), new signature(STRING));
  }

  static get_properties()
  {
    if (!OcaRoot_p)
    {
      OcaRoot_p = new Properties([
          new Property("ClassID", new signature(BLOB16), 1, 1, true, true, null),
          new Property("ClassVersion", new signature(UINT16), 1, 2, true, true, null),
          new Property("ObjectNumber", new signature(UINT32), 1, 3, true, false, null),
          new Property("Lockable", new signature(BOOLEAN), 1, 4, true, false, null),
          new Property("Role", new signature(STRING), 1, 5, true, false, null),
        ], 1, ObjectBase.get_properties());
    }

    return OcaRoot_p;
  }

  static GetPropertySync()
  {
    let sync = OcaRoot_sync;
    if (!sync)
    {
      OcaRoot_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._PropertyChanged) event.Dispose();
    if (event = this._LockableChanged) event.Dispose();
    if (event = this._RoleChanged) event.Dispose();
  }
}


let OcaWorker_GetEnabled_rs = null;
let OcaWorker_SetEnabled_as = null;
let OcaWorker_AddPort_as = null;
let OcaWorker_AddPort_rs = null;
let OcaWorker_DeletePort_as = null;
let OcaWorker_GetPorts_rs = null;
let OcaWorker_GetPortName_as = null;
let OcaWorker_GetPortName_rs = null;
let OcaWorker_SetPortName_as = null;
let OcaWorker_GetLabel_rs = null;
let OcaWorker_SetLabel_as = null;
let OcaWorker_GetOwner_rs = null;
let OcaWorker_GetLatency_rs = null;
let OcaWorker_SetLatency_as = null;
let OcaWorker_GetPath_rs = null;
let OcaWorker_p = null;

let OcaWorker_sync = null;

/**
 * Abstract base class for classes that represent the device's
 * application and support functions.
 * @extends OcaRoot
 */
export class OcaWorker extends OcaRoot
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._EnabledChanged = null;
    this._PortsChanged = null;
    this._LabelChanged = null;
    this._OwnerChanged = null;
    this._LatencyChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This is a
   * class property instead of an object property. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Gets the value of the Enabled property. The return value indicates
   * whether the property was successfully retrieved.
   * @retval {Promise}
   */
  GetEnabled()
  {
    let rs = OcaWorker_GetEnabled_rs;
    if (!rs) rs = OcaWorker_GetEnabled_rs = new signature(BOOLEAN);
    const cmd = new CommandRrq(this.ono, 2, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the Enabled property. The return value indicates
   * whether the property was successfully set.
   * @param enabled {OcaBoolean}
   *
   * @retval {Promise}
   */
  SetEnabled(enabled)
  {
    let as = OcaWorker_SetEnabled_as;
    if (!as) as = OcaWorker_SetEnabled_as = new signature(BOOLEAN);
    const cmd = new CommandRrq(this.ono, 2, 2, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Adds an input or output port.. The return value indicates whether the
   * port was successfully added.
   * @param Label {OcaString}
   *
   * @param Mode {OcaPortMode}
   *
   * @retval {Promise}
   */
  AddPort(Label, Mode)
  {
    let as = OcaWorker_AddPort_as;
    if (!as) as = OcaWorker_AddPort_as = new signature(STRING, OcaPortMode);
    let rs = OcaWorker_AddPort_rs;
    if (!rs) rs = OcaWorker_AddPort_rs = new signature(OcaPortID);
    const cmd = new CommandRrq(this.ono, 2, 3, 2,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd, rs);
  }

  /**
   * Deletes an input or output port.. The return value indicates whether
   * the port was successfully deleted.
   * @param ID {OcaPortID}
   *
   * @retval {Promise}
   */
  DeletePort(ID)
  {
    let as = OcaWorker_DeletePort_as;
    if (!as) as = OcaWorker_DeletePort_as = new signature(OcaPortID);
    const cmd = new CommandRrq(this.ono, 2, 4, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the list of ports owned by the Worker object. The return value
   * indicates whether the list was successfully retrieved.
   * @retval {Promise}
   */
  GetPorts()
  {
    let rs = OcaWorker_GetPorts_rs;
    if (!rs) rs = OcaWorker_GetPorts_rs = new signature(LIST(OcaPort));
    const cmd = new CommandRrq(this.ono, 2, 5, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the name of the designated port. The return value indicates
   * whether the name was successfully retrieved.
   * @param PortID {OcaPortID}
   *
   * @retval {Promise}
   */
  GetPortName(PortID)
  {
    let as = OcaWorker_GetPortName_as;
    if (!as) as = OcaWorker_GetPortName_as = new signature(OcaPortID);
    let rs = OcaWorker_GetPortName_rs;
    if (!rs) rs = OcaWorker_GetPortName_rs = new signature(STRING);
    const cmd = new CommandRrq(this.ono, 2, 6, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the name of the designated port. The return value indicates
   * whether the name was successfully set.
   * @param PortID {OcaPortID}
   *
   * @param Name {OcaString}
   *
   * @retval {Promise}
   */
  SetPortName(PortID, Name)
  {
    let as = OcaWorker_SetPortName_as;
    if (!as) as = OcaWorker_SetPortName_as = new signature(OcaPortID, STRING);
    const cmd = new CommandRrq(this.ono, 2, 7, 2,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the value of the Label property. The return value indicates
   * whether the property was successfully retrieved.
   * @retval {Promise}
   */
  GetLabel()
  {
    let rs = OcaWorker_GetLabel_rs;
    if (!rs) rs = OcaWorker_GetLabel_rs = new signature(STRING);
    const cmd = new CommandRrq(this.ono, 2, 8, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the Label property. The return value indicates
   * whether the property was successfully set.
   * @param label {OcaString}
   *
   * @retval {Promise}
   */
  SetLabel(label)
  {
    let as = OcaWorker_SetLabel_as;
    if (!as) as = OcaWorker_SetLabel_as = new signature(STRING);
    const cmd = new CommandRrq(this.ono, 2, 9, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the value of the Owner property. The return value indicates
   * whether the property was successfully retrieved.
   * @retval {Promise}
   */
  GetOwner()
  {
    let rs = OcaWorker_GetOwner_rs;
    if (!rs) rs = OcaWorker_GetOwner_rs = new signature(UINT32);
    const cmd = new CommandRrq(this.ono, 2, 10, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the value of the Latency property. The return value indicates
   * whether the property was successfully retrieved.
   * @retval {Promise}
   */
  GetLatency()
  {
    let rs = OcaWorker_GetLatency_rs;
    if (!rs) rs = OcaWorker_GetLatency_rs = new signature(FLOAT32);
    const cmd = new CommandRrq(this.ono, 2, 11, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the Latency property. The return value indicates
   * whether the property was successfully set.
   * @param latency {OcaTimeInterval}
   *
   * @retval {Promise}
   */
  SetLatency(latency)
  {
    let as = OcaWorker_SetLatency_as;
    if (!as) as = OcaWorker_SetLatency_as = new signature(FLOAT32);
    const cmd = new CommandRrq(this.ono, 2, 12, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Returns path from the given object down to root. The return value
   * indicates whether the operation succeeded. Added in version 2.
   * @retval {Promise}
   */
  GetPath()
  {
    let rs = OcaWorker_GetPath_rs;
    if (!rs) rs = OcaWorker_GetPath_rs = new signature(LIST(STRING), LIST(UINT32));
    const cmd = new CommandRrq(this.ono, 2, 13, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Event that is triggered when the value of Enabled changes.
   * @type {PropertyEvent}
   */
  get OnEnabledChanged()
  {
    const event = this._EnabledChanged;

    if (event) return event;

    return this._EnabledChanged =
      new PropertyEvent(this, new OcaPropertyID(2, 1), new signature(BOOLEAN));
  }

  /**
   * Event that is triggered when the value of Ports changes.
   * @type {PropertyEvent}
   */
  get OnPortsChanged()
  {
    const event = this._PortsChanged;

    if (event) return event;

    return this._PortsChanged =
      new PropertyEvent(this, new OcaPropertyID(2, 2), new signature(LIST(OcaPort)));
  }

  /**
   * Event that is triggered when the value of Label changes.
   * @type {PropertyEvent}
   */
  get OnLabelChanged()
  {
    const event = this._LabelChanged;

    if (event) return event;

    return this._LabelChanged =
      new PropertyEvent(this, new OcaPropertyID(2, 3), new signature(STRING));
  }

  /**
   * Event that is triggered when the value of Owner changes.
   * @type {PropertyEvent}
   */
  get OnOwnerChanged()
  {
    const event = this._OwnerChanged;

    if (event) return event;

    return this._OwnerChanged =
      new PropertyEvent(this, new OcaPropertyID(2, 4), new signature(UINT32));
  }

  /**
   * Event that is triggered when the value of Latency changes.
   * @type {PropertyEvent}
   */
  get OnLatencyChanged()
  {
    const event = this._LatencyChanged;

    if (event) return event;

    return this._LatencyChanged =
      new PropertyEvent(this, new OcaPropertyID(2, 5), new signature(FLOAT32));
  }

  static get_properties()
  {
    if (!OcaWorker_p)
    {
      OcaWorker_p = new Properties([
          new Property("Enabled", new signature(BOOLEAN), 2, 1, false, false, null),
          new Property("Ports", new signature(LIST(OcaPort)), 2, 2, false, false, null),
          new Property("Label", new signature(STRING), 2, 3, false, false, null),
          new Property("Owner", new signature(UINT32), 2, 4, false, false, null),
          new Property("Latency", new signature(FLOAT32), 2, 5, false, false, null),
        ], 2, OcaRoot.get_properties());
    }

    return OcaWorker_p;
  }

  static GetPropertySync()
  {
    let sync = OcaWorker_sync;
    if (!sync)
    {
      OcaWorker_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._EnabledChanged) event.Dispose();
    if (event = this._PortsChanged) event.Dispose();
    if (event = this._LabelChanged) event.Dispose();
    if (event = this._OwnerChanged) event.Dispose();
    if (event = this._LatencyChanged) event.Dispose();
  }
}


let OcaActuator_p = null;

let OcaActuator_sync = null;

/**
 * Abstract base class for all actuators (i.e. devices that affect the
 * routing and/or content of the audio signal, or provide ancillary
 * functions such as power).
 * @extends OcaWorker
 */
export class OcaActuator extends OcaWorker
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
  }

  /**
   * This property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0001";
  }

  /**
   * This property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  static get_properties()
  {
    if (!OcaActuator_p)
    {
      OcaActuator_p = new Properties([
        ], 3, OcaWorker.get_properties());
    }

    return OcaActuator_p;
  }

  static GetPropertySync()
  {
    let sync = OcaActuator_sync;
    if (!sync)
    {
      OcaActuator_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
  }
}


let OcaMute_GetState_rs = null;
let OcaMute_SetState_as = null;
let OcaMute_p = null;

let OcaMute_sync = null;

/**
 * Signal mute.
 * @extends OcaActuator
 */
export class OcaMute extends OcaActuator
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._StateChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0001\u0002";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Gets the current mute state. The return value indicates whether the
   * state was successfully retrieved.
   * @retval {Promise}
   */
  GetState()
  {
    let rs = OcaMute_GetState_rs;
    if (!rs) rs = OcaMute_GetState_rs = new signature(OcaMuteState);
    const cmd = new CommandRrq(this.ono, 4, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the mute state (i.e. value of the State property). The return
   * value indicates whether the state was successfully set.
   * @param state {OcaMuteState}
   *
   * @retval {Promise}
   */
  SetState(state)
  {
    let as = OcaMute_SetState_as;
    if (!as) as = OcaMute_SetState_as = new signature(OcaMuteState);
    const cmd = new CommandRrq(this.ono, 4, 2, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Event that is triggered when the value of State changes.
   * @type {PropertyEvent}
   */
  get OnStateChanged()
  {
    const event = this._StateChanged;

    if (event) return event;

    return this._StateChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 1), new signature(OcaMuteState));
  }

  static get_properties()
  {
    if (!OcaMute_p)
    {
      OcaMute_p = new Properties([
          new Property("State", new signature(OcaMuteState), 4, 1, false, false, null),
        ], 4, OcaActuator.get_properties());
    }

    return OcaMute_p;
  }

  static GetPropertySync()
  {
    let sync = OcaMute_sync;
    if (!sync)
    {
      OcaMute_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._StateChanged) event.Dispose();
  }
}


let OcaPolarity_GetState_rs = null;
let OcaPolarity_SetState_as = null;
let OcaPolarity_p = null;

let OcaPolarity_sync = null;

/**
 * Signal inverter
 * @extends OcaActuator
 */
export class OcaPolarity extends OcaActuator
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._StateChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0001\u0003";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Gets the current inverter state. The return value indicates whether
   * the state was successfully retrieved.
   * @retval {Promise}
   */
  GetState()
  {
    let rs = OcaPolarity_GetState_rs;
    if (!rs) rs = OcaPolarity_GetState_rs = new signature(OcaPolarityState);
    const cmd = new CommandRrq(this.ono, 4, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the inversion state (i.e. value of the State property). The
   * return value indicates whether the state was successfully set.
   * @param state {OcaPolarityState}
   *
   * @retval {Promise}
   */
  SetState(state)
  {
    let as = OcaPolarity_SetState_as;
    if (!as) as = OcaPolarity_SetState_as = new signature(OcaPolarityState);
    const cmd = new CommandRrq(this.ono, 4, 2, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Event that is triggered when the value of State changes.
   * @type {PropertyEvent}
   */
  get OnStateChanged()
  {
    const event = this._StateChanged;

    if (event) return event;

    return this._StateChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 1), new signature(OcaPolarityState));
  }

  static get_properties()
  {
    if (!OcaPolarity_p)
    {
      OcaPolarity_p = new Properties([
          new Property("State", new signature(OcaPolarityState), 4, 1, false, false, null),
        ], 4, OcaActuator.get_properties());
    }

    return OcaPolarity_p;
  }

  static GetPropertySync()
  {
    let sync = OcaPolarity_sync;
    if (!sync)
    {
      OcaPolarity_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._StateChanged) event.Dispose();
  }
}


let OcaSwitch_GetPosition_rs = null;
let OcaSwitch_SetPosition_as = null;
let OcaSwitch_GetPositionName_as = null;
let OcaSwitch_GetPositionName_rs = null;
let OcaSwitch_SetPositionName_as = null;
let OcaSwitch_GetPositionNames_rs = null;
let OcaSwitch_SetPositionNames_as = null;
let OcaSwitch_GetPositionEnabled_as = null;
let OcaSwitch_GetPositionEnabled_rs = null;
let OcaSwitch_SetPositionEnabled_as = null;
let OcaSwitch_GetPositionEnableds_rs = null;
let OcaSwitch_SetPositionEnableds_as = null;
let OcaSwitch_p = null;

let OcaSwitch_sync = null;

/**
 * (n)-position single-pole switch.
 * @extends OcaActuator
 */
export class OcaSwitch extends OcaActuator
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._PositionChanged = null;
    this._PositionNamesChanged = null;
    this._PositionEnableChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0001\u0004";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Gets the value of the Position property and, optionally, its
   * implementation min and max. The return value indicates whether the
   * data was successfully retrieved.
   * @retval {Promise}
   */
  GetPosition()
  {
    let rs = OcaSwitch_GetPosition_rs;
    if (!rs) rs = OcaSwitch_GetPosition_rs = new signature(UINT16, UINT16, UINT16);
    const cmd = new CommandRrq(this.ono, 4, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the Position property. The return value indicates
   * whether the property was successfully set.
   * @param position {OcaUint16}
   *
   * @retval {Promise}
   */
  SetPosition(position)
  {
    let as = OcaSwitch_SetPosition_as;
    if (!as) as = OcaSwitch_SetPosition_as = new signature(UINT16);
    const cmd = new CommandRrq(this.ono, 4, 2, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the name assigned to a given switch position. The return value
   * indicates whether the name was successfully retrieved.
   * @param Index {OcaUint16}
   *
   * @retval {Promise}
   */
  GetPositionName(Index)
  {
    let as = OcaSwitch_GetPositionName_as;
    if (!as) as = OcaSwitch_GetPositionName_as = new signature(UINT16);
    let rs = OcaSwitch_GetPositionName_rs;
    if (!rs) rs = OcaSwitch_GetPositionName_rs = new signature(STRING);
    const cmd = new CommandRrq(this.ono, 4, 3, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd, rs);
  }

  /**
   * Assigns a name to a given switch position. The return value indicates
   * whether the name was successfully assigned.
   * @param Index {OcaUint16}
   *
   * @param Name {OcaString}
   *
   * @retval {Promise}
   */
  SetPositionName(Index, Name)
  {
    let as = OcaSwitch_SetPositionName_as;
    if (!as) as = OcaSwitch_SetPositionName_as = new signature(UINT16, STRING);
    const cmd = new CommandRrq(this.ono, 4, 4, 2,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets list of names assigned to the switch's positions. The return
   * value indicates whether the names were successfully retrieved.
   * @retval {Promise}
   */
  GetPositionNames()
  {
    let rs = OcaSwitch_GetPositionNames_rs;
    if (!rs) rs = OcaSwitch_GetPositionNames_rs = new signature(LIST(STRING));
    const cmd = new CommandRrq(this.ono, 4, 5, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Assigns names to the switch's positions. The return value indicates
   * whether the names were successfully assigned.
   * @param Names {OcaList}
   *
   * @retval {Promise}
   */
  SetPositionNames(Names)
  {
    let as = OcaSwitch_SetPositionNames_as;
    if (!as) as = OcaSwitch_SetPositionNames_as = new signature(LIST(STRING));
    const cmd = new CommandRrq(this.ono, 4, 6, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the Enabled flag assigned to a given switch position. The return
   * value indicates whether the flag was successfully retrieved.
   * @param Index {OcaUint16}
   *
   * @retval {Promise}
   */
  GetPositionEnabled(Index)
  {
    let as = OcaSwitch_GetPositionEnabled_as;
    if (!as) as = OcaSwitch_GetPositionEnabled_as = new signature(UINT16);
    let rs = OcaSwitch_GetPositionEnabled_rs;
    if (!rs) rs = OcaSwitch_GetPositionEnabled_rs = new signature(BOOLEAN);
    const cmd = new CommandRrq(this.ono, 4, 7, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the Enabled flag assigned to a given switch position. The return
   * value indicates whether the flag was successfully set.
   * @param Index {OcaUint16}
   *
   * @param enabled {OcaBoolean}
   *
   * @retval {Promise}
   */
  SetPositionEnabled(Index, enabled)
  {
    let as = OcaSwitch_SetPositionEnabled_as;
    if (!as) as = OcaSwitch_SetPositionEnabled_as = new signature(UINT16, BOOLEAN);
    const cmd = new CommandRrq(this.ono, 4, 8, 2,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets list of Enabled flags assigned to the switch's positions. The
   * return value indicates whether the flags were successfully retrieved.
   * @retval {Promise}
   */
  GetPositionEnableds()
  {
    let rs = OcaSwitch_GetPositionEnableds_rs;
    if (!rs) rs = OcaSwitch_GetPositionEnableds_rs = new signature(LIST(BOOLEAN));
    const cmd = new CommandRrq(this.ono, 4, 9, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets list of Enabled flags for the switch's positions. The return
   * value indicates whether the flags were successfully set.
   * @param enableds {OcaList}
   *
   * @retval {Promise}
   */
  SetPositionEnableds(enableds)
  {
    let as = OcaSwitch_SetPositionEnableds_as;
    if (!as) as = OcaSwitch_SetPositionEnableds_as = new signature(LIST(BOOLEAN));
    const cmd = new CommandRrq(this.ono, 4, 10, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Event that is triggered when the value of Position changes.
   * @type {PropertyEvent}
   */
  get OnPositionChanged()
  {
    const event = this._PositionChanged;

    if (event) return event;

    return this._PositionChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 1), new signature(UINT16));
  }

  /**
   * Event that is triggered when the value of PositionNames changes.
   * @type {PropertyEvent}
   */
  get OnPositionNamesChanged()
  {
    const event = this._PositionNamesChanged;

    if (event) return event;

    return this._PositionNamesChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 2), new signature(LIST(STRING)));
  }

  /**
   * Event that is triggered when the value of PositionEnable changes.
   * @type {PropertyEvent}
   */
  get OnPositionEnableChanged()
  {
    const event = this._PositionEnableChanged;

    if (event) return event;

    return this._PositionEnableChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 3), new signature(LIST(BOOLEAN)));
  }

  static get_properties()
  {
    if (!OcaSwitch_p)
    {
      OcaSwitch_p = new Properties([
          new Property("Position", new signature(UINT16), 4, 1, false, false, null),
          new Property("PositionNames", new signature(LIST(STRING)), 4, 2, false, false, null),
          new Property("PositionEnable", new signature(LIST(BOOLEAN)), 4, 3, false, false, null),
        ], 4, OcaActuator.get_properties());
    }

    return OcaSwitch_p;
  }

  static GetPropertySync()
  {
    let sync = OcaSwitch_sync;
    if (!sync)
    {
      OcaSwitch_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._PositionChanged) event.Dispose();
    if (event = this._PositionNamesChanged) event.Dispose();
    if (event = this._PositionEnableChanged) event.Dispose();
  }
}


let OcaGain_GetGain_rs = null;
let OcaGain_SetGain_as = null;
let OcaGain_p = null;

let OcaGain_sync = null;

/**
 * Gain (or attenuation) element.
 * @extends OcaActuator
 */
export class OcaGain extends OcaActuator
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._GainChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0001\u0005";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Gets the value and limits of the Gain property. The return value
   * indicates whether the data was successfully retrieved.
   * @retval {Promise}
   */
  GetGain()
  {
    let rs = OcaGain_GetGain_rs;
    if (!rs) rs = OcaGain_GetGain_rs = new signature(FLOAT32, FLOAT32, FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the Gain property. The return value indicates
   * whether the property was successfully set.
   * @param Gain {OcaDB}
   *
   * @retval {Promise}
   */
  SetGain(Gain)
  {
    let as = OcaGain_SetGain_as;
    if (!as) as = OcaGain_SetGain_as = new signature(FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 2, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Event that is triggered when the value of Gain changes.
   * @type {PropertyEvent}
   */
  get OnGainChanged()
  {
    const event = this._GainChanged;

    if (event) return event;

    return this._GainChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 1), new signature(FLOAT32));
  }

  static get_properties()
  {
    if (!OcaGain_p)
    {
      OcaGain_p = new Properties([
          new Property("Gain", new signature(FLOAT32), 4, 1, false, false, null),
        ], 4, OcaActuator.get_properties());
    }

    return OcaGain_p;
  }

  static GetPropertySync()
  {
    let sync = OcaGain_sync;
    if (!sync)
    {
      OcaGain_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._GainChanged) event.Dispose();
  }
}


let OcaPanBalance_GetPosition_rs = null;
let OcaPanBalance_SetPosition_as = null;
let OcaPanBalance_GetMidpointGain_rs = null;
let OcaPanBalance_SetMidpointGain_as = null;
let OcaPanBalance_p = null;

let OcaPanBalance_sync = null;

/**
 * Pan or Balance control.
 * @extends OcaActuator
 */
export class OcaPanBalance extends OcaActuator
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._PositionChanged = null;
    this._MidpointGainChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0001\u0006";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Gets the value and limits of the Position property. The return value
   * indicates whether the data was successfully retrieved.
   * @retval {Promise}
   */
  GetPosition()
  {
    let rs = OcaPanBalance_GetPosition_rs;
    if (!rs) rs = OcaPanBalance_GetPosition_rs = new signature(FLOAT32, FLOAT32, FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the Position property. The return value indicates
   * whether the property was successfully set.
   * @param Position {OcaFloat32}
   *
   * @retval {Promise}
   */
  SetPosition(Position)
  {
    let as = OcaPanBalance_SetPosition_as;
    if (!as) as = OcaPanBalance_SetPosition_as = new signature(FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 2, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the value and limits of the MidpointGain property. The return
   * value indicates whether the data was successfully retrieved.
   * @retval {Promise}
   */
  GetMidpointGain()
  {
    let rs = OcaPanBalance_GetMidpointGain_rs;
    if (!rs) rs = OcaPanBalance_GetMidpointGain_rs = new signature(FLOAT32, FLOAT32, FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 3, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the MidpointGain property. The return value
   * indicates whether the property was successfully set.
   * @param Gain {OcaDB}
   *
   * @retval {Promise}
   */
  SetMidpointGain(Gain)
  {
    let as = OcaPanBalance_SetMidpointGain_as;
    if (!as) as = OcaPanBalance_SetMidpointGain_as = new signature(FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 4, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Event that is triggered when the value of Position changes.
   * @type {PropertyEvent}
   */
  get OnPositionChanged()
  {
    const event = this._PositionChanged;

    if (event) return event;

    return this._PositionChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 1), new signature(FLOAT32));
  }

  /**
   * Event that is triggered when the value of MidpointGain changes.
   * @type {PropertyEvent}
   */
  get OnMidpointGainChanged()
  {
    const event = this._MidpointGainChanged;

    if (event) return event;

    return this._MidpointGainChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 2), new signature(FLOAT32));
  }

  static get_properties()
  {
    if (!OcaPanBalance_p)
    {
      OcaPanBalance_p = new Properties([
          new Property("Position", new signature(FLOAT32), 4, 1, false, false, null),
          new Property("MidpointGain", new signature(FLOAT32), 4, 2, false, false, null),
        ], 4, OcaActuator.get_properties());
    }

    return OcaPanBalance_p;
  }

  static GetPropertySync()
  {
    let sync = OcaPanBalance_sync;
    if (!sync)
    {
      OcaPanBalance_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._PositionChanged) event.Dispose();
    if (event = this._MidpointGainChanged) event.Dispose();
  }
}


let OcaDelay_GetDelayTime_rs = null;
let OcaDelay_SetDelayTime_as = null;
let OcaDelay_p = null;

let OcaDelay_sync = null;

/**
 * Signal delay - basic version.
 * @extends OcaActuator
 */
export class OcaDelay extends OcaActuator
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._DelayTimeChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0001\u0007";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Gets the value of the DelayTime property. The return value indicates
   * whether the property was successfully retrieved.
   * @retval {Promise}
   */
  GetDelayTime()
  {
    let rs = OcaDelay_GetDelayTime_rs;
    if (!rs) rs = OcaDelay_GetDelayTime_rs = new signature(FLOAT32, FLOAT32, FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the DelayTime property. The return value indicates
   * whether the property was successfully set.
   * @param delayTime {OcaTimeInterval}
   *
   * @retval {Promise}
   */
  SetDelayTime(delayTime)
  {
    let as = OcaDelay_SetDelayTime_as;
    if (!as) as = OcaDelay_SetDelayTime_as = new signature(FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 2, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Event that is triggered when the value of DelayTime changes.
   * @type {PropertyEvent}
   */
  get OnDelayTimeChanged()
  {
    const event = this._DelayTimeChanged;

    if (event) return event;

    return this._DelayTimeChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 1), new signature(FLOAT32));
  }

  static get_properties()
  {
    if (!OcaDelay_p)
    {
      OcaDelay_p = new Properties([
          new Property("DelayTime", new signature(FLOAT32), 4, 1, false, false, null),
        ], 4, OcaActuator.get_properties());
    }

    return OcaDelay_p;
  }

  static GetPropertySync()
  {
    let sync = OcaDelay_sync;
    if (!sync)
    {
      OcaDelay_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._DelayTimeChanged) event.Dispose();
  }
}


let OcaDelayExtended_GetDelayValue_rs = null;
let OcaDelayExtended_SetDelayValue_as = null;
let OcaDelayExtended_GetDelayValueConverted_as = null;
let OcaDelayExtended_GetDelayValueConverted_rs = null;
let OcaDelayExtended_p = null;

let OcaDelayExtended_sync = null;

/**
 * Signal delay - extended version. Allows setting delay value in various
 * units. Note that the inherited property 04p01 DelayTime is also
 * supported by this class and reflects actual achieved delay in seconds.
 * @extends OcaDelay
 */
export class OcaDelayExtended extends OcaDelay
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._DelayValueChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0001\u0007\u0001";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Gets the value of the DelayValue property. The return value indicates
   * whether the property was successfully retrieved.
   * @retval {Promise}
   */
  GetDelayValue()
  {
    let rs = OcaDelayExtended_GetDelayValue_rs;
    if (!rs) rs = OcaDelayExtended_GetDelayValue_rs = new signature(OcaDelayValue, OcaDelayValue, OcaDelayValue);
    const cmd = new CommandRrq(this.ono, 5, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the DelayValue property. The return value indicates
   * whether the property was successfully set.
   * @param Value {OcaDelayValue}
   *
   * @retval {Promise}
   */
  SetDelayValue(Value)
  {
    let as = OcaDelayExtended_SetDelayValue_as;
    if (!as) as = OcaDelayExtended_SetDelayValue_as = new signature(OcaDelayValue);
    const cmd = new CommandRrq(this.ono, 5, 2, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Return current delay setting, converted to given units. The return
   * value indicates whether the method has succeeded.
   * @param UoM {OcaDelayUnit}
   *
   * @retval {Promise}
   */
  GetDelayValueConverted(UoM)
  {
    let as = OcaDelayExtended_GetDelayValueConverted_as;
    if (!as) as = OcaDelayExtended_GetDelayValueConverted_as = new signature(OcaDelayUnit);
    let rs = OcaDelayExtended_GetDelayValueConverted_rs;
    if (!rs) rs = OcaDelayExtended_GetDelayValueConverted_rs = new signature(OcaDelayValue);
    const cmd = new CommandRrq(this.ono, 5, 3, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd, rs);
  }

  /**
   * Event that is triggered when the value of DelayValue changes.
   * @type {PropertyEvent}
   */
  get OnDelayValueChanged()
  {
    const event = this._DelayValueChanged;

    if (event) return event;

    return this._DelayValueChanged =
      new PropertyEvent(this, new OcaPropertyID(5, 1), new signature(OcaDelayValue));
  }

  static get_properties()
  {
    if (!OcaDelayExtended_p)
    {
      OcaDelayExtended_p = new Properties([
          new Property("DelayValue", new signature(OcaDelayValue), 5, 1, false, false, null),
        ], 5, OcaDelay.get_properties());
    }

    return OcaDelayExtended_p;
  }

  static GetPropertySync()
  {
    let sync = OcaDelayExtended_sync;
    if (!sync)
    {
      OcaDelayExtended_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._DelayValueChanged) event.Dispose();
  }
}


let OcaFrequencyActuator_GetFrequency_rs = null;
let OcaFrequencyActuator_SetFrequency_as = null;
let OcaFrequencyActuator_p = null;

let OcaFrequencyActuator_sync = null;

/**
 * Simple frequency actuator.
 * @extends OcaActuator
 */
export class OcaFrequencyActuator extends OcaActuator
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._FrequencyChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0001\b";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Gets the value of the Frequency property. The return value indicates
   * whether the property was successfully retrieved.
   * @retval {Promise}
   */
  GetFrequency()
  {
    let rs = OcaFrequencyActuator_GetFrequency_rs;
    if (!rs) rs = OcaFrequencyActuator_GetFrequency_rs = new signature(FLOAT32, FLOAT32, FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the Frequency property. The return value indicates
   * whether the property was successfully set.
   * @param Frequency {OcaFrequency}
   *
   * @retval {Promise}
   */
  SetFrequency(Frequency)
  {
    let as = OcaFrequencyActuator_SetFrequency_as;
    if (!as) as = OcaFrequencyActuator_SetFrequency_as = new signature(FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 2, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Event that is triggered when the value of Frequency changes.
   * @type {PropertyEvent}
   */
  get OnFrequencyChanged()
  {
    const event = this._FrequencyChanged;

    if (event) return event;

    return this._FrequencyChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 1), new signature(FLOAT32));
  }

  static get_properties()
  {
    if (!OcaFrequencyActuator_p)
    {
      OcaFrequencyActuator_p = new Properties([
          new Property("Frequency", new signature(FLOAT32), 4, 1, false, false, null),
        ], 4, OcaActuator.get_properties());
    }

    return OcaFrequencyActuator_p;
  }

  static GetPropertySync()
  {
    let sync = OcaFrequencyActuator_sync;
    if (!sync)
    {
      OcaFrequencyActuator_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._FrequencyChanged) event.Dispose();
  }
}


let OcaFilterClassical_GetFrequency_rs = null;
let OcaFilterClassical_SetFrequency_as = null;
let OcaFilterClassical_GetPassband_rs = null;
let OcaFilterClassical_SetPassband_as = null;
let OcaFilterClassical_GetShape_rs = null;
let OcaFilterClassical_SetShape_as = null;
let OcaFilterClassical_GetOrder_rs = null;
let OcaFilterClassical_SetOrder_as = null;
let OcaFilterClassical_GetParameter_rs = null;
let OcaFilterClassical_SetParameter_as = null;
let OcaFilterClassical_p = null;

let OcaFilterClassical_sync = null;

/**
 * A classical analog-style filter - highpass, lowpass, bandpass, etc.,
 * with shape characteristics such as Butterworth, Chebyshev, Bessel, and
 * Linkwitz-Riley. Frequently used in loudspeaker crossover networks.
 * @extends OcaActuator
 */
export class OcaFilterClassical extends OcaActuator
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._FrequencyChanged = null;
    this._PassbandChanged = null;
    this._ShapeChanged = null;
    this._OrderChanged = null;
    this._ParameterChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0001\t";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Gets the value of the Frequency property. The return value indicates
   * if the property was successfully retrieved.
   * @retval {Promise}
   */
  GetFrequency()
  {
    let rs = OcaFilterClassical_GetFrequency_rs;
    if (!rs) rs = OcaFilterClassical_GetFrequency_rs = new signature(FLOAT32, FLOAT32, FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the Frequency property. The return value indicates
   * if the property was successfully set.
   * @param frequency {OcaFrequency}
   *
   * @retval {Promise}
   */
  SetFrequency(frequency)
  {
    let as = OcaFilterClassical_SetFrequency_as;
    if (!as) as = OcaFilterClassical_SetFrequency_as = new signature(FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 2, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Returns the passband specification of the filter object. The return
   * value indicates if the specification was successfully retrieved.
   * @retval {Promise}
   */
  GetPassband()
  {
    let rs = OcaFilterClassical_GetPassband_rs;
    if (!rs) rs = OcaFilterClassical_GetPassband_rs = new signature(OcaFilterPassband);
    const cmd = new CommandRrq(this.ono, 4, 3, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the passband specification of the filter object. The return value
   * indicates if the specification was successfully set.
   * @param Passband {OcaFilterPassband}
   *
   * @retval {Promise}
   */
  SetPassband(Passband)
  {
    let as = OcaFilterClassical_SetPassband_as;
    if (!as) as = OcaFilterClassical_SetPassband_as = new signature(OcaFilterPassband);
    const cmd = new CommandRrq(this.ono, 4, 4, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Returns the Shape property of the filter. The return value indicates
   * if the property was successfully retrieved.
   * @retval {Promise}
   */
  GetShape()
  {
    let rs = OcaFilterClassical_GetShape_rs;
    if (!rs) rs = OcaFilterClassical_GetShape_rs = new signature(OcaClassicalFilterShape);
    const cmd = new CommandRrq(this.ono, 4, 5, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the Shape property of the filter. The return value indicates if
   * the property was successfully set.
   * @param Shape {OcaClassicalFilterShape}
   *
   * @retval {Promise}
   */
  SetShape(Shape)
  {
    let as = OcaFilterClassical_SetShape_as;
    if (!as) as = OcaFilterClassical_SetShape_as = new signature(OcaClassicalFilterShape);
    const cmd = new CommandRrq(this.ono, 4, 6, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Returns the order of the filter. The return value indicates if the
   * property was successfully retrieved.
   * @retval {Promise}
   */
  GetOrder()
  {
    let rs = OcaFilterClassical_GetOrder_rs;
    if (!rs) rs = OcaFilterClassical_GetOrder_rs = new signature(UINT16, UINT16, UINT16);
    const cmd = new CommandRrq(this.ono, 4, 7, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the order of the filter. The return value indicates if the
   * property was successfully set.
   * @param Order {OcaUint16}
   *
   * @retval {Promise}
   */
  SetOrder(Order)
  {
    let as = OcaFilterClassical_SetOrder_as;
    if (!as) as = OcaFilterClassical_SetOrder_as = new signature(UINT16);
    const cmd = new CommandRrq(this.ono, 4, 8, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Returns the filter parameter. The return value indicates if the
   * property was successfully retrieved.
   * @retval {Promise}
   */
  GetParameter()
  {
    let rs = OcaFilterClassical_GetParameter_rs;
    if (!rs) rs = OcaFilterClassical_GetParameter_rs = new signature(FLOAT32, FLOAT32, FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 9, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the filter parameter. The return value indicates if the parameter
   * was successfully set.
   * @param Parameter {OcaFloat32}
   *
   * @retval {Promise}
   */
  SetParameter(Parameter)
  {
    let as = OcaFilterClassical_SetParameter_as;
    if (!as) as = OcaFilterClassical_SetParameter_as = new signature(FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 10, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Event that is triggered when the value of Frequency changes.
   * @type {PropertyEvent}
   */
  get OnFrequencyChanged()
  {
    const event = this._FrequencyChanged;

    if (event) return event;

    return this._FrequencyChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 1), new signature(FLOAT32));
  }

  /**
   * Event that is triggered when the value of Passband changes.
   * @type {PropertyEvent}
   */
  get OnPassbandChanged()
  {
    const event = this._PassbandChanged;

    if (event) return event;

    return this._PassbandChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 2), new signature(OcaFilterPassband));
  }

  /**
   * Event that is triggered when the value of Shape changes.
   * @type {PropertyEvent}
   */
  get OnShapeChanged()
  {
    const event = this._ShapeChanged;

    if (event) return event;

    return this._ShapeChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 3), new signature(OcaClassicalFilterShape));
  }

  /**
   * Event that is triggered when the value of Order changes.
   * @type {PropertyEvent}
   */
  get OnOrderChanged()
  {
    const event = this._OrderChanged;

    if (event) return event;

    return this._OrderChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 4), new signature(UINT16));
  }

  /**
   * Event that is triggered when the value of Parameter changes.
   * @type {PropertyEvent}
   */
  get OnParameterChanged()
  {
    const event = this._ParameterChanged;

    if (event) return event;

    return this._ParameterChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 5), new signature(FLOAT32));
  }

  static get_properties()
  {
    if (!OcaFilterClassical_p)
    {
      OcaFilterClassical_p = new Properties([
          new Property("Frequency", new signature(FLOAT32), 4, 1, false, false, null),
          new Property("Passband", new signature(OcaFilterPassband), 4, 2, false, false, null),
          new Property("Shape", new signature(OcaClassicalFilterShape), 4, 3, false, false, null),
          new Property("Order", new signature(UINT16), 4, 4, false, false, null),
          new Property("Parameter", new signature(FLOAT32), 4, 5, false, false, null),
        ], 4, OcaActuator.get_properties());
    }

    return OcaFilterClassical_p;
  }

  static GetPropertySync()
  {
    let sync = OcaFilterClassical_sync;
    if (!sync)
    {
      OcaFilterClassical_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._FrequencyChanged) event.Dispose();
    if (event = this._PassbandChanged) event.Dispose();
    if (event = this._ShapeChanged) event.Dispose();
    if (event = this._OrderChanged) event.Dispose();
    if (event = this._ParameterChanged) event.Dispose();
  }
}


let OcaFilterParametric_GetFrequency_rs = null;
let OcaFilterParametric_SetFrequency_as = null;
let OcaFilterParametric_GetShape_rs = null;
let OcaFilterParametric_SetShape_as = null;
let OcaFilterParametric_GetWidthParameter_rs = null;
let OcaFilterParametric_SetWidthParameter_as = null;
let OcaFilterParametric_GetInbandGain_rs = null;
let OcaFilterParametric_SetInbandgain_as = null;
let OcaFilterParametric_GetShapeParameter_rs = null;
let OcaFilterParametric_SetShapeParameter_as = null;
let OcaFilterParametric_p = null;

let OcaFilterParametric_sync = null;

/**
 * A parametric equalizer section with various shape options.
 * @extends OcaActuator
 */
export class OcaFilterParametric extends OcaActuator
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._FrequencyChanged = null;
    this._ShapeChanged = null;
    this._WidthParameterChanged = null;
    this._InBandGainChanged = null;
    this._ShapeParameterChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0001\n";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Gets the equalizer frequency setpoint. The return value indicates
   * whether the data was successfully retrieved.
   * @retval {Promise}
   */
  GetFrequency()
  {
    let rs = OcaFilterParametric_GetFrequency_rs;
    if (!rs) rs = OcaFilterParametric_GetFrequency_rs = new signature(FLOAT32, FLOAT32, FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the equalizer frequency. The return value indicates whether the
   * value was successfully set.
   * @param Frequency {OcaFrequency}
   *
   * @retval {Promise}
   */
  SetFrequency(Frequency)
  {
    let as = OcaFilterParametric_SetFrequency_as;
    if (!as) as = OcaFilterParametric_SetFrequency_as = new signature(FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 2, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the curve shape of the equalizer. The return value indicates
   * whether the data was successfully retrieved.
   * @retval {Promise}
   */
  GetShape()
  {
    let rs = OcaFilterParametric_GetShape_rs;
    if (!rs) rs = OcaFilterParametric_GetShape_rs = new signature(OcaParametricEQShape);
    const cmd = new CommandRrq(this.ono, 4, 3, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the curve shape shape of the equalizer. The return value
   * indicates whether the shape was successfully set.
   * @param type {OcaParametricEQShape}
   *
   * @retval {Promise}
   */
  SetShape(type)
  {
    let as = OcaFilterParametric_SetShape_as;
    if (!as) as = OcaFilterParametric_SetShape_as = new signature(OcaParametricEQShape);
    const cmd = new CommandRrq(this.ono, 4, 4, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the width parameter property of the equalizer. The return value
   * indicates whether the data was successfully retrieved.
   * @retval {Promise}
   */
  GetWidthParameter()
  {
    let rs = OcaFilterParametric_GetWidthParameter_rs;
    if (!rs) rs = OcaFilterParametric_GetWidthParameter_rs = new signature(FLOAT32, FLOAT32, FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 5, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the width parameter property of the equalizer. The return value
   * indicates whether the Q was successfully set.
   * @param Width {OcaFloat32}
   *
   * @retval {Promise}
   */
  SetWidthParameter(Width)
  {
    let as = OcaFilterParametric_SetWidthParameter_as;
    if (!as) as = OcaFilterParametric_SetWidthParameter_as = new signature(FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 6, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Returns the in-band gain of the equalizer. The return value indicates
   * whether the data was successfully retrieved.
   * @retval {Promise}
   */
  GetInbandGain()
  {
    let rs = OcaFilterParametric_GetInbandGain_rs;
    if (!rs) rs = OcaFilterParametric_GetInbandGain_rs = new signature(FLOAT32, FLOAT32, FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 7, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the in-band gain of the equalizer. The return value indicates
   * whether the gain was successfully set.
   * @param gain {OcaDB}
   *
   * @retval {Promise}
   */
  SetInbandgain(gain)
  {
    let as = OcaFilterParametric_SetInbandgain_as;
    if (!as) as = OcaFilterParametric_SetInbandgain_as = new signature(FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 8, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Returns the shape parameter of the equalizer. The return value
   * indicates whether the data was successfully retrieved.
   * @retval {Promise}
   */
  GetShapeParameter()
  {
    let rs = OcaFilterParametric_GetShapeParameter_rs;
    if (!rs) rs = OcaFilterParametric_GetShapeParameter_rs = new signature(FLOAT32, FLOAT32, FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 9, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the shape parameter of the equalizer. The return value indicates
   * whether the parameter was successfully set.
   * @param shape {OcaFloat32}
   *
   * @retval {Promise}
   */
  SetShapeParameter(shape)
  {
    let as = OcaFilterParametric_SetShapeParameter_as;
    if (!as) as = OcaFilterParametric_SetShapeParameter_as = new signature(FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 10, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Event that is triggered when the value of Frequency changes.
   * @type {PropertyEvent}
   */
  get OnFrequencyChanged()
  {
    const event = this._FrequencyChanged;

    if (event) return event;

    return this._FrequencyChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 1), new signature(FLOAT32));
  }

  /**
   * Event that is triggered when the value of Shape changes.
   * @type {PropertyEvent}
   */
  get OnShapeChanged()
  {
    const event = this._ShapeChanged;

    if (event) return event;

    return this._ShapeChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 2), new signature(OcaParametricEQShape));
  }

  /**
   * Event that is triggered when the value of WidthParameter changes.
   * @type {PropertyEvent}
   */
  get OnWidthParameterChanged()
  {
    const event = this._WidthParameterChanged;

    if (event) return event;

    return this._WidthParameterChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 3), new signature(FLOAT32));
  }

  /**
   * Event that is triggered when the value of InBandGain changes.
   * @type {PropertyEvent}
   */
  get OnInBandGainChanged()
  {
    const event = this._InBandGainChanged;

    if (event) return event;

    return this._InBandGainChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 4), new signature(FLOAT32));
  }

  /**
   * Event that is triggered when the value of ShapeParameter changes.
   * @type {PropertyEvent}
   */
  get OnShapeParameterChanged()
  {
    const event = this._ShapeParameterChanged;

    if (event) return event;

    return this._ShapeParameterChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 5), new signature(FLOAT32));
  }

  static get_properties()
  {
    if (!OcaFilterParametric_p)
    {
      OcaFilterParametric_p = new Properties([
          new Property("Frequency", new signature(FLOAT32), 4, 1, false, false, null),
          new Property("Shape", new signature(OcaParametricEQShape), 4, 2, false, false, null),
          new Property("WidthParameter", new signature(FLOAT32), 4, 3, false, false, ["Q"]),
          new Property("InBandGain", new signature(FLOAT32), 4, 4, false, false, null),
          new Property("ShapeParameter", new signature(FLOAT32), 4, 5, false, false, null),
        ], 4, OcaActuator.get_properties());
    }

    return OcaFilterParametric_p;
  }

  static GetPropertySync()
  {
    let sync = OcaFilterParametric_sync;
    if (!sync)
    {
      OcaFilterParametric_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._FrequencyChanged) event.Dispose();
    if (event = this._ShapeChanged) event.Dispose();
    if (event = this._WidthParameterChanged) event.Dispose();
    if (event = this._InBandGainChanged) event.Dispose();
    if (event = this._ShapeParameterChanged) event.Dispose();
  }
}


let OcaFilterPolynomial_GetCoefficients_rs = null;
let OcaFilterPolynomial_SetCoefficients_as = null;
let OcaFilterPolynomial_GetSampleRate_rs = null;
let OcaFilterPolynomial_SetSampleRate_as = null;
let OcaFilterPolynomial_GetMaxOrder_rs = null;
let OcaFilterPolynomial_p = null;

let OcaFilterPolynomial_sync = null;

/**
 * A generic Z-domain rational polynomial filter section: <u>A(0) + A(1)z
 * + A(2)z^2 + A(3)z^3 + ...</u> B(0) + B(1)z + B(2)z^2 + B(3)z^3 + ...
 * @extends OcaActuator
 */
export class OcaFilterPolynomial extends OcaActuator
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._AChanged = null;
    this._BChanged = null;
    this._SampleRateChanged = null;
    this._MaxOrderChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0001\u000b";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Returns the polynomial coefficients used.
   * @retval {Promise}
   */
  GetCoefficients()
  {
    let rs = OcaFilterPolynomial_GetCoefficients_rs;
    if (!rs) rs = OcaFilterPolynomial_GetCoefficients_rs = new signature(LIST(FLOAT32), LIST(FLOAT32));
    const cmd = new CommandRrq(this.ono, 4, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the polynomial coefficients.
   * @param A {OcaList}
   *
   * @param B {OcaList}
   *
   * @retval {Promise}
   */
  SetCoefficients(A, B)
  {
    let as = OcaFilterPolynomial_SetCoefficients_as;
    if (!as) as = OcaFilterPolynomial_SetCoefficients_as = new signature(LIST(FLOAT32), LIST(FLOAT32));
    const cmd = new CommandRrq(this.ono, 4, 2, 2,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the filter sampling rate.
   * @retval {Promise}
   */
  GetSampleRate()
  {
    let rs = OcaFilterPolynomial_GetSampleRate_rs;
    if (!rs) rs = OcaFilterPolynomial_GetSampleRate_rs = new signature(FLOAT32, FLOAT32, FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 3, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the filter sampling rate.
   * @param Rate {OcaFrequency}
   *
   * @retval {Promise}
   */
  SetSampleRate(Rate)
  {
    let as = OcaFilterPolynomial_SetSampleRate_as;
    if (!as) as = OcaFilterPolynomial_SetSampleRate_as = new signature(FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 4, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the maximum allowable order (= max number of array elements in
   * numerator and for denominator arrays)
   * @retval {Promise}
   */
  GetMaxOrder()
  {
    let rs = OcaFilterPolynomial_GetMaxOrder_rs;
    if (!rs) rs = OcaFilterPolynomial_GetMaxOrder_rs = new signature(UINT8);
    const cmd = new CommandRrq(this.ono, 4, 5, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Event that is triggered when the value of A changes.
   * @type {PropertyEvent}
   */
  get OnAChanged()
  {
    const event = this._AChanged;

    if (event) return event;

    return this._AChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 1), new signature(LIST(FLOAT32)));
  }

  /**
   * Event that is triggered when the value of B changes.
   * @type {PropertyEvent}
   */
  get OnBChanged()
  {
    const event = this._BChanged;

    if (event) return event;

    return this._BChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 2), new signature(LIST(FLOAT32)));
  }

  /**
   * Event that is triggered when the value of SampleRate changes.
   * @type {PropertyEvent}
   */
  get OnSampleRateChanged()
  {
    const event = this._SampleRateChanged;

    if (event) return event;

    return this._SampleRateChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 3), new signature(FLOAT32));
  }

  /**
   * Event that is triggered when the value of MaxOrder changes.
   * @type {PropertyEvent}
   */
  get OnMaxOrderChanged()
  {
    const event = this._MaxOrderChanged;

    if (event) return event;

    return this._MaxOrderChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 4), new signature(UINT8));
  }

  static get_properties()
  {
    if (!OcaFilterPolynomial_p)
    {
      OcaFilterPolynomial_p = new Properties([
          new Property("A", new signature(LIST(FLOAT32)), 4, 1, false, false, null),
          new Property("B", new signature(LIST(FLOAT32)), 4, 2, false, false, null),
          new Property("SampleRate", new signature(FLOAT32), 4, 3, false, false, null),
          new Property("MaxOrder", new signature(UINT8), 4, 4, true, false, null),
        ], 4, OcaActuator.get_properties());
    }

    return OcaFilterPolynomial_p;
  }

  static GetPropertySync()
  {
    let sync = OcaFilterPolynomial_sync;
    if (!sync)
    {
      OcaFilterPolynomial_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._AChanged) event.Dispose();
    if (event = this._BChanged) event.Dispose();
    if (event = this._SampleRateChanged) event.Dispose();
    if (event = this._MaxOrderChanged) event.Dispose();
  }
}


let OcaFilterFIR_GetLength_rs = null;
let OcaFilterFIR_GetCoefficients_rs = null;
let OcaFilterFIR_SetCoefficients_as = null;
let OcaFilterFIR_GetSampleRate_rs = null;
let OcaFilterFIR_SetSampleRate_as = null;
let OcaFilterFIR_p = null;

let OcaFilterFIR_sync = null;

/**
 * A finite impulse response (FIR) filter.
 * @extends OcaActuator
 */
export class OcaFilterFIR extends OcaActuator
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._LengthChanged = null;
    this._CoefficientsChanged = null;
    this._SampleRateChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0001\f";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Gets the length of the FIR filter. The return value indicates whether
   * the value was successfully retrieved.
   * @retval {Promise}
   */
  GetLength()
  {
    let rs = OcaFilterFIR_GetLength_rs;
    if (!rs) rs = OcaFilterFIR_GetLength_rs = new signature(UINT32, UINT32, UINT32);
    const cmd = new CommandRrq(this.ono, 4, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the coefficients of the FIR filter. The return value indicates
   * whether the coefficients were successfully retrieved.
   * @retval {Promise}
   */
  GetCoefficients()
  {
    let rs = OcaFilterFIR_GetCoefficients_rs;
    if (!rs) rs = OcaFilterFIR_GetCoefficients_rs = new signature(LIST(FLOAT32));
    const cmd = new CommandRrq(this.ono, 4, 2, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the properties of the FIR filter. The return value
   * indicates whether the properties were successfully set.
   * @param Coefficients {OcaList}
   *
   * @retval {Promise}
   */
  SetCoefficients(Coefficients)
  {
    let as = OcaFilterFIR_SetCoefficients_as;
    if (!as) as = OcaFilterFIR_SetCoefficients_as = new signature(LIST(FLOAT32));
    const cmd = new CommandRrq(this.ono, 4, 3, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the sample rate of the FIR filter. The return value indicates
   * whether the data was successfully retrieved.
   * @retval {Promise}
   */
  GetSampleRate()
  {
    let rs = OcaFilterFIR_GetSampleRate_rs;
    if (!rs) rs = OcaFilterFIR_GetSampleRate_rs = new signature(FLOAT32, FLOAT32, FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 4, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the sample rate of the FIR filter. The return value indicates
   * whether the rate was successfully set.
   * @param Rate {OcaFrequency}
   *
   * @retval {Promise}
   */
  SetSampleRate(Rate)
  {
    let as = OcaFilterFIR_SetSampleRate_as;
    if (!as) as = OcaFilterFIR_SetSampleRate_as = new signature(FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 5, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Event that is triggered when the value of Length changes.
   * @type {PropertyEvent}
   */
  get OnLengthChanged()
  {
    const event = this._LengthChanged;

    if (event) return event;

    return this._LengthChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 1), new signature(UINT32));
  }

  /**
   * Event that is triggered when the value of Coefficients changes.
   * @type {PropertyEvent}
   */
  get OnCoefficientsChanged()
  {
    const event = this._CoefficientsChanged;

    if (event) return event;

    return this._CoefficientsChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 2), new signature(LIST(FLOAT32)));
  }

  /**
   * Event that is triggered when the value of SampleRate changes.
   * @type {PropertyEvent}
   */
  get OnSampleRateChanged()
  {
    const event = this._SampleRateChanged;

    if (event) return event;

    return this._SampleRateChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 3), new signature(FLOAT32));
  }

  static get_properties()
  {
    if (!OcaFilterFIR_p)
    {
      OcaFilterFIR_p = new Properties([
          new Property("Length", new signature(UINT32), 4, 1, true, false, null),
          new Property("Coefficients", new signature(LIST(FLOAT32)), 4, 2, false, false, null),
          new Property("SampleRate", new signature(FLOAT32), 4, 3, false, false, null),
        ], 4, OcaActuator.get_properties());
    }

    return OcaFilterFIR_p;
  }

  static GetPropertySync()
  {
    let sync = OcaFilterFIR_sync;
    if (!sync)
    {
      OcaFilterFIR_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._LengthChanged) event.Dispose();
    if (event = this._CoefficientsChanged) event.Dispose();
    if (event = this._SampleRateChanged) event.Dispose();
  }
}


let OcaFilterArbitraryCurve_GetTransferFunction_rs = null;
let OcaFilterArbitraryCurve_SetTransferFunction_as = null;
let OcaFilterArbitraryCurve_GetSampleRate_rs = null;
let OcaFilterArbitraryCurve_SetSampleRate_as = null;
let OcaFilterArbitraryCurve_GetTFMaxLength_rs = null;
let OcaFilterArbitraryCurve_GetTFMinLength_rs = null;
let OcaFilterArbitraryCurve_p = null;

let OcaFilterArbitraryCurve_sync = null;

/**
 * An arbitrary-curve filter, with transfer function specified as
 * amplitude and phase versus frequency.
 * @extends OcaActuator
 */
export class OcaFilterArbitraryCurve extends OcaActuator
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._TransferFunctionChanged = null;
    this._SampleRateChanged = null;
    this._TFMinLengthChanged = null;
    this._TFMaxLengthChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0001\r";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Returns the complex transfer function.
   * @retval {Promise}
   */
  GetTransferFunction()
  {
    let rs = OcaFilterArbitraryCurve_GetTransferFunction_rs;
    if (!rs) rs = OcaFilterArbitraryCurve_GetTransferFunction_rs = new signature(OcaTransferFunction);
    const cmd = new CommandRrq(this.ono, 4, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the complex transfer function.
   * @param TransferFunction {OcaTransferFunction}
   *
   * @retval {Promise}
   */
  SetTransferFunction(TransferFunction)
  {
    let as = OcaFilterArbitraryCurve_SetTransferFunction_as;
    if (!as) as = OcaFilterArbitraryCurve_SetTransferFunction_as = new signature(OcaTransferFunction);
    const cmd = new CommandRrq(this.ono, 4, 2, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the filter sampling rate.
   * @retval {Promise}
   */
  GetSampleRate()
  {
    let rs = OcaFilterArbitraryCurve_GetSampleRate_rs;
    if (!rs) rs = OcaFilterArbitraryCurve_GetSampleRate_rs = new signature(FLOAT32, FLOAT32, FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 3, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the filter sampling rate.
   * @param Rate {OcaFrequency}
   *
   * @retval {Promise}
   */
  SetSampleRate(Rate)
  {
    let as = OcaFilterArbitraryCurve_SetSampleRate_as;
    if (!as) as = OcaFilterArbitraryCurve_SetSampleRate_as = new signature(FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 4, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Returns the minimum number of required points in the specified
   * transfer function.
   * @retval {Promise}
   */
  GetTFMaxLength()
  {
    let rs = OcaFilterArbitraryCurve_GetTFMaxLength_rs;
    if (!rs) rs = OcaFilterArbitraryCurve_GetTFMaxLength_rs = new signature(UINT32);
    const cmd = new CommandRrq(this.ono, 4, 5, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Returns the maximum number of allowed points in the specified transfer
   * function.
   * @retval {Promise}
   */
  GetTFMinLength()
  {
    let rs = OcaFilterArbitraryCurve_GetTFMinLength_rs;
    if (!rs) rs = OcaFilterArbitraryCurve_GetTFMinLength_rs = new signature(UINT32);
    const cmd = new CommandRrq(this.ono, 4, 6, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Event that is triggered when the value of TransferFunction changes.
   * @type {PropertyEvent}
   */
  get OnTransferFunctionChanged()
  {
    const event = this._TransferFunctionChanged;

    if (event) return event;

    return this._TransferFunctionChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 1), new signature(OcaTransferFunction));
  }

  /**
   * Event that is triggered when the value of SampleRate changes.
   * @type {PropertyEvent}
   */
  get OnSampleRateChanged()
  {
    const event = this._SampleRateChanged;

    if (event) return event;

    return this._SampleRateChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 2), new signature(FLOAT32));
  }

  /**
   * Event that is triggered when the value of TFMinLength changes.
   * @type {PropertyEvent}
   */
  get OnTFMinLengthChanged()
  {
    const event = this._TFMinLengthChanged;

    if (event) return event;

    return this._TFMinLengthChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 3), new signature(UINT32));
  }

  /**
   * Event that is triggered when the value of TFMaxLength changes.
   * @type {PropertyEvent}
   */
  get OnTFMaxLengthChanged()
  {
    const event = this._TFMaxLengthChanged;

    if (event) return event;

    return this._TFMaxLengthChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 4), new signature(UINT32));
  }

  static get_properties()
  {
    if (!OcaFilterArbitraryCurve_p)
    {
      OcaFilterArbitraryCurve_p = new Properties([
          new Property("TransferFunction", new signature(OcaTransferFunction), 4, 1, false, false, null),
          new Property("SampleRate", new signature(FLOAT32), 4, 2, false, false, null),
          new Property("TFMinLength", new signature(UINT32), 4, 3, false, false, null),
          new Property("TFMaxLength", new signature(UINT32), 4, 4, false, false, null),
        ], 4, OcaActuator.get_properties());
    }

    return OcaFilterArbitraryCurve_p;
  }

  static GetPropertySync()
  {
    let sync = OcaFilterArbitraryCurve_sync;
    if (!sync)
    {
      OcaFilterArbitraryCurve_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._TransferFunctionChanged) event.Dispose();
    if (event = this._SampleRateChanged) event.Dispose();
    if (event = this._TFMinLengthChanged) event.Dispose();
    if (event = this._TFMaxLengthChanged) event.Dispose();
  }
}


let OcaDynamics_GetTriggered_rs = null;
let OcaDynamics_GetDynamicGain_rs = null;
let OcaDynamics_GetFunction_rs = null;
let OcaDynamics_SetFunction_as = null;
let OcaDynamics_GetRatio_rs = null;
let OcaDynamics_SetRatio_as = null;
let OcaDynamics_GetThreshold_rs = null;
let OcaDynamics_SetThreshold_as = null;
let OcaDynamics_GetThresholdPresentationUnits_rs = null;
let OcaDynamics_SetThresholdPresentationUnits_as = null;
let OcaDynamics_GetDetectorLaw_rs = null;
let OcaDynamics_SetDetectorLaw_as = null;
let OcaDynamics_GetAttackTime_rs = null;
let OcaDynamics_SetAttackTime_as = null;
let OcaDynamics_GetReleaseTime_rs = null;
let OcaDynamics_SetReleaseTime_as = null;
let OcaDynamics_GetHoldTime_rs = null;
let OcaDynamics_SetHoldTime_as = null;
let OcaDynamics_GetDynamicGainFloor_rs = null;
let OcaDynamics_SetDynamicGainFloor_as = null;
let OcaDynamics_GetDynamicGainCeiling_rs = null;
let OcaDynamics_SetDynamicGainCeiling_as = null;
let OcaDynamics_GetKneeParameter_rs = null;
let OcaDynamics_SetKneeParameter_as = null;
let OcaDynamics_GetSlope_rs = null;
let OcaDynamics_SetSlope_as = null;
let OcaDynamics_p = null;

let OcaDynamics_sync = null;

/**
 * A multipurpose dynamics processor. Can be configured as compressor,
 * limiter, expander, or gate. This class is expected to handle the
 * majority of the basic cases. More complex devices may be described in
 * a different manner, using one or more <b>OcaDynamicsDetector</b> and
 * <b>OcaDynamicsCurve</b> objects, in conjunction with other Worker
 * objects as needed.
 * @extends OcaActuator
 */
export class OcaDynamics extends OcaActuator
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._TriggeredChanged = null;
    this._DynamicGainChanged = null;
    this._FunctionChanged = null;
    this._RatioChanged = null;
    this._ThresholdChanged = null;
    this._ThresholdPresentationUnitsChanged = null;
    this._DetectorLawChanged = null;
    this._AttackTimeChanged = null;
    this._ReleaseTimeChanged = null;
    this._HoldTimeChanged = null;
    this._DynamicGainCeilingChanged = null;
    this._DynamicGainFloorChanged = null;
    this._KneeParameterChanged = null;
    this._SlopeChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0001\u000e";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Gets the value of the Triggered property. The return value indicates
   * whether the property was successfully retrieved.
   * @retval {Promise}
   */
  GetTriggered()
  {
    let rs = OcaDynamics_GetTriggered_rs;
    if (!rs) rs = OcaDynamics_GetTriggered_rs = new signature(BOOLEAN);
    const cmd = new CommandRrq(this.ono, 4, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the value of the DynamicGain property. The return value indicates
   * whether the property was successfully retrieved.
   * @retval {Promise}
   */
  GetDynamicGain()
  {
    let rs = OcaDynamics_GetDynamicGain_rs;
    if (!rs) rs = OcaDynamics_GetDynamicGain_rs = new signature(FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 2, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the Function property. The return value indicates
   * whether the property was successfully retrieved.
   * @retval {Promise}
   */
  GetFunction()
  {
    let rs = OcaDynamics_GetFunction_rs;
    if (!rs) rs = OcaDynamics_GetFunction_rs = new signature(OcaDynamicsFunction);
    const cmd = new CommandRrq(this.ono, 4, 3, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the Function property. The return value indicates
   * whether the property was successfully set.
   * @param Func {OcaDynamicsFunction}
   *
   * @retval {Promise}
   */
  SetFunction(Func)
  {
    let as = OcaDynamics_SetFunction_as;
    if (!as) as = OcaDynamics_SetFunction_as = new signature(OcaDynamicsFunction);
    const cmd = new CommandRrq(this.ono, 4, 4, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the value of the Ratio property. The return value indicates
   * whether the property was successfully retrieved. GetRatio() is a
   * DEPRECATED method. Please use <b>GetSlope()</b> instead.
   * @retval {Promise}
   */
  GetRatio()
  {
    let rs = OcaDynamics_GetRatio_rs;
    if (!rs) rs = OcaDynamics_GetRatio_rs = new signature(FLOAT32, FLOAT32, FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 5, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the Ratio property. The return value indicates
   * whether the property was successfully set. SetRatio() is a DEPRECATED
   * method. Please use <b>SetSlope()</b> instead.
   * @param Ratio {OcaFloat32}
   *
   * @retval {Promise}
   */
  SetRatio(Ratio)
  {
    let as = OcaDynamics_SetRatio_as;
    if (!as) as = OcaDynamics_SetRatio_as = new signature(FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 6, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the value of the Threshold property. The return value indicates
   * if the value was successfully retrieved.
   * @retval {Promise}
   */
  GetThreshold()
  {
    let rs = OcaDynamics_GetThreshold_rs;
    if (!rs) rs = OcaDynamics_GetThreshold_rs = new signature(FLOAT32, FLOAT32, FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 7, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the Threshold property. The return value indicates
   * if the value was successfully set.
   * @param threshold {OcaDBr}
   *
   * @retval {Promise}
   */
  SetThreshold(threshold)
  {
    let as = OcaDynamics_SetThreshold_as;
    if (!as) as = OcaDynamics_SetThreshold_as = new signature(FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 8, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the value of the ThresholdPresentationUnits property. The return
   * value indicates if the value was successfully retrieved.
   * @retval {Promise}
   */
  GetThresholdPresentationUnits()
  {
    let rs = OcaDynamics_GetThresholdPresentationUnits_rs;
    if (!rs) rs = OcaDynamics_GetThresholdPresentationUnits_rs = new signature(OcaPresentationUnit);
    const cmd = new CommandRrq(this.ono, 4, 9, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the ThresholdPresentationUnits property. The return
   * value indicates if the value was successfully set.
   * @param Units {OcaPresentationUnit}
   *
   * @retval {Promise}
   */
  SetThresholdPresentationUnits(Units)
  {
    let as = OcaDynamics_SetThresholdPresentationUnits_as;
    if (!as) as = OcaDynamics_SetThresholdPresentationUnits_as = new signature(OcaPresentationUnit);
    const cmd = new CommandRrq(this.ono, 4, 10, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Sets the value of the DetectorLaw property. The return value indicates
   * if the value was successfully set.
   * @retval {Promise}
   */
  GetDetectorLaw()
  {
    let rs = OcaDynamics_GetDetectorLaw_rs;
    if (!rs) rs = OcaDynamics_GetDetectorLaw_rs = new signature(OcaLevelDetectionLaw);
    const cmd = new CommandRrq(this.ono, 4, 11, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the DetectorLaw property. The return value indicates
   * if the value was successfully set.
   * @param Law {OcaLevelDetectionLaw}
   *
   * @retval {Promise}
   */
  SetDetectorLaw(Law)
  {
    let as = OcaDynamics_SetDetectorLaw_as;
    if (!as) as = OcaDynamics_SetDetectorLaw_as = new signature(OcaLevelDetectionLaw);
    const cmd = new CommandRrq(this.ono, 4, 12, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the value of the AttackTime property. The return value indicates
   * if the value was successfully retrieved.
   * @retval {Promise}
   */
  GetAttackTime()
  {
    let rs = OcaDynamics_GetAttackTime_rs;
    if (!rs) rs = OcaDynamics_GetAttackTime_rs = new signature(FLOAT32, FLOAT32, FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 13, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the AttackTime property. The return value indicates
   * if the value was successfully set.
   * @param Time {OcaTimeInterval}
   *
   * @retval {Promise}
   */
  SetAttackTime(Time)
  {
    let as = OcaDynamics_SetAttackTime_as;
    if (!as) as = OcaDynamics_SetAttackTime_as = new signature(FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 14, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the value of the ReleaseTime property. The return value indicates
   * if the value was successfully retrieved.
   * @retval {Promise}
   */
  GetReleaseTime()
  {
    let rs = OcaDynamics_GetReleaseTime_rs;
    if (!rs) rs = OcaDynamics_GetReleaseTime_rs = new signature(FLOAT32, FLOAT32, FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 15, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the ReleaseTime property. The return value indicates
   * if the value was successfully set.
   * @param Time {OcaTimeInterval}
   *
   * @retval {Promise}
   */
  SetReleaseTime(Time)
  {
    let as = OcaDynamics_SetReleaseTime_as;
    if (!as) as = OcaDynamics_SetReleaseTime_as = new signature(FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 16, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the value of the HoldTime property. The return value indicates if
   * the value was successfully retrieved.
   * @retval {Promise}
   */
  GetHoldTime()
  {
    let rs = OcaDynamics_GetHoldTime_rs;
    if (!rs) rs = OcaDynamics_GetHoldTime_rs = new signature(FLOAT32, FLOAT32, FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 17, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the HoldTime property. The return value indicates if
   * the value was successfully set.
   * @param Time {OcaTimeInterval}
   *
   * @retval {Promise}
   */
  SetHoldTime(Time)
  {
    let as = OcaDynamics_SetHoldTime_as;
    if (!as) as = OcaDynamics_SetHoldTime_as = new signature(FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 18, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the value of the DynamicGainFLoor property. The return value
   * indicates if the value was successfully retrieved.
   * @retval {Promise}
   */
  GetDynamicGainFloor()
  {
    let rs = OcaDynamics_GetDynamicGainFloor_rs;
    if (!rs) rs = OcaDynamics_GetDynamicGainFloor_rs = new signature(FLOAT32, FLOAT32, FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 19, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the DynamicGainFloor property. The return value
   * indicates if the value was successfully set.
   * @param Limit {OcaDB}
   *
   * @retval {Promise}
   */
  SetDynamicGainFloor(Limit)
  {
    let as = OcaDynamics_SetDynamicGainFloor_as;
    if (!as) as = OcaDynamics_SetDynamicGainFloor_as = new signature(FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 20, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the value of the DynamicGainCeiling property. The return value
   * indicates if the value was successfully retrieved.
   * @retval {Promise}
   */
  GetDynamicGainCeiling()
  {
    let rs = OcaDynamics_GetDynamicGainCeiling_rs;
    if (!rs) rs = OcaDynamics_GetDynamicGainCeiling_rs = new signature(FLOAT32, FLOAT32, FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 21, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the DynamicGainCeiling property. The return value
   * indicates if the value was successfully set.
   * @param Limit {OcaDB}
   *
   * @retval {Promise}
   */
  SetDynamicGainCeiling(Limit)
  {
    let as = OcaDynamics_SetDynamicGainCeiling_as;
    if (!as) as = OcaDynamics_SetDynamicGainCeiling_as = new signature(FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 22, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the value of the KneeParameter property. The return value
   * indicates if the value was successfully retrieved.
   * @retval {Promise}
   */
  GetKneeParameter()
  {
    let rs = OcaDynamics_GetKneeParameter_rs;
    if (!rs) rs = OcaDynamics_GetKneeParameter_rs = new signature(FLOAT32, FLOAT32, FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 23, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the KneeParameter property. The return value
   * indicates if the value was successfully set.
   * @param Parameter {OcaFloat32}
   *
   * @retval {Promise}
   */
  SetKneeParameter(Parameter)
  {
    let as = OcaDynamics_SetKneeParameter_as;
    if (!as) as = OcaDynamics_SetKneeParameter_as = new signature(FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 24, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the value of the Slope property. The return value indicates
   * whether the property was successfully retrieved.
   * @retval {Promise}
   */
  GetSlope()
  {
    let rs = OcaDynamics_GetSlope_rs;
    if (!rs) rs = OcaDynamics_GetSlope_rs = new signature(FLOAT32, FLOAT32, FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 25, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the Slope property. The return value indicates
   * whether the property was successfully set.
   * @param Slope {OcaFloat32}
   *
   * @retval {Promise}
   */
  SetSlope(Slope)
  {
    let as = OcaDynamics_SetSlope_as;
    if (!as) as = OcaDynamics_SetSlope_as = new signature(FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 26, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Event that is triggered when the value of Triggered changes.
   * @type {PropertyEvent}
   */
  get OnTriggeredChanged()
  {
    const event = this._TriggeredChanged;

    if (event) return event;

    return this._TriggeredChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 1), new signature(BOOLEAN));
  }

  /**
   * Event that is triggered when the value of DynamicGain changes.
   * @type {PropertyEvent}
   */
  get OnDynamicGainChanged()
  {
    const event = this._DynamicGainChanged;

    if (event) return event;

    return this._DynamicGainChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 2), new signature(FLOAT32));
  }

  /**
   * Event that is triggered when the value of Function changes.
   * @type {PropertyEvent}
   */
  get OnFunctionChanged()
  {
    const event = this._FunctionChanged;

    if (event) return event;

    return this._FunctionChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 3), new signature(OcaDynamicsFunction));
  }

  /**
   * Event that is triggered when the value of Ratio changes.
   * @type {PropertyEvent}
   */
  get OnRatioChanged()
  {
    const event = this._RatioChanged;

    if (event) return event;

    return this._RatioChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 4), new signature(FLOAT32));
  }

  /**
   * Event that is triggered when the value of Threshold changes.
   * @type {PropertyEvent}
   */
  get OnThresholdChanged()
  {
    const event = this._ThresholdChanged;

    if (event) return event;

    return this._ThresholdChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 5), new signature(FLOAT32));
  }

  /**
   * Event that is triggered when the value of ThresholdPresentationUnits changes.
   * @type {PropertyEvent}
   */
  get OnThresholdPresentationUnitsChanged()
  {
    const event = this._ThresholdPresentationUnitsChanged;

    if (event) return event;

    return this._ThresholdPresentationUnitsChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 6), new signature(OcaPresentationUnit));
  }

  /**
   * Event that is triggered when the value of DetectorLaw changes.
   * @type {PropertyEvent}
   */
  get OnDetectorLawChanged()
  {
    const event = this._DetectorLawChanged;

    if (event) return event;

    return this._DetectorLawChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 7), new signature(OcaLevelDetectionLaw));
  }

  /**
   * Event that is triggered when the value of AttackTime changes.
   * @type {PropertyEvent}
   */
  get OnAttackTimeChanged()
  {
    const event = this._AttackTimeChanged;

    if (event) return event;

    return this._AttackTimeChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 8), new signature(FLOAT32));
  }

  /**
   * Event that is triggered when the value of ReleaseTime changes.
   * @type {PropertyEvent}
   */
  get OnReleaseTimeChanged()
  {
    const event = this._ReleaseTimeChanged;

    if (event) return event;

    return this._ReleaseTimeChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 9), new signature(FLOAT32));
  }

  /**
   * Event that is triggered when the value of HoldTime changes.
   * @type {PropertyEvent}
   */
  get OnHoldTimeChanged()
  {
    const event = this._HoldTimeChanged;

    if (event) return event;

    return this._HoldTimeChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 10), new signature(FLOAT32));
  }

  /**
   * Event that is triggered when the value of DynamicGainCeiling changes.
   * @type {PropertyEvent}
   */
  get OnDynamicGainCeilingChanged()
  {
    const event = this._DynamicGainCeilingChanged;

    if (event) return event;

    return this._DynamicGainCeilingChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 11), new signature(FLOAT32));
  }

  /**
   * Event that is triggered when the value of DynamicGainFloor changes.
   * @type {PropertyEvent}
   */
  get OnDynamicGainFloorChanged()
  {
    const event = this._DynamicGainFloorChanged;

    if (event) return event;

    return this._DynamicGainFloorChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 12), new signature(FLOAT32));
  }

  /**
   * Event that is triggered when the value of KneeParameter changes.
   * @type {PropertyEvent}
   */
  get OnKneeParameterChanged()
  {
    const event = this._KneeParameterChanged;

    if (event) return event;

    return this._KneeParameterChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 13), new signature(FLOAT32));
  }

  /**
   * Event that is triggered when the value of Slope changes.
   * @type {PropertyEvent}
   */
  get OnSlopeChanged()
  {
    const event = this._SlopeChanged;

    if (event) return event;

    return this._SlopeChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 14), new signature(FLOAT32));
  }

  static get_properties()
  {
    if (!OcaDynamics_p)
    {
      OcaDynamics_p = new Properties([
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
          new Property("Slope", new signature(FLOAT32), 4, 14, false, false, null),
        ], 4, OcaActuator.get_properties());
    }

    return OcaDynamics_p;
  }

  static GetPropertySync()
  {
    let sync = OcaDynamics_sync;
    if (!sync)
    {
      OcaDynamics_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._TriggeredChanged) event.Dispose();
    if (event = this._DynamicGainChanged) event.Dispose();
    if (event = this._FunctionChanged) event.Dispose();
    if (event = this._RatioChanged) event.Dispose();
    if (event = this._ThresholdChanged) event.Dispose();
    if (event = this._ThresholdPresentationUnitsChanged) event.Dispose();
    if (event = this._DetectorLawChanged) event.Dispose();
    if (event = this._AttackTimeChanged) event.Dispose();
    if (event = this._ReleaseTimeChanged) event.Dispose();
    if (event = this._HoldTimeChanged) event.Dispose();
    if (event = this._DynamicGainCeilingChanged) event.Dispose();
    if (event = this._DynamicGainFloorChanged) event.Dispose();
    if (event = this._KneeParameterChanged) event.Dispose();
    if (event = this._SlopeChanged) event.Dispose();
  }
}


let OcaDynamicsDetector_GetLaw_rs = null;
let OcaDynamicsDetector_SetLaw_as = null;
let OcaDynamicsDetector_GetAttackTime_rs = null;
let OcaDynamicsDetector_SetAttackTime_as = null;
let OcaDynamicsDetector_GetReleaseTime_rs = null;
let OcaDynamicsDetector_SetReleaseTime_as = null;
let OcaDynamicsDetector_GetHoldTime_rs = null;
let OcaDynamicsDetector_SetHoldTime_as = null;
let OcaDynamicsDetector_p = null;

let OcaDynamicsDetector_sync = null;

/**
 * Dynamics element : side-chain detector.
 * @extends OcaActuator
 */
export class OcaDynamicsDetector extends OcaActuator
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._LawChanged = null;
    this._AttackTimeChanged = null;
    this._ReleaseTimeChanged = null;
    this._HoldTimeChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0001\u000f";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Gets the value of the Law property. Return status indicates whether
   * the value was successfully retrieved.
   * @retval {Promise}
   */
  GetLaw()
  {
    let rs = OcaDynamicsDetector_GetLaw_rs;
    if (!rs) rs = OcaDynamicsDetector_GetLaw_rs = new signature(OcaLevelDetectionLaw);
    const cmd = new CommandRrq(this.ono, 4, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the Law property. Return status indicates whether
   * the value was successfully set.
   * @param Law {OcaLevelDetectionLaw}
   *
   * @retval {Promise}
   */
  SetLaw(Law)
  {
    let as = OcaDynamicsDetector_SetLaw_as;
    if (!as) as = OcaDynamicsDetector_SetLaw_as = new signature(OcaLevelDetectionLaw);
    const cmd = new CommandRrq(this.ono, 4, 2, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the value of the AttackTime property. The return value indicates
   * if the value was successfully retrieved.
   * @retval {Promise}
   */
  GetAttackTime()
  {
    let rs = OcaDynamicsDetector_GetAttackTime_rs;
    if (!rs) rs = OcaDynamicsDetector_GetAttackTime_rs = new signature(FLOAT32, FLOAT32, FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 3, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the AttackTime property. The return value indicates
   * whether the property was successfully set.
   * @param Time {OcaTimeInterval}
   *
   * @retval {Promise}
   */
  SetAttackTime(Time)
  {
    let as = OcaDynamicsDetector_SetAttackTime_as;
    if (!as) as = OcaDynamicsDetector_SetAttackTime_as = new signature(FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 4, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the value of the ReleaseTime property. The return value indicates
   * if the value was successfully retrieved.
   * @retval {Promise}
   */
  GetReleaseTime()
  {
    let rs = OcaDynamicsDetector_GetReleaseTime_rs;
    if (!rs) rs = OcaDynamicsDetector_GetReleaseTime_rs = new signature(FLOAT32, FLOAT32, FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 5, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the ReleaseTime property. The return value indicates
   * whether the property was successfully set.
   * @param Time {OcaTimeInterval}
   *
   * @retval {Promise}
   */
  SetReleaseTime(Time)
  {
    let as = OcaDynamicsDetector_SetReleaseTime_as;
    if (!as) as = OcaDynamicsDetector_SetReleaseTime_as = new signature(FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 6, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the value of the HoldTime property. The return value indicates if
   * the value was successfully retrieved.
   * @retval {Promise}
   */
  GetHoldTime()
  {
    let rs = OcaDynamicsDetector_GetHoldTime_rs;
    if (!rs) rs = OcaDynamicsDetector_GetHoldTime_rs = new signature(FLOAT32, FLOAT32, FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 7, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the HoldTime property. The return value indicates
   * whether the property was successfully set.
   * @param Time {OcaTimeInterval}
   *
   * @retval {Promise}
   */
  SetHoldTime(Time)
  {
    let as = OcaDynamicsDetector_SetHoldTime_as;
    if (!as) as = OcaDynamicsDetector_SetHoldTime_as = new signature(FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 8, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Event that is triggered when the value of Law changes.
   * @type {PropertyEvent}
   */
  get OnLawChanged()
  {
    const event = this._LawChanged;

    if (event) return event;

    return this._LawChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 1), new signature(OcaLevelDetectionLaw));
  }

  /**
   * Event that is triggered when the value of AttackTime changes.
   * @type {PropertyEvent}
   */
  get OnAttackTimeChanged()
  {
    const event = this._AttackTimeChanged;

    if (event) return event;

    return this._AttackTimeChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 2), new signature(FLOAT32));
  }

  /**
   * Event that is triggered when the value of ReleaseTime changes.
   * @type {PropertyEvent}
   */
  get OnReleaseTimeChanged()
  {
    const event = this._ReleaseTimeChanged;

    if (event) return event;

    return this._ReleaseTimeChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 3), new signature(FLOAT32));
  }

  /**
   * Event that is triggered when the value of HoldTime changes.
   * @type {PropertyEvent}
   */
  get OnHoldTimeChanged()
  {
    const event = this._HoldTimeChanged;

    if (event) return event;

    return this._HoldTimeChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 4), new signature(FLOAT32));
  }

  static get_properties()
  {
    if (!OcaDynamicsDetector_p)
    {
      OcaDynamicsDetector_p = new Properties([
          new Property("Law", new signature(OcaLevelDetectionLaw), 4, 1, false, false, null),
          new Property("AttackTime", new signature(FLOAT32), 4, 2, false, false, null),
          new Property("ReleaseTime", new signature(FLOAT32), 4, 3, false, false, null),
          new Property("HoldTime", new signature(FLOAT32), 4, 4, false, false, null),
        ], 4, OcaActuator.get_properties());
    }

    return OcaDynamicsDetector_p;
  }

  static GetPropertySync()
  {
    let sync = OcaDynamicsDetector_sync;
    if (!sync)
    {
      OcaDynamicsDetector_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._LawChanged) event.Dispose();
    if (event = this._AttackTimeChanged) event.Dispose();
    if (event = this._ReleaseTimeChanged) event.Dispose();
    if (event = this._HoldTimeChanged) event.Dispose();
  }
}


let OcaDynamicsCurve_GetNSegments_rs = null;
let OcaDynamicsCurve_SetNSegments_as = null;
let OcaDynamicsCurve_GetThreshold_rs = null;
let OcaDynamicsCurve_SetThreshold_as = null;
let OcaDynamicsCurve_GetSlope_rs = null;
let OcaDynamicsCurve_SetSlope_as = null;
let OcaDynamicsCurve_GetKneeParameter_rs = null;
let OcaDynamicsCurve_SetKneeParameter_as = null;
let OcaDynamicsCurve_GetDynamicGainCeiling_rs = null;
let OcaDynamicsCurve_SetDynamicGainCeiling_as = null;
let OcaDynamicsCurve_GetDynamicGainFloor_rs = null;
let OcaDynamicsCurve_SetDynamicGainFloor_as = null;
let OcaDynamicsCurve_p = null;

let OcaDynamicsCurve_sync = null;

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
export class OcaDynamicsCurve extends OcaActuator
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._nSegmentsChanged = null;
    this._ThresholdChanged = null;
    this._SlopeChanged = null;
    this._KneeParameterChanged = null;
    this._DynamicGainFloorChanged = null;
    this._DynamicGainCeilingChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0001\u0010";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Gets the number of curve segments. The return value indicates whether
   * the value was successfully retrieved.
   * @retval {Promise}
   */
  GetNSegments()
  {
    let rs = OcaDynamicsCurve_GetNSegments_rs;
    if (!rs) rs = OcaDynamicsCurve_GetNSegments_rs = new signature(UINT8, UINT8, UINT8);
    const cmd = new CommandRrq(this.ono, 4, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the number of curve segments. The return value indicates whether
   * the data was successfully set. If this method increases the value of
   * n, the data in properties <b>Threshold</b>, <b>Slope</b>, and
   * <b>KneeParameter </b>of the new segment are by default set to the
   * values of the previous segment.
   * @param Slope {OcaUint8}
   *
   * @retval {Promise}
   */
  SetNSegments(Slope)
  {
    let as = OcaDynamicsCurve_SetNSegments_as;
    if (!as) as = OcaDynamicsCurve_SetNSegments_as = new signature(UINT8);
    const cmd = new CommandRrq(this.ono, 4, 2, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the list of Threshold values. The return value indicates whether
   * the data was successfully retrieved.
   * @retval {Promise}
   */
  GetThreshold()
  {
    let rs = OcaDynamicsCurve_GetThreshold_rs;
    if (!rs) rs = OcaDynamicsCurve_GetThreshold_rs = new signature(LIST(FLOAT32), FLOAT32, FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 3, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the list of Threshold values. The return value indicates whether
   * the values were successfully set.
   * @param Threshold {OcaList}
   *
   * @retval {Promise}
   */
  SetThreshold(Threshold)
  {
    let as = OcaDynamicsCurve_SetThreshold_as;
    if (!as) as = OcaDynamicsCurve_SetThreshold_as = new signature(LIST(FLOAT32));
    const cmd = new CommandRrq(this.ono, 4, 4, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the list of Slope values. The return value indicates whether the
   * list was successfully retrieved.
   * @retval {Promise}
   */
  GetSlope()
  {
    let rs = OcaDynamicsCurve_GetSlope_rs;
    if (!rs) rs = OcaDynamicsCurve_GetSlope_rs = new signature(LIST(FLOAT32), LIST(FLOAT32), LIST(FLOAT32));
    const cmd = new CommandRrq(this.ono, 4, 5, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the list of Slope values. The return value indicates whether the
   * values were successfully set.
   * @param slope {OcaList}
   *
   * @retval {Promise}
   */
  SetSlope(slope)
  {
    let as = OcaDynamicsCurve_SetSlope_as;
    if (!as) as = OcaDynamicsCurve_SetSlope_as = new signature(LIST(FLOAT32));
    const cmd = new CommandRrq(this.ono, 4, 6, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the list of KneeParameter valuess. The return value indicates
   * whether the list was successfully retrieved.
   * @retval {Promise}
   */
  GetKneeParameter()
  {
    let rs = OcaDynamicsCurve_GetKneeParameter_rs;
    if (!rs) rs = OcaDynamicsCurve_GetKneeParameter_rs = new signature(LIST(FLOAT32), LIST(FLOAT32), LIST(FLOAT32));
    const cmd = new CommandRrq(this.ono, 4, 7, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the list of KneeParameter values. The return value indicates
   * whether the values were successfully set.
   * @param parameter {OcaList}
   *
   * @retval {Promise}
   */
  SetKneeParameter(parameter)
  {
    let as = OcaDynamicsCurve_SetKneeParameter_as;
    if (!as) as = OcaDynamicsCurve_SetKneeParameter_as = new signature(LIST(FLOAT32));
    const cmd = new CommandRrq(this.ono, 4, 8, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the value of the DynamicGainCeiling property. The return value
   * indicates whether the data was successfully retrieved.
   * @retval {Promise}
   */
  GetDynamicGainCeiling()
  {
    let rs = OcaDynamicsCurve_GetDynamicGainCeiling_rs;
    if (!rs) rs = OcaDynamicsCurve_GetDynamicGainCeiling_rs = new signature(FLOAT32, FLOAT32, FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 9, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the DynamicGainCeiling property. The return value
   * indicates whether the data was successfully set.
   * @param gain {OcaDB}
   *
   * @retval {Promise}
   */
  SetDynamicGainCeiling(gain)
  {
    let as = OcaDynamicsCurve_SetDynamicGainCeiling_as;
    if (!as) as = OcaDynamicsCurve_SetDynamicGainCeiling_as = new signature(FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 10, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the value of the DynamicGainFloor property. The return value
   * indicates whether the data was successfully retrieved.
   * @retval {Promise}
   */
  GetDynamicGainFloor()
  {
    let rs = OcaDynamicsCurve_GetDynamicGainFloor_rs;
    if (!rs) rs = OcaDynamicsCurve_GetDynamicGainFloor_rs = new signature(FLOAT32, FLOAT32, FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 11, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the DynamicGainFloor property. The return value
   * indicates whether the data was successfully set.
   * @param Gain {OcaDB}
   *
   * @retval {Promise}
   */
  SetDynamicGainFloor(Gain)
  {
    let as = OcaDynamicsCurve_SetDynamicGainFloor_as;
    if (!as) as = OcaDynamicsCurve_SetDynamicGainFloor_as = new signature(FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 12, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Event that is triggered when the value of nSegments changes.
   * @type {PropertyEvent}
   */
  get OnnSegmentsChanged()
  {
    const event = this._nSegmentsChanged;

    if (event) return event;

    return this._nSegmentsChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 1), new signature(UINT8));
  }

  /**
   * Event that is triggered when the value of Threshold changes.
   * @type {PropertyEvent}
   */
  get OnThresholdChanged()
  {
    const event = this._ThresholdChanged;

    if (event) return event;

    return this._ThresholdChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 2), new signature(LIST(FLOAT32)));
  }

  /**
   * Event that is triggered when the value of Slope changes.
   * @type {PropertyEvent}
   */
  get OnSlopeChanged()
  {
    const event = this._SlopeChanged;

    if (event) return event;

    return this._SlopeChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 3), new signature(LIST(FLOAT32)));
  }

  /**
   * Event that is triggered when the value of KneeParameter changes.
   * @type {PropertyEvent}
   */
  get OnKneeParameterChanged()
  {
    const event = this._KneeParameterChanged;

    if (event) return event;

    return this._KneeParameterChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 4), new signature(LIST(FLOAT32)));
  }

  /**
   * Event that is triggered when the value of DynamicGainFloor changes.
   * @type {PropertyEvent}
   */
  get OnDynamicGainFloorChanged()
  {
    const event = this._DynamicGainFloorChanged;

    if (event) return event;

    return this._DynamicGainFloorChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 5), new signature(FLOAT32));
  }

  /**
   * Event that is triggered when the value of DynamicGainCeiling changes.
   * @type {PropertyEvent}
   */
  get OnDynamicGainCeilingChanged()
  {
    const event = this._DynamicGainCeilingChanged;

    if (event) return event;

    return this._DynamicGainCeilingChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 6), new signature(FLOAT32));
  }

  static get_properties()
  {
    if (!OcaDynamicsCurve_p)
    {
      OcaDynamicsCurve_p = new Properties([
          new Property("nSegments", new signature(UINT8), 4, 1, false, false, null),
          new Property("Threshold", new signature(LIST(FLOAT32)), 4, 2, false, false, null),
          new Property("Slope", new signature(LIST(FLOAT32)), 4, 3, false, false, null),
          new Property("KneeParameter", new signature(LIST(FLOAT32)), 4, 4, false, false, null),
          new Property("DynamicGainFloor", new signature(FLOAT32), 4, 5, false, false, null),
          new Property("DynamicGainCeiling", new signature(FLOAT32), 4, 6, false, false, null),
        ], 4, OcaActuator.get_properties());
    }

    return OcaDynamicsCurve_p;
  }

  static GetPropertySync()
  {
    let sync = OcaDynamicsCurve_sync;
    if (!sync)
    {
      OcaDynamicsCurve_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._nSegmentsChanged) event.Dispose();
    if (event = this._ThresholdChanged) event.Dispose();
    if (event = this._SlopeChanged) event.Dispose();
    if (event = this._KneeParameterChanged) event.Dispose();
    if (event = this._DynamicGainFloorChanged) event.Dispose();
    if (event = this._DynamicGainCeilingChanged) event.Dispose();
  }
}


let OcaSignalGenerator_GetFrequency1_rs = null;
let OcaSignalGenerator_SetFrequency1_as = null;
let OcaSignalGenerator_GetFrequency2_rs = null;
let OcaSignalGenerator_SetFrequency2_as = null;
let OcaSignalGenerator_GetLevel_rs = null;
let OcaSignalGenerator_SetLevel_as = null;
let OcaSignalGenerator_GetWaveform_rs = null;
let OcaSignalGenerator_SetWaveform_as = null;
let OcaSignalGenerator_GetSweepType_rs = null;
let OcaSignalGenerator_SetSweepType_as = null;
let OcaSignalGenerator_GetSweepTime_rs = null;
let OcaSignalGenerator_SetSweepTime_as = null;
let OcaSignalGenerator_GetSweepRepeat_rs = null;
let OcaSignalGenerator_SetSweepRepeat_as = null;
let OcaSignalGenerator_GetGenerating_rs = null;
let OcaSignalGenerator_p = null;

let OcaSignalGenerator_sync = null;

/**
 * Multiwaveform signal generator with optional sweep capability.
 * @extends OcaActuator
 */
export class OcaSignalGenerator extends OcaActuator
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._Frequency1Changed = null;
    this._Frequency2Changed = null;
    this._LevelChanged = null;
    this._WaveformChanged = null;
    this._SweepTypeChanged = null;
    this._SweepTimeChanged = null;
    this._SweepRepeatChanged = null;
    this._GeneratingChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0001\u0011";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Gets the value of the Frequency1 property. The return value indicates
   * whether the property was successfully retrieved.
   * @retval {Promise}
   */
  GetFrequency1()
  {
    let rs = OcaSignalGenerator_GetFrequency1_rs;
    if (!rs) rs = OcaSignalGenerator_GetFrequency1_rs = new signature(FLOAT32, FLOAT32, FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the Frequency1 property. The return value indicates
   * whether the property was successfully set.
   * @param frequency {OcaFrequency}
   *
   * @retval {Promise}
   */
  SetFrequency1(frequency)
  {
    let as = OcaSignalGenerator_SetFrequency1_as;
    if (!as) as = OcaSignalGenerator_SetFrequency1_as = new signature(FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 2, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the value of the Frequency2 property. The return value indicates
   * whether the property was successfully retrieved.
   * @retval {Promise}
   */
  GetFrequency2()
  {
    let rs = OcaSignalGenerator_GetFrequency2_rs;
    if (!rs) rs = OcaSignalGenerator_GetFrequency2_rs = new signature(FLOAT32, FLOAT32, FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 3, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the Frequency2 property. The return value indicates
   * whether the property was successfully set.
   * @param frequency {OcaFrequency}
   *
   * @retval {Promise}
   */
  SetFrequency2(frequency)
  {
    let as = OcaSignalGenerator_SetFrequency2_as;
    if (!as) as = OcaSignalGenerator_SetFrequency2_as = new signature(FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 4, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the value of the Level property. The return value indicates
   * whether the property was successfully retrieved.
   * @retval {Promise}
   */
  GetLevel()
  {
    let rs = OcaSignalGenerator_GetLevel_rs;
    if (!rs) rs = OcaSignalGenerator_GetLevel_rs = new signature(FLOAT32, FLOAT32, FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 5, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the Level property. The return value indicates
   * whether the property was successfully set.
   * @param Level {OcaDBz}
   *
   * @retval {Promise}
   */
  SetLevel(Level)
  {
    let as = OcaSignalGenerator_SetLevel_as;
    if (!as) as = OcaSignalGenerator_SetLevel_as = new signature(FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 6, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the value of the Waveform property. The return value indicates
   * whether the property was successfully retrieved.
   * @retval {Promise}
   */
  GetWaveform()
  {
    let rs = OcaSignalGenerator_GetWaveform_rs;
    if (!rs) rs = OcaSignalGenerator_GetWaveform_rs = new signature(OcaWaveformType);
    const cmd = new CommandRrq(this.ono, 4, 7, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the Waveform property. The return value indicates
   * whether the property was successfully set.
   * @param waveform {OcaWaveformType}
   *
   * @retval {Promise}
   */
  SetWaveform(waveform)
  {
    let as = OcaSignalGenerator_SetWaveform_as;
    if (!as) as = OcaSignalGenerator_SetWaveform_as = new signature(OcaWaveformType);
    const cmd = new CommandRrq(this.ono, 4, 8, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the value of the SweepType property. The return value indicates
   * whether the property was successfully retrieved.
   * @retval {Promise}
   */
  GetSweepType()
  {
    let rs = OcaSignalGenerator_GetSweepType_rs;
    if (!rs) rs = OcaSignalGenerator_GetSweepType_rs = new signature(OcaSweepType);
    const cmd = new CommandRrq(this.ono, 4, 9, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the SweepType property. The return value indicates
   * whether the property was successfully set.
   * @param sweepType {OcaSweepType}
   *
   * @retval {Promise}
   */
  SetSweepType(sweepType)
  {
    let as = OcaSignalGenerator_SetSweepType_as;
    if (!as) as = OcaSignalGenerator_SetSweepType_as = new signature(OcaSweepType);
    const cmd = new CommandRrq(this.ono, 4, 10, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the value of the SweepTime property. The return value indicates
   * whether the property was successfully retrieved.
   * @retval {Promise}
   */
  GetSweepTime()
  {
    let rs = OcaSignalGenerator_GetSweepTime_rs;
    if (!rs) rs = OcaSignalGenerator_GetSweepTime_rs = new signature(FLOAT32, FLOAT32, FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 11, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the SweepTime property. The return value indicates
   * whether the property was successfully set.
   * @param sweepTime {OcaTimeInterval}
   *
   * @retval {Promise}
   */
  SetSweepTime(sweepTime)
  {
    let as = OcaSignalGenerator_SetSweepTime_as;
    if (!as) as = OcaSignalGenerator_SetSweepTime_as = new signature(FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 12, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the value of the SweepRepeat property. The return value indicates
   * whether the property was successfully retrieved.
   * @retval {Promise}
   */
  GetSweepRepeat()
  {
    let rs = OcaSignalGenerator_GetSweepRepeat_rs;
    if (!rs) rs = OcaSignalGenerator_GetSweepRepeat_rs = new signature(BOOLEAN);
    const cmd = new CommandRrq(this.ono, 4, 13, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the SweepRepeat property. The return value indicates
   * whether the property was successfully set.
   * @param sweepRepeat {OcaBoolean}
   *
   * @retval {Promise}
   */
  SetSweepRepeat(sweepRepeat)
  {
    let as = OcaSignalGenerator_SetSweepRepeat_as;
    if (!as) as = OcaSignalGenerator_SetSweepRepeat_as = new signature(BOOLEAN);
    const cmd = new CommandRrq(this.ono, 4, 14, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the value of the Generating property. The return value indicates
   * whether the property was successfully retrieved.
   * @retval {Promise}
   */
  GetGenerating()
  {
    let rs = OcaSignalGenerator_GetGenerating_rs;
    if (!rs) rs = OcaSignalGenerator_GetGenerating_rs = new signature(BOOLEAN);
    const cmd = new CommandRrq(this.ono, 4, 15, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Starts the signal generator. The return value indicates whether the
   * signal generator was successfully started.
   * @retval {Promise}
   */
  Start()
  {
    const cmd = new CommandRrq(this.ono, 4, 16, 0);
    return this.device.send_command(cmd);
  }

  /**
   * Stops the signal generator. The return value indicates whether the
   * signal generator was successfully stopped.
   * @retval {Promise}
   */
  Stop()
  {
    const cmd = new CommandRrq(this.ono, 4, 17, 0);
    return this.device.send_command(cmd);
  }

  /**
   * Event that is triggered when the value of Frequency1 changes.
   * @type {PropertyEvent}
   */
  get OnFrequency1Changed()
  {
    const event = this._Frequency1Changed;

    if (event) return event;

    return this._Frequency1Changed =
      new PropertyEvent(this, new OcaPropertyID(4, 1), new signature(FLOAT32));
  }

  /**
   * Event that is triggered when the value of Frequency2 changes.
   * @type {PropertyEvent}
   */
  get OnFrequency2Changed()
  {
    const event = this._Frequency2Changed;

    if (event) return event;

    return this._Frequency2Changed =
      new PropertyEvent(this, new OcaPropertyID(4, 2), new signature(FLOAT32));
  }

  /**
   * Event that is triggered when the value of Level changes.
   * @type {PropertyEvent}
   */
  get OnLevelChanged()
  {
    const event = this._LevelChanged;

    if (event) return event;

    return this._LevelChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 3), new signature(FLOAT32));
  }

  /**
   * Event that is triggered when the value of Waveform changes.
   * @type {PropertyEvent}
   */
  get OnWaveformChanged()
  {
    const event = this._WaveformChanged;

    if (event) return event;

    return this._WaveformChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 4), new signature(OcaWaveformType));
  }

  /**
   * Event that is triggered when the value of SweepType changes.
   * @type {PropertyEvent}
   */
  get OnSweepTypeChanged()
  {
    const event = this._SweepTypeChanged;

    if (event) return event;

    return this._SweepTypeChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 5), new signature(OcaSweepType));
  }

  /**
   * Event that is triggered when the value of SweepTime changes.
   * @type {PropertyEvent}
   */
  get OnSweepTimeChanged()
  {
    const event = this._SweepTimeChanged;

    if (event) return event;

    return this._SweepTimeChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 6), new signature(FLOAT32));
  }

  /**
   * Event that is triggered when the value of SweepRepeat changes.
   * @type {PropertyEvent}
   */
  get OnSweepRepeatChanged()
  {
    const event = this._SweepRepeatChanged;

    if (event) return event;

    return this._SweepRepeatChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 7), new signature(BOOLEAN));
  }

  /**
   * Event that is triggered when the value of Generating changes.
   * @type {PropertyEvent}
   */
  get OnGeneratingChanged()
  {
    const event = this._GeneratingChanged;

    if (event) return event;

    return this._GeneratingChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 8), new signature(BOOLEAN));
  }

  static get_properties()
  {
    if (!OcaSignalGenerator_p)
    {
      OcaSignalGenerator_p = new Properties([
          new Property("Frequency1", new signature(FLOAT32), 4, 1, false, false, null),
          new Property("Frequency2", new signature(FLOAT32), 4, 2, false, false, null),
          new Property("Level", new signature(FLOAT32), 4, 3, false, false, null),
          new Property("Waveform", new signature(OcaWaveformType), 4, 4, false, false, null),
          new Property("SweepType", new signature(OcaSweepType), 4, 5, false, false, null),
          new Property("SweepTime", new signature(FLOAT32), 4, 6, false, false, null),
          new Property("SweepRepeat", new signature(BOOLEAN), 4, 7, false, false, null),
          new Property("Generating", new signature(BOOLEAN), 4, 8, false, false, null),
        ], 4, OcaActuator.get_properties());
    }

    return OcaSignalGenerator_p;
  }

  static GetPropertySync()
  {
    let sync = OcaSignalGenerator_sync;
    if (!sync)
    {
      OcaSignalGenerator_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._Frequency1Changed) event.Dispose();
    if (event = this._Frequency2Changed) event.Dispose();
    if (event = this._LevelChanged) event.Dispose();
    if (event = this._WaveformChanged) event.Dispose();
    if (event = this._SweepTypeChanged) event.Dispose();
    if (event = this._SweepTimeChanged) event.Dispose();
    if (event = this._SweepRepeatChanged) event.Dispose();
    if (event = this._GeneratingChanged) event.Dispose();
  }
}


let OcaSignalInput_p = null;

let OcaSignalInput_sync = null;

/**
 * A set of one or more non-network signal inputs. Number of channels is
 * set at construction time. This class has no native properties or
 * methods - they are all inherited from <b>OcaWorker</b> and above. It
 * is defined as a separate class as an aid to enumeration and signal
 * flow definition.
 * @extends OcaActuator
 */
export class OcaSignalInput extends OcaActuator
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0001\u0012";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  static get_properties()
  {
    if (!OcaSignalInput_p)
    {
      OcaSignalInput_p = new Properties([
        ], 4, OcaActuator.get_properties());
    }

    return OcaSignalInput_p;
  }

  static GetPropertySync()
  {
    let sync = OcaSignalInput_sync;
    if (!sync)
    {
      OcaSignalInput_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
  }
}


let OcaSignalOutput_p = null;

let OcaSignalOutput_sync = null;

/**
 * A set of one or more non-network signal outputs. Number of channels is
 * set at construction time. This class has no native properties or
 * methods - they are all inherited from <b>OcaWorker</b> and above. It
 * is defined as a separate class as an aid to enumeration and signal
 * flow definition.
 * @extends OcaActuator
 */
export class OcaSignalOutput extends OcaActuator
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0001\u0013";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  static get_properties()
  {
    if (!OcaSignalOutput_p)
    {
      OcaSignalOutput_p = new Properties([
        ], 4, OcaActuator.get_properties());
    }

    return OcaSignalOutput_p;
  }

  static GetPropertySync()
  {
    let sync = OcaSignalOutput_sync;
    if (!sync)
    {
      OcaSignalOutput_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
  }
}


let OcaTemperatureActuator_GetTemperature_rs = null;
let OcaTemperatureActuator_SetTemperature_as = null;
let OcaTemperatureActuator_p = null;

let OcaTemperatureActuator_sync = null;

/**
 * A temperature actuator. Works in Celsius.
 * @extends OcaActuator
 */
export class OcaTemperatureActuator extends OcaActuator
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._TemperatureChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0001\u0014";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Gets the value of the Temperature property. The return value indicates
   * whether the property was successfully retrieved.
   * @retval {Promise}
   */
  GetTemperature()
  {
    let rs = OcaTemperatureActuator_GetTemperature_rs;
    if (!rs) rs = OcaTemperatureActuator_GetTemperature_rs = new signature(FLOAT32, FLOAT32, FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the Temperature property. The return value indicates
   * whether the property was successfully set.
   * @param temperature {OcaTemperature}
   *
   * @retval {Promise}
   */
  SetTemperature(temperature)
  {
    let as = OcaTemperatureActuator_SetTemperature_as;
    if (!as) as = OcaTemperatureActuator_SetTemperature_as = new signature(FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 2, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Event that is triggered when the value of Temperature changes.
   * @type {PropertyEvent}
   */
  get OnTemperatureChanged()
  {
    const event = this._TemperatureChanged;

    if (event) return event;

    return this._TemperatureChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 1), new signature(FLOAT32));
  }

  static get_properties()
  {
    if (!OcaTemperatureActuator_p)
    {
      OcaTemperatureActuator_p = new Properties([
          new Property("Temperature", new signature(FLOAT32), 4, 1, false, false, null),
        ], 4, OcaActuator.get_properties());
    }

    return OcaTemperatureActuator_p;
  }

  static GetPropertySync()
  {
    let sync = OcaTemperatureActuator_sync;
    if (!sync)
    {
      OcaTemperatureActuator_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._TemperatureChanged) event.Dispose();
  }
}


let OcaIdentificationActuator_GetActive_rs = null;
let OcaIdentificationActuator_SetActive_as = null;
let OcaIdentificationActuator_p = null;

let OcaIdentificationActuator_sync = null;

/**
 * Represents a function that turns on some kind of human-detectable
 * indicator for purposes of device identification during network setup.
 * Physical form of indicator is not defined by OCA, so it could be
 * anything, e.g. <ul> <li>LED</li> <li>Foghorn</li> <li>Smoke
 * emitter</li> <li>Little waving robot hand wearing white glove</li>
 * <li>Jack-in-the-box popout</li> <li>et cetera</li> </ul>
 * @extends OcaActuator
 */
export class OcaIdentificationActuator extends OcaActuator
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._activeChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0001\u0015";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Gets the current identification indicator activity state. The return
   * value indicates whether the state was successfully retrieved.
   * @retval {Promise}
   */
  GetActive()
  {
    let rs = OcaIdentificationActuator_GetActive_rs;
    if (!rs) rs = OcaIdentificationActuator_GetActive_rs = new signature(BOOLEAN);
    const cmd = new CommandRrq(this.ono, 4, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the Active state (i.e. value of the Active property). The return
   * value indicates whether the state was successfully set.
   * @param active {OcaBoolean}
   *
   * @retval {Promise}
   */
  SetActive(active)
  {
    let as = OcaIdentificationActuator_SetActive_as;
    if (!as) as = OcaIdentificationActuator_SetActive_as = new signature(BOOLEAN);
    const cmd = new CommandRrq(this.ono, 4, 2, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Event that is triggered when the value of active changes.
   * @type {PropertyEvent}
   */
  get OnactiveChanged()
  {
    const event = this._activeChanged;

    if (event) return event;

    return this._activeChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 1), new signature(BOOLEAN));
  }

  static get_properties()
  {
    if (!OcaIdentificationActuator_p)
    {
      OcaIdentificationActuator_p = new Properties([
          new Property("active", new signature(BOOLEAN), 4, 1, false, false, null),
        ], 4, OcaActuator.get_properties());
    }

    return OcaIdentificationActuator_p;
  }

  static GetPropertySync()
  {
    let sync = OcaIdentificationActuator_sync;
    if (!sync)
    {
      OcaIdentificationActuator_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._activeChanged) event.Dispose();
  }
}


let OcaSummingPoint_p = null;

let OcaSummingPoint_sync = null;

/**
 * Actuator with no control parameters, used as a simple node to
 * represent summations in block signal flows.
 * @extends OcaActuator
 */
export class OcaSummingPoint extends OcaActuator
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
  }

  /**
   * This property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0001\u0016";
  }

  /**
   * This property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 1;
  }


  static get_properties()
  {
    if (!OcaSummingPoint_p)
    {
      OcaSummingPoint_p = new Properties([
        ], 4, OcaActuator.get_properties());
    }

    return OcaSummingPoint_p;
  }

  static GetPropertySync()
  {
    let sync = OcaSummingPoint_sync;
    if (!sync)
    {
      OcaSummingPoint_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
  }
}


let OcaBasicActuator_p = null;

let OcaBasicActuator_sync = null;

/**
 * Abstract base class for weakly typed actuators.
 * @extends OcaActuator
 */
export class OcaBasicActuator extends OcaActuator
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0001\u0001";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  static get_properties()
  {
    if (!OcaBasicActuator_p)
    {
      OcaBasicActuator_p = new Properties([
        ], 4, OcaActuator.get_properties());
    }

    return OcaBasicActuator_p;
  }

  static GetPropertySync()
  {
    let sync = OcaBasicActuator_sync;
    if (!sync)
    {
      OcaBasicActuator_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
  }
}


let OcaBooleanActuator_GetSetting_rs = null;
let OcaBooleanActuator_SetSetting_as = null;
let OcaBooleanActuator_p = null;

let OcaBooleanActuator_sync = null;

/**
 * Basic boolean actuator.
 * @extends OcaBasicActuator
 */
export class OcaBooleanActuator extends OcaBasicActuator
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._SettingChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0001\u0001\u0001";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Gets the <b>Setting </b>property. The return value indicates whether
   * the data was successfully retrieved.
   * @retval {Promise}
   */
  GetSetting()
  {
    let rs = OcaBooleanActuator_GetSetting_rs;
    if (!rs) rs = OcaBooleanActuator_GetSetting_rs = new signature(BOOLEAN);
    const cmd = new CommandRrq(this.ono, 5, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the <b>Setting </b>property. The return value indicates whether
   * the property was successfully set.
   * @param Setting {OcaBoolean}
   *
   * @retval {Promise}
   */
  SetSetting(Setting)
  {
    let as = OcaBooleanActuator_SetSetting_as;
    if (!as) as = OcaBooleanActuator_SetSetting_as = new signature(BOOLEAN);
    const cmd = new CommandRrq(this.ono, 5, 2, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Event that is triggered when the value of Setting changes.
   * @type {PropertyEvent}
   */
  get OnSettingChanged()
  {
    const event = this._SettingChanged;

    if (event) return event;

    return this._SettingChanged =
      new PropertyEvent(this, new OcaPropertyID(5, 1), new signature(BOOLEAN));
  }

  static get_properties()
  {
    if (!OcaBooleanActuator_p)
    {
      OcaBooleanActuator_p = new Properties([
          new Property("Setting", new signature(BOOLEAN), 5, 1, false, false, null),
        ], 5, OcaBasicActuator.get_properties());
    }

    return OcaBooleanActuator_p;
  }

  static GetPropertySync()
  {
    let sync = OcaBooleanActuator_sync;
    if (!sync)
    {
      OcaBooleanActuator_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._SettingChanged) event.Dispose();
  }
}


let OcaInt8Actuator_GetSetting_rs = null;
let OcaInt8Actuator_SetSetting_as = null;
let OcaInt8Actuator_p = null;

let OcaInt8Actuator_sync = null;

/**
 * Basic int8 actuator.
 * @extends OcaBasicActuator
 */
export class OcaInt8Actuator extends OcaBasicActuator
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._SettingChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0001\u0001\u0002";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Gets the value and limits of the <b>Setting </b>property. The return
   * value indicates whether the data was successfully retrieved.
   * @retval {Promise}
   */
  GetSetting()
  {
    let rs = OcaInt8Actuator_GetSetting_rs;
    if (!rs) rs = OcaInt8Actuator_GetSetting_rs = new signature(INT8, INT8, INT8);
    const cmd = new CommandRrq(this.ono, 5, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the <b>Setting </b>property. The return value indicates whether
   * the property was successfully set.
   * @param Setting {OcaInt8}
   *
   * @retval {Promise}
   */
  SetSetting(Setting)
  {
    let as = OcaInt8Actuator_SetSetting_as;
    if (!as) as = OcaInt8Actuator_SetSetting_as = new signature(INT8);
    const cmd = new CommandRrq(this.ono, 5, 2, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Event that is triggered when the value of Setting changes.
   * @type {PropertyEvent}
   */
  get OnSettingChanged()
  {
    const event = this._SettingChanged;

    if (event) return event;

    return this._SettingChanged =
      new PropertyEvent(this, new OcaPropertyID(5, 1), new signature(INT8));
  }

  static get_properties()
  {
    if (!OcaInt8Actuator_p)
    {
      OcaInt8Actuator_p = new Properties([
          new Property("Setting", new signature(INT8), 5, 1, false, false, null),
        ], 5, OcaBasicActuator.get_properties());
    }

    return OcaInt8Actuator_p;
  }

  static GetPropertySync()
  {
    let sync = OcaInt8Actuator_sync;
    if (!sync)
    {
      OcaInt8Actuator_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._SettingChanged) event.Dispose();
  }
}


let OcaInt16Actuator_GetSetting_rs = null;
let OcaInt16Actuator_SetSetting_as = null;
let OcaInt16Actuator_p = null;

let OcaInt16Actuator_sync = null;

/**
 * Basic int16 actuator.
 * @extends OcaBasicActuator
 */
export class OcaInt16Actuator extends OcaBasicActuator
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._SettingChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0001\u0001\u0003";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Gets the value and limits of the <b>Setting </b>property. The return
   * value indicates whether the data was successfully retrieved.
   * @retval {Promise}
   */
  GetSetting()
  {
    let rs = OcaInt16Actuator_GetSetting_rs;
    if (!rs) rs = OcaInt16Actuator_GetSetting_rs = new signature(INT16, INT16, INT16);
    const cmd = new CommandRrq(this.ono, 5, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the <b>Setting </b>property. The return value indicates whether
   * the property was successfully set.
   * @param Setting {OcaInt16}
   *
   * @retval {Promise}
   */
  SetSetting(Setting)
  {
    let as = OcaInt16Actuator_SetSetting_as;
    if (!as) as = OcaInt16Actuator_SetSetting_as = new signature(INT16);
    const cmd = new CommandRrq(this.ono, 5, 2, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Event that is triggered when the value of Setting changes.
   * @type {PropertyEvent}
   */
  get OnSettingChanged()
  {
    const event = this._SettingChanged;

    if (event) return event;

    return this._SettingChanged =
      new PropertyEvent(this, new OcaPropertyID(5, 1), new signature(INT16));
  }

  static get_properties()
  {
    if (!OcaInt16Actuator_p)
    {
      OcaInt16Actuator_p = new Properties([
          new Property("Setting", new signature(INT16), 5, 1, false, false, null),
        ], 5, OcaBasicActuator.get_properties());
    }

    return OcaInt16Actuator_p;
  }

  static GetPropertySync()
  {
    let sync = OcaInt16Actuator_sync;
    if (!sync)
    {
      OcaInt16Actuator_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._SettingChanged) event.Dispose();
  }
}


let OcaInt32Actuator_GetSetting_rs = null;
let OcaInt32Actuator_SetSetting_as = null;
let OcaInt32Actuator_p = null;

let OcaInt32Actuator_sync = null;

/**
 * Basic int32 actuator.
 * @extends OcaBasicActuator
 */
export class OcaInt32Actuator extends OcaBasicActuator
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._SettingChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0001\u0001\u0004";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Gets the value and limits of the <b>Setting </b>property. The return
   * value indicates whether the data was successfully retrieved.
   * @retval {Promise}
   */
  GetSetting()
  {
    let rs = OcaInt32Actuator_GetSetting_rs;
    if (!rs) rs = OcaInt32Actuator_GetSetting_rs = new signature(INT32, INT32, INT32);
    const cmd = new CommandRrq(this.ono, 5, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the<b> Setting </b>property. The return value indicates whether
   * the property was successfully set.
   * @param Setting {OcaInt32}
   *
   * @retval {Promise}
   */
  SetSetting(Setting)
  {
    let as = OcaInt32Actuator_SetSetting_as;
    if (!as) as = OcaInt32Actuator_SetSetting_as = new signature(INT32);
    const cmd = new CommandRrq(this.ono, 5, 2, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Event that is triggered when the value of Setting changes.
   * @type {PropertyEvent}
   */
  get OnSettingChanged()
  {
    const event = this._SettingChanged;

    if (event) return event;

    return this._SettingChanged =
      new PropertyEvent(this, new OcaPropertyID(5, 1), new signature(INT32));
  }

  static get_properties()
  {
    if (!OcaInt32Actuator_p)
    {
      OcaInt32Actuator_p = new Properties([
          new Property("Setting", new signature(INT32), 5, 1, false, false, null),
        ], 5, OcaBasicActuator.get_properties());
    }

    return OcaInt32Actuator_p;
  }

  static GetPropertySync()
  {
    let sync = OcaInt32Actuator_sync;
    if (!sync)
    {
      OcaInt32Actuator_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._SettingChanged) event.Dispose();
  }
}


let OcaInt64Actuator_GetSetting_rs = null;
let OcaInt64Actuator_SetSetting_as = null;
let OcaInt64Actuator_p = null;

let OcaInt64Actuator_sync = null;

/**
 * Basic int64 actuator.
 * @extends OcaBasicActuator
 */
export class OcaInt64Actuator extends OcaBasicActuator
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._SettingChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0001\u0001\u0005";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Gets the value and limits of the <b>Setting </b>property. The return
   * value indicates whether the data was successfully retrieved.
   * @retval {Promise}
   */
  GetSetting()
  {
    let rs = OcaInt64Actuator_GetSetting_rs;
    if (!rs) rs = OcaInt64Actuator_GetSetting_rs = new signature(INT64, INT64, INT64);
    const cmd = new CommandRrq(this.ono, 5, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the <b>Setting </b>property. The return value indicates whether
   * the property was successfully set.
   * @param Value {OcaInt64}
   *
   * @retval {Promise}
   */
  SetSetting(Value)
  {
    let as = OcaInt64Actuator_SetSetting_as;
    if (!as) as = OcaInt64Actuator_SetSetting_as = new signature(INT64);
    const cmd = new CommandRrq(this.ono, 5, 2, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Event that is triggered when the value of Setting changes.
   * @type {PropertyEvent}
   */
  get OnSettingChanged()
  {
    const event = this._SettingChanged;

    if (event) return event;

    return this._SettingChanged =
      new PropertyEvent(this, new OcaPropertyID(5, 1), new signature(INT64));
  }

  static get_properties()
  {
    if (!OcaInt64Actuator_p)
    {
      OcaInt64Actuator_p = new Properties([
          new Property("Setting", new signature(INT64), 5, 1, false, false, null),
        ], 5, OcaBasicActuator.get_properties());
    }

    return OcaInt64Actuator_p;
  }

  static GetPropertySync()
  {
    let sync = OcaInt64Actuator_sync;
    if (!sync)
    {
      OcaInt64Actuator_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._SettingChanged) event.Dispose();
  }
}


let OcaUint8Actuator_GetSetting_rs = null;
let OcaUint8Actuator_SetSetting_as = null;
let OcaUint8Actuator_p = null;

let OcaUint8Actuator_sync = null;

/**
 * Basic uint8 actuator.
 * @extends OcaBasicActuator
 */
export class OcaUint8Actuator extends OcaBasicActuator
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._SettingChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0001\u0001\u0006";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Gets the value and limits of the <b>Setting </b>property. The return
   * value indicates whether the data was successfully retrieved.
   * @retval {Promise}
   */
  GetSetting()
  {
    let rs = OcaUint8Actuator_GetSetting_rs;
    if (!rs) rs = OcaUint8Actuator_GetSetting_rs = new signature(UINT8, UINT8, UINT8);
    const cmd = new CommandRrq(this.ono, 5, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the <b>Setting </b>property. The return value indicates whether
   * the property was successfully set.
   * @param Setting {OcaUint8}
   *
   * @retval {Promise}
   */
  SetSetting(Setting)
  {
    let as = OcaUint8Actuator_SetSetting_as;
    if (!as) as = OcaUint8Actuator_SetSetting_as = new signature(UINT8);
    const cmd = new CommandRrq(this.ono, 5, 2, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Event that is triggered when the value of Setting changes.
   * @type {PropertyEvent}
   */
  get OnSettingChanged()
  {
    const event = this._SettingChanged;

    if (event) return event;

    return this._SettingChanged =
      new PropertyEvent(this, new OcaPropertyID(5, 1), new signature(UINT8));
  }

  static get_properties()
  {
    if (!OcaUint8Actuator_p)
    {
      OcaUint8Actuator_p = new Properties([
          new Property("Setting", new signature(UINT8), 5, 1, false, false, null),
        ], 5, OcaBasicActuator.get_properties());
    }

    return OcaUint8Actuator_p;
  }

  static GetPropertySync()
  {
    let sync = OcaUint8Actuator_sync;
    if (!sync)
    {
      OcaUint8Actuator_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._SettingChanged) event.Dispose();
  }
}


let OcaUint16Actuator_GetSetting_rs = null;
let OcaUint16Actuator_SetSetting_as = null;
let OcaUint16Actuator_p = null;

let OcaUint16Actuator_sync = null;

/**
 * Basic uint16 actuator.
 * @extends OcaBasicActuator
 */
export class OcaUint16Actuator extends OcaBasicActuator
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._SettingChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0001\u0001\u0007";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Gets the value and limits of the Setting property. The return value
   * indicates whether the data was successfully retrieved.
   * @retval {Promise}
   */
  GetSetting()
  {
    let rs = OcaUint16Actuator_GetSetting_rs;
    if (!rs) rs = OcaUint16Actuator_GetSetting_rs = new signature(UINT16, UINT16, UINT16);
    const cmd = new CommandRrq(this.ono, 5, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the <b>Setting </b>property. The return value
   * indicates whether the property was successfully set.
   * @param Setting {OcaUint16}
   *
   * @retval {Promise}
   */
  SetSetting(Setting)
  {
    let as = OcaUint16Actuator_SetSetting_as;
    if (!as) as = OcaUint16Actuator_SetSetting_as = new signature(UINT16);
    const cmd = new CommandRrq(this.ono, 5, 2, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Event that is triggered when the value of Setting changes.
   * @type {PropertyEvent}
   */
  get OnSettingChanged()
  {
    const event = this._SettingChanged;

    if (event) return event;

    return this._SettingChanged =
      new PropertyEvent(this, new OcaPropertyID(5, 1), new signature(UINT16));
  }

  static get_properties()
  {
    if (!OcaUint16Actuator_p)
    {
      OcaUint16Actuator_p = new Properties([
          new Property("Setting", new signature(UINT16), 5, 1, false, false, null),
        ], 5, OcaBasicActuator.get_properties());
    }

    return OcaUint16Actuator_p;
  }

  static GetPropertySync()
  {
    let sync = OcaUint16Actuator_sync;
    if (!sync)
    {
      OcaUint16Actuator_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._SettingChanged) event.Dispose();
  }
}


let OcaUint32Actuator_GetSetting_rs = null;
let OcaUint32Actuator_SetSetting_as = null;
let OcaUint32Actuator_p = null;

let OcaUint32Actuator_sync = null;

/**
 * Basic uint32 actuator.
 * @extends OcaBasicActuator
 */
export class OcaUint32Actuator extends OcaBasicActuator
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._SettingChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0001\u0001\b";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Gets the value and limits of the <b>Setting </b>property. The return
   * value indicates whether the data was successfully retrieved.
   * @retval {Promise}
   */
  GetSetting()
  {
    let rs = OcaUint32Actuator_GetSetting_rs;
    if (!rs) rs = OcaUint32Actuator_GetSetting_rs = new signature(UINT32, UINT32, UINT32);
    const cmd = new CommandRrq(this.ono, 5, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the <b>Setting </b>property. The return value indicates whether
   * the property was successfully set.
   * @param Setting {OcaUint32}
   *
   * @retval {Promise}
   */
  SetSetting(Setting)
  {
    let as = OcaUint32Actuator_SetSetting_as;
    if (!as) as = OcaUint32Actuator_SetSetting_as = new signature(UINT32);
    const cmd = new CommandRrq(this.ono, 5, 2, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Event that is triggered when the value of Setting changes.
   * @type {PropertyEvent}
   */
  get OnSettingChanged()
  {
    const event = this._SettingChanged;

    if (event) return event;

    return this._SettingChanged =
      new PropertyEvent(this, new OcaPropertyID(5, 1), new signature(UINT32));
  }

  static get_properties()
  {
    if (!OcaUint32Actuator_p)
    {
      OcaUint32Actuator_p = new Properties([
          new Property("Setting", new signature(UINT32), 5, 1, false, false, null),
        ], 5, OcaBasicActuator.get_properties());
    }

    return OcaUint32Actuator_p;
  }

  static GetPropertySync()
  {
    let sync = OcaUint32Actuator_sync;
    if (!sync)
    {
      OcaUint32Actuator_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._SettingChanged) event.Dispose();
  }
}


let OcaUint64Actuator_GetSetting_rs = null;
let OcaUint64Actuator_SetSetting_as = null;
let OcaUint64Actuator_p = null;

let OcaUint64Actuator_sync = null;

/**
 * Basic Uint64 actuator.
 * @extends OcaBasicActuator
 */
export class OcaUint64Actuator extends OcaBasicActuator
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._SettingChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0001\u0001\t";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Gets the value and limits of the Gain property. The return value
   * indicates whether the data was successfully retrieved.
   * @retval {Promise}
   */
  GetSetting()
  {
    let rs = OcaUint64Actuator_GetSetting_rs;
    if (!rs) rs = OcaUint64Actuator_GetSetting_rs = new signature(UINT64, UINT64, UINT64);
    const cmd = new CommandRrq(this.ono, 5, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the Level property. The return value indicates
   * whether the property was successfully set.
   * @param Setting {OcaUint64}
   *
   * @retval {Promise}
   */
  SetSetting(Setting)
  {
    let as = OcaUint64Actuator_SetSetting_as;
    if (!as) as = OcaUint64Actuator_SetSetting_as = new signature(UINT64);
    const cmd = new CommandRrq(this.ono, 5, 2, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Event that is triggered when the value of Setting changes.
   * @type {PropertyEvent}
   */
  get OnSettingChanged()
  {
    const event = this._SettingChanged;

    if (event) return event;

    return this._SettingChanged =
      new PropertyEvent(this, new OcaPropertyID(5, 1), new signature(UINT64));
  }

  static get_properties()
  {
    if (!OcaUint64Actuator_p)
    {
      OcaUint64Actuator_p = new Properties([
          new Property("Setting", new signature(UINT64), 5, 1, false, false, null),
        ], 5, OcaBasicActuator.get_properties());
    }

    return OcaUint64Actuator_p;
  }

  static GetPropertySync()
  {
    let sync = OcaUint64Actuator_sync;
    if (!sync)
    {
      OcaUint64Actuator_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._SettingChanged) event.Dispose();
  }
}


let OcaFloat32Actuator_GetSetting_rs = null;
let OcaFloat32Actuator_SetSetting_as = null;
let OcaFloat32Actuator_p = null;

let OcaFloat32Actuator_sync = null;

/**
 * Basic float32 actuator.
 * @extends OcaBasicActuator
 */
export class OcaFloat32Actuator extends OcaBasicActuator
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._SettingChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0001\u0001\n";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Gets the value and limits of the <b>Setting </b>property. The return
   * value indicates whether the data was successfully retrieved.
   * @retval {Promise}
   */
  GetSetting()
  {
    let rs = OcaFloat32Actuator_GetSetting_rs;
    if (!rs) rs = OcaFloat32Actuator_GetSetting_rs = new signature(FLOAT32, FLOAT32, FLOAT32);
    const cmd = new CommandRrq(this.ono, 5, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the <b>Setting </b>property. The return value indicates whether
   * the property was successfully set.
   * @param Setting {OcaFloat32}
   *
   * @retval {Promise}
   */
  SetSetting(Setting)
  {
    let as = OcaFloat32Actuator_SetSetting_as;
    if (!as) as = OcaFloat32Actuator_SetSetting_as = new signature(FLOAT32);
    const cmd = new CommandRrq(this.ono, 5, 2, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Event that is triggered when the value of Setting changes.
   * @type {PropertyEvent}
   */
  get OnSettingChanged()
  {
    const event = this._SettingChanged;

    if (event) return event;

    return this._SettingChanged =
      new PropertyEvent(this, new OcaPropertyID(5, 1), new signature(FLOAT32));
  }

  static get_properties()
  {
    if (!OcaFloat32Actuator_p)
    {
      OcaFloat32Actuator_p = new Properties([
          new Property("Setting", new signature(FLOAT32), 5, 1, false, false, null),
        ], 5, OcaBasicActuator.get_properties());
    }

    return OcaFloat32Actuator_p;
  }

  static GetPropertySync()
  {
    let sync = OcaFloat32Actuator_sync;
    if (!sync)
    {
      OcaFloat32Actuator_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._SettingChanged) event.Dispose();
  }
}


let OcaFloat64Actuator_GetSetting_rs = null;
let OcaFloat64Actuator_SetSetting_as = null;
let OcaFloat64Actuator_p = null;

let OcaFloat64Actuator_sync = null;

/**
 * Basic Float64 actuator.
 * @extends OcaBasicActuator
 */
export class OcaFloat64Actuator extends OcaBasicActuator
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._SettingChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0001\u0001\u000b";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Gets the value and limits of the <b>Setting </b>property. The return
   * value indicates whether the data was successfully retrieved.
   * @retval {Promise}
   */
  GetSetting()
  {
    let rs = OcaFloat64Actuator_GetSetting_rs;
    if (!rs) rs = OcaFloat64Actuator_GetSetting_rs = new signature(FLOAT64, FLOAT64, FLOAT64);
    const cmd = new CommandRrq(this.ono, 5, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the Level property. The return value indicates
   * whether the property was successfully set.
   * @param Setting {OcaFloat64}
   *
   * @retval {Promise}
   */
  SetSetting(Setting)
  {
    let as = OcaFloat64Actuator_SetSetting_as;
    if (!as) as = OcaFloat64Actuator_SetSetting_as = new signature(FLOAT64);
    const cmd = new CommandRrq(this.ono, 5, 2, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Event that is triggered when the value of Setting changes.
   * @type {PropertyEvent}
   */
  get OnSettingChanged()
  {
    const event = this._SettingChanged;

    if (event) return event;

    return this._SettingChanged =
      new PropertyEvent(this, new OcaPropertyID(5, 1), new signature(FLOAT64));
  }

  static get_properties()
  {
    if (!OcaFloat64Actuator_p)
    {
      OcaFloat64Actuator_p = new Properties([
          new Property("Setting", new signature(FLOAT64), 5, 1, false, false, null),
        ], 5, OcaBasicActuator.get_properties());
    }

    return OcaFloat64Actuator_p;
  }

  static GetPropertySync()
  {
    let sync = OcaFloat64Actuator_sync;
    if (!sync)
    {
      OcaFloat64Actuator_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._SettingChanged) event.Dispose();
  }
}


let OcaStringActuator_GetValue_rs = null;
let OcaStringActuator_SetValue_as = null;
let OcaStringActuator_GetMaxLen_rs = null;
let OcaStringActuator_p = null;

let OcaStringActuator_sync = null;

/**
 * String actuator.
 * @extends OcaBasicActuator
 */
export class OcaStringActuator extends OcaBasicActuator
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._SettingChanged = null;
    this._MaxLenChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0001\u0001\f";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Gets the value and max length of the Value property. The return value
   * indicates whether the data was successfully retrieved.
   * @retval {Promise}
   */
  GetValue()
  {
    let rs = OcaStringActuator_GetValue_rs;
    if (!rs) rs = OcaStringActuator_GetValue_rs = new signature(STRING);
    const cmd = new CommandRrq(this.ono, 5, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the Value property. The return value indicates
   * whether the property was successfully set.
   * @param Value {OcaString}
   *
   * @retval {Promise}
   */
  SetValue(Value)
  {
    let as = OcaStringActuator_SetValue_as;
    if (!as) as = OcaStringActuator_SetValue_as = new signature(STRING);
    const cmd = new CommandRrq(this.ono, 5, 2, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the maximum string length that this object can handle.
   * @retval {Promise}
   */
  GetMaxLen()
  {
    let rs = OcaStringActuator_GetMaxLen_rs;
    if (!rs) rs = OcaStringActuator_GetMaxLen_rs = new signature(UINT16);
    const cmd = new CommandRrq(this.ono, 5, 3, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Event that is triggered when the value of Setting changes.
   * @type {PropertyEvent}
   */
  get OnSettingChanged()
  {
    const event = this._SettingChanged;

    if (event) return event;

    return this._SettingChanged =
      new PropertyEvent(this, new OcaPropertyID(5, 1), new signature(STRING));
  }

  /**
   * Event that is triggered when the value of MaxLen changes.
   * @type {PropertyEvent}
   */
  get OnMaxLenChanged()
  {
    const event = this._MaxLenChanged;

    if (event) return event;

    return this._MaxLenChanged =
      new PropertyEvent(this, new OcaPropertyID(5, 2), new signature(UINT16));
  }

  static get_properties()
  {
    if (!OcaStringActuator_p)
    {
      OcaStringActuator_p = new Properties([
          new Property("Setting", new signature(STRING), 5, 1, false, false, null),
          new Property("MaxLen", new signature(UINT16), 5, 2, true, false, null),
        ], 5, OcaBasicActuator.get_properties());
    }

    return OcaStringActuator_p;
  }

  static GetPropertySync()
  {
    let sync = OcaStringActuator_sync;
    if (!sync)
    {
      OcaStringActuator_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._SettingChanged) event.Dispose();
    if (event = this._MaxLenChanged) event.Dispose();
  }
}


let OcaBitstringActuator_GetNrBits_rs = null;
let OcaBitstringActuator_GetBit_as = null;
let OcaBitstringActuator_GetBit_rs = null;
let OcaBitstringActuator_SetBit_as = null;
let OcaBitstringActuator_GetBitstring_rs = null;
let OcaBitstringActuator_SetBitstring_as = null;
let OcaBitstringActuator_p = null;

let OcaBitstringActuator_sync = null;

/**
 * Bitstring actuator. Maximum bitstring length is 65,536 bits.
 * @extends OcaBasicActuator
 */
export class OcaBitstringActuator extends OcaBasicActuator
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._BitstringChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0001\u0001\r";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Gets the number of bits in the string. The return value indicates
   * whether the property was successfully gathered.
   * @retval {Promise}
   */
  GetNrBits()
  {
    let rs = OcaBitstringActuator_GetNrBits_rs;
    if (!rs) rs = OcaBitstringActuator_GetNrBits_rs = new signature(UINT16);
    const cmd = new CommandRrq(this.ono, 5, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the bit value of the given bit. The return value indicates
   * whether the property was successfully gathered.
   * @param bitNr {OcaUint16}
   *
   * @retval {Promise}
   */
  GetBit(bitNr)
  {
    let as = OcaBitstringActuator_GetBit_as;
    if (!as) as = OcaBitstringActuator_GetBit_as = new signature(UINT16);
    let rs = OcaBitstringActuator_GetBit_rs;
    if (!rs) rs = OcaBitstringActuator_GetBit_rs = new signature(BOOLEAN);
    const cmd = new CommandRrq(this.ono, 5, 2, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the bit value of the given bit. The return value indicates
   * whether the property was successfully set.
   * @param bitNr {OcaUint16}
   *
   * @param Value {OcaBoolean}
   *
   * @retval {Promise}
   */
  SetBit(bitNr, Value)
  {
    let as = OcaBitstringActuator_SetBit_as;
    if (!as) as = OcaBitstringActuator_SetBit_as = new signature(UINT16, BOOLEAN);
    const cmd = new CommandRrq(this.ono, 5, 3, 2,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the entire bitstring.The return value indicates whether the
   * property was successfully gathered.
   * @retval {Promise}
   */
  GetBitstring()
  {
    let rs = OcaBitstringActuator_GetBitstring_rs;
    if (!rs) rs = OcaBitstringActuator_GetBitstring_rs = new signature(BITSTRING);
    const cmd = new CommandRrq(this.ono, 5, 4, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the entire bitstring. The return value indicates whether the
   * property was successfully set.
   * @param BitString {OcaBitstring}
   *
   * @retval {Promise}
   */
  SetBitstring(BitString)
  {
    let as = OcaBitstringActuator_SetBitstring_as;
    if (!as) as = OcaBitstringActuator_SetBitstring_as = new signature(BITSTRING);
    const cmd = new CommandRrq(this.ono, 5, 5, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Event that is triggered when the value of Bitstring changes.
   * @type {PropertyEvent}
   */
  get OnBitstringChanged()
  {
    const event = this._BitstringChanged;

    if (event) return event;

    return this._BitstringChanged =
      new PropertyEvent(this, new OcaPropertyID(5, 1), new signature(BITSTRING));
  }

  static get_properties()
  {
    if (!OcaBitstringActuator_p)
    {
      OcaBitstringActuator_p = new Properties([
          new Property("Bitstring", new signature(BITSTRING), 5, 1, false, false, null),
        ], 5, OcaBasicActuator.get_properties());
    }

    return OcaBitstringActuator_p;
  }

  static GetPropertySync()
  {
    let sync = OcaBitstringActuator_sync;
    if (!sync)
    {
      OcaBitstringActuator_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._BitstringChanged) event.Dispose();
  }
}


let OcaSensor_GetReadingState_rs = null;
let OcaSensor_p = null;

let OcaSensor_sync = null;

/**
 * Abstract base class for all sensor classes.
 * @extends OcaWorker
 */
export class OcaSensor extends OcaWorker
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._ReadingStateChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This is a
   * class property instead of an object property. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0002";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Gets the current reading state of the sensor. The return value
   * indicates whether the state was successfully retrived.
   * @retval {Promise}
   */
  GetReadingState()
  {
    let rs = OcaSensor_GetReadingState_rs;
    if (!rs) rs = OcaSensor_GetReadingState_rs = new signature(OcaSensorReadingState);
    const cmd = new CommandRrq(this.ono, 3, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Event that is triggered when the value of ReadingState changes.
   * @type {PropertyEvent}
   */
  get OnReadingStateChanged()
  {
    const event = this._ReadingStateChanged;

    if (event) return event;

    return this._ReadingStateChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 1), new signature(OcaSensorReadingState));
  }

  static get_properties()
  {
    if (!OcaSensor_p)
    {
      OcaSensor_p = new Properties([
          new Property("ReadingState", new signature(OcaSensorReadingState), 3, 1, false, true, null),
        ], 3, OcaWorker.get_properties());
    }

    return OcaSensor_p;
  }

  static GetPropertySync()
  {
    let sync = OcaSensor_sync;
    if (!sync)
    {
      OcaSensor_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._ReadingStateChanged) event.Dispose();
  }
}


let OcaLevelSensor_GetReading_rs = null;
let OcaLevelSensor_p = null;

let OcaLevelSensor_sync = null;

/**
 * Signal level sensor.
 * @extends OcaSensor
 */
export class OcaLevelSensor extends OcaSensor
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._ReadingChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0002\u0002";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Gets the value and limits of the <b>Reading </b>property. The return
   * value indicates whether the data was successfully retrieved.
   * @retval {Promise}
   */
  GetReading()
  {
    let rs = OcaLevelSensor_GetReading_rs;
    if (!rs) rs = OcaLevelSensor_GetReading_rs = new signature(FLOAT32, FLOAT32, FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Event that is triggered when the value of Reading changes.
   * @type {PropertyEvent}
   */
  get OnReadingChanged()
  {
    const event = this._ReadingChanged;

    if (event) return event;

    return this._ReadingChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 1), new signature(FLOAT32));
  }

  static get_properties()
  {
    if (!OcaLevelSensor_p)
    {
      OcaLevelSensor_p = new Properties([
          new Property("Reading", new signature(FLOAT32), 4, 1, false, false, null),
        ], 4, OcaSensor.get_properties());
    }

    return OcaLevelSensor_p;
  }

  static GetPropertySync()
  {
    let sync = OcaLevelSensor_sync;
    if (!sync)
    {
      OcaLevelSensor_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._ReadingChanged) event.Dispose();
  }
}


let OcaAudioLevelSensor_GetLaw_rs = null;
let OcaAudioLevelSensor_SetLaw_as = null;
let OcaAudioLevelSensor_p = null;

let OcaAudioLevelSensor_sync = null;

/**
 * Child of <b>OcaLevelSensor </b>that returns an audio meter reading in
 * dB relative to a known reference level, and whose value has been
 * calculated by the selected averaging algorithm.
 * @extends OcaLevelSensor
 */
export class OcaAudioLevelSensor extends OcaLevelSensor
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._LawChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0002\u0002\u0001";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Gets the value of the Law property. The return value indicates whether
   * the property was successfully retrieved.
   * @retval {Promise}
   */
  GetLaw()
  {
    let rs = OcaAudioLevelSensor_GetLaw_rs;
    if (!rs) rs = OcaAudioLevelSensor_GetLaw_rs = new signature(OcaLevelMeterLaw);
    const cmd = new CommandRrq(this.ono, 5, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the Law property. The return value indicates whether
   * the property was successfully set. Only implemented for objects whose
   * Law property is read/write.
   * @param law {OcaLevelMeterLaw}
   *
   * @retval {Promise}
   */
  SetLaw(law)
  {
    let as = OcaAudioLevelSensor_SetLaw_as;
    if (!as) as = OcaAudioLevelSensor_SetLaw_as = new signature(OcaLevelMeterLaw);
    const cmd = new CommandRrq(this.ono, 5, 2, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Event that is triggered when the value of Law changes.
   * @type {PropertyEvent}
   */
  get OnLawChanged()
  {
    const event = this._LawChanged;

    if (event) return event;

    return this._LawChanged =
      new PropertyEvent(this, new OcaPropertyID(5, 1), new signature(OcaLevelMeterLaw));
  }

  static get_properties()
  {
    if (!OcaAudioLevelSensor_p)
    {
      OcaAudioLevelSensor_p = new Properties([
          new Property("Law", new signature(OcaLevelMeterLaw), 5, 1, false, false, null),
        ], 5, OcaLevelSensor.get_properties());
    }

    return OcaAudioLevelSensor_p;
  }

  static GetPropertySync()
  {
    let sync = OcaAudioLevelSensor_sync;
    if (!sync)
    {
      OcaAudioLevelSensor_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._LawChanged) event.Dispose();
  }
}


let OcaTimeIntervalSensor_GetReading_rs = null;
let OcaTimeIntervalSensor_p = null;

let OcaTimeIntervalSensor_sync = null;

/**
 * Time interval sensor.
 * @extends OcaSensor
 */
export class OcaTimeIntervalSensor extends OcaSensor
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._ReadingChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0002\u0003";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Gets the value and limits of the <b>Reading </b>property. The return
   * value indicates whether the data was successfully retrieved.
   * @retval {Promise}
   */
  GetReading()
  {
    let rs = OcaTimeIntervalSensor_GetReading_rs;
    if (!rs) rs = OcaTimeIntervalSensor_GetReading_rs = new signature(FLOAT32, FLOAT32, FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Event that is triggered when the value of Reading changes.
   * @type {PropertyEvent}
   */
  get OnReadingChanged()
  {
    const event = this._ReadingChanged;

    if (event) return event;

    return this._ReadingChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 1), new signature(FLOAT32));
  }

  static get_properties()
  {
    if (!OcaTimeIntervalSensor_p)
    {
      OcaTimeIntervalSensor_p = new Properties([
          new Property("Reading", new signature(FLOAT32), 4, 1, false, false, null),
        ], 4, OcaSensor.get_properties());
    }

    return OcaTimeIntervalSensor_p;
  }

  static GetPropertySync()
  {
    let sync = OcaTimeIntervalSensor_sync;
    if (!sync)
    {
      OcaTimeIntervalSensor_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._ReadingChanged) event.Dispose();
  }
}


let OcaFrequencySensor_GetReading_rs = null;
let OcaFrequencySensor_p = null;

let OcaFrequencySensor_sync = null;

/**
 * Frequency sensor.
 * @extends OcaSensor
 */
export class OcaFrequencySensor extends OcaSensor
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._ReadingChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0002\u0004";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Gets the value and limits of the <b>Reading </b>property. The return
   * value indicates whether the data was successfully retrieved.
   * @retval {Promise}
   */
  GetReading()
  {
    let rs = OcaFrequencySensor_GetReading_rs;
    if (!rs) rs = OcaFrequencySensor_GetReading_rs = new signature(FLOAT32, FLOAT32, FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Event that is triggered when the value of Reading changes.
   * @type {PropertyEvent}
   */
  get OnReadingChanged()
  {
    const event = this._ReadingChanged;

    if (event) return event;

    return this._ReadingChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 1), new signature(FLOAT32));
  }

  static get_properties()
  {
    if (!OcaFrequencySensor_p)
    {
      OcaFrequencySensor_p = new Properties([
          new Property("Reading", new signature(FLOAT32), 4, 1, false, false, null),
        ], 4, OcaSensor.get_properties());
    }

    return OcaFrequencySensor_p;
  }

  static GetPropertySync()
  {
    let sync = OcaFrequencySensor_sync;
    if (!sync)
    {
      OcaFrequencySensor_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._ReadingChanged) event.Dispose();
  }
}


let OcaTemperatureSensor_GetReading_rs = null;
let OcaTemperatureSensor_p = null;

let OcaTemperatureSensor_sync = null;

/**
 * Basic temperature sensor.
 * @extends OcaSensor
 */
export class OcaTemperatureSensor extends OcaSensor
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._ReadingChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0002\u0005";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Gets the value and limits of the <b>Reading </b>property. The return
   * value indicates whether the data was successfully retrieved.
   * @retval {Promise}
   */
  GetReading()
  {
    let rs = OcaTemperatureSensor_GetReading_rs;
    if (!rs) rs = OcaTemperatureSensor_GetReading_rs = new signature(FLOAT32, FLOAT32, FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Event that is triggered when the value of Reading changes.
   * @type {PropertyEvent}
   */
  get OnReadingChanged()
  {
    const event = this._ReadingChanged;

    if (event) return event;

    return this._ReadingChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 1), new signature(FLOAT32));
  }

  static get_properties()
  {
    if (!OcaTemperatureSensor_p)
    {
      OcaTemperatureSensor_p = new Properties([
          new Property("Reading", new signature(FLOAT32), 4, 1, false, false, null),
        ], 4, OcaSensor.get_properties());
    }

    return OcaTemperatureSensor_p;
  }

  static GetPropertySync()
  {
    let sync = OcaTemperatureSensor_sync;
    if (!sync)
    {
      OcaTemperatureSensor_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._ReadingChanged) event.Dispose();
  }
}


let OcaIdentificationSensor_p = null;

let OcaIdentificationSensor_sync = null;

/**
 * Sensor for device identification mechanism. The idea of this mechanism
 * is that there is some kind of control -- a pushbutton, for instance --
 * that the user depresses to send a device identification event to the
 * controller. Such mechanisms aid in the setup of networks.
 * @extends OcaSensor
 */
export class OcaIdentificationSensor extends OcaSensor
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._Identify = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0002\u0006";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Event that is emitted when someone actuates the device identification
   * control.
   */
  get OnIdentify()
  {
    const event = this._Identify;

    if (event) return event;

    const s = null;

    return this._Identify = new Event(this, new OcaEventID(4, 1), s);
  }

  static get_properties()
  {
    if (!OcaIdentificationSensor_p)
    {
      OcaIdentificationSensor_p = new Properties([
        ], 4, OcaSensor.get_properties());
    }

    return OcaIdentificationSensor_p;
  }

  static GetPropertySync()
  {
    let sync = OcaIdentificationSensor_sync;
    if (!sync)
    {
      OcaIdentificationSensor_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._Identify) event.Dispose();
  }
}


let OcaVoltageSensor_GetReading_rs = null;
let OcaVoltageSensor_p = null;

let OcaVoltageSensor_sync = null;

/**
 * Basic voltage sensor.
 * @extends OcaSensor
 */
export class OcaVoltageSensor extends OcaSensor
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._ReadingChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0002\u0007";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 1;
  }


  /**
   * Gets the value and limits of the <b>Reading </b>property. The return
   * value indicates whether the data was successfully retrieved.
   * @retval {Promise}
   */
  GetReading()
  {
    let rs = OcaVoltageSensor_GetReading_rs;
    if (!rs) rs = OcaVoltageSensor_GetReading_rs = new signature(FLOAT32, FLOAT32, FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Event that is triggered when the value of Reading changes.
   * @type {PropertyEvent}
   */
  get OnReadingChanged()
  {
    const event = this._ReadingChanged;

    if (event) return event;

    return this._ReadingChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 1), new signature(FLOAT32));
  }

  static get_properties()
  {
    if (!OcaVoltageSensor_p)
    {
      OcaVoltageSensor_p = new Properties([
          new Property("Reading", new signature(FLOAT32), 4, 1, false, false, null),
        ], 4, OcaSensor.get_properties());
    }

    return OcaVoltageSensor_p;
  }

  static GetPropertySync()
  {
    let sync = OcaVoltageSensor_sync;
    if (!sync)
    {
      OcaVoltageSensor_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._ReadingChanged) event.Dispose();
  }
}


let OcaCurrentSensor_GetReading_rs = null;
let OcaCurrentSensor_p = null;

let OcaCurrentSensor_sync = null;

/**
 * Basic current sensor.
 * @extends OcaSensor
 */
export class OcaCurrentSensor extends OcaSensor
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._ReadingChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0002\b";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 1;
  }


  /**
   * Gets the value and limits of the <b>Reading </b>property. The return
   * value indicates whether the data was successfully retrieved.
   * @retval {Promise}
   */
  GetReading()
  {
    let rs = OcaCurrentSensor_GetReading_rs;
    if (!rs) rs = OcaCurrentSensor_GetReading_rs = new signature(FLOAT32, FLOAT32, FLOAT32);
    const cmd = new CommandRrq(this.ono, 4, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Event that is triggered when the value of Reading changes.
   * @type {PropertyEvent}
   */
  get OnReadingChanged()
  {
    const event = this._ReadingChanged;

    if (event) return event;

    return this._ReadingChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 1), new signature(FLOAT32));
  }

  static get_properties()
  {
    if (!OcaCurrentSensor_p)
    {
      OcaCurrentSensor_p = new Properties([
          new Property("Reading", new signature(FLOAT32), 4, 1, false, false, null),
        ], 4, OcaSensor.get_properties());
    }

    return OcaCurrentSensor_p;
  }

  static GetPropertySync()
  {
    let sync = OcaCurrentSensor_sync;
    if (!sync)
    {
      OcaCurrentSensor_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._ReadingChanged) event.Dispose();
  }
}


let OcaImpedanceSensor_GetReading_rs = null;
let OcaImpedanceSensor_p = null;

let OcaImpedanceSensor_sync = null;

/**
 * Basic impedance sensor. Value is complex (magnitude and phase).
 * @extends OcaSensor
 */
export class OcaImpedanceSensor extends OcaSensor
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._ReadingChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0002\n";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 1;
  }


  /**
   * Gets the value and limits of the <b>Reading </b>property. The return
   * value indicates whether the data was successfully retrieved.
   * @retval {Promise}
   */
  GetReading()
  {
    let rs = OcaImpedanceSensor_GetReading_rs;
    if (!rs) rs = OcaImpedanceSensor_GetReading_rs = new signature(OcaImpedance, OcaImpedance, OcaImpedance);
    const cmd = new CommandRrq(this.ono, 4, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Event that is triggered when the value of Reading changes.
   * @type {PropertyEvent}
   */
  get OnReadingChanged()
  {
    const event = this._ReadingChanged;

    if (event) return event;

    return this._ReadingChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 1), new signature(OcaImpedance));
  }

  static get_properties()
  {
    if (!OcaImpedanceSensor_p)
    {
      OcaImpedanceSensor_p = new Properties([
          new Property("Reading", new signature(OcaImpedance), 4, 1, false, false, null),
        ], 4, OcaSensor.get_properties());
    }

    return OcaImpedanceSensor_p;
  }

  static GetPropertySync()
  {
    let sync = OcaImpedanceSensor_sync;
    if (!sync)
    {
      OcaImpedanceSensor_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._ReadingChanged) event.Dispose();
  }
}


let OcaBasicSensor_p = null;

let OcaBasicSensor_sync = null;

/**
 * Abstract base class for weakly typed sensors.
 * @extends OcaSensor
 */
export class OcaBasicSensor extends OcaSensor
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0002\u0001";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  static get_properties()
  {
    if (!OcaBasicSensor_p)
    {
      OcaBasicSensor_p = new Properties([
        ], 4, OcaSensor.get_properties());
    }

    return OcaBasicSensor_p;
  }

  static GetPropertySync()
  {
    let sync = OcaBasicSensor_sync;
    if (!sync)
    {
      OcaBasicSensor_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
  }
}


let OcaBooleanSensor_GetReading_rs = null;
let OcaBooleanSensor_p = null;

let OcaBooleanSensor_sync = null;

/**
 * Basic boolean sensor.
 * @extends OcaBasicSensor
 */
export class OcaBooleanSensor extends OcaBasicSensor
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._ReadingChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0002\u0001\u0001";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Gets the <b>Reading </b>property. The return value indicates whether
   * the data was successfully retrieved.
   * @retval {Promise}
   */
  GetReading()
  {
    let rs = OcaBooleanSensor_GetReading_rs;
    if (!rs) rs = OcaBooleanSensor_GetReading_rs = new signature(BOOLEAN);
    const cmd = new CommandRrq(this.ono, 5, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Event that is triggered when the value of Reading changes.
   * @type {PropertyEvent}
   */
  get OnReadingChanged()
  {
    const event = this._ReadingChanged;

    if (event) return event;

    return this._ReadingChanged =
      new PropertyEvent(this, new OcaPropertyID(5, 1), new signature(BOOLEAN));
  }

  static get_properties()
  {
    if (!OcaBooleanSensor_p)
    {
      OcaBooleanSensor_p = new Properties([
          new Property("Reading", new signature(BOOLEAN), 5, 1, false, false, null),
        ], 5, OcaBasicSensor.get_properties());
    }

    return OcaBooleanSensor_p;
  }

  static GetPropertySync()
  {
    let sync = OcaBooleanSensor_sync;
    if (!sync)
    {
      OcaBooleanSensor_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._ReadingChanged) event.Dispose();
  }
}


let OcaInt8Sensor_GetReading_rs = null;
let OcaInt8Sensor_p = null;

let OcaInt8Sensor_sync = null;

/**
 * Basic int8 sensor.
 * @extends OcaBasicSensor
 */
export class OcaInt8Sensor extends OcaBasicSensor
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._ReadingChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0002\u0001\u0002";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Gets the value and limits of the <b>Reading </b>property. The return
   * value indicates whether the data was successfully retrieved.
   * @retval {Promise}
   */
  GetReading()
  {
    let rs = OcaInt8Sensor_GetReading_rs;
    if (!rs) rs = OcaInt8Sensor_GetReading_rs = new signature(INT8, INT8, INT8);
    const cmd = new CommandRrq(this.ono, 5, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Event that is triggered when the value of Reading changes.
   * @type {PropertyEvent}
   */
  get OnReadingChanged()
  {
    const event = this._ReadingChanged;

    if (event) return event;

    return this._ReadingChanged =
      new PropertyEvent(this, new OcaPropertyID(5, 1), new signature(INT8));
  }

  static get_properties()
  {
    if (!OcaInt8Sensor_p)
    {
      OcaInt8Sensor_p = new Properties([
          new Property("Reading", new signature(INT8), 5, 1, false, false, null),
        ], 5, OcaBasicSensor.get_properties());
    }

    return OcaInt8Sensor_p;
  }

  static GetPropertySync()
  {
    let sync = OcaInt8Sensor_sync;
    if (!sync)
    {
      OcaInt8Sensor_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._ReadingChanged) event.Dispose();
  }
}


let OcaInt16Sensor_GetReading_rs = null;
let OcaInt16Sensor_p = null;

let OcaInt16Sensor_sync = null;

/**
 * Basic int16 sensor.
 * @extends OcaBasicSensor
 */
export class OcaInt16Sensor extends OcaBasicSensor
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._ReadingChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0002\u0001\u0003";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Gets the value and limits of the <b>Reading </b>property. The return
   * value indicates whether the data was successfully retrieved.
   * @retval {Promise}
   */
  GetReading()
  {
    let rs = OcaInt16Sensor_GetReading_rs;
    if (!rs) rs = OcaInt16Sensor_GetReading_rs = new signature(INT16, INT16, INT16);
    const cmd = new CommandRrq(this.ono, 5, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Event that is triggered when the value of Reading changes.
   * @type {PropertyEvent}
   */
  get OnReadingChanged()
  {
    const event = this._ReadingChanged;

    if (event) return event;

    return this._ReadingChanged =
      new PropertyEvent(this, new OcaPropertyID(5, 1), new signature(INT16));
  }

  static get_properties()
  {
    if (!OcaInt16Sensor_p)
    {
      OcaInt16Sensor_p = new Properties([
          new Property("Reading", new signature(INT16), 5, 1, false, false, null),
        ], 5, OcaBasicSensor.get_properties());
    }

    return OcaInt16Sensor_p;
  }

  static GetPropertySync()
  {
    let sync = OcaInt16Sensor_sync;
    if (!sync)
    {
      OcaInt16Sensor_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._ReadingChanged) event.Dispose();
  }
}


let OcaInt32Sensor_GetReading_rs = null;
let OcaInt32Sensor_p = null;

let OcaInt32Sensor_sync = null;

/**
 * Basic int32 sensor.
 * @extends OcaBasicSensor
 */
export class OcaInt32Sensor extends OcaBasicSensor
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._ReadingChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0002\u0001\u0004";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Gets the value and limits of the <b>Reading </b>property. The return
   * value indicates whether the data was successfully retrieved.
   * @retval {Promise}
   */
  GetReading()
  {
    let rs = OcaInt32Sensor_GetReading_rs;
    if (!rs) rs = OcaInt32Sensor_GetReading_rs = new signature(INT32, INT32, INT32);
    const cmd = new CommandRrq(this.ono, 5, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Event that is triggered when the value of Reading changes.
   * @type {PropertyEvent}
   */
  get OnReadingChanged()
  {
    const event = this._ReadingChanged;

    if (event) return event;

    return this._ReadingChanged =
      new PropertyEvent(this, new OcaPropertyID(5, 1), new signature(INT32));
  }

  static get_properties()
  {
    if (!OcaInt32Sensor_p)
    {
      OcaInt32Sensor_p = new Properties([
          new Property("Reading", new signature(INT32), 5, 1, false, false, null),
        ], 5, OcaBasicSensor.get_properties());
    }

    return OcaInt32Sensor_p;
  }

  static GetPropertySync()
  {
    let sync = OcaInt32Sensor_sync;
    if (!sync)
    {
      OcaInt32Sensor_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._ReadingChanged) event.Dispose();
  }
}


let OcaInt64Sensor_GetReading_rs = null;
let OcaInt64Sensor_p = null;

let OcaInt64Sensor_sync = null;

/**
 * Basic int64 sensor.
 * @extends OcaBasicSensor
 */
export class OcaInt64Sensor extends OcaBasicSensor
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._ReadingChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0002\u0001\u0005";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Gets the value and limits of the <b>Reading </b>property. The return
   * value indicates whether the data was successfully retrieved.
   * @retval {Promise}
   */
  GetReading()
  {
    let rs = OcaInt64Sensor_GetReading_rs;
    if (!rs) rs = OcaInt64Sensor_GetReading_rs = new signature(INT64, INT64, INT64);
    const cmd = new CommandRrq(this.ono, 5, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Event that is triggered when the value of Reading changes.
   * @type {PropertyEvent}
   */
  get OnReadingChanged()
  {
    const event = this._ReadingChanged;

    if (event) return event;

    return this._ReadingChanged =
      new PropertyEvent(this, new OcaPropertyID(5, 1), new signature(INT64));
  }

  static get_properties()
  {
    if (!OcaInt64Sensor_p)
    {
      OcaInt64Sensor_p = new Properties([
          new Property("Reading", new signature(INT64), 5, 1, false, false, null),
        ], 5, OcaBasicSensor.get_properties());
    }

    return OcaInt64Sensor_p;
  }

  static GetPropertySync()
  {
    let sync = OcaInt64Sensor_sync;
    if (!sync)
    {
      OcaInt64Sensor_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._ReadingChanged) event.Dispose();
  }
}


let OcaUint8Sensor_GetReading_rs = null;
let OcaUint8Sensor_p = null;

let OcaUint8Sensor_sync = null;

/**
 * Basic uint8 sensor.
 * @extends OcaBasicSensor
 */
export class OcaUint8Sensor extends OcaBasicSensor
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._ReadingChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0002\u0001\u0006";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Gets the value and limits of the <b>Reading </b>property. The return
   * value indicates whether the data was successfully retrieved.
   * @retval {Promise}
   */
  GetReading()
  {
    let rs = OcaUint8Sensor_GetReading_rs;
    if (!rs) rs = OcaUint8Sensor_GetReading_rs = new signature(UINT8, UINT8, UINT8);
    const cmd = new CommandRrq(this.ono, 5, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Event that is triggered when the value of Reading changes.
   * @type {PropertyEvent}
   */
  get OnReadingChanged()
  {
    const event = this._ReadingChanged;

    if (event) return event;

    return this._ReadingChanged =
      new PropertyEvent(this, new OcaPropertyID(5, 1), new signature(UINT8));
  }

  static get_properties()
  {
    if (!OcaUint8Sensor_p)
    {
      OcaUint8Sensor_p = new Properties([
          new Property("Reading", new signature(UINT8), 5, 1, false, false, null),
        ], 5, OcaBasicSensor.get_properties());
    }

    return OcaUint8Sensor_p;
  }

  static GetPropertySync()
  {
    let sync = OcaUint8Sensor_sync;
    if (!sync)
    {
      OcaUint8Sensor_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._ReadingChanged) event.Dispose();
  }
}


let OcaUint16Sensor_GetReading_rs = null;
let OcaUint16Sensor_p = null;

let OcaUint16Sensor_sync = null;

/**
 * Basic uint16 sensor.
 * @extends OcaBasicSensor
 */
export class OcaUint16Sensor extends OcaBasicSensor
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._ReadingChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0002\u0001\u0007";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Gets the value and limits of the <b>Reading </b>property. The return
   * value indicates whether the data was successfully retrieved.
   * @retval {Promise}
   */
  GetReading()
  {
    let rs = OcaUint16Sensor_GetReading_rs;
    if (!rs) rs = OcaUint16Sensor_GetReading_rs = new signature(UINT16, UINT16, UINT16);
    const cmd = new CommandRrq(this.ono, 5, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Event that is triggered when the value of Reading changes.
   * @type {PropertyEvent}
   */
  get OnReadingChanged()
  {
    const event = this._ReadingChanged;

    if (event) return event;

    return this._ReadingChanged =
      new PropertyEvent(this, new OcaPropertyID(5, 1), new signature(UINT16));
  }

  static get_properties()
  {
    if (!OcaUint16Sensor_p)
    {
      OcaUint16Sensor_p = new Properties([
          new Property("Reading", new signature(UINT16), 5, 1, false, false, null),
        ], 5, OcaBasicSensor.get_properties());
    }

    return OcaUint16Sensor_p;
  }

  static GetPropertySync()
  {
    let sync = OcaUint16Sensor_sync;
    if (!sync)
    {
      OcaUint16Sensor_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._ReadingChanged) event.Dispose();
  }
}


let OcaUint32Sensor_GetReading_rs = null;
let OcaUint32Sensor_p = null;

let OcaUint32Sensor_sync = null;

/**
 * Basic uint32 sensor.
 * @extends OcaBasicSensor
 */
export class OcaUint32Sensor extends OcaBasicSensor
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._ReadingChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0002\u0001\b";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Gets the value and limits of the <b>Reading </b>property. The return
   * value indicates whether the data was successfully retrieved.
   * @retval {Promise}
   */
  GetReading()
  {
    let rs = OcaUint32Sensor_GetReading_rs;
    if (!rs) rs = OcaUint32Sensor_GetReading_rs = new signature(UINT32, UINT32, UINT32);
    const cmd = new CommandRrq(this.ono, 5, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Event that is triggered when the value of Reading changes.
   * @type {PropertyEvent}
   */
  get OnReadingChanged()
  {
    const event = this._ReadingChanged;

    if (event) return event;

    return this._ReadingChanged =
      new PropertyEvent(this, new OcaPropertyID(5, 1), new signature(UINT32));
  }

  static get_properties()
  {
    if (!OcaUint32Sensor_p)
    {
      OcaUint32Sensor_p = new Properties([
          new Property("Reading", new signature(UINT32), 5, 1, false, false, null),
        ], 5, OcaBasicSensor.get_properties());
    }

    return OcaUint32Sensor_p;
  }

  static GetPropertySync()
  {
    let sync = OcaUint32Sensor_sync;
    if (!sync)
    {
      OcaUint32Sensor_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._ReadingChanged) event.Dispose();
  }
}


let OcaUint64Sensor_GetReading_rs = null;
let OcaUint64Sensor_p = null;

let OcaUint64Sensor_sync = null;

/**
 * Basic Uint64 sensor.
 * @extends OcaBasicSensor
 */
export class OcaUint64Sensor extends OcaBasicSensor
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._ReadingChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0002\u0001\t";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Gets the value and limits of the <b>Reading </b>property. The return
   * value indicates whether the data was successfully retrieved.
   * @retval {Promise}
   */
  GetReading()
  {
    let rs = OcaUint64Sensor_GetReading_rs;
    if (!rs) rs = OcaUint64Sensor_GetReading_rs = new signature(UINT64, UINT64, UINT64);
    const cmd = new CommandRrq(this.ono, 5, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Event that is triggered when the value of Reading changes.
   * @type {PropertyEvent}
   */
  get OnReadingChanged()
  {
    const event = this._ReadingChanged;

    if (event) return event;

    return this._ReadingChanged =
      new PropertyEvent(this, new OcaPropertyID(5, 1), new signature(UINT64));
  }

  static get_properties()
  {
    if (!OcaUint64Sensor_p)
    {
      OcaUint64Sensor_p = new Properties([
          new Property("Reading", new signature(UINT64), 5, 1, false, false, null),
        ], 5, OcaBasicSensor.get_properties());
    }

    return OcaUint64Sensor_p;
  }

  static GetPropertySync()
  {
    let sync = OcaUint64Sensor_sync;
    if (!sync)
    {
      OcaUint64Sensor_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._ReadingChanged) event.Dispose();
  }
}


let OcaFloat32Sensor_GetReading_rs = null;
let OcaFloat32Sensor_p = null;

let OcaFloat32Sensor_sync = null;

/**
 * Basic float32 sensor.
 * @extends OcaBasicSensor
 */
export class OcaFloat32Sensor extends OcaBasicSensor
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._ReadingChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0002\u0001\n";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Gets the value and limits of the <b>Reading </b>property. The return
   * value indicates whether the data was successfully retrieved.
   * @retval {Promise}
   */
  GetReading()
  {
    let rs = OcaFloat32Sensor_GetReading_rs;
    if (!rs) rs = OcaFloat32Sensor_GetReading_rs = new signature(FLOAT32, FLOAT32, FLOAT32);
    const cmd = new CommandRrq(this.ono, 5, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Event that is triggered when the value of Reading changes.
   * @type {PropertyEvent}
   */
  get OnReadingChanged()
  {
    const event = this._ReadingChanged;

    if (event) return event;

    return this._ReadingChanged =
      new PropertyEvent(this, new OcaPropertyID(5, 1), new signature(FLOAT32));
  }

  static get_properties()
  {
    if (!OcaFloat32Sensor_p)
    {
      OcaFloat32Sensor_p = new Properties([
          new Property("Reading", new signature(FLOAT32), 5, 1, false, false, null),
        ], 5, OcaBasicSensor.get_properties());
    }

    return OcaFloat32Sensor_p;
  }

  static GetPropertySync()
  {
    let sync = OcaFloat32Sensor_sync;
    if (!sync)
    {
      OcaFloat32Sensor_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._ReadingChanged) event.Dispose();
  }
}


let OcaFloat64Sensor_GetReading_rs = null;
let OcaFloat64Sensor_p = null;

let OcaFloat64Sensor_sync = null;

/**
 * Basic Float64 sensor.
 * @extends OcaBasicSensor
 */
export class OcaFloat64Sensor extends OcaBasicSensor
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._ReadingChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0002\u0001\u000b";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Gets the value and limits of the <b>Reading </b>property. The return
   * value indicates whether the data was successfully retrieved.
   * @retval {Promise}
   */
  GetReading()
  {
    let rs = OcaFloat64Sensor_GetReading_rs;
    if (!rs) rs = OcaFloat64Sensor_GetReading_rs = new signature(FLOAT64, FLOAT64, FLOAT64);
    const cmd = new CommandRrq(this.ono, 5, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Event that is triggered when the value of Reading changes.
   * @type {PropertyEvent}
   */
  get OnReadingChanged()
  {
    const event = this._ReadingChanged;

    if (event) return event;

    return this._ReadingChanged =
      new PropertyEvent(this, new OcaPropertyID(5, 1), new signature(FLOAT64));
  }

  static get_properties()
  {
    if (!OcaFloat64Sensor_p)
    {
      OcaFloat64Sensor_p = new Properties([
          new Property("Reading", new signature(FLOAT64), 5, 1, false, false, null),
        ], 5, OcaBasicSensor.get_properties());
    }

    return OcaFloat64Sensor_p;
  }

  static GetPropertySync()
  {
    let sync = OcaFloat64Sensor_sync;
    if (!sync)
    {
      OcaFloat64Sensor_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._ReadingChanged) event.Dispose();
  }
}


let OcaStringSensor_GetString_rs = null;
let OcaStringSensor_GetMaxLen_rs = null;
let OcaStringSensor_SetMaxLen_as = null;
let OcaStringSensor_p = null;

let OcaStringSensor_sync = null;

/**
 * Text string sensor.
 * @extends OcaBasicSensor
 */
export class OcaStringSensor extends OcaBasicSensor
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._StringChanged = null;
    this._MaxLenChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0002\u0001\f";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Gets the entire string. Return status indicates success or failure of
   * the retrieval.
   * @retval {Promise}
   */
  GetString()
  {
    let rs = OcaStringSensor_GetString_rs;
    if (!rs) rs = OcaStringSensor_GetString_rs = new signature(STRING);
    const cmd = new CommandRrq(this.ono, 5, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the maximum number of bytes that may be returned. Returned status
   * indicates success or failure of the retrieval.
   * @retval {Promise}
   */
  GetMaxLen()
  {
    let rs = OcaStringSensor_GetMaxLen_rs;
    if (!rs) rs = OcaStringSensor_GetMaxLen_rs = new signature(UINT16);
    const cmd = new CommandRrq(this.ono, 5, 2, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the maximum number of bytes that the object may return. Returned
   * status indicates success or failure of the set.
   * @param maxLen {OcaUint16}
   *
   * @retval {Promise}
   */
  SetMaxLen(maxLen)
  {
    let as = OcaStringSensor_SetMaxLen_as;
    if (!as) as = OcaStringSensor_SetMaxLen_as = new signature(UINT16);
    const cmd = new CommandRrq(this.ono, 5, 3, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Event that is triggered when the value of String changes.
   * @type {PropertyEvent}
   */
  get OnStringChanged()
  {
    const event = this._StringChanged;

    if (event) return event;

    return this._StringChanged =
      new PropertyEvent(this, new OcaPropertyID(5, 1), new signature(STRING));
  }

  /**
   * Event that is triggered when the value of MaxLen changes.
   * @type {PropertyEvent}
   */
  get OnMaxLenChanged()
  {
    const event = this._MaxLenChanged;

    if (event) return event;

    return this._MaxLenChanged =
      new PropertyEvent(this, new OcaPropertyID(5, 2), new signature(UINT16));
  }

  static get_properties()
  {
    if (!OcaStringSensor_p)
    {
      OcaStringSensor_p = new Properties([
          new Property("String", new signature(STRING), 5, 1, false, false, null),
          new Property("MaxLen", new signature(UINT16), 5, 2, false, false, null),
        ], 5, OcaBasicSensor.get_properties());
    }

    return OcaStringSensor_p;
  }

  static GetPropertySync()
  {
    let sync = OcaStringSensor_sync;
    if (!sync)
    {
      OcaStringSensor_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._StringChanged) event.Dispose();
    if (event = this._MaxLenChanged) event.Dispose();
  }
}


let OcaBitstringSensor_GetNrBits_rs = null;
let OcaBitstringSensor_GetBit_as = null;
let OcaBitstringSensor_GetBit_rs = null;
let OcaBitstringSensor_GetBitString_rs = null;
let OcaBitstringSensor_p = null;

let OcaBitstringSensor_sync = null;

/**
 * Bit string sensor.
 * @extends OcaBasicSensor
 */
export class OcaBitstringSensor extends OcaBasicSensor
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._BitStringChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0002\u0001\r";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Gets the number of bits of the bitmask data. Returned status indicates
   * success or failure of the retrieval.
   * @retval {Promise}
   */
  GetNrBits()
  {
    let rs = OcaBitstringSensor_GetNrBits_rs;
    if (!rs) rs = OcaBitstringSensor_GetNrBits_rs = new signature(UINT16);
    const cmd = new CommandRrq(this.ono, 5, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the value of the given bit. Return status indicates success or
   * failure of the retrieval.
   * @param bitNr {OcaUint16}
   *
   * @retval {Promise}
   */
  GetBit(bitNr)
  {
    let as = OcaBitstringSensor_GetBit_as;
    if (!as) as = OcaBitstringSensor_GetBit_as = new signature(UINT16);
    let rs = OcaBitstringSensor_GetBit_rs;
    if (!rs) rs = OcaBitstringSensor_GetBit_rs = new signature(UINT8);
    const cmd = new CommandRrq(this.ono, 5, 2, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the entire bitstring. Return status indicates success or failure
   * of the retrieval.
   * @retval {Promise}
   */
  GetBitString()
  {
    let rs = OcaBitstringSensor_GetBitString_rs;
    if (!rs) rs = OcaBitstringSensor_GetBitString_rs = new signature(BITSTRING);
    const cmd = new CommandRrq(this.ono, 5, 3, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Event that is triggered when the value of BitString changes.
   * @type {PropertyEvent}
   */
  get OnBitStringChanged()
  {
    const event = this._BitStringChanged;

    if (event) return event;

    return this._BitStringChanged =
      new PropertyEvent(this, new OcaPropertyID(5, 1), new signature(BITSTRING));
  }

  static get_properties()
  {
    if (!OcaBitstringSensor_p)
    {
      OcaBitstringSensor_p = new Properties([
          new Property("BitString", new signature(BITSTRING), 5, 1, false, false, null),
        ], 5, OcaBasicSensor.get_properties());
    }

    return OcaBitstringSensor_p;
  }

  static GetPropertySync()
  {
    let sync = OcaBitstringSensor_sync;
    if (!sync)
    {
      OcaBitstringSensor_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._BitStringChanged) event.Dispose();
  }
}


let OcaBlock_GetType_rs = null;
let OcaBlock_ConstructMember_as = null;
let OcaBlock_ConstructMember_rs = null;
let OcaBlock_ConstructMemberUsingFactory_as = null;
let OcaBlock_ConstructMemberUsingFactory_rs = null;
let OcaBlock_DeleteMember_as = null;
let OcaBlock_GetMembers_rs = null;
let OcaBlock_GetMembersRecursive_rs = null;
let OcaBlock_AddSignalPath_as = null;
let OcaBlock_AddSignalPath_rs = null;
let OcaBlock_DeleteSignalPath_as = null;
let OcaBlock_GetSignalPaths_rs = null;
let OcaBlock_GetSignalPathsRecursive_rs = null;
let OcaBlock_GetMostRecentParamSetIdentifier_rs = null;
let OcaBlock_ApplyParamSet_rs = null;
let OcaBlock_GetCurrentParamSetData_rs = null;
let OcaBlock_StoreCurrentParamSetData_as = null;
let OcaBlock_GetGlobalType_rs = null;
let OcaBlock_GetONoMap_rs = null;
let OcaBlock_FindObjectsByRole_as = null;
let OcaBlock_FindObjectsByRole_rs = null;
let OcaBlock_FindObjectsByRoleRecursive_as = null;
let OcaBlock_FindObjectsByRoleRecursive_rs = null;
let OcaBlock_FindObjectsByPath_as = null;
let OcaBlock_FindObjectsByPath_rs = null;
let OcaBlock_FindObjectsByLabelRecursive_as = null;
let OcaBlock_FindObjectsByLabelRecursive_rs = null;
let OcaBlock_p = null;

let OcaBlock_sync = null;

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
export class OcaBlock extends OcaWorker
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._TypeChanged = null;
    this._MembersChanged = null;
    this._SignalPathsChanged = null;
    this._MostRecentParamSetIdentifierChanged = null;
    this._GlobalTypeChanged = null;
    this._ONoMapChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This is a
   * class property instead of an object property. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0003";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Gets the block type. For statically-defined blocks, the block type is
   * a Uint32 with a value corresponding to the unique configuration of
   * this block. For dynamically-defined blocks, the block type is the
   * object number of the block's factory. For the root block, the value of
   * this property is 1.
   * @retval {Promise}
   */
  GetType()
  {
    let rs = OcaBlock_GetType_rs;
    if (!rs) rs = OcaBlock_GetType_rs = new signature(UINT32);
    const cmd = new CommandRrq(this.ono, 3, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Constructs an object according to the given construction specification
   * and adds it to the block. The return value indicates whether the
   * member was successfully created and added.
   * @param ClassID {OcaClassID}
   *
   * @param ConstructionParameters {variant}
   *
   * @retval {Promise}
   */
  ConstructMember(ClassID, ConstructionParameters)
  {
    let as = OcaBlock_ConstructMember_as;
    if (!as) as = OcaBlock_ConstructMember_as = new signature(BLOB16, variant);
    let rs = OcaBlock_ConstructMember_rs;
    if (!rs) rs = OcaBlock_ConstructMember_rs = new signature(UINT32);
    const cmd = new CommandRrq(this.ono, 3, 2, 2,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd, rs);
  }

  /**
   * Invokes a factory to construct an instance of the given class, then
   * adds it to the block. The return value indicates whether the member
   * was successfully created and added.
   * @param FactoryONo {OcaONo}
   *
   * @retval {Promise}
   */
  ConstructMemberUsingFactory(FactoryONo)
  {
    let as = OcaBlock_ConstructMemberUsingFactory_as;
    if (!as) as = OcaBlock_ConstructMemberUsingFactory_as = new signature(UINT32);
    let rs = OcaBlock_ConstructMemberUsingFactory_rs;
    if (!rs) rs = OcaBlock_ConstructMemberUsingFactory_rs = new signature(UINT32);
    const cmd = new CommandRrq(this.ono, 3, 3, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd, rs);
  }

  /**
   * Removes a member from the block and destroys the object. . Deletes all
   * signal paths attached to its ports. The return value indicates whether
   * the member was successfully removed and destroyed.
   * @param ObjectNumber {OcaONo}
   *
   * @retval {Promise}
   */
  DeleteMember(ObjectNumber)
  {
    let as = OcaBlock_DeleteMember_as;
    if (!as) as = OcaBlock_DeleteMember_as = new signature(UINT32);
    const cmd = new CommandRrq(this.ono, 3, 4, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the list of block members. Does not recurse inner blocks. Each
   * inner block is included in the returned list as a single object -- its
   * contents are not enumerated. The return value indicates whether the
   * list was successfully retrieved.
   * @retval {Promise}
   */
  GetMembers()
  {
    let rs = OcaBlock_GetMembers_rs;
    if (!rs) rs = OcaBlock_GetMembers_rs = new signature(LIST(OcaObjectIdentification));
    const cmd = new CommandRrq(this.ono, 3, 5, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the list of block members. Recurses inner blocks. Each inner
   * block is included in the returned list as a single object, amd its
   * contents are enumerated. The return value indicates whether the list
   * was successfully retrieved.
   * @retval {Promise}
   */
  GetMembersRecursive()
  {
    let rs = OcaBlock_GetMembersRecursive_rs;
    if (!rs) rs = OcaBlock_GetMembersRecursive_rs = new signature(LIST(OcaBlockMember));
    const cmd = new CommandRrq(this.ono, 3, 6, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Adds a signal path to the block. The return value indicates whether
   * the signal path was successfully added.
   * @param Path {OcaSignalPath}
   *
   * @retval {Promise}
   */
  AddSignalPath(Path)
  {
    let as = OcaBlock_AddSignalPath_as;
    if (!as) as = OcaBlock_AddSignalPath_as = new signature(OcaSignalPath);
    let rs = OcaBlock_AddSignalPath_rs;
    if (!rs) rs = OcaBlock_AddSignalPath_rs = new signature(UINT16);
    const cmd = new CommandRrq(this.ono, 3, 7, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd, rs);
  }

  /**
   * Deletes a signal path from the block. The return value indicates
   * whether the signal path was successfully added.
   * @param Index {OcaUint16}
   *
   * @retval {Promise}
   */
  DeleteSignalPath(Index)
  {
    let as = OcaBlock_DeleteSignalPath_as;
    if (!as) as = OcaBlock_DeleteSignalPath_as = new signature(UINT16);
    const cmd = new CommandRrq(this.ono, 3, 8, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the map of signal paths in the block. Does not recurse inner
   * blocks. The return value indicates whether the list was successfully
   * retrieved.
   * @retval {Promise}
   */
  GetSignalPaths()
  {
    let rs = OcaBlock_GetSignalPaths_rs;
    if (!rs) rs = OcaBlock_GetSignalPaths_rs = new signature(MAP(UINT16, OcaSignalPath));
    const cmd = new CommandRrq(this.ono, 3, 9, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the mapof signal paths in the block. Recurses inner blocks. The
   * return value indicates whether the list was successfully retrieved.
   * @retval {Promise}
   */
  GetSignalPathsRecursive()
  {
    let rs = OcaBlock_GetSignalPathsRecursive_rs;
    if (!rs) rs = OcaBlock_GetSignalPathsRecursive_rs = new signature(MAP(UINT16, OcaSignalPath));
    const cmd = new CommandRrq(this.ono, 3, 10, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the identifier of the paramset most recently applied to this
   * block.
   * @retval {Promise}
   */
  GetMostRecentParamSetIdentifier()
  {
    let rs = OcaBlock_GetMostRecentParamSetIdentifier_rs;
    if (!rs) rs = OcaBlock_GetMostRecentParamSetIdentifier_rs = new signature(UINT16);
    const cmd = new CommandRrq(this.ono, 3, 11, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Applies the referenced paramset to this block, and sets the
   * MostRecentParamSet property. The return value indicates whether the
   * paramset was successfully applied.
   * @retval {Promise}
   */
  ApplyParamSet()
  {
    let rs = OcaBlock_ApplyParamSet_rs;
    if (!rs) rs = OcaBlock_ApplyParamSet_rs = new signature(UINT16);
    const cmd = new CommandRrq(this.ono, 3, 12, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Returns a paramset library volume data block which represents the
   * current state of the block -- i.e. a "snapshot".
   * @retval {Promise}
   */
  GetCurrentParamSetData()
  {
    let rs = OcaBlock_GetCurrentParamSetData_rs;
    if (!rs) rs = OcaBlock_GetCurrentParamSetData_rs = new signature(OcaLibVolData_ParamSet);
    const cmd = new CommandRrq(this.ono, 3, 13, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Stores a paramset library volume data block which represents the
   * current state of the block ("snapshot") in the given library.
   * <b>Replaces </b>the library volume at the specified LibVolIdentifier.
   * @param LibVolIdentifier {OcaClassVersionNumber}
   *
   * @retval {Promise}
   */
  StoreCurrentParamSetData(LibVolIdentifier)
  {
    let as = OcaBlock_StoreCurrentParamSetData_as;
    if (!as) as = OcaBlock_StoreCurrentParamSetData_as = new signature(UINT16);
    const cmd = new CommandRrq(this.ono, 3, 14, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the global blocktype. The return value indicates whether the type
   * was successfully retrieved. If this block has no global blocktype, the
   * <b>Authority</b> field of the returned <b>GlobalType</b> parameter
   * will be zero. <b>Added in version 2 of this class.</b>
   * @retval {Promise}
   */
  GetGlobalType()
  {
    let rs = OcaBlock_GetGlobalType_rs;
    if (!rs) rs = OcaBlock_GetGlobalType_rs = new signature(OcaGlobalBlockTypeIdentifier);
    const cmd = new CommandRrq(this.ono, 3, 15, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the block's ONo map. The return value indicates whether the map
   * was successfully retrieved. <b>Added in version 2 of this class.</b>
   * @retval {Promise}
   */
  GetONoMap()
  {
    let rs = OcaBlock_GetONoMap_rs;
    if (!rs) rs = OcaBlock_GetONoMap_rs = new signature(MAP(UINT32, UINT32));
    const cmd = new CommandRrq(this.ono, 3, 16, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Returns object identifications of all objects in the block that match
   * the given Role search string and Class ID. Return value indicates
   * whether the method succeeded. <b>Added in version 2 of this class.</b>
   * @param SearchName {OcaString}
   *
   * @param NameComparisonType {OcaStringComparisonType}
   *
   * @param SearchClassID {OcaClassID}
   *
   * @param ResultFlags {OcaObjectSearchResultFlags}
   *
   * @retval {Promise}
   */
  FindObjectsByRole(SearchName, NameComparisonType, SearchClassID, ResultFlags)
  {
    let as = OcaBlock_FindObjectsByRole_as;
    if (!as) as = OcaBlock_FindObjectsByRole_as = new signature(STRING, OcaStringComparisonType, BLOB16, OcaObjectSearchResultFlags);
    let rs = OcaBlock_FindObjectsByRole_rs;
    if (!rs) rs = OcaBlock_FindObjectsByRole_rs = new signature(LIST(OcaObjectSearchResult));
    const cmd = new CommandRrq(this.ono, 3, 17, 4,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd, rs);
  }

  /**
   * Returns block member descriptors of all objects in the block and all
   * contained blocks that match the given Role search string and Class ID.
   * <b>Added in version 2 of this class.</b>
   * @param SearchName {OcaString}
   *
   * @param NameComparisonType {OcaStringComparisonType}
   *
   * @param SearchClassID {OcaClassID}
   *
   * @param ResultFlags {OcaObjectSearchResultFlags}
   *
   * @retval {Promise}
   */
  FindObjectsByRoleRecursive(SearchName, NameComparisonType, SearchClassID, ResultFlags)
  {
    let as = OcaBlock_FindObjectsByRoleRecursive_as;
    if (!as) as = OcaBlock_FindObjectsByRoleRecursive_as = new signature(STRING, OcaStringComparisonType, BLOB16, OcaObjectSearchResultFlags);
    let rs = OcaBlock_FindObjectsByRoleRecursive_rs;
    if (!rs) rs = OcaBlock_FindObjectsByRoleRecursive_rs = new signature(LIST(OcaObjectSearchResult));
    const cmd = new CommandRrq(this.ono, 3, 18, 4,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd, rs);
  }

  /**
   * Returns object identifications of all objects with the given name
   * path. <b>Added in version 2 of this class.</b>
   * @param SearchPath {OcaNamePath}
   *
   * @param ResultFlags {OcaObjectSearchResultFlags}
   *
   * @retval {Promise}
   */
  FindObjectsByPath(SearchPath, ResultFlags)
  {
    let as = OcaBlock_FindObjectsByPath_as;
    if (!as) as = OcaBlock_FindObjectsByPath_as = new signature(LIST(STRING), OcaObjectSearchResultFlags);
    let rs = OcaBlock_FindObjectsByPath_rs;
    if (!rs) rs = OcaBlock_FindObjectsByPath_rs = new signature(LIST(OcaObjectSearchResult));
    const cmd = new CommandRrq(this.ono, 3, 20, 2,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd, rs);
  }

  /**
   * Returns block member descriptors of all objects in the block and all
   * contained blocks that match the given Label search string and Class
   * ID. <b>Added in version 2 of this class.</b>
   * @param SearchName {OcaString}
   *
   * @param NameComparisonType {OcaStringComparisonType}
   *
   * @param SearchClassID {OcaClassID}
   *
   * @param ResultFlags {OcaObjectSearchResultFlags}
   *
   * @retval {Promise}
   */
  FindObjectsByLabelRecursive(SearchName, NameComparisonType, SearchClassID, ResultFlags)
  {
    let as = OcaBlock_FindObjectsByLabelRecursive_as;
    if (!as) as = OcaBlock_FindObjectsByLabelRecursive_as = new signature(STRING, OcaStringComparisonType, BLOB16, OcaObjectSearchResultFlags);
    let rs = OcaBlock_FindObjectsByLabelRecursive_rs;
    if (!rs) rs = OcaBlock_FindObjectsByLabelRecursive_rs = new signature(LIST(OcaObjectSearchResult));
    const cmd = new CommandRrq(this.ono, 3, 19, 4,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd, rs);
  }

  /**
   * Event that is triggered when the value of Type changes.
   * @type {PropertyEvent}
   */
  get OnTypeChanged()
  {
    const event = this._TypeChanged;

    if (event) return event;

    return this._TypeChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 1), new signature(UINT32));
  }

  /**
   * Event that is triggered when the value of Members changes.
   * @type {PropertyEvent}
   */
  get OnMembersChanged()
  {
    const event = this._MembersChanged;

    if (event) return event;

    return this._MembersChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 2), new signature(LIST(OcaObjectIdentification)));
  }

  /**
   * Event that is triggered when the value of SignalPaths changes.
   * @type {PropertyEvent}
   */
  get OnSignalPathsChanged()
  {
    const event = this._SignalPathsChanged;

    if (event) return event;

    return this._SignalPathsChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 3), new signature(MAP(UINT16, OcaSignalPath)));
  }

  /**
   * Event that is triggered when the value of MostRecentParamSetIdentifier changes.
   * @type {PropertyEvent}
   */
  get OnMostRecentParamSetIdentifierChanged()
  {
    const event = this._MostRecentParamSetIdentifierChanged;

    if (event) return event;

    return this._MostRecentParamSetIdentifierChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 4), new signature(UINT16));
  }

  /**
   * Event that is triggered when the value of GlobalType changes.
   * @type {PropertyEvent}
   */
  get OnGlobalTypeChanged()
  {
    const event = this._GlobalTypeChanged;

    if (event) return event;

    return this._GlobalTypeChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 5), new signature(OcaGlobalBlockTypeIdentifier));
  }

  /**
   * Event that is triggered when the value of ONoMap changes.
   * @type {PropertyEvent}
   */
  get OnONoMapChanged()
  {
    const event = this._ONoMapChanged;

    if (event) return event;

    return this._ONoMapChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 6), new signature(MAP(UINT32, UINT32)));
  }

  static get_properties()
  {
    if (!OcaBlock_p)
    {
      OcaBlock_p = new Properties([
          new Property("Type", new signature(UINT32), 3, 1, true, false, null),
          new Property("Members", new signature(LIST(OcaObjectIdentification)), 3, 2, false, false, null),
          new Property("SignalPaths", new signature(MAP(UINT16, OcaSignalPath)), 3, 3, false, false, null),
          new Property("MostRecentParamSetIdentifier", new signature(UINT16), 3, 4, false, false, null),
          new Property("GlobalType", new signature(OcaGlobalBlockTypeIdentifier), 3, 5, true, false, null),
          new Property("ONoMap", new signature(MAP(UINT32, UINT32)), 3, 6, true, false, null),
        ], 3, OcaWorker.get_properties());
    }

    return OcaBlock_p;
  }

  static GetPropertySync()
  {
    let sync = OcaBlock_sync;
    if (!sync)
    {
      OcaBlock_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._TypeChanged) event.Dispose();
    if (event = this._MembersChanged) event.Dispose();
    if (event = this._SignalPathsChanged) event.Dispose();
    if (event = this._MostRecentParamSetIdentifierChanged) event.Dispose();
    if (event = this._GlobalTypeChanged) event.Dispose();
    if (event = this._ONoMapChanged) event.Dispose();
  }
}


let OcaBlockFactory_DefineProtoPort_as = null;
let OcaBlockFactory_DefineProtoPort_rs = null;
let OcaBlockFactory_UndefineProtoPort_as = null;
let OcaBlockFactory_GetProtoPorts_rs = null;
let OcaBlockFactory_DefineProtoMember_as = null;
let OcaBlockFactory_DefineProtoMember_rs = null;
let OcaBlockFactory_DefineProtoMemberUsingFactory_as = null;
let OcaBlockFactory_DefineProtoMemberUsingFactory_rs = null;
let OcaBlockFactory_UndefineProtoMember_as = null;
let OcaBlockFactory_GetProtoMembers_rs = null;
let OcaBlockFactory_DefineProtoSignalPath_as = null;
let OcaBlockFactory_DefineProtoSignalPath_rs = null;
let OcaBlockFactory_UndefineProtoSignalPath_rs = null;
let OcaBlockFactory_GetProtoSignalPaths_rs = null;
let OcaBlockFactory_GetGlobalType_rs = null;
let OcaBlockFactory_SetGlobalType_as = null;
let OcaBlockFactory_p = null;

let OcaBlockFactory_sync = null;

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
export class OcaBlockFactory extends OcaWorker
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._ProtoPortsChanged = null;
    this._ProtoMembersChanged = null;
    this._ProtoSignalPathsChanged = null;
    this._GlobalTypeChanged = null;
  }

  /**
   * This property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0004";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Defines a proto-port in the factory. If proto-port already exists, it
   * is replaced with the one from this call. The return value indicates
   * whether the proto-port was successfully added.
   * @param name {OcaString}
   *
   * @param portmode {OcaPortMode}
   *
   * @retval {Promise}
   */
  DefineProtoPort(name, portmode)
  {
    let as = OcaBlockFactory_DefineProtoPort_as;
    if (!as) as = OcaBlockFactory_DefineProtoPort_as = new signature(STRING, OcaPortMode);
    let rs = OcaBlockFactory_DefineProtoPort_rs;
    if (!rs) rs = OcaBlockFactory_DefineProtoPort_rs = new signature(OcaProtoPortID);
    const cmd = new CommandRrq(this.ono, 3, 1, 2,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd, rs);
  }

  /**
   * Deletes a proto-port from the factory. The return value indicates
   * whether the proto-port was successfully deleted.
   * @param ProtoPortID {OcaProtoPortID}
   *
   * @retval {Promise}
   */
  UndefineProtoPort(ProtoPortID)
  {
    let as = OcaBlockFactory_UndefineProtoPort_as;
    if (!as) as = OcaBlockFactory_UndefineProtoPort_as = new signature(OcaProtoPortID);
    const cmd = new CommandRrq(this.ono, 3, 2, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the factory's list of proto-ports. The return value indicates
   * whether the list was successfully retrieved.
   * @retval {Promise}
   */
  GetProtoPorts()
  {
    let rs = OcaBlockFactory_GetProtoPorts_rs;
    if (!rs) rs = OcaBlockFactory_GetProtoPorts_rs = new signature(LIST(OcaProtoPort));
    const cmd = new CommandRrq(this.ono, 3, 3, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Defines a proto-member of the given class in the factory. The most
   * current version of the class is used. The return value indicates
   * whether the proto-member was successfully defined.
   * @param ClassIdentification {OcaClassID}
   *
   * @param ConstructionParameters {ConstructionParameterDataType}
   *
   * @retval {Promise}
   */
  DefineProtoMember(ClassIdentification, ConstructionParameters)
  {
    let as = OcaBlockFactory_DefineProtoMember_as;
    if (!as) as = OcaBlockFactory_DefineProtoMember_as = new signature(BLOB16, ConstructionParameterDataType);
    let rs = OcaBlockFactory_DefineProtoMember_rs;
    if (!rs) rs = OcaBlockFactory_DefineProtoMember_rs = new signature(UINT32);
    const cmd = new CommandRrq(this.ono, 3, 4, 2,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd, rs);
  }

  /**
   * Defines a proto-member which will be instantiated by a specified
   * factory when the block is built. The return value indicates whether
   * the proto-member was successfully defined.
   * @param FactoryONo {OcaONo}
   *
   * @retval {Promise}
   */
  DefineProtoMemberUsingFactory(FactoryONo)
  {
    let as = OcaBlockFactory_DefineProtoMemberUsingFactory_as;
    if (!as) as = OcaBlockFactory_DefineProtoMemberUsingFactory_as = new signature(UINT32);
    let rs = OcaBlockFactory_DefineProtoMemberUsingFactory_rs;
    if (!rs) rs = OcaBlockFactory_DefineProtoMemberUsingFactory_rs = new signature(UINT32);
    const cmd = new CommandRrq(this.ono, 3, 5, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd, rs);
  }

  /**
   * Deletes a proto-member from the factory. Deletes all proto-signal
   * paths attached to its ports. The return value indicates whether the
   * member was successfully deleted.
   * @param ProtoObjectNumber {OcaProtoONo}
   *
   * @retval {Promise}
   */
  UndefineProtoMember(ProtoObjectNumber)
  {
    let as = OcaBlockFactory_UndefineProtoMember_as;
    if (!as) as = OcaBlockFactory_UndefineProtoMember_as = new signature(UINT32);
    const cmd = new CommandRrq(this.ono, 3, 6, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the factory's list of proto-members. Does not recurse inner
   * proto-blocks. The return value indicates whether the list was
   * successfully retrieved.
   * @retval {Promise}
   */
  GetProtoMembers()
  {
    let rs = OcaBlockFactory_GetProtoMembers_rs;
    if (!rs) rs = OcaBlockFactory_GetProtoMembers_rs = new signature(LIST(OcaProtoObjectIdentification));
    const cmd = new CommandRrq(this.ono, 3, 7, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Defines a proto-signal path in the factory. The return value indicates
   * whether the proto-signal path was successfully defined.
   * @param Path {OcaProtoSignalPath}
   *
   * @retval {Promise}
   */
  DefineProtoSignalPath(Path)
  {
    let as = OcaBlockFactory_DefineProtoSignalPath_as;
    if (!as) as = OcaBlockFactory_DefineProtoSignalPath_as = new signature(OcaProtoSignalPath);
    let rs = OcaBlockFactory_DefineProtoSignalPath_rs;
    if (!rs) rs = OcaBlockFactory_DefineProtoSignalPath_rs = new signature(UINT16);
    const cmd = new CommandRrq(this.ono, 3, 8, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd, rs);
  }

  /**
   * Deletes a proto-signal path from the factory. The return value
   * indicates whether the signal path was successfully added.
   * @retval {Promise}
   */
  UndefineProtoSignalPath()
  {
    let rs = OcaBlockFactory_UndefineProtoSignalPath_rs;
    if (!rs) rs = OcaBlockFactory_UndefineProtoSignalPath_rs = new signature(UINT16);
    const cmd = new CommandRrq(this.ono, 3, 9, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the factory's list of proto-signal paths. Map key is proto-signal
   * path ID. Does not recurse inner proto-blocks. The return value
   * indicates whether the list was successfully retrieved.
   * @retval {Promise}
   */
  GetProtoSignalPaths()
  {
    let rs = OcaBlockFactory_GetProtoSignalPaths_rs;
    if (!rs) rs = OcaBlockFactory_GetProtoSignalPaths_rs = new signature(MAP(UINT16, OcaProtoSignalPath));
    const cmd = new CommandRrq(this.ono, 3, 10, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the global type identifier for blocks created by this factory.
   * The return value indicates whether the identifier was successfully
   * retrieved. <b>Added in version 2 of this class.</b>
   * @retval {Promise}
   */
  GetGlobalType()
  {
    let rs = OcaBlockFactory_GetGlobalType_rs;
    if (!rs) rs = OcaBlockFactory_GetGlobalType_rs = new signature(OcaGlobalBlockTypeIdentifier);
    const cmd = new CommandRrq(this.ono, 3, 11, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the global type identifier for blocks created by this factory.
   * The return value indicates whether the identifier was successfully
   * set. <b>Added in version 2 of this class.</b>
   * @param GlobalType {OcaGlobalBlockTypeIdentifier}
   *
   * @retval {Promise}
   */
  SetGlobalType(GlobalType)
  {
    let as = OcaBlockFactory_SetGlobalType_as;
    if (!as) as = OcaBlockFactory_SetGlobalType_as = new signature(OcaGlobalBlockTypeIdentifier);
    const cmd = new CommandRrq(this.ono, 3, 12, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Event that is triggered when the value of ProtoPorts changes.
   * @type {PropertyEvent}
   */
  get OnProtoPortsChanged()
  {
    const event = this._ProtoPortsChanged;

    if (event) return event;

    return this._ProtoPortsChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 1), new signature(LIST(OcaProtoPort)));
  }

  /**
   * Event that is triggered when the value of ProtoMembers changes.
   * @type {PropertyEvent}
   */
  get OnProtoMembersChanged()
  {
    const event = this._ProtoMembersChanged;

    if (event) return event;

    return this._ProtoMembersChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 2), new signature(LIST(OcaProtoObjectIdentification)));
  }

  /**
   * Event that is triggered when the value of ProtoSignalPaths changes.
   * @type {PropertyEvent}
   */
  get OnProtoSignalPathsChanged()
  {
    const event = this._ProtoSignalPathsChanged;

    if (event) return event;

    return this._ProtoSignalPathsChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 3), new signature(MAP(UINT16, OcaProtoSignalPath)));
  }

  /**
   * Event that is triggered when the value of GlobalType changes.
   * @type {PropertyEvent}
   */
  get OnGlobalTypeChanged()
  {
    const event = this._GlobalTypeChanged;

    if (event) return event;

    return this._GlobalTypeChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 4), new signature(OcaGlobalBlockTypeIdentifier));
  }

  static get_properties()
  {
    if (!OcaBlockFactory_p)
    {
      OcaBlockFactory_p = new Properties([
          new Property("ProtoPorts", new signature(LIST(OcaProtoPort)), 3, 1, false, false, null),
          new Property("ProtoMembers", new signature(LIST(OcaProtoObjectIdentification)), 3, 2, false, false, null),
          new Property("ProtoSignalPaths", new signature(MAP(UINT16, OcaProtoSignalPath)), 3, 3, false, false, null),
          new Property("GlobalType", new signature(OcaGlobalBlockTypeIdentifier), 3, 4, false, false, null),
        ], 3, OcaWorker.get_properties());
    }

    return OcaBlockFactory_p;
  }

  static GetPropertySync()
  {
    let sync = OcaBlockFactory_sync;
    if (!sync)
    {
      OcaBlockFactory_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._ProtoPortsChanged) event.Dispose();
    if (event = this._ProtoMembersChanged) event.Dispose();
    if (event = this._ProtoSignalPathsChanged) event.Dispose();
    if (event = this._GlobalTypeChanged) event.Dispose();
  }
}


let OcaMatrix_GetCurrentXY_rs = null;
let OcaMatrix_SetCurrentXY_as = null;
let OcaMatrix_GetSize_rs = null;
let OcaMatrix_SetSize_as = null;
let OcaMatrix_GetMembers_rs = null;
let OcaMatrix_SetMembers_as = null;
let OcaMatrix_GetMember_as = null;
let OcaMatrix_GetMember_rs = null;
let OcaMatrix_SetMember_as = null;
let OcaMatrix_GetProxy_rs = null;
let OcaMatrix_SetProxy_as = null;
let OcaMatrix_GetPortsPerRow_rs = null;
let OcaMatrix_SetPortsPerRow_as = null;
let OcaMatrix_GetPortsPerColumn_rs = null;
let OcaMatrix_SetPortsPerColumn_as = null;
let OcaMatrix_SetCurrentXYLock_as = null;
let OcaMatrix_p = null;

let OcaMatrix_sync = null;

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
export class OcaMatrix extends OcaWorker
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._XChanged = null;
    this._YChanged = null;
    this._xSizeChanged = null;
    this._ySizeChanged = null;
    this._MembersChanged = null;
    this._ProxyChanged = null;
    this._PortsPerRowChanged = null;
    this._PortsPerColumnChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0005";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Gets coordinates of the currently active area (cell, row, column, or
   * whole matrix). The returned status indicates whether the operation was
   * successful.
   * @retval {Promise}
   */
  GetCurrentXY()
  {
    let rs = OcaMatrix_GetCurrentXY_rs;
    if (!rs) rs = OcaMatrix_GetCurrentXY_rs = new signature(UINT16, UINT16);
    const cmd = new CommandRrq(this.ono, 3, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the currently active area (cell, row, column, or whole matrix).
   * The returned status indicates whether the operation was successful.
   * @param x {OcaMatrixCoordinate}
   *
   * @param y {OcaMatrixCoordinate}
   *
   * @retval {Promise}
   */
  SetCurrentXY(x, y)
  {
    let as = OcaMatrix_SetCurrentXY_as;
    if (!as) as = OcaMatrix_SetCurrentXY_as = new signature(UINT16, UINT16);
    const cmd = new CommandRrq(this.ono, 3, 2, 2,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the matrix size. The returned status indicates whether the
   * operation was successful.
   * @retval {Promise}
   */
  GetSize()
  {
    let rs = OcaMatrix_GetSize_rs;
    if (!rs) rs = OcaMatrix_GetSize_rs = new signature(UINT16, UINT16, UINT16, UINT16, UINT16, UINT16);
    const cmd = new CommandRrq(this.ono, 3, 3, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the matrix size. The returned status indicates whether the
   * operation was successful. This method will not be available for
   * fixed-size matrices.
   * @param xSize {OcaMatrixCoordinate}
   *
   * @param ySize {OcaMatrixCoordinate}
   *
   * @retval {Promise}
   */
  SetSize(xSize, ySize)
  {
    let as = OcaMatrix_SetSize_as;
    if (!as) as = OcaMatrix_SetSize_as = new signature(UINT16, UINT16);
    const cmd = new CommandRrq(this.ono, 3, 4, 2,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Retrieves the 2D array of member object numbers. Cells for which no
   * member has been defined will return Zero as the object number.
   * @retval {Promise}
   */
  GetMembers()
  {
    let rs = OcaMatrix_GetMembers_rs;
    if (!rs) rs = OcaMatrix_GetMembers_rs = new signature(LIST2D(UINT32));
    const cmd = new CommandRrq(this.ono, 3, 5, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the entire 2D array of member object numbers. Row and column size
   * of the <b>members</b> parameter must be equal to the current size of
   * the matrix.
   * @param members {OcaList2D}
   *
   * @retval {Promise}
   */
  SetMembers(members)
  {
    let as = OcaMatrix_SetMembers_as;
    if (!as) as = OcaMatrix_SetMembers_as = new signature(LIST2D(UINT32));
    const cmd = new CommandRrq(this.ono, 3, 6, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Retrieves the object number of the member at position (x,y). If no
   * member is defined at this position, returns an object number value of
   * Zero.
   * @param x {OcaMatrixCoordinate}
   *
   * @param y {OcaMatrixCoordinate}
   *
   * @retval {Promise}
   */
  GetMember(x, y)
  {
    let as = OcaMatrix_GetMember_as;
    if (!as) as = OcaMatrix_GetMember_as = new signature(UINT16, UINT16);
    let rs = OcaMatrix_GetMember_rs;
    if (!rs) rs = OcaMatrix_GetMember_rs = new signature(UINT32);
    const cmd = new CommandRrq(this.ono, 3, 7, 2,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd, rs);
  }

  /**
   * Installs a particular object as a member at position (x,y). If another
   * object was at this position, it is removed.
   * @param x {OcaMatrixCoordinate}
   *
   * @param y {OcaMatrixCoordinate}
   *
   * @param memberONo {OcaONo}
   *
   * @retval {Promise}
   */
  SetMember(x, y, memberONo)
  {
    let as = OcaMatrix_SetMember_as;
    if (!as) as = OcaMatrix_SetMember_as = new signature(UINT16, UINT16, UINT32);
    const cmd = new CommandRrq(this.ono, 3, 8, 3,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the object number of the matrix proxy.
   * @retval {Promise}
   */
  GetProxy()
  {
    let rs = OcaMatrix_GetProxy_rs;
    if (!rs) rs = OcaMatrix_GetProxy_rs = new signature(UINT32);
    const cmd = new CommandRrq(this.ono, 3, 9, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the object number of the matrix proxy.
   * @param ONo {OcaONo}
   *
   * @retval {Promise}
   */
  SetProxy(ONo)
  {
    let as = OcaMatrix_SetProxy_as;
    if (!as) as = OcaMatrix_SetProxy_as = new signature(UINT32);
    const cmd = new CommandRrq(this.ono, 3, 10, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the number of ports per row. These are input ports.
   * @retval {Promise}
   */
  GetPortsPerRow()
  {
    let rs = OcaMatrix_GetPortsPerRow_rs;
    if (!rs) rs = OcaMatrix_GetPortsPerRow_rs = new signature(UINT8);
    const cmd = new CommandRrq(this.ono, 3, 11, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the number of ports per row. These must be input ports.
   * @param Ports {OcaUint8}
   *
   * @retval {Promise}
   */
  SetPortsPerRow(Ports)
  {
    let as = OcaMatrix_SetPortsPerRow_as;
    if (!as) as = OcaMatrix_SetPortsPerRow_as = new signature(UINT8);
    const cmd = new CommandRrq(this.ono, 3, 12, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the number of ports per output channel. These are output ports.
   * @retval {Promise}
   */
  GetPortsPerColumn()
  {
    let rs = OcaMatrix_GetPortsPerColumn_rs;
    if (!rs) rs = OcaMatrix_GetPortsPerColumn_rs = new signature(UINT8);
    const cmd = new CommandRrq(this.ono, 3, 13, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the number of ports per column. These must be output ports.
   * @param Ports {OcaUint8}
   *
   * @retval {Promise}
   */
  SetPortsPerColumn(Ports)
  {
    let as = OcaMatrix_SetPortsPerColumn_as;
    if (!as) as = OcaMatrix_SetPortsPerColumn_as = new signature(UINT8);
    const cmd = new CommandRrq(this.ono, 3, 14, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Sets the currently active area (cell, row, column, or whole matrix)
   * and locks it. Fails if the referenced members cannot all be locked.
   * The returned status indicates whether the operation was successful.
   * @param x {OcaMatrixCoordinate}
   *
   * @param y {OcaMatrixCoordinate}
   *
   * @retval {Promise}
   */
  SetCurrentXYLock(x, y)
  {
    let as = OcaMatrix_SetCurrentXYLock_as;
    if (!as) as = OcaMatrix_SetCurrentXYLock_as = new signature(UINT16, UINT16);
    const cmd = new CommandRrq(this.ono, 3, 15, 2,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Unlocks the currently active area of the matrix. Fails if all the
   * members of the currently active area cannot be unlocked. Failure is
   * <u>not </u>triggered if one or more members of the currently active
   * area are already unlocked at the time Unlock() is called. The returned
   * status indicates whether the operation was successful.
   * @retval {Promise}
   */
  UnlockCurrent()
  {
    const cmd = new CommandRrq(this.ono, 3, 16, 0);
    return this.device.send_command(cmd);
  }

  /**
   * Event that is triggered when the value of X changes.
   * @type {PropertyEvent}
   */
  get OnXChanged()
  {
    const event = this._XChanged;

    if (event) return event;

    return this._XChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 1), new signature(UINT16));
  }

  /**
   * Event that is triggered when the value of Y changes.
   * @type {PropertyEvent}
   */
  get OnYChanged()
  {
    const event = this._YChanged;

    if (event) return event;

    return this._YChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 2), new signature(UINT16));
  }

  /**
   * Event that is triggered when the value of xSize changes.
   * @type {PropertyEvent}
   */
  get OnxSizeChanged()
  {
    const event = this._xSizeChanged;

    if (event) return event;

    return this._xSizeChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 3), new signature(UINT16));
  }

  /**
   * Event that is triggered when the value of ySize changes.
   * @type {PropertyEvent}
   */
  get OnySizeChanged()
  {
    const event = this._ySizeChanged;

    if (event) return event;

    return this._ySizeChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 4), new signature(UINT16));
  }

  /**
   * Event that is triggered when the value of Members changes.
   * @type {PropertyEvent}
   */
  get OnMembersChanged()
  {
    const event = this._MembersChanged;

    if (event) return event;

    return this._MembersChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 5), new signature(LIST2D(UINT32)));
  }

  /**
   * Event that is triggered when the value of Proxy changes.
   * @type {PropertyEvent}
   */
  get OnProxyChanged()
  {
    const event = this._ProxyChanged;

    if (event) return event;

    return this._ProxyChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 6), new signature(UINT32));
  }

  /**
   * Event that is triggered when the value of PortsPerRow changes.
   * @type {PropertyEvent}
   */
  get OnPortsPerRowChanged()
  {
    const event = this._PortsPerRowChanged;

    if (event) return event;

    return this._PortsPerRowChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 7), new signature(UINT8));
  }

  /**
   * Event that is triggered when the value of PortsPerColumn changes.
   * @type {PropertyEvent}
   */
  get OnPortsPerColumnChanged()
  {
    const event = this._PortsPerColumnChanged;

    if (event) return event;

    return this._PortsPerColumnChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 8), new signature(UINT8));
  }

  static get_properties()
  {
    if (!OcaMatrix_p)
    {
      OcaMatrix_p = new Properties([
          new Property("X", new signature(UINT16), 3, 1, false, false, null),
          new Property("Y", new signature(UINT16), 3, 2, false, false, null),
          new Property("xSize", new signature(UINT16), 3, 3, false, false, null),
          new Property("ySize", new signature(UINT16), 3, 4, false, false, null),
          new Property("Members", new signature(LIST2D(UINT32)), 3, 5, false, false, null),
          new Property("Proxy", new signature(UINT32), 3, 6, false, false, null),
          new Property("PortsPerRow", new signature(UINT8), 3, 7, false, false, null),
          new Property("PortsPerColumn", new signature(UINT8), 3, 8, false, false, null),
        ], 3, OcaWorker.get_properties());
    }

    return OcaMatrix_p;
  }

  static GetPropertySync()
  {
    let sync = OcaMatrix_sync;
    if (!sync)
    {
      OcaMatrix_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._XChanged) event.Dispose();
    if (event = this._YChanged) event.Dispose();
    if (event = this._xSizeChanged) event.Dispose();
    if (event = this._ySizeChanged) event.Dispose();
    if (event = this._MembersChanged) event.Dispose();
    if (event = this._ProxyChanged) event.Dispose();
    if (event = this._PortsPerRowChanged) event.Dispose();
    if (event = this._PortsPerColumnChanged) event.Dispose();
  }
}


let OcaAgent_GetLabel_rs = null;
let OcaAgent_SetLabel_as = null;
let OcaAgent_GetOwner_rs = null;
let OcaAgent_GetPath_rs = null;
let OcaAgent_p = null;

let OcaAgent_sync = null;

/**
 * Abstract base class for defining agents.
 * @extends OcaRoot
 */
export class OcaAgent extends OcaRoot
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._LabelChanged = null;
    this._OwnerChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0002";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Gets the value of the Label property. The return value indicates
   * whether the property was successfully retrieved.
   * @retval {Promise}
   */
  GetLabel()
  {
    let rs = OcaAgent_GetLabel_rs;
    if (!rs) rs = OcaAgent_GetLabel_rs = new signature(STRING);
    const cmd = new CommandRrq(this.ono, 2, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the Label property. The return value indicates
   * whether the property was successfully set.
   * @param Label {OcaString}
   *
   * @retval {Promise}
   */
  SetLabel(Label)
  {
    let as = OcaAgent_SetLabel_as;
    if (!as) as = OcaAgent_SetLabel_as = new signature(STRING);
    const cmd = new CommandRrq(this.ono, 2, 2, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the value of the Owner property. The return value indicates
   * whether the property was successfully retrieved.
   * @retval {Promise}
   */
  GetOwner()
  {
    let rs = OcaAgent_GetOwner_rs;
    if (!rs) rs = OcaAgent_GetOwner_rs = new signature(UINT32);
    const cmd = new CommandRrq(this.ono, 2, 3, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Returns path from the given object down to root. The return value
   * indicates whether the operation succeeded. Added in version 2.
   * @retval {Promise}
   */
  GetPath()
  {
    let rs = OcaAgent_GetPath_rs;
    if (!rs) rs = OcaAgent_GetPath_rs = new signature(LIST(STRING), LIST(UINT32));
    const cmd = new CommandRrq(this.ono, 2, 4, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Event that is triggered when the value of Label changes.
   * @type {PropertyEvent}
   */
  get OnLabelChanged()
  {
    const event = this._LabelChanged;

    if (event) return event;

    return this._LabelChanged =
      new PropertyEvent(this, new OcaPropertyID(2, 1), new signature(STRING));
  }

  /**
   * Event that is triggered when the value of Owner changes.
   * @type {PropertyEvent}
   */
  get OnOwnerChanged()
  {
    const event = this._OwnerChanged;

    if (event) return event;

    return this._OwnerChanged =
      new PropertyEvent(this, new OcaPropertyID(2, 2), new signature(UINT32));
  }

  static get_properties()
  {
    if (!OcaAgent_p)
    {
      OcaAgent_p = new Properties([
          new Property("Label", new signature(STRING), 2, 1, false, false, null),
          new Property("Owner", new signature(UINT32), 2, 2, false, false, null),
        ], 2, OcaRoot.get_properties());
    }

    return OcaAgent_p;
  }

  static GetPropertySync()
  {
    let sync = OcaAgent_sync;
    if (!sync)
    {
      OcaAgent_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._LabelChanged) event.Dispose();
    if (event = this._OwnerChanged) event.Dispose();
  }
}


let OcaGrouper_AddGroup_as = null;
let OcaGrouper_AddGroup_rs = null;
let OcaGrouper_DeleteGroup_as = null;
let OcaGrouper_GetGroupCount_rs = null;
let OcaGrouper_GetGroupList_rs = null;
let OcaGrouper_AddCitizen_as = null;
let OcaGrouper_AddCitizen_rs = null;
let OcaGrouper_DeleteCitizen_as = null;
let OcaGrouper_GetCitizenCount_rs = null;
let OcaGrouper_GetCitizenList_rs = null;
let OcaGrouper_GetEnrollment_as = null;
let OcaGrouper_GetEnrollment_rs = null;
let OcaGrouper_SetEnrollment_as = null;
let OcaGrouper_GetGroupMemberList_as = null;
let OcaGrouper_GetGroupMemberList_rs = null;
let OcaGrouper_GetActuatorOrSensor_rs = null;
let OcaGrouper_SetActuatorOrSensor_as = null;
let OcaGrouper_GetMode_rs = null;
let OcaGrouper_SetMode_as = null;
let OcaGrouper_p = null;

let OcaGrouper_sync = null;

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
export class OcaGrouper extends OcaAgent
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._StatusChange = null;
    this._ActuatorOrSensorChanged = null;
    this._GroupsChanged = null;
    this._CitizensChanged = null;
    this._EnrollmentsChanged = null;
    this._ModeChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0002\u0002";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Adds a group to the grouper and returns its object number. (The
   * group's network address will be the same as the grouper's). The return
   * value indicates whether the group was successfully added.
   * @param Name {OcaString}
   *
   * @retval {Promise}
   */
  AddGroup(Name)
  {
    let as = OcaGrouper_AddGroup_as;
    if (!as) as = OcaGrouper_AddGroup_as = new signature(STRING);
    let rs = OcaGrouper_AddGroup_rs;
    if (!rs) rs = OcaGrouper_AddGroup_rs = new signature(UINT16, UINT32);
    const cmd = new CommandRrq(this.ono, 3, 1, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd, rs);
  }

  /**
   * Deletes a group from the grouper. The return value indicates whether
   * the group was successfully deleted. Note: index values of deleted
   * groups are not reused during the lifetime of the grouper instance.
   * @param Index {OcaUint16}
   *
   * @retval {Promise}
   */
  DeleteGroup(Index)
  {
    let as = OcaGrouper_DeleteGroup_as;
    if (!as) as = OcaGrouper_DeleteGroup_as = new signature(UINT16);
    const cmd = new CommandRrq(this.ono, 3, 2, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the count of groups owned by this grouper. The return value
   * indicates whether the count was successfully retrieved.
   * @retval {Promise}
   */
  GetGroupCount()
  {
    let rs = OcaGrouper_GetGroupCount_rs;
    if (!rs) rs = OcaGrouper_GetGroupCount_rs = new signature(UINT16);
    const cmd = new CommandRrq(this.ono, 3, 3, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the list of groups owned by this grouper. The return value
   * indicates whether the list was successfully retrieved.
   * @retval {Promise}
   */
  GetGroupList()
  {
    let rs = OcaGrouper_GetGroupList_rs;
    if (!rs) rs = OcaGrouper_GetGroupList_rs = new signature(LIST(OcaGrouperGroup));
    const cmd = new CommandRrq(this.ono, 3, 4, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Adds a target to the group. The return value indicates whether the
   * target was successfully added. This method does not enroll the new
   * target in any of the grouper's groups -- it merely makes the target
   * available for enrollment. Group membership is controlled by the
   * SetEnrollment method, q.v.
   * @param Citizen {OcaGrouperCitizen}
   *
   * @retval {Promise}
   */
  AddCitizen(Citizen)
  {
    let as = OcaGrouper_AddCitizen_as;
    if (!as) as = OcaGrouper_AddCitizen_as = new signature(OcaGrouperCitizen);
    let rs = OcaGrouper_AddCitizen_rs;
    if (!rs) rs = OcaGrouper_AddCitizen_rs = new signature(UINT16);
    const cmd = new CommandRrq(this.ono, 3, 5, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd, rs);
  }

  /**
   * Delete a citizen from the grouper (and therefore from all of its
   * groups). The return value indicates whether the citizen was
   * successfully deleted. Note: index values of deleted citizens are not
   * reused during the lifetime of the grouper instance.
   * @param Index {OcaUint16}
   *
   * @retval {Promise}
   */
  DeleteCitizen(Index)
  {
    let as = OcaGrouper_DeleteCitizen_as;
    if (!as) as = OcaGrouper_DeleteCitizen_as = new signature(UINT16);
    const cmd = new CommandRrq(this.ono, 3, 6, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the count of citizens registered in this grouper. The return
   * value indicates whether the count was successfully retrieved.
   * @retval {Promise}
   */
  GetCitizenCount()
  {
    let rs = OcaGrouper_GetCitizenCount_rs;
    if (!rs) rs = OcaGrouper_GetCitizenCount_rs = new signature(UINT16);
    const cmd = new CommandRrq(this.ono, 3, 7, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the list of citizens registered in this grouper. The return value
   * indicates whether the list was successfully retrieved.
   * @retval {Promise}
   */
  GetCitizenList()
  {
    let rs = OcaGrouper_GetCitizenList_rs;
    if (!rs) rs = OcaGrouper_GetCitizenList_rs = new signature(LIST(OcaGrouperCitizen));
    const cmd = new CommandRrq(this.ono, 3, 8, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets membership status for given target in given group. The return
   * value indicates whether the status was successfully retrieved.
   * @param Enrollment {OcaGrouperEnrollment}
   *
   * @retval {Promise}
   */
  GetEnrollment(Enrollment)
  {
    let as = OcaGrouper_GetEnrollment_as;
    if (!as) as = OcaGrouper_GetEnrollment_as = new signature(OcaGrouperEnrollment);
    let rs = OcaGrouper_GetEnrollment_rs;
    if (!rs) rs = OcaGrouper_GetEnrollment_rs = new signature(BOOLEAN);
    const cmd = new CommandRrq(this.ono, 3, 9, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets membership status for given target in given group. The return
   * value indicates whether the status was successfully set.
   * @param Enrollment {OcaGrouperEnrollment}
   *
   * @param IsMember {OcaBoolean}
   *
   * @retval {Promise}
   */
  SetEnrollment(Enrollment, IsMember)
  {
    let as = OcaGrouper_SetEnrollment_as;
    if (!as) as = OcaGrouper_SetEnrollment_as = new signature(OcaGrouperEnrollment, BOOLEAN);
    const cmd = new CommandRrq(this.ono, 3, 10, 2,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the list of members of the given group. The return value
   * indicates whether the list was successfully retrieved.
   * @param Index {OcaUint16}
   *
   * @retval {Promise}
   */
  GetGroupMemberList(Index)
  {
    let as = OcaGrouper_GetGroupMemberList_as;
    if (!as) as = OcaGrouper_GetGroupMemberList_as = new signature(UINT16);
    let rs = OcaGrouper_GetGroupMemberList_rs;
    if (!rs) rs = OcaGrouper_GetGroupMemberList_rs = new signature(LIST(OcaGrouperCitizen));
    const cmd = new CommandRrq(this.ono, 3, 11, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the value of the ActuatorOrSensor property. The return value
   * indicates whether the value was successfully retrieved.
   * @retval {Promise}
   */
  GetActuatorOrSensor()
  {
    let rs = OcaGrouper_GetActuatorOrSensor_rs;
    if (!rs) rs = OcaGrouper_GetActuatorOrSensor_rs = new signature(BOOLEAN);
    const cmd = new CommandRrq(this.ono, 3, 12, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the ActuatorOrSensor property. The return value
   * indicates whether the value was successfully set.
   * @param ActuatorOrSensor {OcaBoolean}
   *
   * @retval {Promise}
   */
  SetActuatorOrSensor(ActuatorOrSensor)
  {
    let as = OcaGrouper_SetActuatorOrSensor_as;
    if (!as) as = OcaGrouper_SetActuatorOrSensor_as = new signature(BOOLEAN);
    const cmd = new CommandRrq(this.ono, 3, 13, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the value of the Mode property. The return value indicates
   * whether the value was successfully retrieved.
   * @retval {Promise}
   */
  GetMode()
  {
    let rs = OcaGrouper_GetMode_rs;
    if (!rs) rs = OcaGrouper_GetMode_rs = new signature(OcaGrouperMode);
    const cmd = new CommandRrq(this.ono, 3, 14, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the Mode property. The return value indicates
   * whether the value was successfully set.
   * @param Mode {OcaGrouperMode}
   *
   * @retval {Promise}
   */
  SetMode(Mode)
  {
    let as = OcaGrouper_SetMode_as;
    if (!as) as = OcaGrouper_SetMode_as = new signature(OcaGrouperMode);
    const cmd = new CommandRrq(this.ono, 3, 15, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Event that is emitted whenever key aspects of a group's status change.
   * Status events include: <ul> <li>Citizen joins grouper</li> <li>Citizen
   * leaves grouper</li> <li>Citizen fails to execute grouper value change
   * request</li> <li>Connection to online citizen is lost</li>
   * <li>Connection to offline citizen is reestablished</li> <li>Citizen
   * enrolls in group</li> <li>Citizen de-enrolls from group</li> </ul>
   */
  get OnStatusChange()
  {
    const event = this._StatusChange;

    if (event) return event;

    const s = new signature(UINT16, UINT16, OcaGrouperStatusChangeType);

    return this._StatusChange = new Event(this, new OcaEventID(3, 1), s);
  }

  /**
   * Event that is triggered when the value of ActuatorOrSensor changes.
   * @type {PropertyEvent}
   */
  get OnActuatorOrSensorChanged()
  {
    const event = this._ActuatorOrSensorChanged;

    if (event) return event;

    return this._ActuatorOrSensorChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 1), new signature(BOOLEAN));
  }

  /**
   * Event that is triggered when the value of Groups changes.
   * @type {PropertyEvent}
   */
  get OnGroupsChanged()
  {
    const event = this._GroupsChanged;

    if (event) return event;

    return this._GroupsChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 2), new signature(LIST(OcaGrouperGroup)));
  }

  /**
   * Event that is triggered when the value of Citizens changes.
   * @type {PropertyEvent}
   */
  get OnCitizensChanged()
  {
    const event = this._CitizensChanged;

    if (event) return event;

    return this._CitizensChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 3), new signature(LIST(OcaGrouperCitizen)));
  }

  /**
   * Event that is triggered when the value of Enrollments changes.
   * @type {PropertyEvent}
   */
  get OnEnrollmentsChanged()
  {
    const event = this._EnrollmentsChanged;

    if (event) return event;

    return this._EnrollmentsChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 4), new signature(LIST(OcaGrouperEnrollment)));
  }

  /**
   * Event that is triggered when the value of Mode changes.
   * @type {PropertyEvent}
   */
  get OnModeChanged()
  {
    const event = this._ModeChanged;

    if (event) return event;

    return this._ModeChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 5), new signature(OcaGrouperMode));
  }

  static get_properties()
  {
    if (!OcaGrouper_p)
    {
      OcaGrouper_p = new Properties([
          new Property("ActuatorOrSensor", new signature(BOOLEAN), 3, 1, false, false, null),
          new Property("Groups", new signature(LIST(OcaGrouperGroup)), 3, 2, false, false, ["GroupList"]),
          new Property("Citizens", new signature(LIST(OcaGrouperCitizen)), 3, 3, false, false, ["CitizenList"]),
          new Property("Enrollments", new signature(LIST(OcaGrouperEnrollment)), 3, 4, false, false, ["EnrollmentList"]),
          new Property("Mode", new signature(OcaGrouperMode), 3, 5, false, false, null),
        ], 3, OcaAgent.get_properties());
    }

    return OcaGrouper_p;
  }

  static GetPropertySync()
  {
    let sync = OcaGrouper_sync;
    if (!sync)
    {
      OcaGrouper_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._StatusChange) event.Dispose();
    if (event = this._ActuatorOrSensorChanged) event.Dispose();
    if (event = this._GroupsChanged) event.Dispose();
    if (event = this._CitizensChanged) event.Dispose();
    if (event = this._EnrollmentsChanged) event.Dispose();
    if (event = this._ModeChanged) event.Dispose();
  }
}


let OcaNumericObserver_GetLastObservation_rs = null;
let OcaNumericObserver_GetState_rs = null;
let OcaNumericObserver_GetObservedProperty_rs = null;
let OcaNumericObserver_SetObservedProperty_as = null;
let OcaNumericObserver_GetThreshold_rs = null;
let OcaNumericObserver_SetThreshold_as = null;
let OcaNumericObserver_GetOperator_rs = null;
let OcaNumericObserver_SetOperator_as = null;
let OcaNumericObserver_GetTwoWay_rs = null;
let OcaNumericObserver_SetTwoWay_as = null;
let OcaNumericObserver_GetHysteresis_rs = null;
let OcaNumericObserver_SetHysteresis_as = null;
let OcaNumericObserver_GetPeriod_rs = null;
let OcaNumericObserver_SetPeriod_as = null;
let OcaNumericObserver_p = null;

let OcaNumericObserver_sync = null;

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
export class OcaNumericObserver extends OcaAgent
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._Observation = null;
    this._StateChanged = null;
    this._ObservedPropertyChanged = null;
    this._ThresholdChanged = null;
    this._OperatorChanged = null;
    this._TwoWayChanged = null;
    this._HysteresisChanged = null;
    this._PeriodChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0002\u0004";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Gets the value of the observed property that was reported by the most
   * recently emitted Observation event. If the numeric observer has never
   * emitted an Observation event, returns the IEEE not-a-number value. The
   * return status indicates whether the value has been successfully
   * returned.
   * @retval {Promise}
   */
  GetLastObservation()
  {
    let rs = OcaNumericObserver_GetLastObservation_rs;
    if (!rs) rs = OcaNumericObserver_GetLastObservation_rs = new signature(FLOAT64);
    const cmd = new CommandRrq(this.ono, 3, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the observer's state. The return value indicates whether the
   * state was successfully retrieved.
   * @retval {Promise}
   */
  GetState()
  {
    let rs = OcaNumericObserver_GetState_rs;
    if (!rs) rs = OcaNumericObserver_GetState_rs = new signature(OcaObserverState);
    const cmd = new CommandRrq(this.ono, 3, 2, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the identification of the property that the observer observes.
   * The return value indicates whether the identification was successfully
   * retrieved.
   * @retval {Promise}
   */
  GetObservedProperty()
  {
    let rs = OcaNumericObserver_GetObservedProperty_rs;
    if (!rs) rs = OcaNumericObserver_GetObservedProperty_rs = new signature(OcaProperty);
    const cmd = new CommandRrq(this.ono, 3, 3, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the identification of the property that the observer observes.
   * The return value indicates whether the identification was successfully
   * set.
   * @param property {OcaProperty}
   *
   * @retval {Promise}
   */
  SetObservedProperty(property)
  {
    let as = OcaNumericObserver_SetObservedProperty_as;
    if (!as) as = OcaNumericObserver_SetObservedProperty_as = new signature(OcaProperty);
    const cmd = new CommandRrq(this.ono, 3, 4, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the value of the <b>Threshold </b>property. The return value
   * indicates whether the threshold value was successfully retrieved.
   * @retval {Promise}
   */
  GetThreshold()
  {
    let rs = OcaNumericObserver_GetThreshold_rs;
    if (!rs) rs = OcaNumericObserver_GetThreshold_rs = new signature(FLOAT64);
    const cmd = new CommandRrq(this.ono, 3, 5, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the <b>Threshold </b>property. The return value
   * indicates whether the threshold value was successfully set.
   * @param Threshold {OcaFloat64}
   *
   * @retval {Promise}
   */
  SetThreshold(Threshold)
  {
    let as = OcaNumericObserver_SetThreshold_as;
    if (!as) as = OcaNumericObserver_SetThreshold_as = new signature(FLOAT64);
    const cmd = new CommandRrq(this.ono, 3, 6, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the value of the <b>Operator </b>property. The return value
   * indicates whether the property was successfully retrieved.
   * @retval {Promise}
   */
  GetOperator()
  {
    let rs = OcaNumericObserver_GetOperator_rs;
    if (!rs) rs = OcaNumericObserver_GetOperator_rs = new signature(OcaRelationalOperator);
    const cmd = new CommandRrq(this.ono, 3, 7, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the <b>Operator </b>property. The return value
   * indicates whether the operator was successfully set.
   * @param _operator {OcaRelationalOperator}
   *
   * @retval {Promise}
   */
  SetOperator(_operator)
  {
    let as = OcaNumericObserver_SetOperator_as;
    if (!as) as = OcaNumericObserver_SetOperator_as = new signature(OcaRelationalOperator);
    const cmd = new CommandRrq(this.ono, 3, 8, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the value of the <b>TwoWay </b>property. The return value
   * indicates whether the property was successfully retrieved.
   * @retval {Promise}
   */
  GetTwoWay()
  {
    let rs = OcaNumericObserver_GetTwoWay_rs;
    if (!rs) rs = OcaNumericObserver_GetTwoWay_rs = new signature(BOOLEAN);
    const cmd = new CommandRrq(this.ono, 3, 9, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the <b>TwoWay </b>property. The return value
   * indicates whether the property was successfully set.
   * @param twoWay {OcaBoolean}
   *
   * @retval {Promise}
   */
  SetTwoWay(twoWay)
  {
    let as = OcaNumericObserver_SetTwoWay_as;
    if (!as) as = OcaNumericObserver_SetTwoWay_as = new signature(BOOLEAN);
    const cmd = new CommandRrq(this.ono, 3, 10, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the value of the <b>Hysteresis </b>property. The return value
   * indicates whether the property was successfully retrieved.
   * @retval {Promise}
   */
  GetHysteresis()
  {
    let rs = OcaNumericObserver_GetHysteresis_rs;
    if (!rs) rs = OcaNumericObserver_GetHysteresis_rs = new signature(FLOAT64);
    const cmd = new CommandRrq(this.ono, 3, 11, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the <b>Hysteresis </b>property. The return value
   * indicates whether the property was successfully set.
   * @param hysteresis {OcaFloat64}
   *
   * @retval {Promise}
   */
  SetHysteresis(hysteresis)
  {
    let as = OcaNumericObserver_SetHysteresis_as;
    if (!as) as = OcaNumericObserver_SetHysteresis_as = new signature(FLOAT64);
    const cmd = new CommandRrq(this.ono, 3, 12, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the value of the <b>Period </b>property. The return value
   * indicates whether the property was successfully retrieved.
   * @retval {Promise}
   */
  GetPeriod()
  {
    let rs = OcaNumericObserver_GetPeriod_rs;
    if (!rs) rs = OcaNumericObserver_GetPeriod_rs = new signature(FLOAT32);
    const cmd = new CommandRrq(this.ono, 3, 13, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the <b>Period </b>property. The return value
   * indicates whether the property was successfully set.
   * @param period {OcaTimeInterval}
   *
   * @retval {Promise}
   */
  SetPeriod(period)
  {
    let as = OcaNumericObserver_SetPeriod_as;
    if (!as) as = OcaNumericObserver_SetPeriod_as = new signature(FLOAT32);
    const cmd = new CommandRrq(this.ono, 3, 14, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Event emitted to signal an asynchronous, periodic, or
   * conditional-periodic observation.
   */
  get OnObservation()
  {
    const event = this._Observation;

    if (event) return event;

    const s = new signature(OcaEvent, FLOAT64);

    return this._Observation = new Event(this, new OcaEventID(3, 1), s);
  }

  /**
   * Event that is triggered when the value of State changes.
   * @type {PropertyEvent}
   */
  get OnStateChanged()
  {
    const event = this._StateChanged;

    if (event) return event;

    return this._StateChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 1), new signature(OcaObserverState));
  }

  /**
   * Event that is triggered when the value of ObservedProperty changes.
   * @type {PropertyEvent}
   */
  get OnObservedPropertyChanged()
  {
    const event = this._ObservedPropertyChanged;

    if (event) return event;

    return this._ObservedPropertyChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 2), new signature(OcaProperty));
  }

  /**
   * Event that is triggered when the value of Threshold changes.
   * @type {PropertyEvent}
   */
  get OnThresholdChanged()
  {
    const event = this._ThresholdChanged;

    if (event) return event;

    return this._ThresholdChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 3), new signature(FLOAT64));
  }

  /**
   * Event that is triggered when the value of Operator changes.
   * @type {PropertyEvent}
   */
  get OnOperatorChanged()
  {
    const event = this._OperatorChanged;

    if (event) return event;

    return this._OperatorChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 4), new signature(OcaRelationalOperator));
  }

  /**
   * Event that is triggered when the value of TwoWay changes.
   * @type {PropertyEvent}
   */
  get OnTwoWayChanged()
  {
    const event = this._TwoWayChanged;

    if (event) return event;

    return this._TwoWayChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 5), new signature(BOOLEAN));
  }

  /**
   * Event that is triggered when the value of Hysteresis changes.
   * @type {PropertyEvent}
   */
  get OnHysteresisChanged()
  {
    const event = this._HysteresisChanged;

    if (event) return event;

    return this._HysteresisChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 6), new signature(FLOAT64));
  }

  /**
   * Event that is triggered when the value of Period changes.
   * @type {PropertyEvent}
   */
  get OnPeriodChanged()
  {
    const event = this._PeriodChanged;

    if (event) return event;

    return this._PeriodChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 7), new signature(FLOAT32));
  }

  static get_properties()
  {
    if (!OcaNumericObserver_p)
    {
      OcaNumericObserver_p = new Properties([
          new Property("State", new signature(OcaObserverState), 3, 1, false, false, null),
          new Property("ObservedProperty", new signature(OcaProperty), 3, 2, false, false, null),
          new Property("Threshold", new signature(FLOAT64), 3, 3, false, false, null),
          new Property("Operator", new signature(OcaRelationalOperator), 3, 4, false, false, null),
          new Property("TwoWay", new signature(BOOLEAN), 3, 5, false, false, null),
          new Property("Hysteresis", new signature(FLOAT64), 3, 6, false, false, null),
          new Property("Period", new signature(FLOAT32), 3, 7, false, false, null),
        ], 3, OcaAgent.get_properties());
    }

    return OcaNumericObserver_p;
  }

  static GetPropertySync()
  {
    let sync = OcaNumericObserver_sync;
    if (!sync)
    {
      OcaNumericObserver_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._Observation) event.Dispose();
    if (event = this._StateChanged) event.Dispose();
    if (event = this._ObservedPropertyChanged) event.Dispose();
    if (event = this._ThresholdChanged) event.Dispose();
    if (event = this._OperatorChanged) event.Dispose();
    if (event = this._TwoWayChanged) event.Dispose();
    if (event = this._HysteresisChanged) event.Dispose();
    if (event = this._PeriodChanged) event.Dispose();
  }
}


let OcaLibrary_AddVolume_as = null;
let OcaLibrary_AddVolume_rs = null;
let OcaLibrary_ReplaceVolume_as = null;
let OcaLibrary_DeleteVolume_as = null;
let OcaLibrary_GetVolume_rs = null;
let OcaLibrary_GetVolumeCount_rs = null;
let OcaLibrary_GetVolumes_rs = null;
let OcaLibrary_GetAccess_rs = null;
let OcaLibrary_SetAccess_as = null;
let OcaLibrary_p = null;

let OcaLibrary_sync = null;

/**
 * A <b>library</b> is an agent that holds a collection of datasets. We
 * refer to each dataset as a <b>Volume</b>. There are two kinds of
 * volumes: <b>ParamSet</b> (parameter set). A ParamSet is a collection
 * of operating parameter settings that can be applied to a block. Each
 * ParamSet is associated with a specific block type, but not with a
 * specific instance of that type. A ParamSet may be applied to any block
 * instance of the associated type. A block's type is a the object number
 * of its factory or, for factory-defined blocks, a unique identifier set
 * at time of manufacture. <b>Patch</b>. A Patch a collection of ParamSet
 * assignments. A ParamSet assigment is the description of a binding of a
 * ParamSet to a block instance. To "apply" a Patch is to apply all of
 * its assignments. To apply an assignment is to set all of its
 * ParamSet's parameter values into its block. A given library instance
 * can only hold one class of volume. A device that supports libraries
 * can have any number of Patch and ParamSet libraries. If a device
 * implements a Patch library, it must also implement at least one
 * ParamSet library. However, the reverse is not true: a device may
 * implement one or more ParamSet libraries without a Patch library.
 * <font color="#0000ff"> </font>
 * @extends OcaAgent
 */
export class OcaLibrary extends OcaAgent
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._DataTypeChanged = null;
    this._AccessChanged = null;
    this._VolumesChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0002\u0005";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Adds a volume to the library and returns its volume ID. The return
   * value indicates whether the volume was successfully added.
   * @param Volume {OcaLibVol}
   *
   * @retval {Promise}
   */
  AddVolume(Volume)
  {
    let as = OcaLibrary_AddVolume_as;
    if (!as) as = OcaLibrary_AddVolume_as = new signature(OcaLibVol);
    let rs = OcaLibrary_AddVolume_rs;
    if (!rs) rs = OcaLibrary_AddVolume_rs = new signature(UINT32);
    const cmd = new CommandRrq(this.ono, 3, 1, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd, rs);
  }

  /**
   * Replaces a volume in the library at the given volume ID. The return
   * value indicates whether the volume was successfully replaced.
   * @param ID {OcaLibVolID}
   *
   * @param Volume {OcaLibVol}
   *
   * @retval {Promise}
   */
  ReplaceVolume(ID, Volume)
  {
    let as = OcaLibrary_ReplaceVolume_as;
    if (!as) as = OcaLibrary_ReplaceVolume_as = new signature(UINT32, OcaLibVol);
    const cmd = new CommandRrq(this.ono, 3, 2, 2,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Deletes a volume from the library. The return value indicates whether
   * the group was successfully deleted.
   * @param ID {OcaLibVolID}
   *
   * @retval {Promise}
   */
  DeleteVolume(ID)
  {
    let as = OcaLibrary_DeleteVolume_as;
    if (!as) as = OcaLibrary_DeleteVolume_as = new signature(UINT32);
    const cmd = new CommandRrq(this.ono, 3, 3, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Retrieves a library volume. The return value indicates whether the
   * volume was successfully retrieved.
   * @retval {Promise}
   */
  GetVolume()
  {
    let rs = OcaLibrary_GetVolume_rs;
    if (!rs) rs = OcaLibrary_GetVolume_rs = new signature(OcaLibVol);
    const cmd = new CommandRrq(this.ono, 3, 4, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the count of volumes in this library. The return value indicates
   * whether the count was successfully retrieved.
   * @retval {Promise}
   */
  GetVolumeCount()
  {
    let rs = OcaLibrary_GetVolumeCount_rs;
    if (!rs) rs = OcaLibrary_GetVolumeCount_rs = new signature(UINT16);
    const cmd = new CommandRrq(this.ono, 3, 5, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the list of volumes held in this library. The return value
   * indicates whether the list was successfully retrieved.
   * @retval {Promise}
   */
  GetVolumes()
  {
    let rs = OcaLibrary_GetVolumes_rs;
    if (!rs) rs = OcaLibrary_GetVolumes_rs = new signature(MAP(UINT32, OcaLibVol));
    const cmd = new CommandRrq(this.ono, 3, 6, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets allowed access mode for this library. The return value indicates
   * whether the property was successfully retrieved.
   * @retval {Promise}
   */
  GetAccess()
  {
    let rs = OcaLibrary_GetAccess_rs;
    if (!rs) rs = OcaLibrary_GetAccess_rs = new signature(OcaLibAccess);
    const cmd = new CommandRrq(this.ono, 3, 7, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets allowed access mode for this library. The return value indicates
   * whether the property was successfully set. Not implemented for static,
   * manufacturer-supplied libraries.
   * @param Access {OcaLibAccess}
   *
   * @retval {Promise}
   */
  SetAccess(Access)
  {
    let as = OcaLibrary_SetAccess_as;
    if (!as) as = OcaLibrary_SetAccess_as = new signature(OcaLibAccess);
    const cmd = new CommandRrq(this.ono, 3, 8, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Event that is triggered when the value of DataType changes.
   * @type {PropertyEvent}
   */
  get OnDataTypeChanged()
  {
    const event = this._DataTypeChanged;

    if (event) return event;

    return this._DataTypeChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 1), new signature(OcaLibVolType));
  }

  /**
   * Event that is triggered when the value of Access changes.
   * @type {PropertyEvent}
   */
  get OnAccessChanged()
  {
    const event = this._AccessChanged;

    if (event) return event;

    return this._AccessChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 2), new signature(OcaLibAccess));
  }

  /**
   * Event that is triggered when the value of Volumes changes.
   * @type {PropertyEvent}
   */
  get OnVolumesChanged()
  {
    const event = this._VolumesChanged;

    if (event) return event;

    return this._VolumesChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 3), new signature(MAP(UINT32, OcaLibVol)));
  }

  static get_properties()
  {
    if (!OcaLibrary_p)
    {
      OcaLibrary_p = new Properties([
          new Property("DataType", new signature(OcaLibVolType), 3, 1, false, false, null),
          new Property("Access", new signature(OcaLibAccess), 3, 2, false, false, null),
          new Property("Volumes", new signature(MAP(UINT32, OcaLibVol)), 3, 3, false, false, null),
        ], 3, OcaAgent.get_properties());
    }

    return OcaLibrary_p;
  }

  static GetPropertySync()
  {
    let sync = OcaLibrary_sync;
    if (!sync)
    {
      OcaLibrary_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._DataTypeChanged) event.Dispose();
    if (event = this._AccessChanged) event.Dispose();
    if (event = this._VolumesChanged) event.Dispose();
  }
}


let OcaPowerSupply_GetType_rs = null;
let OcaPowerSupply_GetModelInfo_rs = null;
let OcaPowerSupply_GetState_rs = null;
let OcaPowerSupply_SetState_as = null;
let OcaPowerSupply_GetCharging_rs = null;
let OcaPowerSupply_GetLoadFractionAvailable_rs = null;
let OcaPowerSupply_GetStorageFractionAvailable_rs = null;
let OcaPowerSupply_GetLocation_rs = null;
let OcaPowerSupply_p = null;

let OcaPowerSupply_sync = null;

/**
 * A power supply.
 * @extends OcaAgent
 */
export class OcaPowerSupply extends OcaAgent
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._TypeChanged = null;
    this._ModelInfoChanged = null;
    this._StateChanged = null;
    this._ChargingChanged = null;
    this._LoadFractionAvailableChanged = null;
    this._StorageFractionAvailableChanged = null;
    this._LocationChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0002\u0007";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 3;
  }


  /**
   * Gets the type of the power supply. Return value indicates whether the
   * data was successfully retrieved.
   * @retval {Promise}
   */
  GetType()
  {
    let rs = OcaPowerSupply_GetType_rs;
    if (!rs) rs = OcaPowerSupply_GetType_rs = new signature(OcaPowerSupplyType);
    const cmd = new CommandRrq(this.ono, 3, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the power supply's model information text. Return value indicates
   * whether the data was successfully retrieved.
   * @retval {Promise}
   */
  GetModelInfo()
  {
    let rs = OcaPowerSupply_GetModelInfo_rs;
    if (!rs) rs = OcaPowerSupply_GetModelInfo_rs = new signature(STRING);
    const cmd = new CommandRrq(this.ono, 3, 2, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the state of the power supply. Return value indicates whether the
   * data was successfully retrieved.
   * @retval {Promise}
   */
  GetState()
  {
    let rs = OcaPowerSupply_GetState_rs;
    if (!rs) rs = OcaPowerSupply_GetState_rs = new signature(OcaPowerSupplyState);
    const cmd = new CommandRrq(this.ono, 3, 3, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Changes the power supply's state. Return value indicates whether the
   * state was successfully changed.
   * @param state {OcaPowerSupplyState}
   *
   * @retval {Promise}
   */
  SetState(state)
  {
    let as = OcaPowerSupply_SetState_as;
    if (!as) as = OcaPowerSupply_SetState_as = new signature(OcaPowerSupplyState);
    const cmd = new CommandRrq(this.ono, 3, 4, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the value of property <b>Charging</b>. Return value indicates
   * whether the value was successfully retrieved.
   * @retval {Promise}
   */
  GetCharging()
  {
    let rs = OcaPowerSupply_GetCharging_rs;
    if (!rs) rs = OcaPowerSupply_GetCharging_rs = new signature(BOOLEAN);
    const cmd = new CommandRrq(this.ono, 3, 5, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the available load fraction. Return value indicates whether the
   * data was successfully retrieved.
   * @retval {Promise}
   */
  GetLoadFractionAvailable()
  {
    let rs = OcaPowerSupply_GetLoadFractionAvailable_rs;
    if (!rs) rs = OcaPowerSupply_GetLoadFractionAvailable_rs = new signature(FLOAT32);
    const cmd = new CommandRrq(this.ono, 3, 6, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the available storage fraction. Return value indicates whether
   * the data was successfully retrieved.
   * @retval {Promise}
   */
  GetStorageFractionAvailable()
  {
    let rs = OcaPowerSupply_GetStorageFractionAvailable_rs;
    if (!rs) rs = OcaPowerSupply_GetStorageFractionAvailable_rs = new signature(FLOAT32);
    const cmd = new CommandRrq(this.ono, 3, 7, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the power supply physical location. Return value indicates
   * whether the data was successfully retrieved.
   * @retval {Promise}
   */
  GetLocation()
  {
    let rs = OcaPowerSupply_GetLocation_rs;
    if (!rs) rs = OcaPowerSupply_GetLocation_rs = new signature(OcaPowerSupplyLocation);
    const cmd = new CommandRrq(this.ono, 3, 8, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Event that is triggered when the value of Type changes.
   * @type {PropertyEvent}
   */
  get OnTypeChanged()
  {
    const event = this._TypeChanged;

    if (event) return event;

    return this._TypeChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 1), new signature(OcaPowerSupplyType));
  }

  /**
   * Event that is triggered when the value of ModelInfo changes.
   * @type {PropertyEvent}
   */
  get OnModelInfoChanged()
  {
    const event = this._ModelInfoChanged;

    if (event) return event;

    return this._ModelInfoChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 2), new signature(STRING));
  }

  /**
   * Event that is triggered when the value of State changes.
   * @type {PropertyEvent}
   */
  get OnStateChanged()
  {
    const event = this._StateChanged;

    if (event) return event;

    return this._StateChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 3), new signature(OcaPowerSupplyState));
  }

  /**
   * Event that is triggered when the value of Charging changes.
   * @type {PropertyEvent}
   */
  get OnChargingChanged()
  {
    const event = this._ChargingChanged;

    if (event) return event;

    return this._ChargingChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 4), new signature(BOOLEAN));
  }

  /**
   * Event that is triggered when the value of LoadFractionAvailable changes.
   * @type {PropertyEvent}
   */
  get OnLoadFractionAvailableChanged()
  {
    const event = this._LoadFractionAvailableChanged;

    if (event) return event;

    return this._LoadFractionAvailableChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 5), new signature(FLOAT32));
  }

  /**
   * Event that is triggered when the value of StorageFractionAvailable changes.
   * @type {PropertyEvent}
   */
  get OnStorageFractionAvailableChanged()
  {
    const event = this._StorageFractionAvailableChanged;

    if (event) return event;

    return this._StorageFractionAvailableChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 6), new signature(FLOAT32));
  }

  /**
   * Event that is triggered when the value of Location changes.
   * @type {PropertyEvent}
   */
  get OnLocationChanged()
  {
    const event = this._LocationChanged;

    if (event) return event;

    return this._LocationChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 7), new signature(OcaPowerSupplyLocation));
  }

  static get_properties()
  {
    if (!OcaPowerSupply_p)
    {
      OcaPowerSupply_p = new Properties([
          new Property("Type", new signature(OcaPowerSupplyType), 3, 1, false, false, null),
          new Property("ModelInfo", new signature(STRING), 3, 2, false, false, null),
          new Property("State", new signature(OcaPowerSupplyState), 3, 3, false, false, null),
          new Property("Charging", new signature(BOOLEAN), 3, 4, false, false, null),
          new Property("LoadFractionAvailable", new signature(FLOAT32), 3, 5, true, false, null),
          new Property("StorageFractionAvailable", new signature(FLOAT32), 3, 6, true, false, null),
          new Property("Location", new signature(OcaPowerSupplyLocation), 3, 7, true, false, null),
        ], 3, OcaAgent.get_properties());
    }

    return OcaPowerSupply_p;
  }

  static GetPropertySync()
  {
    let sync = OcaPowerSupply_sync;
    if (!sync)
    {
      OcaPowerSupply_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._TypeChanged) event.Dispose();
    if (event = this._ModelInfoChanged) event.Dispose();
    if (event = this._StateChanged) event.Dispose();
    if (event = this._ChargingChanged) event.Dispose();
    if (event = this._LoadFractionAvailableChanged) event.Dispose();
    if (event = this._StorageFractionAvailableChanged) event.Dispose();
    if (event = this._LocationChanged) event.Dispose();
  }
}


let OcaEventHandler_OnEvent_as = null;
let OcaEventHandler_p = null;

let OcaEventHandler_sync = null;

/**
 * Base class for event handler objects. Application developers can
 * derive from this class and add specific callback methods that perform
 * processing and/or have specific event data structures.
 * @extends OcaAgent
 */
export class OcaEventHandler extends OcaAgent
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0002\b";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Generic empty callback method for events. Application developers can
   * override this method in a derived class to add behavior.
   * @param Context {OcaBlob}
   *
   * @param eventData {OcaEventData}
   *
   * @retval {Promise}
   */
  OnEvent(Context, eventData)
  {
    let as = OcaEventHandler_OnEvent_as;
    if (!as) as = OcaEventHandler_OnEvent_as = new signature(BLOB, OcaEvent);
    const cmd = new CommandRrq(this.ono, 3, 1, 2,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  static get_properties()
  {
    if (!OcaEventHandler_p)
    {
      OcaEventHandler_p = new Properties([
        ], 3, OcaAgent.get_properties());
    }

    return OcaEventHandler_p;
  }

  static GetPropertySync()
  {
    let sync = OcaEventHandler_sync;
    if (!sync)
    {
      OcaEventHandler_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
  }
}


let OcaNumericObserverList_GetLastObservation_rs = null;
let OcaNumericObserverList_GetState_rs = null;
let OcaNumericObserverList_GetObservedProperties_rs = null;
let OcaNumericObserverList_SetObservedProperties_as = null;
let OcaNumericObserverList_GetThreshold_rs = null;
let OcaNumericObserverList_SetThreshold_as = null;
let OcaNumericObserverList_GetOperator_rs = null;
let OcaNumericObserverList_SetOperator_as = null;
let OcaNumericObserverList_GetTwoWay_rs = null;
let OcaNumericObserverList_SetTwoWay_as = null;
let OcaNumericObserverList_GetHysteresis_rs = null;
let OcaNumericObserverList_SetHysteresis_as = null;
let OcaNumericObserverList_GetPeriod_rs = null;
let OcaNumericObserverList_SetPeriod_as = null;
let OcaNumericObserverList_p = null;

let OcaNumericObserverList_sync = null;

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
export class OcaNumericObserverList extends OcaAgent
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._Observation = null;
    this._StateChanged = null;
    this._ObservedPropertiesChanged = null;
    this._ThresholdChanged = null;
    this._OperatorChanged = null;
    this._TwoWayChanged = null;
    this._HysteresisChanged = null;
    this._PeriodChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0002\t";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


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
   * @retval {Promise}
   */
  GetLastObservation()
  {
    let rs = OcaNumericObserverList_GetLastObservation_rs;
    if (!rs) rs = OcaNumericObserverList_GetLastObservation_rs = new signature(LIST(FLOAT64));
    const cmd = new CommandRrq(this.ono, 3, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the observer's state. The return value indicates whether the
   * state was successfully retrieved.
   * @retval {Promise}
   */
  GetState()
  {
    let rs = OcaNumericObserverList_GetState_rs;
    if (!rs) rs = OcaNumericObserverList_GetState_rs = new signature(OcaObserverState);
    const cmd = new CommandRrq(this.ono, 3, 2, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the identifications of the properties that the observer observes.
   * The order of property identifications in the returned list is
   * determined by the order of property identifications set by
   * SetObservedProperties, and is the same as the order of values returned
   * by GetLastObservation and the Observation event. The return value
   * indicates whether the identifications were successfully retrieved.
   * @retval {Promise}
   */
  GetObservedProperties()
  {
    let rs = OcaNumericObserverList_GetObservedProperties_rs;
    if (!rs) rs = OcaNumericObserverList_GetObservedProperties_rs = new signature(LIST(OcaProperty));
    const cmd = new CommandRrq(this.ono, 3, 3, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the identifications of the properties that the observer observes.
   * The order of property identifications supplied determines the order of
   * property identifications returned by GetObservedProperties and the
   * order of values returned by GetLastObservation and the Observation
   * event. The return value indicates whether the identifications were
   * successfully set.
   * @param property {OcaList}
   *
   * @retval {Promise}
   */
  SetObservedProperties(property)
  {
    let as = OcaNumericObserverList_SetObservedProperties_as;
    if (!as) as = OcaNumericObserverList_SetObservedProperties_as = new signature(LIST(OcaProperty));
    const cmd = new CommandRrq(this.ono, 3, 4, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the value of the <b>Threshold </b>property. The return value
   * indicates whether the threshold value was successfully retrieved.
   * @retval {Promise}
   */
  GetThreshold()
  {
    let rs = OcaNumericObserverList_GetThreshold_rs;
    if (!rs) rs = OcaNumericObserverList_GetThreshold_rs = new signature(FLOAT64);
    const cmd = new CommandRrq(this.ono, 3, 5, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the <b>Threshold </b>property. The return value
   * indicates whether the threshold value was successfully set.
   * @param Threshold {OcaFloat64}
   *
   * @retval {Promise}
   */
  SetThreshold(Threshold)
  {
    let as = OcaNumericObserverList_SetThreshold_as;
    if (!as) as = OcaNumericObserverList_SetThreshold_as = new signature(FLOAT64);
    const cmd = new CommandRrq(this.ono, 3, 6, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the value of the <b>Operator </b>property. The return value
   * indicates whether the property was successfully retrieved.
   * @retval {Promise}
   */
  GetOperator()
  {
    let rs = OcaNumericObserverList_GetOperator_rs;
    if (!rs) rs = OcaNumericObserverList_GetOperator_rs = new signature(OcaRelationalOperator);
    const cmd = new CommandRrq(this.ono, 3, 7, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the <b>Operator </b>property. The return value
   * indicates whether the operator was successfully set.
   * @param _operator {OcaRelationalOperator}
   *
   * @retval {Promise}
   */
  SetOperator(_operator)
  {
    let as = OcaNumericObserverList_SetOperator_as;
    if (!as) as = OcaNumericObserverList_SetOperator_as = new signature(OcaRelationalOperator);
    const cmd = new CommandRrq(this.ono, 3, 8, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the value of the <b>TwoWay </b>property. The return value
   * indicates whether the property was successfully retrieved.
   * @retval {Promise}
   */
  GetTwoWay()
  {
    let rs = OcaNumericObserverList_GetTwoWay_rs;
    if (!rs) rs = OcaNumericObserverList_GetTwoWay_rs = new signature(BOOLEAN);
    const cmd = new CommandRrq(this.ono, 3, 9, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the <b>TwoWay </b>property. The return value
   * indicates whether the property was successfully set.
   * @param twoWay {OcaBoolean}
   *
   * @retval {Promise}
   */
  SetTwoWay(twoWay)
  {
    let as = OcaNumericObserverList_SetTwoWay_as;
    if (!as) as = OcaNumericObserverList_SetTwoWay_as = new signature(BOOLEAN);
    const cmd = new CommandRrq(this.ono, 3, 10, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the value of the <b>Hysteresis </b>property. The return value
   * indicates whether the property was successfully retrieved.
   * @retval {Promise}
   */
  GetHysteresis()
  {
    let rs = OcaNumericObserverList_GetHysteresis_rs;
    if (!rs) rs = OcaNumericObserverList_GetHysteresis_rs = new signature(FLOAT64);
    const cmd = new CommandRrq(this.ono, 3, 11, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the <b>Hysteresis </b>property. The return value
   * indicates whether the property was successfully set.
   * @param hysteresis {OcaFloat64}
   *
   * @retval {Promise}
   */
  SetHysteresis(hysteresis)
  {
    let as = OcaNumericObserverList_SetHysteresis_as;
    if (!as) as = OcaNumericObserverList_SetHysteresis_as = new signature(FLOAT64);
    const cmd = new CommandRrq(this.ono, 3, 12, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the value of the <b>Period </b>property. The return value
   * indicates whether the property was successfully retrieved.
   * @retval {Promise}
   */
  GetPeriod()
  {
    let rs = OcaNumericObserverList_GetPeriod_rs;
    if (!rs) rs = OcaNumericObserverList_GetPeriod_rs = new signature(FLOAT32);
    const cmd = new CommandRrq(this.ono, 3, 13, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the <b>Period </b>property. The return value
   * indicates whether the property was successfully set.
   * @param period {OcaTimeInterval}
   *
   * @retval {Promise}
   */
  SetPeriod(period)
  {
    let as = OcaNumericObserverList_SetPeriod_as;
    if (!as) as = OcaNumericObserverList_SetPeriod_as = new signature(FLOAT32);
    const cmd = new CommandRrq(this.ono, 3, 14, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Event emitted to signal an asynchronous, periodic, or
   * conditional-periodic observation. This event returns the complete list
   * of values being observed, regardless of which one(s) may have
   * triggered it in the first place. The order of values in the returned
   * list is determined by the order of values set by
   * SetObservedProperties, and is the same as the order of values returned
   * by GetLastObservation, and the same as the order of object
   * identifications returned by GetObservedProperties.
   */
  get OnObservation()
  {
    const event = this._Observation;

    if (event) return event;

    const s = new signature(OcaEvent, LIST(FLOAT64));

    return this._Observation = new Event(this, new OcaEventID(3, 1), s);
  }

  /**
   * Event that is triggered when the value of State changes.
   * @type {PropertyEvent}
   */
  get OnStateChanged()
  {
    const event = this._StateChanged;

    if (event) return event;

    return this._StateChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 1), new signature(OcaObserverState));
  }

  /**
   * Event that is triggered when the value of ObservedProperties changes.
   * @type {PropertyEvent}
   */
  get OnObservedPropertiesChanged()
  {
    const event = this._ObservedPropertiesChanged;

    if (event) return event;

    return this._ObservedPropertiesChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 2), new signature(LIST(OcaProperty)));
  }

  /**
   * Event that is triggered when the value of Threshold changes.
   * @type {PropertyEvent}
   */
  get OnThresholdChanged()
  {
    const event = this._ThresholdChanged;

    if (event) return event;

    return this._ThresholdChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 3), new signature(FLOAT64));
  }

  /**
   * Event that is triggered when the value of Operator changes.
   * @type {PropertyEvent}
   */
  get OnOperatorChanged()
  {
    const event = this._OperatorChanged;

    if (event) return event;

    return this._OperatorChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 4), new signature(OcaRelationalOperator));
  }

  /**
   * Event that is triggered when the value of TwoWay changes.
   * @type {PropertyEvent}
   */
  get OnTwoWayChanged()
  {
    const event = this._TwoWayChanged;

    if (event) return event;

    return this._TwoWayChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 5), new signature(BOOLEAN));
  }

  /**
   * Event that is triggered when the value of Hysteresis changes.
   * @type {PropertyEvent}
   */
  get OnHysteresisChanged()
  {
    const event = this._HysteresisChanged;

    if (event) return event;

    return this._HysteresisChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 6), new signature(FLOAT64));
  }

  /**
   * Event that is triggered when the value of Period changes.
   * @type {PropertyEvent}
   */
  get OnPeriodChanged()
  {
    const event = this._PeriodChanged;

    if (event) return event;

    return this._PeriodChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 7), new signature(FLOAT32));
  }

  static get_properties()
  {
    if (!OcaNumericObserverList_p)
    {
      OcaNumericObserverList_p = new Properties([
          new Property("State", new signature(OcaObserverState), 3, 1, false, false, null),
          new Property("ObservedProperties", new signature(LIST(OcaProperty)), 3, 2, false, false, null),
          new Property("Threshold", new signature(FLOAT64), 3, 3, false, false, null),
          new Property("Operator", new signature(OcaRelationalOperator), 3, 4, false, false, null),
          new Property("TwoWay", new signature(BOOLEAN), 3, 5, false, false, null),
          new Property("Hysteresis", new signature(FLOAT64), 3, 6, false, false, null),
          new Property("Period", new signature(FLOAT32), 3, 7, false, false, null),
        ], 3, OcaAgent.get_properties());
    }

    return OcaNumericObserverList_p;
  }

  static GetPropertySync()
  {
    let sync = OcaNumericObserverList_sync;
    if (!sync)
    {
      OcaNumericObserverList_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._Observation) event.Dispose();
    if (event = this._StateChanged) event.Dispose();
    if (event = this._ObservedPropertiesChanged) event.Dispose();
    if (event = this._ThresholdChanged) event.Dispose();
    if (event = this._OperatorChanged) event.Dispose();
    if (event = this._TwoWayChanged) event.Dispose();
    if (event = this._HysteresisChanged) event.Dispose();
    if (event = this._PeriodChanged) event.Dispose();
  }
}


let OcaTask_Control_as = null;
let OcaTask_GetStatus_rs = null;
let OcaTask_GetSlot_rs = null;
let OcaTask_SetSlot_as = null;
let OcaTask_GetTimeMode_rs = null;
let OcaTask_SetTimeMode_as = null;
let OcaTask_GetTimeUnits_rs = null;
let OcaTask_SetTimeUnits_as = null;
let OcaTask_GetClockONo_rs = null;
let OcaTask_SetClockONo_as = null;
let OcaTask_GetStartTime_rs = null;
let OcaTask_SetStartTime_as = null;
let OcaTask_GetDuration_rs = null;
let OcaTask_SetDuration_as = null;
let OcaTask_p = null;

let OcaTask_sync = null;

/**
 * <ul> <li><font color="#223274"><b>Device action that starts, executes,
 * and (normally) stops</b></font></li> <li><font color="#223274"><b>Use
 * cases</b></font></li> </ul> <ul> <li>Ramper</li> <li>Show control
 * cues</li> <li>MIDI notes</li> <li>Paging system calls</li>
 * <li>Cue-oriented mixer actions (maybe only rampers, maybe not)</li>
 * </ul> <ul> <li><font color="#223274"><b>Simple tasks</b></font></li>
 * </ul> <ul> <li>Simple tasks are relatively featureless actions that
 * start/run/stop.</li> <li>OcaTask would be the root class with no
 * features other than run parameters, status, etc.</li> <li>Subclasses
 * would be defined to have specific attributes (e.g. OcaRamper has Goal
 * value)</li> </ul> <ul> <li><font color="#223274"><b>Complex
 * tasks</b></font></li> </ul> <ul> <li>Complex tasks are tasks with
 * multiple control parameters of various types.</li> <li>For example, a
 * MIDI note task would need pitch, volume, and other parameters.</li>
 * <li>Complex tasks should not be implemented by subclassing OcaTask,
 * because the resulting subclasses would be too complex and too
 * numerous. </li> <li>Instead, we propose to define a kind of task
 * (OcaBlockTask) that links to a block. The block can then contain the
 * complex features in the usual way.</li> </ul> <ul> <li><font
 * color="#223274"><b>Slots</b></font></li> </ul> <ul> <li>Some (although
 * not all) devices preallocate resources for task execution.</li> <li>We
 * call these resources "slots". Slots are recorded in the collection
 * <font color="#0c0080"><b>Slots </b></font>of <font
 * color="#0c0080"><b>OcaTaskManager</b></font>.</li> <li>A task may be
 * automatically or manually assigned to a slot.</li> </ul>
 * @extends OcaAgent
 */
export class OcaTask extends OcaAgent
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._StatusChanged = null;
    this._SlotChanged = null;
    this._TimeModeChanged = null;
    this._TimeUnitsChanged = null;
    this._ClockONoChanged = null;
    this._StartTimeChanged = null;
    this._DurationChanged = null;
  }

  /**
   * This property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0002\f";
  }

  /**
   * This property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 1;
  }


  /**
   * Executes the given command. The return value indicates whether the
   * command was successfully executed.
   * @param Command {OcaTaskCommand}
   *
   * @param StateParameter {OcaBlob}
   *
   * @retval {Promise}
   */
  Control(Command, StateParameter)
  {
    let as = OcaTask_Control_as;
    if (!as) as = OcaTask_Control_as = new signature(OcaTaskCommand, BLOB);
    const cmd = new CommandRrq(this.ono, 3, 1, 2,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets current status of ramper. The return value indicates whether the
   * status was successfully retrieved.
   * @retval {Promise}
   */
  GetStatus()
  {
    let rs = OcaTask_GetStatus_rs;
    if (!rs) rs = OcaTask_GetStatus_rs = new signature(OcaTaskStatus);
    const cmd = new CommandRrq(this.ono, 3, 2, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets task slot index. The return value indicates whether the value was
   * successfully retrieved. Returns zero if task is not assigned to a
   * slot. Returns NotImplemented status if device does not use slots.
   * @retval {Promise}
   */
  GetSlot()
  {
    let rs = OcaTask_GetSlot_rs;
    if (!rs) rs = OcaTask_GetSlot_rs = new signature(UINT16);
    const cmd = new CommandRrq(this.ono, 3, 3, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets task slot index. The return value indicates whether the value was
   * successfully set. If a value of zero is provided, removes task from
   * all slots. Returns NotImplemented status if device does not use slots.
   * @param ID {OcaTaskSlotID}
   *
   * @retval {Promise}
   */
  SetSlot(ID)
  {
    let as = OcaTask_SetSlot_as;
    if (!as) as = OcaTask_SetSlot_as = new signature(UINT16);
    const cmd = new CommandRrq(this.ono, 3, 4, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets task time mode (absolute or relative). The return value indicates
   * whether the time mode was successfully retrieved.
   * @retval {Promise}
   */
  GetTimeMode()
  {
    let rs = OcaTask_GetTimeMode_rs;
    if (!rs) rs = OcaTask_GetTimeMode_rs = new signature(OcaTimeMode);
    const cmd = new CommandRrq(this.ono, 3, 5, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets task time mode (absolute or relative). The return value indicates
   * whether the time mode was successfully set.
   * @param TimeMode {OcaTimeMode}
   *
   * @retval {Promise}
   */
  SetTimeMode(TimeMode)
  {
    let as = OcaTask_SetTimeMode_as;
    if (!as) as = OcaTask_SetTimeMode_as = new signature(OcaTimeMode);
    const cmd = new CommandRrq(this.ono, 3, 6, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets task time units (seconds or samples). The return value indicates
   * whether the time mode was successfully retrieved.
   * @retval {Promise}
   */
  GetTimeUnits()
  {
    let rs = OcaTask_GetTimeUnits_rs;
    if (!rs) rs = OcaTask_GetTimeUnits_rs = new signature(OcaTimeUnits);
    const cmd = new CommandRrq(this.ono, 3, 7, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets task time units (seconds or samples). The return value indicates
   * whether the time units were successfully set.
   * @param TimeUnits {OcaTimeUnits}
   *
   * @retval {Promise}
   */
  SetTimeUnits(TimeUnits)
  {
    let as = OcaTask_SetTimeUnits_as;
    if (!as) as = OcaTask_SetTimeUnits_as = new signature(OcaTimeUnits);
    const cmd = new CommandRrq(this.ono, 3, 8, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets object number of clock source (OcaTimeSource if
   * TimeUnits=seconds, or OcaMediaClock3 if TimeUnits=samples) . A zero
   * value indicates the clock source is the device's internal time or
   * sample clock. The return value indicates whether the object number was
   * successfully retrieved.
   * @retval {Promise}
   */
  GetClockONo()
  {
    let rs = OcaTask_GetClockONo_rs;
    if (!rs) rs = OcaTask_GetClockONo_rs = new signature(UINT32);
    const cmd = new CommandRrq(this.ono, 3, 9, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets object number of clock source (OcaTimeSource if
   * TimeUnits=seconds, or OcaMediaClock3 if TimeUnits=samples) . A zero
   * value indicates the clock source is the device's internal time or
   * sample clock. The return value indicates whether the object number was
   * successfully set.
   * @param ClockONo {OcaONo}
   *
   * @retval {Promise}
   */
  SetClockONo(ClockONo)
  {
    let as = OcaTask_SetClockONo_as;
    if (!as) as = OcaTask_SetClockONo_as = new signature(UINT32);
    const cmd = new CommandRrq(this.ono, 3, 10, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets task start time. The return value indicates whether the start
   * time was successfully retrieved.
   * @retval {Promise}
   */
  GetStartTime()
  {
    let rs = OcaTask_GetStartTime_rs;
    if (!rs) rs = OcaTask_GetStartTime_rs = new signature(UINT64);
    const cmd = new CommandRrq(this.ono, 3, 11, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets task start time. The return value indicates whether the start
   * time was successfully set.
   * @param TimeMode {OcaTimeOfDay}
   *
   * @retval {Promise}
   */
  SetStartTime(TimeMode)
  {
    let as = OcaTask_SetStartTime_as;
    if (!as) as = OcaTask_SetStartTime_as = new signature(UINT64);
    const cmd = new CommandRrq(this.ono, 3, 12, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets task duration. The return value indicates whether the duration
   * was successfully retrieved.
   * @retval {Promise}
   */
  GetDuration()
  {
    let rs = OcaTask_GetDuration_rs;
    if (!rs) rs = OcaTask_GetDuration_rs = new signature(FLOAT32, FLOAT32, FLOAT32);
    const cmd = new CommandRrq(this.ono, 3, 13, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets task duration. The return value indicates whether the duration
   * was successfully set.
   * @param Duration {OcaTimeInterval}
   *
   * @retval {Promise}
   */
  SetDuration(Duration)
  {
    let as = OcaTask_SetDuration_as;
    if (!as) as = OcaTask_SetDuration_as = new signature(FLOAT32);
    const cmd = new CommandRrq(this.ono, 3, 14, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Event that is triggered when the value of Status changes.
   * @type {PropertyEvent}
   */
  get OnStatusChanged()
  {
    const event = this._StatusChanged;

    if (event) return event;

    return this._StatusChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 1), new signature(OcaTaskStatus));
  }

  /**
   * Event that is triggered when the value of Slot changes.
   * @type {PropertyEvent}
   */
  get OnSlotChanged()
  {
    const event = this._SlotChanged;

    if (event) return event;

    return this._SlotChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 2), new signature(UINT16));
  }

  /**
   * Event that is triggered when the value of TimeMode changes.
   * @type {PropertyEvent}
   */
  get OnTimeModeChanged()
  {
    const event = this._TimeModeChanged;

    if (event) return event;

    return this._TimeModeChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 3), new signature(OcaTimeMode));
  }

  /**
   * Event that is triggered when the value of TimeUnits changes.
   * @type {PropertyEvent}
   */
  get OnTimeUnitsChanged()
  {
    const event = this._TimeUnitsChanged;

    if (event) return event;

    return this._TimeUnitsChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 4), new signature(OcaTimeUnits));
  }

  /**
   * Event that is triggered when the value of ClockONo changes.
   * @type {PropertyEvent}
   */
  get OnClockONoChanged()
  {
    const event = this._ClockONoChanged;

    if (event) return event;

    return this._ClockONoChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 5), new signature(UINT32));
  }

  /**
   * Event that is triggered when the value of StartTime changes.
   * @type {PropertyEvent}
   */
  get OnStartTimeChanged()
  {
    const event = this._StartTimeChanged;

    if (event) return event;

    return this._StartTimeChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 6), new signature(UINT64));
  }

  /**
   * Event that is triggered when the value of Duration changes.
   * @type {PropertyEvent}
   */
  get OnDurationChanged()
  {
    const event = this._DurationChanged;

    if (event) return event;

    return this._DurationChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 7), new signature(FLOAT32));
  }

  static get_properties()
  {
    if (!OcaTask_p)
    {
      OcaTask_p = new Properties([
          new Property("Status", new signature(OcaTaskStatus), 3, 1, false, false, null),
          new Property("Slot", new signature(UINT16), 3, 2, false, false, null),
          new Property("TimeMode", new signature(OcaTimeMode), 3, 3, false, false, null),
          new Property("TimeUnits", new signature(OcaTimeUnits), 3, 4, false, false, null),
          new Property("ClockONo", new signature(UINT32), 3, 5, false, false, null),
          new Property("StartTime", new signature(UINT64), 3, 6, false, false, null),
          new Property("Duration", new signature(FLOAT32), 3, 7, false, false, null),
        ], 3, OcaAgent.get_properties());
    }

    return OcaTask_p;
  }

  static GetPropertySync()
  {
    let sync = OcaTask_sync;
    if (!sync)
    {
      OcaTask_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._StatusChanged) event.Dispose();
    if (event = this._SlotChanged) event.Dispose();
    if (event = this._TimeModeChanged) event.Dispose();
    if (event = this._TimeUnitsChanged) event.Dispose();
    if (event = this._ClockONoChanged) event.Dispose();
    if (event = this._StartTimeChanged) event.Dispose();
    if (event = this._DurationChanged) event.Dispose();
  }
}


let OcaTaskFactory_Control_as = null;
let OcaTaskFactory_GetState_rs = null;
let OcaTaskFactory_GetSlot_rs = null;
let OcaTaskFactory_SetSlot_as = null;
let OcaTaskFactory_GetTimeMode_rs = null;
let OcaTaskFactory_SetTimeMode_as = null;
let OcaTaskFactory_GetStartTime_rs = null;
let OcaTaskFactory_SetStartTime_as = null;
let OcaTaskFactory_GetDuration_rs = null;
let OcaTaskFactory_SetDuration_as = null;
let OcaTaskFactory_p = null;

let OcaTaskFactory_sync = null;

/**
 * Base class for constructors of OcaTask objects. Used by the OcaBlock
 * method ConstructMemberUsingFactory(...) to create tasks.
 * @extends OcaAgent
 */
export class OcaTaskFactory extends OcaAgent
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._SlotChanged = null;
    this._TimeModeChanged = null;
    this._StartTimeChanged = null;
    this._DurationChanged = null;
  }

  /**
   * This property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0002\r";
  }

  /**
   * This property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 1;
  }


  /**
   * Executes the given command. The return value indicates whether the
   * command was successfully executed.
   * @param Command {OcaTaskCommand}
   *
   * @retval {Promise}
   */
  Control(Command)
  {
    let as = OcaTaskFactory_Control_as;
    if (!as) as = OcaTaskFactory_Control_as = new signature(OcaTaskCommand);
    const cmd = new CommandRrq(this.ono, 3, 1, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets current state of ramper. The return value indicates whether the
   * state was successfully retrieved.
   * @retval {Promise}
   */
  GetState()
  {
    let rs = OcaTaskFactory_GetState_rs;
    if (!rs) rs = OcaTaskFactory_GetState_rs = new signature(OcaTaskState);
    const cmd = new CommandRrq(this.ono, 3, 2, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets task slot ID. The return value indicates whether the value was
   * successfully retrieved. Returns zero if task is not assigned to a
   * slot. Returns NotImplemented status if device does not use slots.
   * @retval {Promise}
   */
  GetSlot()
  {
    let rs = OcaTaskFactory_GetSlot_rs;
    if (!rs) rs = OcaTaskFactory_GetSlot_rs = new signature(UINT16);
    const cmd = new CommandRrq(this.ono, 3, 3, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets task slot ID. The return value indicates whether the value was
   * successfully set. If a value of zero is provided, removes task from
   * all slots. Returns NotImplemented status if device does not use slots.
   * @param ID {OcaTaskSlotID}
   *
   * @retval {Promise}
   */
  SetSlot(ID)
  {
    let as = OcaTaskFactory_SetSlot_as;
    if (!as) as = OcaTaskFactory_SetSlot_as = new signature(UINT16);
    const cmd = new CommandRrq(this.ono, 3, 4, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets task time mode (absolute or relative). The return value indicates
   * whether the time mode was successfully retrieved.
   * @retval {Promise}
   */
  GetTimeMode()
  {
    let rs = OcaTaskFactory_GetTimeMode_rs;
    if (!rs) rs = OcaTaskFactory_GetTimeMode_rs = new signature(OcaTimeMode);
    const cmd = new CommandRrq(this.ono, 3, 5, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets task time mode (absolute or relative). The return value indicates
   * whether the time mode was successfully set.
   * @param TimeMode {OcaTimeMode}
   *
   * @retval {Promise}
   */
  SetTimeMode(TimeMode)
  {
    let as = OcaTaskFactory_SetTimeMode_as;
    if (!as) as = OcaTaskFactory_SetTimeMode_as = new signature(OcaTimeMode);
    const cmd = new CommandRrq(this.ono, 3, 6, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets task start time. The return value indicates whether the start
   * time was successfully retrieved.
   * @retval {Promise}
   */
  GetStartTime()
  {
    let rs = OcaTaskFactory_GetStartTime_rs;
    if (!rs) rs = OcaTaskFactory_GetStartTime_rs = new signature(UINT64);
    const cmd = new CommandRrq(this.ono, 3, 7, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets task start time. The return value indicates whether the start
   * time was successfully set.
   * @param TimeMode {OcaTimeOfDay}
   *
   * @retval {Promise}
   */
  SetStartTime(TimeMode)
  {
    let as = OcaTaskFactory_SetStartTime_as;
    if (!as) as = OcaTaskFactory_SetStartTime_as = new signature(UINT64);
    const cmd = new CommandRrq(this.ono, 3, 8, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets task duration. The return value indicates whether the duration
   * was successfully retrieved.
   * @retval {Promise}
   */
  GetDuration()
  {
    let rs = OcaTaskFactory_GetDuration_rs;
    if (!rs) rs = OcaTaskFactory_GetDuration_rs = new signature(FLOAT32, FLOAT32, FLOAT32);
    const cmd = new CommandRrq(this.ono, 3, 9, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets task duration. The return value indicates whether the duration
   * was successfully set.
   * @param Duration {OcaTimeInterval}
   *
   * @retval {Promise}
   */
  SetDuration(Duration)
  {
    let as = OcaTaskFactory_SetDuration_as;
    if (!as) as = OcaTaskFactory_SetDuration_as = new signature(FLOAT32);
    const cmd = new CommandRrq(this.ono, 3, 10, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Event that is triggered when the value of Slot changes.
   * @type {PropertyEvent}
   */
  get OnSlotChanged()
  {
    const event = this._SlotChanged;

    if (event) return event;

    return this._SlotChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 1), new signature(UINT16));
  }

  /**
   * Event that is triggered when the value of TimeMode changes.
   * @type {PropertyEvent}
   */
  get OnTimeModeChanged()
  {
    const event = this._TimeModeChanged;

    if (event) return event;

    return this._TimeModeChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 2), new signature(OcaTimeMode));
  }

  /**
   * Event that is triggered when the value of StartTime changes.
   * @type {PropertyEvent}
   */
  get OnStartTimeChanged()
  {
    const event = this._StartTimeChanged;

    if (event) return event;

    return this._StartTimeChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 3), new signature(UINT64));
  }

  /**
   * Event that is triggered when the value of Duration changes.
   * @type {PropertyEvent}
   */
  get OnDurationChanged()
  {
    const event = this._DurationChanged;

    if (event) return event;

    return this._DurationChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 4), new signature(FLOAT32));
  }

  static get_properties()
  {
    if (!OcaTaskFactory_p)
    {
      OcaTaskFactory_p = new Properties([
          new Property("Slot", new signature(UINT16), 3, 1, false, false, null),
          new Property("TimeMode", new signature(OcaTimeMode), 3, 2, false, false, null),
          new Property("StartTime", new signature(UINT64), 3, 3, false, false, null),
          new Property("Duration", new signature(FLOAT32), 3, 4, false, false, null),
        ], 3, OcaAgent.get_properties());
    }

    return OcaTaskFactory_p;
  }

  static GetPropertySync()
  {
    let sync = OcaTaskFactory_sync;
    if (!sync)
    {
      OcaTaskFactory_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._SlotChanged) event.Dispose();
    if (event = this._TimeModeChanged) event.Dispose();
    if (event = this._StartTimeChanged) event.Dispose();
    if (event = this._DurationChanged) event.Dispose();
  }
}


let OcaTaskGroup_Control_as = null;
let OcaTaskGroup_AddTask_as = null;
let OcaTaskGroup_DeleteTask_as = null;
let OcaTaskGroup_GetTasks_rs = null;
let OcaTaskGroup_GetID_rs = null;
let OcaTaskGroup_SetID_as = null;
let OcaTaskGroup_p = null;

let OcaTaskGroup_sync = null;

/**
 * A group of tasks that may be started and stopped as a unit.
 * @extends OcaAgent
 */
export class OcaTaskGroup extends OcaAgent
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._IDChanged = null;
    this._TasksChanged = null;
  }

  /**
   * This property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0002\u000e";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 1;
  }


  /**
   * Performs the requested command. The return value indicates whether the
   * operation was successful.
   * @param Command {OcaTaskCommand}
   *
   * @param StateParameter {OcaBlob}
   *
   * @retval {Promise}
   */
  Control(Command, StateParameter)
  {
    let as = OcaTaskGroup_Control_as;
    if (!as) as = OcaTaskGroup_Control_as = new signature(OcaTaskCommand, BLOB);
    const cmd = new CommandRrq(this.ono, 3, 1, 2,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Adds a task to the task group. The return value indicates whether the
   * task was successfully added. Optional method, may not be supported in
   * all implementations.
   * @param TaskONo {OcaONo}
   *
   * @retval {Promise}
   */
  AddTask(TaskONo)
  {
    let as = OcaTaskGroup_AddTask_as;
    if (!as) as = OcaTaskGroup_AddTask_as = new signature(UINT32);
    const cmd = new CommandRrq(this.ono, 3, 2, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Deletes a task from the task group. The return value indicates whether
   * the task was successfully deleted. Optional method, may not be
   * supported in all implementations.
   * @param TaskONo {OcaONo}
   *
   * @retval {Promise}
   */
  DeleteTask(TaskONo)
  {
    let as = OcaTaskGroup_DeleteTask_as;
    if (!as) as = OcaTaskGroup_DeleteTask_as = new signature(UINT32);
    const cmd = new CommandRrq(this.ono, 3, 3, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Retrieves the list of ONos of the tasks in the task group. The return
   * value indicates whether the list was successfully retrieved. Optional
   * method, may not be supported in all implementations.
   * @retval {Promise}
   */
  GetTasks()
  {
    let rs = OcaTaskGroup_GetTasks_rs;
    if (!rs) rs = OcaTaskGroup_GetTasks_rs = new signature(LIST(UINT32));
    const cmd = new CommandRrq(this.ono, 3, 4, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the value of the <b>ID </b>property. The return value indicates
   * whether the value was successfully retrieved.
   * @retval {Promise}
   */
  GetID()
  {
    let rs = OcaTaskGroup_GetID_rs;
    if (!rs) rs = OcaTaskGroup_GetID_rs = new signature(UINT16);
    const cmd = new CommandRrq(this.ono, 3, 5, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the <b>ID </b>property. The return value indicates
   * whether the value was successfully set. Optional method, may not be
   * supported in all implementations.
   * @param ID {OcaTaskGroupID}
   *
   * @retval {Promise}
   */
  SetID(ID)
  {
    let as = OcaTaskGroup_SetID_as;
    if (!as) as = OcaTaskGroup_SetID_as = new signature(UINT16);
    const cmd = new CommandRrq(this.ono, 3, 6, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Event that is triggered when the value of ID changes.
   * @type {PropertyEvent}
   */
  get OnIDChanged()
  {
    const event = this._IDChanged;

    if (event) return event;

    return this._IDChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 1), new signature(UINT16));
  }

  /**
   * Event that is triggered when the value of Tasks changes.
   * @type {PropertyEvent}
   */
  get OnTasksChanged()
  {
    const event = this._TasksChanged;

    if (event) return event;

    return this._TasksChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 2), new signature(LIST(UINT32)));
  }

  static get_properties()
  {
    if (!OcaTaskGroup_p)
    {
      OcaTaskGroup_p = new Properties([
          new Property("ID", new signature(UINT16), 3, 1, false, false, null),
          new Property("Tasks", new signature(LIST(UINT32)), 3, 2, false, false, null),
        ], 3, OcaAgent.get_properties());
    }

    return OcaTaskGroup_p;
  }

  static GetPropertySync()
  {
    let sync = OcaTaskGroup_sync;
    if (!sync)
    {
      OcaTaskGroup_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._IDChanged) event.Dispose();
    if (event = this._TasksChanged) event.Dispose();
  }
}


let OcaRamperTask_GetRampedProperty_rs = null;
let OcaRamperTask_SetRampedProperty_as = null;
let OcaRamperTask_GetInterpolationLaw_rs = null;
let OcaRamperTask_SetInterpolationLaw_as = null;
let OcaRamperTask_GetGoal_rs = null;
let OcaRamperTask_SetGoal_as = null;
let OcaRamperTask_p = null;

let OcaRamperTask_sync = null;

/**
 * Agent that gradually changes a property setting from one value to
 * another. Works on a scalar numeric or boolean property of a specified
 * object. Does not work for array, list, map, struct, or string
 * properties. Subclass of <b>OcaTask</b>, q.v. Contains timer features
 * to allow ramps to start immediately or at any time in the future. This
 * is a weakly typed class. All ramping parameters are specified as a
 * <b>OcaFloat64 </b>numbers. <ul> <li>For unsigned integer targets, the
 * ramping parameters are coerced to <b>OcaUint64 </b>before comparing.
 * </li> <li>For signed integer targets, the ramping parameters are
 * coerced to <b>OcaInt64 </b>before comparing. </li> <li>For boolean
 * values, the the ramping parameters are coerced to <b>OcaUint8.
 * </b>True is assigned the value One, False is assigned the value
 * Zero.</li> </ul>
 * @extends OcaTask
 */
export class OcaRamperTask extends OcaTask
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._RampedPropertyChanged = null;
    this._InterpolationLawChanged = null;
    this._GoalChanged = null;
  }

  /**
   * This property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0002\f\u0001";
  }

  /**
   * This property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 1;
  }


  /**
   * Gets definition of ramped property. The return value indicates whether
   * the object number was successfully retrieved.
   * @retval {Promise}
   */
  GetRampedProperty()
  {
    let rs = OcaRamperTask_GetRampedProperty_rs;
    if (!rs) rs = OcaRamperTask_GetRampedProperty_rs = new signature(OcaProperty);
    const cmd = new CommandRrq(this.ono, 4, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Defines property to be ramped. The return value indicates whether the
   * definition was successful.
   * @param property {OcaProperty}
   *
   * @retval {Promise}
   */
  SetRampedProperty(property)
  {
    let as = OcaRamperTask_SetRampedProperty_as;
    if (!as) as = OcaRamperTask_SetRampedProperty_as = new signature(OcaProperty);
    const cmd = new CommandRrq(this.ono, 4, 2, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Retrieves interpolation law setting. The return value indicates
   * whether the setting was successfully retrieved.
   * @retval {Promise}
   */
  GetInterpolationLaw()
  {
    let rs = OcaRamperTask_GetInterpolationLaw_rs;
    if (!rs) rs = OcaRamperTask_GetInterpolationLaw_rs = new signature(OcaRamperInterpolationLaw);
    const cmd = new CommandRrq(this.ono, 4, 3, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets ramp interpolation law. The return value indicates whether the
   * law was successfully set.
   * @param law {OcaRamperInterpolationLaw}
   *
   * @retval {Promise}
   */
  SetInterpolationLaw(law)
  {
    let as = OcaRamperTask_SetInterpolationLaw_as;
    if (!as) as = OcaRamperTask_SetInterpolationLaw_as = new signature(OcaRamperInterpolationLaw);
    const cmd = new CommandRrq(this.ono, 4, 4, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Retrieves ramp goal value. The return value indicates whether the
   * duration was successfully retrieved.
   * @retval {Promise}
   */
  GetGoal()
  {
    let rs = OcaRamperTask_GetGoal_rs;
    if (!rs) rs = OcaRamperTask_GetGoal_rs = new signature(FLOAT64);
    const cmd = new CommandRrq(this.ono, 4, 5, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets ramp goal value. The return value indicates whether the duration
   * was successfully set.
   * @param goal {OcaFloat64}
   *
   * @retval {Promise}
   */
  SetGoal(goal)
  {
    let as = OcaRamperTask_SetGoal_as;
    if (!as) as = OcaRamperTask_SetGoal_as = new signature(FLOAT64);
    const cmd = new CommandRrq(this.ono, 4, 6, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Event that is triggered when the value of RampedProperty changes.
   * @type {PropertyEvent}
   */
  get OnRampedPropertyChanged()
  {
    const event = this._RampedPropertyChanged;

    if (event) return event;

    return this._RampedPropertyChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 1), new signature(OcaProperty));
  }

  /**
   * Event that is triggered when the value of InterpolationLaw changes.
   * @type {PropertyEvent}
   */
  get OnInterpolationLawChanged()
  {
    const event = this._InterpolationLawChanged;

    if (event) return event;

    return this._InterpolationLawChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 2), new signature(OcaRamperInterpolationLaw));
  }

  /**
   * Event that is triggered when the value of Goal changes.
   * @type {PropertyEvent}
   */
  get OnGoalChanged()
  {
    const event = this._GoalChanged;

    if (event) return event;

    return this._GoalChanged =
      new PropertyEvent(this, new OcaPropertyID(4, 3), new signature(FLOAT64));
  }

  static get_properties()
  {
    if (!OcaRamperTask_p)
    {
      OcaRamperTask_p = new Properties([
          new Property("RampedProperty", new signature(OcaProperty), 4, 1, false, false, null),
          new Property("InterpolationLaw", new signature(OcaRamperInterpolationLaw), 4, 2, false, false, null),
          new Property("Goal", new signature(FLOAT64), 4, 3, false, false, null),
        ], 4, OcaTask.get_properties());
    }

    return OcaRamperTask_p;
  }

  static GetPropertySync()
  {
    let sync = OcaRamperTask_sync;
    if (!sync)
    {
      OcaRamperTask_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._RampedPropertyChanged) event.Dispose();
    if (event = this._InterpolationLawChanged) event.Dispose();
    if (event = this._GoalChanged) event.Dispose();
  }
}


let OcaMediaClock3_GetAvailability_rs = null;
let OcaMediaClock3_SetAvailability_as = null;
let OcaMediaClock3_GetCurrentRate_rs = null;
let OcaMediaClock3_SetCurrentRate_as = null;
let OcaMediaClock3_GetOffset_rs = null;
let OcaMediaClock3_SetOffset_as = null;
let OcaMediaClock3_GetSupportedRates_rs = null;
let OcaMediaClock3_p = null;

let OcaMediaClock3_sync = null;

/**
 * A media clock, internal or external. OCA Connection Management 3
 * (OCA-CM3) version.
 * @extends OcaAgent
 */
export class OcaMediaClock3 extends OcaAgent
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._AvailabilityChanged = null;
    this._TimeSourceONoChanged = null;
    this._OffsetChanged = null;
    this._CurrentRateChanged = null;
  }

  /**
   * This property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0002\u000f";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 1;
  }

  /**
   * Map of supported rates for each supported time source. Key of map is
   * ONo of supported time source; value is list of supported clock rates
   * for the given time source. Private parameter, does not generate
   * property-change events.
   */
  static get SupportedRates()
  {
    return 0;
  }


  /**
   * Gets the value of the <b>Availability </b>property. The return value
   * indicates whether the value was successfully retrieved.
   * @retval {Promise}
   */
  GetAvailability()
  {
    let rs = OcaMediaClock3_GetAvailability_rs;
    if (!rs) rs = OcaMediaClock3_GetAvailability_rs = new signature(OcaMediaClockAvailability);
    const cmd = new CommandRrq(this.ono, 3, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the <b>Availability </b>property. The return value
   * indicates whether the value was successfully set. Optional method, may
   * not be supported in all implementations.
   * @param Availability {OcaMediaClockAvailability}
   *
   * @retval {Promise}
   */
  SetAvailability(Availability)
  {
    let as = OcaMediaClock3_SetAvailability_as;
    if (!as) as = OcaMediaClock3_SetAvailability_as = new signature(OcaMediaClockAvailability);
    const cmd = new CommandRrq(this.ono, 3, 2, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the current clock rate and the ONo of the associated
   * <b>OcaTimeSource </b>object. The return value indicates whether the
   * value was successfully retrieved.
   * @retval {Promise}
   */
  GetCurrentRate()
  {
    let rs = OcaMediaClock3_GetCurrentRate_rs;
    if (!rs) rs = OcaMediaClock3_GetCurrentRate_rs = new signature(OcaMediaClockRate, UINT32);
    const cmd = new CommandRrq(this.ono, 3, 3, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the clock rate and the ONo of the associated <b>OcaTimeSource
   * </b>object. The return value indicates whether the value was
   * successfully set. Optional method, may not be supported in all
   * implementations.
   * @param Rate {OcaMediaClockRate}
   *
   * @param TimeSourceONo {OcaONo}
   *
   * @retval {Promise}
   */
  SetCurrentRate(Rate, TimeSourceONo)
  {
    let as = OcaMediaClock3_SetCurrentRate_as;
    if (!as) as = OcaMediaClock3_SetCurrentRate_as = new signature(OcaMediaClockRate, UINT32);
    const cmd = new CommandRrq(this.ono, 3, 4, 2,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the offset of this media clock's time from that of the associated
   * <b>OcaTimeSource </b>object. The return value indicates whether the
   * value was successfully retrieved.
   * @retval {Promise}
   */
  GetOffset()
  {
    let rs = OcaMediaClock3_GetOffset_rs;
    if (!rs) rs = OcaMediaClock3_GetOffset_rs = new signature(UINT64);
    const cmd = new CommandRrq(this.ono, 3, 5, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the offset of this media clock's time from that of the associated
   * <b>OcaTimeSource </b>object. The return value indicates whether the
   * value was successfully set. Optional method, may not be supported in
   * all implementations.
   * @param Offset {OcaTimeOffset}
   *
   * @retval {Promise}
   */
  SetOffset(Offset)
  {
    let as = OcaMediaClock3_SetOffset_as;
    if (!as) as = OcaMediaClock3_SetOffset_as = new signature(UINT64);
    const cmd = new CommandRrq(this.ono, 3, 6, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the list of supported media clock rates for the given time
   * source. The return value indicates whether the list was successfully
   * retrieved.
   * @retval {Promise}
   */
  GetSupportedRates()
  {
    let rs = OcaMediaClock3_GetSupportedRates_rs;
    if (!rs) rs = OcaMediaClock3_GetSupportedRates_rs = new signature(MAP(UINT32, LIST(OcaMediaClockRate)));
    const cmd = new CommandRrq(this.ono, 3, 7, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Event that is triggered when the value of Availability changes.
   * @type {PropertyEvent}
   */
  get OnAvailabilityChanged()
  {
    const event = this._AvailabilityChanged;

    if (event) return event;

    return this._AvailabilityChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 1), new signature(OcaMediaClockAvailability));
  }

  /**
   * Event that is triggered when the value of TimeSourceONo changes.
   * @type {PropertyEvent}
   */
  get OnTimeSourceONoChanged()
  {
    const event = this._TimeSourceONoChanged;

    if (event) return event;

    return this._TimeSourceONoChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 2), new signature(UINT32));
  }

  /**
   * Event that is triggered when the value of Offset changes.
   * @type {PropertyEvent}
   */
  get OnOffsetChanged()
  {
    const event = this._OffsetChanged;

    if (event) return event;

    return this._OffsetChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 3), new signature(UINT64));
  }

  /**
   * Event that is triggered when the value of CurrentRate changes.
   * @type {PropertyEvent}
   */
  get OnCurrentRateChanged()
  {
    const event = this._CurrentRateChanged;

    if (event) return event;

    return this._CurrentRateChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 4), new signature(OcaMediaClockRate));
  }

  static get_properties()
  {
    if (!OcaMediaClock3_p)
    {
      OcaMediaClock3_p = new Properties([
          new Property("Availability", new signature(OcaMediaClockAvailability), 3, 1, false, false, null),
          new Property("TimeSourceONo", new signature(UINT32), 3, 2, false, false, null),
          new Property("Offset", new signature(UINT64), 3, 3, false, false, null),
          new Property("CurrentRate", new signature(OcaMediaClockRate), 3, 4, false, false, null),
        ], 3, OcaAgent.get_properties());
    }

    return OcaMediaClock3_p;
  }

  static GetPropertySync()
  {
    let sync = OcaMediaClock3_sync;
    if (!sync)
    {
      OcaMediaClock3_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._AvailabilityChanged) event.Dispose();
    if (event = this._TimeSourceONoChanged) event.Dispose();
    if (event = this._OffsetChanged) event.Dispose();
    if (event = this._CurrentRateChanged) event.Dispose();
  }
}


let OcaTimeSource_GetAvailability_rs = null;
let OcaTimeSource_GetProtocol_rs = null;
let OcaTimeSource_SetProtocol_as = null;
let OcaTimeSource_GetParameters_rs = null;
let OcaTimeSource_SetParameters_as = null;
let OcaTimeSource_GetReferenceType_rs = null;
let OcaTimeSource_SetReferenceType_as = null;
let OcaTimeSource_GetReferenceID_rs = null;
let OcaTimeSource_SetReferenceID_as = null;
let OcaTimeSource_GetSyncStatus_rs = null;
let OcaTimeSource_p = null;

let OcaTimeSource_sync = null;

/**
 * A time source, internal or external. See RFC 7273 for a detailed
 * discussion of time sources.
 * @extends OcaAgent
 */
export class OcaTimeSource extends OcaAgent
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._AvailabilityChanged = null;
    this._ProtocolChanged = null;
    this._ParametersChanged = null;
    this._ReferenceTypeChanged = null;
    this._ReferenceIDChanged = null;
    this._SyncStatusChanged = null;
  }

  /**
   * This property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0002\u0010";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 1;
  }


  /**
   * Gets the value of the <b>Availability </b>property. The return value
   * indicates whether the value was successfully retrieved.
   * @retval {Promise}
   */
  GetAvailability()
  {
    let rs = OcaTimeSource_GetAvailability_rs;
    if (!rs) rs = OcaTimeSource_GetAvailability_rs = new signature(OcaTimeSourceAvailability);
    const cmd = new CommandRrq(this.ono, 3, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the value of the <b>Protocol </b>property. The return value
   * indicates whether the value was successfully retrieved.
   * @retval {Promise}
   */
  GetProtocol()
  {
    let rs = OcaTimeSource_GetProtocol_rs;
    if (!rs) rs = OcaTimeSource_GetProtocol_rs = new signature(OcaTimeProtocol);
    const cmd = new CommandRrq(this.ono, 3, 2, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the <b>Protocol </b>property. The return value
   * indicates whether the value was successfully set.
   * @param Protocol {OcaTimeProtocol}
   *
   * @retval {Promise}
   */
  SetProtocol(Protocol)
  {
    let as = OcaTimeSource_SetProtocol_as;
    if (!as) as = OcaTimeSource_SetProtocol_as = new signature(OcaTimeProtocol);
    const cmd = new CommandRrq(this.ono, 3, 3, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the value of the <b>Parameters </b>property. The return value
   * indicates whether the value was successfully retrieved.
   * @retval {Promise}
   */
  GetParameters()
  {
    let rs = OcaTimeSource_GetParameters_rs;
    if (!rs) rs = OcaTimeSource_GetParameters_rs = new signature(STRING);
    const cmd = new CommandRrq(this.ono, 3, 4, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the <b>Parameters </b>property. The return value
   * indicates whether the value was successfully set. Optional method, may
   * not be supported in all implementations.
   * @param Parameters {OcaSDPString}
   *
   * @retval {Promise}
   */
  SetParameters(Parameters)
  {
    let as = OcaTimeSource_SetParameters_as;
    if (!as) as = OcaTimeSource_SetParameters_as = new signature(STRING);
    const cmd = new CommandRrq(this.ono, 3, 5, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the time reference type. The return value indicates whether the
   * value was successfully retrieved.
   * @retval {Promise}
   */
  GetReferenceType()
  {
    let rs = OcaTimeSource_GetReferenceType_rs;
    if (!rs) rs = OcaTimeSource_GetReferenceType_rs = new signature(OcaTimeReferenceType);
    const cmd = new CommandRrq(this.ono, 3, 6, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the time reference type. The return value indicates whether the
   * value was successfully set. Optional method, may not be supported in
   * all implementations.
   * @param ReferenceType {OcaTimeReferenceType}
   *
   * @retval {Promise}
   */
  SetReferenceType(ReferenceType)
  {
    let as = OcaTimeSource_SetReferenceType_as;
    if (!as) as = OcaTimeSource_SetReferenceType_as = new signature(OcaTimeReferenceType);
    const cmd = new CommandRrq(this.ono, 3, 7, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the timing source ID. The return value indicates whether the
   * value was successfully retrieved. Optional method, not required for
   * all time reference types.
   * @retval {Promise}
   */
  GetReferenceID()
  {
    let rs = OcaTimeSource_GetReferenceID_rs;
    if (!rs) rs = OcaTimeSource_GetReferenceID_rs = new signature(STRING);
    const cmd = new CommandRrq(this.ono, 3, 8, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the time reference ID. The return value indicates whether the ID
   * was successfully set. Optional method, not required for all time
   * reference types.
   * @param ID {OcaString}
   *
   * @retval {Promise}
   */
  SetReferenceID(ID)
  {
    let as = OcaTimeSource_SetReferenceID_as;
    if (!as) as = OcaTimeSource_SetReferenceID_as = new signature(STRING);
    const cmd = new CommandRrq(this.ono, 3, 9, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the synchronization status of this time source. The return value
   * indicates whether the value was successfully retrieved.
   * @retval {Promise}
   */
  GetSyncStatus()
  {
    let rs = OcaTimeSource_GetSyncStatus_rs;
    if (!rs) rs = OcaTimeSource_GetSyncStatus_rs = new signature(OcaTimeSourceSyncStatus);
    const cmd = new CommandRrq(this.ono, 3, 10, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Resets this time source. Changes Availability to Unavailable, then
   * initiates a new synchronization sequence. The return value indicates
   * whether the reset was successful.
   * @retval {Promise}
   */
  Reset()
  {
    const cmd = new CommandRrq(this.ono, 3, 11, 0);
    return this.device.send_command(cmd);
  }

  /**
   * Event that is triggered when the value of Availability changes.
   * @type {PropertyEvent}
   */
  get OnAvailabilityChanged()
  {
    const event = this._AvailabilityChanged;

    if (event) return event;

    return this._AvailabilityChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 1), new signature(OcaTimeSourceAvailability));
  }

  /**
   * Event that is triggered when the value of Protocol changes.
   * @type {PropertyEvent}
   */
  get OnProtocolChanged()
  {
    const event = this._ProtocolChanged;

    if (event) return event;

    return this._ProtocolChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 2), new signature(OcaTimeProtocol));
  }

  /**
   * Event that is triggered when the value of Parameters changes.
   * @type {PropertyEvent}
   */
  get OnParametersChanged()
  {
    const event = this._ParametersChanged;

    if (event) return event;

    return this._ParametersChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 3), new signature(STRING));
  }

  /**
   * Event that is triggered when the value of ReferenceType changes.
   * @type {PropertyEvent}
   */
  get OnReferenceTypeChanged()
  {
    const event = this._ReferenceTypeChanged;

    if (event) return event;

    return this._ReferenceTypeChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 4), new signature(OcaTimeReferenceType));
  }

  /**
   * Event that is triggered when the value of ReferenceID changes.
   * @type {PropertyEvent}
   */
  get OnReferenceIDChanged()
  {
    const event = this._ReferenceIDChanged;

    if (event) return event;

    return this._ReferenceIDChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 5), new signature(STRING));
  }

  /**
   * Event that is triggered when the value of SyncStatus changes.
   * @type {PropertyEvent}
   */
  get OnSyncStatusChanged()
  {
    const event = this._SyncStatusChanged;

    if (event) return event;

    return this._SyncStatusChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 6), new signature(OcaTimeSourceSyncStatus));
  }

  static get_properties()
  {
    if (!OcaTimeSource_p)
    {
      OcaTimeSource_p = new Properties([
          new Property("Availability", new signature(OcaTimeSourceAvailability), 3, 1, false, false, null),
          new Property("Protocol", new signature(OcaTimeProtocol), 3, 2, false, false, null),
          new Property("Parameters", new signature(STRING), 3, 3, false, false, null),
          new Property("ReferenceType", new signature(OcaTimeReferenceType), 3, 4, false, false, null),
          new Property("ReferenceID", new signature(STRING), 3, 5, false, false, null),
          new Property("SyncStatus", new signature(OcaTimeSourceSyncStatus), 3, 6, false, false, null),
        ], 3, OcaAgent.get_properties());
    }

    return OcaTimeSource_p;
  }

  static GetPropertySync()
  {
    let sync = OcaTimeSource_sync;
    if (!sync)
    {
      OcaTimeSource_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._AvailabilityChanged) event.Dispose();
    if (event = this._ProtocolChanged) event.Dispose();
    if (event = this._ParametersChanged) event.Dispose();
    if (event = this._ReferenceTypeChanged) event.Dispose();
    if (event = this._ReferenceIDChanged) event.Dispose();
    if (event = this._SyncStatusChanged) event.Dispose();
  }
}


let OcaPhysicalPosition_GetPositionAndRotation_rs = null;
let OcaPhysicalPosition_SetPositionAndRotation_as = null;
let OcaPhysicalPosition_GetPositionAndRotationFlags_rs = null;
let OcaPhysicalPosition_SetPositionAndRotationFlags_as = null;
let OcaPhysicalPosition_p = null;

let OcaPhysicalPosition_sync = null;

/**
 * Physical position of device or an element of it. Three position
 * coordinates, three rotation coordinates.
 * @extends OcaAgent
 */
export class OcaPhysicalPosition extends OcaAgent
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._PositionAndRotationChanged = null;
    this._PositionAndRotationFlagsChanged = null;
  }

  /**
   * This property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0002\u0011";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 1;
  }


  /**
   * Retrieves value of property <b>PositionAndRotation</b>. Result
   * indicates whether retrieval was successful.
   * @retval {Promise}
   */
  GetPositionAndRotation()
  {
    let rs = OcaPhysicalPosition_GetPositionAndRotation_rs;
    if (!rs) rs = OcaPhysicalPosition_GetPositionAndRotation_rs = new signature(FLOAT32, FLOAT32, FLOAT32);
    const cmd = new CommandRrq(this.ono, 3, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets value of property <b>PositionAndRotation</b>. Result indicates
   * whether setting was successful. This is an optional method, not
   * implemented for read-only position objects.
   * @param PositionAndRotation {OcaPositionAndRotation}
   *
   * @retval {Promise}
   */
  SetPositionAndRotation(PositionAndRotation)
  {
    let as = OcaPhysicalPosition_SetPositionAndRotation_as;
    if (!as) as = OcaPhysicalPosition_SetPositionAndRotation_as = new signature(FLOAT32);
    const cmd = new CommandRrq(this.ono, 3, 2, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Retrieves value of property <b>PositionAndRotationFlags</b>. Result
   * indicates whether retrieval was successful.
   * @retval {Promise}
   */
  GetPositionAndRotationFlags()
  {
    let rs = OcaPhysicalPosition_GetPositionAndRotationFlags_rs;
    if (!rs) rs = OcaPhysicalPosition_GetPositionAndRotationFlags_rs = new signature(OcaPositionAndRotationFlags);
    const cmd = new CommandRrq(this.ono, 3, 3, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets value of property <b>PositionAndRotationFlags</b>. Result
   * indicates whether setting was successful. This is an optional method,
   * only implemented for configurable position objects.
   * @param Flags {OcaPositionAndRotationFlags}
   *
   * @retval {Promise}
   */
  SetPositionAndRotationFlags(Flags)
  {
    let as = OcaPhysicalPosition_SetPositionAndRotationFlags_as;
    if (!as) as = OcaPhysicalPosition_SetPositionAndRotationFlags_as = new signature(OcaPositionAndRotationFlags);
    const cmd = new CommandRrq(this.ono, 3, 4, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Event that is triggered when the value of PositionAndRotation changes.
   * @type {PropertyEvent}
   */
  get OnPositionAndRotationChanged()
  {
    const event = this._PositionAndRotationChanged;

    if (event) return event;

    return this._PositionAndRotationChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 1), new signature(FLOAT32));
  }

  /**
   * Event that is triggered when the value of PositionAndRotationFlags changes.
   * @type {PropertyEvent}
   */
  get OnPositionAndRotationFlagsChanged()
  {
    const event = this._PositionAndRotationFlagsChanged;

    if (event) return event;

    return this._PositionAndRotationFlagsChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 2), new signature(OcaPositionAndRotationFlags));
  }

  static get_properties()
  {
    if (!OcaPhysicalPosition_p)
    {
      OcaPhysicalPosition_p = new Properties([
          new Property("PositionAndRotation", new signature(FLOAT32), 3, 1, false, false, null),
          new Property("PositionAndRotationFlags", new signature(OcaPositionAndRotationFlags), 3, 2, false, false, null),
        ], 3, OcaAgent.get_properties());
    }

    return OcaPhysicalPosition_p;
  }

  static GetPropertySync()
  {
    let sync = OcaPhysicalPosition_sync;
    if (!sync)
    {
      OcaPhysicalPosition_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._PositionAndRotationChanged) event.Dispose();
    if (event = this._PositionAndRotationFlagsChanged) event.Dispose();
  }
}


let OcaApplicationNetwork_GetLabel_rs = null;
let OcaApplicationNetwork_SetLabel_as = null;
let OcaApplicationNetwork_GetOwner_rs = null;
let OcaApplicationNetwork_GetServiceID_rs = null;
let OcaApplicationNetwork_SetServiceID_as = null;
let OcaApplicationNetwork_GetSystemInterfaces_rs = null;
let OcaApplicationNetwork_GetState_rs = null;
let OcaApplicationNetwork_GetErrorCode_rs = null;
let OcaApplicationNetwork_Control_as = null;
let OcaApplicationNetwork_GetPath_rs = null;
let OcaApplicationNetwork_p = null;

let OcaApplicationNetwork_sync = null;

/**
 * Abstract base class from which the application network classes
 * inherit.
 * @extends OcaRoot
 */
export class OcaApplicationNetwork extends OcaRoot
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._LabelChanged = null;
    this._OwnerChanged = null;
    this._ServiceIDChanged = null;
    this._SystemInterfacesChanged = null;
    this._StateChanged = null;
    this._ErrorCodeChanged = null;
  }

  /**
   * This property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0004";
  }

  /**
   * This property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 1;
  }


  /**
   * Gets the network's user-specified label. Return status indicates
   * whether the operation was successful.
   * @retval {Promise}
   */
  GetLabel()
  {
    let rs = OcaApplicationNetwork_GetLabel_rs;
    if (!rs) rs = OcaApplicationNetwork_GetLabel_rs = new signature(STRING);
    const cmd = new CommandRrq(this.ono, 2, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the network's user-specified label. Return status indicates
   * whether the operation was successful.
   * @param Label {OcaString}
   *
   * @retval {Promise}
   */
  SetLabel(Label)
  {
    let as = OcaApplicationNetwork_SetLabel_as;
    if (!as) as = OcaApplicationNetwork_SetLabel_as = new signature(STRING);
    const cmd = new CommandRrq(this.ono, 2, 2, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the ONo of this network's containing block. Return status
   * indicates whether the operation was successful.
   * @retval {Promise}
   */
  GetOwner()
  {
    let rs = OcaApplicationNetwork_GetOwner_rs;
    if (!rs) rs = OcaApplicationNetwork_GetOwner_rs = new signature(UINT32);
    const cmd = new CommandRrq(this.ono, 2, 3, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the network's IDAdvertised. Return status indicates whether the
   * operation was successful.
   * @retval {Promise}
   */
  GetServiceID()
  {
    let rs = OcaApplicationNetwork_GetServiceID_rs;
    if (!rs) rs = OcaApplicationNetwork_GetServiceID_rs = new signature(BLOB);
    const cmd = new CommandRrq(this.ono, 2, 4, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the network's IDAdvertised. Return status indicates whether the
   * operation was successful.
   * @param Name {OcaApplicationNetworkServiceID}
   *
   * @retval {Promise}
   */
  SetServiceID(Name)
  {
    let as = OcaApplicationNetwork_SetServiceID_as;
    if (!as) as = OcaApplicationNetwork_SetServiceID_as = new signature(BLOB);
    const cmd = new CommandRrq(this.ono, 2, 5, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Retrieves the list of this network's system interface descriptor.
   * Return status indicates whether the list was successfully retrieved.
   * @retval {Promise}
   */
  GetSystemInterfaces()
  {
    let rs = OcaApplicationNetwork_GetSystemInterfaces_rs;
    if (!rs) rs = OcaApplicationNetwork_GetSystemInterfaces_rs = new signature(LIST(OcaNetworkSystemInterfaceDescriptor));
    const cmd = new CommandRrq(this.ono, 2, 6, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Retrieves the network's state. Return status indicates whether the
   * status was successfully retrieved.
   * @retval {Promise}
   */
  GetState()
  {
    let rs = OcaApplicationNetwork_GetState_rs;
    if (!rs) rs = OcaApplicationNetwork_GetState_rs = new signature(OcaApplicationNetworkState);
    const cmd = new CommandRrq(this.ono, 2, 7, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Retrieves the most recent error code. Return status indicates whether
   * the operation was successful. Note that a second parameter 'Reset'
   * isremoved in v02 of this class.
   * @retval {Promise}
   */
  GetErrorCode()
  {
    let rs = OcaApplicationNetwork_GetErrorCode_rs;
    if (!rs) rs = OcaApplicationNetwork_GetErrorCode_rs = new signature(UINT16);
    const cmd = new CommandRrq(this.ono, 2, 8, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Control the application network. Return value indicates success of
   * command execution.
   * @param Command {OcaApplicationNetworkCommand}
   *
   * @retval {Promise}
   */
  Control(Command)
  {
    let as = OcaApplicationNetwork_Control_as;
    if (!as) as = OcaApplicationNetwork_Control_as = new signature(OcaApplicationNetworkCommand);
    const cmd = new CommandRrq(this.ono, 2, 9, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Returns path from given object down to root. The return value
   * indicates whether the operation succeeded.
   * @retval {Promise}
   */
  GetPath()
  {
    let rs = OcaApplicationNetwork_GetPath_rs;
    if (!rs) rs = OcaApplicationNetwork_GetPath_rs = new signature(LIST(STRING), LIST(UINT32));
    const cmd = new CommandRrq(this.ono, 2, 10, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Event that is triggered when the value of Label changes.
   * @type {PropertyEvent}
   */
  get OnLabelChanged()
  {
    const event = this._LabelChanged;

    if (event) return event;

    return this._LabelChanged =
      new PropertyEvent(this, new OcaPropertyID(2, 1), new signature(STRING));
  }

  /**
   * Event that is triggered when the value of Owner changes.
   * @type {PropertyEvent}
   */
  get OnOwnerChanged()
  {
    const event = this._OwnerChanged;

    if (event) return event;

    return this._OwnerChanged =
      new PropertyEvent(this, new OcaPropertyID(2, 2), new signature(UINT32));
  }

  /**
   * Event that is triggered when the value of ServiceID changes.
   * @type {PropertyEvent}
   */
  get OnServiceIDChanged()
  {
    const event = this._ServiceIDChanged;

    if (event) return event;

    return this._ServiceIDChanged =
      new PropertyEvent(this, new OcaPropertyID(2, 3), new signature(BLOB));
  }

  /**
   * Event that is triggered when the value of SystemInterfaces changes.
   * @type {PropertyEvent}
   */
  get OnSystemInterfacesChanged()
  {
    const event = this._SystemInterfacesChanged;

    if (event) return event;

    return this._SystemInterfacesChanged =
      new PropertyEvent(this, new OcaPropertyID(2, 4), new signature(LIST(OcaNetworkSystemInterfaceDescriptor)));
  }

  /**
   * Event that is triggered when the value of State changes.
   * @type {PropertyEvent}
   */
  get OnStateChanged()
  {
    const event = this._StateChanged;

    if (event) return event;

    return this._StateChanged =
      new PropertyEvent(this, new OcaPropertyID(2, 5), new signature(OcaApplicationNetworkState));
  }

  /**
   * Event that is triggered when the value of ErrorCode changes.
   * @type {PropertyEvent}
   */
  get OnErrorCodeChanged()
  {
    const event = this._ErrorCodeChanged;

    if (event) return event;

    return this._ErrorCodeChanged =
      new PropertyEvent(this, new OcaPropertyID(2, 6), new signature(UINT16));
  }

  static get_properties()
  {
    if (!OcaApplicationNetwork_p)
    {
      OcaApplicationNetwork_p = new Properties([
          new Property("Label", new signature(STRING), 2, 1, false, true, null),
          new Property("Owner", new signature(UINT32), 2, 2, false, true, null),
          new Property("ServiceID", new signature(BLOB), 2, 3, false, false, null),
          new Property("SystemInterfaces", new signature(LIST(OcaNetworkSystemInterfaceDescriptor)), 2, 4, false, false, null),
          new Property("State", new signature(OcaApplicationNetworkState), 2, 5, false, false, null),
          new Property("ErrorCode", new signature(UINT16), 2, 6, false, false, null),
        ], 2, OcaRoot.get_properties());
    }

    return OcaApplicationNetwork_p;
  }

  static GetPropertySync()
  {
    let sync = OcaApplicationNetwork_sync;
    if (!sync)
    {
      OcaApplicationNetwork_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._LabelChanged) event.Dispose();
    if (event = this._OwnerChanged) event.Dispose();
    if (event = this._ServiceIDChanged) event.Dispose();
    if (event = this._SystemInterfacesChanged) event.Dispose();
    if (event = this._StateChanged) event.Dispose();
    if (event = this._ErrorCodeChanged) event.Dispose();
  }
}


let OcaControlNetwork_GetControlProtocol_rs = null;
let OcaControlNetwork_p = null;

let OcaControlNetwork_sync = null;

/**
 * This was not documented in the OCA standard.
 */
export class OcaControlNetwork extends OcaApplicationNetwork
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._ProtocolChanged = null;
  }

  /**
   * This property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0004\u0001";
  }

  /**
   * This property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 1;
  }


  /**
   * Gets the network's Protocol property. Return status indicates whether
   * the operation was successful.
   * @retval {Promise}
   */
  GetControlProtocol()
  {
    let rs = OcaControlNetwork_GetControlProtocol_rs;
    if (!rs) rs = OcaControlNetwork_GetControlProtocol_rs = new signature(OcaNetworkControlProtocol);
    const cmd = new CommandRrq(this.ono, 3, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Event that is triggered when the value of Protocol changes.
   * @type {PropertyEvent}
   */
  get OnProtocolChanged()
  {
    const event = this._ProtocolChanged;

    if (event) return event;

    return this._ProtocolChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 1), new signature(OcaNetworkControlProtocol));
  }

  static get_properties()
  {
    if (!OcaControlNetwork_p)
    {
      OcaControlNetwork_p = new Properties([
          new Property("Protocol", new signature(OcaNetworkControlProtocol), 3, 1, false, false, ["ControlProtocol"]),
        ], 3, OcaApplicationNetwork.get_properties());
    }

    return OcaControlNetwork_p;
  }

  static GetPropertySync()
  {
    let sync = OcaControlNetwork_sync;
    if (!sync)
    {
      OcaControlNetwork_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._ProtocolChanged) event.Dispose();
  }
}


let OcaMediaTransportNetwork_GetMediaProtocol_rs = null;
let OcaMediaTransportNetwork_GetPorts_rs = null;
let OcaMediaTransportNetwork_GetPortName_as = null;
let OcaMediaTransportNetwork_GetPortName_rs = null;
let OcaMediaTransportNetwork_SetPortName_as = null;
let OcaMediaTransportNetwork_GetMaxSourceConnectors_rs = null;
let OcaMediaTransportNetwork_GetMaxSinkConnectors_rs = null;
let OcaMediaTransportNetwork_GetMaxPinsPerConnector_rs = null;
let OcaMediaTransportNetwork_GetMaxPortsPerPin_rs = null;
let OcaMediaTransportNetwork_GetSourceConnectors_rs = null;
let OcaMediaTransportNetwork_GetSourceConnector_as = null;
let OcaMediaTransportNetwork_GetSourceConnector_rs = null;
let OcaMediaTransportNetwork_GetSinkConnectors_rs = null;
let OcaMediaTransportNetwork_GetSinkConnector_as = null;
let OcaMediaTransportNetwork_GetSinkConnector_rs = null;
let OcaMediaTransportNetwork_GetConnectorsStatuses_rs = null;
let OcaMediaTransportNetwork_GetConnectorStatus_as = null;
let OcaMediaTransportNetwork_GetConnectorStatus_rs = null;
let OcaMediaTransportNetwork_AddSourceConnector_as = null;
let OcaMediaTransportNetwork_AddSourceConnector_rs = null;
let OcaMediaTransportNetwork_AddSinkConnector_as = null;
let OcaMediaTransportNetwork_AddSinkConnector_rs = null;
let OcaMediaTransportNetwork_ControlConnector_as = null;
let OcaMediaTransportNetwork_SetSourceConnectorPinMap_as = null;
let OcaMediaTransportNetwork_SetSinkConnectorPinMap_as = null;
let OcaMediaTransportNetwork_SetConnectorConnection_as = null;
let OcaMediaTransportNetwork_SetConnectorCoding_as = null;
let OcaMediaTransportNetwork_DeleteConnector_as = null;
let OcaMediaTransportNetwork_GetAlignmentLevel_rs = null;
let OcaMediaTransportNetwork_GetAlignmentGain_rs = null;
let OcaMediaTransportNetwork_p = null;

let OcaMediaTransportNetwork_sync = null;

/**
 * This was not documented in the OCA standard.
 */
export class OcaMediaTransportNetwork extends OcaApplicationNetwork
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._SourceConnectorChanged = null;
    this._SinkConnectorChanged = null;
    this._ConnectorStatusChanged = null;
    this._ProtocolChanged = null;
    this._PortsChanged = null;
    this._MaxSourceConnectorsChanged = null;
    this._MaxSinkConnectorsChanged = null;
    this._MaxPinsPerConnectorChanged = null;
    this._MaxPortsPerPinChanged = null;
    this._AlignmentLevelChanged = null;
    this._AlignmentGainChanged = null;
    this._SinkConnectorsChanged = null;
    this._SourceConnectorsChanged = null;
  }

  /**
   * This property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0004\u0002";
  }

  /**
   * This property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 1;
  }


  /**
   * Gets the network's Protocol property. Return status indicates whether
   * the operation was successful.
   * @retval {Promise}
   */
  GetMediaProtocol()
  {
    let rs = OcaMediaTransportNetwork_GetMediaProtocol_rs;
    if (!rs) rs = OcaMediaTransportNetwork_GetMediaProtocol_rs = new signature(OcaNetworkMediaProtocol);
    const cmd = new CommandRrq(this.ono, 3, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the list of ports owned by the MediaTransportNetwork object
   * (representing the source and sink network channels). The return value
   * indicates whether the list was successfully retrieved.
   * @retval {Promise}
   */
  GetPorts()
  {
    let rs = OcaMediaTransportNetwork_GetPorts_rs;
    if (!rs) rs = OcaMediaTransportNetwork_GetPorts_rs = new signature(LIST(OcaPort));
    const cmd = new CommandRrq(this.ono, 3, 2, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the name of the designated port. The return value indicates
   * whether the name was successfully retrieved.
   * @param PortID {OcaPortID}
   *
   * @retval {Promise}
   */
  GetPortName(PortID)
  {
    let as = OcaMediaTransportNetwork_GetPortName_as;
    if (!as) as = OcaMediaTransportNetwork_GetPortName_as = new signature(OcaPortID);
    let rs = OcaMediaTransportNetwork_GetPortName_rs;
    if (!rs) rs = OcaMediaTransportNetwork_GetPortName_rs = new signature(STRING);
    const cmd = new CommandRrq(this.ono, 3, 3, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the name of the designated port. The return value indicates
   * whether the name was successfully set.
   * @param PortID {OcaPortID}
   *
   * @param Name {OcaString}
   *
   * @retval {Promise}
   */
  SetPortName(PortID, Name)
  {
    let as = OcaMediaTransportNetwork_SetPortName_as;
    if (!as) as = OcaMediaTransportNetwork_SetPortName_as = new signature(OcaPortID, STRING);
    const cmd = new CommandRrq(this.ono, 3, 4, 2,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the maximum number of source connectors this media transport
   * network supports.
   * @retval {Promise}
   */
  GetMaxSourceConnectors()
  {
    let rs = OcaMediaTransportNetwork_GetMaxSourceConnectors_rs;
    if (!rs) rs = OcaMediaTransportNetwork_GetMaxSourceConnectors_rs = new signature(UINT16);
    const cmd = new CommandRrq(this.ono, 3, 5, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the maximum number of source connectors this media transport
   * network supports.
   * @retval {Promise}
   */
  GetMaxSinkConnectors()
  {
    let rs = OcaMediaTransportNetwork_GetMaxSinkConnectors_rs;
    if (!rs) rs = OcaMediaTransportNetwork_GetMaxSinkConnectors_rs = new signature(UINT16);
    const cmd = new CommandRrq(this.ono, 3, 6, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the maximum number of ports per pin this media transport network
   * supports.
   * @retval {Promise}
   */
  GetMaxPinsPerConnector()
  {
    let rs = OcaMediaTransportNetwork_GetMaxPinsPerConnector_rs;
    if (!rs) rs = OcaMediaTransportNetwork_GetMaxPinsPerConnector_rs = new signature(UINT16);
    const cmd = new CommandRrq(this.ono, 3, 7, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the maximum number of pins (channels) per connector this media
   * transport network supports.
   * @retval {Promise}
   */
  GetMaxPortsPerPin()
  {
    let rs = OcaMediaTransportNetwork_GetMaxPortsPerPin_rs;
    if (!rs) rs = OcaMediaTransportNetwork_GetMaxPortsPerPin_rs = new signature(UINT16);
    const cmd = new CommandRrq(this.ono, 3, 8, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the descriptors of all the source (output) connectors collected
   * by this network object. Return status indicates success of the
   * operation.
   * @retval {Promise}
   */
  GetSourceConnectors()
  {
    let rs = OcaMediaTransportNetwork_GetSourceConnectors_rs;
    if (!rs) rs = OcaMediaTransportNetwork_GetSourceConnectors_rs = new signature(LIST(OcaMediaSourceConnector));
    const cmd = new CommandRrq(this.ono, 3, 9, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Retrieves the descriptor of a given source connector. Return status
   * indicates the success of the operation.
   * @param ID {OcaMediaConnectorID}
   *
   * @retval {Promise}
   */
  GetSourceConnector(ID)
  {
    let as = OcaMediaTransportNetwork_GetSourceConnector_as;
    if (!as) as = OcaMediaTransportNetwork_GetSourceConnector_as = new signature(UINT16);
    let rs = OcaMediaTransportNetwork_GetSourceConnector_rs;
    if (!rs) rs = OcaMediaTransportNetwork_GetSourceConnector_rs = new signature(OcaMediaSourceConnector);
    const cmd = new CommandRrq(this.ono, 3, 10, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the descriptors of all the sink (output) connectors collected by
   * this network object. Return status indicates success of the operation.
   * @retval {Promise}
   */
  GetSinkConnectors()
  {
    let rs = OcaMediaTransportNetwork_GetSinkConnectors_rs;
    if (!rs) rs = OcaMediaTransportNetwork_GetSinkConnectors_rs = new signature(LIST(OcaMediaSinkConnector));
    const cmd = new CommandRrq(this.ono, 3, 11, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Retrieves the descriptor of a given sink connector. Return status
   * indicates the success of the operation.
   * @param ID {OcaMediaConnectorID}
   *
   * @retval {Promise}
   */
  GetSinkConnector(ID)
  {
    let as = OcaMediaTransportNetwork_GetSinkConnector_as;
    if (!as) as = OcaMediaTransportNetwork_GetSinkConnector_as = new signature(UINT16);
    let rs = OcaMediaTransportNetwork_GetSinkConnector_rs;
    if (!rs) rs = OcaMediaTransportNetwork_GetSinkConnector_rs = new signature(OcaMediaSinkConnector);
    const cmd = new CommandRrq(this.ono, 3, 12, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the status of all the source and sink connectors collected by
   * this network object. Return status indicates success of the operation.
   * @retval {Promise}
   */
  GetConnectorsStatuses()
  {
    let rs = OcaMediaTransportNetwork_GetConnectorsStatuses_rs;
    if (!rs) rs = OcaMediaTransportNetwork_GetConnectorsStatuses_rs = new signature(LIST(OcaMediaConnectorStatus));
    const cmd = new CommandRrq(this.ono, 3, 13, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the status of a single connector. Return status indicates success
   * of the operation.
   * @param ConnectorID {OcaMediaConnectorID}
   *
   * @retval {Promise}
   */
  GetConnectorStatus(ConnectorID)
  {
    let as = OcaMediaTransportNetwork_GetConnectorStatus_as;
    if (!as) as = OcaMediaTransportNetwork_GetConnectorStatus_as = new signature(UINT16);
    let rs = OcaMediaTransportNetwork_GetConnectorStatus_rs;
    if (!rs) rs = OcaMediaTransportNetwork_GetConnectorStatus_rs = new signature(OcaMediaConnectorStatus);
    const cmd = new CommandRrq(this.ono, 3, 14, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd, rs);
  }

  /**
   * Adds a source connector to this network. Parameters of the new
   * connector are given in the Connector parameter; device returns the
   * same parameter with the new connector ID filled in. If the new
   * connector's AlignmentLevel property value is given as NaN, the value
   * of this network's AlignmentLevel property will be used. Return status
   * indicates the success of the operation.
   * @param Connector {OcaMediaSourceConnector}
   *
   * @param InitialStatus {OcaMediaConnectorState}
   *
   * @retval {Promise}
   */
  AddSourceConnector(Connector, InitialStatus)
  {
    let as = OcaMediaTransportNetwork_AddSourceConnector_as;
    if (!as) as = OcaMediaTransportNetwork_AddSourceConnector_as = new signature(OcaMediaSourceConnector, OcaMediaConnectorState);
    let rs = OcaMediaTransportNetwork_AddSourceConnector_rs;
    if (!rs) rs = OcaMediaTransportNetwork_AddSourceConnector_rs = new signature(OcaMediaSourceConnector);
    const cmd = new CommandRrq(this.ono, 3, 15, 2,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd, rs);
  }

  /**
   * Adds a sinkconnector to this network. Parameters of the new connector
   * are given in the Connector parameter; device returns the same
   * parameter with the new connector ID filled in. If the new connector's
   * AlignmentLevel property value is given as NaN, the value of this
   * network's AlignmentLevel property will be used. If the new connector's
   * AlignmentGain property value is given as NaN, the value of this
   * network's AlignmentGain property will be used. Return status indicates
   * the success of the operation.
   * @param InitialStatus {OcaMediaConnectorStatus}
   *
   * @param Connector {OcaMediaSinkConnector}
   *
   * @retval {Promise}
   */
  AddSinkConnector(InitialStatus, Connector)
  {
    let as = OcaMediaTransportNetwork_AddSinkConnector_as;
    if (!as) as = OcaMediaTransportNetwork_AddSinkConnector_as = new signature(OcaMediaConnectorStatus, OcaMediaSinkConnector);
    let rs = OcaMediaTransportNetwork_AddSinkConnector_rs;
    if (!rs) rs = OcaMediaTransportNetwork_AddSinkConnector_rs = new signature(OcaMediaSinkConnector);
    const cmd = new CommandRrq(this.ono, 3, 16, 2,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd, rs);
  }

  /**
   * Change the state of a given connector. Return status indicates the
   * success of the operation.
   * @param ConnectorID {OcaMediaConnectorID}
   *
   * @param Command {OcaMediaConnectorCommand}
   *
   * @retval {Promise}
   */
  ControlConnector(ConnectorID, Command)
  {
    let as = OcaMediaTransportNetwork_ControlConnector_as;
    if (!as) as = OcaMediaTransportNetwork_ControlConnector_as = new signature(UINT16, OcaMediaConnectorCommand);
    const cmd = new CommandRrq(this.ono, 3, 17, 2,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Sets a source connector's channel pin map. Return status indicates the
   * success of the operation.
   * @param ConnectorID {OcaMediaConnectorID}
   *
   * @param ChannelPinMap {OcaMap}
   *
   * @retval {Promise}
   */
  SetSourceConnectorPinMap(ConnectorID, ChannelPinMap)
  {
    let as = OcaMediaTransportNetwork_SetSourceConnectorPinMap_as;
    if (!as) as = OcaMediaTransportNetwork_SetSourceConnectorPinMap_as = new signature(UINT16, MAP(UINT16, OcaPortID));
    const cmd = new CommandRrq(this.ono, 3, 18, 2,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Sets a sink connector's channel pin map. Return status indicates the
   * success of the operation.
   * @param ConnectorID {OcaMediaConnectorID}
   *
   * @param ChannelPinMap {OcaMultiMap}
   *
   * @retval {Promise}
   */
  SetSinkConnectorPinMap(ConnectorID, ChannelPinMap)
  {
    let as = OcaMediaTransportNetwork_SetSinkConnectorPinMap_as;
    if (!as) as = OcaMediaTransportNetwork_SetSinkConnectorPinMap_as = new signature(UINT16, OcaMultiMap(UINT16, OcaPortID));
    const cmd = new CommandRrq(this.ono, 3, 19, 2,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Sets a connector's <b>Connection </b>property. Return status indicates
   * the success of the operation.
   * @param ConnectorID {OcaMediaConnectorID}
   *
   * @param Connection {OcaMediaConnection}
   *
   * @retval {Promise}
   */
  SetConnectorConnection(ConnectorID, Connection)
  {
    let as = OcaMediaTransportNetwork_SetConnectorConnection_as;
    if (!as) as = OcaMediaTransportNetwork_SetConnectorConnection_as = new signature(UINT16, OcaMediaConnection);
    const cmd = new CommandRrq(this.ono, 3, 20, 2,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Sets the Coding field of the connection descriptor of the referenced
   * connector. Return status indicates the success of the operation.
   * @param ConnectorID {OcaMediaConnectorID}
   *
   * @param Coding {OcaMediaCoding}
   *
   * @retval {Promise}
   */
  SetConnectorCoding(ConnectorID, Coding)
  {
    let as = OcaMediaTransportNetwork_SetConnectorCoding_as;
    if (!as) as = OcaMediaTransportNetwork_SetConnectorCoding_as = new signature(UINT16, OcaMediaCoding);
    const cmd = new CommandRrq(this.ono, 3, 21, 2,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Deletes a connector from this network. Return status indicates the
   * success of the operation.
   * @param ID {OcaMediaConnectorID}
   *
   * @retval {Promise}
   */
  DeleteConnector(ID)
  {
    let as = OcaMediaTransportNetwork_DeleteConnector_as;
    if (!as) as = OcaMediaTransportNetwork_DeleteConnector_as = new signature(UINT16);
    const cmd = new CommandRrq(this.ono, 3, 22, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the default, min, and max alignment levels for
   * OcaMedia{Source|Sink}Connectors attached to this network. Return
   * status indicates success of the operation.
   * @retval {Promise}
   */
  GetAlignmentLevel()
  {
    let rs = OcaMediaTransportNetwork_GetAlignmentLevel_rs;
    if (!rs) rs = OcaMediaTransportNetwork_GetAlignmentLevel_rs = new signature(FLOAT32, FLOAT32, FLOAT32);
    const cmd = new CommandRrq(this.ono, 3, 23, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the default, min, and max alignment gains for
   * OcaMediaSinkConnectors attached to this network. Return status
   * indicates success of the operation.
   * @retval {Promise}
   */
  GetAlignmentGain()
  {
    let rs = OcaMediaTransportNetwork_GetAlignmentGain_rs;
    if (!rs) rs = OcaMediaTransportNetwork_GetAlignmentGain_rs = new signature(FLOAT32, FLOAT32, FLOAT32);
    const cmd = new CommandRrq(this.ono, 3, 24, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Event indicating that a media source connector has changed. The change
   * type indicates if the connector was added, deleted or changed.
   */
  get OnSourceConnectorChanged()
  {
    const event = this._SourceConnectorChanged;

    if (event) return event;

    const s = new signature(OcaMediaSourceConnector, OcaPropertyChangeType, OcaMediaConnectorElement);

    return this._SourceConnectorChanged = new Event(this, new OcaEventID(3, 1), s);
  }

  /**
   * Event indicating that a media sink connector has changed. The change
   * type indicates if the connector was added, deleted or changed.
   */
  get OnSinkConnectorChanged()
  {
    const event = this._SinkConnectorChanged;

    if (event) return event;

    const s = new signature(OcaMediaSinkConnector, OcaPropertyChangeType, OcaMediaConnectorElement);

    return this._SinkConnectorChanged = new Event(this, new OcaEventID(3, 2), s);
  }

  /**
   * Event indicating that the status of a source or sink connector has
   * changed.
   */
  get OnConnectorStatusChanged()
  {
    const event = this._ConnectorStatusChanged;

    if (event) return event;

    const s = new signature(OcaMediaConnectorStatus);

    return this._ConnectorStatusChanged = new Event(this, new OcaEventID(3, 3), s);
  }

  /**
   * Event that is triggered when the value of Protocol changes.
   * @type {PropertyEvent}
   */
  get OnProtocolChanged()
  {
    const event = this._ProtocolChanged;

    if (event) return event;

    return this._ProtocolChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 1), new signature(OcaNetworkMediaProtocol));
  }

  /**
   * Event that is triggered when the value of Ports changes.
   * @type {PropertyEvent}
   */
  get OnPortsChanged()
  {
    const event = this._PortsChanged;

    if (event) return event;

    return this._PortsChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 2), new signature(LIST(OcaPort)));
  }

  /**
   * Event that is triggered when the value of MaxSourceConnectors changes.
   * @type {PropertyEvent}
   */
  get OnMaxSourceConnectorsChanged()
  {
    const event = this._MaxSourceConnectorsChanged;

    if (event) return event;

    return this._MaxSourceConnectorsChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 3), new signature(UINT16));
  }

  /**
   * Event that is triggered when the value of MaxSinkConnectors changes.
   * @type {PropertyEvent}
   */
  get OnMaxSinkConnectorsChanged()
  {
    const event = this._MaxSinkConnectorsChanged;

    if (event) return event;

    return this._MaxSinkConnectorsChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 4), new signature(UINT16));
  }

  /**
   * Event that is triggered when the value of MaxPinsPerConnector changes.
   * @type {PropertyEvent}
   */
  get OnMaxPinsPerConnectorChanged()
  {
    const event = this._MaxPinsPerConnectorChanged;

    if (event) return event;

    return this._MaxPinsPerConnectorChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 5), new signature(UINT16));
  }

  /**
   * Event that is triggered when the value of MaxPortsPerPin changes.
   * @type {PropertyEvent}
   */
  get OnMaxPortsPerPinChanged()
  {
    const event = this._MaxPortsPerPinChanged;

    if (event) return event;

    return this._MaxPortsPerPinChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 6), new signature(UINT16));
  }

  /**
   * Event that is triggered when the value of AlignmentLevel changes.
   * @type {PropertyEvent}
   */
  get OnAlignmentLevelChanged()
  {
    const event = this._AlignmentLevelChanged;

    if (event) return event;

    return this._AlignmentLevelChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 7), new signature(FLOAT32));
  }

  /**
   * Event that is triggered when the value of AlignmentGain changes.
   * @type {PropertyEvent}
   */
  get OnAlignmentGainChanged()
  {
    const event = this._AlignmentGainChanged;

    if (event) return event;

    return this._AlignmentGainChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 8), new signature(FLOAT32));
  }

  /**
   * Event that is triggered when the value of SinkConnectors changes.
   * @type {PropertyEvent}
   */
  get OnSinkConnectorsChanged()
  {
    const event = this._SinkConnectorsChanged;

    if (event) return event;

    return this._SinkConnectorsChanged =
      new PropertyEvent(this, new OcaPropertyID(0, 0), new signature(LIST(OcaMediaSinkConnector)));
  }

  /**
   * Event that is triggered when the value of SourceConnectors changes.
   * @type {PropertyEvent}
   */
  get OnSourceConnectorsChanged()
  {
    const event = this._SourceConnectorsChanged;

    if (event) return event;

    return this._SourceConnectorsChanged =
      new PropertyEvent(this, new OcaPropertyID(0, 0), new signature(LIST(OcaMediaSourceConnector)));
  }

  static get_properties()
  {
    if (!OcaMediaTransportNetwork_p)
    {
      OcaMediaTransportNetwork_p = new Properties([
          new Property("Protocol", new signature(OcaNetworkMediaProtocol), 3, 1, false, false, ["MediaProtocol"]),
          new Property("Ports", new signature(LIST(OcaPort)), 3, 2, false, false, null),
          new Property("MaxSourceConnectors", new signature(UINT16), 3, 3, false, false, null),
          new Property("MaxSinkConnectors", new signature(UINT16), 3, 4, false, false, null),
          new Property("MaxPinsPerConnector", new signature(UINT16), 3, 5, false, false, null),
          new Property("MaxPortsPerPin", new signature(UINT16), 3, 6, false, false, null),
          new Property("AlignmentLevel", new signature(FLOAT32), 3, 7, false, false, null),
          new Property("AlignmentGain", new signature(FLOAT32), 3, 8, false, false, null),
        ], 3, OcaApplicationNetwork.get_properties());
    }

    return OcaMediaTransportNetwork_p;
  }

  static GetPropertySync()
  {
    let sync = OcaMediaTransportNetwork_sync;
    if (!sync)
    {
      OcaMediaTransportNetwork_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._SourceConnectorChanged) event.Dispose();
    if (event = this._SinkConnectorChanged) event.Dispose();
    if (event = this._ConnectorStatusChanged) event.Dispose();
    if (event = this._ProtocolChanged) event.Dispose();
    if (event = this._PortsChanged) event.Dispose();
    if (event = this._MaxSourceConnectorsChanged) event.Dispose();
    if (event = this._MaxSinkConnectorsChanged) event.Dispose();
    if (event = this._MaxPinsPerConnectorChanged) event.Dispose();
    if (event = this._MaxPortsPerPinChanged) event.Dispose();
    if (event = this._AlignmentLevelChanged) event.Dispose();
    if (event = this._AlignmentGainChanged) event.Dispose();
    if (event = this._SinkConnectorsChanged) event.Dispose();
    if (event = this._SourceConnectorsChanged) event.Dispose();
  }
}


let OcaManager_p = null;

let OcaManager_sync = null;

/**
 * Abstract base class for classes that represent non-audio (i.e. control
 * and monitoring) functions. All concrete manager objects are lockable
 * (the constructor of this class initializes the Root object with
 * property Lockable true).
 * @extends OcaRoot
 */
export class OcaManager extends OcaRoot
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0003";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  static get_properties()
  {
    if (!OcaManager_p)
    {
      OcaManager_p = new Properties([
        ], 2, OcaRoot.get_properties());
    }

    return OcaManager_p;
  }

  static GetPropertySync()
  {
    let sync = OcaManager_sync;
    if (!sync)
    {
      OcaManager_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
  }
}


let OcaDeviceManager_GetOcaVersion_rs = null;
let OcaDeviceManager_GetModelGUID_rs = null;
let OcaDeviceManager_GetSerialNumber_rs = null;
let OcaDeviceManager_GetDeviceName_rs = null;
let OcaDeviceManager_SetDeviceName_as = null;
let OcaDeviceManager_GetModelDescription_rs = null;
let OcaDeviceManager_GetDeviceRole_rs = null;
let OcaDeviceManager_SetRole_as = null;
let OcaDeviceManager_GetUserInventoryCode_rs = null;
let OcaDeviceManager_SetUserInventoryCode_as = null;
let OcaDeviceManager_GetEnabled_rs = null;
let OcaDeviceManager_SetEnabled_as = null;
let OcaDeviceManager_GetState_rs = null;
let OcaDeviceManager_SetResetKey_as = null;
let OcaDeviceManager_GetResetCause_rs = null;
let OcaDeviceManager_GetMessage_rs = null;
let OcaDeviceManager_SetMessage_as = null;
let OcaDeviceManager_GetManagers_rs = null;
let OcaDeviceManager_GetDeviceRevisionID_rs = null;
let OcaDeviceManager_p = null;

let OcaDeviceManager_sync = null;

/**
 * Mandatory manager that contains information relevant to the whole
 * device. <ul> <li>Must be instantiated once in every device. </li>
 * <li>Must have object number 1.</li> </ul>
 * @extends OcaManager
 */
export class OcaDeviceManager extends OcaManager
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._ModelGUIDChanged = null;
    this._SerialNumberChanged = null;
    this._ModelDescriptionChanged = null;
    this._DeviceNameChanged = null;
    this._OcaVersionChanged = null;
    this._DeviceRoleChanged = null;
    this._UserInventoryCodeChanged = null;
    this._EnabledChanged = null;
    this._StateChanged = null;
    this._BusyChanged = null;
    this._ResetCauseChanged = null;
    this._MessageChanged = null;
    this._ManagersChanged = null;
    this._DeviceRevisionIDChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0003\u0001";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Gets the value of the OcaVersion property. The return value indicates
   * whether the property was successfully retrieved.
   * @retval {Promise}
   */
  GetOcaVersion()
  {
    let rs = OcaDeviceManager_GetOcaVersion_rs;
    if (!rs) rs = OcaDeviceManager_GetOcaVersion_rs = new signature(UINT16);
    const cmd = new CommandRrq(this.ono, 3, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the model GUID. The return value indicates whether the GUID was
   * successfully retrieved.
   * @retval {Promise}
   */
  GetModelGUID()
  {
    let rs = OcaDeviceManager_GetModelGUID_rs;
    if (!rs) rs = OcaDeviceManager_GetModelGUID_rs = new signature(OcaModelGUID);
    const cmd = new CommandRrq(this.ono, 3, 2, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the value of the SerialNumber property. The return value
   * indicates whether the property was successfully retrieved.
   * @retval {Promise}
   */
  GetSerialNumber()
  {
    let rs = OcaDeviceManager_GetSerialNumber_rs;
    if (!rs) rs = OcaDeviceManager_GetSerialNumber_rs = new signature(STRING);
    const cmd = new CommandRrq(this.ono, 3, 3, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the device name. The return value indicates whether the property
   * was successfully retrieved.
   * @retval {Promise}
   */
  GetDeviceName()
  {
    let rs = OcaDeviceManager_GetDeviceName_rs;
    if (!rs) rs = OcaDeviceManager_GetDeviceName_rs = new signature(STRING);
    const cmd = new CommandRrq(this.ono, 3, 4, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the device name. The return value indicates whether the property
   * was successfully set.
   * @param Name {OcaString}
   *
   * @retval {Promise}
   */
  SetDeviceName(Name)
  {
    let as = OcaDeviceManager_SetDeviceName_as;
    if (!as) as = OcaDeviceManager_SetDeviceName_as = new signature(STRING);
    const cmd = new CommandRrq(this.ono, 3, 5, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the model description. The return value indicates whether the
   * description was successfully retrieved.
   * @retval {Promise}
   */
  GetModelDescription()
  {
    let rs = OcaDeviceManager_GetModelDescription_rs;
    if (!rs) rs = OcaDeviceManager_GetModelDescription_rs = new signature(OcaModelDescription);
    const cmd = new CommandRrq(this.ono, 3, 6, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the value of the Role property. The return value indicates
   * whether the property was successfully retrieved.
   * @retval {Promise}
   */
  GetDeviceRole()
  {
    let rs = OcaDeviceManager_GetDeviceRole_rs;
    if (!rs) rs = OcaDeviceManager_GetDeviceRole_rs = new signature(STRING);
    const cmd = new CommandRrq(this.ono, 3, 7, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the Role property. The return value indicates
   * whether the property was successfully set.
   * @param role {OcaString}
   *
   * @retval {Promise}
   */
  SetRole(role)
  {
    let as = OcaDeviceManager_SetRole_as;
    if (!as) as = OcaDeviceManager_SetRole_as = new signature(STRING);
    const cmd = new CommandRrq(this.ono, 3, 8, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the value of the UserInventoryCode property. The return value
   * indicates whether the property was successfully retrieved.
   * @retval {Promise}
   */
  GetUserInventoryCode()
  {
    let rs = OcaDeviceManager_GetUserInventoryCode_rs;
    if (!rs) rs = OcaDeviceManager_GetUserInventoryCode_rs = new signature(STRING);
    const cmd = new CommandRrq(this.ono, 3, 9, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the UserInventoryCode property. The return value
   * indicates whether the property was successfully set.
   * @param Code {OcaString}
   *
   * @retval {Promise}
   */
  SetUserInventoryCode(Code)
  {
    let as = OcaDeviceManager_SetUserInventoryCode_as;
    if (!as) as = OcaDeviceManager_SetUserInventoryCode_as = new signature(STRING);
    const cmd = new CommandRrq(this.ono, 3, 10, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the value of the Enabled property. The return value indicates
   * whether the property was successfully retrieved.
   * @retval {Promise}
   */
  GetEnabled()
  {
    let rs = OcaDeviceManager_GetEnabled_rs;
    if (!rs) rs = OcaDeviceManager_GetEnabled_rs = new signature(BOOLEAN);
    const cmd = new CommandRrq(this.ono, 3, 11, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the Enabled property. The return value indicates
   * whether the property was successfully set.
   * @param enabled {OcaBoolean}
   *
   * @retval {Promise}
   */
  SetEnabled(enabled)
  {
    let as = OcaDeviceManager_SetEnabled_as;
    if (!as) as = OcaDeviceManager_SetEnabled_as = new signature(BOOLEAN);
    const cmd = new CommandRrq(this.ono, 3, 12, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the value of the State property. The return value indicates
   * whether the property was successfully retrieved.
   * @retval {Promise}
   */
  GetState()
  {
    let rs = OcaDeviceManager_GetState_rs;
    if (!rs) rs = OcaDeviceManager_GetState_rs = new signature(OcaDeviceState);
    const cmd = new CommandRrq(this.ono, 3, 13, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the reset key of the device. The return value
   * indicates whether the property was successfully set. Note that the
   * device manager must inform the CAP gateway of this key (via the host
   * interface), since the CAP gateway will check for and handle the
   * special reset message.
   * @param Key {OcaBlobFixedLen}
   *
   * @param Address {OcaNetworkAddress}
   *
   * @retval {Promise}
   */
  SetResetKey(Key, Address)
  {
    let as = OcaDeviceManager_SetResetKey_as;
    if (!as) as = OcaDeviceManager_SetResetKey_as = new signature(BLOBFIXED(16), BLOB);
    const cmd = new CommandRrq(this.ono, 3, 14, 2,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the value of the ResetCause property. The return value indicates
   * whether the property was successfully retrieved.
   * @retval {Promise}
   */
  GetResetCause()
  {
    let rs = OcaDeviceManager_GetResetCause_rs;
    if (!rs) rs = OcaDeviceManager_GetResetCause_rs = new signature(OcaResetCause);
    const cmd = new CommandRrq(this.ono, 3, 15, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Clears the ResetCause property, i.e. resets it to the default value
   * 'PowerOn'. Must be used after the reset cause has been read out to
   * ensure differentation between reconnects due to network loss and
   * reconnects due to external or internal reset. Offered as a separate
   * method (instead of implicitly clearing the cause after it has been
   * read out) to accomodate systems that have multiple controllers. The
   * return value indicates whether the property was successfully
   * retrieved.
   * @retval {Promise}
   */
  ClearResetCause()
  {
    const cmd = new CommandRrq(this.ono, 3, 16, 0);
    return this.device.send_command(cmd);
  }

  /**
   * Gets the value of property <b>Message</b>. Return value indicates
   * whether value was successfully retrieved.
   * @retval {Promise}
   */
  GetMessage()
  {
    let rs = OcaDeviceManager_GetMessage_rs;
    if (!rs) rs = OcaDeviceManager_GetMessage_rs = new signature(STRING);
    const cmd = new CommandRrq(this.ono, 3, 17, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Set arbitrary text message into <b>Message </b>property. The return
   * value indicates whether the value was successfully set.
   * @param Text {OcaString}
   *
   * @retval {Promise}
   */
  SetMessage(Text)
  {
    let as = OcaDeviceManager_SetMessage_as;
    if (!as) as = OcaDeviceManager_SetMessage_as = new signature(STRING);
    const cmd = new CommandRrq(this.ono, 3, 18, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Retrive the list of descriptors of managers instantiated in this
   * device. The return value indicates whether the retrieval was
   * successful.
   * @retval {Promise}
   */
  GetManagers()
  {
    let rs = OcaDeviceManager_GetManagers_rs;
    if (!rs) rs = OcaDeviceManager_GetManagers_rs = new signature(LIST(OcaManagerDescriptor));
    const cmd = new CommandRrq(this.ono, 3, 19, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the value of property <b>DeviceRevisionID</b>. Return value
   * indicates whether value was successfully retrieved.
   * @retval {Promise}
   */
  GetDeviceRevisionID()
  {
    let rs = OcaDeviceManager_GetDeviceRevisionID_rs;
    if (!rs) rs = OcaDeviceManager_GetDeviceRevisionID_rs = new signature(STRING);
    const cmd = new CommandRrq(this.ono, 3, 20, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Event that is triggered when the value of ModelGUID changes.
   * @type {PropertyEvent}
   */
  get OnModelGUIDChanged()
  {
    const event = this._ModelGUIDChanged;

    if (event) return event;

    return this._ModelGUIDChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 1), new signature(OcaModelGUID));
  }

  /**
   * Event that is triggered when the value of SerialNumber changes.
   * @type {PropertyEvent}
   */
  get OnSerialNumberChanged()
  {
    const event = this._SerialNumberChanged;

    if (event) return event;

    return this._SerialNumberChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 2), new signature(STRING));
  }

  /**
   * Event that is triggered when the value of ModelDescription changes.
   * @type {PropertyEvent}
   */
  get OnModelDescriptionChanged()
  {
    const event = this._ModelDescriptionChanged;

    if (event) return event;

    return this._ModelDescriptionChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 3), new signature(OcaModelDescription));
  }

  /**
   * Event that is triggered when the value of DeviceName changes.
   * @type {PropertyEvent}
   */
  get OnDeviceNameChanged()
  {
    const event = this._DeviceNameChanged;

    if (event) return event;

    return this._DeviceNameChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 4), new signature(STRING));
  }

  /**
   * Event that is triggered when the value of OcaVersion changes.
   * @type {PropertyEvent}
   */
  get OnOcaVersionChanged()
  {
    const event = this._OcaVersionChanged;

    if (event) return event;

    return this._OcaVersionChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 5), new signature(UINT16));
  }

  /**
   * Event that is triggered when the value of DeviceRole changes.
   * @type {PropertyEvent}
   */
  get OnDeviceRoleChanged()
  {
    const event = this._DeviceRoleChanged;

    if (event) return event;

    return this._DeviceRoleChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 6), new signature(STRING));
  }

  /**
   * Event that is triggered when the value of UserInventoryCode changes.
   * @type {PropertyEvent}
   */
  get OnUserInventoryCodeChanged()
  {
    const event = this._UserInventoryCodeChanged;

    if (event) return event;

    return this._UserInventoryCodeChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 7), new signature(STRING));
  }

  /**
   * Event that is triggered when the value of Enabled changes.
   * @type {PropertyEvent}
   */
  get OnEnabledChanged()
  {
    const event = this._EnabledChanged;

    if (event) return event;

    return this._EnabledChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 8), new signature(BOOLEAN));
  }

  /**
   * Event that is triggered when the value of State changes.
   * @type {PropertyEvent}
   */
  get OnStateChanged()
  {
    const event = this._StateChanged;

    if (event) return event;

    return this._StateChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 9), new signature(OcaDeviceState));
  }

  /**
   * Event that is triggered when the value of Busy changes.
   * @type {PropertyEvent}
   */
  get OnBusyChanged()
  {
    const event = this._BusyChanged;

    if (event) return event;

    return this._BusyChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 10), new signature(BOOLEAN));
  }

  /**
   * Event that is triggered when the value of ResetCause changes.
   * @type {PropertyEvent}
   */
  get OnResetCauseChanged()
  {
    const event = this._ResetCauseChanged;

    if (event) return event;

    return this._ResetCauseChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 11), new signature(OcaResetCause));
  }

  /**
   * Event that is triggered when the value of Message changes.
   * @type {PropertyEvent}
   */
  get OnMessageChanged()
  {
    const event = this._MessageChanged;

    if (event) return event;

    return this._MessageChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 12), new signature(STRING));
  }

  /**
   * Event that is triggered when the value of Managers changes.
   * @type {PropertyEvent}
   */
  get OnManagersChanged()
  {
    const event = this._ManagersChanged;

    if (event) return event;

    return this._ManagersChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 13), new signature(LIST(OcaManagerDescriptor)));
  }

  /**
   * Event that is triggered when the value of DeviceRevisionID changes.
   * @type {PropertyEvent}
   */
  get OnDeviceRevisionIDChanged()
  {
    const event = this._DeviceRevisionIDChanged;

    if (event) return event;

    return this._DeviceRevisionIDChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 14), new signature(STRING));
  }

  static get_properties()
  {
    if (!OcaDeviceManager_p)
    {
      OcaDeviceManager_p = new Properties([
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
          new Property("DeviceRevisionID", new signature(STRING), 3, 14, true, false, null),
        ], 3, OcaManager.get_properties());
    }

    return OcaDeviceManager_p;
  }

  static GetPropertySync()
  {
    let sync = OcaDeviceManager_sync;
    if (!sync)
    {
      OcaDeviceManager_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._ModelGUIDChanged) event.Dispose();
    if (event = this._SerialNumberChanged) event.Dispose();
    if (event = this._ModelDescriptionChanged) event.Dispose();
    if (event = this._DeviceNameChanged) event.Dispose();
    if (event = this._OcaVersionChanged) event.Dispose();
    if (event = this._DeviceRoleChanged) event.Dispose();
    if (event = this._UserInventoryCodeChanged) event.Dispose();
    if (event = this._EnabledChanged) event.Dispose();
    if (event = this._StateChanged) event.Dispose();
    if (event = this._BusyChanged) event.Dispose();
    if (event = this._ResetCauseChanged) event.Dispose();
    if (event = this._MessageChanged) event.Dispose();
    if (event = this._ManagersChanged) event.Dispose();
    if (event = this._DeviceRevisionIDChanged) event.Dispose();
  }
}


let OcaSecurityManager_AddPreSharedKey_as = null;
let OcaSecurityManager_ChangePreSharedKey_as = null;
let OcaSecurityManager_DeletePreSharedKey_as = null;
let OcaSecurityManager_p = null;

let OcaSecurityManager_sync = null;

/**
 * Manager that collects and controls security settings (including
 * security keys). <ul> <li>Must be instantiated in every device that
 * supports secure control and monitoring; otherwise, is optional. </li>
 * <li>May be instantiated at most once in any device. </li> <li>If
 * instantiated, object number must be 2.</li> </ul>
 * @extends OcaManager
 */
export class OcaSecurityManager extends OcaManager
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._secureControlDataChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0003\u0002";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Adds a pre-shared key (identified by the passed identity) to the
   * device. By having multiple PSKs the device is able to participate in
   * multiple secure systems. Note that adding a PSK over the network will
   * only work if the controller has a secure connection to the device and
   * control security has been turned on. If this is not the case the
   * method will return DeviceError.
   * @param identity {OcaString}
   *
   * @param key {OcaBlob}
   *
   * @retval {Promise}
   */
  AddPreSharedKey(identity, key)
  {
    let as = OcaSecurityManager_AddPreSharedKey_as;
    if (!as) as = OcaSecurityManager_AddPreSharedKey_as = new signature(STRING, BLOB);
    const cmd = new CommandRrq(this.ono, 3, 4, 2,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Changes the pre-shared key identified by the passed identity. Note
   * that changing a PSK over the network will only work if the controller
   * has a secure connection to the device and control security has been
   * turned on. If this is not the case the method will return DeviceError.
   * @param identity {OcaString}
   *
   * @param newKey {OcaBlob}
   *
   * @retval {Promise}
   */
  ChangePreSharedKey(identity, newKey)
  {
    let as = OcaSecurityManager_ChangePreSharedKey_as;
    if (!as) as = OcaSecurityManager_ChangePreSharedKey_as = new signature(STRING, BLOB);
    const cmd = new CommandRrq(this.ono, 3, 3, 2,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Deletes a pre-shared key (identified by the passed identity) on the
   * device. After deleting the pre-shared key the device will no longer be
   * able to participate in the secure system that uses the PSK. Note that
   * deleting a PSK over the network will only work if the controller has a
   * secure connection to the device and control security has been turned
   * on. If this is not the case the method will return DeviceError.
   * @param identity {OcaString}
   *
   * @retval {Promise}
   */
  DeletePreSharedKey(identity)
  {
    let as = OcaSecurityManager_DeletePreSharedKey_as;
    if (!as) as = OcaSecurityManager_DeletePreSharedKey_as = new signature(STRING);
    const cmd = new CommandRrq(this.ono, 3, 5, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Disables security of control data (OCA messages). After calling this
   * method all OCA messages can be sent and received both on insecure and
   * secure connections. The return value indicates whether the operation
   * succeeded. If the operation fails security is not disabled.
   * @retval {Promise}
   */
  DisableControlSecurity()
  {
    const cmd = new CommandRrq(this.ono, 3, 2, 0);
    return this.device.send_command(cmd);
  }

  /**
   * Enables security of control data (OCA messages). After calling this
   * method all OCA messages are sent and received using a secure
   * connection. The return value indicates whether the operation
   * succeeded. If the operation fails security is not enabled.
   * @retval {Promise}
   */
  EnableControlSecurity()
  {
    const cmd = new CommandRrq(this.ono, 3, 1, 0);
    return this.device.send_command(cmd);
  }

  /**
   * Event that is triggered when the value of secureControlData changes.
   * @type {PropertyEvent}
   */
  get OnsecureControlDataChanged()
  {
    const event = this._secureControlDataChanged;

    if (event) return event;

    return this._secureControlDataChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 1), new signature(BOOLEAN));
  }

  static get_properties()
  {
    if (!OcaSecurityManager_p)
    {
      OcaSecurityManager_p = new Properties([
          new Property("secureControlData", new signature(BOOLEAN), 3, 1, false, false, null),
        ], 3, OcaManager.get_properties());
    }

    return OcaSecurityManager_p;
  }

  static GetPropertySync()
  {
    let sync = OcaSecurityManager_sync;
    if (!sync)
    {
      OcaSecurityManager_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._secureControlDataChanged) event.Dispose();
  }
}


let OcaFirmwareManager_GetComponentVersions_rs = null;
let OcaFirmwareManager_BeginActiveImageUpdate_as = null;
let OcaFirmwareManager_AddImageData_as = null;
let OcaFirmwareManager_VerifyImage_as = null;
let OcaFirmwareManager_BeginPassiveComponentUpdate_as = null;
let OcaFirmwareManager_p = null;

let OcaFirmwareManager_sync = null;

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
export class OcaFirmwareManager extends OcaManager
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._ComponentVersionsChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0003\u0003";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Gets the value of the ComponentVersions property. The return value
   * indicates whether the property was successfully retrieved.
   * @retval {Promise}
   */
  GetComponentVersions()
  {
    let rs = OcaFirmwareManager_GetComponentVersions_rs;
    if (!rs) rs = OcaFirmwareManager_GetComponentVersions_rs = new signature(LIST(OcaVersion));
    const cmd = new CommandRrq(this.ono, 3, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Marks the start of the update process of an OCA device, meaning one or
   * more components will be updated. If the method succeeds the device
   * will be in state 'Updating'. One or more active or passive updates can
   * then follow, after which the update process is ended by calling the
   * '03m08 EndUpdateProcess' method. The return value indicates if
   * starting the update process succeeded.
   * @retval {Promise}
   */
  StartUpdateProcess()
  {
    const cmd = new CommandRrq(this.ono, 3, 2, 0);
    return this.device.send_command(cmd);
  }

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
   * @param component {OcaComponent}
   *
   * @retval {Promise}
   */
  BeginActiveImageUpdate(component)
  {
    let as = OcaFirmwareManager_BeginActiveImageUpdate_as;
    if (!as) as = OcaFirmwareManager_BeginActiveImageUpdate_as = new signature(OcaComponent);
    const cmd = new CommandRrq(this.ono, 3, 3, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Adds a new part of the software/firmware image to the upgrade memory
   * as part of the active update. Where this data is stored, is up to the
   * implementation of the manager. It can either be stored in RAM to be
   * written to Flash later, or directly to Flash, dependent on the chosen
   * architecture and requirements. The return value indicates whether the
   * data is correctly received and the data is not out of order.
   * @param id {OcaUint32}
   *
   * @param imageData {OcaBlob}
   *
   * @retval {Promise}
   */
  AddImageData(id, imageData)
  {
    let as = OcaFirmwareManager_AddImageData_as;
    if (!as) as = OcaFirmwareManager_AddImageData_as = new signature(UINT32, BLOB);
    const cmd = new CommandRrq(this.ono, 3, 4, 2,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Verifies the entire host processor image using the passed verification
   * data.
   * @param verifyData {OcaBlob}
   *
   * @retval {Promise}
   */
  VerifyImage(verifyData)
  {
    let as = OcaFirmwareManager_VerifyImage_as;
    if (!as) as = OcaFirmwareManager_VerifyImage_as = new signature(BLOB);
    const cmd = new CommandRrq(this.ono, 3, 5, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Ends the active software/firmware image update. This is needed to let
   * the device know that the current active component has finished, and
   * therefore a new active or passive update can be started (or the upload
   * process can be ended by invoking the '03m08 EndUpdateProcess' method).
   * The return value indicates if ending the active update succeeded.
   * @retval {Promise}
   */
  EndActiveImageUpdate()
  {
    const cmd = new CommandRrq(this.ono, 3, 6, 0);
    return this.device.send_command(cmd);
  }

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
   * @param component {OcaComponent}
   *
   * @param serverAddress {OcaNetworkAddress}
   *
   * @param updateFileName {OcaString}
   *
   * @retval {Promise}
   */
  BeginPassiveComponentUpdate(component, serverAddress, updateFileName)
  {
    let as = OcaFirmwareManager_BeginPassiveComponentUpdate_as;
    if (!as) as = OcaFirmwareManager_BeginPassiveComponentUpdate_as = new signature(OcaComponent, BLOB, STRING);
    const cmd = new CommandRrq(this.ono, 3, 7, 3,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Ends the current update process in which one or more components haven
   * been updated (actively or passively). This action will trigger the
   * device to start using the new images. This should bring the device
   * back into standard operational mode (e.g. rebooting the device, this
   * however depends on the implementation of the upgrade process). As it
   * will usually trigger a reset of the device in some cases no response
   * parameter is used for this method.
   * @retval {Promise}
   */
  EndUpdateProcess()
  {
    const cmd = new CommandRrq(this.ono, 3, 8, 0);
    return this.device.send_command(cmd);
  }

  /**
   * Event that is triggered when the value of ComponentVersions changes.
   * @type {PropertyEvent}
   */
  get OnComponentVersionsChanged()
  {
    const event = this._ComponentVersionsChanged;

    if (event) return event;

    return this._ComponentVersionsChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 1), new signature(LIST(OcaVersion)));
  }

  static get_properties()
  {
    if (!OcaFirmwareManager_p)
    {
      OcaFirmwareManager_p = new Properties([
          new Property("ComponentVersions", new signature(LIST(OcaVersion)), 3, 1, false, false, null),
        ], 3, OcaManager.get_properties());
    }

    return OcaFirmwareManager_p;
  }

  static GetPropertySync()
  {
    let sync = OcaFirmwareManager_sync;
    if (!sync)
    {
      OcaFirmwareManager_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._ComponentVersionsChanged) event.Dispose();
  }
}


let OcaSubscriptionManager_RemoveSubscription_as = null;
let OcaSubscriptionManager_AddSubscription_as = null;
let OcaSubscriptionManager_AddPropertyChangeSubscription_as = null;
let OcaSubscriptionManager_RemovePropertyChangeSubscription_as = null;
let OcaSubscriptionManager_GetMaximumSubscriberContextLength_rs = null;
let OcaSubscriptionManager_p = null;

let OcaSubscriptionManager_sync = null;

/**
 * Manager that collects and controls the event subscriptions of the
 * device. <ul> <li>Must be instantiated once in every device that
 * supports subscriptions. </li> <li>May be instantiated at most once in
 * any device. </li> <li>If instantiated, must have object number 4.</li>
 * </ul> Absence of an <b>OcaSubscriptionManager </b>object signifies
 * that the device does not support event subscriptions.
 * @extends OcaManager
 */
export class OcaSubscriptionManager extends OcaManager
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._NotificationsDisabled = null;
    this._SynchronizeState = null;
    this._StateChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0003\u0004";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Removes all subscriptions to the given event with the given
   * <b>OcaMethod</b>. The return value indicates whether the
   * subscription(s) was (were) successfully removed.
   * @param Event {OcaEvent}
   *
   * @param Subscriber {OcaMethod}
   *
   * @retval {Promise}
   */
  RemoveSubscription(Event, Subscriber)
  {
    let as = OcaSubscriptionManager_RemoveSubscription_as;
    if (!as) as = OcaSubscriptionManager_RemoveSubscription_as = new signature(OcaEvent, OcaMethod);
    const cmd = new CommandRrq(this.ono, 3, 2, 2,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Adds a subscription to an event. The subscription is added for the
   * session on which the command came in. If a subscription identical to
   * the one being requested already exists, an additional one shall not be
   * added. Two subscriptions are identical if the <b>Event, Subscriber,
   * NotificationDeliveryMode</b>, and <b>DestinationInformation
   * </b>parameters are all identical. The return value indicates whether
   * the subscription succeeded.
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
   * @retval {Promise}
   */
  AddSubscription(Event, Subscriber, SubscriberContext, NotificationDeliveryMode, DestinationInformation)
  {
    let as = OcaSubscriptionManager_AddSubscription_as;
    if (!as) as = OcaSubscriptionManager_AddSubscription_as = new signature(OcaEvent, OcaMethod, BLOB, OcaNotificationDeliveryMode, BLOB);
    const cmd = new CommandRrq(this.ono, 3, 1, 5,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

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
   * @retval {Promise}
   */
  DisableNotifications()
  {
    const cmd = new CommandRrq(this.ono, 3, 3, 0);
    return this.device.send_command(cmd);
  }

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
   * @retval {Promise}
   */
  ReEnableNotifications()
  {
    const cmd = new CommandRrq(this.ono, 3, 4, 0);
    return this.device.send_command(cmd);
  }

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
   * @retval {Promise}
   */
  AddPropertyChangeSubscription(Emitter, Property, Subscriber, SubscriberContext, NotificationDeliveryMode, DestinationInformation)
  {
    let as = OcaSubscriptionManager_AddPropertyChangeSubscription_as;
    if (!as) as = OcaSubscriptionManager_AddPropertyChangeSubscription_as = new signature(UINT32, OcaPropertyID, OcaMethod, BLOB, OcaNotificationDeliveryMode, BLOB);
    const cmd = new CommandRrq(this.ono, 3, 5, 6,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Removes any subscription to a PropertyChanged event with the given
   * Emitter, Property, Subscriber, SubscriberContext,
   * NotificationDeliveryMode, and DestinationInformation. The return value
   * indicates whether the subscription(s) was (were) successfully removed.
   * Added in v2 of this class, in AES70-2017.
   * @param Emitter {OcaONo}
   *
   * @param Property {OcaPropertyID}
   *
   * @param Subscriber {OcaMethod}
   *
   * @retval {Promise}
   */
  RemovePropertyChangeSubscription(Emitter, Property, Subscriber)
  {
    let as = OcaSubscriptionManager_RemovePropertyChangeSubscription_as;
    if (!as) as = OcaSubscriptionManager_RemovePropertyChangeSubscription_as = new signature(UINT32, OcaPropertyID, OcaMethod);
    const cmd = new CommandRrq(this.ono, 3, 6, 3,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Returns maximum byte length of payload of subscriber context parameter
   * that this device supports. This returned value shall be either zero or
   * four. If the returned payload length is not zero, it shall be four. No
   * other values shall be allowed, and the returned value shall not change
   * once the device has initialized. NOTE: In AES70-2015, arbitrary
   * subscriber context lengths were allowed; this is no longer true.
   * @retval {Promise}
   */
  GetMaximumSubscriberContextLength()
  {
    let rs = OcaSubscriptionManager_GetMaximumSubscriberContextLength_rs;
    if (!rs) rs = OcaSubscriptionManager_GetMaximumSubscriberContextLength_rs = new signature(UINT16);
    const cmd = new CommandRrq(this.ono, 3, 7, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Event that is raised when the value of the <b>State </b>property
   * changes from <b><i>Normal </i></b>to <b><i>EventsDisabled.</i></b>
   */
  get OnNotificationsDisabled()
  {
    const event = this._NotificationsDisabled;

    if (event) return event;

    const s = null;

    return this._NotificationsDisabled = new Event(this, new OcaEventID(3, 1), s);
  }

  /**
   * Event that is raised when the value of the <b>State </b>property
   * changes from <b><i>EventsDisabled </i></b>to <b><i>Normal.</i></b>
   * Event data includes a lists of which objects changed state during the
   * period that notifications were disabled.
   */
  get OnSynchronizeState()
  {
    const event = this._SynchronizeState;

    if (event) return event;

    const s = new signature(LIST(UINT32));

    return this._SynchronizeState = new Event(this, new OcaEventID(3, 2), s);
  }

  /**
   * Event that is triggered when the value of State changes.
   * @type {PropertyEvent}
   */
  get OnStateChanged()
  {
    const event = this._StateChanged;

    if (event) return event;

    return this._StateChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 1), new signature(OcaSubscriptionManagerState));
  }

  static get_properties()
  {
    if (!OcaSubscriptionManager_p)
    {
      OcaSubscriptionManager_p = new Properties([
          new Property("State", new signature(OcaSubscriptionManagerState), 3, 1, false, false, null),
        ], 3, OcaManager.get_properties());
    }

    return OcaSubscriptionManager_p;
  }

  static GetPropertySync()
  {
    let sync = OcaSubscriptionManager_sync;
    if (!sync)
    {
      OcaSubscriptionManager_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._NotificationsDisabled) event.Dispose();
    if (event = this._SynchronizeState) event.Dispose();
    if (event = this._StateChanged) event.Dispose();
  }
}


let OcaPowerManager_GetState_rs = null;
let OcaPowerManager_SetState_as = null;
let OcaPowerManager_GetPowerSupplies_rs = null;
let OcaPowerManager_GetActivePowerSupplies_rs = null;
let OcaPowerManager_ExchangePowerSupply_as = null;
let OcaPowerManager_GetAutoState_rs = null;
let OcaPowerManager_p = null;

let OcaPowerManager_sync = null;

/**
 * Optional manager that manages power settings and state. <ul> <li>May
 * be instantiated once in any device. </li> <li>If instantiated, object
 * number must be 5.</li> </ul>
 * @extends OcaManager
 */
export class OcaPowerManager extends OcaManager
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._StateChanged = null;
    this._PowerSuppliesChanged = null;
    this._ActivePowerSuppliesChanged = null;
    this._AutoStateChanged = null;
    this._TargetStateChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0003\u0005";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Retrieve the value of property <b>03p01 State</b>, the current power
   * state of the device. Return value indicates whether the value was
   * successfully retrieved.
   * @retval {Promise}
   */
  GetState()
  {
    let rs = OcaPowerManager_GetState_rs;
    if (!rs) rs = OcaPowerManager_GetState_rs = new signature(OcaPowerState);
    const cmd = new CommandRrq(this.ono, 3, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Change the device power state. The return value indicates whether the
   * requested change has been successfully made.
   * @param State {OcaPowerState}
   *
   * @retval {Promise}
   */
  SetState(State)
  {
    let as = OcaPowerManager_SetState_as;
    if (!as) as = OcaPowerManager_SetState_as = new signature(OcaPowerState);
    const cmd = new CommandRrq(this.ono, 3, 2, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Retrieves list of object number(s) of all power supply(ies). Return
   * value indicates whether the data was successfully retrieved.
   * @retval {Promise}
   */
  GetPowerSupplies()
  {
    let rs = OcaPowerManager_GetPowerSupplies_rs;
    if (!rs) rs = OcaPowerManager_GetPowerSupplies_rs = new signature(LIST(UINT32));
    const cmd = new CommandRrq(this.ono, 3, 3, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Retrieves list of object number(s) of active power supply(ies). Return
   * value indicates whether the data was successfully retrieved.
   * @retval {Promise}
   */
  GetActivePowerSupplies()
  {
    let rs = OcaPowerManager_GetActivePowerSupplies_rs;
    if (!rs) rs = OcaPowerManager_GetActivePowerSupplies_rs = new signature(LIST(UINT32));
    const cmd = new CommandRrq(this.ono, 3, 4, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Deactivate one power supply and activate another. An option switch
   * indicates whether the previously active power supply is to be turned
   * off. If it is not turned off, it will be placed in the
   * <b>Unavailable</b> state. The return value indicates whether the
   * requested exchange has been successfully made.
   * @param oldPsu {OcaONo}
   *
   * @param newPsu {OcaONo}
   *
   * @param powerOffOld {OcaBoolean}
   *
   * @retval {Promise}
   */
  ExchangePowerSupply(oldPsu, newPsu, powerOffOld)
  {
    let as = OcaPowerManager_ExchangePowerSupply_as;
    if (!as) as = OcaPowerManager_ExchangePowerSupply_as = new signature(UINT32, UINT32, BOOLEAN);
    const cmd = new CommandRrq(this.ono, 3, 5, 3,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the value of the <b>AutoState</b> property. The return value
   * indicates whether the value was successfully retrieved.
   * @retval {Promise}
   */
  GetAutoState()
  {
    let rs = OcaPowerManager_GetAutoState_rs;
    if (!rs) rs = OcaPowerManager_GetAutoState_rs = new signature(BOOLEAN);
    const cmd = new CommandRrq(this.ono, 3, 6, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Event that is triggered when the value of State changes.
   * @type {PropertyEvent}
   */
  get OnStateChanged()
  {
    const event = this._StateChanged;

    if (event) return event;

    return this._StateChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 1), new signature(OcaPowerState));
  }

  /**
   * Event that is triggered when the value of PowerSupplies changes.
   * @type {PropertyEvent}
   */
  get OnPowerSuppliesChanged()
  {
    const event = this._PowerSuppliesChanged;

    if (event) return event;

    return this._PowerSuppliesChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 2), new signature(LIST(UINT32)));
  }

  /**
   * Event that is triggered when the value of ActivePowerSupplies changes.
   * @type {PropertyEvent}
   */
  get OnActivePowerSuppliesChanged()
  {
    const event = this._ActivePowerSuppliesChanged;

    if (event) return event;

    return this._ActivePowerSuppliesChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 3), new signature(LIST(UINT32)));
  }

  /**
   * Event that is triggered when the value of AutoState changes.
   * @type {PropertyEvent}
   */
  get OnAutoStateChanged()
  {
    const event = this._AutoStateChanged;

    if (event) return event;

    return this._AutoStateChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 4), new signature(BOOLEAN));
  }

  /**
   * Event that is triggered when the value of TargetState changes.
   * @type {PropertyEvent}
   */
  get OnTargetStateChanged()
  {
    const event = this._TargetStateChanged;

    if (event) return event;

    return this._TargetStateChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 5), new signature(OcaPowerState));
  }

  static get_properties()
  {
    if (!OcaPowerManager_p)
    {
      OcaPowerManager_p = new Properties([
          new Property("State", new signature(OcaPowerState), 3, 1, false, false, null),
          new Property("PowerSupplies", new signature(LIST(UINT32)), 3, 2, false, false, null),
          new Property("ActivePowerSupplies", new signature(LIST(UINT32)), 3, 3, false, false, null),
          new Property("AutoState", new signature(BOOLEAN), 3, 4, false, false, null),
          new Property("TargetState", new signature(OcaPowerState), 3, 5, true, false, null),
        ], 3, OcaManager.get_properties());
    }

    return OcaPowerManager_p;
  }

  static GetPropertySync()
  {
    let sync = OcaPowerManager_sync;
    if (!sync)
    {
      OcaPowerManager_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._StateChanged) event.Dispose();
    if (event = this._PowerSuppliesChanged) event.Dispose();
    if (event = this._ActivePowerSuppliesChanged) event.Dispose();
    if (event = this._AutoStateChanged) event.Dispose();
    if (event = this._TargetStateChanged) event.Dispose();
  }
}


let OcaNetworkManager_GetNetworks_rs = null;
let OcaNetworkManager_GetStreamNetworks_rs = null;
let OcaNetworkManager_GetControlNetworks_rs = null;
let OcaNetworkManager_GetMediaTransportNetworks_rs = null;
let OcaNetworkManager_p = null;

let OcaNetworkManager_sync = null;

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
export class OcaNetworkManager extends OcaManager
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._NetworksChanged = null;
    this._StreamNetworksChanged = null;
    this._ControlNetworksChanged = null;
    this._MediaTransportNetworksChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0003\u0006";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property. Version 2 adds the control
   * and media transport network properties and methods.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Gets the list of object numbers of <b>OcaNetwork </b>instances in this
   * device. Return value indicates whether the list was successfully
   * retrieved. <b><u>Deprecated as of OCA 1.2</u></b>
   * @retval {Promise}
   */
  GetNetworks()
  {
    let rs = OcaNetworkManager_GetNetworks_rs;
    if (!rs) rs = OcaNetworkManager_GetNetworks_rs = new signature(LIST(UINT32));
    const cmd = new CommandRrq(this.ono, 3, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the list of object numbers of <b>OcaStreamNetwork </b>instances
   * in this device. Return value indicates whether list was successfully
   * retrieved. <b><u>Deprecated as of OCA 1.4.</u></b>
   * @retval {Promise}
   */
  GetStreamNetworks()
  {
    let rs = OcaNetworkManager_GetStreamNetworks_rs;
    if (!rs) rs = OcaNetworkManager_GetStreamNetworks_rs = new signature(LIST(UINT32));
    const cmd = new CommandRrq(this.ono, 3, 2, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the list of object numbers of <b>OcaControlNetwork </b>instances
   * in this device. Return value indicates whether list was successfully
   * retrieved. Introduced in version 1.4.
   * @retval {Promise}
   */
  GetControlNetworks()
  {
    let rs = OcaNetworkManager_GetControlNetworks_rs;
    if (!rs) rs = OcaNetworkManager_GetControlNetworks_rs = new signature(LIST(UINT32));
    const cmd = new CommandRrq(this.ono, 3, 3, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the list of object numbers of <b>OcaMediaTransportNetwork
   * </b>instances in this device. Return value indicates whether list was
   * successfully retrieved. Introduced in version 1.4.
   * @retval {Promise}
   */
  GetMediaTransportNetworks()
  {
    let rs = OcaNetworkManager_GetMediaTransportNetworks_rs;
    if (!rs) rs = OcaNetworkManager_GetMediaTransportNetworks_rs = new signature(LIST(UINT32));
    const cmd = new CommandRrq(this.ono, 3, 4, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Event that is triggered when the value of Networks changes.
   * @type {PropertyEvent}
   */
  get OnNetworksChanged()
  {
    const event = this._NetworksChanged;

    if (event) return event;

    return this._NetworksChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 1), new signature(LIST(UINT32)));
  }

  /**
   * Event that is triggered when the value of StreamNetworks changes.
   * @type {PropertyEvent}
   */
  get OnStreamNetworksChanged()
  {
    const event = this._StreamNetworksChanged;

    if (event) return event;

    return this._StreamNetworksChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 2), new signature(LIST(UINT32)));
  }

  /**
   * Event that is triggered when the value of ControlNetworks changes.
   * @type {PropertyEvent}
   */
  get OnControlNetworksChanged()
  {
    const event = this._ControlNetworksChanged;

    if (event) return event;

    return this._ControlNetworksChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 3), new signature(LIST(UINT32)));
  }

  /**
   * Event that is triggered when the value of MediaTransportNetworks changes.
   * @type {PropertyEvent}
   */
  get OnMediaTransportNetworksChanged()
  {
    const event = this._MediaTransportNetworksChanged;

    if (event) return event;

    return this._MediaTransportNetworksChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 4), new signature(LIST(UINT32)));
  }

  static get_properties()
  {
    if (!OcaNetworkManager_p)
    {
      OcaNetworkManager_p = new Properties([
          new Property("Networks", new signature(LIST(UINT32)), 3, 1, false, false, null),
          new Property("StreamNetworks", new signature(LIST(UINT32)), 3, 2, false, false, null),
          new Property("ControlNetworks", new signature(LIST(UINT32)), 3, 3, false, false, null),
          new Property("MediaTransportNetworks", new signature(LIST(UINT32)), 3, 4, false, false, null),
        ], 3, OcaManager.get_properties());
    }

    return OcaNetworkManager_p;
  }

  static GetPropertySync()
  {
    let sync = OcaNetworkManager_sync;
    if (!sync)
    {
      OcaNetworkManager_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._NetworksChanged) event.Dispose();
    if (event = this._StreamNetworksChanged) event.Dispose();
    if (event = this._ControlNetworksChanged) event.Dispose();
    if (event = this._MediaTransportNetworksChanged) event.Dispose();
  }
}


let OcaMediaClockManager_GetClocks_rs = null;
let OcaMediaClockManager_GetMediaClockTypesSupported_rs = null;
let OcaMediaClockManager_GetClock3s_rs = null;
let OcaMediaClockManager_p = null;

let OcaMediaClockManager_sync = null;

/**
 * Optional manager that collects all media clocks the device uses. <ul>
 * <li>Must be instantiated once for every device that has more than one
 * media clock object. In this context, "media clock" means an instance
 * of <b>OcaMediaClock</b>, <b>OcaMediaClock3</b>, or any subclass of
 * these classes. </li> </ul> <ul> <li>If instantiated, object number
 * must be 7.</li> </ul>
 * @extends OcaManager
 */
export class OcaMediaClockManager extends OcaManager
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._ClockSourceTypesSupportedChanged = null;
    this._ClocksChanged = null;
    this._Clock3sChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0003\u0007";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Gets the list of object numbers of <b>OcaMediaClock </b>instances in
   * this device. Return value indicates whether list was successfully
   * retrieved. Note: In AES70-2017, this method is deprecated.
   * @retval {Promise}
   */
  GetClocks()
  {
    let rs = OcaMediaClockManager_GetClocks_rs;
    if (!rs) rs = OcaMediaClockManager_GetClocks_rs = new signature(LIST(UINT32));
    const cmd = new CommandRrq(this.ono, 3, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the list of media clock types supported by <b>OcaMediaClock
   * </b>objects in the device. Return value indicates whether the list was
   * successfully retrieved. Note : In AES70-2017, this method is
   * deprecated.
   * @retval {Promise}
   */
  GetMediaClockTypesSupported()
  {
    let rs = OcaMediaClockManager_GetMediaClockTypesSupported_rs;
    if (!rs) rs = OcaMediaClockManager_GetMediaClockTypesSupported_rs = new signature(LIST(OcaMediaClockType));
    const cmd = new CommandRrq(this.ono, 3, 2, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the list of object numbers of <b>OcaMediaClock3 </b>instances in
   * this device. Return value indicates whether list was successfully
   * retrieved.
   * @retval {Promise}
   */
  GetClock3s()
  {
    let rs = OcaMediaClockManager_GetClock3s_rs;
    if (!rs) rs = OcaMediaClockManager_GetClock3s_rs = new signature(LIST(UINT32));
    const cmd = new CommandRrq(this.ono, 3, 3, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Event that is triggered when the value of ClockSourceTypesSupported changes.
   * @type {PropertyEvent}
   */
  get OnClockSourceTypesSupportedChanged()
  {
    const event = this._ClockSourceTypesSupportedChanged;

    if (event) return event;

    return this._ClockSourceTypesSupportedChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 1), new signature(LIST(OcaMediaClockType)));
  }

  /**
   * Event that is triggered when the value of Clocks changes.
   * @type {PropertyEvent}
   */
  get OnClocksChanged()
  {
    const event = this._ClocksChanged;

    if (event) return event;

    return this._ClocksChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 2), new signature(LIST(UINT32)));
  }

  /**
   * Event that is triggered when the value of Clock3s changes.
   * @type {PropertyEvent}
   */
  get OnClock3sChanged()
  {
    const event = this._Clock3sChanged;

    if (event) return event;

    return this._Clock3sChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 3), new signature(LIST(UINT32)));
  }

  static get_properties()
  {
    if (!OcaMediaClockManager_p)
    {
      OcaMediaClockManager_p = new Properties([
          new Property("ClockSourceTypesSupported", new signature(LIST(OcaMediaClockType)), 3, 1, false, false, ["MediaClockTypesSupported"]),
          new Property("Clocks", new signature(LIST(UINT32)), 3, 2, false, false, null),
          new Property("Clock3s", new signature(LIST(UINT32)), 3, 3, false, false, null),
        ], 3, OcaManager.get_properties());
    }

    return OcaMediaClockManager_p;
  }

  static GetPropertySync()
  {
    let sync = OcaMediaClockManager_sync;
    if (!sync)
    {
      OcaMediaClockManager_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._ClockSourceTypesSupportedChanged) event.Dispose();
    if (event = this._ClocksChanged) event.Dispose();
    if (event = this._Clock3sChanged) event.Dispose();
  }
}


let OcaLibraryManager_AddLibrary_as = null;
let OcaLibraryManager_AddLibrary_rs = null;
let OcaLibraryManager_DeleteLibrary_as = null;
let OcaLibraryManager_GetLibraryCount_as = null;
let OcaLibraryManager_GetLibraryCount_rs = null;
let OcaLibraryManager_GetLibraryList_as = null;
let OcaLibraryManager_GetLibraryList_rs = null;
let OcaLibraryManager_GetCurrentPatch_rs = null;
let OcaLibraryManager_SetCurrentPatch_as = null;
let OcaLibraryManager_p = null;

let OcaLibraryManager_sync = null;

/**
 * Optional manager for handling device presets -- patch and parset
 * libraries. <ul> <li>May be instantiated once in any device. </li>
 * </ul> <ul> <li>If instantiated, object number must be 8.</li> </ul>
 * @extends OcaManager
 */
export class OcaLibraryManager extends OcaManager
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._PatchLibrariesChanged = null;
    this._ParsetLibrariesChanged = null;
    this._CurrentPatchChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0003\b";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Adds a library to the device. Return value indicates whether the
   * library was successfully added.
   * @param Type {OcaLibVolType}
   *
   * @retval {Promise}
   */
  AddLibrary(Type)
  {
    let as = OcaLibraryManager_AddLibrary_as;
    if (!as) as = OcaLibraryManager_AddLibrary_as = new signature(OcaLibVolType);
    let rs = OcaLibraryManager_AddLibrary_rs;
    if (!rs) rs = OcaLibraryManager_AddLibrary_rs = new signature(UINT32);
    const cmd = new CommandRrq(this.ono, 3, 1, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd, rs);
  }

  /**
   * Deletes a library from the device.
   * @param ID {OcaONo}
   *
   * @retval {Promise}
   */
  DeleteLibrary(ID)
  {
    let as = OcaLibraryManager_DeleteLibrary_as;
    if (!as) as = OcaLibraryManager_DeleteLibrary_as = new signature(UINT32);
    const cmd = new CommandRrq(this.ono, 3, 2, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Returns the number of libraries of the given type that are
   * instantiated in the device..
   * @param Type {OcaLibVolType}
   *
   * @retval {Promise}
   */
  GetLibraryCount(Type)
  {
    let as = OcaLibraryManager_GetLibraryCount_as;
    if (!as) as = OcaLibraryManager_GetLibraryCount_as = new signature(OcaLibVolType);
    let rs = OcaLibraryManager_GetLibraryCount_rs;
    if (!rs) rs = OcaLibraryManager_GetLibraryCount_rs = new signature(UINT16);
    const cmd = new CommandRrq(this.ono, 3, 3, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd, rs);
  }

  /**
   * Returns the list of object numbers of libraries of libraries of the
   * given type that are instantiated in the device.
   * @param Type {OcaLibVolType}
   *
   * @retval {Promise}
   */
  GetLibraryList(Type)
  {
    let as = OcaLibraryManager_GetLibraryList_as;
    if (!as) as = OcaLibraryManager_GetLibraryList_as = new signature(OcaLibVolType);
    let rs = OcaLibraryManager_GetLibraryList_rs;
    if (!rs) rs = OcaLibraryManager_GetLibraryList_rs = new signature(LIST(UINT32));
    const cmd = new CommandRrq(this.ono, 3, 4, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd, rs);
  }

  /**
   * Return the identifier of the most recently applied patch. The return
   * value indicates whether the method succeeded.
   * @retval {Promise}
   */
  GetCurrentPatch()
  {
    let rs = OcaLibraryManager_GetCurrentPatch_rs;
    if (!rs) rs = OcaLibraryManager_GetCurrentPatch_rs = new signature(UINT16);
    const cmd = new CommandRrq(this.ono, 3, 5, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Apply a patch to the device.
   * @param ID {OcaClassVersionNumber}
   *
   * @retval {Promise}
   */
  SetCurrentPatch(ID)
  {
    let as = OcaLibraryManager_SetCurrentPatch_as;
    if (!as) as = OcaLibraryManager_SetCurrentPatch_as = new signature(UINT16);
    const cmd = new CommandRrq(this.ono, 3, 6, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Event that is triggered when the value of PatchLibraries changes.
   * @type {PropertyEvent}
   */
  get OnPatchLibrariesChanged()
  {
    const event = this._PatchLibrariesChanged;

    if (event) return event;

    return this._PatchLibrariesChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 1), new signature(LIST(UINT32)));
  }

  /**
   * Event that is triggered when the value of ParsetLibraries changes.
   * @type {PropertyEvent}
   */
  get OnParsetLibrariesChanged()
  {
    const event = this._ParsetLibrariesChanged;

    if (event) return event;

    return this._ParsetLibrariesChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 2), new signature(LIST(UINT32)));
  }

  /**
   * Event that is triggered when the value of CurrentPatch changes.
   * @type {PropertyEvent}
   */
  get OnCurrentPatchChanged()
  {
    const event = this._CurrentPatchChanged;

    if (event) return event;

    return this._CurrentPatchChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 3), new signature(UINT16));
  }

  static get_properties()
  {
    if (!OcaLibraryManager_p)
    {
      OcaLibraryManager_p = new Properties([
          new Property("PatchLibraries", new signature(LIST(UINT32)), 3, 1, false, false, null),
          new Property("ParsetLibraries", new signature(LIST(UINT32)), 3, 2, false, false, null),
          new Property("CurrentPatch", new signature(UINT16), 3, 3, false, false, null),
        ], 3, OcaManager.get_properties());
    }

    return OcaLibraryManager_p;
  }

  static GetPropertySync()
  {
    let sync = OcaLibraryManager_sync;
    if (!sync)
    {
      OcaLibraryManager_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._PatchLibrariesChanged) event.Dispose();
    if (event = this._ParsetLibrariesChanged) event.Dispose();
    if (event = this._CurrentPatchChanged) event.Dispose();
  }
}


let OcaAudioProcessingManager_p = null;

let OcaAudioProcessingManager_sync = null;

/**
 * Placeholder for optional manager that in future versions of the
 * standard will hold various global audio processing parameters. <ul>
 * <li>May be instantiated once in any device. </li> </ul> <ul> <li>If
 * instantiated, object number must be 9.</li> </ul>
 * @extends OcaManager
 */
export class OcaAudioProcessingManager extends OcaManager
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0003\t";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  static get_properties()
  {
    if (!OcaAudioProcessingManager_p)
    {
      OcaAudioProcessingManager_p = new Properties([
        ], 3, OcaManager.get_properties());
    }

    return OcaAudioProcessingManager_p;
  }

  static GetPropertySync()
  {
    let sync = OcaAudioProcessingManager_sync;
    if (!sync)
    {
      OcaAudioProcessingManager_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
  }
}


let OcaDeviceTimeManager_GetDeviceTime_rs = null;
let OcaDeviceTimeManager_SetDeviceTime_as = null;
let OcaDeviceTimeManager_GetTimeSources_rs = null;
let OcaDeviceTimeManager_GetCurrentDeviceTimeSource_rs = null;
let OcaDeviceTimeManager_SetCurrentDeviceTimeSource_as = null;
let OcaDeviceTimeManager_p = null;

let OcaDeviceTimeManager_sync = null;

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
export class OcaDeviceTimeManager extends OcaManager
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._TimeSourcesChanged = null;
    this._CurrentDeviceTimeSourceChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0003\n";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Get current value of device time-of-day clock. Return value indicates
   * whether value was successfully retrieved.
   * @retval {Promise}
   */
  GetDeviceTime()
  {
    let rs = OcaDeviceTimeManager_GetDeviceTime_rs;
    if (!rs) rs = OcaDeviceTimeManager_GetDeviceTime_rs = new signature(UINT64);
    const cmd = new CommandRrq(this.ono, 3, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Set device time-of-day clock. Return value indicates whether value was
   * successfully set. Not available if a time source is identified in
   * property CurrentDeviceTimeSource.
   * @param DeviceTime {OcaTimeOfDay}
   *
   * @retval {Promise}
   */
  SetDeviceTime(DeviceTime)
  {
    let as = OcaDeviceTimeManager_SetDeviceTime_as;
    if (!as) as = OcaDeviceTimeManager_SetDeviceTime_as = new signature(UINT64);
    const cmd = new CommandRrq(this.ono, 3, 2, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Returns list of object numbers of OcaTimeSource instances in this
   * device. Return value indicates whether list was successfully
   * retrieved.
   * @retval {Promise}
   */
  GetTimeSources()
  {
    let rs = OcaDeviceTimeManager_GetTimeSources_rs;
    if (!rs) rs = OcaDeviceTimeManager_GetTimeSources_rs = new signature(LIST(UINT32));
    const cmd = new CommandRrq(this.ono, 3, 3, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Retrieves ONo of current time source object, or zero if none. Return
   * value indicates whether value was successfully retrieved.
   * @retval {Promise}
   */
  GetCurrentDeviceTimeSource()
  {
    let rs = OcaDeviceTimeManager_GetCurrentDeviceTimeSource_rs;
    if (!rs) rs = OcaDeviceTimeManager_GetCurrentDeviceTimeSource_rs = new signature(UINT32);
    const cmd = new CommandRrq(this.ono, 3, 4, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets ONo of current time source object, or zero if none. Return value
   * indicates whether value was successfully retrieved.
   * @param TimeSourceONo {OcaONo}
   *
   * @retval {Promise}
   */
  SetCurrentDeviceTimeSource(TimeSourceONo)
  {
    let as = OcaDeviceTimeManager_SetCurrentDeviceTimeSource_as;
    if (!as) as = OcaDeviceTimeManager_SetCurrentDeviceTimeSource_as = new signature(UINT32);
    const cmd = new CommandRrq(this.ono, 3, 5, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Event that is triggered when the value of TimeSources changes.
   * @type {PropertyEvent}
   */
  get OnTimeSourcesChanged()
  {
    const event = this._TimeSourcesChanged;

    if (event) return event;

    return this._TimeSourcesChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 1), new signature(LIST(UINT32)));
  }

  /**
   * Event that is triggered when the value of CurrentDeviceTimeSource changes.
   * @type {PropertyEvent}
   */
  get OnCurrentDeviceTimeSourceChanged()
  {
    const event = this._CurrentDeviceTimeSourceChanged;

    if (event) return event;

    return this._CurrentDeviceTimeSourceChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 1), new signature(UINT32));
  }

  static get_properties()
  {
    if (!OcaDeviceTimeManager_p)
    {
      OcaDeviceTimeManager_p = new Properties([
          new Property("TimeSources", new signature(LIST(UINT32)), 3, 1, false, false, null),
          new Property("CurrentDeviceTimeSource", new signature(UINT32), 3, 1, false, false, null),
        ], 3, OcaManager.get_properties());
    }

    return OcaDeviceTimeManager_p;
  }

  static GetPropertySync()
  {
    let sync = OcaDeviceTimeManager_sync;
    if (!sync)
    {
      OcaDeviceTimeManager_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._TimeSourcesChanged) event.Dispose();
    if (event = this._CurrentDeviceTimeSourceChanged) event.Dispose();
  }
}


let OcaTaskManager_Control_as = null;
let OcaTaskManager_GetState_rs = null;
let OcaTaskManager_GetTasks_rs = null;
let OcaTaskManager_GetTaskGroups_rs = null;
let OcaTaskManager_AddSlot_as = null;
let OcaTaskManager_DeleteSlot_as = null;
let OcaTaskManager_GetSlots_rs = null;
let OcaTaskManager_p = null;

let OcaTaskManager_sync = null;

/**
 * Optional manager that collects OcaTask and OcaTaskGroup objects. Tasks
 * are device actions that start, execute, and (normally) stop. <ul>
 * <li>May be instantiated once in any device. </li> </ul> <ul> <li>If
 * instantiated, object number must be 11.</li> </ul> <b>OcaTaskManager
 * </b>offers global control over tasks in the device. <ul> <li>Device
 * task processing state is <b>Enabled </b>by default. In <b>Enabled
 * </b>state, tasks may be running.</li> </ul> <ul> <li>Device task
 * processing state may be <b>Disabled </b>by the <b>OcaTaskManager
 * Disable </b>command. </li> <li>The <b>Disable </b>command will succeed
 * only if no tasks are running. </li> </ul> Tasks may be stopped by:
 * <ul> <li>passing the <b>OcaTaskManager </b>a <b>Stop </b>or <b>Abort
 * </b>command, which will stop all tasks in the device; or</li>
 * <li>passing a <b>Stop </b>or <b>Abort </b>command to each
 * <b>OcaTaskGroup </b>agent, which will stop all the tasks in the given
 * task groups; or </li> <li>passing a <b>Stop </b>or <b>Abort
 * </b>command to each task individually.</li> </ul> Locking the
 * <b>OcaTaskManager </b>object blocks all task starting and stopping
 * commands from controllers other than the one that owns the lock, and
 * prevents automatic activation of prescheduled tasks. Locking does not
 * affect execution of running tasks.
 * @extends OcaManager
 */
export class OcaTaskManager extends OcaManager
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0003\u000b";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 1;
  }

  /**
   * Current state of task processing. State is Disabled after a Disable
   * command has been received, Enabled otherwise.
   */
  static get State()
  {
    return 0;
  }

  /**
   * Map of OcaTask object numbers to OcaTaskGroup object numbers. If a
   * task does not belong to a group, its object number is zero.
   */
  static get Tasks()
  {
    return 0;
  }

  /**
   * Map of OcaTaskGroup IDs to OcaTaskGroup object numbers.
   */
  static get TaskGroups()
  {
    return 0;
  }

  /**
   * Map of OcaSlot IDs to count of tasks defined in each slot.
   */
  static get Slots()
  {
    return 0;
  }


  /**
   * Controls all tasks in device. Return value indicates whether tasks
   * were successfully controlled.
   * @param Command {OcaTaskCommand}
   *
   * @retval {Promise}
   */
  Control(Command)
  {
    let as = OcaTaskManager_Control_as;
    if (!as) as = OcaTaskManager_Control_as = new signature(OcaTaskCommand);
    const cmd = new CommandRrq(this.ono, 3, 1, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets value of property <b>State</b>. Return value indicates whether
   * value was successfully retrieved.
   * @retval {Promise}
   */
  GetState()
  {
    let rs = OcaTaskManager_GetState_rs;
    if (!rs) rs = OcaTaskManager_GetState_rs = new signature(OcaTaskManagerState);
    const cmd = new CommandRrq(this.ono, 3, 2, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets list of ONos of tasks in device. Return value indicates whether
   * list was successfully retrieved.
   * @retval {Promise}
   */
  GetTasks()
  {
    let rs = OcaTaskManager_GetTasks_rs;
    if (!rs) rs = OcaTaskManager_GetTasks_rs = new signature(MAP(UINT32, UINT32));
    const cmd = new CommandRrq(this.ono, 3, 3, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets list of ONos of tasks in device. Return value indicates whether
   * list was successfully retrieved.
   * @retval {Promise}
   */
  GetTaskGroups()
  {
    let rs = OcaTaskManager_GetTaskGroups_rs;
    if (!rs) rs = OcaTaskManager_GetTaskGroups_rs = new signature(MAP(UINT16, UINT32));
    const cmd = new CommandRrq(this.ono, 3, 4, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Adds task slot to device. Return value indicates whether slot was
   * successfully added. Not implemented if device does not use slots.
   * @param SlotID {OcaTaskSlotID}
   *
   * @retval {Promise}
   */
  AddSlot(SlotID)
  {
    let as = OcaTaskManager_AddSlot_as;
    if (!as) as = OcaTaskManager_AddSlot_as = new signature(UINT16);
    const cmd = new CommandRrq(this.ono, 3, 5, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Deletes task slot from device. Return value indicates whether slot was
   * successfully deleted. Not implemented if device does not use slots.
   * @param SlotID {OcaTaskSlotID}
   *
   * @retval {Promise}
   */
  DeleteSlot(SlotID)
  {
    let as = OcaTaskManager_DeleteSlot_as;
    if (!as) as = OcaTaskManager_DeleteSlot_as = new signature(UINT16);
    const cmd = new CommandRrq(this.ono, 3, 6, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets value of property <b>Slots</b>. Return value indicates whether
   * the value was successfully retrieved. Not implemented if device does
   * not use slots.
   * @retval {Promise}
   */
  GetSlots()
  {
    let rs = OcaTaskManager_GetSlots_rs;
    if (!rs) rs = OcaTaskManager_GetSlots_rs = new signature(MAP(UINT16, UINT16));
    const cmd = new CommandRrq(this.ono, 3, 7, 0);
    return this.device.send_command(cmd, rs);
  }

  static get_properties()
  {
    if (!OcaTaskManager_p)
    {
      OcaTaskManager_p = new Properties([
          new Property("State", new signature(OcaTaskManagerState), 3, 1, true, true, null),
          new Property("Tasks", new signature(MAP(UINT32, UINT32)), 3, 2, true, true, null),
          new Property("TaskGroups", new signature(MAP(UINT16, UINT32)), 3, 3, true, true, null),
          new Property("Slots", new signature(MAP(UINT16, UINT16)), 3, 4, true, true, null),
        ], 3, OcaManager.get_properties());
    }

    return OcaTaskManager_p;
  }

  static GetPropertySync()
  {
    let sync = OcaTaskManager_sync;
    if (!sync)
    {
      OcaTaskManager_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
  }
}


let OcaCodingManager_GetAvailableEncodingSchemes_rs = null;
let OcaCodingManager_GetAvailableDecodingSchemes_rs = null;
let OcaCodingManager_p = null;

let OcaCodingManager_sync = null;

/**
 * Optional manager that collects all media decoders/encoders (Codecs)
 * which the device owns. <ul> <li>Must be instantiated in every device
 * that implements more than one media encoding scheme and/or more than
 * one media decoding scheme. </li> </ul> <ul> <li>If instantiated,
 * object number must be 12.</li> </ul>
 * @extends OcaManager
 */
export class OcaCodingManager extends OcaManager
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._AvailableEncodingSchemesChanged = null;
    this._AvailableDecodingSchemesChanged = null;
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0003\f";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 1;
  }


  /**
   * Retrieves the map of available encoding schemes, indexed by scheme ID.
   * Return value indicates success of the retrieval.
   * @retval {Promise}
   */
  GetAvailableEncodingSchemes()
  {
    let rs = OcaCodingManager_GetAvailableEncodingSchemes_rs;
    if (!rs) rs = OcaCodingManager_GetAvailableEncodingSchemes_rs = new signature(MAP(UINT16, STRING));
    const cmd = new CommandRrq(this.ono, 3, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Retrieves the map of available decoding schemes, indexed by scheme ID.
   * Return value indicates success of the retrieval.
   * @retval {Promise}
   */
  GetAvailableDecodingSchemes()
  {
    let rs = OcaCodingManager_GetAvailableDecodingSchemes_rs;
    if (!rs) rs = OcaCodingManager_GetAvailableDecodingSchemes_rs = new signature(MAP(UINT16, STRING));
    const cmd = new CommandRrq(this.ono, 3, 2, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Event that is triggered when the value of AvailableEncodingSchemes changes.
   * @type {PropertyEvent}
   */
  get OnAvailableEncodingSchemesChanged()
  {
    const event = this._AvailableEncodingSchemesChanged;

    if (event) return event;

    return this._AvailableEncodingSchemesChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 1), new signature(MAP(UINT16, STRING)));
  }

  /**
   * Event that is triggered when the value of AvailableDecodingSchemes changes.
   * @type {PropertyEvent}
   */
  get OnAvailableDecodingSchemesChanged()
  {
    const event = this._AvailableDecodingSchemesChanged;

    if (event) return event;

    return this._AvailableDecodingSchemesChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 2), new signature(MAP(UINT16, STRING)));
  }

  static get_properties()
  {
    if (!OcaCodingManager_p)
    {
      OcaCodingManager_p = new Properties([
          new Property("AvailableEncodingSchemes", new signature(MAP(UINT16, STRING)), 3, 1, false, false, null),
          new Property("AvailableDecodingSchemes", new signature(MAP(UINT16, STRING)), 3, 2, false, false, null),
        ], 3, OcaManager.get_properties());
    }

    return OcaCodingManager_p;
  }

  static GetPropertySync()
  {
    let sync = OcaCodingManager_sync;
    if (!sync)
    {
      OcaCodingManager_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._AvailableEncodingSchemesChanged) event.Dispose();
    if (event = this._AvailableDecodingSchemesChanged) event.Dispose();
  }
}


let OcaDiagnosticManager_GetLockStatus_as = null;
let OcaDiagnosticManager_GetLockStatus_rs = null;
let OcaDiagnosticManager_p = null;

let OcaDiagnosticManager_sync = null;

/**
 * Optional manager that provides application diagnostic aids. Unlike
 * other manager classes, OcaDiagnosticManager may be subclassed to
 * provide proprietary application diagnostic enhancements. <ul> <li>May
 * be instantiated once in any device. </li> <li>If instantiated, object
 * number must be 13.</li> </ul>
 * @extends OcaManager
 */
export class OcaDiagnosticManager extends OcaManager
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
  }

  /**
   * Number that uniquely identifies the class. Note that this differs from
   * the object number, which identifies the instantiated object. This
   * property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0003\r";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 1;
  }


  /**
   * Retrieves a text description of the given object's lock status. Return
   * value indicates success of the retrieval.
   * @param ONo {OcaONo}
   *
   * @retval {Promise}
   */
  GetLockStatus(ONo)
  {
    let as = OcaDiagnosticManager_GetLockStatus_as;
    if (!as) as = OcaDiagnosticManager_GetLockStatus_as = new signature(UINT32);
    let rs = OcaDiagnosticManager_GetLockStatus_rs;
    if (!rs) rs = OcaDiagnosticManager_GetLockStatus_rs = new signature(STRING);
    const cmd = new CommandRrq(this.ono, 3, 1, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd, rs);
  }

  static get_properties()
  {
    if (!OcaDiagnosticManager_p)
    {
      OcaDiagnosticManager_p = new Properties([
        ], 3, OcaManager.get_properties());
    }

    return OcaDiagnosticManager_p;
  }

  static GetPropertySync()
  {
    let sync = OcaDiagnosticManager_sync;
    if (!sync)
    {
      OcaDiagnosticManager_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
  }
}


let OcaNetworkSignalChannel_AddToConnector_as = null;
let OcaNetworkSignalChannel_GetConnectorPins_rs = null;
let OcaNetworkSignalChannel_GetIDAdvertised_rs = null;
let OcaNetworkSignalChannel_GetNetwork_rs = null;
let OcaNetworkSignalChannel_GetRemoteChannelID_rs = null;
let OcaNetworkSignalChannel_GetSourceOrSink_rs = null;
let OcaNetworkSignalChannel_GetStatus_rs = null;
let OcaNetworkSignalChannel_RemoveFromConnector_as = null;
let OcaNetworkSignalChannel_SetIDAdvertised_as = null;
let OcaNetworkSignalChannel_SetNetwork_as = null;
let OcaNetworkSignalChannel_SetRemoteChannelID_as = null;
let OcaNetworkSignalChannel_p = null;

let OcaNetworkSignalChannel_sync = null;

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
export class OcaNetworkSignalChannel extends OcaWorker
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._ConnectorPinsChanged = null;
    this._IDAdvertisedChanged = null;
    this._NetworkChanged = null;
    this._RemoteChannelIDChanged = null;
    this._SourceOrSinkChanged = null;
    this._StatusChanged = null;
  }

  /**
   * ID of this class
   */
  static get ClassID()
  {
    return "\u0001\u0001\u0006";
  }

  /**
   * Version number of this class
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Adds the object number of the stream connector object to which this
   * media port belongs, and specifies on what index of the stream
   * connector this channel can be found. Return status indicates success
   * of operation.
   * @param Connector {OcaONo}
   *
   * @param Index {OcaStreamConnectorPinIndex}
   *
   * @retval {Promise}
   */
  AddToConnector(Connector, Index)
  {
    let as = OcaNetworkSignalChannel_AddToConnector_as;
    if (!as) as = OcaNetworkSignalChannel_AddToConnector_as = new signature(UINT32, UINT16);
    const cmd = new CommandRrq(this.ono, 3, 6, 2,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the object number of the stream connector object to which this
   * media port belongs, if any. If port does not belong to a stream
   * connector, returns zero. Return status indicates success of operation.
   * @retval {Promise}
   */
  GetConnectorPins()
  {
    let rs = OcaNetworkSignalChannel_GetConnectorPins_rs;
    if (!rs) rs = OcaNetworkSignalChannel_GetConnectorPins_rs = new signature(MAP(UINT32, UINT16));
    const cmd = new CommandRrq(this.ono, 3, 5, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the value of the IDAdvertised property. Return status indicates
   * success of operation.
   * @retval {Promise}
   */
  GetIDAdvertised()
  {
    let rs = OcaNetworkSignalChannel_GetIDAdvertised_rs;
    if (!rs) rs = OcaNetworkSignalChannel_GetIDAdvertised_rs = new signature(BLOB);
    const cmd = new CommandRrq(this.ono, 3, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the object number of the stream network object to which this
   * media port belongs. Return status indicates success of operation.
   * @retval {Promise}
   */
  GetNetwork()
  {
    let rs = OcaNetworkSignalChannel_GetNetwork_rs;
    if (!rs) rs = OcaNetworkSignalChannel_GetNetwork_rs = new signature(UINT32);
    const cmd = new CommandRrq(this.ono, 3, 3, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the remote channel ID to which this channel is connected. Empty
   * if the channel is not connected (at least not directly to another
   * channel). For stream-oriented connection management this functionality
   * is not used (i.e. the remote channel ID will always be empty).
   * @retval {Promise}
   */
  GetRemoteChannelID()
  {
    let rs = OcaNetworkSignalChannel_GetRemoteChannelID_rs;
    if (!rs) rs = OcaNetworkSignalChannel_GetRemoteChannelID_rs = new signature(BLOB);
    const cmd = new CommandRrq(this.ono, 3, 8, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the value of the SourceOrSink property. Return status indicates
   * success of operation.
   * @retval {Promise}
   */
  GetSourceOrSink()
  {
    let rs = OcaNetworkSignalChannel_GetSourceOrSink_rs;
    if (!rs) rs = OcaNetworkSignalChannel_GetSourceOrSink_rs = new signature(OcaNetworkMediaSourceOrSink);
    const cmd = new CommandRrq(this.ono, 3, 10, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the value of the Status property. Return status indicates success
   * of operation.
   * @retval {Promise}
   */
  GetStatus()
  {
    let rs = OcaNetworkSignalChannel_GetStatus_rs;
    if (!rs) rs = OcaNetworkSignalChannel_GetStatus_rs = new signature(OcaNetworkSignalChannelStatus);
    const cmd = new CommandRrq(this.ono, 3, 11, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Removes this channel from the passed stream connector. Return status
   * indicates success of operation.
   * @param Connector {OcaONo}
   *
   * @retval {Promise}
   */
  RemoveFromConnector(Connector)
  {
    let as = OcaNetworkSignalChannel_RemoveFromConnector_as;
    if (!as) as = OcaNetworkSignalChannel_RemoveFromConnector_as = new signature(UINT32);
    const cmd = new CommandRrq(this.ono, 3, 7, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Sets the value of the IDAdvertised property. Return status indicates
   * success of operation.
   * @param IDAdvertised {OcaNetworkSignalChannelID}
   *
   * @retval {Promise}
   */
  SetIDAdvertised(IDAdvertised)
  {
    let as = OcaNetworkSignalChannel_SetIDAdvertised_as;
    if (!as) as = OcaNetworkSignalChannel_SetIDAdvertised_as = new signature(BLOB);
    const cmd = new CommandRrq(this.ono, 3, 2, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Sets the object number of the stream network object to which this
   * media port belongs. Return status indicates success of operation. Only
   * implemented for reconfigurable devices.
   * @param Network {OcaONo}
   *
   * @retval {Promise}
   */
  SetNetwork(Network)
  {
    let as = OcaNetworkSignalChannel_SetNetwork_as;
    if (!as) as = OcaNetworkSignalChannel_SetNetwork_as = new signature(UINT32);
    const cmd = new CommandRrq(this.ono, 3, 4, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Sets the remote channel ID to which this channel must be connected.
   * Only used for channel-oriented connection management. For
   * stream-oriented connection management this method is not used.
   * Clearing the remote channel ID (i.e. tearing down the connection) can
   * be done by passing an empty remote channel ID as parameter.
   * @param RemoteChannelID {OcaNetworkSignalChannelID}
   *
   * @retval {Promise}
   */
  SetRemoteChannelID(RemoteChannelID)
  {
    let as = OcaNetworkSignalChannel_SetRemoteChannelID_as;
    if (!as) as = OcaNetworkSignalChannel_SetRemoteChannelID_as = new signature(BLOB);
    const cmd = new CommandRrq(this.ono, 3, 9, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Event that is triggered when the value of ConnectorPins changes.
   * @type {PropertyEvent}
   */
  get OnConnectorPinsChanged()
  {
    const event = this._ConnectorPinsChanged;

    if (event) return event;

    return this._ConnectorPinsChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 3), new signature(MAP(UINT32, UINT16)));
  }

  /**
   * Event that is triggered when the value of IDAdvertised changes.
   * @type {PropertyEvent}
   */
  get OnIDAdvertisedChanged()
  {
    const event = this._IDAdvertisedChanged;

    if (event) return event;

    return this._IDAdvertisedChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 1), new signature(BLOB));
  }

  /**
   * Event that is triggered when the value of Network changes.
   * @type {PropertyEvent}
   */
  get OnNetworkChanged()
  {
    const event = this._NetworkChanged;

    if (event) return event;

    return this._NetworkChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 2), new signature(UINT32));
  }

  /**
   * Event that is triggered when the value of RemoteChannelID changes.
   * @type {PropertyEvent}
   */
  get OnRemoteChannelIDChanged()
  {
    const event = this._RemoteChannelIDChanged;

    if (event) return event;

    return this._RemoteChannelIDChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 4), new signature(BLOB));
  }

  /**
   * Event that is triggered when the value of SourceOrSink changes.
   * @type {PropertyEvent}
   */
  get OnSourceOrSinkChanged()
  {
    const event = this._SourceOrSinkChanged;

    if (event) return event;

    return this._SourceOrSinkChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 5), new signature(OcaNetworkMediaSourceOrSink));
  }

  /**
   * Event that is triggered when the value of Status changes.
   * @type {PropertyEvent}
   */
  get OnStatusChanged()
  {
    const event = this._StatusChanged;

    if (event) return event;

    return this._StatusChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 6), new signature(OcaNetworkSignalChannelStatus));
  }

  static get_properties()
  {
    if (!OcaNetworkSignalChannel_p)
    {
      OcaNetworkSignalChannel_p = new Properties([
          new Property("ConnectorPins", new signature(MAP(UINT32, UINT16)), 3, 3, false, false, null),
          new Property("IDAdvertised", new signature(BLOB), 3, 1, false, false, null),
          new Property("Network", new signature(UINT32), 3, 2, false, false, null),
          new Property("RemoteChannelID", new signature(BLOB), 3, 4, false, false, null),
          new Property("SourceOrSink", new signature(OcaNetworkMediaSourceOrSink), 3, 5, false, false, null),
          new Property("Status", new signature(OcaNetworkSignalChannelStatus), 3, 6, false, false, null),
        ], 3, OcaWorker.get_properties());
    }

    return OcaNetworkSignalChannel_p;
  }

  static GetPropertySync()
  {
    let sync = OcaNetworkSignalChannel_sync;
    if (!sync)
    {
      OcaNetworkSignalChannel_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._ConnectorPinsChanged) event.Dispose();
    if (event = this._IDAdvertisedChanged) event.Dispose();
    if (event = this._NetworkChanged) event.Dispose();
    if (event = this._RemoteChannelIDChanged) event.Dispose();
    if (event = this._SourceOrSinkChanged) event.Dispose();
    if (event = this._StatusChanged) event.Dispose();
  }
}


let OcaNetwork_GetLinkType_rs = null;
let OcaNetwork_GetIDAdvertised_rs = null;
let OcaNetwork_SetIDAdvertised_as = null;
let OcaNetwork_GetControlProtocol_rs = null;
let OcaNetwork_GetMediaProtocol_rs = null;
let OcaNetwork_GetStatus_rs = null;
let OcaNetwork_GetStatistics_rs = null;
let OcaNetwork_GetSystemInterfaces_rs = null;
let OcaNetwork_SetSystemInterfaces_as = null;
let OcaNetwork_GetMediaPorts_rs = null;
let OcaNetwork_p = null;

let OcaNetwork_sync = null;

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
export class OcaNetwork extends OcaAgent
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._IDAdvertisedChanged = null;
    this._ControlProtocolChanged = null;
    this._MediaProtocolChanged = null;
    this._StatusChanged = null;
    this._SystemInterfacesChanged = null;
    this._MediaPortsChanged = null;
    this._StatisticsChanged = null;
  }

  /**
   * This property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0002\u0001";
  }

  /**
   * This property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }

  /**
   * Network link type - e.g. wired Ethernet, USB, ... See the
   * OcaNetworkType enum for details. This is a read-only property whose
   * value is fixed to the class that is inherited from OcaNetwork to
   * implement each specific type of network.
   */
  static get LinkType()
  {
    return 0;
  }


  /**
   * Gets the network's link type (wired Ethernet, USB, etc.). Return
   * status indicates whether the operation was successful.
   * @retval {Promise}
   */
  GetLinkType()
  {
    let rs = OcaNetwork_GetLinkType_rs;
    if (!rs) rs = OcaNetwork_GetLinkType_rs = new signature(OcaNetworkLinkType);
    const cmd = new CommandRrq(this.ono, 3, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the network's IDAdvertised. Return status indicates whether the
   * operation was successful.
   * @retval {Promise}
   */
  GetIDAdvertised()
  {
    let rs = OcaNetwork_GetIDAdvertised_rs;
    if (!rs) rs = OcaNetwork_GetIDAdvertised_rs = new signature(BLOB);
    const cmd = new CommandRrq(this.ono, 3, 2, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the network's IDAdvertised. Return status indicates whether the
   * operation was successful.
   * @param Name {OcaApplicationNetworkServiceID}
   *
   * @retval {Promise}
   */
  SetIDAdvertised(Name)
  {
    let as = OcaNetwork_SetIDAdvertised_as;
    if (!as) as = OcaNetwork_SetIDAdvertised_as = new signature(BLOB);
    const cmd = new CommandRrq(this.ono, 3, 3, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the network's ControlProtocol property. Return status indicates
   * whether the operation was successful.
   * @retval {Promise}
   */
  GetControlProtocol()
  {
    let rs = OcaNetwork_GetControlProtocol_rs;
    if (!rs) rs = OcaNetwork_GetControlProtocol_rs = new signature(OcaNetworkControlProtocol);
    const cmd = new CommandRrq(this.ono, 3, 4, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the network's MediaProtocol property. This is a deprecated method
   * that always returns the value NONE.
   * @retval {Promise}
   */
  GetMediaProtocol()
  {
    let rs = OcaNetwork_GetMediaProtocol_rs;
    if (!rs) rs = OcaNetwork_GetMediaProtocol_rs = new signature(OcaNetworkMediaProtocol);
    const cmd = new CommandRrq(this.ono, 3, 5, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Retrieves the network's status. Return status indicates whether the
   * status was successfully retrieved.
   * @retval {Promise}
   */
  GetStatus()
  {
    let rs = OcaNetwork_GetStatus_rs;
    if (!rs) rs = OcaNetwork_GetStatus_rs = new signature(OcaNetworkStatus);
    const cmd = new CommandRrq(this.ono, 3, 6, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Retrieves network error statistics counter values. Return status
   * indicates whether the values were successfully retrieved.
   * @retval {Promise}
   */
  GetStatistics()
  {
    let rs = OcaNetwork_GetStatistics_rs;
    if (!rs) rs = OcaNetwork_GetStatistics_rs = new signature(OcaNetworkStatistics);
    const cmd = new CommandRrq(this.ono, 3, 7, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Resets network error statistics counters. Return status indicates
   * whether the counters were successfully reset.
   * @retval {Promise}
   */
  ResetStatistics()
  {
    const cmd = new CommandRrq(this.ono, 3, 8, 0);
    return this.device.send_command(cmd);
  }

  /**
   * Gets the list of system interface IDs that this network is using.
   * Return status indicates success of the operation.
   * @retval {Promise}
   */
  GetSystemInterfaces()
  {
    let rs = OcaNetwork_GetSystemInterfaces_rs;
    if (!rs) rs = OcaNetwork_GetSystemInterfaces_rs = new signature(LIST(OcaNetworkSystemInterfaceID));
    const cmd = new CommandRrq(this.ono, 3, 9, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the list of system interface IDs that this network will use.
   * Return status indicates success of the operation. This method is not
   * implemented by all network implementations.
   * @param Interfaces {OcaList}
   *
   * @retval {Promise}
   */
  SetSystemInterfaces(Interfaces)
  {
    let as = OcaNetwork_SetSystemInterfaces_as;
    if (!as) as = OcaNetwork_SetSystemInterfaces_as = new signature(LIST(OcaNetworkSystemInterfaceID));
    const cmd = new CommandRrq(this.ono, 3, 10, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Deprecated method. Always returns status INVALID_REQUEST. Media
   * transport is now managed by the class <b>OcaStreamNetwork.</b>
   * @retval {Promise}
   */
  GetMediaPorts()
  {
    let rs = OcaNetwork_GetMediaPorts_rs;
    if (!rs) rs = OcaNetwork_GetMediaPorts_rs = new signature(LIST(UINT32));
    const cmd = new CommandRrq(this.ono, 3, 11, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Start up this network.
   * @retval {Promise}
   */
  Startup()
  {
    const cmd = new CommandRrq(this.ono, 3, 12, 0);
    return this.device.send_command(cmd);
  }

  /**
   * Shut down this network.
   * @retval {Promise}
   */
  Shutdown()
  {
    const cmd = new CommandRrq(this.ono, 3, 13, 0);
    return this.device.send_command(cmd);
  }

  /**
   * Event that is triggered when the value of IDAdvertised changes.
   * @type {PropertyEvent}
   */
  get OnIDAdvertisedChanged()
  {
    const event = this._IDAdvertisedChanged;

    if (event) return event;

    return this._IDAdvertisedChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 2), new signature(BLOB));
  }

  /**
   * Event that is triggered when the value of ControlProtocol changes.
   * @type {PropertyEvent}
   */
  get OnControlProtocolChanged()
  {
    const event = this._ControlProtocolChanged;

    if (event) return event;

    return this._ControlProtocolChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 3), new signature(OcaNetworkControlProtocol));
  }

  /**
   * Event that is triggered when the value of MediaProtocol changes.
   * @type {PropertyEvent}
   */
  get OnMediaProtocolChanged()
  {
    const event = this._MediaProtocolChanged;

    if (event) return event;

    return this._MediaProtocolChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 4), new signature(OcaNetworkMediaProtocol));
  }

  /**
   * Event that is triggered when the value of Status changes.
   * @type {PropertyEvent}
   */
  get OnStatusChanged()
  {
    const event = this._StatusChanged;

    if (event) return event;

    return this._StatusChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 5), new signature(OcaNetworkStatus));
  }

  /**
   * Event that is triggered when the value of SystemInterfaces changes.
   * @type {PropertyEvent}
   */
  get OnSystemInterfacesChanged()
  {
    const event = this._SystemInterfacesChanged;

    if (event) return event;

    return this._SystemInterfacesChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 6), new signature(LIST(OcaNetworkSystemInterfaceID)));
  }

  /**
   * Event that is triggered when the value of MediaPorts changes.
   * @type {PropertyEvent}
   */
  get OnMediaPortsChanged()
  {
    const event = this._MediaPortsChanged;

    if (event) return event;

    return this._MediaPortsChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 7), new signature(LIST(UINT32)));
  }

  /**
   * Event that is triggered when the value of Statistics changes.
   * @type {PropertyEvent}
   */
  get OnStatisticsChanged()
  {
    const event = this._StatisticsChanged;

    if (event) return event;

    return this._StatisticsChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 8), new signature(OcaNetworkStatistics));
  }

  static get_properties()
  {
    if (!OcaNetwork_p)
    {
      OcaNetwork_p = new Properties([
          new Property("LinkType", new signature(OcaNetworkLinkType), 3, 1, true, true, null),
          new Property("IDAdvertised", new signature(BLOB), 3, 2, false, false, null),
          new Property("ControlProtocol", new signature(OcaNetworkControlProtocol), 3, 3, false, false, null),
          new Property("MediaProtocol", new signature(OcaNetworkMediaProtocol), 3, 4, false, false, null),
          new Property("Status", new signature(OcaNetworkStatus), 3, 5, false, false, null),
          new Property("SystemInterfaces", new signature(LIST(OcaNetworkSystemInterfaceID)), 3, 6, false, false, null),
          new Property("MediaPorts", new signature(LIST(UINT32)), 3, 7, false, false, null),
          new Property("Statistics", new signature(OcaNetworkStatistics), 3, 8, false, false, null),
        ], 3, OcaAgent.get_properties());
    }

    return OcaNetwork_p;
  }

  static GetPropertySync()
  {
    let sync = OcaNetwork_sync;
    if (!sync)
    {
      OcaNetwork_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._IDAdvertisedChanged) event.Dispose();
    if (event = this._ControlProtocolChanged) event.Dispose();
    if (event = this._MediaProtocolChanged) event.Dispose();
    if (event = this._StatusChanged) event.Dispose();
    if (event = this._SystemInterfacesChanged) event.Dispose();
    if (event = this._MediaPortsChanged) event.Dispose();
    if (event = this._StatisticsChanged) event.Dispose();
  }
}


let OcaRamper_Control_as = null;
let OcaRamper_GetState_rs = null;
let OcaRamper_GetRampedProperty_rs = null;
let OcaRamper_SetRampedProperty_as = null;
let OcaRamper_GetTimeMode_rs = null;
let OcaRamper_SetTimeMode_as = null;
let OcaRamper_GetStartTime_rs = null;
let OcaRamper_SetStartTime_as = null;
let OcaRamper_GetDuration_rs = null;
let OcaRamper_SetDuration_as = null;
let OcaRamper_GetInterpolationLaw_rs = null;
let OcaRamper_SetInterpolationLaw_as = null;
let OcaRamper_GetGoal_rs = null;
let OcaRamper_SetGoal_as = null;
let OcaRamper_p = null;

let OcaRamper_sync = null;

/**
 * <b>DEPRECATED CLASS</b> <i>Replaced by </i><b><i>OcaRamperTask</i></b>
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
export class OcaRamper extends OcaAgent
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._StateChanged = null;
    this._RampedPropertyChanged = null;
    this._TimeModeChanged = null;
    this._StartTimeChanged = null;
    this._DurationChanged = null;
    this._InterpolationLawChanged = null;
    this._GoalChanged = null;
  }

  /**
   * This property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0002\u0003";
  }

  /**
   * This property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Executes the given ramper command. The return value indicates whether
   * the command was successfully executed.
   * @param Command {OcaRamperCommand}
   *
   * @retval {Promise}
   */
  Control(Command)
  {
    let as = OcaRamper_Control_as;
    if (!as) as = OcaRamper_Control_as = new signature(OcaRamperCommand);
    const cmd = new CommandRrq(this.ono, 3, 1, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets current state of ramper. The return value indicates whether the
   * state was successfully retrieved.
   * @retval {Promise}
   */
  GetState()
  {
    let rs = OcaRamper_GetState_rs;
    if (!rs) rs = OcaRamper_GetState_rs = new signature(OcaRamperState);
    const cmd = new CommandRrq(this.ono, 3, 2, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets definition of ramped property. The return value indicates whether
   * the object number was successfully retrieved.
   * @retval {Promise}
   */
  GetRampedProperty()
  {
    let rs = OcaRamper_GetRampedProperty_rs;
    if (!rs) rs = OcaRamper_GetRampedProperty_rs = new signature(OcaProperty);
    const cmd = new CommandRrq(this.ono, 3, 3, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Defines property to be ramped. The return value indicates whether the
   * definition was successful.
   * @param property {OcaProperty}
   *
   * @retval {Promise}
   */
  SetRampedProperty(property)
  {
    let as = OcaRamper_SetRampedProperty_as;
    if (!as) as = OcaRamper_SetRampedProperty_as = new signature(OcaProperty);
    const cmd = new CommandRrq(this.ono, 3, 4, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets ramper time mode (absolute or relative). The return value
   * indicates whether the time mode was successfully retrieved.
   * @retval {Promise}
   */
  GetTimeMode()
  {
    let rs = OcaRamper_GetTimeMode_rs;
    if (!rs) rs = OcaRamper_GetTimeMode_rs = new signature(OcaTimeMode);
    const cmd = new CommandRrq(this.ono, 3, 5, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets ramper time mode (absolute or relative). The return value
   * indicates whether the time mode was successfully set.
   * @param TimeMode {OcaTimeMode}
   *
   * @retval {Promise}
   */
  SetTimeMode(TimeMode)
  {
    let as = OcaRamper_SetTimeMode_as;
    if (!as) as = OcaRamper_SetTimeMode_as = new signature(OcaTimeMode);
    const cmd = new CommandRrq(this.ono, 3, 6, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets ramp start time. The return value indicates whether the start
   * time was successfully retrieved.
   * @retval {Promise}
   */
  GetStartTime()
  {
    let rs = OcaRamper_GetStartTime_rs;
    if (!rs) rs = OcaRamper_GetStartTime_rs = new signature(UINT64);
    const cmd = new CommandRrq(this.ono, 3, 7, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets ramper start time. The return value indicates whether the start
   * time was successfully set.
   * @param TimeMode {OcaTimeOfDay}
   *
   * @retval {Promise}
   */
  SetStartTime(TimeMode)
  {
    let as = OcaRamper_SetStartTime_as;
    if (!as) as = OcaRamper_SetStartTime_as = new signature(UINT64);
    const cmd = new CommandRrq(this.ono, 3, 8, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets ramp duration. The return value indicates whether the duration
   * was successfully retrieved.
   * @retval {Promise}
   */
  GetDuration()
  {
    let rs = OcaRamper_GetDuration_rs;
    if (!rs) rs = OcaRamper_GetDuration_rs = new signature(FLOAT32, FLOAT32, FLOAT32);
    const cmd = new CommandRrq(this.ono, 3, 9, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets ramp duration. The return value indicates whether the duration
   * was successfully set.
   * @param Duration {OcaTimeInterval}
   *
   * @retval {Promise}
   */
  SetDuration(Duration)
  {
    let as = OcaRamper_SetDuration_as;
    if (!as) as = OcaRamper_SetDuration_as = new signature(FLOAT32);
    const cmd = new CommandRrq(this.ono, 3, 10, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Retrieves interpolation law setting. The return value indicates
   * whether the setting was successfully retrieved.
   * @retval {Promise}
   */
  GetInterpolationLaw()
  {
    let rs = OcaRamper_GetInterpolationLaw_rs;
    if (!rs) rs = OcaRamper_GetInterpolationLaw_rs = new signature(OcaRamperInterpolationLaw);
    const cmd = new CommandRrq(this.ono, 3, 11, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets ramp interpolation law. The return value indicates whether the
   * law was successfully set.
   * @param law {OcaRamperInterpolationLaw}
   *
   * @retval {Promise}
   */
  SetInterpolationLaw(law)
  {
    let as = OcaRamper_SetInterpolationLaw_as;
    if (!as) as = OcaRamper_SetInterpolationLaw_as = new signature(OcaRamperInterpolationLaw);
    const cmd = new CommandRrq(this.ono, 3, 12, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Retrieves ramp goal value. The return value indicates whether the
   * duration was successfully retrieved.
   * @retval {Promise}
   */
  GetGoal()
  {
    let rs = OcaRamper_GetGoal_rs;
    if (!rs) rs = OcaRamper_GetGoal_rs = new signature(FLOAT64);
    const cmd = new CommandRrq(this.ono, 3, 13, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets ramp goal value. The return value indicates whether the duration
   * was successfully set.
   * @param goal {OcaFloat64}
   *
   * @retval {Promise}
   */
  SetGoal(goal)
  {
    let as = OcaRamper_SetGoal_as;
    if (!as) as = OcaRamper_SetGoal_as = new signature(FLOAT64);
    const cmd = new CommandRrq(this.ono, 3, 14, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Event that is triggered when the value of State changes.
   * @type {PropertyEvent}
   */
  get OnStateChanged()
  {
    const event = this._StateChanged;

    if (event) return event;

    return this._StateChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 1), new signature(OcaRamperState));
  }

  /**
   * Event that is triggered when the value of RampedProperty changes.
   * @type {PropertyEvent}
   */
  get OnRampedPropertyChanged()
  {
    const event = this._RampedPropertyChanged;

    if (event) return event;

    return this._RampedPropertyChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 2), new signature(OcaProperty));
  }

  /**
   * Event that is triggered when the value of TimeMode changes.
   * @type {PropertyEvent}
   */
  get OnTimeModeChanged()
  {
    const event = this._TimeModeChanged;

    if (event) return event;

    return this._TimeModeChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 3), new signature(OcaTimeMode));
  }

  /**
   * Event that is triggered when the value of StartTime changes.
   * @type {PropertyEvent}
   */
  get OnStartTimeChanged()
  {
    const event = this._StartTimeChanged;

    if (event) return event;

    return this._StartTimeChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 4), new signature(UINT64));
  }

  /**
   * Event that is triggered when the value of Duration changes.
   * @type {PropertyEvent}
   */
  get OnDurationChanged()
  {
    const event = this._DurationChanged;

    if (event) return event;

    return this._DurationChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 5), new signature(FLOAT32));
  }

  /**
   * Event that is triggered when the value of InterpolationLaw changes.
   * @type {PropertyEvent}
   */
  get OnInterpolationLawChanged()
  {
    const event = this._InterpolationLawChanged;

    if (event) return event;

    return this._InterpolationLawChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 6), new signature(OcaRamperInterpolationLaw));
  }

  /**
   * Event that is triggered when the value of Goal changes.
   * @type {PropertyEvent}
   */
  get OnGoalChanged()
  {
    const event = this._GoalChanged;

    if (event) return event;

    return this._GoalChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 7), new signature(FLOAT64));
  }

  static get_properties()
  {
    if (!OcaRamper_p)
    {
      OcaRamper_p = new Properties([
          new Property("State", new signature(OcaRamperState), 3, 1, false, false, null),
          new Property("RampedProperty", new signature(OcaProperty), 3, 2, false, false, null),
          new Property("TimeMode", new signature(OcaTimeMode), 3, 3, false, false, null),
          new Property("StartTime", new signature(UINT64), 3, 4, false, false, null),
          new Property("Duration", new signature(FLOAT32), 3, 5, false, false, null),
          new Property("InterpolationLaw", new signature(OcaRamperInterpolationLaw), 3, 6, false, false, null),
          new Property("Goal", new signature(FLOAT64), 3, 7, false, false, null),
        ], 3, OcaAgent.get_properties());
    }

    return OcaRamper_p;
  }

  static GetPropertySync()
  {
    let sync = OcaRamper_sync;
    if (!sync)
    {
      OcaRamper_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._StateChanged) event.Dispose();
    if (event = this._RampedPropertyChanged) event.Dispose();
    if (event = this._TimeModeChanged) event.Dispose();
    if (event = this._StartTimeChanged) event.Dispose();
    if (event = this._DurationChanged) event.Dispose();
    if (event = this._InterpolationLawChanged) event.Dispose();
    if (event = this._GoalChanged) event.Dispose();
  }
}


let OcaMediaClock_GetType_rs = null;
let OcaMediaClock_SetType_as = null;
let OcaMediaClock_GetDomainID_rs = null;
let OcaMediaClock_SetDomainID_as = null;
let OcaMediaClock_GetSupportedRates_rs = null;
let OcaMediaClock_GetRate_rs = null;
let OcaMediaClock_SetRate_as = null;
let OcaMediaClock_GetLockState_rs = null;
let OcaMediaClock_p = null;

let OcaMediaClock_sync = null;

/**
 * <b>DEPRECATED CLASS</b> <i>Replaced by
 * </i><b><i>OcaMediaClock3</i></b> A media clock, internal or external.
 * @extends OcaAgent
 */
export class OcaMediaClock extends OcaAgent
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._TypeChanged = null;
    this._DomainIDChanged = null;
    this._CurrentRateChanged = null;
    this._LockStateChanged = null;
  }

  /**
   * This property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0002\u0006";
  }

  /**
   * Identifies the interface version of the class. Any change to the class
   * definition leads to a higher class version. This property is an
   * override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }

  /**
   * List of supported rates
   */
  static get RatesSupported()
  {
    return 0;
  }


  /**
   * Gets the value of the <b>Type </b>property. The return value indicates
   * whether the value was successfully retrieved.
   * @retval {Promise}
   */
  GetType()
  {
    let rs = OcaMediaClock_GetType_rs;
    if (!rs) rs = OcaMediaClock_GetType_rs = new signature(OcaMediaClockType);
    const cmd = new CommandRrq(this.ono, 3, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the <b>Type </b>property. The return value indicates
   * whether the value was successfully set. Optional method, may not be
   * supported in all implementations.
   * @param Type {OcaMediaClockType}
   *
   * @retval {Promise}
   */
  SetType(Type)
  {
    let as = OcaMediaClock_SetType_as;
    if (!as) as = OcaMediaClock_SetType_as = new signature(OcaMediaClockType);
    const cmd = new CommandRrq(this.ono, 3, 2, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the value of the <b>DomainID </b>property. The return value
   * indicates whether the value was successfully retrieved.
   * @retval {Promise}
   */
  GetDomainID()
  {
    let rs = OcaMediaClock_GetDomainID_rs;
    if (!rs) rs = OcaMediaClock_GetDomainID_rs = new signature(UINT16);
    const cmd = new CommandRrq(this.ono, 3, 3, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the <b>DomainID </b>property. The return value
   * indicates whether the value was successfully set. Optional method, may
   * not be supported in all implementations.
   * @param ID {OcaUint16}
   *
   * @retval {Promise}
   */
  SetDomainID(ID)
  {
    let as = OcaMediaClock_SetDomainID_as;
    if (!as) as = OcaMediaClock_SetDomainID_as = new signature(UINT16);
    const cmd = new CommandRrq(this.ono, 3, 4, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the list of supported sampling rates. The return value indicates
   * whether the list was successfully retrieved.
   * @retval {Promise}
   */
  GetSupportedRates()
  {
    let rs = OcaMediaClock_GetSupportedRates_rs;
    if (!rs) rs = OcaMediaClock_GetSupportedRates_rs = new signature(LIST(OcaMediaClockRate));
    const cmd = new CommandRrq(this.ono, 3, 5, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the current sampling rate. The return value indicates whether the
   * value was successfully retrieved.
   * @retval {Promise}
   */
  GetRate()
  {
    let rs = OcaMediaClock_GetRate_rs;
    if (!rs) rs = OcaMediaClock_GetRate_rs = new signature(OcaMediaClockRate);
    const cmd = new CommandRrq(this.ono, 3, 6, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the sampling rate. The return value indicates whether the rate
   * was successfully set.
   * @param rate {OcaMediaClockRate}
   *
   * @retval {Promise}
   */
  SetRate(rate)
  {
    let as = OcaMediaClock_SetRate_as;
    if (!as) as = OcaMediaClock_SetRate_as = new signature(OcaMediaClockRate);
    const cmd = new CommandRrq(this.ono, 3, 7, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the current media clock lock state. The return value indicates
   * whether the value was successfully retrieved.
   * @retval {Promise}
   */
  GetLockState()
  {
    let rs = OcaMediaClock_GetLockState_rs;
    if (!rs) rs = OcaMediaClock_GetLockState_rs = new signature(OcaMediaClockLockState);
    const cmd = new CommandRrq(this.ono, 3, 8, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Event that is triggered when the value of Type changes.
   * @type {PropertyEvent}
   */
  get OnTypeChanged()
  {
    const event = this._TypeChanged;

    if (event) return event;

    return this._TypeChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 1), new signature(OcaMediaClockType));
  }

  /**
   * Event that is triggered when the value of DomainID changes.
   * @type {PropertyEvent}
   */
  get OnDomainIDChanged()
  {
    const event = this._DomainIDChanged;

    if (event) return event;

    return this._DomainIDChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 2), new signature(UINT16));
  }

  /**
   * Event that is triggered when the value of CurrentRate changes.
   * @type {PropertyEvent}
   */
  get OnCurrentRateChanged()
  {
    const event = this._CurrentRateChanged;

    if (event) return event;

    return this._CurrentRateChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 4), new signature(OcaMediaClockRate));
  }

  /**
   * Event that is triggered when the value of LockState changes.
   * @type {PropertyEvent}
   */
  get OnLockStateChanged()
  {
    const event = this._LockStateChanged;

    if (event) return event;

    return this._LockStateChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 5), new signature(OcaMediaClockLockState));
  }

  static get_properties()
  {
    if (!OcaMediaClock_p)
    {
      OcaMediaClock_p = new Properties([
          new Property("Type", new signature(OcaMediaClockType), 3, 1, false, false, null),
          new Property("DomainID", new signature(UINT16), 3, 2, false, false, null),
          new Property("RatesSupported", new signature(LIST(OcaMediaClockRate)), 3, 3, true, true, null),
          new Property("CurrentRate", new signature(OcaMediaClockRate), 3, 4, false, false, null),
          new Property("LockState", new signature(OcaMediaClockLockState), 3, 5, false, false, null),
        ], 3, OcaAgent.get_properties());
    }

    return OcaMediaClock_p;
  }

  static GetPropertySync()
  {
    let sync = OcaMediaClock_sync;
    if (!sync)
    {
      OcaMediaClock_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._TypeChanged) event.Dispose();
    if (event = this._DomainIDChanged) event.Dispose();
    if (event = this._CurrentRateChanged) event.Dispose();
    if (event = this._LockStateChanged) event.Dispose();
  }
}


let OcaStreamNetwork_GetLinkType_rs = null;
let OcaStreamNetwork_GetIDAdvertised_rs = null;
let OcaStreamNetwork_SetIDAdvertised_as = null;
let OcaStreamNetwork_GetControlProtocol_rs = null;
let OcaStreamNetwork_GetMediaProtocol_rs = null;
let OcaStreamNetwork_GetStatus_rs = null;
let OcaStreamNetwork_GetStatistics_rs = null;
let OcaStreamNetwork_GetSystemInterfaces_rs = null;
let OcaStreamNetwork_SetSystemInterfaces_as = null;
let OcaStreamNetwork_GetStreamConnectorsSource_rs = null;
let OcaStreamNetwork_SetStreamConnectorsSource_as = null;
let OcaStreamNetwork_GetStreamConnectorsSink_rs = null;
let OcaStreamNetwork_SetStreamConnectorsSink_as = null;
let OcaStreamNetwork_GetSignalChannelsSource_rs = null;
let OcaStreamNetwork_SetSignalChannelsSource_as = null;
let OcaStreamNetwork_GetSignalChannelsSink_rs = null;
let OcaStreamNetwork_SetSignalChannelsSink_as = null;
let OcaStreamNetwork_p = null;

let OcaStreamNetwork_sync = null;

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
export class OcaStreamNetwork extends OcaAgent
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._ControlProtocolChanged = null;
    this._IDAdvertisedChanged = null;
    this._MediaProtocolChanged = null;
    this._SignalChannelsSinkChanged = null;
    this._SignalChannelsSourceChanged = null;
    this._StatisticsChanged = null;
    this._StatusChanged = null;
    this._StreamConnectorsSinkChanged = null;
    this._StreamConnectorsSourceChanged = null;
    this._SystemInterfacesChanged = null;
  }

  /**
   * This property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassID()
  {
    return "\u0001\u0002\n";
  }

  /**
   * This property is an override of the <b>OcaRoot </b>property.
   */
  static get ClassVersion()
  {
    return 2;
  }

  /**
   * Network link type - e.g. wired Ethernet, USB, ... See the
   * OcaNetworkType enum for details. This is a read-only property whose
   * value is fixed to the class that is inherited from OcaNetwork to
   * implement each specific type of network.
   */
  static get LinkType()
  {
    return 0;
  }


  /**
   * Gets the network's link type (wired Ethernet, USB, etc.). Return
   * status indicates whether the operation was successful.
   * @retval {Promise}
   */
  GetLinkType()
  {
    let rs = OcaStreamNetwork_GetLinkType_rs;
    if (!rs) rs = OcaStreamNetwork_GetLinkType_rs = new signature(OcaNetworkLinkType);
    const cmd = new CommandRrq(this.ono, 3, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the network's IDAdvertised. Return status indicates whether the
   * operation was successful.
   * @retval {Promise}
   */
  GetIDAdvertised()
  {
    let rs = OcaStreamNetwork_GetIDAdvertised_rs;
    if (!rs) rs = OcaStreamNetwork_GetIDAdvertised_rs = new signature(BLOB);
    const cmd = new CommandRrq(this.ono, 3, 2, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the network's IDAdvertised. Return status indicates whether the
   * operation was successful.
   * @param Name {OcaNetworkNodeID}
   *
   * @retval {Promise}
   */
  SetIDAdvertised(Name)
  {
    let as = OcaStreamNetwork_SetIDAdvertised_as;
    if (!as) as = OcaStreamNetwork_SetIDAdvertised_as = new signature(BLOB);
    const cmd = new CommandRrq(this.ono, 3, 3, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the network's ControlProtocol property. Return status indicates
   * whether the operation was successful.
   * @retval {Promise}
   */
  GetControlProtocol()
  {
    let rs = OcaStreamNetwork_GetControlProtocol_rs;
    if (!rs) rs = OcaStreamNetwork_GetControlProtocol_rs = new signature(OcaNetworkControlProtocol);
    const cmd = new CommandRrq(this.ono, 3, 4, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the network's MediaProtocol property. Return status indicates
   * whether the operation was successful.
   * @retval {Promise}
   */
  GetMediaProtocol()
  {
    let rs = OcaStreamNetwork_GetMediaProtocol_rs;
    if (!rs) rs = OcaStreamNetwork_GetMediaProtocol_rs = new signature(OcaNetworkMediaProtocol);
    const cmd = new CommandRrq(this.ono, 3, 5, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Retrieves the network's status. Return status indicates whether the
   * status was successfully retrieved.
   * @retval {Promise}
   */
  GetStatus()
  {
    let rs = OcaStreamNetwork_GetStatus_rs;
    if (!rs) rs = OcaStreamNetwork_GetStatus_rs = new signature(OcaNetworkStatus);
    const cmd = new CommandRrq(this.ono, 3, 6, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Retrieves network error statistics counter values. Return status
   * indicates whether the values were successfully retrieved.
   * @retval {Promise}
   */
  GetStatistics()
  {
    let rs = OcaStreamNetwork_GetStatistics_rs;
    if (!rs) rs = OcaStreamNetwork_GetStatistics_rs = new signature(OcaNetworkStatistics);
    const cmd = new CommandRrq(this.ono, 3, 7, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Resets network error statistics counters. Return status indicates
   * whether the counters were successfully reset.
   * @retval {Promise}
   */
  ResetStatistics()
  {
    const cmd = new CommandRrq(this.ono, 3, 8, 0);
    return this.device.send_command(cmd);
  }

  /**
   * Gets the list of system interface IDs that this network is using.
   * Return status indicates success of the operation.
   * @retval {Promise}
   */
  GetSystemInterfaces()
  {
    let rs = OcaStreamNetwork_GetSystemInterfaces_rs;
    if (!rs) rs = OcaStreamNetwork_GetSystemInterfaces_rs = new signature(LIST(OcaNetworkSystemInterfaceID));
    const cmd = new CommandRrq(this.ono, 3, 9, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the list of system interface IDs that this network will use.
   * Return status indicates success of the operation. This method is not
   * implemented by all network implementations.
   * @param Interfaces {OcaList}
   *
   * @retval {Promise}
   */
  SetSystemInterfaces(Interfaces)
  {
    let as = OcaStreamNetwork_SetSystemInterfaces_as;
    if (!as) as = OcaStreamNetwork_SetSystemInterfaces_as = new signature(LIST(OcaNetworkSystemInterfaceID));
    const cmd = new CommandRrq(this.ono, 3, 10, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

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
   * @retval {Promise}
   */
  GetStreamConnectorsSource()
  {
    let rs = OcaStreamNetwork_GetStreamConnectorsSource_rs;
    if (!rs) rs = OcaStreamNetwork_GetStreamConnectorsSource_rs = new signature(LIST(UINT32));
    const cmd = new CommandRrq(this.ono, 3, 11, 0);
    return this.device.send_command(cmd, rs);
  }

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
   * @param StreamConnectors {OcaList}
   *
   * @retval {Promise}
   */
  SetStreamConnectorsSource(StreamConnectors)
  {
    let as = OcaStreamNetwork_SetStreamConnectorsSource_as;
    if (!as) as = OcaStreamNetwork_SetStreamConnectorsSource_as = new signature(LIST(UINT32));
    const cmd = new CommandRrq(this.ono, 3, 12, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

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
   * @retval {Promise}
   */
  GetStreamConnectorsSink()
  {
    let rs = OcaStreamNetwork_GetStreamConnectorsSink_rs;
    if (!rs) rs = OcaStreamNetwork_GetStreamConnectorsSink_rs = new signature(LIST(UINT32));
    const cmd = new CommandRrq(this.ono, 3, 13, 0);
    return this.device.send_command(cmd, rs);
  }

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
   * @param StreamConnectors {OcaList}
   *
   * @retval {Promise}
   */
  SetStreamConnectorsSink(StreamConnectors)
  {
    let as = OcaStreamNetwork_SetStreamConnectorsSink_as;
    if (!as) as = OcaStreamNetwork_SetStreamConnectorsSink_as = new signature(LIST(UINT32));
    const cmd = new CommandRrq(this.ono, 3, 14, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

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
   * @retval {Promise}
   */
  GetSignalChannelsSource()
  {
    let rs = OcaStreamNetwork_GetSignalChannelsSource_rs;
    if (!rs) rs = OcaStreamNetwork_GetSignalChannelsSource_rs = new signature(LIST(UINT32));
    const cmd = new CommandRrq(this.ono, 3, 15, 0);
    return this.device.send_command(cmd, rs);
  }

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
   * @param SignalChannels {OcaList}
   *
   * @retval {Promise}
   */
  SetSignalChannelsSource(SignalChannels)
  {
    let as = OcaStreamNetwork_SetSignalChannelsSource_as;
    if (!as) as = OcaStreamNetwork_SetSignalChannelsSource_as = new signature(LIST(UINT32));
    const cmd = new CommandRrq(this.ono, 3, 16, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

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
   * @retval {Promise}
   */
  GetSignalChannelsSink()
  {
    let rs = OcaStreamNetwork_GetSignalChannelsSink_rs;
    if (!rs) rs = OcaStreamNetwork_GetSignalChannelsSink_rs = new signature(LIST(UINT32));
    const cmd = new CommandRrq(this.ono, 3, 17, 0);
    return this.device.send_command(cmd, rs);
  }

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
   * @param SignalChannels {OcaList}
   *
   * @retval {Promise}
   */
  SetSignalChannelsSink(SignalChannels)
  {
    let as = OcaStreamNetwork_SetSignalChannelsSink_as;
    if (!as) as = OcaStreamNetwork_SetSignalChannelsSink_as = new signature(LIST(UINT32));
    const cmd = new CommandRrq(this.ono, 3, 18, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Start up this network.
   * @retval {Promise}
   */
  Startup()
  {
    const cmd = new CommandRrq(this.ono, 3, 19, 0);
    return this.device.send_command(cmd);
  }

  /**
   * Shut down this network.
   * @retval {Promise}
   */
  Shutdown()
  {
    const cmd = new CommandRrq(this.ono, 3, 20, 0);
    return this.device.send_command(cmd);
  }

  /**
   * Event that is triggered when the value of ControlProtocol changes.
   * @type {PropertyEvent}
   */
  get OnControlProtocolChanged()
  {
    const event = this._ControlProtocolChanged;

    if (event) return event;

    return this._ControlProtocolChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 3), new signature(OcaNetworkControlProtocol));
  }

  /**
   * Event that is triggered when the value of IDAdvertised changes.
   * @type {PropertyEvent}
   */
  get OnIDAdvertisedChanged()
  {
    const event = this._IDAdvertisedChanged;

    if (event) return event;

    return this._IDAdvertisedChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 2), new signature(BLOB));
  }

  /**
   * Event that is triggered when the value of MediaProtocol changes.
   * @type {PropertyEvent}
   */
  get OnMediaProtocolChanged()
  {
    const event = this._MediaProtocolChanged;

    if (event) return event;

    return this._MediaProtocolChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 4), new signature(OcaNetworkMediaProtocol));
  }

  /**
   * Event that is triggered when the value of SignalChannelsSink changes.
   * @type {PropertyEvent}
   */
  get OnSignalChannelsSinkChanged()
  {
    const event = this._SignalChannelsSinkChanged;

    if (event) return event;

    return this._SignalChannelsSinkChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 10), new signature(LIST(UINT32)));
  }

  /**
   * Event that is triggered when the value of SignalChannelsSource changes.
   * @type {PropertyEvent}
   */
  get OnSignalChannelsSourceChanged()
  {
    const event = this._SignalChannelsSourceChanged;

    if (event) return event;

    return this._SignalChannelsSourceChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 9), new signature(LIST(UINT32)));
  }

  /**
   * Event that is triggered when the value of Statistics changes.
   * @type {PropertyEvent}
   */
  get OnStatisticsChanged()
  {
    const event = this._StatisticsChanged;

    if (event) return event;

    return this._StatisticsChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 11), new signature(OcaNetworkStatistics));
  }

  /**
   * Event that is triggered when the value of Status changes.
   * @type {PropertyEvent}
   */
  get OnStatusChanged()
  {
    const event = this._StatusChanged;

    if (event) return event;

    return this._StatusChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 5), new signature(OcaNetworkStatus));
  }

  /**
   * Event that is triggered when the value of StreamConnectorsSink changes.
   * @type {PropertyEvent}
   */
  get OnStreamConnectorsSinkChanged()
  {
    const event = this._StreamConnectorsSinkChanged;

    if (event) return event;

    return this._StreamConnectorsSinkChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 8), new signature(LIST(UINT32)));
  }

  /**
   * Event that is triggered when the value of StreamConnectorsSource changes.
   * @type {PropertyEvent}
   */
  get OnStreamConnectorsSourceChanged()
  {
    const event = this._StreamConnectorsSourceChanged;

    if (event) return event;

    return this._StreamConnectorsSourceChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 7), new signature(LIST(UINT32)));
  }

  /**
   * Event that is triggered when the value of SystemInterfaces changes.
   * @type {PropertyEvent}
   */
  get OnSystemInterfacesChanged()
  {
    const event = this._SystemInterfacesChanged;

    if (event) return event;

    return this._SystemInterfacesChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 6), new signature(LIST(OcaNetworkSystemInterfaceID)));
  }

  static get_properties()
  {
    if (!OcaStreamNetwork_p)
    {
      OcaStreamNetwork_p = new Properties([
          new Property("ControlProtocol", new signature(OcaNetworkControlProtocol), 3, 3, false, false, null),
          new Property("IDAdvertised", new signature(BLOB), 3, 2, false, false, null),
          new Property("LinkType", new signature(OcaNetworkLinkType), 3, 1, true, true, null),
          new Property("MediaProtocol", new signature(OcaNetworkMediaProtocol), 3, 4, false, false, null),
          new Property("SignalChannelsSink", new signature(LIST(UINT32)), 3, 10, false, false, null),
          new Property("SignalChannelsSource", new signature(LIST(UINT32)), 3, 9, false, false, null),
          new Property("Statistics", new signature(OcaNetworkStatistics), 3, 11, false, false, null),
          new Property("Status", new signature(OcaNetworkStatus), 3, 5, false, false, null),
          new Property("StreamConnectorsSink", new signature(LIST(UINT32)), 3, 8, false, false, null),
          new Property("StreamConnectorsSource", new signature(LIST(UINT32)), 3, 7, false, false, null),
          new Property("SystemInterfaces", new signature(LIST(OcaNetworkSystemInterfaceID)), 3, 6, false, false, null),
        ], 3, OcaAgent.get_properties());
    }

    return OcaStreamNetwork_p;
  }

  static GetPropertySync()
  {
    let sync = OcaStreamNetwork_sync;
    if (!sync)
    {
      OcaStreamNetwork_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._ControlProtocolChanged) event.Dispose();
    if (event = this._IDAdvertisedChanged) event.Dispose();
    if (event = this._MediaProtocolChanged) event.Dispose();
    if (event = this._SignalChannelsSinkChanged) event.Dispose();
    if (event = this._SignalChannelsSourceChanged) event.Dispose();
    if (event = this._StatisticsChanged) event.Dispose();
    if (event = this._StatusChanged) event.Dispose();
    if (event = this._StreamConnectorsSinkChanged) event.Dispose();
    if (event = this._StreamConnectorsSourceChanged) event.Dispose();
    if (event = this._SystemInterfacesChanged) event.Dispose();
  }
}


let OcaStreamConnector_ConnectStream_as = null;
let OcaStreamConnector_ConnectStream_rs = null;
let OcaStreamConnector_DisconnectStream_as = null;
let OcaStreamConnector_GetIDAdvertised_rs = null;
let OcaStreamConnector_GetOwnerNetwork_rs = null;
let OcaStreamConnector_GetPins_rs = null;
let OcaStreamConnector_GetSourceOrSink_rs = null;
let OcaStreamConnector_GetStatus_rs = null;
let OcaStreamConnector_GetStreams_rs = null;
let OcaStreamConnector_SetIDAdvertised_as = null;
let OcaStreamConnector_SetOwnerNetwork_as = null;
let OcaStreamConnector_SetSourceOrSink_as = null;
let OcaStreamConnector_p = null;

let OcaStreamConnector_sync = null;

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
export class OcaStreamConnector extends OcaAgent
{
  constructor(device, ObjectNumber)
  {
    super(device, ObjectNumber);
    this._IDAdvertisedChanged = null;
    this._OwnerNetworkChanged = null;
    this._PinsChanged = null;
    this._SourceOrSinkChanged = null;
    this._StatusChanged = null;
    this._StreamsChanged = null;
  }

  /**
   * ID of this class
   */
  static get ClassID()
  {
    return "\u0001\u0002\u000b";
  }

  /**
   * Version number of this class
   */
  static get ClassVersion()
  {
    return 2;
  }


  /**
   * Connects a stream to this connector. Return status indicates success
   * of operation.
   * @param Stream {OcaStream}
   *
   * @retval {Promise}
   */
  ConnectStream(Stream)
  {
    let as = OcaStreamConnector_ConnectStream_as;
    if (!as) as = OcaStreamConnector_ConnectStream_as = new signature(OcaStream);
    let rs = OcaStreamConnector_ConnectStream_rs;
    if (!rs) rs = OcaStreamConnector_ConnectStream_rs = new signature(UINT16);
    const cmd = new CommandRrq(this.ono, 3, 7, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd, rs);
  }

  /**
   * Disconnects a stream from this connector. Return status indicates
   * success of operation.
   * @param StreamID {OcaStreamIndex}
   *
   * @retval {Promise}
   */
  DisconnectStream(StreamID)
  {
    let as = OcaStreamConnector_DisconnectStream_as;
    if (!as) as = OcaStreamConnector_DisconnectStream_as = new signature(UINT16);
    const cmd = new CommandRrq(this.ono, 3, 8, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Gets the value of the IDAdvertised property. Return status indicates
   * success of operation.
   * @retval {Promise}
   */
  GetIDAdvertised()
  {
    let rs = OcaStreamConnector_GetIDAdvertised_rs;
    if (!rs) rs = OcaStreamConnector_GetIDAdvertised_rs = new signature(BLOB);
    const cmd = new CommandRrq(this.ono, 3, 3, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the object number of the <b>OcaStreamNetwork </b>object to which
   * this connector belongs. Return status indicates success of operation.
   * @retval {Promise}
   */
  GetOwnerNetwork()
  {
    let rs = OcaStreamConnector_GetOwnerNetwork_rs;
    if (!rs) rs = OcaStreamConnector_GetOwnerNetwork_rs = new signature(UINT32);
    const cmd = new CommandRrq(this.ono, 3, 1, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the list of object numbers of <b>OcaNetworkSignalChannel
   * </b>objects connected to this connector. Return status indicates
   * success of operation.
   * @retval {Promise}
   */
  GetPins()
  {
    let rs = OcaStreamConnector_GetPins_rs;
    if (!rs) rs = OcaStreamConnector_GetPins_rs = new signature(MAP(UINT16, UINT32));
    const cmd = new CommandRrq(this.ono, 3, 10, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the value of the SourceOrSink property. Return status indicates
   * success of operation.
   * @retval {Promise}
   */
  GetSourceOrSink()
  {
    let rs = OcaStreamConnector_GetSourceOrSink_rs;
    if (!rs) rs = OcaStreamConnector_GetSourceOrSink_rs = new signature(OcaNetworkMediaSourceOrSink);
    const cmd = new CommandRrq(this.ono, 3, 5, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the value of the Status property. Return status indicates success
   * of operation.
   * @retval {Promise}
   */
  GetStatus()
  {
    let rs = OcaStreamConnector_GetStatus_rs;
    if (!rs) rs = OcaStreamConnector_GetStatus_rs = new signature(OcaStreamConnectorStatus);
    const cmd = new CommandRrq(this.ono, 3, 11, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Gets the map of OcaStream items connected to this connector. Return
   * status indicates success of operation.
   * @retval {Promise}
   */
  GetStreams()
  {
    let rs = OcaStreamConnector_GetStreams_rs;
    if (!rs) rs = OcaStreamConnector_GetStreams_rs = new signature(MAP(UINT16, OcaStream));
    const cmd = new CommandRrq(this.ono, 3, 9, 0);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Sets the value of the IDAdvertised property. Return status indicates
   * success of operation.
   * @param IDAdvertised {OcaStreamConnectorID}
   *
   * @retval {Promise}
   */
  SetIDAdvertised(IDAdvertised)
  {
    let as = OcaStreamConnector_SetIDAdvertised_as;
    if (!as) as = OcaStreamConnector_SetIDAdvertised_as = new signature(BLOB);
    const cmd = new CommandRrq(this.ono, 3, 4, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Sets the object number of the <b>OcaStreamNetwork </b>object to which
   * this connector belongs. Return status indicates success of operation.
   * Only implemented for reconfigurable devices.
   * @param Network {OcaONo}
   *
   * @retval {Promise}
   */
  SetOwnerNetwork(Network)
  {
    let as = OcaStreamConnector_SetOwnerNetwork_as;
    if (!as) as = OcaStreamConnector_SetOwnerNetwork_as = new signature(UINT32);
    const cmd = new CommandRrq(this.ono, 3, 2, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Sets the value of the SourceOrSink property. Return status indicates
   * success of operation. Only implemented for reconfigurable devices.
   * Note that this method can only be called when the SignalChannels
   * property is empty, i.e. does not contain any actual channels.
   * @param SourceOrSink {OcaNetworkMediaSourceOrSink}
   *
   * @retval {Promise}
   */
  SetSourceOrSink(SourceOrSink)
  {
    let as = OcaStreamConnector_SetSourceOrSink_as;
    if (!as) as = OcaStreamConnector_SetSourceOrSink_as = new signature(OcaNetworkMediaSourceOrSink);
    const cmd = new CommandRrq(this.ono, 3, 6, 1,
                            as.encoder(Array.from(arguments)));
    return this.device.send_command(cmd);
  }

  /**
   * Event that is triggered when the value of IDAdvertised changes.
   * @type {PropertyEvent}
   */
  get OnIDAdvertisedChanged()
  {
    const event = this._IDAdvertisedChanged;

    if (event) return event;

    return this._IDAdvertisedChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 2), new signature(BLOB));
  }

  /**
   * Event that is triggered when the value of OwnerNetwork changes.
   * @type {PropertyEvent}
   */
  get OnOwnerNetworkChanged()
  {
    const event = this._OwnerNetworkChanged;

    if (event) return event;

    return this._OwnerNetworkChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 1), new signature(UINT32));
  }

  /**
   * Event that is triggered when the value of Pins changes.
   * @type {PropertyEvent}
   */
  get OnPinsChanged()
  {
    const event = this._PinsChanged;

    if (event) return event;

    return this._PinsChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 5), new signature(MAP(UINT16, UINT32)));
  }

  /**
   * Event that is triggered when the value of SourceOrSink changes.
   * @type {PropertyEvent}
   */
  get OnSourceOrSinkChanged()
  {
    const event = this._SourceOrSinkChanged;

    if (event) return event;

    return this._SourceOrSinkChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 3), new signature(OcaNetworkMediaSourceOrSink));
  }

  /**
   * Event that is triggered when the value of Status changes.
   * @type {PropertyEvent}
   */
  get OnStatusChanged()
  {
    const event = this._StatusChanged;

    if (event) return event;

    return this._StatusChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 6), new signature(OcaStreamConnectorStatus));
  }

  /**
   * Event that is triggered when the value of Streams changes.
   * @type {PropertyEvent}
   */
  get OnStreamsChanged()
  {
    const event = this._StreamsChanged;

    if (event) return event;

    return this._StreamsChanged =
      new PropertyEvent(this, new OcaPropertyID(3, 4), new signature(MAP(UINT16, OcaStream)));
  }

  static get_properties()
  {
    if (!OcaStreamConnector_p)
    {
      OcaStreamConnector_p = new Properties([
          new Property("IDAdvertised", new signature(BLOB), 3, 2, false, false, null),
          new Property("OwnerNetwork", new signature(UINT32), 3, 1, false, false, null),
          new Property("Pins", new signature(MAP(UINT16, UINT32)), 3, 5, false, false, null),
          new Property("SourceOrSink", new signature(OcaNetworkMediaSourceOrSink), 3, 3, false, false, null),
          new Property("Status", new signature(OcaStreamConnectorStatus), 3, 6, false, false, null),
          new Property("Streams", new signature(MAP(UINT16, OcaStream)), 3, 4, false, false, null),
        ], 3, OcaAgent.get_properties());
    }

    return OcaStreamConnector_p;
  }

  static GetPropertySync()
  {
    let sync = OcaStreamConnector_sync;
    if (!sync)
    {
      OcaStreamConnector_sync = sync = createPropertySync(this);
    }
    return sync;
  }

  /**
   * Call this method when the object is no longer needed. It will
   * automatically unsubscribe all event handlers.
   */
  Dispose()
  {
    super.Dispose();
    let event;
    if (event = this._IDAdvertisedChanged) event.Dispose();
    if (event = this._OwnerNetworkChanged) event.Dispose();
    if (event = this._PinsChanged) event.Dispose();
    if (event = this._SourceOrSinkChanged) event.Dispose();
    if (event = this._StatusChanged) event.Dispose();
    if (event = this._StreamsChanged) event.Dispose();
  }
}

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
  "\u0001\u0001\u0002\n" : OcaImpedanceSensor,
  "\u0001\u0001\u0002\u0001" : OcaBasicSensor,
  "\u0001\u0001\u0002\u0001\u0001" : OcaBooleanSensor,
  "\u0001\u0001\u0002\u0001\u0002" : OcaInt8Sensor,
  "\u0001\u0001\u0002\u0001\u0003" : OcaInt16Sensor,
  "\u0001\u0001\u0002\u0001\u0004" : OcaInt32Sensor,
  "\u0001\u0001\u0002\u0001\u0005" : OcaInt64Sensor,
  "\u0001\u0001\u0002\u0001\u0006" : OcaUint8Sensor,
  "\u0001\u0001\u0002\u0001\u0007" : OcaUint16Sensor,
  "\u0001\u0001\u0002\u0001\b" : OcaUint32Sensor,
  "\u0001\u0001\u0002\u0001\t" : OcaUint64Sensor,
  "\u0001\u0001\u0002\u0001\n" : OcaFloat32Sensor,
  "\u0001\u0001\u0002\u0001\u000b" : OcaFloat64Sensor,
  "\u0001\u0001\u0002\u0001\f" : OcaStringSensor,
  "\u0001\u0001\u0002\u0001\r" : OcaBitstringSensor,
  "\u0001\u0001\u0003" : OcaBlock,
  "\u0001\u0001\u0004" : OcaBlockFactory,
  "\u0001\u0001\u0005" : OcaMatrix,
  "\u0001\u0002" : OcaAgent,
  "\u0001\u0002\u0002" : OcaGrouper,
  "\u0001\u0002\u0004" : OcaNumericObserver,
  "\u0001\u0002\u0005" : OcaLibrary,
  "\u0001\u0002\u0007" : OcaPowerSupply,
  "\u0001\u0002\b" : OcaEventHandler,
  "\u0001\u0002\t" : OcaNumericObserverList,
  "\u0001\u0002\f" : OcaTask,
  "\u0001\u0002\r" : OcaTaskFactory,
  "\u0001\u0002\u000e" : OcaTaskGroup,
  "\u0001\u0002\f\u0001" : OcaRamperTask,
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
  "\u0001\u0002\u0003" : OcaRamper,
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