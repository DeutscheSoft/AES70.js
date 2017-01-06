/*
 * This file has been generated. Please do not modify
 * it directly.
 *
 */
(function(w, module) {
var f = function(w, OCA) {
var mod = {};
var SP = w.SP;
var Properties = function(properties) {
    var name, id_to_name, id;
    this.properties = properties;
    id_to_name = new Map();
    for (name in properties) {
        id = (properties[name].level << 16)|(properties[name].index|0);
        id_to_name[id] = name;
    }
    this.id_to_name = id_to_name;
};
var property_event_data_signature = new SP.signature(OCA.OcaPropertyID, SP.REST);
(function() {
function property_to_id(o) {
    if (o instanceof OCA.OcaPropertyID) {
        return (o.DefLevel << 16)|(o.PropertyIndex|0);
    }
    throw("Bad PropertyID");
}
function find_name(o) {
    var id = property_to_id(o);
    return this.id_to_name[id]; 
}
function find_property(o) {
    var name = (typeof(o) === "string") ? o : find_name.call(this, o);
    if (!name) throw("Bad PropertyID");
    return this.properties[name];
}
function find_signature(o) {
    var property = find_property.call(this, o);

    if (!property) throw("Bad PropertyID");

    return property.signature;
}
Properties.prototype = {
    extend: function(properties) {
        return new Properties(Object.assign(Object.create(this.properties), properties));
    },
    find_name: find_name,
    find_property: find_property,
    find_signature: find_signature,
    get_properties: function(o) {
        var name, property;
        var sync = {};
        var expected_names = [];
        var getters = [];
        for (name in this.properties) {
            property = this.properties[name];
            if (property.static && property.readonly) {
                // things like ClassID
                sync[name] = o[name];
            } else if (property.readonly && o.hasOwnProperty(name)) {
                // things like ObjectNumber
                sync[name] = o[name];
            } else if (typeof(o["Get"+name]) === "function") {
                // These trigger errors in the focusrite virtual device
                if (name == "Latency" || name == "Owner" || name == "Label")
                    continue;
                getters.push(o["Get"+name]());
                expected_names.push(name);
            }
        }
        return o.onPropertyChanged(function(n) {
            var a = property_event_data_signature.decode(new DataView(n.parameters));
            var property_id = a[0];
            var buf = a[1];
            var name = this.find_name(property_id);
            var sig = this.find_signature(property_id);
            sync[name] = sig.decode(new DataView(buf));
        }.bind(this)).then(function() {
            return Promise.all(getters).then(function(values) {
                var i;
                for (i = 0; i < values.length; i++) sync[expected_names[i]] = values[i];
                return sync;
            });
        });
    },
};
})();
var RemoteObject = function(ObjectNumber, device) {
    this.ObjectNumber = ObjectNumber;
    this.device = device;
};
RemoteObject.prototype = {
    find_property: function(o) {
        return this.__oca_properties__.find_property(o);
    },
    find_property_name: function(o) {
        return this.__oca_properties__.find_name(o);
    },
    find_property_signature: function(o) {
        return this.__oca_properties__.find_signature(o);
    },
    get_properties: function() {
        return this.__oca_properties__.get_properties(this);
    },
    on_property_changed: function(name, callback) {
        var P = this.find_property(name);
        if (!P) throw("No property: "+name);

        return this.onPropertyChanged(function(ev) {
            var a = property_event_data_signature.decode(new DataView(ev.parameters));
            var property_id = a[0];
            var buf = a[1];
            var pname = this.find_property_name(property_id);
            if (pname === name) {
                callback(P.signature.decode(new DataView(buf)));
            }
        }.bind(this));
    },
};
mod.RemoteObject = RemoteObject;


/**
 * The abstract root class of which all OCA classes derive. It offers
 * basic OCA functionality such as locking an object and generalized data
 * access.
 */
function OcaRoot(ObjectNumber, device) {
    RemoteObject.call(this, ObjectNumber, device);
};
mod.OcaRoot = OcaRoot;
OcaRoot.prototype = Object.assign(Object.create(RemoteObject.prototype), {
    __oca_properties__: new Properties({
        ClassID: {
            signature: new SP.signature(SP.BLOB16),
            level: 1,
            index: 1,
            readonly: true,
            static: true,
        },
        ClassVersion: {
            signature: new SP.signature(SP.UINT16),
            level: 1,
            index: 2,
            readonly: true,
            static: true,
        },
        ObjectNumber: {
            signature: new SP.signature(SP.UINT32),
            level: 1,
            index: 3,
            readonly: true,
            static: false,
        },
        Lockable: {
            signature: new SP.signature(SP.BOOLEAN),
            level: 1,
            index: 4,
            readonly: true,
            static: false,
        },
        Role: {
            signature: new SP.signature(SP.STRING),
            level: 1,
            index: 5,
            readonly: true,
            static: false,
        },
    }),
    ClassID: "\u0001",
    ClassVersion: 1,
    ClassName: "OcaRoot",
});
/**
 * Gets the class identification, a structure that contains the ClassID
 * and ClassVersion. The return value indicates whether the property was
 * successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(OCA.OcaClassIdentification);
OcaRoot.prototype.GetClassIdentification = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 1, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Gets the value of the Lockable property. The return value indicates
 * whether the property was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.BOOLEAN);
OcaRoot.prototype.GetLockable = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 1, 2, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Locks the object so that it can only be accessed by the lockholder.
 * The return value indicates whether the operation succeeded.
 */
(function() {
OcaRoot.prototype.Lock = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 1, 3, 0);
    return device.send_command(cmd);
}
})();
/**
 * Unlocks the object so that it can be freely accessed again. This
 * method can only succeed if it is called by the lockholder. The return
 * value indicates whether the operation succeeded.
 */
(function() {
OcaRoot.prototype.Unlock = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 1, 4, 0);
    return device.send_command(cmd);
}
})();
/**
 * Gets the value of the Role property. The return value indicates
 * whether the operation succeeded.
 */
(function() {
var retval_signature = new SP.signature(SP.STRING);
OcaRoot.prototype.GetRole = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 1, 5, 0);
    return device.send_command(cmd, retval_signature);
}
})();
OcaRoot.prototype.onPropertyChanged = function(callback) {
    return this.device.add_subscription(new OCA.OcaEvent(this.ObjectNumber, new OCA.OcaEventID(1, 1)), callback);
};


/**
 * Abstract base class for classes that represent the device's
 * application and support functions.
 */
