import {
    warn,
    error,
    tree_to_rolemap
  } from './OCA.js';

import { Events } from './events.js';
import { Connection } from './connection.js';
import { Response } from './OCP1/response.js';
import { KeepAlive } from './OCP1/keepalive.js';
import { Notification } from './OCP1/notification.js';
import { encodeMessage } from './OCP1/encode_message.js';

import { Arguments } from './controller/arguments.js';

import {
    make_control_class
  } from './controller/Base.js';

import { OcaDeviceManager } from './controller/ControlClasses/OcaDeviceManager.js';
import { OcaSecurityManager } from './controller/ControlClasses/OcaSecurityManager.js';
import { OcaFirmwareManager } from './controller/ControlClasses/OcaFirmwareManager.js';
import { OcaSubscriptionManager } from './controller/ControlClasses/OcaSubscriptionManager.js';
import { OcaPowerManager } from './controller/ControlClasses/OcaPowerManager.js';
import { OcaNetworkManager } from './controller/ControlClasses/OcaNetworkManager.js';
import { OcaMediaClockManager } from './controller/ControlClasses/OcaMediaClockManager.js';
import { OcaLibraryManager } from './controller/ControlClasses/OcaLibraryManager.js';
import { OcaAudioProcessingManager } from './controller/ControlClasses/OcaAudioProcessingManager.js';
import { OcaDeviceTimeManager } from './controller/ControlClasses/OcaDeviceTimeManager.js';
import { OcaTaskManager } from './controller/ControlClasses/OcaTaskManager.js';
import { OcaCodingManager } from './controller/ControlClasses/OcaCodingManager.js';
import { OcaDiagnosticManager } from './controller/ControlClasses/OcaDiagnosticManager.js';
import { OcaBlock } from './controller/ControlClasses/OcaBlock.js';

import { Classes } from './controller/ControlClasses.js';

import { OcaManagerDefaultObjectNumbers } from './types/OcaManagerDefaultObjectNumbers.js';
import { OcaNotificationDeliveryMode } from './types/OcaNotificationDeliveryMode.js';
import { OcaStatus } from './types/OcaStatus.js';

/**
 * Creates a custom control class.
 *
 * @param {String} name - The name of this control class.
 * @param {number} level - The level in the class hierachy.
 * @param {String} class_id - The class ID.
 * @param {number} class_version - The class version.
 * @param {Function|String|undefined} base - Class to extend. Can be either the
 *      base class, the name of a standard class or undefined, in which case
 *      the base class will be derived using the class id.
 * @param {Array} methods - List of methods.
 * @param {Array} properties - List of properties.
 * @param {Array} events - List of events.
 */
export function define_custom_class(name, level, class_id, class_version, base, methods, properties, events)
{
  class_id = String.fromCharCode.apply(String, class_id.split('.').map((v) => parseInt(v)));

  if (!base)
  {
    const parent_class_id = class_id.substr(0, class_id.length - 1);

    for (let i = 0; i < Classes.length; i++)
    {
      if (Classes[i].ClassID === parent_class_id)
      {
        base = Classes[i];
        break;
      }
    }
  }
  else if (typeof(base) === 'string')
  {
    for (let i = 0; i < Classes.length; i++)
    {
      if (Classes[i].ClassName === base)
      {
        base = Classes[i];
        break;
      }
    }
  }

  if (typeof(base) !== 'function')
  {
    throw new Error('Unknown parent class.');
  }

  return make_control_class(name, level, class_id, class_version, base, methods, properties, events);
}

