#if constant(Protocols.WebSocket)
Protocols.WebSocket.Port http = Protocols.WebSocket.Port(http_cb, websocket_cb, 8080);

mapping(Protocols.WebSocket.Connection:Stdio.File) websocket_to_socket = ([]);
mapping(Protocols.WebSocket.Connection:Stdio.File) socket_to_websocket = ([]);

string HTDOCS = combine_path(dirname(__DIR__));

string file_to_mime(string name) {
    name = (name/".")[-1];
    switch (lower_case(name)) {
    case "html":
        return "text/html";
    case "css":
        return "text/css";
    case "png":
        return "image/png";
    case "jpg":
        return "image/jpeg";
    case "svg":
        return "image/svg+xml";
    case "js":
        return "application/x-javascript";
    default:
        return "application/octet-stream";
    }
}

void http_cb(object r) {
    string type = r->request_type;

    if (type == "GET") {
        string fname = r->not_query;

        fname = Stdio.simplify_path("./" + fname);

        fname = combine_path(HTDOCS, fname);

        if (Stdio.is_dir(fname)) {
            if (!has_suffix(r->not_query, "/")) {
                r->response_and_finish(([
                    "error" : 301,
                    "extra_heads" : ([
                        "location" : r->not_query + "/",
                    ]),
                ]));
                return;
            }
            fname = combine_path(fname, "index.html");
        }

        if (Stdio.is_file(fname)) {
            r->response_and_finish(([
                "error" : 200,
                "file" : Stdio.File(fname, "r"),
                "type" : file_to_mime(fname)
            ]));
            return;
        }
    }

    r->response_and_finish(([ "error" : 404, "data" : "No such file.", "type" : "text/plain" ]));
}

class WebSocketBridge {
    Stdio.File socket;
    Protocols.WebSocket.Connection websocket;

    string out_buf = "";
    int(0..1) will_write = 1;

    void create(Stdio.File socket, Protocols.WebSocket.Connection websocket) {
        this_program::socket = socket;
        this_program::websocket = websocket;

        websocket->onmessage = websocket_incoming;
        websocket->onclose = websocket_close;

        socket->set_nonblocking(socket_read, socket_write, socket_close);
    }

    void socket_send(string data) {
        out_buf += data;

        if (!will_write) socket_write();
    }

    void socket_write() {
        if (!sizeof(out_buf)) {
            will_write = 0;
            return;
        }

        int len = socket->write(out_buf);

        werror("Passed %d bytes of data from websocket to socket.\n", len);

        out_buf = out_buf[len..];

        will_write = 1;
    }

    void socket_read(mixed id, string data) {
        werror("Passed %d bytes of data from socket to websocket.\n", sizeof(data));
        websocket->send_binary(data);
    }

    void websocket_incoming(Protocols.WebSocket.Frame frame) {
        switch (frame->opcode) {
        case Protocols.WebSocket.FRAME_BINARY:
            socket_send(frame->data);
            break;
        case Protocols.WebSocket.FRAME_TEXT:
            socket_send(string_to_utf8(frame->text));
            break;
        case Protocols.WebSocket.FRAME_CLOSE:
            // ignore
            break;
        default:
            werror("Unhandled WebSocket frame %O\n", frame);
        }
    }

    void websocket_close() {
        werror("WebSocket %O closed.\n", websocket);
        websocket->onmessage = 0;
        websocket->onclose = 0;
        socket->set_nonblocking(0,0,0);
        socket->close();
    }

    void socket_close() {
        werror("Socket %O closed.\n", socket);
        socket->set_nonblocking(0,0,0);
        websocket->close();
        websocket->onmessage = 0;
        websocket->onclose = 0;
    }
}

string ip;
int port;

void connect_cb(int(0..1) success, object request, Stdio.File socket) {
    if (!success) {
        werror("Failed to connect to %s:%d: %d\n", ip, port, socket->errno());
        request->websocket_accept()->close();
    } else {
        werror("Successfully connected to %O\n", socket);
        WebSocketBridge(socket, request->websocket_accept());
    }
}

void websocket_cb(array(string) protocols, object request) {
    Stdio.File socket = Stdio.File();

    werror("Connecting new WebSocket to %s:%d\n", ip, port);

    socket->async_connect(ip, port, connect_cb, request, socket);
}

int main(int argc, array(string) argv) {
    if (argc < 3) {
        werror("%s <ip> <port>\n", argv[0]);
        exit(1);
    }

    ip = argv[1];
    port = (int)argv[2];

    werror("Forwarding WebSockets to OCA device at %s:%d\n", ip, port);

    werror("Go to http://localhost:8080/\n");

    return -1;
}
#else
#error This Program requires WebSocket support. Support for WebSockets was added in Pike version 8.
#endif
