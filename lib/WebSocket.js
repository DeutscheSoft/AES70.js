(function(OCA) {
 function websocket_incoming(ev) {
    this.read(ev.data);  
 }
 var WebSocketConnection = function(ws) {
    OCA.Connection.call(this);
    ws.binaryType = "arraybuffer";
    ws.onmessage = websocket_incoming.bind(this);
    this.ws = ws;
 };
 WebSocketConnection.prototype = Object.create(OCA.Connection.prototype);
 WebSocketConnection.prototype.write = function(buf) {
    this.ws.send(buf);
 };
 OCA.WebSocketConnection = WebSocketConnection;
})(this.OCA || (this.OCA = {}));
