import { createType } from './createType.js';
import { isTypedArray } from './is_typed_array.js';
import { getLengthEncoder } from './getLengthEncoder.js';

function canEncode(value) {
  return Array.isArray(value) || isTypedArray(value);
}

function OcaListConstantLength(Type, byteLength) {
  const encodedLength = Type.encodedLength(void 0);
  const encodeTo = Type.encodeTo;
  const decode = Type.decode;
  const { setLength, getLength, maxLength } = getLengthEncoder(byteLength);

  return createType({
    isConstantLength: false,
    canEncode,
    encodedLength: function (value) {
      if (!canEncode(value)) throw new TypeError('Expected array.');

      const length = value.length;

      if (length > maxLength)
        throw new Error('Array too long for OcaList OCP.1 encoding');

      return byteLength + length * encodedLength;
    },
    encodeTo: function (dataView, pos, value) {
      const length = value.length;

      setLength(dataView, pos, length);
      pos += byteLength;

      for (let i = 0; i < length; i++) {
        pos = encodeTo(dataView, pos, value[i]);
      }

      return pos;
    },
    decodeFrom: function (dataView, pos) {
      const length = getLength(dataView, pos);

      pos += byteLength;

      const value = new Array(length);

      for (let i = 0; i < length; i++) {
        value[i] = decode(dataView, pos);
        pos += encodedLength;
      }

      return [pos, value];
    },
    decodeLength: function (dataView, pos) {
      const length = getLength(dataView, pos);

      pos += byteLength + length * encodedLength;

      return pos;
    },
  });
}

function OcaListDynamicLength(Type, byteLength) {
  const encodedLength = Type.encodedLength;
  const encodeTo = Type.encodeTo;
  const decodeFrom = Type.decodeFrom;
  const decodeLength = Type.decodeLength;
  const { setLength, getLength, maxLength } = getLengthEncoder(byteLength);

  return createType({
    isConstantLength: false,
    canEncode,
    encodedLength: function (value) {
      if (!canEncode(value)) throw new TypeError('Expected array.');

      const length = value.length;

      if (length > maxLength)
        throw new Error('Array too long for OcaList OCP.1 encoding');

      let result = byteLength;
      for (let i = 0; i < length; i++) {
        result += encodedLength(value[i]);
      }
      return result;
    },
    encodeTo: function (dataView, pos, value) {
      const length = value.length;

      setLength(dataView, pos, length);
      pos += byteLength;

      for (let i = 0; i < length; i++) {
        pos = encodeTo(dataView, pos, value[i]);
      }

      return pos;
    },
    decodeFrom: function (dataView, pos) {
      const length = getLength(dataView, pos);

      pos += byteLength;

      const value = new Array(length);

      for (let i = 0; i < length; i++) {
        let tmp;

        [pos, tmp] = decodeFrom(dataView, pos);

        value[i] = tmp;
      }

      return [pos, value];
    },
    decodeLength: function (dataView, pos) {
      const length = getLength(dataView, pos);

      pos += byteLength;

      for (let i = 0; i < length; i++) {
        pos = decodeLength(dataView, pos);
      }

      return pos;
    },
  });
}

export function createListType(byteLength) {
  return function (Type) {
    return Type.isConstantLength
      ? OcaListConstantLength(Type, byteLength)
      : OcaListDynamicLength(Type, byteLength);
  };
}
