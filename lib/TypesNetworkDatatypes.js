/*
 * This file has been generated. Please do not modify
 * it directly.
 *
 */
(function(w, module) {
var f = function(w, OCA) {
 var SP = w.SP;
/*!
 *! ID (name or address) of network host found by the discovery process.
 */
/* typedef string OcaNetworkHostID; */

/*!
 *! ID (name or GUID) of network node. There may be one or more nodes per
 *! host. Nodes offer media network services, and are what is discovered
 *! by discovery processes. Each instance of <b>OcaNetwork </b>(or one of
 *! its subclasses) is a node.
 */
/* typedef string OcaNetworkNodeID; */

/*!
 *! Generic network address.
 */
/* typedef string OcaNetworkAddress; */

/*!
 *! Public ID of a stream. Name or number, depending on transport
 *! architecture being used.
 */
/* typedef string OcaStreamID; */

/*!
 *! Internal handle of a stream.
 */
/* typedef int OcaStreamIndex; */

/*!
 *! Media stream parameters. Definition is media transport type dependent.
 *! Appropriate subclasses will be defined for specific X210 adaptations.
 */
/* typedef string OcaStreamParameters; */

/*!
 *! Public ID of a network stream connector. Name or number, depending on
 *! transport architecture being used.
 */
/* typedef string OcaStreamConnectorID; */

/*!
 *! Internal handle of a connector pin.
 */
/* typedef int OcaStreamConnectorPinIndex; */

/*!
 *! External ID of a signal channel. Name or number, depending on
 *! transport architecture being used.
 */
/* typedef string OcaNetworkSignalChannelID; */

OCA.OcaEncoding = SP.enum({
    None: 0,
    Pcm16: 1,
    Pcm24: 2,
    Pcm32: 3,
});


/*!
 *! Network status enum.
 */
OCA.OcaNetworkStatus = SP.enum({
    Unknown: 0,
    Ready: 1,
    StartingUp: 2,
    Stopped: 3,
});


/*!
 *! Types of layer 2 networks.
 */
OCA.OcaNetworkLinkType = SP.enum({
    None: 0,
    EthernetWired: 1,
    EthernetWireless: 2,
    USB: 3,
    SerialP2P: 4,
});


/*!
 *! Media transport protocols available.
 */
OCA.OcaNetworkMediaProtocol = SP.enum({
    None: 0,
    AV3: 1,
    AVBTP: 2,
    Dante: 3,
    Cobranet: 4,
    AES67: 5,
    SMPTEAudio: 6,
    LiveWire: 7,
});


/*!
 *! Network control protocols available.
 */
OCA.OcaNetworkControlProtocol = SP.enum({
    None: 0,
    OCP01: 1,
    OCP02: 2,
    OCP03: 3,
});


/*!
 *! Type of media endpoint: unicast or multicast.
 */
OCA.OcaStreamType = SP.enum({
    None: 0,
    Unicast: 1,
    Multicast: 2,
});


/*!
 *! Status options for a stream.
 */
OCA.OcaStreamStatus = SP.enum({
    NotConnected: 0,
    Connected: 1,
    Paused: 2,
});


/*!
 *! Status options for a stream connector.
 */
OCA.OcaStreamConnectorStatus = SP.enum({
    NotAvailable: 0,
    Idle: 1,
    Connected: 2,
    Paused: 3,
});


/*!
 *! Status options for a stream.
 */
OCA.OcaNetworkSignalChannelStatus = SP.enum({
    NotConnected: 0,
    Connected: 1,
    Muted: 2,
});


/*!
 *! enum that describes whether a port is a source (= sends program into
 *! the network; "talker") or sink (=receives program from the network;
 *! "listener")
 */
OCA.OcaNetworkMediaSourceOrSink = SP.enum({
    None: 0,
    Source: 1,
    Sink: 2,
});


/*!
 *! Identifier that specifies the system interface used by a network.
 */
OCA.OcaNetworkSystemInterfaceID = function(SystemInterfaceHandle, MyNetworkAddress) {
    this.SystemInterfaceHandle = SystemInterfaceHandle;
    this.MyNetworkAddress = MyNetworkAddress;
};
OCA.OcaNetworkSystemInterfaceID.prototype = {
    signature: new SP.signature(SP.BLOB, SP.BLOB),
    _values : function() {
        return [ this.SystemInterfaceHandle, this.MyNetworkAddress ];
    },
};

/*!
 *! A signal source or sink connector at the far end of a stream -
 *! normally, in another device. Not all of the fields of this datatype
 *! need be used. The fields used will depend on remote device type, media
 *! transport network type, and media transport implementation. Normal
 *! usage scenarios are: <ol> <li><b><u>Unicast input or output</u></b>:
 *! The <b>OcaStream </b>object is instantiated in an
 *! <b>OcaStreamConnector </b>object in the local device, and it links to
 *! an <b>OcaStreamConnector </b>object in a remote device. </li>
 *! <li><b><u>Multicast input</u></b><u>:</u> The <b>OcaStream </b>object
 *! is instantiated in an <b>OcaStreamConnector </b>object in the local
 *! device, and, it may or may not link to an <b>OcaStreamConnector
 *! </b>object in a remote device. </li> <li><b><u>Multicast
 *! output</u></b><u>:</u> The <b>OcaStream </b>object is instantiated in
 *! an <b>OcaStreamConnector </b>object in the local device, but in this
 *! case does <u>not </u>link to any specific remote connector object.
 *! </li> </ol>
 */
OCA.OcaStreamConnectorIdentification = function(HostID, NetworkAddress, NodeID, StreamConnectorID) {
    this.HostID = HostID;
    this.NetworkAddress = NetworkAddress;
    this.NodeID = NodeID;
    this.StreamConnectorID = StreamConnectorID;
};
OCA.OcaStreamConnectorIdentification.prototype = {
    signature: new SP.signature(SP.BLOB, SP.BLOB, SP.BLOB, SP.BLOB),
    _values : function() {
        return [ this.HostID, this.NetworkAddress, this.NodeID, this.StreamConnectorID ];
    },
};


/*!
 *! A single-channel or multichannel signal flow between a local stream
 *! connector (i.e. <b>OcaStreamConnector </b>instance) of an
 *! <b>OcaStreamNetwork </b>object in this node and another ("remote")
 *! stream connector. Normally, the remote stream connector is in another
 *! node. Each stream is unidirectional. With respect to the
 *! <b>OcaStreamNetwork </b>object in question, a stream is either: <ul>
 *! <li><i>Outbound: </i>A signal flow from an output connector port in
 *! the <b>OcaStreamNetwork </b>object to an external destination; or</li>
 *! <li><i>Inbound: </i>A signal flow from an external source to an
 *! <i>input </i>connector in the <b>OcaStreamNetwork </b>object.</li>
 *! </ul> An <b>OcaStream </b>object may represent either a unicast or a
 *! multicast stream. Any given <b>OcaStreamConnector </b>object may
 *! support multiple outbound flows, but not multiple inbound flows.
 */
OCA.OcaStream = function(ErrorNumber, IDAdvertised, Index, Label, LocalConnectorONo, Priority, RemoteConnectorIdentification, Secure, Status, StreamParameters, StreamType) {
    this.ErrorNumber = ErrorNumber;
    this.IDAdvertised = IDAdvertised;
    this.Index = Index;
    this.Label = Label;
    this.LocalConnectorONo = LocalConnectorONo;
    this.Priority = Priority;
    this.RemoteConnectorIdentification = RemoteConnectorIdentification;
    this.Secure = Secure;
    this.Status = Status;
    this.StreamParameters = StreamParameters;
    this.StreamType = StreamType;
};
OCA.OcaStream.prototype = {
    signature: new SP.signature(SP.UINT16, SP.BLOB, SP.UINT16, SP.STRING, SP.UINT32, SP.UINT16, OCA.OcaStreamConnectorIdentification, SP.BOOLEAN, OCA.OcaStreamStatus, SP.BLOB, OCA.OcaStreamType),
    _values : function() {
        return [ this.ErrorNumber, this.IDAdvertised, this.Index, this.Label, this.LocalConnectorONo, this.Priority, this.RemoteConnectorIdentification, this.Secure, this.Status, this.StreamParameters, this.StreamType ];
    },
};


/*!
 *! The statistics of the network.
 */
OCA.OcaNetworkStatistics = function(txPacketErrors, rxPacketErrors) {
    this.txPacketErrors = txPacketErrors;
    this.rxPacketErrors = rxPacketErrors;
};
OCA.OcaNetworkStatistics.prototype = {
    signature: new SP.signature(SP.UINT32, SP.UINT32),
    _values : function() {
        return [ this.txPacketErrors, this.rxPacketErrors ];
    },
};

OCA.Network = function() {
};
OCA.Network.prototype = {
    signature: new SP.signature(),
    _values : function() {
        return [  ];
    },
};

OCA.Media = function() {
};
OCA.Media.prototype = {
    signature: new SP.signature(),
    _values : function() {
        return [  ];
    },
};

};
if (module) module.exports = f;
else f(w, w.OCA || (w.OCA = {}));
})(this, module);
