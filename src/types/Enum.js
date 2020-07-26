export function Enum(values) {
  let names = null;

  function getName(value) {
    if (names === null) {
      names = new Map();

      for (const name in values) {
        if (!values.hasOwnProperty(name)) continue;
        names.set(values[name], name);
      }
    }

    return names.get(value);
  }

  function getValue(name) {
    if (values.hasOwnProperty(name))
      return values[name];
  }

  let blueprints = null;

  function getBlueprint(value) {
    if (blueprints === null) {
      return void 0;
    }

    return blueprints.get(value);
  }

  function setBlueprint(value, o) {
    if (blueprints === null) {
      blueprints = new Map();
    }

    blueprints.set(value, o);
  }

  const result = class {
    constructor(value) {
      if (typeof(value) === 'string') {
        if (!values.hasOwnProperty(value))
          throw new Error('No such enum value.');

        return this.constructor[value];
      }

      if (blueprints !== null && blueprints.has(value)) {
        return blueprints.get(value);
      }

      this.value = value;

      setBlueprint(value, this);
    }

    get name() {
      return getName(this.value);
    }

    valueOf() {
      return this.value;
    }

    static getName(value) {
      const name = getName(value);

      if (name === void 0)
        throw new Error('No such enum value.');

      return name;
    }

    static getValue(name) {
      const value = getValue(name);

      if (value === void 0)
        throw new Error('No such enum value.');

      return value;
    }

    static values() {
      return values;
    }
  };

  for (const name in values) {
    if (!values.hasOwnProperty(name)) continue;
    Object.defineProperty(result, name, {
      get: function() { return new this(values[name]); },
      enumerable: false,
      configurable: true,
    });
  }

  return result;
}
