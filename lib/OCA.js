(function(w, module) {
var f = function(w, OCA) {
 var SP = w.SP;
 var Connection = function() {
    this.inbuf = null;
    this.inpos = 0;
 };
 Connection.prototype = {
    read: function(buf) {
        var tmp, len;

        if (this.inbuf) {
            len = this.inbuf.byteLength - this.inpos;
            tmp = new ArrayBuffer(len + buf.byteLength);
            tmp = new Uint8Array(tmp, 0, len);
            memcpy(tmp, new ArrayBuffer(this.inbuf, this.inpos), len);
            tmp = new Uint8Array(tmp.buffer, len);
            memcpy(tmp, new Uint8Array(buf));
            this.inbuf = null
            this.inpos = 0;
            buf = tmp.buffer;
        }

        var ret;
        var pos;

        do {
            ret = [];
            len = OCA.decodeMessage(new DataView(buf), pos, ret);
            if (len == -1) {
                this.inbuf = buf;
                this.inpos = pos;
                break;
            }
            pos = len;
            this.incoming(ret);
        } while (pos < buf.byteLength);
    },
 };
 OCA.Connection = Connection;

 function ClientConnection() {
    this.command_handles = new Map();
    this.subscribers = new Map();
    Connection.call(this);
 };
 ClientConnection.prototype = Object.assign(Object.create(Connection.prototype), {
    get_command_handle: function() {
        var id;
        var handles = this.command_handles;

        do {
            id = (Math.random()*(1+handles.size)*2)|0;
        } while (handles.has(id));

        handles.set(id, null);

        return id;
    },
    get_new_subscriber: function(callback) {
        var id;
        while (this.subscribers.has(id = (Math.random()*0xffff)|0));
        this.subscribers.set(id, callback);
        return new OCA.OcaMethod(id, new OCA.OcaMethodID(1, 1));
    },
    send_command: function(cmd, return_signature) {
        var id = this.get_command_handle();
        cmd.handle = id;
        var buf = OCA.encodeMessage(cmd); 

        var promise = new Promise(function(success, failure) {
            this.command_handles.set(id, [ return_signature, success, failure ]);
        }.bind(this));

        this.write(buf);

        return promise;
    },
    incoming: function(a) {
        var i, o;

        for (i = 0; i < a.length; i++) {
            o = a[i];
            //console.log("INCOMING", o);
            if (o instanceof OCA.Response) {
                var h = this.command_handles.get(o.handle);
                if (!h) {
                    console.error("Unknown handle in response %o", o);
                }
                this.command_handles.delete(o.handle);
                if (o.status_code !== 0) {
                    h[2](o);
                } else if (!h[0]) {
                    h[1](o);
                } else {
                    var args = (o.param_count) ? h[0].low_decode(new DataView(o.parameters)) : [];
                    h[1].apply(w, args);
                }
            } else if (o instanceof OCA.Notification) {
                if (!this.subscribers.has(o.target)) {
                    console.error("Bad target for notification", o);
                    continue;
                }
                this.subscribers.get(o.target)(o);
            } else {
                console.warn("Unhandled OCA packet: %o", o);
            }
        }
    },
 });
 OCA.ClientConnection = ClientConnection;

 OCA.warn = function() {
     if (!w.console) return;
     try {
         w.console.warn.apply(w.console, arguments);
     } catch (e) {}
 };
 OCA.log = function() {
     if (!w.console) return;
     try {
         w.console.log.apply(w.console, arguments);
     } catch (e) {}
 };

 function memcpy(dst, src, len) {
     var i;
     for (i = 0; i < len; i++) {
         dst[i] = src[i];
     }
 }

 var Command = function(target, method_level, method_index, param_count, parameters) {
     this.target = target|0;
     this.method_level = method_level|0;
     this.method_index = method_index|0;
     this.param_count = param_count|0;
     this.parameters = parameters||null;
 };
 Command.prototype = {
     messageType: 0,
     encode_to: function(dst, pos) {
        var len;
        pos = pos|0;
        dst.setUint32(pos, this.encoded_length());
        pos += 4;
        dst.setUint32(pos, this.handle);
        pos += 4;
        dst.setUint32(pos, this.target);
        pos += 4;
        dst.setUint16(pos, this.method_level);
        pos += 2;
        dst.setUint16(pos, this.method_index);
        pos += 2;
        dst.setUint8(pos, this.param_count);
        pos ++;
        if (this.param_count) {
            if (this.parameters instanceof SP.encoder) {
                pos = this.parameters.encode_to(dst, pos);
            } else {
                len = this.parameters.byteLength;
                memcpy(new Uint8Array(dst.buffer, dst.byteOffset+pos, len),
                       new Uint8Array(this.parameters, 0, len), len);
                pos += len;
            }
        }
        return pos;
     },
     encoded_length: function() {
        return 17 + (this.param_count ? this.parameters.byteLength : 0);
     },
     decode_from: function(data, pos, len) {
        var len = data.getUint32(pos);
        pos += 4;
        this.handle = data.getUint32(pos);
        pos += 4;
        this.target = data.getUint32(pos);
        pos += 4;
        this.method_level = data.getUint16(pos);
        pos += 2;
        this.method_index = data.getUint16(pos);
        pos += 2;
        this.param_count = data.getUint8(pos);
        pos ++;
        len -= 17;
        if (len < 0) throw("Bad Command Length.");
        if (len > 0) {
            if (!this.param_count)
                OCA.warn("Decoding Command with parameterCount=0 but %o bytes of parameters", len);
            this.parameters = data.buffer.slice(data.byteOffset+pos, data.byteOffset+pos+len);
            pos += len;
        }
        return pos;
     },
     response: function(status_code, param_count, parameters) {
        return new Response(this.handle, status_code, param_count, parameters);
     },
 };
 OCA.Command = Command;

 var CommandRrq = function() {
     Command.apply(this, arguments);
 };
 CommandRrq.prototype = Object.create(Command.prototype);
 CommandRrq.prototype.messageType = 1;
 OCA.CommandRrq = CommandRrq;

 function Response(handle, status_code, param_count, parameters) {
     this.handle = handle|0;
     this.status_code = status_code|0;
     this.param_count = param_count|0;
     this.parameters = parameters||null;
 };
 Response.prototype = {
     messageType: 3,
     encoded_length: function() {
        return 10 + (this.param_count ? this.parameters.byteLength : 0);
     },
     decode_from: function(data, pos, data_len) {
        var len = data.getUint32(pos);
        pos += 4;
        this.handle = data.getUint32(pos);
        pos += 4;
        this.status_code = data.getUint8(pos);
        pos ++;
        this.param_count = data.getUint8(pos);
        pos ++;
        len -= 10;
        if (len < 0) throw("Bad Response length.");
        if (len > 0) {
            if (!this.param_count)
                OCA.warn("Decoding response with parameterCount=0 but %o bytes of parameters", len);
            this.parameters = data.buffer.slice(data.byteOffset+pos, data.byteOffset+pos+len);
            pos += len;
        }
        return pos;
     },
     encode_to: function(dst, pos) {
        var len;
        dst.setUint32(pos, this.encoded_length());
        pos += 4;
        dst.setUint32(pos, this.handle);
        pos += 4;
        dst.setUint8(pos, this.status_code);
        pos ++;
        dst.setUint8(pos, this.param_count);
        pos ++;
        if (this.param_count) {
            if (this.parameters instanceof SP.encoder) {
                pos = this.parameters.encode_to(dst, pos);
            } else {
                len = this.parameters.byteLength;
                memcpy(new Uint8Array(dst.buffer, dst.byteOffset+pos, len),
                       new Uint8Array(this.parameters, 0, len), len);
                pos += len;
            }
        }
        return pos;
     },
 };
 OCA.Response = Response;

 var Notification = function(target, method_level, method_index, context,
                             event, param_count, parameters) {
     this.target = target|0;
     this.method_level = method_level|0;
     this.method_index = method_index|0;
     this.context = context;
     this.event = event;
     this.param_count = param_count|0;
     this.parameters = parameters||null;
 };
 var notification_signature = new SP.signature(SP.BLOB, OCA.OcaEvent);
 Notification.prototype = {
     messageType: 2,
     encode_to: function(dst, pos) {
        var len;
        dst.setUint32(pos, this.encoded_length());
        pos += 4;
        dst.setUint32(pos, this.target);
        pos += 4;
        dst.setUint16(pos, this.method_level);
        pos += 2;
        dst.setUint16(pos, this.method_index);
        pos += 2;
        dst.setUint8(pos, this.param_count);
        pos ++;
        if (this.context && (len = this.context.byteLength)) {
            dst.setUint16(len);
            pos += 2;
            memcpy(new Uint8Array(dst.buffer, dst.byteOffset+pos, len),
                   new Uint8Array(this.context, 0, len), len);
            pos += len;
        } else {
            dst.setUint16(pos, 0);
            pos += 2;
        }
        dst.setUint32(pos, this.event.EmitterONo);
        pos += 4;
        dst.setUint16(pos, this.event.EventID.DefLevel);
        pos += 2;
        dst.setUint16(pos, this.event.EventID.EventIndex);
        pos += 2;
        if (this.param_count > 1) {
            if (this.parameters instanceof SP.encoder) {
                pos = this.parameters.encode_to(dst, pos);
            } else {
                len = this.parameters.byteLength;
                memcpy(new Uint8Array(dst.buffer, dst.byteOffset+pos, len),
                       new Uint8Array(this.parameters, 0, len), len);
                pos += len;
            }
        }
        return pos;
     },
     encoded_length: function() {
        return 23 + (this.param_count > 1 ? this.parameters.byteLength : 0)
                  + (this.context ? this.context.byteLength : 0);
     },
     decode_from: function(data, pos, len) {
        var len = data.getUint32(pos);
        pos += 4;
        this.target = data.getUint32(pos);
        pos += 4;
        this.method_level = data.getUint16(pos);
        pos += 2;
        this.method_index = data.getUint16(pos);
        pos += 2;
        this.param_count = data.getUint8(pos);
        pos ++;
        var context_length = data.getUint16(pos);
        pos += 2;
        if (context_length) {
            this.context = data.buffer.slice(data.byteOffset+pos, data.byteOffset+pos+context_length);
            pos += context_length;
        } else {
            this.context = null
        }
        this.event = new OCA.OcaEvent(data.getUint32(pos),
                                      new OCA.OcaEventID(data.getUint16(pos+4), data.getUint16(pos+6)));
        pos += 8;
        len -= 23 + context_length;
        if (len < 0) throw("Bad Notification Length.");
        if (len > 0) {
            if (this.param_count <= 1)
                OCA.warn("Decoding Notification with parameterCount=%o but %o bytes of parameters",
                         this.param_count, len);
            this.parameters = data.buffer.slice(data.byteOffset+pos, data.byteOffset+pos+len);
            pos += len;
        }
        return pos;
     },
 };
 OCA.Notification = Notification;

 var KeepAlive = function(time) {
     this.time = time;
 };
 KeepAlive.prototype = {
     messageType: 4,
     decode_from: function(data, pos, len) {
        if (len == 4) {
            this.time = data.getUint32(pos);
            pos += 4;
        } else if (len == 2) {
            this.time = data.getUint16(pos) * 1000;
            pos += 2;
        } else throw("Bad keepalive timeout length.");
        return pos;
     },
     encode_to: function(dst, pos) {
        if (this.time % 1000) {
            dst.setUint32(pos, this.time);
            pos += 4;
        } else {
            dst.setUint16(pos, this.time/1000);
            pos += 2;
        }
        return pos;
     },
     encoded_length: function() {
        if (this.time % 1000) {
            return 4;
        } else {
            return 2;
        }
     },
 };
 OCA.KeepAlive = KeepAlive;

 function decodeMessage(data, pos, ret) {
     var message_offset;

     pos = pos|0;
     if (data.getUint8(pos) != 0x3b) throw("Bad sync value.");
     pos ++;
     var protocolVersion = data.getUint16(pos);
     pos += 2;
     var messageSize = data.getUint32(pos);
     pos += 4;
     var messageType = data.getUint8(pos);
     pos ++;
     var messageCount = data.getUint16(pos);
     pos += 2;

     // this is one index after this message
     message_offset = data.byteOffset+pos - 9 + messageSize;

     if (message_offset > data.byteLength) return -1;

     ret.length = messageCount;

     var constructor;

     switch (messageType) {
     case 0: // Command
         constructor = Command; 
         break;
     case 1: // CommandRrq
         constructor = CommandRrq; 
         break;
     case 2: // Notification
         constructor = Notification;
         break;
     case 3: // Response
         constructor = Response;
         break;
     case 4: // Keepalive
         if (messageCount != 1) throw("Bad KeepAlive message count.");
         constructor = KeepAlive;
         break;
     default:
         throw("Bad Message Type");
     }

     var i;

     for (i = 0; i < messageCount; i++) {
         ret[i] = Object.create(constructor.prototype);
         pos = ret[i].decode_from(data, pos, message_offset - data.byteOffset - pos);
     }

     if (pos != message_offset) throw("Decode error: " + pos + " vs " + message_offset );

     return pos;
 }

 function encodeMessage(a) {
     var len, pos, tmp;
     if (!(a instanceof Array)) {
         a = [ a ];
     }

     // message header
     len = 10;
     var type = a[0].messageType;

     for (tmp of a) {
        if (tmp.messageType != type) throw("Cannot combine different types in one message.");
        len += tmp.encoded_length();
     }

     var buf = new ArrayBuffer(len);
     var dst = new DataView(buf);

     pos = 0;

     dst.setUint8(pos, 0x3b);
     pos += 1;
     dst.setUint16(pos, 1);
     pos += 2;
     dst.setUint32(pos, len - 1);
     pos += 4;
     dst.setUint8(pos, type);
     pos ++;
     dst.setUint16(pos, a.length);
     pos += 2;

     for (tmp of a) pos = tmp.encode_to(dst, pos);

     if (pos != len) throw("Bad Message length calculation: " + pos + " vs " + len);

     return buf;
 }

 OCA.decodeMessage = decodeMessage;
 OCA.encodeMessage = encodeMessage;

 var RemoteDevice = function(connection) {
     this.objects = new Map();
     this.connection = connection;
     this.modules = Array.prototype.slice.call(arguments, 1);
     if (!this.modules.length) this.modules.push(OCA.ControlClasses);
     this.device_manager = this.allocate("OcaDeviceManager", 1);
     this.root = this.allocate("OcaBlock", 100);
     this.subscription_manager = this.allocate("OcaSubscriptionManager", 4);
 };
 RemoteDevice.prototype = {
     send_command: function(cmd, return_signature) {
        return this.connection.send_command(cmd, return_signature);
     },
     add_subscription: function(event, callback) {
        var method = this.connection.get_new_subscriber(callback);
        return this.subscription_manager.AddSubscription(event, method,
                                                         new ArrayBuffer(0),
                                                         OCA.OcaNotificationDeliveryMode.Reliable,
                                                         new ArrayBuffer(0));
     },
     find_class_by_name: function(name) {
        var ret;
        for (var i = 0; i < this.modules.length; i++) {
            if (ret = this.modules[i].find_class_by_name(name)) {
                return ret;
            }
        }
        return null;
     },
     find_best_class: function(id) {
        var ret;
        if (typeof(id) === "object" && id.ClassID) id = id.ClassID;
        while (id.length) {
            if (ret = this.find_class_by_id(id)) return ret;
            id = id.substr(0, id.length-1);
        }

        return null;
     },
     find_class_by_id: function(id) {
        var ret;
        if (typeof(id) === "object" && id.ClassID) id = id.ClassID;
        for (var i = 0; i < this.modules.length; i++) {
            if (ret = this.modules[i].find_class_by_id(id)) {
                return ret;
            }
        }
        return null;
     },
     allocate: function(c, ono) {
        if (typeof(c) === "string") c = this.find_class_by_name(c);
        if (typeof(ono) === "object") ono = ono.valueOf();
        var objects = this.objects;
        if (!objects.has(ono)) {
            objects.set(ono, new c(ono, this));
        }
        return objects.get(ono);
     },
     resolve_object: function(oid) {
        var ono, id;

        if (oid instanceof OCA.OcaObjectIdentification) {
            id = oid.ClassIdentification;
            ono = oid.ONo;
        } else if (oid instanceof OCA.OcaBlockMember) {
            id = oid.MemberObjectIdentification.ClassIdentification;
            ono = oid.MemberObjectIdentification.ONo;
        } else throw("Bad Argument");

        return this.allocate(this.find_best_class(id), ono);
     },
     discover_all: function() {
        return this.root.GetMembersRecursive().then(function(res) {
            return res.map(this.resolve_object, this);
        }.bind(this));
     },
 };
 OCA.RemoteDevice = RemoteDevice;
};
if (module) module.exports = f;
else f(w, w.OCA || (w.OCA = {}));
})(this, module);
