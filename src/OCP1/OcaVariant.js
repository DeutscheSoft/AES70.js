import { createType } from './createType.js';

export function OcaVariant(...Types) {
  const canEncode = function (value) {
    for (const type of Types) {
      if (type.canEncode(value)) return true;
    }
    return false;
  };
  const encodeTo = function (dataView, pos, value) {
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

    return type.decodeFrom(dataView, pos);
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
      for (const type of Types) {
        if (type.canEncode(value)) {
          return 1 + type.encodedLength(value);
        }
      }
      return encodedLengths[0] + 1;
    },
    canEncode,
    encodeTo,
    decodeFrom,
    decodeLength,
  });
}
