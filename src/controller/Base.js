import {
    error,
    CommandRrq,
  } from "../OCA.js";

import {
    OcaPropertyChangeType,
    OcaPropertyID,
    OcaEvent,
    OcaEventID,
  } from '../Types';

import { signature, Arguments } from '../signature_parser';

/**
 * Describes an AES70 property. Simplifies getting or setting properties
 * and listening to property changes.
 */
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

  /**
   * Returns the OcaPropertyID of this property.
   */
  GetPropertyID()
  {
    return new OcaPropertyID(this.level, this.index);
  }

  /**
   * Returns the name of this property.
   */
  GetName()
  {
    return this.name;
  }

  /**
   * Returns the getter for this property in o.
   *
   * @param {Object} o - The remote object.
   * @param {boolean} [no_bind=false] - If true, the returned function is not
   *                                    bound to the object o.
   * @returns {Function} The getter. If none could be found, null is returned.
   */
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

  /**
   * Returns the setter for this property in o.
   *
   * @param {Object} o - The remote object.
   * @param {boolean} [no_bind=false] - If true, the returned function is not
   *                                    bound to the object o.
   * @returns {Function} The setter. If none could be found, null is returned.
   */
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

  /**
   * Returns the event for this property in o.
   *
   * @returns {PropertyEvent} The event.
   */
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

  /**
   * Subscribe to changes of this property in o. If successful, the callback will be called at least
   * once with the initial value.
   *
   * @param {Object} o - The remote object.
   * @param {Function} cb - The callback.
   * @returns {boolean} Returns true if the property could be subscribed.
   */
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

/**
 * Class representing the collection of all properties in a remote object.
 * Returned by the {@link ObjectBase#get_properties} method inside of all remote control
 * classes.
 */
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

  /**
   * Find a property.
   *
   * @param {String|OcaPropertyID} id - The property identifier. Either a name
   *                                    or a {@link OcaPropertyID}.
   */
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

  /**
   * Iterate all properties.
   *
   * @param {Function} callback - Function to be called with each {@link Property} 
   *                              as only argument.
   * @param {Object} [ctx] - Optional context to call function in.
   */
  forEach(cb, ctx)
  {
    const ret = (this.parent)
        ? this.parent.forEach(cb, ctx)
        : [];

    const P = this.properties;

    for (let i = 0; i < P.length; i++)
    {
      const p = P[i];
      if (p !== void(0))
        ret.push(cb.call(ctx, P[i]));
    }

    return ret;
  }
}

/**
 * Objects of this class can be used to keep a synchronized object containing
 * all properties of a remote OCA object. Instances of this class are usually
 * created by calling {@link ObjectBase#GetPropertySync()}.
 *
 * After {@link PropertySync#sync} has completed, all properties will be kept
 * synchronized. Setting properties in this object will try to set them to the
 * same value in the remote object.
 *
 * Remember to call {@link PropertySync#Dispose} when this object is no longer
 * needed. This will unsubscribe all event listeners.
 */
export class PropertySync
{
  init(o)
  {
    this.o = o;
    this.values = [];
    this.synchronized = false;
    this.subscriptions = [];
  }

  /**
   * Starts synchronizing the properties in this object with the corresponding
   * ones in the remote instance.
   *
   * @returns {Promise<void>}
   */
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
        const cb = change_handler.bind(this, index);
        // NOTE: we do not want to wait for the promise to resolve
        // before storing this unsubscription handler because that
        // would have a potential race condition.
        this.subscriptions.push(event.unsubscribe.bind(event, cb));
        tasks.push(event.subscribe(cb).catch(function(){}));
      }

      tasks.push(
        getter().then(get_handler.bind(this, index), function() {})
      );
      
      index ++;
    });

    return Promise.all(tasks);
  }

  /**
   * Iterate over all properties.
   *
   * @param {Function} cb - Callback functions, Will be called with value and
   *                        property name as arguments.
   * @param {Object} ctx - The context to call the callback in. Defaults to
   *                       this.
   */
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

  /**
   * Dispose of this object. Will unsubscribe all event handlers.
   */
  Dispose()
  {
    this.o = null;
    this.subscriptions.forEach((cb) => cb());
    this.subscriptions = null;
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

  /**
   * The name of the class of this object. This is a local property.
   */
  get ClassName()
  {
    return this.constructor.ClassName;
  }

  sendCommandRrq(method_level, method_index, param_count, parameters, rs)
  {
    const cmd = new CommandRrq(this.ono, method_level, method_index, param_count, parameters);
    return this.device.send_command(cmd, rs);
  }

  /**
   * Get the name of a given OcaPropertyID.
   * @param {Types/OcaPropertyID} id
   * @return {string} 
   */
  GetPropertyName(id)
  {
    return this.get_properties().find_name(id);
  }

  /**
   * Get the OcaPropertyID for a given name.
   * @param {String} name
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

  /**
   * Returns an instance of {@link Properties} for this remote object.
   */
  get_properties()
  {
    return this.constructor.get_properties();
  }

  get __oca_properties__()
  {
    return this.get_properties();
  }

  /**
   * Returns an instance of {@link PropertySync} for this remote object.
   */
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
      this.do_unsubscribe().catch(function(){});

    return Promise.resolve(true);
  }

  /**
   * Unsubscribe all event handlers.
   */
  Dipose()
  {
    this.handlers.clear();

    if (this.handlers.size)
      this.do_unsubscribe().catch(function(){});
  }
}

