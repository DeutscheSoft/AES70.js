(function(OCA) {
 function websocket_incoming(ev) {
    this.read(ev.data);  
 }
 var WebSocketConnection = function(ws) {
    OCA.ClientConnection.call(this);
    ws.binaryType = "arraybuffer";
    ws.onmessage = websocket_incoming.bind(this);
    this.ws = ws;
 };
 WebSocketConnection.prototype = Object.create(OCA.ClientConnection.prototype);
 WebSocketConnection.prototype.write = function(buf) {
    this.ws.send(buf);
 };
 OCA.WebSocketConnection = WebSocketConnection;
})(this.OCA || (this.OCA = {}));
