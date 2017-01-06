/*
 * This file has been generated. Please do not modify
 * it directly.
 *
 */
(function(w, module) {
var f = function(w, OCA) {
 var SP = w.SP;
/*!
 *! Describes proto-member of a block factory
 */
/* typedef number OcaProtoMember; */

/*!
 *! Object number of an OCA object.
 */
/* typedef number OcaProtoONo; */

/*!
 *! Coordinate value (x or y) for <b>OcaMatrix. </b>Value is
 *! zero-relative, i.e. the first row or column is number zero. A value of
 *! 65535 means all rows or columns.
 */
/* typedef int OcaMatrixCoordinate; */

/*!
 *! Enum that describes whether a port is for input or output.
 */
OCA.OcaPortMode = SP.enum({
    Input: 1,
    Output: 2,
});


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
 *! Unique identifier of input or output port within a given worker or
 *! block class. Port numbers are ordinals starting at 1, and there are
 *! separate numbering spaces for input and output ports.
 */
OCA.OcaPortID = function(Mode, Index) {
    this.Mode = Mode;
    this.Index = Index;
};
OCA.OcaPortID.prototype = {
    signature: new SP.signature(OCA.OcaPortMode, SP.UINT16),
    _values : function() {
        return [ this.Mode, this.Index ];
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
    signature: new SP.signature(OCA.OcaPortMode, SP.UINT16),
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

};
if (module) module.exports = f;
else f(w, w.OCA || (w.OCA = {}));
})(this, module);
