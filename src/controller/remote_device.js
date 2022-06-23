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

import * as RemoteControlClasses from './ControlClasses.js';

import { OcaManagerDefaultObjectNumbers } from '../types/OcaManagerDefaultObjectNumbers.js';
import { OcaNotificationDeliveryMode } from '../types/OcaNotificationDeliveryMode.js';
import { RemoteError } from './remote_error.js';

function eventToKey(event) {
  const ono = event.EmitterONo;
  const id = event.EventID;

  return [ono, id.DefLevel, id.EventIndex].join(',');
}

function tree_to_rolemap(tree, s) {
  const roles = new Map();
  if (!s) s = '/';

  const tasks = [];

  const fetch_role = (o) => {
    if (Array.isArray(o)) {
      o.forEach(fetch_role);
    } else {
      tasks.push(
        o.GetRole().then((role) => {
          roles.set(o, role);
        })
      );
    }
  };

  tree.forEach(fetch_role);

  return Promise.all(tasks).then(function () {
    const rolemap = new Map();

    const build_paths = (a, prefix) => {
      const p = prefix != null ? prefix + s : '';
      const local_roles = new Map();

      a.forEach(function (o, i) {
        if (Array.isArray(o)) return;

        const role = roles.get(o);

        if (local_roles.has(role)) {
          const tmp = local_roles.get(role);

          if (Array.isArray(tmp)) tmp.push(o);
          else local_roles.set(role, [tmp, o]);
        } else {
          local_roles.set(role, o);
        }
      });

      local_roles.forEach(function (o, role) {
        if (Array.isArray(o)) {
          let n = 1;
          for (let i = 0; i < o.length; i++) {
            const nrole = role + n;
            while (local_roles.has(nrole)) {
              n++;
            }
            local_roles.set(nrole, o[i]);
            local_roles.set(o[i], nrole);
          }

          local_roles.delete(role);
        } else {
          local_roles.set(o, role);
        }
      });

      a.forEach((o, i) => {
        if (Array.isArray(o)) {
          build_paths(o, p + local_roles.get(a[i - 1]));
        } else {
          const path = p + local_roles.get(o);
          rolemap.set(path, o);
        }
      });
    };

    build_paths(tree, null);

    return rolemap;
  });
}

const subscriberMethod = {
  ONo: 1055,
  MethodID: {
    DefLevel: 1,
    MethodIndex: 1,
  },
};

/**
 * Controller class for a remote OCA device.
 *
 * This is the entry point for any interaction with a remote device.
 * Can be used to query the available object tree, or interact with the manager
 * classes.
 *
 * @param {ClientConnection} connection
 *      The connection to use.
 */
export class RemoteDevice extends Events {
  constructor(connection, ...modules) {
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
    this.add_control_classes(Object.values(RemoteControlClasses));
    modules.map((m) => this.add_control_classes(m));

    /**
     * The device manager object. An instance of :class:`OcaDeviceManager`.
     */
    this.DeviceManager = new OcaDeviceManager(
      OcaManagerDefaultObjectNumbers.DeviceManager,
      this
    );
    /**
     * The Security manager object. An instance of :class:`OcaSecurityManager`
     */
    this.SecurityManager = new OcaSecurityManager(
      OcaManagerDefaultObjectNumbers.SecurityManager,
      this
    );
    /**
     * The Firmware manager object. An instance of :class:`OcaFirmwareManager`
     */
    this.FirmwareManager = new OcaFirmwareManager(
      OcaManagerDefaultObjectNumbers.FirmwareManager,
      this
    );
    /**
     * The Subscription manager object. An instance of :class:`OcaSubscriptionManager`
     */
    this.SubscriptionManager = new OcaSubscriptionManager(
      OcaManagerDefaultObjectNumbers.SubscriptionManager,
      this
    );
    /**
     * The Power manager object. An instance of :class:`OcaPowerManager`
     */
    this.PowerManager = new OcaPowerManager(
      OcaManagerDefaultObjectNumbers.PowerManager,
      this
    );
    /**
     * The Network manager object. An instance of :class:`OcaNetworkManager`
     */
    this.NetworkManager = new OcaNetworkManager(
      OcaManagerDefaultObjectNumbers.NetworkManager,
      this
    );
    /**
     * The MediaClock manager object. An instance of :class:`OcaMediaClockManager`
     */
    this.MediaClockManager = new OcaMediaClockManager(
      OcaManagerDefaultObjectNumbers.MediaClockManager,
      this
    );
    /**
     * The Library manager object. An instance of :class:`OcaLibraryManager`
     */
    this.LibraryManager = new OcaLibraryManager(
      OcaManagerDefaultObjectNumbers.LibraryManager,
      this
    );
    /**
     * The AudioProcessing manager object. An instance of :class:`OcaAudioProcessingManager`
     */
    this.AudioProcessingManager = new OcaAudioProcessingManager(
      OcaManagerDefaultObjectNumbers.AudioProcessingManager,
      this
    );
    /**
     * The DeviceTime manager object. An instance of :class:`OcaDeviceTimeManager`
     */
    this.DeviceTimeManager = new OcaDeviceTimeManager(
      OcaManagerDefaultObjectNumbers.DeviceTimeManager,
      this
    );
    /**
     * The Task manager object. An instance of :class:`OcaTaskManager`
     */
    this.TaskManager = new OcaTaskManager(
      OcaManagerDefaultObjectNumbers.TaskManager,
      this
    );
    /**
     * The Coding manager object. An instance of :class:`OcaCodingManager`
     */
    this.CodingManager = new OcaCodingManager(
      OcaManagerDefaultObjectNumbers.CodingManager,
      this
    );
    /**
     * The Diagnostic manager object. An instance of :class:`OcaDiagnosticManager`
     */
    this.DiagnosticManager = new OcaDiagnosticManager(
      OcaManagerDefaultObjectNumbers.DiagnosticManager,
      this
    );
    /**
     * The Root object. An instance of :class:`OcaBlock`
     */
    this.Root = new OcaBlock(100, this);

    this.subscriptions = new Map();
  }

