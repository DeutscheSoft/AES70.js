import { createType } from './createType.js';
import { isTypedArray } from './is_typed_array.js';

function OcaList2DConstantLength(Type) {
  const encodedLength = Type.encodedLength(void 0);
  const encodeTo = Type.encodeTo;
  const decode = Type.decode;

  return createType({
    isConstantLength: false,
    canEncode: function (value) {
      return Array.isArray(value) || isTypedArray(value);
    },
    encodedLength: function (value) {
      if (!(Array.isArray(value) || isTypedArray(value)))
        throw new TypeError('Expected array.');

      const rows = value.length;

      if (rows === 0) return 4;

      if (!(Array.isArray(value[0]) || isTypedArray(value[0])))
        throw new TypeError('Expected array.');

      const columns = value[0].length;

      if (rows > 0xffff || columns > 0xffff)
        throw new Error('Array too long for OcaList2D OCP.1 encoding');

      return 4 + rows * columns * encodedLength;
    },
    encodeTo: function (dataView, pos, value) {
      const rows = value.length;
      const columns = rows === 0 ? 0 : value[0].length;

      dataView.setUint16(pos, rows);
      pos += 2;
      dataView.setUint16(pos, columns);
      pos += 2;

      for (let i = 0; i < rows; i++) {
        const row = value[i];

        for (let j = 0; j < columns; j++) {
          pos = encodeTo(dataView, pos, row[j]);
        }
      }

      return pos;
    },
    decodeFrom: function (dataView, pos) {
      const rows = dataView.getUint16(pos);
      pos += 2;
      const columns = dataView.getUint16(pos);
      pos += 2;

      const value = new Array(rows).fill().map(() => new Array(columns));

      for (let i = 0; i < rows; i++) {
        const row = value[i];

        for (let j = 0; j < columns; j++) {
          row[j] = decode(dataView, pos);
          pos += encodedLength;
        }
      }

      return [pos, value];
    },
    decodeLength: function (dataView, pos) {
      const rows = dataView.getUint16(pos);
      pos += 2;
      const columns = dataView.getUint16(pos);
      pos += 2;

      pos += rows * columns * encodedLength;

      return pos;
    },
  });
}

function OcaList2DDynamicLength(Type) {
  const encodedLength = Type.encodedLength;
  const encodeTo = Type.encodeTo;
  const decodeFrom = Type.decodeFrom;
  const decodeLength = Type.decodeLength;

  return createType({
    isConstantLength: false,
    canEncode: function (value) {
      return Array.isArray(value) || isTypedArray(value);
    },
    encodedLength: function (value) {
      if (!(Array.isArray(value) || isTypedArray(value)))
        throw new TypeError('Expected array.');

      const rows = value.length;

      if (rows === 0) return 4;

      if (!(Array.isArray(value[0]) || isTypedArray(value[0])))
        throw new TypeError('Expected array.');

      const columns = value[0].length;

      if (rows > 0xffff || columns > 0xffff)
        throw new Error('Array too long for OcaList2D OCP.1 encoding');

      let result = 4;

      for (let i = 0; i < rows; i++) {
        const row = value[i];

        for (let j = 0; j < columns; j++) {
          result += encodedLength(row[j]);
        }
      }

      return result;
    },
    encodeTo: function (dataView, pos, value) {
      const rows = value.length;
      const columns = rows === 0 ? 0 : value[0].length;

      dataView.setUint16(pos, rows);
      pos += 2;
      dataView.setUint16(pos, columns);
      pos += 2;

      for (let i = 0; i < rows; i++) {
        const row = value[i];

        for (let j = 0; j < columns; j++) {
          pos = encodeTo(dataView, pos, row[j]);
        }
      }

      return pos;
    },
    decodeFrom: function (dataView, pos) {
      const rows = dataView.getUint16(pos);
      pos += 2;
      const columns = dataView.getUint16(pos);
      pos += 2;

      const value = new Array(rows).fill().map(() => new Array(columns));

      for (let i = 0; i < rows; i++) {
        const row = value[i];

        for (let j = 0; j < columns; j++) {
          let tmp;
          [pos, tmp] = decodeFrom(dataView, pos);
          row[j] = tmp;
        }
      }

      return [pos, value];
    },
    decodeLength: function (dataView, pos) {
      const rows = dataView.getUint16(pos);
      pos += 2;
      const columns = dataView.getUint16(pos);
      pos += 2;

      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
          pos = decodeLength(dataView, pos);
        }
      }

      return pos;
    },
  });
}

export function OcaList2D(Type) {
  return Type.isConstantLength
    ? OcaList2DConstantLength(Type)
    : OcaList2DDynamicLength(Type);
}
