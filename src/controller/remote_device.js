import { warn, error } from '../log.js';

import { Events } from '../events.js';

import { OcaDeviceManager } from './ControlClasses/OcaDeviceManager.js';
import { OcaSecurityManager } from './ControlClasses/OcaSecurityManager.js';
import { OcaFirmwareManager } from './ControlClasses/OcaFirmwareManager.js';
import { OcaSubscriptionManager } from './ControlClasses/OcaSubscriptionManager.js';
import { OcaPowerManager } from './ControlClasses/OcaPowerManager.js';
import { OcaNetworkManager } from './ControlClasses/OcaNetworkManager.js';
import { OcaMediaClockManager } from './ControlClasses/OcaMediaClockManager.js';
import { OcaLibraryManager } from './ControlClasses/OcaLibraryManager.js';
import { OcaAudioProcessingManager } from './ControlClasses/OcaAudioProcessingManager.js';
import { OcaDeviceTimeManager } from './ControlClasses/OcaDeviceTimeManager.js';
import { OcaTaskManager } from './ControlClasses/OcaTaskManager.js';
import { OcaCodingManager } from './ControlClasses/OcaCodingManager.js';
import { OcaDiagnosticManager } from './ControlClasses/OcaDiagnosticManager.js';
import { OcaBlock } from './ControlClasses/OcaBlock.js';

import { Classes } from './ControlClasses.js';

import { OcaManagerDefaultObjectNumbers } from '../types/OcaManagerDefaultObjectNumbers.js';
import { OcaNotificationDeliveryMode } from '../types/OcaNotificationDeliveryMode.js';

function eventToKey(event) {
  const ono = event.EmitterONo;
  const id = event.EventID;

  return [ ono, id.DefLevel, id.EventIndex ].join(',');
}

function tree_to_rolemap(tree, s)
{
  const roles = new Map();
  if (!s) s = "/";

  const tasks = [];

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
            const nrole = role + n;
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
