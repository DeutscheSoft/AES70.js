OcaNetworkSignalChannel
=======================

A online version of the AES70 specification of this class can be found at
`http://docs.deuso.de <http://docs.deuso.de/AES70-OCC/Control%20Classes/OcaNetworkSignalChannel.html>`_.

The class is a subclass of :class:`OcaWorker`.

This class defines the properties

======================================== ======================================== ========================================
                  Name                               JavaScript Type                             AES70 Type
======================================== ======================================== ========================================
             ConnectorPins                         Map<number, number>            OcaMap<OcaONo, OcaStreamConnectorPinIndex>
              IDAdvertised                              Uint8Array                       OcaNetworkSignalChannelID
                Network                                   number                                   OcaONo
            RemoteChannelID                             Uint8Array                       OcaNetworkSignalChannelID
              SourceOrSink                     OcaNetworkMediaSourceOrSink              OcaNetworkMediaSourceOrSink
                 Status                       OcaNetworkSignalChannelStatus            OcaNetworkSignalChannelStatus
======================================== ======================================== ========================================

Furthermore, it inherits the properties ClassID, ClassVersion, ObjectNumber, Lockable, Role, Enabled, Ports, Label, Owner, Latency, ConnectorPins, IDAdvertised, Network, RemoteChannelID, SourceOrSink and Status.

.. js:autoclass:: OcaNetworkSignalChannel(objectNumber, device)
  :members:
