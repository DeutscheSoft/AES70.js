/* modules */
const net = require('net');
const OCA = require("../lib/").OCA;
const SP = require("../lib/").SP;
const process = require('process');

class ProxyClient extends OCA.ClientConnection {
    constructor(socket) {
        super();
        this.socket = socket;
        socket.on('data', function(b) {
          this.read(new Uint8Array(b).buffer);
        }.bind(this));
        socket.on('end', function() {
          console.log("end");
        });
    }

    write(buf) {
        buf = Buffer.from(buf);
        this.socket.write(buf, 'binary');
    }
}

const event_signature = new SP.signature(OCA.OcaEvent, OCA.OcaMethod, SP.BLOB,
                                         OCA.OcaNotificationDeliveryMode, SP.BLOB);

class ProxyConnection extends OCA.Connection {
    constructor(socket) {
        super();
        this.socket = socket;
        this.subscriptions = [];

        socket.on('data', function(b) {
          this.read(new Uint8Array(b).buffer);
        }.bind(this));
        socket.on('end', function(e) {
          this.destroy();
        }.bind(this));
        socket.on('error', function(e) {
          console.log("Connection error:", e);
          this.destroy();
        }.bind(this));
    }

    write(buf) {
        buf = Buffer.from(buf);
        this.socket.write(buf, 'binary');
    }

    destroy() {
        var a = this.subscriptions;

        if (a) {
            for (let i = 0; i < a.length; i++)
                client.remove_subscription(a[i][0], a[i][1]).catch(function(reason) {
                    console.log("Unsubscribe failed:", reason);
                });

            this.subscriptions = null;
        }

        this.socket.destroy();
        this.socket = null;
    }

    add_subscription(event, method, context, mode, blob) {
        var cb = function(n) {
            /* clone the notification and send it down to the client */
            var m = new OCA.Notification(method.ONo, method.MethodID.DefLevel, method.MethodID.MethodIndex,
                                         context, event, n.param_count, n.parameters);
            this.write(OCA.encodeMessage(m));
        }.bind(this);
        client.add_subscription(event, cb);
        this.subscriptions.push([ event, cb ]);
    }

    incoming(messages) {
        for (let i = 0; i < messages.length; i++) {
            let m = messages[i];

            if (m instanceof OCA.Command) {
                /* handles both command and commandRrq */
                /* subscription manager */
                if (m.target === 4) {
                    /* AddSubscription */
                    if (m.method_level === 3 && m.method_index === 1) {
                        var args = (m.param_count)
                            ? event_signature.low_decode(new DataView(m.parameters)) : [];

                        this.add_subscription.apply(this, args);

                        return;
                    }
                }

                let id = m.handle;
                let p = client.send_command(m);

                p.then(function(id, response) {
                    response.handle = id;
                    this.write(OCA.encodeMessage(response));
                }.bind(this, id), function(e) {
                    console.log("error", e);
                });
            }
        }
    }
}

const argv = process.argv;

if (argv.length < 4) {
    console.log("Usage: ", argv[0], argv[1], "<host> <port>");
    return;
}

const host = argv[2];
const port = parseInt(argv[3]);

const server = net.createServer(function(client) {
    var c = new ProxyConnection(client);
});

var client;

net.connect(port, host, function() {
    console.log("connected to OCA device at", host, "port", port);
    client = new OCA.RemoteDevice(new ProxyClient(this));
});

server.listen({ port: port }, function() {
    console.log("OCA proxy listening on port", port);
});

