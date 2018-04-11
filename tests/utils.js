const SP = require("../lib/signature_parser.js");

function get_random_int(N) {
  return Math.floor(Math.random()*N);
}

function low_get_random_signature(len, basic) {
  var args = [];

  for (var i = 0; i < len; i++) {
    switch (get_random_int(basic ? 10 : 14)) {
    case 0: args[i] = SP.BOOLEAN; break;
    case 1: args[i] = SP.UINT8; break;
    case 2: args[i] = SP.UINT16; break;
    case 3: args[i] = SP.UINT32; break;
    case 4: args[i] = SP.INT8; break;
    case 5: args[i] = SP.INT16; break;
    case 6: args[i] = SP.INT32; break;
    case 7: args[i] = SP.FLOAT32; break;
    case 8: args[i] = SP.FLOAT64; break;
    case 9: args[i] = SP.STRING; break;
    /* basic types end here */
    case 10: args[i] = SP.BLOB; break;
    case 11: args[i] = SP.BLOBFIXED(get_random_int(10)); break;
    case 12: args[i] = SP.LIST(low_get_random_signature(1)[0]); break;
    case 13: args[i] = SP.MAP.apply(SP, low_get_random_signature(2)); break;
    }
  }

  return args;
}
function get_random_signature(len) {
  var args = low_get_random_signature(len);

  try {
    return new SP.signature(...args);
  } catch (e) {
    console.error('Failed to create signature:', args);
  }
}

function get_random_string(len, N) {
    var a = new Array(len);
    for (var i = 0; i < len; i++) {
        a[i] = get_random_int(N);
    }
    return String.fromCharCode.apply(String, a);
}

function get_random_bitstring(len) {
    var a = new Array(len);
    for (var i = 0; i < len; i++) {
        a[i] = !get_random_int(2);
    }
    return a;
}

function get_random_list(len) {
    var v = [];
    while (len--) {
        tmp = this.get_random_data();
        v.push(tmp[0]);
    }
    return v;
}

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

function get_random_data() {
    var S = this.signature;
    var C = this.custom;
    var O = this.signatures;
    var v, tmp, ret = [];

    for (var i = 0, num_custom = 0; i < S.length; i++) {
        switch (S[i]) {
        case PT_BOOLEAN:
            ret[i] = !get_random_int(2);
            break;
        case PT_UINT8:
            ret[i] = get_random_int(1<<7);
            break;
        case PT_UINT16:
            ret[i] = get_random_int(1<<15);
            break;
        case PT_UINT32:
            ret[i] = get_random_int(2*(1<<30));
            break;
        case PT_INT8:
            ret[i] = get_random_int(1<<8)-(1<<7);
            break;
        case PT_INT16:
            ret[i] = get_random_int(1<<16)-(1<<15);
            break;
        case PT_INT32:
            ret[i] = get_random_int(2*(1<<31))-(1<<31);
            break;
        case PT_FLOAT32:
            {
                tmp = new Float32Array(1);
                tmp[0] = Math.random();
                ret[i] = tmp[0];
            }
            break;
        case PT_FLOAT64:
            ret[i] = Math.random();
            break;
        case PT_BLOB:
            ret[i] = new ArrayBuffer(get_random_int(10)); 
            break;
        case PT_BLOB16:
            ret[i] = get_random_string(get_random_int(10), 0xffff); 
            break;
        case PT_BLOBFIXED:
            ret[i] = new ArrayBuffer(C[num_custom++]); 
            break;
        case PT_STRING:
            ret[i] = get_random_string(get_random_int(10), 0xcfff);
            break;
        case PT_BITSTRING:
            ret[i] = get_random_bitstring(get_random_int(10));
            break;
        case PT_BITSTRINGFIXED:
            ret[i] = get_random_bitstring(C[num_custom++]);
            break;
        case PT_MAP:
            {
                var len = get_random_int(10);
                var v = new Map();
                while (len--) {
                    tmp = get_random_data.call(O[num_custom]);
                    v.set(tmp[0], tmp[1]);
                }
                ret[i] = v;
                num_custom++;
            }
            break;
        case PT_LIST:
            {
                var len = get_random_int(10);
                var v = get_random_list.call(O[num_custom], len);
                ret[i] = v;
                num_custom++;
            }
            break;
        case PT_LIST2D:
            {
                var N = get_random_int(10);
                var M = get_random_int(10);
                var v = [];
                while (N--) {
                    v.push(get_random_list.call(O[num_custom], M));
                }
                ret[i] = v;
                num_custom++;
            }
            break;
        }
    }

    return ret;
}

SP.signature.prototype.get_random_data = get_random_data;

function memcmp(a, b) {
  if (a.length != b.length) return false;
  var a8 = new Uint8Array(a);
  var b8 = new Uint8Array(b);

  for (var i = 0; i < a8.length; i++) {
    if (a8[i] != b8[i]) return false;
  }

  return true;
}

function equal(a, b) {
    if (a === b) return true;
    if (typeof(a) !== typeof(b)) return false;
    if (typeof(a) !== "object") return false;

    if (Array.isArray(a)) {
        if (a.length !== b.length) return false;

        for (let i = 0; i < a.length; i++) {
            if (!equal(a[i], b[i])) return false;
        }

        return true;
    } else if (a instanceof Map) {
        if (a.size !== b.size) return false;
        var ka = [];
        var kb = [];
        var va = [];
        var vb = [];
        for (let e of a) {
            ka.push(e[0]);
            va.push(e[1]);
        }
        for (let e of b) {
            kb.push(e[0]);
            vb.push(e[1]);
        }
        return equal(ka, kb) && equal(va, vb);
    } else if (a instanceof ArrayBuffer) {
        return memcmp(a, b);
    } else throw Error("unsupported type");

}

var all_tests = [];

function run_all_tests(stop) {
  var ok = 0, fail = 0, t;
  for (var i = 0; i < all_tests.length; i++) {
    t = all_tests[i];
    t.run();
    ok += t.nok;
    fail += t.nfail;
    if (fail && stop) break;
  }
  console.log("Ran %d tests. %d failed.", ok+fail, fail);
}

function Test() {
  this.nok = 0;
  this.nfail = 0;
  all_tests.push(this);
}
Test.prototype = {
  run: function() {
    for (var key in this) {
      if (key.startsWith("test") && typeof(this[key]) === "function") {
        try {
          this[key]();
        } catch (e) {
          this.fail('Test', key, 'in', this.describe(), 'failed:', e);
        }
      }
    }
  },
  describe: function() {
    return this;
  },
  ok: function() {
    this.nok++;
  },
  fail: function() {
    this.nfail++;
    console.warn.apply(console, arguments);
  },
  check: function(cond) {
    if (cond) this.ok();
    else this.fail.apply(this, Array.prototype.slice.call(arguments, 1));
  },
};

function define_test(constr, o) {
  var ret = function() {
    constr.apply(this, arguments);
    Test.call(this);
  }
  ret.prototype = Object.assign(Object.create(Test.prototype), o);
  return ret;
}

module.exports = {
  Test: Test,
  get_random_signature: get_random_signature,
  get_random_int: get_random_int,
  memcmp: memcmp,
  equal: equal,
  run_all_tests: run_all_tests,
  define_test: define_test,
};