  /**
   * Close the associated connection.
   */
  close() {
    this.connection.close();
  }

  send_command(cmd, returnType, callback) {
    return this.connection.send_command(cmd, returnType, callback);
  }

  _doSubscribe(event) {
    return this.SubscriptionManager.AddSubscription(
      event,
      subscriberMethod,
      new Uint8Array(0),
      OcaNotificationDeliveryMode.Reliable,
      new Uint8Array(0)
    );
  }

  async add_subscription(event, callback) {
    const key = eventToKey(event);
    const subscriptions = this.subscriptions;

    {
      const info = subscriptions.get(key);

      if (info) {
        info.callbacks.add(callback);
        return true;
      }
    }

    /* do the actual subscription */

    const cb = (o) => {
      const S = this.subscriptions.get(key);
      if (!S) {
        warn('Subscription lost.');
        return;
      }
      const a = S.callbacks;
      a.forEach(function (cb) {
        try {
          cb(o);
        } catch (e) {
          error(e);
        }
      });
    };

    this.connection._addSubscriber(event, cb);

    const info = {
      callbacks: new Set([callback]),
      callback: cb,
    };

    subscriptions.set(key, info);

    try {
      await this._doSubscribe(event);
    } catch (err) {
      subscriptions.delete(key);
      throw err;
    }
  }

  remove_subscription(event, callback) {
    const key = eventToKey(event);

    const info = this.subscriptions.get(key);

    if (!info) return Promise.reject('Callback not registered.');

    const a = info.callbacks;

    a.delete(callback);

    if (!a.size) {
      this.connection._removeSubscriber(event);
      this.subscriptions.delete(key);
      return this.SubscriptionManager.RemoveSubscription(
        event,
        subscriberMethod
      );
    }

    return Promise.resolve(true);
  }

  find_best_class(id) {
    if (typeof id === 'object' && id.ClassID) id = id.ClassID;
    while (id.length) {
      const result = this.find_class_by_id(id);
      if (result) return result;
      id = id.substr(0, id.length - 1);
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
  add_control_classes(module) {
    if (Array.isArray(module)) {
      const m = {};

      for (let i = 0; i < module.length; i++) {
        const o = module[i];
        m[o.ClassID] = o;
      }

      module = m;
    } else if (typeof module !== 'object') {
      throw new Error('Unsupported module.');
    }
    this.modules.push(module);
  }

  find_class_by_id(id) {
    if (typeof id === 'object' && id.ClassID) id = id.ClassID;
    const modules = this.modules;
    for (let i = modules.length - 1; i >= 0; i--) {
      const ret = modules[i][id];
      if (ret) return ret;
    }
    return null;
  }

  allocate(c, ono) {
    if (typeof ono === 'object') ono = ono.valueOf();
    const objects = this.objects;
    if (!objects.has(ono)) {
      objects.set(ono, new c(ono, this));
    }
    return objects.get(ono);
  }

  resolve_object(o) {
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

  GetDeviceTree() {
    const get_members = (block) => {
      return block.GetMembers().then((a) => {
        const ret = [];

        a = a.map(this.resolve_object, this);

        for (let i = 0; i < a.length; i++) {
          ret.push(Promise.resolve(a[i]));

          if (a[i].ClassID.startsWith(OcaBlock.ClassID)) {
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
  get_device_tree() {
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
  get_role_map(separator) {
    return this.get_device_tree().then(function (tree) {
      return tree_to_rolemap(tree, separator);
    });
  }

  discover_all_fallback() {
    return this.GetDeviceTree().then((tree) => {
      const ret = [];
      const it = function (a) {
        for (let i = 0; i < a.length; i++) {
          if (Array.isArray(a[i])) {
            it(a[i]);
          } else {
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
   * @deprecated Use :func:`get_device_tree` instead.
   * @returns {Promise} The object list.
   */
  discover_all() {
    return this.Root.GetMembersRecursive()
      .then((res) => res.map(this.resolve_object, this))
      .catch(() => this.discover_all_fallback());
  }

  /**
   * Set the keepalive interval.
   * @param {number} seconds - Keepalive interval in seconds.
   */
  set_keepalive_interval(seconds) {
    this.connection.set_keepalive_interval(seconds);
  }
}
