/*
 * This file has been generated. Please do not modify
 * it directly.
 *
 *
 * Copyright 2017-2018 DeusO GmbH
 */

import { Base, Enum8, Enum16 } from './TypesBase.js';
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
  } from './signature_parser.js';


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
};

/**
 * Enum that describes all available base datatypes.
 */
export class OcaBaseDataType extends Enum8 {

  static get TypeName() {
    return "OcaBaseDataType";
  }

  static values() {
    return _values_OcaBaseDataType;
  }

  /**
   * Undefined
   */
  static get None() { return new this(0); }

  /**
   * Generic 32 bit float
   */
  static get OcaBoolean() { return new this(1); }

  /**
   * Generic UINT8
   */
  static get OcaInt8() { return new this(2); }

  /**
   * Generic UINT16
   */
  static get OcaInt16() { return new this(3); }

  /**
   * Generic UINT32
   */
  static get OcaInt32() { return new this(4); }

  /**
   * Generic UINT32
   */
  static get OcaInt64() { return new this(5); }

  /**
   * Generic UINT32
   */
  static get OcaUint8() { return new this(6); }

  /**
   * Generic UINT32
   */
  static get OcaUint16() { return new this(7); }

  /**
   * Generic UINT32
   */
  static get OcaUint32() { return new this(8); }

  /**
   * Generic UINT32
   */
  static get OcaUint64() { return new this(9); }

  /**
   * Generic 32 bit float
   */
  static get OcaFloat32() { return new this(10); }

  /**
   * Generic 32 bit float
   */
  static get OcaFloat64() { return new this(11); }

  /**
   * Character count + character array (UTF8)
   */
  static get OcaString() { return new this(12); }

  /**
   * Bit count + bit array
   */
  static get OcaBitstring() { return new this(13); }

  /**
   * Byte count + byte array
   */
  static get OcaBlob() { return new this(14); }

  /**
   * Byte array
   */
  static get OcaBlobFixedLen() { return new this(15); }
}

const _values_OcaComponent = {
  BootLoader: 0,
};

/**
 * Enumeration (16-bit) for of software &amp; firmware components in the
 * device. Except for the boot loader, all other values of this enum are
 * device-specific and will be specified by subclassing this class.
 */
export class OcaComponent extends Enum16 {

  static get TypeName() {
    return "OcaComponent";
  }

  static values() {
    return _values_OcaComponent;
  }

  /**
   * The boot loader image.
   */
  static get BootLoader() { return new this(0); }
}

let _signature_OcaVersion = null;

/**
 * Representation of a version number of a (hardware/software) component
 * of a device in the form of Major.Minor.Build (e.g. 1.0.123).
 */
export class OcaVersion {

  static get TypeName() {
    return "OcaVersion";
  }

  constructor(Major, Minor, Build, Component) {
    this.Major = Major;
    this.Minor = Minor;
    this.Build = Build;
    this.Component = Component;
  }

  get values() {
    return [
      this.Major,
      this.Minor,
      this.Build,
      this.Component,
    ];
  }

  static get signature() {
    if (_signature_OcaVersion === null) {
      _signature_OcaVersion = new signature(UINT32, UINT32, UINT32, UINT16);
    }

    return _signature_OcaVersion;
  }
}

let _signature_OcaClassIdentification = null;

/**
 * This was not documented in the OCA standard.
 */
export class OcaClassIdentification {

  static get TypeName() {
    return "OcaClassIdentification";
  }

  constructor(ClassID, ClassVersion) {
    this.ClassID = ClassID;
    this.ClassVersion = ClassVersion;
  }

  get values() {
    return [
      this.ClassID,
      this.ClassVersion,
    ];
  }

  static get signature() {
    if (_signature_OcaClassIdentification === null) {
      _signature_OcaClassIdentification = new signature(BLOB16, UINT16);
    }

    return _signature_OcaClassIdentification;
  }
}

let _signature_OcaOPath = null;

/**
 * Object address. Composite of network address in which object resides,
 * and object number.
 */
export class OcaOPath {

  static get TypeName() {
    return "OcaOPath";
  }

  constructor(HostID, ONo) {
    this.HostID = HostID;
    this.ONo = ONo;
  }

  get values() {
    return [
      this.HostID,
      this.ONo,
    ];
  }

  static get signature() {
    if (_signature_OcaOPath === null) {
      _signature_OcaOPath = new signature(BLOB, UINT32);
    }

    return _signature_OcaOPath;
  }
}

let _signature_OcaObjectIdentification = null;

/**
 * Object identification. Composite of object number and object's class.
 * Used mainly in discovery processes.
 */
export class OcaObjectIdentification {

  static get TypeName() {
    return "OcaObjectIdentification";
  }

  constructor(ONo, ClassIdentification) {
    this.ONo = ONo;
    this.ClassIdentification = ClassIdentification;
  }

  get values() {
    return [
      this.ONo,
      this.ClassIdentification,
    ];
  }

  static get signature() {
    if (_signature_OcaObjectIdentification === null) {
      _signature_OcaObjectIdentification = new signature(UINT32, OcaClassIdentification);
    }

    return _signature_OcaObjectIdentification;
  }
}

let _signature_OcaMethodID = null;

/**
 * Representation of an OCA method ID. A class may define at most 255
 * methods of its own. Additional methods may be inherited, so the total
 * number may exceed 255.
 */
export class OcaMethodID {

  static get TypeName() {
    return "OcaMethodID";
  }

  constructor(DefLevel, MethodIndex) {
    this.DefLevel = DefLevel;
    this.MethodIndex = MethodIndex;
  }

  get values() {
    return [
      this.DefLevel,
      this.MethodIndex,
    ];
  }

  static get signature() {
    if (_signature_OcaMethodID === null) {
      _signature_OcaMethodID = new signature(UINT16, UINT16);
    }

    return _signature_OcaMethodID;
  }
}

let _signature_OcaPropertyID = null;

/**
 * Representation of an OCA property ID. A class may define at most 255
 * properties of its own. Additional properties may be inherited, so the
 * total number may exceed 255.
 */
export class OcaPropertyID {

  static get TypeName() {
    return "OcaPropertyID";
  }

  constructor(DefLevel, PropertyIndex) {
    this.DefLevel = DefLevel;
    this.PropertyIndex = PropertyIndex;
  }

  get values() {
    return [
      this.DefLevel,
      this.PropertyIndex,
    ];
  }

  static get signature() {
    if (_signature_OcaPropertyID === null) {
      _signature_OcaPropertyID = new signature(UINT16, UINT16);
    }

    return _signature_OcaPropertyID;
  }
}

let _signature_OcaEventID = null;

/**
 * Representation of an OCA event ID. A class may define at most 255
 * events of its own. Additional events may be inherited, so the total
 * number may exceed 255.
 */
export class OcaEventID {

  static get TypeName() {
    return "OcaEventID";
  }

  constructor(DefLevel, EventIndex) {
    this.DefLevel = DefLevel;
    this.EventIndex = EventIndex;
  }

  get values() {
    return [
      this.DefLevel,
      this.EventIndex,
    ];
  }

  static get signature() {
    if (_signature_OcaEventID === null) {
      _signature_OcaEventID = new signature(UINT16, UINT16);
    }

    return _signature_OcaEventID;
  }
}

let _signature_OcaPropertyDescriptor = null;

/**
 * Description of an OCA property, including property ID, Get and Set
 * method IDs, and datatype.
 */
export class OcaPropertyDescriptor {

  static get TypeName() {
    return "OcaPropertyDescriptor";
  }

  constructor(PropertyID, BaseDataType, GetterMethodID, SetterMethodID) {
    this.PropertyID = PropertyID;
    this.BaseDataType = BaseDataType;
    this.GetterMethodID = GetterMethodID;
    this.SetterMethodID = SetterMethodID;
  }

  get values() {
    return [
      this.PropertyID,
      this.BaseDataType,
      this.GetterMethodID,
      this.SetterMethodID,
    ];
  }

  static get signature() {
    if (_signature_OcaPropertyDescriptor === null) {
      _signature_OcaPropertyDescriptor = new signature(OcaPropertyID, UINT8, OcaMethodID, OcaMethodID);
    }

    return _signature_OcaPropertyDescriptor;
  }
}

let _signature_OcaProperty = null;

/**
 * Template for complete identification of an OCA property instance,
 * including object number, property ID, Get and Set method IDs, and
 * datatype.
 */
export class OcaProperty {

  static get TypeName() {
    return "OcaProperty";
  }

  constructor(ONo, Descriptor) {
    this.ONo = ONo;
    this.Descriptor = Descriptor;
  }

  get values() {
    return [
      this.ONo,
      this.Descriptor,
    ];
  }

  static get signature() {
    if (_signature_OcaProperty === null) {
      _signature_OcaProperty = new signature(UINT32, OcaPropertyDescriptor);
    }

    return _signature_OcaProperty;
  }
}

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
 */
export class OcaStatus extends Enum8 {

  static get TypeName() {
    return "OcaStatus";
  }

  static values() {
    return _values_OcaStatus;
  }

  /**
   * This was not documented in the OCA standard.
   */
  static get OK() { return new this(0); }

  /**
   * This was not documented in the OCA standard.
   */
  static get ProtocolVersionError() { return new this(1); }

  /**
   * This was not documented in the OCA standard.
   */
  static get DeviceError() { return new this(2); }

  /**
   * This was not documented in the OCA standard.
   */
  static get Locked() { return new this(3); }

  /**
   * This was not documented in the OCA standard.
   */
  static get BadFormat() { return new this(4); }

  /**
   * This was not documented in the OCA standard.
   */
  static get BadONo() { return new this(5); }

  /**
   * This was not documented in the OCA standard.
   */
  static get ParameterError() { return new this(6); }

  /**
   * This was not documented in the OCA standard.
   */
  static get ParameterOutOfRange() { return new this(7); }

  /**
   * This was not documented in the OCA standard.
   */
  static get NotImplemented() { return new this(8); }

  /**
   * This was not documented in the OCA standard.
   */
  static get InvalidRequest() { return new this(9); }

  /**
   * This was not documented in the OCA standard.
   */
  static get ProcessingFailed() { return new this(10); }

  /**
   * This was not documented in the OCA standard.
   */
  static get BadMethod() { return new this(11); }

  /**
   * This was not documented in the OCA standard.
   */
  static get PartiallySucceeded() { return new this(12); }

  /**
   * This was not documented in the OCA standard.
   */
  static get Timeout() { return new this(13); }

  /**
   * This was not documented in the OCA standard.
   */
  static get BufferOverflow() { return new this(14); }
}

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
 */
export class OcaStringComparisonType extends Enum8 {

  static get TypeName() {
    return "OcaStringComparisonType";
  }

  static values() {
    return _values_OcaStringComparisonType;
  }

  /**
   * Exact comparison, Case-sensitive.
   */
  static get Exact() { return new this(0); }

  /**
   * Match all strings whose initial substrings equal the given key.
   * Case-sensitive.
   */
  static get Substring() { return new this(1); }

  /**
   * Match all strings that contain the given key. Case-sensitive.
   */
  static get Contains() { return new this(2); }

  /**
   * Exact comparison. Case-insensitive.
   */
  static get ExactCaseInsensitive() { return new this(3); }

  /**
   * Match all strings whose initial substrings equal the given key.
   * Case-insensitive.
   */
  static get SubstringCaseInsensitive() { return new this(4); }

  /**
   * Match all strings that contain the given key. Case-insensitive.
   */
  static get ContainsCaseInsensitive() { return new this(5); }
}

let _signature_OcaManagerDescriptor = null;

/**
 * Structure that describes a manager instance.
 */
export class OcaManagerDescriptor {

  static get TypeName() {
    return "OcaManagerDescriptor";
  }

  constructor(ObjectNumber, Name, ClassID, ClassVersion) {
    this.ObjectNumber = ObjectNumber;
    this.Name = Name;
    this.ClassID = ClassID;
    this.ClassVersion = ClassVersion;
  }

  get values() {
    return [
      this.ObjectNumber,
      this.Name,
      this.ClassID,
      this.ClassVersion,
    ];
  }

  static get signature() {
    if (_signature_OcaManagerDescriptor === null) {
      _signature_OcaManagerDescriptor = new signature(UINT32, STRING, BLOB16, UINT16);
    }

    return _signature_OcaManagerDescriptor;
  }
}
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