/**
 * Class used to represent all events specified by the OCA standard.
 *
 * @extends BaseEvent
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
 *
 * @extends BaseEvent
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

// method = [ name, level, index, argument_signatures, return_value_signatures ] 
function implement_method(cls, method)
{
  if (!method || !method.length) return;

  const name = method[0],
        level = method[1],
        index = method[2];
  let as = method[3],
      rs = method[4];

  if (as && as.length)
    as = new signature(...as);
  else
    as = null;

  if (rs && rs.length)
    rs = new signature(...rs);
  else
    rs = null;

  cls.prototype[name] = function()
  {
    const cmd = new CommandRrq(this.ono, level, index,
                               as ? as.length : 0,
                               as ? as.encoder(Array.from(arguments)) : null)
    return this.device.send_command(cmd, rs);
  }
}

// event = [ name, level, index, argument_signatures ] 
function implement_event(cls, event)
{
  const name = event[0],
        level = event[1],
        index = event[2],
        as = new signature(...event[3]);

  Object.defineProperty(cls.prototype, "On" + name, {
    get: function()
    {
      const ev_name = "_On" + name;
      const event = this[ev_name];

      if (event) return event;

      return this[ev_name] = new Event(this, new OcaEventID(level, index), as);
    }
  });
}

function implement_property_event(cls, property)
{
  if (property.static) return;
  if (property.name === "ObjectNumber") return;

  Object.defineProperty(cls.prototype, "On" + property.name + "Changed", {
    get: function()
    {
      const ev_name = "_On" + property.name + "Changed";
      const event = this[ev_name];

      if (event) return event;

      return this[ev_name] = new PropertyEvent(this, new OcaPropertyID(property.level, property.index),
                                               property.signature);
    }
  });
}

export function make_control_class(name, level, class_id, class_version, base, methods, properties, events)
{
  let property_sync = null;
  let _properties = null;

  const cls = class extends base
  {
    static get ClassID()
    {
      return class_id;
    }

    static get ClassVersion()
    {
      return class_version;
    }

    static get ClassName()
    {
      return name;
    }

    static get_properties()
    {
      if (_properties === null)
        _properties = new Properties(properties, level, base.get_properties());

      return _properties;
    }

    static GetPropertySync()
    {
      if (property_sync === null)
        property_sync = createPropertySync(this);

      return property_sync;
    }

    constructor(device, ono)
    {
      super(device, ono);

      for (let i = 0; i < properties.length; i++)
      {
        const prop = properties[i];
        this["_On"+prop.name+"Changed"] = null;
      }

      for (let i = 0; i < events.length; i++)
      {
        const ev = events[i];
        this["_On"+ev[0]] = null;
      }
    }

    Dispose()
    {
      super.Dispose();

      for (let i = 0; i < properties.length; i++)
      {
        const prop = properties[i];
        const event = this["_On"+prop.name+"Changed"];
        if (event) event.Dispose();
      }

      for (let i = 0; i < events.length; i++)
      {
        const ev = events[i];
        const event = this["_On"+ev[0]];

        if (event) event.Dispose();
      }
    }
  };

  for (let i = 0; i < methods.length; i++)
    implement_method(cls, methods[i]);

  for (let i = 0; i < properties.length; i++)
    implement_property_event(cls, properties[i]);

  for (let i = 0; i < events.length; i++)
    implement_event(cls, events[i]);

  return cls;
}
