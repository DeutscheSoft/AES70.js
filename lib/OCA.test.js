(function(OCA) {
 var ok = 0, bad = 0;
 function memcmp(a, b) {
    if (a.length != b.length) return false;
    var a8 = new Uint8Array(a);
    var b8 = new Uint8Array(b);

    for (var i = 0; i < a8.length; i++) {
        if (a8[i] != b8[i]) return false;
    }

    return true;
 };
 function test_enc(signature) {
    var args = Array.prototype.slice.call(arguments, 1);
    var buf = signature.encode.apply(signature, args);
    var dec = signature.low_decode(new DataView(buf));
    
    if (!memcmp(buf, signature.encode.apply(signature, dec))) {
        console.warn('Encoding test failed for %o.encode(%o)', signature, args);
        bad++;
    } else {
        ok++;
    }

    signature.encode_to.apply(signature, [ new DataView(buf) ].concat(args));
    dec = signature.low_decode(new DataView(buf));

    if (!memcmp(buf, signature.encode.apply(signature, dec))) {
        console.warn('Encoding test failed for %o.encode(%o)', signature, args);
        bad++;
    } else {
        ok++;
    }

    signature.encoder(args).encode_to(new DataView(buf));
    dec = signature.low_decode(new DataView(buf));

    if (!memcmp(buf, signature.encode.apply(signature, dec))) {
        console.warn('Encoding test failed for %o.encode(%o)', signature, args);
        bad++;
    } else {
        ok++;
    }
 };
 test_enc(new SP.signature(SP.UINT16), 45);
 test_enc(new SP.signature(SP.UINT16), 0xffff);
 test_enc(new SP.signature(SP.LIST(SP.UINT16), SP.FLOAT32), [ 45, 34, 22, 55 ], 44);
 test_enc(new SP.signature(SP.BLOB), new ArrayBuffer(10));
 test_enc(new SP.signature(SP.MAP(SP.UINT16, SP.STRING)), new Map([ [34, "foo"], [23, "bar"] ]));

 function test_msg(a) {
     var buf = OCA.encodeMessage(a);
     var ret = [];

     if (OCA.decodeMessage(new DataView(buf), 0, ret) !== buf.byteLength)
        throw("data left.\n");
     
     var buf2 = OCA.encodeMessage(ret);

     if (!memcmp(buf, buf2)) {
         console.warn('Encoding test failed for %o', a);
         bad++;
     } else {
         ok++;
     }
 };

 test_msg(new OCA.Command(1, 2, 3, 4, 0));
 test_msg(new OCA.Command(1, 2, 3, 4, 5, new ArrayBuffer(10)));
 test_msg(new OCA.Response(1, 2, 3, new ArrayBuffer(4)));
 test_msg(new OCA.Notification(1, 2, 3, null, new OCA.OcaEvent(1,2), 1));
 test_msg(new OCA.Notification(1, 2, 3, null, new OCA.OcaEvent(1,2), 2, new ArrayBuffer(12)));
 test_msg(new OCA.KeepAlive(1000));

 console.log("Ran %d test. %d failed.", ok+bad, bad);
})(this.OCA);
