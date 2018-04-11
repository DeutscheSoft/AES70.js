const OCA = require("../lib");
const utils = require('./utils');

var TestMessage = utils.define_test(
  function test_msg(a) {
    this.pdu = a;
  },
  {
    test: function() {
      var buf = OCA.encodeMessage(this.pdu);
      var ret = [];

      var len = OCA.decodeMessage(new DataView(buf), 0, ret);

      this.check(len === buf.byteLength,
                 "data left: ", len, "<", buf.byteLength);

      var buf2 = OCA.encodeMessage(ret);
      this.check(utils.equal(buf, buf2),
                 'Encoding test failed for %o', this.pdu);
    }
  }
);

function test_msg(pdu) {
  new TestMessage(pdu);
}

test_msg(new OCA.Command(1, 2, 3, 0));
test_msg(new OCA.Command(1, 2, 3, 5, new ArrayBuffer(10)));
test_msg(new OCA.Response(1, 2, 3, new ArrayBuffer(4)));
test_msg(new OCA.Notification(1, 2, 3, null, new OCA.Types.OcaEvent(1,2), 1));
test_msg(new OCA.Notification(1, 2, 3, null, new OCA.Types.OcaEvent(1,2), 2, new ArrayBuffer(12)));
test_msg(new OCA.KeepAlive(1000));

utils.run_all_tests(true);
