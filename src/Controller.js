import {
    Connection,
    Events,
    Command,
    CommandRrq,
    Response,
    Notification,
    KeepAlive,
    decodeMessage,
    encodeMessage,
    log,
    warn,
    error
  } from './OCA';

import {
    OcaDeviceManager,
    OcaSecurityManager,
    OcaFirmwareManager,
    OcaSubscriptionManager,
    OcaPowerManager,
    OcaNetworkManager,
    OcaMediaClockManager,
    OcaLibraryManager,
    OcaAudioProcessingManager,
    OcaDeviceTimeManager,
    OcaTaskManager,
    OcaCodingManager,
    OcaDiagnosticManager,
    OcaBlock,
    Classes,
  } from './controller/ControlClasses.js';

import {
    OcaManagerDefaultObjectNumbers,
    OcaEvent,
    OcaMethodID,
    OcaMethod,
    OcaObjectIdentification,
    OcaBlockMember,
    OcaNotificationDeliveryMode,
    OcaStatus,
  } from './Types';

import {
    signature
  } from './signature_parser';
  
const event_signature = new signature(OcaEvent);

function timeout(p, time)
{
  return new Promise(function(resolve, reject) {
    const id = setTimeout(function() { reject(new Error("timeout")); }, time);
    p.then(
      function(result) {
        clearTimeout(id);
        resolve(result);
      },
      function(err) {
        clearTimeout(id);
        reject(err);
      });
  });
}

/**
 * Error class raised by remote function calls.
 *
 * @property {Command} cmd - The command object.
 * @property {OcaStatus} status - The error code.
 */
export class RemoteError
{
  constructor(status, cmd)
  {
    this.status = new OcaStatus(status);
    this.cmd = cmd;
  }

  static check_status(error, status)
  {
    return error instanceof this && error.status.isEqual(status);
  }

  toString()
  {
    return "RemoteError(" + this.status + ")";
  }
}

/**
 * Connection base class for clients (aka controllers).
 */
export class ClientConnection extends Connection
{
  constructor()
  {
    super();
    this.command_handles = new Map();
    this.subscribers = new Map();
    this.keepalive_interval = null;

    const cleanup = (e) => {
      if (this.keepalive_interval !== null)
      {
        clearInterval(this.keepalive_interval);
        this.keepalive_interval = null;
      }
      this.subscribers = null;

      const handles = this.command_handles;
      if (!e) e = new Error('closed');
      handles.forEach((a, id) => {
        try {
          a[2](e);
        } catch (e) {
          // TODO: do something
        }
      });
    };

    this.on('error', cleanup);
    this.on('close', cleanup);
  }

  get_command_handle()
  {
    let id;
    const handles = this.command_handles;

    if (handles === null)
    {
      throw new Error("Connection not open.");
    }

    do {
      id = (Math.random()*(1+handles.size)*2)|0;
    } while (handles.has(id));

    handles.set(id, null);

    return id;
  }

  add_command_handle(id, return_signature, resolve, reject, cmd)
  {
    const h = [ return_signature, resolve, reject, cmd ];
    this.command_handles.set(id, h);
    return h;
  }

  get_new_subscriber(callback)
  {
    var id;
    while (this.subscribers.has(id = 1 + (Math.random()*0xffff)|0)) {}
    this.subscribers.set(id, callback);
    return new OcaMethod(id, new OcaMethodID(1, 1));
  }

  remove_subscriber(method)
  {
    this.subscribers.delete(method.ONo);
  }

  send_command(cmd, return_signature)
  {
    const id = this.get_command_handle();
    cmd.handle = id;
    const buf = encodeMessage(cmd); 

    return new Promise((resolve, reject) => {
      this.add_command_handle(id, return_signature, resolve, reject, cmd, buf);
      this.send(buf);
    });
  }

  remove_command_handle(id)
  {
    const handles = this.command_handles;
    const h = handles.get(id);

    if (!h)
      throw new Error("Unknown handle in response: " + id);

    handles.delete(id);

    return h;
  }

