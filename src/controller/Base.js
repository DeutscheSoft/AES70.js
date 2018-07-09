import { error } from "../OCA.js";

import {
    OcaPropertyChangeType,
    OcaPropertyID,
    OcaEvent,
  } from '../Types';

import { signature, Arguments } from '../signature_parser';

export class Property
{
  constructor(name, signature, level, index, readonly, is_static, aliases)
  {
    this.name = name;
    this.signature = signature;
    this.level = level;
    this.index = index;
    this.readonly = readonly;
    this.static = is_static;
    this.aliases = aliases;
  }

  GetPropertyID()
  {
    return new OcaPropertyID(this.level, this.index);
  }

  GetName()
  {
    return this.name;
  }

  getter(o, no_bind)
  {
    let name = this.name,
        i = 0,
        aliases = this.aliases;

    do {
      if (this.static)
      {
        const c = o.constructor;
        const v = c[name];

        if (v !== void(0))
        {
          return function() {
            return Promise.resolve(v);
          };
        }
      }
      else
      {
        const fun = o['Get'+name];

        if (fun) return no_bind ? fun : fun.bind(o);
      }

      if (aliases && i < aliases.length) {
        name = aliases[i++];
        continue;
      }
    } while (false);

    return null;
  }

  setter(o, no_bind)
  {
    if (this.readonly || this.static) return null;

    let name = this.name,
        i = 0,
        aliases = this.aliases;

    do {
      const fun = o['Set'+name];

      if (fun) return no_bind ? fun : fun.bind(o);

      if (aliases && i < aliases.length) {
        name = aliases[i++];
        continue;
      }
    } while (false);

    return null;
  }

  event(o)
  {
    let name = this.name,
        i = 0,
        aliases = this.aliases;

    do {
      const event = o['On'+name+'Changed'];

      if (event) return event;

      if (aliases && i < aliases.length) {
        name = aliases[i++];
        continue;
      }
    } while (false);

    return null;
  }

  subscribe(o, cb)
  {
    const event = this.event(o);
    const getter = this.getter(o);
    const a = [];

    if (event) event.subscribe(cb).catch(error);

    if (getter) getter().then(cb, error);

    if (event) return event;

    return !!getter;
  }
}

export class Properties
{
  constructor(properties, level, parent)
  {
    const N = new Map();
    const P = [];
    this.by_name = N;
    this.parent = parent;
    this.properties = P;
    this.level = level;

    for (let i = 0; i < properties.length; i++)
    {
      const p = properties[i];
      N.set(p.name, p);
      P[p.index] = p;

      if (p.aliases)
      {
        const aliases = p.aliases;
        for (let j = 0; j < aliases.length; j++)
        {
          N.set(aliases[j], p);
        }
      }
    }
  }

  find_property(id)
  {
    if (id instanceof OcaPropertyID)
    {
      if (id.DefLevel == this.level)
      {
        return this.properties[id.PropertyIndex];
      }
      else if (this.parent)
      {
        return this.parent.find_property(id);
      }
    }
    else if (typeof id === 'string')
    {
      const p = this.by_name.get(id);

      if (p) return p;

      if (this.parent) return this.parent.find_property(id);
    }
    else throw new Error("Expected PropertyID");
  }

  find_name(id)
  {
    const p = this.find_property(id);

    if (p) return p.name;
  }

  find_signature(id)
  {
    const p = this.find_property(id);

    if (p) return p.signature;
  }

  forEach(cb, ctx)
  {
    if (this.parent) this.parent.forEach(cb, ctx);

    const P = this.properties;

    for (let i = 0; i < P.length; i++)
    {
      const p = P[i];
      if (p !== void(0))
        cb.call(ctx, P[i]);
    }
  }
}

export class PropertySync
{
  init(o)
  {
    this.o = o;
    this.values = [];
    this.synchronized = false;
  }

  sync()
  {
    if (this.synchronized) return Promise.resolve();

    let index = 0;
    let tasks = [];

    this.o.get_properties().forEach((prop) => {
      const getter = prop.getter(this.o);

      if (!getter) return;

      const event = prop.event(this.o);

      const change_handler = function(index, value, change_type) {
        if (!change_type.isEqual(OcaPropertyChangeType.CurrentChanged))
          return;

        this.values[index] = value;
      };

      const get_handler = function(index, value) {
        if (value instanceof Arguments)
          value = value.item(0);
        this.values[index] = value;
      };

      if (event)
      {
        tasks.push(
          event.subscribe(change_handler.bind(this, index)).catch(function(){})
        );
      }

      tasks.push(
        getter().then(get_handler.bind(this, index), function() {})
      );
      
      index ++;
    });

    return Promise.all(tasks);
  }

  forEach(cb, ctx)
  {
    let index = 0;

    if (!ctx) ctx = this;

    this.o.get_properties().forEach((prop) => {
      const getter = prop.getter(this.o);

      if (!getter) return;

      cb.call(ctx, this.values[index], prop.name);

      index++;
    });
  }

  Dispose()
  {
    this.o = null;
  }
}

