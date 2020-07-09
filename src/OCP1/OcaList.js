import { createType } from './createType.js';
import { isTypedArray } from './is_typed_array.js';

function OcaListConstantLength(Type) {
  const encodedLength = Type.encodedLength(void 0);
  const encodeTo = Type.encodeTo;
  const decode = Type.decode;

  return createType({
    isConstantLength: false,
    encodedLength: function (value) {
      if (!(Array.isArray(value) || isTypedArray(value)))
        throw new TypeError('Expected array.');

      const length = value.length;

      if (length > 0xffff)
        throw new Error('Array too long for OcaList OCP.1 encoding');

      return 2 + length * encodedLength;
    },
    encodeTo: function (dataView, pos, value) {
      const length = value.length;

      dataView.setUint16(pos, length);
      pos += 2;

      for (let i = 0; i < length; i++) {
        pos = encodeTo(dataView, pos, value[i]);
      }

      return pos;
    },
    decodeFrom: function (dataView, pos) {
      const length = dataView.getUint16(pos);

      pos += 2;

      const value = new Array(length);

      for (let i = 0; i < length; i++) {
        value[i] = decode(dataView, pos);
        pos += encodedLength;
      }

      return [pos, value];
    },
    decodeLength: function (dataView, pos) {
      const length = dataView.getUint16(pos);

      pos += 2 + length * encodedLength;

      return pos;
    },
  });
}

function OcaListDynamicLength(Type) {
  const encodedLength = Type.encodedLength;
  const encodeTo = Type.encodeTo;
  const decodeFrom = Type.decodeFrom;
  const decodeLength = Type.decodeLength;

  return createType({
    isConstantLength: false,
    encodedLength: function (value) {
      if (!(Array.isArray(value) || isTypedArray(value)))
        throw new TypeError('Expected array.');

      const length = value.length;

      if (length > 0xffff)
        throw new Error('Array too long for OcaList OCP.1 encoding');

      let result = 2;
      for (let i = 0; i < length; i++) {
        result += encodedLength(value[i]);
      }
      return result;
    },
    encodeTo: function (dataView, pos, value) {
      const length = value.length;

      dataView.setUint16(pos, length);
      pos += 2;

      for (let i = 0; i < length; i++) {
        pos = encodeTo(dataView, pos, value[i]);
      }

      return pos;
    },
    decodeFrom: function (dataView, pos) {
      const length = dataView.getUint16(pos);

      pos += 2;

      const value = new Array(length);

      for (let i = 0; i < length; i++) {
        let tmp;

        [pos, tmp] = decodeFrom(dataView, pos);

        value[i] = tmp;
      }

      return [pos, value];
    },
    decodeLength: function (dataView, pos) {
      const length = dataView.getUint16(pos);

      pos += 2;

      for (let i = 0; i < length; i++) {
        pos = decodeLength(dataView, pos);
      }

      return pos;
    },
  });
}

export function OcaList(Type) {
  return Type.isConstantLength
    ? OcaListConstantLength(Type)
    : OcaListDynamicLength(Type);
}
