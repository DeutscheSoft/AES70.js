const OCA = require("../").OCA;
const SP = require("../").SP;

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

