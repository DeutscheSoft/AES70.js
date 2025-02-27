import { createType } from './createType.js';
import { isTypedArray } from './is_typed_array.js';
import { getLengthEncoder } from './getLengthEncoder.js';

function OcaArray1DConstantLength(Type, length) {
  const encodedLength = Type.encodedLength(void 0);
  const encodeTo = Type.encodeTo;
  const decode = Type.decode;

  const canEncode = function (value) {
    return (
      (Array.isArray(value) || isTypedArray(value)) && value.length === length
    );
  };

  return createType({
    isConstantLength: true,
    canEncode,
    encodedLength: function () {
      return length * encodedLength;
    },
    encodeTo: function (dataView, pos, value) {
      for (let i = 0; i < length; i++) {
        pos = encodeTo(dataView, pos, value[i]);
      }

      return pos;
    },
    decode: function (dataView, pos) {
      const value = new Array(length);

      for (let i = 0; i < length; i++) {
        value[i] = decode(dataView, pos);
        pos += encodedLength;
      }

      return value;
    },
  });
}

function OcaArray1DDynamicLength(Type, length) {
  const encodedLength = Type.encodedLength;
  const encodeTo = Type.encodeTo;
  const decodeFrom = Type.decodeFrom;
  const decodeLength = Type.decodeLength;

  const canEncode = function (value) {
    return (
      (Array.isArray(value) || isTypedArray(value)) && value.length === length
    );
  };

  return createType({
    isConstantLength: false,
    canEncode,
    encodedLength: function (value) {
      if (!canEncode(value))
        throw new TypeError(`Expected array of length ${length}.`);

      let result = 0;
      for (let i = 0; i < length; i++) {
        result += encodedLength(value[i]);
      }
      return result;
    },
    encodeTo: function (dataView, pos, value) {
      for (let i = 0; i < length; i++) {
        pos = encodeTo(dataView, pos, value[i]);
      }

      return pos;
    },
    decodeFrom: function (dataView, pos) {
      const value = new Array(length);

      for (let i = 0; i < length; i++) {
        let tmp;

        [pos, tmp] = decodeFrom(dataView, pos);

        value[i] = tmp;
      }

      return [pos, value];
    },
    decodeLength: function (dataView, pos) {
      for (let i = 0; i < length; i++) {
        pos = decodeLength(dataView, pos);
      }

      return pos;
    },
  });
}

export function OcaArray1D(Type, length) {
  if (
    typeof length !== 'number' ||
    !isFinite(length) ||
    !Number.isInteger(length) ||
    length <= 0
  )
    throw new TypeError(`Expected length to be a positive integer.`);
  return Type.isConstantLength
    ? OcaArray1DConstantLength(Type, length)
    : OcaArray1DDynamicLength(Type, length);
}
