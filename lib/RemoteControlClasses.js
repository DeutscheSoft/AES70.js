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
    id_to_name = {};
    for (name in properties) {
        id = (properties[name].level << 16)|(properties[name].index|0);
        id_to_name[id] = name;
    }
    this.id_to_name = id_to_name;
};
var Property = function(signature, level, index, readonly, static, aliases) {
  this.signature = signature;
  this.level = level;
  this.index = index;
  this.readonly = readonly;
  this.static = static;
  this.aliases = aliases;
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
        ClassID: new Property(new SP.signature(SP.BLOB16), 1, 1, true, true, 0),
        ClassVersion: new Property(new SP.signature(SP.UINT16), 1, 2, true, true, 0),
        ObjectNumber: new Property(new SP.signature(SP.UINT32), 1, 3, true, false, 0),
        Lockable: new Property(new SP.signature(SP.BOOLEAN), 1, 4, true, false, 0),
        Role: new Property(new SP.signature(SP.STRING), 1, 5, true, false, 0),
    }),
    ClassID: "\u0001",
    ClassVersion: 2,
    ClassName: "OcaRoot",
});
/**
 * Gets the class identification, a structure that contains the ClassID
 * and ClassVersion. The return value indicates whether the property was
 * successfully retrieved.
 */
(function() {
var rs = new SP.signature(OCA.OcaClassIdentification);
OcaRoot.prototype.GetClassIdentification = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 1, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the value of the Lockable property. The return value indicates
 * whether the property was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.BOOLEAN);
OcaRoot.prototype.GetLockable = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 1, 2, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Locks the object totally, so that it can only be accessed for reading
 * or writing by the lockholder. If the device is read-only locked (by a
 * prior call to LockReadonly()) when Lock() is called by the same
 * lockholder, the lock state is upgraded to total. If the call is from a
 * session other than the lockholder's, the call fails. The return value
 * indicates whether the operation succeeded.
 */
(function() {
OcaRoot.prototype.Lock = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 1, 3, 0);
    return this.device.send_command(cmd);
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
    return this.device.send_command(cmd);
}
})();
/**
 * Returns value of Role property. The return value indicates whether the
 * operation succeeded.
 */
(function() {
var rs = new SP.signature(SP.STRING);
OcaRoot.prototype.GetRole = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 1, 5, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Locks the object so that its objects only be modified by the
 * lockholder, but others can still retrieve property values. If the
 * device is locked (by a prior call to Lock() or LockReadonly()) when
 * LockReadonly() is called by the same lockholder, the lock state is set
 * to read-only. If the call is from a session other than the
 * lockholder's, the call fails. The return value indicates whether the
 * operation succeeded.
 */
(function() {
OcaRoot.prototype.LockReadonly = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 1, 6, 0);
    return this.device.send_command(cmd);
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
        Enabled: new Property(new SP.signature(SP.BOOLEAN), 2, 1, false, false, 0),
        Ports: new Property(new SP.signature(SP.LIST(OCA.OcaPort)), 2, 2, false, false, 0),
        Label: new Property(new SP.signature(SP.STRING), 2, 3, false, false, 0),
        Owner: new Property(new SP.signature(SP.UINT32), 2, 4, false, false, 0),
        Latency: new Property(new SP.signature(SP.FLOAT32), 2, 5, false, false, 0),
    }),
    ClassID: "\u0001\u0001",
    ClassVersion: 2,
    ClassName: "OcaWorker",
});
/**
 * Gets the value of the Enabled property. The return value indicates
 * whether the property was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.BOOLEAN);
OcaWorker.prototype.GetEnabled = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 2, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the Enabled property. The return value indicates
 * whether the property was successfully set.
 */
