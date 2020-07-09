import {
    buffer_to_utf8,
    utf8_to_buffer,
    utf8_encoded_length,
    count_codepoints,
    utf8_codepoint_length,
  } from './utf8.js';

export const
  BOOLEAN = 0,
  UINT8 = 1,
  UINT16 = 2,
  UINT32 = 3,
  UINT64 = 4,
  INT8 = 5,
  INT16 = 6,
  INT32 = 7,
  INT64 = 8,
  FLOAT32 = 9,
  FLOAT64 = 10,
  BLOB = 11,
  BLOB16 = 12,
  REST = 13,
  STRING = 15,
  BITSTRING = 16;

const PT_BITSTRINGFIXED = 17,
      PT_BLOBFIXED = 14,
      PT_MAP = 18,
      PT_LIST = 19,
      PT_LIST2D = 20,
      PT_LISTFIXED = 21,
      PT_CUSTOM = 22,
      PT_MULTIMAP = 23;

/**
 * Class used to represent multiple return values.
 */
export class Arguments
{
 constructor(values)
 {
   this.values = values;
 }

 /**
  * Returns an item.
  * @param {integer} n - Index of the item.
  */
 item(n)
 {
   return this.values[n];
 }

 /**
  * The number of elements.
  */
 get length()
 {
   return this.values.length;
 }
}


function memcpy(dst, src, len) {
  var i;
  for (i = 0; i < len; i++) {
    dst[i] = src[i];
  }
}

export class encoder
{
  constructor(signature, data)
  {
     this.signature = signature;
     this.data = data;
     this.length = signature.length;
     this.byteLength = signature.low_encoded_length(data);
  }

  encode_to(dst, pos) {
    pos = pos|0;
    return this.signature.do_encode(dst, pos, this.data, 0);
  }
}

function make_signature(o) {
  if (o instanceof signature) return o;
  return new signature(o);
}

function low_decode_bitstring(data, pos, len) {
  var tmp = new Array(len);
  var blen = (len + 7) >> 3;
  var abuf = new Uint8Array(data.buffer, data.byteOffset+pos, blen);
  for (var k = 0; k < len; k++) {
    tmp[k] = !!(abuf[ k >> 3 ] & (128 >> (k & 7)));
  }
  return tmp;
}

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

class signature_base
{
  constructor()
  {
    this._length = 0;
  }

  encode(...args)
  {
    var src = Array.prototype.slice.call(args);
    var dst = new ArrayBuffer(this.low_encoded_length(src));
    this.do_encode(new DataView(dst), 0, src, 0);
    return dst;
  }

  encode_to(dst, ...src)
  {
    this.do_encode(dst, 0, src, 0);
  }

  low_encode_to(dst, src)
  {
    this.do_encode(dst, 0, src, 0);
  }

  low_encoded_length(src)
  {
    if (this._length) return this._length;

    return this.do_encoded_length(src, 0);
  }
 
  encoded_length(...args)
  {
    return this.low_encoded_length(args);
  }

  decode(data)
  {
    var ret = new Array(this.length);

    this.do_decode(data, 0, ret, 0);

    if (this.length === 1) return ret[0];

    return new Arguments(ret);
  }

  low_decode(data)
  {
    var ret = new Array(this.length);

    this.do_decode(data, 0, ret, 0);

    return ret;
  }

  encoder(src)
  {
    return new encoder(this, src);
  }
}

const max_uint32 = 4294967296;
const max_int32 = 0x7fffffff;

