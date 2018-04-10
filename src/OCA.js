import {
    encoder,
    signature,
    BLOB
  } from './signature_parser.js';

import {
    OcaEvent,
    OcaEventID,
    OcaNotificationDeliveryMode,
    OcaObjectIdentification,
    OcaBlockMember,
    OcaMethod,
    OcaMethodID
  } from './Types.js';



export function warn(...args) {
  try {
    console.warn(...args);
  } catch (e) {}
}

export function log(...args) {
  try {
    console.log(...args);
  } catch (e) {}
}

export function error(...args) {
  try {
    console.error(...args);
  } catch (e) {}
}

export class Connection
{
  constructor()
  {
    this.inbuf = null;
    this.inpos = 0;
  }

  read(buf) {
    var tmp, len;

    if (this.inbuf) {
      len = this.inbuf.byteLength - this.inpos;
      tmp = new ArrayBuffer(len + buf.byteLength);
      tmp = new Uint8Array(tmp, 0, len);
      memcpy(tmp, new Uint8Array(this.inbuf, this.inpos), len);
      tmp = new Uint8Array(tmp.buffer, len);
      memcpy(tmp, new Uint8Array(buf), buf.byteLength);
      this.inbuf = null;
      this.inpos = 0;
      buf = tmp.buffer;
    }

    var ret;
    var pos;

    do {
      ret = [];
      len = decodeMessage(new DataView(buf), pos, ret);
      if (len == -1) {
        this.inbuf = buf;
        this.inpos = pos;
        break;
      }
      pos = len;
      this.incoming(ret);
    } while (pos < buf.byteLength);
  }

  incoming(a)
  {
  }

  write(buf)
  {
  }
}

export class ClientConnection extends Connection
{
  constructor()
  {
    super();
    this.command_handles = new Map();
    this.subscribers = new Map();
  }

  get_command_handle()
  {
    var id;
    var handles = this.command_handles;

    do {
      id = (Math.random()*(1+handles.size)*2)|0;
    } while (handles.has(id));

    handles.set(id, null);

    return id;
  }

  get_new_subscriber(callback)
  {
    var id;
    while (this.subscribers.has(id = (Math.random()*0xffff)|0)) {}
    this.subscribers.set(id, callback);
    return new OcaMethod(id, new OcaMethodID(1, 1));
  }

  send_command(cmd, return_signature)
  {
    var id = this.get_command_handle();
    cmd.handle = id;
    var buf = encodeMessage(cmd); 

    var promise = new Promise(function(success, failure) {
                              this.command_handles.set(id, [ return_signature, success, failure ]);
                              }.bind(this));

    this.write(buf);

    return promise;
  }

  incoming(a)
  {
    var i, o;

    for (i = 0; i < a.length; i++) {
      o = a[i];
      //log("INCOMING", o);
      if (o instanceof Response) {
        var h = this.command_handles.get(o.handle);
        if (!h) {
          error("Unknown handle in response %o", o);
        }
        this.command_handles.delete(o.handle);
        if (o.status_code !== 0) {
          h[2](o);
        } else if (!h[0]) {
          h[1](o);
        } else {
          var retval;
          if (o.param_count) {
            retval = h[0].decode(new DataView(o.parameters));
          }
          h[1](retval);
        }
      } else if (o instanceof Notification) {
        if (!this.subscribers.has(o.target)) {
          error("Bad target for notification", o);
          continue;
        }
        this.subscribers.get(o.target)(o);
      } else {
        warn("Unhandled OCA packet: %o", o);
      }
    }
  }
}

function memcpy(dst, src, len) {
  var i;
  for (i = 0; i < len; i++) {
    dst[i] = src[i];
  }
}

class PDUBase
{
  get messageType()
  {
    return this.constructor.messageType;
  }
}

export class Command extends PDUBase
{
  constructor(target, method_level, method_index, param_count, parameters)
  {
    super();
    this.target = target|0;
    this.method_level = method_level|0;
    this.method_index = method_index|0;
    this.param_count = param_count|0;
    this.parameters = parameters||null;
    this.handle = 0;
  }

  static get messageType()
  {
    return 0;
  }

  encode_to(dst, pos)
  {
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
      if (this.parameters instanceof encoder) {
        pos = this.parameters.encode_to(dst, pos);
      } else {
        len = this.parameters.byteLength;
        memcpy(new Uint8Array(dst.buffer, dst.byteOffset+pos, len),
               new Uint8Array(this.parameters, 0, len), len);
        pos += len;
      }
    }
    return pos;
  }

  encoded_length()
  {
    return 17 + (this.param_count ? this.parameters.byteLength : 0);
  }

  decode_from(data, pos, len)
  {
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
    if (len < 0) throw new Error("Bad Command Length.");
    if (len > 0) {
      if (!this.param_count)
            warn("Decoding Command with parameterCount=0 but %o bytes of parameters", len);
      this.parameters = data.buffer.slice(data.byteOffset+pos, data.byteOffset+pos+len);
      pos += len;
    }
    return pos;
  }

  response(status_code, param_count, parameters)
  {
    return new Response(this.handle, status_code, param_count, parameters);
  }
}

