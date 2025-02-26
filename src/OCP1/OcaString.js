import { createType } from './createType.js';
import {
  buffer_to_utf8,
  utf8_to_buffer,
  utf8_encoded_length,
  count_codepoints,
  utf8_codepoint_length,
} from '../utf8.js';

export const OcaString = createType({
  isConstantLength: false,
  canEncode: function (value) {
    return typeof value === 'string';
  },
  encodedLength: function (value) {
    if (typeof value !== 'string') throw new TypeError('Expected string.');

    return 2 + utf8_encoded_length(value);
  },
  encodeTo: function (dataView, pos, value) {
    const length = count_codepoints(value);

    if (length > 0xffff)
      throw new Error('String too long for OcaString OCP.1 encoding.');

    dataView.setUint16(pos, length);
    pos += 2;

    const utf8_data = new Uint8Array(utf8_to_buffer(value));
    const u8 = new Uint8Array(dataView.buffer, dataView.byteOffset);
    u8.set(utf8_data, pos);
    return pos + utf8_data.length;
  },
  decodeFrom: function (dataView, pos) {
    const codepoints = dataView.getUint16(pos);

    pos += 2;

    const length = utf8_codepoint_length(dataView, pos, codepoints);
    const utf8_data = new Uint8Array(
      dataView.buffer,
      dataView.byteOffset + pos,
      length
    );

    return [pos + length, buffer_to_utf8(utf8_data)];
  },
  decodeLength: function (dataView, pos) {
    const codepoints = dataView.getUint16(pos);

    pos += 2;

    const length = utf8_codepoint_length(dataView, pos, codepoints);

    return pos + length;
  },
});