const _values_OcaDeviceState = {
  Operational: 0x0001,
  Disabled: 0x0002,
  Error: 0x0004,
  Initializing: 0x0008,
  Updating: 0x0010,
};

/**
 * Bitset defining bit flags that indicate the device states CAP devices
 * can be in. The state is returned by the device's Device Manager on
 * request. Any combination of the flags may be returned, unless
 * specified otherwise for the specific flag. The value 0x0000 indicates
 * the device is fully operational.
 */
export class OcaDeviceState extends Enum16 {

  static get TypeName() {
    return "OcaDeviceState";
  }

  static values() {
    return _values_OcaDeviceState;
  }

  /**
   * The device is operational. This state 'logically follows' from the
   * fact that the 'Initializing' and 'Updating' flags are not set (since
   * this is not a bit flag itself).
   */
  static get Operational() { return new this(0x0001); }

  /**
   * The device is disabled.
   */
  static get Disabled() { return new this(0x0002); }

  /**
   * The device is in an error state.
   */
  static get Error() { return new this(0x0004); }

  /**
   * The device is initializing. This bit flag cannot be combined with the
   * 'Updating' flag.
   */
  static get Initializing() { return new this(0x0008); }

  /**
   * The device is upgrading firmware. This bit flag cannot be combined
   * with the 'Initializing' flag.
   */
  static get Updating() { return new this(0x0010); }
}

let _signature_OcaModelGUID = null;

/**
 * 64 bit device type GUID.
 */
export class OcaModelGUID {

  static get TypeName() {
    return "OcaModelGUID";
  }

  constructor(Reserved, MfrCode, ModelCode) {
    this.Reserved = Reserved;
    this.MfrCode = MfrCode;
    this.ModelCode = ModelCode;
  }

  get values() {
    return [
      this.Reserved,
      this.MfrCode,
      this.ModelCode,
    ];
  }

  static get signature() {
    if (_signature_OcaModelGUID === null) {
      _signature_OcaModelGUID = new signature(BLOBFIXED(1), BLOBFIXED(3), BLOBFIXED(4));
    }

    return _signature_OcaModelGUID;
  }
}

let _signature_OcaModelDescription = null;

/**
 * Friendly description of this particular product model.
 */
export class OcaModelDescription {

  static get TypeName() {
    return "OcaModelDescription";
  }

  constructor(Manufacturer, Name, Version) {
    this.Manufacturer = Manufacturer;
    this.Name = Name;
    this.Version = Version;
  }

  get values() {
    return [
      this.Manufacturer,
      this.Name,
      this.Version,
    ];
  }

  static get signature() {
    if (_signature_OcaModelDescription === null) {
      _signature_OcaModelDescription = new signature(STRING, STRING, STRING);
    }

    return _signature_OcaModelDescription;
  }
}

const _values_OcaResetCause = {
  PowerOn: 0,
  InternalError: 1,
  Upgrade: 2,
  ExternalRequest: 3,
};

/**
 * Enumeration of reasons for device reset.
 */
export class OcaResetCause extends Enum8 {

  static get TypeName() {
    return "OcaResetCause";
  }

  static values() {
    return _values_OcaResetCause;
  }

  /**
   * Reset due to powering up.
   */
  static get PowerOn() { return new this(0); }

  /**
   * Reset due to internal error.
   */
  static get InternalError() { return new this(1); }

  /**
   * Reset following upgrade of firmware.
   */
  static get Upgrade() { return new this(2); }

  /**
   * Reset due to an external request (i.e. Reset method of DeviceManager
   * or hardware reset pin).
   */
  static get ExternalRequest() { return new this(3); }
}

const _values_OcaPowerState = {
  None: 0,
  Working: 1,
  Standby: 2,
  Off: 3,
};

/**
 * Enumeration defining the power states that OCA devices can be in. The
 * state is returned by the device's Power Manager on request.
 */
export class OcaPowerState extends Enum8 {

  static get TypeName() {
    return "OcaPowerState";
  }

  static values() {
    return _values_OcaPowerState;
  }

  /**
   * Unspecified state.
   */
  static get None() { return new this(0); }

  /**
   * Power is on.
   */
  static get Working() { return new this(1); }

  /**
   * The device is in standby mode, but may be awoken by a call to the
   * appropriate state-changing method of this class.
   */
  static get Standby() { return new this(2); }

  /**
   * The device is off, but may (depending on implementation) be awoken by
   * a transport-dependent wakeup mechanism.
   */
  static get Off() { return new this(3); }
}

let _signature_OcaEvent = null;

/**
 * Representation of an OCA event, i.e. the unique combination of emitter
 * ONo and the EventID.
 */
export class OcaEvent {

  static get TypeName() {
    return "OcaEvent";
  }

  constructor(EmitterONo, EventID) {
    this.EmitterONo = EmitterONo;
    this.EventID = EventID;
  }

  get values() {
    return [
      this.EmitterONo,
      this.EventID,
    ];
  }

  static get signature() {
    if (_signature_OcaEvent === null) {
      _signature_OcaEvent = new signature(UINT32, OcaEventID);
    }

    return _signature_OcaEvent;
  }
}

let _signature_OcaMethod = null;

/**
 * Representation of an OCA method, i.e. the unique combination of an ONo
 * and a MethodID.
 */
export class OcaMethod {

  static get TypeName() {
    return "OcaMethod";
  }

  constructor(ONo, MethodID) {
    this.ONo = ONo;
    this.MethodID = MethodID;
  }

  get values() {
    return [
      this.ONo,
      this.MethodID,
    ];
  }

  static get signature() {
    if (_signature_OcaMethod === null) {
      _signature_OcaMethod = new signature(UINT32, OcaMethodID);
    }

    return _signature_OcaMethod;
  }
}

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
 */
export class OcaPropertyChangeType extends Enum8 {

  static get TypeName() {
    return "OcaPropertyChangeType";
  }

  static values() {
    return _values_OcaPropertyChangeType;
  }

  /**
   * Current value has changed.
   */
  static get CurrentChanged() { return new this(1); }

  /**
   * Minimum value has changed.
   */
  static get MinChanged() { return new this(2); }

  /**
   * Maximum value has changed.
   */
  static get MaxChanged() { return new this(3); }

  /**
   * An item has been added to a list or a map property.
   */
  static get ItemAdded() { return new this(4); }

  /**
   * An item of a list or a map property has been changed.
   */
  static get ItemChanged() { return new this(5); }

  /**
   * An item of a list or a map property has been deleted.
   */
  static get ItemDeleted() { return new this(6); }
}

const _values_OcaMediaConnectorElement = {
  PinMap: 0x0001,
  Connection: 0x0002,
  Coding: 0x0004,
  AlignmentLevel: 0x0008,
  AlignmentGain: 0x0010,
};

/**
 * Bitset describing which elements of a media connector have changed.
 */
export class OcaMediaConnectorElement extends Enum16 {

  static get TypeName() {
    return "OcaMediaConnectorElement";
  }

  static values() {
    return _values_OcaMediaConnectorElement;
  }

  /**
   * Channel pin map has changed.
   */
  static get PinMap() { return new this(0x0001); }

  /**
   * Connection Descriptor has changed.
   */
  static get Connection() { return new this(0x0002); }

  /**
   * Coding descriptor of the current connection descriptor has changed.
   */
  static get Coding() { return new this(0x0004); }

  /**
   * Alignment level of the current connection descriptor has changed.
   */
  static get AlignmentLevel() { return new this(0x0008); }

  /**
   * Alignment gain of the current connection descriptor has changed. Only
   * for <b>OcaMediaSinkConnector</b>s
   */
  static get AlignmentGain() { return new this(0x0010); }
}

const _values_OcaMediaConnectorState = {
  Stopped: 0,
  SettingUp: 1,
  Running: 2,
  Paused: 3,
  Fault: 4,
};

/**
 * Status options for a stream connector.
 */
export class OcaMediaConnectorState extends Enum8 {

  static get TypeName() {
    return "OcaMediaConnectorState";
  }

  static values() {
    return _values_OcaMediaConnectorState;
  }

  /**
   * Connector has no media connection and no media data is being
   * transferred.
   */
  static get Stopped() { return new this(0); }

  /**
   * Stream connection is being set up. Media data is not flowing.
   */
  static get SettingUp() { return new this(1); }

  /**
   * Media data is flowing since the connection is established.
   */
  static get Running() { return new this(2); }

  /**
   * Media transfer is stopped. Existing connection is intact.
   */
  static get Paused() { return new this(3); }

  /**
   * Data transfer has been halted due to errors. Working storage has not
   * been freed.
   */
  static get Fault() { return new this(4); }
}

let _signature_OcaMediaConnectorStatus = null;

/**
 * Represents the current status of a media (source or sink) connector.
 */
export class OcaMediaConnectorStatus {

  static get TypeName() {
    return "OcaMediaConnectorStatus";
  }

  constructor(ConnectorID, State, ErrorCode) {
    this.ConnectorID = ConnectorID;
    this.State = State;
    this.ErrorCode = ErrorCode;
  }

  get values() {
    return [
      this.ConnectorID,
      this.State,
      this.ErrorCode,
    ];
  }

  static get signature() {
    if (_signature_OcaMediaConnectorStatus === null) {
      _signature_OcaMediaConnectorStatus = new signature(UINT16, UINT8, UINT16);
    }

    return _signature_OcaMediaConnectorStatus;
  }
}

let _signature_OcaMediaConnectorStatusChangedEventData = null;

/**
 * This was not documented in the OCA standard.
 */
export class OcaMediaConnectorStatusChangedEventData {

  static get TypeName() {
    return "OcaMediaConnectorStatusChangedEventData";
  }

  constructor(Event, ConnectorStatus) {
    this.Event = Event;
    this.ConnectorStatus = ConnectorStatus;
  }

  get values() {
    return [
      this.Event,
      this.ConnectorStatus,
    ];
  }

  static get signature() {
    if (_signature_OcaMediaConnectorStatusChangedEventData === null) {
      _signature_OcaMediaConnectorStatusChangedEventData = new signature(OcaEvent, OcaMediaConnectorStatus);
    }

    return _signature_OcaMediaConnectorStatusChangedEventData;
  }
}

const _values_OcaPortMode = {
  Input: 1,
  Output: 2,
};

/**
 * Enum that describes whether a port is for input or output.
 */
export class OcaPortMode extends Enum8 {

  static get TypeName() {
    return "OcaPortMode";
  }

  static values() {
    return _values_OcaPortMode;
  }

  /**
   * Input port
   */
  static get Input() { return new this(1); }

  /**
   * Output port
   */
  static get Output() { return new this(2); }
}

let _signature_OcaPortID = null;

/**
 * Unique identifier of input or output port within a given worker or
 * block class. Port numbers are ordinals starting at 1, and there are
 * separate numbering spaces for input and output ports.
 */
export class OcaPortID {

  static get TypeName() {
    return "OcaPortID";
  }

  constructor(Mode, Index) {
    this.Mode = Mode;
    this.Index = Index;
  }

  get values() {
    return [
      this.Mode,
      this.Index,
    ];
  }

  static get signature() {
    if (_signature_OcaPortID === null) {
      _signature_OcaPortID = new signature(UINT8, UINT16);
    }

    return _signature_OcaPortID;
  }
}

const _values_OcaMediaStreamCastMode = {
  None: 0,
  Unicast: 1,
  Multicast: 2,
};

/**
 * Type of media endpoint: unicast or multicast.
 */
export class OcaMediaStreamCastMode extends Enum8 {

  static get TypeName() {
    return "OcaMediaStreamCastMode";
  }

  static values() {
    return _values_OcaMediaStreamCastMode;
  }

  /**
   * Undefined streamcast mode
   */
  static get None() { return new this(0); }

  /**
   * Unicast stream
   */
  static get Unicast() { return new this(1); }

  /**
   * Multicast stream
   */
  static get Multicast() { return new this(2); }
}

let _signature_OcaMediaConnection = null;

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
 */
export class OcaMediaConnection {

  static get TypeName() {
    return "OcaMediaConnection";
  }

  constructor(Secure, StreamParameters, StreamCastMode) {
    this.Secure = Secure;
    this.StreamParameters = StreamParameters;
    this.StreamCastMode = StreamCastMode;
  }

  get values() {
    return [
      this.Secure,
      this.StreamParameters,
      this.StreamCastMode,
    ];
  }

