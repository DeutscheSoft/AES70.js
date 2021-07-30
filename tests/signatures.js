/* modules */
const SP = require("../lib/signature_parser.js");

const utils = require('./utils');
const memcmp = utils.memcmp;
const equal = utils.equal;

const TestSignature = utils.define_test(
  function(signature, args, encoded) {
    this.signature = signature;
    this.args = args;
    this.encoded = encoded;
  },
  {
    test: function() {
      const signature = this.signature;
      const args = this.args;
      const buf = signature.encode.apply(signature, args);

      if (this.encoded)
        this.check(memcmp(buf, this.encoded), 
                   'Encoding test failed for %o.encode(%o)\n%o vs. %o\n',
                   signature, args, new Uint8Array(buf), new Uint8Array(this.encoded));

      let dec = signature.low_decode(new DataView(buf));

      this.check(equal(args, dec), 
                 'Encoding test failed:', signature, "\nIN:", args, "\nOUT:", dec);

      /*
      this.check(memcmp(buf, signature.encode.apply(signature, dec)),
                 'Encoding test failed for %o.encode(%o)', signature, args);
                 */

      signature.encode_to.apply(signature, [ new DataView(buf) ].concat(args));
      dec = signature.low_decode(new DataView(buf));

      this.check(equal(args, dec), 
                 'Encoding test failed:', signature, "\nIN:", args, "\nOUT:", dec, "\nENCODED", new Uint8Array(buf));

      signature.encoder(args).encode_to(new DataView(buf));
      dec = signature.low_decode(new DataView(buf));

      this.check(equal(args, dec), 
                 'Encoding test failed:', signature, "\nIN:", args, "\nOUT:", dec);
    }
  });

function test_rand(signature) {
  for (let i = 0; i < 100; i++)
    new TestSignature(signature, signature.get_random_data());
}

function test_enc(signature) {
  const args = Array.prototype.slice.call(arguments, 1);
  new TestSignature(signature, args);
  test_rand(signature);
}

new TestSignature(new SP.signature(SP.UINT64), [ 2026928210506239 ],
                  Uint8Array.from([ 0, 7, 51, 122, 255, 248, 241, 255 ]).buffer);
new TestSignature(new SP.signature(SP.INT64), [ 2026928210506239 ],
                  Uint8Array.from([ 0, 7, 51, 122, 255, 248, 241, 255 ]).buffer);
new TestSignature(new SP.signature(SP.INT64), [ -2026928210506239 ],
                  Uint8Array.from([ 255, 248, 204, 133, 0, 7, 14, 1 ]).buffer);

test_enc(new SP.signature(SP.UINT64), 2026928210506239);
test_enc(new SP.signature(SP.INT64), -2026928210506239);
test_enc(new SP.signature(SP.INT64), { hi: -Math.pow(2, 28), lo: 2345678 });
test_enc(new SP.signature(SP.UINT64), { hi: Math.pow(2, 28), lo: 2345678 });
test_rand(new SP.signature(SP.MAP(SP.FLOAT32, SP.LIST(SP.INT32)), SP.BLOBFIXED(1)));
test_rand(new SP.signature(SP.BLOBFIXED(10), SP.BLOB, SP.BLOBFIXED(10)));
test_rand(new SP.signature(SP.BLOBFIXED(10)));
test_enc(new SP.signature(SP.UINT16), 45);
test_enc(new SP.signature(SP.make_encoder('UINT16')), 45);
test_enc(new SP.signature(SP.UINT16), 0xffff);
test_enc(new SP.signature(SP.LIST(SP.UINT16), SP.FLOAT32), [ 45, 34, 22, 55 ], 44);
test_enc(new SP.signature(SP.BLOB), new ArrayBuffer(10));
test_enc(new SP.signature(SP.MAP(SP.UINT16, SP.STRING)), new Map([ [34, "foo"], [23, "bar"] ]));
test_enc(new SP.signature(SP.make_encoder(['MAP', 'UINT16', 'STRING' ])), new Map([ [34, "foo"], [23, "bar"] ]));

for (let i = 0; i < 1000; i++) {
  test_rand(utils.get_random_signature(utils.get_random_int(5)));
}

utils.run_all_tests(true);
