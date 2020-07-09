import { createType } from './createType.js';
import { Enum as EnumType } from '../TypesBase.js';

export function Enum(values, Base) {
  const DataType = class extends EnumType {
    static values() {
      return values;
    }
  };

  const encodeTo = Base.encodeTo;
  const decode = Base.decode;

  let Type;

  Type = createType({
    isConstantLength: true,
    encodedLength: Base.encodedLength,
    encodeTo: function (dataView, pos, value) {
      if (typeof value === 'object' && value instanceof DataType) {
        value = value.value;
      } else if (value instanceof 'string') {
        if (!values.hasOwnProperty(value))
          throw new TypeError('Unknown enum entry.');
        value = values[value];
      } else if (value instanceof 'number') {
          throw new TypeError('Unknown enum entry.');
      } else {
        throw new TypeError('Unsupported type.');
      }

      return encodeTo(dataView, pos, value);
    },
    decode: function (dataView, pos) {
      const value = decode(dataView, pos);
      const name = DataType.value_to_name(value);

      return Type[name];
    },
  });

  for (let name in values) {
    Type[name] = new DataType(values[name]);
  }

  return Type;
}