  static get signature() {
    if (_signature_OcaMediaConnection === null) {
      _signature_OcaMediaConnection = new signature(BOOLEAN, BLOB, UINT8);
    }

    return _signature_OcaMediaConnection;
  }
}

let _signature_OcaMediaCoding = null;

/**
 * Codec ID + Coding parameters
 */
export class OcaMediaCoding {

  static get TypeName() {
    return "OcaMediaCoding";
  }

  constructor(CodingSchemeID, CodecParameters, ClockONo) {
    this.CodingSchemeID = CodingSchemeID;
    this.CodecParameters = CodecParameters;
    this.ClockONo = ClockONo;
  }

  get values() {
    return [
      this.CodingSchemeID,
      this.CodecParameters,
      this.ClockONo,
    ];
  }

  static get signature() {
    if (_signature_OcaMediaCoding === null) {
      _signature_OcaMediaCoding = new signature(UINT16, STRING, UINT32);
    }

    return _signature_OcaMediaCoding;
  }
}

let _signature_OcaMediaSourceConnector = null;

/**
 * Media source (i.e. output) connector. Connects to an outbound stream.
 * Collected by <b>OcaMediaTransportNetwork</b>.
 */
export class OcaMediaSourceConnector {

  static get TypeName() {
    return "OcaMediaSourceConnector";
  }

  constructor(IDInternal, IDExternal, Connection, Coding, PinCount, ChannelPinMap, AlignmentLevel) {
    this.IDInternal = IDInternal;
    this.IDExternal = IDExternal;
    this.Connection = Connection;
    this.Coding = Coding;
    this.PinCount = PinCount;
    this.ChannelPinMap = ChannelPinMap;
    this.AlignmentLevel = AlignmentLevel;
  }

  get values() {
    return [
      this.IDInternal,
      this.IDExternal,
      this.Connection,
      this.Coding,
      this.PinCount,
      this.ChannelPinMap,
      this.AlignmentLevel,
    ];
  }

  static get signature() {
    if (_signature_OcaMediaSourceConnector === null) {
      _signature_OcaMediaSourceConnector = new signature(UINT16, STRING, OcaMediaConnection, OcaMediaCoding, UINT16, MAP(UINT16, OcaPortID), FLOAT32);
    }

    return _signature_OcaMediaSourceConnector;
  }
}

let _signature_OcaMediaSourceConnectorChangedEventData = null;

/**
 * This was not documented in the OCA standard.
 */
export class OcaMediaSourceConnectorChangedEventData {

  static get TypeName() {
    return "OcaMediaSourceConnectorChangedEventData";
  }

  constructor(Event, SourceConnector, ChangeType, ChangedElement) {
    this.Event = Event;
    this.SourceConnector = SourceConnector;
    this.ChangeType = ChangeType;
    this.ChangedElement = ChangedElement;
  }

  get values() {
    return [
      this.Event,
      this.SourceConnector,
      this.ChangeType,
      this.ChangedElement,
    ];
  }

  static get signature() {
    if (_signature_OcaMediaSourceConnectorChangedEventData === null) {
      _signature_OcaMediaSourceConnectorChangedEventData = new signature(OcaEvent, OcaMediaSourceConnector, UINT8, UINT16);
    }

    return _signature_OcaMediaSourceConnectorChangedEventData;
  }
}

let _signature_OcaMediaSinkConnector = null;

/**
 * Media sink (i.e. input) connector. Connects to an inbound stream.
 * Collected by <b>OcaMediaTransportNetwork</b>.
 */
export class OcaMediaSinkConnector {

  static get TypeName() {
    return "OcaMediaSinkConnector";
  }

  constructor(IDInternal, IDExternal, Connection, Coding, PinCount, ChannelPinMap, AlignmentLevel, AlignmentGain) {
    this.IDInternal = IDInternal;
    this.IDExternal = IDExternal;
    this.Connection = Connection;
    this.Coding = Coding;
    this.PinCount = PinCount;
    this.ChannelPinMap = ChannelPinMap;
    this.AlignmentLevel = AlignmentLevel;
    this.AlignmentGain = AlignmentGain;
  }

  get values() {
    return [
      this.IDInternal,
      this.IDExternal,
      this.Connection,
      this.Coding,
      this.PinCount,
      this.ChannelPinMap,
      this.AlignmentLevel,
      this.AlignmentGain,
    ];
  }

  static get signature() {
    if (_signature_OcaMediaSinkConnector === null) {
      _signature_OcaMediaSinkConnector = new signature(UINT16, STRING, OcaMediaConnection, OcaMediaCoding, UINT16, OcaMultiMap(UINT16, OcaPortID), FLOAT32, FLOAT32);
    }

    return _signature_OcaMediaSinkConnector;
  }
}

let _signature_OcaMediaSinkConnectorChangedEventData = null;

/**
 * This was not documented in the OCA standard.
 */
export class OcaMediaSinkConnectorChangedEventData {

  static get TypeName() {
    return "OcaMediaSinkConnectorChangedEventData";
  }

  constructor(Event, SinkConnector, ChangeType, ChangedElement) {
    this.Event = Event;
    this.SinkConnector = SinkConnector;
    this.ChangeType = ChangeType;
    this.ChangedElement = ChangedElement;
  }

  get values() {
    return [
      this.Event,
      this.SinkConnector,
      this.ChangeType,
      this.ChangedElement,
    ];
  }

  static get signature() {
    if (_signature_OcaMediaSinkConnectorChangedEventData === null) {
      _signature_OcaMediaSinkConnectorChangedEventData = new signature(OcaEvent, OcaMediaSinkConnector, UINT8, UINT16);
    }

    return _signature_OcaMediaSinkConnectorChangedEventData;
  }
}

let _signature_OcaObjectListEventData = null;

/**
 * Event data for events returning object lists, for example the
 * <b>SynchronizeState</b> event defined in
 * <b>OcaSubscriptionManager.</b>
 */
export class OcaObjectListEventData {

  static get TypeName() {
    return "OcaObjectListEventData";
  }

  constructor(Event, objectList) {
    this.Event = Event;
    this.objectList = objectList;
  }

  get values() {
    return [
      this.Event,
      this.objectList,
    ];
  }

  static get signature() {
    if (_signature_OcaObjectListEventData === null) {
      _signature_OcaObjectListEventData = new signature(OcaEvent, LIST(UINT32));
    }

    return _signature_OcaObjectListEventData;
  }
}

let _signature_OcaObservationEventData = null;

/**
 * Event data for event OcaNumericObserver.Observation
 */
export class OcaObservationEventData {

  static get TypeName() {
    return "OcaObservationEventData";
  }

  constructor(Event, Reading) {
    this.Event = Event;
    this.Reading = Reading;
  }

  get values() {
    return [
      this.Event,
      this.Reading,
    ];
  }

  static get signature() {
    if (_signature_OcaObservationEventData === null) {
      _signature_OcaObservationEventData = new signature(OcaEvent, FLOAT64);
    }

    return _signature_OcaObservationEventData;
  }
}

let _signature_OcaObservationListEventData = null;

/**
 * Event data for event OcaNumericObserver.Observation
 */
export class OcaObservationListEventData {

  static get TypeName() {
    return "OcaObservationListEventData";
  }

  constructor(Event, Reading) {
    this.Event = Event;
    this.Reading = Reading;
  }

  get values() {
    return [
      this.Event,
      this.Reading,
    ];
  }

  static get signature() {
    if (_signature_OcaObservationListEventData === null) {
      _signature_OcaObservationListEventData = new signature(OcaEvent, LIST(FLOAT64));
    }

    return _signature_OcaObservationListEventData;
  }
}

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
 */
export class OcaGrouperStatusChangeType extends Enum8 {

  static get TypeName() {
    return "OcaGrouperStatusChangeType";
  }

  static values() {
    return _values_OcaGrouperStatusChangeType;
  }

  /**
   * New citizen has been added to the Grouper and is now in the online
   * state.
   */
  static get citizenAdded() { return new this(1); }

  /**
   * A citizen has been deleted from the Grouper.
   */
  static get citizenDeleted() { return new this(2); }

  /**
   * Previously <b>online </b>citizen has lost its connection with the
   * grouper and is now in the <b>offline </b>state.
   */
  static get citizenConnectionLost() { return new this(3); }

  /**
   * Previously <b>offline </b>citizen has lost its connection with the
   * grouper and is now in the <b>online </b>state.
   */
  static get citizenConnectionReEstablished() { return new this(4); }

  /**
   * A citizen has failed to execute a requested parameter change.
   */
  static get citizenError() { return new this(5); }

  /**
   * A citizen has enrolled in a group, and is now a <b>member </b>of that
   * group.
   */
  static get enrollment() { return new this(6); }

  /**
   * A member has been removed from a group.
   */
  static get unEnrollment() { return new this(7); }
}

let _signature_OcaGrouperStatusChangeEventData = null;

/**
 * Class that defines the event data parameter for the <b>StatusChange
 * </b>event defined in <b>OcaGrouper</b>.
 */
export class OcaGrouperStatusChangeEventData {

  static get TypeName() {
    return "OcaGrouperStatusChangeEventData";
  }

  constructor(Event, groupIndex, citizenIndex, changeType) {
    this.Event = Event;
    this.groupIndex = groupIndex;
    this.citizenIndex = citizenIndex;
    this.changeType = changeType;
  }

  get values() {
    return [
      this.Event,
      this.groupIndex,
      this.citizenIndex,
      this.changeType,
    ];
  }

  static get signature() {
    if (_signature_OcaGrouperStatusChangeEventData === null) {
      _signature_OcaGrouperStatusChangeEventData = new signature(OcaEvent, UINT16, UINT16, UINT8);
    }

    return _signature_OcaGrouperStatusChangeEventData;
  }
}

const _values_OcaNotificationDeliveryMode = {
  Reliable: 1,
  Fast: 2,
};

/**
 * Enum for subscriptions that specifies whether its notification
 * messages are to be delivered by reliable means (e.g. TCP) or fast
 * means (e.g. UDP).
 */
export class OcaNotificationDeliveryMode extends Enum8 {

  static get TypeName() {
    return "OcaNotificationDeliveryMode";
  }

  static values() {
    return _values_OcaNotificationDeliveryMode;
  }

  /**
   * Reliable delivery mode, e.g. TCP.
   */
  static get Reliable() { return new this(1); }

  /**
   * Fast delivery mode, e.g. UDP.
   */
  static get Fast() { return new this(2); }
}

const _values_OcaSubscriptionManagerState = {
  Normal: 1,
  EventsDisabled: 2,
};

/**
 * Enum describing <b>OcaSubscriptionManager</b> states.
 */
export class OcaSubscriptionManagerState extends Enum8 {

  static get TypeName() {
    return "OcaSubscriptionManagerState";
  }

  static values() {
    return _values_OcaSubscriptionManagerState;
  }

  /**
   * This was not documented in the OCA standard.
   */
  static get Normal() { return new this(1); }

  /**
   * Events are disabled.
   */
  static get EventsDisabled() { return new this(2); }
}

let _signature_OcaImpedance = null;

/**
 * Complex impedance. Expressed as a magnitude and phase.
 */
export class OcaImpedance {

  static get TypeName() {
    return "OcaImpedance";
  }

  constructor(Magnitude, Phase) {
    this.Magnitude = Magnitude;
    this.Phase = Phase;
  }

  get values() {
    return [
      this.Magnitude,
      this.Phase,
    ];
  }

  static get signature() {
    if (_signature_OcaImpedance === null) {
      _signature_OcaImpedance = new signature(FLOAT32, FLOAT32);
    }

    return _signature_OcaImpedance;
  }
}

const _values_OcaMuteState = {
  Muted: 1,
  Unmuted: 2,
};

/**
 * Mute states
 */
export class OcaMuteState extends Enum8 {

  static get TypeName() {
    return "OcaMuteState";
  }

  static values() {
    return _values_OcaMuteState;
  }

  /**
   * This was not documented in the OCA standard.
   */
  static get Muted() { return new this(1); }

  /**
   * This was not documented in the OCA standard.
   */
  static get Unmuted() { return new this(2); }
}

const _values_OcaPolarityState = {
  NonInverted: 1,
  Inverted: 2,
};

/**
 * Polarity states
 */
export class OcaPolarityState extends Enum8 {

  static get TypeName() {
    return "OcaPolarityState";
  }

