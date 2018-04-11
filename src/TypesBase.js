import {
    signature,
    UINT8,
    UINT16
  } from './signature_parser.js';

/**
 * Base class for all non-trivial OCA datatypes.
 */
export class Base {
  get TypeName()
  {
    return this.constructor.TypeName;
  }

  get signature()
  {
    return this.constructor.signature;
  }

  toString()
  {
    return this.TypeName + "(" + this.values().join(", ") + ")";
  }

  static fromArray(a)
  {
    return new this(...a);
  }

  clone()
  {
    return this.constructor.fromArray(this.values());
  }

  values()
  {
    return [];
  }

  isEqual(to)
  {
    if (typeof to !== 'object') return false;
    if (to.constructor !== this.constructor) return false;
    const v1 = this.values();
    const v2 = to.values();

    for (let i = 0; i < v1.length; i++) {
      if (v1[i] !== v2[i]) return false;
    }

    return false;
  }
}

/**
 * Base class for all OCA enum types
 */
export class Enum extends Base {
  constructor(value)
  {
    super();
    this.value = value;
  }

  static value_to_name(value)
  {
    const values = this.constructor.values();
    
    for (let key in values)
    {
      if (values[key] === value)
      {
        return key;
      }
    }
  }

  static name_to_value(name)
  {
    return this.constructor.values()[name];
  }

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
}

const enum8_signature = new signature(UINT8);

export class Enum8 extends Enum {
  static get signature()
  {
    return enum8_signature;
  }
}

const enum16_signature = new signature(UINT16);

export class Enum16 extends Enum {
  static get signature()
  {
    return enum16_signature;
  }
}
