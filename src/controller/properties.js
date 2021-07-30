import { OcaPropertyID } from '../types/OcaPropertyID.js';

/**
 * Class representing the collection of all properties in a remote object.
 * Returned by the {@link ObjectBase#get_properties} method inside of all remote control
 * classes.
 */
export class Properties {
  constructor(properties, level, parent) {
    const N = new Map();
    const P = [];
    this.by_name = N;
    this.parent = parent;
    this.properties = P;
    this.level = level;

    for (let i = 0; i < properties.length; i++) {
      const p = properties[i];
      N.set(p.name, p);
      P[p.index] = p;

      if (p.aliases) {
        const aliases = p.aliases;
        for (let j = 0; j < aliases.length; j++) {
          N.set(aliases[j], p);
        }
      }
    }
  }

  /**
   * Find a property.
   *
   * @param {String|OcaPropertyID} id The property identifier. Either a name
   *    or a :class:`OcaPropertyID`.
   */
  find_property(id) {
    if (id instanceof OcaPropertyID) {
      if (id.DefLevel == this.level) {
        return this.properties[id.PropertyIndex];
      } else if (this.parent) {
        return this.parent.find_property(id);
      }
    } else if (typeof id === 'string') {
      const p = this.by_name.get(id);

      if (p) return p;

      if (this.parent) return this.parent.find_property(id);
    } else throw new Error('Expected PropertyID');
  }

  find_name(id) {
    const p = this.find_property(id);

    if (p) return p.name;
  }

  /**
   * Iterate all properties.
   *
   * @param {Function} callback
   *    Function to be called with each
   *    :class:`Property` as only argument.
   * @param {Object} [ctx]
   *    Optional context to call function in.
   */
  forEach(cb, ctx) {
    const ret = this.parent ? this.parent.forEach(cb, ctx) : [];

    const P = this.properties;

    for (let i = 0; i < P.length; i++) {
      const p = P[i];
      if (p !== void 0) ret.push(cb.call(ctx, p));
    }

    return ret;
  }
}