export class signature extends signature_base
{
  constructor(...args)
  {
    super();
    var num_basic = 0,
        num_custom = 0;

    var type, i;

    for (i = 0; i < args.length; i++) {
      switch (typeof(args[i])) {
      case "number":
        if ((args[i]|0) !== args[i] || args[i] < BOOLEAN || args[i] > PT_CUSTOM)
        {
          throw new Error("Bad argument. Expected signature type.");
        }
        break;
      case "function":
        num_custom++;
        break;
      case "object":
        num_custom++;
        break;
      default:
        throw new Error("Bad argument: " + typeof(args[i]));
      }
    }

    var C, S, O;

    this.custom = C = num_custom ? new Array(num_custom) : null;
    this.signatures = O = num_custom ? new Array(num_custom) : null;
    this.signature = S = new Uint8Array(args.length);

    num_custom = 0;

    for (i = 0; i < args.length; i++) {
      switch (typeof(args[i])) {
      case "number":
        S[i] = args[i];
        break;
      case "function":
        S[i] = PT_CUSTOM;
        C[num_custom] = args[i];
        O[num_custom] = args[i].signature;
        num_custom++;
        break;
      case "object":
        {
          var a = args[i];
          if (a instanceof Array) {
            switch (a[0]) {
            case PT_LIST:
            case PT_LIST2D:
              O[num_custom] = make_signature(a[1]);
              break;
            case PT_MULTIMAP:
            case PT_MAP:
              O[num_custom] = new signature(a[1], a[2]);
              break;
            case PT_LISTFIXED:
              C[num_custom] = a[1];
              O[num_custom] = make_signature(a[2]);
              break;
            case PT_BLOBFIXED:
            case PT_BITSTRINGFIXED:
              C[num_custom] = a[1];
              break;
            default:
              throw new Error("Unsupported complex type:" + a[0]);
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

  do_decode(data, pos, dst, dst_pos)
  {
    var S = this.signature;
    var C = this.custom;
    var O = this.signatures;
    var i, len, tmp, j;
    var num_custom;

    for (i = 0, num_custom = 0; i < S.length; i++, dst_pos++) {
      switch (S[i]) {
      case BOOLEAN:
        dst[dst_pos] = data.getUint8(pos) === 1;
        pos += 1;
        break;
      case UINT8:
        dst[dst_pos] = data.getUint8(pos);
        pos += 1;
        break;
      case UINT16:
        dst[dst_pos] = data.getUint16(pos);
        pos += 2;
        break;
      case UINT32: 
        dst[dst_pos] = data.getUint32(pos);
        pos += 4;
        break;
      case UINT64: 
        {
          const hi = data.getUint32(pos);
          pos += 4;
          const lo = data.getUint32(pos);
          pos += 4;

          const val = lo + hi * max_uint32;

          dst[dst_pos] = Number.isSafeInteger(val) ? val : { hi: hi, lo: lo };

          break;
        }
      case INT8: 
        dst[dst_pos] = data.getInt8(pos);
        pos += 1;
        break;
      case INT16: 
        dst[dst_pos] = data.getInt16(pos);
        pos += 2;
        break;
      case INT32: 
        dst[dst_pos] = data.getInt32(pos);
        pos += 4;
        break;
      case INT64: 
        {
          let val;

          let hi = data.getUint32(pos);
          pos += 4;
          let lo = data.getUint32(pos);
          pos += 4;

          if (hi > max_int32)
            hi = - (max_uint32 - hi);

          val = lo + max_uint32 * hi;

          dst[dst_pos] = Number.isSafeInteger(val) ? val : { hi: hi, lo: lo };
          break;
        }
        break;
      case FLOAT32: 
        dst[dst_pos] = data.getFloat32(pos);
        pos += 4;
        break;
      case FLOAT64: 
        dst[dst_pos] = data.getFloat64(pos);
        pos += 8;
        break;
      case BLOB:
        {
          len = data.getUint16(pos);
          pos += 2;
          dst[dst_pos] = data.buffer.slice(data.byteOffset+pos, data.byteOffset+pos+len);
          pos += len;
        }
        break;
      case BLOB16:
        {
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
      case REST:
        dst[dst_pos] = data.buffer.slice(data.byteOffset+pos);
        break;
      case PT_BLOBFIXED:
        {
          len = C[num_custom++];
          dst[dst_pos] = data.buffer.slice(data.byteOffset+pos, data.byteOffset+pos+len);
          pos += len;
        }
        break;
      case STRING:
        {
          var abuf, k;
          /* this is the number of code points */
          k = data.getUint16(pos);
          pos += 2;
          /* this is the length of the data */
          len = utf8_codepoint_length(data, pos, k);
          abuf = new Uint8Array(data.buffer, data.byteOffset+pos, len);
          pos += len;
          dst[dst_pos] = buffer_to_utf8(abuf);
        }
        break;
      case BITSTRING:
        {
          var k;
          len = data.getUint16(pos);
          pos += 2;
          dst[dst_pos] = low_decode_bitstring(data, pos, len);
          pos += (len + 7)>>3;
        }
        break;
      case PT_BITSTRINGFIXED:
        {
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
          pos = O[num_custom].do_decode(data, pos, tmp, 0);
          dst[dst_pos].set(tmp[0], tmp[1]);
        }
        num_custom++;
        break;
      case PT_MULTIMAP: 
        {
          const m = new Map();
          const tmp = new Array(2);
          const len = data.getUint16(pos);
          const sig = O[num_custom];
          pos += 2;

          for (let j = 0; j < len; j++) {
            pos = sig.do_decode(data, pos, tmp, 0);
            let s = m.get(tmp[0]);

            if (!s)
            {
              m.set(tmp[0], s = new Set());
            }
            s.add(tmp[1]);
          }

          num_custom++;
          dst[dst_pos] = m;
        }
        break;
      case PT_LIST: 
        len = data.getUint16(pos);
        pos += 2;
        tmp = new Array(len);
        for (j = 0; j < len; j++)
              pos = O[num_custom].do_decode(data, pos, tmp, j);
        dst[dst_pos] = tmp;
        num_custom++;
        break;
      case PT_LIST2D: 
        {
          const X = data.getUint16(pos);
          pos += 2;
          const Y = data.getUint16(pos);
          pos += 2;
          const custom = O[num_custom];

          const res = new Array(Y);

          for (let i = 0; i < Y; i++)
          {
            const tmp = new Array(X);

            for (let j = 0; j < X; j++)
            {
              pos = custom.do_decode(data, pos, tmp, j);
            }

            res[i] = tmp;
          }

          dst[dst_pos] = res;
          num_custom++;
          break;
        }
      case PT_LISTFIXED: 
        len = C[num_custom++];
        tmp = new Array(len);
        for (j = 0; j < len; j++)
              pos = O[num_custom].do_decode(data, pos, tmp, j);
        dst[dst_pos] = tmp;
        break;
      case PT_CUSTOM:
        tmp = [];
        pos = O[num_custom].do_decode(data, pos, tmp, 0);
        dst[dst_pos] = new C[num_custom](...tmp);
        num_custom++;
        break;
      }
    }

    return pos;
  }

  do_encode(dst, pos, src, src_pos) {
    var S = this.signature;
    var C = this.custom;
    var O = this.signatures;
    var len, num_custom, j, i;

    for (i = 0, num_custom = 0; i < S.length; i++, src_pos++) {
      switch (S[i])
      {
      case BOOLEAN:
        dst.setUint8(pos, src[src_pos] ? 1 : 0);
        pos += 1;
        break;
      case UINT8:
        dst.setUint8(pos, src[src_pos]);
        pos += 1;
        break;
      case UINT16:
        dst.setUint16(pos, src[src_pos]);
        pos += 2;
        break;
      case UINT32: 
        dst.setUint32(pos, src[src_pos]);
        pos += 4;
        break;
      case UINT64: 
        {
          const val = src[src_pos];

          if (typeof val === 'number')
          {
            if (val < 0)
              throw new Error('Bad argument, expected positive number.');
            const hi = val / max_uint32;

            dst.setUint32(pos, hi);
            pos += 4;
            dst.setUint32(pos, val);
            pos += 4;
          }
          else if (typeof val === 'object')
          {
            dst.setUint32(pos, val.hi);
            pos += 4;
            dst.setUint32(pos, val.lo);
            pos += 4;
          }
          else throw new Error('Bad argument, expected number or Object.');

          break;
        }
      case INT8: 
        dst.setInt8(pos, src[src_pos]);
        pos += 1;
        break;
      case INT16: 
        dst.setInt16(pos, src[src_pos]);
        pos += 2;
        break;
      case INT32: 
        dst.setInt32(pos, src[src_pos]);
        pos += 4;
        break;
      case INT64: 
        {
          let val = src[src_pos];

          if (typeof val === 'number')
          {
            if (val < 0)
            {
              val = Math.abs(val);

              let hi = Math.ceil(val / max_uint32);
              let lo = val - (hi * max_uint32);

              hi = max_uint32 - hi;
              lo = max_uint32 - lo;

              dst.setUint32(pos, hi);
              pos += 4;
              dst.setUint32(pos, lo);
              pos += 4;
            }
            else
            {
              const hi = val / max_uint32;

              dst.setUint32(pos, hi);
              pos += 4;
              dst.setUint32(pos, val);
              pos += 4;
            }
          }
          else if (typeof val === 'object')
          {
            dst.setInt32(pos, val.hi);
            pos += 4;
            dst.setUint32(pos, val.lo);
            pos += 4;
          }
          else throw new Error('Bad argument, expected number or Object.');

          break;
        }
      case FLOAT32: 
        dst.setFloat32(pos, src[src_pos]);
        pos += 4;
        break;
      case FLOAT64: 
        dst.setFloat64(pos, src[src_pos]);
        pos += 8;
        break;
      case BLOB:
        {
          len = src[src_pos].byteLength;
          dst.setUint16(pos, len);
          pos += 2;
          memcpy(new Uint8Array(dst.buffer, dst.byteOffset+pos, len),
                 new Uint8Array(src[src_pos], 0, len),
                 len);
          pos += len;
        }
        break;
      case BLOB16:
        {
          len = src[src_pos].length;
          dst.setUint16(pos, len);
          pos += 2;
          for (j = 0; j < len; i++) {
            dst.setUint16(pos, src[src_pos].charCodeAt(j));
            pos += 2;
          }
        }
        break;
      case REST:
        ret[i] = data.buffer.slice(data.byteOffset+pos);
        break;
      case PT_BLOBFIXED:
        {
          len = C[num_custom];
          memcpy(new Uint8Array(dst.buffer, dst.byteOffset+pos, len),
                 new Uint8Array(src[src_pos], 0, len),
                 len);
          pos += len;
        }
        num_custom++;
        break;
      case STRING:
        {
          const str = src[src_pos];
          dst.setUint16(pos, count_codepoints(str));
          pos += 2;
          const abuf = utf8_to_buffer(str);
          const len = abuf.byteLength;

          memcpy(new Uint8Array(dst.buffer, dst.byteOffset+pos, len),
                 new Uint8Array(abuf),
                 len);

          pos += len;
        }
        break;
      case BITSTRING:
        {
          var len = src[src_pos].length;
          dst.setUint16(pos, len);
          pos += 2;
          pos = low_encode_bitstring(dst, pos, src[src_pos]);
        }
        break;
      case PT_BITSTRINGFIXED:
        {
          num_custom++;
          pos = low_encode_bitstring(dst, pos, src[src_pos]);
        }
        break;
      case PT_MAP: 
        len = src[src_pos].size;
        dst.setUint16(pos, len);
        pos += 2;
        for (j of src[src_pos]) {
          pos = O[num_custom].do_encode(dst, pos, j, 0);
        }
        num_custom++;
        break;
      case PT_MULTIMAP: 
        {
          let len = 0;
          const lpos = pos;
          const sig = O[num_custom++];
          pos += 2;
          src[src_pos].forEach(
            function(s, key)
            {
              s.forEach(
                function(v)
                {
                  pos = sig.do_encode(dst, pos, [ key, v ], 0);
                }
              );
            }
          );

          dst.setUint16(lpos, len);
        }
        break;
      case PT_LIST: 
        len = src[src_pos].length;
        dst.setUint16(pos, len);
        pos += 2;
        for (j = 0; j < len; j++) {
          pos = O[num_custom].do_encode(dst, pos, src[src_pos], j);
        }
        num_custom++;
        break;
      case PT_LISTFIXED: 
        len = src[src_pos].length;
        if (len != C[num_custom]) throw("Length mismatch.");
        for (j = 0; j < len; j++) {
          pos = O[num_custom].do_encode(dst, pos, src[src_pos], j);
        }
        num_custom++;
        break;
      case PT_LIST2D: 
        {
          const val = src[src_pos];
          const Y = val.length;
          const X = Y > 0 ? val[0].length : 0;
          const custom = O[num_custom];

          dst.setUint16(pos, X);
          pos += 2;

          dst.setUint16(pos, Y);
          pos += 2;

          for (let i = 0; i < Y; i++)
          {
            const tmp = val[i];

            for (let j = 0; j < X; j++)
            {
              pos = custom.do_encode(dst, pos, tmp, j);
            }
          }

          num_custom++;
          break;
        }
      case PT_CUSTOM: 
        if (!(src[src_pos] instanceof C[num_custom]))
              throw("Type mismatch.");
        pos = O[num_custom].do_encode(dst, pos, src[src_pos].values, 0);
        num_custom++;
        break;
      }
    }

    return pos;
  }

  do_encoded_length(src, src_pos) {
    if (this._length) return this._length;
    var S = this.signature;
    var C = this.custom;
    var O = this.signatures;
    var i, len, num_custom, j, pos = 0;

    for (num_custom = 0, i = 0; i < S.length; i++, src_pos++) {
      switch (S[i]) {
      case BOOLEAN:
        pos += 1;
        break;
      case UINT8:
        pos += 1;
        break;
      case UINT16:
        pos += 2;
        break;
      case UINT32: 
        pos += 4;
        break;
      case UINT64: 
        pos += 8;
        break;
      case INT8: 
        pos += 1;
        break;
      case INT16: 
        pos += 2;
        break;
      case INT32: 
        pos += 4;
        break;
      case INT64: 
        pos += 8;
        break;
      case FLOAT32: 
        pos += 4;
        break;
      case FLOAT64: 
        pos += 8;
        break;
      case BLOB:
        {
          len = src[src_pos].byteLength;
          pos += 2;
          pos += len;
        }
        break;
      case BLOB16:
        {
          len = src[src_pos].length;
          pos += 2;
          pos += len*2;
        }
        break;
      case REST:
        pos += src[src_pos].length;
        break;
      case PT_BLOBFIXED:
        {
          len = C[num_custom];
          pos += len;
        }
        num_custom++;
        break;
      case STRING:
        {
          const str = src[src_pos];
          if (str === void 0)
            throw new TypeError('Expected string.');
          pos += 2 + utf8_encoded_length(str);
          break;
        }
      case BITSTRING: 
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
      case PT_MULTIMAP: 
        pos += 2;

        const sig = O[num_custom++];

        src[src_pos].forEach(
          function(s, key)
          {
            s.forEach(
              function(v)
              {
                pos = sig.low_encoded_length([ key, v ], 0);
              }
            );
          }
        );

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
        {
          const val = src[src_pos];
          const Y = val.length;
          const X = Y > 0 ? val[0].length : 0;
          const custom = O[num_custom];
          const length = custom._length;

          pos += 4;

          if (length) {
            pos += X*Y*length;
          } else {
            for (let i = 0; i < Y; i++)
            {
              const tmp = val[i];

              for (let j = 0; j < X; j++)
              {
                pos += custom.encoded_length(tmp[j]);
              }
            }
          }
          num_custom++;
        }
        break;
      case PT_LISTFIXED: 
        throw new Error("Unsupported");
      case PT_CUSTOM: 
        if (!(src[src_pos] instanceof C[num_custom])) {
          throw new Error("Bad argument. Expected " + C[num_custom].TypeName + " but got " + src[src_pos]);
        }
        pos += O[num_custom].low_encoded_length(src[src_pos].values, 0);
        num_custom++;
        break;
      }
    }

    return pos;
  }
}

export function LIST(type) {
  return [ PT_LIST, type ];
}
export function LIST2D(type) {
  return [ PT_LIST2D, type ];
}
export function LISTFIXED(length, type) {
  return [ PT_LISTFIXED, length, type ];
}
export function MAP(key, value) {
  return [ PT_MAP, key, value ];
}
export function MULTIMAP(key, value) {
  return [ PT_MULTIMAP, key, value ];
}
export function BLOBFIXED(length) {
  return [ PT_BLOBFIXED, length ];
}
export function BITSTRINGFIXED(length) {
  return [ PT_BITSTRINGFIXED, length ];
}

export function make_encoder(type, ...args)
{
  if (args.length === 0)
  {
    if (typeof(type) === 'number') return type;
    if (Array.isArray(type)) return make_encoder(... type);

    switch (type)
    {
    case 'BOOLEAN': return BOOLEAN;
    case 'UINT8': return UINT8;
    case 'UINT16': return UINT16;
    case 'UINT32': return UINT32;
    case 'UINT64': return UINT64;
    case 'INT8': return INT8;
    case 'INT16': return INT16;
    case 'INT32': return INT32;
    case 'INT64': return INT64;
    case 'FLOAT32': return FLOAT32;
    case 'FLOAT64': return FLOAT64;
    case 'BLOB': return BLOB;
    case 'BLOB16': return BLOB16;
    case 'REST': return REST;
    case 'STRING': return STRING;
    case 'BITSTRING': return BITSTRING;
    default:
      if (typeof(type) === 'function' && type.signature)
        return type;
    }
  }
  else
  {
    if (typeof(type) === 'number')
    {
      return [ type, ...args ];
    }

    switch (type)
    {
      case 'BITSTRINGFIXED': return BITSTRINGFIXED(args[0]);
      case 'BLOBFIXED': return BLOBFIXED(args[0]);
      case 'MAP': return MAP(make_encoder(args[0]), make_encoder(args[1]));
      case 'LIST': return LIST(make_encoder(args[0]));
      case 'LIST2D': return LIST2D(make_encoder(args[0]));
      case 'LISTFIXED': return LISTFIXED(args[0], make_encoder(args[1]));
      case 'MULTIMAP': return MULTIMAP(make_encoder(args[0]), make_encoder(args[1]));
    }
  }

  throw new Error('Unsupported type: ' + type);
}

export class dynamic_signature extends signature_base
{
  constructor(test_decode, test_encode, signatures)
  {
    super();
    this.test_decode = test_decode;
    this.test_encode = test_encode;
    this.signatures = signatures;
  }

  do_encoded_length(src, src_pos)
  {
    const index = this.test_encode(src, src_pos);

    return this.signatures[index].do_encoded_length(src, src_pos);
  }

  do_decode(data, pos, dst, dst_pos)
  {
    const index = this.test_decode(data, pos);

    return this.signature[index].do_decode(data, pos, dst, dst_pos);
  }

  do_encode(dst, pos, src, src_pos)
  {
    const index = this.test_encode(src, src_pos);

    return this.signature[index].do_encode(dst, pos, src, src_pos);
  }
}