(function() {
var as = new SP.signature(SP.BOOLEAN);
OcaWorker.prototype.SetEnabled = function(enabled) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 2, 2, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Adds an input or output port.. The return value indicates whether the
 * port was successfully added.
 */
(function() {
var as = new SP.signature(SP.STRING, SP.UINT8);
var rs = new SP.signature(OCA.OcaPortID);
OcaWorker.prototype.AddPort = function(Label, Mode) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 2, 3, 2,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Deletes an input or output port.. The return value indicates whether
 * the port was successfully deleted.
 */
(function() {
var as = new SP.signature(OCA.OcaPortID);
OcaWorker.prototype.DeletePort = function(ID) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 2, 4, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the list of ports owned by the Worker object. The return value
 * indicates whether the list was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.LIST(OCA.OcaPort));
OcaWorker.prototype.GetPorts = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 2, 5, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the name of the designated port. The return value indicates
 * whether the name was successfully retrieved.
 */
(function() {
var as = new SP.signature(OCA.OcaPortID);
var rs = new SP.signature(SP.STRING);
OcaWorker.prototype.GetPortName = function(PortID) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 2, 6, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the name of the designated port. The return value indicates
 * whether the name was successfully set.
 */
(function() {
var as = new SP.signature(OCA.OcaPortID, SP.STRING);
OcaWorker.prototype.SetPortName = function(PortID, Name) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 2, 7, 2,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the value of the Label property. The return value indicates
 * whether the property was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.STRING);
OcaWorker.prototype.GetLabel = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 2, 8, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the Label property. The return value indicates
 * whether the property was successfully set.
 */
(function() {
var as = new SP.signature(SP.STRING);
OcaWorker.prototype.SetLabel = function(label) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 2, 9, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the value of the Owner property. The return value indicates
 * whether the property was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT32);
OcaWorker.prototype.GetOwner = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 2, 10, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the value of the Latency property. The return value indicates
 * whether the property was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.FLOAT32);
OcaWorker.prototype.GetLatency = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 2, 11, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the Latency property. The return value indicates
 * whether the property was successfully set.
 */
(function() {
var as = new SP.signature(SP.FLOAT32);
OcaWorker.prototype.SetLatency = function(latency) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 2, 12, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Returns path from the given object down to root. The return value
 * indicates whether the operation succeeded. Added in version 2.
 */
(function() {
var rs = new SP.signature(SP.LIST(SP.STRING), SP.LIST(SP.UINT32));
OcaWorker.prototype.GetPath = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 2, 13, 0);
    return this.device.send_command(cmd, rs);
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
    ClassVersion: 2,
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
        State: new Property(new SP.signature(SP.UINT8), 4, 1, false, false, 0),
    }),
    ClassID: "\u0001\u0001\u0001\u0002",
    ClassVersion: 2,
    ClassName: "OcaMute",
});
/**
 * Gets the current mute state. The return value indicates whether the
 * state was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT8);
OcaMute.prototype.GetState = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the mute state (i.e. value of the State property). The return
 * value indicates whether the state was successfully set.
 */
(function() {
var as = new SP.signature(SP.UINT8);
OcaMute.prototype.SetState = function(state) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 2, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
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
        State: new Property(new SP.signature(SP.UINT8), 4, 1, false, false, 0),
    }),
    ClassID: "\u0001\u0001\u0001\u0003",
    ClassVersion: 2,
    ClassName: "OcaPolarity",
});
/**
 * Gets the current inverter state. The return value indicates whether
 * the state was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT8);
OcaPolarity.prototype.GetState = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the inversion state (i.e. value of the State property). The
 * return value indicates whether the state was successfully set.
 */
(function() {
var as = new SP.signature(SP.UINT8);
OcaPolarity.prototype.SetState = function(state) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 2, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
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
        Position: new Property(new SP.signature(SP.UINT16), 4, 1, false, false, 0),
        PositionNames: new Property(new SP.signature(SP.LIST(SP.STRING)), 4, 2, false, false, 0),
        PositionEnable: new Property(new SP.signature(SP.LIST(SP.BOOLEAN)), 4, 3, false, false, 0),
    }),
    ClassID: "\u0001\u0001\u0001\u0004",
    ClassVersion: 2,
    ClassName: "OcaSwitch",
});
/**
 * Gets the value of the Position property and, optionally, its
 * implementation min and max. The return value indicates whether the
 * data was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT16, SP.UINT16, SP.UINT16);
OcaSwitch.prototype.GetPosition = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the Position property. The return value indicates
 * whether the property was successfully set.
 */
(function() {
var as = new SP.signature(SP.UINT16);
OcaSwitch.prototype.SetPosition = function(position) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 2, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the name assigned to a given switch position. The return value
 * indicates whether the name was successfully retrieved.
 */
(function() {
var as = new SP.signature(SP.UINT16);
var rs = new SP.signature(SP.STRING);
OcaSwitch.prototype.GetPositionName = function(Index) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 3, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Assigns a name to a given switch position. The return value indicates
 * whether the name was successfully assigned.
 */
(function() {
var as = new SP.signature(SP.UINT16, SP.STRING);
OcaSwitch.prototype.SetPositionName = function(Index, Name) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 4, 2,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets list of names assigned to the switch's positions. The return
 * value indicates whether the names were successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.LIST(SP.STRING));
OcaSwitch.prototype.GetPositionNames = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 5, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Assigns names to the switch's positions. The return value indicates
 * whether the names were successfully assigned.
 */
(function() {
var as = new SP.signature(SP.LIST(SP.STRING));
OcaSwitch.prototype.SetPositionNames = function(Names) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 6, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the Enabled flag assigned to a given switch position. The return
 * value indicates whether the flag was successfully retrieved.
 */
(function() {
var as = new SP.signature(SP.UINT16);
var rs = new SP.signature(SP.BOOLEAN);
OcaSwitch.prototype.GetPositionEnabled = function(Index) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 7, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the Enabled flag assigned to a given switch position. The return
 * value indicates whether the flag was successfully set.
 */
(function() {
var as = new SP.signature(SP.UINT16, SP.BOOLEAN);
OcaSwitch.prototype.SetPositionEnabled = function(Index, enabled) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 8, 2,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets list of Enabled flags assigned to the switch's positions. The
 * return value indicates whether the flags were successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.LIST(SP.BOOLEAN));
OcaSwitch.prototype.GetPositionEnableds = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 9, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets list of Enabled flags for the switch's positions. The return
 * value indicates whether the flags were successfully set.
 */
(function() {
var as = new SP.signature(SP.LIST(SP.BOOLEAN));
OcaSwitch.prototype.SetPositionEnableds = function(enableds) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 10, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
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
        Gain: new Property(new SP.signature(SP.FLOAT32), 4, 1, false, false, 0),
    }),
    ClassID: "\u0001\u0001\u0001\u0005",
    ClassVersion: 2,
    ClassName: "OcaGain",
});
/**
 * Gets the value and limits of the Gain property. The return value
 * indicates whether the data was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaGain.prototype.GetGain = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the Gain property. The return value indicates
 * whether the property was successfully set.
 */
(function() {
var as = new SP.signature(SP.FLOAT32);
OcaGain.prototype.SetGain = function(Gain) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 2, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();


/**
 * Pan or Balance control.
 */
function OcaPanBalance(ObjectNumber, device) {
    OcaActuator.call(this, ObjectNumber, device);
};
mod.OcaPanBalance = OcaPanBalance;
OcaPanBalance.prototype = Object.assign(Object.create(OcaActuator.prototype), {
    __oca_properties__: OcaActuator.prototype.__oca_properties__.extend({
        Position: new Property(new SP.signature(SP.FLOAT32), 4, 1, false, false, 0),
        MidpointGain: new Property(new SP.signature(SP.FLOAT32), 4, 2, false, false, 0),
    }),
    ClassID: "\u0001\u0001\u0001\u0006",
    ClassVersion: 2,
    ClassName: "OcaPanBalance",
});
/**
 * Gets the value and limits of the Position property. The return value
 * indicates whether the data was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaPanBalance.prototype.GetPosition = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the Position property. The return value indicates
 * whether the property was successfully set.
 */
(function() {
var as = new SP.signature(SP.FLOAT32);
OcaPanBalance.prototype.SetPosition = function(Position) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 2, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the value and limits of the MidpointGain property. The return
 * value indicates whether the data was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaPanBalance.prototype.GetMidpointGain = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 3, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the MidpointGain property. The return value
 * indicates whether the property was successfully set.
 */
(function() {
var as = new SP.signature(SP.FLOAT32);
OcaPanBalance.prototype.SetMidpointGain = function(Gain) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 4, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
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
        DelayTime: new Property(new SP.signature(SP.FLOAT32), 4, 1, false, false, 0),
    }),
    ClassID: "\u0001\u0001\u0001\u0007",
    ClassVersion: 2,
    ClassName: "OcaDelay",
});
/**
 * Gets the value of the DelayTime property. The return value indicates
 * whether the property was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaDelay.prototype.GetDelayTime = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the DelayTime property. The return value indicates
 * whether the property was successfully set.
 */
(function() {
var as = new SP.signature(SP.FLOAT32);
OcaDelay.prototype.SetDelayTime = function(delayTime) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 2, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
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
        DelayValue: new Property(new SP.signature(OCA.OcaDelayValue), 5, 1, false, false, 0),
    }),
    ClassID: "\u0001\u0001\u0001\u0007\u0001",
    ClassVersion: 2,
    ClassName: "OcaDelayExtended",
});
/**
 * Gets the value of the DelayValue property. The return value indicates
 * whether the property was successfully retrieved.
 */
(function() {
var rs = new SP.signature(OCA.OcaDelayValue, OCA.OcaDelayValue, OCA.OcaDelayValue);
OcaDelayExtended.prototype.GetDelayValue = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the DelayValue property. The return value indicates
 * whether the property was successfully set.
 */
(function() {
var as = new SP.signature(OCA.OcaDelayValue);
OcaDelayExtended.prototype.SetDelayValue = function(Value) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 2, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Return current delay setting, converted to given units. The return
 * value indicates whether the method has succeeded.
 */
(function() {
var as = new SP.signature(SP.UINT8);
var rs = new SP.signature(OCA.OcaDelayValue);
OcaDelayExtended.prototype.GetDelayValueConverted = function(UoM) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 3, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd, rs);
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
        Frequency: new Property(new SP.signature(SP.FLOAT32), 4, 1, false, false, 0),
    }),
    ClassID: "\u0001\u0001\u0001\b",
    ClassVersion: 2,
    ClassName: "OcaFrequencyActuator",
});
/**
 * Gets the value of the Frequency property. The return value indicates
 * whether the property was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaFrequencyActuator.prototype.GetFrequency = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the Frequency property. The return value indicates
 * whether the property was successfully set.
 */
(function() {
var as = new SP.signature(SP.FLOAT32);
OcaFrequencyActuator.prototype.SetFrequency = function(Frequency) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 2, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
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
        Frequency: new Property(new SP.signature(SP.FLOAT32), 4, 1, false, false, 0),
        Passband: new Property(new SP.signature(SP.UINT8), 4, 2, false, false, 0),
        Shape: new Property(new SP.signature(SP.UINT8), 4, 3, false, false, 0),
        Order: new Property(new SP.signature(SP.UINT16), 4, 4, false, false, 0),
        Parameter: new Property(new SP.signature(SP.FLOAT32), 4, 5, false, false, 0),
    }),
    ClassID: "\u0001\u0001\u0001\t",
    ClassVersion: 2,
    ClassName: "OcaFilterClassical",
});
/**
 * Gets the value of the Frequency property. The return value indicates
 * if the property was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaFilterClassical.prototype.GetFrequency = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the Frequency property. The return value indicates
 * if the property was successfully set.
 */
(function() {
var as = new SP.signature(SP.FLOAT32);
OcaFilterClassical.prototype.SetFrequency = function(frequency) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 2, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Returns the passband specification of the filter object. The return
 * value indicates if the specification was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT8);
OcaFilterClassical.prototype.GetPassband = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 3, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the passband specification of the filter object. The return value
 * indicates if the specification was successfully set.
 */
(function() {
var as = new SP.signature(SP.UINT8);
OcaFilterClassical.prototype.SetPassband = function(Passband) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 4, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Returns the Shape property of the filter. The return value indicates
 * if the property was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT8);
OcaFilterClassical.prototype.GetShape = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 5, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the Shape property of the filter. The return value indicates if
 * the property was successfully set.
 */
(function() {
var as = new SP.signature(SP.UINT8);
OcaFilterClassical.prototype.SetShape = function(Shape) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 6, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Returns the order of the filter. The return value indicates if the
 * property was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT16, SP.UINT16, SP.UINT16);
OcaFilterClassical.prototype.GetOrder = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 7, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the order of the filter. The return value indicates if the
 * property was successfully set.
 */
(function() {
var as = new SP.signature(SP.UINT16);
OcaFilterClassical.prototype.SetOrder = function(Order) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 8, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Returns the filter parameter. The return value indicates if the
 * property was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaFilterClassical.prototype.GetParameter = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 9, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the filter parameter. The return value indicates if the parameter
 * was successfully set.
 */
(function() {
var as = new SP.signature(SP.FLOAT32);
OcaFilterClassical.prototype.SetParameter = function(Parameter) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 10, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();


/**
 * A parametric equalizer section with various shape options.
 */
function OcaFilterParametric(ObjectNumber, device) {
    OcaActuator.call(this, ObjectNumber, device);
};
mod.OcaFilterParametric = OcaFilterParametric;
OcaFilterParametric.prototype = Object.assign(Object.create(OcaActuator.prototype), {
    __oca_properties__: OcaActuator.prototype.__oca_properties__.extend({
        Frequency: new Property(new SP.signature(SP.FLOAT32), 4, 1, false, false, 0),
        Shape: new Property(new SP.signature(SP.UINT8), 4, 2, false, false, 0),
        WidthParameter: new Property(new SP.signature(SP.FLOAT32), 4, 3, false, false, ["Q"]),
        InBandGain: new Property(new SP.signature(SP.FLOAT32), 4, 4, false, false, 0),
        ShapeParameter: new Property(new SP.signature(SP.FLOAT32), 4, 5, false, false, 0),
    }),
    ClassID: "\u0001\u0001\u0001\n",
    ClassVersion: 2,
    ClassName: "OcaFilterParametric",
});
/**
 * Gets the equalizer frequency setpoint. The return value indicates
 * whether the data was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaFilterParametric.prototype.GetFrequency = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the equalizer frequency. The return value indicates whether the
 * value was successfully set.
 */
(function() {
var as = new SP.signature(SP.FLOAT32);
OcaFilterParametric.prototype.SetFrequency = function(Frequency) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 2, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the curve shape of the equalizer. The return value indicates
 * whether the data was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT8);
OcaFilterParametric.prototype.GetShape = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 3, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the curve shape shape of the equalizer. The return value
 * indicates whether the shape was successfully set.
 */
(function() {
var as = new SP.signature(SP.UINT8);
OcaFilterParametric.prototype.SetShape = function(type) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 4, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the width parameter property of the equalizer. The return value
 * indicates whether the data was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaFilterParametric.prototype.GetWidthParameter = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 5, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the width parameter property of the equalizer. The return value
 * indicates whether the Q was successfully set.
 */
(function() {
var as = new SP.signature(SP.FLOAT32);
OcaFilterParametric.prototype.SetWidthParameter = function(Width) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 6, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Returns the in-band gain of the equalizer. The return value indicates
 * whether the data was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaFilterParametric.prototype.GetInbandGain = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 7, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the in-band gain of the equalizer. The return value indicates
 * whether the gain was successfully set.
 */
(function() {
var as = new SP.signature(SP.FLOAT32);
OcaFilterParametric.prototype.SetInbandgain = function(gain) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 8, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Returns the shape parameter of the equalizer. The return value
 * indicates whether the data was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaFilterParametric.prototype.GetShapeParameter = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 9, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the shape parameter of the equalizer. The return value indicates
 * whether the parameter was successfully set.
 */
(function() {
var as = new SP.signature(SP.FLOAT32);
OcaFilterParametric.prototype.SetShapeParameter = function(shape) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 10, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
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
        A: new Property(new SP.signature(SP.LIST(SP.FLOAT32)), 4, 1, false, false, 0),
        B: new Property(new SP.signature(SP.LIST(SP.FLOAT32)), 4, 2, false, false, 0),
        SampleRate: new Property(new SP.signature(SP.FLOAT32), 4, 3, false, false, 0),
        MaxOrder: new Property(new SP.signature(SP.UINT8), 4, 4, true, false, 0),
    }),
    ClassID: "\u0001\u0001\u0001\u000b",
    ClassVersion: 2,
    ClassName: "OcaFilterPolynomial",
});
/**
 * Returns the polynomial coefficients used.
 */
(function() {
var rs = new SP.signature(SP.LIST(SP.FLOAT32), SP.LIST(SP.FLOAT32));
OcaFilterPolynomial.prototype.GetCoefficients = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the polynomial coefficients.
 */
(function() {
var as = new SP.signature(SP.LIST(SP.FLOAT32), SP.LIST(SP.FLOAT32));
OcaFilterPolynomial.prototype.SetCoefficients = function(A, B) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 2, 2,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the filter sampling rate.
 */
(function() {
var rs = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaFilterPolynomial.prototype.GetSampleRate = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 3, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the filter sampling rate.
 */
(function() {
var as = new SP.signature(SP.FLOAT32);
OcaFilterPolynomial.prototype.SetSampleRate = function(Rate) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 4, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the maximum allowable order (= max number of array elements in
 * numerator and for denominator arrays)
 */
(function() {
var rs = new SP.signature(SP.UINT8);
OcaFilterPolynomial.prototype.GetMaxOrder = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 5, 0);
    return this.device.send_command(cmd, rs);
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
        Length: new Property(new SP.signature(SP.UINT32), 4, 1, true, false, 0),
        Coefficients: new Property(new SP.signature(SP.LIST(SP.FLOAT32)), 4, 2, false, false, 0),
        SampleRate: new Property(new SP.signature(SP.FLOAT32), 4, 3, false, false, 0),
    }),
    ClassID: "\u0001\u0001\u0001\f",
    ClassVersion: 2,
    ClassName: "OcaFilterFIR",
});
/**
 * Gets the length of the FIR filter. The return value indicates whether
 * the value was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT32, SP.UINT32, SP.UINT32);
OcaFilterFIR.prototype.GetLength = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the coefficients of the FIR filter. The return value indicates
 * whether the coefficients were successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.LIST(SP.FLOAT32));
OcaFilterFIR.prototype.GetCoefficients = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 2, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the properties of the FIR filter. The return value
 * indicates whether the properties were successfully set.
 */
(function() {
var as = new SP.signature(SP.LIST(SP.FLOAT32));
OcaFilterFIR.prototype.SetCoefficients = function(Coefficients) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 3, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the sample rate of the FIR filter. The return value indicates
 * whether the data was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaFilterFIR.prototype.GetSampleRate = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 4, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the sample rate of the FIR filter. The return value indicates
 * whether the rate was successfully set.
 */
(function() {
var as = new SP.signature(SP.FLOAT32);
OcaFilterFIR.prototype.SetSampleRate = function(Rate) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 5, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
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
        TransferFunction: new Property(new SP.signature(OCA.OcaTransferFunction), 4, 1, false, false, 0),
        SampleRate: new Property(new SP.signature(SP.FLOAT32), 4, 2, false, false, 0),
        TFMinLength: new Property(new SP.signature(SP.UINT32), 4, 3, false, false, 0),
        TFMaxLength: new Property(new SP.signature(SP.UINT32), 4, 4, false, false, 0),
    }),
    ClassID: "\u0001\u0001\u0001\r",
    ClassVersion: 2,
    ClassName: "OcaFilterArbitraryCurve",
});
/**
 * Returns the complex transfer function.
 */
(function() {
var rs = new SP.signature(OCA.OcaTransferFunction);
OcaFilterArbitraryCurve.prototype.GetTransferFunction = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the complex transfer function.
 */
(function() {
var as = new SP.signature(SP.LIST(SP.FLOAT32), SP.LIST(SP.FLOAT32), SP.LIST(SP.FLOAT32));
OcaFilterArbitraryCurve.prototype.SetTransferFunction = function(Frequency, Amplitude, Phase) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 2, 3,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the filter sampling rate.
 */
(function() {
var rs = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaFilterArbitraryCurve.prototype.GetSampleRate = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 3, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the filter sampling rate.
 */
(function() {
var as = new SP.signature(SP.FLOAT32);
OcaFilterArbitraryCurve.prototype.SetSampleRate = function(Rate) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 4, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Returns the minimum number of required points in the specified
 * transfer function.
 */
(function() {
var rs = new SP.signature(SP.UINT32);
OcaFilterArbitraryCurve.prototype.GetTFMaxLength = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 5, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Returns the maximum number of allowed points in the specified transfer
 * function.
 */
(function() {
var rs = new SP.signature(SP.UINT32);
OcaFilterArbitraryCurve.prototype.GetTFMinLength = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 6, 0);
    return this.device.send_command(cmd, rs);
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
        Triggered: new Property(new SP.signature(SP.BOOLEAN), 4, 1, false, false, 0),
        DynamicGain: new Property(new SP.signature(SP.FLOAT32), 4, 2, false, false, 0),
        Function: new Property(new SP.signature(SP.UINT8), 4, 3, false, false, 0),
        Ratio: new Property(new SP.signature(SP.FLOAT32), 4, 4, false, false, 0),
        Threshold: new Property(new SP.signature(SP.FLOAT32), 4, 5, false, false, 0),
        ThresholdPresentationUnits: new Property(new SP.signature(SP.UINT8), 4, 6, false, false, 0),
        DetectorLaw: new Property(new SP.signature(SP.UINT8), 4, 7, false, false, 0),
        AttackTime: new Property(new SP.signature(SP.FLOAT32), 4, 8, false, false, 0),
        ReleaseTime: new Property(new SP.signature(SP.FLOAT32), 4, 9, false, false, 0),
        HoldTime: new Property(new SP.signature(SP.FLOAT32), 4, 10, false, false, 0),
        DynamicGainCeiling: new Property(new SP.signature(SP.FLOAT32), 4, 11, false, false, 0),
        DynamicGainFloor: new Property(new SP.signature(SP.FLOAT32), 4, 12, false, false, 0),
        KneeParameter: new Property(new SP.signature(SP.FLOAT32), 4, 13, false, false, 0),
        Slope: new Property(new SP.signature(SP.FLOAT32), 4, 14, false, false, 0),
    }),
    ClassID: "\u0001\u0001\u0001\u000e",
    ClassVersion: 2,
    ClassName: "OcaDynamics",
});
/**
 * Gets the value of the Triggered property. The return value indicates
 * whether the property was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.BOOLEAN);
OcaDynamics.prototype.GetTriggered = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the value of the DynamicGain property. The return value indicates
 * whether the property was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.FLOAT32);
OcaDynamics.prototype.GetDynamicGain = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 2, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the Function property. The return value indicates
 * whether the property was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT8);
OcaDynamics.prototype.GetFunction = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 3, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the Function property. The return value indicates
 * whether the property was successfully set.
 */
(function() {
var as = new SP.signature(SP.UINT8);
OcaDynamics.prototype.SetFunction = function(Func) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 4, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the value of the Ratio property. The return value indicates
 * whether the property was successfully retrieved. GetRatio() is a
 * DEPRECATED method. Please use <b>GetSlope()</b> instead.
 */
(function() {
var rs = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaDynamics.prototype.GetRatio = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 5, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the Ratio property. The return value indicates
 * whether the property was successfully set. SetRatio() is a DEPRECATED
 * method. Please use <b>SetSlope()</b> instead.
 */
(function() {
var as = new SP.signature(SP.FLOAT32);
OcaDynamics.prototype.SetRatio = function(Ratio) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 6, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the value of the Threshold property. The return value indicates
 * if the value was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaDynamics.prototype.GetThreshold = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 7, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the Threshold property. The return value indicates
 * if the value was successfully set.
 */
(function() {
var as = new SP.signature(SP.FLOAT32);
OcaDynamics.prototype.SetThreshold = function(threshold) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 8, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the value of the ThresholdPresentationUnits property. The return
 * value indicates if the value was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT8);
OcaDynamics.prototype.GetThresholdPresentationUnits = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 9, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the ThresholdPresentationUnits property. The return
 * value indicates if the value was successfully set.
 */
(function() {
var as = new SP.signature(SP.UINT8);
OcaDynamics.prototype.SetThresholdPresentationUnits = function(Units) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 10, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Sets the value of the DetectorLaw property. The return value indicates
 * if the value was successfully set.
 */
(function() {
var rs = new SP.signature(SP.UINT8);
OcaDynamics.prototype.GetDetectorLaw = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 11, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the DetectorLaw property. The return value indicates
 * if the value was successfully set.
 */
(function() {
var as = new SP.signature(SP.UINT8);
OcaDynamics.prototype.SetDetectorLaw = function(Law) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 12, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the value of the AttackTime property. The return value indicates
 * if the value was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaDynamics.prototype.GetAttackTime = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 13, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the AttackTime property. The return value indicates
 * if the value was successfully set.
 */
(function() {
var as = new SP.signature(SP.FLOAT32);
OcaDynamics.prototype.SetAttackTime = function(Time) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 14, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the value of the ReleaseTime property. The return value indicates
 * if the value was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaDynamics.prototype.GetReleaseTime = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 15, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the ReleaseTime property. The return value indicates
 * if the value was successfully set.
 */
(function() {
var as = new SP.signature(SP.FLOAT32);
OcaDynamics.prototype.SetReleaseTime = function(Time) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 16, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the value of the HoldTime property. The return value indicates if
 * the value was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaDynamics.prototype.GetHoldTime = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 17, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the HoldTime property. The return value indicates if
 * the value was successfully set.
 */
(function() {
var as = new SP.signature(SP.FLOAT32);
OcaDynamics.prototype.SetHoldTime = function(Time) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 18, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the value of the DynamicGainFLoor property. The return value
 * indicates if the value was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaDynamics.prototype.GetDynamicGainFloor = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 19, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the DynamicGainFloor property. The return value
 * indicates if the value was successfully set.
 */
(function() {
var as = new SP.signature(SP.FLOAT32);
OcaDynamics.prototype.SetDynamicGainFloor = function(Limit) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 20, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the value of the DynamicGainCeiling property. The return value
 * indicates if the value was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaDynamics.prototype.GetDynamicGainCeiling = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 21, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the DynamicGainCeiling property. The return value
 * indicates if the value was successfully set.
 */
(function() {
var as = new SP.signature(SP.FLOAT32);
OcaDynamics.prototype.SetDynamicGainCeiling = function(Limit) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 22, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the value of the KneeParameter property. The return value
 * indicates if the value was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaDynamics.prototype.GetKneeParameter = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 23, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the KneeParameter property. The return value
 * indicates if the value was successfully set.
 */
(function() {
var as = new SP.signature(SP.FLOAT32);
OcaDynamics.prototype.SetKneeParameter = function(Parameter) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 24, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the value of the Slope property. The return value indicates
 * whether the property was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaDynamics.prototype.GetSlope = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 25, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the Slope property. The return value indicates
 * whether the property was successfully set.
 */
(function() {
var as = new SP.signature(SP.FLOAT32);
OcaDynamics.prototype.SetSlope = function(Slope) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 26, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
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
        Law: new Property(new SP.signature(SP.UINT8), 4, 1, false, false, 0),
        AttackTime: new Property(new SP.signature(SP.FLOAT32), 4, 2, false, false, 0),
        ReleaseTime: new Property(new SP.signature(SP.FLOAT32), 4, 3, false, false, 0),
        HoldTime: new Property(new SP.signature(SP.FLOAT32), 4, 4, false, false, 0),
    }),
    ClassID: "\u0001\u0001\u0001\u000f",
    ClassVersion: 2,
    ClassName: "OcaDynamicsDetector",
});
/**
 * Gets the value of the Law property. Return status indicates whether
 * the value was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT8);
OcaDynamicsDetector.prototype.GetLaw = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the Law property. Return status indicates whether
 * the value was successfully set.
 */
(function() {
var as = new SP.signature(SP.UINT8);
OcaDynamicsDetector.prototype.SetLaw = function(Law) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 2, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the value of the AttackTime property. The return value indicates
 * if the value was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaDynamicsDetector.prototype.GetAttackTime = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 3, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the AttackTime property. The return value indicates
 * whether the property was successfully set.
 */
(function() {
var as = new SP.signature(SP.FLOAT32);
OcaDynamicsDetector.prototype.SetAttackTime = function(Time) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 4, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the value of the ReleaseTime property. The return value indicates
 * if the value was successfully retrieved.
 */
(function() {
var as = new SP.signature(SP.FLOAT32);
var rs = new SP.signature(SP.FLOAT32, SP.FLOAT32);
OcaDynamicsDetector.prototype.GetReleaseTime = function(Time) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 5, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the ReleaseTime property. The return value indicates
 * whether the property was successfully set.
 */
(function() {
var as = new SP.signature(SP.FLOAT32);
OcaDynamicsDetector.prototype.SetReleaseTime = function(Time) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 6, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the value of the HoldTime property. The return value indicates if
 * the value was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaDynamicsDetector.prototype.GetHoldTime = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 7, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the HoldTime property. The return value indicates
 * whether the property was successfully set.
 */
(function() {
var as = new SP.signature(SP.FLOAT32);
OcaDynamicsDetector.prototype.SetHoldTime = function(Time) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 8, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
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
        nSegments: new Property(new SP.signature(SP.UINT8), 4, 1, false, false, 0),
        Threshold: new Property(new SP.signature(SP.LIST(SP.FLOAT32)), 4, 2, false, false, 0),
        Slope: new Property(new SP.signature(SP.LIST(SP.FLOAT32)), 4, 3, false, false, 0),
        KneeParameter: new Property(new SP.signature(SP.LIST(SP.FLOAT32)), 4, 4, false, false, 0),
        DynamicGainFloor: new Property(new SP.signature(SP.FLOAT32), 4, 5, false, false, 0),
        DynamicGainCeiling: new Property(new SP.signature(SP.FLOAT32), 4, 6, false, false, 0),
    }),
    ClassID: "\u0001\u0001\u0001\u0010",
    ClassVersion: 2,
    ClassName: "OcaDynamicsCurve",
});
/**
 * Gets the number of curve segments. The return value indicates whether
 * the value was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT8, SP.UINT8, SP.UINT8);
OcaDynamicsCurve.prototype.GetNSegments = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 1, 0);
    return this.device.send_command(cmd, rs);
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
var as = new SP.signature(SP.UINT8);
OcaDynamicsCurve.prototype.SetNSegments = function(Slope) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 2, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the list of Threshold values. The return value indicates whether
 * the data was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaDynamicsCurve.prototype.GetThreshold = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 3, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the list of Threshold values. The return value indicates whether
 * the values were successfully set.
 */
(function() {
var as = new SP.signature(SP.LIST(SP.FLOAT32));
OcaDynamicsCurve.prototype.SetThreshold = function(Threshold) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 4, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the list of Slope values. The return value indicates whether the
 * list was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.LIST(SP.FLOAT32), SP.LIST(SP.FLOAT32), SP.LIST(SP.FLOAT32));
OcaDynamicsCurve.prototype.GetSlope = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 5, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the list of Slope values. The return value indicates whether the
 * values were successfully set.
 */
(function() {
var as = new SP.signature(SP.LIST(SP.FLOAT32));
OcaDynamicsCurve.prototype.SetSlope = function(slope) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 6, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the list of KneeParameter valuess. The return value indicates
 * whether the list was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.LIST(SP.FLOAT32), SP.LIST(SP.FLOAT32), SP.LIST(SP.FLOAT32));
OcaDynamicsCurve.prototype.GetKneeParameter = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 7, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the list of KneeParameter values. The return value indicates
 * whether the values were successfully set.
 */
(function() {
var as = new SP.signature(SP.LIST(SP.FLOAT32));
OcaDynamicsCurve.prototype.SetKneeParameter = function(parameter) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 8, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the value of the DynamicGainCeiling property. The return value
 * indicates whether the data was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaDynamicsCurve.prototype.GetDynamicGainCeiling = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 9, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the DynamicGainCeiling property. The return value
 * indicates whether the data was successfully set.
 */
(function() {
var as = new SP.signature(SP.FLOAT32);
OcaDynamicsCurve.prototype.SetDynamicGainCeiling = function(gain) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 10, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the value of the DynamicGainFloor property. The return value
 * indicates whether the data was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaDynamicsCurve.prototype.GetDynamicGainFloor = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 11, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the DynamicGainFloor property. The return value
 * indicates whether the data was successfully set.
 */
(function() {
var as = new SP.signature(SP.FLOAT32);
OcaDynamicsCurve.prototype.SetDynamicGainFloor = function(Gain) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 12, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
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
        Frequency1: new Property(new SP.signature(SP.FLOAT32), 4, 1, false, false, 0),
        Frequency2: new Property(new SP.signature(SP.FLOAT32), 4, 2, false, false, 0),
        Level: new Property(new SP.signature(SP.FLOAT32), 4, 3, false, false, 0),
        Waveform: new Property(new SP.signature(SP.UINT8), 4, 4, false, false, 0),
        SweepType: new Property(new SP.signature(SP.UINT8), 4, 5, false, false, 0),
        SweepTime: new Property(new SP.signature(SP.FLOAT32), 4, 6, false, false, 0),
        SweepRepeat: new Property(new SP.signature(SP.BOOLEAN), 4, 7, false, false, 0),
        Generating: new Property(new SP.signature(SP.BOOLEAN), 4, 8, false, false, 0),
    }),
    ClassID: "\u0001\u0001\u0001\u0011",
    ClassVersion: 2,
    ClassName: "OcaSignalGenerator",
});
/**
 * Gets the value of the Frequency1 property. The return value indicates
 * whether the property was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaSignalGenerator.prototype.GetFrequency1 = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the Frequency1 property. The return value indicates
 * whether the property was successfully set.
 */
(function() {
var as = new SP.signature(SP.FLOAT32);
OcaSignalGenerator.prototype.SetFrequency1 = function(frequency) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 2, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the value of the Frequency2 property. The return value indicates
 * whether the property was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaSignalGenerator.prototype.GetFrequency2 = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 3, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the Frequency2 property. The return value indicates
 * whether the property was successfully set.
 */
(function() {
var as = new SP.signature(SP.FLOAT32);
OcaSignalGenerator.prototype.SetFrequency2 = function(frequency) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 4, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the value of the Level property. The return value indicates
 * whether the property was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaSignalGenerator.prototype.GetLevel = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 5, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the Level property. The return value indicates
 * whether the property was successfully set.
 */
(function() {
var as = new SP.signature(SP.FLOAT32);
OcaSignalGenerator.prototype.SetLevel = function(Level) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 6, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the value of the Waveform property. The return value indicates
 * whether the property was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT8);
OcaSignalGenerator.prototype.GetWaveform = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 7, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the Waveform property. The return value indicates
 * whether the property was successfully set.
 */
(function() {
var as = new SP.signature(SP.UINT8);
OcaSignalGenerator.prototype.SetWaveform = function(waveform) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 8, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the value of the SweepType property. The return value indicates
 * whether the property was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT8);
OcaSignalGenerator.prototype.GetSweepType = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 9, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the SweepType property. The return value indicates
 * whether the property was successfully set.
 */
(function() {
var as = new SP.signature(SP.UINT8);
OcaSignalGenerator.prototype.SetSweepType = function(sweepType) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 10, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the value of the SweepTime property. The return value indicates
 * whether the property was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaSignalGenerator.prototype.GetSweepTime = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 11, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the SweepTime property. The return value indicates
 * whether the property was successfully set.
 */
(function() {
var as = new SP.signature(SP.FLOAT32);
OcaSignalGenerator.prototype.SetSweepTime = function(sweepTime) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 12, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the value of the SweepRepeat property. The return value indicates
 * whether the property was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.BOOLEAN);
OcaSignalGenerator.prototype.GetSweepRepeat = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 13, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the SweepRepeat property. The return value indicates
 * whether the property was successfully set.
 */
(function() {
var as = new SP.signature(SP.BOOLEAN);
OcaSignalGenerator.prototype.SetSweepRepeat = function(sweepRepeat) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 14, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the value of the Generating property. The return value indicates
 * whether the property was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.BOOLEAN);
OcaSignalGenerator.prototype.GetGenerating = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 15, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Starts the signal generator. The return value indicates whether the
 * signal generator was successfully started.
 */
(function() {
OcaSignalGenerator.prototype.Start = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 16, 0);
    return this.device.send_command(cmd);
}
})();
/**
 * Stops the signal generator. The return value indicates whether the
 * signal generator was successfully stopped.
 */
(function() {
OcaSignalGenerator.prototype.Stop = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 17, 0);
    return this.device.send_command(cmd);
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
    ClassVersion: 2,
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
    ClassVersion: 2,
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
        Temperature: new Property(new SP.signature(SP.FLOAT32), 4, 1, false, false, 0),
    }),
    ClassID: "\u0001\u0001\u0001\u0014",
    ClassVersion: 2,
    ClassName: "OcaTemperatureActuator",
});
/**
 * Gets the value of the Temperature property. The return value indicates
 * whether the property was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaTemperatureActuator.prototype.GetTemperature = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the Temperature property. The return value indicates
 * whether the property was successfully set.
 */
(function() {
var as = new SP.signature(SP.FLOAT32);
OcaTemperatureActuator.prototype.SetTemperature = function(temperature) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 2, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
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
        active: new Property(new SP.signature(SP.BOOLEAN), 4, 1, false, false, 0),
    }),
    ClassID: "\u0001\u0001\u0001\u0015",
    ClassVersion: 2,
    ClassName: "OcaIdentificationActuator",
});
/**
 * Gets the current identification indicator activity state. The return
 * value indicates whether the state was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.BOOLEAN);
OcaIdentificationActuator.prototype.GetActive = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the Active state (i.e. value of the Active property). The return
 * value indicates whether the state was successfully set.
 */
(function() {
var as = new SP.signature(SP.BOOLEAN);
OcaIdentificationActuator.prototype.SetActive = function(active) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 2, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();


/**
 * Actuator with no control parameters, used as a simple node to
 * represent summations in block signal flows.
 */
function OcaSummingPoint(ObjectNumber, device) {
    OcaActuator.call(this, ObjectNumber, device);
};
mod.OcaSummingPoint = OcaSummingPoint;
OcaSummingPoint.prototype = Object.assign(Object.create(OcaActuator.prototype), {
    __oca_properties__: OcaActuator.prototype.__oca_properties__.extend({
    }),
    ClassID: "\u0001\u0001\u0001\u0016",
    ClassVersion: 1,
    ClassName: "OcaSummingPoint",
});


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
    ClassVersion: 2,
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
        Setting: new Property(new SP.signature(SP.BOOLEAN), 5, 1, false, false, 0),
    }),
    ClassID: "\u0001\u0001\u0001\u0001\u0001",
    ClassVersion: 2,
    ClassName: "OcaBooleanActuator",
});
/**
 * Gets the <b>Setting </b>property. The return value indicates whether
 * the data was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.BOOLEAN);
OcaBooleanActuator.prototype.GetSetting = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the <b>Setting </b>property. The return value indicates whether
 * the property was successfully set.
 */
(function() {
var as = new SP.signature(SP.BOOLEAN);
OcaBooleanActuator.prototype.SetSetting = function(Setting) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 2, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
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
        Setting: new Property(new SP.signature(SP.INT8), 5, 1, false, false, 0),
    }),
    ClassID: "\u0001\u0001\u0001\u0001\u0002",
    ClassVersion: 2,
    ClassName: "OcaInt8Actuator",
});
/**
 * Gets the value and limits of the <b>Setting </b>property. The return
 * value indicates whether the data was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.INT8, SP.INT8, SP.INT8);
OcaInt8Actuator.prototype.GetSetting = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the <b>Setting </b>property. The return value indicates whether
 * the property was successfully set.
 */
(function() {
var as = new SP.signature(SP.INT8);
OcaInt8Actuator.prototype.SetSetting = function(Setting) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 2, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
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
        Setting: new Property(new SP.signature(SP.INT16), 5, 1, false, false, 0),
    }),
    ClassID: "\u0001\u0001\u0001\u0001\u0003",
    ClassVersion: 2,
    ClassName: "OcaInt16Actuator",
});
/**
 * Gets the value and limits of the <b>Setting </b>property. The return
 * value indicates whether the data was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.INT16, SP.INT16, SP.INT16);
OcaInt16Actuator.prototype.GetSetting = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the <b>Setting </b>property. The return value indicates whether
 * the property was successfully set.
 */
(function() {
var as = new SP.signature(SP.INT16);
OcaInt16Actuator.prototype.SetSetting = function(Setting) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 2, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
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
        Setting: new Property(new SP.signature(SP.INT32), 5, 1, false, false, 0),
    }),
    ClassID: "\u0001\u0001\u0001\u0001\u0004",
    ClassVersion: 2,
    ClassName: "OcaInt32Actuator",
});
/**
 * Gets the value and limits of the <b>Setting </b>property. The return
 * value indicates whether the data was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.INT32, SP.INT32, SP.INT32);
OcaInt32Actuator.prototype.GetSetting = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the<b> Setting </b>property. The return value indicates whether
 * the property was successfully set.
 */
(function() {
var as = new SP.signature(SP.INT32);
OcaInt32Actuator.prototype.SetSetting = function(Setting) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 2, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
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
        Setting: new Property(new SP.signature(SP.INT64), 5, 1, false, false, 0),
    }),
    ClassID: "\u0001\u0001\u0001\u0001\u0005",
    ClassVersion: 2,
    ClassName: "OcaInt64Actuator",
});
/**
 * Gets the value and limits of the <b>Setting </b>property. The return
 * value indicates whether the data was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.INT64, SP.INT64, SP.INT64);
OcaInt64Actuator.prototype.GetSetting = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the <b>Setting </b>property. The return value indicates whether
 * the property was successfully set.
 */
(function() {
var as = new SP.signature(SP.INT64);
OcaInt64Actuator.prototype.SetSetting = function(Value) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 2, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
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
        Setting: new Property(new SP.signature(SP.UINT8), 5, 1, false, false, 0),
    }),
    ClassID: "\u0001\u0001\u0001\u0001\u0006",
    ClassVersion: 2,
    ClassName: "OcaUint8Actuator",
});
/**
 * Gets the value and limits of the <b>Setting </b>property. The return
 * value indicates whether the data was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT8, SP.UINT8, SP.UINT8);
OcaUint8Actuator.prototype.GetSetting = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the <b>Setting </b>property. The return value indicates whether
 * the property was successfully set.
 */
(function() {
var as = new SP.signature(SP.UINT8);
OcaUint8Actuator.prototype.SetSetting = function(Setting) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 2, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
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
        Setting: new Property(new SP.signature(SP.UINT16), 5, 1, false, false, 0),
    }),
    ClassID: "\u0001\u0001\u0001\u0001\u0007",
    ClassVersion: 2,
    ClassName: "OcaUint16Actuator",
});
/**
 * Gets the value and limits of the Setting property. The return value
 * indicates whether the data was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT16, SP.UINT16, SP.UINT16);
OcaUint16Actuator.prototype.GetSetting = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the <b>Setting </b>property. The return value
 * indicates whether the property was successfully set.
 */
(function() {
var as = new SP.signature(SP.UINT16);
OcaUint16Actuator.prototype.SetSetting = function(Setting) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 2, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
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
        Setting: new Property(new SP.signature(SP.UINT32), 5, 1, false, false, 0),
    }),
    ClassID: "\u0001\u0001\u0001\u0001\b",
    ClassVersion: 2,
    ClassName: "OcaUint32Actuator",
});
/**
 * Gets the value and limits of the <b>Setting </b>property. The return
 * value indicates whether the data was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT32, SP.UINT32, SP.UINT32);
OcaUint32Actuator.prototype.GetSetting = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the <b>Setting </b>property. The return value indicates whether
 * the property was successfully set.
 */
(function() {
var as = new SP.signature(SP.UINT32);
OcaUint32Actuator.prototype.SetSetting = function(Setting) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 2, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
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
        Setting: new Property(new SP.signature(SP.UINT64), 5, 1, false, false, 0),
    }),
    ClassID: "\u0001\u0001\u0001\u0001\t",
    ClassVersion: 2,
    ClassName: "OcaUint64Actuator",
});
/**
 * Gets the value and limits of the Gain property. The return value
 * indicates whether the data was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT64, SP.UINT64, SP.UINT64);
OcaUint64Actuator.prototype.GetSetting = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the Level property. The return value indicates
 * whether the property was successfully set.
 */
(function() {
var as = new SP.signature(SP.UINT64);
OcaUint64Actuator.prototype.SetSetting = function(Setting) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 2, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
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
        Setting: new Property(new SP.signature(SP.FLOAT32), 5, 1, false, false, 0),
    }),
    ClassID: "\u0001\u0001\u0001\u0001\n",
    ClassVersion: 2,
    ClassName: "OcaFloat32Actuator",
});
/**
 * Gets the value and limits of the <b>Setting </b>property. The return
 * value indicates whether the data was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaFloat32Actuator.prototype.GetSetting = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the <b>Setting </b>property. The return value indicates whether
 * the property was successfully set.
 */
(function() {
var as = new SP.signature(SP.FLOAT32);
OcaFloat32Actuator.prototype.SetSetting = function(Setting) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 2, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
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
        Setting: new Property(new SP.signature(SP.FLOAT64), 5, 1, false, false, 0),
    }),
    ClassID: "\u0001\u0001\u0001\u0001\u000b",
    ClassVersion: 2,
    ClassName: "OcaFloat64Actuator",
});
/**
 * Gets the value and limits of the <b>Setting </b>property. The return
 * value indicates whether the data was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.FLOAT64, SP.FLOAT64, SP.FLOAT64);
OcaFloat64Actuator.prototype.GetSetting = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the Level property. The return value indicates
 * whether the property was successfully set.
 */
(function() {
var as = new SP.signature(SP.FLOAT64);
OcaFloat64Actuator.prototype.SetSetting = function(Setting) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 2, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
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
        Setting: new Property(new SP.signature(SP.STRING), 5, 1, false, false, 0),
        MaxLen: new Property(new SP.signature(SP.UINT16), 5, 2, true, false, 0),
    }),
    ClassID: "\u0001\u0001\u0001\u0001\f",
    ClassVersion: 2,
    ClassName: "OcaStringActuator",
});
/**
 * Gets the value and max length of the Value property. The return value
 * indicates whether the data was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.STRING);
OcaStringActuator.prototype.GetValue = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the Value property. The return value indicates
 * whether the property was successfully set.
 */
(function() {
var as = new SP.signature(SP.STRING);
OcaStringActuator.prototype.SetValue = function(Value) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 2, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the maximum string length that this object can handle.
 */
(function() {
var rs = new SP.signature(SP.UINT16);
OcaStringActuator.prototype.GetMaxLen = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 3, 0);
    return this.device.send_command(cmd, rs);
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
        Bitstring: new Property(new SP.signature(SP.BITSTRING), 5, 1, false, false, 0),
    }),
    ClassID: "\u0001\u0001\u0001\u0001\r",
    ClassVersion: 2,
    ClassName: "OcaBitstringActuator",
});
/**
 * Gets the number of bits in the string. The return value indicates
 * whether the property was successfully gathered.
 */
(function() {
var rs = new SP.signature(SP.UINT16);
OcaBitstringActuator.prototype.GetNrBits = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the bit value of the given bit. The return value indicates
 * whether the property was successfully gathered.
 */
(function() {
var as = new SP.signature(SP.UINT16);
var rs = new SP.signature(SP.BOOLEAN);
OcaBitstringActuator.prototype.GetBit = function(bitNr) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 2, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the bit value of the given bit. The return value indicates
 * whether the property was successfully set.
 */
(function() {
var as = new SP.signature(SP.UINT16, SP.BOOLEAN);
OcaBitstringActuator.prototype.SetBit = function(bitNr, Value) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 3, 2,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the entire bitstring.The return value indicates whether the
 * property was successfully gathered.
 */
(function() {
var rs = new SP.signature(SP.BITSTRING);
OcaBitstringActuator.prototype.GetBitstring = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 4, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the entire bitstring. The return value indicates whether the
 * property was successfully set.
 */
(function() {
var as = new SP.signature(SP.BITSTRING);
OcaBitstringActuator.prototype.SetBitstring = function(BitString) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 5, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
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
        ReadingState: new Property(new SP.signature(SP.UINT8), 3, 1, false, true, 0),
    }),
    ClassID: "\u0001\u0001\u0002",
    ClassVersion: 2,
    ClassName: "OcaSensor",
});
/**
 * Gets the current reading state of the sensor. The return value
 * indicates whether the state was successfully retrived.
 */
(function() {
var rs = new SP.signature(SP.UINT8);
OcaSensor.prototype.GetReadingState = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 1, 0);
    return this.device.send_command(cmd, rs);
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
        Reading: new Property(new SP.signature(SP.FLOAT32), 4, 1, false, false, 0),
    }),
    ClassID: "\u0001\u0001\u0002\u0002",
    ClassVersion: 2,
    ClassName: "OcaLevelSensor",
});
/**
 * Gets the value and limits of the <b>Reading </b>property. The return
 * value indicates whether the data was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaLevelSensor.prototype.GetReading = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 1, 0);
    return this.device.send_command(cmd, rs);
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
        Law: new Property(new SP.signature(SP.UINT8), 5, 1, false, false, 0),
    }),
    ClassID: "\u0001\u0001\u0002\u0002\u0001",
    ClassVersion: 2,
    ClassName: "OcaAudioLevelSensor",
});
/**
 * Gets the value of the Law property. The return value indicates whether
 * the property was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT8);
OcaAudioLevelSensor.prototype.GetLaw = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the Law property. The return value indicates whether
 * the property was successfully set. Only implemented for objects whose
 * Law property is read/write.
 */
(function() {
var as = new SP.signature(SP.UINT8);
OcaAudioLevelSensor.prototype.SetLaw = function(law) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 2, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
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
        Reading: new Property(new SP.signature(SP.FLOAT32), 4, 1, false, false, 0),
    }),
    ClassID: "\u0001\u0001\u0002\u0003",
    ClassVersion: 2,
    ClassName: "OcaTimeIntervalSensor",
});
/**
 * Gets the value and limits of the <b>Reading </b>property. The return
 * value indicates whether the data was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaTimeIntervalSensor.prototype.GetReading = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 1, 0);
    return this.device.send_command(cmd, rs);
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
        Reading: new Property(new SP.signature(SP.FLOAT32), 4, 1, false, false, 0),
    }),
    ClassID: "\u0001\u0001\u0002\u0004",
    ClassVersion: 2,
    ClassName: "OcaFrequencySensor",
});
/**
 * Gets the value and limits of the <b>Reading </b>property. The return
 * value indicates whether the data was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaFrequencySensor.prototype.GetReading = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 1, 0);
    return this.device.send_command(cmd, rs);
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
        Reading: new Property(new SP.signature(SP.FLOAT32), 4, 1, false, false, 0),
    }),
    ClassID: "\u0001\u0001\u0002\u0005",
    ClassVersion: 2,
    ClassName: "OcaTemperatureSensor",
});
/**
 * Gets the value and limits of the <b>Reading </b>property. The return
 * value indicates whether the data was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaTemperatureSensor.prototype.GetReading = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 1, 0);
    return this.device.send_command(cmd, rs);
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
    ClassVersion: 2,
    ClassName: "OcaIdentificationSensor",
});
OcaIdentificationSensor.prototype.onIdentify = function(callback) {
    return this.device.add_subscription(new OCA.OcaEvent(this.ObjectNumber, new OCA.OcaEventID(4, 1)), callback);
};


/**
 * Basic voltage sensor.
 */
function OcaVoltageSensor(ObjectNumber, device) {
    OcaSensor.call(this, ObjectNumber, device);
};
mod.OcaVoltageSensor = OcaVoltageSensor;
OcaVoltageSensor.prototype = Object.assign(Object.create(OcaSensor.prototype), {
    __oca_properties__: OcaSensor.prototype.__oca_properties__.extend({
        Reading: new Property(new SP.signature(SP.FLOAT32), 4, 1, false, false, 0),
    }),
    ClassID: "\u0001\u0001\u0002\u0007",
    ClassVersion: 1,
    ClassName: "OcaVoltageSensor",
});
/**
 * Gets the value and limits of the <b>Reading </b>property. The return
 * value indicates whether the data was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaVoltageSensor.prototype.GetReading = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();


/**
 * Basic current sensor.
 */
function OcaCurrentSensor(ObjectNumber, device) {
    OcaSensor.call(this, ObjectNumber, device);
};
mod.OcaCurrentSensor = OcaCurrentSensor;
OcaCurrentSensor.prototype = Object.assign(Object.create(OcaSensor.prototype), {
    __oca_properties__: OcaSensor.prototype.__oca_properties__.extend({
        Reading: new Property(new SP.signature(SP.FLOAT32), 4, 1, false, false, 0),
    }),
    ClassID: "\u0001\u0001\u0002\b",
    ClassVersion: 1,
    ClassName: "OcaCurrentSensor",
});
/**
 * Gets the value and limits of the <b>Reading </b>property. The return
 * value indicates whether the data was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaCurrentSensor.prototype.GetReading = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();


/**
 * Basic impedance sensor. Value is complex (magnitude and phase).
 */
function OcaImpedanceSensor(ObjectNumber, device) {
    OcaSensor.call(this, ObjectNumber, device);
};
mod.OcaImpedanceSensor = OcaImpedanceSensor;
OcaImpedanceSensor.prototype = Object.assign(Object.create(OcaSensor.prototype), {
    __oca_properties__: OcaSensor.prototype.__oca_properties__.extend({
        Reading: new Property(new SP.signature(OCA.OcaImpedance), 4, 1, false, false, 0),
    }),
    ClassID: "\u0001\u0001\u0002\n",
    ClassVersion: 1,
    ClassName: "OcaImpedanceSensor",
});
/**
 * Gets the value and limits of the <b>Reading </b>property. The return
 * value indicates whether the data was successfully retrieved.
 */
(function() {
var rs = new SP.signature(OCA.OcaImpedance, OCA.OcaImpedance, OCA.OcaImpedance);
OcaImpedanceSensor.prototype.GetReading = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();


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
    ClassVersion: 2,
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
        Reading: new Property(new SP.signature(SP.BOOLEAN), 5, 1, false, false, 0),
    }),
    ClassID: "\u0001\u0001\u0002\u0001\u0001",
    ClassVersion: 2,
    ClassName: "OcaBooleanSensor",
});
/**
 * Gets the <b>Reading </b>property. The return value indicates whether
 * the data was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.BOOLEAN);
OcaBooleanSensor.prototype.GetReading = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 1, 0);
    return this.device.send_command(cmd, rs);
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
        Reading: new Property(new SP.signature(SP.INT8), 5, 1, false, false, 0),
    }),
    ClassID: "\u0001\u0001\u0002\u0001\u0002",
    ClassVersion: 2,
    ClassName: "OcaInt8Sensor",
});
/**
 * Gets the value and limits of the <b>Reading </b>property. The return
 * value indicates whether the data was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.INT8, SP.INT8, SP.INT8);
OcaInt8Sensor.prototype.GetReading = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 1, 0);
    return this.device.send_command(cmd, rs);
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
        Reading: new Property(new SP.signature(SP.INT16), 5, 1, false, false, 0),
    }),
    ClassID: "\u0001\u0001\u0002\u0001\u0003",
    ClassVersion: 2,
    ClassName: "OcaInt16Sensor",
});
/**
 * Gets the value and limits of the <b>Reading </b>property. The return
 * value indicates whether the data was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.INT16, SP.INT16, SP.INT16);
OcaInt16Sensor.prototype.GetReading = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 1, 0);
    return this.device.send_command(cmd, rs);
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
        Reading: new Property(new SP.signature(SP.INT32), 5, 1, false, false, 0),
    }),
    ClassID: "\u0001\u0001\u0002\u0001\u0004",
    ClassVersion: 2,
    ClassName: "OcaInt32Sensor",
});
/**
 * Gets the value and limits of the <b>Reading </b>property. The return
 * value indicates whether the data was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.INT32, SP.INT32, SP.INT32);
OcaInt32Sensor.prototype.GetReading = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 1, 0);
    return this.device.send_command(cmd, rs);
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
        Reading: new Property(new SP.signature(SP.INT64), 5, 1, false, false, 0),
    }),
    ClassID: "\u0001\u0001\u0002\u0001\u0005",
    ClassVersion: 2,
    ClassName: "OcaInt64Sensor",
});
/**
 * Gets the value and limits of the <b>Reading </b>property. The return
 * value indicates whether the data was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.INT64, SP.INT64, SP.INT64);
OcaInt64Sensor.prototype.GetReading = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 1, 0);
    return this.device.send_command(cmd, rs);
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
        Reading: new Property(new SP.signature(SP.UINT8), 5, 1, false, false, 0),
    }),
    ClassID: "\u0001\u0001\u0002\u0001\u0006",
    ClassVersion: 2,
    ClassName: "OcaUint8Sensor",
});
/**
 * Gets the value and limits of the <b>Reading </b>property. The return
 * value indicates whether the data was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT8, SP.UINT8, SP.UINT8);
OcaUint8Sensor.prototype.GetReading = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 1, 0);
    return this.device.send_command(cmd, rs);
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
        Reading: new Property(new SP.signature(SP.UINT16), 5, 1, false, false, 0),
    }),
    ClassID: "\u0001\u0001\u0002\u0001\u0007",
    ClassVersion: 2,
    ClassName: "OcaUint16Sensor",
});
/**
 * Gets the value and limits of the <b>Reading </b>property. The return
 * value indicates whether the data was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT16, SP.UINT16, SP.UINT16);
OcaUint16Sensor.prototype.GetReading = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 1, 0);
    return this.device.send_command(cmd, rs);
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
        Reading: new Property(new SP.signature(SP.UINT32), 5, 1, false, false, 0),
    }),
    ClassID: "\u0001\u0001\u0002\u0001\b",
    ClassVersion: 2,
    ClassName: "OcaUint32Sensor",
});
/**
 * Gets the value and limits of the <b>Reading </b>property. The return
 * value indicates whether the data was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT32, SP.UINT32, SP.UINT32);
OcaUint32Sensor.prototype.GetReading = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 1, 0);
    return this.device.send_command(cmd, rs);
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
        Reading: new Property(new SP.signature(SP.UINT64), 5, 1, false, false, 0),
    }),
    ClassID: "\u0001\u0001\u0002\u0001\t",
    ClassVersion: 2,
    ClassName: "OcaUint64Sensor",
});
/**
 * Gets the value and limits of the <b>Reading </b>property. The return
 * value indicates whether the data was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT64, SP.UINT64, SP.UINT64);
OcaUint64Sensor.prototype.GetReading = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 1, 0);
    return this.device.send_command(cmd, rs);
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
        Reading: new Property(new SP.signature(SP.FLOAT32), 5, 1, false, false, 0),
    }),
    ClassID: "\u0001\u0001\u0002\u0001\n",
    ClassVersion: 2,
    ClassName: "OcaFloat32Sensor",
});
/**
 * Gets the value and limits of the <b>Reading </b>property. The return
 * value indicates whether the data was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaFloat32Sensor.prototype.GetReading = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 1, 0);
    return this.device.send_command(cmd, rs);
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
        Reading: new Property(new SP.signature(SP.FLOAT64), 5, 1, false, false, 0),
    }),
    ClassID: "\u0001\u0001\u0002\u0001\u000b",
    ClassVersion: 2,
    ClassName: "OcaFloat64Sensor",
});
/**
 * Gets the value and limits of the <b>Reading </b>property. The return
 * value indicates whether the data was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.FLOAT64, SP.FLOAT64, SP.FLOAT64);
OcaFloat64Sensor.prototype.GetReading = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();


/**
 * Text string sensor.
 */
function OcaStringSensor(ObjectNumber, device) {
    OcaBasicSensor.call(this, ObjectNumber, device);
};
mod.OcaStringSensor = OcaStringSensor;
OcaStringSensor.prototype = Object.assign(Object.create(OcaBasicSensor.prototype), {
    __oca_properties__: OcaBasicSensor.prototype.__oca_properties__.extend({
        String: new Property(new SP.signature(SP.STRING), 5, 1, false, false, 0),
        MaxLen: new Property(new SP.signature(SP.UINT16), 5, 2, false, false, 0),
    }),
    ClassID: "\u0001\u0001\u0002\u0001\f",
    ClassVersion: 2,
    ClassName: "OcaStringSensor",
});
/**
 * Gets the entire string. Return status indicates success or failure of
 * the retrieval.
 */
(function() {
var rs = new SP.signature(SP.STRING);
OcaStringSensor.prototype.GetString = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the maximum number of bytes that may be returned. Returned status
 * indicates success or failure of the retrieval.
 */
(function() {
var rs = new SP.signature(SP.UINT16);
OcaStringSensor.prototype.GetMaxLen = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 2, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the maximum number of bytes that the object may return. Returned
 * status indicates success or failure of the set.
 */
(function() {
var as = new SP.signature(SP.UINT16);
OcaStringSensor.prototype.SetMaxLen = function(maxLen) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 3, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
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
        BitString: new Property(new SP.signature(SP.BITSTRING), 5, 1, false, false, 0),
    }),
    ClassID: "\u0001\u0001\u0002\u0001\r",
    ClassVersion: 2,
    ClassName: "OcaBitstringSensor",
});
/**
 * Gets the number of bits of the bitmask data. Returned status indicates
 * success or failure of the retrieval.
 */
(function() {
var rs = new SP.signature(SP.UINT16);
OcaBitstringSensor.prototype.GetNrBits = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the value of the given bit. Return status indicates success or
 * failure of the retrieval.
 */
(function() {
var as = new SP.signature(SP.UINT16);
var rs = new SP.signature(SP.UINT8);
OcaBitstringSensor.prototype.GetBit = function(bitNr) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 2, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the entire bitstring. Return status indicates success or failure
 * of the retrieval.
 */
(function() {
var rs = new SP.signature(SP.BITSTRING);
OcaBitstringSensor.prototype.GetBitString = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 5, 3, 0);
    return this.device.send_command(cmd, rs);
}
})();


/**
 * A block is an object with three aspects: - It can contain other
 * blocks. - It can contain workers. - It can contain agents. - It can
 * contain data networks. - It can contain application networks. - It has
 * a signal flow topology. We refer to an object inside a block as a
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
        Type: new Property(new SP.signature(SP.UINT32), 3, 1, true, false, 0),
        Members: new Property(new SP.signature(SP.LIST(OCA.OcaObjectIdentification)), 3, 2, false, false, 0),
        SignalPaths: new Property(new SP.signature(SP.MAP(SP.UINT16, OCA.OcaSignalPath)), 3, 3, false, false, 0),
        MostRecentParamSetIdentifier: new Property(new SP.signature(SP.UINT16), 3, 4, false, false, 0),
        GlobalType: new Property(new SP.signature(OCA.OcaGlobalBlockTypeIdentifier), 3, 5, true, false, 0),
        ONoMap: new Property(new SP.signature(SP.MAP(SP.UINT32, SP.UINT32)), 3, 6, true, false, 0),
    }),
    ClassID: "\u0001\u0001\u0003",
    ClassVersion: 2,
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
var rs = new SP.signature(SP.UINT32);
OcaBlock.prototype.GetType = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 1, 0);
    return this.device.send_command(cmd, rs);
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
var as = new SP.signature(SP.UINT32);
var rs = new SP.signature(SP.UINT32);
OcaBlock.prototype.ConstructMemberUsingFactory = function(FactoryONo) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 3, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Removes a member from the block and destroys the object. . Deletes all
 * signal paths attached to its ports. The return value indicates whether
 * the member was successfully removed and destroyed.
 */
(function() {
var as = new SP.signature(SP.UINT32);
OcaBlock.prototype.DeleteMember = function(ObjectNumber) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 4, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the list of block members. Does not recurse inner blocks. Each
 * inner block is included in the returned list as a single object -- its
 * contents are not enumerated. The return value indicates whether the
 * list was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.LIST(OCA.OcaObjectIdentification));
OcaBlock.prototype.GetMembers = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 5, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the list of block members. Recurses inner blocks. Each inner
 * block is included in the returned list as a single object, amd its
 * contents are enumerated. The return value indicates whether the list
 * was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.LIST(OCA.OcaBlockMember));
OcaBlock.prototype.GetMembersRecursive = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 6, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Adds a signal path to the block. The return value indicates whether
 * the signal path was successfully added.
 */
(function() {
var as = new SP.signature(OCA.OcaSignalPath);
var rs = new SP.signature(SP.UINT16);
OcaBlock.prototype.AddSignalPath = function(Path) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 7, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Deletes a signal path from the block. The return value indicates
 * whether the signal path was successfully added.
 */
(function() {
var as = new SP.signature(SP.UINT16);
OcaBlock.prototype.DeleteSignalPath = function(Index) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 8, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the map of signal paths in the block. Does not recurse inner
 * blocks. The return value indicates whether the list was successfully
 * retrieved.
 */
(function() {
var rs = new SP.signature(SP.MAP(SP.UINT16, OCA.OcaSignalPath));
OcaBlock.prototype.GetSignalPaths = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 9, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the mapof signal paths in the block. Recurses inner blocks. The
 * return value indicates whether the list was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.MAP(SP.UINT16, OCA.OcaSignalPath));
OcaBlock.prototype.GetSignalPathsRecursive = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 10, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the identifier of the paramset most recently applied to this
 * block.
 */
(function() {
var rs = new SP.signature(SP.UINT16);
OcaBlock.prototype.GetMostRecentParamSetIdentifier = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 11, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Applies the referenced paramset to this block, and sets the
 * MostRecentParamSet property. The return value indicates whether the
 * paramset was successfully applied.
 */
(function() {
var rs = new SP.signature(SP.UINT16);
OcaBlock.prototype.ApplyParamSet = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 12, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Returns a paramset library volume data block which represents the
 * current state of the block -- i.e. a "snapshot".
 */
(function() {
var rs = new SP.signature(OCA.OcaLibVolData_ParamSet);
OcaBlock.prototype.GetCurrentParamSetData = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 13, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Stores a paramset library volume data block which represents the
 * current state of the block ("snapshot") in the given library.
 * <b>Replaces </b>the library volume at the specified LibVolIdentifier.
 */
(function() {
var as = new SP.signature(SP.UINT16);
OcaBlock.prototype.StoreCurrentParamSetData = function(LibVolIdentifier) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 14, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the global blocktype. The return value indicates whether the type
 * was successfully retrieved. If this block has no global blocktype, the
 * <b>Authority</b> field of the returned <b>GlobalType</b> parameter
 * will be zero. <b>Added in version 2 of this class.</b>
 */
(function() {
var rs = new SP.signature(OCA.OcaGlobalBlockTypeIdentifier);
OcaBlock.prototype.GetGlobalType = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 15, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the block's ONo map. The return value indicates whether the map
 * was successfully retrieved. <b>Added in version 2 of this class.</b>
 */
(function() {
var rs = new SP.signature(SP.MAP(SP.UINT32, SP.UINT32));
OcaBlock.prototype.GetONoMap = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 16, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Returns object identifications of all objects in the block that match
 * the given Role search string and Class ID. Return value indicates
 * whether the method succeeded. <b>Added in version 2 of this class.</b>
 */
(function() {
var as = new SP.signature(SP.STRING, SP.UINT8, SP.BLOB16, SP.UINT16);
var rs = new SP.signature(SP.LIST(OCA.OcaObjectSearchResult));
OcaBlock.prototype.FindObjectsByRole = function(SearchName, NameComparisonType, SearchClassID, ResultFlags) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 17, 4,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Returns block member descriptors of all objects in the block and all
 * contained blocks that match the given Role search string and Class ID.
 * <b>Added in version 2 of this class.</b>
 */
(function() {
var as = new SP.signature(SP.STRING, SP.UINT8, SP.BLOB16, SP.UINT16);
var rs = new SP.signature(SP.LIST(OCA.OcaObjectSearchResult));
OcaBlock.prototype.FindObjectsByRoleRecursive = function(SearchName, NameComparisonType, SearchClassID, ResultFlags) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 18, 4,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Returns object identifications of all objects with the given name
 * path. <b>Added in version 2 of this class.</b>
 */
(function() {
var as = new SP.signature(SP.LIST(SP.STRING), SP.UINT16);
var rs = new SP.signature(SP.LIST(OCA.OcaObjectSearchResult));
OcaBlock.prototype.FindObjectsByPath = function(SearchPath, ResultFlags) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 20, 2,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Returns block member descriptors of all objects in the block and all
 * contained blocks that match the given Label search string and Class
 * ID. <b>Added in version 2 of this class.</b>
 */
(function() {
var as = new SP.signature(SP.STRING, SP.UINT8, SP.BLOB16, SP.UINT16);
var rs = new SP.signature(SP.LIST(OCA.OcaObjectSearchResult));
OcaBlock.prototype.FindObjectsByLabelRecursive = function(SearchName, NameComparisonType, SearchClassID, ResultFlags) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 19, 4,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd, rs);
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
        ProtoPorts: new Property(new SP.signature(SP.LIST(OCA.OcaProtoPort)), 3, 1, false, false, 0),
        ProtoMembers: new Property(new SP.signature(SP.LIST(OCA.OcaProtoObjectIdentification)), 3, 2, false, false, 0),
        ProtoSignalPaths: new Property(new SP.signature(SP.MAP(SP.UINT16, OCA.OcaProtoSignalPath)), 3, 3, false, false, 0),
        GlobalType: new Property(new SP.signature(OCA.OcaGlobalBlockTypeIdentifier), 3, 4, false, false, 0),
    }),
    ClassID: "\u0001\u0001\u0004",
    ClassVersion: 2,
    ClassName: "OcaBlockFactory",
});
/**
 * Defines a proto-port in the factory. If proto-port already exists, it
 * is replaced with the one from this call. The return value indicates
 * whether the proto-port was successfully added.
 */
(function() {
var as = new SP.signature(SP.STRING, SP.UINT8);
var rs = new SP.signature(OCA.OcaProtoPortID);
OcaBlockFactory.prototype.DefineProtoPort = function(name, portmode) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 1, 2,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Deletes a proto-port from the factory. The return value indicates
 * whether the proto-port was successfully deleted.
 */
(function() {
var as = new SP.signature(OCA.OcaProtoPortID);
OcaBlockFactory.prototype.UndefineProtoPort = function(ProtoPortID) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 2, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the factory's list of proto-ports. The return value indicates
 * whether the list was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.LIST(OCA.OcaProtoPort));
OcaBlockFactory.prototype.GetProtoPorts = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 3, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Defines a proto-member of the given class in the factory. The most
 * current version of the class is used. The return value indicates
 * whether the proto-member was successfully defined.
 */
/**
 * Defines a proto-member which will be instantiated by a specified
 * factory when the block is built. The return value indicates whether
 * the proto-member was successfully defined.
 */
(function() {
var as = new SP.signature(SP.UINT32);
var rs = new SP.signature(SP.UINT32);
OcaBlockFactory.prototype.DefineProtoMemberUsingFactory = function(FactoryONo) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 5, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Deletes a proto-member from the factory. Deletes all proto-signal
 * paths attached to its ports. The return value indicates whether the
 * member was successfully deleted.
 */
(function() {
var as = new SP.signature(SP.UINT32);
OcaBlockFactory.prototype.UndefineProtoMember = function(ProtoObjectNumber) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 6, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the factory's list of proto-members. Does not recurse inner
 * proto-blocks. The return value indicates whether the list was
 * successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.LIST(OCA.OcaProtoObjectIdentification));
OcaBlockFactory.prototype.GetProtoMembers = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 7, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Defines a proto-signal path in the factory. The return value indicates
 * whether the proto-signal path was successfully defined.
 */
(function() {
var as = new SP.signature(OCA.OcaProtoSignalPath);
var rs = new SP.signature(SP.UINT16);
OcaBlockFactory.prototype.DefineProtoSignalPath = function(Path) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 8, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Deletes a proto-signal path from the factory. The return value
 * indicates whether the signal path was successfully added.
 */
(function() {
var rs = new SP.signature(SP.UINT16);
OcaBlockFactory.prototype.UndefineProtoSignalPath = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 9, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the factory's list of proto-signal paths. Map key is proto-signal
 * path ID. Does not recurse inner proto-blocks. The return value
 * indicates whether the list was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.MAP(SP.UINT16, OCA.OcaProtoSignalPath));
OcaBlockFactory.prototype.GetProtoSignalPaths = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 10, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the global type identifier for blocks created by this factory.
 * The return value indicates whether the identifier was successfully
 * retrieved. <b>Added in version 2 of this class.</b>
 */
(function() {
var rs = new SP.signature(OCA.OcaGlobalBlockTypeIdentifier);
OcaBlockFactory.prototype.GetGlobalType = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 11, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the global type identifier for blocks created by this factory.
 * The return value indicates whether the identifier was successfully
 * set. <b>Added in version 2 of this class.</b>
 */
(function() {
var as = new SP.signature(OCA.OcaGlobalBlockTypeIdentifier);
OcaBlockFactory.prototype.SetGlobalType = function(GlobalType) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 12, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();


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
 */
function OcaMatrix(ObjectNumber, device) {
    OcaWorker.call(this, ObjectNumber, device);
};
mod.OcaMatrix = OcaMatrix;
OcaMatrix.prototype = Object.assign(Object.create(OcaWorker.prototype), {
    __oca_properties__: OcaWorker.prototype.__oca_properties__.extend({
        X: new Property(new SP.signature(SP.UINT16), 3, 1, false, false, 0),
        Y: new Property(new SP.signature(SP.UINT16), 3, 2, false, false, 0),
        xSize: new Property(new SP.signature(SP.UINT16), 3, 3, false, false, 0),
        ySize: new Property(new SP.signature(SP.UINT16), 3, 4, false, false, 0),
        Members: new Property(new SP.signature(SP.LIST2D(SP.UINT32)), 3, 5, false, false, 0),
        Proxy: new Property(new SP.signature(SP.UINT32), 3, 6, false, false, 0),
        PortsPerRow: new Property(new SP.signature(SP.UINT8), 3, 7, false, false, 0),
        PortsPerColumn: new Property(new SP.signature(SP.UINT8), 3, 8, false, false, 0),
    }),
    ClassID: "\u0001\u0001\u0005",
    ClassVersion: 2,
    ClassName: "OcaMatrix",
});
/**
 * Gets coordinates of the currently active area (cell, row, column, or
 * whole matrix). The returned status indicates whether the operation was
 * successful.
 */
(function() {
var rs = new SP.signature(SP.UINT16, SP.UINT16);
OcaMatrix.prototype.GetCurrentXY = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the currently active area (cell, row, column, or whole matrix).
 * The returned status indicates whether the operation was successful.
 */
(function() {
var as = new SP.signature(SP.UINT16, SP.UINT16);
OcaMatrix.prototype.SetCurrentXY = function(x, y) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 2, 2,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the matrix size. The returned status indicates whether the
 * operation was successful.
 */
(function() {
var rs = new SP.signature(SP.UINT16, SP.UINT16, SP.UINT16, SP.UINT16, SP.UINT16, SP.UINT16);
OcaMatrix.prototype.GetSize = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 3, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the matrix size. The returned status indicates whether the
 * operation was successful. This method will not be available for
 * fixed-size matrices.
 */
(function() {
var as = new SP.signature(SP.UINT16, SP.UINT16);
OcaMatrix.prototype.SetSize = function(xSize, ySize) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 4, 2,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Retrieves the 2D array of member object numbers. Cells for which no
 * member has been defined will return Zero as the object number.
 */
(function() {
var rs = new SP.signature(SP.LIST2D(SP.UINT32));
OcaMatrix.prototype.GetMembers = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 5, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the entire 2D array of member object numbers. Row and column size
 * of the <b>members</b> parameter must be equal to the current size of
 * the matrix.
 */
(function() {
var as = new SP.signature(SP.LIST2D(SP.UINT32));
OcaMatrix.prototype.SetMembers = function(members) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 6, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Retrieves the object number of the member at position (x,y). If no
 * member is defined at this position, returns an object number value of
 * Zero.
 */
(function() {
var as = new SP.signature(SP.UINT16, SP.UINT16);
var rs = new SP.signature(SP.UINT32);
OcaMatrix.prototype.GetMember = function(x, y) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 7, 2,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Installs a particular object as a member at position (x,y). If another
 * object was at this position, it is removed.
 */
(function() {
var as = new SP.signature(SP.UINT16, SP.UINT16, SP.UINT32);
OcaMatrix.prototype.SetMember = function(x, y, memberONo) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 8, 3,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the object number of the matrix proxy.
 */
(function() {
var rs = new SP.signature(SP.UINT32);
OcaMatrix.prototype.GetProxy = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 9, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the object number of the matrix proxy.
 */
(function() {
var as = new SP.signature(SP.UINT32);
OcaMatrix.prototype.SetProxy = function(ONo) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 10, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the number of ports per row. These are input ports.
 */
(function() {
var rs = new SP.signature(SP.UINT8);
OcaMatrix.prototype.GetPortsPerRow = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 11, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the number of ports per row. These must be input ports.
 */
(function() {
var as = new SP.signature(SP.UINT8);
OcaMatrix.prototype.SetPortsPerRow = function(Ports) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 12, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the number of ports per output channel. These are output ports.
 */
(function() {
var rs = new SP.signature(SP.UINT8);
OcaMatrix.prototype.GetPortsPerColumn = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 13, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the number of ports per column. These must be output ports.
 */
(function() {
var as = new SP.signature(SP.UINT8);
OcaMatrix.prototype.SetPortsPerColumn = function(Ports) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 14, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Sets the currently active area (cell, row, column, or whole matrix)
 * and locks it. Fails if the referenced members cannot all be locked.
 * The returned status indicates whether the operation was successful.
 */
(function() {
var as = new SP.signature(SP.UINT16, SP.UINT16);
OcaMatrix.prototype.SetCurrentXYLock = function(x, y) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 15, 2,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
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
    return this.device.send_command(cmd);
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
        Label: new Property(new SP.signature(SP.STRING), 2, 1, false, false, 0),
        Owner: new Property(new SP.signature(SP.UINT32), 2, 2, false, false, 0),
    }),
    ClassID: "\u0001\u0002",
    ClassVersion: 2,
    ClassName: "OcaAgent",
});
/**
 * Gets the value of the Label property. The return value indicates
 * whether the property was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.STRING);
OcaAgent.prototype.GetLabel = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 2, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the Label property. The return value indicates
 * whether the property was successfully set.
 */
(function() {
var as = new SP.signature(SP.STRING);
OcaAgent.prototype.SetLabel = function(Label) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 2, 2, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the value of the Owner property. The return value indicates
 * whether the property was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT32);
OcaAgent.prototype.GetOwner = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 2, 3, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Returns path from the given object down to root. The return value
 * indicates whether the operation succeeded. Added in version 2.
 */
(function() {
var rs = new SP.signature(SP.LIST(SP.STRING), SP.LIST(SP.UINT32));
OcaAgent.prototype.GetPath = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 2, 4, 0);
    return this.device.send_command(cmd, rs);
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
        ActuatorOrSensor: new Property(new SP.signature(SP.BOOLEAN), 3, 1, false, false, 0),
        Groups: new Property(new SP.signature(SP.LIST(OCA.OcaGrouperGroup)), 3, 2, false, false, 0),
        Citizens: new Property(new SP.signature(SP.LIST(OCA.OcaGrouperCitizen)), 3, 3, false, false, 0),
        Enrollments: new Property(new SP.signature(SP.LIST(OCA.OcaGrouperEnrollment)), 3, 4, false, false, 0),
        Mode: new Property(new SP.signature(SP.UINT8), 3, 5, false, false, 0),
    }),
    ClassID: "\u0001\u0002\u0002",
    ClassVersion: 2,
    ClassName: "OcaGrouper",
});
/**
 * Adds a group to the grouper and returns its object number. (The
 * group's network address will be the same as the grouper's). The return
 * value indicates whether the group was successfully added.
 */
(function() {
var as = new SP.signature(SP.STRING);
var rs = new SP.signature(SP.UINT16, SP.UINT32);
OcaGrouper.prototype.AddGroup = function(Name) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 1, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Deletes a group from the grouper. The return value indicates whether
 * the group was successfully deleted. Note: index values of deleted
 * groups are not reused during the lifetime of the grouper instance.
 */
(function() {
var as = new SP.signature(SP.UINT16);
OcaGrouper.prototype.DeleteGroup = function(Index) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 2, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the count of groups owned by this grouper. The return value
 * indicates whether the count was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT16);
OcaGrouper.prototype.GetGroupCount = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 3, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the list of groups owned by this grouper. The return value
 * indicates whether the list was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.LIST(OCA.OcaGrouperGroup));
OcaGrouper.prototype.GetGroupList = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 4, 0);
    return this.device.send_command(cmd, rs);
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
var as = new SP.signature(OCA.OcaGrouperCitizen);
var rs = new SP.signature(SP.UINT16);
OcaGrouper.prototype.AddCitizen = function(Citizen) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 5, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Delete a citizen from the grouper (and therefore from all of its
 * groups). The return value indicates whether the citizen was
 * successfully deleted. Note: index values of deleted citizens are not
 * reused during the lifetime of the grouper instance.
 */
(function() {
var as = new SP.signature(SP.UINT16);
OcaGrouper.prototype.DeleteCitizen = function(Index) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 6, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the count of citizens registered in this grouper. The return
 * value indicates whether the count was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT16);
OcaGrouper.prototype.GetCitizenCount = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 7, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the list of citizens registered in this grouper. The return value
 * indicates whether the list was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.LIST(OCA.OcaGrouperCitizen));
OcaGrouper.prototype.GetCitizenList = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 8, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets membership status for given target in given group. The return
 * value indicates whether the status was successfully retrieved.
 */
(function() {
var as = new SP.signature(OCA.OcaGrouperEnrollment);
var rs = new SP.signature(SP.BOOLEAN);
OcaGrouper.prototype.GetEnrollment = function(Enrollment) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 9, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets membership status for given target in given group. The return
 * value indicates whether the status was successfully set.
 */
(function() {
var as = new SP.signature(OCA.OcaGrouperEnrollment, SP.BOOLEAN);
OcaGrouper.prototype.SetEnrollment = function(Enrollment, IsMember) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 10, 2,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the list of members of the given group. The return value
 * indicates whether the list was successfully retrieved.
 */
(function() {
var as = new SP.signature(SP.UINT16);
var rs = new SP.signature(SP.LIST(OCA.OcaGrouperCitizen));
OcaGrouper.prototype.GetGroupMemberList = function(Index) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 11, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the value of the ActuatorOrSensor property. The return value
 * indicates whether the value was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.BOOLEAN);
OcaGrouper.prototype.GetActuatorOrSensor = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 12, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the ActuatorOrSensor property. The return value
 * indicates whether the value was successfully set.
 */
(function() {
var as = new SP.signature(SP.BOOLEAN);
OcaGrouper.prototype.SetActuatorOrSensor = function(ActuatorOrSensor) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 13, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the value of the Mode property. The return value indicates
 * whether the value was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT8);
OcaGrouper.prototype.GetMode = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 14, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the Mode property. The return value indicates
 * whether the value was successfully set.
 */
(function() {
var as = new SP.signature(SP.UINT8);
OcaGrouper.prototype.SetMode = function(Mode) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 15, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
OcaGrouper.prototype.onStatusChange = function(callback) {
    return this.device.add_subscription(new OCA.OcaEvent(this.ObjectNumber, new OCA.OcaEventID(3, 1)), callback);
};


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
        State: new Property(new SP.signature(SP.UINT8), 3, 1, false, false, 0),
        ObservedProperty: new Property(new SP.signature(OCA.OcaProperty), 3, 2, false, false, 0),
        Threshold: new Property(new SP.signature(SP.FLOAT64), 3, 3, false, false, 0),
        Operator: new Property(new SP.signature(SP.UINT8), 3, 4, false, false, 0),
        TwoWay: new Property(new SP.signature(SP.BOOLEAN), 3, 5, false, false, 0),
        Hysteresis: new Property(new SP.signature(SP.FLOAT64), 3, 6, false, false, 0),
        Period: new Property(new SP.signature(SP.FLOAT32), 3, 7, false, false, 0),
    }),
    ClassID: "\u0001\u0002\u0004",
    ClassVersion: 2,
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
var rs = new SP.signature(SP.FLOAT64);
OcaNumericObserver.prototype.GetLastObservation = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the observer's state. The return value indicates whether the
 * state was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT8);
OcaNumericObserver.prototype.GetState = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 2, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the identification of the property that the observer observes.
 * The return value indicates whether the identification was successfully
 * retrieved.
 */
(function() {
var rs = new SP.signature(OCA.OcaProperty);
OcaNumericObserver.prototype.GetObservedProperty = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 3, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the identification of the property that the observer observes.
 * The return value indicates whether the identification was successfully
 * set.
 */
(function() {
var as = new SP.signature(OCA.OcaProperty);
OcaNumericObserver.prototype.SetObservedProperty = function(property) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 4, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the value of the <b>Threshold </b>property. The return value
 * indicates whether the threshold value was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.FLOAT64);
OcaNumericObserver.prototype.GetThreshold = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 5, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the <b>Threshold </b>property. The return value
 * indicates whether the threshold value was successfully set.
 */
(function() {
var as = new SP.signature(SP.FLOAT64);
OcaNumericObserver.prototype.SetThreshold = function(Threshold) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 6, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the value of the <b>Operator </b>property. The return value
 * indicates whether the property was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT8);
OcaNumericObserver.prototype.GetOperator = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 7, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the <b>Operator </b>property. The return value
 * indicates whether the operator was successfully set.
 */
(function() {
var as = new SP.signature(SP.UINT8);
OcaNumericObserver.prototype.SetOperator = function(operator) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 8, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the value of the <b>TwoWay </b>property. The return value
 * indicates whether the property was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.BOOLEAN);
OcaNumericObserver.prototype.GetTwoWay = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 9, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the <b>TwoWay </b>property. The return value
 * indicates whether the property was successfully set.
 */
(function() {
var as = new SP.signature(SP.BOOLEAN);
OcaNumericObserver.prototype.SetTwoWay = function(twoWay) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 10, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the value of the <b>Hysteresis </b>property. The return value
 * indicates whether the property was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.FLOAT64);
OcaNumericObserver.prototype.GetHysteresis = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 11, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the <b>Hysteresis </b>property. The return value
 * indicates whether the property was successfully set.
 */
(function() {
var as = new SP.signature(SP.FLOAT64);
OcaNumericObserver.prototype.SetHysteresis = function(hysteresis) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 12, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the value of the <b>Period </b>property. The return value
 * indicates whether the property was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.FLOAT32);
OcaNumericObserver.prototype.GetPeriod = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 13, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the <b>Period </b>property. The return value
 * indicates whether the property was successfully set.
 */
(function() {
var as = new SP.signature(SP.FLOAT32);
OcaNumericObserver.prototype.SetPeriod = function(period) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 14, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
OcaNumericObserver.prototype.onObservation = function(callback) {
    return this.device.add_subscription(new OCA.OcaEvent(this.ObjectNumber, new OCA.OcaEventID(3, 1)), callback);
};


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
        DataType: new Property(new SP.signature(SP.UINT8), 3, 1, false, false, 0),
        Access: new Property(new SP.signature(SP.UINT8), 3, 2, false, false, 0),
        Volumes: new Property(new SP.signature(SP.MAP(SP.UINT32, OCA.OcaLibVol)), 3, 3, false, false, 0),
    }),
    ClassID: "\u0001\u0002\u0005",
    ClassVersion: 2,
    ClassName: "OcaLibrary",
});
/**
 * Adds a volume to the library and returns its volume ID. The return
 * value indicates whether the volume was successfully added.
 */
(function() {
var as = new SP.signature(OCA.OcaLibVol);
var rs = new SP.signature(SP.UINT32);
OcaLibrary.prototype.AddVolume = function(Volume) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 1, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Replaces a volume in the library at the given volume ID. The return
 * value indicates whether the volume was successfully replaced.
 */
(function() {
var as = new SP.signature(SP.UINT32, OCA.OcaLibVol);
OcaLibrary.prototype.ReplaceVolume = function(ID, Volume) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 2, 2,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Deletes a volume from the library. The return value indicates whether
 * the group was successfully deleted.
 */
(function() {
var as = new SP.signature(SP.UINT32);
OcaLibrary.prototype.DeleteVolume = function(ID) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 3, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Retrieves a library volume. The return value indicates whether the
 * volume was successfully retrieved.
 */
(function() {
var rs = new SP.signature(OCA.OcaLibVol);
OcaLibrary.prototype.GetVolume = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 4, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the count of volumes in this library. The return value indicates
 * whether the count was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT16);
OcaLibrary.prototype.GetVolumeCount = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 5, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the list of volumes held in this library. The return value
 * indicates whether the list was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.MAP(SP.UINT32, OCA.OcaLibVol));
OcaLibrary.prototype.GetVolumes = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 6, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets allowed access mode for this library. The return value indicates
 * whether the property was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT8);
OcaLibrary.prototype.GetAccess = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 7, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets allowed access mode for this library. The return value indicates
 * whether the property was successfully set. Not implemented for static,
 * manufacturer-supplied libraries.
 */
(function() {
var as = new SP.signature(SP.UINT8);
OcaLibrary.prototype.SetAccess = function(Access) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 8, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();


/**
 * A power supply.
 */
function OcaPowerSupply(ObjectNumber, device) {
    OcaAgent.call(this, ObjectNumber, device);
};
mod.OcaPowerSupply = OcaPowerSupply;
OcaPowerSupply.prototype = Object.assign(Object.create(OcaAgent.prototype), {
    __oca_properties__: OcaAgent.prototype.__oca_properties__.extend({
        Type: new Property(new SP.signature(SP.UINT8), 3, 1, false, false, 0),
        ModelInfo: new Property(new SP.signature(SP.STRING), 3, 2, false, false, 0),
        State: new Property(new SP.signature(SP.UINT8), 3, 3, false, false, 0),
        Charging: new Property(new SP.signature(SP.BOOLEAN), 3, 4, false, false, 0),
        LoadFractionAvailable: new Property(new SP.signature(SP.FLOAT32), 3, 5, true, false, 0),
        StorageFractionAvailable: new Property(new SP.signature(SP.FLOAT32), 3, 6, true, false, 0),
        Location: new Property(new SP.signature(SP.UINT8), 3, 7, true, false, 0),
    }),
    ClassID: "\u0001\u0002\u0007",
    ClassVersion: 3,
    ClassName: "OcaPowerSupply",
});
/**
 * Gets the type of the power supply. Return value indicates whether the
 * data was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT8);
OcaPowerSupply.prototype.GetType = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the power supply's model information text. Return value indicates
 * whether the data was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.STRING);
OcaPowerSupply.prototype.GetModelInfo = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 2, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the state of the power supply. Return value indicates whether the
 * data was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT8);
OcaPowerSupply.prototype.GetState = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 3, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Changes the power supply's state. Return value indicates whether the
 * state was successfully changed.
 */
(function() {
var as = new SP.signature(SP.UINT8);
OcaPowerSupply.prototype.SetState = function(state) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 4, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the value of property <b>Charging</b>. Return value indicates
 * whether the value was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.BOOLEAN);
OcaPowerSupply.prototype.GetCharging = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 5, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the available load fraction. Return value indicates whether the
 * data was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.FLOAT32);
OcaPowerSupply.prototype.GetLoadFractionAvailable = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 6, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the available storage fraction. Return value indicates whether
 * the data was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.FLOAT32);
OcaPowerSupply.prototype.GetStorageFractionAvailable = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 7, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the power supply physical location. Return value indicates
 * whether the data was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT8);
OcaPowerSupply.prototype.GetLocation = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 8, 0);
    return this.device.send_command(cmd, rs);
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
    ClassVersion: 2,
    ClassName: "OcaEventHandler",
});
/**
 * Generic empty callback method for events. Application developers can
 * override this method in a derived class to add behavior.
 */
(function() {
var as = new SP.signature(SP.BLOB, OCA.OcaEvent);
OcaEventHandler.prototype.OnEvent = function(Context, eventData) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 1, 2,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
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
        State: new Property(new SP.signature(SP.UINT8), 3, 1, false, false, 0),
        ObservedProperties: new Property(new SP.signature(SP.LIST(OCA.OcaProperty)), 3, 2, false, false, 0),
        Threshold: new Property(new SP.signature(SP.FLOAT64), 3, 3, false, false, 0),
        Operator: new Property(new SP.signature(SP.UINT8), 3, 4, false, false, 0),
        TwoWay: new Property(new SP.signature(SP.BOOLEAN), 3, 5, false, false, 0),
        Hysteresis: new Property(new SP.signature(SP.FLOAT64), 3, 6, false, false, 0),
        Period: new Property(new SP.signature(SP.FLOAT32), 3, 7, false, false, 0),
    }),
    ClassID: "\u0001\u0002\t",
    ClassVersion: 2,
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
var rs = new SP.signature(SP.LIST(SP.FLOAT64));
OcaNumericObserverList.prototype.GetLastObservation = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the observer's state. The return value indicates whether the
 * state was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT8);
OcaNumericObserverList.prototype.GetState = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 2, 0);
    return this.device.send_command(cmd, rs);
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
var rs = new SP.signature(SP.LIST(OCA.OcaProperty));
OcaNumericObserverList.prototype.GetObservedProperties = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 3, 0);
    return this.device.send_command(cmd, rs);
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
var as = new SP.signature(SP.LIST(OCA.OcaProperty));
OcaNumericObserverList.prototype.SetObservedProperties = function(property) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 4, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the value of the <b>Threshold </b>property. The return value
 * indicates whether the threshold value was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.FLOAT64);
OcaNumericObserverList.prototype.GetThreshold = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 5, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the <b>Threshold </b>property. The return value
 * indicates whether the threshold value was successfully set.
 */
(function() {
var as = new SP.signature(SP.FLOAT64);
OcaNumericObserverList.prototype.SetThreshold = function(Threshold) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 6, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the value of the <b>Operator </b>property. The return value
 * indicates whether the property was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT8);
OcaNumericObserverList.prototype.GetOperator = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 7, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the <b>Operator </b>property. The return value
 * indicates whether the operator was successfully set.
 */
(function() {
var as = new SP.signature(SP.UINT8);
OcaNumericObserverList.prototype.SetOperator = function(operator) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 8, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the value of the <b>TwoWay </b>property. The return value
 * indicates whether the property was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.BOOLEAN);
OcaNumericObserverList.prototype.GetTwoWay = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 9, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the <b>TwoWay </b>property. The return value
 * indicates whether the property was successfully set.
 */
(function() {
var as = new SP.signature(SP.BOOLEAN);
OcaNumericObserverList.prototype.SetTwoWay = function(twoWay) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 10, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the value of the <b>Hysteresis </b>property. The return value
 * indicates whether the property was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.FLOAT64);
OcaNumericObserverList.prototype.GetHysteresis = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 11, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the <b>Hysteresis </b>property. The return value
 * indicates whether the property was successfully set.
 */
(function() {
var as = new SP.signature(SP.FLOAT64);
OcaNumericObserverList.prototype.SetHysteresis = function(hysteresis) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 12, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the value of the <b>Period </b>property. The return value
 * indicates whether the property was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.FLOAT32);
OcaNumericObserverList.prototype.GetPeriod = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 13, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the <b>Period </b>property. The return value
 * indicates whether the property was successfully set.
 */
(function() {
var as = new SP.signature(SP.FLOAT32);
OcaNumericObserverList.prototype.SetPeriod = function(period) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 14, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
OcaNumericObserverList.prototype.onObservation = function(callback) {
    return this.device.add_subscription(new OCA.OcaEvent(this.ObjectNumber, new OCA.OcaEventID(3, 1)), callback);
};


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
 */
function OcaTask(ObjectNumber, device) {
    OcaAgent.call(this, ObjectNumber, device);
};
mod.OcaTask = OcaTask;
OcaTask.prototype = Object.assign(Object.create(OcaAgent.prototype), {
    __oca_properties__: OcaAgent.prototype.__oca_properties__.extend({
        Status: new Property(new SP.signature(OCA.OcaTaskStatus), 3, 1, false, false, 0),
        Slot: new Property(new SP.signature(SP.UINT16), 3, 2, false, false, 0),
        TimeMode: new Property(new SP.signature(SP.UINT8), 3, 3, false, false, 0),
        TimeUnits: new Property(new SP.signature(SP.UINT8), 3, 4, false, false, 0),
        ClockONo: new Property(new SP.signature(SP.UINT32), 3, 5, false, false, 0),
        StartTime: new Property(new SP.signature(SP.UINT64), 3, 6, false, false, 0),
        Duration: new Property(new SP.signature(SP.FLOAT32), 3, 7, false, false, 0),
    }),
    ClassID: "\u0001\u0002\f",
    ClassVersion: 1,
    ClassName: "OcaTask",
});
/**
 * Executes the given command. The return value indicates whether the
 * command was successfully executed.
 */
(function() {
var as = new SP.signature(SP.UINT8, SP.BLOB);
OcaTask.prototype.Control = function(Command, StateParameter) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 1, 2,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets current status of ramper. The return value indicates whether the
 * status was successfully retrieved.
 */
(function() {
var rs = new SP.signature(OCA.OcaTaskStatus);
OcaTask.prototype.GetStatus = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 2, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets task slot index. The return value indicates whether the value was
 * successfully retrieved. Returns zero if task is not assigned to a
 * slot. Returns NotImplemented status if device does not use slots.
 */
(function() {
var rs = new SP.signature(SP.UINT16);
OcaTask.prototype.GetSlot = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 3, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets task slot index. The return value indicates whether the value was
 * successfully set. If a value of zero is provided, removes task from
 * all slots. Returns NotImplemented status if device does not use slots.
 */
(function() {
var as = new SP.signature(SP.UINT16);
OcaTask.prototype.SetSlot = function(ID) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 4, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets task time mode (absolute or relative). The return value indicates
 * whether the time mode was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT8);
OcaTask.prototype.GetTimeMode = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 5, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets task time mode (absolute or relative). The return value indicates
 * whether the time mode was successfully set.
 */
(function() {
var as = new SP.signature(SP.UINT8);
OcaTask.prototype.SetTimeMode = function(TimeMode) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 6, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets task time units (seconds or samples). The return value indicates
 * whether the time mode was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT8);
OcaTask.prototype.GetTimeUnits = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 7, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets task time units (seconds or samples). The return value indicates
 * whether the time units were successfully set.
 */
(function() {
var as = new SP.signature(SP.UINT8);
OcaTask.prototype.SetTimeUnits = function(TimeUnits) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 8, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets object number of clock source (OcaTimeSource if
 * TimeUnits=seconds, or OcaMediaClock3 if TimeUnits=samples) . A zero
 * value indicates the clock source is the device's internal time or
 * sample clock. The return value indicates whether the object number was
 * successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT32);
OcaTask.prototype.GetClockONo = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 9, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets object number of clock source (OcaTimeSource if
 * TimeUnits=seconds, or OcaMediaClock3 if TimeUnits=samples) . A zero
 * value indicates the clock source is the device's internal time or
 * sample clock. The return value indicates whether the object number was
 * successfully set.
 */
(function() {
var as = new SP.signature(SP.UINT32);
OcaTask.prototype.SetClockONo = function(ClockONo) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 10, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets task start time. The return value indicates whether the start
 * time was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT64);
OcaTask.prototype.GetStartTime = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 11, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets task start time. The return value indicates whether the start
 * time was successfully set.
 */
(function() {
var as = new SP.signature(SP.UINT64);
OcaTask.prototype.SetStartTime = function(TimeMode) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 12, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets task duration. The return value indicates whether the duration
 * was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaTask.prototype.GetDuration = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 13, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets task duration. The return value indicates whether the duration
 * was successfully set.
 */
(function() {
var as = new SP.signature(SP.FLOAT32);
OcaTask.prototype.SetDuration = function(Duration) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 14, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();


/**
 * Base class for constructors of OcaTask objects. Used by the OcaBlock
 * method ConstructMemberUsingFactory(...) to create tasks.
 */
function OcaTaskFactory(ObjectNumber, device) {
    OcaAgent.call(this, ObjectNumber, device);
};
mod.OcaTaskFactory = OcaTaskFactory;
OcaTaskFactory.prototype = Object.assign(Object.create(OcaAgent.prototype), {
    __oca_properties__: OcaAgent.prototype.__oca_properties__.extend({
        Slot: new Property(new SP.signature(SP.UINT16), 3, 1, false, false, 0),
        TimeMode: new Property(new SP.signature(SP.UINT8), 3, 2, false, false, 0),
        StartTime: new Property(new SP.signature(SP.UINT64), 3, 3, false, false, 0),
        Duration: new Property(new SP.signature(SP.FLOAT32), 3, 4, false, false, 0),
    }),
    ClassID: "\u0001\u0002\r",
    ClassVersion: 1,
    ClassName: "OcaTaskFactory",
});
/**
 * Executes the given command. The return value indicates whether the
 * command was successfully executed.
 */
(function() {
var as = new SP.signature(SP.UINT8);
OcaTaskFactory.prototype.Control = function(Command) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 1, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets current state of ramper. The return value indicates whether the
 * state was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT8);
OcaTaskFactory.prototype.GetState = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 2, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets task slot ID. The return value indicates whether the value was
 * successfully retrieved. Returns zero if task is not assigned to a
 * slot. Returns NotImplemented status if device does not use slots.
 */
(function() {
var rs = new SP.signature(SP.UINT16);
OcaTaskFactory.prototype.GetSlot = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 3, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets task slot ID. The return value indicates whether the value was
 * successfully set. If a value of zero is provided, removes task from
 * all slots. Returns NotImplemented status if device does not use slots.
 */
(function() {
var as = new SP.signature(SP.UINT16);
OcaTaskFactory.prototype.SetSlot = function(ID) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 4, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets task time mode (absolute or relative). The return value indicates
 * whether the time mode was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT8);
OcaTaskFactory.prototype.GetTimeMode = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 5, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets task time mode (absolute or relative). The return value indicates
 * whether the time mode was successfully set.
 */
(function() {
var as = new SP.signature(SP.UINT8);
OcaTaskFactory.prototype.SetTimeMode = function(TimeMode) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 6, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets task start time. The return value indicates whether the start
 * time was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT64);
OcaTaskFactory.prototype.GetStartTime = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 7, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets task start time. The return value indicates whether the start
 * time was successfully set.
 */
(function() {
var as = new SP.signature(SP.UINT64);
OcaTaskFactory.prototype.SetStartTime = function(TimeMode) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 8, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets task duration. The return value indicates whether the duration
 * was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaTaskFactory.prototype.GetDuration = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 9, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets task duration. The return value indicates whether the duration
 * was successfully set.
 */
(function() {
var as = new SP.signature(SP.FLOAT32);
OcaTaskFactory.prototype.SetDuration = function(Duration) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 10, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();


/**
 * A group of tasks that may be started and stopped as a unit.
 */
function OcaTaskGroup(ObjectNumber, device) {
    OcaAgent.call(this, ObjectNumber, device);
};
mod.OcaTaskGroup = OcaTaskGroup;
OcaTaskGroup.prototype = Object.assign(Object.create(OcaAgent.prototype), {
    __oca_properties__: OcaAgent.prototype.__oca_properties__.extend({
        ID: new Property(new SP.signature(SP.UINT16), 3, 1, false, false, 0),
        Tasks: new Property(new SP.signature(SP.LIST(SP.UINT32)), 3, 2, false, false, 0),
    }),
    ClassID: "\u0001\u0002\u000e",
    ClassVersion: 1,
    ClassName: "OcaTaskGroup",
});
/**
 * Performs the requested command. The return value indicates whether the
 * operation was successful.
 */
(function() {
var as = new SP.signature(SP.UINT8, SP.BLOB);
OcaTaskGroup.prototype.Control = function(Command, StateParameter) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 1, 2,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Adds a task to the task group. The return value indicates whether the
 * task was successfully added. Optional method, may not be supported in
 * all implementations.
 */
(function() {
var as = new SP.signature(SP.UINT32);
OcaTaskGroup.prototype.AddTask = function(TaskONo) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 2, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Deletes a task from the task group. The return value indicates whether
 * the task was successfully deleted. Optional method, may not be
 * supported in all implementations.
 */
(function() {
var as = new SP.signature(SP.UINT32);
OcaTaskGroup.prototype.DeleteTask = function(TaskONo) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 3, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Retrieves the list of ONos of the tasks in the task group. The return
 * value indicates whether the list was successfully retrieved. Optional
 * method, may not be supported in all implementations.
 */
(function() {
var rs = new SP.signature(SP.LIST(SP.UINT32));
OcaTaskGroup.prototype.GetTasks = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 4, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the value of the <b>ID </b>property. The return value indicates
 * whether the value was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT16);
OcaTaskGroup.prototype.GetID = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 5, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the <b>ID </b>property. The return value indicates
 * whether the value was successfully set. Optional method, may not be
 * supported in all implementations.
 */
(function() {
var as = new SP.signature(SP.UINT16);
OcaTaskGroup.prototype.SetID = function(ID) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 6, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();


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
 */
function OcaRamperTask(ObjectNumber, device) {
    OcaTask.call(this, ObjectNumber, device);
};
mod.OcaRamperTask = OcaRamperTask;
OcaRamperTask.prototype = Object.assign(Object.create(OcaTask.prototype), {
    __oca_properties__: OcaTask.prototype.__oca_properties__.extend({
        RampedProperty: new Property(new SP.signature(OCA.OcaProperty), 4, 1, false, false, 0),
        InterpolationLaw: new Property(new SP.signature(SP.UINT8), 4, 2, false, false, 0),
        Goal: new Property(new SP.signature(SP.FLOAT64), 4, 3, false, false, 0),
    }),
    ClassID: "\u0001\u0002\f\u0001",
    ClassVersion: 1,
    ClassName: "OcaRamperTask",
});
/**
 * Gets definition of ramped property. The return value indicates whether
 * the object number was successfully retrieved.
 */
(function() {
var rs = new SP.signature(OCA.OcaProperty);
OcaRamperTask.prototype.GetRampedProperty = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Defines property to be ramped. The return value indicates whether the
 * definition was successful.
 */
(function() {
var as = new SP.signature(OCA.OcaProperty);
OcaRamperTask.prototype.SetRampedProperty = function(property) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 2, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Retrieves interpolation law setting. The return value indicates
 * whether the setting was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT8);
OcaRamperTask.prototype.GetInterpolationLaw = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 3, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets ramp interpolation law. The return value indicates whether the
 * law was successfully set.
 */
(function() {
var as = new SP.signature(SP.UINT8);
OcaRamperTask.prototype.SetInterpolationLaw = function(law) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 4, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Retrieves ramp goal value. The return value indicates whether the
 * duration was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.FLOAT64);
OcaRamperTask.prototype.GetGoal = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 5, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets ramp goal value. The return value indicates whether the duration
 * was successfully set.
 */
(function() {
var as = new SP.signature(SP.FLOAT64);
OcaRamperTask.prototype.SetGoal = function(goal) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 4, 6, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();


/**
 * A media clock, internal or external. OCA Connection Management 3
 * (OCA-CM3) version.
 */
function OcaMediaClock3(ObjectNumber, device) {
    OcaAgent.call(this, ObjectNumber, device);
};
mod.OcaMediaClock3 = OcaMediaClock3;
OcaMediaClock3.prototype = Object.assign(Object.create(OcaAgent.prototype), {
    __oca_properties__: OcaAgent.prototype.__oca_properties__.extend({
        Availability: new Property(new SP.signature(SP.UINT8), 3, 1, false, false, 0),
        TimeSourceONo: new Property(new SP.signature(SP.UINT32), 3, 2, false, false, 0),
        Offset: new Property(new SP.signature(SP.UINT64), 3, 3, false, false, 0),
        CurrentRate: new Property(new SP.signature(OCA.OcaMediaClockRate), 3, 4, false, false, 0),
    }),
    ClassID: "\u0001\u0002\u000f",
    ClassVersion: 1,
    SupportedRates: 0,
    ClassName: "OcaMediaClock3",
});
/**
 * Gets the value of the <b>Availability </b>property. The return value
 * indicates whether the value was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT8);
OcaMediaClock3.prototype.GetAvailability = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the <b>Availability </b>property. The return value
 * indicates whether the value was successfully set. Optional method, may
 * not be supported in all implementations.
 */
(function() {
var as = new SP.signature(SP.UINT8);
OcaMediaClock3.prototype.SetAvailability = function(Availability) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 2, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the current clock rate and the ONo of the associated
 * <b>OcaTimeSource </b>object. The return value indicates whether the
 * value was successfully retrieved.
 */
(function() {
var rs = new SP.signature(OCA.OcaMediaClockRate, SP.UINT32);
OcaMediaClock3.prototype.GetCurrentRate = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 3, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the clock rate and the ONo of the associated <b>OcaTimeSource
 * </b>object. The return value indicates whether the value was
 * successfully set. Optional method, may not be supported in all
 * implementations.
 */
(function() {
var as = new SP.signature(OCA.OcaMediaClockRate, SP.UINT32);
OcaMediaClock3.prototype.SetCurrentRate = function(Rate, TimeSourceONo) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 4, 2,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the offset of this media clock's time from that of the associated
 * <b>OcaTimeSource </b>object. The return value indicates whether the
 * value was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT64);
OcaMediaClock3.prototype.GetOffset = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 5, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the offset of this media clock's time from that of the associated
 * <b>OcaTimeSource </b>object. The return value indicates whether the
 * value was successfully set. Optional method, may not be supported in
 * all implementations.
 */
(function() {
var as = new SP.signature(SP.UINT64);
OcaMediaClock3.prototype.SetOffset = function(Offset) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 6, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the list of supported media clock rates for the given time
 * source. The return value indicates whether the list was successfully
 * retrieved.
 */
(function() {
var rs = new SP.signature(SP.MAP(SP.UINT32, SP.LIST(OCA.OcaMediaClockRate)));
OcaMediaClock3.prototype.GetSupportedRates = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 7, 0);
    return this.device.send_command(cmd, rs);
}
})();


/**
 * A time source, internal or external. See RFC 7273 for a detailed
 * discussion of time sources.
 */
function OcaTimeSource(ObjectNumber, device) {
    OcaAgent.call(this, ObjectNumber, device);
};
mod.OcaTimeSource = OcaTimeSource;
OcaTimeSource.prototype = Object.assign(Object.create(OcaAgent.prototype), {
    __oca_properties__: OcaAgent.prototype.__oca_properties__.extend({
        Availability: new Property(new SP.signature(SP.UINT8), 3, 1, false, false, 0),
        Protocol: new Property(new SP.signature(SP.UINT8), 3, 2, false, false, 0),
        Parameters: new Property(new SP.signature(SP.STRING), 3, 3, false, false, 0),
        ReferenceType: new Property(new SP.signature(SP.UINT8), 3, 4, false, false, 0),
        ReferenceID: new Property(new SP.signature(SP.STRING), 3, 5, false, false, 0),
        SyncStatus: new Property(new SP.signature(SP.UINT8), 3, 6, false, false, 0),
    }),
    ClassID: "\u0001\u0002\u0010",
    ClassVersion: 1,
    ClassName: "OcaTimeSource",
});
/**
 * Gets the value of the <b>Availability </b>property. The return value
 * indicates whether the value was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT8);
OcaTimeSource.prototype.GetAvailability = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the value of the <b>Protocol </b>property. The return value
 * indicates whether the value was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT8);
OcaTimeSource.prototype.GetProtocol = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 2, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the <b>Protocol </b>property. The return value
 * indicates whether the value was successfully set.
 */
(function() {
var as = new SP.signature(SP.UINT8);
OcaTimeSource.prototype.SetProtocol = function(Protocol) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 3, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the value of the <b>Parameters </b>property. The return value
 * indicates whether the value was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.STRING);
OcaTimeSource.prototype.GetParameters = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 4, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the <b>Parameters </b>property. The return value
 * indicates whether the value was successfully set. Optional method, may
 * not be supported in all implementations.
 */
(function() {
var as = new SP.signature(SP.STRING);
OcaTimeSource.prototype.SetParameters = function(Parameters) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 5, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the time reference type. The return value indicates whether the
 * value was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT8);
OcaTimeSource.prototype.GetReferenceType = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 6, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the time reference type. The return value indicates whether the
 * value was successfully set. Optional method, may not be supported in
 * all implementations.
 */
(function() {
var as = new SP.signature(SP.UINT8);
OcaTimeSource.prototype.SetReferenceType = function(ReferenceType) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 7, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the timing source ID. The return value indicates whether the
 * value was successfully retrieved. Optional method, not required for
 * all time reference types.
 */
(function() {
var rs = new SP.signature(SP.STRING);
OcaTimeSource.prototype.GetReferenceID = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 8, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the time reference ID. The return value indicates whether the ID
 * was successfully set. Optional method, not required for all time
 * reference types.
 */
(function() {
var as = new SP.signature(SP.STRING);
OcaTimeSource.prototype.SetReferenceID = function(ID) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 9, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the synchronization status of this time source. The return value
 * indicates whether the value was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT8);
OcaTimeSource.prototype.GetSyncStatus = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 10, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Resets this time source. Changes Availability to Unavailable, then
 * initiates a new synchronization sequence. The return value indicates
 * whether the reset was successful.
 */
(function() {
OcaTimeSource.prototype.Reset = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 11, 0);
    return this.device.send_command(cmd);
}
})();


/**
 * Physical position of device or an element of it. Three position
 * coordinates, three rotation coordinates.
 */
function OcaPhysicalPosition(ObjectNumber, device) {
    OcaAgent.call(this, ObjectNumber, device);
};
mod.OcaPhysicalPosition = OcaPhysicalPosition;
OcaPhysicalPosition.prototype = Object.assign(Object.create(OcaAgent.prototype), {
    __oca_properties__: OcaAgent.prototype.__oca_properties__.extend({
        PositionAndRotation: new Property(new SP.signature(SP.FLOAT32), 3, 1, false, false, 0),
        PositionAndRotationFlags: new Property(new SP.signature(SP.UINT16), 3, 2, false, false, 0),
    }),
    ClassID: "\u0001\u0002\u0011",
    ClassVersion: 1,
    ClassName: "OcaPhysicalPosition",
});
/**
 * Retrieves value of property <b>PositionAndRotation</b>. Result
 * indicates whether retrieval was successful.
 */
(function() {
var rs = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaPhysicalPosition.prototype.GetPositionAndRotation = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets value of property <b>PositionAndRotation</b>. Result indicates
 * whether setting was successful. This is an optional method, not
 * implemented for read-only position objects.
 */
(function() {
var as = new SP.signature(SP.FLOAT32);
OcaPhysicalPosition.prototype.SetPositionAndRotation = function(PositionAndRotation) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 2, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Retrieves value of property <b>PositionAndRotationFlags</b>. Result
 * indicates whether retrieval was successful.
 */
(function() {
var rs = new SP.signature(SP.UINT16);
OcaPhysicalPosition.prototype.GetPositionAndRotationFlags = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 3, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets value of property <b>PositionAndRotationFlags</b>. Result
 * indicates whether setting was successful. This is an optional method,
 * only implemented for configurable position objects.
 */
(function() {
var as = new SP.signature(SP.UINT16);
OcaPhysicalPosition.prototype.SetPositionAndRotationFlags = function(Flags) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 4, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();


/**
 * Abstract base class from which the application network classes
 * inherit.
 */
function OcaApplicationNetwork(ObjectNumber, device) {
    OcaRoot.call(this, ObjectNumber, device);
};
mod.OcaApplicationNetwork = OcaApplicationNetwork;
OcaApplicationNetwork.prototype = Object.assign(Object.create(OcaRoot.prototype), {
    __oca_properties__: OcaRoot.prototype.__oca_properties__.extend({
        Label: new Property(new SP.signature(SP.STRING), 2, 1, false, true, 0),
        Owner: new Property(new SP.signature(SP.UINT32), 2, 2, false, true, 0),
        ServiceID: new Property(new SP.signature(SP.BLOB), 2, 3, false, false, 0),
        SystemInterfaces: new Property(new SP.signature(SP.LIST(OCA.OcaNetworkSystemInterfaceDescriptor)), 2, 4, false, false, 0),
        State: new Property(new SP.signature(SP.UINT8), 2, 5, false, false, 0),
        ErrorCode: new Property(new SP.signature(SP.UINT16), 2, 6, false, false, 0),
    }),
    ClassID: "\u0001\u0004",
    ClassVersion: 1,
    ClassName: "OcaApplicationNetwork",
});
/**
 * Gets the network's user-specified label. Return status indicates
 * whether the operation was successful.
 */
(function() {
var rs = new SP.signature(SP.STRING);
OcaApplicationNetwork.prototype.GetLabel = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 2, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the network's user-specified label. Return status indicates
 * whether the operation was successful.
 */
(function() {
var as = new SP.signature(SP.STRING);
OcaApplicationNetwork.prototype.SetLabel = function(Label) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 2, 2, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the ONo of this network's containing block. Return status
 * indicates whether the operation was successful.
 */
(function() {
var rs = new SP.signature(SP.UINT32);
OcaApplicationNetwork.prototype.GetOwner = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 2, 3, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the network's IDAdvertised. Return status indicates whether the
 * operation was successful.
 */
(function() {
var rs = new SP.signature(SP.BLOB);
OcaApplicationNetwork.prototype.GetServiceID = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 2, 4, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the network's IDAdvertised. Return status indicates whether the
 * operation was successful.
 */
(function() {
var as = new SP.signature(SP.BLOB);
OcaApplicationNetwork.prototype.SetServiceID = function(Name) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 2, 5, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Retrieves the list of this network's system interface descriptor.
 * Return status indicates whether the list was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.LIST(OCA.OcaNetworkSystemInterfaceDescriptor));
OcaApplicationNetwork.prototype.GetSystemInterfaces = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 2, 6, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Retrieves the network's state. Return status indicates whether the
 * status was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT8);
OcaApplicationNetwork.prototype.GetState = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 2, 7, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Retrieves the most recent error code. Return status indicates whether
 * the operation was successful. Note that a second parameter 'Reset'
 * isremoved in v02 of this class.
 */
(function() {
var rs = new SP.signature(SP.UINT16);
OcaApplicationNetwork.prototype.GetErrorCode = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 2, 8, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Control the application network. Return value indicates success of
 * command execution.
 */
(function() {
var as = new SP.signature(SP.UINT8);
OcaApplicationNetwork.prototype.Control = function(Command) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 2, 9, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Returns path from given object down to root. The return value
 * indicates whether the operation succeeded.
 */
(function() {
var rs = new SP.signature(SP.LIST(SP.STRING), SP.LIST(SP.UINT32));
OcaApplicationNetwork.prototype.GetPath = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 2, 10, 0);
    return this.device.send_command(cmd, rs);
}
})();


function OcaControlNetwork(ObjectNumber, device) {
    OcaApplicationNetwork.call(this, ObjectNumber, device);
};
mod.OcaControlNetwork = OcaControlNetwork;
OcaControlNetwork.prototype = Object.assign(Object.create(OcaApplicationNetwork.prototype), {
    __oca_properties__: OcaApplicationNetwork.prototype.__oca_properties__.extend({
        Protocol: new Property(new SP.signature(SP.UINT8), 3, 1, false, false, 0),
    }),
    ClassID: "\u0001\u0004\u0001",
    ClassVersion: 1,
    ClassName: "OcaControlNetwork",
});
/**
 * Gets the network's Protocol property. Return status indicates whether
 * the operation was successful.
 */
(function() {
var rs = new SP.signature(SP.UINT8);
OcaControlNetwork.prototype.GetControlProtocol = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();


function OcaMediaTransportNetwork(ObjectNumber, device) {
    OcaApplicationNetwork.call(this, ObjectNumber, device);
};
mod.OcaMediaTransportNetwork = OcaMediaTransportNetwork;
OcaMediaTransportNetwork.prototype = Object.assign(Object.create(OcaApplicationNetwork.prototype), {
    __oca_properties__: OcaApplicationNetwork.prototype.__oca_properties__.extend({
        Protocol: new Property(new SP.signature(SP.UINT8), 3, 1, false, false, 0),
        Ports: new Property(new SP.signature(SP.LIST(OCA.OcaPort)), 3, 2, false, false, 0),
        MaxSourceConnectors: new Property(new SP.signature(SP.UINT16), 3, 3, false, false, 0),
        MaxSinkConnectors: new Property(new SP.signature(SP.UINT16), 3, 4, false, false, 0),
        MaxPinsPerConnector: new Property(new SP.signature(SP.UINT16), 3, 5, false, false, 0),
        MaxPortsPerPin: new Property(new SP.signature(SP.UINT16), 3, 6, false, false, 0),
        AlignmentLevel: new Property(new SP.signature(SP.FLOAT32), 3, 7, false, false, 0),
        AlignmentGain: new Property(new SP.signature(SP.FLOAT32), 3, 8, false, false, 0),
    }),
    ClassID: "\u0001\u0004\u0002",
    ClassVersion: 1,
    ClassName: "OcaMediaTransportNetwork",
});
/**
 * Gets the network's Protocol property. Return status indicates whether
 * the operation was successful.
 */
(function() {
var rs = new SP.signature(SP.UINT8);
OcaMediaTransportNetwork.prototype.GetMediaProtocol = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the list of ports owned by the MediaTransportNetwork object
 * (representing the source and sink network channels). The return value
 * indicates whether the list was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.LIST(OCA.OcaPort));
OcaMediaTransportNetwork.prototype.GetPorts = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 2, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the name of the designated port. The return value indicates
 * whether the name was successfully retrieved.
 */
(function() {
var as = new SP.signature(OCA.OcaPortID);
var rs = new SP.signature(SP.STRING);
OcaMediaTransportNetwork.prototype.GetPortName = function(PortID) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 3, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the name of the designated port. The return value indicates
 * whether the name was successfully set.
 */
(function() {
var as = new SP.signature(OCA.OcaPortID, SP.STRING);
OcaMediaTransportNetwork.prototype.SetPortName = function(PortID, Name) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 4, 2,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the maximum number of source connectors this media transport
 * network supports.
 */
(function() {
var rs = new SP.signature(SP.UINT16);
OcaMediaTransportNetwork.prototype.GetMaxSourceConnectors = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 5, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the maximum number of source connectors this media transport
 * network supports.
 */
(function() {
var rs = new SP.signature(SP.UINT16);
OcaMediaTransportNetwork.prototype.GetMaxSinkConnectors = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 6, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the maximum number of ports per pin this media transport network
 * supports.
 */
(function() {
var rs = new SP.signature(SP.UINT16);
OcaMediaTransportNetwork.prototype.GetMaxPinsPerConnector = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 7, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the maximum number of pins (channels) per connector this media
 * transport network supports.
 */
(function() {
var rs = new SP.signature(SP.UINT16);
OcaMediaTransportNetwork.prototype.GetMaxPortsPerPin = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 8, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the descriptors of all the source (output) connectors collected
 * by this network object. Return status indicates success of the
 * operation.
 */
(function() {
var rs = new SP.signature(SP.LIST(OCA.OcaMediaSourceConnector));
OcaMediaTransportNetwork.prototype.GetSourceConnectors = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 9, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Retrieves the descriptor of a given source connector. Return status
 * indicates the success of the operation.
 */
(function() {
var as = new SP.signature(SP.UINT16);
var rs = new SP.signature(OCA.OcaMediaSourceConnector);
OcaMediaTransportNetwork.prototype.GetSourceConnector = function(ID) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 10, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the descriptors of all the sink (output) connectors collected by
 * this network object. Return status indicates success of the operation.
 */
(function() {
var rs = new SP.signature(SP.LIST(OCA.OcaMediaSinkConnector));
OcaMediaTransportNetwork.prototype.GetSinkConnectors = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 11, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Retrieves the descriptor of a given sink connector. Return status
 * indicates the success of the operation.
 */
(function() {
var as = new SP.signature(SP.UINT16);
var rs = new SP.signature(OCA.OcaMediaSinkConnector);
OcaMediaTransportNetwork.prototype.GetSinkConnector = function(ID) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 12, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the status of all the source and sink connectors collected by
 * this network object. Return status indicates success of the operation.
 */
(function() {
var rs = new SP.signature(SP.LIST(OCA.OcaMediaConnectorStatus));
OcaMediaTransportNetwork.prototype.GetConnectorsStatuses = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 13, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the status of a single connector. Return status indicates success
 * of the operation.
 */
(function() {
var as = new SP.signature(SP.UINT16);
var rs = new SP.signature(OCA.OcaMediaConnectorStatus);
OcaMediaTransportNetwork.prototype.GetConnectorStatus = function(ConnectorID) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 14, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Adds a source connector to this network. Parameters of the new
 * connector are given in the Connector parameter; device returns the
 * same parameter with the new connector ID filled in. If the new
 * connector's AlignmentLevel property value is given as NaN, the value
 * of this network's AlignmentLevel property will be used. Return status
 * indicates the success of the operation.
 */
(function() {
var as = new SP.signature(OCA.OcaMediaSourceConnector, SP.UINT8);
var rs = new SP.signature(OCA.OcaMediaSourceConnector);
OcaMediaTransportNetwork.prototype.AddSourceConnector = function(Connector, InitialStatus) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 15, 2,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Adds a sinkconnector to this network. Parameters of the new connector
 * are given in the Connector parameter; device returns the same
 * parameter with the new connector ID filled in. If the new connector's
 * AlignmentLevel property value is given as NaN, the value of this
 * network's AlignmentLevel property will be used. If the new connector's
 * AlignmentGain property value is given as NaN, the value of this
 * network's AlignmentGain property will be used. Return status indicates
 * the success of the operation.
 */
(function() {
var as = new SP.signature(OCA.OcaMediaConnectorStatus, OCA.OcaMediaSinkConnector);
var rs = new SP.signature(OCA.OcaMediaSinkConnector);
OcaMediaTransportNetwork.prototype.AddSinkConnector = function(InitialStatus, Connector) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 16, 2,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Change the state of a given connector. Return status indicates the
 * success of the operation.
 */
(function() {
var as = new SP.signature(SP.UINT16, SP.UINT8);
OcaMediaTransportNetwork.prototype.ControlConnector = function(ConnectorID, Command) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 17, 2,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Sets a source connector's channel pin map. Return status indicates the
 * success of the operation.
 */
(function() {
var as = new SP.signature(SP.UINT16, SP.MAP(SP.UINT16, OCA.OcaPortID));
OcaMediaTransportNetwork.prototype.SetSourceConnectorPinMap = function(ConnectorID, ChannelPinMap) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 18, 2,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Sets a sink connector's channel pin map. Return status indicates the
 * success of the operation.
 */
(function() {
var as = new SP.signature(SP.UINT16, OCA.OcaMultiMap(SP.UINT16, OCA.OcaPortID));
OcaMediaTransportNetwork.prototype.SetSinkConnectorPinMap = function(ConnectorID, ChannelPinMap) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 19, 2,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Sets a connector's <b>Connection </b>property. Return status indicates
 * the success of the operation.
 */
(function() {
var as = new SP.signature(SP.UINT16, OCA.OcaMediaConnection);
OcaMediaTransportNetwork.prototype.SetConnectorConnection = function(ConnectorID, Connection) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 20, 2,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Sets the Coding field of the connection descriptor of the referenced
 * connector. Return status indicates the success of the operation.
 */
(function() {
var as = new SP.signature(SP.UINT16, OCA.OcaMediaCoding);
OcaMediaTransportNetwork.prototype.SetConnectorCoding = function(ConnectorID, Coding) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 21, 2,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Deletes a connector from this network. Return status indicates the
 * success of the operation.
 */
(function() {
var as = new SP.signature(SP.UINT16);
OcaMediaTransportNetwork.prototype.DeleteConnector = function(ID) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 22, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the default, min, and max alignment levels for
 * OcaMedia{Source|Sink}Connectors attached to this network. Return
 * status indicates success of the operation.
 */
(function() {
var rs = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaMediaTransportNetwork.prototype.GetAlignmentLevel = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 23, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the default, min, and max alignment gains for
 * OcaMediaSinkConnectors attached to this network. Return status
 * indicates success of the operation.
 */
(function() {
var rs = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaMediaTransportNetwork.prototype.GetAlignmentGain = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 24, 0);
    return this.device.send_command(cmd, rs);
}
})();
OcaMediaTransportNetwork.prototype.onSourceConnectorChanged = function(callback) {
    return this.device.add_subscription(new OCA.OcaEvent(this.ObjectNumber, new OCA.OcaEventID(3, 1)), callback);
};
OcaMediaTransportNetwork.prototype.onSinkConnectorChanged = function(callback) {
    return this.device.add_subscription(new OCA.OcaEvent(this.ObjectNumber, new OCA.OcaEventID(3, 2)), callback);
};
OcaMediaTransportNetwork.prototype.onConnectorStatusChanged = function(callback) {
    return this.device.add_subscription(new OCA.OcaEvent(this.ObjectNumber, new OCA.OcaEventID(3, 3)), callback);
};


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
    ClassVersion: 2,
    ClassName: "OcaManager",
});


/**
 * Mandatory manager that contains information relevant to the whole
 * device. <ul> <li>Must be instantiated once in every device. </li>
 * <li>Must have object number 1.</li> </ul>
 */
function OcaDeviceManager(ObjectNumber, device) {
    OcaManager.call(this, ObjectNumber, device);
};
mod.OcaDeviceManager = OcaDeviceManager;
OcaDeviceManager.prototype = Object.assign(Object.create(OcaManager.prototype), {
    __oca_properties__: OcaManager.prototype.__oca_properties__.extend({
        ModelGUID: new Property(new SP.signature(OCA.OcaModelGUID), 3, 1, false, false, 0),
        SerialNumber: new Property(new SP.signature(SP.STRING), 3, 2, false, false, 0),
        ModelDescription: new Property(new SP.signature(OCA.OcaModelDescription), 3, 3, false, false, 0),
        DeviceName: new Property(new SP.signature(SP.STRING), 3, 4, false, false, 0),
        OcaVersion: new Property(new SP.signature(SP.UINT16), 3, 5, false, false, 0),
        Role: new Property(new SP.signature(SP.STRING), 3, 6, false, false, 0),
        UserInventoryCode: new Property(new SP.signature(SP.STRING), 3, 7, false, false, 0),
        Enabled: new Property(new SP.signature(SP.BOOLEAN), 3, 8, false, false, 0),
        State: new Property(new SP.signature(SP.UINT16), 3, 9, false, false, 0),
        Busy: new Property(new SP.signature(SP.BOOLEAN), 3, 10, false, false, 0),
        ResetCause: new Property(new SP.signature(SP.UINT8), 3, 11, false, false, 0),
        Message: new Property(new SP.signature(SP.STRING), 3, 12, false, false, 0),
        Managers: new Property(new SP.signature(SP.LIST(OCA.OcaManagerDescriptor)), 3, 13, false, false, 0),
        DeviceRevisionID: new Property(new SP.signature(SP.STRING), 3, 14, true, false, 0),
    }),
    ClassID: "\u0001\u0003\u0001",
    ClassVersion: 2,
    ClassName: "OcaDeviceManager",
});
/**
 * Gets the value of the OcaVersion property. The return value indicates
 * whether the property was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT16);
OcaDeviceManager.prototype.GetOcaVersion = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the model GUID. The return value indicates whether the GUID was
 * successfully retrieved.
 */
(function() {
var rs = new SP.signature(OCA.OcaModelGUID);
OcaDeviceManager.prototype.GetModelGUID = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 2, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the value of the SerialNumber property. The return value
 * indicates whether the property was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.STRING);
OcaDeviceManager.prototype.GetSerialNumber = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 3, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the device name. The return value indicates whether the property
 * was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.STRING);
OcaDeviceManager.prototype.GetDeviceName = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 4, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the device name. The return value indicates whether the property
 * was successfully set.
 */
(function() {
var as = new SP.signature(SP.STRING);
OcaDeviceManager.prototype.SetDeviceName = function(Name) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 5, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the model description. The return value indicates whether the
 * description was successfully retrieved.
 */
(function() {
var rs = new SP.signature(OCA.OcaModelDescription);
OcaDeviceManager.prototype.GetModelDescription = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 6, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the value of the Role property. The return value indicates
 * whether the property was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.STRING);
OcaDeviceManager.prototype.GetRole = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 7, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the Role property. The return value indicates
 * whether the property was successfully set.
 */
(function() {
var as = new SP.signature(SP.STRING);
OcaDeviceManager.prototype.SetRole = function(role) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 8, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the value of the UserInventoryCode property. The return value
 * indicates whether the property was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.STRING);
OcaDeviceManager.prototype.GetUserInventoryCode = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 9, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the UserInventoryCode property. The return value
 * indicates whether the property was successfully set.
 */
(function() {
var as = new SP.signature(SP.STRING);
OcaDeviceManager.prototype.SetUserInventoryCode = function(Code) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 10, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the value of the Enabled property. The return value indicates
 * whether the property was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.BOOLEAN);
OcaDeviceManager.prototype.GetEnabled = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 11, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the Enabled property. The return value indicates
 * whether the property was successfully set.
 */
(function() {
var as = new SP.signature(SP.BOOLEAN);
OcaDeviceManager.prototype.SetEnabled = function(enabled) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 12, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the value of the State property. The return value indicates
 * whether the property was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT16);
OcaDeviceManager.prototype.GetState = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 13, 0);
    return this.device.send_command(cmd, rs);
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
var as = new SP.signature(SP.BLOBFIXED(16), SP.BLOB);
OcaDeviceManager.prototype.SetResetKey = function(Key, Address) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 14, 2,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the value of the ResetCause property. The return value indicates
 * whether the property was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT8);
OcaDeviceManager.prototype.GetResetCause = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 15, 0);
    return this.device.send_command(cmd, rs);
}
})();
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
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the value of property <b>Message</b>. Return value indicates
 * whether value was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.STRING);
OcaDeviceManager.prototype.GetMessage = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 17, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Set arbitrary text message into <b>Message </b>property. The return
 * value indicates whether the value was successfully set.
 */
(function() {
var as = new SP.signature(SP.STRING);
OcaDeviceManager.prototype.SetMessage = function(Text) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 18, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Retrive the list of descriptors of managers instantiated in this
 * device. The return value indicates whether the retrieval was
 * successful.
 */
(function() {
var rs = new SP.signature(SP.LIST(OCA.OcaManagerDescriptor));
OcaDeviceManager.prototype.GetManagers = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 19, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the value of property <b>DeviceRevisionID</b>. Return value
 * indicates whether value was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.STRING);
OcaDeviceManager.prototype.GetDeviceRevisionID = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 20, 0);
    return this.device.send_command(cmd, rs);
}
})();


/**
 * Manager that collects and controls security settings (including
 * security keys). <ul> <li>Must be instantiated in every device that
 * supports secure control and monitoring; otherwise, is optional. </li>
 * <li>May be instantiated at most once in any device. </li> <li>If
 * instantiated, object number must be 2.</li> </ul>
 */
function OcaSecurityManager(ObjectNumber, device) {
    OcaManager.call(this, ObjectNumber, device);
};
mod.OcaSecurityManager = OcaSecurityManager;
OcaSecurityManager.prototype = Object.assign(Object.create(OcaManager.prototype), {
    __oca_properties__: OcaManager.prototype.__oca_properties__.extend({
        secureControlData: new Property(new SP.signature(SP.BOOLEAN), 3, 1, false, false, 0),
    }),
    ClassID: "\u0001\u0003\u0002",
    ClassVersion: 2,
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
var as = new SP.signature(SP.STRING, SP.BLOB);
OcaSecurityManager.prototype.AddPreSharedKey = function(identity, key) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 4, 2,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Changes the pre-shared key identified by the passed identity. Note
 * that changing a PSK over the network will only work if the controller
 * has a secure connection to the device and control security has been
 * turned on. If this is not the case the method will return DeviceError.
 */
(function() {
var as = new SP.signature(SP.STRING, SP.BLOB);
OcaSecurityManager.prototype.ChangePreSharedKey = function(identity, newKey) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 3, 2,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
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
var as = new SP.signature(SP.STRING);
OcaSecurityManager.prototype.DeletePreSharedKey = function(identity) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 5, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
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
    return this.device.send_command(cmd);
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
    return this.device.send_command(cmd);
}
})();


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
 */
function OcaFirmwareManager(ObjectNumber, device) {
    OcaManager.call(this, ObjectNumber, device);
};
mod.OcaFirmwareManager = OcaFirmwareManager;
OcaFirmwareManager.prototype = Object.assign(Object.create(OcaManager.prototype), {
    __oca_properties__: OcaManager.prototype.__oca_properties__.extend({
        ComponentVersions: new Property(new SP.signature(SP.LIST(OCA.OcaVersion)), 3, 1, false, false, 0),
    }),
    ClassID: "\u0001\u0003\u0003",
    ClassVersion: 2,
    ClassName: "OcaFirmwareManager",
});
/**
 * Gets the value of the ComponentVersions property. The return value
 * indicates whether the property was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.LIST(OCA.OcaVersion));
OcaFirmwareManager.prototype.GetComponentVersions = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 1, 0);
    return this.device.send_command(cmd, rs);
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
    return this.device.send_command(cmd);
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
var as = new SP.signature(SP.UINT16);
OcaFirmwareManager.prototype.BeginActiveImageUpdate = function(component) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 3, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
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
var as = new SP.signature(SP.UINT32, SP.BLOB);
OcaFirmwareManager.prototype.AddImageData = function(id, imageData) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 4, 2,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Verifies the entire host processor image using the passed verification
 * data.
 */
(function() {
var as = new SP.signature(SP.BLOB);
OcaFirmwareManager.prototype.VerifyImage = function(verifyData) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 5, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
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
    return this.device.send_command(cmd);
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
var as = new SP.signature(SP.UINT16, SP.BLOB, SP.STRING);
OcaFirmwareManager.prototype.BeginPassiveComponentUpdate = function(component, serverAddress, updateFileName) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 7, 3,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
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
    return this.device.send_command(cmd);
}
})();


/**
 * Manager that collects and controls the event subscriptions of the
 * device. <ul> <li>Must be instantiated once in every device that
 * supports subscriptions. </li> <li>May be instantiated at most once in
 * any device. </li> <li>If instantiated, must have object number 4.</li>
 * </ul> Absence of an <b>OcaSubscriptionManager </b>object signifies
 * that the device does not support event subscriptions.
 */
function OcaSubscriptionManager(ObjectNumber, device) {
    OcaManager.call(this, ObjectNumber, device);
};
mod.OcaSubscriptionManager = OcaSubscriptionManager;
OcaSubscriptionManager.prototype = Object.assign(Object.create(OcaManager.prototype), {
    __oca_properties__: OcaManager.prototype.__oca_properties__.extend({
        State: new Property(new SP.signature(SP.UINT8), 3, 1, false, false, 0),
    }),
    ClassID: "\u0001\u0003\u0004",
    ClassVersion: 2,
    ClassName: "OcaSubscriptionManager",
});
/**
 * Removes all subscriptions to the given event with the given
 * <b>OcaMethod</b>. The return value indicates whether the
 * subscription(s) was (were) successfully removed.
 */
(function() {
var as = new SP.signature(OCA.OcaEvent, OCA.OcaMethod);
OcaSubscriptionManager.prototype.RemoveSubscription = function(Event, Subscriber) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 2, 2,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Adds a subscription to an event. The subscription is added for the
 * session on which the command came in. If a subscription identical to
 * the one being requested already exists, an additional one shall not be
 * added. Two subscriptions are identical if the <b>Event, Subscriber,
 * NotificationDeliveryMode</b>, and <b>DestinationInformation
 * </b>parameters are all identical. The return value indicates whether
 * the subscription succeeded.
 */
(function() {
var as = new SP.signature(OCA.OcaEvent, OCA.OcaMethod, SP.BLOB, SP.UINT8, SP.BLOB);
OcaSubscriptionManager.prototype.AddSubscription = function(Event, Subscriber, SubscriberContext, NotificationDeliveryMode, DestinationInformation) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 1, 5,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
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
 */
(function() {
OcaSubscriptionManager.prototype.DisableNotifications = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 3, 0);
    return this.device.send_command(cmd);
}
})();
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
 */
(function() {
OcaSubscriptionManager.prototype.ReEnableNotifications = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 4, 0);
    return this.device.send_command(cmd);
}
})();
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
 */
(function() {
var as = new SP.signature(SP.UINT32, OCA.OcaPropertyID, OCA.OcaMethod, SP.BLOB, SP.UINT8, SP.BLOB);
OcaSubscriptionManager.prototype.AddPropertyChangeSubscription = function(Emitter, Property, Subscriber, SubscriberContext, NotificationDeliveryMode, DestinationInformation) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 5, 6,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Removes any subscription to a PropertyChanged event with the given
 * Emitter, Property, Subscriber, SubscriberContext,
 * NotificationDeliveryMode, and DestinationInformation. The return value
 * indicates whether the subscription(s) was (were) successfully removed.
 * Added in v2 of this class, in AES70-2017.
 */
(function() {
var as = new SP.signature(SP.UINT32, OCA.OcaPropertyID, OCA.OcaMethod);
OcaSubscriptionManager.prototype.RemovePropertyChangeSubscription = function(Emitter, Property, Subscriber) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 6, 3,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Returns maximum byte length of payload of subscriber context parameter
 * that this device supports. This returned value shall be either zero or
 * four. If the returned payload length is not zero, it shall be four. No
 * other values shall be allowed, and the returned value shall not change
 * once the device has initialized. NOTE: In AES70-2015, arbitrary
 * subscriber context lengths were allowed; this is no longer true.
 */
(function() {
var rs = new SP.signature(SP.UINT16);
OcaSubscriptionManager.prototype.GetMaximumSubscriberContextLength = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 7, 0);
    return this.device.send_command(cmd, rs);
}
})();
OcaSubscriptionManager.prototype.onNotificationsDisabled = function(callback) {
    return this.device.add_subscription(new OCA.OcaEvent(this.ObjectNumber, new OCA.OcaEventID(3, 1)), callback);
};
OcaSubscriptionManager.prototype.onSynchronizeState = function(callback) {
    return this.device.add_subscription(new OCA.OcaEvent(this.ObjectNumber, new OCA.OcaEventID(3, 2)), callback);
};


/**
 * Optional manager that manages power settings and state. <ul> <li>May
 * be instantiated once in any device. </li> <li>If instantiated, object
 * number must be 5.</li> </ul>
 */
function OcaPowerManager(ObjectNumber, device) {
    OcaManager.call(this, ObjectNumber, device);
};
mod.OcaPowerManager = OcaPowerManager;
OcaPowerManager.prototype = Object.assign(Object.create(OcaManager.prototype), {
    __oca_properties__: OcaManager.prototype.__oca_properties__.extend({
        State: new Property(new SP.signature(SP.UINT8), 3, 1, false, false, 0),
        PowerSupplies: new Property(new SP.signature(SP.LIST(SP.UINT32)), 3, 2, false, false, 0),
        ActivePowerSupplies: new Property(new SP.signature(SP.LIST(SP.UINT32)), 3, 3, false, false, 0),
        AutoState: new Property(new SP.signature(SP.BOOLEAN), 3, 4, false, false, 0),
        TargetState: new Property(new SP.signature(SP.UINT8), 3, 5, true, false, 0),
    }),
    ClassID: "\u0001\u0003\u0005",
    ClassVersion: 2,
    ClassName: "OcaPowerManager",
});
/**
 * Retrieve the value of property <b>03p01 State</b>, the current power
 * state of the device. Return value indicates whether the value was
 * successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT8);
OcaPowerManager.prototype.GetState = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Change the device power state. The return value indicates whether the
 * requested change has been successfully made.
 */
(function() {
var as = new SP.signature(SP.UINT8);
OcaPowerManager.prototype.SetState = function(State) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 2, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Retrieves list of object number(s) of all power supply(ies). Return
 * value indicates whether the data was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.LIST(SP.UINT32));
OcaPowerManager.prototype.GetPowerSupplies = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 3, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Retrieves list of object number(s) of active power supply(ies). Return
 * value indicates whether the data was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.LIST(SP.UINT32));
OcaPowerManager.prototype.GetActivePowerSupplies = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 4, 0);
    return this.device.send_command(cmd, rs);
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
var as = new SP.signature(SP.UINT32, SP.UINT32, SP.BOOLEAN);
OcaPowerManager.prototype.ExchangePowerSupply = function(oldPsu, newPsu, powerOffOld) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 5, 3,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the value of the <b>AutoState</b> property. The return value
 * indicates whether the value was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.BOOLEAN);
OcaPowerManager.prototype.GetAutoState = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 6, 0);
    return this.device.send_command(cmd, rs);
}
})();


/**
 * Optional manager that collects all media transport and control
 * networks to which the device belongs. <ul> <li>Must be instantiated
 * once in every device that has more than one network object. In this
 * context, "network object" shall mean an instance of <b>OcaNetwork</b>,
 * <b>OcaStreamNetwork</b>, <b>OcaApplicationNetwork</b>, or any subclass
 * of these classes.</li> </ul> <ul> <li>If instantiated, must have
 * object number 6.</li> </ul>
 */
function OcaNetworkManager(ObjectNumber, device) {
    OcaManager.call(this, ObjectNumber, device);
};
mod.OcaNetworkManager = OcaNetworkManager;
OcaNetworkManager.prototype = Object.assign(Object.create(OcaManager.prototype), {
    __oca_properties__: OcaManager.prototype.__oca_properties__.extend({
        Networks: new Property(new SP.signature(SP.LIST(SP.UINT32)), 3, 1, false, false, 0),
        StreamNetworks: new Property(new SP.signature(SP.LIST(SP.UINT32)), 3, 2, false, false, 0),
        ControlNetworks: new Property(new SP.signature(SP.LIST(SP.UINT32)), 3, 3, false, false, 0),
        MediaTransportNetworks: new Property(new SP.signature(SP.LIST(SP.UINT32)), 3, 4, false, false, 0),
    }),
    ClassID: "\u0001\u0003\u0006",
    ClassVersion: 2,
    ClassName: "OcaNetworkManager",
});
/**
 * Gets the list of object numbers of <b>OcaNetwork </b>instances in this
 * device. Return value indicates whether the list was successfully
 * retrieved. <b><u>Deprecated as of OCA 1.2</u></b>
 */
(function() {
var rs = new SP.signature(SP.LIST(SP.UINT32));
OcaNetworkManager.prototype.GetNetworks = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the list of object numbers of <b>OcaStreamNetwork </b>instances
 * in this device. Return value indicates whether list was successfully
 * retrieved. <b><u>Deprecated as of OCA 1.4.</u></b>
 */
(function() {
var rs = new SP.signature(SP.LIST(SP.UINT32));
OcaNetworkManager.prototype.GetStreamNetworks = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 2, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the list of object numbers of <b>OcaControlNetwork </b>instances
 * in this device. Return value indicates whether list was successfully
 * retrieved. Introduced in version 1.4.
 */
(function() {
var rs = new SP.signature(SP.LIST(SP.UINT32));
OcaNetworkManager.prototype.GetControlNetworks = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 3, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the list of object numbers of <b>OcaMediaTransportNetwork
 * </b>instances in this device. Return value indicates whether list was
 * successfully retrieved. Introduced in version 1.4.
 */
(function() {
var rs = new SP.signature(SP.LIST(SP.UINT32));
OcaNetworkManager.prototype.GetMediaTransportNetworks = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 4, 0);
    return this.device.send_command(cmd, rs);
}
})();


/**
 * Optional manager that collects all media clocks the device uses. <ul>
 * <li>Must be instantiated once for every device that has more than one
 * media clock object. In this context, "media clock" means an instance
 * of <b>OcaMediaClock</b>, <b>OcaMediaClock3</b>, or any subclass of
 * these classes. </li> </ul> <ul> <li>If instantiated, object number
 * must be 7.</li> </ul>
 */
function OcaMediaClockManager(ObjectNumber, device) {
    OcaManager.call(this, ObjectNumber, device);
};
mod.OcaMediaClockManager = OcaMediaClockManager;
OcaMediaClockManager.prototype = Object.assign(Object.create(OcaManager.prototype), {
    __oca_properties__: OcaManager.prototype.__oca_properties__.extend({
        ClockSourceTypesSupported: new Property(new SP.signature(SP.LIST(SP.UINT8)), 3, 1, false, false, 0),
        Clocks: new Property(new SP.signature(SP.LIST(SP.UINT32)), 3, 2, false, false, 0),
        Clock3s: new Property(new SP.signature(SP.LIST(SP.UINT32)), 3, 3, false, false, 0),
    }),
    ClassID: "\u0001\u0003\u0007",
    ClassVersion: 2,
    ClassName: "OcaMediaClockManager",
});
/**
 * Gets the list of object numbers of <b>OcaMediaClock </b>instances in
 * this device. Return value indicates whether list was successfully
 * retrieved. Note: In AES70-2017, this method is deprecated.
 */
(function() {
var rs = new SP.signature(SP.LIST(SP.UINT32));
OcaMediaClockManager.prototype.GetClocks = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the list of media clock types supported by <b>OcaMediaClock
 * </b>objects in the device. Return value indicates whether the list was
 * successfully retrieved. Note : In AES70-2017, this method is
 * deprecated.
 */
(function() {
var rs = new SP.signature(SP.LIST(SP.UINT8));
OcaMediaClockManager.prototype.GetMediaClockTypesSupported = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 2, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the list of object numbers of <b>OcaMediaClock3 </b>instances in
 * this device. Return value indicates whether list was successfully
 * retrieved.
 */
(function() {
var rs = new SP.signature(SP.LIST(SP.UINT32));
OcaMediaClockManager.prototype.GetClock3s = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 3, 0);
    return this.device.send_command(cmd, rs);
}
})();


/**
 * Optional manager for handling device presets -- patch and parset
 * libraries. <ul> <li>May be instantiated once in any device. </li>
 * </ul> <ul> <li>If instantiated, object number must be 8.</li> </ul>
 */
function OcaLibraryManager(ObjectNumber, device) {
    OcaManager.call(this, ObjectNumber, device);
};
mod.OcaLibraryManager = OcaLibraryManager;
OcaLibraryManager.prototype = Object.assign(Object.create(OcaManager.prototype), {
    __oca_properties__: OcaManager.prototype.__oca_properties__.extend({
        PatchLibraries: new Property(new SP.signature(SP.LIST(SP.UINT32)), 3, 1, false, false, 0),
        ParsetLibraries: new Property(new SP.signature(SP.LIST(SP.UINT32)), 3, 2, false, false, 0),
        CurrentPatch: new Property(new SP.signature(SP.UINT16), 3, 3, false, false, 0),
    }),
    ClassID: "\u0001\u0003\b",
    ClassVersion: 2,
    ClassName: "OcaLibraryManager",
});
/**
 * Adds a library to the device. Return value indicates whether the
 * library was successfully added.
 */
(function() {
var as = new SP.signature(SP.UINT8);
var rs = new SP.signature(SP.UINT32);
OcaLibraryManager.prototype.AddLibrary = function(Type) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 1, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Deletes a library from the device.
 */
(function() {
var as = new SP.signature(SP.UINT32);
OcaLibraryManager.prototype.DeleteLibrary = function(ID) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 2, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Returns the number of libraries of the given type that are
 * instantiated in the device..
 */
(function() {
var as = new SP.signature(SP.UINT8);
var rs = new SP.signature(SP.UINT16);
OcaLibraryManager.prototype.GetLibraryCount = function(Type) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 3, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Returns the list of object numbers of libraries of libraries of the
 * given type that are instantiated in the device.
 */
(function() {
var as = new SP.signature(SP.UINT8);
var rs = new SP.signature(SP.LIST(SP.UINT32));
OcaLibraryManager.prototype.GetLibraryList = function(Type) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 4, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Return the identifier of the most recently applied patch. The return
 * value indicates whether the method succeeded.
 */
(function() {
var rs = new SP.signature(SP.UINT16);
OcaLibraryManager.prototype.GetCurrentPatch = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 5, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Apply a patch to the device.
 */
(function() {
var as = new SP.signature(SP.UINT16);
OcaLibraryManager.prototype.SetCurrentPatch = function(ID) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 6, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();


/**
 * Placeholder for optional manager that in future versions of the
 * standard will hold various global audio processing parameters. <ul>
 * <li>May be instantiated once in any device. </li> </ul> <ul> <li>If
 * instantiated, object number must be 9.</li> </ul>
 */
function OcaAudioProcessingManager(ObjectNumber, device) {
    OcaManager.call(this, ObjectNumber, device);
};
mod.OcaAudioProcessingManager = OcaAudioProcessingManager;
OcaAudioProcessingManager.prototype = Object.assign(Object.create(OcaManager.prototype), {
    __oca_properties__: OcaManager.prototype.__oca_properties__.extend({
    }),
    ClassID: "\u0001\u0003\t",
    ClassVersion: 2,
    ClassName: "OcaAudioProcessingManager",
});


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
 */
function OcaDeviceTimeManager(ObjectNumber, device) {
    OcaManager.call(this, ObjectNumber, device);
};
mod.OcaDeviceTimeManager = OcaDeviceTimeManager;
OcaDeviceTimeManager.prototype = Object.assign(Object.create(OcaManager.prototype), {
    __oca_properties__: OcaManager.prototype.__oca_properties__.extend({
        TimeSources: new Property(new SP.signature(SP.LIST(SP.UINT32)), 3, 1, false, false, 0),
        CurrentDeviceTimeSource: new Property(new SP.signature(SP.UINT32), 3, 1, false, false, 0),
    }),
    ClassID: "\u0001\u0003\n",
    ClassVersion: 2,
    ClassName: "OcaDeviceTimeManager",
});
/**
 * Get current value of device time-of-day clock. Return value indicates
 * whether value was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT64);
OcaDeviceTimeManager.prototype.GetDeviceTime = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Set device time-of-day clock. Return value indicates whether value was
 * successfully set. Not available if a time source is identified in
 * property CurrentDeviceTimeSource.
 */
(function() {
var as = new SP.signature(SP.UINT64);
OcaDeviceTimeManager.prototype.SetDeviceTime = function(DeviceTime) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 2, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Returns list of object numbers of OcaTimeSource instances in this
 * device. Return value indicates whether list was successfully
 * retrieved.
 */
(function() {
var rs = new SP.signature(SP.LIST(SP.UINT32));
OcaDeviceTimeManager.prototype.GetTimeSources = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 3, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Retrieves ONo of current time source object, or zero if none. Return
 * value indicates whether value was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT32);
OcaDeviceTimeManager.prototype.GetCurrentDeviceTimeSource = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 4, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets ONo of current time source object, or zero if none. Return value
 * indicates whether value was successfully retrieved.
 */
(function() {
var as = new SP.signature(SP.UINT32);
OcaDeviceTimeManager.prototype.SetCurrentDeviceTimeSource = function(TimeSourceONo) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 5, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();


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
 */
function OcaTaskManager(ObjectNumber, device) {
    OcaManager.call(this, ObjectNumber, device);
};
mod.OcaTaskManager = OcaTaskManager;
OcaTaskManager.prototype = Object.assign(Object.create(OcaManager.prototype), {
    __oca_properties__: OcaManager.prototype.__oca_properties__.extend({
        State: new Property(new SP.signature(SP.UINT8), 3, 1, true, true, 0),
        Tasks: new Property(new SP.signature(SP.MAP(SP.UINT32, SP.UINT32)), 3, 2, true, true, 0),
        TaskGroups: new Property(new SP.signature(SP.MAP(SP.UINT16, SP.UINT32)), 3, 3, true, true, 0),
        Slots: new Property(new SP.signature(SP.MAP(SP.UINT16, SP.UINT16)), 3, 4, true, true, 0),
    }),
    ClassID: "\u0001\u0003\u000b",
    ClassVersion: 1,
    State: 0,
    Tasks: 0,
    TaskGroups: 0,
    Slots: 0,
    ClassName: "OcaTaskManager",
});
/**
 * Controls all tasks in device. Return value indicates whether tasks
 * were successfully controlled.
 */
(function() {
var as = new SP.signature(SP.UINT8);
OcaTaskManager.prototype.Control = function(Command) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 1, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets value of property <b>State</b>. Return value indicates whether
 * value was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT8);
OcaTaskManager.prototype.GetState = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 2, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets list of ONos of tasks in device. Return value indicates whether
 * list was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.MAP(SP.UINT32, SP.UINT32));
OcaTaskManager.prototype.GetTasks = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 3, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets list of ONos of tasks in device. Return value indicates whether
 * list was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.MAP(SP.UINT16, SP.UINT32));
OcaTaskManager.prototype.GetTaskGroups = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 4, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Adds task slot to device. Return value indicates whether slot was
 * successfully added. Not implemented if device does not use slots.
 */
(function() {
var as = new SP.signature(SP.UINT16);
OcaTaskManager.prototype.AddSlot = function(SlotID) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 5, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Deletes task slot from device. Return value indicates whether slot was
 * successfully deleted. Not implemented if device does not use slots.
 */
(function() {
var as = new SP.signature(SP.UINT16);
OcaTaskManager.prototype.DeleteSlot = function(SlotID) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 6, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets value of property <b>Slots</b>. Return value indicates whether
 * the value was successfully retrieved. Not implemented if device does
 * not use slots.
 */
(function() {
var rs = new SP.signature(SP.MAP(SP.UINT16, SP.UINT16));
OcaTaskManager.prototype.GetSlots = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 7, 0);
    return this.device.send_command(cmd, rs);
}
})();


/**
 * Optional manager that collects all media decoders/encoders (Codecs)
 * which the device owns. <ul> <li>Must be instantiated in every device
 * that implements more than one media encoding scheme and/or more than
 * one media decoding scheme. </li> </ul> <ul> <li>If instantiated,
 * object number must be 12.</li> </ul>
 */
function OcaCodingManager(ObjectNumber, device) {
    OcaManager.call(this, ObjectNumber, device);
};
mod.OcaCodingManager = OcaCodingManager;
OcaCodingManager.prototype = Object.assign(Object.create(OcaManager.prototype), {
    __oca_properties__: OcaManager.prototype.__oca_properties__.extend({
        AvailableEncodingSchemes: new Property(new SP.signature(SP.MAP(SP.UINT16, SP.STRING)), 3, 1, false, false, 0),
        AvailableDecodingSchemes: new Property(new SP.signature(SP.MAP(SP.UINT16, SP.STRING)), 3, 2, false, false, 0),
    }),
    ClassID: "\u0001\u0003\f",
    ClassVersion: 1,
    ClassName: "OcaCodingManager",
});
/**
 * Retrieves the map of available encoding schemes, indexed by scheme ID.
 * Return value indicates success of the retrieval.
 */
(function() {
var rs = new SP.signature(SP.MAP(SP.UINT16, SP.STRING));
OcaCodingManager.prototype.GetAvailableEncodingSchemes  = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Retrieves the map of available decoding schemes, indexed by scheme ID.
 * Return value indicates success of the retrieval.
 */
(function() {
var rs = new SP.signature(SP.MAP(SP.UINT16, SP.STRING));
OcaCodingManager.prototype.GetAvailableDecodingSchemes  = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 2, 0);
    return this.device.send_command(cmd, rs);
}
})();


/**
 * Optional manager that provides application diagnostic aids. Unlike
 * other manager classes, OcaDiagnosticManager may be subclassed to
 * provide proprietary application diagnostic enhancements. <ul> <li>May
 * be instantiated once in any device. </li> <li>If instantiated, object
 * number must be 13.</li> </ul>
 */
function OcaDiagnosticManager(ObjectNumber, device) {
    OcaManager.call(this, ObjectNumber, device);
};
mod.OcaDiagnosticManager = OcaDiagnosticManager;
OcaDiagnosticManager.prototype = Object.assign(Object.create(OcaManager.prototype), {
    __oca_properties__: OcaManager.prototype.__oca_properties__.extend({
    }),
    ClassID: "\u0001\u0003\r",
    ClassVersion: 1,
    ClassName: "OcaDiagnosticManager",
});
/**
 * Retrieves a text description of the given object's lock status. Return
 * value indicates success of the retrieval.
 */
(function() {
var as = new SP.signature(SP.UINT32);
var rs = new SP.signature(SP.STRING);
OcaDiagnosticManager.prototype.GetLockStatus = function(ONo) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 1, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd, rs);
}
})();


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
 */
function OcaNetworkSignalChannel(ObjectNumber, device) {
    OcaWorker.call(this, ObjectNumber, device);
};
mod.OcaNetworkSignalChannel = OcaNetworkSignalChannel;
OcaNetworkSignalChannel.prototype = Object.assign(Object.create(OcaWorker.prototype), {
    __oca_properties__: OcaWorker.prototype.__oca_properties__.extend({
        ConnectorPins: new Property(new SP.signature(SP.MAP(SP.UINT32, SP.UINT16)), 3, 3, false, false, 0),
        IDAdvertised: new Property(new SP.signature(SP.BLOB), 3, 1, false, false, 0),
        Network: new Property(new SP.signature(SP.UINT32), 3, 2, false, false, 0),
        RemoteChannelID: new Property(new SP.signature(SP.BLOB), 3, 4, false, false, 0),
        SourceOrSink: new Property(new SP.signature(SP.UINT8), 3, 5, false, false, 0),
        Status: new Property(new SP.signature(SP.UINT8), 3, 6, false, false, 0),
    }),
    ClassID: "\u0001\u0001\u0006",
    ClassVersion: 2,
    ClassName: "OcaNetworkSignalChannel",
});
/**
 * Adds the object number of the stream connector object to which this
 * media port belongs, and specifies on what index of the stream
 * connector this channel can be found. Return status indicates success
 * of operation.
 */
(function() {
var as = new SP.signature(SP.UINT32, SP.UINT16);
OcaNetworkSignalChannel.prototype.AddToConnector = function(Connector, Index) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 6, 2,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the object number of the stream connector object to which this
 * media port belongs, if any. If port does not belong to a stream
 * connector, returns zero. Return status indicates success of operation.
 */
(function() {
var rs = new SP.signature(SP.MAP(SP.UINT32, SP.UINT16));
OcaNetworkSignalChannel.prototype.GetConnectorPins = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 5, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the value of the IDAdvertised property. Return status indicates
 * success of operation.
 */
(function() {
var rs = new SP.signature(SP.BLOB);
OcaNetworkSignalChannel.prototype.GetIDAdvertised = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the object number of the stream network object to which this
 * media port belongs. Return status indicates success of operation.
 */
(function() {
var rs = new SP.signature(SP.UINT32);
OcaNetworkSignalChannel.prototype.GetNetwork = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 3, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the remote channel ID to which this channel is connected. Empty
 * if the channel is not connected (at least not directly to another
 * channel). For stream-oriented connection management this functionality
 * is not used (i.e. the remote channel ID will always be empty).
 */
(function() {
var rs = new SP.signature(SP.BLOB);
OcaNetworkSignalChannel.prototype.GetRemoteChannelID = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 8, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the value of the SourceOrSink property. Return status indicates
 * success of operation.
 */
(function() {
var rs = new SP.signature(SP.UINT8);
OcaNetworkSignalChannel.prototype.GetSourceOrSink = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 10, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the value of the Status property. Return status indicates success
 * of operation.
 */
(function() {
var rs = new SP.signature(SP.UINT8);
OcaNetworkSignalChannel.prototype.GetStatus = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 11, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Removes this channel from the passed stream connector. Return status
 * indicates success of operation.
 */
(function() {
var as = new SP.signature(SP.UINT32);
OcaNetworkSignalChannel.prototype.RemoveFromConnector = function(Connector) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 7, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Sets the value of the IDAdvertised property. Return status indicates
 * success of operation.
 */
(function() {
var as = new SP.signature(SP.BLOB);
OcaNetworkSignalChannel.prototype.SetIDAdvertised = function(IDAdvertised) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 2, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Sets the object number of the stream network object to which this
 * media port belongs. Return status indicates success of operation. Only
 * implemented for reconfigurable devices.
 */
(function() {
var as = new SP.signature(SP.UINT32);
OcaNetworkSignalChannel.prototype.SetNetwork = function(Network) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 4, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
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
var as = new SP.signature(SP.BLOB);
OcaNetworkSignalChannel.prototype.SetRemoteChannelID = function(RemoteChannelID) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 9, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();


/**
 * <b>DEPRECATED CLASS</b> <i>Replaced by class
 * </i><b><i>OcaControlNetwork </i></b><i>in version 3 of Connection
 * Management (CM3)</i> Abstract base class for defining network classes
 * to which this device belongs. This class is to be used for control and
 * monitoring networks only. For media transport networks, and for
 * networks that combine media transport and control, the
 * <b>OcaStreamNetwork</b> class should be used instead.
 */
function OcaNetwork(ObjectNumber, device) {
    OcaAgent.call(this, ObjectNumber, device);
};
mod.OcaNetwork = OcaNetwork;
OcaNetwork.prototype = Object.assign(Object.create(OcaAgent.prototype), {
    __oca_properties__: OcaAgent.prototype.__oca_properties__.extend({
        LinkType: new Property(new SP.signature(SP.UINT8), 3, 1, true, true, 0),
        IDAdvertised: new Property(new SP.signature(SP.BLOB), 3, 2, false, false, 0),
        ControlProtocol: new Property(new SP.signature(SP.UINT8), 3, 3, false, false, 0),
        MediaProtocol: new Property(new SP.signature(SP.UINT8), 3, 4, false, false, 0),
        Status: new Property(new SP.signature(SP.UINT8), 3, 5, false, false, 0),
        SystemInterfaces: new Property(new SP.signature(SP.LIST(OCA.OcaNetworkSystemInterfaceID)), 3, 6, false, false, 0),
        MediaPorts: new Property(new SP.signature(SP.LIST(SP.UINT32)), 3, 7, false, false, 0),
        Statistics: new Property(new SP.signature(OCA.OcaNetworkStatistics), 3, 8, false, false, 0),
    }),
    ClassID: "\u0001\u0002\u0001",
    ClassVersion: 2,
    LinkType: 0,
    ClassName: "OcaNetwork",
});
/**
 * Gets the network's link type (wired Ethernet, USB, etc.). Return
 * status indicates whether the operation was successful.
 */
(function() {
var rs = new SP.signature(SP.UINT8);
OcaNetwork.prototype.GetLinkType = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the network's IDAdvertised. Return status indicates whether the
 * operation was successful.
 */
(function() {
var rs = new SP.signature(SP.BLOB);
OcaNetwork.prototype.GetIDAdvertised = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 2, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the network's IDAdvertised. Return status indicates whether the
 * operation was successful.
 */
(function() {
var as = new SP.signature(SP.BLOB);
OcaNetwork.prototype.SetIDAdvertised = function(Name) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 3, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the network's ControlProtocol property. Return status indicates
 * whether the operation was successful.
 */
(function() {
var rs = new SP.signature(SP.UINT8);
OcaNetwork.prototype.GetControlProtocol = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 4, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the network's MediaProtocol property. This is a deprecated method
 * that always returns the value NONE.
 */
(function() {
var rs = new SP.signature(SP.UINT8);
OcaNetwork.prototype.GetMediaProtocol = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 5, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Retrieves the network's status. Return status indicates whether the
 * status was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT8);
OcaNetwork.prototype.GetStatus = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 6, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Retrieves network error statistics counter values. Return status
 * indicates whether the values were successfully retrieved.
 */
(function() {
var rs = new SP.signature(OCA.OcaNetworkStatistics);
OcaNetwork.prototype.GetStatistics = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 7, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Resets network error statistics counters. Return status indicates
 * whether the counters were successfully reset.
 */
(function() {
OcaNetwork.prototype.ResetStatistics = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 8, 0);
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the list of system interface IDs that this network is using.
 * Return status indicates success of the operation.
 */
(function() {
var rs = new SP.signature(SP.LIST(OCA.OcaNetworkSystemInterfaceID));
OcaNetwork.prototype.GetSystemInterfaces = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 9, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the list of system interface IDs that this network will use.
 * Return status indicates success of the operation. This method is not
 * implemented by all network implementations.
 */
(function() {
var as = new SP.signature(SP.LIST(OCA.OcaNetworkSystemInterfaceID));
OcaNetwork.prototype.SetSystemInterfaces = function(Interfaces) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 10, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Deprecated method. Always returns status INVALID_REQUEST. Media
 * transport is now managed by the class <b>OcaStreamNetwork.</b>
 */
(function() {
var rs = new SP.signature(SP.LIST(SP.UINT32));
OcaNetwork.prototype.GetMediaPorts = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 11, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Start up this network.
 */
(function() {
OcaNetwork.prototype.Startup = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 12, 0);
    return this.device.send_command(cmd);
}
})();
/**
 * Shut down this network.
 */
(function() {
OcaNetwork.prototype.Shutdown = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 13, 0);
    return this.device.send_command(cmd);
}
})();


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
 */
function OcaRamper(ObjectNumber, device) {
    OcaAgent.call(this, ObjectNumber, device);
};
mod.OcaRamper = OcaRamper;
OcaRamper.prototype = Object.assign(Object.create(OcaAgent.prototype), {
    __oca_properties__: OcaAgent.prototype.__oca_properties__.extend({
        State: new Property(new SP.signature(SP.UINT8), 3, 1, false, false, 0),
        RampedProperty: new Property(new SP.signature(OCA.OcaProperty), 3, 2, false, false, 0),
        TimeMode: new Property(new SP.signature(SP.UINT8), 3, 3, false, false, 0),
        StartTime: new Property(new SP.signature(SP.UINT64), 3, 4, false, false, 0),
        Duration: new Property(new SP.signature(SP.FLOAT32), 3, 5, false, false, 0),
        InterpolationLaw: new Property(new SP.signature(SP.UINT8), 3, 6, false, false, 0),
        Goal: new Property(new SP.signature(SP.FLOAT64), 3, 7, false, false, 0),
    }),
    ClassID: "\u0001\u0002\u0003",
    ClassVersion: 2,
    ClassName: "OcaRamper",
});
/**
 * Executes the given ramper command. The return value indicates whether
 * the command was successfully executed.
 */
(function() {
var as = new SP.signature(SP.UINT8);
OcaRamper.prototype.Control = function(Command) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 1, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets current state of ramper. The return value indicates whether the
 * state was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT8);
OcaRamper.prototype.GetState = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 2, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets definition of ramped property. The return value indicates whether
 * the object number was successfully retrieved.
 */
(function() {
var rs = new SP.signature(OCA.OcaProperty);
OcaRamper.prototype.GetRampedProperty = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 3, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Defines property to be ramped. The return value indicates whether the
 * definition was successful.
 */
(function() {
var as = new SP.signature(OCA.OcaProperty);
OcaRamper.prototype.SetRampedProperty = function(property) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 4, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets ramper time mode (absolute or relative). The return value
 * indicates whether the time mode was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT8);
OcaRamper.prototype.GetTimeMode = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 5, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets ramper time mode (absolute or relative). The return value
 * indicates whether the time mode was successfully set.
 */
(function() {
var as = new SP.signature(SP.UINT8);
OcaRamper.prototype.SetTimeMode = function(TimeMode) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 6, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets ramp start time. The return value indicates whether the start
 * time was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT64);
OcaRamper.prototype.GetStartTime = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 7, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets ramper start time. The return value indicates whether the start
 * time was successfully set.
 */
(function() {
var as = new SP.signature(SP.UINT64);
OcaRamper.prototype.SetStartTime = function(TimeMode) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 8, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets ramp duration. The return value indicates whether the duration
 * was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32);
OcaRamper.prototype.GetDuration = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 9, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets ramp duration. The return value indicates whether the duration
 * was successfully set.
 */
(function() {
var as = new SP.signature(SP.FLOAT32);
OcaRamper.prototype.SetDuration = function(Duration) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 10, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Retrieves interpolation law setting. The return value indicates
 * whether the setting was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT8);
OcaRamper.prototype.GetInterpolationLaw = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 11, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets ramp interpolation law. The return value indicates whether the
 * law was successfully set.
 */
(function() {
var as = new SP.signature(SP.UINT8);
OcaRamper.prototype.SetInterpolationLaw = function(law) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 12, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Retrieves ramp goal value. The return value indicates whether the
 * duration was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.FLOAT64);
OcaRamper.prototype.GetGoal = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 13, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets ramp goal value. The return value indicates whether the duration
 * was successfully set.
 */
(function() {
var as = new SP.signature(SP.FLOAT64);
OcaRamper.prototype.SetGoal = function(goal) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 14, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();


/**
 * <b>DEPRECATED CLASS</b> <i>Replaced by
 * </i><b><i>OcaMediaClock3</i></b> A media clock, internal or external.
 */
function OcaMediaClock(ObjectNumber, device) {
    OcaAgent.call(this, ObjectNumber, device);
};
mod.OcaMediaClock = OcaMediaClock;
OcaMediaClock.prototype = Object.assign(Object.create(OcaAgent.prototype), {
    __oca_properties__: OcaAgent.prototype.__oca_properties__.extend({
        Type: new Property(new SP.signature(SP.UINT8), 3, 1, false, false, 0),
        DomainID: new Property(new SP.signature(SP.UINT16), 3, 2, false, false, 0),
        RatesSupported: new Property(new SP.signature(SP.LIST(OCA.OcaMediaClockRate)), 3, 3, true, true, 0),
        CurrentRate: new Property(new SP.signature(OCA.OcaMediaClockRate), 3, 4, false, false, 0),
        LockState: new Property(new SP.signature(SP.UINT8), 3, 5, false, false, 0),
    }),
    ClassID: "\u0001\u0002\u0006",
    ClassVersion: 2,
    RatesSupported: 0,
    ClassName: "OcaMediaClock",
});
/**
 * Gets the value of the <b>Type </b>property. The return value indicates
 * whether the value was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT8);
OcaMediaClock.prototype.GetType = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the <b>Type </b>property. The return value indicates
 * whether the value was successfully set. Optional method, may not be
 * supported in all implementations.
 */
(function() {
var as = new SP.signature(SP.UINT8);
OcaMediaClock.prototype.SetType = function(Type) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 2, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the value of the <b>DomainID </b>property. The return value
 * indicates whether the value was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT16);
OcaMediaClock.prototype.GetDomainID = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 3, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the <b>DomainID </b>property. The return value
 * indicates whether the value was successfully set. Optional method, may
 * not be supported in all implementations.
 */
(function() {
var as = new SP.signature(SP.UINT16);
OcaMediaClock.prototype.SetDomainID = function(ID) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 4, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the list of supported sampling rates. The return value indicates
 * whether the list was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.LIST(OCA.OcaMediaClockRate));
OcaMediaClock.prototype.GetSupportedRates = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 5, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the current sampling rate. The return value indicates whether the
 * value was successfully retrieved.
 */
(function() {
var rs = new SP.signature(OCA.OcaMediaClockRate);
OcaMediaClock.prototype.GetRate = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 6, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the sampling rate. The return value indicates whether the rate
 * was successfully set.
 */
(function() {
var as = new SP.signature(OCA.OcaMediaClockRate);
OcaMediaClock.prototype.SetRate = function(rate) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 7, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the current media clock lock state. The return value indicates
 * whether the value was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT8);
OcaMediaClock.prototype.GetLockState = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 8, 0);
    return this.device.send_command(cmd, rs);
}
})();


/**
 * <b>DEPRECATED CLASS</b> <i>Replaced by class
 * </i><b><i>OcaMediaTransportNetwork </i></b><i>in version 3 of
 * Connection Management (CM3)</i> Abstract base class for defining
 * network classes to which this device belongs. May be a media transport
 * network, a control and monitoring network, or a network that does
 * both. There shall be one OcaStreamNetwork instance for each network to
 * which the device belongs. This class may be subclassed to support
 * networks of various types.
 */
function OcaStreamNetwork(ObjectNumber, device) {
    OcaAgent.call(this, ObjectNumber, device);
};
mod.OcaStreamNetwork = OcaStreamNetwork;
OcaStreamNetwork.prototype = Object.assign(Object.create(OcaAgent.prototype), {
    __oca_properties__: OcaAgent.prototype.__oca_properties__.extend({
        ControlProtocol: new Property(new SP.signature(SP.UINT8), 3, 3, false, false, 0),
        IDAdvertised: new Property(new SP.signature(SP.BLOB), 3, 2, false, false, 0),
        LinkType: new Property(new SP.signature(SP.UINT8), 3, 1, true, true, 0),
        MediaProtocol: new Property(new SP.signature(SP.UINT8), 3, 4, false, false, 0),
        SignalChannelsSink: new Property(new SP.signature(SP.LIST(SP.UINT32)), 3, 10, false, false, 0),
        SignalChannelsSource: new Property(new SP.signature(SP.LIST(SP.UINT32)), 3, 9, false, false, 0),
        Statistics: new Property(new SP.signature(OCA.OcaNetworkStatistics), 3, 11, false, false, 0),
        Status: new Property(new SP.signature(SP.UINT8), 3, 5, false, false, 0),
        StreamConnectorsSink: new Property(new SP.signature(SP.LIST(SP.UINT32)), 3, 8, false, false, 0),
        StreamConnectorsSource: new Property(new SP.signature(SP.LIST(SP.UINT32)), 3, 7, false, false, 0),
        SystemInterfaces: new Property(new SP.signature(SP.LIST(OCA.OcaNetworkSystemInterfaceID)), 3, 6, false, false, 0),
    }),
    ClassID: "\u0001\u0002\n",
    ClassVersion: 2,
    LinkType: 0,
    ClassName: "OcaStreamNetwork",
});
/**
 * Gets the network's link type (wired Ethernet, USB, etc.). Return
 * status indicates whether the operation was successful.
 */
(function() {
var rs = new SP.signature(SP.UINT8);
OcaStreamNetwork.prototype.GetLinkType = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the network's IDAdvertised. Return status indicates whether the
 * operation was successful.
 */
(function() {
var rs = new SP.signature(SP.BLOB);
OcaStreamNetwork.prototype.GetIDAdvertised = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 2, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the network's IDAdvertised. Return status indicates whether the
 * operation was successful.
 */
(function() {
var as = new SP.signature(SP.BLOB);
OcaStreamNetwork.prototype.SetIDAdvertised = function(Name) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 3, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the network's ControlProtocol property. Return status indicates
 * whether the operation was successful.
 */
(function() {
var rs = new SP.signature(SP.UINT8);
OcaStreamNetwork.prototype.GetControlProtocol = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 4, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the network's MediaProtocol property. Return status indicates
 * whether the operation was successful.
 */
(function() {
var rs = new SP.signature(SP.UINT8);
OcaStreamNetwork.prototype.GetMediaProtocol = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 5, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Retrieves the network's status. Return status indicates whether the
 * status was successfully retrieved.
 */
(function() {
var rs = new SP.signature(SP.UINT8);
OcaStreamNetwork.prototype.GetStatus = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 6, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Retrieves network error statistics counter values. Return status
 * indicates whether the values were successfully retrieved.
 */
(function() {
var rs = new SP.signature(OCA.OcaNetworkStatistics);
OcaStreamNetwork.prototype.GetStatistics = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 7, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Resets network error statistics counters. Return status indicates
 * whether the counters were successfully reset.
 */
(function() {
OcaStreamNetwork.prototype.ResetStatistics = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 8, 0);
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the list of system interface IDs that this network is using.
 * Return status indicates success of the operation.
 */
(function() {
var rs = new SP.signature(SP.LIST(OCA.OcaNetworkSystemInterfaceID));
OcaStreamNetwork.prototype.GetSystemInterfaces = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 9, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the list of system interface IDs that this network will use.
 * Return status indicates success of the operation. This method is not
 * implemented by all network implementations.
 */
(function() {
var as = new SP.signature(SP.LIST(OCA.OcaNetworkSystemInterfaceID));
OcaStreamNetwork.prototype.SetSystemInterfaces = function(Interfaces) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 10, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
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
var rs = new SP.signature(SP.LIST(SP.UINT32));
OcaStreamNetwork.prototype.GetStreamConnectorsSource = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 11, 0);
    return this.device.send_command(cmd, rs);
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
var as = new SP.signature(SP.LIST(SP.UINT32));
OcaStreamNetwork.prototype.SetStreamConnectorsSource = function(StreamConnectors) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 12, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
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
var rs = new SP.signature(SP.LIST(SP.UINT32));
OcaStreamNetwork.prototype.GetStreamConnectorsSink = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 13, 0);
    return this.device.send_command(cmd, rs);
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
var as = new SP.signature(SP.LIST(SP.UINT32));
OcaStreamNetwork.prototype.SetStreamConnectorsSink = function(StreamConnectors) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 14, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
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
var rs = new SP.signature(SP.LIST(SP.UINT32));
OcaStreamNetwork.prototype.GetSignalChannelsSource = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 15, 0);
    return this.device.send_command(cmd, rs);
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
var as = new SP.signature(SP.LIST(SP.UINT32));
OcaStreamNetwork.prototype.SetSignalChannelsSource = function(SignalChannels) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 16, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
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
var rs = new SP.signature(SP.LIST(SP.UINT32));
OcaStreamNetwork.prototype.GetSignalChannelsSink = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 17, 0);
    return this.device.send_command(cmd, rs);
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
var as = new SP.signature(SP.LIST(SP.UINT32));
OcaStreamNetwork.prototype.SetSignalChannelsSink = function(SignalChannels) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 18, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Start up this network.
 */
(function() {
OcaStreamNetwork.prototype.Startup = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 19, 0);
    return this.device.send_command(cmd);
}
})();
/**
 * Shut down this network.
 */
(function() {
OcaStreamNetwork.prototype.Shutdown = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 20, 0);
    return this.device.send_command(cmd);
}
})();


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
 */
function OcaStreamConnector(ObjectNumber, device) {
    OcaAgent.call(this, ObjectNumber, device);
};
mod.OcaStreamConnector = OcaStreamConnector;
OcaStreamConnector.prototype = Object.assign(Object.create(OcaAgent.prototype), {
    __oca_properties__: OcaAgent.prototype.__oca_properties__.extend({
        IDAdvertised: new Property(new SP.signature(SP.BLOB), 3, 2, false, false, 0),
        OwnerNetwork: new Property(new SP.signature(SP.UINT32), 3, 1, false, false, 0),
        Pins: new Property(new SP.signature(SP.MAP(SP.UINT16, SP.UINT32)), 3, 5, false, false, 0),
        SourceOrSink: new Property(new SP.signature(SP.UINT8), 3, 3, false, false, 0),
        Status: new Property(new SP.signature(SP.UINT8), 3, 6, false, false, 0),
        Streams: new Property(new SP.signature(SP.MAP(SP.UINT16, OCA.OcaStream)), 3, 4, false, false, 0),
    }),
    ClassID: "\u0001\u0002\u000b",
    ClassVersion: 2,
    ClassName: "OcaStreamConnector",
});
/**
 * Connects a stream to this connector. Return status indicates success
 * of operation.
 */
(function() {
var as = new SP.signature(OCA.OcaStream);
var rs = new SP.signature(SP.UINT16);
OcaStreamConnector.prototype.ConnectStream = function(Stream) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 7, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Disconnects a stream from this connector. Return status indicates
 * success of operation.
 */
(function() {
var as = new SP.signature(SP.UINT16);
OcaStreamConnector.prototype.DisconnectStream = function(StreamID) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 8, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Gets the value of the IDAdvertised property. Return status indicates
 * success of operation.
 */
(function() {
var rs = new SP.signature(SP.BLOB);
OcaStreamConnector.prototype.GetIDAdvertised = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 3, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the object number of the <b>OcaStreamNetwork </b>object to which
 * this connector belongs. Return status indicates success of operation.
 */
(function() {
var rs = new SP.signature(SP.UINT32);
OcaStreamConnector.prototype.GetOwnerNetwork = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 1, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the list of object numbers of <b>OcaNetworkSignalChannel
 * </b>objects connected to this connector. Return status indicates
 * success of operation.
 */
(function() {
var rs = new SP.signature(SP.MAP(SP.UINT16, SP.UINT32));
OcaStreamConnector.prototype.GetPins = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 10, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the value of the SourceOrSink property. Return status indicates
 * success of operation.
 */
(function() {
var rs = new SP.signature(SP.UINT8);
OcaStreamConnector.prototype.GetSourceOrSink = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 5, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the value of the Status property. Return status indicates success
 * of operation.
 */
(function() {
var rs = new SP.signature(SP.UINT8);
OcaStreamConnector.prototype.GetStatus = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 11, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Gets the map of OcaStream items connected to this connector. Return
 * status indicates success of operation.
 */
(function() {
var rs = new SP.signature(SP.MAP(SP.UINT16, OCA.OcaStream));
OcaStreamConnector.prototype.GetStreams = function() {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 9, 0);
    return this.device.send_command(cmd, rs);
}
})();
/**
 * Sets the value of the IDAdvertised property. Return status indicates
 * success of operation.
 */
(function() {
var as = new SP.signature(SP.BLOB);
OcaStreamConnector.prototype.SetIDAdvertised = function(IDAdvertised) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 4, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Sets the object number of the <b>OcaStreamNetwork </b>object to which
 * this connector belongs. Return status indicates success of operation.
 * Only implemented for reconfigurable devices.
 */
(function() {
var as = new SP.signature(SP.UINT32);
OcaStreamConnector.prototype.SetOwnerNetwork = function(Network) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 2, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
}
})();
/**
 * Sets the value of the SourceOrSink property. Return status indicates
 * success of operation. Only implemented for reconfigurable devices.
 * Note that this method can only be called when the SignalChannels
 * property is empty, i.e. does not contain any actual channels.
 */
(function() {
var as = new SP.signature(SP.UINT8);
OcaStreamConnector.prototype.SetSourceOrSink = function(SourceOrSink) {
    var cmd = new OCA.CommandRrq(this.ObjectNumber, 3, 6, 1,
                            as.encoder(Array.prototype.slice.call(arguments)));
    return this.device.send_command(cmd);
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