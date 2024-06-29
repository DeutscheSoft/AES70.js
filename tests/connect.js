const process = require('process');
const RemoteDevice = require('../lib/Controller').RemoteDevice;
const TCPConnection = require('../lib/controller/TCP').TCPConnection;
const OCC = require('../lib/controller/ControlClasses');

if (process.argv.length < 4) {
  console.log('Usage: node connect.js <ip> <port>');
  return;
}

const host = process.argv[2];
const port = parseInt(process.argv[3]);

TCPConnection.connect({
  host: host,
  port: port,
})
  .then(function (connection) {
    return new RemoteDevice(connection);
  })
  .then(printDeviceTree);

function delay(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, n);
  });
}

async function microblink(objects) {
  let found = false;

  do {
    for (let i = 0; i < objects.length; i++) {
      const o = objects[i];

      if (o instanceof OCC.OcaBitstringActuator) {
        const N = await o.GetNrBits();

        const n = 0 | (Math.random() * N);
        const v = Math.random() > 0.5;

        await o.SetBit(n, v);
        await delay(10);

        found = true;
      }
    }
  } while (found);

  process.exit(0);
}

function printDeviceTree(device) {
  var print = function (objects, i) {
    var o = objects[i];
    var a = [];

    if (!o) {
      microblink(objects);
      return;
    }

    a.push(o.GetRole().then((role) => console.log('Role:', role)));
    o.get_properties().forEach((p) => {
      const getter = p.getter(o);
      if (!getter) return;
      a.push(getter().then((val) => console.log(' %s: %o ', p.name, val)));
    });

    Promise.all(a).then(
      () => print(objects, i + 1),
      (err) => {
        console.error(err);
        print(objects, i + 1);
      }
    );
  };

  device.discover_all().then(
    function (o) {
      print(o, 0);
    },
    function (err) {
      console.error(err);
    }
  );
}