  static values() {
    return _values_OcaPolarityState;
  }

  /**
   * This was not documented in the OCA standard.
   */
  static get NonInverted() { return new this(1); }

  /**
   * This was not documented in the OCA standard.
   */
  static get Inverted() { return new this(2); }
}

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
 */
export class OcaDelayUnit extends Enum8 {

  static get TypeName() {
    return "OcaDelayUnit";
  }

  static values() {
    return _values_OcaDelayUnit;
  }

  /**
   * Time
   */
  static get Time() { return new this(1); }

  /**
   * Distance
   */
  static get Distance() { return new this(2); }

  /**
   * Samples
   */
  static get Samples() { return new this(3); }

  /**
   * Samples
   */
  static get Microseconds() { return new this(4); }

  /**
   * Samples
   */
  static get Milliseconds() { return new this(5); }

  /**
   * Samples
   */
  static get Centimeters() { return new this(6); }

  /**
   * Samples
   */
  static get Inches() { return new this(7); }

  /**
   * Samples
   */
  static get Feet() { return new this(8); }
}

let _signature_OcaDelayValue = null;

/**
 * Multifield descriptor that defines a delay value element.
 */
export class OcaDelayValue {

  static get TypeName() {
    return "OcaDelayValue";
  }

  constructor(DelayValue, DelayUnit) {
    this.DelayValue = DelayValue;
    this.DelayUnit = DelayUnit;
  }

  get values() {
    return [
      this.DelayValue,
      this.DelayUnit,
    ];
  }

  static get signature() {
    if (_signature_OcaDelayValue === null) {
      _signature_OcaDelayValue = new signature(FLOAT32, UINT8);
    }

    return _signature_OcaDelayValue;
  }
}

let _signature_OcaTransferFunction = null;

/**
 * A complex (i.e. magnitude + phase) transfer function.
 */
export class OcaTransferFunction {

  static get TypeName() {
    return "OcaTransferFunction";
  }

  constructor(Frequency, Amplitude, Phase) {
    this.Frequency = Frequency;
    this.Amplitude = Amplitude;
    this.Phase = Phase;
  }

  get values() {
    return [
      this.Frequency,
      this.Amplitude,
      this.Phase,
    ];
  }

  static get signature() {
    if (_signature_OcaTransferFunction === null) {
      _signature_OcaTransferFunction = new signature(LIST(FLOAT32), LIST(FLOAT32), LIST(FLOAT32));
    }

    return _signature_OcaTransferFunction;
  }
}

const _values_OcaClassicalFilterShape = {
  Butterworth: 1,
  Bessel: 2,
  Chebyshev: 3,
  LinkwitzRiley: 4,
};

/**
 * Enumeration of classicalr filter types that can be used by OCA
 * objects.
 */
export class OcaClassicalFilterShape extends Enum8 {

  static get TypeName() {
    return "OcaClassicalFilterShape";
  }

  static values() {
    return _values_OcaClassicalFilterShape;
  }

  /**
   * Butterworth
   */
  static get Butterworth() { return new this(1); }

  /**
   * Bessel
   */
  static get Bessel() { return new this(2); }

  /**
   * Linkwitz-Riley
   */
  static get Chebyshev() { return new this(3); }

  /**
   * Linkwitz-Riley
   */
  static get LinkwitzRiley() { return new this(4); }
}

const _values_OcaFilterPassband = {
  HiPass: 1,
  LowPass: 2,
  BandPass: 3,
  BandReject: 4,
  AllPass: 5,
};

/**
 * Enumeration of passband types that can be used by OCA objects.
 */
export class OcaFilterPassband extends Enum8 {

  static get TypeName() {
    return "OcaFilterPassband";
  }

  static values() {
    return _values_OcaFilterPassband;
  }

  /**
   * High pass
   */
  static get HiPass() { return new this(1); }

  /**
   * Low pass
   */
  static get LowPass() { return new this(2); }

  /**
   * All pass
   */
  static get BandPass() { return new this(3); }

  /**
   * All pass
   */
  static get BandReject() { return new this(4); }

  /**
   * All pass
   */
  static get AllPass() { return new this(5); }
}

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
 */
export class OcaParametricEQShape extends Enum8 {

  static get TypeName() {
    return "OcaParametricEQShape";
  }

  static values() {
    return _values_OcaParametricEQShape;
  }

  /**
   * No filter (i.e. flat frequency response)
   */
  static get None() { return new this(0); }

  /**
   * PEQ
   */
  static get PEQ() { return new this(1); }

  /**
   * Low Shelv
   */
  static get LowShelv() { return new this(2); }

  /**
   * High Shelv
   */
  static get HighShelv() { return new this(3); }

  /**
   * Low Pass
   */
  static get LowPass() { return new this(4); }

  /**
   * High Pass
   */
  static get HighPass() { return new this(5); }

  /**
   * Band Pass
   */
  static get BandPass() { return new this(6); }

  /**
   * All Pass
   */
  static get AllPass() { return new this(7); }

  /**
   * Notch
   */
  static get Notch() { return new this(8); }

  /**
   * Notch
   */
  static get ToneControlLowFixed() { return new this(9); }

  /**
   * Notch
   */
  static get ToneControlLowSliding() { return new this(10); }

  /**
   * Notch
   */
  static get ToneControlHighFixed() { return new this(11); }

  /**
   * Notch
   */
  static get ToneControlHighSliding() { return new this(12); }
}

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
 */
export class OcaDynamicsFunction extends Enum8 {

  static get TypeName() {
    return "OcaDynamicsFunction";
  }

  static values() {
    return _values_OcaDynamicsFunction;
  }

  /**
   * No dynamic function.
   */
  static get None() { return new this(0); }

  /**
   * Upward compress function (reduce gain when input is above the given
   * threshold).
   */
  static get Compress() { return new this(1); }

  /**
   * Limit function (compress with a fixed ratio of 10:1 or greater).
   */
  static get Limit() { return new this(2); }

  /**
   * Downward expand function (decrease gain when input is below the given
   * threshhold).
   */
  static get Expand() { return new this(3); }

  /**
   * Gate function (expand with fixed 'infinite' downward expansion ratio).
   */
  static get Gate() { return new this(4); }
}

let _signature_OcaPilotToneDetectorSpec = null;

/**
 * Multifield descriptor for a pilot tone detector element.
 */
export class OcaPilotToneDetectorSpec {

  static get TypeName() {
    return "OcaPilotToneDetectorSpec";
  }

  constructor(Threshold, Frequency, PollInterval) {
    this.Threshold = Threshold;
    this.Frequency = Frequency;
    this.PollInterval = PollInterval;
  }

  get values() {
    return [
      this.Threshold,
      this.Frequency,
      this.PollInterval,
    ];
  }

  static get signature() {
    if (_signature_OcaPilotToneDetectorSpec === null) {
      _signature_OcaPilotToneDetectorSpec = new signature(FLOAT32, FLOAT32, UINT32);
    }

    return _signature_OcaPilotToneDetectorSpec;
  }
}

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
 */
export class OcaWaveformType extends Enum8 {

  static get TypeName() {
    return "OcaWaveformType";
  }

  static values() {
    return _values_OcaWaveformType;
  }

  /**
   * No signal.
   */
  static get None() { return new this(0); }

  /**
   * Direct current.
   */
  static get DC() { return new this(1); }

  /**
   * Sine wave.
   */
  static get Sine() { return new this(2); }

  /**
   * Square wave.
   */
  static get Square() { return new this(3); }

  /**
   * Impulse waveform.
   */
  static get Impulse() { return new this(4); }

  /**
   * Pink noise waveform.
   */
  static get NoisePink() { return new this(5); }

  /**
   * White noise waveform.
   */
  static get NoiseWhite() { return new this(6); }

  /**
   * Polarity test waveform (asymmetrical).
   */
  static get PolarityTest() { return new this(7); }
}

const _values_OcaSweepType = {
  Linear: 1,
  Logarithmic: 2,
  None: 0,
};

/**
 * Enumeration of waveform types that can be used by OCA objects.
 */
export class OcaSweepType extends Enum8 {

  static get TypeName() {
    return "OcaSweepType";
  }

  static values() {
    return _values_OcaSweepType;
  }

  /**
   * Linear sweep.
   */
  static get Linear() { return new this(1); }

  /**
   * Logarithmic sweep.
   */
  static get Logarithmic() { return new this(2); }

  /**
   * No sweep.
   */
  static get None() { return new this(0); }
}

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
 */
export class OcaUnitOfMeasure extends Enum8 {

  static get TypeName() {
    return "OcaUnitOfMeasure";
  }

  static values() {
    return _values_OcaUnitOfMeasure;
  }

  /**
   * Electric current in Amperes.
   */
  static get Ampere() { return new this(4); }

  /**
   * Temperature in degree Celsius.
   */
  static get DegreeCelsius() { return new this(2); }

  /**
   * Frequency in Hertz.
   */
  static get Hertz() { return new this(1); }

  /**
   * No reading.
   */
  static get None() { return new this(0); }

  /**
   * Resistance, magnitude of reactance, or magnitude of impedance in Ohms.
   */
  static get Ohm() { return new this(5); }

  /**
   * Voltage in Volts.
   */
  static get Volt() { return new this(3); }
}

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
 */
export class OcaPresentationUnit extends Enum8 {

  static get TypeName() {
    return "OcaPresentationUnit";
  }

  static values() {
    return _values_OcaPresentationUnit;
  }

  /**
   * dB(0.775 VRMS) - voltage relative to 0.775 volts.
   */
  static get dBu() { return new this(0); }

  /**
   * dB(1 VRMS) - voltage relative to 1 volt.
   */
  static get dBV() { return new this(1); }

  /**
   * Voltage in plain volts.
   */
  static get V() { return new this(2); }
}

const _values_OcaLevelDetectionLaw = {
  None: 0,
  RMS: 1,
  Peak: 2,
};

/**
 * Enumeration of the types of level detector characteristics. Used in
 * dynamics classes and for sensors.
 */
export class OcaLevelDetectionLaw extends Enum8 {

  static get TypeName() {
    return "OcaLevelDetectionLaw";
  }

  static values() {
    return _values_OcaLevelDetectionLaw;
  }

  /**
   * No detection (i.e. never trigger)
   */
  static get None() { return new this(0); }

  /**
   * Detect RMS value.
   */
  static get RMS() { return new this(1); }

  /**
   * Detect peak value.
   */
  static get Peak() { return new this(2); }
}

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
 */
export class OcaSensorReadingState extends Enum8 {

  static get TypeName() {
    return "OcaSensorReadingState";
  }

  static values() {
    return _values_OcaSensorReadingState;
  }

  /**
   * Cannot determine validity of reading, or this feature is not
   * implemented.
   */
  static get Unknown() { return new this(0); }

  /**
   * Sensor reading is valid.
   */
  static get Valid() { return new this(1); }

  /**
   * Sensor is underrange, reading is not valid.
   */
  static get Underrange() { return new this(2); }

  /**
   * Sensor is overrange, reading is not valid.
   */
  static get Overrange() { return new this(3); }

  /**
   * Sensor is in an error state, reading is not valid.
   */
  static get Error() { return new this(4); }
}

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
 */
export class OcaLevelMeterLaw extends Enum8 {

  static get TypeName() {
    return "OcaLevelMeterLaw";
  }

  static values() {
    return _values_OcaLevelMeterLaw;
  }

  /**
   * Generic VU-style meter, characteristics defined by device.
   */
  static get VU() { return new this(1); }

  /**
   * Classic VU meter per ANSI C16.5-1942, British Standard BS 6840, and
   * IEC 60268-17.
   */
  static get StandardVU() { return new this(2); }

  /**
   * IEC 60268-10 Peak Programme Meter, type I (Germany).
   */
  static get PPM1() { return new this(3); }

  /**
   * IEC 60268-10 Peak Programme Meter, type II (BBC).
   */
  static get PPM2() { return new this(4); }

  /**
   * Loudness meter as defined by ITU BS1770.
   */
  static get LKFS() { return new this(5); }

  /**
   * Simple RMS meter
   */
  static get RMS() { return new this(6); }

  /**
   * Simple peak meter
   */
  static get Peak() { return new this(7); }

  /**
   * Proprietery classes shall add values of this value or greater. Values
   * 0 to 127 are reserved.
   */
  static get ProprietaryValueBase() { return new this(128); }
}

