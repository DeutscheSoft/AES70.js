/* modules */
const SP = require("../signature_parser.js");

const utils = require('./utils.js');
const memcmp = utils.memcmp;
const equal = utils.equal;

var TestSignature = utils.define_test(
  function(signature, args) {
    this.signature = signature;
    this.args = args;
  },
  {
    test: function() {
      var signature = this.signature;
      var args = this.args;
      var buf = signature.encode.apply(signature, args);
      var dec = signature.low_decode(new DataView(buf));

      this.check(equal(args, dec), 
                 'Encoding test failed:', signature, "\nIN:", args, "\nOUT:", dec);

      /*
      this.check(memcmp(buf, signature.encode.apply(signature, dec)),
                 'Encoding test failed for %o.encode(%o)', signature, args);
                 */

      signature.encode_to.apply(signature, [ new DataView(buf) ].concat(args));
      dec = signature.low_decode(new DataView(buf));

      this.check(equal(args, dec), 
                 'Encoding test failed:', signature, "\nIN:", args, "\nOUT:", dec);

      signature.encoder(args).encode_to(new DataView(buf));
      dec = signature.low_decode(new DataView(buf));

      this.check(equal(args, dec), 
                 'Encoding test failed:', signature, "\nIN:", args, "\nOUT:", dec);
    }
  });

function test_rand(signature) {
  for (var i = 0; i < 100; i++)
    new TestSignature(signature, signature.get_random_data());
}

function test_enc(signature) {
  var args = Array.prototype.slice.call(arguments, 1);
  new TestSignature(signature, args);
  test_rand(signature);
}

test_rand(new SP.signature(SP.MAP(SP.FLOAT32, SP.LIST(SP.INT32)), SP.BLOBFIXED(1)));
test_rand(new SP.signature(SP.BLOBFIXED(10), SP.BLOB, SP.BLOBFIXED(10)));
test_rand(new SP.signature(SP.BLOBFIXED(10)));
test_enc(new SP.signature(SP.UINT16), 45);
test_enc(new SP.signature(SP.UINT16), 0xffff);
test_enc(new SP.signature(SP.LIST(SP.UINT16), SP.FLOAT32), [ 45, 34, 22, 55 ], 44);
test_enc(new SP.signature(SP.BLOB), new ArrayBuffer(10));
test_enc(new SP.signature(SP.MAP(SP.UINT16, SP.STRING)), new Map([ [34, "foo"], [23, "bar"] ]));

for (var i = 0; i < 1000; i++) {
  test_rand(utils.get_random_signature(utils.get_random_int(5)));
}

utils.run_all_tests(true);
