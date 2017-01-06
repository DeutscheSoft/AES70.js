/*
 * This file has been generated. Please do not modify
 * it directly.
 *
 */
(function(w, module) {
var f = function(w, OCA) {
 var SP = w.SP;
/*!
 *! Unique identifier of a library volume within its library.
 */
/* typedef number OcaLibVolID; */

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
    signature: new SP.signature(SP.STRING, OCA.OcaLibVolType, OCA.OcaLibAccess, SP.UINT32, SP.STRING, SP.UINT64),
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
    signature: new SP.signature(OCA.OcaLibVolIdentifier, SP.UINT32),
    _values : function() {
        return [ this.ParamSetIdentifier, this.TargetBlockONo ];
    },
};


/*!
 *! Library volume data for a Patch volume. A Patch a collection of
 *! ParamSet assignments. A ParamSet assigment is the description of a
 *! binding of a ParamSet to a block instance. To "apply" a Patch is to
 *! apply all of its assignments. To apply an assignment is to set all of
 *! its ParamSet's parameter values into its block.
 */
OCA.OcaLibVolData_Patch = function(Assignments) {
    this.Assignments = Assignments;
};
OCA.OcaLibVolData_Patch.prototype = {
    signature: new SP.signature(SP.LIST(OCA.OcaLibParamSetAssignment)),
    _values : function() {
        return [ this.Assignments ];
    },
};


};
if (module) module.exports = f;
else f(w, w.OCA || (w.OCA = {}));
})(this, module);
