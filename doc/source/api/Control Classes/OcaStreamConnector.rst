OcaStreamConnector
==================

A online version of the AES70 specification of this class can be found at
`http://docs.deuso.de <http://docs.deuso.de/AES70-OCC/Control%20Classes/OcaStreamConnector.html>`_.

The class is a subclass of :class:`OcaAgent`.

This class defines the properties

======================================== ======================================== ========================================
                  Name                               JavaScript Type                             AES70 Type
======================================== ======================================== ========================================
              IDAdvertised                              Uint8Array                          OcaStreamConnectorID
              OwnerNetwork                                number                                   OcaONo
                  Pins                             Map<number, number>            OcaMap<OcaStreamConnectorPinIndex, OcaONo>
              SourceOrSink                     OcaNetworkMediaSourceOrSink              OcaNetworkMediaSourceOrSink
                 Status                          OcaStreamConnectorStatus                 OcaStreamConnectorStatus
                Streams                           Map<number, OcaStream>             OcaMap<OcaStreamIndex, OcaStream>
======================================== ======================================== ========================================

Furthermore, it inherits the properties ClassID, ClassVersion, ObjectNumber, Lockable, Role, Label, Owner, IDAdvertised, OwnerNetwork, Pins, SourceOrSink, Status and Streams.

.. js:autoclass:: OcaStreamConnector(objectNumber, device)
  :members:
