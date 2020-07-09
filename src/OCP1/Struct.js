import { createType } from './createType.js';

export function Struct(Types) {
  const DataType = class {
    constructor(args) {
      if (!args) args = {};
      for (let name in Types) {
        if (!Types.hasOwnProperty(name)) continue;

        this[name] = args[name];
      }
    }
  };

  return createType({
    type: DataType,
    isConstantLength: false,
    encodedLength: function (value) {
      let result = 0;

      for (let name in Types) {
        if (!Types.hasOwnProperty(name)) continue;
        const Type = Types[name];

        result += Type.encodedLength(value[name]);
      }

      return result;
    },
    encodeTo: function (dataView, pos, value) {
      for (let name in Types) {
        if (!Types.hasOwnProperty(name)) continue;
        const Type = Types[name];

        pos = Type.encodeTo(dataView, pos, value[name]);
      }
      return pos;
    },
    decodeFrom: function (dataView, pos) {
      let args = {};
      for (let name in Types) {
        if (!Types.hasOwnProperty(name)) continue;
        const Type = Types[name];
        let tmp;

        [pos, tmp] = Type.decodeFrom(dataView, pos);

        args[name] = tmp;
      }
      return [pos, new DataType(args)];
    },
    decodeLength: function (dataView, pos) {
      for (let name in Types) {
        if (!Types.hasOwnProperty(name)) continue;
        const Type = Types[name];

        pos = Type.decodeLength(dataView, pos);
      }
      return pos;
    },
  });
}