let _signature_OcaBlockMember = null;

/**
 * Describes an object that is a member of a block.
 */
export class OcaBlockMember {

  static get TypeName() {
    return "OcaBlockMember";
  }

  constructor(MemberObjectIdentification, ContainerObjectNumber) {
    this.MemberObjectIdentification = MemberObjectIdentification;
    this.ContainerObjectNumber = ContainerObjectNumber;
  }

  get values() {
    return [
      this.MemberObjectIdentification,
      this.ContainerObjectNumber,
    ];
  }

  static get signature() {
    if (_signature_OcaBlockMember === null) {
      _signature_OcaBlockMember = new signature(OcaObjectIdentification, UINT32);
    }

    return _signature_OcaBlockMember;
  }
}

let _signature_OcaGlobalBlockTypeIdentifier = null;

/**
 * Unique identifier of type of reusable block.
 */
export class OcaGlobalBlockTypeIdentifier {

  static get TypeName() {
    return "OcaGlobalBlockTypeIdentifier";
  }

  constructor(Authority, ID) {
    this.Authority = Authority;
    this.ID = ID;
  }

  get values() {
    return [
      this.Authority,
      this.ID,
    ];
  }

  static get signature() {
    if (_signature_OcaGlobalBlockTypeIdentifier === null) {
      _signature_OcaGlobalBlockTypeIdentifier = new signature(BLOBFIXED(3), UINT32);
    }

    return _signature_OcaGlobalBlockTypeIdentifier;
  }
}

let _signature_OcaPort = null;

/**
 * Representation of an OCA (input or output) port that is used in the
 * signal path representation of an OCA device.
 */
export class OcaPort {

  static get TypeName() {
    return "OcaPort";
  }

  constructor(Owner, ID, Name) {
    this.Owner = Owner;
    this.ID = ID;
    this.Name = Name;
  }

  get values() {
    return [
      this.Owner,
      this.ID,
      this.Name,
    ];
  }

  static get signature() {
    if (_signature_OcaPort === null) {
      _signature_OcaPort = new signature(UINT32, OcaPortID, STRING);
    }

    return _signature_OcaPort;
  }
}

let _signature_OcaSignalPath = null;

/**
 * Signal path between two object ports in the same device.
 */
export class OcaSignalPath {

  static get TypeName() {
    return "OcaSignalPath";
  }

  constructor(SourcePort, SinkPort) {
    this.SourcePort = SourcePort;
    this.SinkPort = SinkPort;
  }

  get values() {
    return [
      this.SourcePort,
      this.SinkPort,
    ];
  }

  static get signature() {
    if (_signature_OcaSignalPath === null) {
      _signature_OcaSignalPath = new signature(OcaPort, OcaPort);
    }

    return _signature_OcaSignalPath;
  }
}

let _signature_OcaProtoObjectIdentification = null;

/**
 * Prototype object identification. Composite of prototype object number
 * and prototype object's class identification. Used in
 * <b>OcaBlockFactory</b>.
 */
export class OcaProtoObjectIdentification {

  static get TypeName() {
    return "OcaProtoObjectIdentification";
  }

  constructor(POno, ClassIdentification) {
    this.POno = POno;
    this.ClassIdentification = ClassIdentification;
  }

  get values() {
    return [
      this.POno,
      this.ClassIdentification,
    ];
  }

  static get signature() {
    if (_signature_OcaProtoObjectIdentification === null) {
      _signature_OcaProtoObjectIdentification = new signature(UINT32, OcaClassIdentification);
    }

    return _signature_OcaProtoObjectIdentification;
  }
}

let _signature_OcaProtoPortID = null;

/**
 * Unique identifier of prototype input or output port within a block
 * factory. Prototype port numbers are ordinals starting at 1, and there
 * are separate numbering spaces for input and output ports.
 */
export class OcaProtoPortID {

  static get TypeName() {
    return "OcaProtoPortID";
  }

  constructor(Mode, Index) {
    this.Mode = Mode;
    this.Index = Index;
  }

  get values() {
    return [
      this.Mode,
      this.Index,
    ];
  }

  static get signature() {
    if (_signature_OcaProtoPortID === null) {
      _signature_OcaProtoPortID = new signature(UINT8, UINT16);
    }

    return _signature_OcaProtoPortID;
  }
}

let _signature_OcaProtoPort = null;

/**
 * Representation of an OCA (input or output) proto-port that is used in
 * the proto-signal path representation of an OCA device.
 */
export class OcaProtoPort {

  static get TypeName() {
    return "OcaProtoPort";
  }

  constructor(Owner, ProtoID, Name) {
    this.Owner = Owner;
    this.ProtoID = ProtoID;
    this.Name = Name;
  }

  get values() {
    return [
      this.Owner,
      this.ProtoID,
      this.Name,
    ];
  }

  static get signature() {
    if (_signature_OcaProtoPort === null) {
      _signature_OcaProtoPort = new signature(UINT32, OcaProtoPortID, STRING);
    }

    return _signature_OcaProtoPort;
  }
}

let _signature_OcaProtoSignalPath = null;

/**
 * Proto-signal path between two proto-member ports in a factory.
 */
export class OcaProtoSignalPath {

  static get TypeName() {
    return "OcaProtoSignalPath";
  }

  constructor(SourceProtoPort, SinkProtoPort) {
    this.SourceProtoPort = SourceProtoPort;
    this.SinkProtoPort = SinkProtoPort;
  }

  get values() {
    return [
      this.SourceProtoPort,
      this.SinkProtoPort,
    ];
  }

  static get signature() {
    if (_signature_OcaProtoSignalPath === null) {
      _signature_OcaProtoSignalPath = new signature(OcaProtoPort, OcaProtoPort);
    }

    return _signature_OcaProtoSignalPath;
  }
}

let _signature_OcaObjectSearchResult = null;

/**
 * Result of object search via the Find...() methods of <b>OcaBlock</b>.
 * Dynamic format, form used depends on type of search and options. The
 * FieldMap parameter of the Find...() methods specifies which optional
 * fields should be returned as nonnull.
 */
export class OcaObjectSearchResult {

  static get TypeName() {
    return "OcaObjectSearchResult";
  }

  constructor(ONo, ClassIdentification, ContainerPath, Role, Label) {
    this.ONo = ONo;
    this.ClassIdentification = ClassIdentification;
    this.ContainerPath = ContainerPath;
    this.Role = Role;
    this.Label = Label;
  }

  get values() {
    return [
      this.ONo,
      this.ClassIdentification,
      this.ContainerPath,
      this.Role,
      this.Label,
    ];
  }

  static get signature() {
    if (_signature_OcaObjectSearchResult === null) {
      _signature_OcaObjectSearchResult = new signature(UINT32, OcaClassIdentification, LIST(UINT32), STRING, STRING);
    }

    return _signature_OcaObjectSearchResult;
  }
}

const _values_OcaObjectSearchResultFlags = {
  ONo: 0x0001,
  ClassIdentification: 0x0002,
  ContainerPath: 0x0004,
  Role: 0x0008,
  Label: 0x0010,
};

/**
 * Bitset that describes the contents of an <b>OcaSearchResult</b>
 */
export class OcaObjectSearchResultFlags extends Enum16 {

  static get TypeName() {
    return "OcaObjectSearchResultFlags";
  }

  static values() {
    return _values_OcaObjectSearchResultFlags;
  }

  /**
   * Object number
   */
  static get ONo() { return new this(0x0001); }

  /**
   * Class identification
   */
  static get ClassIdentification() { return new this(0x0002); }

  /**
   * Container path
   */
  static get ContainerPath() { return new this(0x0004); }

  /**
   * Role
   */
  static get Role() { return new this(0x0008); }

  /**
   * Label
   */
  static get Label() { return new this(0x0010); }
}

let _signature_OcaGrouperGroup = null;

/**
 * Describes a group in a grouper.
 */
export class OcaGrouperGroup {

  static get TypeName() {
    return "OcaGrouperGroup";
  }

  constructor(Index, Name, ProxyONo) {
    this.Index = Index;
    this.Name = Name;
    this.ProxyONo = ProxyONo;
  }

  get values() {
    return [
      this.Index,
      this.Name,
      this.ProxyONo,
    ];
  }

  static get signature() {
    if (_signature_OcaGrouperGroup === null) {
      _signature_OcaGrouperGroup = new signature(UINT16, STRING, UINT32);
    }

    return _signature_OcaGrouperGroup;
  }
}

let _signature_OcaGrouperCitizen = null;

/**
 * Describes a citizen of a grouper. Refers to a specific worker object
 * somewhere in the media network.
 */
export class OcaGrouperCitizen {

  static get TypeName() {
    return "OcaGrouperCitizen";
  }

  constructor(Index, ObjectPath, Online) {
    this.Index = Index;
    this.ObjectPath = ObjectPath;
    this.Online = Online;
  }

  get values() {
    return [
      this.Index,
      this.ObjectPath,
      this.Online,
    ];
  }

  static get signature() {
    if (_signature_OcaGrouperCitizen === null) {
      _signature_OcaGrouperCitizen = new signature(UINT16, OcaOPath, BOOLEAN);
    }

    return _signature_OcaGrouperCitizen;
  }
}

let _signature_OcaGrouperEnrollment = null;

/**
 * Describes the enrollment of a citizen into a group.
 */
export class OcaGrouperEnrollment {

  static get TypeName() {
    return "OcaGrouperEnrollment";
  }

  constructor(GroupIndex, CitizenIndex) {
    this.GroupIndex = GroupIndex;
    this.CitizenIndex = CitizenIndex;
  }

  get values() {
    return [
      this.GroupIndex,
      this.CitizenIndex,
    ];
  }

  static get signature() {
    if (_signature_OcaGrouperEnrollment === null) {
      _signature_OcaGrouperEnrollment = new signature(UINT16, UINT16);
    }

    return _signature_OcaGrouperEnrollment;
  }
}

const _values_OcaPositionAndRotationFlags = {
  c1: 1,
  c2: 2,
  c3: 4,
  c4: 8,
  c5: 16,
  c6: 32,
};

/**
 * BItset that specifies which fields in <b>OcaPositionAndOrientation</b>
 * are used. A "1" value signifies that the corresponding
 * <b>OcaPositionAndOrientation </b>field is used.
 */
export class OcaPositionAndRotationFlags extends Enum16 {

  static get TypeName() {
    return "OcaPositionAndRotationFlags";
  }

  static values() {
    return _values_OcaPositionAndRotationFlags;
  }

  /**
   * This was not documented in the OCA standard.
   */
  static get c1() { return new this(1); }

  /**
   * This was not documented in the OCA standard.
   */
  static get c2() { return new this(2); }

  /**
   * This was not documented in the OCA standard.
   */
  static get c3() { return new this(4); }

  /**
   * This was not documented in the OCA standard.
   */
  static get c4() { return new this(8); }

  /**
   * This was not documented in the OCA standard.
   */
  static get c5() { return new this(16); }

  /**
   * This was not documented in the OCA standard.
   */
  static get c6() { return new this(32); }
}

const _values_OcaGrouperMode = {
  MasterSlave: 1,
  PeerToPeer: 2,
};

/**
 * Select mode of <b>OcaGrouper</b>: master-slave or peer-to-peer
 */
export class OcaGrouperMode extends Enum8 {

  static get TypeName() {
    return "OcaGrouperMode";
  }

  static values() {
    return _values_OcaGrouperMode;
  }

  /**
   * OcaGrouper is in master-slave mode.
   */
  static get MasterSlave() { return new this(1); }

  /**
   * OcaGrouper is in peer-to-peer mode.
   */
  static get PeerToPeer() { return new this(2); }
}

const _values_OcaObserverState = {
  NotTriggered: 0,
  Triggered: 1,
};

/**
 * Interpolation law for ramper to use.
 */
export class OcaObserverState extends Enum8 {

  static get TypeName() {
    return "OcaObserverState";
  }

  static values() {
    return _values_OcaObserverState;
  }

  /**
   * Observer is not triggered.
   */
  static get NotTriggered() { return new this(0); }

  /**
   * Observer is triggered.
   */
  static get Triggered() { return new this(1); }
}

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
 */
export class OcaRelationalOperator extends Enum8 {

  static get TypeName() {
    return "OcaRelationalOperator";
  }

  static values() {
    return _values_OcaRelationalOperator;
  }

  /**
   * This was not documented in the OCA standard.
   */
  static get None() { return new this(0); }