export function createPropertySync(control_class)
{
  const o = Object.create(PropertySync.prototype);
  const blue_print = Object.create(control_class.prototype);

  let index = 0;

  control_class.get_properties().forEach((prop) => {
    const has_setter = !!prop.setter(blue_print, true);
    const has_getter = !!prop.getter(blue_print, true);

    const make_getter = function(i) {
      return function() { return this.values[i]; };
    };

    const make_setter = function(setter) {
      return function(val) { setter.call(this.o, val); return val; }
    };

    if (!has_getter) return;

    const descriptor = {
      enumerable: true,
      get: make_getter(index),
    };

    if (has_setter)
      descriptor.set = make_setter(prop.setter(blue_print, true));

    Object.defineProperty(o, prop.name, descriptor);
    index ++;
  });

  const constructor = function(o) {
    this.init(o);
  };
  constructor.prototype = o;
  return constructor;
}

/**
 * Base class for all client-side control classes.
 */
export class ObjectBase
{
  constructor(ObjectNumber, device)
  {
    this.ono = ObjectNumber;
    this.device = device;
  }

  /**
   * The ObjectNumber of this object.
   */
  get ObjectNumber()
  {
    return this.ono;
  }

  /**
   * The ClassVersion of this object. This is a local property.
   */
  get ClassVersion()
  {
    return this.constructor.ClassVersion;
  }

  /**
   * The ClassVersion of this object. This is a local property.
   */
  get ClassID()
  {
    return this.constructor.ClassID;
  }

  sendCommandRrq(method_level, method_index, param_count, parameters, rs)
  {
    const cmd = new CommandRrq(this.ono, method_level, method_index, param_count, parameters);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Get the name of a given OcaPropertyID.
   * @params {Types/OcaPropertyID} id
   * @return {string} 
   */
  GetPropertyName(id)
  {
    return this.get_properties().find_name(id);
  }

  /**
   * Get the OcaPropertyID for a given name.
   * @params {String} name
   * @return {OcaPropertyID} 
   */
  GetPropertyID(name)
  {
    const p = this.get_properties().find_property(name);

    if (p) return p.GetPropertyID();
  }

  static get_properties()
  {
    return null;
  }

  get_properties()
  {
    return this.constructor.get_properties();
  }

  get __oca_properties__()
  {
    return this.get_properties();
  }

  GetPropertySync()
  {
    const p = this.constructor.GetPropertySync();

    return new p(this);
  }

  Dispose()
  {
  }
}

/**
 * Base class for all events.
 */
class BaseEvent
{
  constructor(object, id, signature)
  {
    this.object = object;
    this.id = id;
    this.handlers = new Set();
    this.result = null;
    this.signature = signature;
  }

  GetOcaEvent()
  {
    return new OcaEvent(this.object.ObjectNumber, this.id);
  }

  do_subscribe() {}
  do_unsubscribe() {}

  /**
   * Subscribe to this event.
   * @param {function} callback
   */
  subscribe(callback)
  {
    this.handlers.add(callback);

    if (this.handlers.size === 1)
      return this.result = this.do_subscribe().then(() => { this.result = null; return true; });

    if (this.result !== null)
      return this.result;

    return Promise.resolve(true);
  }

  /**
   * Unsubscribe from this event.
   * @param {function} callback
   */
  unsubscribe(callback)
  {
    this.handlers.delete(callback);

    if (!this.handlers.size)
      this.do_unsubscribe().catch(error);

    return Promise.resolve(true);
  }

  /**
   * Unsubscribe all event handlers.
   */
  Dipose()
  {
    this.handlers.clear();

    if (this.handlers.size)
      this.do_unsubscribe().catch(error);
  }
}

/**
 * Class used to represent all events specified by the OCA standard.
 */
export class Event extends BaseEvent
{
  constructor(object, id, signature)
  {
    super(object, id, signature);
    this.callback = (notification) => {
      if (!this.handlers.size) return;
      const args = signature && notification.param_count ? signature.low_decode(new DataView(notification.parameters)) : [];
      const object = this.object;
      this.handlers.forEach(function(callback) {
          try {
            callback.apply(object, args);
          } catch (e) {
            error(e);
          }
        });
    };
  }

  do_subscribe()
  {
    return this.object.device.add_subscription(this.GetOcaEvent(), this.callback);
  }

  do_unsubscribe(callback)
  {
    return this.object.device.remove_subscription(this.GetOcaEvent(), this.callback);
  }
}

const change_type_signature = new signature(OcaPropertyChangeType);

/**
 * Class used to represent property changes.
 * When this event fires, event handlers will be called with
 * the new value, the {@link OcaPropertyChangeType} and
 * the {@link OcaPropertyID} of the property.
 */
export class PropertyEvent extends BaseEvent
{
  constructor(object, id, signature)
  {
    super(object, id, signature);
    this.callback = (id, data) => {
      if (!id.isEqual(this.id)) return;
      const change_type = change_type_signature.decode(new DataView(data, data.byteLength - 1));
      const value = signature.decode(new DataView(data));

      this.handlers.forEach(function(callback) {
          try {
            callback.call(object, value, change_type, id);
          } catch (e) {
            error(e);
          }
        });
    };
  }

  do_subscribe()
  {
    return this.object.OnPropertyChanged.subscribe(this.callback);
  }

  do_unsubscribe(callback)
  {
    return this.object.OnPropertyChanged.unsubscribe(this.callback);
  }
}
