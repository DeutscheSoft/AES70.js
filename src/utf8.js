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

if ('TextEncoder' in window && 'TextDecoder' in window) {
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
