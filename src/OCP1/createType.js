export function createType(Type) {
  if (!Type.isConstantLength) return Type;

  const encodedLength = Type.encodedLength();
  const decode = Type.decode;
  const encodeTo = Type.encodeTo;
  const decodeFrom = Type.decodeFrom;

  return {
    isConstantLength: true,
    canEncode: Type.canEncode,
    encodedLength: Type.encodedLength,
    encodeTo: encodeTo,
    decode: decode,
    decodeFrom: decode
      ? function (dataView, pos) {
          const result = decode(dataView, pos);

          return [pos + encodedLength, result];
        }
      : decodeFrom,
    decodeLength: function (dataView, pos) {
      return pos + encodedLength;
    },
  };
}
