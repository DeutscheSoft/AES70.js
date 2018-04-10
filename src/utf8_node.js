import {
    StringDecoder
  } from 'string_decoder';

const D = new StringDecoder();

export function buffer_to_utf8(b) {
  return D.end(Buffer.from(b));
}

export function utf8_to_buffer(s) {
  var b = Buffer.from(s, "utf8");
  return b.buffer.slice(0, b.length);
}

export function utf8_encoded_length(s) {
  return Buffer.from(s, "utf8").length;
}
