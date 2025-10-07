import { Event } from './event.js';
import { PropertyEvent } from './property_event.js';
import { PropertySync } from './property_sync.js';
import { Properties } from './properties.js';
import { CommandRrq } from '../OCP1/commandrrq.js';
import { OcaEventID } from '../types/OcaEventID.js';
import { OcaPropertyID } from '../types/OcaPropertyID.js';
import { EncodedArguments } from '../OCP1/encoded_arguments.js';
import { makeEncoder } from '../OCP1/makeEncoder.js';
import { Property } from './property.js';

function createPropertySync(control_class) {
  const o = Object.create(PropertySync.prototype);
  const blue_print = Object.create(control_class.prototype);

  let index = 0;

  control_class.get_properties().forEach((prop) => {
    const has_setter = !!prop.setter(blue_print, true);
    const has_getter = !!prop.getter(blue_print, true);

    const make_getter = function (i) {
      return function () {
        return this.values[i];
      };
    };

    const make_setter = function (setter) {
      return function (val) {
        setter.call(this.o, val);
        return val;
      };
    };

    if (!has_getter) return;

    const descriptor = {
      enumerable: true,
      get: make_getter(index),
    };

    if (has_setter) descriptor.set = make_setter(prop.setter(blue_print, true));

    Object.defineProperty(o, prop.name, descriptor);
    if (prop.aliases) {
      prop.aliases.forEach((alias) => {
        Object.defineProperty(o, alias, descriptor);
      });
    }
    index++;
  });

  const constructor = function (o) {
    this.init(o);
  };
  constructor.prototype = o;
  return constructor;
}

// method = [ name, level, index, argumentTypes, returnTypes, aliases ]
function implement_method(cls, method) {
  if (!method || !method.length) return;

  const [name, level, index, argumentTypes, returnTypes, aliases] = method;

  const debugName = `${cls.ClassName}.${name}`;

  cls.prototype[name] = function (...args) {
    const argumentCount = argumentTypes.length;
    let callback = null;

    // If there are too few arguments, this might mean
    //
    // - that some of them use the default encoding (e.g. 0)
    // - that the method signature has change in the AES70 version
    //   used
    //
    // this is why we do not error here, yet.
    if (argumentCount < args.length) {
      if (
        argumentCount + 1 === args.length &&
        typeof args[argumentCount] === 'function'
      ) {
        callback = args[argumentCount];
        args.length = argumentCount;
      }
    }

    const cmd = new CommandRrq(
      this.ono,
      level,
      index,
      argumentCount,
      new EncodedArguments(argumentTypes, args)
    );
    return this.device.send_command(cmd, returnTypes, callback, debugName);
  };

  if (aliases) {
    aliases.forEach((alias) => {
      cls.prototype[alias] = function (...args) {
        return this[name](...args);
      };
    });
  }
}

// event = [ name, level, index, argumentTypes ]
function implement_event(cls, event) {
  const [name, level, index, argumentTypes] = event;

  Object.defineProperty(cls.prototype, 'On' + name, {
    get: function () {
      const ev_name = '_On' + name;
      const event = this[ev_name];

      if (event) return event;

      return (this[ev_name] = new Event(
        this,
        new OcaEventID(level, index),
        argumentTypes
      ));
    },
  });
}

function property_event_name(propertyName) {
  return 'On' + propertyName + 'Changed';
}

function implement_property_event(cls, property) {
  if (property.static) return;
  if (property.name === 'ObjectNumber') return;

  const event_name = property_event_name(property.name);

  Object.defineProperty(cls.prototype, event_name, {
    get: function () {
      const ev_name = '_' + event_name;
      const event = this[ev_name];

      if (event) return event;

      return (this[ev_name] = new PropertyEvent(
        this,
        new OcaPropertyID(property.level, property.index),
        property.type
      ));
    },
  });

  if (property.aliases) {
    property.aliases.forEach((alias) => {
      const ev_name = property_event_name(alias);
      if (cls.prototype[ev_name]) return;
      Object.defineProperty(cls.prototype, ev_name, {
        get: function () {
          return this[event_name];
        },
      });
    });
  }
}

function make_property(o) {
  if (typeof o === 'object' && o instanceof Property) return o;

  if (Array.isArray(o)) {
    if (typeof o[1] !== 'object') o[1] = makeEncoder(o[1]);
    return new Property(...o);
  }

  throw new Error('Bad property.');
}

/**
 * Creates a control class. This is an internal API, use define_custom_class
 * for a simpler API to be used when defining custom classes.
 *
 * @param {String} name - The name of this control class.
 * @param {number} level - The level in the class hierachy.
 * @param {String} class_id - The class ID.
 * @param {number} class_version - The class version.
 * @param {Function} base - Class to extend.
 * @param {Array} methods - List of methods.
 * @param {Array} properties - List of properties.
 * @param {Array} events - List of events.
 */
export function make_control_class(
  name,
  level,
  class_id,
  class_version,
  base,
  methods,
  properties,
  events
) {
  let property_sync = null;
  let _properties = null;

  properties = properties.map((v) => make_property(v));

  const cls = class extends base {
    static get ClassID() {
      return class_id;
    }

    static get ClassVersion() {
      return class_version;
    }

    static get ClassName() {
      return name;
    }

    static get_properties() {
      if (_properties === null)
        _properties = new Properties(properties, level, base.get_properties());

      return _properties;
    }

    static GetPropertySync() {
      if (property_sync === null) property_sync = createPropertySync(this);

      return property_sync;
    }

    constructor(device, ono) {
      super(device, ono);

      for (let i = 0; i < properties.length; i++) {
        const prop = properties[i];
        this['_On' + prop.name + 'Changed'] = null;
      }

      for (let i = 0; i < events.length; i++) {
        const ev = events[i];
        this['_On' + ev[0]] = null;
      }
    }

    Dispose() {
      super.Dispose();

      for (let i = 0; i < properties.length; i++) {
        const prop = properties[i];
        const event = this['_On' + prop.name + 'Changed'];
        if (event) event.Dispose();
      }

      for (let i = 0; i < events.length; i++) {
        const ev = events[i];
        const event = this['_On' + ev[0]];

        if (event) event.Dispose();
      }
    }
  };

  for (let i = 0; i < methods.length; i++) implement_method(cls, methods[i]);

  for (let i = 0; i < properties.length; i++)
    implement_property_event(cls, properties[i]);

  for (let i = 0; i < events.length; i++) implement_event(cls, events[i]);

  return cls;
}
