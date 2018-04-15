import {
    Connection,
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
  } from './Types';

import {
    signature
  } from './signature_parser';
  
const event_signature = new signature(OcaEvent);

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

export class RemoteDevice
{
  constructor(connection, ...modules)
  {
    this.objects = new Map();
    this.connection = connection;
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
    } else throw new Error("Bad Argument");

    return this.allocate(this.find_best_class(id), ono);
  }

  discover_all()
  {
    return this.Root.GetMembersRecursive()
      .then((res) => res.map(this.resolve_object, this));
  }
}
