import { createType } from './createType.js';

export function Enum(DataType, Base) {
  const encodeTo = Base.encodeTo;
  const decode = Base.decode;

  const type = createType({
    isConstantLength: true,
    encodedLength: Base.encodedLength,
    encodeTo: function (dataView, pos, value) {
      if (typeof value === 'object' && value instanceof DataType) {
        value = value.value;
      } else if (typeof value === 'string') {
        value = DataType.getValue(value);
      } else if (typeof value === 'number') {
        DataType.getName(value);
      } else {
        throw new TypeError('Unsupported type.');
      }

      return encodeTo(dataView, pos, value);
    },
    decode: function (dataView, pos) {
      const value = decode(dataView, pos);

      const result = new DataType(value);

      return result;
    },
  });


  for (const name in DataType.values()) {
    Object.defineProperty(type, name, {
      get: function() { return DataType[name]; },
      enumerable: false,
      configurable: true,
    });
  }

  return type;
}