  /**
   * The equality (==) operator.
   */
  static get Equality() { return new this(1); }

  /**
   * The inequality (!=) operator.
   */
  static get Inequality() { return new this(2); }

  /**
   * The greater than (&gt;) operator.
   */
  static get GreaterThan() { return new this(3); }

  /**
   * The greater than or equal (&gt;=) operator.
   */
  static get GreaterThanOrEqual() { return new this(4); }

  /**
   * The less than (&lt;) operator
   */
  static get LessThan() { return new this(5); }

  /**
   * The less than or equal (&lt;=) operator.
   */
  static get LessThanOrEqual() { return new this(6); }
}

const _values_OcaPowerSupplyType = {
  None: 0,
  Mains: 1,
  Battery: 2,
  Phantom: 3,
  Solar: 4,
};

/**
 * Type of power supply.
 */
export class OcaPowerSupplyType extends Enum8 {

  static get TypeName() {
    return "OcaPowerSupplyType";
  }

  static values() {
    return _values_OcaPowerSupplyType;
  }

  /**
   * No power supply.
   */
  static get None() { return new this(0); }

  /**
   * Mains-powered power supply.
   */
  static get Mains() { return new this(1); }

  /**
   * Battery power supply.
   */
  static get Battery() { return new this(2); }

  /**
   * Phantom power supply. Includes Power-over-Ethernet supplies.
   */
  static get Phantom() { return new this(3); }

  /**
   * Solar power supply
   */
  static get Solar() { return new this(4); }
}

const _values_OcaPowerSupplyLocation = {
  Unspecified: 1,
  Internal: 2,
  External: 3,
};

/**
 * Physical location of a device power supply.
 */
export class OcaPowerSupplyLocation extends Enum8 {

  static get TypeName() {
    return "OcaPowerSupplyLocation";
  }

  static values() {
    return _values_OcaPowerSupplyLocation;
  }

  /**
   * Unspecified location
   */
  static get Unspecified() { return new this(1); }

  /**
   * Power supply is physically inside the device.
   */
  static get Internal() { return new this(2); }

  /**
   * Power supply is physically outside the device.
   */
  static get External() { return new this(3); }
}

const _values_OcaPowerSupplyState = {
  Off: 0,
  Unavailable: 1,
  Available: 2,
  Active: 3,
};

/**
 * Status of a device power supply.
 */
export class OcaPowerSupplyState extends Enum8 {

  static get TypeName() {
    return "OcaPowerSupplyState";
  }

  static values() {
    return _values_OcaPowerSupplyState;
  }

  /**
   * Powered down.
   */
  static get Off() { return new this(0); }

  /**
   * Power supply is turned on but not available for activation.
   */
  static get Unavailable() { return new this(1); }

  /**
   * Power supply is fully available for activation.
   */
  static get Available() { return new this(2); }

  /**
   * Power supply is currently supplying power to the device.
   */
  static get Active() { return new this(3); }
}

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
 */
export class OcaTaskState extends Enum8 {

  static get TypeName() {
    return "OcaTaskState";
  }

  static values() {
    return _values_OcaTaskState;
  }

  /**
   * No (invalid) encoding.
   */
  static get None() { return new this(0); }

  /**
   * Task is constructed but not initialized.
   */
  static get NotPrepared() { return new this(1); }

  /**
   * Task is initialized but not available to run.
   */
  static get Disabled() { return new this(2); }

  /**
   * Task is available for running.
   */
  static get Enabled() { return new this(3); }

  /**
   * Task is running.
   */
  static get Running() { return new this(4); }

  /**
   * Task has terminated successfully.
   */
  static get Completed() { return new this(5); }

  /**
   * Task has terminated unsuccessfully.
   */
  static get Failed() { return new this(6); }

  /**
   * Task was gracefully stopped by a <b>Stop </b>command.
   */
  static get Stopped() { return new this(7); }

  /**
   * Task was forcibly terminated by an <b>Abort </b>command.
   */
  static get Aborted() { return new this(8); }
}

let _signature_OcaTaskStatus = null;

/**
 * Status of an OcaTask: task state plus a nonspecific blob named
 * Parameter which the application can use, or not. <ul> <li>The initial
 * value of Parameter is null. </li> <li>The controller sets the value of
 * Parameter via the Control() method. </li> <li>If the task's state
 * changes due to an internal event (examples: task duration value
 * reached; or failure due to an error), Parameter is not changed.</li>
 * </ul>
 */
export class OcaTaskStatus {

  static get TypeName() {
    return "OcaTaskStatus";
  }

  constructor(State, Parameter) {
    this.State = State;
    this.Parameter = Parameter;
  }

  get values() {
    return [
      this.State,
      this.Parameter,
    ];
  }

  static get signature() {
    if (_signature_OcaTaskStatus === null) {
      _signature_OcaTaskStatus = new signature(UINT8, BLOB);
    }

    return _signature_OcaTaskStatus;
  }
}

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
 */
export class OcaTaskCommand extends Enum8 {

  static get TypeName() {
    return "OcaTaskCommand";
  }

  static values() {
    return _values_OcaTaskCommand;
  }

  /**
   * No (invalid) encoding.
   */
  static get None() { return new this(0); }

  /**
   * Initialize task. If successful, resulting task state is
   * <b>Disabled</b>. In this state, a prescheduled task will not
   * automatically run, nor can the task be started with a <b>Start
   * </b>command.
   */
  static get Prepare() { return new this(1); }

  /**
   * Make task available for scheduled or manual start. If successful,
   * resulting task state is <b>Enabled</b>. In this state, the task can be
   * started manually or at a scheduled time.
   */
  static get Enable() { return new this(2); }

  /**
   * Start task execution immediately. If successful, resulting task state
   * is <b>Running</b>.
   */
  static get Start() { return new this(3); }

  /**
   * Stop task gracefully. If successful, resulting task state is
   * <b>Stopped</b>.
   */
  static get Stop() { return new this(4); }

  /**
   * Unconditionally terminate task immediately. Resulting task status is
   * <b>Aborted</b>.
   */
  static get Abort() { return new this(5); }

  /**
   * Place task into <b>Disabled </b>state. In this state, a prescheduled
   * task will not automatically run, nor can the task be started with a
   * <b>Start </b>command.
   */
  static get Disable() { return new this(6); }

  /**
   * De-initialize task. Place it into the <b>NotPrepared </b>state.
   */
  static get Clear() { return new this(7); }
}

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
 */
export class OcaTaskManagerState extends Enum8 {

  static get TypeName() {
    return "OcaTaskManagerState";
  }

  static values() {
    return _values_OcaTaskManagerState;
  }

  /**
   * No (invalid) encoding.
   */
  static get None() { return new this(0); }

  /**
   * Task processing is enabled. Tasks may be running.
   */
  static get Enabled() { return new this(1); }

  /**
   * Task processing is disabled. No tasks are running.
   */
  static get Disabled() { return new this(2); }
}

const _values_OcaRamperInterpolationLaw = {
  Linear: 1,
  ReverseLinear: 2,
  Sine: 3,
  Exponential: 4,
};

/**
 * Interpolation law for ramper to use.
 */
export class OcaRamperInterpolationLaw extends Enum8 {

  static get TypeName() {
    return "OcaRamperInterpolationLaw";
  }

  static values() {
    return _values_OcaRamperInterpolationLaw;
  }

  /**
   * Linear interpolation law
   */
  static get Linear() { return new this(1); }

  /**
   * Reverse linear interpolation law
   */
  static get ReverseLinear() { return new this(2); }

  /**
   * Sine interpolation law
   */
  static get Sine() { return new this(3); }

  /**
   * Exponential interpolation law
   */
  static get Exponential() { return new this(4); }
}

const _values_OcaLibVolType = {
  None: 0,
  ParamSet: 1,
  Patch: 2,
};

/**
 * Enum that describes type of data in a library volume.
 */
export class OcaLibVolType extends Enum8 {

  static get TypeName() {
    return "OcaLibVolType";
  }

  static values() {
    return _values_OcaLibVolType;
  }

  /**
   * Empty library
   */
  static get None() { return new this(0); }

  /**
   * ParamSet library
   */
  static get ParamSet() { return new this(1); }

  /**
   * Patch library
   */
  static get Patch() { return new this(2); }
}

let _signature_OcaLibVolIdentifier = null;

/**
 * Unique identifier of a library volume within the device.
 */
export class OcaLibVolIdentifier {

  static get TypeName() {
    return "OcaLibVolIdentifier";
  }

  constructor(Library, ID) {
    this.Library = Library;
    this.ID = ID;
  }

  get values() {
    return [
      this.Library,
      this.ID,
    ];
  }

  static get signature() {
    if (_signature_OcaLibVolIdentifier === null) {
      _signature_OcaLibVolIdentifier = new signature(UINT32, UINT32);
    }

    return _signature_OcaLibVolIdentifier;
  }
}

const _values_OcaLibAccess = {
  None: 0,
  ReadOnly: 1,
  ReadExpand: 2,
  Full: 3,
};

/**
 * Library volume access modes
 */
export class OcaLibAccess extends Enum8 {

  static get TypeName() {
    return "OcaLibAccess";
  }

  static values() {
    return _values_OcaLibAccess;
  }

  /**
   * The noble savage: Can't read, can't write.
   */
  static get None() { return new this(0); }

  /**
   * Look but don't touch.
   */
  static get ReadOnly() { return new this(1); }

  /**
   * Read and add, but no replacement or deletion.
   */
  static get ReadExpand() { return new this(2); }

  /**
   * All operations allowed.
   */
  static get Full() { return new this(3); }
}

let _signature_OcaLibVolMetadata = null;

/**
 * Descriptor of a library volume. See <b>03 OcaLibrary</b> for
 * explanation.
 */
export class OcaLibVolMetadata {

  static get TypeName() {
    return "OcaLibVolMetadata";
  }

  constructor(Name, Type, Access, Version, Creator, UpDate) {
    this.Name = Name;
    this.Type = Type;
    this.Access = Access;
    this.Version = Version;
    this.Creator = Creator;
    this.UpDate = UpDate;
  }

  get values() {
    return [
      this.Name,
      this.Type,
      this.Access,
      this.Version,
      this.Creator,
      this.UpDate,
    ];
  }

  static get signature() {
    if (_signature_OcaLibVolMetadata === null) {
      _signature_OcaLibVolMetadata = new signature(STRING, UINT8, UINT8, UINT32, STRING, UINT64);
    }

    return _signature_OcaLibVolMetadata;
  }
}

let _signature_OcaLibVol = null;

/**
 * Library volume. template. Template parameter is datatype of the
 * volume. See <b>03 OcaLibrary</b> for explanation.
 */
export class OcaLibVol {

  static get TypeName() {
    return "OcaLibVol";
  }

  constructor(Metadata, Data) {
    this.Metadata = Metadata;
    this.Data = Data;
  }

  get values() {
    return [
      this.Metadata,
      this.Data,
    ];
  }

  static get signature() {
    if (_signature_OcaLibVol === null) {
      _signature_OcaLibVol = new signature(OcaLibVolMetadata, BLOB);
    }

    return _signature_OcaLibVol;
  }
}

let _signature_OcaLibVolData_ParamSet = null;

/**
 * Library volume data for a Parset (short for Parameter Set) volume. A
 * Parset is a collection of operating parameter settings that can be
 * applied to a block. Each Parset is associated with a specific block
 * type, but not with a specific instance of that type. A Parset may be
 * applied to any block instance of the associated type. A block's type
 * is a the object number of its factory or, for factory-defined blocks,
 * a unique identifier set at time of manufacture.
 */
export class OcaLibVolData_ParamSet {

  static get TypeName() {
    return "OcaLibVolData_ParamSet";
  }

  constructor(TargetBlockType, ParData) {
    this.TargetBlockType = TargetBlockType;
    this.ParData = ParData;
  }

  get values() {
    return [
      this.TargetBlockType,
      this.ParData,
    ];
  }

  static get signature() {
    if (_signature_OcaLibVolData_ParamSet === null) {
      _signature_OcaLibVolData_ParamSet = new signature(UINT32, BLOB);
    }

    return _signature_OcaLibVolData_ParamSet;
  }
}

let _signature_OcaLibParamSetAssignment = null;

/**
 * A ParamSet assigment is the description of a binding of a ParamSet to
 * a block instance.
 */
