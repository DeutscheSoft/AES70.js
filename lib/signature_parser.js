(function(w) {
 "use strict";
 var PT_BOOLEAN = 0,
     PT_UINT8 = 1,
     PT_UINT16 = 2,
     PT_UINT32 = 3,
     PT_UINT64 = 4,
     PT_INT8 = 5,
     PT_INT16 = 6,
     PT_INT32 = 7,
     PT_INT64 = 8,
     PT_FLOAT32 = 9,
     PT_FLOAT64 = 10,
     PT_BLOB = 11,
     PT_BLOB16 = 12,
     PT_REST = 13,
     PT_BLOBFIXED = 14,
     PT_STRING = 15,
     PT_BITSTRING = 16,
     PT_BITSTRINGFIXED = 17,
     // this is all complex types.
     PT_MAP = 18,
     PT_LIST = 19,
     PT_LIST2D = 20,
     PT_LISTFIXED = 21,
     PT_CUSTOM = 22;

 function memcpy(dst, src, len) {
     var i;
     for (i = 0; i < len; i++) {
         dst[i] = src[i];
     }
 }

 function encoder(signature, data) {
     this.signature = signature;
     this.data = data;
     this.length = signature.length;
     this.byteLength = signature.low_encoded_length(data);
 };
 encoder.prototype = {
    encode_to: function(dst, pos) {
        pos = pos|0;
        return low_encode.call(this.signature, dst, pos, this.data, 0);
    },
 };

 function signature() {
     var num_basic = 0,
         num_custom = 0;

     var type, i;

     for (i = 0; i < arguments.length; i++) {
         switch (typeof(arguments[i])) {
         case "number":
             if ((arguments[i]|0) !== arguments[i] ||
                 arguments[i] < PT_BOOLEAN || arguments[i] > PT_CUSTOM)
                 throw("Bad argument.");
             break;
         case "function":
             num_custom++;
             break;
         case "object":
             num_custom++;
             break;
         default:
             throw("Bad argument.");
         }
     }

     var C, S, O;

     this.custom = C = num_custom ? new Array(num_custom) : null;
     this.signatures = O = num_custom ? new Array(num_custom) : null;
     this.signature = S = new Uint8Array(arguments.length);

     num_custom = 0;

     for (i = 0; i < arguments.length; i++) {
         switch (typeof(arguments[i])) {
         case "number":
             S[i] = arguments[i];
             break;
         case "function":
             S[i] = PT_CUSTOM;
             C[num_custom] = arguments[i];
             O[num_custom] = arguments[i].prototype.signature;
             num_custom++;
             break;
         case "object": {
                 var a = arguments[i];
                 if (a instanceof Array) {
                    switch (a[0]) {
                    case PT_LIST:
                    case PT_LIST2D:
                        O[num_custom] = new signature(a[1]);
                        break;
                    case PT_MAP:
                        O[num_custom] = new signature(a[1], a[2]);
                        break;
                    case PT_LISTFIXED:
                        C[num_custom] = a[1];
                        O[num_custom] = new signature(a[2]);
                        break;
                    case PT_BLOBFIXED:
                    case PT_BITSTRINGFIXED:
                        C[num_custom] = a[1];
                        break;
                    default:
                        throw("Unsupported complex type.");
                        break;
                    }
                    S[i] = a[0];
                    num_custom++;
                 } else {
                     throw("Unsupported argument.");
                 }
             }
             break;
         }
     }

     this.length = S.length;
     this._length = 0;
     try { this._length = this.encoded_length(); } catch(e) {};
 }

 function low_decode_bitstring(data, pos, len) {
     var tmp = new Array(len);
     var blen = (len + 7) >> 3;
     var abuf = new Uint8Array(data.buffer, data.byteOffset+pos, blen);
     for (var k = 0; k < len; k++) {
         tmp[k] = !!(abuf[ k >> 3 ] & (128 >> (k & 7)));
     }
     pos += blen;
     return tmp;
 }

 function low_decode(data, pos, dst, dst_pos) {
     var S = this.signature;
     var C = this.custom;
     var O = this.signatures;
     var i, len, tmp, j;
     var num_custom;

     for (i = 0, num_custom = 0; i < S.length; i++, dst_pos++) {
         switch (S[i]) {
         case PT_BOOLEAN:
             dst[dst_pos] = data.getUint8(pos) === 1;
             pos += 1;
             break;
         case PT_UINT8:
             dst[dst_pos] = data.getUint8(pos);
             pos += 1;
             break;
         case PT_UINT16:
             dst[dst_pos] = data.getUint16(pos);
             pos += 2;
             break;
         case PT_UINT32: 
             dst[dst_pos] = data.getUint32(pos);
             pos += 4;
             break;
         case PT_UINT64: 
             throw("Not implemented.\n");
             break;
         case PT_INT8: 
             dst[dst_pos] = data.getInt8(pos);
             pos += 1;
             break;
         case PT_INT16: 
             dst[dst_pos] = data.getInt16(pos);
             pos += 2;
             break;
         case PT_INT32: 
             dst[dst_pos] = data.getInt32(pos);
             pos += 4;
             break;
         case PT_INT64: 
             throw("Not implemented.\n");
             break;
         case PT_FLOAT32: 
             dst[dst_pos] = data.getFloat32(pos);
             pos += 4;
             break;
         case PT_FLOAT64: 
             dst[dst_pos] = data.getFloat64(pos);
             pos += 8;
             break;
         case PT_BLOB: {
                len = data.getUint16(pos);
                pos += 2;
                dst[dst_pos] = data.buffer.slice(data.byteOffset+pos, data.byteOffset+pos+len);
                pos += len;
             }
             break;
         case PT_BLOB16: {
                len = data.getUint16(pos);
                pos += 2;
                tmp = new Array(len);
                for (j = 0; j < len; j++) {
                    tmp[j] = data.getUint16(pos);
                    pos += 2;
                }
                dst[dst_pos] = String.fromCharCode.apply(String, tmp);
             }
             break;
         case PT_REST:
             dst[dst_pos] = data.buffer.slice(data.byteOffset+pos);
             break;
         case PT_BLOBFIXED: {
                len = C[num_custom++];
                dst[dst_pos] = data.buffer.slice(data.byteOffset+pos, data.byteOffset+pos+len);
                pos += len;
             }
             break;
         case PT_STRING: {
                var abuf, k;
                len = data.getUint16(pos);
                pos += 2;
                tmp = new Array(len);
                abuf = new Uint8Array(data.buffer, data.byteOffset+pos, len);
                for (k = 0; k < len; k++) tmp[k] = abuf[k];
                pos += len;
                dst[dst_pos] = String.fromCharCode.apply(String, tmp);
             }
             break;
         case PT_BITSTRING: {
                var k;
                len = data.getUint16(pos);
                pos += 2;
                dst[dst_pos] = low_decode_bitstring(data, pos, len);
                pos += (len + 7)>>3;
             }
             break;
         case PT_BITSTRINGFIXED: {
                var k;
                len = C[num_custom++];
                dst[dst_pos] = low_decode_bitstring(data, pos, len);
                pos += (len+7)>>3;
             }
             break;
         case PT_MAP: 
             dst[dst_pos] = new Map();
             tmp = new Array(2);
             len = data.getUint16(pos);
             pos += 2;
             for (j = 0; j < len; j++) {
                 pos = low_decode.call(O[num_custom], data, pos, tmp, 0);
                 dst[dst_pos].set(tmp[0], tmp[1]);
             }
             break;
         case PT_LIST: 
             len = data.getUint16(pos);
             pos += 2;
             tmp = new Array(len);
             for (j = 0; j < len; j++)
                 pos = low_decode.call(O[num_custom], data, pos, tmp, j);
             dst[dst_pos] = tmp;
             num_custom++;
             break;
             break;
         case PT_LIST2D: 
             break;
         case PT_LISTFIXED: 
             break;
         case PT_CUSTOM:
             tmp = [];
             pos = low_decode.call(O[num_custom], data, pos, tmp, 0);
             dst[dst_pos] = Object.create(C[num_custom].prototype);
             C[num_custom].apply(dst[dst_pos], tmp);
             num_custom++;
             break;
         }
     }

     return pos;
 }

 signature.prototype = Object.create(null);
 signature.prototype.decode = function(data) {
     var ret = new Array(this.length);

     low_decode.call(this, data, 0, ret, 0);

     if (this.length === 1) return ret[0];

     return ret;
 };

 signature.prototype.low_decode = function(data) {
     var ret = new Array(this.length);

     low_decode.call(this, data, 0, ret, 0);

     return ret;
 };

 function low_encode_bitstring(dst, pos, from) {
     var len = from.length;
     var blen = (len+7)>>3;
     var abuf = new Uint8Array(dst.buffer, dst.byteOffset+pos, blen);
     var k, tmp, j, i;

     for (i = j = 0; j < blen; j++) {
         tmp = 0;

         for (k = 0; k < 8 && i < len; k++, i++) {
             if (from[i]) {
                 tmp |= 128 >> k;
             }
         }

         abuf[j] = tmp;
     }

     pos += blen;
     return pos;
 }

 function low_encode(dst, pos, src, src_pos) {
     var S = this.signature;
     var C = this.custom;
     var O = this.signatures;
     var len, num_custom, j, i;

     for (i = 0, num_custom = 0; i < S.length; i++, src_pos++) {
         switch (S[i]) {
         case PT_BOOLEAN:
             dst.setUint8(pos, src[src_pos] ? 1 : 0);
             pos += 1;
             break;
         case PT_UINT8:
             dst.setUint8(pos, src[src_pos]);
             pos += 1;
             break;
         case PT_UINT16:
             dst.setUint16(pos, src[src_pos]);
             pos += 2;
             break;
         case PT_UINT32: 
             dst.setUint32(pos, src[src_pos]);
             pos += 4;
             break;
         case PT_UINT64: 
             throw("Not implemented.\n");
             break;
         case PT_INT8: 
             dst.setInt8(pos, src[src_pos]);
             pos += 1;
             break;
         case PT_INT16: 
             dst.setInt16(pos, src[src_pos]);
             pos += 2;
             break;
         case PT_INT32: 
             dst.setInt32(pos, src[src_pos]);
             pos += 4;
             break;
         case PT_INT64: 
             throw("Not implemented.\n");
             break;
         case PT_FLOAT32: 
             dst.setFloat32(pos, src[src_pos]);
             pos += 4;
             break;
         case PT_FLOAT64: 
             dst.setFloat64(pos, src[src_pos]);
             pos += 8;
             break;
         case PT_BLOB: {
                len = src[src_pos].byteLength;
                dst.setUint16(pos, len);
                pos += 2;
                memcpy(new Uint8Array(dst.buffer, dst.byteOffset+pos, len),
                       new Uint8Array(src[src_pos], 0, len),
                       len);
                pos += len;
             }
             break;
         case PT_BLOB16: {
                len = src[src_pos].length;
                dst.setUint16(pos, len);
                pos += 2;
                for (j = 0; j < len; i++) {
                    dst.setUint16(pos, src[src_pos].charCodeAt(j));
                    pos += 2;
                }
             }
             break;
         case PT_REST:
             ret[i] = data.buffer.slice(data.byteOffset+pos);
             break;
         case PT_BLOBFIXED: {
                len = C[num_custom];
                memcpy(new Uint8Array(dst.buffer, dst.byteOffset+pos, len),
                       new Uint8Array(src[src_pos], 0, len),
                       len);
                pos += len;
             }
             num_custom++;
             break;
         case PT_STRING: {
                var len = src[src_pos].length;
                dst.setUint16(pos, len);
                pos += 2;
                var abuf = new Uint8Array(dst.buffer, dst.byteOffset+pos, len);

                for (j = 0; j < len; j++) {
                    abuf[j] = src[src_pos].charCodeAt(j);
                }

                pos += len;
             }
             break;
         case PT_BITSTRING: {
                var len = src[src_pos].length;
                dst.setUint16(pos, len);
                pos += 2;
                pos = low_encode_bitstring(dst, pos, src[src_pos]);
             }
             break;
         case PT_BITSTRINGFIXED: {
                num_custom++;
                pos = low_encode_bitstring(dst, pos, src[src_pos]);
             }
             break;
         case PT_MAP: 
             len = src[src_pos].size;
             dst.setUint16(pos, len);
             pos += 2;
             for (j of src[src_pos]) {
                 pos = low_encode.call(O[num_custom], dst, pos, j, 0);
             }
             num_custom++;
             break;
         case PT_LIST: 
             len = src[src_pos].length;
             dst.setUint16(pos, len);
             pos += 2;
             for (j = 0; j < len; j++) {
                 pos = low_encode.call(O[num_custom], dst, pos, src[src_pos], j);
             }
             num_custom++;
             break;
         case PT_LISTFIXED: 
             len = src[src_pos].length;
             if (len != C[num_custom]) throw("Length mismatch.");
             for (j = 0; j < len; j++) {
                 pos = low_encode.call(O[num_custom], dst, pos, src[src_pos], j);
             }
             num_custom++;
             break;
         case PT_LIST2D: 
             num_custom++;
             break;
         case PT_LISTFIXED: 
             num_custom++;
             break;
         case PT_CUSTOM: 
             if (!(src[src_pos] instanceof C[num_custom]))
                throw("Type mismatch.");
             pos = low_encode.call(O[num_custom], dst, pos, src[src_pos]._values(), 0);
             num_custom++;
             break;
         }
     }
    
     return pos;
 }
 function low_encoded_length(src, src_pos) {
     if (this._length) return this._length;
     var S = this.signature;
     var C = this.custom;
     var O = this.signatures;
     var i, len, num_custom, j, pos = 0;

     for (num_custom = 0, i = 0; i < S.length; i++, src_pos++) {
         switch (S[i]) {
         case PT_BOOLEAN:
             pos += 1;
             break;
         case PT_UINT8:
             pos += 1;
             break;
         case PT_UINT16:
             pos += 2;
             break;
         case PT_UINT32: 
             pos += 4;
             break;
         case PT_UINT64: 
             pos += 8;
             break;
         case PT_INT8: 
             pos += 1;
             break;
         case PT_INT16: 
             pos += 2;
             break;
         case PT_INT32: 
             pos += 4;
             break;
         case PT_INT64: 
             pos += 8;
             break;
         case PT_FLOAT32: 
             pos += 4;
             break;
         case PT_FLOAT64: 
             pos += 8;
             break;
         case PT_BLOB: {
                len = src[src_pos].byteLength;
                pos += 2;
                pos += len;
             }
             break;
         case PT_BLOB16: {
                len = src[src_pos].length;
                pos += 2;
                pos += len*2;
             }
             break;
         case PT_REST:
             pos += src[src_pos].length;
             break;
         case PT_BLOBFIXED: {
                len = C[num_custom];
                pos += len;
             }
             num_custom++;
             break;
         case PT_STRING: {
                pos += 2 + src[src_pos].length;
             }
             break;
         case PT_BITSTRING: 
             pos += 2 + ((src[src_pos].length + 7) >> 3);
             break;
         case PT_BITSTRINGFIXED: 
             pos += (C[num_custom++] + 7)>>3;
             break;
         case PT_MAP: 
             pos += 2;
             if (O[num_custom]._length) {
                 pos += O[num_custom]._length * src[src_pos].size;
             } else {
                 for (j of src[src_pos])
                     pos += O[num_custom].low_encoded_length(j, 0);
             }
             num_custom++;
             break;
         case PT_LIST:
             len = src[src_pos].length;
             pos += 2;
             if (O[num_custom]._length) {
                 pos += len * O[num_custom]._length;
             } else {
                 for (j = 0; j < len; j++) {
                     pos += O[num_custom].encoded_length(src[src_pos][j]);
                 }
             }
             num_custom++;
             break;
         case PT_LIST2D: 
             num_custom++;
             break;
         case PT_LISTFIXED: 
             num_custom++;
             break;
         case PT_CUSTOM: 
             if (!(src[src_pos] instanceof C[num_custom])) {
                 throw("Bad argumment.");
             }
             pos += low_encoded_length.call(O[num_custom], src[src_pos]._values(), 0);
             num_custom++;
             break;
         }
     }

     return pos;
 }

 signature.prototype.encoder = function(src) {
     return new encoder(this, src);
 };
 signature.prototype.encode = function() {
     var src = Array.prototype.slice.call(arguments);
     var dst = new ArrayBuffer(this.low_encoded_length(src));
     low_encode.call(this, new DataView(dst), 0, src, 0);
     return dst;
 };
 signature.prototype.low_encode_to = function(dst, src) {
     low_encode.call(this, dst, 0, src, 0);
 };
 signature.prototype.encode_to = function(dst) {
     var src = Array.prototype.slice.call(arguments, 1);

     low_encode.call(this, dst, 0, src, 0);
 };
 signature.prototype.low_encoded_length = function(src) {
     if (this._length) return this._length;

     return low_encoded_length.call(this, src, 0);
 };
 signature.prototype.encoded_length = function() {
     /* TODO: this caching only works if the number of arguments is the full
      * signature.
      */
     if (this._length) return this._length;

     return low_encoded_length.call(this, Array.prototype.slice.call(arguments), 0);
 };
 function LIST(type) {
     return [ PT_LIST, type ];
 }
 function LIST2D(type) {
     return [ PT_LIST2D, type ];
 }
 function MAP(key, value) {
     return [ PT_MAP, key, value ];
 };
 function BLOBFIXED(length) {
     return [ PT_BLOBFIXED, length ];
 };
 function BITSTRINGFIXED(length) {
     return [ PT_BITSTRINGFIXED, length ];
 };
 function Enum(values) {
     var names = {};
     var k;
     for (k in values) {
         names[values[k]] = k;
     }

     var constructor = function (v) {
         if (typeof(v) === "string") {
             if (!this.values.hasOwnProperty(v)) throw("Undefined enum value "+v);
             v = this.values[v];
         }
         v = v|0;
         this.value = v;
         if (!this.names[this.value]) throw("Unsupported enum value "+v);
     };
     constructor.prototype = {
        valueOf: function() {
            return this.value;
        },
        toString: function() {
            return this.names[this.value];
        },
        names: names,
        values: values,
        signature: new signature(PT_UINT8),
        is_enum: true,
        _values: function() {
            return [ this.value ];
        },
     };

     for (k in values) {
         constructor[k] = new constructor(values[k]);
     }

     return constructor;
 };
 var SP = {
     BOOLEAN: PT_BOOLEAN,
     UINT8: PT_UINT8,
     UINT16: PT_UINT16,
     UINT32: PT_UINT32,
     UINT64: PT_UINT64,
     INT8: PT_INT8,
     INT16: PT_INT16,
     INT32: PT_INT32,
     INT64: PT_INT64,
     FLOAT32: PT_FLOAT32,
     FLOAT64: PT_FLOAT64,
     BLOB: PT_BLOB,
     BLOB16: PT_BLOB16,
     BLOBFIXED: BLOBFIXED,
     REST: PT_REST,
     STRING: PT_STRING,
     BITSTRING: PT_BITSTRING,
     BITSTRINGFIXED: BITSTRINGFIXED,
     MAP: MAP,
     LIST: LIST,
     LIST2D: LIST2D,
     LISTFIXED: PT_LISTFIXED,
     CUSTOM: PT_CUSTOM,
     signature: signature,
     enum: Enum,
     encoder: encoder,
 };
 w.SP = SP;
})(this);
