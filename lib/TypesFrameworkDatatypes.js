/*
 * This file has been generated. Please do not modify
 * it directly.
 *
 */
(function(w, module) {
var f = function(w, OCA) {
 var SP = w.SP;
/*!
 *! Class identifier : vector that describes the class's ancestry, in the
 *! following format: <b>n </b>Number of indices to follow <b> i1</b>
 *! Index of Level-1 ancestor. Always = 1, for <b>OcaObject</b>. <b>
 *! i2</b> Index of Level-2 ancestor, if any. ... <b> i(n-1) </b>Index of
 *! immediately prior ancestor (i.e. parent) <b> i(n) </b>Index of the
 *! class within the given parent. Indices need not be consecutive, nor
 *! need the sets of values be compact. Datatype of <b>n</b> is
 *! <b>OcaUint16. </b>Datatype of <b>i1 ... i(n)</b> is
 *! <b>OcaClassIDField.</b> <b> </b>Format of <b>OcaClassIDField</b> is: 1
 *! bit <b>Proprietary</b> flag. 1 for proprietary classes, 0 for standard
 *! classes. 15 bits Index value. Must be unique within the given parent,
 *! at each level. Considering the entire 16-bit field as an unsigned
 *! integer, the following value rules apply: 0 <b>Reserved.</b> Will
 *! never be used. 1 ... 4095 <b>Reserved.</b> Will be defined by OCA.
 *! 4096 ... 32767 <b>Standard classes.</b> 32768 ... 65279 <b>Proprietary
 *! classes,</b> for production devices. 65280 ... 65535 <b>Proprietary
 *! classes, </b>for testing only. Proprietary values may be assigned at
 *! the discetion of the manufacturer. Standard values will be assigned by
 *! the OCA standards organization. If, in a Class ID {n, i1, i2, i3, ...}
 *! a particular index i(k) is proprietary, then all indices to the right
 *! of it must be proprietary as well. This is equivalent to saying that a
 *! standard class may not inherit from a proprietary one.
 */
/* typedef string) OcaClassID; */

/*!
 *! Class version number, ascending from <b>1.</b>
 */
/* typedef int OcaClassVersionNumber; */

/*!
 *! Object number of an OCA object.
 */
/* typedef number OcaONo; */

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
    signature: new SP.signature(SP.UINT32, SP.UINT32, SP.UINT32, OCA.OcaComponent),
    _values : function() {
        return [ this.Major, this.Minor, this.Build, this.Component ];
    },
};

/*!
 *! Class identifier field. There is one of these for each level in the
 *! ClassID. .
 */
OCA.OcaClassIDField = function(Proprietary, Index) {
    this.Proprietary = Proprietary;
    this.Index = Index;
};
OCA.OcaClassIDField.prototype = {
    signature: new SP.signature(SP.BITSTRINGFIXED(1), SP.BITSTRINGFIXED(15)),
    _values : function() {
        return [ this.Proprietary, this.Index ];
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
    signature: new SP.signature(OCA.OcaPropertyID, OCA.OcaBaseDataType, OCA.OcaMethodID, OCA.OcaMethodID),
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


};
if (module) module.exports = f;
else f(w, w.OCA || (w.OCA = {}));
})(this, module);