export class OcaLibParamSetAssignment {

  static get TypeName() {
    return "OcaLibParamSetAssignment";
  }

  constructor(ParamSetIdentifier, TargetBlockONo) {
    this.ParamSetIdentifier = ParamSetIdentifier;
    this.TargetBlockONo = TargetBlockONo;
  }

  get values() {
    return [
      this.ParamSetIdentifier,
      this.TargetBlockONo,
    ];
  }

  static get signature() {
    if (_signature_OcaLibParamSetAssignment === null) {
      _signature_OcaLibParamSetAssignment = new signature(UINT16, UINT32);
    }

    return _signature_OcaLibParamSetAssignment;
  }
}

const _values_OcaNetworkLinkType = {
  None: 0,
  EthernetWired: 1,
  EthernetWireless: 2,
  USB: 3,
  SerialP2P: 4,
};

/**
 * Types of layer 2 networks.
 */
export class OcaNetworkLinkType extends Enum8 {

  static get TypeName() {
    return "OcaNetworkLinkType";
  }

  static values() {
    return _values_OcaNetworkLinkType;
  }

  /**
   * No network
   */
  static get None() { return new this(0); }

  /**
   * Wired Ethernet
   */
  static get EthernetWired() { return new this(1); }

  /**
   * Wireless Ethernet
   */
  static get EthernetWireless() { return new this(2); }

  /**
   * USB
   */
  static get USB() { return new this(3); }

  /**
   * Low-speed serial point-to-point
   */
  static get SerialP2P() { return new this(4); }
}

let _signature_OcaNetworkSystemInterfaceDescriptor = null;

/**
 * Descriptor of a system interface used by a network. Format is data
 * network type dependent.
 */
export class OcaNetworkSystemInterfaceDescriptor {

  static get TypeName() {
    return "OcaNetworkSystemInterfaceDescriptor";
  }

  constructor(SystemInterfaceParameters, MyNetworkAddress) {
    this.SystemInterfaceParameters = SystemInterfaceParameters;
    this.MyNetworkAddress = MyNetworkAddress;
  }

  get values() {
    return [
      this.SystemInterfaceParameters,
      this.MyNetworkAddress,
    ];
  }

  static get signature() {
    if (_signature_OcaNetworkSystemInterfaceDescriptor === null) {
      _signature_OcaNetworkSystemInterfaceDescriptor = new signature(BLOB, BLOB);
    }

    return _signature_OcaNetworkSystemInterfaceDescriptor;
  }
}

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
 */
export class OcaApplicationNetworkState extends Enum8 {

  static get TypeName() {
    return "OcaApplicationNetworkState";
  }

  static values() {
    return _values_OcaApplicationNetworkState;
  }

  /**
   * State is not known.
   */
  static get Unknown() { return new this(0); }

  /**
   * Application network is not connected to host data network and is
   * therefore not ready for connection establishng or application data
   * transfer.
   */
  static get NotReady() { return new this(1); }

  /**
   * Application network is in the process of connecting to the host data
   * network and is therefore not ready for connection establishing or
   * application data transfer.
   */
  static get Readying() { return new this(2); }

  /**
   * Application network is connected to host data network and is ready for
   * connection establishing and application data transfer.
   */
  static get Ready() { return new this(3); }

  /**
   * Application network is connected to host data network and is executing
   * connection establishment and application data transfer.
   */
  static get Running() { return new this(4); }

  /**
   * All application data transfer is paused, but connections are still in
   * place.
   */
  static get Paused() { return new this(5); }

  /**
   * Network is in the process of stopping all media application data
   * transport activity and is deleting all media transport connections.
   */
  static get Stopping() { return new this(6); }

  /**
   * No application data transport connections exist, but application
   * network is still connected to host data network.
   */
  static get Stopped() { return new this(7); }

  /**
   * Application network has ceased all activity due to an error, but
   * operating storage elements have not been freed.
   */
  static get Fault() { return new this(8); }
}

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
 */
export class OcaApplicationNetworkCommand extends Enum8 {

  static get TypeName() {
    return "OcaApplicationNetworkCommand";
  }

  static values() {
    return _values_OcaApplicationNetworkCommand;
  }

  /**
   * No-op. State is not changed.
   */
  static get None() { return new this(0); }

  /**
   * Open a connection to the host data network, but do not make any media
   * connections. Resulting state = Ready.
   */
  static get Prepare() { return new this(1); }

  /**
   * Commence media data connection-making and data transfer. Resulting
   * state = Running.
   */
  static get Start() { return new this(2); }

  /**
   * Temporarily halt all media data transfer, but preserve media
   * connections. Resulting state = Paused. nb To unpause, a Start command
   * should be used.
   */
  static get Pause() { return new this(3); }

  /**
   * Cease data transfer and delete all media connections. Resulting state
   * = Stopped.
   */
  static get Stop() { return new this(4); }

  /**
   * Cease all media transfer, delete all media transport connections, and
   * disconnect from the host data network. Resulting state = NotReady.
   */
  static get Reset() { return new this(5); }
}

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
 */
export class OcaNetworkMediaProtocol extends Enum8 {

  static get TypeName() {
    return "OcaNetworkMediaProtocol";
  }

  static values() {
    return _values_OcaNetworkMediaProtocol;
  }

  /**
   * No media protocol - the network does not do media transport.
   */
  static get None() { return new this(0); }

  /**
   * AVnu AV3 - RTP over AVB
   */
  static get AV3() { return new this(1); }

  /**
   * IEEE 1722 / 1722.1
   */
  static get AVBTP() { return new this(2); }

  /**
   * Pre-AV3 Dante with ATP transport
   */
  static get Dante() { return new this(3); }

  /**
   * Cobranet
   */
  static get Cobranet() { return new this(4); }

  /**
   * AES67 network.
   */
  static get AES67() { return new this(5); }

  /**
   * SMPTE 2022? Or 2071? (TBD)
   */
  static get SMPTEAudio() { return new this(6); }

  /**
   * LiveWire media transport
   */
  static get LiveWire() { return new this(7); }

  /**
   * Base value for addition of nonstandard (e.g. proprietary) protocol
   * options
   */
  static get ExtensionPoint() { return new this(65); }
}

const _values_OcaNetworkControlProtocol = {
  None: 0,
  OCP01: 1,
  OCP02: 2,
  OCP03: 3,
};

/**
 * Network control protocols available.
 */
export class OcaNetworkControlProtocol extends Enum8 {

  static get TypeName() {
    return "OcaNetworkControlProtocol";
  }

  static values() {
    return _values_OcaNetworkControlProtocol;
  }

  /**
   * No control protocol - the network does not do control.
   */
  static get None() { return new this(0); }

  /**
   * OCP.1 - OCA protocol for TCP/IP networks
   */
  static get OCP01() { return new this(1); }

  /**
   * OCP.2 - OCA protocol for USB links.
   */
  static get OCP02() { return new this(2); }

  /**
   * OCP.3 - Character XML or JSON (tbd) version of OCA protocol, for
   * serial links and other purposes.
   */
  static get OCP03() { return new this(3); }
}

const _values_OcaMediaConnectorCommand = {
  None: 0,
  Start: 1,
  Pause: 2,
};

/**
 * Command values for OcaMediaNetwork.ControlConnector(...)
 */
export class OcaMediaConnectorCommand extends Enum8 {

  static get TypeName() {
    return "OcaMediaConnectorCommand";
  }

  static values() {
    return _values_OcaMediaConnectorCommand;
  }

  /**
   * No-op. State is not changed.
   */
  static get None() { return new this(0); }

  /**
   * Commence media data connection-making and data transfer. Resulting
   * state = Running.
   */
  static get Start() { return new this(1); }

  /**
   * Pause transferring media data, but preserve media connections.
   * Resulting state = Paused.
   */
  static get Pause() { return new this(2); }
}

const _values_OcaMediaClockAvailability = {
  Unavailable: 0,
  Available: 1,
};

/**
 * Lock states of media clocks.
 */
export class OcaMediaClockAvailability extends Enum8 {

  static get TypeName() {
    return "OcaMediaClockAvailability";
  }

  static values() {
    return _values_OcaMediaClockAvailability;
  }

  /**
   * Media clock is unavailable.
   */
  static get Unavailable() { return new this(0); }

  /**
   * Media clock is available.
   */
  static get Available() { return new this(1); }
}

let _signature_OcaMediaClockRate = null;

/**
 * Media clock nominal rate and associated parameters.
 */
export class OcaMediaClockRate {

  static get TypeName() {
    return "OcaMediaClockRate";
  }

  constructor(NominalRate, PullRange, Accuracy, JitterMax) {
    this.NominalRate = NominalRate;
    this.PullRange = PullRange;
    this.Accuracy = Accuracy;
    this.JitterMax = JitterMax;
  }

  get values() {
    return [
      this.NominalRate,
      this.PullRange,
      this.Accuracy,
      this.JitterMax,
    ];
  }

  static get signature() {
    if (_signature_OcaMediaClockRate === null) {
      _signature_OcaMediaClockRate = new signature(FLOAT32, FLOAT32, FLOAT32, FLOAT32);
    }

    return _signature_OcaMediaClockRate;
  }
}

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
 */
export class OcaTimeReferenceType extends Enum8 {

  static get TypeName() {
    return "OcaTimeReferenceType";
  }

  static values() {
    return _values_OcaTimeReferenceType;
  }

  /**
   * Time reference is undefined.
   */
  static get Undefined() { return new this(0); }

  /**
   * Time reference is internal to device.
   */
  static get Local() { return new this(1); }

  /**
   * Time reference is private to the application.
   */
  static get Private() { return new this(2); }

  /**
   * Time reference is the U.S. Global Positioning System (GPS).
   */
  static get GPS() { return new this(3); }

  /**
   * Time reference is the European Galileo global positioning system.
   */
  static get Galileo() { return new this(4); }

  /**
   * Time reference is the Russian GLONASS global positioning system.
   */
  static get GLONASS() { return new this(5); }
}

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
 */
export class OcaTimeProtocol extends Enum8 {

  static get TypeName() {
    return "OcaTimeProtocol";
  }

  static values() {
    return _values_OcaTimeProtocol;
  }

  /**
   * Time protocol is undefined.
   */
  static get Undefined() { return new this(0); }

  /**
   * Time reference is inside device, so no network time protocol is used.
   */
  static get None() { return new this(1); }

  /**
   * Time protocol is not a public standard.
   */
  static get Private() { return new this(2); }

  /**
   * Time protocol is Network Time Protocol.
   */
  static get NTP() { return new this(3); }

  /**
   * Time protocol is Simple Network Time Protocol.
   */
  static get SNTP() { return new this(4); }

  /**
   * Time protocol is PTP (IEEE 1588), older version.
   */
  static get IEEE1588_2002() { return new this(5); }

  /**
   * Time protocol is PTP (IEEE 1588), newer version.
   */
  static get IEEE1588_2008() { return new this(6); }

  /**
   * Time protocol is IEEE 802.1as.
   */
  static get IEEE_AVB() { return new this(7); }

  /**
   * Time protocol is AES11.
   */
  static get AES11() { return new this(8); }

  /**
   * Time protocol is Genlock
   */
  static get Genlock() { return new this(9); }
}

const _values_OcaTimeSourceAvailability = {
  Unavailable: 0,
  Available: 1,
};

/**
 * States of time sources
 */
export class OcaTimeSourceAvailability extends Enum8 {

  static get TypeName() {
    return "OcaTimeSourceAvailability";
  }

  static values() {
    return _values_OcaTimeSourceAvailability;
  }

  /**
   * Time source is unavailable.
   */
  static get Unavailable() { return new this(0); }

  /**
   * Time source is available.
   */
  static get Available() { return new this(1); }
}

const _values_OcaTimeMode = {
  Absolute: 1,
  Relative: 2,
};

/**
 * Time mode of <b>OcaTask </b>agent.
 */
export class OcaTimeMode extends Enum8 {

  static get TypeName() {
    return "OcaTimeMode";
  }

  static values() {
    return _values_OcaTimeMode;
  }

  /**
   * OcaRamper or OcaTask time mode is absolute.
   */
  static get Absolute() { return new this(1); }

  /**
   * OcaRamper or OcaTask time mode is relative.
   */
  static get Relative() { return new this(2); }
}

const _values_OcaTimeUnits = {
  Seconds: 1,
  Samples: 2,
};

