export function createType(Type) {
  if (!Type.isConstantLength) return Type;

  const encodedLength = Type.encodedLength();
  const decode = Type.decode;
  const encodeTo = Type.encodeTo;

  return {
    isConstantLength: true,
    encodedLength: Type.encodedLength,
    encodeTo: encodeTo,
    decode: decode,
    decodeFrom: function (dataView, pos) {
      const result = decode(dataView, pos);

      return [pos + encodedLength, result];
    },
    decodeLength: function (dataView, pos) {
      return pos + encodedLength;
    },
  };
}
