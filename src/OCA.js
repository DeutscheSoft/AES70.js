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

/**
 * Basic event handling class.
 */
export class Events
{
  constructor() {
    this.event_handlers = new Map();
  }

  /**
   * Emit an event.
   *
   * @param {String} name - Name of the event.
   * @param {...*} args - Extra arguments.
   */
  emit(name)
  {
    const handlers = this.event_handlers.get(name);
    const args = Array.prototype.slice.call(arguments, 1);

    if (!handlers) return;

    handlers.forEach((cb) => {
      try {
        cb.apply(this, args);
      } catch (e) {
        warn("ERROR when calling %o: %o", cb, e);
      }
    });
  }

  /**
   * Register for an event.
   *
   * @param {String} name - Name of the event.
   * @param {Function} cb - Callback function.
   */
  on(name, cb)
  {
    let handlers = this.event_handlers.get(name);

    if (!handlers)
    {
      this.event_handlers.set(name, handlers = new Set());
    }

    handlers.add(cb);
  }

  addEventListener(name, cb) {
    this.on(name, cb);
  }

  /**
   * Removes an event handler.
   *
   * @param {String} name - Name of the event.
   * @param {Function} cb - Callback function.
   */
  removeEventListener(name, cb)
  {
    let handlers = this.event_handlers.get(name);

    if (!handlers || !handlers.has(cb))
    {
      warn("removeEventListeners(): %o not installed.", cb);
      return;
    }

    handlers.delete(cb);
  }
}

function now() {
  try {
    return performance.now();
  } catch (e) {}

  return Date.now();
}

/**
 * Connection base class.
 */
export class Connection extends Events
{
  constructor()
  {
    super();
    this.batch = 64000;
    this.inbuf = null;
    this.inpos = 0;
    this.last_rx_time = now();
    this.last_tx_time = now();
    this.outbuf = [];
    const cleanup = () => {
      this.removeEventListener('close', cleanup);
      this.removeEventListener('error', cleanup);
      this.cleanup();
    };
    this.on('close', cleanup);
    this.on('error', cleanup);
    this.write_cb = () => {
      if (this.is_closed()) return;
      const out = this.outbuf;

      if (!out.length) return;
      if (out.length == 1)
      {
        this.write(out[0]);
      }
      else
      {
        for (let start = 0; start < out.length;)
        {
          let i;
          let len;

          for (i = start, len = 0; i < out.length && (!len || len + out[i].byteLength < this.batch); i++)
              len += out[i].byteLength;

          let buf = new ArrayBuffer(len);
          let tmp = new Uint8Array(buf);

          for (let j = start, len = 0; j < i; j++)
          {
            tmp.set(new Uint8Array(out[j]), len);
            len += out[j].byteLength;
          }

          this.write(buf);

          start = i;
        }
      }

      out.length = 0;
    };
  }

  get is_reliable()
  {
    return true;
  }

  send(buf)
  {
    if (this.is_closed()) throw new Error("Connection is closed.");
    if (!this.outbuf.length)
      setTimeout(this.write_cb, 0);

    this.outbuf.push(buf);
  }

  allocate(len)
  {
    const buf = new ArrayBuffer(len);

    this.send(buf);

    return buf;
  }

  tx_idle_time()
  {
    return now() - this.last_tx_time;
  }

  rx_idle_time()
  {
    return now() - this.last_tx_time;
  }

  read(buf) {
    this.last_rx_time = now();

    if (this.inbuf) {
      const len = this.inbuf.byteLength - this.inpos;
      const tmp = new Uint8Array(new ArrayBuffer(len + buf.byteLength));

      tmp.set(new Uint8Array(this.inbuf, this.inpos));
      tmp.set(new Uint8Array(buf), len);

      this.inbuf = null;
      this.inpos = 0;

      buf = tmp.buffer;
    }

    let pos = 0;
    const view = new DataView(buf);

    try {
      do {
        const ret = [];
        const len = decodeMessage(view, pos, ret);
        if (len == -1) {
          this.inbuf = buf;
          this.inpos = pos;
          break;
        }
        pos = len;
        this.incoming(ret);
      } while (pos < buf.byteLength);
    } catch (e) {
      error(e);
      if (this.is_reliable)
      {
        error("Error when handling incoming data. Closing connection.");
        this.close();
      }
    }
  }