/**
 * Time units of <b>OcaTask </b>agent.
 */
export class OcaTimeUnits extends Enum8 {

  static get TypeName() {
    return "OcaTimeUnits";
  }

  static values() {
    return _values_OcaTimeUnits;
  }

  /**
   * This was not documented in the OCA standard.
   */
  static get Seconds() { return new this(1); }

  /**
   * This was not documented in the OCA standard.
   */
  static get Samples() { return new this(2); }
}

const _values_OcaTimeSourceSyncStatus = {
  Undefined: 0,
  Unsynchronized: 1,
  Synchronizing: 2,
  Synchronized: 3,
};

/**
 * Synchronization statuses.
 */
export class OcaTimeSourceSyncStatus extends Enum8 {

  static get TypeName() {
    return "OcaTimeSourceSyncStatus";
  }

  static values() {
    return _values_OcaTimeSourceSyncStatus;
  }

  /**
   * Lock state is undefined.
   */
  static get Undefined() { return new this(0); }

  /**
   * Time source is not synchronized to reference.
   */
  static get Unsynchronized() { return new this(1); }

  /**
   * Time source is attempting to synchronize to reference.
   */
  static get Synchronizing() { return new this(2); }

  /**
   * Time source is synchronized with reference.
   */
  static get Synchronized() { return new this(3); }
}

let _signature_OcaNetworkSystemInterfaceID = null;

/**
 * ID of a system interface used by a network. Format is data network
 * type dependent.
 */
export class OcaNetworkSystemInterfaceID {

  static get TypeName() {
    return "OcaNetworkSystemInterfaceID";
  }

  constructor(SystemInterfaceHandle, MyNetworkAddress) {
    this.SystemInterfaceHandle = SystemInterfaceHandle;
    this.MyNetworkAddress = MyNetworkAddress;
  }

  get values() {
    return [
      this.SystemInterfaceHandle,
      this.MyNetworkAddress,
    ];
  }

  static get signature() {
    if (_signature_OcaNetworkSystemInterfaceID === null) {
      _signature_OcaNetworkSystemInterfaceID = new signature(BLOB, BLOB);
    }

    return _signature_OcaNetworkSystemInterfaceID;
  }
}

let _signature_OcaNetworkStatistics = null;

/**
 * Historical statistics of the network.
 */
export class OcaNetworkStatistics {

  static get TypeName() {
    return "OcaNetworkStatistics";
  }

  constructor(rxPacketErrors, txPacketErrors) {
    this.rxPacketErrors = rxPacketErrors;
    this.txPacketErrors = txPacketErrors;
  }

  get values() {
    return [
      this.rxPacketErrors,
      this.txPacketErrors,
    ];
  }

  static get signature() {
    if (_signature_OcaNetworkStatistics === null) {
      _signature_OcaNetworkStatistics = new signature(UINT32, UINT32);
    }

    return _signature_OcaNetworkStatistics;
  }
}

let _signature_OcaStreamConnectorIdentification = null;

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
 */
export class OcaStreamConnectorIdentification {

  static get TypeName() {
    return "OcaStreamConnectorIdentification";
  }

  constructor(HostID, NetworkAddress, NodeID, StreamConnectorID) {
    this.HostID = HostID;
    this.NetworkAddress = NetworkAddress;
    this.NodeID = NodeID;
    this.StreamConnectorID = StreamConnectorID;
  }

  get values() {
    return [
      this.HostID,
      this.NetworkAddress,
      this.NodeID,
      this.StreamConnectorID,
    ];
  }

  static get signature() {
    if (_signature_OcaStreamConnectorIdentification === null) {
      _signature_OcaStreamConnectorIdentification = new signature(BLOB, BLOB, BLOB, BLOB);
    }

    return _signature_OcaStreamConnectorIdentification;
  }
}

const _values_OcaStreamType = {
  None: 0,
  Unicast: 1,
  Multicast: 2,
};

/**
 * Type of media endpoint: unicast or multicast.
 */
export class OcaStreamType extends Enum8 {

  static get TypeName() {
    return "OcaStreamType";
  }

  static values() {
    return _values_OcaStreamType;
  }

  /**
   * Unknown media endpoint type.
   */
  static get None() { return new this(0); }

  /**
   * Unicast stream.
   */
  static get Unicast() { return new this(1); }

  /**
   * Multicast stream
   */
  static get Multicast() { return new this(2); }
}

const _values_OcaStreamStatus = {
  NotConnected: 0,
  Connected: 1,
  Paused: 2,
};

/**
 * Status options for a stream.
 */
export class OcaStreamStatus extends Enum8 {

  static get TypeName() {
    return "OcaStreamStatus";
  }

  static values() {
    return _values_OcaStreamStatus;
  }

  /**
   * Connection is not ready to transfer data.
   */
  static get NotConnected() { return new this(0); }

  /**
   * Connection is ready for data transfer.
   */
  static get Connected() { return new this(1); }

  /**
   * Connection is set up, but data transfer has been halted.
   */
  static get Paused() { return new this(2); }
}

let _signature_OcaStream = null;

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
 */
export class OcaStream {

  static get TypeName() {
    return "OcaStream";
  }

  constructor(ErrorNumber, IDAdvertised, Index, Label, LocalConnectorONo, Priority, RemoteConnectorIdentification, Secure, Status, StreamParameters, StreamType) {
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
  }

  get values() {
    return [
      this.ErrorNumber,
      this.IDAdvertised,
      this.Index,
      this.Label,
      this.LocalConnectorONo,
      this.Priority,
      this.RemoteConnectorIdentification,
      this.Secure,
      this.Status,
      this.StreamParameters,
      this.StreamType,
    ];
  }

  static get signature() {
    if (_signature_OcaStream === null) {
      _signature_OcaStream = new signature(UINT16, BLOB, UINT16, STRING, UINT32, UINT16, OcaStreamConnectorIdentification, BOOLEAN, UINT8, BLOB, UINT8);
    }

    return _signature_OcaStream;
  }
}

const _values_OcaMediaClockLockState = {
  Undefined: 0,
  Locked: 1,
  Synchronizing: 2,
  FreeRun: 3,
  Stopped: 4,
};

/**
 * Lock states of media clocks.
 */
export class OcaMediaClockLockState extends Enum8 {

  static get TypeName() {
    return "OcaMediaClockLockState";
  }

  static values() {
    return _values_OcaMediaClockLockState;
  }

  /**
   * Lock state is undefined.
   */
  static get Undefined() { return new this(0); }

  /**
   * Media clock is locked.
   */
  static get Locked() { return new this(1); }

  /**
   * Media clock is attempting to lock.
   */
  static get Synchronizing() { return new this(2); }

  /**
   * Media clock is free-running.
   */
  static get FreeRun() { return new this(3); }

  /**
   * Media clock is stopped.
   */
  static get Stopped() { return new this(4); }
}

const _values_OcaMediaClockType = {
  None: 0,
  Internal: 1,
  Network: 2,
  External: 3,
};

/**
 * Types of media clocks.
 */
export class OcaMediaClockType extends Enum8 {

  static get TypeName() {
    return "OcaMediaClockType";
  }

  static values() {
    return _values_OcaMediaClockType;
  }

  /**
   * No network
   */
  static get None() { return new this(0); }

  /**
   * Internal media clock
   */
  static get Internal() { return new this(1); }

  /**
   * Network media clock
   */
  static get Network() { return new this(2); }

  /**
   * External media clock input on this device
   */
  static get External() { return new this(3); }
}

const _values_OcaRamperCommand = {
  Enable: 1,
  Start: 2,
  Halt: 3,
};

/**
 * Command repertoire of OcaRamper's <b>Control </b>method.
 */
export class OcaRamperCommand extends Enum8 {

  static get TypeName() {
    return "OcaRamperCommand";
  }

  static values() {
    return _values_OcaRamperCommand;
  }

  /**
   * Enable the ramper. Enter <b>Enabled </b>state.
   */
  static get Enable() { return new this(1); }

  /**
   * Unconditionally start ramping now. Enter <b>Ramping</b> state.
   */
  static get Start() { return new this(2); }

  /**
   * If <b>Ramping</b>, stop ramping. Return to <b>Initialized </b>or
   * <b>Scheduled </b>state, whichever is appropriate. Else return to
   */
  static get Halt() { return new this(3); }
}

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
 */
export class OcaRamperState extends Enum8 {

  static get TypeName() {
    return "OcaRamperState";
  }

  static values() {
    return _values_OcaRamperState;
  }

  /**
   * Ramper is not initialized and may not be started or enabled.
   */
  static get NotInitialized() { return new this(1); }

  /**
   * Ramper is initialized sufficiently for nonscheduled ramps to work. A
   * nonscheduled ramp is one that has no defined start time and must be
   * started with the <i>Start</i> command.
   */
  static get Iniitialized() { return new this(2); }

  /**
   * Ramper is initialized sufficiently for both nonscheduled and scheduled
   * ramps to work. A scheduled ramp is one that has a defined start time.
   */
  static get Scheduled() { return new this(3); }

  /**
   * Ramper's timer is running and scheduled ramp will commence at the
   * designated future time.
   */
  static get Enabled() { return new this(4); }

  /**
   * Ramper is currently executing a ramp.
   */
  static get Ramping() { return new this(5); }
}

const _values_OcaNetworkStatus = {
  Unknown: 0,
  Ready: 1,
  StartingUp: 2,
  Stopped: 3,
};

/**
 * Network status enum.
 */
export class OcaNetworkStatus extends Enum8 {

  static get TypeName() {
    return "OcaNetworkStatus";
  }

  static values() {
    return _values_OcaNetworkStatus;
  }

  /**
   * Status is not known for some reason.
   */
  static get Unknown() { return new this(0); }

  /**
   * Network is ready for data transfer.
   */
  static get Ready() { return new this(1); }

  /**
   * Network is starting up.
   */
  static get StartingUp() { return new this(2); }

  /**
   * Network has been stopped by a call to the Stop() method. All media
   * connections and/or control sessions have been closed.
   */
  static get Stopped() { return new this(3); }
}

const _values_OcaStreamConnectorStatus = {
  NotAvailable: 0,
  Idle: 1,
  Connected: 2,
  Paused: 3,
};

/**
 * Status options for a stream connector.
 */
export class OcaStreamConnectorStatus extends Enum8 {

  static get TypeName() {
    return "OcaStreamConnectorStatus";
  }

  static values() {
    return _values_OcaStreamConnectorStatus;
  }

  /**
   * Connector is not ready to transfer data.
   */
  static get NotAvailable() { return new this(0); }

  /**
   * Connector is ready for data transfer but is not connected to any
   * streams.
   */
  static get Idle() { return new this(1); }

  /**
   * Connector is connected to at least one stream.
   */
  static get Connected() { return new this(2); }

  /**
   * Connector is connected to at least one stream but data transfer has
   * been halted by controller request.
   */
  static get Paused() { return new this(3); }
}

const _values_OcaNetworkSignalChannelStatus = {
  NotConnected: 0,
  Connected: 1,
  Muted: 2,
};

/**
 * Status options for a stream.
 */
export class OcaNetworkSignalChannelStatus extends Enum8 {

  static get TypeName() {
    return "OcaNetworkSignalChannelStatus";
  }

  static values() {
    return _values_OcaNetworkSignalChannelStatus;
  }

  /**
   * Channel is not ready to transfer data.
   */
  static get NotConnected() { return new this(0); }

  /**
   * Channel is ready for data transfer.
   */
  static get Connected() { return new this(1); }

  /**
   * Channel is set up, but data transfer has been halted.
   */
  static get Muted() { return new this(2); }
}

const _values_OcaNetworkMediaSourceOrSink = {
  None: 0,
  Source: 1,
  Sink: 2,
};

/**
 * enum that describes whether a port is a source (= sends program into
 * the network; "talker") or sink (=receives program from the network;
 * "listener")
 */
export class OcaNetworkMediaSourceOrSink extends Enum8 {

  static get TypeName() {
    return "OcaNetworkMediaSourceOrSink";
  }

  static values() {
    return _values_OcaNetworkMediaSourceOrSink;
  }

  /**
   * Port direction is undefined.
   */
  static get None() { return new this(0); }

  /**
   * Port is source (= talker)
   */
  static get Source() { return new this(1); }

  /**
   * Port is sink (=listener)
   */
  static get Sink() { return new this(2); }
}