function OcaWorker(ObjectNumber, device) {
    OcaRoot.call(this, ObjectNumber, device);
};
mod.OcaWorker = OcaWorker;
OcaWorker.prototype = Object.assign(Object.create(OcaRoot.prototype), {
    __oca_properties__: OcaRoot.prototype.__oca_properties__.extend({
        Enabled: {
            signature: new SP.signature(SP.BOOLEAN),
            level: 2,
            index: 1,
            readonly: false,
            static: false,
        },
        Ports: {
            signature: new SP.signature(SP.LIST(OCA.OcaPort)),
            level: 2,
            index: 2,
            readonly: false,
            static: false,
        },
        Label: {
            signature: new SP.signature(SP.STRING),
            level: 2,
            index: 3,
            readonly: false,
            static: false,
        },
        Owner: {
            signature: new SP.signature(SP.UINT32),
            level: 2,
            index: 4,
            readonly: false,
            static: false,
        },
        Latency: {
            signature: new SP.signature(SP.FLOAT32),
            level: 2,
            index: 5,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0001",
    ClassVersion: 1,
    ClassName: "OcaWorker",
});
/**
 * Gets the value of the Enabled property. The return value indicates
 * whether the property was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.BOOLEAN);
OcaWorker.prototype.GetEnabled = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 2, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the value of the Enabled property. The return value indicates
 * whether the property was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.BOOLEAN);
OcaWorker.prototype.SetEnabled = function(enabled) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 2, 2, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Adds an input or output port.
 */
(function() {
var argument_signature = new SP.signature(SP.STRING, OCA.OcaPortMode);
var retval_signature = new SP.signature(OCA.OcaPortID);
OcaWorker.prototype.AddPort = function(Label, Mode) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 2, 3, 2,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Deletes an input or output port.
 */
(function() {
var argument_signature = new SP.signature(OCA.OcaPortID);
OcaWorker.prototype.DeletePort = function(ID) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 2, 4, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the value of the OcaPorts property. The return value indicates
 * whether the property was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.LIST(OCA.OcaPort));
OcaWorker.prototype.GetPorts = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 2, 5, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Gets the name of the designated port. The return value indicates
 * whether the name was successfully retrieved.
 */
(function() {
var argument_signature = new SP.signature(OCA.OcaPortID);
var retval_signature = new SP.signature(SP.STRING);
OcaWorker.prototype.GetPortName = function(PortID) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 2, 6, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the name of the designated port. The return value indicates
 * whether the name was successfully set.
 */
(function() {
var argument_signature = new SP.signature(OCA.OcaPortID, SP.STRING);
OcaWorker.prototype.SetPortName = function(PortID, Name) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 2, 7, 2,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the value of the Label property. The return value indicates
 * whether the property was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.STRING);
OcaWorker.prototype.GetLabel = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 2, 8, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the value of the Label property. The return value indicates
 * whether the property was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.STRING);
OcaWorker.prototype.SetLabel = function(label) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 2, 9, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the value of the Owner property. The return value indicates
 * whether the property was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.UINT32);
OcaWorker.prototype.GetOwner = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 2, 10, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Gets the value of the Latency property. The return value indicates
 * whether the property was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.FLOAT32);
OcaWorker.prototype.GetLatency = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 2, 11, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the value of the Latency property. The return value indicates
 * whether the property was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.FLOAT32);
OcaWorker.prototype.SetLatency = function(latency) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 2, 12, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();


/**
 * Abstract base class for all actuators (i.e. devices that affect the
 * routing and/or content of the audio signal, or provide ancillary
 * functions such as power).
 */
function OcaActuator(ObjectNumber, device) {
    OcaWorker.call(this, ObjectNumber, device);
};
mod.OcaActuator = OcaActuator;
OcaActuator.prototype = Object.assign(Object.create(OcaWorker.prototype), {
    __oca_properties__: OcaWorker.prototype.__oca_properties__.extend({
    }),
    ClassID: "\u0001\u0001\u0001",
    ClassVersion: 1,
    ClassName: "OcaActuator",
});


/**
 * Signal mute.
 */
function OcaMute(ObjectNumber, device) {
    OcaActuator.call(this, ObjectNumber, device);
};
mod.OcaMute = OcaMute;
OcaMute.prototype = Object.assign(Object.create(OcaActuator.prototype), {
    __oca_properties__: OcaActuator.prototype.__oca_properties__.extend({
        State: {
            signature: new SP.signature(OCA.OcaMuteState),
            level: 4,
            index: 1,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0001\u0001\u0002",
    ClassVersion: 1,
    ClassName: "OcaMute",
});
/**
 * Gets the current mute state. The return value indicates whether the
 * state was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(OCA.OcaMuteState);
OcaMute.prototype.GetState = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the mute state (i.e. value of the State property). The return
 * value indicates whether the state was successfully set.
 */
(function() {
var argument_signature = new SP.signature(OCA.OcaMuteState);
OcaMute.prototype.SetState = function(state) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 2, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();


/**
 * Signal inverter
 */
function OcaPolarity(ObjectNumber, device) {
    OcaActuator.call(this, ObjectNumber, device);
};
mod.OcaPolarity = OcaPolarity;
OcaPolarity.prototype = Object.assign(Object.create(OcaActuator.prototype), {
    __oca_properties__: OcaActuator.prototype.__oca_properties__.extend({
        State: {
            signature: new SP.signature(OCA.OcaPolarityState),
            level: 4,
            index: 1,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0001\u0001\u0003",
    ClassVersion: 1,
    ClassName: "OcaPolarity",
});
/**
 * Gets the current inverter state. The return value indicates whether
 * the state was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(OCA.OcaPolarityState);
OcaPolarity.prototype.GetState = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the inversion state (i.e. value of the State property). The
 * return value indicates whether the state was successfully set.
 */
(function() {
var argument_signature = new SP.signature(OCA.OcaPolarityState);
OcaPolarity.prototype.SetState = function(state) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 2, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();


/**
 * (n)-position single-pole switch.
 */
function OcaSwitch(ObjectNumber, device) {
    OcaActuator.call(this, ObjectNumber, device);
};
mod.OcaSwitch = OcaSwitch;
OcaSwitch.prototype = Object.assign(Object.create(OcaActuator.prototype), {
    __oca_properties__: OcaActuator.prototype.__oca_properties__.extend({
        Position: {
            signature: new SP.signature(SP.UINT16),
            level: 4,
            index: 1,
            readonly: false,
            static: false,
        },
        PositionNames: {
            signature: new SP.signature(SP.LIST(SP.STRING)),
            level: 4,
            index: 2,
            readonly: false,
            static: false,
        },
        PositionEnable: {
            signature: new SP.signature(SP.LIST(SP.BOOLEAN)),
            level: 4,
            index: 3,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0001\u0001\u0004",
    ClassVersion: 1,
    ClassName: "OcaSwitch",
});
/**
 * Gets the value of the Position property and, optionally, its
 * implementation min and max. The return value indicates whether the
 * data was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.UINT16, SP.UINT16, SP.UINT16);
OcaSwitch.prototype.GetPosition = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the value of the Position property. The return value indicates
 * whether the property was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.UINT16);
OcaSwitch.prototype.SetPosition = function(position) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 2, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the name assigned to a given switch position. The return value
 * indicates whether the name was successfully retrieved.
 */
(function() {
var argument_signature = new SP.signature(SP.UINT16);
var retval_signature = new SP.signature(SP.STRING);
OcaSwitch.prototype.GetPositionName = function(Index) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 3, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Assigns a name to a given switch position. The return value indicates
 * whether the name was successfully assigned.
 */
(function() {
var argument_signature = new SP.signature(SP.UINT16, SP.STRING);
OcaSwitch.prototype.SetPositionName = function(Index, Name) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 4, 2,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets list of names assigned to the switch's positions. The return
 * value indicates whether the names were successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.LIST(SP.STRING));
OcaSwitch.prototype.GetPositionNames = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 5, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Assigns names to the switch's positions. The return value indicates
 * whether the names were successfully assigned.
 */
(function() {
var argument_signature = new SP.signature(SP.LIST(SP.STRING));
OcaSwitch.prototype.SetPositionNames = function(Names) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 6, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the Enabled flag assigned to a given switch position. The return
 * value indicates whether the flag was successfully retrieved.
 */
(function() {
var argument_signature = new SP.signature(SP.UINT16);
var retval_signature = new SP.signature(SP.BOOLEAN);
OcaSwitch.prototype.GetPositionEnabled = function(Index) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 7, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the Enabled flag assigned to a given switch position. The return
 * value indicates whether the flag was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.UINT16, SP.BOOLEAN);
OcaSwitch.prototype.SetPositionEnabled = function(Index, enabled) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 8, 2,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets list of Enabled flags assigned to the switch's positions. The
 * return value indicates whether the flags were successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.LIST(SP.BOOLEAN));
OcaSwitch.prototype.GetPositionEnableds = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 9, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets list of Enabled flags for the switch's positions. The return
 * value indicates whether the flags were successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.LIST(SP.BOOLEAN));
OcaSwitch.prototype.SetPositionEnableds = function(enableds) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 10, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();


/**
 * Gain (or attenuation) element.
 */
function OcaGain(ObjectNumber, device) {
    OcaActuator.call(this, ObjectNumber, device);
};
mod.OcaGain = OcaGain;
OcaGain.prototype = Object.assign(Object.create(OcaActuator.prototype), {
    __oca_properties__: OcaActuator.prototype.__oca_properties__.extend({
        Gain: {
            signature: new SP.signature(SP.FLOAT32),
            level: 4,
            index: 1,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0001\u0001\u0005",
    ClassVersion: 1,
    ClassName: "OcaGain",
});
/**
 * Gets the value and limits of the Gain property. The return value
 * indicates whether the data was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaGain.prototype.GetGain = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the value of the Gain property. The return value indicates
 * whether the property was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.FLOAT32);
OcaGain.prototype.SetGain = function(Gain) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 2, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();


/**
 * Pan or Balance control.
 */
function OcaPanBalance(ObjectNumber, device) {
    RemoteObject.call(this, ObjectNumber, device);
};
mod.OcaPanBalance = OcaPanBalance;
OcaPanBalance.prototype = Object.assign(Object.create(RemoteObject.prototype), {
    __oca_properties__: new Properties({
        ClassID: {
            signature: new SP.signature(SP.BLOB16),
            level: 1,
            index: 1,
            readonly: true,
            static: true,
        },
        ClassVersion: {
            signature: new SP.signature(SP.UINT16),
            level: 1,
            index: 2,
            readonly: true,
            static: true,
        },
    }),
    ClassID: "\u0001\u0001\u0001\u0006",
    ClassVersion: 1,
    ClassName: "OcaPanBalance",
});
/**
 * Gets the value and limits of the Position property. The return value
 * indicates whether the data was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaPanBalance.prototype.GetPosition = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 1, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the value of the Position property. The return value indicates
 * whether the property was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.FLOAT32);
OcaPanBalance.prototype.SetPosition = function(Position) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 1, 2, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the value and limits of the MidpointGain property. The return
 * value indicates whether the data was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaPanBalance.prototype.GetMidpointGain = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 1, 3, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the value of the MidpointGain property. The return value
 * indicates whether the property was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.FLOAT32);
OcaPanBalance.prototype.SetMidpointGain = function(Gain) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 1, 4, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();


/**
 * Signal delay - basic version.
 */
function OcaDelay(ObjectNumber, device) {
    OcaActuator.call(this, ObjectNumber, device);
};
mod.OcaDelay = OcaDelay;
OcaDelay.prototype = Object.assign(Object.create(OcaActuator.prototype), {
    __oca_properties__: OcaActuator.prototype.__oca_properties__.extend({
        DelayTime: {
            signature: new SP.signature(SP.FLOAT32),
            level: 4,
            index: 1,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0001\u0001\u0007",
    ClassVersion: 1,
    ClassName: "OcaDelay",
});
/**
 * Gets the value of the DelayTime property. The return value indicates
 * whether the property was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaDelay.prototype.GetDelayTime = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the value of the DelayTime property. The return value indicates
 * whether the property was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.FLOAT32);
OcaDelay.prototype.SetDelayTime = function(delayTime) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 2, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();


/**
 * Signal delay - extended version. Allows setting delay value in various
 * units. Note that the inherited property 04p01 DelayTime is also
 * supported by this class and reflects actual achieved delay in seconds.
 */
function OcaDelayExtended(ObjectNumber, device) {
    OcaDelay.call(this, ObjectNumber, device);
};
mod.OcaDelayExtended = OcaDelayExtended;
OcaDelayExtended.prototype = Object.assign(Object.create(OcaDelay.prototype), {
    __oca_properties__: OcaDelay.prototype.__oca_properties__.extend({
        DelayValue: {
            signature: new SP.signature(OCA.OcaDelayValue),
            level: 5,
            index: 1,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0001\u0001\u0007\u0001",
    ClassVersion: 1,
    ClassName: "OcaDelayExtended",
});
/**
 * Gets the value of the DelayValue property. The return value indicates
 * whether the property was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(OCA.OcaDelayValue, OCA.OcaDelayValue, OCA.OcaDelayValue);
OcaDelayExtended.prototype.GetDelayValue = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the value of the DelayValue property. The return value indicates
 * whether the property was successfully set.
 */
(function() {
var argument_signature = new SP.signature(OCA.OcaDelayValue);
OcaDelayExtended.prototype.SetDelayValue = function(Value) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 2, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Return current delay setting, converted to given units. The return
 * value indicates whether the method has succeeded.
 */
(function() {
var argument_signature = new SP.signature(OCA.OcaDelayUnit);
var retval_signature = new SP.signature(OCA.OcaDelayValue);
OcaDelayExtended.prototype.GetDelayValueConverted = function(UoM) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 3, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd, retval_signature);
}
})();


/**
 * Simple frequency actuator.
 */
function OcaFrequencyActuator(ObjectNumber, device) {
    OcaActuator.call(this, ObjectNumber, device);
};
mod.OcaFrequencyActuator = OcaFrequencyActuator;
OcaFrequencyActuator.prototype = Object.assign(Object.create(OcaActuator.prototype), {
    __oca_properties__: OcaActuator.prototype.__oca_properties__.extend({
        Frequency: {
            signature: new SP.signature(SP.FLOAT32),
            level: 4,
            index: 1,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0001\u0001\b",
    ClassVersion: 1,
    ClassName: "OcaFrequencyActuator",
});
/**
 * Gets the value of the Frequency property. The return value indicates
 * whether the property was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaFrequencyActuator.prototype.GetFrequency = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the value of the Frequency property. The return value indicates
 * whether the property was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.FLOAT32);
OcaFrequencyActuator.prototype.SetFrequency = function(Frequency) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 2, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();


/**
 * A classical analog-style filter - highpass, lowpass, bandpass, etc.,
 * with shape characteristics such as Butterworth, Chebyshev, Bessel, and
 * Linkwitz-Riley. Frequently used in loudspeaker crossover networks.
 */
function OcaFilterClassical(ObjectNumber, device) {
    OcaActuator.call(this, ObjectNumber, device);
};
mod.OcaFilterClassical = OcaFilterClassical;
OcaFilterClassical.prototype = Object.assign(Object.create(OcaActuator.prototype), {
    __oca_properties__: OcaActuator.prototype.__oca_properties__.extend({
        Frequency: {
            signature: new SP.signature(SP.FLOAT32),
            level: 4,
            index: 1,
            readonly: false,
            static: false,
        },
        Passband: {
            signature: new SP.signature(OCA.OcaFilterPassBand),
            level: 4,
            index: 2,
            readonly: false,
            static: false,
        },
        Shape: {
            signature: new SP.signature(OCA.OcaClassicalFilterShape),
            level: 4,
            index: 3,
            readonly: false,
            static: false,
        },
        Order: {
            signature: new SP.signature(SP.UINT16),
            level: 4,
            index: 4,
            readonly: false,
            static: false,
        },
        Parameter: {
            signature: new SP.signature(SP.FLOAT32),
            level: 4,
            index: 5,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0001\u0001\t",
    ClassVersion: 1,
    ClassName: "OcaFilterClassical",
});
/**
 * Gets the value of the Frequency property. The return value indicates
 * if the property was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaFilterClassical.prototype.GetFrequency = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the value of the Frequency property. The return value indicates
 * if the property was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.FLOAT32);
OcaFilterClassical.prototype.SetFrequency = function(frequency) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 2, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Returns the passband specification of the filter object. The return
 * value indicates if the specification was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(OCA.OcaFilterPassBand);
OcaFilterClassical.prototype.GetPassband = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 3, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the passband specification of the filter object. The return value
 * indicates if the specification was successfully set.
 */
(function() {
var argument_signature = new SP.signature(OCA.OcaFilterPassBand);
OcaFilterClassical.prototype.SetPassband = function(Passband) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 4, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Returns the Shape property of the filter. The return value indicates
 * if the property was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(OCA.OcaClassicalFilterShape);
OcaFilterClassical.prototype.GetShape = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 5, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the Shape property of the filter. The return value indicates if
 * the property was successfully set.
 */
(function() {
var argument_signature = new SP.signature(OCA.OcaClassicalFilterShape);
OcaFilterClassical.prototype.SetShape = function(Shape) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 6, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Returns the order of the filter. The return value indicates if the
 * property was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.UINT16, SP.UINT16, SP.UINT16);
OcaFilterClassical.prototype.GetOrder = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 7, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the order of the filter. The return value indicates if the
 * property was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.UINT16);
OcaFilterClassical.prototype.SetOrder = function(Order) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 8, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Returns the filter parameter. The return value indicates if the
 * property was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaFilterClassical.prototype.GetParameter = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 9, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the filter parameter. The return value indicates if the parameter
 * was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.FLOAT32);
OcaFilterClassical.prototype.SetParameter = function(Parameter) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 10, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();


/**
 * A parametric equalizer section with various shape options.
 */
function OcaFilterParametric(ObjectNumber, device) {
    RemoteObject.call(this, ObjectNumber, device);
};
mod.OcaFilterParametric = OcaFilterParametric;
OcaFilterParametric.prototype = Object.assign(Object.create(RemoteObject.prototype), {
    __oca_properties__: new Properties({
        ClassID: {
            signature: new SP.signature(SP.BLOB16),
            level: 1,
            index: 1,
            readonly: true,
            static: true,
        },
        ClassVersion: {
            signature: new SP.signature(SP.UINT16),
            level: 1,
            index: 2,
            readonly: true,
            static: true,
        },
    }),
    ClassID: "\u0001\u0001\u0001\n",
    ClassVersion: 1,
    ClassName: "OcaFilterParametric",
});
/**
 * Gets the equalizer frequency setpoint. The return value indicates
 * whether the data was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaFilterParametric.prototype.GetFrequency = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 1, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the equalizer frequency. The return value indicates whether the
 * value was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.FLOAT32);
OcaFilterParametric.prototype.SetFrequency = function(Frequency) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 1, 2, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the curve shape of the equalizer. The return value indicates
 * whether the data was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(OCA.OcaParametricEQShape);
OcaFilterParametric.prototype.GetShape = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 1, 3, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the curve shape shape of the equalizer. The return value
 * indicates whether the shape was successfully set.
 */
(function() {
var argument_signature = new SP.signature(OCA.OcaParametricEQShape);
OcaFilterParametric.prototype.SetShape = function(type) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 1, 4, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the Q of the equalizer. The return value indicates whether the
 * data was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.FLOAT32);
OcaFilterParametric.prototype.GetQ = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 1, 5, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the Q of the equalizer. The return value indicates whether the Q
 * was successfully set.
 */
(function() {
var retval_signature = new SP.signature(SP.FLOAT32);
OcaFilterParametric.prototype.SetQ = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 1, 6, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Returns the passband gain of the equalizer. The return value indicates
 * whether the data was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaFilterParametric.prototype.GetPassbandGain = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 1, 7, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the passband gain of the equalizer. The return value indicates
 * whether the gain was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.FLOAT32);
OcaFilterParametric.prototype.SetPassbandgain = function(gain) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 1, 8, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();


/**
 * A generic Z-domain rational polynomial filter section: <u>A(0) + A(1)z
 * + A(2)z^2 + A(3)z^3 + ...</u> B(0) + B(1)z + B(2)z^2 + B(3)z^3 + ...
 */
function OcaFilterPolynomial(ObjectNumber, device) {
    OcaActuator.call(this, ObjectNumber, device);
};
mod.OcaFilterPolynomial = OcaFilterPolynomial;
OcaFilterPolynomial.prototype = Object.assign(Object.create(OcaActuator.prototype), {
    __oca_properties__: OcaActuator.prototype.__oca_properties__.extend({
        A: {
            signature: new SP.signature(SP.LIST(SP.FLOAT32)),
            level: 4,
            index: 1,
            readonly: false,
            static: false,
        },
        B: {
            signature: new SP.signature(SP.LIST(SP.FLOAT32)),
            level: 4,
            index: 2,
            readonly: false,
            static: false,
        },
        SampleRate: {
            signature: new SP.signature(SP.FLOAT32),
            level: 4,
            index: 3,
            readonly: false,
            static: false,
        },
        MaxOrder: {
            signature: new SP.signature(SP.UINT8),
            level: 4,
            index: 4,
            readonly: true,
            static: false,
        },
    }),
    ClassID: "\u0001\u0001\u0001\u000b",
    ClassVersion: 1,
    ClassName: "OcaFilterPolynomial",
});
/**
 * Returns the polynomial coefficients used.
 */
(function() {
var retval_signature = new SP.signature(SP.LIST(SP.FLOAT32), SP.LIST(SP.FLOAT32));
OcaFilterPolynomial.prototype.GetCoefficients = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the polynomial coefficients.
 */
(function() {
var retval_signature = new SP.signature(SP.LIST(SP.FLOAT32), SP.LIST(SP.FLOAT32));
OcaFilterPolynomial.prototype.SetCoefficients = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 2, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Gets the filter sampling rate.
 */
(function() {
var retval_signature = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaFilterPolynomial.prototype.GetSampleRate = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 3, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the filter sampling rate.
 */
(function() {
var argument_signature = new SP.signature(SP.FLOAT32);
OcaFilterPolynomial.prototype.SetSampleRate = function(Rate) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 4, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the maximum allowable order (= max number of array elements in
 * numerator and for denominator arrays)
 */
(function() {
var retval_signature = new SP.signature(SP.UINT8);
OcaFilterPolynomial.prototype.GetMaxOrder = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 5, 0);
    return device.send_command(cmd, retval_signature);
}
})();


/**
 * A finite impulse response (FIR) filter.
 */
function OcaFilterFIR(ObjectNumber, device) {
    OcaActuator.call(this, ObjectNumber, device);
};
mod.OcaFilterFIR = OcaFilterFIR;
OcaFilterFIR.prototype = Object.assign(Object.create(OcaActuator.prototype), {
    __oca_properties__: OcaActuator.prototype.__oca_properties__.extend({
        Length: {
            signature: new SP.signature(SP.UINT32),
            level: 4,
            index: 1,
            readonly: true,
            static: false,
        },
        Coefficients: {
            signature: new SP.signature(SP.LIST(SP.FLOAT32)),
            level: 4,
            index: 2,
            readonly: false,
            static: false,
        },
        SampleRate: {
            signature: new SP.signature(SP.FLOAT32),
            level: 4,
            index: 3,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0001\u0001\f",
    ClassVersion: 1,
    ClassName: "OcaFilterFIR",
});
/**
 * Gets the length of the FIR filter. The return value indicates whether
 * the value was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.UINT32, SP.UINT32, SP.UINT32);
OcaFilterFIR.prototype.GetLength = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Gets the coefficients of the FIR filter. The return value indicates
 * whether the coefficients were successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.LIST(SP.FLOAT32));
OcaFilterFIR.prototype.GetCoefficients = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 2, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the value of the properties of the FIR filter. The return value
 * indicates whether the properties were successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.LIST(SP.FLOAT32));
OcaFilterFIR.prototype.SetCoefficients = function(Coefficients) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 3, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the sample rate of the FIR filter. The return value indicates
 * whether the data was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaFilterFIR.prototype.GetSampleRate = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 4, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the sample rate of the FIR filter. The return value indicates
 * whether the rate was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.FLOAT32);
OcaFilterFIR.prototype.SetSampleRate = function(Rate) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 5, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();


/**
 * An arbitrary-curve filter, with transfer function specified as
 * amplitude and phase versus frequency.
 */
function OcaFilterArbitraryCurve(ObjectNumber, device) {
    OcaActuator.call(this, ObjectNumber, device);
};
mod.OcaFilterArbitraryCurve = OcaFilterArbitraryCurve;
OcaFilterArbitraryCurve.prototype = Object.assign(Object.create(OcaActuator.prototype), {
    __oca_properties__: OcaActuator.prototype.__oca_properties__.extend({
        TransferFunction: {
            signature: new SP.signature(OCA.OcaTransferFunction),
            level: 4,
            index: 1,
            readonly: false,
            static: false,
        },
        SampleRate: {
            signature: new SP.signature(SP.FLOAT32),
            level: 4,
            index: 2,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0001\u0001\r",
    ClassVersion: 1,
    ClassName: "OcaFilterArbitraryCurve",
});
/**
 * Returns the complex transfer function.
 */
(function() {
var retval_signature = new SP.signature(OCA.OcaTransferFunction);
OcaFilterArbitraryCurve.prototype.GetTransferFunction = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the complex transfer function.
 */
(function() {
var argument_signature = new SP.signature(SP.LIST(SP.FLOAT32), SP.LIST(SP.FLOAT32), SP.LIST(SP.FLOAT32));
OcaFilterArbitraryCurve.prototype.SetTransferFunction = function(Frequency, Amplitude, Phase) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 2, 3,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the filter sampling rate.
 */
(function() {
var retval_signature = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaFilterArbitraryCurve.prototype.GetSampleRate = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 3, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the filter sampling rate.
 */
(function() {
var argument_signature = new SP.signature(SP.FLOAT32);
OcaFilterArbitraryCurve.prototype.SetSampleRate = function(Rate) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 4, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();


/**
 * A multipurpose dynamics processor. Can be configured as compressor,
 * limiter, expander, or gate. This class is expected to handle the
 * majority of the basic cases. More complex devices may be described in
 * a different manner, using one or more <b>OcaDynamicsDetector</b> and
 * <b>OcaDynamicsCurve</b> objects, in conjunction with other Worker
 * objects as needed.
 */
function OcaDynamics(ObjectNumber, device) {
    OcaActuator.call(this, ObjectNumber, device);
};
mod.OcaDynamics = OcaDynamics;
OcaDynamics.prototype = Object.assign(Object.create(OcaActuator.prototype), {
    __oca_properties__: OcaActuator.prototype.__oca_properties__.extend({
        Triggered: {
            signature: new SP.signature(SP.BOOLEAN),
            level: 4,
            index: 1,
            readonly: false,
            static: false,
        },
        DynamicGain: {
            signature: new SP.signature(SP.FLOAT32),
            level: 4,
            index: 2,
            readonly: false,
            static: false,
        },
        Function: {
            signature: new SP.signature(OCA.OcaDynamicsFunction),
            level: 4,
            index: 3,
            readonly: false,
            static: false,
        },
        Ratio: {
            signature: new SP.signature(SP.FLOAT32),
            level: 4,
            index: 4,
            readonly: false,
            static: false,
        },
        Threshold: {
            signature: new SP.signature(SP.FLOAT32),
            level: 4,
            index: 5,
            readonly: false,
            static: false,
        },
        ThresholdPresentationUnits: {
            signature: new SP.signature(OCA.OcaPresentationUnit),
            level: 4,
            index: 6,
            readonly: false,
            static: false,
        },
        DetectorLaw: {
            signature: new SP.signature(SP.UINT8),
            level: 4,
            index: 7,
            readonly: false,
            static: false,
        },
        AttackTime: {
            signature: new SP.signature(SP.FLOAT32),
            level: 4,
            index: 8,
            readonly: false,
            static: false,
        },
        ReleaseTime: {
            signature: new SP.signature(SP.FLOAT32),
            level: 4,
            index: 9,
            readonly: false,
            static: false,
        },
        HoldTime: {
            signature: new SP.signature(SP.FLOAT32),
            level: 4,
            index: 10,
            readonly: false,
            static: false,
        },
        DynamicGainCeiling: {
            signature: new SP.signature(SP.FLOAT32),
            level: 4,
            index: 11,
            readonly: false,
            static: false,
        },
        DynamicGainFloor: {
            signature: new SP.signature(SP.FLOAT32),
            level: 4,
            index: 12,
            readonly: false,
            static: false,
        },
        KneeParameter: {
            signature: new SP.signature(SP.FLOAT32),
            level: 4,
            index: 13,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0001\u0001\u000e",
    ClassVersion: 1,
    ClassName: "OcaDynamics",
});
/**
 * Gets the value of the Triggered property. The return value indicates
 * whether the property was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.BOOLEAN);
OcaDynamics.prototype.GetTriggered = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Gets the value of the DynamicGain property. The return value indicates
 * whether the property was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.FLOAT32);
OcaDynamics.prototype.GetDynamicGain = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 2, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the value of the Function property. The return value indicates
 * whether the property was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(OCA.OcaDynamicsFunction);
OcaDynamics.prototype.GetFunction = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 3, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the value of the Function property. The return value indicates
 * whether the property was successfully set.
 */
(function() {
var argument_signature = new SP.signature(OCA.OcaDynamicsFunction);
OcaDynamics.prototype.SetFunction = function(Func) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 4, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the value of the Ratio property. The return value indicates
 * whether the property was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaDynamics.prototype.GetRatio = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 5, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the value of the Ratio property. The return value indicates
 * whether the property was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.FLOAT32);
OcaDynamics.prototype.SetRatio = function(Ratio) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 6, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the value of the Threshold property. The return value indicates
 * if the value was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaDynamics.prototype.GetThreshold = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 7, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the value of the Threshold property. The return value indicates
 * if the value was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.FLOAT32);
OcaDynamics.prototype.SetThreshold = function(threshold) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 8, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the value of the ThresholdPresentationUnits property. The return
 * value indicates if the value was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(OCA.OcaPresentationUnit);
OcaDynamics.prototype.GetThresholdPresentationUnits = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 9, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the value of the ThresholdPresentationUnits property. The return
 * value indicates if the value was successfully set.
 */
(function() {
var argument_signature = new SP.signature(OCA.OcaPresentationUnit);
OcaDynamics.prototype.SetThresholdPresentationUnits = function(Units) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 10, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Sets the value of the DetectorLaw property. The return value indicates
 * if the value was successfully set.
 */
(function() {
var retval_signature = new SP.signature(SP.UINT8);
OcaDynamics.prototype.GetDetectorLaw = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 11, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the value of the DetectorLaw property. The return value indicates
 * if the value was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.UINT8);
OcaDynamics.prototype.SetDetectorLaw = function(Law) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 12, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the value of the AttackTime property. The return value indicates
 * if the value was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaDynamics.prototype.GetAttackTime = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 13, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the value of the AttackTime property. The return value indicates
 * if the value was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.FLOAT32);
OcaDynamics.prototype.SetAttackTime = function(Time) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 14, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the value of the ReleaseTime property. The return value indicates
 * if the value was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaDynamics.prototype.GetReleaseTime = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 15, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the value of the ReleaseTime property. The return value indicates
 * if the value was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.FLOAT32);
OcaDynamics.prototype.SetReleaseTime = function(Time) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 16, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the value of the HoldTime property. The return value indicates if
 * the value was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaDynamics.prototype.GetHoldTime = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 17, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the value of the HoldTime property. The return value indicates if
 * the value was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.FLOAT32);
OcaDynamics.prototype.SetHoldTime = function(Time) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 18, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the value of the DynamicGainFLoor property. The return value
 * indicates if the value was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaDynamics.prototype.GetDynamicGainFloor = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 19, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the value of the DynamicGainFloor property. The return value
 * indicates if the value was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.FLOAT32);
OcaDynamics.prototype.SetDynamicGainFloor = function(Limit) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 20, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the value of the DynamicGainCeiling property. The return value
 * indicates if the value was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaDynamics.prototype.GetDynamicGainCeiling = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 21, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the value of the DynamicGainCeiling property. The return value
 * indicates if the value was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.FLOAT32);
OcaDynamics.prototype.SetDynamicGainCeiling = function(Limit) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 22, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the value of the KneeParameter property. The return value
 * indicates if the value was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaDynamics.prototype.GetKneeParameter = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 23, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the value of the KneeParameter property. The return value
 * indicates if the value was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.FLOAT32);
OcaDynamics.prototype.SetKneeParameter = function(Parameter) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 24, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();


/**
 * Dynamics element : side-chain detector.
 */
function OcaDynamicsDetector(ObjectNumber, device) {
    OcaActuator.call(this, ObjectNumber, device);
};
mod.OcaDynamicsDetector = OcaDynamicsDetector;
OcaDynamicsDetector.prototype = Object.assign(Object.create(OcaActuator.prototype), {
    __oca_properties__: OcaActuator.prototype.__oca_properties__.extend({
        Law: {
            signature: new SP.signature(SP.UINT8),
            level: 4,
            index: 1,
            readonly: false,
            static: false,
        },
        AttackTime: {
            signature: new SP.signature(SP.FLOAT32),
            level: 4,
            index: 2,
            readonly: false,
            static: false,
        },
        ReleaseTime: {
            signature: new SP.signature(SP.FLOAT32),
            level: 4,
            index: 3,
            readonly: false,
            static: false,
        },
        HoldTime: {
            signature: new SP.signature(SP.FLOAT32),
            level: 4,
            index: 4,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0001\u0001\u000f",
    ClassVersion: 1,
    ClassName: "OcaDynamicsDetector",
});
/**
 * Gets the value of the Law property. Return status indicates whether
 * the value was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.UINT8);
OcaDynamicsDetector.prototype.GetLaw = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the value of the Law property. Return status indicates whether
 * the value was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.UINT8);
OcaDynamicsDetector.prototype.SetLaw = function(Law) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 2, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the value of the AttackTime property. The return value indicates
 * if the value was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaDynamicsDetector.prototype.GetAttackTime = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 3, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the value of the AttackTime property. The return value indicates
 * whether the property was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.FLOAT32);
OcaDynamicsDetector.prototype.SetAttackTime = function(Time) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 4, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the value of the ReleaseTime property. The return value indicates
 * if the value was successfully retrieved.
 */
(function() {
var argument_signature = new SP.signature(SP.FLOAT32);
var retval_signature = new SP.signature(SP.FLOAT32, SP.FLOAT32);
OcaDynamicsDetector.prototype.GetReleaseTime = function(Time) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 5, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the value of the ReleaseTime property. The return value indicates
 * whether the property was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.FLOAT32);
OcaDynamicsDetector.prototype.SetReleaseTime = function(Time) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 6, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the value of the HoldTime property. The return value indicates if
 * the value was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaDynamicsDetector.prototype.GetHoldTime = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 7, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the value of the HoldTime property. The return value indicates
 * whether the property was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.FLOAT32);
OcaDynamicsDetector.prototype.SetHoldTime = function(Time) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 8, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();


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
 */
function OcaDynamicsCurve(ObjectNumber, device) {
    OcaActuator.call(this, ObjectNumber, device);
};
mod.OcaDynamicsCurve = OcaDynamicsCurve;
OcaDynamicsCurve.prototype = Object.assign(Object.create(OcaActuator.prototype), {
    __oca_properties__: OcaActuator.prototype.__oca_properties__.extend({
        nSegments: {
            signature: new SP.signature(SP.UINT8),
            level: 4,
            index: 1,
            readonly: false,
            static: false,
        },
        Threshold: {
            signature: new SP.signature(SP.LIST(SP.FLOAT32)),
            level: 4,
            index: 2,
            readonly: false,
            static: false,
        },
        Slope: {
            signature: new SP.signature(SP.LIST(SP.FLOAT32)),
            level: 4,
            index: 3,
            readonly: false,
            static: false,
        },
        KneeParameter: {
            signature: new SP.signature(SP.LIST(SP.FLOAT32)),
            level: 4,
            index: 4,
            readonly: false,
            static: false,
        },
        DynamicGainFloor: {
            signature: new SP.signature(SP.FLOAT32),
            level: 4,
            index: 5,
            readonly: false,
            static: false,
        },
        DynamicGainCeiling: {
            signature: new SP.signature(SP.FLOAT32),
            level: 4,
            index: 6,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0001\u0001\u0010",
    ClassVersion: 1,
    ClassName: "OcaDynamicsCurve",
});
/**
 * Gets the number of curve segments. The return value indicates whether
 * the value was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.UINT8, SP.UINT8, SP.UINT8);
OcaDynamicsCurve.prototype.GetNSegments = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the number of curve segments. The return value indicates whether
 * the data was successfully set. If this method increases the value of
 * n, the data in properties <b>Threshold</b>, <b>Slope</b>, and
 * <b>KneeParameter </b>of the new segment are by default set to the
 * values of the previous segment.
 */
(function() {
var argument_signature = new SP.signature(SP.UINT8);
OcaDynamicsCurve.prototype.SetNSegments = function(Slope) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 2, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the list of Threshold values. The return value indicates whether
 * the data was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaDynamicsCurve.prototype.GetThreshold = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 3, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the list of Threshold values. The return value indicates whether
 * the values were successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.LIST(SP.FLOAT32));
OcaDynamicsCurve.prototype.SetThreshold = function(Threshold) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 4, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the list of Slope values. The return value indicates whether the
 * list was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.LIST(SP.FLOAT32), SP.LIST(SP.FLOAT32), SP.LIST(SP.FLOAT32));
OcaDynamicsCurve.prototype.GetSlope = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 5, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the list of Slope values. The return value indicates whether the
 * values were successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.LIST(SP.FLOAT32));
OcaDynamicsCurve.prototype.SetSlope = function(slope) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 6, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the list of KneeParameter valuess. The return value indicates
 * whether the list was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.LIST(SP.FLOAT32), SP.LIST(SP.FLOAT32), SP.LIST(SP.FLOAT32));
OcaDynamicsCurve.prototype.GetKneeParameter = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 7, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the list of KneeParameter values. The return value indicates
 * whether the values were successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.LIST(SP.FLOAT32));
OcaDynamicsCurve.prototype.SetKneeParameter = function(parameter) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 8, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the value of the DynamicGainCeiling property. The return value
 * indicates whether the data was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaDynamicsCurve.prototype.GetDynamicGainCeiling = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 9, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the value of the DynamicGainCeiling property. The return value
 * indicates whether the data was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.FLOAT32);
OcaDynamicsCurve.prototype.SetDynamicGainCeiling = function(gain) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 10, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the value of the DynamicGainFloor property. The return value
 * indicates whether the data was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaDynamicsCurve.prototype.GetDynamicGainFloor = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 11, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the value of the DynamicGainFloor property. The return value
 * indicates whether the data was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.FLOAT32);
OcaDynamicsCurve.prototype.SetDynamicGainFloor = function(Gain) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 12, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();


/**
 * Multiwaveform signal generator with optional sweep capability.
 */
function OcaSignalGenerator(ObjectNumber, device) {
    OcaActuator.call(this, ObjectNumber, device);
};
mod.OcaSignalGenerator = OcaSignalGenerator;
OcaSignalGenerator.prototype = Object.assign(Object.create(OcaActuator.prototype), {
    __oca_properties__: OcaActuator.prototype.__oca_properties__.extend({
        Frequency1: {
            signature: new SP.signature(SP.FLOAT32),
            level: 4,
            index: 1,
            readonly: false,
            static: false,
        },
        Frequency2: {
            signature: new SP.signature(SP.FLOAT32),
            level: 4,
            index: 2,
            readonly: false,
            static: false,
        },
        Level: {
            signature: new SP.signature(SP.FLOAT32),
            level: 4,
            index: 3,
            readonly: false,
            static: false,
        },
        Waveform: {
            signature: new SP.signature(OCA.OcaWaveformType),
            level: 4,
            index: 4,
            readonly: false,
            static: false,
        },
        SweepType: {
            signature: new SP.signature(OCA.OcaSweepType),
            level: 4,
            index: 5,
            readonly: false,
            static: false,
        },
        SweepTime: {
            signature: new SP.signature(SP.FLOAT32),
            level: 4,
            index: 6,
            readonly: false,
            static: false,
        },
        SweepRepeat: {
            signature: new SP.signature(SP.BOOLEAN),
            level: 4,
            index: 7,
            readonly: false,
            static: false,
        },
        Generating: {
            signature: new SP.signature(SP.BOOLEAN),
            level: 4,
            index: 8,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0001\u0001\u0011",
    ClassVersion: 1,
    ClassName: "OcaSignalGenerator",
});
/**
 * Gets the value of the Frequency1 property. The return value indicates
 * whether the property was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaSignalGenerator.prototype.GetFrequency1 = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the value of the Frequency1 property. The return value indicates
 * whether the property was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.FLOAT32);
OcaSignalGenerator.prototype.SetFrequency1 = function(frequency) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 2, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the value of the Frequency2 property. The return value indicates
 * whether the property was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaSignalGenerator.prototype.GetFrequency2 = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 3, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the value of the Frequency2 property. The return value indicates
 * whether the property was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.FLOAT32);
OcaSignalGenerator.prototype.SetFrequency2 = function(frequency) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 4, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the value of the Level property. The return value indicates
 * whether the property was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaSignalGenerator.prototype.GetLevel = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 5, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the value of the Level property. The return value indicates
 * whether the property was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.FLOAT32);
OcaSignalGenerator.prototype.SetLevel = function(Level) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 6, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the value of the Waveform property. The return value indicates
 * whether the property was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(OCA.OcaWaveformType);
OcaSignalGenerator.prototype.GetWaveform = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 7, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the value of the Waveform property. The return value indicates
 * whether the property was successfully set.
 */
(function() {
var argument_signature = new SP.signature(OCA.OcaWaveformType);
OcaSignalGenerator.prototype.SetWaveform = function(waveform) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 8, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the value of the SweepType property. The return value indicates
 * whether the property was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(OCA.OcaSweepType);
OcaSignalGenerator.prototype.GetSweepType = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 9, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the value of the SweepType property. The return value indicates
 * whether the property was successfully set.
 */
(function() {
var argument_signature = new SP.signature(OCA.OcaSweepType);
OcaSignalGenerator.prototype.SetSweepType = function(sweepType) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 10, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the value of the SweepTime property. The return value indicates
 * whether the property was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaSignalGenerator.prototype.GetSweepTime = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 11, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the value of the SweepTime property. The return value indicates
 * whether the property was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.FLOAT32);
OcaSignalGenerator.prototype.SetSweepTime = function(sweepTime) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 12, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the value of the SweepRepeat property. The return value indicates
 * whether the property was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.BOOLEAN);
OcaSignalGenerator.prototype.GetSweepRepeat = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 13, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the value of the SweepRepeat property. The return value indicates
 * whether the property was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.BOOLEAN);
OcaSignalGenerator.prototype.SetSweepRepeat = function(sweepRepeat) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 14, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the value of the Generating property. The return value indicates
 * whether the property was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.BOOLEAN);
OcaSignalGenerator.prototype.GetGenerating = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 15, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Starts the signal generator. The return value indicates whether the
 * signal generator was successfully started.
 */
(function() {
OcaSignalGenerator.prototype.Start = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 16, 0);
    return device.send_command(cmd);
}
})();
/**
 * Stops the signal generator. The return value indicates whether the
 * signal generator was successfully stopped.
 */
(function() {
OcaSignalGenerator.prototype.Stop = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 17, 0);
    return device.send_command(cmd);
}
})();


/**
 * A set of one or more non-network signal inputs. Number of channels is
 * set at construction time. This class has no native properties or
 * methods - they are all inherited from <b>OcaWorker</b> and above. It
 * is defined as a separate class as an aid to enumeration and signal
 * flow definition.
 */
function OcaSignalInput(ObjectNumber, device) {
    OcaActuator.call(this, ObjectNumber, device);
};
mod.OcaSignalInput = OcaSignalInput;
OcaSignalInput.prototype = Object.assign(Object.create(OcaActuator.prototype), {
    __oca_properties__: OcaActuator.prototype.__oca_properties__.extend({
    }),
    ClassID: "\u0001\u0001\u0001\u0012",
    ClassVersion: 1,
    ClassName: "OcaSignalInput",
});


/**
 * A set of one or more non-network signal outputs. Number of channels is
 * set at construction time. This class has no native properties or
 * methods - they are all inherited from <b>OcaWorker</b> and above. It
 * is defined as a separate class as an aid to enumeration and signal
 * flow definition.
 */
function OcaSignalOutput(ObjectNumber, device) {
    OcaActuator.call(this, ObjectNumber, device);
};
mod.OcaSignalOutput = OcaSignalOutput;
OcaSignalOutput.prototype = Object.assign(Object.create(OcaActuator.prototype), {
    __oca_properties__: OcaActuator.prototype.__oca_properties__.extend({
    }),
    ClassID: "\u0001\u0001\u0001\u0013",
    ClassVersion: 1,
    ClassName: "OcaSignalOutput",
});


/**
 * A temperature actuator. Works in Celsius.
 */
function OcaTemperatureActuator(ObjectNumber, device) {
    OcaActuator.call(this, ObjectNumber, device);
};
mod.OcaTemperatureActuator = OcaTemperatureActuator;
OcaTemperatureActuator.prototype = Object.assign(Object.create(OcaActuator.prototype), {
    __oca_properties__: OcaActuator.prototype.__oca_properties__.extend({
        Temperature: {
            signature: new SP.signature(SP.FLOAT32),
            level: 4,
            index: 1,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0001\u0001\u0014",
    ClassVersion: 1,
    ClassName: "OcaTemperatureActuator",
});
/**
 * Gets the value of the Temperature property. The return value indicates
 * whether the property was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaTemperatureActuator.prototype.GetTemperature = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the value of the Temperature property. The return value indicates
 * whether the property was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.FLOAT32);
OcaTemperatureActuator.prototype.SetTemperature = function(temperature) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 2, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();


/**
 * Represents a function that turns on some kind of human-detectable
 * indicator for purposes of device identification during network setup.
 * Physical form of indicator is not defined by OCA, so it could be
 * anything, e.g. <ul> <li>LED</li> <li>Foghorn</li> <li>Smoke
 * emitter</li> <li>Little waving robot hand wearing white glove</li>
 * <li>Jack-in-the-box popout</li> <li>et cetera</li> </ul>
 */
function OcaIdentificationActuator(ObjectNumber, device) {
    OcaActuator.call(this, ObjectNumber, device);
};
mod.OcaIdentificationActuator = OcaIdentificationActuator;
OcaIdentificationActuator.prototype = Object.assign(Object.create(OcaActuator.prototype), {
    __oca_properties__: OcaActuator.prototype.__oca_properties__.extend({
        active: {
            signature: new SP.signature(SP.BOOLEAN),
            level: 4,
            index: 1,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0001\u0001\u0015",
    ClassVersion: 1,
    ClassName: "OcaIdentificationActuator",
});
/**
 * Gets the current identification indicator activity state. The return
 * value indicates whether the state was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.BOOLEAN);
OcaIdentificationActuator.prototype.GetActive = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the Active state (i.e. value of the Active property). The return
 * value indicates whether the state was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.BOOLEAN);
OcaIdentificationActuator.prototype.SetActive = function(active) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 2, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();


/**
 * Abstract base class for weakly typed actuators.
 */
function OcaBasicActuator(ObjectNumber, device) {
    OcaActuator.call(this, ObjectNumber, device);
};
mod.OcaBasicActuator = OcaBasicActuator;
OcaBasicActuator.prototype = Object.assign(Object.create(OcaActuator.prototype), {
    __oca_properties__: OcaActuator.prototype.__oca_properties__.extend({
    }),
    ClassID: "\u0001\u0001\u0001\u0001",
    ClassVersion: 1,
    ClassName: "OcaBasicActuator",
});


/**
 * Basic boolean actuator.
 */
function OcaBooleanActuator(ObjectNumber, device) {
    OcaBasicActuator.call(this, ObjectNumber, device);
};
mod.OcaBooleanActuator = OcaBooleanActuator;
OcaBooleanActuator.prototype = Object.assign(Object.create(OcaBasicActuator.prototype), {
    __oca_properties__: OcaBasicActuator.prototype.__oca_properties__.extend({
        Setting: {
            signature: new SP.signature(SP.BOOLEAN),
            level: 5,
            index: 1,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0001\u0001\u0001\u0001",
    ClassVersion: 1,
    ClassName: "OcaBooleanActuator",
});
/**
 * Gets the <b>Setting </b>property. The return value indicates whether
 * the data was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.BOOLEAN);
OcaBooleanActuator.prototype.GetSetting = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the <b>Setting </b>property. The return value indicates whether
 * the property was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.BOOLEAN);
OcaBooleanActuator.prototype.SetSetting = function(Setting) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 2, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();


/**
 * Basic int8 actuator.
 */
function OcaInt8Actuator(ObjectNumber, device) {
    OcaBasicActuator.call(this, ObjectNumber, device);
};
mod.OcaInt8Actuator = OcaInt8Actuator;
OcaInt8Actuator.prototype = Object.assign(Object.create(OcaBasicActuator.prototype), {
    __oca_properties__: OcaBasicActuator.prototype.__oca_properties__.extend({
        Setting: {
            signature: new SP.signature(SP.INT8),
            level: 5,
            index: 1,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0001\u0001\u0001\u0002",
    ClassVersion: 1,
    ClassName: "OcaInt8Actuator",
});
/**
 * Gets the value and limits of the <b>Setting </b>property. The return
 * value indicates whether the data was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.INT8, SP.INT8, SP.INT8);
OcaInt8Actuator.prototype.GetSetting = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the <b>Setting </b>property. The return value indicates whether
 * the property was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.INT8);
OcaInt8Actuator.prototype.SetSetting = function(Setting) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 2, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();


/**
 * Basic int16 actuator.
 */
function OcaInt16Actuator(ObjectNumber, device) {
    OcaBasicActuator.call(this, ObjectNumber, device);
};
mod.OcaInt16Actuator = OcaInt16Actuator;
OcaInt16Actuator.prototype = Object.assign(Object.create(OcaBasicActuator.prototype), {
    __oca_properties__: OcaBasicActuator.prototype.__oca_properties__.extend({
        Setting: {
            signature: new SP.signature(SP.INT16),
            level: 5,
            index: 1,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0001\u0001\u0001\u0003",
    ClassVersion: 1,
    ClassName: "OcaInt16Actuator",
});
/**
 * Gets the value and limits of the <b>Setting </b>property. The return
 * value indicates whether the data was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.INT16, SP.INT16, SP.INT16);
OcaInt16Actuator.prototype.GetSetting = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the <b>Setting </b>property. The return value indicates whether
 * the property was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.INT16);
OcaInt16Actuator.prototype.SetSetting = function(Setting) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 2, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();


/**
 * Basic int32 actuator.
 */
function OcaInt32Actuator(ObjectNumber, device) {
    OcaBasicActuator.call(this, ObjectNumber, device);
};
mod.OcaInt32Actuator = OcaInt32Actuator;
OcaInt32Actuator.prototype = Object.assign(Object.create(OcaBasicActuator.prototype), {
    __oca_properties__: OcaBasicActuator.prototype.__oca_properties__.extend({
        Setting: {
            signature: new SP.signature(SP.INT32),
            level: 5,
            index: 1,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0001\u0001\u0001\u0004",
    ClassVersion: 1,
    ClassName: "OcaInt32Actuator",
});
/**
 * Gets the value and limits of the <b>Setting </b>property. The return
 * value indicates whether the data was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.INT32, SP.INT32, SP.INT32);
OcaInt32Actuator.prototype.GetSetting = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the<b> Setting </b>property. The return value indicates whether
 * the property was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.INT32);
OcaInt32Actuator.prototype.SetSetting = function(Setting) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 2, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();


/**
 * Basic int64 actuator.
 */
function OcaInt64Actuator(ObjectNumber, device) {
    OcaBasicActuator.call(this, ObjectNumber, device);
};
mod.OcaInt64Actuator = OcaInt64Actuator;
OcaInt64Actuator.prototype = Object.assign(Object.create(OcaBasicActuator.prototype), {
    __oca_properties__: OcaBasicActuator.prototype.__oca_properties__.extend({
        Setting: {
            signature: new SP.signature(SP.INT64),
            level: 5,
            index: 1,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0001\u0001\u0001\u0005",
    ClassVersion: 1,
    ClassName: "OcaInt64Actuator",
});
/**
 * Gets the value and limits of the <b>Setting </b>property. The return
 * value indicates whether the data was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.INT64, SP.INT64, SP.INT64);
OcaInt64Actuator.prototype.GetSetting = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the <b>Setting </b>property. The return value indicates whether
 * the property was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.INT64);
OcaInt64Actuator.prototype.SetSetting = function(Value) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 2, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();


/**
 * Basic uint8 actuator.
 */
function OcaUint8Actuator(ObjectNumber, device) {
    OcaBasicActuator.call(this, ObjectNumber, device);
};
mod.OcaUint8Actuator = OcaUint8Actuator;
OcaUint8Actuator.prototype = Object.assign(Object.create(OcaBasicActuator.prototype), {
    __oca_properties__: OcaBasicActuator.prototype.__oca_properties__.extend({
        Setting: {
            signature: new SP.signature(SP.UINT8),
            level: 5,
            index: 1,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0001\u0001\u0001\u0006",
    ClassVersion: 1,
    ClassName: "OcaUint8Actuator",
});
/**
 * Gets the value and limits of the <b>Setting </b>property. The return
 * value indicates whether the data was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.UINT8, SP.UINT8, SP.UINT8);
OcaUint8Actuator.prototype.GetSetting = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the <b>Setting </b>property. The return value indicates whether
 * the property was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.UINT8);
OcaUint8Actuator.prototype.SetSetting = function(Setting) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 2, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();


/**
 * Basic uint16 actuator.
 */
function OcaUint16Actuator(ObjectNumber, device) {
    OcaBasicActuator.call(this, ObjectNumber, device);
};
mod.OcaUint16Actuator = OcaUint16Actuator;
OcaUint16Actuator.prototype = Object.assign(Object.create(OcaBasicActuator.prototype), {
    __oca_properties__: OcaBasicActuator.prototype.__oca_properties__.extend({
        Setting: {
            signature: new SP.signature(SP.UINT16),
            level: 5,
            index: 1,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0001\u0001\u0001\u0007",
    ClassVersion: 1,
    ClassName: "OcaUint16Actuator",
});
/**
 * Gets the value and limits of the Setting property. The return value
 * indicates whether the data was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.UINT16, SP.UINT16, SP.UINT16);
OcaUint16Actuator.prototype.GetSetting = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the value of the <b>Setting </b>property. The return value
 * indicates whether the property was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.UINT16);
OcaUint16Actuator.prototype.SetSetting = function(Setting) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 2, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();


/**
 * Basic uint32 actuator.
 */
function OcaUint32Actuator(ObjectNumber, device) {
    OcaBasicActuator.call(this, ObjectNumber, device);
};
mod.OcaUint32Actuator = OcaUint32Actuator;
OcaUint32Actuator.prototype = Object.assign(Object.create(OcaBasicActuator.prototype), {
    __oca_properties__: OcaBasicActuator.prototype.__oca_properties__.extend({
        Setting: {
            signature: new SP.signature(SP.UINT32),
            level: 5,
            index: 1,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0001\u0001\u0001\b",
    ClassVersion: 1,
    ClassName: "OcaUint32Actuator",
});
/**
 * Gets the value and limits of the <b>Setting </b>property. The return
 * value indicates whether the data was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.UINT32, SP.UINT32, SP.UINT32);
OcaUint32Actuator.prototype.GetSetting = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the <b>Setting </b>property. The return value indicates whether
 * the property was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.UINT32);
OcaUint32Actuator.prototype.SetSetting = function(Setting) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 2, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();


/**
 * Basic Uint64 actuator.
 */
function OcaUint64Actuator(ObjectNumber, device) {
    OcaBasicActuator.call(this, ObjectNumber, device);
};
mod.OcaUint64Actuator = OcaUint64Actuator;
OcaUint64Actuator.prototype = Object.assign(Object.create(OcaBasicActuator.prototype), {
    __oca_properties__: OcaBasicActuator.prototype.__oca_properties__.extend({
        Setting: {
            signature: new SP.signature(SP.UINT64),
            level: 5,
            index: 1,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0001\u0001\u0001\t",
    ClassVersion: 1,
    ClassName: "OcaUint64Actuator",
});
/**
 * Gets the value and limits of the Gain property. The return value
 * indicates whether the data was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.UINT64, SP.UINT64, SP.UINT64);
OcaUint64Actuator.prototype.GetSetting = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the value of the Level property. The return value indicates
 * whether the property was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.UINT64);
OcaUint64Actuator.prototype.SetSetting = function(Setting) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 2, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();


/**
 * Basic float32 actuator.
 */
function OcaFloat32Actuator(ObjectNumber, device) {
    OcaBasicActuator.call(this, ObjectNumber, device);
};
mod.OcaFloat32Actuator = OcaFloat32Actuator;
OcaFloat32Actuator.prototype = Object.assign(Object.create(OcaBasicActuator.prototype), {
    __oca_properties__: OcaBasicActuator.prototype.__oca_properties__.extend({
        Setting: {
            signature: new SP.signature(SP.FLOAT32),
            level: 5,
            index: 1,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0001\u0001\u0001\n",
    ClassVersion: 1,
    ClassName: "OcaFloat32Actuator",
});
/**
 * Gets the value and limits of the <b>Setting </b>property. The return
 * value indicates whether the data was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaFloat32Actuator.prototype.GetSetting = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the <b>Setting </b>property. The return value indicates whether
 * the property was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.FLOAT32);
OcaFloat32Actuator.prototype.SetSetting = function(Setting) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 2, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();


/**
 * Basic Float64 actuator.
 */
function OcaFloat64Actuator(ObjectNumber, device) {
    OcaBasicActuator.call(this, ObjectNumber, device);
};
mod.OcaFloat64Actuator = OcaFloat64Actuator;
OcaFloat64Actuator.prototype = Object.assign(Object.create(OcaBasicActuator.prototype), {
    __oca_properties__: OcaBasicActuator.prototype.__oca_properties__.extend({
        Setting: {
            signature: new SP.signature(SP.UINT64),
            level: 5,
            index: 1,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0001\u0001\u0001\u000b",
    ClassVersion: 1,
    ClassName: "OcaFloat64Actuator",
});
/**
 * Gets the value and limits of the <b>Setting </b>property. The return
 * value indicates whether the data was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.FLOAT64, SP.FLOAT64, SP.FLOAT64);
OcaFloat64Actuator.prototype.GetSetting = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the value of the Level property. The return value indicates
 * whether the property was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.UINT64);
OcaFloat64Actuator.prototype.SetSetting = function(Setting) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 2, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();


/**
 * String actuator.
 */
function OcaStringActuator(ObjectNumber, device) {
    OcaBasicActuator.call(this, ObjectNumber, device);
};
mod.OcaStringActuator = OcaStringActuator;
OcaStringActuator.prototype = Object.assign(Object.create(OcaBasicActuator.prototype), {
    __oca_properties__: OcaBasicActuator.prototype.__oca_properties__.extend({
        Setting: {
            signature: new SP.signature(SP.STRING),
            level: 5,
            index: 1,
            readonly: false,
            static: false,
        },
        MaxLen: {
            signature: new SP.signature(SP.UINT16),
            level: 5,
            index: 2,
            readonly: true,
            static: false,
        },
    }),
    ClassID: "\u0001\u0001\u0001\u0001\f",
    ClassVersion: 1,
    ClassName: "OcaStringActuator",
});
/**
 * Gets the value and max length of the Value property. The return value
 * indicates whether the data was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.STRING);
OcaStringActuator.prototype.GetValue = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the value of the Value property. The return value indicates
 * whether the property was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.STRING);
OcaStringActuator.prototype.SetValue = function(Value) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 2, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the maximum string length that this object can handle.
 */
(function() {
var retval_signature = new SP.signature(SP.UINT16);
OcaStringActuator.prototype.GetMaxLen = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 3, 0);
    return device.send_command(cmd, retval_signature);
}
})();


/**
 * Bitstring actuator. Maximum bitstring length is 65,536 bits.
 */
function OcaBitstringActuator(ObjectNumber, device) {
    OcaBasicActuator.call(this, ObjectNumber, device);
};
mod.OcaBitstringActuator = OcaBitstringActuator;
OcaBitstringActuator.prototype = Object.assign(Object.create(OcaBasicActuator.prototype), {
    __oca_properties__: OcaBasicActuator.prototype.__oca_properties__.extend({
        Bitstring: {
            signature: new SP.signature(SP.BITSTRING),
            level: 5,
            index: 1,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0001\u0001\u0001\r",
    ClassVersion: 1,
    ClassName: "OcaBitstringActuator",
});
/**
 * Gets the number of bits in the string. The return value indicates
 * whether the property was successfully gathered.
 */
(function() {
var retval_signature = new SP.signature(SP.UINT16);
OcaBitstringActuator.prototype.GetNrBits = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Gets the bit value of the given bit. The return value indicates
 * whether the property was successfully gathered.
 */
(function() {
var argument_signature = new SP.signature(SP.UINT16);
var retval_signature = new SP.signature(SP.BOOLEAN);
OcaBitstringActuator.prototype.GetBit = function(bitNr) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 2, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the bit value of the given bit. The return value indicates
 * whether the property was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.UINT16, SP.BOOLEAN);
OcaBitstringActuator.prototype.SetBit = function(bitNr, Value) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 3, 2,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the entire bitstring.The return value indicates whether the
 * property was successfully gathered.
 */
(function() {
var retval_signature = new SP.signature(SP.BITSTRING);
OcaBitstringActuator.prototype.GetBitstring = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 4, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the entire bitstring. The return value indicates whether the
 * property was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.BITSTRING);
OcaBitstringActuator.prototype.SetBitstring = function(BitString) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 5, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();


/**
 * Abstract base class for all sensor classes.
 */
function OcaSensor(ObjectNumber, device) {
    OcaWorker.call(this, ObjectNumber, device);
};
mod.OcaSensor = OcaSensor;
OcaSensor.prototype = Object.assign(Object.create(OcaWorker.prototype), {
    __oca_properties__: OcaWorker.prototype.__oca_properties__.extend({
        ReadingState: {
            signature: new SP.signature(OCA.OcaSensorReadingState),
            level: 3,
            index: 1,
            readonly: false,
            static: true,
        },
    }),
    ClassID: "\u0001\u0001\u0002",
    ClassVersion: 1,
    ClassName: "OcaSensor",
});
/**
 * Gets the current reading state of the sensor. The return value
 * indicates whether the state was successfully retrived.
 */
(function() {
var retval_signature = new SP.signature(OCA.OcaSensorReadingState);
OcaSensor.prototype.GetReadingState = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();


/**
 * Signal level sensor.
 */
function OcaLevelSensor(ObjectNumber, device) {
    OcaSensor.call(this, ObjectNumber, device);
};
mod.OcaLevelSensor = OcaLevelSensor;
OcaLevelSensor.prototype = Object.assign(Object.create(OcaSensor.prototype), {
    __oca_properties__: OcaSensor.prototype.__oca_properties__.extend({
        Reading: {
            signature: new SP.signature(SP.FLOAT32),
            level: 4,
            index: 1,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0001\u0002\u0002",
    ClassVersion: 1,
    ClassName: "OcaLevelSensor",
});
/**
 * Gets the value and limits of the <b>Reading </b>property. The return
 * value indicates whether the data was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaLevelSensor.prototype.GetReading = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();


/**
 * Child of <b>OcaLevelSensor </b>that returns an audio meter reading in
 * dB relative to a known reference level, and whose value has been
 * calculated by the selected averaging algorithm.
 */
function OcaAudioLevelSensor(ObjectNumber, device) {
    OcaLevelSensor.call(this, ObjectNumber, device);
};
mod.OcaAudioLevelSensor = OcaAudioLevelSensor;
OcaAudioLevelSensor.prototype = Object.assign(Object.create(OcaLevelSensor.prototype), {
    __oca_properties__: OcaLevelSensor.prototype.__oca_properties__.extend({
        Law: {
            signature: new SP.signature(SP.UINT8),
            level: 5,
            index: 1,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0001\u0002\u0002\u0001",
    ClassVersion: 1,
    ClassName: "OcaAudioLevelSensor",
});
/**
 * Gets the value of the Law property. The return value indicates whether
 * the property was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.UINT8);
OcaAudioLevelSensor.prototype.GetLaw = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the value of the Law property. The return value indicates whether
 * the property was successfully set. Only implemented for objects whose
 * Law property is read/write.
 */
(function() {
var argument_signature = new SP.signature(SP.UINT8);
OcaAudioLevelSensor.prototype.SetLaw = function(law) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 2, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();


/**
 * Time interval sensor.
 */
function OcaTimeIntervalSensor(ObjectNumber, device) {
    OcaSensor.call(this, ObjectNumber, device);
};
mod.OcaTimeIntervalSensor = OcaTimeIntervalSensor;
OcaTimeIntervalSensor.prototype = Object.assign(Object.create(OcaSensor.prototype), {
    __oca_properties__: OcaSensor.prototype.__oca_properties__.extend({
        Reading: {
            signature: new SP.signature(SP.FLOAT32),
            level: 4,
            index: 1,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0001\u0002\u0003",
    ClassVersion: 1,
    ClassName: "OcaTimeIntervalSensor",
});
/**
 * Gets the value and limits of the <b>Reading </b>property. The return
 * value indicates whether the data was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaTimeIntervalSensor.prototype.GetReading = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();


/**
 * Frequency sensor.
 */
function OcaFrequencySensor(ObjectNumber, device) {
    OcaSensor.call(this, ObjectNumber, device);
};
mod.OcaFrequencySensor = OcaFrequencySensor;
OcaFrequencySensor.prototype = Object.assign(Object.create(OcaSensor.prototype), {
    __oca_properties__: OcaSensor.prototype.__oca_properties__.extend({
        Reading: {
            signature: new SP.signature(SP.FLOAT32),
            level: 4,
            index: 1,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0001\u0002\u0004",
    ClassVersion: 1,
    ClassName: "OcaFrequencySensor",
});
/**
 * Gets the value and limits of the <b>Reading </b>property. The return
 * value indicates whether the data was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaFrequencySensor.prototype.GetReading = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();


/**
 * Basic temperature sensor.
 */
function OcaTemperatureSensor(ObjectNumber, device) {
    OcaSensor.call(this, ObjectNumber, device);
};
mod.OcaTemperatureSensor = OcaTemperatureSensor;
OcaTemperatureSensor.prototype = Object.assign(Object.create(OcaSensor.prototype), {
    __oca_properties__: OcaSensor.prototype.__oca_properties__.extend({
        Reading: {
            signature: new SP.signature(SP.FLOAT32),
            level: 4,
            index: 1,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0001\u0002\u0005",
    ClassVersion: 1,
    ClassName: "OcaTemperatureSensor",
});
/**
 * Gets the value and limits of the <b>Reading </b>property. The return
 * value indicates whether the data was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaTemperatureSensor.prototype.GetReading = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();


/**
 * Sensor for device identification mechanism. The idea of this mechanism
 * is that there is some kind of control -- a pushbutton, for instance --
 * that the user depresses to send a device identification event to the
 * controller. Such mechanisms aid in the setup of networks.
 */
function OcaIdentificationSensor(ObjectNumber, device) {
    OcaSensor.call(this, ObjectNumber, device);
};
mod.OcaIdentificationSensor = OcaIdentificationSensor;
OcaIdentificationSensor.prototype = Object.assign(Object.create(OcaSensor.prototype), {
    __oca_properties__: OcaSensor.prototype.__oca_properties__.extend({
    }),
    ClassID: "\u0001\u0001\u0002\u0006",
    ClassVersion: 1,
    ClassName: "OcaIdentificationSensor",
});
OcaIdentificationSensor.prototype.onIdentify = function(callback) {
    return this.device.add_subscription(new OCA.OcaEvent(this.ObjectNumber, new OCA.OcaEventID(4, 1)), callback);
};


/**
 * Abstract base class for weakly typed sensors.
 */
function OcaBasicSensor(ObjectNumber, device) {
    OcaSensor.call(this, ObjectNumber, device);
};
mod.OcaBasicSensor = OcaBasicSensor;
OcaBasicSensor.prototype = Object.assign(Object.create(OcaSensor.prototype), {
    __oca_properties__: OcaSensor.prototype.__oca_properties__.extend({
    }),
    ClassID: "\u0001\u0001\u0002\u0001",
    ClassVersion: 1,
    ClassName: "OcaBasicSensor",
});


/**
 * Basic boolean sensor.
 */
function OcaBooleanSensor(ObjectNumber, device) {
    OcaBasicSensor.call(this, ObjectNumber, device);
};
mod.OcaBooleanSensor = OcaBooleanSensor;
OcaBooleanSensor.prototype = Object.assign(Object.create(OcaBasicSensor.prototype), {
    __oca_properties__: OcaBasicSensor.prototype.__oca_properties__.extend({
        Reading: {
            signature: new SP.signature(SP.BOOLEAN),
            level: 5,
            index: 1,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0001\u0002\u0001\u0001",
    ClassVersion: 1,
    ClassName: "OcaBooleanSensor",
});
/**
 * Gets the <b>Reading </b>property. The return value indicates whether
 * the data was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.BOOLEAN);
OcaBooleanSensor.prototype.GetReading = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();


/**
 * Basic int8 sensor.
 */
function OcaInt8Sensor(ObjectNumber, device) {
    OcaBasicSensor.call(this, ObjectNumber, device);
};
mod.OcaInt8Sensor = OcaInt8Sensor;
OcaInt8Sensor.prototype = Object.assign(Object.create(OcaBasicSensor.prototype), {
    __oca_properties__: OcaBasicSensor.prototype.__oca_properties__.extend({
        Reading: {
            signature: new SP.signature(SP.INT8),
            level: 5,
            index: 1,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0001\u0002\u0001\u0002",
    ClassVersion: 1,
    ClassName: "OcaInt8Sensor",
});
/**
 * Gets the value and limits of the <b>Reading </b>property. The return
 * value indicates whether the data was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.INT8, SP.INT8, SP.INT8);
OcaInt8Sensor.prototype.GetReading = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();


/**
 * Basic int16 sensor.
 */
function OcaInt16Sensor(ObjectNumber, device) {
    OcaBasicSensor.call(this, ObjectNumber, device);
};
mod.OcaInt16Sensor = OcaInt16Sensor;
OcaInt16Sensor.prototype = Object.assign(Object.create(OcaBasicSensor.prototype), {
    __oca_properties__: OcaBasicSensor.prototype.__oca_properties__.extend({
        Reading: {
            signature: new SP.signature(SP.INT16),
            level: 5,
            index: 1,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0001\u0002\u0001\u0003",
    ClassVersion: 1,
    ClassName: "OcaInt16Sensor",
});
/**
 * Gets the value and limits of the <b>Reading </b>property. The return
 * value indicates whether the data was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.INT16, SP.INT16, SP.INT16);
OcaInt16Sensor.prototype.GetReading = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();


/**
 * Basic int32 sensor.
 */
function OcaInt32Sensor(ObjectNumber, device) {
    OcaBasicSensor.call(this, ObjectNumber, device);
};
mod.OcaInt32Sensor = OcaInt32Sensor;
OcaInt32Sensor.prototype = Object.assign(Object.create(OcaBasicSensor.prototype), {
    __oca_properties__: OcaBasicSensor.prototype.__oca_properties__.extend({
        Reading: {
            signature: new SP.signature(SP.INT32),
            level: 5,
            index: 1,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0001\u0002\u0001\u0004",
    ClassVersion: 1,
    ClassName: "OcaInt32Sensor",
});
/**
 * Gets the value and limits of the <b>Reading </b>property. The return
 * value indicates whether the data was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.INT32, SP.INT32, SP.INT32);
OcaInt32Sensor.prototype.GetReading = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();


/**
 * Basic int64 sensor.
 */
function OcaInt64Sensor(ObjectNumber, device) {
    OcaBasicSensor.call(this, ObjectNumber, device);
};
mod.OcaInt64Sensor = OcaInt64Sensor;
OcaInt64Sensor.prototype = Object.assign(Object.create(OcaBasicSensor.prototype), {
    __oca_properties__: OcaBasicSensor.prototype.__oca_properties__.extend({
        Reading: {
            signature: new SP.signature(SP.INT64),
            level: 5,
            index: 1,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0001\u0002\u0001\u0005",
    ClassVersion: 1,
    ClassName: "OcaInt64Sensor",
});
/**
 * Gets the value and limits of the <b>Reading </b>property. The return
 * value indicates whether the data was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.INT64, SP.INT64, SP.INT64);
OcaInt64Sensor.prototype.GetReading = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();


/**
 * Basic uint8 sensor.
 */
function OcaUint8Sensor(ObjectNumber, device) {
    OcaBasicSensor.call(this, ObjectNumber, device);
};
mod.OcaUint8Sensor = OcaUint8Sensor;
OcaUint8Sensor.prototype = Object.assign(Object.create(OcaBasicSensor.prototype), {
    __oca_properties__: OcaBasicSensor.prototype.__oca_properties__.extend({
        Reading: {
            signature: new SP.signature(SP.UINT8),
            level: 5,
            index: 1,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0001\u0002\u0001\u0006",
    ClassVersion: 1,
    ClassName: "OcaUint8Sensor",
});
/**
 * Gets the value and limits of the <b>Reading </b>property. The return
 * value indicates whether the data was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.UINT8, SP.UINT8, SP.UINT8);
OcaUint8Sensor.prototype.GetReading = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();


/**
 * Basic uint16 sensor.
 */
function OcaUint16Sensor(ObjectNumber, device) {
    OcaBasicSensor.call(this, ObjectNumber, device);
};
mod.OcaUint16Sensor = OcaUint16Sensor;
OcaUint16Sensor.prototype = Object.assign(Object.create(OcaBasicSensor.prototype), {
    __oca_properties__: OcaBasicSensor.prototype.__oca_properties__.extend({
        Reading: {
            signature: new SP.signature(SP.UINT16),
            level: 5,
            index: 1,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0001\u0002\u0001\u0007",
    ClassVersion: 1,
    ClassName: "OcaUint16Sensor",
});
/**
 * Gets the value and limits of the <b>Reading </b>property. The return
 * value indicates whether the data was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.UINT16, SP.UINT16, SP.UINT16);
OcaUint16Sensor.prototype.GetReading = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();


/**
 * Basic uint32 sensor.
 */
function OcaUint32Sensor(ObjectNumber, device) {
    OcaBasicSensor.call(this, ObjectNumber, device);
};
mod.OcaUint32Sensor = OcaUint32Sensor;
OcaUint32Sensor.prototype = Object.assign(Object.create(OcaBasicSensor.prototype), {
    __oca_properties__: OcaBasicSensor.prototype.__oca_properties__.extend({
        Reading: {
            signature: new SP.signature(SP.UINT32),
            level: 5,
            index: 1,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0001\u0002\u0001\b",
    ClassVersion: 1,
    ClassName: "OcaUint32Sensor",
});
/**
 * Gets the value and limits of the <b>Reading </b>property. The return
 * value indicates whether the data was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.UINT32, SP.UINT32, SP.UINT32);
OcaUint32Sensor.prototype.GetReading = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();


/**
 * Basic Uint64 sensor.
 */
function OcaUint64Sensor(ObjectNumber, device) {
    OcaBasicSensor.call(this, ObjectNumber, device);
};
mod.OcaUint64Sensor = OcaUint64Sensor;
OcaUint64Sensor.prototype = Object.assign(Object.create(OcaBasicSensor.prototype), {
    __oca_properties__: OcaBasicSensor.prototype.__oca_properties__.extend({
        Reading: {
            signature: new SP.signature(SP.UINT64),
            level: 5,
            index: 1,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0001\u0002\u0001\t",
    ClassVersion: 1,
    ClassName: "OcaUint64Sensor",
});
/**
 * Gets the value and limits of the <b>Reading </b>property. The return
 * value indicates whether the data was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.UINT64, SP.UINT64, SP.UINT64);
OcaUint64Sensor.prototype.GetReading = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();


/**
 * Basic float32 sensor.
 */
function OcaFloat32Sensor(ObjectNumber, device) {
    OcaBasicSensor.call(this, ObjectNumber, device);
};
mod.OcaFloat32Sensor = OcaFloat32Sensor;
OcaFloat32Sensor.prototype = Object.assign(Object.create(OcaBasicSensor.prototype), {
    __oca_properties__: OcaBasicSensor.prototype.__oca_properties__.extend({
        Reading: {
            signature: new SP.signature(SP.FLOAT32),
            level: 5,
            index: 1,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0001\u0002\u0001\n",
    ClassVersion: 1,
    ClassName: "OcaFloat32Sensor",
});
/**
 * Gets the value and limits of the <b>Reading </b>property. The return
 * value indicates whether the data was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaFloat32Sensor.prototype.GetReading = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();


/**
 * Basic Float64 sensor.
 */
function OcaFloat64Sensor(ObjectNumber, device) {
    OcaBasicSensor.call(this, ObjectNumber, device);
};
mod.OcaFloat64Sensor = OcaFloat64Sensor;
OcaFloat64Sensor.prototype = Object.assign(Object.create(OcaBasicSensor.prototype), {
    __oca_properties__: OcaBasicSensor.prototype.__oca_properties__.extend({
        Reading: {
            signature: new SP.signature(SP.FLOAT64),
            level: 5,
            index: 1,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0001\u0002\u0001\u000b",
    ClassVersion: 1,
    ClassName: "OcaFloat64Sensor",
});
/**
 * Gets the value and limits of the <b>Reading </b>property. The return
 * value indicates whether the data was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.FLOAT64, SP.FLOAT64, SP.FLOAT64);
OcaFloat64Sensor.prototype.GetReading = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();


/**
 * Text string sensor.
 */
function OcaStringSensor(ObjectNumber, device) {
    RemoteObject.call(this, ObjectNumber, device);
};
mod.OcaStringSensor = OcaStringSensor;
OcaStringSensor.prototype = Object.assign(Object.create(RemoteObject.prototype), {
    __oca_properties__: new Properties({
        ClassID: {
            signature: new SP.signature(SP.BLOB16),
            level: 1,
            index: 1,
            readonly: true,
            static: true,
        },
        ClassVersion: {
            signature: new SP.signature(SP.UINT16),
            level: 1,
            index: 2,
            readonly: true,
            static: true,
        },
    }),
    ClassID: "\u0001\u0001\u0002\u0001\f",
    ClassVersion: 1,
    ClassName: "OcaStringSensor",
});
/**
 * Gets the entire string. Return status indicates success or failure of
 * the retrieval.
 */
(function() {
var retval_signature = new SP.signature(SP.STRING);
OcaStringSensor.prototype.GetString = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 1, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Gets the maximum number of bytes that may be returned. Returned status
 * indicates success or failure of the retrieval.
 */
(function() {
var retval_signature = new SP.signature(SP.UINT16);
OcaStringSensor.prototype.GetMaxLen = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 1, 2, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the maximum number of bytes that the object may return. Returned
 * status indicates success or failure of the set.
 */
(function() {
var argument_signature = new SP.signature(SP.UINT16);
OcaStringSensor.prototype.SetMaxLen = function(maxLen) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 1, 3, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();


/**
 * Bit string sensor.
 */
function OcaBitstringSensor(ObjectNumber, device) {
    OcaBasicSensor.call(this, ObjectNumber, device);
};
mod.OcaBitstringSensor = OcaBitstringSensor;
OcaBitstringSensor.prototype = Object.assign(Object.create(OcaBasicSensor.prototype), {
    __oca_properties__: OcaBasicSensor.prototype.__oca_properties__.extend({
        BitString: {
            signature: new SP.signature(SP.BITSTRING),
            level: 5,
            index: 1,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0001\u0002\u0001\r",
    ClassVersion: 1,
    ClassName: "OcaBitstringSensor",
});
/**
 * Gets the number of bits of the bitmask data. Returned status indicates
 * success or failure of the retrieval.
 */
(function() {
var retval_signature = new SP.signature(SP.UINT16);
OcaBitstringSensor.prototype.GetNrBits = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Gets the value of the given bit. Return status indicates success or
 * failure of the retrieval.
 */
(function() {
var argument_signature = new SP.signature(SP.UINT16);
var retval_signature = new SP.signature(SP.UINT8);
OcaBitstringSensor.prototype.GetBit = function(bitNr) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 2, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Gets the entire bitstring. Return status indicates success or failure
 * of the retrieval.
 */
(function() {
var retval_signature = new SP.signature(SP.BITSTRING);
OcaBitstringSensor.prototype.GetBitString = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 3, 0);
    return device.send_command(cmd, retval_signature);
}
})();


/**
 * A block is an object with three aspects: - It can contain other
 * blocks. - It can contain workers. - It can contain agents. - It has a
 * signal flow topology. We refer to an object inside a block as a
 * <b>member</b> of that block. We refer to the block which contains an
 * object as the object's <b>container.</b><b><sup>1</sup></b> Normally,
 * a block contains a set of members that together function as a
 * processing unit -- for example, a crossover channel or mixer strip.
 */
function OcaBlock(ObjectNumber, device) {
    OcaWorker.call(this, ObjectNumber, device);
};
mod.OcaBlock = OcaBlock;
OcaBlock.prototype = Object.assign(Object.create(OcaWorker.prototype), {
    __oca_properties__: OcaWorker.prototype.__oca_properties__.extend({
        Type: {
            signature: new SP.signature(SP.UINT32),
            level: 3,
            index: 1,
            readonly: true,
            static: false,
        },
        Members: {
            signature: new SP.signature(SP.LIST(OCA.OcaObjectIdentification)),
            level: 3,
            index: 2,
            readonly: false,
            static: false,
        },
        SignalPaths: {
            signature: new SP.signature(SP.MAP(SP.UINT16, OCA.OcaSignalPath)),
            level: 3,
            index: 3,
            readonly: false,
            static: false,
        },
        MostRecentParamSetIdentifier: {
            signature: new SP.signature(OCA.OcaLibVolIdentifier),
            level: 3,
            index: 4,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0001\u0003",
    ClassVersion: 1,
    ClassName: "OcaBlock",
});
/**
 * Gets the block type. For statically-defined blocks, the block type is
 * a Uint32 with a value corresponding to the unique configuration of
 * this block. For dynamically-defined blocks, the block type is the
 * object number of the block's factory. For the root block, the value of
 * this property is 1.
 */
(function() {
var retval_signature = new SP.signature(SP.UINT32);
OcaBlock.prototype.GetType = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Constructs an object according to the given construction specification
 * and adds it to the block. The return value indicates whether the
 * member was successfully created and added.
 */

/**
 * Invokes a factory to construct an instance of the given class, then
 * adds it to the block. The return value indicates whether the member
 * was successfully created and added.
 */
(function() {
var argument_signature = new SP.signature(SP.UINT32);
var retval_signature = new SP.signature(SP.UINT32);
OcaBlock.prototype.ConstructMemberUsingFactory = function(FactoryONo) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 3, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Removes a member from the block and destroys the object. . Deletes all
 * signal paths attached to its ports. The return value indicates whether
 * the member was successfully removed and destroyed.
 */
(function() {
var argument_signature = new SP.signature(SP.UINT32);
OcaBlock.prototype.DeleteMember = function(ObjectNumber) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 4, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the list of block members. Does not recurse inner blocks. Each
 * inner block is included in the returned list as a single object -- its
 * contents are not enumerated. The return value indicates whether the
 * list was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.LIST(OCA.OcaObjectIdentification));
OcaBlock.prototype.GetMembers = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 5, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Gets the list of block members. Recurses inner blocks. Each inner
 * block is included in the returned list as a single object, amd its
 * contents are enumerated. The return value indicates whether the list
 * was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.LIST(OCA.OcaBlockMember));
OcaBlock.prototype.GetMembersRecursive = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 6, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Adds a signal path to the block. The return value indicates whether
 * the signal path was successfully added.
 */
(function() {
var argument_signature = new SP.signature(OCA.OcaSignalPath);
var retval_signature = new SP.signature(SP.UINT16);
OcaBlock.prototype.AddSignalPath = function(Path) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 7, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Deletes a signal path from the block. The return value indicates
 * whether the signal path was successfully added.
 */
(function() {
var retval_signature = new SP.signature(SP.UINT16);
OcaBlock.prototype.DeleteSignalPath = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 8, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Gets the map of signal paths in the block. Does not recurse inner
 * blocks. The return value indicates whether the list was successfully
 * retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.MAP(SP.UINT16, OCA.OcaSignalPath));
OcaBlock.prototype.GetSignalPaths = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 9, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Gets the mapof signal paths in the block. Recurses inner blocks. The
 * return value indicates whether the list was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.MAP(SP.UINT16, OCA.OcaSignalPath));
OcaBlock.prototype.GetSignalPathsRecursive = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 10, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Gets the identifier of the paramset most recently applied to this
 * block.
 */
(function() {
var retval_signature = new SP.signature(OCA.OcaLibVolIdentifier);
OcaBlock.prototype.GetMostRecentParamSetIdentifier = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 11, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Applies the referenced paramset to this block, and sets the
 * MostRecentParamSet property. The return value indicates whether the
 * paramset was successfully applied.
 */
(function() {
var retval_signature = new SP.signature(OCA.OcaLibVolIdentifier);
OcaBlock.prototype.ApplyParamSet = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 12, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Returns a paramset library volume data block which represents the
 * current state of the block -- i.e. a "snapshot".
 */
(function() {
var retval_signature = new SP.signature(OCA.OcaLibVolData_ParamSet);
OcaBlock.prototype.GetCurrentParamSetData = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 13, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Stores a paramset library volume data block which represents the
 * current state of the block ("snapshot") in the given library.
 * <b>Replaces </b>the library volume at the specified LibVolIdentifier.
 */
(function() {
var argument_signature = new SP.signature(OCA.OcaLibVolIdentifier);
OcaBlock.prototype.StoreCurrentParamSetData = function(LibVolIdentifier) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 14, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();


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
 */
function OcaBlockFactory(ObjectNumber, device) {
    OcaWorker.call(this, ObjectNumber, device);
};
mod.OcaBlockFactory = OcaBlockFactory;
OcaBlockFactory.prototype = Object.assign(Object.create(OcaWorker.prototype), {
    __oca_properties__: OcaWorker.prototype.__oca_properties__.extend({
        ProtoPorts: {
            signature: new SP.signature(SP.LIST(OCA.OcaProtoPort)),
            level: 3,
            index: 1,
            readonly: false,
            static: false,
        },
        ProtoMembers: {
            signature: new SP.signature(SP.LIST(OCA.OcaProtoObjectIdentification)),
            level: 3,
            index: 2,
            readonly: false,
            static: false,
        },
        ProtoSignalPaths: {
            signature: new SP.signature(SP.MAP(SP.UINT16, OCA.OcaProtoSignalPath)),
            level: 3,
            index: 3,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0001\u0004",
    ClassVersion: 1,
    ClassName: "OcaBlockFactory",
});
/**
 * Defines a proto-port in the factory. If proto-port already exists, it
 * is replaced with the one from this call. The return value indicates
 * whether the proto-port was successfully added.
 */
(function() {
var argument_signature = new SP.signature(SP.STRING, OCA.OcaPortMode);
var retval_signature = new SP.signature(OCA.OcaProtoPortID);
OcaBlockFactory.prototype.DefineProtoPort = function(name, portmode) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 1, 2,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Deletes a proto-port from the factory. The return value indicates
 * whether the proto-port was successfully deleted.
 */
(function() {
var argument_signature = new SP.signature(OCA.OcaProtoPortID);
OcaBlockFactory.prototype.UndefineProtoPort = function(ProtoPortID) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 2, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the factory's list of proto-ports. The return value indicates
 * whether the list was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.LIST(OCA.OcaProtoPort));
OcaBlockFactory.prototype.GetProtoPorts = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 3, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Defines a a proto-member of the given class in the factory. The return
 * value indicates whether the proto-member was successfully defined.
 */

/**
 * Defines a proto-member which will be instantiated by a specified
 * factory when the block is built. The return value indicates whether
 * the proto-member was successfully defined.
 */
(function() {
var argument_signature = new SP.signature(SP.UINT32);
var retval_signature = new SP.signature(SP.UINT32);
OcaBlockFactory.prototype.DefineProtoMemberUsingFactory = function(FactoryONo) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 5, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Deletes a proto-member from the factory. Deletes all proto-signal
 * paths attached to its ports. The return value indicates whether the
 * member was successfully deleted.
 */
(function() {
var argument_signature = new SP.signature(SP.UINT32);
OcaBlockFactory.prototype.UndefineProtoMember = function(ProtoObjectNumber) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 6, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the factory's list of proto-members. Does not recurse inner
 * proto-blocks. The return value indicates whether the list was
 * successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.LIST(OCA.OcaProtoObjectIdentification));
OcaBlockFactory.prototype.GetProtoMembers = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 7, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Defines a proto-signal path in the factory. The return value indicates
 * whether the proto-signal path was successfully defined.
 */
(function() {
var argument_signature = new SP.signature(OCA.OcaProtoSignalPath);
var retval_signature = new SP.signature(SP.UINT16);
OcaBlockFactory.prototype.DefineProtoSignalPath = function(Path) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 8, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Deletes a proto-signal path from the factory. The return value
 * indicates whether the signal path was successfully added.
 */
(function() {
var retval_signature = new SP.signature(SP.UINT16);
OcaBlockFactory.prototype.UndefineProtoSignalPath = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 9, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Gets the factory's list of proto-signal paths. Map key is proto-signal
 * path ID. Does not recurse inner proto-blocks. The return value
 * indicates whether the list was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.MAP(SP.UINT16, OCA.OcaProtoSignalPath));
OcaBlockFactory.prototype.GetProtoSignalPaths = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 10, 0);
    return device.send_command(cmd, retval_signature);
}
})();


/**
 * A matrix is a rectangular array of identical objects
 * ("<b>members</b>") that is coordinate addressable and has sets of
 * common input and output ports. The matrix host does not instantiate
 * these objects, but instead mediates the coordinate addressing,
 * implements the common input and output ports, and profides certain
 * other aggragate functions. Matrix members may be workers (including
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
 * posted x<sub>1</sub> and y<sub>1</sub> values into a list oftarget
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
 */
function OcaMatrix(ObjectNumber, device) {
    OcaWorker.call(this, ObjectNumber, device);
};
mod.OcaMatrix = OcaMatrix;
OcaMatrix.prototype = Object.assign(Object.create(OcaWorker.prototype), {
    __oca_properties__: OcaWorker.prototype.__oca_properties__.extend({
        X: {
            signature: new SP.signature(SP.UINT16),
            level: 3,
            index: 1,
            readonly: false,
            static: false,
        },
        Y: {
            signature: new SP.signature(SP.UINT16),
            level: 3,
            index: 2,
            readonly: false,
            static: false,
        },
        xSize: {
            signature: new SP.signature(SP.UINT16),
            level: 3,
            index: 3,
            readonly: false,
            static: false,
        },
        ySize: {
            signature: new SP.signature(SP.UINT16),
            level: 3,
            index: 4,
            readonly: false,
            static: false,
        },
        Members: {
            signature: new SP.signature(SP.LIST2D(SP.UINT32)),
            level: 3,
            index: 5,
            readonly: false,
            static: false,
        },
        Proxy: {
            signature: new SP.signature(SP.UINT32),
            level: 3,
            index: 6,
            readonly: false,
            static: false,
        },
        PortsPerRow: {
            signature: new SP.signature(SP.UINT8),
            level: 3,
            index: 7,
            readonly: false,
            static: false,
        },
        PortsPerColumn: {
            signature: new SP.signature(SP.UINT8),
            level: 3,
            index: 8,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0001\u0005",
    ClassVersion: 1,
    ClassName: "OcaMatrix",
});
/**
 * Gets coordinates of the currently active area (cell, row, column, or
 * whole matrix). The returned status indicates whether the operation was
 * successful.
 */
(function() {
var retval_signature = new SP.signature(SP.UINT16, SP.UINT16);
OcaMatrix.prototype.GetCurrentXY = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the currently active area (cell, row, column, or whole matrix).
 * The returned status indicates whether the operation was successful.
 */
(function() {
var argument_signature = new SP.signature(SP.UINT16, SP.UINT16);
OcaMatrix.prototype.SetCurrentXY = function(x, y) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 2, 2,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the matrix size. The returned status indicates whether the
 * operation was successful.
 */
(function() {
var retval_signature = new SP.signature(SP.UINT16, SP.UINT16, SP.UINT16, SP.UINT16, SP.UINT16, SP.UINT16);
OcaMatrix.prototype.GetSize = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 3, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the matrix size. The returned status indicates whether the
 * operation was successful. This method will not be available for
 * fixed-size matrices.
 */
(function() {
var argument_signature = new SP.signature(SP.UINT16, SP.UINT16);
OcaMatrix.prototype.SetSize = function(xSize, ySize) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 4, 2,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Retrieves the 2D array of member object numbers. Cells for which no
 * member has been defined will return Zero as the object number.
 */
(function() {
var retval_signature = new SP.signature(SP.LIST2D(SP.UINT32));
OcaMatrix.prototype.GetMembers = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 5, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the entire 2D array of member object numbers. Row and column size
 * of the <b>members</b> parameter must be equal to the current size of
 * the matrix.
 */
(function() {
var argument_signature = new SP.signature(SP.LIST2D(SP.UINT32));
OcaMatrix.prototype.SetMembers = function(members) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 6, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Retrieves the object number of the member at position (x,y). If no
 * member is defined at this position, returns an object number value of
 * Zero.
 */
(function() {
var argument_signature = new SP.signature(SP.UINT16, SP.UINT16);
var retval_signature = new SP.signature(SP.UINT32);
OcaMatrix.prototype.GetMember = function(x, y) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 7, 2,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Installs a particular object as a member at position (x,y). If another
 * object was at this position, it is removed.
 */
(function() {
var argument_signature = new SP.signature(SP.UINT16, SP.UINT16, SP.UINT32);
OcaMatrix.prototype.SetMember = function(x, y, memberONo) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 8, 3,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the object number of the matrix proxy.
 */
(function() {
var retval_signature = new SP.signature(SP.UINT32);
OcaMatrix.prototype.GetProxy = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 9, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the object number of the matrix proxy.
 */
(function() {
var argument_signature = new SP.signature(SP.UINT32);
OcaMatrix.prototype.SetProxy = function(ONo) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 10, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the number of ports per row. These are input ports.
 */
(function() {
var retval_signature = new SP.signature(SP.UINT8);
OcaMatrix.prototype.GetPortsPerRow = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 11, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the number of ports per row. These must be input ports.
 */
(function() {
var argument_signature = new SP.signature(SP.UINT8);
OcaMatrix.prototype.SetPortsPerRow = function(Ports) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 12, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the number of ports per output channel. These are output ports.
 */
(function() {
var argument_signature = new SP.signature(SP.UINT8);
OcaMatrix.prototype.GetPortsPerColumn = function(Ports) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 13, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Sets the number of ports per column. These must be output ports.
 */
(function() {
var retval_signature = new SP.signature(SP.UINT8);
OcaMatrix.prototype.SetPortsPerColumn = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 14, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the currently active area (cell, row, column, or whole matrix)
 * and locks it. Fails if the referenced members cannot all be locked.
 * The returned status indicates whether the operation was successful.
 */
(function() {
var argument_signature = new SP.signature(SP.UINT16, SP.UINT16);
OcaMatrix.prototype.SetCurrentXYLock = function(x, y) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 15, 2,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Unlocks the currently active area of the matrix. Fails if all the
 * members of the currently active area cannot be unlocked. Failure is
 * <u>not </u>triggered if one or more members of the currently active
 * area are already unlocked at the time Unlock() is called. The returned
 * status indicates whether the operation was successful.
 */
(function() {
OcaMatrix.prototype.UnlockCurrent = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 16, 0);
    return device.send_command(cmd);
}
})();


/**
 * Worker that allows connection of one or more internal signal paths to
 * a network signal channel. <ul> <li>For stream-oriented media
 * connection management such as used by AVB, this worker will be linked
 * to an <b>OcaStreamConnector</b> object and to the appropriate
 * <b>OcaStreamNetwork </b>object. </li> <li>For channel-oriented media
 * connection management, such as the Dante name-based routing mechanism,
 * this worker will be linked only to the <b>OcaStreamNetwork
 * </b>object.</li> </ul>
 */
function OcaNetworkSignalChannel(ObjectNumber, device) {
    OcaWorker.call(this, ObjectNumber, device);
};
mod.OcaNetworkSignalChannel = OcaNetworkSignalChannel;
OcaNetworkSignalChannel.prototype = Object.assign(Object.create(OcaWorker.prototype), {
    __oca_properties__: OcaWorker.prototype.__oca_properties__.extend({
        ConnectorPins: {
            signature: new SP.signature(SP.MAP(SP.UINT32, SP.UINT16)),
            level: 3,
            index: 3,
            readonly: false,
            static: false,
        },
        IDAdvertised: {
            signature: new SP.signature(SP.BLOB),
            level: 3,
            index: 1,
            readonly: false,
            static: false,
        },
        Network: {
            signature: new SP.signature(SP.UINT32),
            level: 3,
            index: 2,
            readonly: false,
            static: false,
        },
        RemoteChannelID: {
            signature: new SP.signature(SP.BLOB),
            level: 3,
            index: 4,
            readonly: false,
            static: false,
        },
        SourceOrSink: {
            signature: new SP.signature(OCA.OcaNetworkMediaSourceOrSink),
            level: 3,
            index: 5,
            readonly: false,
            static: false,
        },
        Status: {
            signature: new SP.signature(OCA.OcaNetworkSignalChannelStatus),
            level: 3,
            index: 6,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0001\u0006",
    ClassVersion: 1,
    ClassName: "OcaNetworkSignalChannel",
});
/**
 * Adds the object number of the stream connector object to which this
 * media port belongs, and specifies on what index of the stream
 * connector this channel can be found. Return status indicates success
 * of operation.
 */
(function() {
var argument_signature = new SP.signature(SP.UINT32, SP.UINT16);
OcaNetworkSignalChannel.prototype.AddToConnector = function(Connector, Index) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 6, 2,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the object number of the stream connector object to which this
 * media port belongs, if any. If port does not belong to a stream
 * connector, returns zero. Return status indicates success of operation.
 */
(function() {
var retval_signature = new SP.signature(SP.MAP(SP.UINT32, SP.UINT16));
OcaNetworkSignalChannel.prototype.GetConnectorPins = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 5, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Gets the value of the IDAdvertised property. Return status indicates
 * success of operation.
 */
(function() {
var retval_signature = new SP.signature(SP.BLOB);
OcaNetworkSignalChannel.prototype.GetIDAdvertised = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Gets the object number of the stream network object to which this
 * media port belongs. Return status indicates success of operation.
 */
(function() {
var retval_signature = new SP.signature(SP.UINT32);
OcaNetworkSignalChannel.prototype.GetNetwork = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 3, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Gets the remote channel ID to which this channel is connected. Empty
 * if the channel is not connected (at least not directly to another
 * channel). For stream-oriented connection management this functionality
 * is not used (i.e. the remote channel ID will always be empty).
 */
(function() {
var retval_signature = new SP.signature(SP.BLOB);
OcaNetworkSignalChannel.prototype.GetRemoteChannelID = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 8, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Gets the value of the SourceOrSink property. Return status indicates
 * success of operation.
 */
(function() {
var retval_signature = new SP.signature(OCA.OcaNetworkMediaSourceOrSink);
OcaNetworkSignalChannel.prototype.GetSourceOrSink = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 10, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Gets the value of the Status property. Return status indicates success
 * of operation.
 */
(function() {
var retval_signature = new SP.signature(OCA.OcaNetworkSignalChannelStatus);
OcaNetworkSignalChannel.prototype.GetStatus = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 11, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Removes this channel from the passed stream connector. Return status
 * indicates success of operation.
 */
(function() {
var argument_signature = new SP.signature(SP.UINT32);
OcaNetworkSignalChannel.prototype.RemoveFromConnector = function(Connector) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 7, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Sets the value of the IDAdvertised property. Return status indicates
 * success of operation.
 */
(function() {
var argument_signature = new SP.signature(SP.BLOB);
OcaNetworkSignalChannel.prototype.SetIDAdvertised = function(IDAdvertised) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 2, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Sets the object number of the stream network object to which this
 * media port belongs. Return status indicates success of operation. Only
 * implemented for reconfigurable devices.
 */
(function() {
var argument_signature = new SP.signature(SP.UINT32);
OcaNetworkSignalChannel.prototype.SetNetwork = function(Network) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 4, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Sets the remote channel ID to which this channel must be connected.
 * Only used for channel-oriented connection management. For
 * stream-oriented connection management this method is not used.
 * Clearing the remote channel ID (i.e. tearing down the connection) can
 * be done by passing an empty remote channel ID as parameter.
 */
(function() {
var argument_signature = new SP.signature(SP.BLOB);
OcaNetworkSignalChannel.prototype.SetRemoteChannelID = function(RemoteChannelID) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 9, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();


/**
 * Abstract base class for defining agents.
 */
function OcaAgent(ObjectNumber, device) {
    OcaRoot.call(this, ObjectNumber, device);
};
mod.OcaAgent = OcaAgent;
OcaAgent.prototype = Object.assign(Object.create(OcaRoot.prototype), {
    __oca_properties__: OcaRoot.prototype.__oca_properties__.extend({
        Label: {
            signature: new SP.signature(SP.STRING),
            level: 2,
            index: 1,
            readonly: false,
            static: false,
        },
        Owner: {
            signature: new SP.signature(SP.UINT32),
            level: 2,
            index: 2,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0002",
    ClassVersion: 1,
    ClassName: "OcaAgent",
});
/**
 * Gets the value of the Label property. The return value indicates
 * whether the property was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.STRING);
OcaAgent.prototype.GetLabel = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 2, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the value of the Label property. The return value indicates
 * whether the property was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.STRING);
OcaAgent.prototype.SetLabel = function(Label) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 2, 2, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the value of the Owner property. The return value indicates
 * whether the property was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.UINT32);
OcaAgent.prototype.GetOwner = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 2, 3, 0);
    return device.send_command(cmd, retval_signature);
}
})();


/**
 * Abstract base class for defining network classes to which this device
 * belongs. This class is to be used for control and monitoring networks
 * only. For media transport networks, and for networks that combine
 * media transport and control, the <b>OcaStreamNetwork</b> class should
 * be used instead.
 */
function OcaNetwork(ObjectNumber, device) {
    OcaAgent.call(this, ObjectNumber, device);
};
mod.OcaNetwork = OcaNetwork;
OcaNetwork.prototype = Object.assign(Object.create(OcaAgent.prototype), {
    __oca_properties__: OcaAgent.prototype.__oca_properties__.extend({
        LinkType: {
            signature: new SP.signature(OCA.OcaNetworkLinkType),
            level: 3,
            index: 1,
            readonly: true,
            static: true,
        },
        IDAdvertised: {
            signature: new SP.signature(SP.BLOB),
            level: 3,
            index: 2,
            readonly: false,
            static: false,
        },
        ControlProtocol: {
            signature: new SP.signature(OCA.OcaNetworkControlProtocol),
            level: 3,
            index: 3,
            readonly: false,
            static: false,
        },
        MediaProtocol: {
            signature: new SP.signature(OCA.OcaNetworkMediaProtocol),
            level: 3,
            index: 4,
            readonly: false,
            static: false,
        },
        Status: {
            signature: new SP.signature(OCA.OcaNetworkStatus),
            level: 3,
            index: 5,
            readonly: false,
            static: false,
        },
        SystemInterfaces: {
            signature: new SP.signature(SP.LIST(OCA.OcaNetworkSystemInterfaceID)),
            level: 3,
            index: 6,
            readonly: false,
            static: false,
        },
        MediaPorts: {
            signature: new SP.signature(SP.LIST(SP.UINT32)),
            level: 3,
            index: 7,
            readonly: false,
            static: false,
        },
        Statistics: {
            signature: new SP.signature(OCA.OcaNetworkStatistics),
            level: 3,
            index: 8,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0002\u0001",
    ClassVersion: 1,
    LinkType: 0,
    ClassName: "OcaNetwork",
});
/**
 * Gets the network's link type (wired Ethernet, USB, etc.). Return
 * status indicates whether the operation was successful.
 */
(function() {
var retval_signature = new SP.signature(OCA.OcaNetworkLinkType);
OcaNetwork.prototype.GetLinkType = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Gets the network's IDAdvertised. Return status indicates whether the
 * operation was successful.
 */
(function() {
var retval_signature = new SP.signature(SP.BLOB);
OcaNetwork.prototype.GetIDAdvertised = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 2, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the network's IDAdvertised. Return status indicates whether the
 * operation was successful.
 */
(function() {
var argument_signature = new SP.signature(SP.BLOB);
OcaNetwork.prototype.SetIDAdvertised = function(Name) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 3, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the network's ControlProtocol property. Return status indicates
 * whether the operation was successful.
 */
(function() {
var retval_signature = new SP.signature(OCA.OcaNetworkControlProtocol);
OcaNetwork.prototype.GetControlProtocol = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 4, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Gets the network's MediaProtocol property. This is a deprecated method
 * that always returns the value NONE.
 */
(function() {
var retval_signature = new SP.signature(OCA.OcaNetworkMediaProtocol);
OcaNetwork.prototype.GetMediaProtocol = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 5, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Retrieves the network's status. Return status indicates whether the
 * status was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(OCA.OcaNetworkStatus);
OcaNetwork.prototype.GetStatus = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 6, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Retrieves network error statistics counter values. Return status
 * indicates whether the values were successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(OCA.OcaNetworkStatistics);
OcaNetwork.prototype.GetStatistics = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 7, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Resets network error statistics counters. Return status indicates
 * whether the counters were successfully reset.
 */
(function() {
OcaNetwork.prototype.ResetStatistics = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 8, 0);
    return device.send_command(cmd);
}
})();
/**
 * Gets the list of system interface IDs that this network is using.
 * Return status indicates success of the operation.
 */
(function() {
var retval_signature = new SP.signature(SP.LIST(OCA.OcaNetworkSystemInterfaceID));
OcaNetwork.prototype.GetSystemInterfaces = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 9, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the list of system interface IDs that this network will use.
 * Return status indicates success of the operation. This method is not
 * implemented by all network implementations.
 */
(function() {
var argument_signature = new SP.signature(SP.LIST(OCA.OcaNetworkSystemInterfaceID));
OcaNetwork.prototype.SetSystemInterfaces = function(Interfaces) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 10, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Deprecated method. Always returns status INVALID_REQUEST. Media
 * transport is now managed by the class <b>OcaStreamNetwork.</b>
 */
(function() {
var retval_signature = new SP.signature(SP.LIST(SP.UINT32));
OcaNetwork.prototype.GetMediaPorts = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 11, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Start up this network.
 */
(function() {
OcaNetwork.prototype.Startup = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 12, 0);
    return device.send_command(cmd);
}
})();
/**
 * Shut down this network.
 */
(function() {
OcaNetwork.prototype.Shutdown = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 13, 0);
    return device.send_command(cmd);
}
})();


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
 */
function OcaGrouper(ObjectNumber, device) {
    OcaAgent.call(this, ObjectNumber, device);
};
mod.OcaGrouper = OcaGrouper;
OcaGrouper.prototype = Object.assign(Object.create(OcaAgent.prototype), {
    __oca_properties__: OcaAgent.prototype.__oca_properties__.extend({
        ActuatorOrSensor: {
            signature: new SP.signature(SP.BOOLEAN),
            level: 3,
            index: 1,
            readonly: false,
            static: false,
        },
        Groups: {
            signature: new SP.signature(SP.LIST(OCA.OcaGrouperGroup)),
            level: 3,
            index: 2,
            readonly: false,
            static: false,
        },
        Citizens: {
            signature: new SP.signature(SP.LIST(OCA.OcaGrouperCitizen)),
            level: 3,
            index: 3,
            readonly: false,
            static: false,
        },
        Enrollments: {
            signature: new SP.signature(SP.LIST(OCA.OcaGrouperEnrollment)),
            level: 3,
            index: 4,
            readonly: false,
            static: false,
        },
        Mode: {
            signature: new SP.signature(OCA.OcaGrouperMode),
            level: 3,
            index: 5,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0002\u0002",
    ClassVersion: 1,
    ClassName: "OcaGrouper",
});
/**
 * Adds a group to the grouper and returns its object number. (The
 * group's network address will be the same as the grouper's). The return
 * value indicates whether the group was successfully added.
 */
(function() {
var argument_signature = new SP.signature(SP.STRING);
var retval_signature = new SP.signature(SP.UINT16, SP.UINT32);
OcaGrouper.prototype.AddGroup = function(Name) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 1, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Deletes a group from the grouper. The return value indicates whether
 * the group was successfully deleted. Note: index values of deleted
 * groups are not reused during the lifetime of the grouper instance.
 */
(function() {
var argument_signature = new SP.signature(SP.UINT16);
OcaGrouper.prototype.DeleteGroup = function(Index) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 2, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the count of groups owned by this grouper. The return value
 * indicates whether the count was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.UINT16);
OcaGrouper.prototype.GetGroupCount = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 3, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Gets the list of groups owned by this grouper. The return value
 * indicates whether the list was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.LIST(OCA.OcaGrouperGroup));
OcaGrouper.prototype.GetGroupList = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 4, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Adds a target to the group. The return value indicates whether the
 * target was successfully added. This method does not enroll the new
 * target in any of the grouper's groups -- it merely makes the target
 * available for enrollment. Group membership is controlled by the
 * SetEnrollment method, q.v.
 */
(function() {
var argument_signature = new SP.signature(OCA.OcaGrouperCitizen);
var retval_signature = new SP.signature(SP.UINT16);
OcaGrouper.prototype.AddCitizen = function(Citizen) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 5, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Delete a citizen from the grouper (and therefore from all of its
 * groups). The return value indicates whether the citizen was
 * successfully deleted. Note: index values of deleted citizens are not
 * reused during the lifetime of the grouper instance.
 */
(function() {
var argument_signature = new SP.signature(SP.UINT16);
OcaGrouper.prototype.DeleteCitizen = function(Index) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 6, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the count of citizens registered in this grouper. The return
 * value indicates whether the count was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.UINT16);
OcaGrouper.prototype.GetCitizenCount = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 7, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Gets the list of citizens registered in this grouper. The return value
 * indicates whether the list was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.LIST(OCA.OcaGrouperCitizen));
OcaGrouper.prototype.GetCitizenList = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 8, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Gets membership status for given target in given group. The return
 * value indicates whether the status was successfully retrieved.
 */
(function() {
var argument_signature = new SP.signature(OCA.OcaGrouperEnrollment);
var retval_signature = new SP.signature(SP.BOOLEAN);
OcaGrouper.prototype.GetEnrollment = function(Enrollment) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 9, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets membership status for given target in given group. The return
 * value indicates whether the status was successfully set.
 */
(function() {
var argument_signature = new SP.signature(OCA.OcaGrouperEnrollment, SP.BOOLEAN);
OcaGrouper.prototype.SetEnrollment = function(Enrollment, IsMember) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 10, 2,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the list of members of the given group. The return value
 * indicates whether the list was successfully retrieved.
 */
(function() {
var argument_signature = new SP.signature(SP.UINT16);
var retval_signature = new SP.signature(SP.LIST(OCA.OcaGrouperCitizen));
OcaGrouper.prototype.GetGroupMemberList = function(Index) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 11, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Gets the value of the ActuatorOrSensor property. The return value
 * indicates whether the value was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.BOOLEAN);
OcaGrouper.prototype.GetActuatorOrSensor = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 12, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the value of the ActuatorOrSensor property. The return value
 * indicates whether the value was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.BOOLEAN);
OcaGrouper.prototype.SetActuatorOrSensor = function(ActuatorOrSensor) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 13, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the value of the Mode property. The return value indicates
 * whether the value was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(OCA.OcaGrouperMode);
OcaGrouper.prototype.GetMode = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 14, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the value of the Mode property. The return value indicates
 * whether the value was successfully set.
 */
(function() {
var argument_signature = new SP.signature(OCA.OcaGrouperMode);
OcaGrouper.prototype.SetMode = function(Mode) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 15, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
OcaGrouper.prototype.onStatusChange = function(callback) {
    return this.device.add_subscription(new OCA.OcaEvent(this.ObjectNumber, new OCA.OcaEventID(3, 1)), callback);
};


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
 */
function OcaRamper(ObjectNumber, device) {
    OcaAgent.call(this, ObjectNumber, device);
};
mod.OcaRamper = OcaRamper;
OcaRamper.prototype = Object.assign(Object.create(OcaAgent.prototype), {
    __oca_properties__: OcaAgent.prototype.__oca_properties__.extend({
        State: {
            signature: new SP.signature(OCA.OcaRamperState),
            level: 3,
            index: 1,
            readonly: false,
            static: false,
        },
        RampedProperty: {
            signature: new SP.signature(OCA.OcaProperty),
            level: 3,
            index: 2,
            readonly: false,
            static: false,
        },
        TimeMode: {
            signature: new SP.signature(OCA.OcaRamperTimeMode),
            level: 3,
            index: 3,
            readonly: false,
            static: false,
        },
        StartTime: {
            signature: new SP.signature(SP.UINT64),
            level: 3,
            index: 4,
            readonly: false,
            static: false,
        },
        Duration: {
            signature: new SP.signature(SP.FLOAT32),
            level: 3,
            index: 5,
            readonly: false,
            static: false,
        },
        InterpolationLaw: {
            signature: new SP.signature(OCA.OcaRamperInterpolationLaw),
            level: 3,
            index: 6,
            readonly: false,
            static: false,
        },
        Goal: {
            signature: new SP.signature(SP.FLOAT64),
            level: 3,
            index: 7,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0002\u0003",
    ClassVersion: 1,
    ClassName: "OcaRamper",
});
/**
 * Executes the given ramper command. The return value indicates whether
 * the command was successfully executed.
 */
(function() {
var argument_signature = new SP.signature(OCA.OcaRamperRunCommand);
OcaRamper.prototype.Control = function(Command) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 1, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets current state of ramper. The return value indicates whether the
 * state was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(OCA.OcaRamperState);
OcaRamper.prototype.GetState = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 2, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Gets definition of ramped property. The return value indicates whether
 * the object number was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(OCA.OcaProperty);
OcaRamper.prototype.GetRampedProperty = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 3, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Defines property to be ramped. The return value indicates whether the
 * definition was successful.
 */
(function() {
var argument_signature = new SP.signature(OCA.OcaProperty);
OcaRamper.prototype.SetRampedProperty = function(property) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 4, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets ramper time mode (absolute or relative). The return value
 * indicates whether the time mode was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(OCA.OcaRamperTimeMode);
OcaRamper.prototype.GetTimeMode = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 5, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets ramper time mode (absolute or relative). The return value
 * indicates whether the time mode was successfully set.
 */
(function() {
var argument_signature = new SP.signature(OCA.OcaRamperTimeMode);
OcaRamper.prototype.SetTimeMode = function(TimeMode) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 6, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets ramp start time. The return value indicates whether the start
 * time was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.UINT64);
OcaRamper.prototype.GetStartTime = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 7, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets ramper start time. The return value indicates whether the start
 * time was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.UINT64);
OcaRamper.prototype.SetStartTime = function(TimeMode) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 8, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets ramp duration. The return value indicates whether the duration
 * was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaRamper.prototype.GetDuration = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 9, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets ramp duration. The return value indicates whether the duration
 * was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.FLOAT32);
OcaRamper.prototype.SetDuration = function(Duration) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 10, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Retrieves interpolation law setting. The return value indicates
 * whether the setting was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(OCA.OcaRamperInterpolationLaw);
OcaRamper.prototype.GetInterpolationLaw = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 11, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets ramp interpolation law. The return value indicates whether the
 * law was successfully set.
 */
(function() {
var argument_signature = new SP.signature(OCA.OcaRamperInterpolationLaw);
OcaRamper.prototype.SetInterpolationLaw = function(goal) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 12, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Retrieves ramp goal value. The return value indicates whether the
 * duration was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.FLOAT64);
OcaRamper.prototype.GetGoal = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 13, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets ramp goal value. The return value indicates whether the duration
 * was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.FLOAT64);
OcaRamper.prototype.SetGoal = function(goal) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 14, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();


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
 */
function OcaLibrary(ObjectNumber, device) {
    OcaAgent.call(this, ObjectNumber, device);
};
mod.OcaLibrary = OcaLibrary;
OcaLibrary.prototype = Object.assign(Object.create(OcaAgent.prototype), {
    __oca_properties__: OcaAgent.prototype.__oca_properties__.extend({
        DataType: {
            signature: new SP.signature(OCA.OcaLibVolType),
            level: 3,
            index: 1,
            readonly: false,
            static: false,
        },
        Access: {
            signature: new SP.signature(OCA.OcaLibAccess),
            level: 3,
            index: 2,
            readonly: false,
            static: false,
        },
        Volumes: {
            signature: new SP.signature(SP.MAP(SP.UINT32, OCA.OcaLibVol)),
            level: 3,
            index: 3,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0002\u0005",
    ClassVersion: 1,
    ClassName: "OcaLibrary",
});
/**
 * Adds a volume to the library and returns its volume ID. The return
 * value indicates whether the volume was successfully added.
 */
(function() {
var argument_signature = new SP.signature(OCA.OcaLibVol);
var retval_signature = new SP.signature(SP.UINT32);
OcaLibrary.prototype.AddVolume = function(Volume) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 1, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Replaces a volume in the library at the given volume ID. The return
 * value indicates whether the volume was successfully replaced.
 */
(function() {
var argument_signature = new SP.signature(SP.UINT32, OCA.OcaLibVol);
OcaLibrary.prototype.ReplaceVolume = function(ID, Volume) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 2, 2,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Deletes a volume from the library. The return value indicates whether
 * the group was successfully deleted.
 */
(function() {
var argument_signature = new SP.signature(SP.UINT32);
OcaLibrary.prototype.DeleteVolume = function(ID) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 3, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Retrieves a library volume. The return value indicates whether the
 * volume was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(OCA.OcaLibVol);
OcaLibrary.prototype.GetVolume = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 4, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Gets the count of volumes in this library. The return value indicates
 * whether the count was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.UINT16);
OcaLibrary.prototype.GetVolumeCount = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 5, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Gets the list of volumes held in this library. The return value
 * indicates whether the list was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.MAP(SP.UINT32, OCA.OcaLibVol));
OcaLibrary.prototype.GetVolumes = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 6, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Gets allowed access mode for this library. The return value indicates
 * whether the property was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(OCA.OcaLibAccess);
OcaLibrary.prototype.GetAccess = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 7, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets allowed access mode for this library. The return value indicates
 * whether the property was successfully set. Not implemented for static,
 * manufacturer-supplied libraries.
 */
(function() {
var argument_signature = new SP.signature(OCA.OcaLibAccess);
OcaLibrary.prototype.SetAccess = function(Access) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 8, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();


/**
 * A media clock, internal or external.
 */
function OcaMediaClock(ObjectNumber, device) {
    OcaAgent.call(this, ObjectNumber, device);
};
mod.OcaMediaClock = OcaMediaClock;
OcaMediaClock.prototype = Object.assign(Object.create(OcaAgent.prototype), {
    __oca_properties__: OcaAgent.prototype.__oca_properties__.extend({
        Type: {
            signature: new SP.signature(OCA.OcaMediaClockType),
            level: 3,
            index: 1,
            readonly: false,
            static: false,
        },
        DomainID: {
            signature: new SP.signature(SP.UINT16),
            level: 3,
            index: 2,
            readonly: false,
            static: false,
        },
        RatesSupported: {
            signature: new SP.signature(SP.LIST(OCA.OcaMediaClockRate)),
            level: 3,
            index: 3,
            readonly: true,
            static: true,
        },
        CurrentRate: {
            signature: new SP.signature(OCA.OcaMediaClockRate),
            level: 3,
            index: 4,
            readonly: false,
            static: false,
        },
        LockState: {
            signature: new SP.signature(OCA.OcaMediaClockLockState),
            level: 3,
            index: 5,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0002\u0006",
    ClassVersion: 1,
    RatesSupported: 0,
    ClassName: "OcaMediaClock",
});
/**
 * Gets the value of the <b>Type </b>property. The return value indicates
 * whether the value was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(OCA.OcaMediaClockType);
OcaMediaClock.prototype.GetType = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the value of the <b>Type </b>property. The return value indicates
 * whether the value was successfully set. Optional method, may not be
 * supported in all implementations.
 */
(function() {
var argument_signature = new SP.signature(OCA.OcaMediaClockType);
OcaMediaClock.prototype.SetType = function(Type) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 2, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the value of the <b>DomainID </b>property. The return value
 * indicates whether the value was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.UINT16);
OcaMediaClock.prototype.GetDomainID = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 3, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the value of the <b>DomainID </b>property. The return value
 * indicates whether the value was successfully set. Optional method, may
 * not be supported in all implementations.
 */
(function() {
var argument_signature = new SP.signature(SP.UINT16);
OcaMediaClock.prototype.SetDomainID = function(ID) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 4, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the list of supported sampling rates. The return value indicates
 * whether the list was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.LIST(OCA.OcaMediaClockRate));
OcaMediaClock.prototype.GetSupportedRates = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 5, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Gets the current sampling rate. The return value indicates whether the
 * value was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(OCA.OcaMediaClockRate);
OcaMediaClock.prototype.GetRate = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 6, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the sampling rate. The return value indicates whether the rate
 * was successfully set.
 */
(function() {
var argument_signature = new SP.signature(OCA.OcaMediaClockRate);
OcaMediaClock.prototype.SetRate = function(rate) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 7, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the current media clock lock state. The return value indicates
 * whether the value was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(OCA.OcaMediaClockLockState);
OcaMediaClock.prototype.GetLockState = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 8, 0);
    return device.send_command(cmd, retval_signature);
}
})();


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
 */
function OcaNumericObserver(ObjectNumber, device) {
    OcaAgent.call(this, ObjectNumber, device);
};
mod.OcaNumericObserver = OcaNumericObserver;
OcaNumericObserver.prototype = Object.assign(Object.create(OcaAgent.prototype), {
    __oca_properties__: OcaAgent.prototype.__oca_properties__.extend({
        State: {
            signature: new SP.signature(OCA.OcaObserverState),
            level: 3,
            index: 1,
            readonly: false,
            static: false,
        },
        ObservedProperty: {
            signature: new SP.signature(OCA.OcaProperty),
            level: 3,
            index: 2,
            readonly: false,
            static: false,
        },
        Threshold: {
            signature: new SP.signature(SP.FLOAT64),
            level: 3,
            index: 3,
            readonly: false,
            static: false,
        },
        Operator: {
            signature: new SP.signature(OCA.OcaRelationalOperator),
            level: 3,
            index: 4,
            readonly: false,
            static: false,
        },
        TwoWay: {
            signature: new SP.signature(SP.BOOLEAN),
            level: 3,
            index: 5,
            readonly: false,
            static: false,
        },
        Hysteresis: {
            signature: new SP.signature(SP.FLOAT64),
            level: 3,
            index: 6,
            readonly: false,
            static: false,
        },
        Period: {
            signature: new SP.signature(SP.FLOAT32),
            level: 3,
            index: 7,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0002\u0004",
    ClassVersion: 1,
    ClassName: "OcaNumericObserver",
});
/**
 * Gets the value of the observed property that was reported by the most
 * recently emitted Observation event. If the numeric observer has never
 * emitted an Observation event, returns the IEEE not-a-number value. The
 * return status indicates whether the value has been successfully
 * returned.
 */
(function() {
var retval_signature = new SP.signature(SP.FLOAT64);
OcaNumericObserver.prototype.GetLastObservation = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Gets the observer's state. The return value indicates whether the
 * state was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(OCA.OcaObserverState);
OcaNumericObserver.prototype.GetState = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 2, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Gets the identification of the property that the observer observes.
 * The return value indicates whether the identification was successfully
 * retrieved.
 */
(function() {
var retval_signature = new SP.signature(OCA.OcaProperty);
OcaNumericObserver.prototype.GetObservedProperty = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 3, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the identification of the property that the observer observes.
 * The return value indicates whether the identification was successfully
 * set.
 */
(function() {
var argument_signature = new SP.signature(OCA.OcaProperty);
OcaNumericObserver.prototype.SetObservedProperty = function(property) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 4, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the value of the <b>Threshold </b>property. The return value
 * indicates whether the threshold value was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.FLOAT64);
OcaNumericObserver.prototype.GetThreshold = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 5, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the value of the <b>Threshold </b>property. The return value
 * indicates whether the threshold value was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.FLOAT64);
OcaNumericObserver.prototype.SetThreshold = function(Threshold) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 6, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the value of the <b>Operator </b>property. The return value
 * indicates whether the property was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(OCA.OcaRelationalOperator);
OcaNumericObserver.prototype.GetOperator = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 7, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the value of the <b>Operator </b>property. The return value
 * indicates whether the operator was successfully set.
 */
(function() {
var argument_signature = new SP.signature(OCA.OcaRelationalOperator);
OcaNumericObserver.prototype.SetOperator = function(operator) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 8, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the value of the <b>TwoWay </b>property. The return value
 * indicates whether the property was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.BOOLEAN);
OcaNumericObserver.prototype.GetTwoWay = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 9, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the value of the <b>TwoWay </b>property. The return value
 * indicates whether the property was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.BOOLEAN);
OcaNumericObserver.prototype.SetTwoWay = function(twoWay) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 10, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the value of the <b>Hysteresis </b>property. The return value
 * indicates whether the property was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.FLOAT64);
OcaNumericObserver.prototype.GetHysteresis = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 11, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the value of the <b>Hysteresis </b>property. The return value
 * indicates whether the property was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.FLOAT64);
OcaNumericObserver.prototype.SetHysteresis = function(hysteresis) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 12, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the value of the <b>Period </b>property. The return value
 * indicates whether the property was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.FLOAT32);
OcaNumericObserver.prototype.GetPeriod = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 13, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the value of the <b>Period </b>property. The return value
 * indicates whether the property was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.FLOAT32);
OcaNumericObserver.prototype.SetPeriod = function(period) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 14, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
OcaNumericObserver.prototype.onObservation = function(callback) {
    return this.device.add_subscription(new OCA.OcaEvent(this.ObjectNumber, new OCA.OcaEventID(3, 1)), callback);
};


/**
 * A power supply.
 */
function OcaPowerSupply(ObjectNumber, device) {
    OcaAgent.call(this, ObjectNumber, device);
};
mod.OcaPowerSupply = OcaPowerSupply;
OcaPowerSupply.prototype = Object.assign(Object.create(OcaAgent.prototype), {
    __oca_properties__: OcaAgent.prototype.__oca_properties__.extend({
        Type: {
            signature: new SP.signature(OCA.OcaPowerSupplyType),
            level: 3,
            index: 1,
            readonly: false,
            static: false,
        },
        ModelInfo: {
            signature: new SP.signature(SP.STRING),
            level: 3,
            index: 2,
            readonly: false,
            static: false,
        },
        State: {
            signature: new SP.signature(OCA.OcaPowerSupplyState),
            level: 3,
            index: 3,
            readonly: false,
            static: false,
        },
        Charging: {
            signature: new SP.signature(SP.BOOLEAN),
            level: 3,
            index: 4,
            readonly: false,
            static: false,
        },
        LoadFractionAvailable: {
            signature: new SP.signature(SP.FLOAT32),
            level: 3,
            index: 5,
            readonly: true,
            static: false,
        },
        StorageFractionAvailable: {
            signature: new SP.signature(SP.FLOAT32),
            level: 3,
            index: 6,
            readonly: true,
            static: false,
        },
        Location: {
            signature: new SP.signature(OCA.OcaPowerSupplyLocation),
            level: 3,
            index: 7,
            readonly: true,
            static: false,
        },
    }),
    ClassID: "\u0001\u0002\u0007",
    ClassVersion: 2,
    ClassName: "OcaPowerSupply",
});
/**
 * Gets the type of the power supply. Return value indicates whether the
 * data was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(OCA.OcaPowerSupplyType);
OcaPowerSupply.prototype.GetType = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Gets the power supply's model information text. Return value indicates
 * whether the data was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.STRING);
OcaPowerSupply.prototype.GetModelInfo = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 2, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Gets the state of the power supply. Return value indicates whether the
 * data was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(OCA.OcaPowerSupplyState);
OcaPowerSupply.prototype.GetState = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 3, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Changes the power supply's state. Return value indicates whether the
 * state was successfully changed.
 */
(function() {
var argument_signature = new SP.signature(OCA.OcaPowerSupplyState);
OcaPowerSupply.prototype.SetState = function(state) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 4, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the value of property <b>Charging</b>. Return value indicates
 * whether the value was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.BOOLEAN);
OcaPowerSupply.prototype.GetCharging = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 5, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Gets the available load fraction. Return value indicates whether the
 * data was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.FLOAT32);
OcaPowerSupply.prototype.GetLoadFractionAvailable = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 6, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Gets the available storage fraction. Return value indicates whether
 * the data was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.FLOAT32);
OcaPowerSupply.prototype.GetStorageFractionAvailable = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 7, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Gets the power supply physical location. Return value indicates
 * whether the data was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(OCA.OcaPowerSupplyLocation);
OcaPowerSupply.prototype.GetLocation = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 8, 0);
    return device.send_command(cmd, retval_signature);
}
})();


/**
 * Base class for event handler objects. Application developers can
 * derive from this class and add specific callback methods that perform
 * processing and/or have specific event data structures.
 */
function OcaEventHandler(ObjectNumber, device) {
    OcaAgent.call(this, ObjectNumber, device);
};
mod.OcaEventHandler = OcaEventHandler;
OcaEventHandler.prototype = Object.assign(Object.create(OcaAgent.prototype), {
    __oca_properties__: OcaAgent.prototype.__oca_properties__.extend({
    }),
    ClassID: "\u0001\u0002\b",
    ClassVersion: 1,
    ClassName: "OcaEventHandler",
});
/**
 * Generic empty callback method for events. Application developers can
 * override this method in a derived class to add behavior.
 */
(function() {
var argument_signature = new SP.signature(SP.BLOB, OCA.OcaEventData);
OcaEventHandler.prototype.OnEvent = function(Context, eventData) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 1, 2,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();


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
 */
function OcaNumericObserverList(ObjectNumber, device) {
    OcaAgent.call(this, ObjectNumber, device);
};
mod.OcaNumericObserverList = OcaNumericObserverList;
OcaNumericObserverList.prototype = Object.assign(Object.create(OcaAgent.prototype), {
    __oca_properties__: OcaAgent.prototype.__oca_properties__.extend({
        State: {
            signature: new SP.signature(OCA.OcaObserverState),
            level: 3,
            index: 1,
            readonly: false,
            static: false,
        },
        ObservedProperties: {
            signature: new SP.signature(SP.LIST(OCA.OcaProperty)),
            level: 3,
            index: 2,
            readonly: false,
            static: false,
        },
        Threshold: {
            signature: new SP.signature(SP.FLOAT64),
            level: 3,
            index: 3,
            readonly: false,
            static: false,
        },
        Operator: {
            signature: new SP.signature(OCA.OcaRelationalOperator),
            level: 3,
            index: 4,
            readonly: false,
            static: false,
        },
        TwoWay: {
            signature: new SP.signature(SP.BOOLEAN),
            level: 3,
            index: 5,
            readonly: false,
            static: false,
        },
        Hysteresis: {
            signature: new SP.signature(SP.FLOAT64),
            level: 3,
            index: 6,
            readonly: false,
            static: false,
        },
        Period: {
            signature: new SP.signature(SP.FLOAT32),
            level: 3,
            index: 7,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0002\t",
    ClassVersion: 1,
    ClassName: "OcaNumericObserverList",
});
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
 */
(function() {
var retval_signature = new SP.signature(SP.LIST(SP.FLOAT64));
OcaNumericObserverList.prototype.GetLastObservation = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Gets the observer's state. The return value indicates whether the
 * state was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(OCA.OcaObserverState);
OcaNumericObserverList.prototype.GetState = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 2, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Gets the identifications of the properties that the observer observes.
 * The order of property identifications in the returned list is
 * determined by the order of property identifications set by
 * SetObservedProperties, and is the same as the order of values returned
 * by GetLastObservation and the Observation event. The return value
 * indicates whether the identifications were successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.LIST(OCA.OcaProperty));
OcaNumericObserverList.prototype.GetObservedProperties = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 3, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the identifications of the properties that the observer observes.
 * The order of property identifications supplied determines the order of
 * property identifications returned by GetObservedProperties and the
 * order of values returned by GetLastObservation and the Observation
 * event. The return value indicates whether the identifications were
 * successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.LIST(OCA.OcaProperty));
OcaNumericObserverList.prototype.SetObservedProperties = function(property) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 4, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the value of the <b>Threshold </b>property. The return value
 * indicates whether the threshold value was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.FLOAT64);
OcaNumericObserverList.prototype.GetThreshold = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 5, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the value of the <b>Threshold </b>property. The return value
 * indicates whether the threshold value was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.FLOAT64);
OcaNumericObserverList.prototype.SetThreshold = function(Threshold) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 6, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the value of the <b>Operator </b>property. The return value
 * indicates whether the property was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(OCA.OcaRelationalOperator);
OcaNumericObserverList.prototype.GetOperator = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 7, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the value of the <b>Operator </b>property. The return value
 * indicates whether the operator was successfully set.
 */
(function() {
var argument_signature = new SP.signature(OCA.OcaRelationalOperator);
OcaNumericObserverList.prototype.SetOperator = function(operator) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 8, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the value of the <b>TwoWay </b>property. The return value
 * indicates whether the property was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.BOOLEAN);
OcaNumericObserverList.prototype.GetTwoWay = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 9, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the value of the <b>TwoWay </b>property. The return value
 * indicates whether the property was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.BOOLEAN);
OcaNumericObserverList.prototype.SetTwoWay = function(twoWay) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 10, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the value of the <b>Hysteresis </b>property. The return value
 * indicates whether the property was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.FLOAT64);
OcaNumericObserverList.prototype.GetHysteresis = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 11, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the value of the <b>Hysteresis </b>property. The return value
 * indicates whether the property was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.FLOAT64);
OcaNumericObserverList.prototype.SetHysteresis = function(hysteresis) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 12, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the value of the <b>Period </b>property. The return value
 * indicates whether the property was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.FLOAT32);
OcaNumericObserverList.prototype.GetPeriod = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 13, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the value of the <b>Period </b>property. The return value
 * indicates whether the property was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.FLOAT32);
OcaNumericObserverList.prototype.SetPeriod = function(period) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 14, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
OcaNumericObserverList.prototype.onObservation = function(callback) {
    return this.device.add_subscription(new OCA.OcaEvent(this.ObjectNumber, new OCA.OcaEventID(3, 1)), callback);
};


/**
 * Abstract base class for defining network classes to which this device
 * belongs. May be a media transport network, a control and monitoring
 * network, or a network that does both. There shall be one
 * OcaStreamNetwork instance for each network to which the device
 * belongs. This class may be subclassed to support networks of various
 * types. Replaces the earlier <b>OcaNetwork</b> class for new
 * applications.
 */
function OcaStreamNetwork(ObjectNumber, device) {
    OcaAgent.call(this, ObjectNumber, device);
};
mod.OcaStreamNetwork = OcaStreamNetwork;
OcaStreamNetwork.prototype = Object.assign(Object.create(OcaAgent.prototype), {
    __oca_properties__: OcaAgent.prototype.__oca_properties__.extend({
        ControlProtocol: {
            signature: new SP.signature(OCA.OcaNetworkControlProtocol),
            level: 3,
            index: 3,
            readonly: false,
            static: false,
        },
        IDAdvertised: {
            signature: new SP.signature(SP.BLOB),
            level: 3,
            index: 2,
            readonly: false,
            static: false,
        },
        LinkType: {
            signature: new SP.signature(OCA.OcaNetworkLinkType),
            level: 3,
            index: 1,
            readonly: true,
            static: true,
        },
        MediaProtocol: {
            signature: new SP.signature(OCA.OcaNetworkMediaProtocol),
            level: 3,
            index: 4,
            readonly: false,
            static: false,
        },
        SignalChannelsSink: {
            signature: new SP.signature(SP.LIST(SP.UINT32)),
            level: 3,
            index: 10,
            readonly: false,
            static: false,
        },
        SignalChannelsSource: {
            signature: new SP.signature(SP.LIST(SP.UINT32)),
            level: 3,
            index: 9,
            readonly: false,
            static: false,
        },
        Statistics: {
            signature: new SP.signature(OCA.OcaNetworkStatistics),
            level: 3,
            index: 11,
            readonly: false,
            static: false,
        },
        Status: {
            signature: new SP.signature(OCA.OcaNetworkStatus),
            level: 3,
            index: 5,
            readonly: false,
            static: false,
        },
        StreamConnectorsSink: {
            signature: new SP.signature(SP.LIST(SP.UINT32)),
            level: 3,
            index: 8,
            readonly: false,
            static: false,
        },
        StreamConnectorsSource: {
            signature: new SP.signature(SP.LIST(SP.UINT32)),
            level: 3,
            index: 7,
            readonly: false,
            static: false,
        },
        SystemInterfaces: {
            signature: new SP.signature(SP.LIST(OCA.OcaNetworkSystemInterfaceID)),
            level: 3,
            index: 6,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0002\n",
    ClassVersion: 1,
    LinkType: 0,
    ClassName: "OcaStreamNetwork",
});
/**
 * Gets the network's link type (wired Ethernet, USB, etc.). Return
 * status indicates whether the operation was successful.
 */
(function() {
var retval_signature = new SP.signature(OCA.OcaNetworkLinkType);
OcaStreamNetwork.prototype.GetLinkType = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Gets the network's IDAdvertised. Return status indicates whether the
 * operation was successful.
 */
(function() {
var retval_signature = new SP.signature(SP.BLOB);
OcaStreamNetwork.prototype.GetIDAdvertised = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 2, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the network's IDAdvertised. Return status indicates whether the
 * operation was successful.
 */
(function() {
var argument_signature = new SP.signature(SP.BLOB);
OcaStreamNetwork.prototype.SetIDAdvertised = function(Name) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 3, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the network's ControlProtocol property. Return status indicates
 * whether the operation was successful.
 */
(function() {
var retval_signature = new SP.signature(OCA.OcaNetworkControlProtocol);
OcaStreamNetwork.prototype.GetControlProtocol = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 4, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Gets the network's MediaProtocol property. Return status indicates
 * whether the operation was successful.
 */
(function() {
var retval_signature = new SP.signature(OCA.OcaNetworkMediaProtocol);
OcaStreamNetwork.prototype.GetMediaProtocol = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 5, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Retrieves the network's status. Return status indicates whether the
 * status was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(OCA.OcaNetworkStatus);
OcaStreamNetwork.prototype.GetStatus = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 6, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Retrieves network error statistics counter values. Return status
 * indicates whether the values were successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(OCA.OcaNetworkStatistics);
OcaStreamNetwork.prototype.GetStatistics = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 7, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Resets network error statistics counters. Return status indicates
 * whether the counters were successfully reset.
 */
(function() {
OcaStreamNetwork.prototype.ResetStatistics = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 8, 0);
    return device.send_command(cmd);
}
})();
/**
 * Gets the list of system interface IDs that this network is using.
 * Return status indicates success of the operation.
 */
(function() {
var retval_signature = new SP.signature(SP.LIST(OCA.OcaNetworkSystemInterfaceID));
OcaStreamNetwork.prototype.GetSystemInterfaces = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 9, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the list of system interface IDs that this network will use.
 * Return status indicates success of the operation. This method is not
 * implemented by all network implementations.
 */
(function() {
var argument_signature = new SP.signature(SP.LIST(OCA.OcaNetworkSystemInterfaceID));
OcaStreamNetwork.prototype.SetSystemInterfaces = function(Interfaces) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 10, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
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
 */
(function() {
var retval_signature = new SP.signature(SP.LIST(SP.UINT32));
OcaStreamNetwork.prototype.GetStreamConnectorsSource = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 11, 0);
    return device.send_command(cmd, retval_signature);
}
})();
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
 */
(function() {
var argument_signature = new SP.signature(SP.LIST(SP.UINT32));
OcaStreamNetwork.prototype.SetStreamConnectorsSource = function(StreamConnectors) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 12, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
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
 */
(function() {
var retval_signature = new SP.signature(SP.LIST(SP.UINT32));
OcaStreamNetwork.prototype.GetStreamConnectorsSink = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 13, 0);
    return device.send_command(cmd, retval_signature);
}
})();
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
 */
(function() {
var argument_signature = new SP.signature(SP.LIST(SP.UINT32));
OcaStreamNetwork.prototype.SetStreamConnectorsSink = function(StreamConnectors) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 14, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
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
 */
(function() {
var retval_signature = new SP.signature(SP.LIST(SP.UINT32));
OcaStreamNetwork.prototype.GetSignalChannelsSource = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 15, 0);
    return device.send_command(cmd, retval_signature);
}
})();
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
 */
(function() {
var argument_signature = new SP.signature(SP.LIST(SP.UINT32));
OcaStreamNetwork.prototype.SetSignalChannelsSource = function(SignalChannels) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 16, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
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
 */
(function() {
var retval_signature = new SP.signature(SP.LIST(SP.UINT32));
OcaStreamNetwork.prototype.GetSignalChannelsSink = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 17, 0);
    return device.send_command(cmd, retval_signature);
}
})();
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
 */
(function() {
var argument_signature = new SP.signature(SP.LIST(SP.UINT32));
OcaStreamNetwork.prototype.SetSignalChannelsSink = function(SignalChannels) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 18, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Start up this network.
 */
(function() {
OcaStreamNetwork.prototype.Startup = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 19, 0);
    return device.send_command(cmd);
}
})();
/**
 * Shut down this network.
 */
(function() {
OcaStreamNetwork.prototype.Shutdown = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 20, 0);
    return device.send_command(cmd);
}
})();


/**
 * Agent class for objects ("connectors") that allow connection of
 * streams to the device. Streams may be single channels or multichannel
 * groups. A connector is either a <i>source</i> or a <i>sink. </i>
 * Sources are sometimes called "talkers". Sinks are sometimes called
 * "listeners". Each connector links to zero or more <b>OcaStream</b>
 * data objects. Each <b>OcaStream</b> object represents a signal flow to
 * or from a local connector to a remote connector. The remote connector
 * is usually, but not necessarily, in a different node. Each connector
 * collects zero or more <i>signal channels</i>. A signal channel is an
 * instance of <b>OcaNetworkSignalChannel.</b> Each signal channel
 * exposes one media channel of the stream to the interior of the device.
 * A signal channel therefore is a Worker that contains exactly one
 * <b>OcaPort</b> data object. Each <b>OcaStreamConnector </b>object
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
 */
function OcaStreamConnector(ObjectNumber, device) {
    OcaAgent.call(this, ObjectNumber, device);
};
mod.OcaStreamConnector = OcaStreamConnector;
OcaStreamConnector.prototype = Object.assign(Object.create(OcaAgent.prototype), {
    __oca_properties__: OcaAgent.prototype.__oca_properties__.extend({
        IDAdvertised: {
            signature: new SP.signature(SP.BLOB),
            level: 3,
            index: 2,
            readonly: false,
            static: false,
        },
        OwnerNetwork: {
            signature: new SP.signature(SP.UINT32),
            level: 3,
            index: 1,
            readonly: false,
            static: false,
        },
        Pins: {
            signature: new SP.signature(SP.MAP(SP.UINT16, SP.UINT32)),
            level: 3,
            index: 5,
            readonly: false,
            static: false,
        },
        SourceOrSink: {
            signature: new SP.signature(OCA.OcaNetworkMediaSourceOrSink),
            level: 3,
            index: 3,
            readonly: false,
            static: false,
        },
        Status: {
            signature: new SP.signature(OCA.OcaStreamConnectorStatus),
            level: 3,
            index: 6,
            readonly: false,
            static: false,
        },
        Streams: {
            signature: new SP.signature(SP.MAP(SP.UINT16, OCA.OcaStream)),
            level: 3,
            index: 4,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0002\u000b",
    ClassVersion: 1,
    ClassName: "OcaStreamConnector",
});
/**
 * Connects a stream to this connector. Return status indicates success
 * of operation.
 */
(function() {
var argument_signature = new SP.signature(OCA.OcaStream);
var retval_signature = new SP.signature(SP.UINT16);
OcaStreamConnector.prototype.ConnectStream = function(Stream) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 7, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Disconnects a stream from this connector. Return status indicates
 * success of operation.
 */
(function() {
var argument_signature = new SP.signature(SP.UINT16);
OcaStreamConnector.prototype.DisconnectStream = function(StreamID) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 8, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the value of the IDAdvertised property. Return status indicates
 * success of operation.
 */
(function() {
var retval_signature = new SP.signature(SP.BLOB);
OcaStreamConnector.prototype.GetIDAdvertised = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 3, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Gets the object number of the <b>OcaStreamNetwork </b>object to which
 * this connector belongs. Return status indicates success of operation.
 */
(function() {
var retval_signature = new SP.signature(SP.UINT32);
OcaStreamConnector.prototype.GetOwnerNetwork = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Gets the list of object numbers of <b>OcaNetworkSignalChannel
 * </b>objects connected to this connector. Return status indicates
 * success of operation.
 */
(function() {
var retval_signature = new SP.signature(SP.MAP(SP.UINT16, SP.UINT32));
OcaStreamConnector.prototype.GetPins = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 10, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Gets the value of the SourceOrSink property. Return status indicates
 * success of operation.
 */
(function() {
var retval_signature = new SP.signature(OCA.OcaNetworkMediaSourceOrSink);
OcaStreamConnector.prototype.GetSourceOrSink = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 5, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Gets the value of the Status property. Return status indicates success
 * of operation.
 */
(function() {
var retval_signature = new SP.signature(OCA.OcaStreamConnectorStatus);
OcaStreamConnector.prototype.GetStatus = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 11, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Gets the list of OcaStream items connected to this connector. Return
 * status indicates success of operation.
 */
(function() {
var retval_signature = new SP.signature(SP.MAP(SP.UINT16, OCA.OcaStream));
OcaStreamConnector.prototype.GetStreams = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 9, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the value of the IDAdvertised property. Return status indicates
 * success of operation.
 */
(function() {
var argument_signature = new SP.signature(SP.BLOB);
OcaStreamConnector.prototype.SetIDAdvertised = function(IDAdvertised) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 4, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Sets the object number of the <b>OcaStreamNetwork </b>object to which
 * this connector belongs. Return status indicates success of operation.
 * Only implemented for reconfigurable devices.
 */
(function() {
var argument_signature = new SP.signature(SP.UINT32);
OcaStreamConnector.prototype.SetOwnerNetwork = function(Network) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 2, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Sets the value of the SourceOrSink property. Return status indicates
 * success of operation. Only implemented for reconfigurable devices.
 * Note that this method can only be called when the SignalChannels
 * property is empty, i.e. does not contain any actual channels.
 */
(function() {
var argument_signature = new SP.signature(OCA.OcaNetworkMediaSourceOrSink);
OcaStreamConnector.prototype.SetSourceOrSink = function(SourceOrSink) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 6, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();


/**
 * Abstract base class for classes that represent non-audio (i.e. control
 * and monitoring) functions. All concrete manager objects are lockable
 * (the constructor of this class initializes the Root object with
 * property Lockable true).
 */
function OcaManager(ObjectNumber, device) {
    OcaRoot.call(this, ObjectNumber, device);
};
mod.OcaManager = OcaManager;
OcaManager.prototype = Object.assign(Object.create(OcaRoot.prototype), {
    __oca_properties__: OcaRoot.prototype.__oca_properties__.extend({
    }),
    ClassID: "\u0001\u0003",
    ClassVersion: 1,
    ClassName: "OcaManager",
});


/**
 * Mandatory class that manages information relevant to the whole device.
 * Must be instantiated once in every device, and must have object number
 * 1.
 */
function OcaDeviceManager(ObjectNumber, device) {
    OcaManager.call(this, ObjectNumber, device);
};
mod.OcaDeviceManager = OcaDeviceManager;
OcaDeviceManager.prototype = Object.assign(Object.create(OcaManager.prototype), {
    __oca_properties__: OcaManager.prototype.__oca_properties__.extend({
        ModelGUID: {
            signature: new SP.signature(OCA.OcaModelGUID),
            level: 3,
            index: 1,
            readonly: false,
            static: false,
        },
        SerialNumber: {
            signature: new SP.signature(SP.STRING),
            level: 3,
            index: 2,
            readonly: false,
            static: false,
        },
        ModelDescription: {
            signature: new SP.signature(OCA.OcaModelDescription),
            level: 3,
            index: 3,
            readonly: false,
            static: false,
        },
        DeviceName: {
            signature: new SP.signature(SP.STRING),
            level: 3,
            index: 4,
            readonly: false,
            static: false,
        },
        OcaVersion: {
            signature: new SP.signature(SP.UINT16),
            level: 3,
            index: 5,
            readonly: false,
            static: false,
        },
        Role: {
            signature: new SP.signature(SP.STRING),
            level: 3,
            index: 6,
            readonly: false,
            static: false,
        },
        UserInventoryCode: {
            signature: new SP.signature(SP.STRING),
            level: 3,
            index: 7,
            readonly: false,
            static: false,
        },
        Enabled: {
            signature: new SP.signature(SP.BOOLEAN),
            level: 3,
            index: 8,
            readonly: false,
            static: false,
        },
        State: {
            signature: new SP.signature(OCA.OcaDeviceState),
            level: 3,
            index: 9,
            readonly: false,
            static: false,
        },
        Busy: {
            signature: new SP.signature(SP.BOOLEAN),
            level: 3,
            index: 10,
            readonly: false,
            static: false,
        },
        ResetCause: {
            signature: new SP.signature(OCA.OcaResetCause),
            level: 3,
            index: 11,
            readonly: false,
            static: false,
        },
        Message: {
            signature: new SP.signature(SP.STRING),
            level: 3,
            index: 12,
            readonly: false,
            static: false,
        },
        Managers: {
            signature: new SP.signature(SP.LIST(OCA.OcaManagerDescriptor)),
            level: 3,
            index: 13,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0003\u0001",
    ClassVersion: 1,
    ClassName: "OcaDeviceManager",
});
/**
 * Clears the ResetCause property, i.e. resets it to the default value
 * 'PowerOn'. Must be used after the reset cause has been read out to
 * ensure differentation between reconnects due to network loss and
 * reconnects due to external or internal reset. Offered as a separate
 * method (instead of implicitly clearing the cause after it has been
 * read out) to accomodate systems that have multiple controllers. The
 * return value indicates whether the property was successfully
 * retrieved.
 */
(function() {
OcaDeviceManager.prototype.ClearResetCause = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 16, 0);
    return device.send_command(cmd);
}
})();
/**
 * Gets the device name. The return value indicates whether the property
 * was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.STRING);
OcaDeviceManager.prototype.GetDeviceName = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 4, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Gets the value of the Enabled property. The return value indicates
 * whether the property was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.BOOLEAN);
OcaDeviceManager.prototype.GetEnabled = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 11, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Retrive the list of descriptors of managers instantiated in this
 * device. The return value indicates whether the retrieval was
 * successful.
 */
(function() {
var retval_signature = new SP.signature(SP.LIST(OCA.OcaManagerDescriptor));
OcaDeviceManager.prototype.GetManagers = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 19, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Gets the value of property <b>Message</b>. Return value indicates
 * whether value was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.STRING);
OcaDeviceManager.prototype.GetMessage = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 17, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Gets the model description. The return value indicates whether the
 * description was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(OCA.OcaModelDescription);
OcaDeviceManager.prototype.GetModelDescription = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 6, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Gets the model GUID. The return value indicates whether the GUID was
 * successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(OCA.OcaModelGUID);
OcaDeviceManager.prototype.GetModelGUID = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 2, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Gets the value of the OcaVersion property. The return value indicates
 * whether the property was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.UINT16);
OcaDeviceManager.prototype.GetOcaVersion = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Gets the value of the ResetCause property. The return value indicates
 * whether the property was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(OCA.OcaResetCause);
OcaDeviceManager.prototype.GetResetCause = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 15, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Gets the value of the Role property. The return value indicates
 * whether the property was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.STRING);
OcaDeviceManager.prototype.GetRole = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 7, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Gets the value of the SerialNumber property. The return value
 * indicates whether the property was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.STRING);
OcaDeviceManager.prototype.GetSerialNumber = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 3, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Gets the value of the State property. The return value indicates
 * whether the property was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(OCA.OcaDeviceState);
OcaDeviceManager.prototype.GetState = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 13, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Gets the value of the UserInventoryCode property. The return value
 * indicates whether the property was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.STRING);
OcaDeviceManager.prototype.GetUserInventoryCode = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 9, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Sets the device name. The return value indicates whether the property
 * was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.STRING);
OcaDeviceManager.prototype.SetDeviceName = function(Name) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 5, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Sets the value of the Enabled property. The return value indicates
 * whether the property was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.BOOLEAN);
OcaDeviceManager.prototype.SetEnabled = function(enabled) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 12, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Set arbitrary text message into <b>Message </b>property. The return
 * value indicates whether the value was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.STRING);
OcaDeviceManager.prototype.SetMessage = function(Text) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 18, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Sets the value of the reset key of the device. The return value
 * indicates whether the property was successfully set. Note that the
 * device manager must inform the CAP gateway of this key (via the host
 * interface), since the CAP gateway will check for and handle the
 * special reset message.
 */
(function() {
var argument_signature = new SP.signature(SP.BLOBFIXED(16), SP.BLOB);
OcaDeviceManager.prototype.SetResetKey = function(Key, Address) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 14, 2,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Sets the value of the Role property. The return value indicates
 * whether the property was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.STRING);
OcaDeviceManager.prototype.SetRole = function(role) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 8, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Sets the value of the UserInventoryCode property. The return value
 * indicates whether the property was successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.STRING);
OcaDeviceManager.prototype.SetUserInventoryCode = function(Code) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 10, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();


/**
 * Mandatory class that manages security settings (including security
 * keys). Must be instantiated once in every device that supports secure
 * control and monitoring. If instantiated, object number must be 2.
 */
function OcaSecurityManager(ObjectNumber, device) {
    OcaManager.call(this, ObjectNumber, device);
};
mod.OcaSecurityManager = OcaSecurityManager;
OcaSecurityManager.prototype = Object.assign(Object.create(OcaManager.prototype), {
    __oca_properties__: OcaManager.prototype.__oca_properties__.extend({
        secureControlData: {
            signature: new SP.signature(SP.BOOLEAN),
            level: 3,
            index: 1,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0003\u0002",
    ClassVersion: 1,
    ClassName: "OcaSecurityManager",
});
/**
 * Adds a pre-shared key (identified by the passed identity) to the
 * device. By having multiple PSKs the device is able to participate in
 * multiple secure systems. Note that adding a PSK over the network will
 * only work if the controller has a secure connection to the device and
 * control security has been turned on. If this is not the case the
 * method will return DeviceError.
 */
(function() {
var argument_signature = new SP.signature(SP.STRING, SP.BLOB);
OcaSecurityManager.prototype.AddPreSharedKey = function(identity, key) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 4, 2,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Changes the pre-shared key identified by the passed identity. Note
 * that changing a PSK over the network will only work if the controller
 * has a secure connection to the device and control security has been
 * turned on. If this is not the case the method will return DeviceError.
 */
(function() {
var argument_signature = new SP.signature(SP.STRING, SP.BLOB);
OcaSecurityManager.prototype.ChangePreSharedKey = function(identity, newKey) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 3, 2,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Deletes a pre-shared key (identified by the passed identity) on the
 * device. After deleting the pre-shared key the device will no longer be
 * able to participate in the secure system that uses the PSK. Note that
 * deleting a PSK over the network will only work if the controller has a
 * secure connection to the device and control security has been turned
 * on. If this is not the case the method will return DeviceError.
 */
(function() {
var argument_signature = new SP.signature(SP.STRING);
OcaSecurityManager.prototype.DeletePreSharedKey = function(identity) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 5, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Disables security of control data (OCA messages). After calling this
 * method all OCA messages can be sent and received both on insecure and
 * secure connections. The return value indicates whether the operation
 * succeeded. If the operation fails security is not disabled.
 */
(function() {
OcaSecurityManager.prototype.DisableControlSecurity = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 2, 0);
    return device.send_command(cmd);
}
})();
/**
 * Enables security of control data (OCA messages). After calling this
 * method all OCA messages are sent and received using a secure
 * connection. The return value indicates whether the operation
 * succeeded. If the operation fails security is not enabled.
 */
(function() {
OcaSecurityManager.prototype.EnableControlSecurity = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 1, 0);
    return device.send_command(cmd);
}
})();


/**
 * Mandatory class that manages versions of the different firmware and
 * software images of the device. Must be instantiated once in every
 * device, whether upgradable or not, and must have object number 3. A
 * device that does not support firmware updating must support the subset
 * of this class's functions needed to report firmware version numbers to
 * inquiring controllers. This firmware manager offers a generic
 * interface for updating OCA devices. The actual robustness of the
 * update process is left up to the implementer. The interface allows for
 * any of: - Fully transactional based uploads (i.e. only committing to
 * the newly uploaded images after all component uploads have succeeded,
 * and reverting back to the old images if any step fails) - Partly
 * transactional based uploads (i.e. committing to a newly uploaded image
 * after each individual component upload succeeds, possibly leading to a
 * device containing a mix of old and new images) - Non-transactional
 * based uploads guarded by golden images (i.e. accepting a 'weak' spot
 * in the upload process where interruption may lead to a corrupt regular
 * image, which is solved by loading a read-only failsafe ("golden")
 * image in such cases that will allow recovery of the regular image) -
 * Non-transactional based uploads that may lead to bricked devices
 */
function OcaFirmwareManager(ObjectNumber, device) {
    OcaManager.call(this, ObjectNumber, device);
};
mod.OcaFirmwareManager = OcaFirmwareManager;
OcaFirmwareManager.prototype = Object.assign(Object.create(OcaManager.prototype), {
    __oca_properties__: OcaManager.prototype.__oca_properties__.extend({
        ComponentVersions: {
            signature: new SP.signature(SP.LIST(OCA.OcaVersion)),
            level: 3,
            index: 1,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0003\u0003",
    ClassVersion: 1,
    ClassName: "OcaFirmwareManager",
});
/**
 * Gets the value of the ComponentVersions property. The return value
 * indicates whether the property was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.LIST(OCA.OcaVersion));
OcaFirmwareManager.prototype.GetComponentVersions = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Marks the start of the update process of an OCA device, meaning one or
 * more components will be updated. If the method succeeds the device
 * will be in state 'Updating'. One or more active or passive updates can
 * then follow, after which the update process is ended by calling the
 * '03m08 EndUpdateProcess' method. The return value indicates if
 * starting the update process succeeded.
 */
(function() {
OcaFirmwareManager.prototype.StartUpdateProcess = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 2, 0);
    return device.send_command(cmd);
}
})();
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
 */
(function() {
var argument_signature = new SP.signature(OCA.OcaComponent);
OcaFirmwareManager.prototype.BeginActiveImageUpdate = function(component) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 3, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Adds a new part of the software/firmware image to the upgrade memory
 * as part of the active update. Where this data is stored, is up to the
 * implementation of the manager. It can either be stored in RAM to be
 * written to Flash later, or directly to Flash, dependent on the chosen
 * architecture and requirements. The return value indicates whether the
 * data is correctly received and the data is not out of order.
 */
(function() {
var argument_signature = new SP.signature(SP.UINT32, SP.BLOB);
OcaFirmwareManager.prototype.AddImageData = function(id, imageData) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 4, 2,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Verifies the entire host processor image using the passed verification
 * data.
 */
(function() {
var argument_signature = new SP.signature(SP.BLOB);
OcaFirmwareManager.prototype.VerifyImage = function(verifyData) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 5, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Ends the active software/firmware image update. This is needed to let
 * the device know that the current active component has finished, and
 * therefore a new active or passive update can be started (or the upload
 * process can be ended by invoking the '03m08 EndUpdateProcess' method).
 * The return value indicates if ending the active update succeeded.
 */
(function() {
OcaFirmwareManager.prototype.EndActiveImageUpdate = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 6, 0);
    return device.send_command(cmd);
}
})();
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
 */
(function() {
var argument_signature = new SP.signature(OCA.OcaComponent, SP.BLOB, SP.STRING);
OcaFirmwareManager.prototype.BeginPassiveComponentUpdate = function(component, serverAddress, updateFileName) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 7, 3,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Ends the current update process in which one or more components haven
 * been updated (actively or passively). This action will trigger the
 * device to start using the new images. This should bring the device
 * back into standard operational mode (e.g. rebooting the device, this
 * however depends on the implementation of the upgrade process). As it
 * will usually trigger a reset of the device in some cases no response
 * parameter is used for this method.
 */
(function() {
OcaFirmwareManager.prototype.EndUpdateProcess = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 8, 0);
    return device.send_command(cmd);
}
})();


/**
 * Mandatory class that manages the event subscriptions of the device.
 * Must be instantiated once in every device, and must have object number
 * 4.
 */
function OcaSubscriptionManager(ObjectNumber, device) {
    OcaManager.call(this, ObjectNumber, device);
};
mod.OcaSubscriptionManager = OcaSubscriptionManager;
OcaSubscriptionManager.prototype = Object.assign(Object.create(OcaManager.prototype), {
    __oca_properties__: OcaManager.prototype.__oca_properties__.extend({
        State: {
            signature: new SP.signature(OCA.OcaSubscriptionManagerState),
            level: 3,
            index: 1,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0003\u0004",
    ClassVersion: 1,
    ClassName: "OcaSubscriptionManager",
});
/**
 * Adds a subscription to an event. The subscription is added for the
 * session on which the command came in. The return value indicates
 * whether the subscription succeeded.
 */
(function() {
var argument_signature = new SP.signature(OCA.OcaEvent, OCA.OcaMethod, SP.BLOB, OCA.OcaNotificationDeliveryMode, SP.BLOB);
OcaSubscriptionManager.prototype.AddSubscription = function(Event, Subscriber, SubscriberContext, NotificationDeliveryMode, DestinationInformation) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 1, 5,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Removes a subscription to an event. The return value indicates whether
 * the subscription was successfully removed.
 */
(function() {
var argument_signature = new SP.signature(OCA.OcaEvent, OCA.OcaMethod);
OcaSubscriptionManager.prototype.RemoveSubscription = function(event, subscriber) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 2, 2,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Temporarily disables emitting of event notifications (to all
 * subscribers, not just to the subscriber calling this method). This
 * method can be used if either a controller or the local device knows
 * that it is going to change the state of the device significantly,
 * which could lead to a notification storm of events. Invoking this
 * method will prevent the notification storm. The event '03e01
 * EventsDisabled' will be raised to notify all controllers of the fact
 * that events are temporarily disabled. The subscription manager will
 * start collecting the object numbers of the objects that raise events,
 * so that it can pass a list of changed objects once the events are
 * re-enabled. The return value indicates if disabling events succeeded.
 */
(function() {
OcaSubscriptionManager.prototype.DisableNotifications = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 3, 0);
    return device.send_command(cmd);
}
})();
/**
 * Re-enables the sending of event notifications to all subscribers. When
 * events are re-enabled, the subscription manager will raise the
 * SynchronizeState event, passing the list of objects that have changed
 * state. Subsequently, the subscription manager will transmit all
 * notifications as normal. If the connection to the controller that
 * invoked the DisableEvents() is lost, this method will be called
 * automatically to prevent the situation in which the raising of events
 * would never be re-enabled. The return value indicates if re-enabling
 * the event-based events succeeded.
 */
(function() {
OcaSubscriptionManager.prototype.ReEnableNotifications = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 4, 0);
    return device.send_command(cmd);
}
})();
OcaSubscriptionManager.prototype.onNotificationsDisabled = function(callback) {
    return this.device.add_subscription(new OCA.OcaEvent(this.ObjectNumber, new OCA.OcaEventID(3, 1)), callback);
};
OcaSubscriptionManager.prototype.onSynchronizeState = function(callback) {
    return this.device.add_subscription(new OCA.OcaEvent(this.ObjectNumber, new OCA.OcaEventID(3, 2)), callback);
};


/**
 * Optional manager that manages power settings and state. May be
 * instantiated once in any device. If instantiated, object number must
 * be 5.
 */
function OcaPowerManager(ObjectNumber, device) {
    OcaManager.call(this, ObjectNumber, device);
};
mod.OcaPowerManager = OcaPowerManager;
OcaPowerManager.prototype = Object.assign(Object.create(OcaManager.prototype), {
    __oca_properties__: OcaManager.prototype.__oca_properties__.extend({
        State: {
            signature: new SP.signature(OCA.OcaPowerState),
            level: 3,
            index: 1,
            readonly: false,
            static: false,
        },
        PowerSupplies: {
            signature: new SP.signature(SP.LIST(SP.UINT32)),
            level: 3,
            index: 2,
            readonly: false,
            static: false,
        },
        ActivePowerSupplies: {
            signature: new SP.signature(SP.LIST(SP.UINT32)),
            level: 3,
            index: 3,
            readonly: false,
            static: false,
        },
        AutoState: {
            signature: new SP.signature(SP.BOOLEAN),
            level: 3,
            index: 4,
            readonly: false,
            static: false,
        },
        TargetState: {
            signature: new SP.signature(OCA.OcaPowerState),
            level: 3,
            index: 5,
            readonly: true,
            static: false,
        },
    }),
    ClassID: "\u0001\u0003\u0005",
    ClassVersion: 1,
    ClassName: "OcaPowerManager",
});
/**
 * Retrieve the value of property <b>03p01 State</b>, the current power
 * state of the device. Return value indicates whether the value was
 * successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(OCA.OcaPowerState);
OcaPowerManager.prototype.GetState = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Change the device power state. The return value indicates whether the
 * requested change has been successfully made.
 */
(function() {
var argument_signature = new SP.signature(OCA.OcaPowerState);
OcaPowerManager.prototype.SetState = function(State) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 2, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Retrieves list of object number(s) of all power supply(ies). Return
 * value indicates whether the data was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.LIST(SP.UINT32));
OcaPowerManager.prototype.GetPowerSupplies = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 3, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Retrieves list of object number(s) of active power supply(ies). Return
 * value indicates whether the data was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.LIST(SP.UINT32));
OcaPowerManager.prototype.GetActivePowerSupplies = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 4, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Deactivate one power supply and activate another. An option switch
 * indicates whether the previously active power supply is to be turned
 * off. If it is not turned off, it will be placed in the
 * <b>Unavailable</b> state. The return value indicates whether the
 * requested exchange has been successfully made.
 */
(function() {
var argument_signature = new SP.signature(SP.UINT32, SP.UINT32, SP.BOOLEAN);
OcaPowerManager.prototype.ExchangePowerSupply = function(oldPsu, newPsu, powerOffOld) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 5, 3,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Gets the value of the <b>AutoState</b> property. The return value
 * indicates whether the value was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.BOOLEAN);
OcaPowerManager.prototype.GetAutoState = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 6, 0);
    return device.send_command(cmd, retval_signature);
}
})();


/**
 * Mandatory manager for all media transport and control networks to
 * which the device belongs. Must be instantiated once in every device,
 * and must have object number 6.
 */
function OcaNetworkManager(ObjectNumber, device) {
    OcaManager.call(this, ObjectNumber, device);
};
mod.OcaNetworkManager = OcaNetworkManager;
OcaNetworkManager.prototype = Object.assign(Object.create(OcaManager.prototype), {
    __oca_properties__: OcaManager.prototype.__oca_properties__.extend({
        Networks: {
            signature: new SP.signature(SP.LIST(SP.UINT32)),
            level: 3,
            index: 1,
            readonly: false,
            static: false,
        },
        StreamNetworks: {
            signature: new SP.signature(SP.LIST(SP.UINT32)),
            level: 3,
            index: 2,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0003\u0006",
    ClassVersion: 2,
    ClassName: "OcaNetworkManager",
});
/**
 * Gets the list of object numbers of <b>OcaNetwork </b>instances in this
 * device. Return value indicates whether list was successfully
 * retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.LIST(SP.UINT32));
OcaNetworkManager.prototype.GetNetworks = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Gets the list of object numbers of <b>OcaStreamNetwork </b>instances
 * in this device. Return value indicates whether list was successfully
 * retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.LIST(SP.UINT32));
OcaNetworkManager.prototype.GetStreamNetworks = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 2, 0);
    return device.send_command(cmd, retval_signature);
}
})();


/**
 * Anchor manager for all media clocks that the device uses and/or
 * sources. Must be instantiated once for every device that has media
 * streaming capabilities. May be instantiated once for a device without
 * such capabilities. If instantiated, object number must be 7.
 */
function OcaMediaClockManager(ObjectNumber, device) {
    OcaManager.call(this, ObjectNumber, device);
};
mod.OcaMediaClockManager = OcaMediaClockManager;
OcaMediaClockManager.prototype = Object.assign(Object.create(OcaManager.prototype), {
    __oca_properties__: OcaManager.prototype.__oca_properties__.extend({
        ClockSourceTypesSupported: {
            signature: new SP.signature(SP.LIST(OCA.OcaMediaClockType)),
            level: 3,
            index: 1,
            readonly: false,
            static: false,
        },
        Clocks: {
            signature: new SP.signature(SP.LIST(SP.UINT32)),
            level: 3,
            index: 2,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0003\u0007",
    ClassVersion: 1,
    ClassName: "OcaMediaClockManager",
});
/**
 * Gets the list of object numbers of <b>OcaMediaClock </b>instances in
 * this device. Return value indicates whether list was successfully
 * retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.LIST(SP.UINT32));
OcaMediaClockManager.prototype.GetClocks = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Gets the list of media clock types supported. Return value indicates
 * whether the list was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.LIST(OCA.OcaMediaClockType));
OcaMediaClockManager.prototype.GetMediaClockTypesSupported = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 2, 0);
    return device.send_command(cmd, retval_signature);
}
})();


/**
 * Optional manager for handling device presets -- patch and parset
 * libraries. May be instantiated once in any device. If instantiated,
 * object number must be 8.
 */
function OcaLibraryManager(ObjectNumber, device) {
    OcaManager.call(this, ObjectNumber, device);
};
mod.OcaLibraryManager = OcaLibraryManager;
OcaLibraryManager.prototype = Object.assign(Object.create(OcaManager.prototype), {
    __oca_properties__: OcaManager.prototype.__oca_properties__.extend({
        PatchLibraries: {
            signature: new SP.signature(SP.LIST(SP.UINT32)),
            level: 3,
            index: 1,
            readonly: false,
            static: false,
        },
        ParsetLibraries: {
            signature: new SP.signature(SP.LIST(SP.UINT32)),
            level: 3,
            index: 2,
            readonly: false,
            static: false,
        },
        CurrentPatch: {
            signature: new SP.signature(OCA.OcaLibVolIdentifier),
            level: 3,
            index: 3,
            readonly: false,
            static: false,
        },
    }),
    ClassID: "\u0001\u0003\b",
    ClassVersion: 1,
    ClassName: "OcaLibraryManager",
});
/**
 * Adds a library to the device. Return value indicates whether the
 * library was successfully added.
 */
(function() {
var argument_signature = new SP.signature(OCA.OcaLibVolType);
var retval_signature = new SP.signature(SP.UINT32);
OcaLibraryManager.prototype.AddLibrary = function(Type) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 1, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Deletes a library from the device.
 */
(function() {
var argument_signature = new SP.signature(SP.UINT32);
OcaLibraryManager.prototype.DeleteLibrary = function(ID) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 2, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();
/**
 * Returns the number of libraries of the given type that are
 * instantiated in the device..
 */
(function() {
var argument_signature = new SP.signature(OCA.OcaLibVolType);
var retval_signature = new SP.signature(SP.UINT16);
OcaLibraryManager.prototype.GetLibraryCount = function(Type) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 3, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Returns the list of object numbers of libraries of libraries of the
 * given type that are instantiated in the device.
 */
(function() {
var argument_signature = new SP.signature(OCA.OcaLibVolType);
var retval_signature = new SP.signature(SP.LIST(SP.UINT32));
OcaLibraryManager.prototype.GetLibraryList = function(Type) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 4, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Return the identifier of the most recently applied patch. The return
 * value indicates whether the method succeeded.
 */
(function() {
var retval_signature = new SP.signature(OCA.OcaLibVolIdentifier);
OcaLibraryManager.prototype.GetCurrentPatch = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 5, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Apply a patch to the device.
 */
(function() {
var argument_signature = new SP.signature(OCA.OcaLibVolIdentifier);
OcaLibraryManager.prototype.SetCurrentPatch = function(ID) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 6, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();


/**
 * Placeholder for optional manager that in future versions of the
 * standard will hold various global audio processing parameters. May be
 * instantiated once in any device. If instantiated, object number must
 * be 9.
 */
function OcaAudioProcessingManager(ObjectNumber, device) {
    OcaManager.call(this, ObjectNumber, device);
};
mod.OcaAudioProcessingManager = OcaAudioProcessingManager;
OcaAudioProcessingManager.prototype = Object.assign(Object.create(OcaManager.prototype), {
    __oca_properties__: OcaManager.prototype.__oca_properties__.extend({
    }),
    ClassID: "\u0001\u0003\t",
    ClassVersion: 1,
    ClassName: "OcaAudioProcessingManager",
});


/**
 * Optional manager that allows controlling and monitoring a device's
 * time-of-day clock. May be instantiated once in any device. If
 * instantiated, object number must be 10. Note: The clock value is
 * accessble via Get and Set methods, but has not been defined as a
 * public property because its value is volatile and should not cause
 * property-change events.
 */
function OcaDeviceTimeManager(ObjectNumber, device) {
    OcaManager.call(this, ObjectNumber, device);
};
mod.OcaDeviceTimeManager = OcaDeviceTimeManager;
OcaDeviceTimeManager.prototype = Object.assign(Object.create(OcaManager.prototype), {
    __oca_properties__: OcaManager.prototype.__oca_properties__.extend({
    }),
    ClassID: "\u0001\u0003\n",
    ClassVersion: 1,
    ClassName: "OcaDeviceTimeManager",
});
/**
 * Get current value of device time-of-day clock. Return value indicates
 * whether value was successfully retrieved.
 */
(function() {
var retval_signature = new SP.signature(SP.UINT64);
OcaDeviceTimeManager.prototype.GetDeviceTime = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 1, 0);
    return device.send_command(cmd, retval_signature);
}
})();
/**
 * Set device time-of-day clock. Return value indicates whether value was
 * successfully set.
 */
(function() {
var argument_signature = new SP.signature(SP.UINT64);
OcaDeviceTimeManager.prototype.SetDeviceTime = function(DeviceTime) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 2, 1,
                            argument_signature.encoder(Array.prototype.slice.call(arguments))
);
    return device.send_command(cmd);
}
})();


var id_to_class = {
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
    "\u0001\u0001\u0006" : OcaNetworkSignalChannel,
    "\u0001\u0002" : OcaAgent,
    "\u0001\u0002\u0001" : OcaNetwork,
    "\u0001\u0002\u0002" : OcaGrouper,
    "\u0001\u0002\u0003" : OcaRamper,
    "\u0001\u0002\u0005" : OcaLibrary,
    "\u0001\u0002\u0006" : OcaMediaClock,
    "\u0001\u0002\u0004" : OcaNumericObserver,
    "\u0001\u0002\u0007" : OcaPowerSupply,
    "\u0001\u0002\b" : OcaEventHandler,
    "\u0001\u0002\t" : OcaNumericObserverList,
    "\u0001\u0002\n" : OcaStreamNetwork,
    "\u0001\u0002\u000b" : OcaStreamConnector,
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
};
mod.id_to_class = id_to_class;

mod.find_class_by_id = function(id) {
    return this.id_to_class[id];
}
mod.find_class_by_name = function(name) {
    return this[name];
}
OCA.ControlClasses = mod;
};
if (module) module.exports = f;
else f(w, w.OCA || (w.OCA = {}));
})(this, module);
