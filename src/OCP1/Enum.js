import { createType } from './createType.js';

export function Enum(DataType, Base) {
  const encodeTo = Base.encodeTo;
  const decode = Base.decode;

  const values = DataType.values();

  return createType({
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
}
