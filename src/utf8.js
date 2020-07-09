export var utf8_to_buffer, buffer_to_utf8, utf8_encoded_length;

function encode_utf8(s) {
  return unescape(encodeURIComponent(s));
}

function decode_utf8(s) {
  return decodeURIComponent(escape(s));
}

function buffer_to_string(b) {
  var a = new Uint8Array(b);
  var tmp = [];
  var chunksize = 128;

  for (var i = 0; i < a.length; i+= chunksize) {
    tmp.push(String.fromCharCode.apply(String, a.subarray(i, i+chunksize)));
  }

  return tmp.join("");
}

function string_to_buffer(s) {
  var len = s.length;
  var buf = new Uint8Array(len);
  for (var i=0; i < len; i++) {
    buf[i] = s.charCodeAt(i);
  }
  return buf.buffer;
}

if (typeof window !== 'undefined' && 'TextEncoder' in window && 'TextDecoder' in window) {
  const E = new TextEncoder();
  const D = new TextDecoder();
  buffer_to_utf8 = D.decode.bind(D);
  utf8_to_buffer = E.encode.bind(E);
  utf8_encoded_length = function(s) {
    return utf8_to_buffer(s).byteLength;
  };
} else {
  buffer_to_utf8 = function(b) {
    return decode_utf8(buffer_to_string(b));
  };
  utf8_to_buffer = function(s) {
    return string_to_buffer(encode_utf8(s));
  };
  utf8_encoded_length = function(s) {
    return utf8_to_buffer(s).byteLength;
  }
}

export function utf8_codepoint_length(buf, pos, codepoints) {
  var tmp = pos;

  /* From table 3-6 in the Unicode standard 4.0: Well-Formed UTF-8
   * Byte Sequences
   *
   *  Code Points   1st Byte  2nd Byte  3rd Byte  4th Byte
   * 000000-00007f   00-7f
   * 000080-0007ff   c2-df     80-bf
   * 000800-000fff    e0       a0-bf     80-bf
   * 001000-00cfff   e1-ec     80-bf     80-bf
   * 00d000-00d7ff    ed       80-9f     80-bf
   * 00e000-00ffff   ee-ef     80-bf     80-bf
   * 010000-03ffff    f0       90-bf     80-bf     80-bf
   * 040000-0fffff   f1-f3     80-bf     80-bf     80-bf
   * 100000-10ffff    f4       80-8f     80-bf     80-bf
   */

  while (codepoints--) {
    var c = buf.getUint8(pos);
    pos ++;
    if (c <= 0x7f) continue;
    if (c <  0xc2)
      throw new Error("Invalid UTF8 sequence.");
    pos ++;
    if (c <= 0xdf) continue;
    pos ++;
    if (c <= 0xef) continue;
    pos ++;
    if (c <= 0xf4) continue;

    throw new Error("Invalid UTF8 sequence.");
  }

  return pos - tmp;
}

export function count_codepoints(s)
{
  let n = 0;

  for (let i = 0; i < s.length; i++, n++)
  {
    const c = s.charCodeAt(i);

    if (c >= 0xd800 && c <= 0xdbff)
    {
      i++;

      const c = s.charCodeAt(i);

      if (c < 0xDC00 || c > 0xDFFF)
        throw new TypeError("Expected valid unicode string.");
    }
  }

  return n;
}