export class CommandRrq extends Command
{
  static get messageType()
  {
    return 1;
  }
}

export class Response extends PDUBase
{
  constructor(handle, status_code, param_count, parameters)
  {
    super();
    this.handle = handle|0;
    this.status_code = status_code|0;
    this.param_count = param_count|0;
    this.parameters = parameters||null;
  }

  static get messageType()
  {
    return 3;
  }

  encoded_length()
  {
    return 10 + (this.param_count ? this.parameters.byteLength : 0);
  }

  decode_from(data, pos, data_len)
  {
    var len = data.getUint32(pos);
    pos += 4;
    this.handle = data.getUint32(pos);
    pos += 4;
    this.status_code = data.getUint8(pos);
    pos ++;
    this.param_count = data.getUint8(pos);
    pos ++;
    len -= 10;
    if (len < 0) throw new Error("Bad Response length.");
    if (len > 0) {
      if (!this.param_count)
            warn("Decoding response with parameterCount=0 but %o bytes of parameters", len);
      this.parameters = data.buffer.slice(data.byteOffset+pos, data.byteOffset+pos+len);
      pos += len;
    }
    return pos;
  }

  encode_to(dst, pos)
  {
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
      if (this.parameters instanceof encoder) {
        pos = this.parameters.encode_to(dst, pos);
      } else {
        len = this.parameters.byteLength;
        memcpy(new Uint8Array(dst.buffer, dst.byteOffset+pos, len),
               new Uint8Array(this.parameters, 0, len), len);
        pos += len;
      }
    }
    return pos;
  }
}

const notification_signature = new signature(BLOB, OcaEvent);

export class Notification extends PDUBase
{
  constructor(target, method_level, method_index, context, event, param_count, parameters)
  {
    super();
    this.target = target|0;
    this.method_level = method_level|0;
    this.method_index = method_index|0;
    this.context = context;
    this.event = event;
    this.param_count = param_count|0;
    this.parameters = parameters||null;
  }

  static get messageType()
  {
    return 2;
  }

  encode_to(dst, pos)
  {
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
      if (this.parameters instanceof encoder) {
        pos = this.parameters.encode_to(dst, pos);
      } else {
        len = this.parameters.byteLength;
        memcpy(new Uint8Array(dst.buffer, dst.byteOffset+pos, len),
               new Uint8Array(this.parameters, 0, len), len);
        pos += len;
      }
    }
    return pos;
  }

  encoded_length()
  {
    return 23 + (this.param_count > 1 ? this.parameters.byteLength : 0)
        + (this.context ? this.context.byteLength : 0);
  }

  decode_from(data, pos, len)
  {
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
    this.event = new OcaEvent(data.getUint32(pos),
                              new OcaEventID(data.getUint16(pos+4), data.getUint16(pos+6)));
    pos += 8;
    len -= 23 + context_length;
    if (len < 0) throw new Error("Bad Notification Length.");
    if (len > 0) {
      if (this.param_count <= 1)
            warn("Decoding Notification with parameterCount=%o but %o bytes of parameters",
                     this.param_count, len);
      this.parameters = data.buffer.slice(data.byteOffset+pos, data.byteOffset+pos+len);
      pos += len;
    }
    return pos;
  }
}

export class KeepAlive extends PDUBase
{
  static get messageType()
  {
    return 4;
  }

  constructor(time)
  {
    super();
    this.time = time;
  }

  decode_from(data, pos, len)
  {
    if (len == 4) {
      this.time = data.getUint32(pos);
      pos += 4;
    } else if (len == 2) {
      this.time = data.getUint16(pos) * 1000;
      pos += 2;
    } else throw new Error("Bad keepalive timeout length.");
    return pos;
  }

  encode_to(dst, pos)
  {
    if (this.time % 1000) {
      dst.setUint32(pos, this.time);
      pos += 4;
    } else {
      dst.setUint16(pos, this.time/1000);
      pos += 2;
    }
    return pos;
  }

  encoded_length()
  {
    if (this.time % 1000) {
      return 4;
    } else {
      return 2;
    }
  }
}

const PDUTypes = [
    Command,
    CommandRrq,
    Notification,
    Response,
    KeepAlive
  ];

export function decodeMessage(data, pos, ret)
{
  var message_offset;

  if (data.byteLength < data.byteOffset + pos + 9) return -1;

  pos = pos|0;
  if (data.getUint8(pos) != 0x3b) throw new Error("Bad sync value.");
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

  var PDUType = PDUTypes[messageType];

  if (PDUType === void(0))
    throw new Error("Bad Message Type");

  if (PDUType === KeepAlive && messageCount !== 1)
    throw new Error("Bad KeepAlive message count.");

  var i;

  for (i = 0; i < messageCount; i++) {
    ret[i] = new PDUType();
    pos = ret[i].decode_from(data, pos, message_offset - data.byteOffset - pos);
  }

  if (pos != message_offset)
    throw new Error("Decode error: " + pos + " vs " + message_offset );

  return pos;
}

