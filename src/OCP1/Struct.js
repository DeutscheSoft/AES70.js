import { createType } from './createType.js';

export function Struct(Types, DataType) {
  const countTypes = Object.keys(Types).length;

  if (!DataType) {
    DataType = class {
      constructor(...args) {
        if (args.length === countTypes) {
          let i = 0;
          for (const name in Types) {
            if (!Object.prototype.hasOwnProperty.call(Types, name)) continue;

            this[name] = args[i++];
          }
        } else if (args.length === 1 && typeof args[0] === 'object') {
          const o = args[0];
          for (const name in Types) {
            if (!Object.prototype.hasOwnProperty.call(Types, name)) continue;

            this[name] = o[name];
          }
        } else throw new TypeError('Unexpected arguments.');
      }
    };
  }

  return createType({
    type: DataType,
    isConstantLength: false,
    encodedLength: function (value) {
      let result = 0;

      for (const name in Types) {
        if (!Object.prototype.hasOwnProperty.call(Types, name)) continue;
        const Type = Types[name];

        result += Type.encodedLength(value[name]);
      }

      return result;
    },
    encodeTo: function (dataView, pos, value) {
      for (const name in Types) {
        if (!Object.prototype.hasOwnProperty.call(Types, name)) continue;
        const Type = Types[name];

        pos = Type.encodeTo(dataView, pos, value[name]);
      }
      return pos;
    },
    decodeFrom: function (dataView, pos) {
      const args = new Array(Types.length);
      let i = 0;
      for (const name in Types) {
        if (!Object.prototype.hasOwnProperty.call(Types, name)) continue;
        const Type = Types[name];
        let tmp;

        [pos, tmp] = Type.decodeFrom(dataView, pos);

        args[i++] = tmp;
      }
      return [pos, new DataType(...args)];
    },
    decodeLength: function (dataView, pos) {
      for (const name in Types) {
        if (!Object.prototype.hasOwnProperty.call(Types, name)) continue;
        const Type = Types[name];

        pos = Type.decodeLength(dataView, pos);
      }
      return pos;
    },
  });
}
