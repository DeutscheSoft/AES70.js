/*
 * This file has been generated. Please do not modify
 * it directly.
 *
 */
(function(w, module) {
var f = function(w, OCA) {
 var SP = w.SP;
/*!
 *! Enumeration defining bit flags that indicate the device states CAP
 *! devices can be in. The state is returned by the device's Device
 *! Manager on request. Any combination of the flags may be returned,
 *! unless specified otherwise for the specific flag. A value '0'
 *! indicates the device is fully operational.
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
 *! Enumeration of software &amp; firmware components in the device.
 *! Except for the boot loader, all other values of this enum are
 *! device-specific and will be specified by subclassing this class.
 */
OCA.OcaComponent = SP.enum({
    BootLoader: 0,
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

};
if (module) module.exports = f;
else f(w, w.OCA || (w.OCA = {}));
})(this, module);