function eventToKey(event) {
  const ono = event.EmitterONo;
  const id = event.EventID;

  return [ ono, id.DefLevel, id.EventIndex ].join(',');
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
    return error instanceof this && error.status === status;
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
  constructor(options)
  {
    super(options);
    this.command_handles = new Map();
    this.subscribers = new Map();
    this.keepalive_interval = null;
  }

  cleanup() {
    super.cleanup();

    if (this.keepalive_interval !== null)
    {
      clearInterval(this.keepalive_interval);
      this.keepalive_interval = null;
    }

    this.subscribers = null;

    const handles = this.command_handles;
    this.command_handles = null;
    const e = new Error('closed');
    handles.forEach((a, id) => {
      try { a[2](e); } catch (e) { }
    });
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

  add_command_handle(id, returnTypes, resolve, reject, cmd)
  {
    const h = [ returnTypes, resolve, reject, cmd ];
    this.command_handles.set(id, h);
    return h;
  }

  get_new_subscriber(callback)
  {
    let id;
    while (this.subscribers.has(id = 1 + (Math.random()*0xffff)|0));
    this.subscribers.set(id, callback);
    return {
      ONo: id,
      MethodID: {
        DefLevel: 1,
        MethodIndex: 1,
      }
    };
  }

  remove_subscriber(method)
  {
    const S = this.subscribers;
    if (S == null) return;
    S.delete(method.ONo);
  }

  send_command(cmd, returnTypes)
  {
    return new Promise((resolve, reject) => {
      const id = this.get_command_handle();
      cmd.handle = id;
      const buf = encodeMessage(cmd); 

      this.add_command_handle(id, returnTypes, resolve, reject, cmd, buf);
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

  incoming(pdus)
  {
    for (let i = 0; i < pdus.length; i++) {
      const o = pdus[i];
      //log("INCOMING", o);
      if (o instanceof Response) {
        const [ returnTypes, resolve, reject, cmd ] = this.remove_command_handle(o.handle);

        if (o.status_code !== 0) {
          reject(new RemoteError(o.status_code, cmd));
        } else if (!returnTypes) {
          resolve(o);
        } else {
          try {
            const length = Math.min(o.param_count, returnTypes.length);

            if (length === 0) {
              resolve();
            } else {
              const result = new Array(length);
              const dataView = new DataView(o.parameters);

              for (let i = 0, pos = 0; i < length; i++) {
                let tmp;
                [ pos, tmp ] = returnTypes[i].decodeFrom(dataView, pos);
                result[i] = tmp;
              }

              resolve(length === 1 ? result[0] : new Arguments(result));
            }
          } catch (err) {
            reject(err);
          }
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

    this.modules = [];
    this.add_control_classes(Classes);
    modules.map((m) => this.add_control_classes(m));

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

  send_command(cmd, returnType)
  {
    return this.connection.send_command(cmd, returnType);
  }

  add_subscription(event, callback)
  {
    const key = eventToKey(event);

    const S = this.subscriptions.get(key);

    if (S) {
      S.callbacks.add(callback);
      return Promise.resolve(true);
    }

    /* do the actual subscription */

    const cb = (o) => {
      const S = this.subscriptions.get(key);
      if (!S) {
        warn("Subscription lost.\n");
        return;
      }
      const a = S.callbacks;
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
                                                    new Uint8Array(0),
                                                    OcaNotificationDeliveryMode.Reliable,
                                                    new Uint8Array(0));
  }

  remove_subscription(event, callback)
  {
    const key = eventToKey(event);

    const S = this.subscriptions.get(key);

    if (!S) return Promise.reject("Callback not registered.");

    const a = S.callbacks;

    a.delete(callback);

    if (!a.size) {
      this.connection.remove_subscriber(S.method);
      this.subscriptions.delete(key);
      return this.SubscriptionManager.RemoveSubscription(event, S.method);
    }

    return Promise.resolve(true);
  }

  find_best_class(id)
  {
    if (typeof(id) === "object" && id.ClassID) id = id.ClassID;
    while (id.length) {
      const result = this.find_class_by_id(id);
      if (result) return result;
      id = id.substr(0, id.length-1);
    }

    return null;
  }

  /**
   * Add a set of control classes. When communicating with a device the
   * objects created for remote control objects will be picked from the
   * ones added. The standard control classes are always added by
   * default.
   *
   * @param {Object|Array} module - The set of classes to add. Either an
   *    object contains the control classes with the classid as key, or
   *    an array of control classes.
   */
  add_control_classes(module)
  {
    if (Array.isArray(module))
    {
      const m = {};

      for (let i = 0; i < module.length; i++)
      {
        const o = module[i];
        m[o.ClassID] = o;
      }

      module = m;
    }
    else if (typeof(module) !== 'object')
    {
      throw new Error("Unsupported module.");
    }
    this.modules.push(module);
  }

  find_class_by_id(id)
  {
    if (typeof(id) === "object" && id.ClassID) id = id.ClassID;
    const modules = this.modules;
    for (let i = modules.length - 1; i >= 0; i--) {
      const ret = modules[i][id];
      if (ret) return ret;
    }
    return null;
  }

  allocate(c, ono)
  {
    if (typeof(ono) === "object") ono = ono.valueOf();
    const objects = this.objects;
    if (!objects.has(ono)) {
      objects.set(ono, new c(ono, this));
    }
    return objects.get(ono);
  }

  resolve_object(o)
  {
    // OcaBlockMember
    if ('MemberObjectIdentification' in o)
      return this.resolve_object(o.MemberObjectIdentification);

    // OcaObjectIdentification
    if ('ONo' in o && 'ClassIdentification' in o) {
      const ono = o.ONo;
      const id = o.ClassIdentification;
      return this.allocate(this.find_best_class(id), ono);
    } 

    throw new TypeError('Expected OcaObjectIdentification or OcaBlockMember');
  }

  GetDeviceTree()
  {
    const get_members = (block) => {
      return block.GetMembers().then((a) => {
        const ret = [];

        a = a.map(this.resolve_object, this);

        for (let i = 0; i < a.length; i++)
        {
          ret.push(Promise.resolve(a[i]));

          if (a[i].ClassID.startsWith(OcaBlock.ClassID))
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

  /**
   * Returns a map of role paths to objects. This is a convenience function
   * which internally calls get_device_tree and then tree_to_rolemap.
   * If more than one object has the same role name on the same tree level,
   * their role names will be appended with numbers starting at 1.
   *
   * @param {String} [separator='/'] Optional argument used as a separator
   *                                 for levels in the tree.
   * @returns {Promise<Map<string, Object>>} The map of role paths to control
   *                                        objects.
   */
  get_role_map(separator)
  {
    return this.get_device_tree().then(function (tree) {
      return tree_to_rolemap(tree, separator);
    });
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