  incoming(a)
  {
  }

  write(buf)
  {
    this.last_tx_time = now();
  }

  is_closed()
  {
    return this.write_cb === null;
  }

  /**
   * Closes the connection. Overloaded by connection subclasses.
   */
  close()
  {
    this.outbuf.length = 0;
    this.emit('close');
  }

  cleanup()
  {
    if (this.is_closed()) throw new Error("cleanup() called twice.");
    this.write_cb = null;
  }
}

class PDUBase
{
  get messageType()
  {
    return this.constructor.messageType;
  }
}

/**
 * Command packet.
 */
export class Command extends PDUBase
{
  constructor(target, method_level, method_index, param_count, parameters)
  {
    super();
    this.target = +target;
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
        new Uint8Array(dst.buffer).set(new Uint8Array(this.parameters), dst.byteOffset+pos);
        pos += this.parameters.byteLength;
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

/**
 * Command packet with response required.
 */
export class CommandRrq extends Command
{
  static get messageType()
  {
    return 1;
  }
}

/**
 * Response packet.
 */
export class Response extends PDUBase
{
  constructor(handle, status_code, param_count, parameters)
  {
    super();
    this.handle = handle;
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
        new Uint8Array(dst.buffer).set(new Uint8Array(this.parameters), dst.byteOffset+pos);
        pos += this.parameters.byteLength;
      }
    }
    return pos;
  }
}

const notification_signature = new signature(BLOB, OcaEvent);

/**
 * Notification packet.
 */
export class Notification extends PDUBase
{
  constructor(target, method_level, method_index, context, event, param_count, parameters)
  {
    super();
    this.target = target;
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
      new Uint8Array(dst.buffer).set(new Uint8Array(this.context), dst.byteOffset+pos);
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
        new Uint8Array(dst.buffer).set(new Uint8Array(this.parameters), dst.byteOffset+pos);
        pos += this.parameters.byteLength;
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
      this.parameters = data.buffer.slice(data.byteOffset+pos, data.byteOffset+pos+len);
      pos += len;
    }
    return pos;
  }
}

/**
 * Keepalive packet.
 */
export class KeepAlive extends PDUBase
{
  static get messageType()
  {
    return 4;
  }

  constructor(time)
  {
    super();
    this.time = time || 0;
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

  if (data.byteLength < data.byteOffset + pos + 10) return -1;

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

export function tree_to_rolemap(tree, s)
{
  const roles = new Map();
  if (!s) s = "/";

  let tasks = [];

  const fetch_role = (o) => {
    if (Array.isArray(o))
    {
      o.forEach(fetch_role);
    }
    else
    {
      tasks.push(o.GetRole().then((role) => { roles.set(o, role); }));
    }
  };

  tree.forEach(fetch_role);

  return Promise.all(tasks).then(function() {
    const rolemap = new Map();

    const build_paths = (a, prefix) => {
      const p = prefix != null ? prefix + s : "";
      const local_roles = new Map();

      a.forEach(function (o, i) {
        if (Array.isArray(o)) return;

        const role = roles.get(o);

        if (local_roles.has(role))
        {
          const tmp = local_roles.get(role);

          if (Array.isArray(tmp))
            tmp.push(o);
          else
            local_roles.set(role, [ tmp, o ]);
        }
        else
        {
          local_roles.set(role, o);
        }
      });

      local_roles.forEach(function(o, role) {
        if (Array.isArray(o))
        {
          let n = 1;
          for (let i = 0; i < o.length; i++)
          {
            let nrole = role + n;
            while (local_roles.has(nrole)) { n++; }
            local_roles.set(nrole, o[i]);
            local_roles.set(o[i], nrole);
          }

          local_roles.delete(role);
        }
        else
        {
          local_roles.set(o, role);
        }
      });

      a.forEach((o, i) => {
        if (Array.isArray(o))
        {
          build_paths(o, p + local_roles.get(a[i-1]));
        }
        else
        {
          const path = p + local_roles.get(o);
          rolemap.set(path, o);
        }
      });
    };

    build_paths(tree, null);

    return rolemap;
  });
}
