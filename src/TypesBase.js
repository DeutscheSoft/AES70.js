import {
    signature,
    UINT8,
    UINT16
  } from './signature_parser.js';

/**
 * Base class for all non-trivial OCA datatypes.
 */
export class Base {

  /**
   * The type name.
   */
  get TypeName()
  {
    return this.constructor.TypeName;
  }

  /**
   * The corresponding parser object.
   */
  get signature()
  {
    return this.constructor.signature;
  }

  /**
   * Returns a string describing this type for debugging.
   */
  toString()
  {
    return this.TypeName + "(" + this.values().join(", ") + ")";
  }

  /**
   * Constructs this type from an array of members.
   *
   * @param {Array} a - The array of members.
   */
  static fromArray(a)
  {
    return new this(...a);
  }

  /**
   * Create a shallow copy of this object.
   */
  clone()
  {
    return this.constructor.fromArray(this.values());
  }

  /**
   * Returns all members of this object in the order they are defined
   * in the standard.
   */
  get values()
  {
    return [];
  }

  /**
   * Deep comparison.
   *
   * @param to - The object to compare to. Must be of same type.
   */
  isEqual(to)
  {
    if (typeof to !== 'object') return false;
    if (to.constructor !== this.constructor) return false;
    const v1 = this.values;
    const v2 = to.values;

    for (let i = 0; i < v1.length; i++) {
      if (v1[i] !== v2[i]) return false;
    }

    return true;
  }
}

/**
 * Base class for all OCA enum types
 * @extends Base
 */
export class Enum extends Base {
  constructor(value)
  {
    super();
    this.value = value;
  }

  /**
   * Translates am enum value (the integer) to the corresponding name.
   *
   * @param {Integer} value - The enum value.
   * @returns {String}
   */
  static value_to_name(value)
  {
    const values = this.values();
    
    for (let key in values)
    {
      if (values[key] === value)
      {
        return key;
      }
    }
  }

  /**
   * Translates a name to the corresponding enum value.
   *
   * @param {String} name - The enum name.
   * @returns {Integer}
   */
  static name_to_value(name)
  {
    return this.values()[name];
  }

  /**
   * Returns a string describing this enum value. Useful for debugging.
   */
  toString()
  {
    const values = this.constructor.values();
    
    let name = this.constructor.value_to_name(this.value);

    if (name === void(0))
      name = "" + value;

    return this.TypeName + "(" + name + ")";
  }

  get values()
  {
    return [ this.value ];
  }

  valueOf()
  {
    return this.value;
  }
}

const enum8_signature = new signature(UINT8);

/**
 * Baseclass for 8bit wide enums.
 * @extends Enum
 */
export class Enum8 extends Enum {
  static get signature()
  {
    return enum8_signature;
  }
}

const enum16_signature = new signature(UINT16);

/**
 * Baseclass for 16bit wide enums.
 * @extends Enum
 */
export class Enum16 extends Enum {
  static get signature()
  {
    return enum16_signature;
  }
}

export function make_enum(base, name, values)
{
  const ret = class extends base
  {
    static get TypeName()
    {
      return name;
    }

    static values()
    {
      return values;
    }
  };

  for (let prop in values)
  {
    ret[prop] = new ret(values[prop]);
  }

  return ret;
}

// TODO: this is not the most useful representation
// but it works for the moment.
export function make_bitset(width, name, names)
{
  const values = {};
  for (let i = 0; i < names.length; i++)
    values[names[i]] = 1 << i;
  return make_enum(Enum16, name, values);
}

export function make_struct(name, properties, signatures)
{
  let sig = null;

  if (!Array.isArray(signatures))
    sig = signatures;

  return class extends Base
  {
    static get TypeName()
    {
      return name;
    }

    constructor(...args)
    {
      super();
      for (let i = 0; i < properties.length; i++)
      {
        this[properties[i]] = args[i];
      }
    }

    get values()
    {
      const ret = new Array(properties.length);

      for (let i = 0; i < properties.length; i++)
      {
        ret[i] = this[properties[i]];
      }

      return ret;
    }

    static get signature()
    {
      if (sig === null)
        sig = new signature(...signatures);

      return sig;
    }
  };
}