export function encodeMessage(a)
{
  var len, pos, tmp;
  if (!(a instanceof Array)) {
    a = [ a ];
  }

  // message header
  len = 10;
  var type = a[0].messageType;

  for (let i = 0; i < a.length; i++) {
    let tmp = a[i];
    if (tmp.messageType != type) throw new Error("Cannot combine different types in one message.");
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

  for (let i = 0; i < a.length; i++) {
    pos = a[i].encode_to(dst, pos);
  }

  if (pos != len) throw new Error("Bad Message length calculation: " + pos + " vs " + len);

  return buf;
}


const event_signature = new signature(OcaEvent);

export class RemoteDevice {
  constructor(connection)
  {
    this.objects = new Map();
    this.connection = connection;
    this.modules = Array.prototype.slice.call(arguments, 1);
    if (!this.modules.length) this.modules.push(ControlClasses);
    this.device_manager = this.allocate("OcaDeviceManager", 1);
    this.root = this.allocate("OcaBlock", 100);
    this.subscription_manager = this.allocate("OcaSubscriptionManager", 4);
    this.subscriptions = {};
  }

  send_command(cmd, return_signature)
  {
    return this.connection.send_command(cmd, return_signature);
  }

  add_subscription(event, callback)
  {
    var key = event_signature.encode(event)
        key = String.fromCharCode.apply(String, new Uint8Array(key));
    var S = this.subscriptions[key];

    if (S) {
      S.callbacks.push(callback);
      return Promise.resolve(true);
    }

    /* do the actual subscription */
    var cb = (o) => {
      var S = this.subscriptions[key];
      if (!S) {
        warn("Subscription lost.\n");
        return;
      }
      var a = S.callbacks;
      for (var i = 0; i < a.length; i++) {
        a[i](o);
      }
    };
    var method = this.connection.get_new_subscriber(cb);

    this.subscriptions[key] = {
      callbacks: [ callback ],
      method: method,
      callback: cb,
    };

    return this.subscription_manager.AddSubscription(event, method,
                                                     new ArrayBuffer(0),
                                                     OcaNotificationDeliveryMode.Reliable,
                                                     new ArrayBuffer(0));
  }

  remove_subscription(event, callback)
  {
    var key = event_signature.encode(event)
        key = String.fromCharCode.apply(String, new Uint8Array(key));
    var S = this.subscriptions[key];

    if (!S) return Promise.reject("Callback not registered.");

    var a = S.callbacks;

    for (var i = 0; i < a.length; i++) {
      if (a[i] === callback) {
        a[i] = a[a.length-1];
        a.length --;
      }
    }

    if (a.length) return Promise.resolve(true);

    this.subscriptions[key] = null;
    this.subscription_manager.RemoveSubscription(event, S.method);

    return Promise.resolve(true);
  }

  find_class_by_name(name)
  {
    var ret;
    for (var i = 0; i < this.modules.length; i++) {
      if (ret = this.modules[i].find_class_by_name(name)) {
        return ret;
      }
    }
    return null;
  }

  find_best_class(id)
  {
    var ret;
    if (typeof(id) === "object" && id.ClassID) id = id.ClassID;
    while (id.length) {
      if (ret = this.find_class_by_id(id)) return ret;
      id = id.substr(0, id.length-1);
    }

    return null;
  }

  find_class_by_id(id)
  {
    var ret;
    if (typeof(id) === "object" && id.ClassID) id = id.ClassID;
    for (var i = 0; i < this.modules.length; i++) {
      if (ret = this.modules[i].find_class_by_id(id)) {
        return ret;
      }
    }
    return null;
  }

  allocate(c, ono)
  {
    if (typeof(c) === "string") c = this.find_class_by_name(c);
    if (typeof(ono) === "object") ono = ono.valueOf();
    var objects = this.objects;
    if (!objects.has(ono)) {
      objects.set(ono, new c(ono, this));
    }
    return objects.get(ono);
  }

  resolve_object(oid)
  {
    var ono, id;

    if (oid instanceof OcaObjectIdentification) {
      id = oid.ClassIdentification;
      ono = oid.ONo;
    } else if (oid instanceof OcaBlockMember) {
      id = oid.MemberObjectIdentification.ClassIdentification;
      ono = oid.MemberObjectIdentification.ONo;
    } else throw new Error("Bad Argument");

    return this.allocate(this.find_best_class(id), ono);
  }

  discover_all()
  {
    return this.root.GetMembersRecursive()
      .then((res) => res.map(this.resolve_object, this));
  }
}