  incoming(a)
  {
    var i, o;

    for (i = 0; i < a.length; i++) {
      o = a[i];
      //log("INCOMING", o);
      if (o instanceof Response) {
        const h = this.remove_command_handle(o.handle);

        if (o.status_code !== 0) {
          h[2](new RemoteError(o.status_code, h[3]));
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
        const subscribers = this.subscribers;
        if (!subscribers.has(o.target)) {
          // NOTE: this is legal
          continue;
        }
        subscribers.get(o.target)(o);
      } else if (o instanceof KeepAlive) {
        if (!(o.time > 0)) {
          throw new Error("Bad keepalive timeout.");
        }
      } else {
        warn("Unexpected PDU: %o", o);
        throw new Error("Unexpected PDU");
      }
    }
  }

  /**
   * Set the keepalive interval.
   * @param {number} seconds - Keepalive interval in seconds.
   */
  set_keepalive_interval(seconds)
  {
    if (this.keepalive_interval)
      clearInterval(this.keepalive_interval);

    // we check twice as often to make sure we stay within the timers
    const t = seconds * 1000;

    // send first keepalive message
    this.send(encodeMessage(new KeepAlive(t)));

    const send = () => {
      if (this.rx_idle_time() > t * 3)
      {
        error("Connection timed out.");
        this.emit('timeout');
        this.emit('close');
        this.close();
      }
      else if (this.tx_idle_time() > t)
      {
        this.send(encodeMessage(new KeepAlive(t)));
      }
    };

    this.keepalive_interval = setInterval(send, t / 2);
  }
}

/**
 * Controller class for a remote OCA device.
 *
 * This is the entry point for any interaction with a remote device.
 * Can be used to query the available object tree, or interact with the manager
 * classes.
 *
 * @property {OcaDeviceManager} DeviceManager - The device manager object.
 * @property {OcaSecurityManager} SecurityManager - The Security manager object.
 * @property {OcaFirmwareManager} FirmwareManager - The Firmware manager object.
 * @property {OcaSubscriptionManager} SubscriptionManager - The Subscription manager object.
 * @property {OcaPowerManager} PowerManager - The Power manager object.
 * @property {OcaNetworkManager} NetworkManager - The Network manager object.
 * @property {OcaMediaClockManager} MediaClockManager - The MediaClock manager object.
 * @property {OcaLibraryManager} LibraryManager - The Library manager object.
 * @property {OcaAudioProcessingManager} AudioProcessingManager - The AudioProcessing manager object.
 * @property {OcaDeviceTimeManager} DeviceTimeManager - The DeviceTime manager object.
 * @property {OcaTaskManager} TaskManager - The Task manager object.
 * @property {OcaCodingManager} CodingManager - The Coding manager object.
 * @property {OcaDiagnosticManager} DiagnosticManager - The Diagnostic manager object.
 * @property {OcaBlock} Root - The Root object.
 *
 */
export class RemoteDevice extends Events
{
  constructor(connection, ...modules)
  {
    super();
    this.objects = new Map();
    this.connection = connection;

    connection.on('error', (e) => {
      this.emit('error', e);
    });

    connection.on('close', (e) => {
      this.emit('close', e);
    });

    if (!modules.length) {
      modules = [ Classes ];
    }
    this.modules = modules;

    this.DeviceManager = new OcaDeviceManager(OcaManagerDefaultObjectNumbers.DeviceManager, this);
    this.SecurityManager = new OcaSecurityManager(OcaManagerDefaultObjectNumbers.SecurityManager, this);
    this.FirmwareManager = new OcaFirmwareManager(OcaManagerDefaultObjectNumbers.FirmwareManager, this);
    this.SubscriptionManager = new OcaSubscriptionManager(OcaManagerDefaultObjectNumbers.SubscriptionManager, this);
    this.PowerManager = new OcaPowerManager(OcaManagerDefaultObjectNumbers.PowerManager, this);
    this.NetworkManager = new OcaNetworkManager(OcaManagerDefaultObjectNumbers.NetworkManager, this);
    this.MediaClockManager = new OcaMediaClockManager(OcaManagerDefaultObjectNumbers.MediaClockManager, this);
    this.LibraryManager = new OcaLibraryManager(OcaManagerDefaultObjectNumbers.LibraryManager, this);
    this.AudioProcessingManager = new OcaAudioProcessingManager(OcaManagerDefaultObjectNumbers.AudioProcessingManager, this);
    this.DeviceTimeManager = new OcaDeviceTimeManager(OcaManagerDefaultObjectNumbers.DeviceTimeManager, this);
    this.TaskManager = new OcaTaskManager(OcaManagerDefaultObjectNumbers.TaskManager, this);
    this.CodingManager = new OcaCodingManager(OcaManagerDefaultObjectNumbers.CodingManager, this);
    this.DiagnosticManager = new OcaDiagnosticManager(OcaManagerDefaultObjectNumbers.DiagnosticManager, this);
    this.Root = new OcaBlock(100, this);

    this.subscriptions = new Map();
  }

