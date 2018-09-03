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
}

export class ClientConnection extends Connection
{
  constructor()
  {
    super();
    this.command_handles = new Map();
    this.subscribers = new Map();

    const cleanup = (e) => {
      if (!e) e = new Error('closed');
      this.command_handles.forEach((a, id) => {
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
      this.command_handles.set(id, [ return_signature, resolve, reject, cmd ]);
      this.write(buf);
    });
  }

  incoming(a)
  {
    var i, o;

    for (i = 0; i < a.length; i++) {
      o = a[i];
      //log("INCOMING", o);
      if (o instanceof Response) {
        const handles = this.command_handles;
        const h = handles.get(o.handle);
        if (!h) {
          error("Unknown handle in response %o", o);
        }
        handles.delete(o.handle);
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
          error("Bad target for notification", o);
          continue;
        }
        subscribers.get(o.target)(o);
      } else {
        warn("Unhandled OCA packet: %o", o);
      }
    }
  }
}

/**
 * Controller class for a remote OCA device.
 *
 * This is the entry point for any interaction with a remote device.
 * Can be used to query the available object tree, or interact with the manager
 * classes.
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
      return block.GetMembers().then((a) => {
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
   * @returns {Promise} The object list.
   */
  discover_all()
  {
    return this.Root.GetMembersRecursive()
      .then((res) => res.map(this.resolve_object, this))
      .catch(() => this.discover_all_fallback());
  }
}
