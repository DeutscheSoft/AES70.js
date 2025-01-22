import { OcaPropertyID } from '../types/OcaPropertyID.js';
import { error } from '../log.js';

/*eslint no-constant-condition: ["error", { "checkLoops": false }]*/

/**
 * Describes an AES70 property. Simplifies getting or setting properties
 * and listening to property changes.
 */
export class Property {
  constructor(
    name,
    type,
    level,
    index,
    readonly,
    is_static,
    aliases,
    accessors
  ) {
    this.name = name;
    this.type = type;
    this.level = level;
    this.index = index;
    this.readonly = readonly;
    this.static = is_static;
    this.aliases = aliases;

    if (!aliases && !accessors && !is_static) {
      accessors = { get: 'Get' + name };
    }

    this.accessors = accessors;
  }

  /**
   * Returns the OcaPropertyID of this property.
   */
  GetPropertyID() {
    return new OcaPropertyID(this.level, this.index);
  }

  /**
   * Returns the name of this property.
   */
  GetName() {
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
  getter(o, no_bind) {
    let name = this.name;
    let i = 0;
    const aliases = this.aliases;
    const accessors = this.accessors;

    if (accessors) {
      const get = accessors.get;

      if (!get) return null;

      let fun;

      if (typeof get === 'string') {
        fun = o[get];
      } else if (typeof get === 'object') {
        const { name, index } = get;

        if (index >= 0) {
          fun = function (callback) {
            if (typeof callback === 'function') {
              this[name]((ok, result) => {
                if (ok) {
                  result = result.item(index);
                }

                callback(ok, result);
              });
            } else {
              return this[name]().then((result) => result.item(index));
            }
          };
        } else {
          fun = o[name];
        }
      } else {
        throw new Error(`Unexpected accessor.`);
      }

      return no_bind ? fun : fun.bind(o);
    }

    do {
      if (this.static) {
        const c = o.constructor;
        const v = c[name];

        if (v !== void 0) {
          return function () {
            return Promise.resolve(v);
          };
        }
      } else {
        const fun = o['Get' + name];

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
  setter(o, no_bind) {
    if (this.readonly || this.static) return null;

    let name = this.name,
      i = 0;
    const aliases = this.aliases;

    do {
      const fun = o['Set' + name];

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
  event(o) {
    let name = this.name,
      i = 0;
    const aliases = this.aliases;

    do {
      const event = o['On' + name + 'Changed'];

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
  subscribe(o, cb) {
    const event = this.event(o);
    const getter = this.getter(o);

    if (event) event.subscribe(cb).catch(error);

    if (getter) getter().then(cb, error);

    if (event) return event;

    return !!getter;
  }
}
