import {
    StringDecoder
  } from 'string_decoder';

import { Buffer } from 'buffer';

const D = new StringDecoder();

export function buffer_to_utf8(b) {
  return D.end(Buffer.from(b));
}

export function utf8_to_buffer(s) {
  return new Uint8Array(Buffer.from(s, "utf8")).buffer;
}

export function utf8_encoded_length(s) {
  return Buffer.byteLength(s, "utf8");
}