  close()
  {
    this.connection.close();
  }

  send_command(cmd, return_signature)
  {
    return this.connection.send_command(cmd, return_signature);
  }

  add_subscription(event, callback)
  {
    var key = event_signature.encode(event);

    key = String.fromCharCode.apply(String, new Uint8Array(key));

    var S = this.subscriptions.get(key);

    if (S) {
      S.callbacks.add(callback);
      return Promise.resolve(true);
    }

    /* do the actual subscription */

    var cb = (o) => {
      var S = this.subscriptions.get(key);
      if (!S) {
        warn("Subscription lost.\n");
        return;
      }
      var a = S.callbacks;
      a.forEach(function(cb) {
        try {
          cb(o);
        } catch (e) {
          error(e);
        }
      });
    };

    const method = this.connection.get_new_subscriber(cb);

    this.subscriptions.set(key, {
      callbacks: new Set([ callback ]),
      method: method,
      callback: cb,
    });

    return this.SubscriptionManager.AddSubscription(event, method,
                                                    new ArrayBuffer(0),
                                                    OcaNotificationDeliveryMode.Reliable,
                                                    new ArrayBuffer(0));
  }

  remove_subscription(event, callback)
  {
    var key = event_signature.encode(event);

    key = String.fromCharCode.apply(String, new Uint8Array(key));

    var S = this.subscriptions.get(key);

    if (!S) return Promise.reject("Callback not registered.");

    const a = S.callbacks;

    a.delete(callback);

    if (!a.size) {
      this.connection.remove_subscriber(S.method);
      this.subscriptions.delete(key);
      this.SubscriptionManager.RemoveSubscription(event, S.method);
    }

    return Promise.resolve(true);
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
      if (ret = this.modules[i][id]) {
        return ret;
      }
    }
    return null;
  }

  allocate(c, ono)
  {
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
    } else throw new Error("Bad Argument: ", oid);

    return this.allocate(this.find_best_class(id), ono);
  }

  GetDeviceTree()
  {
    const get_members = (block) => {
      return timeout(block.GetMembers(), 10000).catch(function(){return [];}).then((a) => {
        var ret = [];

        a = a.map(this.resolve_object, this);

        for (let i = 0; i < a.length; i++)
        {
          ret.push(Promise.resolve(a[i]));

          if (a[i] instanceof OcaBlock)
          {
            ret.push(get_members(a[i]));
          }
        }

        return Promise.all(ret);
      });
    };

    return get_members(this.Root);
  }

  /**
   * Discovers the device object tree. This are all objects starting at the Root
   * block.
   *
   * @returns {Promise} The object tree. A recursive tree structure consisting of arrays of objects.
   *                    Each block is followed by an array of it's children.
   */
  get_device_tree()
  {
    return this.GetDeviceTree();
  }

  discover_all_fallback()
  {
    return this.GetDeviceTree()
      .then((tree) => {
        const ret = [];
        const it = function(a)
        {
          for (let i = 0; i < a.length; i++)
          {
            if (Array.isArray(a[i]))
            {
              it(a[i]);
            }
            else
            {
              ret.push(a[i]);
            }
          }
        };

        it(tree);

        return ret;
      });
  }

  /**
   * Discovers the complete object tree of this device starting
   * from the root block. The root block itself will not be part
   * of the resulting list.
   *
   * @deprecated Use {@link get_device_tree} instead.
   * @returns {Promise} The object list.
   */
  discover_all()
  {
    return this.Root.GetMembersRecursive()
      .then((res) => res.map(this.resolve_object, this))
      .catch(() => this.discover_all_fallback());
  }

  /**
   * Set the keepalive interval.
   * @param {number} seconds - Keepalive interval in seconds.
   */
  set_keepalive_interval(seconds)
  {
    this.connection.set_keepalive_interval(seconds);
  }
}
