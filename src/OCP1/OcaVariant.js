import { createType } from './createType.js';
import { OcaVariant as OcaVariantType } from '../types/OcaVariant.js';

export function OcaVariant(...Types) {
  const canEncode = function (value) {
    if (typeof value === 'object' && value instanceof OcaVariantType) {
      return Types[value.Index].canEncode(value.Value);
    }

    for (const type of Types) {
      if (type.canEncode(value)) return true;
    }
    return false;
  };
  const encodeTo = function (dataView, pos, value) {
    if (typeof value === 'object' && value instanceof OcaVariantType) {
      dataView.setUint8(pos++, value.Index);
      return Types[value.Index].encodeTo(dataView, pos, value.Value);
    }

    for (let i = 0; i < Types.length; i++) {
      const type = Types[i];

      if (!type.canEncode(value)) continue;
      dataView.setUint8(pos++, i);
      return type.encodeTo(dataView, pos, value);
    }

    throw new TypeError('Cannot encode argument.');
  };
  const decodeFrom = function (dataView, pos) {
    const index = dataView.getUint8(pos++);
    const type = Types[index];

    const tmp = type.decodeFrom(dataView, pos);

    tmp[1] = new OcaVariantType(index, tmp[1]);

    return tmp;
  };
  const decodeLength = function (dataView, pos) {
    const index = dataView.getUint8(pos);

    if (index >= Types.length) {
      throw new Error('OcaVariant index out of bounds.');
    }

    const type = Types[index];

    return type.decodeLength(dataView, pos + 1) + 1;
  };

  const isConstantLength = Types.every((type) => type.isConstantLength);

  if (isConstantLength) {
    const encodedLengths = Types.map((type) => type.encodedLength());

    if (encodedLengths.every((length) => length === encodedLengths[0])) {
      return createType({
        isConstantLength: true,
        encodedLength: function (value) {
          return encodedLengths[0] + 1;
        },
        canEncode,
        encodeTo,
        decodeFrom,
        decodeLength,
      });
    }
  }

  return createType({
    isConstantLength: false,
    encodedLength: function (value) {
      if (typeof value === 'object' && value instanceof OcaVariantType) {
        return Types[value.Index].encodedLength(value.Value) + 1;
      }

      for (const type of Types) {
        if (type.canEncode(value)) {
          return 1 + type.encodedLength(value);
        }
      }

      throw new TypeError('Cannot encode argument.');
    },
    canEncode,
    encodeTo,
    decodeFrom,
    decodeLength,
  });
}
